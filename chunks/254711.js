n.d(t, {
    Kh: () => Z,
    Tm: () => M,
}),
    n(388685),
    n(781311),
    n(415506);
var r = n(512722),
    i = n.n(r),
    a = n(913527),
    o = n.n(a),
    s = n(106351),
    l = n(969812),
    c = n(493683),
    u = n(749210),
    d = n(904245),
    f = n(911969),
    p = n(386696),
    _ = n(957730),
    m = n(968437),
    h = n(928477),
    g = n(665906),
    E = n(695346),
    b = n(592125),
    y = n(496675),
    O = n(594174),
    v = n(70956),
    S = n(51144),
    I = n(895924),
    T = n(689079),
    A = n(981631),
    C = n(590433),
    N = n(959517),
    P = n(388032);
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
function D(e) {
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
function x(e, t) {
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
let L = n(227419).Z,
    j = (e, t) => {
        var n;
        return null == (n = e.find((e) => e.name === t)) ? void 0 : n.value;
    },
    M = {
        [T.bi.BUILT_IN]: {
            id: T.bi.BUILT_IN,
            type: I.Qi.BUILT_IN,
            get name() {
                return P.intl.string(P.t.fI5MTa);
            },
        },
        [T.bi.FRECENCY]: {
            id: T.bi.FRECENCY,
            type: I.Qi.BUILT_IN,
            get name() {
                return P.intl.string(P.t["+cGVV6"]);
            },
        },
    },
    k = [
        ...L,
        {
            id: "-1",
            untranslatedName: "shrug",
            displayName: "shrug",
            type: f.yU.CHAT,
            inputType: I.iw.BUILT_IN_TEXT,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.j5xUSW);
            },
            get displayDescription() {
                return P.intl.string(P.t.j5xUSW);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.jw.STRING,
                    get description() {
                        return P.intl.string(P.t.JewOrS);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.JewOrS);
                    },
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = j(e, "message")) ? t : "";
                return { content: "".concat(n, " \xAF\\_(ツ)_/\xAF").trim() };
            },
        },
        {
            id: "-2",
            untranslatedName: "tableflip",
            displayName: "tableflip",
            type: f.yU.CHAT,
            inputType: I.iw.BUILT_IN_TEXT,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.nrQRce);
            },
            get displayDescription() {
                return P.intl.string(P.t.nrQRce);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.jw.STRING,
                    get description() {
                        return P.intl.string(P.t.EI80tw);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.EI80tw);
                    },
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = j(e, "message")) ? t : "";
                return { content: "".concat(n, " (\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u253B\u2501\u253B").trim() };
            },
        },
        {
            id: "-3",
            untranslatedName: "unflip",
            displayName: "unflip",
            type: f.yU.CHAT,
            inputType: I.iw.BUILT_IN_TEXT,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.pnnn8e);
            },
            get displayDescription() {
                return P.intl.string(P.t.pnnn8e);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.jw.STRING,
                    get description() {
                        return P.intl.string(P.t.ETs6go);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.ETs6go);
                    },
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = j(e, "message")) ? t : "";
                return { content: "".concat(n, " \u252C\u2500\u252Cノ( º _ ºノ)").trim() };
            },
        },
        {
            id: "-4",
            untranslatedName: "tts",
            displayName: "tts",
            type: f.yU.CHAT,
            inputType: I.iw.BUILT_IN_TEXT,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.jZcIid);
            },
            get displayDescription() {
                return P.intl.string(P.t.jZcIid);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.jw.STRING,
                    get description() {
                        return P.intl.string(P.t["k+sw9g"]);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t["k+sw9g"]);
                    },
                    required: !0,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && !t.isPrivate() && E.OW.getSetting() && y.Z.can(A.Plq.SEND_TTS_MESSAGES, t);
            },
            execute: (e) => {
                var t;
                return {
                    content: null != (t = j(e, "message")) ? t : "",
                    tts: !0,
                };
            },
        },
        {
            id: "-5",
            untranslatedName: "me",
            displayName: "me",
            type: f.yU.CHAT,
            inputType: I.iw.BUILT_IN_TEXT,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.UGO8fU);
            },
            get displayDescription() {
                return P.intl.string(P.t.UGO8fU);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.jw.STRING,
                    get description() {
                        return P.intl.string(P.t.RWTgNd);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.RWTgNd);
                    },
                    required: !0,
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = j(e, "message")) ? t : "";
                return { content: "_".concat(n, "_") };
            },
        },
        {
            id: "-6",
            untranslatedName: "spoiler",
            displayName: "spoiler",
            type: f.yU.CHAT,
            inputType: I.iw.BUILT_IN_TEXT,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.v0eDdV);
            },
            get displayDescription() {
                return P.intl.string(P.t.v0eDdV);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.jw.STRING,
                    get description() {
                        return P.intl.string(P.t.D13pbc);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.D13pbc);
                    },
                    required: !0,
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = j(e, "message")) ? t : "";
                return { content: (0, A.XmY)(n).trim() };
            },
        },
        {
            id: "-7",
            untranslatedName: "nick",
            displayName: "nick",
            type: f.yU.CHAT,
            inputType: I.iw.BUILT_IN,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t["jiHfS/"]);
            },
            get displayDescription() {
                return P.intl.string(P.t["jiHfS/"]);
            },
            options: [
                {
                    name: "new_nick",
                    displayName: "new_nick",
                    type: f.jw.STRING,
                    get description() {
                        return P.intl.string(P.t.WTSzVu);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.WTSzVu);
                    },
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return (
                    null != t &&
                    !t.isPrivate() &&
                    (y.Z.can(A.Plq.CHANGE_NICKNAME, t) || y.Z.can(A.Plq.MANAGE_NICKNAMES, t))
                );
            },
            execute: (e, t) => {
                var n;
                let { guild: r, channel: i } = t;
                if (null == r || null == i) return;
                let a = null != (n = j(e, "new_nick")) ? n : "";
                l.Z.changeNickname(r.id, i.id, A.ME, a || "");
            },
        },
        {
            id: "-10",
            untranslatedName: "thread",
            displayName: "thread",
            type: f.yU.CHAT,
            inputType: I.iw.BUILT_IN,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.t6ZAS0);
            },
            get displayDescription() {
                return P.intl.string(P.t.t6ZAS0);
            },
            options: [
                {
                    name: "name",
                    displayName: "name",
                    type: f.jw.STRING,
                    get description() {
                        return P.intl.string(P.t.TffOfY);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.TffOfY);
                    },
                    required: !0,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: f.jw.STRING,
                    get description() {
                        return P.intl.string(P.t.QXfSfU);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.QXfSfU);
                    },
                    required: !0,
                },
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && (0, g.ki)(t);
            },
            execute: async (e, t) => {
                var n, r;
                let { channel: i } = t,
                    a = null != (n = j(e, "name")) ? n : "",
                    o = null != (r = j(e, "message")) ? r : "",
                    l = await (0, h.gK)(i, a, s.d.PUBLIC_THREAD, (0, m.WD)(i, null), "Slash Command");
                d.Z.sendMessage(l.id, _.ZP.parse(l, o), !0, { location: N.dy.THREAD_CREATION });
            },
        },
        {
            id: "-11",
            untranslatedName: "kick",
            displayName: "kick",
            type: f.yU.CHAT,
            inputType: I.iw.BUILT_IN,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t["03N0UL"]);
            },
            get displayDescription() {
                return P.intl.string(P.t["03N0UL"]);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: f.jw.USER,
                    get description() {
                        return P.intl.string(P.t.gF8IpD);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.gF8IpD);
                    },
                    required: !0,
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: f.jw.STRING,
                    get description() {
                        return P.intl.string(P.t.QWldgj);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.QWldgj);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return y.Z.can(A.Plq.KICK_MEMBERS, t);
            },
            execute: (e, t) => {
                var n;
                let { guild: r, channel: i } = t;
                if (null == r || null == i) return;
                let a = null != (n = j(e, "user")) ? n : "";
                if (!y.Z.canManageUser(A.Plq.KICK_MEMBERS, a, r))
                    return void d.Z.sendBotMessage(i.id, P.intl.string(P.t["6RIwPI"]));
                (async () => {
                    var t;
                    let n = O.default.getUser(a);
                    if (null == n) throw Error();
                    await u.Z.kickUser(r.id, a, null != (t = j(e, "reason")) ? t : ""),
                        d.Z.sendBotMessage(
                            i.id,
                            P.intl.formatToPlainString(P.t["9wzHDV"], { user: S.ZP.getUserTag(n) }),
                        );
                })().catch(() => {
                    d.Z.sendBotMessage(i.id, P.intl.string(P.t.l0gNlp));
                });
            },
        },
        {
            id: "-12",
            untranslatedName: "ban",
            displayName: "ban",
            type: f.yU.CHAT,
            inputType: I.iw.BUILT_IN,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.HWuskv);
            },
            get displayDescription() {
                return P.intl.string(P.t.HWuskv);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: f.jw.USER,
                    get description() {
                        return P.intl.string(P.t.z3XPjr);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.z3XPjr);
                    },
                    required: !0,
                },
                {
                    name: "delete_messages",
                    displayName: "delete_messages",
                    type: f.jw.INTEGER,
                    get description() {
                        return P.intl.string(P.t.smrvA6);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.smrvA6);
                    },
                    required: !0,
                    get choices() {
                        return [
                            {
                                name: P.intl.string(P.t["4obaMS"]),
                                displayName: P.intl.string(P.t["4obaMS"]),
                                value: 0,
                            },
                            {
                                name: P.intl.string(P.t.RKpitY),
                                displayName: P.intl.string(P.t.RKpitY),
                                value: v.Z.Seconds.HOUR,
                            },
                            {
                                name: P.intl.string(P.t["8WfJZ8"]),
                                displayName: P.intl.string(P.t["8WfJZ8"]),
                                value: 6 * v.Z.Seconds.HOUR,
                            },
                            {
                                name: P.intl.string(P.t.p1up7u),
                                displayName: P.intl.string(P.t.p1up7u),
                                value: 12 * v.Z.Seconds.HOUR,
                            },
                            {
                                name: P.intl.string(P.t.XuVkkD),
                                displayName: P.intl.string(P.t.XuVkkD),
                                value: v.Z.Seconds.DAY,
                            },
                            {
                                name: P.intl.string(P.t["gMcDS+"]),
                                displayName: P.intl.string(P.t["gMcDS+"]),
                                value: 3 * v.Z.Seconds.DAY,
                            },
                            {
                                name: P.intl.string(P.t.FA7IUk),
                                displayName: P.intl.string(P.t.FA7IUk),
                                value: 7 * v.Z.Seconds.DAY,
                            },
                        ];
                    },
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: f.jw.STRING,
                    get description() {
                        return P.intl.string(P.t.dG4noU);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.dG4noU);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return y.Z.can(A.Plq.BAN_MEMBERS, t);
            },
            execute: (e, t) => {
                var n;
                let { guild: r, channel: i } = t;
                if (null == r || null == i) return;
                let a = null != (n = j(e, "user")) ? n : "";
                if (!y.Z.canManageUser(A.Plq.BAN_MEMBERS, a, r))
                    return void d.Z.sendBotMessage(i.id, P.intl.string(P.t.R27LJl));
                (async () => {
                    var t, n;
                    if ("" === a) throw Error();
                    let o = null != (t = j(e, "delete_messages")) ? t : 0,
                        s = null != (n = j(e, "reason")) ? n : "",
                        l = O.default.getUser(a);
                    await u.Z.banUser(r.id, a, o, s),
                        d.Z.sendBotMessage(
                            i.id,
                            P.intl.formatToPlainString(P.t.YflWdM, { user: null != l ? S.ZP.getUserTag(l) : a }),
                        );
                })().catch(() => {
                    d.Z.sendBotMessage(i.id, P.intl.string(P.t.w2J6Qs));
                });
            },
        },
        {
            id: "-13",
            untranslatedName: "timeout",
            displayName: "timeout",
            type: f.yU.CHAT,
            inputType: I.iw.BUILT_IN,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.KkPcep);
            },
            get displayDescription() {
                return P.intl.string(P.t.KkPcep);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: f.jw.USER,
                    get description() {
                        return P.intl.string(P.t.UU3VRm);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.UU3VRm);
                    },
                    required: !0,
                },
                {
                    name: "duration",
                    displayName: "duration",
                    type: f.jw.INTEGER,
                    get description() {
                        return P.intl.string(P.t.SNqN1e);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.SNqN1e);
                    },
                    required: !0,
                    get choices() {
                        return (0, C.tr)().map((e) =>
                            x(D({}, e), {
                                name: e.label,
                                displayName: e.label,
                            }),
                        );
                    },
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: f.jw.STRING,
                    get description() {
                        return P.intl.string(P.t.akHScA);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.akHScA);
                    },
                    required: !1,
                },
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return y.Z.can(A.Plq.MODERATE_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: r } = t;
                if (null == n || null == r) return;
                let i = j(e, "user");
                if (!(0, p.F)(n.id, i)) return void d.Z.sendBotMessage(r.id, P.intl.string(P.t.F5pqSf));
                (async () => {
                    var t, a;
                    let s = null != (t = j(e, "duration")) ? t : "",
                        l = null != (a = j(e, "reason")) ? a : "",
                        c = O.default.getUser(i);
                    if (null == c) throw Error();
                    await u.Z.setCommunicationDisabledUntil({
                        guildId: n.id,
                        userId: i,
                        communicationDisabledUntilTimestamp: o()().add(s, "s").toISOString(),
                        duration: s,
                        reason: l,
                    }),
                        d.Z.sendBotMessage(
                            r.id,
                            P.intl.formatToPlainString(P.t.BbRV6o, {
                                user: S.ZP.getUserTag(c),
                                duration: s,
                            }),
                        );
                })().catch(() => {
                    d.Z.sendBotMessage(r.id, P.intl.string(P.t["+mWyVq"]));
                });
            },
        },
        {
            id: "-14",
            untranslatedName: "msg",
            displayName: "msg",
            type: f.yU.CHAT,
            inputType: I.iw.BUILT_IN,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return P.intl.string(P.t.Dg8XZw);
            },
            get displayDescription() {
                return P.intl.string(P.t.Dg8XZw);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: f.jw.USER,
                    get description() {
                        return P.intl.string(P.t["KmVq/D"]);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t["KmVq/D"]);
                    },
                    required: !0,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: f.jw.STRING,
                    get description() {
                        return P.intl.string(P.t.oGUuOJ);
                    },
                    get displayDescription() {
                        return P.intl.string(P.t.oGUuOJ);
                    },
                    required: !0,
                    get maxLength() {
                        var U;
                        return (null == (U = O.default.getCurrentUser()) ? void 0 : U.premiumType) ? A.en1 : A.J6R;
                    },
                },
            ],
            execute: (e, t) => {
                var n;
                let { channel: r } = t;
                if (null == r) return;
                let a = j(e, "user"),
                    o = null != (n = j(e, "message")) ? n : "";
                (async () => {
                    await c.Z.openPrivateChannel({ recipientIds: a }).then((e) => {
                        let t = b.Z.getChannel(e);
                        i()(null != t, "Newly created PrivateChannel is null"),
                            d.Z.sendMessage(t.id, _.ZP.parse(t, o), !0, { location: N.dy.PRIVATE_MESSAGE_COMMAND });
                    });
                })().catch(() => {
                    d.Z.sendBotMessage(r.id, P.intl.string(P.t["3XaE95"]));
                });
            },
        },
    ],
    G = k.filter((e) =>
        ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.untranslatedName),
    ),
    Z = (e, t, n) => {
        let r = t ? k : G;
        return r.filter(
            (t) =>
                e.includes(t.type) &&
                (!n || t.inputType === I.iw.BUILT_IN_TEXT || t.inputType === I.iw.BUILT_IN_INTEGRATION),
        );
    };
