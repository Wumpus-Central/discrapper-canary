n.d(t, {
    Z: function () {
        return U;
    }
}),
    n(47120);
var i,
    r,
    l = n(200651),
    a = n(192379),
    s = n(120356),
    o = n.n(s),
    c = n(442837),
    d = n(692547),
    u = n(481060),
    h = n(232567),
    m = n(100527),
    p = n(471445),
    g = n(15274),
    f = n(924301),
    _ = n(504160),
    E = n(151864),
    I = n(725436),
    C = n(497656),
    N = n(554747),
    v = n(230900),
    S = n(854698),
    T = n(703656),
    A = n(922482),
    b = n(565799),
    Z = n(501655),
    x = n(427679),
    L = n(448206),
    P = n(184301),
    O = n(347475),
    y = n(496675),
    R = n(594174),
    j = n(662868),
    D = n(981631),
    M = n(765305),
    w = n(388032),
    k = n(173549);
((r = i || (i = {}))[(r.STAGE = 0)] = 'STAGE'), (r[(r.EVENT_EXTERNAL = 1)] = 'EVENT_EXTERNAL'), (r[(r.EVENT_VOICE = 2)] = 'EVENT_VOICE'), (r[(r.STUDY_ROOM = 3)] = 'STUDY_ROOM');
function U(e) {
    let { guild: t, isStudyRoomNotice: n = !1 } = e,
        i = (0, C.y)(t.id),
        r = (0, N.k5)(t.id),
        s = (0, c.e7)([x.Z], () => x.Z.getStageInstanceByChannel(null == i ? void 0 : i.id), [i]),
        { isStageNoticeHidden: U, isEventNoticeHidden: G } = (0, c.cj)(
            [E.Z],
            () => ({
                isStageNoticeHidden: E.Z.isLiveChannelNoticeHidden({ stageId: null == s ? void 0 : s.id }),
                isEventNoticeHidden: E.Z.isLiveChannelNoticeHidden({ eventId: null == r ? void 0 : r.id })
            }),
            [s, r]
        ),
        B = null == i ? void 0 : i.id,
        V = (0, c.Wu)([b.Z], () => [...new Set(b.Z.getMutableParticipants(B, Z.pV.SPEAKER).map((e) => e.user))], [B]),
        H = (0, c.e7)([b.Z], () => (null != B ? b.Z.getParticipantCount(B, Z.pV.AUDIENCE) : 0), [B]),
        F = (0, c.e7)([y.Z], () => y.Z.can(D.Plq.CONNECT, i)),
        z = (0, L.Z)(null == i ? void 0 : i.id),
        W = null == r ? void 0 : r.creator_id,
        Y = (0, c.e7)([R.default], () => R.default.getUser(W), [W]);
    a.useEffect(() => {
        null != W && (0, h.PR)(W);
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
    } = a.useMemo(
        () =>
            (function (e) {
                let { guildEvent: t, stageInstance: n, activeChannel: i, canConnect: r, myRole: a, eventCreator: s, speakers: o, listenerCount: c, isEventNoticeHidden: d, isStageNoticeHidden: h, isStudyRoomNotice: m } = e,
                    g = null != n && null != i && !h,
                    E = null != t ? (0, S.DK)(t) : null;
                if (m && null != i) {
                    let e = (0, p.KS)(i);
                    return {
                        noticeType: 3,
                        title: '\uD83D\uDCDA\u2615 '.concat(i.name),
                        location: w.intl.string(w.t.LZA6NT),
                        locationIcon:
                            null != e
                                ? (0, l.jsx)(e, {
                                      size: 'xs',
                                      color: 'currentColor',
                                      className: k.locationIcon
                                  })
                                : null,
                        canListenIn: r,
                        buttonText: w.intl.string(w.t.wBoE6O),
                        users: [],
                        overflowUsers: null
                    };
                }
                if (null == t || d) {
                    if (g) {
                        let e = w.intl.string(w.t.ZYO5OD);
                        return (
                            (null == a ? void 0 : a.speaker) ? (e = w.intl.string(w.t['/cnSFR'])) : null != a && (e = w.intl.string(w.t.btSGOj)),
                            {
                                noticeType: 0,
                                title: n.topic,
                                location: i.name,
                                locationIcon: (0, l.jsx)(u.StageIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 16,
                                    height: 16,
                                    className: k.locationIcon
                                }),
                                canListenIn: r,
                                buttonText: e,
                                onClose: () => (0, _.ji)({ stageId: null == n ? void 0 : n.id }),
                                users: o.length > 5 ? o.slice(0, 5) : o,
                                overflowUsers:
                                    c < 1
                                        ? null
                                        : (0, l.jsxs)('div', {
                                              className: k.pill,
                                              children: [
                                                  (0, l.jsx)(u.HeadphonesIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 12,
                                                      height: 12,
                                                      className: k.pillIcon
                                                  }),
                                                  (0, l.jsx)(u.Text, {
                                                      variant: 'text-xs/medium',
                                                      color: 'header-secondary',
                                                      className: k.pillLabel,
                                                      children: c
                                                  })
                                              ]
                                          })
                            }
                        );
                    }
                } else {
                    if (t.entity_type === M.WX.STAGE_INSTANCE && g) {
                        let e = w.intl.string(w.t.ZYO5OD);
                        return (
                            (null == a ? void 0 : a.speaker) ? (e = w.intl.string(w.t['/cnSFR'])) : null != a && (e = w.intl.string(w.t.btSGOj)),
                            {
                                noticeType: 0,
                                title: n.topic,
                                location: i.name,
                                locationIcon: (0, l.jsx)(u.StageIcon, {
                                    size: 'custom',
                                    color: 'currentColor',
                                    width: 16,
                                    height: 16,
                                    className: k.locationIcon
                                }),
                                canListenIn: r,
                                buttonText: e,
                                onClose: () => (0, _.ji)({ stageId: null == n ? void 0 : n.id }),
                                users: o.length > 5 ? o.slice(0, 5) : o,
                                overflowUsers:
                                    c < 1
                                        ? null
                                        : (0, l.jsxs)('div', {
                                              className: k.pill,
                                              children: [
                                                  (0, l.jsx)(u.HeadphonesIcon, {
                                                      size: 'custom',
                                                      color: 'currentColor',
                                                      width: 12,
                                                      height: 12,
                                                      className: k.pillIcon
                                                  }),
                                                  (0, l.jsx)(u.Text, {
                                                      variant: 'text-xs/medium',
                                                      color: 'header-secondary',
                                                      className: k.pillLabel,
                                                      children: c
                                                  })
                                              ]
                                          })
                            }
                        );
                    }
                    if (t.entity_type === M.WX.EXTERNAL) {
                        let e = (0, v.cS)(t);
                        if (null == e) return { noticeType: null };
                        let n = f.ZP.getUserCount(t.id, E);
                        return {
                            noticeType: 1,
                            title: t.name,
                            location: (0, I.m)(e, !0),
                            locationIcon: (0, l.jsx)(u.LocationIcon, {
                                size: 'custom',
                                color: 'currentColor',
                                width: 16,
                                height: 16,
                                className: k.locationIcon
                            }),
                            canListenIn: !1,
                            buttonText: w.intl.string(w.t.iW6Xur),
                            onClose: () => (0, _.ji)({ eventId: null == t ? void 0 : t.id }),
                            users: null == s ? [] : [s],
                            overflowUsers:
                                n < 1
                                    ? null
                                    : (0, l.jsxs)('div', {
                                          className: k.pill,
                                          children: [
                                              (0, l.jsx)(u.StarIcon, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  width: 12,
                                                  height: 12,
                                                  className: k.pillIcon
                                              }),
                                              (0, l.jsx)(u.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'header-secondary',
                                                  className: k.pillLabel,
                                                  children: n
                                              })
                                          ]
                                      })
                        };
                    } else if (t.entity_type === M.WX.VOICE && null != i) {
                        let e = (0, p.KS)(i),
                            n = f.ZP.getUserCount(t.id, E);
                        return {
                            noticeType: 2,
                            title: t.name,
                            location: i.name,
                            locationIcon:
                                null != e
                                    ? (0, l.jsx)(e, {
                                          size: 'xs',
                                          color: 'currentColor',
                                          className: k.locationIcon
                                      })
                                    : null,
                            canListenIn: r,
                            buttonText: w.intl.string(w.t.nxUtoa),
                            onClose: () => (0, _.ji)({ eventId: null == t ? void 0 : t.id }),
                            users: null == s ? [] : [s],
                            overflowUsers:
                                n < 1
                                    ? null
                                    : (0, l.jsxs)('div', {
                                          className: k.pill,
                                          children: [
                                              (0, l.jsx)(u.StarIcon, {
                                                  size: 'custom',
                                                  color: 'currentColor',
                                                  width: 12,
                                                  height: 12,
                                                  className: k.pillIcon
                                              }),
                                              (0, l.jsx)(u.Text, {
                                                  variant: 'text-xs/medium',
                                                  color: 'header-secondary',
                                                  className: k.pillLabel,
                                                  children: n
                                              })
                                          ]
                                      })
                        };
                    }
                }
                return { noticeType: null };
            })({
                guildEvent: r,
                stageInstance: s,
                activeChannel: i,
                canConnect: F,
                myRole: z,
                eventCreator: Y,
                speakers: V,
                listenerCount: H,
                isEventNoticeHidden: G,
                isStageNoticeHidden: U,
                isStudyRoomNotice: n
            }),
        [r, s, i, F, z, Y, V, H, G, U, n]
    );
    return null == K
        ? null
        : (0, l.jsxs)('div', {
              className: k.container,
              children: [
                  null != en
                      ? (0, l.jsx)(u.Clickable, {
                            onClick: en,
                            className: k.close,
                            'aria-label': w.intl.string(w.t.WAI6xs),
                            children: (0, l.jsx)(u.XSmallIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: k.closeIcon
                            })
                        })
                      : null,
                  (0, l.jsxs)('div', {
                      className: k.header,
                      children: [
                          (0, l.jsx)(j.Z, {
                              color: d.Z.unsafe_rawColors.GREEN_230.css,
                              width: 16,
                              height: 16
                          }),
                          (0, l.jsx)(u.Text, {
                              variant: 'text-xs/semibold',
                              color: 'text-positive',
                              children: w.intl.string(w.t.dI3q4u)
                          })
                      ]
                  }),
                  (ee.length > 0 || null != et) &&
                      (0, l.jsxs)('div', {
                          className: k.participants,
                          children: [
                              ee.map((e) =>
                                  (0, l.jsx)(
                                      u.Popout,
                                      {
                                          preload: () => (0, P.Z)(e, { guildId: t.id }),
                                          renderPopout: (n) =>
                                              (0, l.jsx)(O.Z, {
                                                  ...n,
                                                  userId: e.id,
                                                  guildId: t.id,
                                                  newAnalyticsLocations: [m.Z.AVATAR]
                                              }),
                                          position: 'right',
                                          children: (n) =>
                                              (0, l.jsx)(u.Avatar, {
                                                  ...n,
                                                  src: e.getAvatarURL(t.id, 24),
                                                  'aria-label': e.username,
                                                  size: u.AvatarSizes.SIZE_24,
                                                  className: k.avatar
                                              })
                                      },
                                      e.id
                                  )
                              ),
                              et
                          ]
                      }),
                  (0, l.jsx)(u.Text, {
                      variant: 'text-md/medium',
                      color: 'header-primary',
                      className: o()(k.title, k.live),
                      children: q
                  }),
                  (0, l.jsxs)('div', {
                      className: k.locationContainer,
                      children: [
                          Q,
                          (0, l.jsx)(u.Text, {
                              variant: 'text-xs/normal',
                              color: 'text-muted',
                              className: k.location,
                              children: X
                          })
                      ]
                  }),
                  J || 1 === K
                      ? (0, l.jsx)(u.Button, {
                            size: u.Button.Sizes.SMALL,
                            color: u.Button.Colors.GREEN,
                            onClick: () => {
                                if (J) null != i && null != i.getGuildId() && ((0, A.Cq)(i), (0, T.XU)(i.getGuildId(), i.id));
                                else {
                                    if (null == r) return;
                                    (0, g.bO)({ eventId: r.id });
                                }
                            },
                            className: k.button,
                            fullWidth: !0,
                            children: $
                        })
                      : null
              ]
          });
}
