n.d(t, {
    Z: function () {
        return P;
    }
}),
    n(653041),
    n(47120);
var i = n(200651),
    l = n(192379),
    r = n(831209),
    a = n(442837),
    s = n(704215),
    o = n(481060),
    c = n(278323),
    d = n(566620),
    u = n(403404),
    h = n(906732),
    p = n(605236),
    m = n(706140),
    f = n(243778),
    g = n(488131),
    C = n(375954),
    x = n(626135),
    v = n(585483),
    _ = n(403182),
    I = n(127654),
    E = n(752305),
    b = n(951211),
    Z = n(981631),
    S = n(921944),
    N = n(489887),
    T = n(388032),
    j = n(308183);
let A = /(.*)```(\w+)\n(.*)```(.*)/s;
function y() {
    let e = (0, a.e7)([C.Z], () => C.Z.hasCurrentUserSentMessageSinceAppStart()),
        t = [];
    e && t.push(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE);
    let [n] = (0, m.cv)(t);
    return (
        l.useEffect(
            () => () => {
                n === s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE && (0, p.EW)(s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE, { dismissAction: S.L.TAKE_ACTION });
            },
            [n]
        ),
        (0, i.jsx)(f.ZP, {
            contentTypes: t,
            children: (e) => {
                let { visibleContent: t } = e;
                return t === s.z.ACTIVITIES_CHAT_MENU_NEW_BADGE
                    ? (0, i.jsx)(o.TextBadge, {
                          text: T.intl.string(T.t.y2b7CA),
                          color: r.Z.BUTTON_DANGER_BACKGROUND
                      })
                    : null;
            }
        })
    );
}
function P(e) {
    let { channel: t, options: a, onFileUpload: m, onClose: f, onSelect: C, draftType: P, editorTextContent: M, setValue: R, openClips: L } = e,
        { analyticsLocations: k } = (0, h.ZP)();
    l.useEffect(() => {
        x.default.track(Z.rMx.OPEN_POPOUT, {
            type: 'Send Attachment',
            channel_id: t.id,
            guild_id: t.guild_id
        });
    }, [t.guild_id, t.id]);
    function O() {
        (0, g.R6)(t, void 0, 'Plus Button');
    }
    function D() {
        x.default.track(Z.rMx.CHANNEL_ATTACH_MENU_USE_APPS_CLICKED), R('/', (0, E.JM)('/'));
    }
    function w() {
        L();
    }
    function B() {
        (0, p.EW)(s.z.POLLS_CHAT_INPUT_COACHMARK, { dismissAction: S.L.TAKE_ACTION }),
            (0, o.openModalLazy)(
                async () => {
                    let { default: e } = await n.e('68784').then(n.bind(n, 611611));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            channel: t
                        });
                },
                { modalKey: N.$z }
            );
    }
    function U() {
        x.default.track(Z.rMx.CHANNEL_ATTACH_MENU_START_ACTIVITY_CLICKED, {
            channel_type: t.type,
            channel_id: t.id,
            guild_id: t.guild_id
        }),
            (0, u.Z)({
                channel: t,
                guildId: t.guild_id,
                locationObject: {
                    page: t.isPrivate() ? Z.ZY5.DM_CHANNEL : Z.ZY5.GUILD_CHANNEL,
                    section: Z.jXE.CHANNEL_TEXT_AREA,
                    object: Z.qAy.CONTEXT_MENU_ITEM,
                    objectType: Z.Qqv.ACTIVITY
                },
                openInPopout: !1,
                enableSelectedTextChannelInvite: !0,
                analyticsLocations: k
            }),
            (0, d.w1)({ guildId: t.guild_id });
    }
    function H() {
        let e = M,
            n = 'txt',
            i = '',
            l = M.match(A);
        null != l && ((i = l[1]), (n = l[2]), (e = l[3]), (i += l[4])), (0, I.d)([(0, _.dp)(new Blob([e], { type: 'text/plain' }), 'message.'.concat(n))], t, P), v.S.dispatchToLastSubscribed(Z.CkL.CLEAR_TEXT), '' !== i && v.S.dispatchToLastSubscribed(Z.CkL.INSERT_TEXT, { plainText: i });
    }
    return (0, i.jsx)(o.Menu, {
        onSelect: C,
        navId: 'channel-attach',
        onClose: f,
        'aria-label': T.intl.string(T.t.Xm41aW),
        className: j.menu,
        children: a.map(function (e) {
            var n;
            let l = (0, i.jsxs)('div', {
                className: j.optionLabel,
                children: [
                    (0, i.jsx)(e.icon, {
                        className: j.optionIcon,
                        color: 'currentColor'
                    }),
                    (0, i.jsx)('div', {
                        className: j.optionName,
                        children: e.display
                    }),
                    null != e.badgeVal &&
                        e.badgeVal > 0 &&
                        (0, i.jsx)(o.NumberBadge, {
                            className: j.badge,
                            color: null !== (n = e.badgeColor) && void 0 !== n ? n : r.Z.STATUS_DANGER,
                            count: e.badgeVal
                        })
                ]
            });
            switch (e.type) {
                case b.r.UPLOAD_A_FILE:
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'upload-file',
                            label: l,
                            action: m
                        },
                        'upload-file'
                    );
                case b.r.UPLOAD_TEXT_AS_FILE:
                    if ('' === M) return null;
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'upload-text-as-file',
                            label: l,
                            action: H
                        },
                        'upload-text-as-file'
                    );
                case b.r.CLIPS:
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'clips',
                            label: l,
                            action: w
                        },
                        'clips'
                    );
                case b.r.POLL:
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'poll',
                            label: l,
                            action: B
                        },
                        'poll'
                    );
                case b.r.INVITE_TO_PLAY_GAME:
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'play',
                            label: l,
                            action: () => {
                                var n;
                                return (
                                    (n = e.activity),
                                    void c.Z.sendActivityInvite({
                                        channelId: t.id,
                                        type: Z.mFx.JOIN,
                                        activity: n,
                                        location: k[k.length - 1]
                                    })
                                );
                            }
                        },
                        'play'
                    );
                case b.r.INVITE_TO_LISTEN:
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'listen',
                            label: l,
                            action: () => {
                                var n;
                                return (
                                    (n = e.activity),
                                    void c.Z.sendActivityInvite({
                                        channelId: t.id,
                                        type: Z.mFx.LISTEN,
                                        activity: n,
                                        location: k[k.length - 1]
                                    })
                                );
                            }
                        },
                        'listen'
                    );
                case b.r.INVITE_TO_WATCH:
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'watch',
                            label: l,
                            action: () => {
                                var n;
                                return (
                                    (n = e.activity),
                                    void c.Z.sendActivityInvite({
                                        channelId: t.id,
                                        type: Z.mFx.WATCH,
                                        activity: n,
                                        location: k[k.length - 1]
                                    })
                                );
                            }
                        },
                        'watch'
                    );
                case b.r.CREATE_THREAD:
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'THREAD',
                            label: l,
                            action: O
                        },
                        'THREAD'
                    );
                case b.r.SLASH_COMMAND:
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'SLASH_COMMAND',
                            label: l,
                            action: D
                        },
                        'SLASH_COMMAND'
                    );
                case b.r.ACTIVITY:
                    return (0, i.jsx)(
                        o.MenuItem,
                        {
                            id: 'activity',
                            label: l,
                            action: U,
                            hint: (0, i.jsx)(y, {})
                        },
                        'activity'
                    );
                default:
                    return null;
            }
        })
    });
}
