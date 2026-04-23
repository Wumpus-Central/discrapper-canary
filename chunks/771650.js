"use strict";
n.d(t, {
    Ay: () => ea,
    G0: () => er,
    If: () => ei,
    WL: () => es,
    Yd: () => V,
    gU: () => en,
    lq: () => $,
    ok: () => K,
    sC: () => G,
    v1: () => J,
}),
    n(321073),
    n(667532);
var r,
    i = n(91871),
    s = n.n(i),
    a = n(735438),
    o = n.n(a),
    l = n(989349),
    u = n.n(l),
    c = n(629357),
    d = n(47167),
    _ = n(734057),
    f = n(808728),
    p = n(994500),
    h = n(309010),
    E = n(351906),
    m = n(287809),
    g = n(248465),
    A = n(427262),
    I = n(692986),
    T = n(268988),
    S = n(822382),
    y = n(5990),
    N = n(163179),
    v = n(652215),
    C = n(985018);
function O() {
    return new Set(
        u()
            .months()
            .map((e) => e.toLowerCase()),
    );
}
function R() {
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
        [C.intl.string(C.t.HYiVEQ)]: () => L("day"),
        [C.intl.string(C.t.cu86KC)]: () => L("day", -1),
        [C.intl.string(C.t["FvBj/6"])]: () => L("week"),
        [C.intl.string(C.t["20uWCw"])]: () => L("month"),
        [C.intl.string(C.t["dXC/hn"])]: () => L("year"),
    };
}
let P = RegExp("(?:\\s*(([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})|([0-9]{4})-([0-9]{1,2})|\\d{4}|([^\\d\\s]+)))", "i"),
    x = RegExp("\\s*(true|false)", "i");
