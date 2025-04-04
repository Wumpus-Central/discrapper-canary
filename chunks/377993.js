n.d(t, { Z: () => W }), n(47120), n(653041);
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
    b = n(754047),
    _ = n(184301),
    C = n(347475),
    y = n(158776),
    x = n(699516),
    v = n(111583),
    j = n(594174),
    O = n(626135),
    E = n(585483),
    N = n(233870),
    I = n(51144),
    P = n(998502),
    S = n(276264),
    Z = n(981631),
    T = n(388032),
    A = n(11847);
function w(e) {
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
function R(e, t) {
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
let k = [],
    M = P.ZP.getEnableHardwareAcceleration();
function L(e) {
    let { user: t, channel: u, status: d, activities: p } = e,
        f = (0, o.e7)([v.Z], () => null != v.Z.getTypingUsers(u.id)[t.id]),
        O = (0, o.e7)([j.default], () => j.default.getCurrentUser()),
        N = (0, o.e7)([y.Z], () => y.Z.isMobileOnline(t.id)),
        P = (0, o.e7)([x.Z], () => x.Z.getNickname(t.id)),
        A = (0, h.Z)(t.id, 'private-channel-recipient'),
        k = (e) => {
            (0, s.jW)(e, async () => {
                let { default: e } = await Promise.all([n.e('79695'), n.e('98783'), n.e('14126')]).then(n.bind(n, 354589));
                return (n) =>
                    (0, r.jsx)(
                        e,
                        R(w({}, n), {
                            user: t,
                            channel: u
                        })
                    );
            });
        },
        L = () => {
            let e = '@'.concat(I.ZP.getUserTag(t, { decoration: 'never' })),
                n = '<@'.concat(t.id, '>');
            E.S.dispatchToLastSubscribed(Z.CkL.INSERT_TEXT, {
                plainText: e,
                rawText: n
            }),
                c.Z.startTyping(u.id);
        },
        D = (0, m.K)({
            location: 'PrivateChannelRecipients',
            user: t
        }),
        W = (e) =>
            (0, _.Z)(t, {
                channelId: u.id,
                abortSignal: e
            }),
        [U, B] = i.useState(!1),
        H = (0, g.nT)({ location: 'PrivateChannelRecipients' }),
        {
            showPopoutFromHover: F,
            onRequestClose: G,
            onMouseEnter: V,
            onMouseLeave: z
        } = (0, b.Z)({
            shouldShowPopoutOnHover: H,
            handlePreload: W
        });
    return H
        ? (0, r.jsx)('div', {
              onMouseEnter: V,
              onMouseLeave: z,
              children: (0, r.jsx)(a.yRy, {
                  preload: F || U ? void 0 : W,
                  renderPopout: (e) =>
                      (0, r.jsx)(
                          C.Z,
                          R(w({}, e), {
                              userId: t.id,
                              channelId: u.id
                          })
                      ),
                  position: l.tq ? 'window_center' : 'left',
                  spacing: 16,
                  onShiftClick: L,
                  clickTrap: U,
                  shouldShow: U || F,
                  onRequestClose: () => {
                      null == G || G(), B(!1);
                  },
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
                          S.Z,
                          w(
                              {
                                  user: t,
                                  currentUser: O,
                                  isOwner: t.id === u.ownerId,
                                  ownerTooltipText: T.NW.string(T.t['MRXZ+/']),
                                  shouldAnimateStatus: M,
                                  isTyping: f,
                                  status: d,
                                  activities: p,
                                  applicationStream: A,
                                  channel: u,
                                  onContextMenu: k,
                                  isMobile: N,
                                  nick: P,
                                  nameplate: D,
                                  onClick: () => B((e) => !e)
                              },
                              i
                          ),
                          t.id
                      );
                  }
              })
          })
        : (0, r.jsx)(a.yRy, {
              preload: W,
              renderPopout: (e) =>
                  (0, r.jsx)(
                      C.Z,
                      R(w({}, e), {
                          userId: t.id,
                          channelId: u.id
                      })
                  ),
              position: l.tq ? 'window_center' : 'left',
              spacing: 16,
              onShiftClick: L,
              clickTrap: !0,
              children: (e) =>
                  (0, r.jsx)(
                      S.Z,
                      w(
                          {
                              user: t,
                              currentUser: O,
                              isOwner: t.id === u.ownerId,
                              ownerTooltipText: T.NW.string(T.t['MRXZ+/']),
                              shouldAnimateStatus: M,
                              isTyping: f,
                              status: d,
                              activities: p,
                              applicationStream: A,
                              channel: u,
                              onContextMenu: k,
                              isMobile: N,
                              nick: P,
                              nameplate: D
                          },
                          e
                      ),
                      t.id
                  )
          });
}
function D(e, t) {
    if (e.listItems.length !== t.listItems.length) return !1;
    for (let n = 0; n < e.listItems.length; n++) {
        let r = e.listItems[n],
            i = t.listItems[n];
        if (r.user !== i.user || r.status !== i.status || r.activities !== i.activities) return !1;
    }
    return !0;
}
function W(e) {
    let { channel: t } = e,
        n = j.default.getCurrentUser(),
        l = null == n ? void 0 : n.isStaff(),
        { analyticsLocations: s } = (0, d.ZP)(u.Z.MEMBER_LIST),
        { listItems: c } = (0, o.e7)(
            [x.Z, j.default, y.Z],
            () => {
                let e = (0, N.T)(t.recipients, j.default),
                    n = {};
                for (let t of e) {
                    var r, i, l;
                    x.Z.isFriend(t.id) || t.id === (null == (r = j.default.getCurrentUser()) ? void 0 : r.id)
                        ? (n[t.id] = {
                              status: null != (i = y.Z.getStatus(t.id)) ? i : Z.Skl.OFFLINE,
                              activities: null != (l = y.Z.getActivities(t.id)) ? l : k
                          })
                        : (n[t.id] = {
                              status: Z.Skl.OFFLINE,
                              activities: k
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
            D
        );
    i.useEffect(() => {
        O.default.track(Z.rMx.MEMBER_LIST_VIEWED, {
            channel_id: t.id,
            channel_type: t.type,
            guild_id: t.guild_id
        });
    }, [t.guild_id, t.id, t.type]);
    let h = l && c.every((e) => e.user.isStaff());
    return (0, r.jsx)(d.Gt, {
        value: s,
        children: (0, r.jsx)('div', {
            className: A.container,
            children: (0, r.jsx)('aside', {
                className: A.membersWrap,
                children: (0, r.jsxs)(a.Ttm, {
                    className: A.members,
                    fade: !0,
                    children: [
                        (0, r.jsxs)(f.Z, {
                            className: A.membersGroup,
                            children: [''.concat(T.NW.string(T.t['9Oq93t']), '\u2014').concat(c.length, ' '), h && (0, r.jsx)(p.Z, { type: p.Z.Types.STAFF_ONLY_DM })]
                        }),
                        c.map((e) =>
                            (0, r.jsx)(
                                L,
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
