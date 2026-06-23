"use strict";
n.d(t, {
    Yd: () => Y,
    lq: () => Q,
    ok: () => X,
    v1: () => er,
    Ay: () => ed,
    If: () => eu,
    WL: () => ec,
    sC: () => j,
    gU: () => eo,
    nD: () => el,
}),
    n(321073),
    n(667532);
var i,
    r = n(91871),
    s = n.n(r),
    a = n(735438),
    o = n.n(a),
    l = n(989349),
    u = n.n(l);
n(988665);
var c = n(115718),
    d = n(47167),
    _ = n(734057),
    h = n(808728),
    f = n(994500),
    p = n(309010),
    E = n(351906),
    m = n(287809),
    g = n(768038),
    A = n(427262),
    I = n(692986),
    T = n(268988),
    S = n(822382),
    y = n(5990),
    C = n(257120);
let N = /(?:\s*#?((?:"(\\\\|\\"|[^\\"])*")|(?:[^\s]+)))/i,
    v = /(?:\s*([^\s]+))/;
function R(e) {
    let t = [...e].sort((e, t) => t.length - e.length);
    return RegExp(`(?:\\s*(-?(?:${t.map((e) => C.A.escape(e)).join("|")})))`, "i");
}
function O(e, t, n) {
    let i = n.getMatch(1),
        r = i.startsWith("-"),
        s = t[r ? i.slice(1) : i];
    return null != s && "" !== s && (n.setData(e, r ? `-${s}` : s), !0);
}
var b = n(652215),
    D = n(375708);
function L() {
    return new Set(
        u()
            .months()
            .map((e) => e.toLowerCase()),
    );
}
function w() {
    return new Set(
        u()
            .weekdays()
            .map((e) => e.toLowerCase()),
    );
}
function M() {
    let e = new Date().getFullYear();
    return new Set(
        o()
            .range(2015, e + 1)
            .map((e) => e.toString()),
    );
}
function P(e, t) {
    return [e, e.clone().add(1, t)];
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return P(u()().startOf(e).add(t, e), e);
}
function k(e, t, n) {
    return P(u()(e, t).local(), n);
}
function U() {
    return {
        [D.intl.string(D.t.HYiVEQ)]: () => x("day"),
        [D.intl.string(D.t.cu86KC)]: () => x("day", -1),
        [D.intl.string(D.t["FvBj/6"])]: () => x("week"),
        [D.intl.string(D.t["20uWCw"])]: () => x("month"),
        [D.intl.string(D.t["dXC/hn"])]: () => x("year"),
    };
}
let G = RegExp("(?:\\s*(([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})|([0-9]{4})-([0-9]{1,2})|\\d{4}|([^\\d\\s]+)))", "i"),
    F = RegExp("\\s*(true|false)", "i");
function V(e) {
    return `${e}:`;
}
function B(e) {
    return RegExp(V(e), "i");
}
function j(e) {
    let t,
        n = e.getMatch(1);
    function i(e) {
        return null != e ? e?.id : null;
    }
    return (
        null !=
            (t = b.Ut1.test(n)
                ? n
                : i(
                      n === b.ME
                          ? m.default.getCurrentUser()
                          : null != e.getMatch(4)
                            ? m.default.findByTag(e.getMatch(4))
                            : m.default.findByTag(e.getMatch(2), e.getMatch(3)),
                  )) && (e.setData("userId", t), !0)
    );
}
function H(e, t) {
    let n,
        i,
        r = e.getFullMatch().trim().toLowerCase(),
        s = U()[r];
    return (
        null != s
            ? ([n, i] = s())
            : L().has(r)
              ? ([n, i] = k(r, "MMMM", "month"))
              : w().has(r)
                ? ([n, i] = k(r, "dddd", "day"))
                : M().has(r)
                  ? ([n, i] = k(r, "YYYY", "year"))
                  : ([n, i] = k(r, b.ump, "day")),
        !!(n.isValid() && i.isValid()) &&
            ("before" === t ? ((i = n), (n = null)) : "after" === t && ((n = i), (i = null)),
            e.setData("start", n),
            e.setData("end", i),
            !0)
    );
}
function Y(e, t) {
    var n, i, r;
    let s = e.getMatch(1);
    if (b.Ut1.test(s)) return e.setData("channelIds", [s]), !0;
    if (
        (s.startsWith('"') && s.endsWith('"') && (s = s.substring(1, s.length - 1).replaceAll(/\\(.)/g, (e, t) => t)),
        (0, S._B)(t))
    ) {
        let r, a, l;
        return (
            (n = s),
            (i = t.guildId),
            (r = h.Ay.getChannels(i)[h.I6].concat(h.Ay.getChannels(i)[h.vM])),
            (a = h.Ay.getTextChannelNameDisambiguations(i)),
            (l = o()
                .chain(r)
                .map((e) => {
                    let { channel: t } = e;
                    return t;
                })
                .concat(null != i ? _.A.getAllThreadsForGuild(i) : [])
                .filter((e) => n === (a[e.id]?.name ?? (0, d.m1)(e, m.default, f.A)))
                .value()),
            l?.length > 0 &&
                (e.setData(
                    "channelIds",
                    l.map((e) => e.id),
                ),
                !0)
        );
    }
    if (t.type === b.I4_.DMS && !E.A.hidePersonalInformation) {
        let t;
        return (
            (r = s),
            (t = Object.values(_.A.getMutablePrivateChannels()).filter((e) => {
                if (e.isGroupDM() && r === (0, d.m1)(e, m.default, f.A)) return !0;
                if (e.isDM()) {
                    let t = e.getRecipientId(),
                        n = m.default.getUser(t);
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
function W() {
    return {
        [D.intl.string(D.t.ZNR2fi)]: "link",
        [D.intl.string(D.t["20uQR3"])]: "embed",
        [D.intl.string(D.t.L4lxyE)]: "poll",
        [D.intl.string(D.t.nrpA5E)]: "snapshot",
        [D.intl.string(D.t["AV/v6i"])]: "file",
        [D.intl.string(D.t.XM9XGP)]: "video",
        [D.intl.string(D.t.TNLcpx)]: "image",
        [D.intl.string(D.t.F8Wf0e)]: "sound",
        [D.intl.string(D.t.PJgX2h)]: "sticker",
    };
}
function K() {
    return {
        [D.intl.string(D.t.tPZo4p)]: "user",
        [D.intl.string(D.t.JL7sRS)]: "bot",
        [D.intl.string(D.t.WjkIKU)]: "webhook",
    };
}
function $(e, t) {
    let n = e.startsWith("-"),
        i = n ? e.slice(1) : e,
        r =
            Object.entries(t).find((e) => {
                let [, t] = e;
                return t === i;
            })?.[0] ?? i;
    return n ? `-${r}` : r;
}
function z(e) {
    return O("has", W(), e);
}
function q(e) {
    return O("author_type", K(), e);
}
function Z(e) {
    let t = e.getMatch(1);
    return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0);
}
function X(e) {
    return $(e, W());
}
function Q(e) {
    return $(e, K());
}
function J(e, t, n) {
    return ee(e, t, [...Array.from(L()), ...Array.from(w()), ...Array.from(M()), ...Object.keys(U())]).map((e) => ({
        ...e,
        group: n,
        key: `${n}-${e.text}`,
    }));
}
function ee(e, t, n) {
    let i = e.toLocaleLowerCase();
    return o()(n)
        .filter((e) => s()(i, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function et(e) {
    let { query: t, searchContext: n, maxResults: i = 10, tokens: r } = e,
        s = { query: (t = t.trim().split("#")[0]), limit: i, request: !1, boosters: (0, g.X3)(c.rD.USER) },
        a = [];
    switch (n.type) {
        case b.I4_.GUILD:
        case b.I4_.GUILD_CHANNEL:
        case b.I4_.THREAD:
            if (0 === t.length) {
                let e = [],
                    t = new Set();
                function o(n) {
                    null == n ||
                        t.has(n.id) ||
                        f.A.isBlockedOrIgnored(n.id) ||
                        (e.push({ user: n, text: A.Ay.getUserTag(n) }), t.add(n.id));
                }
                let r = p.A.getCurrentlySelectedChannelId(n.guildId);
                return (
                    g.Ay.getRecentlyTalked(r, i).forEach((e) => {
                        let { record: t } = e;
                        return o(t);
                    }),
                    T.A.getRecentMessageAuthorIds(n.guildId).forEach((e) => o(m.default.getUser(e))),
                    e.slice(0, i)
                );
            }
            a = g.Ay.queryGuildUsers({ ...s, guildId: n.guildId });
            break;
        case b.I4_.CHANNEL:
            a = g.Ay.queryChannelUsers({ ...s, channelId: n.channelId });
            break;
        case b.I4_.DMS:
            let l = (function (e) {
                if (null == e) return [];
                let t = new Set(),
                    n = [];
                function i(e) {
                    null == e || t.has(e.id) || (r.push(e), t.add(e.id));
                }
                e.forEach((e) => {
                    let t = e.getData("channelIds");
                    null != t && t.forEach((e) => n.push(e));
                });
                let r = [];
                return (
                    n.forEach((e) => {
                        let t = _.A.getChannel(e);
                        if (null != t)
                            if (t.isDM()) {
                                let e = t.getRecipientId();
                                i(m.default.getUser(e));
                            } else
                                t.isGroupDM() &&
                                    t.recipients.forEach((e) => {
                                        i(m.default.getUser(e));
                                    });
                    }),
                    r
                );
            })(r ?? []);
            if (null != l && l.length > 0) {
                let e = m.default.getCurrentUser();
                null != e && l.push(e), (a = g.Ay.queryUsers({ ...s, users: l }));
            } else a = g.Ay.queryAllUsers({ ...s });
            break;
        default:
            return [];
    }
    let u = m.default.getCurrentUser(),
        d = t.toLowerCase().replace(/^@/, ""),
        h = null != u && t.length > 0 && (D.intl.string(D.t.Qf3ptv).startsWith(d) || b.ME.substr(1).startsWith(d)),
        E = a
            .filter((e) => {
                let { record: t } = e;
                return !f.A.isBlockedOrIgnored(t.id) && (!h || t.id !== u?.id);
            })
            .map((e) => {
                let { record: t } = e;
                return { text: A.Ay.getUserTag(t), user: t };
            });
    return h && E.unshift({ text: b.ME, user: u }), E;
}
function en(e) {
    let { query: t, searchContext: n, maxResults: i } = e;
    return ((t = t.trim()).startsWith('"') && t.endsWith('"')
        ? (t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t))
        : t.startsWith('"') && (t = t.substring(1).replaceAll(/\\(.)/g, (e, t) => t)),
    "#" === t[0] && (t = t.substring(1)),
    (0, S._B)(n))
        ? (function (e, t, n) {
              let i = g.Ay.queryChannels({
                  query: e,
                  type: h.I6,
                  guildId: t,
                  limit: 1 / 0,
                  allowEmptyQueries: !0,
                  allowSnowflake: !0,
                  includeAllThreads: !0,
                  boosters: (0, g.X3)(c.rD.TEXT_CHANNEL),
              })
                  .concat(
                      g.Ay.queryChannels({
                          query: e,
                          type: h.vM,
                          guildId: t,
                          limit: 1 / 0,
                          allowEmptyQueries: !0,
                          allowSnowflake: !0,
                          boosters: (0, g.X3)(c.rD.VOICE_CHANNEL),
                      }),
                  )
                  .map((e) => {
                      let { record: t } = e;
                      return t;
                  });
              if (0 === e.length) {
                  let e = p.A.getChannelId(t),
                      n = i.find((t) => t.id === e);
                  null != n && (i.splice(i.indexOf(n), 1), i.unshift(n));
              }
              let r = h.Ay.getTextChannelNameDisambiguations(t);
              return o()(i)
                  .take(n)
                  .map((e) => ({ text: `${r[e.id]?.name ?? ((0, d.m1))(e, m.default, f.A)}`, channel: e, key: e.id }))
                  .value();
          })(t, n.guildId, i)
        : n.type !== b.I4_.DMS || E.A.hidePersonalInformation
          ? []
          : (function (e, t, n) {
                let i = g.Ay.queryGroupDMs({ query: e, limit: t, fuzzy: !0, boosters: (0, g.X3)(c.rD.GROUP_DM) }),
                    r = g.Ay.queryDMChannels({ query: e, limit: t, boosters: (0, g.X3)(c.rD.USER) }),
                    s = o()(i.concat(r))
                        .sort(c.vH)
                        .map((e) => {
                            let { record: t, comparator: n } = e;
                            return { text: n, channel: t, key: t?.id };
                        })
                        .filter((e) => null != e.text && null != e.channel && null != e.key)
                        .value();
                if (0 === e.length && n) {
                    let e = p.A.getChannelId(),
                        t = _.A.getChannel(e);
                    if (null != t && t.isPrivate()) {
                        let n = s.findIndex((t) => {
                            let { channel: n } = t;
                            return n.id === e;
                        });
                        if (-1 !== n) {
                            let e = s[n];
                            s.splice(n, 1), s.unshift(e);
                        } else if (t.isGroupDM()) {
                            let e = (0, d.m1)(t, m.default, f.A);
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
            })(t, i, !0);
}
let ei = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var er = (((i = {}).FILTER = "FILTER"), (i.ANSWER = "ANSWER"), i);
function es(e) {
    let t = [D.intl.string(D.t.tPZo4p), D.intl.string(D.t.JL7sRS), D.intl.string(D.t.WjkIKU)],
        n = [
            D.intl.string(D.t.TNLcpx),
            D.intl.string(D.t.XM9XGP),
            D.intl.string(D.t.ZNR2fi),
            D.intl.string(D.t["AV/v6i"]),
            D.intl.string(D.t["20uQR3"]),
            D.intl.string(D.t.F8Wf0e),
            D.intl.string(D.t.L4lxyE),
            D.intl.string(D.t.PJgX2h),
            D.intl.string(D.t.nrpA5E),
        ];
    return {
        [b.LWr.FILTER_FROM]: {
            regex: B(D.intl.string(D.t["1TUdFo"])),
            componentType: "FILTER",
            key: V(D.intl.string(D.t["1TUdFo"])),
            plainText: D.intl.string(D.t["1TUdFo"]),
            validator: () => (0, y.Q6)(),
            getAutocompletions: et,
        },
        [b.LWr.ANSWER_USERNAME_FROM]: {
            follows: [b.LWr.FILTER_FROM],
            regex: ei,
            validator: j,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "author_id",
        },
        [b.LWr.FILTER_MENTIONS]: {
            regex: B(D.intl.string(D.t["i96lO+"])),
            componentType: "FILTER",
            key: V(D.intl.string(D.t["i96lO+"])),
            plainText: D.intl.string(D.t["i96lO+"]),
            validator: () => (0, y.tH)(),
            getAutocompletions: et,
        },
        [b.LWr.ANSWER_USERNAME_MENTIONS]: {
            follows: [b.LWr.FILTER_MENTIONS],
            regex: ei,
            validator: j,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "mentions",
        },
        [b.LWr.FILTER_HAS]: {
            regex: B(D.intl.string(D.t.CqCvir)),
            componentType: "FILTER",
            key: V(D.intl.string(D.t.CqCvir)),
            plainText: D.intl.string(D.t.CqCvir),
            getAutocompletions(e) {
                let { query: t, maxResults: i } = e;
                return ee(t, i, n);
            },
        },
        [b.LWr.ANSWER_HAS]: {
            regex: R(n),
            follows: [b.LWr.FILTER_HAS],
            validator: z,
            componentType: "ANSWER",
            queryKey: "has",
        },
        [b.LWr.FILTER_LINK_FROM]: {
            regex: B(D.intl.string(D.t.RpRAZD)),
            key: V(D.intl.string(D.t.RpRAZD)),
            plainText: D.intl.string(D.t.RpRAZD),
            componentType: "FILTER",
        },
        [b.LWr.ANSWER_LINK_FROM]: {
            regex: v,
            follows: [b.LWr.FILTER_LINK_FROM],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "link_hostname",
        },
        [b.LWr.FILTER_FILE_TYPE]: {
            regex: B(D.intl.string(D.t.TMNjFm)),
            key: V(D.intl.string(D.t.TMNjFm)),
            plainText: D.intl.string(D.t.TMNjFm),
            componentType: "FILTER",
        },
        [b.LWr.ANSWER_FILE_TYPE]: {
            regex: v,
            follows: [b.LWr.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_extension",
        },
        [b.LWr.FILTER_FILE_NAME]: {
            regex: B(D.intl.string(D.t["5xtLRC"])),
            key: V(D.intl.string(D.t["5xtLRC"])),
            plainText: D.intl.string(D.t["5xtLRC"]),
            componentType: "FILTER",
        },
        [b.LWr.ANSWER_FILE_NAME]: {
            regex: v,
            follows: [b.LWr.FILTER_FILE_NAME],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_filename",
        },
        [b.LWr.FILTER_BEFORE]: {
            regex: B(D.intl.string(D.t["qZ+7BA"])),
            componentType: "FILTER",
            key: V(D.intl.string(D.t["qZ+7BA"])),
            plainText: D.intl.string(D.t["qZ+7BA"]),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return J(t, n, b.LWr.FILTER_BEFORE);
            },
        },
        [b.LWr.FILTER_ON]: {
            regex: B(`(${D.intl.string(D.t.tIxkOo)}|${D.intl.string(D.t.h2NzSd)})`),
            componentType: "FILTER",
            key: V(D.intl.string(D.t.h2NzSd)),
            plainText: D.intl.string(D.t.h2NzSd),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return J(t, n, b.LWr.FILTER_ON);
            },
        },
        [b.LWr.FILTER_AFTER]: {
            regex: B(D.intl.string(D.t.KSDx7M)),
            componentType: "FILTER",
            key: V(D.intl.string(D.t.KSDx7M)),
            plainText: D.intl.string(D.t.KSDx7M),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return J(t, n, b.LWr.FILTER_AFTER);
            },
        },
        [b.LWr.ANSWER_BEFORE]: {
            regex: G,
            follows: [b.LWr.FILTER_BEFORE],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => H(e, "before"),
        },
        [b.LWr.ANSWER_ON]: {
            regex: G,
            follows: [b.LWr.FILTER_ON],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => H(e, "on"),
        },
        [b.LWr.ANSWER_AFTER]: {
            regex: G,
            follows: [b.LWr.FILTER_AFTER],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => H(e, "after"),
        },
        [b.LWr.FILTER_IN]: {
            regex: B(D.intl.string(D.t.WNpFHa)),
            componentType: "FILTER",
            key: V(D.intl.string(D.t.WNpFHa)),
            plainText: D.intl.string(D.t.WNpFHa),
            validator: () => {
                let t = e ?? I.A.getSelectedSearchContext();
                return null != t && (0, y.HM)(t);
            },
            getAutocompletions: en,
        },
        [b.LWr.ANSWER_IN]: {
            regex: N,
            mutable: !0,
            follows: [b.LWr.FILTER_IN],
            componentType: "ANSWER",
            validator: (t) => {
                let n = e ?? I.A.getSelectedSearchContext();
                return null != n && Y(t, n);
            },
            queryKey: "channel_id",
        },
        [b.LWr.FILTER_PINNED]: {
            regex: B(D.intl.string(D.t["0B74eY"])),
            componentType: "FILTER",
            key: V(D.intl.string(D.t["0B74eY"])),
            plainText: D.intl.string(D.t["0B74eY"]),
            getAutocompletions: () => [{ text: "true" }, { text: "false" }],
        },
        [b.LWr.ANSWER_PINNED]: {
            regex: F,
            componentType: "ANSWER",
            follows: [b.LWr.FILTER_PINNED],
            queryKey: "pinned",
            validator: Z,
        },
        [b.LWr.FILTER_AUTHOR_TYPE]: {
            regex: B(D.intl.string(D.t.us8IQi)),
            componentType: "FILTER",
            key: V(D.intl.string(D.t.us8IQi)),
            plainText: D.intl.string(D.t.us8IQi),
            getAutocompletions(e) {
                let { query: n, maxResults: i } = e;
                return ee(n, i, t);
            },
        },
        [b.LWr.ANSWER_AUTHOR_TYPE]: {
            regex: R(t),
            follows: [b.LWr.FILTER_AUTHOR_TYPE],
            validator: q,
            componentType: "ANSWER",
            queryKey: "author_type",
        },
    };
}
let ea = {};
function eo() {
    return es({ type: b.I4_.DMS });
}
function el() {
    Object.assign(ea, es());
}
function eu(e) {
    return b.l90.test(e);
}
function ec(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, "");
    return D.intl.string(D.t.Qf3ptv).startsWith(t) || b.ME.substring(1).startsWith(t);
}
b.LWr.FILTER_HAS,
    b.LWr.ANSWER_HAS,
    b.LWr.FILTER_AUTHOR_TYPE,
    b.LWr.ANSWER_AUTHOR_TYPE,
    b.LWr.FILTER_PINNED,
    b.LWr.ANSWER_PINNED;
let ed = ea;
