n.d(t, {
    Pr: () => en,
    Qe: () => ef,
    WK: () => eh,
    ZP: () => eb,
    _m: () => em,
    co: () => eE,
    nB: () => eg,
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
    O = n(607802),
    v = n(612806),
    I = n(375123),
    T = n(945577),
    S = n(494573),
    A = n(129301),
    C = n(981631),
    N = n(388032);
function R(e, t, n) {
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
function P(e) {
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
                R(e, t, n[t]);
            });
    }
    return e;
}
function w(e, t) {
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
function D(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : w(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function x() {
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
function j() {
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
function U(e, t, n) {
    return M(l()(e, t).local(), n);
}
function G() {
    return {
        [N.intl.string(N.t.HYiVER)]: () => k("day"),
        [N.intl.string(N.t.cu86KC)]: () => k("day", -1),
        [N.intl.string(N.t["FvBj//"])]: () => k("week"),
        [N.intl.string(N.t["20uWCw"])]: () => k("month"),
        [N.intl.string(N.t["dXC/ho"])]: () => k("year"),
    };
}
let B = "([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})",
    Z = "\\d{4}",
    V = "([0-9]{4})-([0-9]{1,2})",
    F = "([^\\d\\s]+)",
    H = RegExp("(?:\\s*(".concat(B, "|").concat(V, "|").concat(Z, "|").concat(F, "))"), "i"),
    Y = RegExp("\\s*(true|false)", "i");
function W(e) {
    return "".concat(e, ":");
}
function K(e) {
    return RegExp(W(e), "i");
}
function z(e) {
    let t,
        n = e.getMatch(1),
        r = (e) => (null != e ? (null == e ? void 0 : e.id) : null);
    return (
        null !=
            (t = C.Xyh.test(n)
                ? n
                : r(
                      n === C.ME
                          ? m.default.getCurrentUser()
                          : null != e.getMatch(4)
                            ? m.default.findByTag(e.getMatch(4))
                            : m.default.findByTag(e.getMatch(2), e.getMatch(3)),
                  )) && (e.setData("userId", t), !0)
    );
}
function q(e, t) {
    let n,
        r,
        i = e.getFullMatch().trim().toLowerCase(),
        a = G()[i];
    return (
        null != a
            ? ([n, r] = a())
            : x().has(i)
              ? ([n, r] = U(i, "MMMM", "month"))
              : L().has(i)
                ? ([n, r] = U(i, "dddd", "day"))
                : j().has(i)
                  ? ([n, r] = U(i, "YYYY", "year"))
                  : ([n, r] = U(i, C.b2L, "day")),
        !!(n.isValid() && r.isValid()) &&
            ("before" === t ? ((r = n), (n = null)) : "after" === t && ((n = r), (r = null)),
            e.setData("start", n),
            e.setData("end", r),
            !0)
    );
}
function X(e, t, n) {
    let r = f.ZP.getChannels(n)[f.sH].concat(f.ZP.getChannels(n)[f.Zb]),
        i = f.ZP.getTextChannelNameDisambiguations(n),
        a = v.Z.getCurrentConfig({ location: "guildChannelValidator" }).enabled,
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
    return (null == s ? void 0 : s.length) > 0 && (e.setData("channels", s), !0);
}
function Q(e, t) {
    let n = Object.values(d.Z.getMutablePrivateChannels()).filter((e) => {
        if (t === (0, u.F6)(e, m.default, _.Z)) return !0;
        if (e.isDM()) {
            let n = e.getRecipientId(),
                r = m.default.getUser(n);
            return null != r && t === b.ZP.getUserTag(r);
        }
    });
    return (null == n ? void 0 : n.length) > 0 && (e.setData("channels", n), !0);
}
function J(e) {
    let t = e.getMatch(1);
    t.startsWith('"') && t.endsWith('"') && (t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t));
    let n = y.Z.getSelectedSearchContext();
    if (null == n) return !1;
    if ((0, O.b7)(n)) return X(e, t, n.guildId);
    let r = (0, T.ad)({ location: "channelValidator" }),
        i = (0, S.J)({ location: "channelValidator" }),
        a = r || i;
    return n.type === C.aib.DMS && !!a && Q(e, t);
}
function $(e) {
    let t = {
        [N.intl.string(N.t.ZNR2fn)]: "link",
        [N.intl.string(N.t["20uQR0"])]: "embed",
        [N.intl.string(N.t.L4lxyM)]: "poll",
        [N.intl.string(N.t.nrpA5O)]: "snapshot",
        [N.intl.string(N.t["AV/v6u"])]: "file",
        [N.intl.string(N.t.XM9XGB)]: "video",
        [N.intl.string(N.t.TNLcp6)]: "image",
        [N.intl.string(N.t.F8Wf0d)]: "sound",
        [N.intl.string(N.t.PJgX2t)]: "sticker",
    }[e.getMatch(1)];
    return null != t && "" !== t && (e.setData("has", t), !0);
}
function ee(e) {
    let t = {
        [N.intl.string(N.t.tPZo4u)]: "user",
        [N.intl.string(N.t.JL7sRU)]: "bot",
        [N.intl.string(N.t.WjkIKS)]: "webhook",
    }[e.getMatch(1)];
    return null != t && "" !== t && (e.setData("author_type", t), !0);
}
function et() {
    return [...Array.from(x()), ...Array.from(L()), ...Array.from(j()), ...Object.keys(G())];
}
function en() {
    return o().sample(et());
}
function er(e, t, n) {
    return ei(e, t, et()).map((e) =>
        D(P({}, e), {
            group: n,
            key: "".concat(n, "-").concat(e.text),
        }),
    );
}
function ei(e, t, n) {
    let r = e.toLocaleLowerCase();
    return o()(n)
        .filter((e) => i()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function ea(e) {
    if (null == e) return [];
    let t = new Set(),
        n = [];
    e.forEach((e) => {
        let t = e.getData("channels");
        null != t && t.forEach((e) => n.push(e.id));
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
function eo(e) {
    let t,
        { query: n, searchContext: r, maxResults: i = 10, tokens: a } = e,
        o = {
            query: (n = n.split("#")[0]),
            limit: i,
            request: !1,
        };
    switch (r.type) {
        case C.aib.GUILD:
        case C.aib.GUILD_CHANNEL:
        case C.aib.THREAD:
            t = g.ZP.queryGuildUsers(D(P({}, o), { guildId: r.guildId }));
            break;
        case C.aib.CHANNEL:
            t = g.ZP.queryChannelUsers(D(P({}, o), { channelId: r.channelId }));
            break;
        case C.aib.DMS:
            let s = ea(null != a ? a : []);
            if (null != s && s.length > 0) {
                let e = m.default.getCurrentUser();
                null != e && s.push(e),
                    (t = g.ZP.queryUsers(
                        D(P({}, o), {
                            users: s,
                            boosters: (0, g.Cq)(c.h8.USER),
                        }),
                    ));
            } else t = g.ZP.queryAllUsers(D(P({}, o), { boosters: (0, g.Cq)(c.h8.USER) }));
            break;
        default:
            return [];
    }
    let l = m.default.getCurrentUser(),
        u = n.toLowerCase().replace(/^@/, ""),
        d = null != l && n.length > 0 && (N.intl.string(N.t.Qf3ptr).startsWith(u) || C.ME.substr(1).startsWith(u)),
        f = t
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
                text: C.ME,
                user: l,
            }),
        f
    );
}
function es() {
    return !h.Z.hidePersonalInformation;
}
function el(e, t, n) {
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
    if ("" === e.trim() && n) {
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
function ec(e, t, n) {
    let r = v.Z.getCurrentConfig({ location: "getInFilterAutocompletionsForGuild" }).enabled,
        i = g.ZP.queryChannels({
            query: e,
            type: f.sH,
            guildId: t,
            limit: 1 / 0,
            allowEmptyQueries: !0,
            includeAllThreads: r,
        })
            .concat(
                g.ZP.queryChannels({
                    query: e,
                    type: f.Zb,
                    guildId: t,
                    limit: 1 / 0,
                    allowEmptyQueries: !0,
                }),
            )
            .map((e) => {
                let { record: t } = e;
                return t;
            });
    if ((r || (i = i.filter((e) => !e.isThread())), "" === e.trim())) {
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
function eu(e, t, n) {
    if (
        (e.startsWith('"') && e.endsWith('"')
            ? (e = e.substring(1, e.length - 1).replaceAll(/\\(.)/g, (e, t) => t))
            : e.startsWith('"') && (e = e.substring(1).replaceAll(/\\(.)/g, (e, t) => t)),
        "#" === e[0] && (e = e.substring(1)),
        (0, O.b7)(t))
    )
        return ec(e, t.guildId, n);
    let r = (0, T.ad)({ location: "getInFilterAutocompletions" }),
        i = (0, S.J)({ location: "getInFilterAutocompletions" }),
        a = r || i;
    return t.type === C.aib.DMS && a ? el(e, n, !0) : [];
}
let ed = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var ef = (function (e) {
    return (e.FILTER = "FILTER"), (e.ANSWER = "ANSWER"), e;
})({});
function e_() {
    let e = [
            N.intl.string(N.t.ZNR2fn),
            N.intl.string(N.t["20uQR0"]),
            N.intl.string(N.t.L4lxyM),
            N.intl.string(N.t["AV/v6u"]),
            N.intl.string(N.t.XM9XGB),
            N.intl.string(N.t.TNLcp6),
            N.intl.string(N.t.F8Wf0d),
            N.intl.string(N.t.PJgX2t),
            N.intl.string(N.t.nrpA5O),
        ],
        t = [N.intl.string(N.t.tPZo4u), N.intl.string(N.t.JL7sRU), N.intl.string(N.t.WjkIKS)];
    return {
        [C.dCx.FILTER_FROM]: {
            regex: K(N.intl.string(N.t["1TUdFh"])),
            componentType: "FILTER",
            key: W(N.intl.string(N.t["1TUdFh"])),
            plainText: N.intl.string(N.t["1TUdFh"]),
            validator: es,
            getAutocompletions: eo,
        },
        [C.dCx.ANSWER_USERNAME_FROM]: {
            follows: [C.dCx.FILTER_FROM],
            regex: ed,
            validator: z,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "author_id",
        },
        [C.dCx.FILTER_MENTIONS]: {
            regex: K(N.intl.string(N.t.i96lOz)),
            componentType: "FILTER",
            key: W(N.intl.string(N.t.i96lOz)),
            plainText: N.intl.string(N.t.i96lOz),
            validator: es,
            getAutocompletions: eo,
        },
        [C.dCx.ANSWER_USERNAME_MENTIONS]: {
            follows: [C.dCx.FILTER_MENTIONS],
            regex: ed,
            validator: z,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "mentions",
        },
        [C.dCx.FILTER_HAS]: {
            regex: K(N.intl.string(N.t.CqCvio)),
            componentType: "FILTER",
            key: W(N.intl.string(N.t.CqCvio)),
            plainText: N.intl.string(N.t.CqCvio),
            getAutocompletions(t) {
                let { query: n, maxResults: r } = t;
                return ei(n, r, e);
            },
        },
        [C.dCx.ANSWER_HAS]: {
            regex: RegExp("(?:\\s*-?(".concat(e.map((e) => E.Z.escape(e)).join("|"), "))"), "i"),
            follows: [C.dCx.FILTER_HAS],
            validator: $,
            componentType: "ANSWER",
            queryKey: "has",
        },
        [C.dCx.FILTER_FILE_TYPE]: {
            regex: K(N.intl.string(N.t.TMNjFh)),
            key: W(N.intl.string(N.t.TMNjFh)),
            plainText: N.intl.string(N.t.TMNjFh),
            componentType: "FILTER",
        },
        [C.dCx.ANSWER_FILE_TYPE]: {
            regex: /(?:\s*([^\s]+))/,
            follows: [C.dCx.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_extensions",
        },
        [C.dCx.FILTER_FILE_NAME]: {
            regex: K(N.intl.string(N.t["5xtLRE"])),
            key: W(N.intl.string(N.t["5xtLRE"])),
            plainText: N.intl.string(N.t["5xtLRE"]),
            componentType: "FILTER",
        },
        [C.dCx.ANSWER_FILE_NAME]: {
            regex: /(?:\s*([^\s]+)(?=\s))/,
            follows: [C.dCx.FILTER_FILE_NAME],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_filename",
        },
        [C.dCx.FILTER_BEFORE]: {
            regex: K(N.intl.string(N.t["qZ+7BA"])),
            componentType: "FILTER",
            key: W(N.intl.string(N.t["qZ+7BA"])),
            plainText: N.intl.string(N.t["qZ+7BA"]),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return er(t, n, C.dCx.FILTER_BEFORE);
            },
        },
        [C.dCx.FILTER_ON]: {
            regex: K("(".concat(N.intl.string(N.t.tIxkOj), "|").concat(N.intl.string(N.t.h2NzSU), ")")),
            componentType: "FILTER",
            key: W(N.intl.string(N.t.h2NzSU)),
            plainText: N.intl.string(N.t.h2NzSU),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return er(t, n, C.dCx.FILTER_ON);
            },
        },
        [C.dCx.FILTER_AFTER]: {
            regex: K(N.intl.string(N.t.KSDx7O)),
            componentType: "FILTER",
            key: W(N.intl.string(N.t.KSDx7O)),
            plainText: N.intl.string(N.t.KSDx7O),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return er(t, n, C.dCx.FILTER_AFTER);
            },
        },
        [C.dCx.ANSWER_BEFORE]: {
            regex: H,
            follows: [C.dCx.FILTER_BEFORE],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => q(e, "before"),
        },
        [C.dCx.ANSWER_ON]: {
            regex: H,
            follows: [C.dCx.FILTER_ON],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => q(e, "on"),
        },
        [C.dCx.ANSWER_AFTER]: {
            regex: H,
            follows: [C.dCx.FILTER_AFTER],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => q(e, "after"),
        },
        [C.dCx.FILTER_IN]: {
            regex: K(N.intl.string(N.t.WNpFHR)),
            componentType: "FILTER",
            key: W(N.intl.string(N.t.WNpFHR)),
            plainText: N.intl.string(N.t.WNpFHR),
            validator: () => {
                let e = y.Z.getSelectedSearchContext();
                return null != e && (0, O.R6)(e);
            },
            getAutocompletions(e) {
                let { query: t, searchContext: n, maxResults: r } = e;
                return eu(t, n, r);
            },
        },
        [C.dCx.ANSWER_IN]: {
            regex: A.e,
            mutable: !0,
            follows: [C.dCx.FILTER_IN],
            componentType: "ANSWER",
            validator: J,
            queryKey: "channel_id",
        },
        [C.dCx.FILTER_PINNED]: {
            regex: K(N.intl.string(N.t["0B74eX"])),
            componentType: "FILTER",
            key: W(N.intl.string(N.t["0B74eX"])),
            plainText: N.intl.string(N.t["0B74eX"]),
            getAutocompletions: () => [{ text: "true" }, { text: "false" }],
        },
        [C.dCx.ANSWER_PINNED]: {
            regex: Y,
            componentType: "ANSWER",
            follows: [C.dCx.FILTER_PINNED],
            queryKey: "pinned",
            validator: (e) => {
                let t = e.getMatch(1);
                return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0);
            },
        },
        [C.dCx.FILTER_AUTHOR_TYPE]: {
            regex: K(N.intl.string(N.t.us8IQk)),
            componentType: "FILTER",
            key: W(N.intl.string(N.t.us8IQk)),
            validator: () => (0, I.Z)({ location: "SearchTokens" }),
            plainText: N.intl.string(N.t.us8IQk),
            getAutocompletions(e) {
                let { query: n, maxResults: r } = e;
                return ei(n, r, t);
            },
        },
        [C.dCx.ANSWER_AUTHOR_TYPE]: {
            regex: RegExp("(?:\\s*-?(".concat(t.map((e) => E.Z.escape(e)).join("|"), "))"), "i"),
            follows: [C.dCx.FILTER_AUTHOR_TYPE],
            validator: ee,
            componentType: "ANSWER",
            queryKey: "author_type",
        },
    };
}
let ep = {};
function eh() {
    Object.assign(ep, e_());
}
function em(e) {
    return C.TNx.test(e);
}
function eg(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(ep).length,
        n = [];
    for (let r of Object.keys(ep)) {
        if (n.length >= t) break;
        let a = ep[r].key;
        em(r) &&
            null != a &&
            i()(e.toLowerCase(), a) &&
            n.push({
                token: r,
                text: a,
            });
    }
    return n;
}
function eE(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, "");
    return N.intl.string(N.t.Qf3ptr).startsWith(t) || C.ME.substring(1).startsWith(t);
}
let eb = ep;
