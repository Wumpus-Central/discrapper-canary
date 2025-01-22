r.d(n, {
    Kh: function () {
        return B;
    },
    Tm: function () {
        return P;
    }
});
var i = r(47120);
var a = r(411104);
var o = r(512722),
    s = r.n(o),
    l = r(913527),
    u = r.n(l),
    c = r(106351),
    d = r(969812),
    f = r(493683),
    p = r(749210),
    h = r(904245),
    _ = r(911969),
    m = r(386696),
    g = r(957730),
    E = r(968437),
    v = r(928477),
    y = r(665906),
    b = r(695346),
    I = r(592125),
    T = r(496675),
    S = r(594174),
    A = r(70956),
    C = r(51144),
    N = r(895924),
    R = r(689079),
    O = r(981631),
    D = r(590433),
    x = r(388032);
let L = r(227419).Z,
    w = (e, n) => {
        var r;
        return null === (r = e.find((e) => e.name === n)) || void 0 === r ? void 0 : r.value;
    },
    P = {
        [R.bi.BUILT_IN]: {
            id: R.bi.BUILT_IN,
            type: N.Qi.BUILT_IN,
            get name() {
                return x.intl.string(x.t.fI5MTU);
            }
        },
        [R.bi.FRECENCY]: {
            id: R.bi.FRECENCY,
            type: N.Qi.BUILT_IN,
            get name() {
                return x.intl.string(x.t['+cGVV1']);
            }
        }
    },
    M = [
        ...L,
        {
            id: '-1',
            untranslatedName: 'shrug',
            displayName: 'shrug',
            type: _.yU.CHAT,
            inputType: N.iw.BUILT_IN_TEXT,
            applicationId: R.bi.BUILT_IN,
            get untranslatedDescription() {
                return x.intl.string(x.t.j5xUSU);
            },
            get displayDescription() {
                return x.intl.string(x.t.j5xUSU);
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: _.jw.STRING,
                    get description() {
                        return x.intl.string(x.t.JewOra);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t.JewOra);
                    }
                }
            ],
            execute: (e) => {
                var n;
                let r = null !== (n = w(e, 'message')) && void 0 !== n ? n : '';
                return { content: ''.concat(r, ' \xAF\\_(ツ)_/\xAF').trim() };
            }
        },
        {
            id: '-2',
            untranslatedName: 'tableflip',
            displayName: 'tableflip',
            type: _.yU.CHAT,
            inputType: N.iw.BUILT_IN_TEXT,
            applicationId: R.bi.BUILT_IN,
            get untranslatedDescription() {
                return x.intl.string(x.t.nrQRcX);
            },
            get displayDescription() {
                return x.intl.string(x.t.nrQRcX);
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: _.jw.STRING,
                    get description() {
                        return x.intl.string(x.t.EI80t7);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t.EI80t7);
                    }
                }
            ],
            execute: (e) => {
                var n;
                let r = null !== (n = w(e, 'message')) && void 0 !== n ? n : '';
                return { content: ''.concat(r, ' (\u256F\xB0\u25A1\xB0)\u256F\uFE35 \u253B\u2501\u253B').trim() };
            }
        },
        {
            id: '-3',
            untranslatedName: 'unflip',
            displayName: 'unflip',
            type: _.yU.CHAT,
            inputType: N.iw.BUILT_IN_TEXT,
            applicationId: R.bi.BUILT_IN,
            get untranslatedDescription() {
                return x.intl.string(x.t.pnnn8f);
            },
            get displayDescription() {
                return x.intl.string(x.t.pnnn8f);
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: _.jw.STRING,
                    get description() {
                        return x.intl.string(x.t.ETs6go);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t.ETs6go);
                    }
                }
            ],
            execute: (e) => {
                var n;
                let r = null !== (n = w(e, 'message')) && void 0 !== n ? n : '';
                return { content: ''.concat(r, ' \u252C\u2500\u252Cノ( º _ ºノ)').trim() };
            }
        },
        {
            id: '-4',
            untranslatedName: 'tts',
            displayName: 'tts',
            type: _.yU.CHAT,
            inputType: N.iw.BUILT_IN_TEXT,
            applicationId: R.bi.BUILT_IN,
            get untranslatedDescription() {
                return x.intl.string(x.t.jZcIiY);
            },
            get displayDescription() {
                return x.intl.string(x.t.jZcIiY);
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: _.jw.STRING,
                    get description() {
                        return x.intl.string(x.t['k+sw9v']);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t['k+sw9v']);
                    },
                    required: !0
                }
            ],
            predicate: (e) => {
                let { channel: n } = e;
                return !n.isPrivate() && b.OW.getSetting() && T.Z.can(O.Plq.SEND_TTS_MESSAGES, n);
            },
            execute: (e) => {
                var n;
                return {
                    content: null !== (n = w(e, 'message')) && void 0 !== n ? n : '',
                    tts: !0
                };
            }
        },
        {
            id: '-5',
            untranslatedName: 'me',
            displayName: 'me',
            type: _.yU.CHAT,
            inputType: N.iw.BUILT_IN_TEXT,
            applicationId: R.bi.BUILT_IN,
            get untranslatedDescription() {
                return x.intl.string(x.t.UGO8fX);
            },
            get displayDescription() {
                return x.intl.string(x.t.UGO8fX);
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: _.jw.STRING,
                    get description() {
                        return x.intl.string(x.t.RWTgNT);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t.RWTgNT);
                    },
                    required: !0
                }
            ],
            execute: (e) => {
                var n;
                let r = null !== (n = w(e, 'message')) && void 0 !== n ? n : '';
                return { content: '_'.concat(r, '_') };
            }
        },
        {
            id: '-6',
            untranslatedName: 'spoiler',
            displayName: 'spoiler',
            type: _.yU.CHAT,
            inputType: N.iw.BUILT_IN_TEXT,
            applicationId: R.bi.BUILT_IN,
            get untranslatedDescription() {
                return x.intl.string(x.t.v0eDdX);
            },
            get displayDescription() {
                return x.intl.string(x.t.v0eDdX);
            },
            options: [
                {
                    name: 'message',
                    displayName: 'message',
                    type: _.jw.STRING,
                    get description() {
                        return x.intl.string(x.t.D13pbW);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t.D13pbW);
                    },
                    required: !0
                }
            ],
            execute: (e) => {
                var n;
                let r = null !== (n = w(e, 'message')) && void 0 !== n ? n : '';
                return { content: (0, O.XmY)(r).trim() };
            }
        },
        {
            id: '-7',
            untranslatedName: 'nick',
            displayName: 'nick',
            type: _.yU.CHAT,
            inputType: N.iw.BUILT_IN,
            applicationId: R.bi.BUILT_IN,
            get untranslatedDescription() {
                return x.intl.string(x.t.jiHfS0);
            },
            get displayDescription() {
                return x.intl.string(x.t.jiHfS0);
            },
            options: [
                {
                    name: 'new_nick',
                    displayName: 'new_nick',
                    type: _.jw.STRING,
                    get description() {
                        return x.intl.string(x.t.WTSzVl);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t.WTSzVl);
                    }
                }
            ],
            predicate: (e) => {
                let { channel: n } = e;
                return !n.isPrivate() && (T.Z.can(O.Plq.CHANGE_NICKNAME, n) || T.Z.can(O.Plq.MANAGE_NICKNAMES, n));
            },
            execute: (e, n) => {
                var r;
                let { guild: i, channel: a } = n;
                if (null == i) return;
                let o = null !== (r = w(e, 'new_nick')) && void 0 !== r ? r : '';
                d.Z.changeNickname(i.id, a.id, O.ME, o || '');
            }
        },
        {
            id: '-10',
            untranslatedName: 'thread',
            displayName: 'thread',
            type: _.yU.CHAT,
            inputType: N.iw.BUILT_IN,
            applicationId: R.bi.BUILT_IN,
            get untranslatedDescription() {
                return x.intl.string(x.t.t6ZAS0);
            },
            get displayDescription() {
                return x.intl.string(x.t.t6ZAS0);
            },
            options: [
                {
                    name: 'name',
                    displayName: 'name',
                    type: _.jw.STRING,
                    get description() {
                        return x.intl.string(x.t.TffOfX);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t.TffOfX);
                    },
                    required: !0
                },
                {
                    name: 'message',
                    displayName: 'message',
                    type: _.jw.STRING,
                    get description() {
                        return x.intl.string(x.t.QXfSfX);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t.QXfSfX);
                    },
                    required: !0
                }
            ],
            predicate: (e) => {
                let { channel: n } = e;
                return (0, y.ki)(n);
            },
            execute: async (e, n) => {
                var r, i;
                let { channel: a } = n,
                    o = null !== (r = w(e, 'name')) && void 0 !== r ? r : '',
                    s = null !== (i = w(e, 'message')) && void 0 !== i ? i : '',
                    l = await (0, v.gK)(a, o, c.d.PUBLIC_THREAD, (0, E.WD)(a, null), 'Slash Command');
                h.Z.sendMessage(l.id, g.ZP.parse(l, s));
            }
        },
        {
            id: '-11',
            untranslatedName: 'kick',
            displayName: 'kick',
            type: _.yU.CHAT,
            inputType: N.iw.BUILT_IN,
            applicationId: R.bi.BUILT_IN,
            get untranslatedDescription() {
                return x.intl.string(x.t['03N0UF']);
            },
            get displayDescription() {
                return x.intl.string(x.t['03N0UF']);
            },
            options: [
                {
                    name: 'user',
                    displayName: 'user',
                    type: _.jw.USER,
                    get description() {
                        return x.intl.string(x.t.gF8IpK);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t.gF8IpK);
                    },
                    required: !0
                },
                {
                    name: 'reason',
                    displayName: 'reason',
                    type: _.jw.STRING,
                    get description() {
                        return x.intl.string(x.t.QWldgo);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t.QWldgo);
                    },
                    required: !1
                }
            ],
            predicate: (e) => {
                let { guild: n } = e;
                return T.Z.can(O.Plq.KICK_MEMBERS, n);
            },
            execute: (e, n) => {
                var r;
                let { guild: i, channel: a } = n;
                if (null == i) return;
                let o = null !== (r = w(e, 'user')) && void 0 !== r ? r : '';
                if (!T.Z.canManageUser(O.Plq.KICK_MEMBERS, o, i)) {
                    h.Z.sendBotMessage(a.id, x.intl.string(x.t['6RIwPD']));
                    return;
                }
                (async () => {
                    var n;
                    let r = S.default.getUser(o);
                    if (null == r) throw Error();
                    await p.Z.kickUser(i.id, o, null !== (n = w(e, 'reason')) && void 0 !== n ? n : ''), h.Z.sendBotMessage(a.id, x.intl.formatToPlainString(x.t['9wzHDQ'], { user: C.ZP.getUserTag(r) }));
                })().catch(() => {
                    h.Z.sendBotMessage(a.id, x.intl.string(x.t.l0gNlp));
                });
            }
        },
        {
            id: '-12',
            untranslatedName: 'ban',
            displayName: 'ban',
            type: _.yU.CHAT,
            inputType: N.iw.BUILT_IN,
            applicationId: R.bi.BUILT_IN,
            get untranslatedDescription() {
                return x.intl.string(x.t.HWuskp);
            },
            get displayDescription() {
                return x.intl.string(x.t.HWuskp);
            },
            options: [
                {
                    name: 'user',
                    displayName: 'user',
                    type: _.jw.USER,
                    get description() {
                        return x.intl.string(x.t.z3XPjo);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t.z3XPjo);
                    },
                    required: !0
                },
                {
                    name: 'delete_messages',
                    displayName: 'delete_messages',
                    type: _.jw.INTEGER,
                    get description() {
                        return x.intl.string(x.t.smrvAw);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t.smrvAw);
                    },
                    required: !0,
                    get choices() {
                        return [
                            {
                                name: x.intl.string(x.t['4obaMT']),
                                displayName: x.intl.string(x.t['4obaMT']),
                                value: 0
                            },
                            {
                                name: x.intl.string(x.t.RKpitb),
                                displayName: x.intl.string(x.t.RKpitb),
                                value: A.Z.Seconds.HOUR
                            },
                            {
                                name: x.intl.string(x.t['8WfJZ2']),
                                displayName: x.intl.string(x.t['8WfJZ2']),
                                value: 6 * A.Z.Seconds.HOUR
                            },
                            {
                                name: x.intl.string(x.t.p1up7u),
                                displayName: x.intl.string(x.t.p1up7u),
                                value: 12 * A.Z.Seconds.HOUR
                            },
                            {
                                name: x.intl.string(x.t.XuVkkJ),
                                displayName: x.intl.string(x.t.XuVkkJ),
                                value: A.Z.Seconds.DAY
                            },
                            {
                                name: x.intl.string(x.t.gMcDS0),
                                displayName: x.intl.string(x.t.gMcDS0),
                                value: 3 * A.Z.Seconds.DAY
                            },
                            {
                                name: x.intl.string(x.t.FA7IUl),
                                displayName: x.intl.string(x.t.FA7IUl),
                                value: 7 * A.Z.Seconds.DAY
                            }
                        ];
                    }
                },
                {
                    name: 'reason',
                    displayName: 'reason',
                    type: _.jw.STRING,
                    get description() {
                        return x.intl.string(x.t.dG4noa);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t.dG4noa);
                    },
                    required: !1
                }
            ],
            predicate: (e) => {
                let { guild: n } = e;
                return T.Z.can(O.Plq.BAN_MEMBERS, n);
            },
            execute: (e, n) => {
                var r;
                let { guild: i, channel: a } = n;
                if (null == i) return;
                let o = null !== (r = w(e, 'user')) && void 0 !== r ? r : '';
                if (!T.Z.canManageUser(O.Plq.BAN_MEMBERS, o, i)) {
                    h.Z.sendBotMessage(a.id, x.intl.string(x.t.R27LJi));
                    return;
                }
                (async () => {
                    var n, r;
                    if ('' === o) throw Error();
                    let s = null !== (n = w(e, 'delete_messages')) && void 0 !== n ? n : 0,
                        l = null !== (r = w(e, 'reason')) && void 0 !== r ? r : '',
                        u = S.default.getUser(o);
                    await p.Z.banUser(i.id, o, s, l), h.Z.sendBotMessage(a.id, x.intl.formatToPlainString(x.t.YflWdH, { user: null != u ? C.ZP.getUserTag(u) : o }));
                })().catch(() => {
                    h.Z.sendBotMessage(a.id, x.intl.string(x.t.w2J6Qk));
                });
            }
        },
        {
            id: '-13',
            untranslatedName: 'timeout',
            displayName: 'timeout',
            type: _.yU.CHAT,
            inputType: N.iw.BUILT_IN,
            applicationId: R.bi.BUILT_IN,
            get untranslatedDescription() {
                return x.intl.string(x.t.KkPcen);
            },
            get displayDescription() {
                return x.intl.string(x.t.KkPcen);
            },
            options: [
                {
                    name: 'user',
                    displayName: 'user',
                    type: _.jw.USER,
                    get description() {
                        return x.intl.string(x.t.UU3VRk);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t.UU3VRk);
                    },
                    required: !0
                },
                {
                    name: 'duration',
                    displayName: 'duration',
                    type: _.jw.STRING,
                    get description() {
                        return x.intl.string(x.t.SNqN1d);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t.SNqN1d);
                    },
                    required: !0,
                    get choices() {
                        return (0, D.tr)().map((e) => ({
                            ...e,
                            name: e.label,
                            displayName: e.label
                        }));
                    }
                },
                {
                    name: 'reason',
                    displayName: 'reason',
                    type: _.jw.STRING,
                    get description() {
                        return x.intl.string(x.t.akHScH);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t.akHScH);
                    },
                    required: !1
                }
            ],
            predicate: (e) => {
                let { guild: n } = e;
                return T.Z.can(O.Plq.MODERATE_MEMBERS, n);
            },
            execute: (e, n) => {
                let { guild: r, channel: i } = n;
                if (null == r) return;
                let a = w(e, 'user');
                if (!(0, m.F)(r.id, a)) {
                    h.Z.sendBotMessage(i.id, x.intl.string(x.t.F5pqSU));
                    return;
                }
                (async () => {
                    var n, o;
                    let s = null !== (n = w(e, 'duration')) && void 0 !== n ? n : '',
                        l = null !== (o = w(e, 'reason')) && void 0 !== o ? o : '',
                        c = S.default.getUser(a);
                    if (null == c) throw Error();
                    await p.Z.setCommunicationDisabledUntil({
                        guildId: r.id,
                        userId: a,
                        communicationDisabledUntilTimestamp: u()().add(s, 's').toISOString(),
                        duration: s,
                        reason: l
                    }),
                        h.Z.sendBotMessage(
                            i.id,
                            x.intl.formatToPlainString(x.t.BbRV6u, {
                                user: C.ZP.getUserTag(c),
                                duration: s
                            })
                        );
                })().catch(() => {
                    h.Z.sendBotMessage(i.id, x.intl.string(x.t['+mWyVl']));
                });
            }
        },
        {
            id: '-14',
            untranslatedName: 'msg',
            displayName: 'msg',
            type: _.yU.CHAT,
            inputType: N.iw.BUILT_IN,
            applicationId: R.bi.BUILT_IN,
            get untranslatedDescription() {
                return x.intl.string(x.t.Dg8XZ2);
            },
            get displayDescription() {
                return x.intl.string(x.t.Dg8XZ2);
            },
            options: [
                {
                    name: 'user',
                    displayName: 'user',
                    type: _.jw.USER,
                    get description() {
                        return x.intl.string(x.t['KmVq/P']);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t['KmVq/P']);
                    },
                    required: !0
                },
                {
                    name: 'message',
                    displayName: 'message',
                    type: _.jw.STRING,
                    get description() {
                        return x.intl.string(x.t.oGUuOD);
                    },
                    get displayDescription() {
                        return x.intl.string(x.t.oGUuOD);
                    },
                    required: !0,
                    get maxLength() {
                        var k;
                        return (null === (k = S.default.getCurrentUser()) || void 0 === k ? void 0 : k.premiumType) ? O.en1 : O.J6R;
                    }
                }
            ],
            execute: (e, n) => {
                var r;
                let { channel: i } = n,
                    a = w(e, 'user'),
                    o = null !== (r = w(e, 'message')) && void 0 !== r ? r : '';
                (async () => {
                    await f.Z.openPrivateChannel(a).then((e) => {
                        let n = I.Z.getChannel(e);
                        s()(null != n, 'Newly created PrivateChannel is null'), h.Z.sendMessage(n.id, g.ZP.parse(n, o));
                    });
                })().catch(() => {
                    h.Z.sendBotMessage(i.id, x.intl.string(x.t['3XaE9/']));
                });
            }
        }
    ],
    U = M.filter((e) => ['gif', 'tenor', 'tts', 'me', 'tableflip', 'unflip', 'shrug', 'spoiler', 'nick'].includes(e.untranslatedName)),
    B = (e, n, r) => {
        let i = n ? M : U;
        return (i = i.filter((n) => e.includes(n.type) && (!r || n.inputType === N.iw.BUILT_IN_TEXT || n.inputType === N.iw.BUILT_IN_INTEGRATION)));
    };
