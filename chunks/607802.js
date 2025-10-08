n.d(t, {
    $G: () => D,
    AH: () => S,
    BU: () => G,
    Fr: () => Y,
    Fz: () => H,
    Jl: () => k,
    Ko: () => N,
    Pe: () => W,
    R6: () => K,
    Tm: () => v,
    UP: () => L,
    Vj: () => C,
    WU: () => V,
    X$: () => X,
    X3: () => z,
    b7: () => T,
    cl: () => B,
    g9: () => M,
    i3: () => U,
    jW: () => w,
    kG: () => F,
    nI: () => x,
    nl: () => q,
    qc: () => j,
    s5: () => I,
    zH: () => A,
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
    m = n(731267),
    g = n(532428);
n(723642);
var E = n(981631),
    b = n(388032);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e) {
    switch (e.type) {
        case E.aib.GUILD:
            return e.guildId;
        case E.aib.GUILD_CHANNEL:
        case E.aib.CHANNEL:
        case E.aib.THREAD:
            return e.channelId;
        case E.aib.DMS:
            return e.type;
        case E.aib.FAVORITES:
            return E.I_8;
    }
}
function I(e) {
    switch (e.type) {
        case E.aib.GUILD_CHANNEL:
        case E.aib.GUILD:
        case E.aib.THREAD:
            return e.guildId;
        case E.aib.CHANNEL:
            var t;
            let n = s.Z.getChannel(e.channelId);
            return null != (t = null == n ? void 0 : n.guild_id) ? t : null;
        case E.aib.FAVORITES:
            return E.I_8;
        default:
            return null;
    }
}
function T(e) {
    return e.type === E.aib.GUILD || e.type === E.aib.GUILD_CHANNEL || e.type === E.aib.THREAD;
}
function S(e) {
    switch (e.type) {
        case E.aib.GUILD_CHANNEL:
        case E.aib.CHANNEL:
        case E.aib.THREAD:
            return e.channelId;
        default:
            return null;
    }
}
function A(e) {
    switch (e) {
        case E.QIO.MOST_RELEVANT:
            return {
                sort_by: "relevance",
                sort_order: "desc",
            };
        case E.QIO.OLDEST:
            return {
                sort_by: "timestamp",
                sort_order: "asc",
            };
        case E.QIO.NEWEST:
        default:
            return {
                sort_by: "timestamp",
                sort_order: "desc",
            };
    }
}
function C(e) {
    return null == e.sort_by || null == e.sort_order
        ? E.QIO.NEWEST
        : "relevance" === e.sort_by
          ? E.QIO.MOST_RELEVANT
          : "asc" === e.sort_order
            ? E.QIO.OLDEST
            : E.QIO.NEWEST;
}
function N(e) {
    switch (e) {
        case E.dCx.FILTER_FROM:
            return b.intl.string(b.t.E466pK);
        case E.dCx.FILTER_MENTIONS:
            return b.intl.string(b.t.BYvFWl);
        case E.dCx.FILTER_HAS:
            return b.intl.string(b.t.bhSYbW);
        case E.dCx.FILTER_BEFORE:
        case E.dCx.FILTER_ON:
        case E.dCx.FILTER_AFTER:
            return b.intl.string(b.t.Zbbc1N);
        case E.dCx.FILTER_IN:
            return b.intl.string(b.t["GpM+//"]);
        case E.dCx.FILTER_FILE_TYPE:
            return b.intl.string(b.t.FXcAFR);
        case E.dCx.FILTER_FILE_NAME:
            return b.intl.string(b.t.uAbFDA);
        case E.dCx.FILTER_PINNED:
            return b.intl.string(b.t.UJxL3d);
        case E.dCx.FILTER_AUTHOR_TYPE:
            return b.intl.string(b.t.qCQzBg);
    }
}
let R = {
    [E.dCx.FILTER_BEFORE]: !0,
    [E.dCx.FILTER_AFTER]: !0,
    [E.dCx.FILTER_ON]: !0,
};
function P(e) {
    let t = g.ZP[e],
        n = null != t ? t.queryKey : null;
    return null == n && (n = "content"), n;
}
function w(e, t) {
    if (c.Z.didAgree(t)) {
        let t = f.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function D(e) {
    let t = {};
    for (let [n, r] of (e.forEach((e) => {
        let { type: n } = e;
        if (E.TNx.test(n)) return;
        switch (n) {
            case E.dCx.ANSWER_BEFORE:
            case E.dCx.ANSWER_ON:
            case E.dCx.ANSWER_AFTER:
                let r = e.getData("start"),
                    i = e.getData("end");
                r && (t.min_id = _.default.fromTimestamp(r)), i && (t.max_id = _.default.fromTimestamp(i));
                return;
        }
        let a = P(n);
        null == t[a] && (t[a] = new Set());
        let o = t[a];
        switch (n) {
            case E.dCx.ANSWER_USERNAME_FROM:
            case E.dCx.ANSWER_USERNAME_MENTIONS:
                o.add(e.getData("userId"));
                break;
            case E.dCx.ANSWER_FILE_TYPE:
            case E.dCx.ANSWER_FILE_NAME:
                o.add(e.getMatch(1));
                break;
            case E.dCx.ANSWER_IN:
                var s;
                for (let t of null != (s = e.getData("channelIds")) ? s : []) o.add(t);
                break;
            case E.dCx.ANSWER_HAS:
                o.add(e.getData("has"));
                break;
            case E.dCx.ANSWER_PINNED:
                o.add(e.getData("pinned"));
                break;
            case E.dCx.ANSWER_AUTHOR_TYPE:
                o.add(e.getData("author_type"));
                break;
            default:
                o.add(e.getFullMatch().trim());
        }
    }),
    Object.entries(t)))
        r instanceof Set && (t[n] = Array.from(r));
    if (t.content) {
        delete t.contents;
        let e = m.Z.getCurrentConfig({ location: "getSearchQueryFromTokens" });
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
function L(e) {
    var t;
    return (null == e ? void 0 : e.contents) != null && e.contents.length > 0
        ? null == e || null == (t = e.contents)
            ? void 0
            : t.map((e) => e.split("|").slice(1).join("|")).join(" ")
        : null == e
          ? void 0
          : e.content;
}
function x(e) {
    return e
        .map((e) => (e.type === a.ZP.NON_TOKEN_TYPE ? e.getFullMatch() : ""))
        .join(" ")
        .trim();
}
function M(e, t, n) {
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
function j(e, t) {
    let n,
        { currentToken: r, nextToken: i, previousToken: o } = (e = null != e ? e : {});
    if (0 === t.length)
        return {
            type: E.Sap.EMPTY,
            filter: null,
            token: null,
        };
    if (null == r)
        return {
            type: E.Sap.FILTER_ALL,
            filter: null,
            token: null,
        };
    if ((0, g._m)(r.type)) {
        if (null == i || i.type === a.ZP.NON_TOKEN_TYPE)
            return {
                type: E.Sap.FILTER,
                filter: r.type,
                token: i,
            };
        if (null != i && !E.KA4.test(i.type))
            return {
                type: E.Sap.FILTER,
                filter: r.type,
                token: null,
            };
    }
    return r.type === a.ZP.NON_TOKEN_TYPE && null != o && (0, g._m)(o.type)
        ? {
              type: E.Sap.FILTER,
              filter: o.type,
              token: r,
          }
        : (r.type === a.ZP.NON_TOKEN_TYPE && (n = r),
          {
              type: E.Sap.FILTER_ALL,
              filter: null,
              token: n,
          });
}
function k(e) {
    if (null == e.match(/([\\" ])/g)) return e;
    {
        let t = e.replaceAll(/([\\"])/g, (e, t) => "\\".concat(t));
        return '"'.concat(t, '"');
    }
}
function U(e, t) {
    let n = [];
    return (
        i()(e).forEach((e) => {
            if (null == e || 0 === e.results.length) return;
            let r = e.group;
            n = n.concat(
                e.results.map((n) => {
                    let i = n.text;
                    if ((null != n.channel && (i = k(i)), t.type === E.Sap.FILTER_ALL)) {
                        var a;
                        r = null != (a = n.group) ? a : r;
                        let e = g.ZP[r];
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
function G(e) {
    return e.reduce((e, t) => (null == t ? e : t.results.length + e), 0);
}
function B(e) {
    return null == e ? "" : e.map((e) => e.getFullMatch()).join("");
}
let Z = new a.ZP();
function F(e) {
    return Z.tokenize(e);
}
function V() {
    return Z.clearCache();
}
function H(e) {
    return null != e ? R[e] : null;
}
function Y(e, t) {
    let n = E.TNx.test(e.type);
    return (null != t || !n) && (null == t || !n || !!E.KA4.test(t.type));
}
function W() {
    (0, g.WK)(), Z.reset(), i()(g.ZP).forOwn((e, t) => Z.addRule(O({ type: t }, e))), h.Z.markSearchTokensRefreshed();
}
function K(e) {
    return !!T(e) || (e.type === E.aib.DMS && !d.Z.hidePersonalInformation);
}
function z(e) {
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
    return ((t = k(t)), n) ? "#".concat(t) : t;
}
function q(e) {
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
function X() {
    var e, t;
    return null != (t = null == (e = f.default.getCurrentUser()) ? void 0 : e.isStaff()) && t;
}
