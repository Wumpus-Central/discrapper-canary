"use strict";
n.d(t, { Ay: () => et, G0: () => J, If: () => Z, WL: () => ee, Yd: () => F, gU: () => Q, sC: () => G, v1: () => z }),
    n(321073),
    n(667532);
var r,
    i = n(91871),
    s = n.n(i),
    a = n(735438),
    o = n.n(a),
    l = n(989349),
    u = n.n(l),
    d = n(629357),
    c = n(47167),
    _ = n(734057),
    f = n(808728),
    E = n(994500),
    h = n(309010),
    p = n(351906),
    m = n(287809),
    g = n(248465),
    A = n(427262),
    I = n(692986),
    T = n(268988),
    S = n(822382),
    y = n(5990),
    N = n(163179),
    O = n(652215),
    R = n(985018);
function v() {
    return new Set(
        u()
            .months()
            .map((e) => e.toLowerCase()),
    );
}
function C() {
    return new Set(
        u()
            .weekdays()
            .map((e) => e.toLowerCase()),
    );
}
function b() {
    let e = new Date().getFullYear();
    return new Set(
        o()
            .range(2015, e + 1)
            .map((e) => e.toString()),
    );
}
function D(e, t) {
    return [e, e.clone().add(1, t)];
}
function L(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    return D(u()().startOf(e).add(t, e), e);
}
function w(e, t, n) {
    return D(u()(e, t).local(), n);
}
function M() {
    return {
        [R.intl.string(R.t.HYiVEQ)]: () => L("day"),
        [R.intl.string(R.t.cu86KC)]: () => L("day", -1),
        [R.intl.string(R.t["FvBj/6"])]: () => L("week"),
        [R.intl.string(R.t["20uWCw"])]: () => L("month"),
        [R.intl.string(R.t["dXC/hn"])]: () => L("year"),
    };
}
let P = RegExp("(?:\\s*(([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})|([0-9]{4})-([0-9]{1,2})|\\d{4}|([^\\d\\s]+)))", "i"),
    U = RegExp("\\s*(true|false)", "i");
