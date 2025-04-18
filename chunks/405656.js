n.d(t, {
    $G: () => E,
    BU: () => O,
    Fr: () => C,
    Fz: () => A,
    Ko: () => p,
    Pe: () => R,
    WU: () => N,
    cl: () => I,
    g9: () => b,
    jW: () => g,
    kG: () => T,
    qc: () => y,
    zV: () => v
}),
    n(35282),
    n(388685),
    n(781311);
var r = n(392711),
    i = n.n(r),
    a = n(349033),
    o = n(999650),
    s = n(731290),
    l = n(594174),
    c = n(709054),
    u = n(981631),
    d = n(388032);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e) {
    switch (e) {
        case u.dCx.FILTER_FROM:
            return d.NW.string(d.t.E466pK);
        case u.dCx.FILTER_MENTIONS:
            return d.NW.string(d.t.BYvFWl);
        case u.dCx.FILTER_HAS:
            return d.NW.string(d.t.bhSYbW);
        case u.dCx.FILTER_BEFORE:
        case u.dCx.FILTER_ON:
        case u.dCx.FILTER_AFTER:
            return d.NW.string(d.t.Zbbc1N);
        case u.dCx.FILTER_IN:
            return d.NW.string(d.t['GpM+//']);
        case u.dCx.FILTER_FILE_TYPE:
            return d.NW.string(d.t.FXcAFR);
        case u.dCx.FILTER_FILE_NAME:
            return d.NW.string(d.t.uAbFDA);
        case u.dCx.FILTER_PINNED:
            return d.NW.string(d.t.UJxL3d);
    }
}
let h = {
    [u.dCx.FILTER_BEFORE]: !0,
    [u.dCx.FILTER_AFTER]: !0,
    [u.dCx.FILTER_ON]: !0
};
function m(e) {
    let t = o.ZP[e],
        n = null != t ? t.queryKey : null;
    return null == n && (n = 'content'), n;
}
function g(e, t) {
    if (s.Z.didAgree(t)) {
        let t = l.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function E(e) {
    let t = {};
    for (let [n, r] of (e.forEach((e) => {
        let { type: n } = e;
        if (u.TNx.test(n)) return;
        switch (n) {
            case u.dCx.ANSWER_BEFORE:
            case u.dCx.ANSWER_ON:
            case u.dCx.ANSWER_AFTER:
                let r = e.getData('start'),
                    i = e.getData('end');
                r && (t.min_id = c.default.fromTimestamp(r)), i && (t.max_id = c.default.fromTimestamp(i));
                return;
        }
        let a = m(n);
        null == t[a] && (t[a] = new Set());
        let o = t[a];
        switch (n) {
            case u.dCx.ANSWER_USERNAME_FROM:
            case u.dCx.ANSWER_USERNAME_MENTIONS:
                o.add(e.getData('userId'));
                break;
            case u.dCx.ANSWER_FILE_TYPE:
            case u.dCx.ANSWER_FILE_NAME:
                o.add(e.getMatch(1));
                break;
            case u.dCx.ANSWER_IN:
                o.add(e.getData('channel').id);
                break;
            case u.dCx.ANSWER_HAS:
                o.add(e.getData('has'));
                break;
            case u.dCx.ANSWER_PINNED:
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
function b(e, t, n) {
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
function y(e, t) {
    let n,
        { currentToken: r, nextToken: i, previousToken: o } = (e = null != e ? e : {});
    if (0 === t.length)
        return {
            type: u.Sap.EMPTY,
            filter: null,
            token: null
        };
    if (null == r)
        return {
            type: u.Sap.FILTER_ALL,
            filter: null,
            token: null
        };
    if (u.TNx.test(r.type)) {
        if (null == i || i.type === a.ZP.NON_TOKEN_TYPE)
            return {
                type: u.Sap.FILTER,
                filter: r.type,
                token: i
            };
        if (null != i && !u.KA4.test(i.type))
            return {
                type: u.Sap.FILTER,
                filter: r.type,
                token: null
            };
    }
    return r.type === a.ZP.NON_TOKEN_TYPE && null != o && u.TNx.test(o.type)
        ? {
              type: u.Sap.FILTER,
              filter: o.type,
              token: r
          }
        : (r.type === a.ZP.NON_TOKEN_TYPE && (n = r),
          {
              type: u.Sap.FILTER_ALL,
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
                    if (t === u.Sap.FILTER_ALL) {
                        var i;
                        r = null != (i = e.group) ? i : r;
                        let t = o.ZP[r];
                        (null == t ? void 0 : t.key) != null && (null == t ? void 0 : t.key) !== '' && (n = ''.concat(t.key, ' ').concat(n));
                    }
                    return n;
                })
            );
        }),
        n.filter((e) => e)
    );
}
function O(e) {
    return e.reduce((e, t) => (null == t ? e : t.results.length + e), 0);
}
function I(e) {
    return null == e ? '' : e.map((e) => e.getFullMatch()).join('');
}
let S = new a.ZP();
function T(e) {
    return S.tokenize(e);
}
function N() {
    return S.clearCache();
}
function A(e) {
    return null != e ? h[e] : null;
}
function C(e, t) {
    let n = u.TNx.test(e.type);
    return (null != t || !n) && (null == t || !n || !!u.KA4.test(t.type));
}
function R() {
    (0, o.Pe)(), S.reset(), i()(o.ZP).forOwn((e, t) => S.addRule(_({ type: t }, e)));
}
