"use strict";
n.d(t, {
    Ay: () => ef,
    G0: () => eu,
    If: () => ec,
    WL: () => e_,
    Yd: () => K,
    gR: () => ed,
    gU: () => el,
    sC: () => H,
    v1: () => es,
}),
    n(321073),
    n(667532);
var r = n(91871),
    i = n.n(r),
    s = n(735438),
    a = n.n(s),
    o = n(989349),
    l = n.n(o),
    u = n(629357),
    c = n(47167),
    d = n(734057),
    _ = n(808728),
    f = n(994500),
    p = n(309010),
    h = n(351906),
    m = n(287809),
    E = n(248465),
    g = n(257120),
    A = n(427262),
    I = n(692986),
    T = n(268988),
    S = n(822382),
    y = n(768278),
    v = n(233003),
    N = n(652215),
    C = n(985018);
function b() {
    return new Set(
        l()
            .months()
            .map((e) => e.toLowerCase()),
    );
}
function R() {
    return new Set(
        l()
            .weekdays()
            .map((e) => e.toLowerCase()),
    );
}
function O() {
    let e = new Date().getFullYear();
    return new Set(
        a()
            .range(2015, e + 1)
            .map((e) => e.toString()),
    );
}
function D(e, t) {
    return [e, e.clone().add(1, t)];
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return D(l()().startOf(e).add(t, e), e);
}
function w(e, t, n) {
    return D(l()(e, t).local(), n);
}
function x() {
    return {
        [C.intl.string(C.t.HYiVEQ)]: () => L("day"),
        [C.intl.string(C.t.cu86KC)]: () => L("day", -1),
        [C.intl.string(C.t["FvBj/6"])]: () => L("week"),
        [C.intl.string(C.t["20uWCw"])]: () => L("month"),
        [C.intl.string(C.t["dXC/hn"])]: () => L("year"),
    };
}
let M = "([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})",
    P = "\\d{4}",
    k = "([0-9]{4})-([0-9]{1,2})",
    U = "([^\\d\\s]+)",
    G = RegExp(`(?:\\s*(${M}|${k}|${P}|${U}))`, "i"),
    F = RegExp("\\s*(true|false)", "i");
