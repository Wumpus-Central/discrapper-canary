n.d(t, {
    Z: function () {
        return L;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(873546),
    a = n(442837),
    s = n(481060),
    o = n(239091),
    c = n(144144),
    d = n(100527),
    u = n(906732),
    h = n(385499),
    p = n(545957),
    m = n(82295),
    f = n(184301),
    g = n(347475),
    C = n(158776),
    x = n(699516),
    v = n(111583),
    _ = n(594174),
    I = n(626135),
    E = n(585483),
    b = n(233870),
    Z = n(51144),
    N = n(998502),
    S = n(276264),
    T = n(981631),
    j = n(388032),
    A = n(973249);
let y = [],
    P = N.ZP.getEnableHardwareAcceleration();
function M(e) {
    let { user: t, channel: l, status: d, activities: u } = e,
        h = (0, a.e7)([v.Z], () => null != v.Z.getTypingUsers(l.id)[t.id]),
        m = (0, a.e7)([_.default], () => _.default.getCurrentUser()),
        I = (0, a.e7)([C.Z], () => C.Z.isMobileOnline(t.id)),
        b = (0, a.e7)([x.Z], () => x.Z.getNickname(t.id)),
        N = (0, p.Z)(t.id, 'private-channel-recipient'),
        A = (e) => {
            (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('31996'), n.e('60677'), n.e('86302')]).then(n.bind(n, 354589));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        channel: l
                    });
            });
        };
    return (0, i.jsx)(s.Popout, {
        preload: () => (0, f.Z)(t, { channelId: l.id }),
        renderPopout: (e) =>
            (0, i.jsx)(g.Z, {
                ...e,
                userId: t.id,
                channelId: l.id
            }),
        position: r.tq ? 'window_center' : 'left',
        spacing: 16,
        onShiftClick: () => {
            let e = '@'.concat(Z.ZP.getUserTag(t, { decoration: 'never' })),
                n = '<@'.concat(t.id, '>');
            E.S.dispatchToLastSubscribed(T.CkL.INSERT_TEXT, {
                plainText: e,
                rawText: n
            }),
                c.Z.startTyping(l.id);
        },
        children: (e) =>
            (0, i.jsx)(
                S.Z,
                {
                    user: t,
                    currentUser: m,
                    isOwner: t.id === l.ownerId,
                    ownerTooltipText: j.intl.string(j.t['MRXZ+/']),
                    shouldAnimateStatus: P,
                    isTyping: h,
                    status: d,
                    activities: u,
                    applicationStream: N,
                    channel: l,
                    onContextMenu: A,
                    isMobile: I,
                    nick: b,
                    ...e
                },
                t.id
            )
    });
}
function R(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let i = e.listItems[n],
            l = t.listItems[n];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function L(e) {
    var t;
    let { channel: n } = e,
        r = _.default.getCurrentUser(),
        o = null == r ? void 0 : r.isStaff(),
        { analyticsLocations: c } = (0, u.ZP)(d.Z.MEMBER_LIST);
    let { listItems: p } =
        ((t = n),
        (0, a.e7)(
            [x.Z, _.default, C.Z],
            () => {
                let e = (0, b.T)(t.recipients, _.default),
                    n = {};
                for (let t of e) {
                    var i, l, r;
                    x.Z.isFriend(t.id) || t.id === (null === (i = _.default.getCurrentUser()) || void 0 === i ? void 0 : i.id)
                        ? (n[t.id] = {
                              status: null !== (l = C.Z.getStatus(t.id)) && void 0 !== l ? l : T.Skl.OFFLINE,
                              activities: null !== (r = C.Z.getActivities(t.id)) && void 0 !== r ? r : y
                          })
                        : (n[t.id] = {
                              status: T.Skl.OFFLINE,
                              activities: y
                          });
                }
                let a = [];
                for (let t of e) {
                    let e = {
                        user: t,
                        status: n[t.id].status,
                        activities: n[t.id].activities
                    };
                    a.push(e);
                }
                return { listItems: a };
            },
            [t],
            R
        ));
    l.useEffect(() => {
        I.default.track(T.rMx.MEMBER_LIST_VIEWED, {
            channel_id: n.id,
            channel_type: n.type,
            guild_id: n.guild_id
        });
    }, [n.guild_id, n.id, n.type]);
    let f = o && p.every((e) => e.user.isStaff());
    return (0, i.jsx)(u.Gt, {
        value: c,
        children: (0, i.jsx)('div', {
            className: A.container,
            children: (0, i.jsx)('aside', {
                className: A.membersWrap,
                children: (0, i.jsxs)(s.Scroller, {
                    className: A.members,
                    fade: !0,
                    children: [
                        (0, i.jsxs)(m.Z, {
                            className: A.membersGroup,
                            children: [''.concat(j.intl.string(j.t['9Oq93t']), '\u2014').concat(p.length, ' '), f && (0, i.jsx)(h.Z, { type: h.Z.Types.STAFF_ONLY_DM })]
                        }),
                        p.map((e) =>
                            (0, i.jsx)(
                                M,
                                {
                                    user: e.user,
                                    status: e.status,
                                    activities: e.activities,
                                    channel: n
                                },
                                e.user.id
                            )
                        )
                    ]
                })
            })
        })
    });
}
