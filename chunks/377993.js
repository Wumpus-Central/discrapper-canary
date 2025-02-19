n.d(t, { Z: () => M }), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(873546),
    o = n(442837),
    a = n(481060),
    s = n(239091),
    c = n(144144),
    u = n(100527),
    d = n(906732),
    p = n(385499),
    h = n(545957),
    f = n(82295),
    m = n(184301),
    g = n(347475),
    b = n(158776),
    _ = n(699516),
    C = n(111583),
    v = n(594174),
    y = n(626135),
    x = n(585483),
    j = n(233870),
    O = n(51144),
    N = n(998502),
    E = n(276264),
    P = n(981631),
    I = n(388032),
    S = n(920915);
function Z(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = [],
    w = N.ZP.getEnableHardwareAcceleration();
function R(e) {
    let { user: t, channel: i, status: u, activities: d } = e,
        p = (0, o.e7)([C.Z], () => null != C.Z.getTypingUsers(i.id)[t.id]),
        f = (0, o.e7)([v.default], () => v.default.getCurrentUser()),
        y = (0, o.e7)([b.Z], () => b.Z.isMobileOnline(t.id)),
        j = (0, o.e7)([_.Z], () => _.Z.getNickname(t.id)),
        N = (0, h.Z)(t.id, 'private-channel-recipient'),
        S = (e) => {
            (0, s.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('22905')]).then(n.bind(n, 354589));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        T(Z({}, n), {
                            user: t,
                            channel: i
                        })
                    );
            });
        };
    return (0, r.jsx)(a.yRy, {
        preload: () => (0, m.Z)(t, { channelId: i.id }),
        renderPopout: (e) =>
            (0, r.jsx)(
                g.Z,
                T(Z({}, e), {
                    userId: t.id,
                    channelId: i.id
                })
            ),
        position: l.tq ? 'window_center' : 'left',
        spacing: 16,
        onShiftClick: () => {
            let e = '@'.concat(O.ZP.getUserTag(t, { decoration: 'never' })),
                n = '<@'.concat(t.id, '>');
            x.S.dispatchToLastSubscribed(P.CkL.INSERT_TEXT, {
                plainText: e,
                rawText: n
            }),
                c.Z.startTyping(i.id);
        },
        children: (e) =>
            (0, r.jsx)(
                E.Z,
                Z(
                    {
                        user: t,
                        currentUser: f,
                        isOwner: t.id === i.ownerId,
                        ownerTooltipText: I.NW.string(I.t['MRXZ+/']),
                        shouldAnimateStatus: w,
                        isTyping: p,
                        status: u,
                        activities: d,
                        applicationStream: N,
                        channel: i,
                        onContextMenu: S,
                        isMobile: y,
                        nick: j
                    },
                    e
                ),
                t.id
            )
    });
}
function k(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let r = e.listItems[n],
            i = t.listItems[n];
        if (r.user !== i.user || r.status !== i.status || r.activities !== i.activities) return !1;
    }
    return !0;
}
function M(e) {
    let { channel: t } = e,
        n = v.default.getCurrentUser(),
        l = null == n ? void 0 : n.isStaff(),
        { analyticsLocations: s } = (0, d.ZP)(u.Z.MEMBER_LIST),
        { listItems: c } = (0, o.e7)(
            [_.Z, v.default, b.Z],
            () => {
                let e = (0, j.T)(t.recipients, v.default),
                    n = {};
                for (let t of e) {
                    var r, i, l;
                    _.Z.isFriend(t.id) || t.id === (null === (r = v.default.getCurrentUser()) || void 0 === r ? void 0 : r.id)
                        ? (n[t.id] = {
                              status: null !== (i = b.Z.getStatus(t.id)) && void 0 !== i ? i : P.Skl.OFFLINE,
                              activities: null !== (l = b.Z.getActivities(t.id)) && void 0 !== l ? l : A
                          })
                        : (n[t.id] = {
                              status: P.Skl.OFFLINE,
                              activities: A
                          });
                }
                let o = [];
                for (let t of e) {
                    let e = {
                        user: t,
                        status: n[t.id].status,
                        activities: n[t.id].activities
                    };
                    o.push(e);
                }
                return { listItems: o };
            },
            [t],
            k
        );
    i.useEffect(() => {
        y.default.track(P.rMx.MEMBER_LIST_VIEWED, {
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.guild_id
        });
    }, [t.guild_id, t.id, t.type]);
    let h = l && c.every((e) => e.user.isStaff());
    return (0, r.jsx)(d.Gt, {
        value: s,
        children: (0, r.jsx)('div', {
            className: S.container,
            children: (0, r.jsx)('aside', {
                className: S.membersWrap,
                children: (0, r.jsxs)(a.Ttm, {
                    className: S.members,
                    fade: !0,
                    children: [
                        (0, r.jsxs)(f.Z, {
                            className: S.membersGroup,
                            children: [''.concat(I.NW.string(I.t['9Oq93t']), '\u2014').concat(c.length, ' '), h && (0, r.jsx)(p.Z, { type: p.Z.Types.STAFF_ONLY_DM })]
                        }),
                        c.map((e) =>
                            (0, r.jsx)(
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
