n.d(t, {
    $G: () => b,
    BU: () => I,
    Fr: () => R,
    Fz: () => C,
    Ko: () => h,
    Pe: () => P,
    R6: () => w,
    WU: () => N,
    cl: () => T,
    g9: () => y,
    jW: () => E,
    kG: () => A,
    qc: () => O,
    zV: () => v
}),
    n(35282),
    n(388685),
    n(781311);
var r = n(392711),
    i = n.n(r),
    a = n(349033),
    o = n(999650),
    s = n(778877),
    l = n(731290),
    c = n(594174),
    u = n(709054),
    d = n(981631),
    f = n(388032);
function _(e, t, n) {
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e) {
    switch (e) {
        case d.dCx.FILTER_FROM:
            return f.intl.string(f.t.E466pK);
        case d.dCx.FILTER_MENTIONS:
            return f.intl.string(f.t.BYvFWl);
        case d.dCx.FILTER_HAS:
            return f.intl.string(f.t.bhSYbW);
        case d.dCx.FILTER_BEFORE:
        case d.dCx.FILTER_ON:
        case d.dCx.FILTER_AFTER:
            return f.intl.string(f.t.Zbbc1N);
        case d.dCx.FILTER_IN:
            return f.intl.string(f.t['GpM+//']);
        case d.dCx.FILTER_FILE_TYPE:
            return f.intl.string(f.t.FXcAFR);
        case d.dCx.FILTER_FILE_NAME:
            return f.intl.string(f.t.uAbFDA);
        case d.dCx.FILTER_PINNED:
            return f.intl.string(f.t.UJxL3d);
    }
}
let m = {
    [d.dCx.FILTER_BEFORE]: !0,
    [d.dCx.FILTER_AFTER]: !0,
    [d.dCx.FILTER_ON]: !0
};
function g(e) {
    let t = o.ZP[e],
        n = null != t ? t.queryKey : null;
    return null == n && (n = 'content'), n;
}
function E(e, t) {
    if (l.Z.didAgree(t)) {
        let t = c.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function b(e) {
    let t = {};
    for (let [n, r] of (e.forEach((e) => {
        let { type: n } = e;
        if (d.TNx.test(n)) return;
        switch (n) {
            case d.dCx.ANSWER_BEFORE:
            case d.dCx.ANSWER_ON:
            case d.dCx.ANSWER_AFTER:
                let r = e.getData('start'),
                    i = e.getData('end');
                r && (t.min_id = u.default.fromTimestamp(r)), i && (t.max_id = u.default.fromTimestamp(i));
                return;
        }
        let a = g(n);
        null == t[a] && (t[a] = new Set());
        let o = t[a];
        switch (n) {
            case d.dCx.ANSWER_USERNAME_FROM:
            case d.dCx.ANSWER_USERNAME_MENTIONS:
                o.add(e.getData('userId'));
                break;
            case d.dCx.ANSWER_FILE_TYPE:
            case d.dCx.ANSWER_FILE_NAME:
                o.add(e.getMatch(1));
                break;
            case d.dCx.ANSWER_IN:
                o.add(e.getData('channel').id);
                break;
            case d.dCx.ANSWER_HAS:
                o.add(e.getData('has'));
                break;
            case d.dCx.ANSWER_PINNED:
                o.add(e.getData('pinned'));
                break;
            default:
                o.add(e.getFullMatch().trim());
        }
    }),
    Object.entries(t)))
        r instanceof Set && (t[n] = Array.from(r));
    return t.content && ((t.content = t.content.join(' ').trim()), t.content || delete t.content), t;
}
function y(e, t, n) {
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
function O(e, t) {
    let n,
        { currentToken: r, nextToken: i, previousToken: o } = (e = null != e ? e : {});
    if (0 === t.length)
        return {
            type: d.Sap.EMPTY,
            filter: null,
            token: null
        };
    if (null == r)
        return {
            type: d.Sap.FILTER_ALL,
            filter: null,
            token: null
        };
    if (d.TNx.test(r.type)) {
        if (null == i || i.type === a.ZP.NON_TOKEN_TYPE)
            return {
                type: d.Sap.FILTER,
                filter: r.type,
                token: i
            };
        if (null != i && !d.KA4.test(i.type))
            return {
                type: d.Sap.FILTER,
                filter: r.type,
                token: null
            };
    }
    return r.type === a.ZP.NON_TOKEN_TYPE && null != o && d.TNx.test(o.type)
        ? {
              type: d.Sap.FILTER,
              filter: o.type,
              token: r
          }
        : (r.type === a.ZP.NON_TOKEN_TYPE && (n = r),
          {
              type: d.Sap.FILTER_ALL,
              filter: null,
              token: n
          });
}
function v(e, t) {
    let n = [];
    return (
        i()(e).forEach((e) => {
            if (null == e || 0 === e.results.length) return;
            let r = e.group;
            n = n.concat(
                e.results.map((e) => {
                    let n = e.text;
                    if (t.type === d.Sap.FILTER_ALL) {
                        var i;
                        r = null != (i = e.group) ? i : r;
                        let t = o.ZP[r];
                        (null == t ? void 0 : t.key) != null && (null == t ? void 0 : t.key) !== '' && (n = ''.concat(t.key, ' ').concat(n));
                    }
                    return t.type === d.Sap.FILTER && t.filter === d.dCx.FILTER_IN && null != e.channel && e.text.includes(' ') && (n = '"'.concat(n, '"')), n;
                })
            );
        }),
        n.filter((e) => e)
    );
}
function I(e) {
    return e.reduce((e, t) => (null == t ? e : t.results.length + e), 0);
}
function T(e) {
    return null == e ? '' : e.map((e) => e.getFullMatch()).join('');
}
let S = new a.ZP();
function A(e) {
    return S.tokenize(e);
}
function N() {
    return S.clearCache();
}
function C(e) {
    return null != e ? m[e] : null;
}
function R(e, t) {
    let n = d.TNx.test(e.type);
    return (null != t || !n) && (null == t || !n || !!d.KA4.test(t.type));
}
function P() {
    (0, o.Pe)(), S.reset(), i()(o.ZP).forOwn((e, t) => S.addRule(p({ type: t }, e)));
}
function w(e) {
    let t = (0, s.a)({ location: 'isGuildOrDMSearchType' });
    return e === d.aib.GUILD || (e === d.aib.DMS && t);
}
