n.d(t, { Z: () => L }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(873546),
    r = n(442837),
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
    _ = n(158776),
    C = n(699516),
    x = n(111583),
    v = n(594174),
    E = n(626135),
    I = n(585483),
    b = n(233870),
    Z = n(51144),
    N = n(998502),
    T = n(276264),
    S = n(981631),
    j = n(388032),
    y = n(366467);
let A = [],
    P = N.ZP.getEnableHardwareAcceleration();
function R(e) {
    let { user: t, channel: l, status: d, activities: u } = e,
        h = (0, r.e7)([x.Z], () => null != x.Z.getTypingUsers(l.id)[t.id]),
        m = (0, r.e7)([v.default], () => v.default.getCurrentUser()),
        E = (0, r.e7)([_.Z], () => _.Z.isMobileOnline(t.id)),
        b = (0, r.e7)([C.Z], () => C.Z.getNickname(t.id)),
        N = (0, p.Z)(t.id, 'private-channel-recipient'),
        y = (e) => {
            (0, o.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('31952')]).then(n.bind(n, 354589));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        user: t,
                        channel: l
                    });
            });
        };
    return (0, i.jsx)(s.yRy, {
        preload: () => (0, f.Z)(t, { channelId: l.id }),
        renderPopout: (e) =>
            (0, i.jsx)(g.Z, {
                ...e,
                userId: t.id,
                channelId: l.id
            }),
        position: a.tq ? 'window_center' : 'left',
        spacing: 16,
        onShiftClick: () => {
            let e = '@'.concat(Z.ZP.getUserTag(t, { decoration: 'never' })),
                n = '<@'.concat(t.id, '>');
            I.S.dispatchToLastSubscribed(S.CkL.INSERT_TEXT, {
                plainText: e,
                rawText: n
            }),
                c.Z.startTyping(l.id);
        },
        children: (e) =>
            (0, i.jsx)(
                T.Z,
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
                    onContextMenu: y,
                    isMobile: E,
                    nick: b,
                    ...e
                },
                t.id
            )
    });
}
function M(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let i = e.listItems[n],
            l = t.listItems[n];
        if (i.user !== l.user || i.status !== l.status || i.activities !== l.activities) return !1;
    }
    return !0;
}
function L(e) {
    let { channel: t } = e,
        n = v.default.getCurrentUser(),
        a = null == n ? void 0 : n.isStaff(),
        { analyticsLocations: o } = (0, u.ZP)(d.Z.MEMBER_LIST),
        { listItems: c } = (0, r.e7)(
            [C.Z, v.default, _.Z],
            () => {
                let e = (0, b.T)(t.recipients, v.default),
                    n = {};
                for (let t of e) {
                    var i, l, a;
                    C.Z.isFriend(t.id) || t.id === (null === (i = v.default.getCurrentUser()) || void 0 === i ? void 0 : i.id)
                        ? (n[t.id] = {
                              status: null !== (l = _.Z.getStatus(t.id)) && void 0 !== l ? l : S.Skl.OFFLINE,
                              activities: null !== (a = _.Z.getActivities(t.id)) && void 0 !== a ? a : A
                          })
                        : (n[t.id] = {
                              status: S.Skl.OFFLINE,
                              activities: A
                          });
                }
                let r = [];
                for (let t of e) {
                    let e = {
                        user: t,
                        status: n[t.id].status,
                        activities: n[t.id].activities
                    };
                    r.push(e);
                }
                return { listItems: r };
            },
            [t],
            M
        );
    l.useEffect(() => {
        E.default.track(S.rMx.MEMBER_LIST_VIEWED, {
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.guild_id
        });
    }, [t.guild_id, t.id, t.type]);
    let p = a && c.every((e) => e.user.isStaff());
    return (0, i.jsx)(u.Gt, {
        value: o,
        children: (0, i.jsx)('div', {
            className: y.container,
            children: (0, i.jsx)('aside', {
                className: y.membersWrap,
                children: (0, i.jsxs)(s.Ttm, {
                    className: y.members,
                    fade: !0,
                    children: [
                        (0, i.jsxs)(m.Z, {
                            className: y.membersGroup,
                            children: [''.concat(j.intl.string(j.t['9Oq93t']), '\u2014').concat(c.length, ' '), p && (0, i.jsx)(h.Z, { type: h.Z.Types.STAFF_ONLY_DM })]
                        }),
                        c.map((e) =>
                            (0, i.jsx)(
                                R,
                                {
                                    user: e.user,
                                    status: e.status,
                                    activities: e.activities,
                                    channel: t
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
