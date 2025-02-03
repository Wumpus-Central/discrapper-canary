n.d(t, {
    $G: () => m,
    BU: () => y,
    Fr: () => N,
    Fz: () => A,
    Ko: () => f,
    Pe: () => C,
    WU: () => S,
    cl: () => I,
    g9: () => g,
    jW: () => h,
    kG: () => T,
    qc: () => E,
    zV: () => v
}),
    n(47120),
    n(724458);
var i = n(392711),
    r = n.n(i),
    a = n(349033),
    s = n(999650),
    o = n(731290),
    l = n(594174),
    u = n(709054),
    c = n(981631),
    d = n(388032);
function f(e) {
    switch (e) {
        case c.dCx.FILTER_FROM:
            return d.intl.string(d.t.E466pK);
        case c.dCx.FILTER_MENTIONS:
            return d.intl.string(d.t.BYvFWl);
        case c.dCx.FILTER_HAS:
            return d.intl.string(d.t.bhSYbW);
        case c.dCx.FILTER_BEFORE:
        case c.dCx.FILTER_ON:
        case c.dCx.FILTER_AFTER:
            return d.intl.string(d.t.Zbbc1N);
        case c.dCx.FILTER_IN:
            return d.intl.string(d.t['GpM+//']);
        case c.dCx.FILTER_FILE_TYPE:
            return d.intl.string(d.t.FXcAFR);
        case c.dCx.FILTER_FILE_NAME:
            return d.intl.string(d.t.uAbFDA);
        case c.dCx.FILTER_PINNED:
            return d.intl.string(d.t.UJxL3d);
    }
}
let _ = {
    [c.dCx.FILTER_BEFORE]: !0,
    [c.dCx.FILTER_AFTER]: !0,
    [c.dCx.FILTER_ON]: !0
};
function p(e) {
    let t = s.ZP[e],
        n = null != t ? t.queryKey : null;
    return null == n && (n = 'content'), n;
}
function h(e, t) {
    if (o.Z.didAgree(t)) {
        let t = l.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function m(e) {
    let t = {};
    for (let [n, i] of (e.forEach((e) => {
        let { type: n } = e;
        if (c.TNx.test(n)) return;
        switch (n) {
            case c.dCx.ANSWER_BEFORE:
            case c.dCx.ANSWER_ON:
            case c.dCx.ANSWER_AFTER:
                let i = e.getData('start'),
                    r = e.getData('end');
                i && (t.min_id = u.default.fromTimestamp(i)), r && (t.max_id = u.default.fromTimestamp(r));
                return;
        }
        let a = p(n);
        null == t[a] && (t[a] = new Set());
        let s = t[a];
        switch (n) {
            case c.dCx.ANSWER_USERNAME_FROM:
            case c.dCx.ANSWER_USERNAME_MENTIONS:
                s.add(e.getData('userId'));
                break;
            case c.dCx.ANSWER_FILE_TYPE:
            case c.dCx.ANSWER_FILE_NAME:
                s.add(e.getMatch(1));
                break;
            case c.dCx.ANSWER_IN:
                s.add(e.getData('channel').id);
                break;
            case c.dCx.ANSWER_HAS:
                s.add(e.getData('has'));
                break;
            case c.dCx.ANSWER_PINNED:
                s.add(e.getData('pinned'));
                break;
            default:
                s.add(e.getFullMatch().trim());
        }
    }),
    Object.entries(t)))
        i instanceof Set && (t[n] = Array.from(i));
    return t.content && ((t.content = t.content.join(' ').trim()), t.content || delete t.content), t;
}
function g(e, t, n) {
    let i, r;
    let a = e.find((a, s) => (t >= a.start && t <= a.end && n >= a.start && n <= a.end ? (null != e[s + 1] && (r = e[s + 1]), !0) : ((i = a), !1)));
    return null == a
        ? null
        : {
              previousToken: i,
              currentToken: a,
              nextToken: r,
              focusOffset: t,
              anchorOffset: n
          };
}
function E(e, t) {
    let n;
    let { currentToken: i, nextToken: r, previousToken: s } = (e = null != e ? e : {});
    if (0 === t.length)
        return {
            type: c.Sap.EMPTY,
            filter: null,
            token: null
        };
    if (null == i)
        return {
            type: c.Sap.FILTER_ALL,
            filter: null,
            token: null
        };
    if (c.TNx.test(i.type)) {
        if (null == r || r.type === a.ZP.NON_TOKEN_TYPE)
            return {
                type: c.Sap.FILTER,
                filter: i.type,
                token: r
            };
        if (null != r && !c.KA4.test(r.type))
            return {
                type: c.Sap.FILTER,
                filter: i.type,
                token: null
            };
    }
    return i.type === a.ZP.NON_TOKEN_TYPE && null != s && c.TNx.test(s.type)
        ? {
              type: c.Sap.FILTER,
              filter: s.type,
              token: i
          }
        : (i.type === a.ZP.NON_TOKEN_TYPE && (n = i),
          {
              type: c.Sap.FILTER_ALL,
              filter: null,
              token: n
          });
}
function v(e, t) {
    let n = [];
    return (
        r()(e).forEach((e) => {
            if (null == e || 0 === e.results.length) return;
            let i = e.group;
            n = n.concat(
                e.results.map((e) => {
                    let n = e.text;
                    if (t === c.Sap.FILTER_ALL) {
                        var r;
                        i = null !== (r = e.group) && void 0 !== r ? r : i;
                        let t = s.ZP[i];
                        (null == t ? void 0 : t.key) != null && (null == t ? void 0 : t.key) !== '' && (n = ''.concat(t.key, ' ').concat(n));
                    }
                    return n;
                })
            );
        }),
        n.filter((e) => e)
    );
}
function y(e) {
    return e.reduce((e, t) => (null == t ? e : t.results.length + e), 0);
}
function I(e) {
    return null == e ? '' : e.map((e) => e.getFullMatch()).join('');
}
let b = new a.ZP();
function T(e) {
    return b.tokenize(e);
}
function S() {
    return b.clearCache();
}
function A(e) {
    return null != e ? _[e] : null;
}
function N(e, t) {
    let n = c.TNx.test(e.type);
    return (null != t || !n) && (null == t || !n || !!c.KA4.test(t.type));
}
function C() {
    (0, s.Pe)(),
        b.reset(),
        r()(s.ZP).forOwn((e, t) =>
            b.addRule({
                type: t,
                ...e
            })
        );
}
