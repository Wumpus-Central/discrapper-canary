"use strict";
n.d(t, {
    Ay: () => ef,
    G0: () => eu,
    If: () => ec,
    WL: () => e_,
    Yd: () => K,
    gR: () => ed,
    gU: () => el,
    sC: () => j,
    v1: () => ea,
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
    p = n(309010),
    h = n(351906),
    m = n(287809),
    g = n(248465),
    E = n(257120),
    A = n(427262),
    I = n(692986),
    T = n(268988),
    y = n(822382),
    S = n(768278),
    v = n(233003),
    C = n(652215),
    b = n(985018);
function N() {
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
        s()
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
        [b.intl.string(b.t.HYiVEQ)]: () => L("day"),
        [b.intl.string(b.t.cu86KC)]: () => L("day", -1),
        [b.intl.string(b.t["FvBj/6"])]: () => L("week"),
        [b.intl.string(b.t["20uWCw"])]: () => L("month"),
        [b.intl.string(b.t["dXC/hn"])]: () => L("year"),
    };
}
let P = "([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})",
    M = "\\d{4}",
    k = "([0-9]{4})-([0-9]{1,2})",
    U = "([^\\d\\s]+)",
    G = RegExp(`(?:\\s*(${P}|${k}|${M}|${U}))`, "i"),
    V = RegExp("\\s*(true|false)", "i");
function F(e) {
    return `${e}:`;
}
function B(e) {
    return RegExp(F(e), "i");
}
function j(e) {
    let t,
        n = e.getMatch(1),
        r = (e) => (null != e ? e?.id : null);
    return (
        null !=
            (t = C.Ut1.test(n)
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
function H(e, t) {
    let n,
        r,
        i = e.getFullMatch().trim().toLowerCase(),
        a = x()[i];
    return (
        null != a
            ? ([n, r] = a())
            : N().has(i)
              ? ([n, r] = w(i, "MMMM", "month"))
              : R().has(i)
                ? ([n, r] = w(i, "dddd", "day"))
                : O().has(i)
                  ? ([n, r] = w(i, "YYYY", "year"))
                  : ([n, r] = w(i, C.ump, "day")),
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
        a = S.A.getCurrentConfig({ location: "guildChannelValidator" }).enabled,
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
    return C.Ut1.test(n)
        ? (e.setData("channelIds", [n]), !0)
        : (n.startsWith('"') && n.endsWith('"') && (n = n.substring(1, n.length - 1).replaceAll(/\\(.)/g, (e, t) => t)),
            (0, y._B)(t))
          ? Y(e, n, t.guildId)
          : t.type === C.I4_.DMS && !h.A.hidePersonalInformation && W(e, n);
}
function z(e) {
    let t = {
        [b.intl.string(b.t.ZNR2fi)]: "link",
        [b.intl.string(b.t["20uQR3"])]: "embed",
        [b.intl.string(b.t.L4lxyE)]: "poll",
        [b.intl.string(b.t.nrpA5E)]: "snapshot",
        [b.intl.string(b.t["AV/v6i"])]: "file",
        [b.intl.string(b.t.XM9XGP)]: "video",
        [b.intl.string(b.t.TNLcpx)]: "image",
        [b.intl.string(b.t.F8Wf0e)]: "sound",
        [b.intl.string(b.t.PJgX2h)]: "sticker",
    }[e.getMatch(1)];
    return null != t && "" !== t && (e.setData("has", t), !0);
}
function $(e) {
    let t = {
        [b.intl.string(b.t.tPZo4p)]: "user",
        [b.intl.string(b.t.JL7sRS)]: "bot",
        [b.intl.string(b.t.WjkIKU)]: "webhook",
    }[e.getMatch(1)];
    return null != t && "" !== t && (e.setData("author_type", t), !0);
}
function q() {
    return [...Array.from(N()), ...Array.from(R()), ...Array.from(O()), ...Object.keys(x())];
}
function Z(e, t, n) {
    return Q(e, t, q()).map((e) => ({ ...e, group: n, key: `${n}-${e.text}` }));
}
function Q(e, t, n) {
    let r = e.toLocaleLowerCase();
    return s()(n)
        .filter((e) => i()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function X(e) {
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
        a = { query: (t = t.trim().split("#")[0]), limit: r, request: !1, boosters: (0, g.X3)(u.rD.USER) },
        s = [];
    switch (n.type) {
        case C.I4_.GUILD:
        case C.I4_.GUILD_CHANNEL:
        case C.I4_.THREAD:
            if (0 === t.length) {
                let e = [],
                    t = new Set(),
                    i = (n) => {
                        null == n ||
                            t.has(n.id) ||
                            f.A.isBlockedOrIgnored(n.id) ||
                            (e.push({ user: n, text: A.Ay.getUserTag(n) }), t.add(n.id));
                    },
                    a = p.A.getCurrentlySelectedChannelId(n.guildId);
                return (
                    g.Ay.getRecentlyTalked(a, r).forEach((e) => {
                        let { record: t } = e;
                        return i(t);
                    }),
                    T.A.getRecentMessageAuthorIds(n.guildId).forEach((e) => i(m.default.getUser(e))),
                    e.slice(0, r)
                );
            }
            s = g.Ay.queryGuildUsers({ ...a, guildId: n.guildId });
            break;
        case C.I4_.CHANNEL:
            s = g.Ay.queryChannelUsers({ ...a, channelId: n.channelId });
            break;
        case C.I4_.DMS:
            let o = X(i ?? []);
            if (null != o && o.length > 0) {
                let e = m.default.getCurrentUser();
                null != e && o.push(e), (s = g.Ay.queryUsers({ ...a, users: o, boosters: (0, g.X3)(u.rD.USER) }));
            } else s = g.Ay.queryAllUsers({ ...a, boosters: (0, g.X3)(u.rD.USER) });
            break;
        default:
            return [];
    }
    let l = m.default.getCurrentUser(),
        c = t.toLowerCase().replace(/^@/, ""),
        d = null != l && t.length > 0 && (b.intl.string(b.t.Qf3ptv).startsWith(c) || C.ME.substr(1).startsWith(c)),
        _ = s
            .filter((e) => {
                let { record: t } = e;
                return !f.A.isBlockedOrIgnored(t.id) && (!d || t.id !== l?.id);
            })
            .map((e) => {
                let { record: t } = e;
                return { text: A.Ay.getUserTag(t), user: t };
            });
    return d && _.unshift({ text: C.ME, user: l }), _;
}
function ee() {
    return !h.A.hidePersonalInformation;
}
function et(e, t, n) {
    let r = g.Ay.queryGroupDMs({ query: e, limit: t, fuzzy: !0, boosters: (0, g.X3)(u.rD.GROUP_DM) }),
        i = g.Ay.queryDMChannels({ query: e, limit: t, boosters: (0, g.X3)(u.rD.USER) }),
        a = s()(r.concat(i))
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
            let n = a.findIndex((t) => {
                let { channel: n } = t;
                return n.id === e;
            });
            if (-1 !== n) {
                let e = a[n];
                a.splice(n, 1), a.unshift(e);
            } else if (t.isGroupDM()) {
                let e = (0, c.m1)(t, m.default, f.A);
                a.unshift({ text: e, channel: t, key: t.id });
            } else if (t.isDM()) {
                let e = t.getRecipientId(),
                    n = m.default.getUser(e);
                if (null != n) {
                    let e = A.Ay.getUserTag(n);
                    a.unshift({ text: e, channel: t, key: t.id });
                }
            }
        }
    }
    return a.slice(0, t);
}
function en(e, t, n) {
    let r = S.A.getCurrentConfig({ location: "getGuildChannelAutocompletions" }).enabled,
        i = g.Ay.queryChannels({
            query: e,
            type: _.I6,
            guildId: t,
            limit: 1 / 0,
            allowEmptyQueries: !0,
            allowSnowflake: !0,
            includeAllThreads: r,
            boosters: (0, g.X3)(u.rD.TEXT_CHANNEL),
        })
            .concat(
                g.Ay.queryChannels({
                    query: e,
                    type: _.vM,
                    guildId: t,
                    limit: 1 / 0,
                    allowEmptyQueries: !0,
                    allowSnowflake: !0,
                    boosters: (0, g.X3)(u.rD.VOICE_CHANNEL),
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
    let a = _.Ay.getTextChannelNameDisambiguations(t);
    return s()(i)
        .take(n)
        .map((e) => ({ text: `${a[e.id]?.name ?? e.name}`, channel: e, key: e.id }))
        .value();
}
function er(e) {
    let { query: t, searchContext: n, maxResults: r } = e;
    return ((t = t.trim()).startsWith('"') && t.endsWith('"')
        ? (t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t))
        : t.startsWith('"') && (t = t.substring(1).replaceAll(/\\(.)/g, (e, t) => t)),
    "#" === t[0] && (t = t.substring(1)),
    (0, y._B)(n))
        ? en(t, n.guildId, r)
        : n.type !== C.I4_.DMS || h.A.hidePersonalInformation
          ? []
          : et(t, r, !0);
}
let ei = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var ea = (function (e) {
    return (e.FILTER = "FILTER"), (e.ANSWER = "ANSWER"), e;
})({});
function es(e) {
    let t = [b.intl.string(b.t.tPZo4p), b.intl.string(b.t.JL7sRS), b.intl.string(b.t.WjkIKU)],
        n = [
            b.intl.string(b.t.TNLcpx),
            b.intl.string(b.t.XM9XGP),
            b.intl.string(b.t.ZNR2fi),
            b.intl.string(b.t["AV/v6i"]),
            b.intl.string(b.t["20uQR3"]),
            b.intl.string(b.t.F8Wf0e),
            b.intl.string(b.t.L4lxyE),
            b.intl.string(b.t.PJgX2h),
            b.intl.string(b.t.nrpA5E),
        ];
    return {
        [C.LWr.FILTER_FROM]: {
            regex: B(b.intl.string(b.t["1TUdFo"])),
            componentType: "FILTER",
            key: F(b.intl.string(b.t["1TUdFo"])),
            plainText: b.intl.string(b.t["1TUdFo"]),
            validator: ee,
            getAutocompletions: J,
        },
        [C.LWr.ANSWER_USERNAME_FROM]: {
            follows: [C.LWr.FILTER_FROM],
            regex: ei,
            validator: j,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "author_id",
        },
        [C.LWr.FILTER_MENTIONS]: {
            regex: B(b.intl.string(b.t["i96lO+"])),
            componentType: "FILTER",
            key: F(b.intl.string(b.t["i96lO+"])),
            plainText: b.intl.string(b.t["i96lO+"]),
            validator: ee,
            getAutocompletions: J,
        },
        [C.LWr.ANSWER_USERNAME_MENTIONS]: {
            follows: [C.LWr.FILTER_MENTIONS],
            regex: ei,
            validator: j,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "mentions",
        },
        [C.LWr.FILTER_HAS]: {
            regex: B(b.intl.string(b.t.CqCvir)),
            componentType: "FILTER",
            key: F(b.intl.string(b.t.CqCvir)),
            plainText: b.intl.string(b.t.CqCvir),
            getAutocompletions(e) {
                let { query: t, maxResults: r } = e;
                return Q(t, r, n);
            },
        },
        [C.LWr.ANSWER_HAS]: {
            regex: RegExp(`(?:\\s*-?(${n.map((e) => E.A.escape(e)).join("|")}))`, "i"),
            follows: [C.LWr.FILTER_HAS],
            validator: z,
            componentType: "ANSWER",
            queryKey: "has",
        },
        [C.LWr.FILTER_FILE_TYPE]: {
            regex: B(b.intl.string(b.t.TMNjFm)),
            key: F(b.intl.string(b.t.TMNjFm)),
            plainText: b.intl.string(b.t.TMNjFm),
            componentType: "FILTER",
        },
        [C.LWr.ANSWER_FILE_TYPE]: {
            regex: /(?:\s*([^\s]+))/,
            follows: [C.LWr.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_extensions",
        },
        [C.LWr.FILTER_FILE_NAME]: {
            regex: B(b.intl.string(b.t["5xtLRC"])),
            key: F(b.intl.string(b.t["5xtLRC"])),
            plainText: b.intl.string(b.t["5xtLRC"]),
            componentType: "FILTER",
        },
        [C.LWr.ANSWER_FILE_NAME]: {
            regex: /(?:\s*([^\s]+)(?=\s))/,
            follows: [C.LWr.FILTER_FILE_NAME],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_filename",
        },
        [C.LWr.FILTER_BEFORE]: {
            regex: B(b.intl.string(b.t["qZ+7BA"])),
            componentType: "FILTER",
            key: F(b.intl.string(b.t["qZ+7BA"])),
            plainText: b.intl.string(b.t["qZ+7BA"]),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return Z(t, n, C.LWr.FILTER_BEFORE);
            },
        },
        [C.LWr.FILTER_ON]: {
            regex: B(`(${b.intl.string(b.t.tIxkOo)}|${b.intl.string(b.t.h2NzSd)})`),
            componentType: "FILTER",
            key: F(b.intl.string(b.t.h2NzSd)),
            plainText: b.intl.string(b.t.h2NzSd),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return Z(t, n, C.LWr.FILTER_ON);
            },
        },
        [C.LWr.FILTER_AFTER]: {
            regex: B(b.intl.string(b.t.KSDx7M)),
            componentType: "FILTER",
            key: F(b.intl.string(b.t.KSDx7M)),
            plainText: b.intl.string(b.t.KSDx7M),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return Z(t, n, C.LWr.FILTER_AFTER);
            },
        },
        [C.LWr.ANSWER_BEFORE]: {
            regex: G,
            follows: [C.LWr.FILTER_BEFORE],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => H(e, "before"),
        },
        [C.LWr.ANSWER_ON]: {
            regex: G,
            follows: [C.LWr.FILTER_ON],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => H(e, "on"),
        },
        [C.LWr.ANSWER_AFTER]: {
            regex: G,
            follows: [C.LWr.FILTER_AFTER],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => H(e, "after"),
        },
        [C.LWr.FILTER_IN]: {
            regex: B(b.intl.string(b.t.WNpFHa)),
            componentType: "FILTER",
            key: F(b.intl.string(b.t.WNpFHa)),
            plainText: b.intl.string(b.t.WNpFHa),
            validator: () => {
                let t = e ?? I.A.getSelectedSearchContext();
                return null != t && (0, y.Wg)(t);
            },
            getAutocompletions: er,
        },
        [C.LWr.ANSWER_IN]: {
            regex: v.r,
            mutable: !0,
            follows: [C.LWr.FILTER_IN],
            componentType: "ANSWER",
            validator: (t) => {
                let n = e ?? I.A.getSelectedSearchContext();
                return null != n && K(t, n);
            },
            queryKey: "channel_id",
        },
        [C.LWr.FILTER_PINNED]: {
            regex: B(b.intl.string(b.t["0B74eY"])),
            componentType: "FILTER",
            key: F(b.intl.string(b.t["0B74eY"])),
            plainText: b.intl.string(b.t["0B74eY"]),
            getAutocompletions: () => [{ text: "true" }, { text: "false" }],
        },
        [C.LWr.ANSWER_PINNED]: {
            regex: V,
            componentType: "ANSWER",
            follows: [C.LWr.FILTER_PINNED],
            queryKey: "pinned",
            validator: (e) => {
                let t = e.getMatch(1);
                return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0);
            },
        },
        [C.LWr.FILTER_AUTHOR_TYPE]: {
            regex: B(b.intl.string(b.t.us8IQi)),
            componentType: "FILTER",
            key: F(b.intl.string(b.t.us8IQi)),
            plainText: b.intl.string(b.t.us8IQi),
            getAutocompletions(e) {
                let { query: n, maxResults: r } = e;
                return Q(n, r, t);
            },
        },
        [C.LWr.ANSWER_AUTHOR_TYPE]: {
            regex: RegExp(`(?:\\s*-?(${t.map((e) => E.A.escape(e)).join("|")}))`, "i"),
            follows: [C.LWr.FILTER_AUTHOR_TYPE],
            validator: $,
            componentType: "ANSWER",
            queryKey: "author_type",
        },
    };
}
let eo = {};
function el() {
    return es({ type: C.I4_.DMS });
}
function eu() {
    Object.assign(eo, es());
}
function ec(e) {
    return C.l90.test(e);
}
function ed(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(eo).length,
        n = [];
    for (let r of Object.keys(eo)) {
        if (n.length >= t) break;
        let a = eo[r].key;
        ec(r) && null != a && i()(e.toLowerCase(), a) && n.push({ token: r, text: a });
    }
    return n;
}
function e_(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, "");
    return b.intl.string(b.t.Qf3ptv).startsWith(t) || C.ME.substring(1).startsWith(t);
}
let ef = eo;