function V(e) {
    return `${e}:`;
}
function B(e) {
    return RegExp(V(e), "i");
}
function H(e) {
    let t,
        n = e.getMatch(1),
        r = (e) => (null != e ? e?.id : null);
    return (
        null !=
            (t = N.Ut1.test(n)
                ? n
                : r(
                      n === N.ME
                          ? m.default.getCurrentUser()
                          : null != e.getMatch(4)
                            ? m.default.findByTag(e.getMatch(4))
                            : m.default.findByTag(e.getMatch(2), e.getMatch(3)),
                  )) && (e.setData("userId", t), !0)
    );
}
function j(e, t) {
    let n,
        r,
        i = e.getFullMatch().trim().toLowerCase(),
        s = x()[i];
    return (
        null != s
            ? ([n, r] = s())
            : b().has(i)
              ? ([n, r] = w(i, "MMMM", "month"))
              : R().has(i)
                ? ([n, r] = w(i, "dddd", "day"))
                : O().has(i)
                  ? ([n, r] = w(i, "YYYY", "year"))
                  : ([n, r] = w(i, N.ump, "day")),
        !!(n.isValid() && r.isValid()) &&
            ("before" === t ? ((r = n), (n = null)) : "after" === t && ((n = r), (r = null)),
            e.setData("start", n),
            e.setData("end", r),
            !0)
    );
}
function Y(e, t, n) {
    let r = _.Ay.getChannels(n)[_.I6].concat(_.Ay.getChannels(n)[_.vM]),
        i = _.Ay.getTextChannelNameDisambiguations(n),
        s = y.A.getCurrentConfig({ location: "guildChannelValidator" }).enabled,
        o = a()
            .chain(r)
            .map((e) => {
                let { channel: t } = e;
                return t;
            })
            .concat(s && null != n ? d.A.getAllThreadsForGuild(n) : [])
            .filter((e) => t === (i[e.id]?.name ?? e.name))
            .value();
    return (
        o?.length > 0 &&
        (e.setData(
            "channelIds",
            o.map((e) => e.id),
        ),
        !0)
    );
}
function W(e, t) {
    let n = Object.values(d.A.getMutablePrivateChannels()).filter((e) => {
        if (e.isGroupDM() && t === (0, c.m1)(e, m.default, f.A)) return !0;
        if (e.isDM()) {
            let n = e.getRecipientId(),
                r = m.default.getUser(n);
            return null != r && t === A.Ay.getUserTag(r);
        }
        return !1;
    });
    return (
        n?.length > 0 &&
        (e.setData(
            "channelIds",
            n.map((e) => e.id),
        ),
        !0)
    );
}
function K(e, t) {
    let n = e.getMatch(1);
    return N.Ut1.test(n)
        ? (e.setData("channelIds", [n]), !0)
        : (n.startsWith('"') && n.endsWith('"') && (n = n.substring(1, n.length - 1).replaceAll(/\\(.)/g, (e, t) => t)),
            (0, S._B)(t))
          ? Y(e, n, t.guildId)
          : t.type === N.I4_.DMS && !h.A.hidePersonalInformation && W(e, n);
}
function z(e) {
    let t = {
        [C.intl.string(C.t.ZNR2fi)]: "link",
        [C.intl.string(C.t["20uQR3"])]: "embed",
        [C.intl.string(C.t.L4lxyE)]: "poll",
        [C.intl.string(C.t.nrpA5E)]: "snapshot",
        [C.intl.string(C.t["AV/v6i"])]: "file",
        [C.intl.string(C.t.XM9XGP)]: "video",
        [C.intl.string(C.t.TNLcpx)]: "image",
        [C.intl.string(C.t.F8Wf0e)]: "sound",
        [C.intl.string(C.t.PJgX2h)]: "sticker",
    }[e.getMatch(1)];
    return null != t && "" !== t && (e.setData("has", t), !0);
}
function $(e) {
    let t = {
        [C.intl.string(C.t.tPZo4p)]: "user",
        [C.intl.string(C.t.JL7sRS)]: "bot",
        [C.intl.string(C.t.WjkIKU)]: "webhook",
    }[e.getMatch(1)];
    return null != t && "" !== t && (e.setData("author_type", t), !0);
}
function q() {
    return [...Array.from(b()), ...Array.from(R()), ...Array.from(O()), ...Object.keys(x())];
}
function Z(e, t, n) {
    return X(e, t, q()).map((e) => ({ ...e, group: n, key: `${n}-${e.text}` }));
}
function X(e, t, n) {
    let r = e.toLocaleLowerCase();
    return a()(n)
        .filter((e) => i()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function Q(e) {
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
            let t = d.A.getChannel(e);
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
function J(e) {
    let { query: t, searchContext: n, maxResults: r = 10, tokens: i } = e,
        s = { query: (t = t.trim().split("#")[0]), limit: r, request: !1, boosters: (0, E.X3)(u.rD.USER) },
        a = [];
    switch (n.type) {
        case N.I4_.GUILD:
        case N.I4_.GUILD_CHANNEL:
        case N.I4_.THREAD:
            if (0 === t.length) {
                let e = [],
                    t = new Set(),
                    i = (n) => {
                        null == n ||
                            t.has(n.id) ||
                            f.A.isBlockedOrIgnored(n.id) ||
                            (e.push({ user: n, text: A.Ay.getUserTag(n) }), t.add(n.id));
                    },
                    s = p.A.getCurrentlySelectedChannelId(n.guildId);
                return (
                    E.Ay.getRecentlyTalked(s, r).forEach((e) => {
                        let { record: t } = e;
                        return i(t);
                    }),
                    T.A.getRecentMessageAuthorIds(n.guildId).forEach((e) => i(m.default.getUser(e))),
                    e.slice(0, r)
                );
            }
            a = E.Ay.queryGuildUsers({ ...s, guildId: n.guildId });
            break;
        case N.I4_.CHANNEL:
            a = E.Ay.queryChannelUsers({ ...s, channelId: n.channelId });
            break;
        case N.I4_.DMS:
            let o = Q(i ?? []);
            if (null != o && o.length > 0) {
                let e = m.default.getCurrentUser();
                null != e && o.push(e), (a = E.Ay.queryUsers({ ...s, users: o, boosters: (0, E.X3)(u.rD.USER) }));
            } else a = E.Ay.queryAllUsers({ ...s, boosters: (0, E.X3)(u.rD.USER) });
            break;
        default:
            return [];
    }
    let l = m.default.getCurrentUser(),
        c = t.toLowerCase().replace(/^@/, ""),
        d = null != l && t.length > 0 && (C.intl.string(C.t.Qf3ptv).startsWith(c) || N.ME.substr(1).startsWith(c)),
        _ = a
            .filter((e) => {
                let { record: t } = e;
                return !f.A.isBlockedOrIgnored(t.id) && (!d || t.id !== l?.id);
            })
            .map((e) => {
                let { record: t } = e;
                return { text: A.Ay.getUserTag(t), user: t };
            });
    return d && _.unshift({ text: N.ME, user: l }), _;
}
function ee() {
    return !h.A.hidePersonalInformation;
}
function et(e, t, n) {
    let r = E.Ay.queryGroupDMs({ query: e, limit: t, fuzzy: !0, boosters: (0, E.X3)(u.rD.GROUP_DM) }),
        i = E.Ay.queryDMChannels({ query: e, limit: t, boosters: (0, E.X3)(u.rD.USER) }),
        s = a()(r.concat(i))
            .sort(u.vH)
            .map((e) => {
                let { record: t, comparator: n } = e;
                return { text: n, channel: t, key: t?.id };
            })
            .filter((e) => null != e.text && null != e.channel && null != e.key)
            .value();
    if (0 === e.length && n) {
        let e = p.A.getChannelId(),
            t = d.A.getChannel(e);
        if (null != t && t.isPrivate()) {
            let n = s.findIndex((t) => {
                let { channel: n } = t;
                return n.id === e;
            });
            if (-1 !== n) {
                let e = s[n];
                s.splice(n, 1), s.unshift(e);
            } else if (t.isGroupDM()) {
                let e = (0, c.m1)(t, m.default, f.A);
                s.unshift({ text: e, channel: t, key: t.id });
            } else if (t.isDM()) {
                let e = t.getRecipientId(),
                    n = m.default.getUser(e);
                if (null != n) {
                    let e = A.Ay.getUserTag(n);
                    s.unshift({ text: e, channel: t, key: t.id });
                }
            }
        }
    }
    return s.slice(0, t);
}
function en(e, t, n) {
    let r = y.A.getCurrentConfig({ location: "getGuildChannelAutocompletions" }).enabled,
        i = E.Ay.queryChannels({
            query: e,
            type: _.I6,
            guildId: t,
            limit: 1 / 0,
            allowEmptyQueries: !0,
            allowSnowflake: !0,
            includeAllThreads: r,
            boosters: (0, E.X3)(u.rD.TEXT_CHANNEL),
        })
            .concat(
                E.Ay.queryChannels({
                    query: e,
                    type: _.vM,
                    guildId: t,
                    limit: 1 / 0,
                    allowEmptyQueries: !0,
                    allowSnowflake: !0,
                    boosters: (0, E.X3)(u.rD.VOICE_CHANNEL),
                }),
            )
            .map((e) => {
                let { record: t } = e;
                return t;
            });
    if ((r || (i = i.filter((e) => !e.isThread())), 0 === e.length)) {
        let e = p.A.getChannelId(t),
            n = i.find((t) => t.id === e);
        null != n && (i.splice(i.indexOf(n), 1), i.unshift(n));
    }
    let s = _.Ay.getTextChannelNameDisambiguations(t);
    return a()(i)
        .take(n)
        .map((e) => ({ text: `${s[e.id]?.name ?? e.name}`, channel: e, key: e.id }))
        .value();
}
function er(e) {
    let { query: t, searchContext: n, maxResults: r } = e;
    return ((t = t.trim()).startsWith('"') && t.endsWith('"')
        ? (t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t))
        : t.startsWith('"') && (t = t.substring(1).replaceAll(/\\(.)/g, (e, t) => t)),
    "#" === t[0] && (t = t.substring(1)),
    (0, S._B)(n))
        ? en(t, n.guildId, r)
        : n.type !== N.I4_.DMS || h.A.hidePersonalInformation
          ? []
          : et(t, r, !0);
}
let ei = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var es = (function (e) {
    return (e.FILTER = "FILTER"), (e.ANSWER = "ANSWER"), e;
})({});
function ea(e) {
    let t = [C.intl.string(C.t.tPZo4p), C.intl.string(C.t.JL7sRS), C.intl.string(C.t.WjkIKU)],
        n = [
            C.intl.string(C.t.TNLcpx),
            C.intl.string(C.t.XM9XGP),
            C.intl.string(C.t.ZNR2fi),
            C.intl.string(C.t["AV/v6i"]),
            C.intl.string(C.t["20uQR3"]),
            C.intl.string(C.t.F8Wf0e),
            C.intl.string(C.t.L4lxyE),
            C.intl.string(C.t.PJgX2h),
            C.intl.string(C.t.nrpA5E),
        ];
    return {
        [N.LWr.FILTER_FROM]: {
            regex: B(C.intl.string(C.t["1TUdFo"])),
            componentType: "FILTER",
            key: V(C.intl.string(C.t["1TUdFo"])),
            plainText: C.intl.string(C.t["1TUdFo"]),
            validator: ee,
            getAutocompletions: J,
        },
        [N.LWr.ANSWER_USERNAME_FROM]: {
            follows: [N.LWr.FILTER_FROM],
            regex: ei,
            validator: H,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "author_id",
        },
        [N.LWr.FILTER_MENTIONS]: {
            regex: B(C.intl.string(C.t["i96lO+"])),
            componentType: "FILTER",
            key: V(C.intl.string(C.t["i96lO+"])),
            plainText: C.intl.string(C.t["i96lO+"]),
            validator: ee,
            getAutocompletions: J,
        },
        [N.LWr.ANSWER_USERNAME_MENTIONS]: {
            follows: [N.LWr.FILTER_MENTIONS],
            regex: ei,
            validator: H,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "mentions",
        },
        [N.LWr.FILTER_HAS]: {
            regex: B(C.intl.string(C.t.CqCvir)),
            componentType: "FILTER",
            key: V(C.intl.string(C.t.CqCvir)),
            plainText: C.intl.string(C.t.CqCvir),
            getAutocompletions(e) {
                let { query: t, maxResults: r } = e;
                return X(t, r, n);
            },
        },
        [N.LWr.ANSWER_HAS]: {
            regex: RegExp(`(?:\\s*-?(${n.map((e) => g.A.escape(e)).join("|")}))`, "i"),
            follows: [N.LWr.FILTER_HAS],
            validator: z,
            componentType: "ANSWER",
            queryKey: "has",
        },
        [N.LWr.FILTER_FILE_TYPE]: {
            regex: B(C.intl.string(C.t.TMNjFm)),
            key: V(C.intl.string(C.t.TMNjFm)),
            plainText: C.intl.string(C.t.TMNjFm),
            componentType: "FILTER",
        },
        [N.LWr.ANSWER_FILE_TYPE]: {
            regex: /(?:\s*([^\s]+))/,
            follows: [N.LWr.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_extensions",
        },
        [N.LWr.FILTER_FILE_NAME]: {
            regex: B(C.intl.string(C.t["5xtLRC"])),
            key: V(C.intl.string(C.t["5xtLRC"])),
            plainText: C.intl.string(C.t["5xtLRC"]),
            componentType: "FILTER",
        },
        [N.LWr.ANSWER_FILE_NAME]: {
            regex: /(?:\s*([^\s]+)(?=\s))/,
            follows: [N.LWr.FILTER_FILE_NAME],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_filename",
        },
        [N.LWr.FILTER_BEFORE]: {
            regex: B(C.intl.string(C.t["qZ+7BA"])),
            componentType: "FILTER",
            key: V(C.intl.string(C.t["qZ+7BA"])),
            plainText: C.intl.string(C.t["qZ+7BA"]),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return Z(t, n, N.LWr.FILTER_BEFORE);
            },
        },
        [N.LWr.FILTER_ON]: {
            regex: B(`(${C.intl.string(C.t.tIxkOo)}|${C.intl.string(C.t.h2NzSd)})`),
            componentType: "FILTER",
            key: V(C.intl.string(C.t.h2NzSd)),
            plainText: C.intl.string(C.t.h2NzSd),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return Z(t, n, N.LWr.FILTER_ON);
            },
        },
        [N.LWr.FILTER_AFTER]: {
            regex: B(C.intl.string(C.t.KSDx7M)),
            componentType: "FILTER",
            key: V(C.intl.string(C.t.KSDx7M)),
            plainText: C.intl.string(C.t.KSDx7M),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return Z(t, n, N.LWr.FILTER_AFTER);
            },
        },
        [N.LWr.ANSWER_BEFORE]: {
            regex: G,
            follows: [N.LWr.FILTER_BEFORE],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => j(e, "before"),
        },
        [N.LWr.ANSWER_ON]: {
            regex: G,
            follows: [N.LWr.FILTER_ON],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => j(e, "on"),
        },
        [N.LWr.ANSWER_AFTER]: {
            regex: G,
            follows: [N.LWr.FILTER_AFTER],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => j(e, "after"),
        },
        [N.LWr.FILTER_IN]: {
            regex: B(C.intl.string(C.t.WNpFHa)),
            componentType: "FILTER",
            key: V(C.intl.string(C.t.WNpFHa)),
            plainText: C.intl.string(C.t.WNpFHa),
            validator: () => {
                let t = e ?? I.A.getSelectedSearchContext();
                return null != t && (0, S.Wg)(t);
            },
            getAutocompletions: er,
        },
        [N.LWr.ANSWER_IN]: {
            regex: v.r,
            mutable: !0,
            follows: [N.LWr.FILTER_IN],
            componentType: "ANSWER",
            validator: (t) => {
                let n = e ?? I.A.getSelectedSearchContext();
                return null != n && K(t, n);
            },
            queryKey: "channel_id",
        },
        [N.LWr.FILTER_PINNED]: {
            regex: B(C.intl.string(C.t["0B74eY"])),
            componentType: "FILTER",
            key: V(C.intl.string(C.t["0B74eY"])),
            plainText: C.intl.string(C.t["0B74eY"]),
            getAutocompletions: () => [{ text: "true" }, { text: "false" }],
        },
        [N.LWr.ANSWER_PINNED]: {
            regex: F,
            componentType: "ANSWER",
            follows: [N.LWr.FILTER_PINNED],
            queryKey: "pinned",
            validator: (e) => {
                let t = e.getMatch(1);
                return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0);
            },
        },
        [N.LWr.FILTER_AUTHOR_TYPE]: {
            regex: B(C.intl.string(C.t.us8IQi)),
            componentType: "FILTER",
            key: V(C.intl.string(C.t.us8IQi)),
            plainText: C.intl.string(C.t.us8IQi),
            getAutocompletions(e) {
                let { query: n, maxResults: r } = e;
                return X(n, r, t);
            },
        },
        [N.LWr.ANSWER_AUTHOR_TYPE]: {
            regex: RegExp(`(?:\\s*-?(${t.map((e) => g.A.escape(e)).join("|")}))`, "i"),
            follows: [N.LWr.FILTER_AUTHOR_TYPE],
            validator: $,
            componentType: "ANSWER",
            queryKey: "author_type",
        },
    };
}
let eo = {};
function el() {
    return ea({ type: N.I4_.DMS });
}
function eu() {
    Object.assign(eo, ea());
}
function ec(e) {
    return N.l90.test(e);
}
function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(eo).length,
        n = [];
    for (let r of Object.keys(eo)) {
        if (n.length >= t) break;
        let s = eo[r].key;
        ec(r) && null != s && i()(e.toLowerCase(), s) && n.push({ token: r, text: s });
    }
    return n;
}
function e_(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, "");
    return C.intl.string(C.t.Qf3ptv).startsWith(t) || N.ME.substring(1).startsWith(t);
}
let ef = eo;
