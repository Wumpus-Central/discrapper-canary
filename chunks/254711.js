n.d(t, {
    Kh: () => B,
    Tm: () => j,
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
    _ = n(386696),
    p = n(957730),
    h = n(968437),
    m = n(928477),
    g = n(665906),
    E = n(695346),
    b = n(592125),
    y = n(496675),
    O = n(594174),
    v = n(70956),
    I = n(51144),
    T = n(895924),
    S = n(689079),
    A = n(981631),
    C = n(590433),
    N = n(959517),
    R = n(388032);
function P(e, t, n) {
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
                P(e, t, n[t]);
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
    M = (e, t) => {
        var n;
        return null == (n = e.find((e) => e.name === t)) ? void 0 : n.value;
    },
    j = {
        [S.bi.BUILT_IN]: {
            id: S.bi.BUILT_IN,
            type: T.Qi.BUILT_IN,
            get name() {
                return R.intl.string(R.t.fI5MTa);
            },
        },
        [S.bi.FRECENCY]: {
            id: S.bi.FRECENCY,
            type: T.Qi.BUILT_IN,
            get name() {
                return R.intl.string(R.t["+cGVV6"]);
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
            inputType: T.iw.BUILT_IN_TEXT,
            applicationId: S.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.j5xUSW);
            },
            get displayDescription() {
                return R.intl.string(R.t.j5xUSW);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.JewOrS);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.JewOrS);
                    },
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = M(e, "message")) ? t : "";
                return { content: "".concat(n, " \xAF\\_(ツ)_/\xAF").trim() };
            },
        },
        {
            id: "-2",
            untranslatedName: "tableflip",
            displayName: "tableflip",
            type: f.yU.CHAT,
            inputType: T.iw.BUILT_IN_TEXT,
            applicationId: S.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.nrQRce);
            },
            get displayDescription() {
                return R.intl.string(R.t.nrQRce);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.EI80tw);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.EI80tw);
                    },
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = M(e, "message")) ? t : "";
                return { content: "".concat(n, " (\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u253B\u2501\u253B").trim() };
            },
        },
        {
            id: "-3",
            untranslatedName: "unflip",
            displayName: "unflip",
            type: f.yU.CHAT,
            inputType: T.iw.BUILT_IN_TEXT,
            applicationId: S.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.pnnn8e);
            },
            get displayDescription() {
                return R.intl.string(R.t.pnnn8e);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.ETs6go);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.ETs6go);
                    },
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = M(e, "message")) ? t : "";
                return { content: "".concat(n, " \u252C\u2500\u252Cノ( º _ ºノ)").trim() };
            },
        },
        {
            id: "-4",
            untranslatedName: "tts",
            displayName: "tts",
            type: f.yU.CHAT,
            inputType: T.iw.BUILT_IN_TEXT,
            applicationId: S.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.jZcIid);
            },
            get displayDescription() {
                return R.intl.string(R.t.jZcIid);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t["k+sw9g"]);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t["k+sw9g"]);
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
                    content: null != (t = M(e, "message")) ? t : "",
                    tts: !0,
                };
            },
        },
        {
            id: "-5",
            untranslatedName: "me",
            displayName: "me",
            type: f.yU.CHAT,
            inputType: T.iw.BUILT_IN_TEXT,
            applicationId: S.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.UGO8fU);
            },
            get displayDescription() {
                return R.intl.string(R.t.UGO8fU);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.RWTgNd);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.RWTgNd);
                    },
                    required: !0,
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = M(e, "message")) ? t : "";
                return { content: "_".concat(n, "_") };
            },
        },
        {
            id: "-6",
            untranslatedName: "spoiler",
            displayName: "spoiler",
            type: f.yU.CHAT,
            inputType: T.iw.BUILT_IN_TEXT,
            applicationId: S.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.v0eDdV);
            },
            get displayDescription() {
                return R.intl.string(R.t.v0eDdV);
            },
            options: [
                {
                    name: "message",
                    displayName: "message",
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.D13pbc);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.D13pbc);
                    },
                    required: !0,
                },
            ],
            execute: (e) => {
                var t;
                let n = null != (t = M(e, "message")) ? t : "";
                return { content: (0, A.XmY)(n).trim() };
            },
        },
        {
            id: "-7",
            untranslatedName: "nick",
            displayName: "nick",
            type: f.yU.CHAT,
            inputType: T.iw.BUILT_IN,
            applicationId: S.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t["jiHfS/"]);
            },
            get displayDescription() {
                return R.intl.string(R.t["jiHfS/"]);
            },
            options: [
                {
                    name: "new_nick",
                    displayName: "new_nick",
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.WTSzVu);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.WTSzVu);
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
                let a = null != (n = M(e, "new_nick")) ? n : "";
                l.Z.changeNickname(r.id, i.id, A.ME, a || "");
            },
        },
        {
            id: "-10",
            untranslatedName: "thread",
            displayName: "thread",
            type: f.yU.CHAT,
            inputType: T.iw.BUILT_IN,
            applicationId: S.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.t6ZAS0);
            },
            get displayDescription() {
                return R.intl.string(R.t.t6ZAS0);
            },
            options: [
                {
                    name: "name",
                    displayName: "name",
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.TffOfY);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.TffOfY);
                    },
                    required: !0,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.QXfSfU);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.QXfSfU);
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
                    a = null != (n = M(e, "name")) ? n : "",
                    o = null != (r = M(e, "message")) ? r : "",
                    l = await (0, m.gK)(i, a, s.d.PUBLIC_THREAD, (0, h.WD)(i, null), "Slash Command");
                d.Z.sendMessage(l.id, p.ZP.parse(l, o), !0, { location: N.dy.THREAD_CREATION });
            },
        },
        {
            id: "-11",
            untranslatedName: "kick",
            displayName: "kick",
            type: f.yU.CHAT,
            inputType: T.iw.BUILT_IN,
            applicationId: S.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t["03N0UL"]);
            },
            get displayDescription() {
                return R.intl.string(R.t["03N0UL"]);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: f.jw.USER,
                    get description() {
                        return R.intl.string(R.t.gF8IpD);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.gF8IpD);
                    },
                    required: !0,
                },
                {
                    name: "reason",
                    displayName: "reason",
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.QWldgj);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.QWldgj);
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
                let a = null != (n = M(e, "user")) ? n : "";
                if (!y.Z.canManageUser(A.Plq.KICK_MEMBERS, a, r))
                    return void d.Z.sendBotMessage(i.id, R.intl.string(R.t["6RIwPI"]));
                (async () => {
                    var t;
                    let n = O.default.getUser(a);
                    if (null == n) throw Error();
                    await u.Z.kickUser(r.id, a, null != (t = M(e, "reason")) ? t : ""),
                        d.Z.sendBotMessage(
                            i.id,
                            R.intl.formatToPlainString(R.t["9wzHDV"], { user: I.ZP.getUserTag(n) }),
                        );
                })().catch(() => {
                    d.Z.sendBotMessage(i.id, R.intl.string(R.t.l0gNlp));
                });
            },
        },
        {
            id: "-12",
            untranslatedName: "ban",
            displayName: "ban",
            type: f.yU.CHAT,
            inputType: T.iw.BUILT_IN,
            applicationId: S.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.HWuskv);
            },
            get displayDescription() {
                return R.intl.string(R.t.HWuskv);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: f.jw.USER,
                    get description() {
                        return R.intl.string(R.t.z3XPjr);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.z3XPjr);
                    },
                    required: !0,
                },
                {
                    name: "delete_messages",
                    displayName: "delete_messages",
                    type: f.jw.INTEGER,
                    get description() {
                        return R.intl.string(R.t.smrvA6);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.smrvA6);
                    },
                    required: !0,
                    get choices() {
                        return [
                            {
                                name: R.intl.string(R.t["4obaMS"]),
                                displayName: R.intl.string(R.t["4obaMS"]),
                                value: 0,
                            },
                            {
                                name: R.intl.string(R.t.RKpitY),
                                displayName: R.intl.string(R.t.RKpitY),
                                value: v.Z.Seconds.HOUR,
                            },
                            {
                                name: R.intl.string(R.t["8WfJZ8"]),
                                displayName: R.intl.string(R.t["8WfJZ8"]),
                                value: 6 * v.Z.Seconds.HOUR,
                            },
                            {
                                name: R.intl.string(R.t.p1up7u),
                                displayName: R.intl.string(R.t.p1up7u),
                                value: 12 * v.Z.Seconds.HOUR,
                            },
                            {
                                name: R.intl.string(R.t.XuVkkD),
                                displayName: R.intl.string(R.t.XuVkkD),
                                value: v.Z.Seconds.DAY,
                            },
                            {
                                name: R.intl.string(R.t["gMcDS+"]),
                                displayName: R.intl.string(R.t["gMcDS+"]),
                                value: 3 * v.Z.Seconds.DAY,
                            },
                            {
                                name: R.intl.string(R.t.FA7IUk),
                                displayName: R.intl.string(R.t.FA7IUk),
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
                        return R.intl.string(R.t.dG4noU);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.dG4noU);
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
                let a = null != (n = M(e, "user")) ? n : "";
                if (!y.Z.canManageUser(A.Plq.BAN_MEMBERS, a, r))
                    return void d.Z.sendBotMessage(i.id, R.intl.string(R.t.R27LJl));
                (async () => {
                    var t, n;
                    if ("" === a) throw Error();
                    let o = null != (t = M(e, "delete_messages")) ? t : 0,
                        s = null != (n = M(e, "reason")) ? n : "",
                        l = O.default.getUser(a);
                    await u.Z.banUser(r.id, a, o, s),
                        d.Z.sendBotMessage(
                            i.id,
                            R.intl.formatToPlainString(R.t.YflWdM, { user: null != l ? I.ZP.getUserTag(l) : a }),
                        );
                })().catch(() => {
                    d.Z.sendBotMessage(i.id, R.intl.string(R.t.w2J6Qs));
                });
            },
        },
        {
            id: "-13",
            untranslatedName: "timeout",
            displayName: "timeout",
            type: f.yU.CHAT,
            inputType: T.iw.BUILT_IN,
            applicationId: S.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.KkPcep);
            },
            get displayDescription() {
                return R.intl.string(R.t.KkPcep);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: f.jw.USER,
                    get description() {
                        return R.intl.string(R.t.UU3VRm);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.UU3VRm);
                    },
                    required: !0,
                },
                {
                    name: "duration",
                    displayName: "duration",
                    type: f.jw.INTEGER,
                    get description() {
                        return R.intl.string(R.t.SNqN1e);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.SNqN1e);
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
                        return R.intl.string(R.t.akHScA);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.akHScA);
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
                let i = M(e, "user");
                if (!(0, _.F)(n.id, i)) return void d.Z.sendBotMessage(r.id, R.intl.string(R.t.F5pqSf));
                (async () => {
                    var t, a;
                    let s = null != (t = M(e, "duration")) ? t : "",
                        l = null != (a = M(e, "reason")) ? a : "",
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
                            R.intl.formatToPlainString(R.t.BbRV6o, {
                                user: I.ZP.getUserTag(c),
                                duration: s,
                            }),
                        );
                })().catch(() => {
                    d.Z.sendBotMessage(r.id, R.intl.string(R.t["+mWyVq"]));
                });
            },
        },
        {
            id: "-14",
            untranslatedName: "msg",
            displayName: "msg",
            type: f.yU.CHAT,
            inputType: T.iw.BUILT_IN,
            applicationId: S.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.Dg8XZw);
            },
            get displayDescription() {
                return R.intl.string(R.t.Dg8XZw);
            },
            options: [
                {
                    name: "user",
                    displayName: "user",
                    type: f.jw.USER,
                    get description() {
                        return R.intl.string(R.t["KmVq/D"]);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t["KmVq/D"]);
                    },
                    required: !0,
                },
                {
                    name: "message",
                    displayName: "message",
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.oGUuOJ);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.oGUuOJ);
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
                let a = M(e, "user"),
                    o = null != (n = M(e, "message")) ? n : "";
                (async () => {
                    await c.Z.openPrivateChannel({ recipientIds: a }).then((e) => {
                        let t = b.Z.getChannel(e);
                        i()(null != t, "Newly created PrivateChannel is null"),
                            d.Z.sendMessage(t.id, p.ZP.parse(t, o), !0, { location: N.dy.PRIVATE_MESSAGE_COMMAND });
                    });
                })().catch(() => {
                    d.Z.sendBotMessage(r.id, R.intl.string(R.t["3XaE95"]));
                });
            },
        },
    ],
    G = k.filter((e) =>
        ["gif", "tenor", "tts", "me", "tableflip", "unflip", "shrug", "spoiler", "nick"].includes(e.untranslatedName),
    ),
    B = (e, t, n) => {
        let r = t ? k : G;
        return r.filter(
            (t) =>
                e.includes(t.type) &&
                (!n || t.inputType === T.iw.BUILT_IN_TEXT || t.inputType === T.iw.BUILT_IN_INTEGRATION),
        );
    };
