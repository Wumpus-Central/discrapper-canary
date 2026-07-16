"use strict";
n.d(t, {
    Yd: () => W,
    lq: () => Q,
    ok: () => X,
    v1: () => er,
    Ay: () => eu,
    If: () => ed,
    WL: () => ec,
    sC: () => H,
    gU: () => el,
    nD: () => eo,
}),
    n(321073),
    n(667532);
var i,
    r = n(91871),
    a = n.n(r),
    s = n(435558),
    l = n.n(s),
    o = n(989349),
    d = n.n(o);
n(988665);
var c = n(115718),
    u = n(47167),
    _ = n(734057),
    E = n(808728),
    A = n(994500),
    h = n(309010),
    I = n(351906),
    f = n(287809),
    p = n(768038),
    T = n(427262),
    m = n(692986),
    g = n(268988),
    S = n(822382),
    N = n(5990),
    C = n(257120);
let R = /(?:\s*#?((?:"(\\\\|\\"|[^\\"])*")|(?:[^\s]+)))/i,
    O = /(?:\s*([^\s]+))/;
function L(e) {
    let t = [...e].sort((e, t) => t.length - e.length);
    return RegExp(`(?:\\s*(-?(?:${t.map((e) => C.A.escape(e)).join("|")})))`, "i");
}
function y(e, t, n) {
    let i = n.getMatch(1),
        r = i.startsWith("-"),
        a = t[r ? i.slice(1) : i];
    return null != a && "" !== a && (n.setData(e, r ? `-${a}` : a), !0);
}
var D = n(652215),
    v = n(375708);
function b() {
    return new Set(
        d()
            .months()
            .map((e) => e.toLowerCase()),
    );
}
function M() {
    return new Set(
        d()
            .weekdays()
            .map((e) => e.toLowerCase()),
    );
}
function P() {
    let e = new Date().getFullYear();
    return new Set(
        l()
            .range(2015, e + 1)
            .map((e) => e.toString()),
    );
}
function U(e, t) {
    return [e, e.clone().add(1, t)];
}
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return U(d()().startOf(e).add(t, e), e);
}
function G(e, t, n) {
    return U(d()(e, t).local(), n);
}
function x() {
    return {
        [v.intl.string(v.t.HYiVEQ)]: () => w("day"),
        [v.intl.string(v.t.cu86KC)]: () => w("day", -1),
        [v.intl.string(v.t["FvBj/6"])]: () => w("week"),
        [v.intl.string(v.t["20uWCw"])]: () => w("month"),
        [v.intl.string(v.t["dXC/hn"])]: () => w("year"),
    };
}
let k = RegExp("(?:\\s*(([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})|([0-9]{4})-([0-9]{1,2})|\\d{4}|([^\\d\\s]+)))", "i"),
    F = RegExp("\\s*(true|false)", "i");
