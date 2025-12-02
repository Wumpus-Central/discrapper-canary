n.d(t, {
    $G: () => j,
    AH: () => N,
    BU: () => F,
    BX: () => T,
    EX: () => et,
    Fr: () => q,
    Fz: () => z,
    Jl: () => Z,
    Ko: () => w,
    Pe: () => X,
    R6: () => Q,
    Tm: () => I,
    UP: () => M,
    Vj: () => R,
    WU: () => K,
    X$: () => ee,
    X3: () => J,
    b7: () => C,
    cl: () => V,
    g9: () => U,
    i3: () => B,
    jW: () => L,
    kG: () => W,
    nI: () => k,
    nl: () => $,
    qc: () => G,
    s5: () => A,
    zH: () => P,
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
    d = n(944486),
    f = n(246946),
    p = n(594174),
    _ = n(709054),
    m = n(51144),
    h = n(748610),
    g = n(945577),
    E = n(731267),
    b = n(532428);
n(723642);
var y = n(981631),
    O = n(388032);
function v(e, t, n) {
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
function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e) {
    switch (e.type) {
        case y.aib.GUILD:
            return e.guildId;
        case y.aib.GUILD_CHANNEL:
        case y.aib.CHANNEL:
        case y.aib.THREAD:
            return e.channelId;
        case y.aib.DMS:
            return e.type;
        case y.aib.FAVORITES:
            return y.I_8;
    }
}
function T(e) {
    let t = (0, g.ad)({ location: "getSearchHistoryStateId" });
    if (e.type === y.aib.DMS && t) {
        var n;
        return null != (n = d.Z.getChannelId(y.ME)) ? n : null;
    }
    return I(e);
}
function A(e) {
    switch (e.type) {
        case y.aib.GUILD_CHANNEL:
        case y.aib.GUILD:
        case y.aib.THREAD:
            return e.guildId;
        case y.aib.CHANNEL:
            var t;
            let n = s.Z.getChannel(e.channelId);
            return null != (t = null == n ? void 0 : n.guild_id) ? t : null;
        case y.aib.FAVORITES:
            return y.I_8;
        default:
            return null;
    }
}
function C(e) {
    return e.type === y.aib.GUILD || e.type === y.aib.GUILD_CHANNEL || e.type === y.aib.THREAD;
}
function N(e) {
    switch (e.type) {
        case y.aib.GUILD_CHANNEL:
        case y.aib.CHANNEL:
        case y.aib.THREAD:
            return e.channelId;
        default:
            return null;
    }
}
function P(e) {
    switch (e) {
        case y.QIO.MOST_RELEVANT:
            return {
                sort_by: "relevance",
                sort_order: "desc",
            };
        case y.QIO.OLDEST:
            return {
                sort_by: "timestamp",
                sort_order: "asc",
            };
        case y.QIO.NEWEST:
        default:
            return {
                sort_by: "timestamp",
                sort_order: "desc",
            };
    }
}
function R(e) {
    return null == e.sort_by || null == e.sort_order
        ? y.QIO.NEWEST
        : "relevance" === e.sort_by
          ? y.QIO.MOST_RELEVANT
          : "asc" === e.sort_order
            ? y.QIO.OLDEST
            : y.QIO.NEWEST;
}
function w(e) {
    switch (e) {
        case y.dCx.FILTER_FROM:
            return O.intl.string(O.t.E466pL);
        case y.dCx.FILTER_MENTIONS:
            return O.intl.string(O.t.BYvFWl);
        case y.dCx.FILTER_HAS:
            return O.intl.string(O.t.bhSYbc);
        case y.dCx.FILTER_BEFORE:
        case y.dCx.FILTER_ON:
        case y.dCx.FILTER_AFTER:
            return O.intl.string(O.t.Zbbc1E);
        case y.dCx.FILTER_IN:
            return O.intl.string(O.t["GpM+/7"]);
        case y.dCx.FILTER_FILE_TYPE:
            return O.intl.string(O.t.FXcAFe);
        case y.dCx.FILTER_FILE_NAME:
            return O.intl.string(O.t.uAbFDM);
        case y.dCx.FILTER_PINNED:
            return O.intl.string(O.t.UJxL3V);
        case y.dCx.FILTER_AUTHOR_TYPE:
            return O.intl.string(O.t.qCQzBl);
    }
}
let D = {
    [y.dCx.FILTER_BEFORE]: !0,
    [y.dCx.FILTER_AFTER]: !0,
    [y.dCx.FILTER_ON]: !0,
};
function x(e) {
    let t = b.ZP[e],
        n = null != t ? t.queryKey : null;
    return null == n && (n = "content"), n;
}
function L(e, t) {
    if (c.Z.didAgree(t)) {
        let t = p.default.getCurrentUser();
        null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed);
    }
}
function j(e) {
    let t = {};
    for (let [n, r] of (e.forEach((e) => {
        let { type: n } = e;
        if (y.TNx.test(n)) return;
        switch (n) {
            case y.dCx.ANSWER_BEFORE:
            case y.dCx.ANSWER_ON:
            case y.dCx.ANSWER_AFTER:
                let r = e.getData("start"),
                    i = e.getData("end");
                r && (t.min_id = _.default.fromTimestamp(r)), i && (t.max_id = _.default.fromTimestamp(i));
                return;
        }
        let a = x(n);
        null == t[a] && (t[a] = new Set());
        let o = t[a];
        switch (n) {
            case y.dCx.ANSWER_USERNAME_FROM:
            case y.dCx.ANSWER_USERNAME_MENTIONS:
                o.add(e.getData("userId"));
                break;
            case y.dCx.ANSWER_FILE_TYPE:
            case y.dCx.ANSWER_FILE_NAME:
                o.add(e.getMatch(1));
                break;
            case y.dCx.ANSWER_IN:
                var s;
                for (let t of null != (s = e.getData("channelIds")) ? s : []) o.add(t);
                break;
            case y.dCx.ANSWER_HAS:
                o.add(e.getData("has"));
                break;
            case y.dCx.ANSWER_PINNED:
                o.add(e.getData("pinned"));
                break;
            case y.dCx.ANSWER_AUTHOR_TYPE:
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
        let e = E.Z.getCurrentConfig({ location: "getSearchQueryFromTokens" });
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
function M(e) {
    var t;
    return (null == e ? void 0 : e.contents) != null && e.contents.length > 0
        ? null == e || null == (t = e.contents)
            ? void 0
            : t.map((e) => e.split("|").slice(1).join("|")).join(" ")
        : null == e
          ? void 0
          : e.content;
}
function k(e) {
    return e
        .map((e) => (e.type === a.ZP.NON_TOKEN_TYPE ? e.getFullMatch() : ""))
        .join(" ")
        .trim();
}
function U(e, t, n) {
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
function G(e, t) {
    let n,
        { currentToken: r, nextToken: i, previousToken: o } = (e = null != e ? e : {});
    if (0 === t.length)
        return {
            type: y.Sap.EMPTY,
            filter: null,
            token: null,
        };
    if (null == r)
        return {
            type: y.Sap.FILTER_ALL,
            filter: null,
            token: null,
        };
    if ((0, b._m)(r.type)) {
        if (null == i || i.type === a.ZP.NON_TOKEN_TYPE)
            return {
                type: y.Sap.FILTER,
                filter: r.type,
                token: i,
            };
        if (null != i && !y.KA4.test(i.type))
            return {
                type: y.Sap.FILTER,
                filter: r.type,
                token: null,
            };
    }
    return r.type === a.ZP.NON_TOKEN_TYPE && null != o && (0, b._m)(o.type)
        ? {
              type: y.Sap.FILTER,
              filter: o.type,
              token: r,
          }
        : (r.type === a.ZP.NON_TOKEN_TYPE && (n = r),
          {
              type: y.Sap.FILTER_ALL,
              filter: null,
              token: n,
          });
}
function Z(e) {
    if (null == e.match(/([\\" ])/g)) return e;
    {
        let t = e.replaceAll(/([\\"])/g, (e, t) => "\\".concat(t));
        return '"'.concat(t, '"');
    }
}
function B(e, t) {
    let n = [];
    return (
        i()(e).forEach((e) => {
            if (null == e || 0 === e.results.length) return;
            let r = e.group;
            n = n.concat(
                e.results.map((n) => {
                    let i = n.text;
                    if ((null != n.channel && (i = Z(i)), t.type === y.Sap.FILTER_ALL)) {
                        var a;
                        r = null != (a = n.group) ? a : r;
                        let e = b.ZP[r];
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
function F(e) {
    return e.reduce((e, t) => (null == t ? e : t.results.length + e), 0);
}
function V(e) {
    return null == e ? "" : e.map((e) => e.getFullMatch()).join("");
}
let H = new a.ZP(),
    Y = new a.ZP();
function W(e) {
    return H.tokenize(e);
}
function K() {
    H.clearCache(), Y.clearCache();
}
function z(e) {
    return null != e ? D[e] : null;
}
function q(e, t) {
    let n = y.TNx.test(e.type);
    return (null != t || !n) && (null == t || !n || !!y.KA4.test(t.type));
}
function X() {
    (0, b.WK)(), H.reset(), i()(b.ZP).forOwn((e, t) => H.addRule(S({ type: t }, e))), Y.reset();
    let e = (0, b.mh)();
    i()(e).forOwn((e, t) => Y.addRule(S({ type: t }, e))), h.Z.markSearchTokensRefreshed();
}
function Q(e) {
    return !!C(e) || (e.type === y.aib.DMS && !f.Z.hidePersonalInformation);
}
function J(e) {
    let t = e.name,
        n = !1;
    if (e.isGroupDM()) t = (0, o.F6)(e, p.default, u.Z);
    else if (e.isDM()) {
        let n = e.getRecipientId(),
            r = p.default.getUser(n),
            i = m.ZP.getUserTag(r);
        if (null == i) return null;
        t = i;
    } else {
        n = !e.isThread();
        let r = l.ZP.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
        (null == r ? void 0 : r.name) != null && (t = r.name);
    }
    return ((t = Z(t)), n) ? "#".concat(t) : t;
}
function $(e) {
    var t;
    if (e.isGroupDM()) return (0, o.F6)(e, p.default, u.Z);
    if (e.isDM()) {
        let t = e.getRecipientId(),
            n = p.default.getUser(t);
        return m.ZP.getUserTag(n);
    }
    let n = l.ZP.getTextChannelNameDisambiguations(e.getGuildId())[e.id];
    return null != (t = null == n ? void 0 : n.name) ? t : e.name;
}
function ee() {
    var e, t;
    return null != (t = null == (e = p.default.getCurrentUser()) ? void 0 : e.isStaff()) && t;
}
function et(e) {
    let t = Y.tokenize(e),
        n = [];
    t.forEach((e) => {
        e.type !== y.dCx.FILTER_IN && e.type !== y.dCx.ANSWER_IN && n.push(e);
    });
    let r = "";
    return (
        n.forEach((e) => {
            r += e.getFullMatch();
        }),
        r.trim()
    );
}
