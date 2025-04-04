n.d(t, { Z: () => D }), n(388685);
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(692547),
    c = n(481060),
    u = n(232567),
    d = n(100527),
    p = n(471445),
    h = n(15274),
    f = n(924301),
    g = n(504160),
    m = n(151864),
    b = n(725436),
    _ = n(497656),
    E = n(554747),
    O = n(230900),
    N = n(854698),
    y = n(703656),
    I = n(922482),
    v = n(565799),
    C = n(501655),
    S = n(427679),
    T = n(448206),
    P = n(670188),
    j = n(496675),
    A = n(594174),
    Z = n(662868),
    x = n(981631),
    w = n(765305),
    L = n(388032),
    R = n(29504);
function D(e) {
    let { guild: t, isStudyRoomNotice: n = !1 } = e,
        l = (0, _.y)(t.id),
        D = (0, E.k5)(t.id),
        k = (0, o.e7)([S.Z], () => S.Z.getStageInstanceByChannel(null == l ? void 0 : l.id), [l]),
        { isStageNoticeHidden: M, isEventNoticeHidden: U } = (0, o.cj)(
            [m.Z],
            () => ({
                isStageNoticeHidden: m.Z.isLiveChannelNoticeHidden({ stageId: null == k ? void 0 : k.id }),
                isEventNoticeHidden: m.Z.isLiveChannelNoticeHidden({ eventId: null == D ? void 0 : D.id })
            }),
            [k, D]
        ),
        G = null == l ? void 0 : l.id,
        W = (0, o.Wu)([v.Z], () => [...new Set(v.Z.getMutableParticipants(G, C.pV.SPEAKER).map((e) => e.user))], [G]),
        V = (0, o.e7)([v.Z], () => (null != G ? v.Z.getParticipantCount(G, C.pV.AUDIENCE) : 0), [G]),
        B = (0, o.e7)([j.Z], () => j.Z.can(x.Plq.CONNECT, l)),
        H = (0, T.Z)(null == l ? void 0 : l.id),
        F = null == D ? void 0 : D.creator_id,
        z = (0, o.e7)([A.default], () => A.default.getUser(F), [F]);
    i.useEffect(() => {
        null != F && (0, u.PR)(F);
    }, [F]);
    let {
        noticeType: Y,
        title: K,
        location: q,
        locationIcon: Q,
        canListenIn: X,
        buttonText: J,
        users: $,
        overflowUsers: ee,
        onClose: et
    } = i.useMemo(
        () =>
            (function (e) {
                let { guildEvent: t, stageInstance: n, activeChannel: i, canConnect: l, myRole: a, eventCreator: o, speakers: s, listenerCount: u, isEventNoticeHidden: d, isStageNoticeHidden: h, isStudyRoomNotice: m } = e,
                    _ = null != n && null != i && !h,
                    E = null != t ? (0, N.DK)(t) : null;
                if (m && null != i) {
                    let e = (0, p.KS)(i);
                    return {
                        noticeType: 3,
                        title: '\uD83D\uDCDA\u2615 '.concat(i.name),
                        location: L.NW.string(L.t.LZA6NT),
                        locationIcon:
                            null != e
                                ? (0, r.jsx)(e, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: R.locationIcon
                                  })
                                : null,
                        canListenIn: l,
                        buttonText: L.NW.string(L.t.wBoE6O),
                        users: [],
                        overflowUsers: null
                    };
                }
                if (null == t || d) {
                    if (_) {
                        let e = L.NW.string(L.t.ZYO5OD);
                        return (
                            (null == a ? void 0 : a.speaker) ? (e = L.NW.string(L.t['/cnSFR'])) : null != a && (e = L.NW.string(L.t.btSGOj)),
                            {
                                noticeType: 0,
                                title: n.topic,
                                location: i.name,
                                locationIcon: (0, r.jsx)(c.ewx, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 16,
                                    height: 16,
                                    className: R.locationIcon
                                }),
                                canListenIn: l,
                                buttonText: e,
                                onClose: () => (0, g.ji)({ stageId: null == n ? void 0 : n.id }),
                                users: s.length > 5 ? s.slice(0, 5) : s,
                                overflowUsers:
                                    u < 1
                                        ? null
                                        : (0, r.jsxs)('div', {
                                              className: R.pill,
                                              children: [
                                                  (0, r.jsx)(c.VWR, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 12,
                                                      height: 12,
                                                      className: R.pillIcon
                                                  }),
                                                  (0, r.jsx)(c.Text, {
                                                      variant: 'text-xs/medium',
                                                      color: 'header-secondary',
                                                      className: R.pillLabel,
                                                      children: u
                                                  })
                                              ]
                                          })
                            }
                        );
                    }
                } else if (t.entity_type === w.WX.STAGE_INSTANCE && _) {
                    let e = L.NW.string(L.t.ZYO5OD);
                    return (
                        (null == a ? void 0 : a.speaker) ? (e = L.NW.string(L.t['/cnSFR'])) : null != a && (e = L.NW.string(L.t.btSGOj)),
                        {
                            noticeType: 0,
                            title: n.topic,
                            location: i.name,
                            locationIcon: (0, r.jsx)(c.ewx, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 16,
                                height: 16,
                                className: R.locationIcon
                            }),
                            canListenIn: l,
                            buttonText: e,
                            onClose: () => (0, g.ji)({ stageId: null == n ? void 0 : n.id }),
                            users: s.length > 5 ? s.slice(0, 5) : s,
                            overflowUsers:
                                u < 1
                                    ? null
                                    : (0, r.jsxs)('div', {
                                          className: R.pill,
                                          children: [
                                              (0, r.jsx)(c.VWR, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  width: 12,
                                                  height: 12,
                                                  className: R.pillIcon
                                              }),
                                              (0, r.jsx)(c.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'header-secondary',
                                                  className: R.pillLabel,
                                                  children: u
                                              })
                                          ]
                                      })
                        }
                    );
                } else if (t.entity_type === w.WX.EXTERNAL) {
                    let e = (0, O.cS)(t);
                    if (null == e) return { noticeType: null };
                    let n = f.ZP.getUserCount(t.id, E);
                    return {
                        noticeType: 1,
                        title: t.name,
                        location: (0, b.m)(e, !0),
                        locationIcon: (0, r.jsx)(c._tJ, {
                            size: 'custom',
                            color: 'currentColor',
                            width: 16,
                            height: 16,
                            className: R.locationIcon
                        }),
                        canListenIn: !1,
                        buttonText: L.NW.string(L.t.iW6Xur),
                        onClose: () => (0, g.ji)({ eventId: null == t ? void 0 : t.id }),
                        users: null == o ? [] : [o],
                        overflowUsers:
                            n < 1
                                ? null
                                : (0, r.jsxs)('div', {
                                      className: R.pill,
                                      children: [
                                          (0, r.jsx)(c.r7p, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              width: 12,
                                              height: 12,
                                              className: R.pillIcon
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              variant: 'text-xs/medium',
                                              color: 'header-secondary',
                                              className: R.pillLabel,
                                              children: n
                                          })
                                      ]
                                  })
                    };
                } else if (t.entity_type === w.WX.VOICE && null != i) {
                    let e = (0, p.KS)(i),
                        n = f.ZP.getUserCount(t.id, E);
                    return {
                        noticeType: 2,
                        title: t.name,
                        location: i.name,
                        locationIcon:
                            null != e
                                ? (0, r.jsx)(e, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: R.locationIcon
                                  })
                                : null,
                        canListenIn: l,
                        buttonText: L.NW.string(L.t.nxUtoa),
                        onClose: () => (0, g.ji)({ eventId: null == t ? void 0 : t.id }),
                        users: null == o ? [] : [o],
                        overflowUsers:
                            n < 1
                                ? null
                                : (0, r.jsxs)('div', {
                                      className: R.pill,
                                      children: [
                                          (0, r.jsx)(c.r7p, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              width: 12,
                                              height: 12,
                                              className: R.pillIcon
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              variant: 'text-xs/medium',
                                              color: 'header-secondary',
                                              className: R.pillLabel,
                                              children: n
                                          })
                                      ]
                                  })
                    };
                }
                return { noticeType: null };
            })({
                guildEvent: D,
                stageInstance: k,
                activeChannel: l,
                canConnect: B,
                myRole: H,
                eventCreator: z,
                speakers: W,
                listenerCount: V,
                isEventNoticeHidden: U,
                isStageNoticeHidden: M,
                isStudyRoomNotice: n
            }),
        [D, k, l, B, H, z, W, V, U, M, n]
    );
    return null == Y
        ? null
        : (0, r.jsxs)('div', {
              className: R.container,
              children: [
                  null != et
                      ? (0, r.jsx)(c.P3F, {
                            onClick: et,
                            className: R.close,
                            'aria-label': L.NW.string(L.t.WAI6xs),
                            children: (0, r.jsx)(c.Dio, {
                                size: 'md',
                                color: 'currentColor',
                                className: R.closeIcon
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: R.header,
                      children: [
                          (0, r.jsx)(Z.Z, {
                              color: s.Z.unsafe_rawColors.GREEN_230.css,
                              width: 16,
                              height: 16
                          }),
                          (0, r.jsx)(c.Text, {
                              variant: 'text-xs/semibold',
                              color: 'text-positive',
                              children: L.NW.string(L.t.dI3q4u)
                          })
                      ]
                  }),
                  ($.length > 0 || null != ee) &&
                      (0, r.jsxs)('div', {
                          className: R.participants,
                          children: [
                              $.map((e) =>
                                  (0, r.jsx)(
                                      P.Z,
                                      {
                                          user: e,
                                          guildId: t.id,
                                          newAnalyticsLocations: [d.Z.AVATAR],
                                          clickTrap: !0,
                                          children: (n) => {
                                              var i, l;
                                              return (0, r.jsx)(
                                                  c.qEK,
                                                  ((i = (function (e) {
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
                                                  })({}, n)),
                                                  (l = l =
                                                      {
                                                          src: e.getAvatarURL(t.id, 24),
                                                          'aria-label': e.username,
                                                          size: c.EFr.SIZE_24,
                                                          className: R.avatar
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
                                          }
                                      },
                                      e.id
                                  )
                              ),
                              ee
                          ]
                      }),
                  (0, r.jsx)(c.Text, {
                      variant: 'text-md/medium',
                      color: 'header-primary',
                      className: a()(R.title, R.live),
                      children: K
                  }),
                  (0, r.jsxs)('div', {
                      className: R.locationContainer,
                      children: [
                          Q,
                          (0, r.jsx)(c.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              className: R.location,
                              children: q
                          })
                      ]
                  }),
                  X || 1 === Y
                      ? (0, r.jsx)(c.zxk, {
                            size: c.zxk.Sizes.SMALL,
                            color: c.zxk.Colors.GREEN,
                            onClick: () => {
                                if (X) null != l && null != l.getGuildId() && ((0, I.Cq)(l), (0, y.XU)(l.getGuildId(), l.id));
                                else {
                                    if (null == D) return;
                                    (0, h.bO)({ eventId: D.id });
                                }
                            },
                            className: R.button,
                            fullWidth: !0,
                            children: J
                        })
                      : null
              ]
          });
}