function V(e) {
    return `${e}:`;
}
function B(e) {
    return RegExp(V(e), "i");
}
function H(e) {
    let t,
        n = e.getMatch(1);
    function i(e) {
        return null != e ? e?.id : null;
    }
    return (
        null !=
            (t = D.Ut1.test(n)
                ? n
                : i(
                      n === D.ME
                          ? f.default.getCurrentUser()
                          : null != e.getMatch(4)
                            ? f.default.findByTag(e.getMatch(4))
                            : f.default.findByTag(e.getMatch(2), e.getMatch(3)),
                  )) && (e.setData("userId", t), !0)
    );
}
function j(e, t) {
    let n,
        i,
        r = e.getFullMatch().trim().toLowerCase(),
        a = x()[r];
    return (
        null != a
            ? ([n, i] = a())
            : b().has(r)
              ? ([n, i] = G(r, "MMMM", "month"))
              : M().has(r)
                ? ([n, i] = G(r, "dddd", "day"))
                : P().has(r)
                  ? ([n, i] = G(r, "YYYY", "year"))
                  : ([n, i] = G(r, D.ump, "day")),
        !!(n.isValid() && i.isValid()) &&
            ("before" === t ? ((i = n), (n = null)) : "after" === t && ((n = i), (i = null)),
            e.setData("start", n),
            e.setData("end", i),
            !0)
    );
}
function W(e, t) {
    var n, i, r;
    let a = e.getMatch(1);
    if (D.Ut1.test(a)) return e.setData("channelIds", [a]), !0;
    if (
        (a.startsWith('"') && a.endsWith('"') && (a = a.substring(1, a.length - 1).replaceAll(/\\(.)/g, (e, t) => t)),
        (0, S._B)(t))
    ) {
        let r, s, o;
        return (
            (n = a),
            (i = t.guildId),
            (r = E.Ay.getChannels(i)[E.I6].concat(E.Ay.getChannels(i)[E.vM])),
            (s = E.Ay.getTextChannelNameDisambiguations(i)),
            (o = l()
                .chain(r)
                .map((e) => {
                    let { channel: t } = e;
                    return t;
                })
                .concat(null != i ? _.A.getAllThreadsForGuild(i) : [])
                .filter((e) => n === (s[e.id]?.name ?? (0, u.m1)(e, f.default, A.A)))
                .value()),
            o?.length > 0 &&
                (e.setData(
                    "channelIds",
                    o.map((e) => e.id),
                ),
                !0)
        );
    }
    if (t.type === D.I4_.DMS && !I.A.hidePersonalInformation) {
        let t;
        return (
            (r = a),
            (t = Object.values(_.A.getMutablePrivateChannels()).filter((e) => {
                if (e.isGroupDM() && r === (0, u.m1)(e, f.default, A.A)) return !0;
                if (e.isDM()) {
                    let t = e.getRecipientId(),
                        n = f.default.getUser(t);
                    return null != n && r === T.Ay.getUserTag(n);
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
        [v.intl.string(v.t.ZNR2fi)]: "link",
        [v.intl.string(v.t["20uQR3"])]: "embed",
        [v.intl.string(v.t.L4lxyE)]: "poll",
        [v.intl.string(v.t.nrpA5E)]: "snapshot",
        [v.intl.string(v.t["AV/v6i"])]: "file",
        [v.intl.string(v.t.XM9XGP)]: "video",
        [v.intl.string(v.t.TNLcpx)]: "image",
        [v.intl.string(v.t.F8Wf0e)]: "sound",
        [v.intl.string(v.t.PJgX2h)]: "sticker",
    };
}
function K() {
    return {
        [v.intl.string(v.t.tPZo4p)]: "user",
        [v.intl.string(v.t.JL7sRS)]: "bot",
        [v.intl.string(v.t.WjkIKU)]: "webhook",
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
    return y("has", Y(), e);
}
function q(e) {
    return y("author_type", K(), e);
}
function Z(e) {
    let t = e.getMatch(1);
    return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0);
}
function X(e) {
    return $(e, Y());
}
function Q(e) {
    return $(e, K());
}
function J(e, t, n) {
    return ee(e, t, [...Array.from(b()), ...Array.from(M()), ...Array.from(P()), ...Object.keys(x())]).map((e) => ({
        ...e,
        group: n,
        key: `${n}-${e.text}`,
    }));
}
function ee(e, t, n) {
    let i = e.toLocaleLowerCase();
    return l()(n)
        .filter((e) => a()(i, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function et(e) {
    let { query: t, searchContext: n, maxResults: i = 10, tokens: r } = e,
        a = { query: (t = t.trim().split("#")[0]), limit: i, request: !1, boosters: (0, p.X3)(c.rD.USER) },
        s = [];
    switch (n.type) {
        case D.I4_.GUILD:
        case D.I4_.GUILD_CHANNEL:
        case D.I4_.THREAD:
            if (0 === t.length) {
                let e = [],
                    t = new Set();
                function l(n) {
                    null == n ||
                        t.has(n.id) ||
                        A.A.isBlockedOrIgnored(n.id) ||
                        (e.push({ user: n, text: T.Ay.getUserTag(n) }), t.add(n.id));
                }
                let r = h.Ay.getCurrentlySelectedChannelId(n.guildId);
                return (
                    p.Ay.getRecentlyTalked(r, i).forEach((e) => {
                        let { record: t } = e;
                        return l(t);
                    }),
                    g.A.getRecentMessageAuthorIds(n.guildId).forEach((e) => l(f.default.getUser(e))),
                    e.slice(0, i)
                );
            }
            s = p.Ay.queryGuildUsers({ ...a, guildId: n.guildId });
            break;
        case D.I4_.CHANNEL:
            s = p.Ay.queryChannelUsers({ ...a, channelId: n.channelId });
            break;
        case D.I4_.DMS:
            let o = (function (e) {
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
                                i(f.default.getUser(e));
                            } else
                                t.isGroupDM() &&
                                    t.recipients.forEach((e) => {
                                        i(f.default.getUser(e));
                                    });
                    }),
                    r
                );
            })(r ?? []);
            if (null != o && o.length > 0) {
                let e = f.default.getCurrentUser();
                null != e && o.push(e), (s = p.Ay.queryUsers({ ...a, users: o }));
            } else s = p.Ay.queryAllUsers({ ...a });
            break;
        default:
            return [];
    }
    let d = f.default.getCurrentUser(),
        u = t.toLowerCase().replace(/^@/, ""),
        E = null != d && t.length > 0 && (v.intl.string(v.t.Qf3ptv).startsWith(u) || D.ME.substr(1).startsWith(u)),
        I = s
            .filter((e) => {
                let { record: t } = e;
                return !A.A.isBlockedOrIgnored(t.id) && (!E || t.id !== d?.id);
            })
            .map((e) => {
                let { record: t } = e;
                return { text: T.Ay.getUserTag(t), user: t };
            });
    return E && I.unshift({ text: D.ME, user: d }), I;
}
function en(e) {
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
                  boosters: (0, p.X3)(c.rD.TEXT_CHANNEL),
              })
                  .concat(
                      p.Ay.queryChannels({
                          query: e,
                          type: E.vM,
                          guildId: t,
                          limit: 1 / 0,
                          allowEmptyQueries: !0,
                          allowSnowflake: !0,
                          boosters: (0, p.X3)(c.rD.VOICE_CHANNEL),
                      }),
                  )
                  .map((e) => {
                      let { record: t } = e;
                      return t;
                  });
              if (0 === e.length) {
                  let e = h.Ay.getChannelId(t),
                      n = i.find((t) => t.id === e);
                  null != n && (i.splice(i.indexOf(n), 1), i.unshift(n));
              }
              let r = E.Ay.getTextChannelNameDisambiguations(t);
              return l()(i)
                  .take(n)
                  .map((e) => ({ text: `${r[e.id]?.name ?? ((0, u.m1))(e, f.default, A.A)}`, channel: e, key: e.id }))
                  .value();
          })(t, n.guildId, i)
        : n.type !== D.I4_.DMS || I.A.hidePersonalInformation
          ? []
          : (function (e, t, n) {
                let i = p.Ay.queryGroupDMs({ query: e, limit: t, fuzzy: !0, boosters: (0, p.X3)(c.rD.GROUP_DM) }),
                    r = p.Ay.queryDMChannels({ query: e, limit: t, boosters: (0, p.X3)(c.rD.USER) }),
                    a = l()(i.concat(r))
                        .sort(c.vH)
                        .map((e) => {
                            let { record: t, comparator: n } = e;
                            return { text: n, channel: t, key: t?.id };
                        })
                        .filter((e) => null != e.text && null != e.channel && null != e.key)
                        .value();
                if (0 === e.length && n) {
                    let e = h.Ay.getChannelId(),
                        t = _.A.getChannel(e);
                    if (null != t && t.isPrivate()) {
                        let n = a.findIndex((t) => {
                            let { channel: n } = t;
                            return n.id === e;
                        });
                        if (-1 !== n) {
                            let e = a[n];
                            a.splice(n, 1), a.unshift(e);
                        } else if (t.isGroupDM()) {
                            let e = (0, u.m1)(t, f.default, A.A);
                            a.unshift({ text: e, channel: t, key: t.id });
                        } else if (t.isDM()) {
                            let e = t.getRecipientId(),
                                n = f.default.getUser(e);
                            if (null != n) {
                                let e = T.Ay.getUserTag(n);
                                a.unshift({ text: e, channel: t, key: t.id });
                            }
                        }
                    }
                }
                return a.slice(0, t);
            })(t, i, !0);
}
let ei = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var er = (((i = {}).FILTER = "FILTER"), (i.ANSWER = "ANSWER"), i);
function ea(e) {
    let t = [v.intl.string(v.t.tPZo4p), v.intl.string(v.t.JL7sRS), v.intl.string(v.t.WjkIKU)],
        n = [
            v.intl.string(v.t.TNLcpx),
            v.intl.string(v.t.XM9XGP),
            v.intl.string(v.t.ZNR2fi),
            v.intl.string(v.t["AV/v6i"]),
            v.intl.string(v.t["20uQR3"]),
            v.intl.string(v.t.F8Wf0e),
            v.intl.string(v.t.L4lxyE),
            v.intl.string(v.t.PJgX2h),
            v.intl.string(v.t.nrpA5E),
        ];
    return {
        [D.LWr.FILTER_FROM]: {
            regex: B(v.intl.string(v.t["1TUdFo"])),
            componentType: "FILTER",
            key: V(v.intl.string(v.t["1TUdFo"])),
            plainText: v.intl.string(v.t["1TUdFo"]),
            validator: () => (0, N.Q6)(),
            getAutocompletions: et,
        },
        [D.LWr.ANSWER_USERNAME_FROM]: {
            follows: [D.LWr.FILTER_FROM],
            regex: ei,
            validator: H,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "author_id",
        },
        [D.LWr.FILTER_MENTIONS]: {
            regex: B(v.intl.string(v.t["i96lO+"])),
            componentType: "FILTER",
            key: V(v.intl.string(v.t["i96lO+"])),
            plainText: v.intl.string(v.t["i96lO+"]),
            validator: () => (0, N.tH)(),
            getAutocompletions: et,
        },
        [D.LWr.ANSWER_USERNAME_MENTIONS]: {
            follows: [D.LWr.FILTER_MENTIONS],
            regex: ei,
            validator: H,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "mentions",
        },
        [D.LWr.FILTER_HAS]: {
            regex: B(v.intl.string(v.t.CqCvir)),
            componentType: "FILTER",
            key: V(v.intl.string(v.t.CqCvir)),
            plainText: v.intl.string(v.t.CqCvir),
            getAutocompletions(e) {
                let { query: t, maxResults: i } = e;
                return ee(t, i, n);
            },
        },
        [D.LWr.ANSWER_HAS]: {
            regex: L(n),
            follows: [D.LWr.FILTER_HAS],
            validator: z,
            componentType: "ANSWER",
            queryKey: "has",
        },
        [D.LWr.FILTER_LINK_FROM]: {
            regex: B(v.intl.string(v.t.RpRAZD)),
            key: V(v.intl.string(v.t.RpRAZD)),
            plainText: v.intl.string(v.t.RpRAZD),
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
            regex: B(v.intl.string(v.t.TMNjFm)),
            key: V(v.intl.string(v.t.TMNjFm)),
            plainText: v.intl.string(v.t.TMNjFm),
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
            regex: B(v.intl.string(v.t["5xtLRC"])),
            key: V(v.intl.string(v.t["5xtLRC"])),
            plainText: v.intl.string(v.t["5xtLRC"]),
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
            regex: B(v.intl.string(v.t["qZ+7BA"])),
            componentType: "FILTER",
            key: V(v.intl.string(v.t["qZ+7BA"])),
            plainText: v.intl.string(v.t["qZ+7BA"]),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return J(t, n, D.LWr.FILTER_BEFORE);
            },
        },
        [D.LWr.FILTER_ON]: {
            regex: B(`(${v.intl.string(v.t.tIxkOo)}|${v.intl.string(v.t.h2NzSd)})`),
            componentType: "FILTER",
            key: V(v.intl.string(v.t.h2NzSd)),
            plainText: v.intl.string(v.t.h2NzSd),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return J(t, n, D.LWr.FILTER_ON);
            },
        },
        [D.LWr.FILTER_AFTER]: {
            regex: B(v.intl.string(v.t.KSDx7M)),
            componentType: "FILTER",
            key: V(v.intl.string(v.t.KSDx7M)),
            plainText: v.intl.string(v.t.KSDx7M),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return J(t, n, D.LWr.FILTER_AFTER);
            },
        },
        [D.LWr.ANSWER_BEFORE]: {
            regex: k,
            follows: [D.LWr.FILTER_BEFORE],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => j(e, "before"),
        },
        [D.LWr.ANSWER_ON]: {
            regex: k,
            follows: [D.LWr.FILTER_ON],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => j(e, "on"),
        },
        [D.LWr.ANSWER_AFTER]: {
            regex: k,
            follows: [D.LWr.FILTER_AFTER],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => j(e, "after"),
        },
        [D.LWr.FILTER_IN]: {
            regex: B(v.intl.string(v.t.WNpFHa)),
            componentType: "FILTER",
            key: V(v.intl.string(v.t.WNpFHa)),
            plainText: v.intl.string(v.t.WNpFHa),
            validator: () => {
                let t = e ?? m.A.getSelectedSearchContext();
                return null != t && (0, N.HM)(t);
            },
            getAutocompletions: en,
        },
        [D.LWr.ANSWER_IN]: {
            regex: R,
            mutable: !0,
            follows: [D.LWr.FILTER_IN],
            componentType: "ANSWER",
            validator: (t) => {
                let n = e ?? m.A.getSelectedSearchContext();
                return null != n && W(t, n);
            },
            queryKey: "channel_id",
        },
        [D.LWr.FILTER_PINNED]: {
            regex: B(v.intl.string(v.t["0B74eY"])),
            componentType: "FILTER",
            key: V(v.intl.string(v.t["0B74eY"])),
            plainText: v.intl.string(v.t["0B74eY"]),
            getAutocompletions: () => [{ text: "true" }, { text: "false" }],
        },
        [D.LWr.ANSWER_PINNED]: {
            regex: F,
            componentType: "ANSWER",
            follows: [D.LWr.FILTER_PINNED],
            queryKey: "pinned",
            validator: Z,
        },
        [D.LWr.FILTER_AUTHOR_TYPE]: {
            regex: B(v.intl.string(v.t.us8IQi)),
            componentType: "FILTER",
            key: V(v.intl.string(v.t.us8IQi)),
            plainText: v.intl.string(v.t.us8IQi),
            getAutocompletions(e) {
                let { query: n, maxResults: i } = e;
                return ee(n, i, t);
            },
        },
        [D.LWr.ANSWER_AUTHOR_TYPE]: {
            regex: L(t),
            follows: [D.LWr.FILTER_AUTHOR_TYPE],
            validator: q,
            componentType: "ANSWER",
            queryKey: "author_type",
        },
    };
}
let es = {};
function el() {
    return ea({ type: D.I4_.DMS });
}
function eo() {
    Object.assign(es, ea());
}
function ed(e) {
    return D.l90.test(e);
}
function ec(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, "");
    return v.intl.string(v.t.Qf3ptv).startsWith(t) || D.ME.substring(1).startsWith(t);
}
D.LWr.FILTER_HAS,
    D.LWr.ANSWER_HAS,
    D.LWr.FILTER_AUTHOR_TYPE,
    D.LWr.ANSWER_AUTHOR_TYPE,
    D.LWr.FILTER_PINNED,
    D.LWr.ANSWER_PINNED;
let eu = es;
