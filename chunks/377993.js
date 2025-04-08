n.d(t, { Z: () => M }), n(388685), n(539854);
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
    g = n(823415),
    b = n(670188),
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
let A = [],
    w = N.ZP.getEnableHardwareAcceleration();
function R(e) {
    let { user: t, channel: a, status: u, activities: d } = e,
        p = (0, o.e7)([y.Z], () => null != y.Z.getTypingUsers(a.id)[t.id]),
        f = (0, o.e7)([x.default], () => x.default.getCurrentUser()),
        v = (0, o.e7)([_.Z], () => _.Z.isMobileOnline(t.id)),
        O = (0, o.e7)([C.Z], () => C.Z.getNickname(t.id)),
        N = (0, h.Z)(t.id, 'private-channel-recipient'),
        Z = (e) => {
            (0, s.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('14126')]).then(n.bind(n, 354589));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
                        ((i = T({}, n)),
                        (l = l =
                            {
                                user: t,
                                channel: a
                            }),
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
            });
        },
        A = (0, m.K)({
            location: 'PrivateChannelRecipients',
            user: t
        }),
        [R, k] = i.useState(!1),
        M = (0, g.ic)({ location: 'PrivateChannelRecipients' });
    return (0, r.jsx)(b.Z, {
        user: t,
        channelId: a.id,
        shouldShowOnHover: M,
        position: l.tq ? 'window_center' : 'left',
        spacing: 16,
        onShiftClick: () => {
            let e = '@'.concat(E.ZP.getUserTag(t, { decoration: 'never' })),
                n = '<@'.concat(t.id, '>');
            j.S.dispatchToLastSubscribed(P.CkL.INSERT_TEXT, {
                plainText: e,
                rawText: n
            }),
                c.Z.startTyping(a.id);
        },
        clickTrap: R,
        shouldShow: R,
        onRequestClose: () => k(!1),
        children: (e) => {
            var { onClick: n } = e,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = (function (e, t) {
                            if (null == e) return {};
                            var n,
                                r,
                                i = {},
                                l = Object.keys(e);
                            for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                            return i;
                        })(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                    }
                    return i;
                })(e, ['onClick']);
            return (0, r.jsx)(
                I.Z,
                T(
                    {
                        user: t,
                        currentUser: f,
                        isOwner: t.id === a.ownerId,
                        ownerTooltipText: S.NW.string(S.t['MRXZ+/']),
                        shouldAnimateStatus: w,
                        isTyping: p,
                        status: u,
                        activities: d,
                        applicationStream: N,
                        channel: a,
                        onContextMenu: Z,
                        selected: R,
                        isMobile: v,
                        nick: O,
                        nameplate: A,
                        onClick: () => k((e) => !e)
                    },
                    i
                ),
                t.id
            );
        }
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
                              activities: null != (l = _.Z.getActivities(t.id)) ? l : A
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
