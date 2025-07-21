(n.d(t, { Z: () => R }), n(413496), n(433524), n(35282), n(539854), n(388685));
var r = n(255367),
    i = n(73800),
    l = n(831209),
    a = n(442837),
    o = n(704215),
    s = n(481060),
    c = n(278323),
    u = n(566620),
    d = n(403404),
    p = n(906732),
    h = n(266454),
    f = n(706140),
    m = n(243778),
    g = n(618857),
    b = n(488131),
    _ = n(375954),
    y = n(626135),
    C = n(585483),
    x = n(403182),
    v = n(127654),
    j = n(752305),
    O = n(951211),
    E = n(800513),
    S = n(981631),
    P = n(921944),
    I = n(489887),
    Z = n(388032),
    T = n(725776);
function N(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
let A = RegExp('(.*)```(\\w+)\\n(.*)```(.*)', 's');
function w() {
    let e = (0, a.e7)([_.Z], () => _.Z.hasCurrentUserSentMessageSinceAppStart()),
        t = [];
    e && t.push(o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE);
    let [n] = (0, f.cv)(t);
    return (
        i.useEffect(
            () => () => {
                n === o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE && (0, h.Q3)(o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: P.L.TAKE_ACTION });
            },
            [n]
        ),
        (0, r.jsx)(m.ZP, {
            contentTypes: t,
            children: (e) => {
                let { visibleContent: t } = e;
                return t === o.z.ACTIVITIES_CHAT_MENU_NEW_BADGE
                    ? (0, r.jsx)(s.IGR, {
                          text: Z.intl.string(Z.t.y2b7CA),
                          color: l.Z.BUTTON_DANGER_BACKGROUND
                      })
                    : null;
            }
        })
    );
}
function R(e) {
    let { channel: t, options: a, onFileUpload: f, onClose: m, onSelect: _, draftType: R, editorTextContent: M, setValue: D, openClips: L } = e,
        { analyticsLocations: k } = (0, p.ZP)(),
        U = (0, g.Dt)({ channel: t }),
        B = (0, E.Z)();
    function F() {
        (0, b.R6)(t, void 0, 'Plus Button');
    }
    function H() {
        (y.default.track(S.rMx.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), D('/', (0, j.JM)('/')));
    }
    function G() {
        L();
    }
    function V() {
        ((0, h.Q3)(o.z.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: P.L.TAKE_ACTION }),
            (0, s.ZDy)(
                async () => {
                    let { default: e } = await n.e('68784').then(n.bind(n, 611611));
                    return (n) => {
                        var i, l;
                        return (0, r.jsx)(
                            e,
                            ((i = N({}, n)),
                            (l = l = { channel: t }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(l)).forEach(function (e) {
                                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                                  }),
                            i)
                        );
                    };
                },
                { modalKey: I.$z }
            ));
    }
    function z() {
        (y.default.track(S.rMx.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
            channel_type: t.type,
            channel_id: t.id,
            guild_id: t.guild_id
        }),
            (0, d.Z)({
                channel: t,
                openInPopout: !1,
                analyticsLocations: k
            }),
            (0, u.w1)({ guildId: t.guild_id }));
    }
    function W() {
        let e = M,
            n = 'txt',
            r = '',
            i = M.match(A);
        (null != i && ((r = i[1]), (n = i[2]), (e = i[3]), (r += i[4])), (0, v.d)([(0, x.dp)(new Blob([e], { type: 'text/plain' }), 'message.'.concat(n), 'text/plain')], t, R), C.S.dispatchToLastSubscribed(S.CkL.CLEAR_TEXT), '' !== r && C.S.dispatchToLastSubscribed(S.CkL.INSERT_TEXT, { plainText: r }));
    }
    return (
        i.useEffect(() => {
            y.default.track(S.rMx.OPEN_POPOUT, {
                type: 'Send Attachment',
                channel_id: t.id,
                guild_id: t.guild_id
            });
        }, [t.guild_id, t.id]),
        (0, r.jsx)(s.v2r, {
            onSelect: _,
            navId: 'channel-attach',
            onClose: m,
            'aria-label': Z.intl.string(Z.t.Xm41aW),
            className: T.menu,
            children: a.map(function (e) {
                var n;
                let i = (0, r.jsxs)('div', {
                    className: T.optionLabel,
                    children: [
                        (0, r.jsx)(e.icon, {
                            className: T.optionIcon,
                            color: 'currentColor'
                        }),
                        (0, r.jsx)('div', {
                            className: T.optionName,
                            children: e.display
                        }),
                        null != e.badgeVal &&
                            e.badgeVal > 0 &&
                            (0, r.jsx)(s.mAB, {
                                className: T.badge,
                                color: null != (n = e.badgeColor) ? n : l.Z.STATUS_DANGER,
                                count: e.badgeVal
                            })
                    ]
                });
                switch (e.type) {
                    case O.r.UPLOAD_A_FILE:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: 'upload-file',
                                label: i,
                                action: f
                            },
                            'upload-file'
                        );
                    case O.r.UPLOAD_TEXT_AS_FILE:
                        if ('' === M) return null;
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: 'upload-text-as-file',
                                label: i,
                                action: W
                            },
                            'upload-text-as-file'
                        );
                    case O.r.CLIPS:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: 'clips',
                                label: i,
                                action: G
                            },
                            'clips'
                        );
                    case O.r.POLL:
                        let a = B(t, M);
                        return (0, r.jsx)(
                            s.sNh,
                            N(
                                {
                                    id: 'poll',
                                    label: i,
                                    action: V
                                },
                                a
                            ),
                            'poll'
                        );
                    case O.r.INVITE_TO_PLAY_GAME:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: 'play',
                                label: i,
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void c.Z.sendActivityInvite({
                                            channelId: t.id,
                                            type: S.mFx.JOIN,
                                            activity: n,
                                            location: k[k.length - 1]
                                        })
                                    );
                                }
                            },
                            'play'
                        );
                    case O.r.INVITE_TO_LISTEN:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: 'listen',
                                label: i,
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void c.Z.sendActivityInvite({
                                            channelId: t.id,
                                            type: S.mFx.LISTEN,
                                            activity: n,
                                            location: k[k.length - 1]
                                        })
                                    );
                                }
                            },
                            'listen'
                        );
                    case O.r.INVITE_TO_WATCH:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: 'watch',
                                label: i,
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void c.Z.sendActivityInvite({
                                            channelId: t.id,
                                            type: S.mFx.WATCH,
                                            activity: n,
                                            location: k[k.length - 1]
                                        })
                                    );
                                }
                            },
                            'watch'
                        );
                    case O.r.CREATE_THREAD:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: 'THREAD',
                                label: i,
                                action: F
                            },
                            'THREAD'
                        );
                    case O.r.SLASH_COMMAND:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: 'SLASH_COMMAND',
                                label: i,
                                action: H
                            },
                            'SLASH_COMMAND'
                        );
                    case O.r.ACTIVITY:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: 'activity',
                                label: i,
                                action: z,
                                hint: (0, r.jsx)(w, {})
                            },
                            'activity'
                        );
                    case O.r.SCHEDULED_MESSAGE:
                        return (0, r.jsx)(
                            s.sNh,
                            {
                                id: 'scheduled_message',
                                label: i,
                                action: () => (0, g.$f)({ channel: t }),
                                children: U
                            },
                            'scheduled_message'
                        );
                    default:
                        return null;
                }
            })
        })
    );
}
