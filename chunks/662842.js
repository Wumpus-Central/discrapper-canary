n.d(t, { Z: () => k }), n(47120);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(692547),
    c = n(481060),
    d = n(232567),
    u = n(100527),
    h = n(471445),
    m = n(15274),
    p = n(924301),
    g = n(504160),
    _ = n(151864),
    f = n(725436),
    E = n(497656),
    I = n(554747),
    C = n(230900),
    N = n(854698),
    v = n(703656),
    T = n(922482),
    S = n(565799),
    A = n(501655),
    b = n(427679),
    Z = n(448206),
    x = n(184301),
    L = n(347475),
    y = n(496675),
    P = n(594174),
    O = n(662868),
    R = n(981631),
    j = n(765305),
    D = n(388032),
    w = n(364049);
function k(e) {
    let { guild: t, isStudyRoomNotice: n = !1 } = e,
        r = (0, E.y)(t.id),
        k = (0, I.k5)(t.id),
        M = (0, s.e7)([b.Z], () => b.Z.getStageInstanceByChannel(null == r ? void 0 : r.id), [r]),
        { isStageNoticeHidden: U, isEventNoticeHidden: G } = (0, s.cj)(
            [_.Z],
            () => ({
                isStageNoticeHidden: _.Z.isLiveChannelNoticeHidden({ stageId: null == M ? void 0 : M.id }),
                isEventNoticeHidden: _.Z.isLiveChannelNoticeHidden({ eventId: null == k ? void 0 : k.id })
            }),
            [M, k]
        ),
        B = null == r ? void 0 : r.id,
        V = (0, s.Wu)([S.Z], () => [...new Set(S.Z.getMutableParticipants(B, A.pV.SPEAKER).map((e) => e.user))], [B]),
        H = (0, s.e7)([S.Z], () => (null != B ? S.Z.getParticipantCount(B, A.pV.AUDIENCE) : 0), [B]),
        F = (0, s.e7)([y.Z], () => y.Z.can(R.Plq.CONNECT, r)),
        z = (0, Z.Z)(null == r ? void 0 : r.id),
        W = null == k ? void 0 : k.creator_id,
        Y = (0, s.e7)([P.default], () => P.default.getUser(W), [W]);
    l.useEffect(() => {
        null != W && (0, d.PR)(W);
    }, [W]);
    let {
        noticeType: K,
        title: q,
        location: X,
        locationIcon: Q,
        canListenIn: J,
        buttonText: $,
        users: ee,
        overflowUsers: et,
        onClose: en
    } = l.useMemo(
        () =>
            (function (e) {
                let { guildEvent: t, stageInstance: n, activeChannel: l, canConnect: r, myRole: a, eventCreator: s, speakers: o, listenerCount: d, isEventNoticeHidden: u, isStageNoticeHidden: m, isStudyRoomNotice: _ } = e,
                    E = null != n && null != l && !m,
                    I = null != t ? (0, N.DK)(t) : null;
                if (_ && null != l) {
                    let e = (0, h.KS)(l);
                    return {
                        noticeType: 3,
                        title: '\uD83D\uDCDA\u2615 '.concat(l.name),
                        location: D.intl.string(D.t.LZA6NT),
                        locationIcon:
                            null != e
                                ? (0, i.jsx)(e, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: w.locationIcon
                                  })
                                : null,
                        canListenIn: r,
                        buttonText: D.intl.string(D.t.wBoE6O),
                        users: [],
                        overflowUsers: null
                    };
                }
                if (null == t || u) {
                    if (E) {
                        let e = D.intl.string(D.t.ZYO5OD);
                        return (
                            (null == a ? void 0 : a.speaker) ? (e = D.intl.string(D.t['/cnSFR'])) : null != a && (e = D.intl.string(D.t.btSGOj)),
                            {
                                noticeType: 0,
                                title: n.topic,
                                location: l.name,
                                locationIcon: (0, i.jsx)(c.ewx, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 16,
                                    height: 16,
                                    className: w.locationIcon
                                }),
                                canListenIn: r,
                                buttonText: e,
                                onClose: () => (0, g.ji)({ stageId: null == n ? void 0 : n.id }),
                                users: o.length > 5 ? o.slice(0, 5) : o,
                                overflowUsers:
                                    d < 1
                                        ? null
                                        : (0, i.jsxs)('div', {
                                              className: w.pill,
                                              children: [
                                                  (0, i.jsx)(c.VWR, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 12,
                                                      height: 12,
                                                      className: w.pillIcon
                                                  }),
                                                  (0, i.jsx)(c.Text, {
                                                      variant: 'text-xs/medium',
                                                      color: 'header-secondary',
                                                      className: w.pillLabel,
                                                      children: d
                                                  })
                                              ]
                                          })
                            }
                        );
                    }
                } else {
                    if (t.entity_type === j.WX.STAGE_INSTANCE && E) {
                        let e = D.intl.string(D.t.ZYO5OD);
                        return (
                            (null == a ? void 0 : a.speaker) ? (e = D.intl.string(D.t['/cnSFR'])) : null != a && (e = D.intl.string(D.t.btSGOj)),
                            {
                                noticeType: 0,
                                title: n.topic,
                                location: l.name,
                                locationIcon: (0, i.jsx)(c.ewx, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 16,
                                    height: 16,
                                    className: w.locationIcon
                                }),
                                canListenIn: r,
                                buttonText: e,
                                onClose: () => (0, g.ji)({ stageId: null == n ? void 0 : n.id }),
                                users: o.length > 5 ? o.slice(0, 5) : o,
                                overflowUsers:
                                    d < 1
                                        ? null
                                        : (0, i.jsxs)('div', {
                                              className: w.pill,
                                              children: [
                                                  (0, i.jsx)(c.VWR, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 12,
                                                      height: 12,
                                                      className: w.pillIcon
                                                  }),
                                                  (0, i.jsx)(c.Text, {
                                                      variant: 'text-xs/medium',
                                                      color: 'header-secondary',
                                                      className: w.pillLabel,
                                                      children: d
                                                  })
                                              ]
                                          })
                            }
                        );
                    }
                    if (t.entity_type === j.WX.EXTERNAL) {
                        let e = (0, C.cS)(t);
                        if (null == e) return { noticeType: null };
                        let n = p.ZP.getUserCount(t.id, I);
                        return {
                            noticeType: 1,
                            title: t.name,
                            location: (0, f.m)(e, !0),
                            locationIcon: (0, i.jsx)(c._tJ, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 16,
                                height: 16,
                                className: w.locationIcon
                            }),
                            canListenIn: !1,
                            buttonText: D.intl.string(D.t.iW6Xur),
                            onClose: () => (0, g.ji)({ eventId: null == t ? void 0 : t.id }),
                            users: null == s ? [] : [s],
                            overflowUsers:
                                n < 1
                                    ? null
                                    : (0, i.jsxs)('div', {
                                          className: w.pill,
                                          children: [
                                              (0, i.jsx)(c.r7p, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  width: 12,
                                                  height: 12,
                                                  className: w.pillIcon
                                              }),
                                              (0, i.jsx)(c.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'header-secondary',
                                                  className: w.pillLabel,
                                                  children: n
                                              })
                                          ]
                                      })
                        };
                    }
                    if (t.entity_type === j.WX.VOICE && null != l) {
                        let e = (0, h.KS)(l),
                            n = p.ZP.getUserCount(t.id, I);
                        return {
                            noticeType: 2,
                            title: t.name,
                            location: l.name,
                            locationIcon:
                                null != e
                                    ? (0, i.jsx)(e, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: w.locationIcon
                                      })
                                    : null,
                            canListenIn: r,
                            buttonText: D.intl.string(D.t.nxUtoa),
                            onClose: () => (0, g.ji)({ eventId: null == t ? void 0 : t.id }),
                            users: null == s ? [] : [s],
                            overflowUsers:
                                n < 1
                                    ? null
                                    : (0, i.jsxs)('div', {
                                          className: w.pill,
                                          children: [
                                              (0, i.jsx)(c.r7p, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  width: 12,
                                                  height: 12,
                                                  className: w.pillIcon
                                              }),
                                              (0, i.jsx)(c.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'header-secondary',
                                                  className: w.pillLabel,
                                                  children: n
                                              })
                                          ]
                                      })
                        };
                    }
                }
                return { noticeType: null };
            })({
                guildEvent: k,
                stageInstance: M,
                activeChannel: r,
                canConnect: F,
                myRole: z,
                eventCreator: Y,
                speakers: V,
                listenerCount: H,
                isEventNoticeHidden: G,
                isStageNoticeHidden: U,
                isStudyRoomNotice: n
            }),
        [k, M, r, F, z, Y, V, H, G, U, n]
    );
    return null == K
        ? null
        : (0, i.jsxs)('div', {
              className: w.container,
              children: [
                  null != en
                      ? (0, i.jsx)(c.P3F, {
                            onClick: en,
                            className: w.close,
                            'aria-label': D.intl.string(D.t.WAI6xs),
                            children: (0, i.jsx)(c.Dio, {
                                size: 'md',
                                color: 'currentColor',
                                className: w.closeIcon
                            })
                        })
                      : null,
                  (0, i.jsxs)('div', {
                      className: w.header,
                      children: [
                          (0, i.jsx)(O.Z, {
                              color: o.Z.unsafe_rawColors.GREEN_230.css,
                              width: 16,
                              height: 16
                          }),
                          (0, i.jsx)(c.Text, {
                              variant: 'text-xs/semibold',
                              color: 'text-positive',
                              children: D.intl.string(D.t.dI3q4u)
                          })
                      ]
                  }),
                  (ee.length > 0 || null != et) &&
                      (0, i.jsxs)('div', {
                          className: w.participants,
                          children: [
                              ee.map((e) =>
                                  (0, i.jsx)(
                                      c.yRy,
                                      {
                                          preload: () => (0, x.Z)(e, { guildId: t.id }),
                                          renderPopout: (n) =>
                                              (0, i.jsx)(L.Z, {
                                                  ...n,
                                                  userId: e.id,
                                                  guildId: t.id,
                                                  newAnalyticsLocations: [u.Z.AVATAR]
                                              }),
                                          position: 'right',
                                          children: (n) =>
                                              (0, i.jsx)(c.qEK, {
                                                  ...n,
                                                  src: e.getAvatarURL(t.id, 24),
                                                  'aria-label': e.username,
                                                  size: c.EFr.SIZE_24,
                                                  className: w.avatar
                                              })
                                      },
                                      e.id
                                  )
                              ),
                              et
                          ]
                      }),
                  (0, i.jsx)(c.Text, {
                      variant: 'text-md/medium',
                      color: 'header-primary',
                      className: a()(w.title, w.live),
                      children: q
                  }),
                  (0, i.jsxs)('div', {
                      className: w.locationContainer,
                      children: [
                          Q,
                          (0, i.jsx)(c.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              className: w.location,
                              children: X
                          })
                      ]
                  }),
                  J || 1 === K
                      ? (0, i.jsx)(c.zxk, {
                            size: c.zxk.Sizes.SMALL,
                            color: c.zxk.Colors.GREEN,
                            onClick: () => {
                                if (J) null != r && null != r.getGuildId() && ((0, T.Cq)(r), (0, v.XU)(r.getGuildId(), r.id));
                                else {
                                    if (null == k) return;
                                    (0, m.bO)({ eventId: k.id });
                                }
                            },
                            className: w.button,
                            fullWidth: !0,
                            children: $
                        })
                      : null
              ]
          });
}
