n.d(t, {
    Ej: () => em,
    Ni: () => Q,
    Pr: () => et,
    Qe: () => ed,
    WK: () => ep,
    ZP: () => eE,
    _m: () => eh,
    co: () => eg,
    fx: () => K,
}),
    n(388685),
    n(413496),
    n(433524),
    n(35282),
    n(781311),
    n(804061),
    n(704826),
    n(539854),
    n(290780),
    n(642613);
var r = n(658722),
    i = n.n(r),
    a = n(392711),
    o = n.n(a),
    s = n(913527),
    l = n.n(s),
    c = n(212819),
    u = n(933557),
    d = n(592125),
    f = n(984933),
    _ = n(699516),
    p = n(944486),
    h = n(246946),
    m = n(594174),
    g = n(483360),
    E = n(226951),
    b = n(51144),
    y = n(738018),
    O = n(719801),
    v = n(607802),
    I = n(612806),
    T = n(375123),
    S = n(129301),
    A = n(981631),
    C = n(388032);
function N(e, t, n) {
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
function R(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D() {
    return new Set(
        l()
            .months()
            .map((e) => e.toLowerCase()),
    );
}
function L() {
    return new Set(
        l()
            .weekdays()
            .map((e) => e.toLowerCase()),
    );
}
function x() {
    let e = new Date().getFullYear();
    return new Set(
        o()
            .range(2015, e + 1)
            .map((e) => e.toString()),
    );
}
function M(e, t) {
    return [e, e.clone().add(1, t)];
}
function k(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return M(l()().startOf(e).add(t, e), e);
}
function j(e, t, n) {
    return M(l()(e, t).local(), n);
}
function U() {
    return {
        [C.intl.string(C.t.HYiVER)]: () => k("day"),
        [C.intl.string(C.t.cu86KC)]: () => k("day", -1),
        [C.intl.string(C.t["FvBj//"])]: () => k("week"),
        [C.intl.string(C.t["20uWCw"])]: () => k("month"),
        [C.intl.string(C.t["dXC/ho"])]: () => k("year"),
    };
}
let G = "([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})",
    B = "\\d{4}",
    Z = "([0-9]{4})-([0-9]{1,2})",
    F = "([^\\d\\s]+)",
    V = RegExp("(?:\\s*(".concat(G, "|").concat(Z, "|").concat(B, "|").concat(F, "))"), "i"),
    H = RegExp("\\s*(true|false)", "i");
function Y(e) {
    return "".concat(e, ":");
}
function W(e) {
    return RegExp(Y(e), "i");
}
function K(e) {
    let t,
        n = e.getMatch(1),
        r = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
    return (
        null !=
            (t = A.Xyh.test(n)
                ? n
                : r(
                      n === A.ME
                          ? m.default.getCurrentUser()
                          : null != e.getMatch(4)
                            ? m.default.findByTag(e.getMatch(4))
                            : m.default.findByTag(e.getMatch(2), e.getMatch(3)),
                  )) && (e.setData("userId", t), !0)
    );
}
function z(e, t) {
    let n,
        r,
        i = e.getFullMatch().trim().toLowerCase(),
        a = U()[i];
    return (
        null != a
            ? ([n, r] = a())
            : D().has(i)
              ? ([n, r] = j(i, "MMMM", "month"))
              : L().has(i)
                ? ([n, r] = j(i, "dddd", "day"))
                : x().has(i)
                  ? ([n, r] = j(i, "YYYY", "year"))
                  : ([n, r] = j(i, A.b2L, "day")),
        !!(n.isValid() && r.isValid()) &&
            ("before" === t ? ((r = n), (n = null)) : "after" === t && ((n = r), (r = null)),
            e.setData("start", n),
            e.setData("end", r),
            !0)
    );
}
function q(e, t, n) {
    let r = f.ZP.getChannels(n)[f.sH].concat(f.ZP.getChannels(n)[f.Zb]),
        i = f.ZP.getTextChannelNameDisambiguations(n),
        a = I.Z.getCurrentConfig({ location: "guildChannelValidator" }).enabled,
        s = o()
            .chain(r)
            .map((e) => {
                let { channel: t } = e;
                return t;
            })
            .concat(a && null != n ? d.Z.getAllThreadsForGuild(n) : [])
            .filter((e) => {
                var n, r;
                return t === (null != (r = null == (n = i[e.id]) ? void 0 : n.name) ? r : e.name);
            })
            .value();
    return (
        (null == s ? void 0 : s.length) > 0 &&
        (e.setData(
            "channelIds",
            s.map((e) => e.id),
        ),
        !0)
    );
}
function X(e, t) {
    let n = Object.values(d.Z.getMutablePrivateChannels()).filter((e) => {
        if (t === (0, u.F6)(e, m.default, _.Z)) return !0;
        if (e.isDM()) {
            let n = e.getRecipientId(),
                r = m.default.getUser(n);
            return null != r && t === b.ZP.getUserTag(r);
        }
    });
    return (
        (null == n ? void 0 : n.length) > 0 &&
        (e.setData(
            "channelIds",
            n.map((e) => e.id),
        ),
        !0)
    );
}
function Q(e) {
    let t = e.getMatch(1);
    if (A.Xyh.test(t)) return e.setData("channelIds", [t]), !0;
    t.startsWith('"') && t.endsWith('"') && (t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t));
    let n = y.Z.getSelectedSearchContext();
    return (
        null != n &&
        ((0, v.b7)(n) ? q(e, t, n.guildId) : n.type === A.aib.DMS && !h.Z.hidePersonalInformation && X(e, t))
    );
}
function J(e) {
    let t = {
        [C.intl.string(C.t.ZNR2fn)]: "link",
        [C.intl.string(C.t["20uQR0"])]: "embed",
        [C.intl.string(C.t.L4lxyM)]: "poll",
        [C.intl.string(C.t.nrpA5O)]: "snapshot",
        [C.intl.string(C.t["AV/v6u"])]: "file",
        [C.intl.string(C.t.XM9XGB)]: "video",
        [C.intl.string(C.t.TNLcp6)]: "image",
        [C.intl.string(C.t.F8Wf0d)]: "sound",
        [C.intl.string(C.t.PJgX2t)]: "sticker",
    }[e.getMatch(1)];
    return null != t && "" !== t && (e.setData("has", t), !0);
}
function $(e) {
    let t = {
        [C.intl.string(C.t.tPZo4u)]: "user",
        [C.intl.string(C.t.JL7sRU)]: "bot",
        [C.intl.string(C.t.WjkIKS)]: "webhook",
    }[e.getMatch(1)];
    return null != t && "" !== t && (e.setData("author_type", t), !0);
}
function ee() {
    return [...Array.from(D()), ...Array.from(L()), ...Array.from(x()), ...Object.keys(U())];
}
function et() {
    return o().sample(ee());
}
function en(e, t, n) {
    return er(e, t, ee()).map((e) =>
        w(R({}, e), {
            group: n,
            key: "".concat(n, "-").concat(e.text),
        }),
    );
}
function er(e, t, n) {
    let r = e.toLocaleLowerCase();
    return o()(n)
        .filter((e) => i()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function ei(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [];
    e.forEach((e) => {
        let t = e.getData("channelIds");
        null != t && t.forEach((e) => n.push(e));
    });
    let r = (e) => {
            null == e || t.has(e.id) || (i.push(e), t.add(e.id));
        },
        i = [];
    return (
        n.forEach((e) => {
            let t = d.Z.getChannel(e);
            if (null != t)
                if (t.isDM()) {
                    let e = t.getRecipientId();
                    r(m.default.getUser(e));
                } else
                    t.isGroupDM() &&
                        t.recipients.forEach((e) => {
                            r(m.default.getUser(e));
                        });
        }),
        i
    );
}
function ea(e) {
    let { query: t, searchContext: n, maxResults: r = 10, tokens: i } = e,
        a = {
            query: (t = t.trim().split("#")[0]),
            limit: r,
            request: !1,
            boosters: (0, g.Cq)(c.h8.USER),
        },
        o = [];
    switch (n.type) {
        case A.aib.GUILD:
        case A.aib.GUILD_CHANNEL:
        case A.aib.THREAD:
            if (0 === t.length) {
                let e = [],
                    t = new Set(),
                    i = (n) => {
                        null == n ||
                            t.has(n.id) ||
                            _.Z.isBlockedOrIgnored(n.id) ||
                            (e.push({
                                user: n,
                                text: b.ZP.getUserTag(n),
                            }),
                            t.add(n.id));
                    },
                    a = p.Z.getCurrentlySelectedChannelId(n.guildId);
                return (
                    g.ZP.getRecentlyTalked(a, r).forEach((e) => {
                        let { record: t } = e;
                        return i(t);
                    }),
                    O.Z.getRecentMessageAuthorIds(n.guildId).forEach((e) => i(m.default.getUser(e))),
                    e.slice(0, r)
                );
            }
            o = g.ZP.queryGuildUsers(w(R({}, a), { guildId: n.guildId }));
            break;
        case A.aib.CHANNEL:
            o = g.ZP.queryChannelUsers(w(R({}, a), { channelId: n.channelId }));
            break;
        case A.aib.DMS:
            let s = ei(null != i ? i : []);
            if (null != s && s.length > 0) {
                let e = m.default.getCurrentUser();
                null != e && s.push(e),
                    (o = g.ZP.queryUsers(
                        w(R({}, a), {
                            users: s,
                            boosters: (0, g.Cq)(c.h8.USER),
                        }),
                    ));
            } else o = g.ZP.queryAllUsers(w(R({}, a), { boosters: (0, g.Cq)(c.h8.USER) }));
            break;
        default:
            return [];
    }
    let l = m.default.getCurrentUser(),
        u = t.toLowerCase().replace(/^@/, ""),
        d = null != l && t.length > 0 && (C.intl.string(C.t.Qf3ptr).startsWith(u) || A.ME.substr(1).startsWith(u)),
        f = o
            .filter((e) => {
                let { record: t } = e;
                return !_.Z.isBlockedOrIgnored(t.id) && (!d || t.id !== (null == l ? void 0 : l.id));
            })
            .map((e) => {
                let { record: t } = e;
                return {
                    text: b.ZP.getUserTag(t),
                    user: t,
                };
            });
    return (
        d &&
            f.unshift({
                text: A.ME,
                user: l,
            }),
        f
    );
}
function eo() {
    return !h.Z.hidePersonalInformation;
}
function es(e, t, n) {
    let r = g.ZP.queryGroupDMs({
            query: e,
            limit: t,
            fuzzy: !0,
            boosters: (0, g.Cq)(c.h8.GROUP_DM),
        }),
        i = g.ZP.queryDMChannels({
            query: e,
            limit: t,
            boosters: (0, g.Cq)(c.h8.USER),
        }),
        a = o()(r.concat(i))
            .sort(c.qU)
            .map((e) => {
                let { record: t, comparator: n } = e;
                return {
                    text: n,
                    channel: t,
                    key: null == t ? void 0 : t.id,
                };
            })
            .filter((e) => null != e.text && null != e.channel && null != e.key)
            .value();
    if (0 === e.length && n) {
        let e = p.Z.getChannelId(),
            t = d.Z.getChannel(e);
        if (null != t && t.isPrivate()) {
            let n = a.findIndex((t) => {
                let { channel: n } = t;
                return n.id === e;
            });
            if (-1 !== n) {
                let e = a[n];
                a.splice(n, 1), a.unshift(e);
            } else if (t.isGroupDM()) {
                let e = (0, u.F6)(t, m.default, _.Z);
                a.unshift({
                    text: e,
                    channel: t,
                    key: t.id,
                });
            } else if (t.isDM()) {
                let e = t.getRecipientId(),
                    n = m.default.getUser(e);
                if (null != n) {
                    let e = b.ZP.getUserTag(n);
                    a.unshift({
                        text: e,
                        channel: t,
                        key: t.id,
                    });
                }
            }
        }
    }
    return a.slice(0, t);
}
function el(e, t, n) {
    let r = I.Z.getCurrentConfig({ location: "getGuildChannelAutocompletions" }).enabled,
        i = g.ZP.queryChannels({
            query: e,
            type: f.sH,
            guildId: t,
            limit: 1 / 0,
            allowEmptyQueries: !0,
            allowSnowflake: !0,
            includeAllThreads: r,
            boosters: (0, g.Cq)(c.h8.TEXT_CHANNEL),
        })
            .concat(
                g.ZP.queryChannels({
                    query: e,
                    type: f.Zb,
                    guildId: t,
                    limit: 1 / 0,
                    allowEmptyQueries: !0,
                    allowSnowflake: !0,
                    boosters: (0, g.Cq)(c.h8.VOICE_CHANNEL),
                }),
            )
            .map((e) => {
                let { record: t } = e;
                return t;
            });
    if ((r || (i = i.filter((e) => !e.isThread())), 0 === e.length)) {
        let e = p.Z.getChannelId(t),
            n = i.find((t) => t.id === e);
        null != n && (i.splice(i.indexOf(n), 1), i.unshift(n));
    }
    let a = f.ZP.getTextChannelNameDisambiguations(t);
    return o()(i)
        .take(n)
        .map((e) => {
            var t, n;
            return {
                text: "".concat(null != (n = null == (t = a[e.id]) ? void 0 : t.name) ? n : e.name),
                channel: e,
                key: e.id,
            };
        })
        .value();
}
function ec(e) {
    let { query: t, searchContext: n, maxResults: r } = e;
    return ((t = t.trim()).startsWith('"') && t.endsWith('"')
        ? (t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t))
        : t.startsWith('"') && (t = t.substring(1).replaceAll(/\\(.)/g, (e, t) => t)),
    "#" === t[0] && (t = t.substring(1)),
    (0, v.b7)(n))
        ? el(t, n.guildId, r)
        : n.type !== A.aib.DMS || h.Z.hidePersonalInformation
          ? []
          : es(t, r, !0);
}
let eu = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var ed = (function (e) {
    return (e.FILTER = "FILTER"), (e.ANSWER = "ANSWER"), e;
})({});
function ef() {
    let e = [
            C.intl.string(C.t.ZNR2fn),
            C.intl.string(C.t["20uQR0"]),
            C.intl.string(C.t.L4lxyM),
            C.intl.string(C.t["AV/v6u"]),
            C.intl.string(C.t.XM9XGB),
            C.intl.string(C.t.TNLcp6),
            C.intl.string(C.t.F8Wf0d),
            C.intl.string(C.t.PJgX2t),
            C.intl.string(C.t.nrpA5O),
        ],
        t = [C.intl.string(C.t.tPZo4u), C.intl.string(C.t.JL7sRU), C.intl.string(C.t.WjkIKS)];
    return {
        [A.dCx.FILTER_FROM]: {
            regex: W(C.intl.string(C.t["1TUdFh"])),
            componentType: "FILTER",
            key: Y(C.intl.string(C.t["1TUdFh"])),
            plainText: C.intl.string(C.t["1TUdFh"]),
            validator: eo,
            getAutocompletions: ea,
        },
        [A.dCx.ANSWER_USERNAME_FROM]: {
            follows: [A.dCx.FILTER_FROM],
            regex: eu,
            validator: K,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "author_id",
        },
        [A.dCx.FILTER_MENTIONS]: {
            regex: W(C.intl.string(C.t.i96lOz)),
            componentType: "FILTER",
            key: Y(C.intl.string(C.t.i96lOz)),
            plainText: C.intl.string(C.t.i96lOz),
            validator: eo,
            getAutocompletions: ea,
        },
        [A.dCx.ANSWER_USERNAME_MENTIONS]: {
            follows: [A.dCx.FILTER_MENTIONS],
            regex: eu,
            validator: K,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "mentions",
        },
        [A.dCx.FILTER_HAS]: {
            regex: W(C.intl.string(C.t.CqCvio)),
            componentType: "FILTER",
            key: Y(C.intl.string(C.t.CqCvio)),
            plainText: C.intl.string(C.t.CqCvio),
            getAutocompletions(t) {
                let { query: n, maxResults: r } = t;
                return er(n, r, e);
            },
        },
        [A.dCx.ANSWER_HAS]: {
            regex: RegExp("(?:\\s*-?(".concat(e.map((e) => E.Z.escape(e)).join("|"), "))"), "i"),
            follows: [A.dCx.FILTER_HAS],
            validator: J,
            componentType: "ANSWER",
            queryKey: "has",
        },
        [A.dCx.FILTER_FILE_TYPE]: {
            regex: W(C.intl.string(C.t.TMNjFh)),
            key: Y(C.intl.string(C.t.TMNjFh)),
            plainText: C.intl.string(C.t.TMNjFh),
            componentType: "FILTER",
        },
        [A.dCx.ANSWER_FILE_TYPE]: {
            regex: /(?:\s*([^\s]+))/,
            follows: [A.dCx.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_extensions",
        },
        [A.dCx.FILTER_FILE_NAME]: {
            regex: W(C.intl.string(C.t["5xtLRE"])),
            key: Y(C.intl.string(C.t["5xtLRE"])),
            plainText: C.intl.string(C.t["5xtLRE"]),
            componentType: "FILTER",
        },
        [A.dCx.ANSWER_FILE_NAME]: {
            regex: /(?:\s*([^\s]+)(?=\s))/,
            follows: [A.dCx.FILTER_FILE_NAME],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_filename",
        },
        [A.dCx.FILTER_BEFORE]: {
            regex: W(C.intl.string(C.t["qZ+7BA"])),
            componentType: "FILTER",
            key: Y(C.intl.string(C.t["qZ+7BA"])),
            plainText: C.intl.string(C.t["qZ+7BA"]),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return en(t, n, A.dCx.FILTER_BEFORE);
            },
        },
        [A.dCx.FILTER_ON]: {
            regex: W("(".concat(C.intl.string(C.t.tIxkOj), "|").concat(C.intl.string(C.t.h2NzSU), ")")),
            componentType: "FILTER",
            key: Y(C.intl.string(C.t.h2NzSU)),
            plainText: C.intl.string(C.t.h2NzSU),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return en(t, n, A.dCx.FILTER_ON);
            },
        },
        [A.dCx.FILTER_AFTER]: {
            regex: W(C.intl.string(C.t.KSDx7O)),
            componentType: "FILTER",
            key: Y(C.intl.string(C.t.KSDx7O)),
            plainText: C.intl.string(C.t.KSDx7O),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return en(t, n, A.dCx.FILTER_AFTER);
            },
        },
        [A.dCx.ANSWER_BEFORE]: {
            regex: V,
            follows: [A.dCx.FILTER_BEFORE],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => z(e, "before"),
        },
        [A.dCx.ANSWER_ON]: {
            regex: V,
            follows: [A.dCx.FILTER_ON],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => z(e, "on"),
        },
        [A.dCx.ANSWER_AFTER]: {
            regex: V,
            follows: [A.dCx.FILTER_AFTER],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => z(e, "after"),
        },
        [A.dCx.FILTER_IN]: {
            regex: W(C.intl.string(C.t.WNpFHR)),
            componentType: "FILTER",
            key: Y(C.intl.string(C.t.WNpFHR)),
            plainText: C.intl.string(C.t.WNpFHR),
            validator: () => {
                let e = y.Z.getSelectedSearchContext();
                return null != e && (0, v.R6)(e);
            },
            getAutocompletions: ec,
        },
        [A.dCx.ANSWER_IN]: {
            regex: S.e,
            mutable: !0,
            follows: [A.dCx.FILTER_IN],
            componentType: "ANSWER",
            validator: Q,
            queryKey: "channel_id",
        },
        [A.dCx.FILTER_PINNED]: {
            regex: W(C.intl.string(C.t["0B74eX"])),
            componentType: "FILTER",
            key: Y(C.intl.string(C.t["0B74eX"])),
            plainText: C.intl.string(C.t["0B74eX"]),
            getAutocompletions: () => [{ text: "true" }, { text: "false" }],
        },
        [A.dCx.ANSWER_PINNED]: {
            regex: H,
            componentType: "ANSWER",
            follows: [A.dCx.FILTER_PINNED],
            queryKey: "pinned",
            validator: (e) => {
                let t = e.getMatch(1);
                return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0);
            },
        },
        [A.dCx.FILTER_AUTHOR_TYPE]: {
            regex: W(C.intl.string(C.t.us8IQk)),
            componentType: "FILTER",
            key: Y(C.intl.string(C.t.us8IQk)),
            validator: () => (0, T.Z)({ location: "SearchTokens" }),
            plainText: C.intl.string(C.t.us8IQk),
            getAutocompletions(e) {
                let { query: n, maxResults: r } = e;
                return er(n, r, t);
            },
        },
        [A.dCx.ANSWER_AUTHOR_TYPE]: {
            regex: RegExp("(?:\\s*-?(".concat(t.map((e) => E.Z.escape(e)).join("|"), "))"), "i"),
            follows: [A.dCx.FILTER_AUTHOR_TYPE],
            validator: $,
            componentType: "ANSWER",
            queryKey: "author_type",
        },
    };
}
let e_ = {};
function ep() {
    Object.assign(e_, ef());
}
function eh(e) {
    return A.TNx.test(e);
}
function em(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(e_).length,
        n = [];
    for (let r of Object.keys(e_)) {
        if (n.length >= t) break;
        let a = e_[r].key;
        eh(r) &&
            null != a &&
            i()(e.toLowerCase(), a) &&
            n.push({
                token: r,
                text: a,
            });
    }
    return n;
}
function eg(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, "");
    return C.intl.string(C.t.Qf3ptr).startsWith(t) || A.ME.substring(1).startsWith(t);
}
let eE = e_;
