n.d(t, {
    $G: () => L,
    AH: () => A,
    BU: () => B,
    Fr: () => W,
    Fz: () => Y,
    Jl: () => U,
    Ko: () => R,
    Pe: () => K,
    R6: () => z,
    Tm: () => I,
    UP: () => x,
    Vj: () => N,
    WU: () => H,
    X$: () => Q,
    X3: () => q,
    b7: () => S,
    cl: () => Z,
    g9: () => j,
    i3: () => G,
    jW: () => D,
    kG: () => V,
    nI: () => M,
    nl: () => X,
    qc: () => k,
    s5: () => T,
    zH: () => C,
}),
    n(35282),
    n(388685),
    n(781311),
    n(413496),
    n(433524),
    n(539854),
    n(804061),
    n(704826);
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
    f = n(594174),
    _ = n(709054),
    p = n(51144),
    h = n(748610),
    m = n(945577),
    g = n(731267),
    E = n(532428);
n(723642);
var b = n(981631),
    y = n(388032);
function O(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e) {
    switch (e.type) {
        case b.aib.GUILD:
            return e.guildId;
        case b.aib.GUILD_CHANNEL:
        case b.aib.CHANNEL:
        case b.aib.THREAD:
            return e.channelId;
        case b.aib.DMS:
            return e.type;
        case b.aib.FAVORITES:
            return b.I_8;
    }
}
function T(e) {
    switch (e.type) {
        case b.aib.GUILD_CHANNEL:
        case b.aib.GUILD:
        case b.aib.THREAD:
            return e.guildId;
        case b.aib.CHANNEL:
            var t;
            let n = s.Z.getChannel(e.channelId);
            return null != (t = null == n ? void 0 : n.guild_id) ? t : null;
        case b.aib.FAVORITES:
            return b.I_8;
        default:
            return null;
    }
}
function S(e) {
    return e.type === b.aib.GUILD || e.type === b.aib.GUILD_CHANNEL || e.type === b.aib.THREAD;
}
function A(e) {
    switch (e.type) {
        case b.aib.GUILD_CHANNEL:
        case b.aib.CHANNEL:
        case b.aib.THREAD:
            return e.channelId;
        default:
            return null;
    }
}
function C(e) {
    switch (e) {
        case b.QIO.MOST_RELEVANT:
            return {
                sort_by: "relevance",
                sort_order: "desc",
            };
        case b.QIO.OLDEST:
            return {
                sort_by: "timestamp",
                sort_order: "asc",
            };
        case b.QIO.NEWEST:
        default:
            return {
                sort_by: "timestamp",
                sort_order: "desc",
            };
    }
}
function N(e) {
    return null == e.sort_by || null == e.sort_order
        ? b.QIO.NEWEST
        : "relevance" === e.sort_by
          ? b.QIO.MOST_RELEVANT
          : "asc" === e.sort_order
            ? b.QIO.OLDEST
            : b.QIO.NEWEST;
}
function R(e) {
    switch (e) {
        case b.dCx.FILTER_FROM:
            return y.intl.string(y.t.E466pK);
        case b.dCx.FILTER_MENTIONS:
            return y.intl.string(y.t.BYvFWl);
        case b.dCx.FILTER_HAS:
            return y.intl.string(y.t.bhSYbW);
        case b.dCx.FILTER_BEFORE:
        case b.dCx.FILTER_ON:
        case b.dCx.FILTER_AFTER:
            return y.intl.string(y.t.Zbbc1N);
        case b.dCx.FILTER_IN:
            return y.intl.string(y.t["GpM+//"]);
        case b.dCx.FILTER_FILE_TYPE:
            return y.intl.string(y.t.FXcAFR);
        case b.dCx.FILTER_FILE_NAME:
            return y.intl.string(y.t.uAbFDA);
        case b.dCx.FILTER_PINNED:
            return y.intl.string(y.t.UJxL3d);
        case b.dCx.FILTER_AUTHOR_TYPE:
            return y.intl.string(y.t.qCQzBg);
    }
}
let P = {
    [b.dCx.FILTER_BEFORE]: !0,
    [b.dCx.FILTER_AFTER]: !0,
    [b.dCx.FILTER_ON]: !0,
};
function w(e) {
    let t = E.ZP[e],
        n = null != t ? t.queryKey : null;
    return null == n && (n = "content"), n;
}
function D(e, t) {
    if (c.Z.didAgree(t)) {
        let t = f.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function L(e) {
    let t = {};
    for (let [n, r] of (e.forEach((e) => {
        let { type: n } = e;
        if (b.TNx.test(n)) return;
        switch (n) {
            case b.dCx.ANSWER_BEFORE:
            case b.dCx.ANSWER_ON:
            case b.dCx.ANSWER_AFTER:
                let r = e.getData("start"),
                    i = e.getData("end");
                r && (t.min_id = _.default.fromTimestamp(r)), i && (t.max_id = _.default.fromTimestamp(i));
                return;
        }
        let a = w(n);
        null == t[a] && (t[a] = new Set());
        let o = t[a];
        switch (n) {
            case b.dCx.ANSWER_USERNAME_FROM:
            case b.dCx.ANSWER_USERNAME_MENTIONS:
                o.add(e.getData("userId"));
                break;
            case b.dCx.ANSWER_FILE_TYPE:
            case b.dCx.ANSWER_FILE_NAME:
                o.add(e.getMatch(1));
                break;
            case b.dCx.ANSWER_IN:
                var s;
                for (let t of null != (s = e.getData("channelIds")) ? s : []) o.add(t);
                break;
            case b.dCx.ANSWER_HAS:
                o.add(e.getData("has"));
                break;
            case b.dCx.ANSWER_PINNED:
                o.add(e.getData("pinned"));
                break;
            default:
                o.add(e.getFullMatch().trim());
        }
    }),
    Object.entries(t)))
        r instanceof Set && (t[n] = Array.from(r));
    if (t.content) {
        delete t.contents;
        let e = g.Z.getCurrentConfig({ location: "getSearchQueryFromTokens" });
        if (e.enabled) {
            let n = [],
                r = e.brackets
                    ? RegExp("(\\[([^\\]]+)\\]|(?:\\S+))", "gu")
                    : e.quotes
                      ? RegExp('("([^"]+)"|(?:\\S+))', "gu")
                      : RegExp("(\\S+)", "gu");
            for (let i of t.content) {
                let t = i.match(r);
                if (null != t)
                    for (let r of t) {
                        let t = e.brackets && r.startsWith("[") && r.endsWith("]"),
                            i = e.quotes && r.startsWith('"') && r.endsWith('"'),
                            a = r.includes("://"),
                            o = t || i || a ? 0 : 2;
                        n.push("".concat(o, "|").concat(r));
                    }
            }
            n.length > 0 && (t.contents = n), delete t.content;
        } else (t.content = t.content.join(" ").trim()), t.content || delete t.content;
    }
    return t;
}
function x(e) {
    var t;
    return (null == e ? void 0 : e.contents) != null && e.contents.length > 0
        ? null == e || null == (t = e.contents)
            ? void 0
            : t.map((e) => e.split("|").slice(1).join("|")).join(" ")
        : null == e
          ? void 0
          : e.content;
}
function M(e) {
    return e
        .map((e) => (e.type === a.ZP.NON_TOKEN_TYPE ? e.getFullMatch() : ""))
        .join(" ")
        .trim();
}
function j(e, t, n) {
    let r,
        i,
        a = e.find((a, o) =>
            t >= a.start && t <= a.end && n >= a.start && n <= a.end
                ? (null != e[o + 1] && (i = e[o + 1]), !0)
                : ((r = a), !1),
        );
    return null == a
        ? null
        : {
              previousToken: r,
              currentToken: a,
              nextToken: i,
              focusOffset: t,
              anchorOffset: n,
          };
}
function k(e, t) {
    let n,
        { currentToken: r, nextToken: i, previousToken: o } = (e = null != e ? e : {});
    if (0 === t.length)
        return {
            type: b.Sap.EMPTY,
            filter: null,
            token: null,
        };
    if (null == r)
        return {
            type: b.Sap.FILTER_ALL,
            filter: null,
            token: null,
        };
    if ((0, E._m)(r.type)) {
        if (null == i || i.type === a.ZP.NON_TOKEN_TYPE)
            return {
                type: b.Sap.FILTER,
                filter: r.type,
                token: i,
            };
        if (null != i && !b.KA4.test(i.type))
            return {
                type: b.Sap.FILTER,
                filter: r.type,
                token: null,
            };
    }
    return r.type === a.ZP.NON_TOKEN_TYPE && null != o && (0, E._m)(o.type)
        ? {
              type: b.Sap.FILTER,
              filter: o.type,
              token: r,
          }
        : (r.type === a.ZP.NON_TOKEN_TYPE && (n = r),
          {
              type: b.Sap.FILTER_ALL,
              filter: null,
              token: n,
          });
}
function U(e) {
    if (null == e.match(/([\\" ])/g)) return e;
    {
        let t = e.replaceAll(/([\\"])/g, (e, t) => "\\".concat(t));
        return '"'.concat(t, '"');
    }
}
function G(e, t) {
    let n = [];
    return (
        i()(e).forEach((e) => {
            if (null == e || 0 === e.results.length) return;
            let r = e.group;
            n = n.concat(
                e.results.map((n) => {
                    let i = n.text;
                    if ((null != n.channel && (i = U(i)), t.type === b.Sap.FILTER_ALL)) {
                        var a;
                        r = null != (a = n.group) ? a : r;
                        let e = E.ZP[r];
                        (null == e ? void 0 : e.key) != null &&
                            (null == e ? void 0 : e.key) !== "" &&
                            (i = "".concat(e.key, " ").concat(i));
                    }
                    return {
                        result: n,
                        group: e.group,
                        resultText: i,
                    };
                }),
            );
        }),
        n.filter((e) => {
            let { resultText: t } = e;
            return t;
        })
    );
}
function B(e) {
    return e.reduce((e, t) => (null == t ? e : t.results.length + e), 0);
}
function Z(e) {
    return null == e ? "" : e.map((e) => e.getFullMatch()).join("");
}
let F = new a.ZP();
function V(e) {
    return F.tokenize(e);
}
function H() {
    return F.clearCache();
}
function Y(e) {
    return null != e ? P[e] : null;
}
function W(e, t) {
    let n = b.TNx.test(e.type);
    return (null != t || !n) && (null == t || !n || !!b.KA4.test(t.type));
}
function K() {
    (0, E.WK)(), F.reset(), i()(E.ZP).forOwn((e, t) => F.addRule(v({ type: t }, e))), h.Z.markSearchTokensRefreshed();
}
function z(e) {
    if (S(e)) return !0;
    {
        let t = (0, m.ad)({ location: "isChannelFilterSupported" }) || !1;
        return e.type === b.aib.DMS && !d.Z.hidePersonalInformation && t;
    }
}
function q(e) {
    let t = e.name,
        n = !1;
    if (e.isGroupDM()) t = (0, o.F6)(e, f.default, u.Z);
    else if (e.isDM()) {
        let n = e.getRecipientId(),
            r = f.default.getUser(n),
            i = p.ZP.getUserTag(r);
        if (null == i) return null;
        t = i;
    } else {
        n = !e.isThread();
        let r = l.ZP.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
        (null == r ? void 0 : r.name) != null && (t = r.name);
    }
    return ((t = U(t)), n) ? "#".concat(t) : t;
}
function X(e) {
    var t;
    if (e.isGroupDM()) return (0, o.F6)(e, f.default, u.Z);
    if (e.isDM()) {
        let t = e.getRecipientId(),
            n = f.default.getUser(t);
        return p.ZP.getUserTag(n);
    }
    let n = l.ZP.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
    return null != (t = null == n ? void 0 : n.name) ? t : e.name;
}
function Q() {
    var e, t;
    return null != (t = null == (e = f.default.getCurrentUser()) ? void 0 : e.isStaff()) && t;
}
