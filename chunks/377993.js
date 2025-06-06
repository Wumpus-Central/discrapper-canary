n.d(t, { Z: () => M }), n(388685), n(539854);
var r = n(255367),
    i = n(73800),
    l = n(873546),
    a = n(442837),
    o = n(481060),
    s = n(239091),
    c = n(144144),
    u = n(100527),
    d = n(906732),
    p = n(385499),
    h = n(545957),
    f = n(82295),
    m = n(850020),
    g = n(670188),
    b = n(158776),
    _ = n(699516),
    y = n(111583),
    C = n(594174),
    x = n(626135),
    v = n(585483),
    j = n(233870),
    O = n(51144),
    E = n(998502),
    I = n(276264),
    P = n(981631),
    S = n(388032),
    Z = n(11847);
function N(e) {
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
let T = [],
    A = E.ZP.getEnableHardwareAcceleration();
function w(e) {
    let { user: t, channel: o, status: u, activities: d } = e,
        p = (0, a.e7)([y.Z], () => null != y.Z.getTypingUsers(o.id)[t.id]),
        f = (0, a.e7)([C.default], () => C.default.getCurrentUser()),
        x = (0, a.e7)([b.Z], () => b.Z.isMobileOnline(t.id)),
        j = (0, a.e7)([_.Z], () => _.Z.getNickname(t.id)),
        E = (0, h.Z)(t.id),
        Z = i.useRef(null),
        T = (e) => {
            (0, s.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('14126')]).then(n.bind(n, 354589));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
                        ((i = N({}, n)),
                        (l = l =
                            {
                                user: t,
                                channel: o
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
        w = () => {
            let e = '@'.concat(O.ZP.getUserTag(t, { decoration: 'never' })),
                n = '<@'.concat(t.id, '>');
            v.S.dispatch(P.CkL.TEXTAREA_FOCUS, { channelId: o.id }),
                v.S.dispatchToLastSubscribed(P.CkL.INSERT_TEXT, {
                    plainText: e,
                    rawText: n
                }),
                c.Z.startTyping(o.id);
        },
        R = (0, m.K)({
            location: 'PrivateChannelRecipients',
            user: t
        }),
        [M, k] = i.useState(!1);
    return (0, r.jsx)(g.Z, {
        targetElementRef: Z,
        user: t,
        channelId: o.id,
        position: l.tq ? 'window_center' : 'left',
        spacing: 16,
        onShiftClick: w,
        shouldShow: M,
        onRequestClose: () => k(!1),
        children: (e) => {
            var { onClick: n, onMouseDown: i } = e,
                l = (function (e, t) {
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
                })(e, ['onClick', 'onMouseDown']);
            return (0, r.jsx)(
                I.Z,
                N(
                    {
                        ref: Z,
                        user: t,
                        currentUser: f,
                        isOwner: t.id === o.ownerId,
                        ownerTooltipText: S.intl.string(S.t['MRXZ+/']),
                        shouldAnimateStatus: A,
                        isTyping: p,
                        status: u,
                        activities: d,
                        applicationStream: E,
                        channel: o,
                        onContextMenu: T,
                        selected: M,
                        isMobile: x,
                        nick: j,
                        nameplate: R,
                        onClick: (e) => {
                            e.shiftKey ? null == w || w() : k((e) => !e);
                        },
                        onMouseDown: (e) => {
                            M ? e.stopPropagation() : null == i || i(e);
                        }
                    },
                    l
                ),
                t.id
            );
        }
    });
}
function R(e, t) {
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
        n = C.default.getCurrentUser(),
        l = null == n ? void 0 : n.isStaff(),
        { analyticsLocations: s } = (0, d.ZP)(u.Z.MEMBER_LIST),
        { listItems: c } = (0, a.e7)(
            [_.Z, C.default, b.Z],
            () => {
                let e = (0, j.T)(t.recipients, C.default),
                    n = {};
                for (let t of e) {
                    var r, i, l;
                    _.Z.isFriend(t.id) || t.id === (null == (r = C.default.getCurrentUser()) ? void 0 : r.id)
                        ? (n[t.id] = {
                              status: null != (i = b.Z.getStatus(t.id)) ? i : P.Skl.OFFLINE,
                              activities: null != (l = b.Z.getActivities(t.id)) ? l : T
                          })
                        : (n[t.id] = {
                              status: P.Skl.OFFLINE,
                              activities: T
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
        );
    i.useEffect(() => {
        x.default.track(P.rMx.MEMBER_LIST_VIEWED, {
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
                children: (0, r.jsxs)(o.Ttm, {
                    className: Z.members,
                    fade: !0,
                    children: [
                        (0, r.jsxs)(f.Z, {
                            className: Z.membersGroup,
                            children: [''.concat(S.intl.string(S.t['9Oq93t']), '\u2014').concat(c.length, ' '), h && (0, r.jsx)(p.Z, { type: p.Z.Types.STAFF_ONLY_DM })]
                        }),
                        c.map((e) =>
                            (0, r.jsx)(
                                w,
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
