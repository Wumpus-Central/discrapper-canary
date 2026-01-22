n.d(t, { A: () => M }), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(311907),
    o = n(827734),
    c = n(397927),
    u = n(803306),
    d = n(793574),
    p = n(713654),
    f = n(707592),
    h = n(698441),
    A = n(935159),
    g = n(473019),
    m = n(435328),
    b = n(539446),
    _ = n(508654),
    E = n(9448),
    O = n(974930),
    y = n(976860),
    I = n(323443),
    v = n(63995),
    S = n(69407),
    C = n(446600),
    N = n(964175),
    T = n(342296),
    j = n(576705),
    x = n(287809),
    P = n(182028),
    w = n(652215),
    L = n(988794),
    R = n(985018),
    D = n(861968);
function M(e) {
    let { guild: t, isStudyRoomNotice: n = !1 } = e,
        l = (0, b.V)(t.id),
        d = (0, _.BP)(t.id),
        T = (0, s.bG)([C.A], () => C.A.getStageInstanceByChannel(null == l ? void 0 : l.id), [l]),
        { isStageNoticeHidden: M, isEventNoticeHidden: U } = (0, s.cf)(
            [g.A],
            () => ({
                isStageNoticeHidden: g.A.isLiveChannelNoticeHidden({ stageId: null == T ? void 0 : T.id }),
                isEventNoticeHidden: g.A.isLiveChannelNoticeHidden({ eventId: null == d ? void 0 : d.id }),
            }),
            [T, d],
        ),
        G = null == l ? void 0 : l.id,
        V = (0, s.yK)([v.A], () => [...new Set(v.A.getMutableParticipants(G, S.ip.SPEAKER).map((e) => e.user))], [G]),
        B = (0, s.bG)([v.A], () => (null != G ? v.A.getParticipantCount(G, S.ip.AUDIENCE) : 0), [G]),
        H = (0, s.bG)([j.A], () => j.A.can(w.xBc.CONNECT, l)),
        F = (0, N.A)(null == l ? void 0 : l.id),
        Y = null == d ? void 0 : d.creator_id,
        K = (0, s.bG)([x.default], () => x.default.getUser(Y), [Y]);
    i.useEffect(() => {
        null != Y && (0, u.wz)(Y);
    }, [Y]);
    let {
        noticeType: z,
        title: W,
        location: q,
        locationIcon: Q,
        canListenIn: X,
        buttonText: Z,
        users: J,
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
                        eventCreator: s,
                        speakers: o,
                        listenerCount: u,
                        isEventNoticeHidden: d,
                        isStageNoticeHidden: f,
                        isStudyRoomNotice: g,
                    } = e,
                    b = null != n && null != i && !f,
                    _ = null != t ? (0, O.G3)(t) : null;
                if (g && null != i) {
                    let e = (0, p.gU)(i);
                    return {
                        noticeType: 3,
                        title: "\uD83D\uDCDA\u2615 ".concat(i.name),
                        location: R.intl.string(R.t.LZA6Na),
                        locationIcon:
                            null != e
                                ? (0, r.jsx)(e, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: D.NR,
                                  })
                                : null,
                        canListenIn: l,
                        buttonText: R.intl.string(R.t.wBoE6L),
                        users: [],
                        overflowUsers: null,
                    };
                }
                if (null == t || d) {
                    if (b) {
                        let e = R.intl.string(R.t.ZYO5OK);
                        return (
                            (null == a ? void 0 : a.speaker)
                                ? (e = R.intl.string(R.t["/cnSFc"]))
                                : null != a && (e = R.intl.string(R.t.btSGOj)),
                            {
                                noticeType: 0,
                                title: n.topic,
                                location: i.name,
                                locationIcon: (0, r.jsx)(c.qux, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 16,
                                    height: 16,
                                    className: D.NR,
                                }),
                                canListenIn: l,
                                buttonText: e,
                                onClose: () => (0, A.iF)({ stageId: null == n ? void 0 : n.id }),
                                users: o.length > 5 ? o.slice(0, 5) : o,
                                overflowUsers:
                                    u < 1
                                        ? null
                                        : (0, r.jsxs)("div", {
                                              className: D.Io,
                                              children: [
                                                  (0, r.jsx)(c.LoC, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      width: 12,
                                                      height: 12,
                                                      className: D.nW,
                                                  }),
                                                  (0, r.jsx)(c.Text, {
                                                      variant: "text-xs/medium",
                                                      color: "text-default",
                                                      className: D.W8,
                                                      children: u,
                                                  }),
                                              ],
                                          }),
                            }
                        );
                    }
                } else if (t.entity_type === L.Ps.STAGE_INSTANCE && b) {
                    let e = R.intl.string(R.t.ZYO5OK);
                    return (
                        (null == a ? void 0 : a.speaker)
                            ? (e = R.intl.string(R.t["/cnSFc"]))
                            : null != a && (e = R.intl.string(R.t.btSGOj)),
                        {
                            noticeType: 0,
                            title: n.topic,
                            location: i.name,
                            locationIcon: (0, r.jsx)(c.qux, {
                                size: "custom",
                                color: "currentColor",
                                width: 16,
                                height: 16,
                                className: D.NR,
                            }),
                            canListenIn: l,
                            buttonText: e,
                            onClose: () => (0, A.iF)({ stageId: null == n ? void 0 : n.id }),
                            users: o.length > 5 ? o.slice(0, 5) : o,
                            overflowUsers:
                                u < 1
                                    ? null
                                    : (0, r.jsxs)("div", {
                                          className: D.Io,
                                          children: [
                                              (0, r.jsx)(c.LoC, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  width: 12,
                                                  height: 12,
                                                  className: D.nW,
                                              }),
                                              (0, r.jsx)(c.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  className: D.W8,
                                                  children: u,
                                              }),
                                          ],
                                      }),
                        }
                    );
                } else if (t.entity_type === L.Ps.EXTERNAL) {
                    let e = (0, E.oF)(t);
                    if (null == e) return { noticeType: null };
                    let n = h.Ay.getUserCount(t.id, _);
                    return {
                        noticeType: 1,
                        title: t.name,
                        location: (0, m.l)(e, !0),
                        locationIcon: (0, r.jsx)(c.BT6, {
                            size: "custom",
                            color: "currentColor",
                            width: 16,
                            height: 16,
                            className: D.NR,
                        }),
                        canListenIn: !1,
                        buttonText: R.intl.string(R.t.iW6Xuo),
                        onClose: () => (0, A.iF)({ eventId: null == t ? void 0 : t.id }),
                        users: null == s ? [] : [s],
                        overflowUsers:
                            n < 1
                                ? null
                                : (0, r.jsxs)("div", {
                                      className: D.Io,
                                      children: [
                                          (0, r.jsx)(c.Gg5, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 12,
                                              height: 12,
                                              className: D.nW,
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              variant: "text-xs/medium",
                                              color: "text-default",
                                              className: D.W8,
                                              children: n,
                                          }),
                                      ],
                                  }),
                    };
                } else if (t.entity_type === L.Ps.VOICE && null != i) {
                    let e = (0, p.gU)(i),
                        n = h.Ay.getUserCount(t.id, _);
                    return {
                        noticeType: 2,
                        title: t.name,
                        location: i.name,
                        locationIcon:
                            null != e
                                ? (0, r.jsx)(e, {
                                      size: "xs",
                                      color: "currentColor",
                                      className: D.NR,
                                  })
                                : null,
                        canListenIn: l,
                        buttonText: R.intl.string(R.t.nxUtoQ),
                        onClose: () => (0, A.iF)({ eventId: null == t ? void 0 : t.id }),
                        users: null == s ? [] : [s],
                        overflowUsers:
                            n < 1
                                ? null
                                : (0, r.jsxs)("div", {
                                      className: D.Io,
                                      children: [
                                          (0, r.jsx)(c.Gg5, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 12,
                                              height: 12,
                                              className: D.nW,
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              variant: "text-xs/medium",
                                              color: "text-default",
                                              className: D.W8,
                                              children: n,
                                          }),
                                      ],
                                  }),
                    };
                }
                return { noticeType: null };
            })({
                guildEvent: d,
                stageInstance: T,
                activeChannel: l,
                canConnect: H,
                myRole: F,
                eventCreator: K,
                speakers: V,
                listenerCount: B,
                isEventNoticeHidden: U,
                isStageNoticeHidden: M,
                isStudyRoomNotice: n,
            }),
        [d, T, l, H, F, K, V, B, U, M, n],
    );
    return null == z
        ? null
        : (0, r.jsxs)("div", {
              className: D.kL,
              children: [
                  null != ee
                      ? (0, r.jsx)(c.DUT, {
                            onClick: ee,
                            className: D.VN,
                            "aria-label": R.intl.string(R.t.WAI6xu),
                            children: (0, r.jsx)(c.PGe, {
                                size: "md",
                                color: "currentColor",
                                className: D.ut,
                            }),
                        })
                      : null,
                  (0, r.jsxs)("div", {
                      className: D.wx,
                      children: [
                          (0, r.jsx)(P.A, {
                              color: o.A.unsafe_rawColors.GREEN_230.css,
                              width: 16,
                              height: 16,
                          }),
                          (0, r.jsx)(c.Text, {
                              variant: "text-xs/semibold",
                              color: "text-feedback-positive",
                              children: R.intl.string(R.t.dI3q4h),
                          }),
                      ],
                  }),
                  (J.length > 0 || null != $) &&
                      (0, r.jsxs)("div", {
                          className: D.lF,
                          children: [
                              J.map((e) =>
                                  (0, r.jsx)(
                                      k,
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
                      className: a()(D.DD, D.VD),
                      children: W,
                  }),
                  (0, r.jsxs)("div", {
                      className: D.j5,
                      children: [
                          Q,
                          (0, r.jsx)(c.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: D.C5,
                              children: q,
                          }),
                      ],
                  }),
                  X || 1 === z
                      ? (0, r.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: D.x6,
                            children: (0, r.jsx)(c.Button, {
                                variant: "active",
                                size: "sm",
                                text: Z,
                                onClick: () => {
                                    if (X)
                                        null != l &&
                                            null != l.getGuildId() &&
                                            ((0, I.av)(l), (0, y.uh)(l.getGuildId(), l.id));
                                    else {
                                        if (null == d) return;
                                        (0, f.uR)({ eventId: d.id });
                                    }
                                },
                                fullWidth: !0,
                            }),
                        })
                      : null,
              ],
          });
}
function k(e) {
    let { user: t, guildId: n } = e,
        l = i.useRef(null);
    return (0, r.jsx)(T.A, {
        targetElementRef: l,
        user: t,
        guildId: n,
        newAnalyticsLocations: [d.A.AVATAR],
        clickTrap: !0,
        children: (e) => {
            var i, a;
            return (0, r.jsx)(
                c.euF,
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
                        size: c._3J.SIZE_24,
                        className: D.my,
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
