"use strict";
n.d(t, {
    Yd: () => W,
    lq: () => Z,
    ok: () => X,
    G0: () => eo,
    v1: () => ei,
    Ay: () => e_,
    If: () => el,
    WL: () => ed,
    sC: () => H,
    gU: () => ea,
}),
    n(321073),
    n(667532);
var i,
    r = n(91871),
    s = n.n(r),
    a = n(735438),
    o = n.n(a),
    l = n(989349),
    d = n.n(l),
    _ = n(115718),
    u = n(47167),
    c = n(734057),
    E = n(808728),
    h = n(994500),
    m = n(309010),
    f = n(351906),
    g = n(287809),
    p = n(768038),
    A = n(427262),
    I = n(692986),
    T = n(268988),
    S = n(822382),
    N = n(5990),
    C = n(257120);
let R = /(?:\s*#?((?:"(\\\\|\\"|[^\\"])*")|(?:[^\s]+)))/i,
    O = /(?:\s*([^\s]+))/;
function y(e) {
    let t = [...e].sort((e, t) => t.length - e.length);
    return RegExp(`(?:\\s*(-?(?:${t.map((e) => C.A.escape(e)).join("|")})))`, "i");
}
function v(e, t, n) {
    let i = n.getMatch(1),
        r = i.startsWith("-"),
        s = t[r ? i.slice(1) : i];
    return null != s && "" !== s && (n.setData(e, r ? `-${s}` : s), !0);
}
var D = n(652215),
    L = n(985018);
function b() {
    return new Set(
        d()
            .months()
            .map((e) => e.toLowerCase()),
    );
}
function w() {
    return new Set(
        d()
            .weekdays()
            .map((e) => e.toLowerCase()),
    );
}
function P() {
    let e = new Date().getFullYear();
    return new Set(
        o()
            .range(2015, e + 1)
            .map((e) => e.toString()),
    );
}
function k(e, t) {
    return [e, e.clone().add(1, t)];
}
function M(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return k(d()().startOf(e).add(t, e), e);
}
function U(e, t, n) {
    return k(d()(e, t).local(), n);
}
function x() {
    return {
        [L.intl.string(L.t.HYiVEQ)]: () => M("day"),
        [L.intl.string(L.t.cu86KC)]: () => M("day", -1),
        [L.intl.string(L.t["FvBj/6"])]: () => M("week"),
        [L.intl.string(L.t["20uWCw"])]: () => M("month"),
        [L.intl.string(L.t["dXC/hn"])]: () => M("year"),
    };
}
let G = RegExp("(?:\\s*(([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})|([0-9]{4})-([0-9]{1,2})|\\d{4}|([^\\d\\s]+)))", "i"),
    V = RegExp("\\s*(true|false)", "i");
function F(e) {
    return `${e}:`;
}
function B(e) {
    return RegExp(F(e), "i");
}
function H(e) {
    let t,
        n = e.getMatch(1),
        i = (e) => (null != e ? e?.id : null);
    return (
        null !=
            (t = D.Ut1.test(n)
                ? n
                : i(
                      n === D.ME
                          ? g.default.getCurrentUser()
                          : null != e.getMatch(4)
                            ? g.default.findByTag(e.getMatch(4))
                            : g.default.findByTag(e.getMatch(2), e.getMatch(3)),
                  )) && (e.setData("userId", t), !0)
    );
}
function j(e, t) {
    let n,
        i,
        r = e.getFullMatch().trim().toLowerCase(),
        s = x()[r];
    return (
        null != s
            ? ([n, i] = s())
            : b().has(r)
              ? ([n, i] = U(r, "MMMM", "month"))
              : w().has(r)
                ? ([n, i] = U(r, "dddd", "day"))
                : P().has(r)
                  ? ([n, i] = U(r, "YYYY", "year"))
                  : ([n, i] = U(r, D.ump, "day")),
        !!(n.isValid() && i.isValid()) &&
            ("before" === t ? ((i = n), (n = null)) : "after" === t && ((n = i), (i = null)),
            e.setData("start", n),
            e.setData("end", i),
            !0)
    );
}
function W(e, t) {
    var n, i, r;
    let s = e.getMatch(1);
    if (D.Ut1.test(s)) return e.setData("channelIds", [s]), !0;
    if (
        (s.startsWith('"') && s.endsWith('"') && (s = s.substring(1, s.length - 1).replaceAll(/\\(.)/g, (e, t) => t)),
        (0, S._B)(t))
    ) {
        let r, a, l;
        return (
            (n = s),
            (i = t.guildId),
            (r = E.Ay.getChannels(i)[E.I6].concat(E.Ay.getChannels(i)[E.vM])),
            (a = E.Ay.getTextChannelNameDisambiguations(i)),
            (l = o()
                .chain(r)
                .map((e) => {
                    let { channel: t } = e;
                    return t;
                })
                .concat(null != i ? c.A.getAllThreadsForGuild(i) : [])
                .filter((e) => n === (a[e.id]?.name ?? (0, u.m1)(e, g.default, h.A)))
                .value()),
            l?.length > 0 &&
                (e.setData(
                    "channelIds",
                    l.map((e) => e.id),
                ),
                !0)
        );
    }
    if (t.type === D.I4_.DMS && !f.A.hidePersonalInformation) {
        let t;
        return (
            (r = s),
            (t = Object.values(c.A.getMutablePrivateChannels()).filter((e) => {
                if (e.isGroupDM() && r === (0, u.m1)(e, g.default, h.A)) return !0;
                if (e.isDM()) {
                    let t = e.getRecipientId(),
                        n = g.default.getUser(t);
                    return null != n && r === A.Ay.getUserTag(n);
                }
                return !1;
            })),
            t?.length > 0 &&
                (e.setData(
                    "channelIds",
                    t.map((e) => e.id),
                ),
                !0)
        );
    }
    return !1;
}
function Y() {
    return {
        [L.intl.string(L.t.ZNR2fi)]: "link",
        [L.intl.string(L.t["20uQR3"])]: "embed",
        [L.intl.string(L.t.L4lxyE)]: "poll",
        [L.intl.string(L.t.nrpA5E)]: "snapshot",
        [L.intl.string(L.t["AV/v6i"])]: "file",
        [L.intl.string(L.t.XM9XGP)]: "video",
        [L.intl.string(L.t.TNLcpx)]: "image",
        [L.intl.string(L.t.F8Wf0e)]: "sound",
        [L.intl.string(L.t.PJgX2h)]: "sticker",
    };
}
function K() {
    return {
        [L.intl.string(L.t.tPZo4p)]: "user",
        [L.intl.string(L.t.JL7sRS)]: "bot",
        [L.intl.string(L.t.WjkIKU)]: "webhook",
    };
}
function z(e, t) {
    let n = e.startsWith("-"),
        i = n ? e.slice(1) : e,
        r =
            Object.entries(t).find((e) => {
                let [, t] = e;
                return t === i;
            })?.[0] ?? i;
    return n ? `-${r}` : r;
}
function $(e) {
    return v("has", Y(), e);
}
function q(e) {
    return v("author_type", K(), e);
}
function X(e) {
    return z(e, Y());
}
function Z(e) {
    return z(e, K());
}
function Q(e, t, n) {
    return J(e, t, [...Array.from(b()), ...Array.from(w()), ...Array.from(P()), ...Object.keys(x())]).map((e) => ({
        ...e,
        group: n,
        key: `${n}-${e.text}`,
    }));
}
function J(e, t, n) {
    let i = e.toLocaleLowerCase();
    return o()(n)
        .filter((e) => s()(i, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function ee(e) {
    let { query: t, searchContext: n, maxResults: i = 10, tokens: r } = e,
        s = { query: (t = t.trim().split("#")[0]), limit: i, request: !1, boosters: (0, p.X3)(_.rD.USER) },
        a = [];
    switch (n.type) {
        case D.I4_.GUILD:
        case D.I4_.GUILD_CHANNEL:
        case D.I4_.THREAD:
            if (0 === t.length) {
                let e = [],
                    t = new Set(),
                    r = (n) => {
                        null == n ||
                            t.has(n.id) ||
                            h.A.isBlockedOrIgnored(n.id) ||
                            (e.push({ user: n, text: A.Ay.getUserTag(n) }), t.add(n.id));
                    },
                    s = m.A.getCurrentlySelectedChannelId(n.guildId);
                return (
                    p.Ay.getRecentlyTalked(s, i).forEach((e) => {
                        let { record: t } = e;
                        return r(t);
                    }),
                    T.A.getRecentMessageAuthorIds(n.guildId).forEach((e) => r(g.default.getUser(e))),
                    e.slice(0, i)
                );
            }
            a = p.Ay.queryGuildUsers({ ...s, guildId: n.guildId });
            break;
        case D.I4_.CHANNEL:
            a = p.Ay.queryChannelUsers({ ...s, channelId: n.channelId });
            break;
        case D.I4_.DMS:
            let o = (function (e) {
                if (null == e) return [];
                let t = new Set(),
                    n = [];
                e.forEach((e) => {
                    let t = e.getData("channelIds");
                    null != t && t.forEach((e) => n.push(e));
                });
                let i = (e) => {
                        null == e || t.has(e.id) || (r.push(e), t.add(e.id));
                    },
                    r = [];
                return (
                    n.forEach((e) => {
                        let t = c.A.getChannel(e);
                        if (null != t)
                            if (t.isDM()) {
                                let e = t.getRecipientId();
                                i(g.default.getUser(e));
                            } else
                                t.isGroupDM() &&
                                    t.recipients.forEach((e) => {
                                        i(g.default.getUser(e));
                                    });
                    }),
                    r
                );
            })(r ?? []);
            if (null != o && o.length > 0) {
                let e = g.default.getCurrentUser();
                null != e && o.push(e), (a = p.Ay.queryUsers({ ...s, users: o }));
            } else a = p.Ay.queryAllUsers({ ...s });
            break;
        default:
            return [];
    }
    let l = g.default.getCurrentUser(),
        d = t.toLowerCase().replace(/^@/, ""),
        u = null != l && t.length > 0 && (L.intl.string(L.t.Qf3ptv).startsWith(d) || D.ME.substr(1).startsWith(d)),
        E = a
            .filter((e) => {
                let { record: t } = e;
                return !h.A.isBlockedOrIgnored(t.id) && (!u || t.id !== l?.id);
            })
            .map((e) => {
                let { record: t } = e;
                return { text: A.Ay.getUserTag(t), user: t };
            });
    return u && E.unshift({ text: D.ME, user: l }), E;
}
function et(e) {
    let { query: t, searchContext: n, maxResults: i } = e;
    return ((t = t.trim()).startsWith('"') && t.endsWith('"')
        ? (t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t))
        : t.startsWith('"') && (t = t.substring(1).replaceAll(/\\(.)/g, (e, t) => t)),
    "#" === t[0] && (t = t.substring(1)),
    (0, S._B)(n))
        ? (function (e, t, n) {
              let i = p.Ay.queryChannels({
                  query: e,
                  type: E.I6,
                  guildId: t,
                  limit: 1 / 0,
                  allowEmptyQueries: !0,
                  allowSnowflake: !0,
                  includeAllThreads: !0,
                  boosters: (0, p.X3)(_.rD.TEXT_CHANNEL),
              })
                  .concat(
                      p.Ay.queryChannels({
                          query: e,
                          type: E.vM,
                          guildId: t,
                          limit: 1 / 0,
                          allowEmptyQueries: !0,
                          allowSnowflake: !0,
                          boosters: (0, p.X3)(_.rD.VOICE_CHANNEL),
                      }),
                  )
                  .map((e) => {
                      let { record: t } = e;
                      return t;
                  });
              if (0 === e.length) {
                  let e = m.A.getChannelId(t),
                      n = i.find((t) => t.id === e);
                  null != n && (i.splice(i.indexOf(n), 1), i.unshift(n));
              }
              let r = E.Ay.getTextChannelNameDisambiguations(t);
              return o()(i)
                  .take(n)
                  .map((e) => ({ text: `${r[e.id]?.name ?? ((0, u.m1))(e, g.default, h.A)}`, channel: e, key: e.id }))
                  .value();
          })(t, n.guildId, i)
        : n.type !== D.I4_.DMS || f.A.hidePersonalInformation
          ? []
          : (function (e, t, n) {
                let i = p.Ay.queryGroupDMs({ query: e, limit: t, fuzzy: !0, boosters: (0, p.X3)(_.rD.GROUP_DM) }),
                    r = p.Ay.queryDMChannels({ query: e, limit: t, boosters: (0, p.X3)(_.rD.USER) }),
                    s = o()(i.concat(r))
                        .sort(_.vH)
                        .map((e) => {
                            let { record: t, comparator: n } = e;
                            return { text: n, channel: t, key: t?.id };
                        })
                        .filter((e) => null != e.text && null != e.channel && null != e.key)
                        .value();
                if (0 === e.length && n) {
                    let e = m.A.getChannelId(),
                        t = c.A.getChannel(e);
                    if (null != t && t.isPrivate()) {
                        let n = s.findIndex((t) => {
                            let { channel: n } = t;
                            return n.id === e;
                        });
                        if (-1 !== n) {
                            let e = s[n];
                            s.splice(n, 1), s.unshift(e);
                        } else if (t.isGroupDM()) {
                            let e = (0, u.m1)(t, g.default, h.A);
                            s.unshift({ text: e, channel: t, key: t.id });
                        } else if (t.isDM()) {
                            let e = t.getRecipientId(),
                                n = g.default.getUser(e);
                            if (null != n) {
                                let e = A.Ay.getUserTag(n);
                                s.unshift({ text: e, channel: t, key: t.id });
                            }
                        }
                    }
                }
                return s.slice(0, t);
            })(t, i, !0);
}
let en = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var ei = (((i = {}).FILTER = "FILTER"), (i.ANSWER = "ANSWER"), i);
function er(e) {
    let t = [L.intl.string(L.t.tPZo4p), L.intl.string(L.t.JL7sRS), L.intl.string(L.t.WjkIKU)],
        n = [
            L.intl.string(L.t.TNLcpx),
            L.intl.string(L.t.XM9XGP),
            L.intl.string(L.t.ZNR2fi),
            L.intl.string(L.t["AV/v6i"]),
            L.intl.string(L.t["20uQR3"]),
            L.intl.string(L.t.F8Wf0e),
            L.intl.string(L.t.L4lxyE),
            L.intl.string(L.t.PJgX2h),
            L.intl.string(L.t.nrpA5E),
        ];
    return {
        [D.LWr.FILTER_FROM]: {
            regex: B(L.intl.string(L.t["1TUdFo"])),
            componentType: "FILTER",
            key: F(L.intl.string(L.t["1TUdFo"])),
            plainText: L.intl.string(L.t["1TUdFo"]),
            validator: () => (0, N.Q6)(),
            getAutocompletions: ee,
        },
        [D.LWr.ANSWER_USERNAME_FROM]: {
            follows: [D.LWr.FILTER_FROM],
            regex: en,
            validator: H,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "author_id",
        },
        [D.LWr.FILTER_MENTIONS]: {
            regex: B(L.intl.string(L.t["i96lO+"])),
            componentType: "FILTER",
            key: F(L.intl.string(L.t["i96lO+"])),
            plainText: L.intl.string(L.t["i96lO+"]),
            validator: () => (0, N.tH)(),
            getAutocompletions: ee,
        },
        [D.LWr.ANSWER_USERNAME_MENTIONS]: {
            follows: [D.LWr.FILTER_MENTIONS],
            regex: en,
            validator: H,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "mentions",
        },
        [D.LWr.FILTER_HAS]: {
            regex: B(L.intl.string(L.t.CqCvir)),
            componentType: "FILTER",
            key: F(L.intl.string(L.t.CqCvir)),
            plainText: L.intl.string(L.t.CqCvir),
            getAutocompletions(e) {
                let { query: t, maxResults: i } = e;
                return J(t, i, n);
            },
        },
        [D.LWr.ANSWER_HAS]: {
            regex: y(n),
            follows: [D.LWr.FILTER_HAS],
            validator: $,
            componentType: "ANSWER",
            queryKey: "has",
        },
        [D.LWr.FILTER_LINK_FROM]: {
            regex: B(L.intl.string(L.t.RpRAZD)),
            key: F(L.intl.string(L.t.RpRAZD)),
            plainText: L.intl.string(L.t.RpRAZD),
            componentType: "FILTER",
        },
        [D.LWr.ANSWER_LINK_FROM]: {
            regex: O,
            follows: [D.LWr.FILTER_LINK_FROM],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "link_hostname",
        },
        [D.LWr.FILTER_FILE_TYPE]: {
            regex: B(L.intl.string(L.t.TMNjFm)),
            key: F(L.intl.string(L.t.TMNjFm)),
            plainText: L.intl.string(L.t.TMNjFm),
            componentType: "FILTER",
        },
        [D.LWr.ANSWER_FILE_TYPE]: {
            regex: O,
            follows: [D.LWr.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_extension",
        },
        [D.LWr.FILTER_FILE_NAME]: {
            regex: B(L.intl.string(L.t["5xtLRC"])),
            key: F(L.intl.string(L.t["5xtLRC"])),
            plainText: L.intl.string(L.t["5xtLRC"]),
            componentType: "FILTER",
        },
        [D.LWr.ANSWER_FILE_NAME]: {
            regex: O,
            follows: [D.LWr.FILTER_FILE_NAME],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_filename",
        },
        [D.LWr.FILTER_BEFORE]: {
            regex: B(L.intl.string(L.t["qZ+7BA"])),
            componentType: "FILTER",
            key: F(L.intl.string(L.t["qZ+7BA"])),
            plainText: L.intl.string(L.t["qZ+7BA"]),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return Q(t, n, D.LWr.FILTER_BEFORE);
            },
        },
        [D.LWr.FILTER_ON]: {
            regex: B(`(${L.intl.string(L.t.tIxkOo)}|${L.intl.string(L.t.h2NzSd)})`),
            componentType: "FILTER",
            key: F(L.intl.string(L.t.h2NzSd)),
            plainText: L.intl.string(L.t.h2NzSd),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return Q(t, n, D.LWr.FILTER_ON);
            },
        },
        [D.LWr.FILTER_AFTER]: {
            regex: B(L.intl.string(L.t.KSDx7M)),
            componentType: "FILTER",
            key: F(L.intl.string(L.t.KSDx7M)),
            plainText: L.intl.string(L.t.KSDx7M),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return Q(t, n, D.LWr.FILTER_AFTER);
            },
        },
        [D.LWr.ANSWER_BEFORE]: {
            regex: G,
            follows: [D.LWr.FILTER_BEFORE],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => j(e, "before"),
        },
        [D.LWr.ANSWER_ON]: {
            regex: G,
            follows: [D.LWr.FILTER_ON],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => j(e, "on"),
        },
        [D.LWr.ANSWER_AFTER]: {
            regex: G,
            follows: [D.LWr.FILTER_AFTER],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => j(e, "after"),
        },
        [D.LWr.FILTER_IN]: {
            regex: B(L.intl.string(L.t.WNpFHa)),
            componentType: "FILTER",
            key: F(L.intl.string(L.t.WNpFHa)),
            plainText: L.intl.string(L.t.WNpFHa),
            validator: () => {
                let t = e ?? I.A.getSelectedSearchContext();
                return null != t && (0, N.HM)(t);
            },
            getAutocompletions: et,
        },
        [D.LWr.ANSWER_IN]: {
            regex: R,
            mutable: !0,
            follows: [D.LWr.FILTER_IN],
            componentType: "ANSWER",
            validator: (t) => {
                let n = e ?? I.A.getSelectedSearchContext();
                return null != n && W(t, n);
            },
            queryKey: "channel_id",
        },
        [D.LWr.FILTER_PINNED]: {
            regex: B(L.intl.string(L.t["0B74eY"])),
            componentType: "FILTER",
            key: F(L.intl.string(L.t["0B74eY"])),
            plainText: L.intl.string(L.t["0B74eY"]),
            getAutocompletions: () => [{ text: "true" }, { text: "false" }],
        },
        [D.LWr.ANSWER_PINNED]: {
            regex: V,
            componentType: "ANSWER",
            follows: [D.LWr.FILTER_PINNED],
            queryKey: "pinned",
            validator: (e) => {
                let t = e.getMatch(1);
                return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0);
            },
        },
        [D.LWr.FILTER_AUTHOR_TYPE]: {
            regex: B(L.intl.string(L.t.us8IQi)),
            componentType: "FILTER",
            key: F(L.intl.string(L.t.us8IQi)),
            plainText: L.intl.string(L.t.us8IQi),
            getAutocompletions(e) {
                let { query: n, maxResults: i } = e;
                return J(n, i, t);
            },
        },
        [D.LWr.ANSWER_AUTHOR_TYPE]: {
            regex: y(t),
            follows: [D.LWr.FILTER_AUTHOR_TYPE],
            validator: q,
            componentType: "ANSWER",
            queryKey: "author_type",
        },
    };
}
let es = {};
function ea() {
    return er({ type: D.I4_.DMS });
}
function eo() {
    Object.assign(es, er());
}
function el(e) {
    return D.l90.test(e);
}
function ed(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, "");
    return L.intl.string(L.t.Qf3ptv).startsWith(t) || D.ME.substring(1).startsWith(t);
}
let e_ = es;
