n.d(t, { Z: () => U }), n(47120);
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
    P = n(184301),
    j = n(347475),
    A = n(496675),
    Z = n(594174),
    x = n(662868),
    L = n(981631),
    w = n(765305),
    R = n(388032),
    D = n(29504);
function k(e) {
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
function M(e, t) {
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
function U(e) {
    let { guild: t, isStudyRoomNotice: n = !1 } = e,
        l = (0, _.y)(t.id),
        U = (0, E.k5)(t.id),
        G = (0, o.e7)([S.Z], () => S.Z.getStageInstanceByChannel(null == l ? void 0 : l.id), [l]),
        { isStageNoticeHidden: W, isEventNoticeHidden: V } = (0, o.cj)(
            [m.Z],
            () => ({
                isStageNoticeHidden: m.Z.isLiveChannelNoticeHidden({ stageId: null == G ? void 0 : G.id }),
                isEventNoticeHidden: m.Z.isLiveChannelNoticeHidden({ eventId: null == U ? void 0 : U.id })
            }),
            [G, U]
        ),
        B = null == l ? void 0 : l.id,
        H = (0, o.Wu)([v.Z], () => [...new Set(v.Z.getMutableParticipants(B, C.pV.SPEAKER).map((e) => e.user))], [B]),
        F = (0, o.e7)([v.Z], () => (null != B ? v.Z.getParticipantCount(B, C.pV.AUDIENCE) : 0), [B]),
        z = (0, o.e7)([A.Z], () => A.Z.can(L.Plq.CONNECT, l)),
        Y = (0, T.Z)(null == l ? void 0 : l.id),
        K = null == U ? void 0 : U.creator_id,
        q = (0, o.e7)([Z.default], () => Z.default.getUser(K), [K]);
    i.useEffect(() => {
        null != K && (0, u.PR)(K);
    }, [K]);
    let {
        noticeType: Q,
        title: X,
        location: J,
        locationIcon: $,
        canListenIn: ee,
        buttonText: et,
        users: en,
        overflowUsers: er,
        onClose: ei
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
                        location: R.NW.string(R.t.LZA6NT),
                        locationIcon:
                            null != e
                                ? (0, r.jsx)(e, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: D.locationIcon
                                  })
                                : null,
                        canListenIn: l,
                        buttonText: R.NW.string(R.t.wBoE6O),
                        users: [],
                        overflowUsers: null
                    };
                }
                if (null == t || d) {
                    if (_) {
                        let e = R.NW.string(R.t.ZYO5OD);
                        return (
                            (null == a ? void 0 : a.speaker) ? (e = R.NW.string(R.t['/cnSFR'])) : null != a && (e = R.NW.string(R.t.btSGOj)),
                            {
                                noticeType: 0,
                                title: n.topic,
                                location: i.name,
                                locationIcon: (0, r.jsx)(c.ewx, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 16,
                                    height: 16,
                                    className: D.locationIcon
                                }),
                                canListenIn: l,
                                buttonText: e,
                                onClose: () => (0, g.ji)({ stageId: null == n ? void 0 : n.id }),
                                users: s.length > 5 ? s.slice(0, 5) : s,
                                overflowUsers:
                                    u < 1
                                        ? null
                                        : (0, r.jsxs)('div', {
                                              className: D.pill,
                                              children: [
                                                  (0, r.jsx)(c.VWR, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 12,
                                                      height: 12,
                                                      className: D.pillIcon
                                                  }),
                                                  (0, r.jsx)(c.Text, {
                                                      variant: 'text-xs/medium',
                                                      color: 'header-secondary',
                                                      className: D.pillLabel,
                                                      children: u
                                                  })
                                              ]
                                          })
                            }
                        );
                    }
                } else if (t.entity_type === w.WX.STAGE_INSTANCE && _) {
                    let e = R.NW.string(R.t.ZYO5OD);
                    return (
                        (null == a ? void 0 : a.speaker) ? (e = R.NW.string(R.t['/cnSFR'])) : null != a && (e = R.NW.string(R.t.btSGOj)),
                        {
                            noticeType: 0,
                            title: n.topic,
                            location: i.name,
                            locationIcon: (0, r.jsx)(c.ewx, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 16,
                                height: 16,
                                className: D.locationIcon
                            }),
                            canListenIn: l,
                            buttonText: e,
                            onClose: () => (0, g.ji)({ stageId: null == n ? void 0 : n.id }),
                            users: s.length > 5 ? s.slice(0, 5) : s,
                            overflowUsers:
                                u < 1
                                    ? null
                                    : (0, r.jsxs)('div', {
                                          className: D.pill,
                                          children: [
                                              (0, r.jsx)(c.VWR, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  width: 12,
                                                  height: 12,
                                                  className: D.pillIcon
                                              }),
                                              (0, r.jsx)(c.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'header-secondary',
                                                  className: D.pillLabel,
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
                            className: D.locationIcon
                        }),
                        canListenIn: !1,
                        buttonText: R.NW.string(R.t.iW6Xur),
                        onClose: () => (0, g.ji)({ eventId: null == t ? void 0 : t.id }),
                        users: null == o ? [] : [o],
                        overflowUsers:
                            n < 1
                                ? null
                                : (0, r.jsxs)('div', {
                                      className: D.pill,
                                      children: [
                                          (0, r.jsx)(c.r7p, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              width: 12,
                                              height: 12,
                                              className: D.pillIcon
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              variant: 'text-xs/medium',
                                              color: 'header-secondary',
                                              className: D.pillLabel,
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
                                      className: D.locationIcon
                                  })
                                : null,
                        canListenIn: l,
                        buttonText: R.NW.string(R.t.nxUtoa),
                        onClose: () => (0, g.ji)({ eventId: null == t ? void 0 : t.id }),
                        users: null == o ? [] : [o],
                        overflowUsers:
                            n < 1
                                ? null
                                : (0, r.jsxs)('div', {
                                      className: D.pill,
                                      children: [
                                          (0, r.jsx)(c.r7p, {
                                              size: 'custom',
                                              color: 'currentColor',
                                              width: 12,
                                              height: 12,
                                              className: D.pillIcon
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              variant: 'text-xs/medium',
                                              color: 'header-secondary',
                                              className: D.pillLabel,
                                              children: n
                                          })
                                      ]
                                  })
                    };
                }
                return { noticeType: null };
            })({
                guildEvent: U,
                stageInstance: G,
                activeChannel: l,
                canConnect: z,
                myRole: Y,
                eventCreator: q,
                speakers: H,
                listenerCount: F,
                isEventNoticeHidden: V,
                isStageNoticeHidden: W,
                isStudyRoomNotice: n
            }),
        [U, G, l, z, Y, q, H, F, V, W, n]
    );
    return null == Q
        ? null
        : (0, r.jsxs)('div', {
              className: D.container,
              children: [
                  null != ei
                      ? (0, r.jsx)(c.P3F, {
                            onClick: ei,
                            className: D.close,
                            'aria-label': R.NW.string(R.t.WAI6xs),
                            children: (0, r.jsx)(c.Dio, {
                                size: 'md',
                                color: 'currentColor',
                                className: D.closeIcon
                            })
                        })
                      : null,
                  (0, r.jsxs)('div', {
                      className: D.header,
                      children: [
                          (0, r.jsx)(x.Z, {
                              color: s.Z.unsafe_rawColors.GREEN_230.css,
                              width: 16,
                              height: 16
                          }),
                          (0, r.jsx)(c.Text, {
                              variant: 'text-xs/semibold',
                              color: 'text-positive',
                              children: R.NW.string(R.t.dI3q4u)
                          })
                      ]
                  }),
                  (en.length > 0 || null != er) &&
                      (0, r.jsxs)('div', {
                          className: D.participants,
                          children: [
                              en.map((e) =>
                                  (0, r.jsx)(
                                      c.yRy,
                                      {
                                          preload: () => (0, P.Z)(e, { guildId: t.id }),
                                          renderPopout: (n) =>
                                              (0, r.jsx)(
                                                  j.Z,
                                                  M(k({}, n), {
                                                      userId: e.id,
                                                      guildId: t.id,
                                                      newAnalyticsLocations: [d.Z.AVATAR]
                                                  })
                                              ),
                                          position: 'right',
                                          clickTrap: !0,
                                          children: (n) =>
                                              (0, r.jsx)(
                                                  c.qEK,
                                                  M(k({}, n), {
                                                      src: e.getAvatarURL(t.id, 24),
                                                      'aria-label': e.username,
                                                      size: c.EFr.SIZE_24,
                                                      className: D.avatar
                                                  })
                                              )
                                      },
                                      e.id
                                  )
                              ),
                              er
                          ]
                      }),
                  (0, r.jsx)(c.Text, {
                      variant: 'text-md/medium',
                      color: 'header-primary',
                      className: a()(D.title, D.live),
                      children: X
                  }),
                  (0, r.jsxs)('div', {
                      className: D.locationContainer,
                      children: [
                          $,
                          (0, r.jsx)(c.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              className: D.location,
                              children: J
                          })
                      ]
                  }),
                  ee || 1 === Q
                      ? (0, r.jsx)(c.zxk, {
                            size: c.zxk.Sizes.SMALL,
                            color: c.zxk.Colors.GREEN,
                            onClick: () => {
                                if (ee) null != l && null != l.getGuildId() && ((0, I.Cq)(l), (0, y.XU)(l.getGuildId(), l.id));
                                else {
                                    if (null == U) return;
                                    (0, h.bO)({ eventId: U.id });
                                }
                            },
                            className: D.button,
                            fullWidth: !0,
                            children: et
                        })
                      : null
              ]
          });
}
