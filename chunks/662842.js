n.d(t, { Z: () => D }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(692547),
    c = n(481060),
    u = n(232567),
    d = n(100527),
    p = n(471445),
    f = n(15274),
    g = n(924301),
    h = n(504160),
    m = n(151864),
    b = n(725436),
    _ = n(497656),
    E = n(554747),
    O = n(230900),
    v = n(854698),
    y = n(703656),
    I = n(922482),
    C = n(565799),
    S = n(501655),
    T = n(427679),
    N = n(448206),
    j = n(670188),
    P = n(496675),
    x = n(594174),
    A = n(662868),
    Z = n(981631),
    w = n(765305),
    L = n(388032),
    R = n(156132);
function D(e) {
    let { guild: t, isStudyRoomNotice: n = !1 } = e,
        l = (0, _.y)(t.id),
        d = (0, E.k5)(t.id),
        j = (0, o.e7)([T.Z], () => T.Z.getStageInstanceByChannel(null == l ? void 0 : l.id), [l]),
        { isStageNoticeHidden: D, isEventNoticeHidden: k } = (0, o.cj)(
            [m.Z],
            () => ({
                isStageNoticeHidden: m.Z.isLiveChannelNoticeHidden({ stageId: null == j ? void 0 : j.id }),
                isEventNoticeHidden: m.Z.isLiveChannelNoticeHidden({ eventId: null == d ? void 0 : d.id }),
            }),
            [j, d],
        ),
        U = null == l ? void 0 : l.id,
        G = (0, o.Wu)([C.Z], () => [...new Set(C.Z.getMutableParticipants(U, S.pV.SPEAKER).map((e) => e.user))], [U]),
        H = (0, o.e7)([C.Z], () => (null != U ? C.Z.getParticipantCount(U, S.pV.AUDIENCE) : 0), [U]),
        B = (0, o.e7)([P.Z], () => P.Z.can(Z.Plq.CONNECT, l)),
        V = (0, N.Z)(null == l ? void 0 : l.id),
        F = null == d ? void 0 : d.creator_id,
        z = (0, o.e7)([x.default], () => x.default.getUser(F), [F]);
    i.useEffect(() => {
        null != F && (0, u.PR)(F);
    }, [F]);
    let {
        noticeType: Y,
        title: W,
        location: q,
        locationIcon: K,
        canListenIn: Q,
        buttonText: J,
        users: X,
        overflowUsers: $,
        onClose: ee,
    } = i.useMemo(
        () =>
            (function (e) {
                let {
                        guildEvent: t,
                        stageInstance: n,
                        activeChannel: i,
                        canConnect: l,
                        myRole: a,
                        eventCreator: o,
                        speakers: s,
                        listenerCount: u,
                        isEventNoticeHidden: d,
                        isStageNoticeHidden: f,
                        isStudyRoomNotice: m,
                    } = e,
                    _ = null != n && null != i && !f,
                    E = null != t ? (0, v.DK)(t) : null;
                if (m && null != i) {
                    let e = (0, p.KS)(i);
                    return {
                        noticeType: 3,
                        title: "\uD83D\uDCDA\u2615 ".concat(i.name),
                        location: L.intl.string(L.t.LZA6Na),
                        locationIcon:
                            null != e
                                ? (0, r.jsx)(e, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: R.locationIcon,
                                  })
                                : null,
                        canListenIn: l,
                        buttonText: L.intl.string(L.t.wBoE6L),
                        users: [],
                        overflowUsers: null,
                    };
                }
                if (null == t || d) {
                    if (_) {
                        let e = L.intl.string(L.t.ZYO5OK);
                        return (
                            (null == a ? void 0 : a.speaker)
                                ? (e = L.intl.string(L.t["/cnSFc"]))
                                : null != a && (e = L.intl.string(L.t.btSGOj)),
                            {
                                noticeType: 0,
                                title: n.topic,
                                location: i.name,
                                locationIcon: (0, r.jsx)(c.ewx, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 16,
                                    height: 16,
                                    className: R.locationIcon,
                                }),
                                canListenIn: l,
                                buttonText: e,
                                onClose: () => (0, h.ji)({ stageId: null == n ? void 0 : n.id }),
                                users: s.length > 5 ? s.slice(0, 5) : s,
                                overflowUsers:
                                    u < 1
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: R.pill,
                                              children: [
                                                  (0, r.jsx)(c.VWR, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      width: 12,
                                                      height: 12,
                                                      className: R.pillIcon,
                                                  }),
                                                  (0, r.jsx)(c.Text, {
                                                      variant: "text-xs/medium",
                                                      color: "text-default",
                                                      className: R.pillLabel,
                                                      children: u,
                                                  }),
                                              ],
                                          }),
                            }
                        );
                    }
                } else if (t.entity_type === w.WX.STAGE_INSTANCE && _) {
                    let e = L.intl.string(L.t.ZYO5OK);
                    return (
                        (null == a ? void 0 : a.speaker)
                            ? (e = L.intl.string(L.t["/cnSFc"]))
                            : null != a && (e = L.intl.string(L.t.btSGOj)),
                        {
                            noticeType: 0,
                            title: n.topic,
                            location: i.name,
                            locationIcon: (0, r.jsx)(c.ewx, {
                                size: "custom",
                                color: "currentColor",
                                width: 16,
                                height: 16,
                                className: R.locationIcon,
                            }),
                            canListenIn: l,
                            buttonText: e,
                            onClose: () => (0, h.ji)({ stageId: null == n ? void 0 : n.id }),
                            users: s.length > 5 ? s.slice(0, 5) : s,
                            overflowUsers:
                                u < 1
                                    ? null
                                    : (0, r.jsxs)("div", {
                                          className: R.pill,
                                          children: [
                                              (0, r.jsx)(c.VWR, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  width: 12,
                                                  height: 12,
                                                  className: R.pillIcon,
                                              }),
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  className: R.pillLabel,
                                                  children: u,
                                              }),
                                          ],
                                      }),
                        }
                    );
                } else if (t.entity_type === w.WX.EXTERNAL) {
                    let e = (0, O.cS)(t);
                    if (null == e) return { noticeType: null };
                    let n = g.ZP.getUserCount(t.id, E);
                    return {
                        noticeType: 1,
                        title: t.name,
                        location: (0, b.m)(e, !0),
                        locationIcon: (0, r.jsx)(c._tJ, {
                            size: "custom",
                            color: "currentColor",
                            width: 16,
                            height: 16,
                            className: R.locationIcon,
                        }),
                        canListenIn: !1,
                        buttonText: L.intl.string(L.t.iW6Xuo),
                        onClose: () => (0, h.ji)({ eventId: null == t ? void 0 : t.id }),
                        users: null == o ? [] : [o],
                        overflowUsers:
                            n < 1
                                ? null
                                : (0, r.jsxs)("div", {
                                      className: R.pill,
                                      children: [
                                          (0, r.jsx)(c.r7p, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 12,
                                              height: 12,
                                              className: R.pillIcon,
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              variant: "text-xs/medium",
                                              color: "text-default",
                                              className: R.pillLabel,
                                              children: n,
                                          }),
                                      ],
                                  }),
                    };
                } else if (t.entity_type === w.WX.VOICE && null != i) {
                    let e = (0, p.KS)(i),
                        n = g.ZP.getUserCount(t.id, E);
                    return {
                        noticeType: 2,
                        title: t.name,
                        location: i.name,
                        locationIcon:
                            null != e
                                ? (0, r.jsx)(e, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: R.locationIcon,
                                  })
                                : null,
                        canListenIn: l,
                        buttonText: L.intl.string(L.t.nxUtoQ),
                        onClose: () => (0, h.ji)({ eventId: null == t ? void 0 : t.id }),
                        users: null == o ? [] : [o],
                        overflowUsers:
                            n < 1
                                ? null
                                : (0, r.jsxs)("div", {
                                      className: R.pill,
                                      children: [
                                          (0, r.jsx)(c.r7p, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 12,
                                              height: 12,
                                              className: R.pillIcon,
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              variant: "text-xs/medium",
                                              color: "text-default",
                                              className: R.pillLabel,
                                              children: n,
                                          }),
                                      ],
                                  }),
                    };
                }
                return { noticeType: null };
            })({
                guildEvent: d,
                stageInstance: j,
                activeChannel: l,
                canConnect: B,
                myRole: V,
                eventCreator: z,
                speakers: G,
                listenerCount: H,
                isEventNoticeHidden: k,
                isStageNoticeHidden: D,
                isStudyRoomNotice: n,
            }),
        [d, j, l, B, V, z, G, H, k, D, n],
    );
    return null == Y
        ? null
        : (0, r.jsxs)("div", {
              className: R.container,
              children: [
                  null != ee
                      ? (0, r.jsx)(c.P3F, {
                            onClick: ee,
                            className: R.close,
                            "aria-label": L.intl.string(L.t.WAI6xu),
                            children: (0, r.jsx)(c.Dio, {
                                size: "md",
                                color: "currentColor",
                                className: R.closeIcon,
                            }),
                        })
                      : null,
                  (0, r.jsxs)("div", {
                      className: R.header,
                      children: [
                          (0, r.jsx)(A.Z, {
                              color: s.Z.unsafe_rawColors.GREEN_230.css,
                              width: 16,
                              height: 16,
                          }),
                          (0, r.jsx)(c.Text, {
                              variant: "text-xs/semibold",
                              color: "text-feedback-positive",
                              children: L.intl.string(L.t.dI3q4h),
                          }),
                      ],
                  }),
                  (X.length > 0 || null != $) &&
                      (0, r.jsxs)("div", {
                          className: R.participants,
                          children: [
                              X.map((e) =>
                                  (0, r.jsx)(
                                      M,
                                      {
                                          user: e,
                                          guildId: t.id,
                                      },
                                      e.id,
                                  ),
                              ),
                              $,
                          ],
                      }),
                  (0, r.jsx)(c.Text, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      className: a()(R.title, R.live),
                      children: W,
                  }),
                  (0, r.jsxs)("div", {
                      className: R.locationContainer,
                      children: [
                          K,
                          (0, r.jsx)(c.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: R.location,
                              children: q,
                          }),
                      ],
                  }),
                  Q || 1 === Y
                      ? (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: R.button,
                            children: (0, r.jsx)(c.Button, {
                                variant: "active",
                                size: "sm",
                                text: J,
                                onClick: () => {
                                    if (Q)
                                        null != l &&
                                            null != l.getGuildId() &&
                                            ((0, I.Cq)(l), (0, y.XU)(l.getGuildId(), l.id));
                                    else {
                                        if (null == d) return;
                                        (0, f.bO)({ eventId: d.id });
                                    }
                                },
                                fullWidth: !0,
                            }),
                        })
                      : null,
              ],
          });
}
function M(e) {
    let { user: t, guildId: n } = e,
        l = i.useRef(null);
    return (0, r.jsx)(j.Z, {
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
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, e)),
                (a = a =
                    {
                        ref: l,
                        src: t.getAvatarURL(n, 24),
                        "aria-label": t.username,
                        size: c.EFr.SIZE_24,
                        className: R.avatar,
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
                i),
            );
        },
    });
}
