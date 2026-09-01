Object.defineProperty(t, "__esModule", { value: !0 }), (t.AbstractTimeExpressionParser = void 0);
let n = r(115004);
t.AbstractTimeExpressionParser = class {
    constructor(e = !1) {
        (this.cachedPrimaryPrefix = null),
            (this.cachedPrimarySuffix = null),
            (this.cachedPrimaryTimePattern = null),
            (this.cachedFollowingPhase = null),
            (this.cachedFollowingSuffix = null),
            (this.cachedFollowingTimePatten = null),
            (this.strictMode = e);
    }
    patternFlags() {
        return "i";
    }
    primaryPatternLeftBoundary() {
        return "(^|\\s|T|\\b)";
    }
    primarySuffix() {
        return "(?!/)(?=\\W|$)";
    }
    followingSuffix() {
        return "(?!/)(?=\\W|$)";
    }
    pattern(e) {
        return this.getPrimaryTimePatternThroughCache();
    }
    extract(e, t) {
        let r = this.extractPrimaryTimeComponents(e, t);
        if (!r) return t[0].match(/^\d{4}/) ? (t.index += 4) : (t.index += t[0].length), null;
        let n = t.index + t[1].length,
            a = t[0].substring(t[1].length),
            i = e.createParsingResult(n, a, r);
        t.index += t[0].length;
        let s = e.text.substring(t.index),
            o = this.getFollowingTimePatternThroughCache().exec(s);
        return a.match(/^\d{3,4}/) &&
            o &&
            (o[0].match(/^\s*([+-])\s*\d{2,4}$/) || o[0].match(/^\s*([+-])\s*\d{2}\W\d{2}/))
            ? null
            : !o || o[0].match(/^\s*([+-])\s*\d{3,4}$/)
              ? this.checkAndReturnWithoutFollowingPattern(i)
              : ((i.end = this.extractFollowingTimeComponents(e, o, i)),
                i.end && (i.text += o[0]),
                this.checkAndReturnWithFollowingPattern(i));
    }
    extractPrimaryTimeComponents(e, t, r = !1) {
        let a = e.createParsingComponents(),
            i = 0,
            s = null,
            o = parseInt(t[2]);
        if (o > 100) {
            if ((4 == t[2].length && null == t[3] && !t[6]) || this.strictMode || null != t[3]) return null;
            (i = o % 100), (o = Math.floor(o / 100));
        }
        if (o > 24) return null;
        if (null != t[3]) {
            if (1 == t[3].length && !t[6]) return null;
            i = parseInt(t[3]);
        }
        if (i >= 60) return null;
        if ((o > 12 && (s = n.Meridiem.PM), null != t[6])) {
            if (o > 12) return null;
            let e = t[6][0].toLowerCase();
            "a" == e && ((s = n.Meridiem.AM), 12 == o && (o = 0)),
                "p" == e && ((s = n.Meridiem.PM), 12 != o && (o += 12));
        }
        if (
            (a.assign("hour", o),
            a.assign("minute", i),
            null !== s
                ? a.assign("meridiem", s)
                : o < 12
                  ? a.imply("meridiem", n.Meridiem.AM)
                  : a.imply("meridiem", n.Meridiem.PM),
            null != t[5])
        ) {
            let e = parseInt(t[5].substring(0, 3));
            if (e >= 1e3) return null;
            a.assign("millisecond", e);
        }
        if (null != t[4]) {
            let e = parseInt(t[4]);
            if (e >= 60) return null;
            a.assign("second", e);
        }
        return a;
    }
    extractFollowingTimeComponents(e, t, r) {
        let a = e.createParsingComponents();
        if (null != t[5]) {
            let e = parseInt(t[5].substring(0, 3));
            if (e >= 1e3) return null;
            a.assign("millisecond", e);
        }
        if (null != t[4]) {
            let e = parseInt(t[4]);
            if (e >= 60) return null;
            a.assign("second", e);
        }
        let i = parseInt(t[2]),
            s = 0,
            o = -1;
        if (
            (null != t[3] ? (s = parseInt(t[3])) : i > 100 && ((s = i % 100), (i = Math.floor(i / 100))),
            s >= 60 || i > 24)
        )
            return null;
        if ((i >= 12 && (o = n.Meridiem.PM), null != t[6])) {
            if (i > 12) return null;
            let e = t[6][0].toLowerCase();
            "a" == e &&
                ((o = n.Meridiem.AM), 12 == i && ((i = 0), a.isCertain("day") || a.imply("day", a.get("day") + 1))),
                "p" == e && ((o = n.Meridiem.PM), 12 != i && (i += 12)),
                r.start.isCertain("meridiem") ||
                    (o == n.Meridiem.AM
                        ? (r.start.imply("meridiem", n.Meridiem.AM),
                          12 == r.start.get("hour") && r.start.assign("hour", 0))
                        : (r.start.imply("meridiem", n.Meridiem.PM),
                          12 != r.start.get("hour") && r.start.assign("hour", r.start.get("hour") + 12)));
        }
        return (
            a.assign("hour", i),
            a.assign("minute", s),
            o >= 0
                ? a.assign("meridiem", o)
                : r.start.isCertain("meridiem") && r.start.get("hour") > 12
                  ? r.start.get("hour") - 12 > i
                      ? a.imply("meridiem", n.Meridiem.AM)
                      : i <= 12 && (a.assign("hour", i + 12), a.assign("meridiem", n.Meridiem.PM))
                  : i > 12
                    ? a.imply("meridiem", n.Meridiem.PM)
                    : i <= 12 && a.imply("meridiem", n.Meridiem.AM),
            a.date().getTime() < r.start.date().getTime() && a.imply("day", a.get("day") + 1),
            a
        );
    }
    checkAndReturnWithoutFollowingPattern(e) {
        if (e.text.match(/^\d$/) || e.text.match(/^\d\d\d+$/) || e.text.match(/\d[apAP]$/)) return null;
        let t = e.text.match(/[^\d:.](\d[\d.]+)$/);
        if (t) {
            let e = t[1];
            if (this.strictMode || (e.includes(".") && !e.match(/\d(\.\d{2})+$/)) || parseInt(e) > 24) return null;
        }
        return e;
    }
    checkAndReturnWithFollowingPattern(e) {
        if (e.text.match(/^\d+-\d+$/)) return null;
        let t = e.text.match(/[^\d:.](\d[\d.]+)\s*-\s*(\d[\d.]+)$/);
        if (t) {
            if (this.strictMode) return null;
            let e = t[1],
                r = t[2];
            if (r.includes(".") && !r.match(/\d(\.\d{2})+$/)) return null;
            let n = parseInt(r),
                a = parseInt(e);
            if (n > 24 || a > 24) return null;
        }
        return e;
    }
    getPrimaryTimePatternThroughCache() {
        var e;
        let t = this.primaryPrefix(),
            r = this.primarySuffix();
        return this.cachedPrimaryPrefix === t && this.cachedPrimarySuffix === r
            ? this.cachedPrimaryTimePattern
            : ((this.cachedPrimaryTimePattern =
                  ((e = this.primaryPatternLeftBoundary()),
                  RegExp(
                      `${e}${t}(\\d{1,4})(?:(?:\\.|:|\u{FF1A})(\\d{1,2})(?:(?::|\u{FF1A})(\\d{2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${r}`,
                      this.patternFlags(),
                  ))),
              (this.cachedPrimaryPrefix = t),
              (this.cachedPrimarySuffix = r),
              this.cachedPrimaryTimePattern);
    }
    getFollowingTimePatternThroughCache() {
        let e = this.followingPhase(),
            t = this.followingSuffix();
        return this.cachedFollowingPhase === e && this.cachedFollowingSuffix === t
            ? this.cachedFollowingTimePatten
            : ((this.cachedFollowingTimePatten = RegExp(
                  `^(${e})(\\d{1,4})(?:(?:\\.|\\:|\\\u{FF1A})(\\d{1,2})(?:(?:\\.|\\:|\\\u{FF1A})(\\d{1,2})(?:\\.(\\d{1,6}))?)?)?(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?${t}`,
                  "i",
              )),
              (this.cachedFollowingPhase = e),
              (this.cachedFollowingSuffix = t),
              this.cachedFollowingTimePatten);
    }
};
