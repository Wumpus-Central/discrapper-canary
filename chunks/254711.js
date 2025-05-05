n.d(t, {
    Kh: () => G,
    Tm: () => M
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
    S = n(895924),
    T = n(689079),
    A = n(981631),
    N = n(590433),
    C = n(388032);
function R(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
function D(e, t) {
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
    x = (e, t) => {
        var n;
        return null == (n = e.find((e) => e.name === t)) ? void 0 : n.value;
    },
    M = {
        [T.bi.BUILT_IN]: {
            id: T.bi.BUILT_IN,
            type: S.Qi.BUILT_IN,
            get name() {
                return C.intl.string(C.t.fI5MTU);
            }
        },
        [T.bi.FRECENCY]: {
            id: T.bi.FRECENCY,
            type: S.Qi.BUILT_IN,
            get name() {
                return C.intl.string(C.t['+cGVV1']);
            }
        }
    },
    k = [
        ...L,
        {
            id: '-1',
            untranslatedName: 'shrug',
            displayName: 'shrug',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN_TEXT,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return C.intl.string(C.t.j5xUSU);
            },
            get displayDescription() {
                return C.intl.string(C.t.j5xUSU);
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return C.intl.string(C.t.JewOra);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t.JewOra);
                    }
                }
            ],
            execute: (e) => {
                var t;
                let n = null != (t = x(e, 'message')) ? t : '';
                return { content: ''.concat(n, ' \xAF\\_(ツ)_/\xAF').trim() };
            }
        },
        {
            id: '-2',
            untranslatedName: 'tableflip',
            displayName: 'tableflip',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN_TEXT,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return C.intl.string(C.t.nrQRcX);
            },
            get displayDescription() {
                return C.intl.string(C.t.nrQRcX);
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return C.intl.string(C.t.EI80t7);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t.EI80t7);
                    }
                }
            ],
            execute: (e) => {
                var t;
                let n = null != (t = x(e, 'message')) ? t : '';
                return { content: ''.concat(n, ' (\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u253B\u2501\u253B').trim() };
            }
        },
        {
            id: '-3',
            untranslatedName: 'unflip',
            displayName: 'unflip',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN_TEXT,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return C.intl.string(C.t.pnnn8f);
            },
            get displayDescription() {
                return C.intl.string(C.t.pnnn8f);
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return C.intl.string(C.t.ETs6go);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t.ETs6go);
                    }
                }
            ],
            execute: (e) => {
                var t;
                let n = null != (t = x(e, 'message')) ? t : '';
                return { content: ''.concat(n, ' \u252C\u2500\u252Cノ( º _ ºノ)').trim() };
            }
        },
        {
            id: '-4',
            untranslatedName: 'tts',
            displayName: 'tts',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN_TEXT,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return C.intl.string(C.t.jZcIiY);
            },
            get displayDescription() {
                return C.intl.string(C.t.jZcIiY);
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return C.intl.string(C.t['k+sw9v']);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t['k+sw9v']);
                    },
                    required: !0
                }
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && !t.isPrivate() && E.OW.getSetting() && y.Z.can(A.Plq.SEND_TTS_MESSAGES, t);
            },
            execute: (e) => {
                var t;
                return {
                    content: null != (t = x(e, 'message')) ? t : '',
                    tts: !0
                };
            }
        },
        {
            id: '-5',
            untranslatedName: 'me',
            displayName: 'me',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN_TEXT,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return C.intl.string(C.t.UGO8fX);
            },
            get displayDescription() {
                return C.intl.string(C.t.UGO8fX);
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return C.intl.string(C.t.RWTgNT);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t.RWTgNT);
                    },
                    required: !0
                }
            ],
            execute: (e) => {
                var t;
                let n = null != (t = x(e, 'message')) ? t : '';
                return { content: '_'.concat(n, '_') };
            }
        },
        {
            id: '-6',
            untranslatedName: 'spoiler',
            displayName: 'spoiler',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN_TEXT,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return C.intl.string(C.t.v0eDdX);
            },
            get displayDescription() {
                return C.intl.string(C.t.v0eDdX);
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return C.intl.string(C.t.D13pbW);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t.D13pbW);
                    },
                    required: !0
                }
            ],
            execute: (e) => {
                var t;
                let n = null != (t = x(e, 'message')) ? t : '';
                return { content: (0, A.XmY)(n).trim() };
            }
        },
        {
            id: '-7',
            untranslatedName: 'nick',
            displayName: 'nick',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return C.intl.string(C.t.jiHfS0);
            },
            get displayDescription() {
                return C.intl.string(C.t.jiHfS0);
            },
            options: [
                {
                    name: 'new_nick',
                    displayName: 'new_nick',
                    type: f.jw.STRING,
                    get description() {
                        return C.intl.string(C.t.WTSzVl);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t.WTSzVl);
                    }
                }
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && !t.isPrivate() && (y.Z.can(A.Plq.CHANGE_NICKNAME, t) || y.Z.can(A.Plq.MANAGE_NICKNAMES, t));
            },
            execute: (e, t) => {
                var n;
                let { guild: r, channel: i } = t;
                if (null == r || null == i) return;
                let a = null != (n = x(e, 'new_nick')) ? n : '';
                l.Z.changeNickname(r.id, i.id, A.ME, a || '');
            }
        },
        {
            id: '-10',
            untranslatedName: 'thread',
            displayName: 'thread',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return C.intl.string(C.t.t6ZAS0);
            },
            get displayDescription() {
                return C.intl.string(C.t.t6ZAS0);
            },
            options: [
                {
                    name: 'name',
                    displayName: 'name',
                    type: f.jw.STRING,
                    get description() {
                        return C.intl.string(C.t.TffOfX);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t.TffOfX);
                    },
                    required: !0
                },
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return C.intl.string(C.t.QXfSfX);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t.QXfSfX);
                    },
                    required: !0
                }
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && (0, g.ki)(t);
            },
            execute: async (e, t) => {
                var n, r;
                let { channel: i } = t,
                    a = null != (n = x(e, 'name')) ? n : '',
                    o = null != (r = x(e, 'message')) ? r : '',
                    l = await (0, m.gK)(i, a, s.d.PUBLIC_THREAD, (0, h.WD)(i, null), 'Slash Command');
                d.Z.sendMessage(l.id, p.ZP.parse(l, o));
            }
        },
        {
            id: '-11',
            untranslatedName: 'kick',
            displayName: 'kick',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return C.intl.string(C.t['03N0UF']);
            },
            get displayDescription() {
                return C.intl.string(C.t['03N0UF']);
            },
            options: [
                {
                    name: 'user',
                    displayName: 'user',
                    type: f.jw.USER,
                    get description() {
                        return C.intl.string(C.t.gF8IpK);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t.gF8IpK);
                    },
                    required: !0
                },
                {
                    name: 'reason',
                    displayName: 'reason',
                    type: f.jw.STRING,
                    get description() {
                        return C.intl.string(C.t.QWldgo);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t.QWldgo);
                    },
                    required: !1
                }
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return y.Z.can(A.Plq.KICK_MEMBERS, t);
            },
            execute: (e, t) => {
                var n;
                let { guild: r, channel: i } = t;
                if (null == r || null == i) return;
                let a = null != (n = x(e, 'user')) ? n : '';
                if (!y.Z.canManageUser(A.Plq.KICK_MEMBERS, a, r)) return void d.Z.sendBotMessage(i.id, C.intl.string(C.t['6RIwPD']));
                (async () => {
                    var t;
                    let n = O.default.getUser(a);
                    if (null == n) throw Error();
                    await u.Z.kickUser(r.id, a, null != (t = x(e, 'reason')) ? t : ''), d.Z.sendBotMessage(i.id, C.intl.formatToPlainString(C.t['9wzHDQ'], { user: I.ZP.getUserTag(n) }));
                })().catch(() => {
                    d.Z.sendBotMessage(i.id, C.intl.string(C.t.l0gNlp));
                });
            }
        },
        {
            id: '-12',
            untranslatedName: 'ban',
            displayName: 'ban',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return C.intl.string(C.t.HWuskp);
            },
            get displayDescription() {
                return C.intl.string(C.t.HWuskp);
            },
            options: [
                {
                    name: 'user',
                    displayName: 'user',
                    type: f.jw.USER,
                    get description() {
                        return C.intl.string(C.t.z3XPjo);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t.z3XPjo);
                    },
                    required: !0
                },
                {
                    name: 'delete_messages',
                    displayName: 'delete_messages',
                    type: f.jw.INTEGER,
                    get description() {
                        return C.intl.string(C.t.smrvAw);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t.smrvAw);
                    },
                    required: !0,
                    get choices() {
                        return [
                            {
                                name: C.intl.string(C.t['4obaMT']),
                                displayName: C.intl.string(C.t['4obaMT']),
                                value: 0
                            },
                            {
                                name: C.intl.string(C.t.RKpitb),
                                displayName: C.intl.string(C.t.RKpitb),
                                value: v.Z.Seconds.HOUR
                            },
                            {
                                name: C.intl.string(C.t['8WfJZ2']),
                                displayName: C.intl.string(C.t['8WfJZ2']),
                                value: 6 * v.Z.Seconds.HOUR
                            },
                            {
                                name: C.intl.string(C.t.p1up7u),
                                displayName: C.intl.string(C.t.p1up7u),
                                value: 12 * v.Z.Seconds.HOUR
                            },
                            {
                                name: C.intl.string(C.t.XuVkkJ),
                                displayName: C.intl.string(C.t.XuVkkJ),
                                value: v.Z.Seconds.DAY
                            },
                            {
                                name: C.intl.string(C.t.gMcDS0),
                                displayName: C.intl.string(C.t.gMcDS0),
                                value: 3 * v.Z.Seconds.DAY
                            },
                            {
                                name: C.intl.string(C.t.FA7IUl),
                                displayName: C.intl.string(C.t.FA7IUl),
                                value: 7 * v.Z.Seconds.DAY
                            }
                        ];
                    }
                },
                {
                    name: 'reason',
                    displayName: 'reason',
                    type: f.jw.STRING,
                    get description() {
                        return C.intl.string(C.t.dG4noa);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t.dG4noa);
                    },
                    required: !1
                }
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return y.Z.can(A.Plq.BAN_MEMBERS, t);
            },
            execute: (e, t) => {
                var n;
                let { guild: r, channel: i } = t;
                if (null == r || null == i) return;
                let a = null != (n = x(e, 'user')) ? n : '';
                if (!y.Z.canManageUser(A.Plq.BAN_MEMBERS, a, r)) return void d.Z.sendBotMessage(i.id, C.intl.string(C.t.R27LJi));
                (async () => {
                    var t, n;
                    if ('' === a) throw Error();
                    let o = null != (t = x(e, 'delete_messages')) ? t : 0,
                        s = null != (n = x(e, 'reason')) ? n : '',
                        l = O.default.getUser(a);
                    await u.Z.banUser(r.id, a, o, s), d.Z.sendBotMessage(i.id, C.intl.formatToPlainString(C.t.YflWdH, { user: null != l ? I.ZP.getUserTag(l) : a }));
                })().catch(() => {
                    d.Z.sendBotMessage(i.id, C.intl.string(C.t.w2J6Qk));
                });
            }
        },
        {
            id: '-13',
            untranslatedName: 'timeout',
            displayName: 'timeout',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return C.intl.string(C.t.KkPcen);
            },
            get displayDescription() {
                return C.intl.string(C.t.KkPcen);
            },
            options: [
                {
                    name: 'user',
                    displayName: 'user',
                    type: f.jw.USER,
                    get description() {
                        return C.intl.string(C.t.UU3VRk);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t.UU3VRk);
                    },
                    required: !0
                },
                {
                    name: 'duration',
                    displayName: 'duration',
                    type: f.jw.INTEGER,
                    get description() {
                        return C.intl.string(C.t.SNqN1d);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t.SNqN1d);
                    },
                    required: !0,
                    get choices() {
                        return (0, N.tr)().map((e) =>
                            D(P({}, e), {
                                name: e.label,
                                displayName: e.label
                            })
                        );
                    }
                },
                {
                    name: 'reason',
                    displayName: 'reason',
                    type: f.jw.STRING,
                    get description() {
                        return C.intl.string(C.t.akHScH);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t.akHScH);
                    },
                    required: !1
                }
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return y.Z.can(A.Plq.MODERATE_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: r } = t;
                if (null == n || null == r) return;
                let i = x(e, 'user');
                if (!(0, _.F)(n.id, i)) return void d.Z.sendBotMessage(r.id, C.intl.string(C.t.F5pqSU));
                (async () => {
                    var t, a;
                    let s = null != (t = x(e, 'duration')) ? t : '',
                        l = null != (a = x(e, 'reason')) ? a : '',
                        c = O.default.getUser(i);
                    if (null == c) throw Error();
                    await u.Z.setCommunicationDisabledUntil({
                        guildId: n.id,
                        userId: i,
                        communicationDisabledUntilTimestamp: o()().add(s, 's').toISOString(),
                        duration: s,
                        reason: l
                    }),
                        d.Z.sendBotMessage(
                            r.id,
                            C.intl.formatToPlainString(C.t.BbRV6u, {
                                user: I.ZP.getUserTag(c),
                                duration: s
                            })
                        );
                })().catch(() => {
                    d.Z.sendBotMessage(r.id, C.intl.string(C.t['+mWyVl']));
                });
            }
        },
        {
            id: '-14',
            untranslatedName: 'msg',
            displayName: 'msg',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN,
            applicationId: T.bi.BUILT_IN,
            get untranslatedDescription() {
                return C.intl.string(C.t.Dg8XZ2);
            },
            get displayDescription() {
                return C.intl.string(C.t.Dg8XZ2);
            },
            options: [
                {
                    name: 'user',
                    displayName: 'user',
                    type: f.jw.USER,
                    get description() {
                        return C.intl.string(C.t['KmVq/P']);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t['KmVq/P']);
                    },
                    required: !0
                },
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return C.intl.string(C.t.oGUuOD);
                    },
                    get displayDescription() {
                        return C.intl.string(C.t.oGUuOD);
                    },
                    required: !0,
                    get maxLength() {
                        var j;
                        return (null == (j = O.default.getCurrentUser()) ? void 0 : j.premiumType) ? A.en1 : A.J6R;
                    }
                }
            ],
            execute: (e, t) => {
                var n;
                let { channel: r } = t;
                if (null == r) return;
                let a = x(e, 'user'),
                    o = null != (n = x(e, 'message')) ? n : '';
                (async () => {
                    await c.Z.openPrivateChannel({ recipientIds: a }).then((e) => {
                        let t = b.Z.getChannel(e);
                        i()(null != t, 'Newly created PrivateChannel is null'), d.Z.sendMessage(t.id, p.ZP.parse(t, o));
                    });
                })().catch(() => {
                    d.Z.sendBotMessage(r.id, C.intl.string(C.t['3XaE9/']));
                });
            }
        }
    ],
    U = k.filter((e) => ['gif', 'tenor', 'tts', 'me', 'tableflip', 'unflip', 'shrug', 'spoiler', 'nick'].includes(e.untranslatedName)),
    G = (e, t, n) => {
        let r = t ? k : U;
        return r.filter((t) => e.includes(t.type) && (!n || t.inputType === S.iw.BUILT_IN_TEXT || t.inputType === S.iw.BUILT_IN_INTEGRATION));
    };
