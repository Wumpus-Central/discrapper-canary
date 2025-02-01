n.d(t, {
    Kh: () => M,
    Tm: () => x
}),
    n(47120),
    n(411104);
var i = n(512722),
    r = n.n(i),
    a = n(913527),
    s = n.n(a),
    o = n(106351),
    l = n(969812),
    u = n(493683),
    c = n(749210),
    d = n(904245),
    f = n(911969),
    _ = n(386696),
    p = n(957730),
    h = n(968437),
    m = n(928477),
    g = n(665906),
    E = n(695346),
    v = n(592125),
    y = n(496675),
    I = n(594174),
    T = n(70956),
    b = n(51144),
    S = n(895924),
    A = n(689079),
    N = n(981631),
    C = n(590433),
    R = n(388032);
let O = n(227419).Z,
    D = (e, t) => {
        var n;
        return null === (n = e.find((e) => e.name === t)) || void 0 === n ? void 0 : n.value;
    },
    x = {
        [A.bi.BUILT_IN]: {
            id: A.bi.BUILT_IN,
            type: S.Qi.BUILT_IN,
            get name() {
                return R.intl.string(R.t.fI5MTU);
            }
        },
        [A.bi.FRECENCY]: {
            id: A.bi.FRECENCY,
            type: S.Qi.BUILT_IN,
            get name() {
                return R.intl.string(R.t['+cGVV1']);
            }
        }
    },
    L = [
        ...O,
        {
            id: '-1',
            untranslatedName: 'shrug',
            displayName: 'shrug',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN_TEXT,
            applicationId: A.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.j5xUSU);
            },
            get displayDescription() {
                return R.intl.string(R.t.j5xUSU);
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.JewOra);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.JewOra);
                    }
                }
            ],
            execute: (e) => {
                var t;
                let n = null !== (t = D(e, 'message')) && void 0 !== t ? t : '';
                return { content: ''.concat(n, ' \xAF\\_(ツ)_/\xAF').trim() };
            }
        },
        {
            id: '-2',
            untranslatedName: 'tableflip',
            displayName: 'tableflip',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN_TEXT,
            applicationId: A.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.nrQRcX);
            },
            get displayDescription() {
                return R.intl.string(R.t.nrQRcX);
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.EI80t7);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.EI80t7);
                    }
                }
            ],
            execute: (e) => {
                var t;
                let n = null !== (t = D(e, 'message')) && void 0 !== t ? t : '';
                return { content: ''.concat(n, ' (\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u253B\u2501\u253B').trim() };
            }
        },
        {
            id: '-3',
            untranslatedName: 'unflip',
            displayName: 'unflip',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN_TEXT,
            applicationId: A.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.pnnn8f);
            },
            get displayDescription() {
                return R.intl.string(R.t.pnnn8f);
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.ETs6go);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.ETs6go);
                    }
                }
            ],
            execute: (e) => {
                var t;
                let n = null !== (t = D(e, 'message')) && void 0 !== t ? t : '';
                return { content: ''.concat(n, ' \u252C\u2500\u252Cノ( º _ ºノ)').trim() };
            }
        },
        {
            id: '-4',
            untranslatedName: 'tts',
            displayName: 'tts',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN_TEXT,
            applicationId: A.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.jZcIiY);
            },
            get displayDescription() {
                return R.intl.string(R.t.jZcIiY);
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t['k+sw9v']);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t['k+sw9v']);
                    },
                    required: !0
                }
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && !t.isPrivate() && E.OW.getSetting() && y.Z.can(N.Plq.SEND_TTS_MESSAGES, t);
            },
            execute: (e) => {
                var t;
                return {
                    content: null !== (t = D(e, 'message')) && void 0 !== t ? t : '',
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
            applicationId: A.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.UGO8fX);
            },
            get displayDescription() {
                return R.intl.string(R.t.UGO8fX);
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.RWTgNT);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.RWTgNT);
                    },
                    required: !0
                }
            ],
            execute: (e) => {
                var t;
                let n = null !== (t = D(e, 'message')) && void 0 !== t ? t : '';
                return { content: '_'.concat(n, '_') };
            }
        },
        {
            id: '-6',
            untranslatedName: 'spoiler',
            displayName: 'spoiler',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN_TEXT,
            applicationId: A.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.v0eDdX);
            },
            get displayDescription() {
                return R.intl.string(R.t.v0eDdX);
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.D13pbW);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.D13pbW);
                    },
                    required: !0
                }
            ],
            execute: (e) => {
                var t;
                let n = null !== (t = D(e, 'message')) && void 0 !== t ? t : '';
                return { content: (0, N.XmY)(n).trim() };
            }
        },
        {
            id: '-7',
            untranslatedName: 'nick',
            displayName: 'nick',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN,
            applicationId: A.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.jiHfS0);
            },
            get displayDescription() {
                return R.intl.string(R.t.jiHfS0);
            },
            options: [
                {
                    name: 'new_nick',
                    displayName: 'new_nick',
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.WTSzVl);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.WTSzVl);
                    }
                }
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && !t.isPrivate() && (y.Z.can(N.Plq.CHANGE_NICKNAME, t) || y.Z.can(N.Plq.MANAGE_NICKNAMES, t));
            },
            execute: (e, t) => {
                var n;
                let { guild: i, channel: r } = t;
                if (null == i || null == r) return;
                let a = null !== (n = D(e, 'new_nick')) && void 0 !== n ? n : '';
                l.Z.changeNickname(i.id, r.id, N.ME, a || '');
            }
        },
        {
            id: '-10',
            untranslatedName: 'thread',
            displayName: 'thread',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN,
            applicationId: A.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.t6ZAS0);
            },
            get displayDescription() {
                return R.intl.string(R.t.t6ZAS0);
            },
            options: [
                {
                    name: 'name',
                    displayName: 'name',
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.TffOfX);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.TffOfX);
                    },
                    required: !0
                },
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.QXfSfX);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.QXfSfX);
                    },
                    required: !0
                }
            ],
            predicate: (e) => {
                let { channel: t } = e;
                return null != t && (0, g.ki)(t);
            },
            execute: async (e, t) => {
                var n, i;
                let { channel: r } = t,
                    a = null !== (n = D(e, 'name')) && void 0 !== n ? n : '',
                    s = null !== (i = D(e, 'message')) && void 0 !== i ? i : '',
                    l = await (0, m.gK)(r, a, o.d.PUBLIC_THREAD, (0, h.WD)(r, null), 'Slash Command');
                d.Z.sendMessage(l.id, p.ZP.parse(l, s));
            }
        },
        {
            id: '-11',
            untranslatedName: 'kick',
            displayName: 'kick',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN,
            applicationId: A.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t['03N0UF']);
            },
            get displayDescription() {
                return R.intl.string(R.t['03N0UF']);
            },
            options: [
                {
                    name: 'user',
                    displayName: 'user',
                    type: f.jw.USER,
                    get description() {
                        return R.intl.string(R.t.gF8IpK);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.gF8IpK);
                    },
                    required: !0
                },
                {
                    name: 'reason',
                    displayName: 'reason',
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.QWldgo);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.QWldgo);
                    },
                    required: !1
                }
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return y.Z.can(N.Plq.KICK_MEMBERS, t);
            },
            execute: (e, t) => {
                var n;
                let { guild: i, channel: r } = t;
                if (null == i || null == r) return;
                let a = null !== (n = D(e, 'user')) && void 0 !== n ? n : '';
                if (!y.Z.canManageUser(N.Plq.KICK_MEMBERS, a, i)) {
                    d.Z.sendBotMessage(r.id, R.intl.string(R.t['6RIwPD']));
                    return;
                }
                (async () => {
                    var t;
                    let n = I.default.getUser(a);
                    if (null == n) throw Error();
                    await c.Z.kickUser(i.id, a, null !== (t = D(e, 'reason')) && void 0 !== t ? t : ''), d.Z.sendBotMessage(r.id, R.intl.formatToPlainString(R.t['9wzHDQ'], { user: b.ZP.getUserTag(n) }));
                })().catch(() => {
                    d.Z.sendBotMessage(r.id, R.intl.string(R.t.l0gNlp));
                });
            }
        },
        {
            id: '-12',
            untranslatedName: 'ban',
            displayName: 'ban',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN,
            applicationId: A.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.HWuskp);
            },
            get displayDescription() {
                return R.intl.string(R.t.HWuskp);
            },
            options: [
                {
                    name: 'user',
                    displayName: 'user',
                    type: f.jw.USER,
                    get description() {
                        return R.intl.string(R.t.z3XPjo);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.z3XPjo);
                    },
                    required: !0
                },
                {
                    name: 'delete_messages',
                    displayName: 'delete_messages',
                    type: f.jw.INTEGER,
                    get description() {
                        return R.intl.string(R.t.smrvAw);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.smrvAw);
                    },
                    required: !0,
                    get choices() {
                        return [
                            {
                                name: R.intl.string(R.t['4obaMT']),
                                displayName: R.intl.string(R.t['4obaMT']),
                                value: 0
                            },
                            {
                                name: R.intl.string(R.t.RKpitb),
                                displayName: R.intl.string(R.t.RKpitb),
                                value: T.Z.Seconds.HOUR
                            },
                            {
                                name: R.intl.string(R.t['8WfJZ2']),
                                displayName: R.intl.string(R.t['8WfJZ2']),
                                value: 6 * T.Z.Seconds.HOUR
                            },
                            {
                                name: R.intl.string(R.t.p1up7u),
                                displayName: R.intl.string(R.t.p1up7u),
                                value: 12 * T.Z.Seconds.HOUR
                            },
                            {
                                name: R.intl.string(R.t.XuVkkJ),
                                displayName: R.intl.string(R.t.XuVkkJ),
                                value: T.Z.Seconds.DAY
                            },
                            {
                                name: R.intl.string(R.t.gMcDS0),
                                displayName: R.intl.string(R.t.gMcDS0),
                                value: 3 * T.Z.Seconds.DAY
                            },
                            {
                                name: R.intl.string(R.t.FA7IUl),
                                displayName: R.intl.string(R.t.FA7IUl),
                                value: 7 * T.Z.Seconds.DAY
                            }
                        ];
                    }
                },
                {
                    name: 'reason',
                    displayName: 'reason',
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.dG4noa);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.dG4noa);
                    },
                    required: !1
                }
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return y.Z.can(N.Plq.BAN_MEMBERS, t);
            },
            execute: (e, t) => {
                var n;
                let { guild: i, channel: r } = t;
                if (null == i || null == r) return;
                let a = null !== (n = D(e, 'user')) && void 0 !== n ? n : '';
                if (!y.Z.canManageUser(N.Plq.BAN_MEMBERS, a, i)) {
                    d.Z.sendBotMessage(r.id, R.intl.string(R.t.R27LJi));
                    return;
                }
                (async () => {
                    var t, n;
                    if ('' === a) throw Error();
                    let s = null !== (t = D(e, 'delete_messages')) && void 0 !== t ? t : 0,
                        o = null !== (n = D(e, 'reason')) && void 0 !== n ? n : '',
                        l = I.default.getUser(a);
                    await c.Z.banUser(i.id, a, s, o), d.Z.sendBotMessage(r.id, R.intl.formatToPlainString(R.t.YflWdH, { user: null != l ? b.ZP.getUserTag(l) : a }));
                })().catch(() => {
                    d.Z.sendBotMessage(r.id, R.intl.string(R.t.w2J6Qk));
                });
            }
        },
        {
            id: '-13',
            untranslatedName: 'timeout',
            displayName: 'timeout',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN,
            applicationId: A.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.KkPcen);
            },
            get displayDescription() {
                return R.intl.string(R.t.KkPcen);
            },
            options: [
                {
                    name: 'user',
                    displayName: 'user',
                    type: f.jw.USER,
                    get description() {
                        return R.intl.string(R.t.UU3VRk);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.UU3VRk);
                    },
                    required: !0
                },
                {
                    name: 'duration',
                    displayName: 'duration',
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.SNqN1d);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.SNqN1d);
                    },
                    required: !0,
                    get choices() {
                        return (0, C.tr)().map((e) => ({
                            ...e,
                            name: e.label,
                            displayName: e.label
                        }));
                    }
                },
                {
                    name: 'reason',
                    displayName: 'reason',
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.akHScH);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.akHScH);
                    },
                    required: !1
                }
            ],
            predicate: (e) => {
                let { guild: t } = e;
                return y.Z.can(N.Plq.MODERATE_MEMBERS, t);
            },
            execute: (e, t) => {
                let { guild: n, channel: i } = t;
                if (null == n || null == i) return;
                let r = D(e, 'user');
                if (!(0, _.F)(n.id, r)) {
                    d.Z.sendBotMessage(i.id, R.intl.string(R.t.F5pqSU));
                    return;
                }
                (async () => {
                    var t, a;
                    let o = null !== (t = D(e, 'duration')) && void 0 !== t ? t : '',
                        l = null !== (a = D(e, 'reason')) && void 0 !== a ? a : '',
                        u = I.default.getUser(r);
                    if (null == u) throw Error();
                    await c.Z.setCommunicationDisabledUntil({
                        guildId: n.id,
                        userId: r,
                        communicationDisabledUntilTimestamp: s()().add(o, 's').toISOString(),
                        duration: o,
                        reason: l
                    }),
                        d.Z.sendBotMessage(
                            i.id,
                            R.intl.formatToPlainString(R.t.BbRV6u, {
                                user: b.ZP.getUserTag(u),
                                duration: o
                            })
                        );
                })().catch(() => {
                    d.Z.sendBotMessage(i.id, R.intl.string(R.t['+mWyVl']));
                });
            }
        },
        {
            id: '-14',
            untranslatedName: 'msg',
            displayName: 'msg',
            type: f.yU.CHAT,
            inputType: S.iw.BUILT_IN,
            applicationId: A.bi.BUILT_IN,
            get untranslatedDescription() {
                return R.intl.string(R.t.Dg8XZ2);
            },
            get displayDescription() {
                return R.intl.string(R.t.Dg8XZ2);
            },
            options: [
                {
                    name: 'user',
                    displayName: 'user',
                    type: f.jw.USER,
                    get description() {
                        return R.intl.string(R.t['KmVq/P']);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t['KmVq/P']);
                    },
                    required: !0
                },
                {
                    name: 'message',
                    displayName: 'message',
                    type: f.jw.STRING,
                    get description() {
                        return R.intl.string(R.t.oGUuOD);
                    },
                    get displayDescription() {
                        return R.intl.string(R.t.oGUuOD);
                    },
                    required: !0,
                    get maxLength() {
                        var P;
                        return (null === (P = I.default.getCurrentUser()) || void 0 === P ? void 0 : P.premiumType) ? N.en1 : N.J6R;
                    }
                }
            ],
            execute: (e, t) => {
                var n;
                let { channel: i } = t;
                if (null == i) return;
                let a = D(e, 'user'),
                    s = null !== (n = D(e, 'message')) && void 0 !== n ? n : '';
                (async () => {
                    await u.Z.openPrivateChannel(a).then((e) => {
                        let t = v.Z.getChannel(e);
                        r()(null != t, 'Newly created PrivateChannel is null'), d.Z.sendMessage(t.id, p.ZP.parse(t, s));
                    });
                })().catch(() => {
                    d.Z.sendBotMessage(i.id, R.intl.string(R.t['3XaE9/']));
                });
            }
        }
    ],
    w = L.filter((e) => ['gif', 'tenor', 'tts', 'me', 'tableflip', 'unflip', 'shrug', 'spoiler', 'nick'].includes(e.untranslatedName)),
    M = (e, t, n) => {
        let i = t ? L : w;
        return i.filter((t) => e.includes(t.type) && (!n || t.inputType === S.iw.BUILT_IN_TEXT || t.inputType === S.iw.BUILT_IN_INTEGRATION));
    };
