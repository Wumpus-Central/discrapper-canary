n.d(t, { Z: () => R }), n(653041), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(831209),
    r = n(442837),
    s = n(704215),
    o = n(481060),
    c = n(278323),
    d = n(566620),
    u = n(403404),
    h = n(906732),
    p = n(605236),
    m = n(706140),
    f = n(243778),
    g = n(618857),
    _ = n(488131),
    C = n(375954),
    x = n(626135),
    v = n(585483),
    E = n(403182),
    I = n(127654),
    b = n(752305),
    Z = n(951211),
    N = n(981631),
    T = n(921944),
    S = n(489887),
    j = n(388032),
    y = n(308183);
let A = /(.*)```(\w+)\n(.*)```(.*)/s;
function P() {
    let e = (0, r.e7)([C.Z], () => C.Z.hasCurrentUserSentMessageSinceAppStart()),
        t = [];
    e && t.push(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE);
    let [n] = (0, m.cv)(t);
    return (
        l.useEffect(
            () => () => {
                n === s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE && (0, p.EW)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: T.L.TAKE_ACTION });
            },
            [n]
        ),
        (0, i.jsx)(f.ZP, {
            contentTypes: t,
            children: (e) => {
                let { visibleContent: t } = e;
                return t === s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE
                    ? (0, i.jsx)(o.IGR, {
                          text: j.intl.string(j.t.y2b7CA),
                          color: a.Z.BUTTON_DANGER_BACKGROUND
                      })
                    : null;
            }
        })
    );
}
function R(e) {
    let { channel: t, options: r, onFileUpload: m, onClose: f, onSelect: C, draftType: R, editorTextContent: M, setValue: L, openClips: k } = e,
        { analyticsLocations: O } = (0, h.ZP)(),
        D = (0, g.Dt)({ channel: t });
    function w() {
        (0, _.R6)(t, void 0, 'Plus Button');
    }
    function U() {
        x.default.track(N.rMx.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), L('/', (0, b.JM)('/'));
    }
    function B() {
        k();
    }
    function F() {
        (0, p.EW)(s.z.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: T.L.TAKE_ACTION }),
            (0, o.ZDy)(
                async () => {
                    let { default: e } = await n.e('68784').then(n.bind(n, 611611));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: t
                        });
                },
                { modalKey: S.$z }
            );
    }
    function H() {
        x.default.track(N.rMx.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
            channel_type: t.type,
            channel_id: t.id,
            guild_id: t.guild_id
        }),
            (0, u.Z)({
                channel: t,
                guildId: t.guild_id,
                locationObject: {
                    page: t.isPrivate() ? N.ZY5.DM_CHANNEL : N.ZY5.GUILD_CHANNEL,
                    section: N.jXE.CHANNEL_TEXT_AREA,
                    object: N.qAy.CONTEXT_MENU_ITEM,
                    objectType: N.Qqv.ACTIVITY
                },
                openInPopout: !1,
                enableSelectedTextChannelInvite: !0,
                analyticsLocations: O
            }),
            (0, d.w1)({ guildId: t.guild_id });
    }
    function G() {
        let e = M,
            n = 'txt',
            i = '',
            l = M.match(A);
        null != l && ((i = l[1]), (n = l[2]), (e = l[3]), (i += l[4])), (0, I.d)([(0, E.dp)(new Blob([e], { type: 'text/plain' }), 'message.'.concat(n))], t, R), v.S.dispatchToLastSubscribed(N.CkL.CLEAR_TEXT), '' !== i && v.S.dispatchToLastSubscribed(N.CkL.INSERT_TEXT, { plainText: i });
    }
    return (
        l.useEffect(() => {
            x.default.track(N.rMx.OPEN_POPOUT, {
                type: 'Send Attachment',
                channel_id: t.id,
                guild_id: t.guild_id
            });
        }, [t.guild_id, t.id]),
        (0, i.jsx)(o.v2r, {
            onSelect: C,
            navId: 'channel-attach',
            onClose: f,
            'aria-label': j.intl.string(j.t.Xm41aW),
            className: y.menu,
            children: r.map(function (e) {
                var n;
                let l = (0, i.jsxs)('div', {
                    className: y.optionLabel,
                    children: [
                        (0, i.jsx)(e.icon, {
                            className: y.optionIcon,
                            color: 'currentColor'
                        }),
                        (0, i.jsx)('div', {
                            className: y.optionName,
                            children: e.display
                        }),
                        null != e.badgeVal &&
                            e.badgeVal > 0 &&
                            (0, i.jsx)(o.mAB, {
                                className: y.badge,
                                color: null !== (n = e.badgeColor) && void 0 !== n ? n : a.Z.STATUS_DANGER,
                                count: e.badgeVal
                            })
                    ]
                });
                switch (e.type) {
                    case Z.r.UPLOAD_A_FILE:
                        return (0, i.jsx)(
                            o.sNh,
                            {
                                id: 'upload-file',
                                label: l,
                                action: m
                            },
                            'upload-file'
                        );
                    case Z.r.UPLOAD_TEXT_AS_FILE:
                        if ('' === M) return null;
                        return (0, i.jsx)(
                            o.sNh,
                            {
                                id: 'upload-text-as-file',
                                label: l,
                                action: G
                            },
                            'upload-text-as-file'
                        );
                    case Z.r.CLIPS:
                        return (0, i.jsx)(
                            o.sNh,
                            {
                                id: 'clips',
                                label: l,
                                action: B
                            },
                            'clips'
                        );
                    case Z.r.POLL:
                        return (0, i.jsx)(
                            o.sNh,
                            {
                                id: 'poll',
                                label: l,
                                action: F
                            },
                            'poll'
                        );
                    case Z.r.INVITE_TO_PLAY_GAME:
                        return (0, i.jsx)(
                            o.sNh,
                            {
                                id: 'play',
                                label: l,
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void c.Z.sendActivityInvite({
                                            channelId: t.id,
                                            type: N.mFx.JOIN,
                                            activity: n,
                                            location: O[O.length - 1]
                                        })
                                    );
                                }
                            },
                            'play'
                        );
                    case Z.r.INVITE_TO_LISTEN:
                        return (0, i.jsx)(
                            o.sNh,
                            {
                                id: 'listen',
                                label: l,
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void c.Z.sendActivityInvite({
                                            channelId: t.id,
                                            type: N.mFx.LISTEN,
                                            activity: n,
                                            location: O[O.length - 1]
                                        })
                                    );
                                }
                            },
                            'listen'
                        );
                    case Z.r.INVITE_TO_WATCH:
                        return (0, i.jsx)(
                            o.sNh,
                            {
                                id: 'watch',
                                label: l,
                                action: () => {
                                    var n;
                                    return (
                                        (n = e.activity),
                                        void c.Z.sendActivityInvite({
                                            channelId: t.id,
                                            type: N.mFx.WATCH,
                                            activity: n,
                                            location: O[O.length - 1]
                                        })
                                    );
                                }
                            },
                            'watch'
                        );
                    case Z.r.CREATE_THREAD:
                        return (0, i.jsx)(
                            o.sNh,
                            {
                                id: 'THREAD',
                                label: l,
                                action: w
                            },
                            'THREAD'
                        );
                    case Z.r.SLASH_COMMAND:
                        return (0, i.jsx)(
                            o.sNh,
                            {
                                id: 'SLASH_COMMAND',
                                label: l,
                                action: U
                            },
                            'SLASH_COMMAND'
                        );
                    case Z.r.ACTIVITY:
                        return (0, i.jsx)(
                            o.sNh,
                            {
                                id: 'activity',
                                label: l,
                                action: H,
                                hint: (0, i.jsx)(P, {})
                            },
                            'activity'
                        );
                    case Z.r.SCHEDULED_MESSAGE:
                        return (0, i.jsx)(
                            o.sNh,
                            {
                                id: 'scheduled_message',
                                label: l,
                                action: () => (0, g.$f)({ channel: t }),
                                children: D
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
