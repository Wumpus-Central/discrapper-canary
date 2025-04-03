n.d(t, { Z: () => L }), n(47120), n(653041);
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
    m = n(850020),
    g = n(184301),
    b = n(347475),
    _ = n(158776),
    C = n(699516),
    y = n(111583),
    x = n(594174),
    v = n(626135),
    j = n(585483),
    O = n(233870),
    E = n(51144),
    N = n(998502),
    I = n(276264),
    P = n(981631),
    S = n(388032),
    Z = n(11847);
function T(e) {
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
function A(e, t) {
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
let w = [],
    R = N.ZP.getEnableHardwareAcceleration();
function M(e) {
    let { user: t, channel: i, status: u, activities: d } = e,
        p = (0, o.e7)([y.Z], () => null != y.Z.getTypingUsers(i.id)[t.id]),
        f = (0, o.e7)([x.default], () => x.default.getCurrentUser()),
        v = (0, o.e7)([_.Z], () => _.Z.isMobileOnline(t.id)),
        O = (0, o.e7)([C.Z], () => C.Z.getNickname(t.id)),
        N = (0, h.Z)(t.id, 'private-channel-recipient'),
        Z = (e) => {
            (0, s.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('14126')]).then(n.bind(n, 354589));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        A(T({}, n), {
                            user: t,
                            channel: i
                        })
                    );
            });
        },
        w = (0, m.K)({
            location: 'PrivateChannelRecipients',
            user: t
        });
    return (0, r.jsx)(a.yRy, {
        preload: () => (0, g.Z)(t, { channelId: i.id }),
        renderPopout: (e) =>
            (0, r.jsx)(
                b.Z,
                A(T({}, e), {
                    userId: t.id,
                    channelId: i.id
                })
            ),
        position: l.tq ? 'window_center' : 'left',
        spacing: 16,
        onShiftClick: () => {
            let e = '@'.concat(E.ZP.getUserTag(t, { decoration: 'never' })),
                n = '<@'.concat(t.id, '>');
            j.S.dispatchToLastSubscribed(P.CkL.INSERT_TEXT, {
                plainText: e,
                rawText: n
            }),
                c.Z.startTyping(i.id);
        },
        clickTrap: !0,
        children: (e) =>
            (0, r.jsx)(
                I.Z,
                T(
                    {
                        user: t,
                        currentUser: f,
                        isOwner: t.id === i.ownerId,
                        ownerTooltipText: S.NW.string(S.t['MRXZ+/']),
                        shouldAnimateStatus: R,
                        isTyping: p,
                        status: u,
                        activities: d,
                        applicationStream: N,
                        channel: i,
                        onContextMenu: Z,
                        isMobile: v,
                        nick: O,
                        nameplate: w
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
function L(e) {
    let { channel: t } = e,
        n = x.default.getCurrentUser(),
        l = null == n ? void 0 : n.isStaff(),
        { analyticsLocations: s } = (0, d.ZP)(u.Z.MEMBER_LIST),
        { listItems: c } = (0, o.e7)(
            [C.Z, x.default, _.Z],
            () => {
                let e = (0, O.T)(t.recipients, x.default),
                    n = {};
                for (let t of e) {
                    var r, i, l;
                    C.Z.isFriend(t.id) || t.id === (null == (r = x.default.getCurrentUser()) ? void 0 : r.id)
                        ? (n[t.id] = {
                              status: null != (i = _.Z.getStatus(t.id)) ? i : P.Skl.OFFLINE,
                              activities: null != (l = _.Z.getActivities(t.id)) ? l : w
                          })
                        : (n[t.id] = {
                              status: P.Skl.OFFLINE,
                              activities: w
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
        v.default.track(P.rMx.MEMBER_LIST_VIEWED, {
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.guild_id
        });
    }, [t.guild_id, t.id, t.type]);
    let h = l && c.every((e) => e.user.isStaff());
    return (0, r.jsx)(d.Gt, {
        value: s,
        children: (0, r.jsx)('div', {
            className: Z.container,
            children: (0, r.jsx)('aside', {
                className: Z.membersWrap,
                children: (0, r.jsxs)(a.Ttm, {
                    className: Z.members,
                    fade: !0,
                    children: [
                        (0, r.jsxs)(f.Z, {
                            className: Z.membersGroup,
                            children: [''.concat(S.NW.string(S.t['9Oq93t']), '\u2014').concat(c.length, ' '), h && (0, r.jsx)(p.Z, { type: p.Z.Types.STAFF_ONLY_DM })]
                        }),
                        c.map((e) =>
                            (0, r.jsx)(
                                M,
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
