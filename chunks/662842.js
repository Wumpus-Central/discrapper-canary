(n.d(t, { Z: () => D }), n(388685));
var r = n(255367),
    i = n(73800),
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
    O = n(554747),
    E = n(230900),
    y = n(854698),
    I = n(703656),
    v = n(922482),
    C = n(565799),
    S = n(501655),
    N = n(427679),
    T = n(448206),
    P = n(670188),
    j = n(496675),
    A = n(594174),
    Z = n(662868),
    x = n(981631),
    L = n(765305),
    w = n(388032),
    R = n(29504);
function D(e) {
    let { guild: t, isStudyRoomNotice: n = !1 } = e,
        l = (0, _.y)(t.id),
        d = (0, O.k5)(t.id),
        P = (0, o.e7)([N.Z], () => N.Z.getStageInstanceByChannel(null == l ? void 0 : l.id), [l]),
        { isStageNoticeHidden: D, isEventNoticeHidden: M } = (0, o.cj)(
            [m.Z],
            () => ({
                isStageNoticeHidden: m.Z.isLiveChannelNoticeHidden({ stageId: null == P ? void 0 : P.id }),
                isEventNoticeHidden: m.Z.isLiveChannelNoticeHidden({ eventId: null == d ? void 0 : d.id })
            }),
            [P, d]
        ),
        U = null == l ? void 0 : l.id,
        G = (0, o.Wu)([C.Z], () => [...new Set(C.Z.getMutableParticipants(U, S.pV.SPEAKER).map((e) => e.user))], [U]),
        B = (0, o.e7)([C.Z], () => (null != U ? C.Z.getParticipantCount(U, S.pV.AUDIENCE) : 0), [U]),
        V = (0, o.e7)([j.Z], () => j.Z.can(x.Plq.CONNECT, l)),
        H = (0, T.Z)(null == l ? void 0 : l.id),
        F = null == d ? void 0 : d.creator_id,
        z = (0, o.e7)([A.default], () => A.default.getUser(F), [F]);
    i.useEffect(() => {
        null != F && (0, u.PR)(F);
    }, [F]);
    let {
        noticeType: W,
        title: Y,
        location: K,
        locationIcon: q,
        canListenIn: X,
        buttonText: Q,
        users: J,
        overflowUsers: $,
        onClose: ee
    } = i.useMemo(
        () =>
            (function (e) {
                let { guildEvent: t, stageInstance: n, activeChannel: i, canConnect: l, myRole: a, eventCreator: o, speakers: s, listenerCount: u, isEventNoticeHidden: d, isStageNoticeHidden: h, isStudyRoomNotice: m } = e,
                    _ = null != n && null != i && !h,
                    O = null != t ? (0, y.DK)(t) : null;
                if (m && null != i) {
                    let e = (0, p.KS)(i);
                    return {
                        noticeType: 3,
                        title: '\uD83D\uDCDA\u2615 '.concat(i.name),
                        location: w.intl.string(w.t.LZA6NT),
                        locationIcon:
                            null != e
                                ? (0, r.jsx)(e, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: R.locationIcon
                                  })
                                : null,
                        canListenIn: l,
                        buttonText: w.intl.string(w.t.wBoE6O),
                        users: [],
                        overflowUsers: null
                    };
                }
                if (null == t || d) {
                    if (_) {
                        let e = w.intl.string(w.t.ZYO5OD);
                        return (
                            (null == a ? void 0 : a.speaker) ? (e = w.intl.string(w.t['/cnSFR'])) : null != a && (e = w.intl.string(w.t.btSGOj)),
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
                } else if (t.entity_type === L.WX.STAGE_INSTANCE && _) {
                    let e = w.intl.string(w.t.ZYO5OD);
                    return (
                        (null == a ? void 0 : a.speaker) ? (e = w.intl.string(w.t['/cnSFR'])) : null != a && (e = w.intl.string(w.t.btSGOj)),
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
                } else if (t.entity_type === L.WX.EXTERNAL) {
                    let e = (0, E.cS)(t);
                    if (null == e) return { noticeType: null };
                    let n = f.ZP.getUserCount(t.id, O);
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
                        buttonText: w.intl.string(w.t.iW6Xur),
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
                } else if (t.entity_type === L.WX.VOICE && null != i) {
                    let e = (0, p.KS)(i),
                        n = f.ZP.getUserCount(t.id, O);
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
                        buttonText: w.intl.string(w.t.nxUtoa),
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
                guildEvent: d,
                stageInstance: P,
                activeChannel: l,
                canConnect: V,
                myRole: H,
                eventCreator: z,
                speakers: G,
                listenerCount: B,
                isEventNoticeHidden: M,
                isStageNoticeHidden: D,
                isStudyRoomNotice: n
            }),
        [d, P, l, V, H, z, G, B, M, D, n]
    );
    return null == W
        ? null
        : (0, r.jsxs)('div', {
              className: R.container,
              children: [
                  null != ee
                      ? (0, r.jsx)(c.P3F, {
                            onClick: ee,
                            className: R.close,
                            'aria-label': w.intl.string(w.t.WAI6xs),
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
                              color: 'text-feedback-positive',
                              children: w.intl.string(w.t.dI3q4u)
                          })
                      ]
                  }),
                  (J.length > 0 || null != $) &&
                      (0, r.jsxs)('div', {
                          className: R.participants,
                          children: [
                              J.map((e) =>
                                  (0, r.jsx)(
                                      k,
                                      {
                                          user: e,
                                          guildId: t.id
                                      },
                                      e.id
                                  )
                              ),
                              $
                          ]
                      }),
                  (0, r.jsx)(c.Text, {
                      variant: 'text-md/medium',
                      color: 'header-primary',
                      className: a()(R.title, R.live),
                      children: Y
                  }),
                  (0, r.jsxs)('div', {
                      className: R.locationContainer,
                      children: [
                          q,
                          (0, r.jsx)(c.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              className: R.location,
                              children: K
                          })
                      ]
                  }),
                  X || 1 === W
                      ? (0, r.jsx)(c.zxk, {
                            size: c.zxk.Sizes.SMALL,
                            color: c.zxk.Colors.GREEN,
                            onClick: () => {
                                if (X) null != l && null != l.getGuildId() && ((0, v.Cq)(l), (0, I.XU)(l.getGuildId(), l.id));
                                else {
                                    if (null == d) return;
                                    (0, h.bO)({ eventId: d.id });
                                }
                            },
                            className: R.button,
                            fullWidth: !0,
                            children: Q
                        })
                      : null
              ]
          });
}
function k(e) {
    let { user: t, guildId: n } = e,
        l = i.useRef(null);
    return (0, r.jsx)(P.Z, {
        targetElementRef: l,
        user: t,
        guildId: n,
        newAnalyticsLocations: [d.Z.AVATAR],
        clickTrap: !0,
        children: (e) => {
            var i, a;
            return (0, r.jsx)(
                c.qEK,
                ((i = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                })
                            )),
                            r.forEach(function (t) {
                                var r;
                                ((r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (e[t] = r));
                            }));
                    }
                    return e;
                })({}, e)),
                (a = a =
                    {
                        ref: l,
                        src: t.getAvatarURL(n, 24),
                        'aria-label': t.username,
                        size: c.EFr.SIZE_24,
                        className: R.avatar
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
                          }
                          return n;
                      })(Object(a)).forEach(function (e) {
                          Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e));
                      }),
                i)
            );
        }
    });
}
