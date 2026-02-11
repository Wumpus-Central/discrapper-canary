"use strict";
n.d(t, {
    Ay: () => eh,
    G0: () => ec,
    If: () => ed,
    WL: () => ef,
    Yd: () => $,
    gR: () => e_,
    gU: () => eu,
    sC: () => H,
    v1: () => es,
}),
    n(321073),
    n(667532);
var r = n(91871),
    i = n.n(r),
    a = n(735438),
    s = n.n(a),
    o = n(989349),
    l = n.n(o),
    u = n(629357),
    c = n(47167),
    d = n(734057),
    _ = n(808728),
    f = n(994500),
    h = n(309010),
    p = n(351906),
    g = n(287809),
    E = n(248465),
    A = n(257120),
    I = n(427262),
    T = n(692986),
    y = n(268988),
    S = n(822382),
    v = n(768278),
    C = n(233003),
    b = n(652215),
    N = n(985018);
function R() {
    return new Set(
        l()
            .months()
            .map((e) => e.toLowerCase()),
    );
}
function O() {
    return new Set(
        l()
            .weekdays()
            .map((e) => e.toLowerCase()),
    );
}
function D() {
    let e = new Date().getFullYear();
    return new Set(
        s()
            .range(2015, e + 1)
            .map((e) => e.toString()),
    );
}
function L(e, t) {
    return [e, e.clone().add(1, t)];
}
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return L(l()().startOf(e).add(t, e), e);
}
function x(e, t, n) {
    return L(l()(e, t).local(), n);
}
function P() {
    return {
        [N.intl.string(N.t.HYiVEQ)]: () => w("day"),
        [N.intl.string(N.t.cu86KC)]: () => w("day", -1),
        [N.intl.string(N.t["FvBj/6"])]: () => w("week"),
        [N.intl.string(N.t["20uWCw"])]: () => w("month"),
        [N.intl.string(N.t["dXC/hn"])]: () => w("year"),
    };
}
let M = "([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})",
    k = "\\d{4}",
    U = "([0-9]{4})-([0-9]{1,2})",
    G = "([^\\d\\s]+)",
    F = RegExp(`(?:\\s*(${M}|${U}|${k}|${G}))`, "i"),
    V = RegExp("\\s*(true|false)", "i");
