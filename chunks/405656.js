(n.d(t, {
    $G: () => y,
    BU: () => T,
    Fr: () => P,
    Fz: () => R,
    Ko: () => m,
    Pe: () => w,
    R6: () => D,
    WU: () => C,
    cl: () => S,
    g9: () => O,
    jW: () => b,
    kG: () => N,
    qc: () => v,
    zV: () => I
}),
    n(35282),
    n(388685),
    n(781311));
var r = n(392711),
    i = n.n(r),
    a = n(349033),
    o = n(999650),
    s = n(778877),
    l = n(731290),
    c = n(246946),
    u = n(594174),
    d = n(709054),
    f = n(981631),
    _ = n(388032);
function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            }));
    }
    return e;
}
function m(e) {
    switch (e) {
        case f.dCx.FILTER_FROM:
            return _.intl.string(_.t.E466pK);
        case f.dCx.FILTER_MENTIONS:
            return _.intl.string(_.t.BYvFWl);
        case f.dCx.FILTER_HAS:
            return _.intl.string(_.t.bhSYbW);
        case f.dCx.FILTER_BEFORE:
        case f.dCx.FILTER_ON:
        case f.dCx.FILTER_AFTER:
            return _.intl.string(_.t.Zbbc1N);
        case f.dCx.FILTER_IN:
            return _.intl.string(_.t['GpM+//']);
        case f.dCx.FILTER_FILE_TYPE:
            return _.intl.string(_.t.FXcAFR);
        case f.dCx.FILTER_FILE_NAME:
            return _.intl.string(_.t.uAbFDA);
        case f.dCx.FILTER_PINNED:
            return _.intl.string(_.t.UJxL3d);
    }
}
let g = {
    [f.dCx.FILTER_BEFORE]: !0,
    [f.dCx.FILTER_AFTER]: !0,
    [f.dCx.FILTER_ON]: !0
};
function E(e) {
    let t = o.ZP[e],
        n = null != t ? t.queryKey : null;
    return (null == n && (n = 'content'), n);
}
function b(e, t) {
    if (l.Z.didAgree(t)) {
        let t = u.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function y(e) {
    let t = {};
    for (let [n, r] of (e.forEach((e) => {
        let { type: n } = e;
        if (f.TNx.test(n)) return;
        switch (n) {
            case f.dCx.ANSWER_BEFORE:
            case f.dCx.ANSWER_ON:
            case f.dCx.ANSWER_AFTER:
                let r = e.getData('start'),
                    i = e.getData('end');
                (r && (t.min_id = d.default.fromTimestamp(r)), i && (t.max_id = d.default.fromTimestamp(i)));
                return;
        }
        let a = E(n);
        null == t[a] && (t[a] = new Set());
        let o = t[a];
        switch (n) {
            case f.dCx.ANSWER_USERNAME_FROM:
            case f.dCx.ANSWER_USERNAME_MENTIONS:
                o.add(e.getData('userId'));
                break;
            case f.dCx.ANSWER_FILE_TYPE:
            case f.dCx.ANSWER_FILE_NAME:
                o.add(e.getMatch(1));
                break;
            case f.dCx.ANSWER_IN:
                o.add(e.getData('channel').id);
                break;
            case f.dCx.ANSWER_HAS:
                o.add(e.getData('has'));
                break;
            case f.dCx.ANSWER_PINNED:
                o.add(e.getData('pinned'));
                break;
            default:
                o.add(e.getFullMatch().trim());
        }
    }),
    Object.entries(t)))
        r instanceof Set && (t[n] = Array.from(r));
    return (t.content && ((t.content = t.content.join(' ').trim()), t.content || delete t.content), t);
}
function O(e, t, n) {
    let r,
        i,
        a = e.find((a, o) => (t >= a.start && t <= a.end && n >= a.start && n <= a.end ? (null != e[o + 1] && (i = e[o + 1]), !0) : ((r = a), !1)));
    return null == a
        ? null
        : {
              previousToken: r,
              currentToken: a,
              nextToken: i,
              focusOffset: t,
              anchorOffset: n
          };
}
function v(e, t) {
    let n,
        { currentToken: r, nextToken: i, previousToken: s } = (e = null != e ? e : {});
    if (0 === t.length)
        return {
            type: f.Sap.EMPTY,
            filter: null,
            token: null
        };
    if (null == r)
        return {
            type: f.Sap.FILTER_ALL,
            filter: null,
            token: null
        };
    if ((0, o._m)(r.type)) {
        if (null == i || i.type === a.ZP.NON_TOKEN_TYPE)
            return {
                type: f.Sap.FILTER,
                filter: r.type,
                token: i
            };
        if (null != i && !f.KA4.test(i.type))
            return {
                type: f.Sap.FILTER,
                filter: r.type,
                token: null
            };
    }
    return r.type === a.ZP.NON_TOKEN_TYPE && null != s && (0, o._m)(s.type)
        ? {
              type: f.Sap.FILTER,
              filter: s.type,
              token: r
          }
        : (r.type === a.ZP.NON_TOKEN_TYPE && (n = r),
          {
              type: f.Sap.FILTER_ALL,
              filter: null,
              token: n
          });
}
function I(e, t) {
    let n = [];
    return (
        i()(e).forEach((e) => {
            if (null == e || 0 === e.results.length) return;
            let r = e.group;
            n = n.concat(
                e.results.map((e) => {
                    let n = e.text;
                    if (t.type === f.Sap.FILTER_ALL) {
                        var i;
                        r = null != (i = e.group) ? i : r;
                        let t = o.ZP[r];
                        (null == t ? void 0 : t.key) != null && (null == t ? void 0 : t.key) !== '' && (n = ''.concat(t.key, ' ').concat(n));
                    }
                    return (t.type === f.Sap.FILTER && t.filter === f.dCx.FILTER_IN && null != e.channel && e.text.includes(' ') && (n = '"'.concat(n, '"')), n);
                })
            );
        }),
        n.filter((e) => e)
    );
}
function T(e) {
    return e.reduce((e, t) => (null == t ? e : t.results.length + e), 0);
}
function S(e) {
    return null == e ? '' : e.map((e) => e.getFullMatch()).join('');
}
let A = new a.ZP();
function N(e) {
    return A.tokenize(e);
}
function C() {
    return A.clearCache();
}
function R(e) {
    return null != e ? g[e] : null;
}
function P(e, t) {
    let n = f.TNx.test(e.type);
    return (null != t || !n) && (null == t || !n || !!f.KA4.test(t.type));
}
function w() {
    ((0, o.WK)(), A.reset(), i()(o.ZP).forOwn((e, t) => A.addRule(h({ type: t }, e))));
}
function D(e) {
    if (e === f.aib.GUILD) return !0;
    {
        let t = (0, s.a)({ location: 'isChannelFilterSupported' });
        return e === f.aib.DMS && t && !c.Z.hidePersonalInformation;
    }
}
