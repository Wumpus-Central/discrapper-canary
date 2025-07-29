(n.d(t, {
    $G: () => w,
    AH: () => T,
    BU: () => k,
    Fr: () => F,
    Fz: () => V,
    Ko: () => N,
    Pe: () => Z,
    R6: () => H,
    Tm: () => O,
    Vj: () => A,
    WJ: () => v,
    WU: () => B,
    X$: () => W,
    X3: () => Y,
    cl: () => j,
    g9: () => D,
    i3: () => M,
    jW: () => P,
    kG: () => G,
    qc: () => L,
    s5: () => I,
    zH: () => S
}),
    n(539854),
    n(997841),
    n(35282),
    n(388685),
    n(781311),
    n(804061),
    n(704826));
var r = n(392711),
    i = n.n(r);
n(913527);
var a = n(349033),
    o = n(933557),
    s = n(592125),
    l = n(984933),
    c = n(731290),
    u = n(699516),
    d = n(246946),
    _ = n(594174);
n(630388);
var f = n(709054),
    p = n(51144),
    h = n(945577),
    m = n(532428);
n(723642);
var g = n(981631),
    E = n(388032);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            }));
    }
    return e;
}
function O(e) {
    switch (e.type) {
        case g.aib.GUILD:
            return e.guildId;
        case g.aib.GUILD_CHANNEL:
        case g.aib.CHANNEL:
        case g.aib.THREAD:
            return e.channelId;
        case g.aib.DMS:
            return e.type;
        case g.aib.FAVORITES:
            return g.I_8;
    }
}
function v(e) {
    switch (e.type) {
        case g.aib.GUILD:
        case g.aib.GUILD_CHANNEL:
        case g.aib.THREAD:
            return e.guildId;
        case g.aib.CHANNEL:
            return e.channelId;
        case g.aib.DMS:
            return e.type;
        case g.aib.FAVORITES:
            return g.I_8;
    }
}
function I(e) {
    switch (e.type) {
        case g.aib.GUILD_CHANNEL:
        case g.aib.GUILD:
        case g.aib.THREAD:
            return e.guildId;
        case g.aib.CHANNEL:
            var t;
            let n = s.Z.getChannel(e.channelId);
            return null != (t = null == n ? void 0 : n.guild_id) ? t : null;
        case g.aib.FAVORITES:
            return g.I_8;
        default:
            return null;
    }
}
function T(e) {
    switch (e.type) {
        case g.aib.GUILD_CHANNEL:
        case g.aib.CHANNEL:
        case g.aib.THREAD:
            return e.channelId;
        default:
            return null;
    }
}
function S(e) {
    switch (e) {
        case g.QIO.MOST_RELEVANT:
            return {
                sort_by: 'relevance',
                sort_order: 'desc'
            };
        case g.QIO.OLDEST:
            return {
                sort_by: 'timestamp',
                sort_order: 'asc'
            };
        case g.QIO.NEWEST:
        default:
            return {
                sort_by: 'timestamp',
                sort_order: 'desc'
            };
    }
}
function A(e) {
    return null == e.sort_by || null == e.sort_order ? g.QIO.NEWEST : 'relevance' === e.sort_by ? g.QIO.MOST_RELEVANT : 'asc' === e.sort_order ? g.QIO.OLDEST : g.QIO.NEWEST;
}
function N(e) {
    switch (e) {
        case g.dCx.FILTER_FROM:
            return E.intl.string(E.t.E466pK);
        case g.dCx.FILTER_MENTIONS:
            return E.intl.string(E.t.BYvFWl);
        case g.dCx.FILTER_HAS:
            return E.intl.string(E.t.bhSYbW);
        case g.dCx.FILTER_BEFORE:
        case g.dCx.FILTER_ON:
        case g.dCx.FILTER_AFTER:
            return E.intl.string(E.t.Zbbc1N);
        case g.dCx.FILTER_IN:
            return E.intl.string(E.t['GpM+//']);
        case g.dCx.FILTER_FILE_TYPE:
            return E.intl.string(E.t.FXcAFR);
        case g.dCx.FILTER_FILE_NAME:
            return E.intl.string(E.t.uAbFDA);
        case g.dCx.FILTER_PINNED:
            return E.intl.string(E.t.UJxL3d);
    }
}
let C = {
    [g.dCx.FILTER_BEFORE]: !0,
    [g.dCx.FILTER_AFTER]: !0,
    [g.dCx.FILTER_ON]: !0
};
function R(e) {
    let t = m.ZP[e],
        n = null != t ? t.queryKey : null;
    return (null == n && (n = 'content'), n);
}
function P(e, t) {
    if (c.Z.didAgree(t)) {
        let t = _.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function w(e) {
    let t = {};
    for (let [n, r] of (e.forEach((e) => {
        let { type: n } = e;
        if (g.TNx.test(n)) return;
        switch (n) {
            case g.dCx.ANSWER_BEFORE:
            case g.dCx.ANSWER_ON:
            case g.dCx.ANSWER_AFTER:
                let r = e.getData('start'),
                    i = e.getData('end');
                (r && (t.min_id = f.default.fromTimestamp(r)), i && (t.max_id = f.default.fromTimestamp(i)));
                return;
        }
        let a = R(n);
        null == t[a] && (t[a] = new Set());
        let o = t[a];
        switch (n) {
            case g.dCx.ANSWER_USERNAME_FROM:
            case g.dCx.ANSWER_USERNAME_MENTIONS:
                o.add(e.getData('userId'));
                break;
            case g.dCx.ANSWER_FILE_TYPE:
            case g.dCx.ANSWER_FILE_NAME:
                o.add(e.getMatch(1));
                break;
            case g.dCx.ANSWER_IN:
                var s;
                for (let t of null != (s = e.getData('channels')) ? s : []) o.add(t.id);
                break;
            case g.dCx.ANSWER_HAS:
                o.add(e.getData('has'));
                break;
            case g.dCx.ANSWER_PINNED:
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
function D(e, t, n) {
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
function L(e, t) {
    let n,
        { currentToken: r, nextToken: i, previousToken: o } = (e = null != e ? e : {});
    if (0 === t.length)
        return {
            type: g.Sap.EMPTY,
            filter: null,
            token: null
        };
    if (null == r)
        return {
            type: g.Sap.FILTER_ALL,
            filter: null,
            token: null
        };
    if ((0, m._m)(r.type)) {
        if (null == i || i.type === a.ZP.NON_TOKEN_TYPE)
            return {
                type: g.Sap.FILTER,
                filter: r.type,
                token: i
            };
        if (null != i && !g.KA4.test(i.type))
            return {
                type: g.Sap.FILTER,
                filter: r.type,
                token: null
            };
    }
    return r.type === a.ZP.NON_TOKEN_TYPE && null != o && (0, m._m)(o.type)
        ? {
              type: g.Sap.FILTER,
              filter: o.type,
              token: r
          }
        : (r.type === a.ZP.NON_TOKEN_TYPE && (n = r),
          {
              type: g.Sap.FILTER_ALL,
              filter: null,
              token: n
          });
}
function x(e) {
    if (null == e.match(/([\\" ])/g)) return e;
    {
        let t = e.replaceAll(/([\\"])/g, (e, t) => '\\'.concat(t));
        return '"'.concat(t, '"');
    }
}
function M(e, t) {
    let n = [];
    return (
        i()(e).forEach((e) => {
            if (null == e || 0 === e.results.length) return;
            let r = e.group;
            n = n.concat(
                e.results.map((n) => {
                    let i = n.text;
                    if ((null != n.channel && (i = x(i)), t.type === g.Sap.FILTER_ALL)) {
                        var a;
                        r = null != (a = n.group) ? a : r;
                        let e = m.ZP[r];
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
function k(e) {
    return e.reduce((e, t) => (null == t ? e : t.results.length + e), 0);
}
function j(e) {
    return null == e ? '' : e.map((e) => e.getFullMatch()).join('');
}
let U = new a.ZP();
function G(e) {
    return U.tokenize(e);
}
function B() {
    return U.clearCache();
}
function V(e) {
    return null != e ? C[e] : null;
}
function F(e, t) {
    let n = g.TNx.test(e.type);
    return (null != t || !n) && (null == t || !n || !!g.KA4.test(t.type));
}
function Z() {
    ((0, m.WK)(), U.reset(), i()(m.ZP).forOwn((e, t) => U.addRule(y({ type: t }, e))));
}
function H(e) {
    if (e === g.aib.GUILD) return !0;
    {
        let t = (0, h.a)({ location: 'isChannelFilterSupported' });
        return e === g.aib.DMS && t && !d.Z.hidePersonalInformation;
    }
}
function Y(e) {
    let t = e.name,
        n = !1;
    if (e.isGroupDM()) t = (0, o.F6)(e, _.default, u.Z);
    else if (e.isDM()) {
        let n = e.getRecipientId(),
            r = _.default.getUser(n),
            i = p.ZP.getUserTag(r);
        if (null == i) return null;
        t = i;
    } else {
        n = !e.isThread();
        let r = l.ZP.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
        (null == r ? void 0 : r.name) != null && (t = r.name);
    }
    return ((t = x(t)), n) ? '#'.concat(t) : t;
}
function W() {
    var e, t;
    return null != (t = null == (e = _.default.getCurrentUser()) ? void 0 : e.isStaff()) && t;
}