function B(e) {
    return `${e}:`;
}
function j(e) {
    return RegExp(B(e), "i");
}
function H(e) {
    let t,
        n = e.getMatch(1),
        r = (e) => (null != e ? e?.id : null);
    return (
        null !=
            (t = b.Ut1.test(n)
                ? n
                : r(
                      n === b.ME
                          ? g.default.getCurrentUser()
                          : null != e.getMatch(4)
                            ? g.default.findByTag(e.getMatch(4))
                            : g.default.findByTag(e.getMatch(2), e.getMatch(3)),
                  )) && (e.setData("userId", t), !0)
    );
}
function Y(e, t) {
    let n,
        r,
        i = e.getFullMatch().trim().toLowerCase(),
        a = P()[i];
    return (
        null != a
            ? ([n, r] = a())
            : R().has(i)
              ? ([n, r] = x(i, "MMMM", "month"))
              : O().has(i)
                ? ([n, r] = x(i, "dddd", "day"))
                : D().has(i)
                  ? ([n, r] = x(i, "YYYY", "year"))
                  : ([n, r] = x(i, b.ump, "day")),
        !!(n.isValid() && r.isValid()) &&
            ("before" === t ? ((r = n), (n = null)) : "after" === t && ((n = r), (r = null)),
            e.setData("start", n),
            e.setData("end", r),
            !0)
    );
}
function W(e, t, n) {
    let r = _.Ay.getChannels(n)[_.I6].concat(_.Ay.getChannels(n)[_.vM]),
        i = _.Ay.getTextChannelNameDisambiguations(n),
        a = v.A.getCurrentConfig({ location: "guildChannelValidator" }).enabled,
        o = s()
            .chain(r)
            .map((e) => {
                let { channel: t } = e;
                return t;
            })
            .concat(a && null != n ? d.A.getAllThreadsForGuild(n) : [])
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
function K(e, t) {
    let n = Object.values(d.A.getMutablePrivateChannels()).filter((e) => {
        if (e.isGroupDM() && t === (0, c.m1)(e, g.default, f.A)) return !0;
        if (e.isDM()) {
            let n = e.getRecipientId(),
                r = g.default.getUser(n);
            return null != r && t === I.Ay.getUserTag(r);
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
function $(e, t) {
    let n = e.getMatch(1);
    return b.Ut1.test(n)
        ? (e.setData("channelIds", [n]), !0)
        : (n.startsWith('"') && n.endsWith('"') && (n = n.substring(1, n.length - 1).replaceAll(/\\(.)/g, (e, t) => t)),
            (0, S._B)(t))
          ? W(e, n, t.guildId)
          : t.type === b.I4_.DMS && !p.A.hidePersonalInformation && K(e, n);
}
function z(e) {
    let t = {
        [N.intl.string(N.t.ZNR2fi)]: "link",
        [N.intl.string(N.t["20uQR3"])]: "embed",
        [N.intl.string(N.t.L4lxyE)]: "poll",
        [N.intl.string(N.t.nrpA5E)]: "snapshot",
        [N.intl.string(N.t["AV/v6i"])]: "file",
        [N.intl.string(N.t.XM9XGP)]: "video",
        [N.intl.string(N.t.TNLcpx)]: "image",
        [N.intl.string(N.t.F8Wf0e)]: "sound",
        [N.intl.string(N.t.PJgX2h)]: "sticker",
    }[e.getMatch(1)];
    return null != t && "" !== t && (e.setData("has", t), !0);
}
function q(e) {
    let t = {
        [N.intl.string(N.t.tPZo4p)]: "user",
        [N.intl.string(N.t.JL7sRS)]: "bot",
        [N.intl.string(N.t.WjkIKU)]: "webhook",
    }[e.getMatch(1)];
    return null != t && "" !== t && (e.setData("author_type", t), !0);
}
function X() {
    return [...Array.from(R()), ...Array.from(O()), ...Array.from(D()), ...Object.keys(P())];
}
function Z(e, t, n) {
    return Q(e, t, X()).map((e) => ({ ...e, group: n, key: `${n}-${e.text}` }));
}
function Q(e, t, n) {
    let r = e.toLocaleLowerCase();
    return s()(n)
        .filter((e) => i()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function J(e) {
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
                    r(g.default.getUser(e));
                } else
                    t.isGroupDM() &&
                        t.recipients.forEach((e) => {
                            r(g.default.getUser(e));
                        });
        }),
        i
    );
}
function ee(e) {
    let { query: t, searchContext: n, maxResults: r = 10, tokens: i } = e,
        a = { query: (t = t.trim().split("#")[0]), limit: r, request: !1, boosters: (0, E.X3)(u.rD.USER) },
        s = [];
    switch (n.type) {
        case b.I4_.GUILD:
        case b.I4_.GUILD_CHANNEL:
        case b.I4_.THREAD:
            if (0 === t.length) {
                let e = [],
                    t = new Set(),
                    i = (n) => {
                        null == n ||
                            t.has(n.id) ||
                            f.A.isBlockedOrIgnored(n.id) ||
                            (e.push({ user: n, text: I.Ay.getUserTag(n) }), t.add(n.id));
                    },
                    a = h.A.getCurrentlySelectedChannelId(n.guildId);
                return (
                    E.Ay.getRecentlyTalked(a, r).forEach((e) => {
                        let { record: t } = e;
                        return i(t);
                    }),
                    y.A.getRecentMessageAuthorIds(n.guildId).forEach((e) => i(g.default.getUser(e))),
                    e.slice(0, r)
                );
            }
            s = E.Ay.queryGuildUsers({ ...a, guildId: n.guildId });
            break;
        case b.I4_.CHANNEL:
            s = E.Ay.queryChannelUsers({ ...a, channelId: n.channelId });
            break;
        case b.I4_.DMS:
            let o = J(i ?? []);
            if (null != o && o.length > 0) {
                let e = g.default.getCurrentUser();
                null != e && o.push(e), (s = E.Ay.queryUsers({ ...a, users: o, boosters: (0, E.X3)(u.rD.USER) }));
            } else s = E.Ay.queryAllUsers({ ...a, boosters: (0, E.X3)(u.rD.USER) });
            break;
        default:
            return [];
    }
    let l = g.default.getCurrentUser(),
        c = t.toLowerCase().replace(/^@/, ""),
        d = null != l && t.length > 0 && (N.intl.string(N.t.Qf3ptv).startsWith(c) || b.ME.substr(1).startsWith(c)),
        _ = s
            .filter((e) => {
                let { record: t } = e;
                return !f.A.isBlockedOrIgnored(t.id) && (!d || t.id !== l?.id);
            })
            .map((e) => {
                let { record: t } = e;
                return { text: I.Ay.getUserTag(t), user: t };
            });
    return d && _.unshift({ text: b.ME, user: l }), _;
}
function et() {
    return !p.A.hidePersonalInformation;
}
function en(e, t, n) {
    let r = E.Ay.queryGroupDMs({ query: e, limit: t, fuzzy: !0, boosters: (0, E.X3)(u.rD.GROUP_DM) }),
        i = E.Ay.queryDMChannels({ query: e, limit: t, boosters: (0, E.X3)(u.rD.USER) }),
        a = s()(r.concat(i))
            .sort(u.vH)
            .map((e) => {
                let { record: t, comparator: n } = e;
                return { text: n, channel: t, key: t?.id };
            })
            .filter((e) => null != e.text && null != e.channel && null != e.key)
            .value();
    if (0 === e.length && n) {
        let e = h.A.getChannelId(),
            t = d.A.getChannel(e);
        if (null != t && t.isPrivate()) {
            let n = a.findIndex((t) => {
                let { channel: n } = t;
                return n.id === e;
            });
            if (-1 !== n) {
                let e = a[n];
                a.splice(n, 1), a.unshift(e);
            } else if (t.isGroupDM()) {
                let e = (0, c.m1)(t, g.default, f.A);
                a.unshift({ text: e, channel: t, key: t.id });
            } else if (t.isDM()) {
                let e = t.getRecipientId(),
                    n = g.default.getUser(e);
                if (null != n) {
                    let e = I.Ay.getUserTag(n);
                    a.unshift({ text: e, channel: t, key: t.id });
                }
            }
        }
    }
    return a.slice(0, t);
}
function er(e, t, n) {
    let r = v.A.getCurrentConfig({ location: "getGuildChannelAutocompletions" }).enabled,
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
        let e = h.A.getChannelId(t),
            n = i.find((t) => t.id === e);
        null != n && (i.splice(i.indexOf(n), 1), i.unshift(n));
    }
    let a = _.Ay.getTextChannelNameDisambiguations(t);
    return s()(i)
        .take(n)
        .map((e) => ({ text: `${a[e.id]?.name ?? e.name}`, channel: e, key: e.id }))
        .value();
}
function ei(e) {
    let { query: t, searchContext: n, maxResults: r } = e;
    return ((t = t.trim()).startsWith('"') && t.endsWith('"')
        ? (t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t))
        : t.startsWith('"') && (t = t.substring(1).replaceAll(/\\(.)/g, (e, t) => t)),
    "#" === t[0] && (t = t.substring(1)),
    (0, S._B)(n))
        ? er(t, n.guildId, r)
        : n.type !== b.I4_.DMS || p.A.hidePersonalInformation
          ? []
          : en(t, r, !0);
}
let ea = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var es = (function (e) {
    return (e.FILTER = "FILTER"), (e.ANSWER = "ANSWER"), e;
})({});
function eo(e) {
    let t = [N.intl.string(N.t.tPZo4p), N.intl.string(N.t.JL7sRS), N.intl.string(N.t.WjkIKU)],
        n = [
            N.intl.string(N.t.TNLcpx),
            N.intl.string(N.t.XM9XGP),
            N.intl.string(N.t.ZNR2fi),
            N.intl.string(N.t["AV/v6i"]),
            N.intl.string(N.t["20uQR3"]),
            N.intl.string(N.t.F8Wf0e),
            N.intl.string(N.t.L4lxyE),
            N.intl.string(N.t.PJgX2h),
            N.intl.string(N.t.nrpA5E),
        ];
    return {
        [b.LWr.FILTER_FROM]: {
            regex: j(N.intl.string(N.t["1TUdFo"])),
            componentType: "FILTER",
            key: B(N.intl.string(N.t["1TUdFo"])),
            plainText: N.intl.string(N.t["1TUdFo"]),
            validator: et,
            getAutocompletions: ee,
        },
        [b.LWr.ANSWER_USERNAME_FROM]: {
            follows: [b.LWr.FILTER_FROM],
            regex: ea,
            validator: H,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "author_id",
        },
        [b.LWr.FILTER_MENTIONS]: {
            regex: j(N.intl.string(N.t["i96lO+"])),
            componentType: "FILTER",
            key: B(N.intl.string(N.t["i96lO+"])),
            plainText: N.intl.string(N.t["i96lO+"]),
            validator: et,
            getAutocompletions: ee,
        },
        [b.LWr.ANSWER_USERNAME_MENTIONS]: {
            follows: [b.LWr.FILTER_MENTIONS],
            regex: ea,
            validator: H,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "mentions",
        },
        [b.LWr.FILTER_HAS]: {
            regex: j(N.intl.string(N.t.CqCvir)),
            componentType: "FILTER",
            key: B(N.intl.string(N.t.CqCvir)),
            plainText: N.intl.string(N.t.CqCvir),
            getAutocompletions(e) {
                let { query: t, maxResults: r } = e;
                return Q(t, r, n);
            },
        },
        [b.LWr.ANSWER_HAS]: {
            regex: RegExp(`(?:\\s*-?(${n.map((e) => A.A.escape(e)).join("|")}))`, "i"),
            follows: [b.LWr.FILTER_HAS],
            validator: z,
            componentType: "ANSWER",
            queryKey: "has",
        },
        [b.LWr.FILTER_FILE_TYPE]: {
            regex: j(N.intl.string(N.t.TMNjFm)),
            key: B(N.intl.string(N.t.TMNjFm)),
            plainText: N.intl.string(N.t.TMNjFm),
            componentType: "FILTER",
        },
        [b.LWr.ANSWER_FILE_TYPE]: {
            regex: /(?:\s*([^\s]+))/,
            follows: [b.LWr.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_extensions",
        },
        [b.LWr.FILTER_FILE_NAME]: {
            regex: j(N.intl.string(N.t["5xtLRC"])),
            key: B(N.intl.string(N.t["5xtLRC"])),
            plainText: N.intl.string(N.t["5xtLRC"]),
            componentType: "FILTER",
        },
        [b.LWr.ANSWER_FILE_NAME]: {
            regex: /(?:\s*([^\s]+)(?=\s))/,
            follows: [b.LWr.FILTER_FILE_NAME],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_filename",
        },
        [b.LWr.FILTER_BEFORE]: {
            regex: j(N.intl.string(N.t["qZ+7BA"])),
            componentType: "FILTER",
            key: B(N.intl.string(N.t["qZ+7BA"])),
            plainText: N.intl.string(N.t["qZ+7BA"]),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return Z(t, n, b.LWr.FILTER_BEFORE);
            },
        },
        [b.LWr.FILTER_ON]: {
            regex: j(`(${N.intl.string(N.t.tIxkOo)}|${N.intl.string(N.t.h2NzSd)})`),
            componentType: "FILTER",
            key: B(N.intl.string(N.t.h2NzSd)),
            plainText: N.intl.string(N.t.h2NzSd),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return Z(t, n, b.LWr.FILTER_ON);
            },
        },
        [b.LWr.FILTER_AFTER]: {
            regex: j(N.intl.string(N.t.KSDx7M)),
            componentType: "FILTER",
            key: B(N.intl.string(N.t.KSDx7M)),
            plainText: N.intl.string(N.t.KSDx7M),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return Z(t, n, b.LWr.FILTER_AFTER);
            },
        },
        [b.LWr.ANSWER_BEFORE]: {
            regex: F,
            follows: [b.LWr.FILTER_BEFORE],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => Y(e, "before"),
        },
        [b.LWr.ANSWER_ON]: {
            regex: F,
            follows: [b.LWr.FILTER_ON],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => Y(e, "on"),
        },
        [b.LWr.ANSWER_AFTER]: {
            regex: F,
            follows: [b.LWr.FILTER_AFTER],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => Y(e, "after"),
        },
        [b.LWr.FILTER_IN]: {
            regex: j(N.intl.string(N.t.WNpFHa)),
            componentType: "FILTER",
            key: B(N.intl.string(N.t.WNpFHa)),
            plainText: N.intl.string(N.t.WNpFHa),
            validator: () => {
                let t = e ?? T.A.getSelectedSearchContext();
                return null != t && (0, S.Wg)(t);
            },
            getAutocompletions: ei,
        },
        [b.LWr.ANSWER_IN]: {
            regex: C.r,
            mutable: !0,
            follows: [b.LWr.FILTER_IN],
            componentType: "ANSWER",
            validator: (t) => {
                let n = e ?? T.A.getSelectedSearchContext();
                return null != n && $(t, n);
            },
            queryKey: "channel_id",
        },
        [b.LWr.FILTER_PINNED]: {
            regex: j(N.intl.string(N.t["0B74eY"])),
            componentType: "FILTER",
            key: B(N.intl.string(N.t["0B74eY"])),
            plainText: N.intl.string(N.t["0B74eY"]),
            getAutocompletions: () => [{ text: "true" }, { text: "false" }],
        },
        [b.LWr.ANSWER_PINNED]: {
            regex: V,
            componentType: "ANSWER",
            follows: [b.LWr.FILTER_PINNED],
            queryKey: "pinned",
            validator: (e) => {
                let t = e.getMatch(1);
                return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0);
            },
        },
        [b.LWr.FILTER_AUTHOR_TYPE]: {
            regex: j(N.intl.string(N.t.us8IQi)),
            componentType: "FILTER",
            key: B(N.intl.string(N.t.us8IQi)),
            plainText: N.intl.string(N.t.us8IQi),
            getAutocompletions(e) {
                let { query: n, maxResults: r } = e;
                return Q(n, r, t);
            },
        },
        [b.LWr.ANSWER_AUTHOR_TYPE]: {
            regex: RegExp(`(?:\\s*-?(${t.map((e) => A.A.escape(e)).join("|")}))`, "i"),
            follows: [b.LWr.FILTER_AUTHOR_TYPE],
            validator: q,
            componentType: "ANSWER",
            queryKey: "author_type",
        },
    };
}
let el = {};
function eu() {
    return eo({ type: b.I4_.DMS });
}
function ec() {
    Object.assign(el, eo());
}
function ed(e) {
    return b.l90.test(e);
}
function e_(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(el).length,
        n = [];
    for (let r of Object.keys(el)) {
        if (n.length >= t) break;
        let a = el[r].key;
        ed(r) && null != a && i()(e.toLowerCase(), a) && n.push({ token: r, text: a });
    }
    return n;
}
function ef(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, "");
    return N.intl.string(N.t.Qf3ptv).startsWith(t) || b.ME.substring(1).startsWith(t);
}
let eh = el;