function k(e) {
    return `${e}:`;
}
function U(e) {
    return RegExp(k(e), "i");
}
function G(e) {
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
function F(e, t) {
    let n,
        r,
        i = e.getFullMatch().trim().toLowerCase(),
        s = M()[i];
    return (
        null != s
            ? ([n, r] = s())
            : O().has(i)
              ? ([n, r] = w(i, "MMMM", "month"))
              : R().has(i)
                ? ([n, r] = w(i, "dddd", "day"))
                : b().has(i)
                  ? ([n, r] = w(i, "YYYY", "year"))
                  : ([n, r] = w(i, v.ump, "day")),
        !!(n.isValid() && r.isValid()) &&
            ("before" === t ? ((r = n), (n = null)) : "after" === t && ((n = r), (r = null)),
            e.setData("start", n),
            e.setData("end", r),
            !0)
    );
}
function V(e, t) {
    var n, r, i;
    let s = e.getMatch(1);
    if (v.Ut1.test(s)) return e.setData("channelIds", [s]), !0;
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
                .filter((e) => n === (a[e.id]?.name ?? (0, d.m1)(e, m.default, p.A)))
                .value()),
            l?.length > 0 &&
                (e.setData(
                    "channelIds",
                    l.map((e) => e.id),
                ),
                !0)
        );
    }
    if (t.type === v.I4_.DMS && !E.A.hidePersonalInformation) {
        let t;
        return (
            (i = s),
            (t = Object.values(_.A.getMutablePrivateChannels()).filter((e) => {
                if (e.isGroupDM() && i === (0, d.m1)(e, m.default, p.A)) return !0;
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
function B() {
    return {
        [C.intl.string(C.t.ZNR2fi)]: "link",
        [C.intl.string(C.t["20uQR3"])]: "embed",
        [C.intl.string(C.t.L4lxyE)]: "poll",
        [C.intl.string(C.t.nrpA5E)]: "snapshot",
        [C.intl.string(C.t["AV/v6i"])]: "file",
        [C.intl.string(C.t.XM9XGP)]: "video",
        [C.intl.string(C.t.TNLcpx)]: "image",
        [C.intl.string(C.t.F8Wf0e)]: "sound",
        [C.intl.string(C.t.PJgX2h)]: "sticker",
    };
}
function H() {
    return {
        [C.intl.string(C.t.tPZo4p)]: "user",
        [C.intl.string(C.t.JL7sRS)]: "bot",
        [C.intl.string(C.t.WjkIKU)]: "webhook",
    };
}
function j(e, t) {
    let n = e.startsWith("-"),
        r = n ? e.slice(1) : e,
        i =
            Object.entries(t).find((e) => {
                let [, t] = e;
                return t === r;
            })?.[0] ?? r;
    return n ? `-${i}` : i;
}
function Y(e) {
    return (0, N.d3)("has", B(), e);
}
function W(e) {
    return (0, N.d3)("author_type", H(), e);
}
function K(e) {
    return j(e, B());
}
function $(e) {
    return j(e, H());
}
function z(e, t, n) {
    return q(e, t, [...Array.from(O()), ...Array.from(R()), ...Array.from(b()), ...Object.keys(M())]).map((e) => ({
        ...e,
        group: n,
        key: `${n}-${e.text}`,
    }));
}
function q(e, t, n) {
    let r = e.toLocaleLowerCase();
    return o()(n)
        .filter((e) => s()(r, e.toLocaleLowerCase()))
        .take(t)
        .map((e) => ({ text: e }))
        .value();
}
function X(e) {
    let { query: t, searchContext: n, maxResults: r = 10, tokens: i } = e,
        s = { query: (t = t.trim().split("#")[0]), limit: r, request: !1, boosters: (0, g.X3)(c.rD.USER) },
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
                            p.A.isBlockedOrIgnored(n.id) ||
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
        case v.I4_.CHANNEL:
            a = g.Ay.queryChannelUsers({ ...s, channelId: n.channelId });
            break;
        case v.I4_.DMS:
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
        d = null != l && t.length > 0 && (C.intl.string(C.t.Qf3ptv).startsWith(u) || v.ME.substr(1).startsWith(u)),
        f = a
            .filter((e) => {
                let { record: t } = e;
                return !p.A.isBlockedOrIgnored(t.id) && (!d || t.id !== l?.id);
            })
            .map((e) => {
                let { record: t } = e;
                return { text: A.Ay.getUserTag(t), user: t };
            });
    return d && f.unshift({ text: v.ME, user: l }), f;
}
function Q(e) {
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
                  boosters: (0, g.X3)(c.rD.TEXT_CHANNEL),
              })
                  .concat(
                      g.Ay.queryChannels({
                          query: e,
                          type: f.vM,
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
                  let e = h.A.getChannelId(t),
                      n = r.find((t) => t.id === e);
                  null != n && (r.splice(r.indexOf(n), 1), r.unshift(n));
              }
              let i = f.Ay.getTextChannelNameDisambiguations(t);
              return o()(r)
                  .take(n)
                  .map((e) => ({ text: `${i[e.id]?.name ?? ((0, d.m1))(e, m.default, p.A)}`, channel: e, key: e.id }))
                  .value();
          })(t, n.guildId, r)
        : n.type !== v.I4_.DMS || E.A.hidePersonalInformation
          ? []
          : (function (e, t, n) {
                let r = g.Ay.queryGroupDMs({ query: e, limit: t, fuzzy: !0, boosters: (0, g.X3)(c.rD.GROUP_DM) }),
                    i = g.Ay.queryDMChannels({ query: e, limit: t, boosters: (0, g.X3)(c.rD.USER) }),
                    s = o()(r.concat(i))
                        .sort(c.vH)
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
                            let e = (0, d.m1)(t, m.default, p.A);
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
let Z = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
var J = (((r = {}).FILTER = "FILTER"), (r.ANSWER = "ANSWER"), r);
function ee(e) {
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
        [v.LWr.FILTER_FROM]: {
            regex: U(C.intl.string(C.t["1TUdFo"])),
            componentType: "FILTER",
            key: k(C.intl.string(C.t["1TUdFo"])),
            plainText: C.intl.string(C.t["1TUdFo"]),
            validator: () => (0, y.Q6)(),
            getAutocompletions: X,
        },
        [v.LWr.ANSWER_USERNAME_FROM]: {
            follows: [v.LWr.FILTER_FROM],
            regex: Z,
            validator: G,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "author_id",
        },
        [v.LWr.FILTER_MENTIONS]: {
            regex: U(C.intl.string(C.t["i96lO+"])),
            componentType: "FILTER",
            key: k(C.intl.string(C.t["i96lO+"])),
            plainText: C.intl.string(C.t["i96lO+"]),
            validator: () => (0, y.tH)(),
            getAutocompletions: X,
        },
        [v.LWr.ANSWER_USERNAME_MENTIONS]: {
            follows: [v.LWr.FILTER_MENTIONS],
            regex: Z,
            validator: G,
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "mentions",
        },
        [v.LWr.FILTER_HAS]: {
            regex: U(C.intl.string(C.t.CqCvir)),
            componentType: "FILTER",
            key: k(C.intl.string(C.t.CqCvir)),
            plainText: C.intl.string(C.t.CqCvir),
            getAutocompletions(e) {
                let { query: t, maxResults: r } = e;
                return q(t, r, n);
            },
        },
        [v.LWr.ANSWER_HAS]: {
            regex: (0, N.er)(n),
            follows: [v.LWr.FILTER_HAS],
            validator: Y,
            componentType: "ANSWER",
            queryKey: "has",
        },
        [v.LWr.FILTER_LINK_FROM]: {
            regex: U(C.intl.string(C.t.RpRAZD)),
            key: k(C.intl.string(C.t.RpRAZD)),
            plainText: C.intl.string(C.t.RpRAZD),
            componentType: "FILTER",
        },
        [v.LWr.ANSWER_LINK_FROM]: {
            regex: N.GV,
            follows: [v.LWr.FILTER_LINK_FROM],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "link_hostname",
        },
        [v.LWr.FILTER_FILE_TYPE]: {
            regex: U(C.intl.string(C.t.TMNjFm)),
            key: k(C.intl.string(C.t.TMNjFm)),
            plainText: C.intl.string(C.t.TMNjFm),
            componentType: "FILTER",
        },
        [v.LWr.ANSWER_FILE_TYPE]: {
            regex: N.GV,
            follows: [v.LWr.FILTER_FILE_TYPE],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_extension",
        },
        [v.LWr.FILTER_FILE_NAME]: {
            regex: U(C.intl.string(C.t["5xtLRC"])),
            key: k(C.intl.string(C.t["5xtLRC"])),
            plainText: C.intl.string(C.t["5xtLRC"]),
            componentType: "FILTER",
        },
        [v.LWr.ANSWER_FILE_NAME]: {
            regex: N.GV,
            follows: [v.LWr.FILTER_FILE_NAME],
            mutable: !0,
            componentType: "ANSWER",
            queryKey: "attachment_filename",
        },
        [v.LWr.FILTER_BEFORE]: {
            regex: U(C.intl.string(C.t["qZ+7BA"])),
            componentType: "FILTER",
            key: k(C.intl.string(C.t["qZ+7BA"])),
            plainText: C.intl.string(C.t["qZ+7BA"]),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return z(t, n, v.LWr.FILTER_BEFORE);
            },
        },
        [v.LWr.FILTER_ON]: {
            regex: U(`(${C.intl.string(C.t.tIxkOo)}|${C.intl.string(C.t.h2NzSd)})`),
            componentType: "FILTER",
            key: k(C.intl.string(C.t.h2NzSd)),
            plainText: C.intl.string(C.t.h2NzSd),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return z(t, n, v.LWr.FILTER_ON);
            },
        },
        [v.LWr.FILTER_AFTER]: {
            regex: U(C.intl.string(C.t.KSDx7M)),
            componentType: "FILTER",
            key: k(C.intl.string(C.t.KSDx7M)),
            plainText: C.intl.string(C.t.KSDx7M),
            getAutocompletions(e) {
                let { query: t, maxResults: n } = e;
                return z(t, n, v.LWr.FILTER_AFTER);
            },
        },
        [v.LWr.ANSWER_BEFORE]: {
            regex: P,
            follows: [v.LWr.FILTER_BEFORE],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => F(e, "before"),
        },
        [v.LWr.ANSWER_ON]: {
            regex: P,
            follows: [v.LWr.FILTER_ON],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => F(e, "on"),
        },
        [v.LWr.ANSWER_AFTER]: {
            regex: P,
            follows: [v.LWr.FILTER_AFTER],
            componentType: "ANSWER",
            mutable: !0,
            validator: (e) => F(e, "after"),
        },
        [v.LWr.FILTER_IN]: {
            regex: U(C.intl.string(C.t.WNpFHa)),
            componentType: "FILTER",
            key: k(C.intl.string(C.t.WNpFHa)),
            plainText: C.intl.string(C.t.WNpFHa),
            validator: () => {
                let t = e ?? I.A.getSelectedSearchContext();
                return null != t && (0, y.HM)(t);
            },
            getAutocompletions: Q,
        },
        [v.LWr.ANSWER_IN]: {
            regex: N.rI,
            mutable: !0,
            follows: [v.LWr.FILTER_IN],
            componentType: "ANSWER",
            validator: (t) => {
                let n = e ?? I.A.getSelectedSearchContext();
                return null != n && V(t, n);
            },
            queryKey: "channel_id",
        },
        [v.LWr.FILTER_PINNED]: {
            regex: U(C.intl.string(C.t["0B74eY"])),
            componentType: "FILTER",
            key: k(C.intl.string(C.t["0B74eY"])),
            plainText: C.intl.string(C.t["0B74eY"]),
            getAutocompletions: () => [{ text: "true" }, { text: "false" }],
        },
        [v.LWr.ANSWER_PINNED]: {
            regex: x,
            componentType: "ANSWER",
            follows: [v.LWr.FILTER_PINNED],
            queryKey: "pinned",
            validator: (e) => {
                let t = e.getMatch(1);
                return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0);
            },
        },
        [v.LWr.FILTER_AUTHOR_TYPE]: {
            regex: U(C.intl.string(C.t.us8IQi)),
            componentType: "FILTER",
            key: k(C.intl.string(C.t.us8IQi)),
            plainText: C.intl.string(C.t.us8IQi),
            getAutocompletions(e) {
                let { query: n, maxResults: r } = e;
                return q(n, r, t);
            },
        },
        [v.LWr.ANSWER_AUTHOR_TYPE]: {
            regex: (0, N.er)(t),
            follows: [v.LWr.FILTER_AUTHOR_TYPE],
            validator: W,
            componentType: "ANSWER",
            queryKey: "author_type",
        },
    };
}
let et = {};
function en() {
    return ee({ type: v.I4_.DMS });
}
function er() {
    Object.assign(et, ee());
}
function ei(e) {
    return v.l90.test(e);
}
function es(e) {
    if (0 === e.length) return !1;
    let t = e.toLowerCase().replace(/^@/, "");
    return C.intl.string(C.t.Qf3ptv).startsWith(t) || v.ME.substring(1).startsWith(t);
}
let ea = et;
