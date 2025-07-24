(n.d(t, {
    $G: () => T,
    BU: () => R,
    Fr: () => M,
    Fz: () => x,
    Ko: () => y,
    Pe: () => k,
    R6: () => j,
    WU: () => L,
    X3: () => U,
    cl: () => P,
    g9: () => S,
    i3: () => C,
    jW: () => I,
    kG: () => D,
    qc: () => A
}),
    n(35282),
    n(388685),
    n(781311),
    n(804061),
    n(704826));
var r = n(392711),
    i = n.n(r),
    a = n(349033),
    o = n(999650),
    s = n(933557),
    l = n(778877),
    c = n(984933),
    u = n(731290),
    d = n(699516),
    _ = n(246946),
    f = n(594174),
    p = n(709054),
    h = n(51144),
    m = n(981631),
    g = n(388032);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            }));
    }
    return e;
}
function y(e) {
    switch (e) {
        case m.dCx.FILTER_FROM:
            return g.intl.string(g.t.E466pK);
        case m.dCx.FILTER_MENTIONS:
            return g.intl.string(g.t.BYvFWl);
        case m.dCx.FILTER_HAS:
            return g.intl.string(g.t.bhSYbW);
        case m.dCx.FILTER_BEFORE:
        case m.dCx.FILTER_ON:
        case m.dCx.FILTER_AFTER:
            return g.intl.string(g.t.Zbbc1N);
        case m.dCx.FILTER_IN:
            return g.intl.string(g.t['GpM+//']);
        case m.dCx.FILTER_FILE_TYPE:
            return g.intl.string(g.t.FXcAFR);
        case m.dCx.FILTER_FILE_NAME:
            return g.intl.string(g.t.uAbFDA);
        case m.dCx.FILTER_PINNED:
            return g.intl.string(g.t.UJxL3d);
    }
}
let O = {
    [m.dCx.FILTER_BEFORE]: !0,
    [m.dCx.FILTER_AFTER]: !0,
    [m.dCx.FILTER_ON]: !0
};
function v(e) {
    let t = o.ZP[e],
        n = null != t ? t.queryKey : null;
    return (null == n && (n = 'content'), n);
}
function I(e, t) {
    if (u.Z.didAgree(t)) {
        let t = f.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function T(e) {
    let t = {};
    for (let [n, r] of (e.forEach((e) => {
        let { type: n } = e;
        if (m.TNx.test(n)) return;
        switch (n) {
            case m.dCx.ANSWER_BEFORE:
            case m.dCx.ANSWER_ON:
            case m.dCx.ANSWER_AFTER:
                let r = e.getData('start'),
                    i = e.getData('end');
                (r && (t.min_id = p.default.fromTimestamp(r)), i && (t.max_id = p.default.fromTimestamp(i)));
                return;
        }
        let a = v(n);
        null == t[a] && (t[a] = new Set());
        let o = t[a];
        switch (n) {
            case m.dCx.ANSWER_USERNAME_FROM:
            case m.dCx.ANSWER_USERNAME_MENTIONS:
                o.add(e.getData('userId'));
                break;
            case m.dCx.ANSWER_FILE_TYPE:
            case m.dCx.ANSWER_FILE_NAME:
                o.add(e.getMatch(1));
                break;
            case m.dCx.ANSWER_IN:
                var s;
                for (let t of null != (s = e.getData('channels')) ? s : []) o.add(t.id);
                break;
            case m.dCx.ANSWER_HAS:
                o.add(e.getData('has'));
                break;
            case m.dCx.ANSWER_PINNED:
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
function S(e, t, n) {
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
function A(e, t) {
    let n,
        { currentToken: r, nextToken: i, previousToken: s } = (e = null != e ? e : {});
    if (0 === t.length)
        return {
            type: m.Sap.EMPTY,
            filter: null,
            token: null
        };
    if (null == r)
        return {
            type: m.Sap.FILTER_ALL,
            filter: null,
            token: null
        };
    if ((0, o._m)(r.type)) {
        if (null == i || i.type === a.ZP.NON_TOKEN_TYPE)
            return {
                type: m.Sap.FILTER,
                filter: r.type,
                token: i
            };
        if (null != i && !m.KA4.test(i.type))
            return {
                type: m.Sap.FILTER,
                filter: r.type,
                token: null
            };
    }
    return r.type === a.ZP.NON_TOKEN_TYPE && null != s && (0, o._m)(s.type)
        ? {
              type: m.Sap.FILTER,
              filter: s.type,
              token: r
          }
        : (r.type === a.ZP.NON_TOKEN_TYPE && (n = r),
          {
              type: m.Sap.FILTER_ALL,
              filter: null,
              token: n
          });
}
function N(e) {
    if (null == e.match(/([\\" ])/g)) return e;
    {
        let t = e.replaceAll(/([\\"])/g, (e, t) => '\\'.concat(t));
        return '"'.concat(t, '"');
    }
}
function C(e, t) {
    let n = [];
    return (
        i()(e).forEach((e) => {
            if (null == e || 0 === e.results.length) return;
            let r = e.group;
            n = n.concat(
                e.results.map((n) => {
                    let i = n.text;
                    if ((null != n.channel && (i = N(i)), t.type === m.Sap.FILTER_ALL)) {
                        var a;
                        r = null != (a = n.group) ? a : r;
                        let e = o.ZP[r];
                        (null == e ? void 0 : e.key) != null && (null == e ? void 0 : e.key) !== '' && (i = ''.concat(e.key, ' ').concat(i));
                    }
                    return {
                        result: n,
                        group: e.group,
                        resultText: i
                    };
                })
            );
        }),
        n.filter((e) => {
            let { resultText: t } = e;
            return t;
        })
    );
}
function R(e) {
    return e.reduce((e, t) => (null == t ? e : t.results.length + e), 0);
}
function P(e) {
    return null == e ? '' : e.map((e) => e.getFullMatch()).join('');
}
let w = new a.ZP();
function D(e) {
    return w.tokenize(e);
}
function L() {
    return w.clearCache();
}
function x(e) {
    return null != e ? O[e] : null;
}
function M(e, t) {
    let n = m.TNx.test(e.type);
    return (null != t || !n) && (null == t || !n || !!m.KA4.test(t.type));
}
function k() {
    ((0, o.WK)(), w.reset(), i()(o.ZP).forOwn((e, t) => w.addRule(b({ type: t }, e))));
}
function j(e) {
    if (e === m.aib.GUILD) return !0;
    {
        let t = (0, l.a)({ location: 'isChannelFilterSupported' });
        return e === m.aib.DMS && t && !_.Z.hidePersonalInformation;
    }
}
function U(e) {
    let t = e.name,
        n = !1;
    if (e.isGroupDM()) t = (0, s.F6)(e, f.default, d.Z);
    else if (e.isDM()) {
        let n = e.getRecipientId(),
            r = f.default.getUser(n),
            i = h.ZP.getUserTag(r);
        if (null == i) return null;
        t = i;
    } else {
        n = !e.isThread();
        let r = c.ZP.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
        (null == r ? void 0 : r.name) != null && (t = r.name);
    }
    return ((t = N(t)), n) ? '#'.concat(t) : t;
}