function k(e) {
    return `${e}:`;
}
function x(e) {
    return RegExp(k(e), "i");
}
function G(e) {
    let t,
        n = e.getMatch(1),
        r = (e) => (null != e ? e?.id : null);
    return (
        null !=
            (t = O.Ut1.test(n)
                ? n
                : r(
                      n === O.ME
                          ? m.default.getCurrentUser()
                          : null != e.getMatch(4)
                            ? m.default.findByTag(e.getMatch(4))
                            : m.default.findByTag(e.getMatch(2), e.getMatch(3)),
                  )) && (e.setData("userId", t), !0)
    );
}
function V(e, t) {
    let n,
        r,
        i = e.getFullMatch().trim().toLowerCase(),
        s = M()[i];
    return (
        null != s
            ? ([n, r] = s())
            : v().has(i)
              ? ([n, r] = w(i, "MMMM", "month"))
              : C().has(i)
                ? ([n, r] = w(i, "dddd", "day"))
                : b().has(i)
                  ? ([n, r] = w(i, "YYYY", "year"))
                  : ([n, r] = w(i, O.ump, "day")),
        !!(n.isValid() && r.isValid()) &&
            ("before" === t ? ((r = n), (n = null)) : "after" === t && ((n = r), (r = null)),
            e.setData("start", n),
            e.setData("end", r),
            !0)
    );
}
function F(e, t) {
    var n, r, i;
    let s = e.getMatch(1);
    if (O.Ut1.test(s)) return e.setData("channelIds", [s]), !0;
    if (
        (s.startsWith('"') && s.endsWith('"') && (s = s.substring(1, s.length - 1).replaceAll(/\\(.)/g, (e, t) => t)),
        (0, S._B)(t))
    ) {
        let i, a, l;
        return (
            (n = s),
            (r = t.guildId),
            (i = f.Ay.getChannels(r)[f.I6].concat(f.Ay.getChannels(r)[f.vM])),
            (a = f.Ay.getTextChannelNameDisambiguations(r)),
            (l = o()
                .chain(i)
                .map((e) => {
                    let { channel: t } = e;
                    return t;
                })
                .concat(null != r ? _.A.getAllThreadsForGuild(r) : [])
                .filter((e) => n === (a[e.id]?.name ?? (0, c.m1)(e, m.default, E.A)))
                .value()),
            l?.length > 0 &&
                (e.setData(
                    "channelIds",
                    l.map((e) => e.id),
                ),
                !0)
        );
    }
    if (t.type === O.I4_.DMS && !p.A.hidePersonalInformation) {
        let t;
        return (
            (i = s),
            (t = Object.values(_.A.getMutablePrivateChannels()).filter((e) => {
                if (e.isGroupDM() && i === (0, c.m1)(e, m.default, E.A)) return !0;
                if (e.isDM()) {
                    let t = e.getRecipientId(),
                        n = m.default.getUser(t);
                    return null != n && i === A.Ay.getUserTag(n);
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
function B(e) {
    let t = {
        [R.intl.string(R.t.ZNR2fi)]: "link",
        [R.intl.string(R.t["20uQR3"])]: "embed",
        [R.intl.string(R.t.L4lxyE)]: "poll",
        [R.intl.string(R.t.nrpA5E)]: "snapshot",
        [R.intl.string(R.t["AV/v6i"])]: "file",
        [R.intl.string(R.t.XM9XGP)]: "video",
        [R.intl.string(R.t.TNLcpx)]: "image",
        [R.intl.string(R.t.F8Wf0e)]: "sound",
        [R.intl.string(R.t.PJgX2h)]: "sticker",
    };
    return (0, N.d3)("has", t, e);
}
function H(e) {
    let t = {
        [R.intl.string(R.t.tPZo4p)]: "user",
        [R.intl.string(R.t.JL7sRS)]: "bot",
        [R.intl.string(R.t.WjkIKU)]: "webhook",
    };
    return (0, N.d3)("author_type", t, e);
}
function Y(e, t, n) {
    return W(e, t, [...Array.from(v()), ...Array.from(C()), ...Array.from(b()), ...Object.keys(M())]).map((e) => ({
        ...e,
        group: n,
        key: `${n}-${e.text}`,
    }));
}
function W(e, t, n) {
    let r = e.toLocaleLowerCase();
    return o()(n)
        .filter((e) => s()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function j(e) {
    let { query: t, searchContext: n, maxResults: r = 10, tokens: i } = e,
        s = { query: (t = t.trim().split("#")[0]), limit: r, request: !1, boosters: (0, g.X3)(d.rD.USER) },
        a = [];
    switch (n.type) {
        case O.I4_.GUILD:
        case O.I4_.GUILD_CHANNEL:
        case O.I4_.THREAD:
            if (0 === t.length) {
                let e = [],
                    t = new Set(),
                    i = (n) => {
                        null == n ||
                            t.has(n.id) ||
                            E.A.isBlockedOrIgnored(n.id) ||
                            (e.push({ user: n, text: A.Ay.getUserTag(n) }), t.add(n.id));
                    },
                    s = h.A.getCurrentlySelectedChannelId(n.guildId);
                return (
                    g.Ay.getRecentlyTalked(s, r).forEach((e) => {
                        let { record: t } = e;
                        return i(t);
                    }),
                    T.A.getRecentMessageAuthorIds(n.guildId).forEach((e) => i(m.default.getUser(e))),
                    e.slice(0, r)
                );
            }
            a = g.Ay.queryGuildUsers({ ...s, guildId: n.guildId });
            break;
        case O.I4_.CHANNEL:
            a = g.Ay.queryChannelUsers({ ...s, channelId: n.channelId });
            break;
        case O.I4_.DMS:
            let o = (function (e) {
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
                        let t = _.A.getChannel(e);
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
            })(i ?? []);
            if (null != o && o.length > 0) {
                let e = m.default.getCurrentUser();
                null != e && o.push(e), (a = g.Ay.queryUsers({ ...s, users: o }));
            } else a = g.Ay.queryAllUsers({ ...s });
            break;
        default:
            return [];
    }
    let l = m.default.getCurrentUser(),
        u = t.toLowerCase().replace(/^@/, ""),
        c = null != l && t.length > 0 && (R.intl.string(R.t.Qf3ptv).startsWith(u) || O.ME.substr(1).startsWith(u)),
        f = a
            .filter((e) => {
                let { record: t } = e;
                return !E.A.isBlockedOrIgnored(t.id) && (!c || t.id !== l?.id);
            })
            .map((e) => {
                let { record: t } = e;
                return { text: A.Ay.getUserTag(t), user: t };
            });
    return c && f.unshift({ text: O.ME, user: l }), f;
}
function K(e) {
    let { query: t, searchContext: n, maxResults: r } = e;
    return ((t = t.trim()).startsWith('"') && t.endsWith('"')
        ? (t = t.substring(1, t.length - 1).replaceAll(/\\(.)/g, (e, t) => t))
        : t.startsWith('"') && (t = t.substring(1).replaceAll(/\\(.)/g, (e, t) => t)),
    "#" === t[0] && (t = t.substring(1)),
    (0, S._B)(n))
        ? (function (e, t, n) {
              let r = g.Ay.queryChannels({
                  query: e,
                  type: f.I6,
                  guildId: t,
                  limit: 1 / 0,
                  allowEmptyQueries: !0,
                  allowSnowflake: !0,
                  includeAllThreads: !0,
                  boosters: (0, g.X3)(d.rD.TEXT_CHANNEL),
              })
                  .concat(
                      g.Ay.queryChannels({
                          query: e,
                          type: f.vM,
                          guildId: t,
                          limit: 1 / 0,
                          allowEmptyQueries: !0,
                          allowSnowflake: !0,
                          boosters: (0, g.X3)(d.rD.VOICE_CHANNEL),
                      }),
                  )
                  .map((e) => {
                      let { record: t } = e;
                      return t;
                  });
              if (0 === e.length) {
                  let e = h.A.getChannelId(t),
                      n = r.find((t) => t.id === e);
                  null != n && (r.splice(r.indexOf(n), 1), r.unshift(n));
              }
              let i = f.Ay.getTextChannelNameDisambiguations(t);
              return o()(r)
                  .take(n)
                  .map((e) => ({ text: `${i[e.id]?.name ?? ((0, c.m1))(e, m.default, E.A)}`, channel: e, key: e.id }))
                  .value();
          })(t, n.guildId, r)
        : n.type !== O.I4_.DMS || p.A.hidePersonalInformation
          ? []
          : (function (e, t, n) {
                let r = g.Ay.queryGroupDMs({ query: e, limit: t, fuzzy: !0, boosters: (0, g.X3)(d.rD.GROUP_DM) }),
                    i = g.Ay.queryDMChannels({ query: e, limit: t, boosters: (0, g.X3)(d.rD.USER) }),
                    s = o()(r.concat(i))
                        .sort(d.vH)
                        .map((e) => {
                            let { record: t, comparator: n } = e;
                            return { text: n, channel: t, key: t?.id };
                        })
                        .filter((e) => null != e.text && null != e.channel && null != e.key)
                        .value();
                if (0 === e.length && n) {
                    let e = h.A.getChannelId(),
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
                            let e = (0, c.m1)(t, m.default, E.A);
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
            })(t, r, !0);
}
let $ = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var z = (((r = {}).FILTER = "FILTER"), (r.ANSWER = "ANSWER"), r);
function q(e) {
    let t = [R.intl.string(R.t.tPZo4p), R.intl.string(R.t.JL7sRS), R.intl.string(R.t.WjkIKU)],
        n = [
            R.intl.string(R.t.TNLcpx),
            R.intl.string(R.t.XM9XGP),
            R.intl.string(R.t.ZNR2fi),
            R.intl.string(R.t["AV/v6i"]),
            R.intl.string(R.t["20uQR3"]),
            R.intl.string(R.t.F8Wf0e),
            R.intl.string(R.t.L4lxyE),
            R.intl.string(R.t.PJgX2h),
            R.intl.string(R.t.nrpA5E),
        ];
    return {
        [O.LWr.FILTER_FROM]: {
            regex: x(R.intl.string(R.t["1TUdFo"])),
            componentType: "FILTER",
            key: k(R.intl.string(R.t["1TUdFo"])),
            plainText: R.intl.string(R.t["1TUdFo"]),
            validator: () => (0, y.Q6)(),
            getAutocompletions: j,
        },
        [O.LWr.ANSWER_USERNAME_FROM]: {
            follows: [O.LWr.FILTER_FROM],
            regex: $,
            validator: G,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "author_id",
        },
        [O.LWr.FILTER_MENTIONS]: {
            regex: x(R.intl.string(R.t["i96lO+"])),
            componentType: "FILTER",
            key: k(R.intl.string(R.t["i96lO+"])),
            plainText: R.intl.string(R.t["i96lO+"]),
            validator: () => (0, y.tH)(),
            getAutocompletions: j,
        },
        [O.LWr.ANSWER_USERNAME_MENTIONS]: {
            follows: [O.LWr.FILTER_MENTIONS],
            regex: $,
            validator: G,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "mentions",
        },
        [O.LWr.FILTER_HAS]: {
            regex: x(R.intl.string(R.t.CqCvir)),
            componentType: "FILTER",
            key: k(R.intl.string(R.t.CqCvir)),
            plainText: R.intl.string(R.t.CqCvir),
            getAutocompletions(e) {
                let { query: t, maxResults: r } = e;
                return W(t, r, n);
            },
        },
        [O.LWr.ANSWER_HAS]: {
            regex: (0, N.er)(n),
            follows: [O.LWr.FILTER_HAS],
            validator: B,
            componentType: "ANSWER",
            queryKey: "has",
        },
        [O.LWr.FILTER_LINK_FROM]: {
            regex: x(R.intl.string(R.t.RpRAZD)),
            key: k(R.intl.string(R.t.RpRAZD)),
            plainText: R.intl.string(R.t.RpRAZD),
            componentType: "FILTER",
        },
        [O.LWr.ANSWER_LINK_FROM]: {
            regex: N.GV,
            follows: [O.LWr.FILTER_LINK_FROM],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "link_hostname",
        },
        [O.LWr.FILTER_FILE_TYPE]: {
            regex: x(R.intl.string(R.t.TMNjFm)),
            key: k(R.intl.string(R.t.TMNjFm)),
            plainText: R.intl.string(R.t.TMNjFm),
            componentType: "FILTER",
        },
        [O.LWr.ANSWER_FILE_TYPE]: {
            regex: N.GV,
            follows: [O.LWr.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_extension",
        },
        [O.LWr.FILTER_FILE_NAME]: {
            regex: x(R.intl.string(R.t["5xtLRC"])),
            key: k(R.intl.string(R.t["5xtLRC"])),
            plainText: R.intl.string(R.t["5xtLRC"]),
            componentType: "FILTER",
        },
        [O.LWr.ANSWER_FILE_NAME]: {
            regex: N.GV,
            follows: [O.LWr.FILTER_FILE_NAME],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_filename",
        },
        [O.LWr.FILTER_BEFORE]: {
            regex: x(R.intl.string(R.t["qZ+7BA"])),
            componentType: "FILTER",
            key: k(R.intl.string(R.t["qZ+7BA"])),
            plainText: R.intl.string(R.t["qZ+7BA"]),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return Y(t, n, O.LWr.FILTER_BEFORE);
            },
        },
        [O.LWr.FILTER_ON]: {
            regex: x(`(${R.intl.string(R.t.tIxkOo)}|${R.intl.string(R.t.h2NzSd)})`),
            componentType: "FILTER",
            key: k(R.intl.string(R.t.h2NzSd)),
            plainText: R.intl.string(R.t.h2NzSd),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return Y(t, n, O.LWr.FILTER_ON);
            },
        },
        [O.LWr.FILTER_AFTER]: {
            regex: x(R.intl.string(R.t.KSDx7M)),
            componentType: "FILTER",
            key: k(R.intl.string(R.t.KSDx7M)),
            plainText: R.intl.string(R.t.KSDx7M),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return Y(t, n, O.LWr.FILTER_AFTER);
            },
        },
        [O.LWr.ANSWER_BEFORE]: {
            regex: P,
            follows: [O.LWr.FILTER_BEFORE],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => V(e, "before"),
        },
        [O.LWr.ANSWER_ON]: {
            regex: P,
            follows: [O.LWr.FILTER_ON],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => V(e, "on"),
        },
        [O.LWr.ANSWER_AFTER]: {
            regex: P,
            follows: [O.LWr.FILTER_AFTER],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => V(e, "after"),
        },
        [O.LWr.FILTER_IN]: {
            regex: x(R.intl.string(R.t.WNpFHa)),
            componentType: "FILTER",
            key: k(R.intl.string(R.t.WNpFHa)),
            plainText: R.intl.string(R.t.WNpFHa),
            validator: () => {
                let t = e ?? I.A.getSelectedSearchContext();
                return null != t && (0, y.HM)(t);
            },
            getAutocompletions: K,
        },
        [O.LWr.ANSWER_IN]: {
            regex: N.rI,
            mutable: !0,
            follows: [O.LWr.FILTER_IN],
            componentType: "ANSWER",
            validator: (t) => {
                let n = e ?? I.A.getSelectedSearchContext();
                return null != n && F(t, n);
            },
            queryKey: "channel_id",
        },
        [O.LWr.FILTER_PINNED]: {
            regex: x(R.intl.string(R.t["0B74eY"])),
            componentType: "FILTER",
            key: k(R.intl.string(R.t["0B74eY"])),
            plainText: R.intl.string(R.t["0B74eY"]),
            getAutocompletions: () => [{ text: "true" }, { text: "false" }],
        },
        [O.LWr.ANSWER_PINNED]: {
            regex: U,
            componentType: "ANSWER",
            follows: [O.LWr.FILTER_PINNED],
            queryKey: "pinned",
            validator: (e) => {
                let t = e.getMatch(1);
                return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0);
            },
        },
        [O.LWr.FILTER_AUTHOR_TYPE]: {
            regex: x(R.intl.string(R.t.us8IQi)),
            componentType: "FILTER",
            key: k(R.intl.string(R.t.us8IQi)),
            plainText: R.intl.string(R.t.us8IQi),
            getAutocompletions(e) {
                let { query: n, maxResults: r } = e;
                return W(n, r, t);
            },
        },
        [O.LWr.ANSWER_AUTHOR_TYPE]: {
            regex: (0, N.er)(t),
            follows: [O.LWr.FILTER_AUTHOR_TYPE],
            validator: H,
            componentType: "ANSWER",
            queryKey: "author_type",
        },
    };
}
let X = {};
function Q() {
    return q({ type: O.I4_.DMS });
}
function J() {
    Object.assign(X, q());
}
function Z(e) {
    return O.l90.test(e);
}
function ee(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, "");
    return R.intl.string(R.t.Qf3ptv).startsWith(t) || O.ME.substring(1).startsWith(t);
}
let et = X;
