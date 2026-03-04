"use strict";
n.d(t, {
    Ay: () => e_,
    G0: () => el,
    If: () => eu,
    WL: () => ed,
    Yd: () => W,
    gR: () => ec,
    gU: () => eo,
    sC: () => B,
    v1: () => ei,
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
    y = n(233003),
    v = n(652215),
    N = n(985018);
function C() {
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
function b(e, t) {
    return [e, e.clone().add(1, t)];
}
function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return b(l()().startOf(e).add(t, e), e);
}
function L(e, t, n) {
    return b(l()(e, t).local(), n);
}
function w() {
    return {
        [N.intl.string(N.t.HYiVEQ)]: () => D("day"),
        [N.intl.string(N.t.cu86KC)]: () => D("day", -1),
        [N.intl.string(N.t["FvBj/6"])]: () => D("week"),
        [N.intl.string(N.t["20uWCw"])]: () => D("month"),
        [N.intl.string(N.t["dXC/hn"])]: () => D("year"),
    };
}
let M = "([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})",
    x = "\\d{4}",
    P = "([0-9]{4})-([0-9]{1,2})",
    k = "([^\\d\\s]+)",
    U = RegExp(`(?:\\s*(${M}|${P}|${x}|${k}))`, "i"),
    G = RegExp("\\s*(true|false)", "i");
function F(e) {
    return `${e}:`;
}
function V(e) {
    return RegExp(F(e), "i");
}
function B(e) {
    let t,
        n = e.getMatch(1),
        r = (e) => (null != e ? e?.id : null);
    return (
        null !=
            (t = v.Ut1.test(n)
                ? n
                : r(
                      n === v.ME
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
        s = w()[i];
    return (
        null != s
            ? ([n, r] = s())
            : C().has(i)
              ? ([n, r] = L(i, "MMMM", "month"))
              : R().has(i)
                ? ([n, r] = L(i, "dddd", "day"))
                : O().has(i)
                  ? ([n, r] = L(i, "YYYY", "year"))
                  : ([n, r] = L(i, v.ump, "day")),
        !!(n.isValid() && r.isValid()) &&
            ("before" === t ? ((r = n), (n = null)) : "after" === t && ((n = r), (r = null)),
            e.setData("start", n),
            e.setData("end", r),
            !0)
    );
}
function j(e, t, n) {
    let r = _.Ay.getChannels(n)[_.I6].concat(_.Ay.getChannels(n)[_.vM]),
        i = _.Ay.getTextChannelNameDisambiguations(n),
        s = a()
            .chain(r)
            .map((e) => {
                let { channel: t } = e;
                return t;
            })
            .concat(null != n ? d.A.getAllThreadsForGuild(n) : [])
            .filter((e) => t === (i[e.id]?.name ?? e.name))
            .value();
    return (
        s?.length > 0 &&
        (e.setData(
            "channelIds",
            s.map((e) => e.id),
        ),
        !0)
    );
}
function Y(e, t) {
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
function W(e, t) {
    let n = e.getMatch(1);
    return v.Ut1.test(n)
        ? (e.setData("channelIds", [n]), !0)
        : (n.startsWith('"') && n.endsWith('"') && (n = n.substring(1, n.length - 1).replaceAll(/\\(.)/g, (e, t) => t)),
            (0, S._B)(t))
          ? j(e, n, t.guildId)
          : t.type === v.I4_.DMS && !h.A.hidePersonalInformation && Y(e, n);
}
function K(e) {
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
function $(e) {
    let t = {
        [N.intl.string(N.t.tPZo4p)]: "user",
        [N.intl.string(N.t.JL7sRS)]: "bot",
        [N.intl.string(N.t.WjkIKU)]: "webhook",
    }[e.getMatch(1)];
    return null != t && "" !== t && (e.setData("author_type", t), !0);
}
function z() {
    return [...Array.from(C()), ...Array.from(R()), ...Array.from(O()), ...Object.keys(w())];
}
function q(e, t, n) {
    return Z(e, t, z()).map((e) => ({ ...e, group: n, key: `${n}-${e.text}` }));
}
function Z(e, t, n) {
    let r = e.toLocaleLowerCase();
    return a()(n)
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
function Q(e) {
    let { query: t, searchContext: n, maxResults: r = 10, tokens: i } = e,
        s = { query: (t = t.trim().split("#")[0]), limit: r, request: !1, boosters: (0, E.X3)(u.rD.USER) },
        a = [];
    switch (n.type) {
        case v.I4_.GUILD:
        case v.I4_.GUILD_CHANNEL:
        case v.I4_.THREAD:
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
        case v.I4_.CHANNEL:
            a = E.Ay.queryChannelUsers({ ...s, channelId: n.channelId });
            break;
        case v.I4_.DMS:
            let o = X(i ?? []);
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
        d = null != l && t.length > 0 && (N.intl.string(N.t.Qf3ptv).startsWith(c) || v.ME.substr(1).startsWith(c)),
        _ = a
            .filter((e) => {
                let { record: t } = e;
                return !f.A.isBlockedOrIgnored(t.id) && (!d || t.id !== l?.id);
            })
            .map((e) => {
                let { record: t } = e;
                return { text: A.Ay.getUserTag(t), user: t };
            });
    return d && _.unshift({ text: v.ME, user: l }), _;
}
function J() {
    return !h.A.hidePersonalInformation;
}
function ee(e, t, n) {
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
function et(e, t, n) {
    let r = E.Ay.queryChannels({
        query: e,
        type: _.I6,
        guildId: t,
        limit: 1 / 0,
        allowEmptyQueries: !0,
        allowSnowflake: !0,
        includeAllThreads: !0,
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
    if (0 === e.length) {
        let e = p.A.getChannelId(t),
            n = r.find((t) => t.id === e);
        null != n && (r.splice(r.indexOf(n), 1), r.unshift(n));
    }
    let i = _.Ay.getTextChannelNameDisambiguations(t);
    return a()(r)
        .take(n)
        .map((e) => ({ text: `${i[e.id]?.name ?? e.name}`, channel: e, key: e.id }))
        .value();
}
function en(e) {
    let { query: t, searchContext: n, maxResults: r } = e;
    return ((t = t.trim()).startsWith('"') && t.endsWith('"')
        ? (t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t))
        : t.startsWith('"') && (t = t.substring(1).replaceAll(/\\(.)/g, (e, t) => t)),
    "#" === t[0] && (t = t.substring(1)),
    (0, S._B)(n))
        ? et(t, n.guildId, r)
        : n.type !== v.I4_.DMS || h.A.hidePersonalInformation
          ? []
          : ee(t, r, !0);
}
let er = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var ei = (function (e) {
    return (e.FILTER = "FILTER"), (e.ANSWER = "ANSWER"), e;
})({});
function es(e) {
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
        [v.LWr.FILTER_FROM]: {
            regex: V(N.intl.string(N.t["1TUdFo"])),
            componentType: "FILTER",
            key: F(N.intl.string(N.t["1TUdFo"])),
            plainText: N.intl.string(N.t["1TUdFo"]),
            validator: J,
            getAutocompletions: Q,
        },
        [v.LWr.ANSWER_USERNAME_FROM]: {
            follows: [v.LWr.FILTER_FROM],
            regex: er,
            validator: B,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "author_id",
        },
        [v.LWr.FILTER_MENTIONS]: {
            regex: V(N.intl.string(N.t["i96lO+"])),
            componentType: "FILTER",
            key: F(N.intl.string(N.t["i96lO+"])),
            plainText: N.intl.string(N.t["i96lO+"]),
            validator: J,
            getAutocompletions: Q,
        },
        [v.LWr.ANSWER_USERNAME_MENTIONS]: {
            follows: [v.LWr.FILTER_MENTIONS],
            regex: er,
            validator: B,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "mentions",
        },
        [v.LWr.FILTER_HAS]: {
            regex: V(N.intl.string(N.t.CqCvir)),
            componentType: "FILTER",
            key: F(N.intl.string(N.t.CqCvir)),
            plainText: N.intl.string(N.t.CqCvir),
            getAutocompletions(e) {
                let { query: t, maxResults: r } = e;
                return Z(t, r, n);
            },
        },
        [v.LWr.ANSWER_HAS]: {
            regex: RegExp(`(?:\\s*-?(${n.map((e) => g.A.escape(e)).join("|")}))`, "i"),
            follows: [v.LWr.FILTER_HAS],
            validator: K,
            componentType: "ANSWER",
            queryKey: "has",
        },
        [v.LWr.FILTER_LINK_FROM]: {
            regex: V(N.intl.string(N.t.RpRAZD)),
            key: F(N.intl.string(N.t.RpRAZD)),
            plainText: N.intl.string(N.t.RpRAZD),
            componentType: "FILTER",
        },
        [v.LWr.ANSWER_LINK_FROM]: {
            regex: y.G,
            follows: [v.LWr.FILTER_LINK_FROM],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "link_hostname",
        },
        [v.LWr.FILTER_FILE_TYPE]: {
            regex: V(N.intl.string(N.t.TMNjFm)),
            key: F(N.intl.string(N.t.TMNjFm)),
            plainText: N.intl.string(N.t.TMNjFm),
            componentType: "FILTER",
        },
        [v.LWr.ANSWER_FILE_TYPE]: {
            regex: y.G,
            follows: [v.LWr.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_extension",
        },
        [v.LWr.FILTER_FILE_NAME]: {
            regex: V(N.intl.string(N.t["5xtLRC"])),
            key: F(N.intl.string(N.t["5xtLRC"])),
            plainText: N.intl.string(N.t["5xtLRC"]),
            componentType: "FILTER",
        },
        [v.LWr.ANSWER_FILE_NAME]: {
            regex: y.G,
            follows: [v.LWr.FILTER_FILE_NAME],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_filename",
        },
        [v.LWr.FILTER_BEFORE]: {
            regex: V(N.intl.string(N.t["qZ+7BA"])),
            componentType: "FILTER",
            key: F(N.intl.string(N.t["qZ+7BA"])),
            plainText: N.intl.string(N.t["qZ+7BA"]),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return q(t, n, v.LWr.FILTER_BEFORE);
            },
        },
        [v.LWr.FILTER_ON]: {
            regex: V(`(${N.intl.string(N.t.tIxkOo)}|${N.intl.string(N.t.h2NzSd)})`),
            componentType: "FILTER",
            key: F(N.intl.string(N.t.h2NzSd)),
            plainText: N.intl.string(N.t.h2NzSd),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return q(t, n, v.LWr.FILTER_ON);
            },
        },
        [v.LWr.FILTER_AFTER]: {
            regex: V(N.intl.string(N.t.KSDx7M)),
            componentType: "FILTER",
            key: F(N.intl.string(N.t.KSDx7M)),
            plainText: N.intl.string(N.t.KSDx7M),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return q(t, n, v.LWr.FILTER_AFTER);
            },
        },
        [v.LWr.ANSWER_BEFORE]: {
            regex: U,
            follows: [v.LWr.FILTER_BEFORE],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => H(e, "before"),
        },
        [v.LWr.ANSWER_ON]: {
            regex: U,
            follows: [v.LWr.FILTER_ON],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => H(e, "on"),
        },
        [v.LWr.ANSWER_AFTER]: {
            regex: U,
            follows: [v.LWr.FILTER_AFTER],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => H(e, "after"),
        },
        [v.LWr.FILTER_IN]: {
            regex: V(N.intl.string(N.t.WNpFHa)),
            componentType: "FILTER",
            key: F(N.intl.string(N.t.WNpFHa)),
            plainText: N.intl.string(N.t.WNpFHa),
            validator: () => {
                let t = e ?? I.A.getSelectedSearchContext();
                return null != t && (0, S.Wg)(t);
            },
            getAutocompletions: en,
        },
        [v.LWr.ANSWER_IN]: {
            regex: y.r,
            mutable: !0,
            follows: [v.LWr.FILTER_IN],
            componentType: "ANSWER",
            validator: (t) => {
                let n = e ?? I.A.getSelectedSearchContext();
                return null != n && W(t, n);
            },
            queryKey: "channel_id",
        },
        [v.LWr.FILTER_PINNED]: {
            regex: V(N.intl.string(N.t["0B74eY"])),
            componentType: "FILTER",
            key: F(N.intl.string(N.t["0B74eY"])),
            plainText: N.intl.string(N.t["0B74eY"]),
            getAutocompletions: () => [{ text: "true" }, { text: "false" }],
        },
        [v.LWr.ANSWER_PINNED]: {
            regex: G,
            componentType: "ANSWER",
            follows: [v.LWr.FILTER_PINNED],
            queryKey: "pinned",
            validator: (e) => {
                let t = e.getMatch(1);
                return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0);
            },
        },
        [v.LWr.FILTER_AUTHOR_TYPE]: {
            regex: V(N.intl.string(N.t.us8IQi)),
            componentType: "FILTER",
            key: F(N.intl.string(N.t.us8IQi)),
            plainText: N.intl.string(N.t.us8IQi),
            getAutocompletions(e) {
                let { query: n, maxResults: r } = e;
                return Z(n, r, t);
            },
        },
        [v.LWr.ANSWER_AUTHOR_TYPE]: {
            regex: RegExp(`(?:\\s*-?(${t.map((e) => g.A.escape(e)).join("|")}))`, "i"),
            follows: [v.LWr.FILTER_AUTHOR_TYPE],
            validator: $,
            componentType: "ANSWER",
            queryKey: "author_type",
        },
    };
}
let ea = {};
function eo() {
    return es({ type: v.I4_.DMS });
}
function el() {
    Object.assign(ea, es());
}
function eu(e) {
    return v.l90.test(e);
}
function ec(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(ea).length,
        n = [];
    for (let r of Object.keys(ea)) {
        if (n.length >= t) break;
        let s = ea[r].key;
        eu(r) && null != s && i()(e.toLowerCase(), s) && n.push({ token: r, text: s });
    }
    return n;
}
function ed(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, "");
    return N.intl.string(N.t.Qf3ptv).startsWith(t) || v.ME.substring(1).startsWith(t);
}
let e_ = ea;
