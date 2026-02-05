n.d(t, { A: () => M });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(311907),
    o = n(827734),
    d = n(397927),
    c = n(803306),
    u = n(793574),
    A = n(713654),
    h = n(707592),
    _ = n(698441),
    m = n(935159),
    p = n(473019),
    g = n(435328),
    E = n(539446),
    f = n(508654),
    I = n(9448),
    C = n(974930),
    N = n(976860),
    T = n(323443),
    S = n(63995),
    x = n(69407),
    v = n(446600),
    b = n(964175),
    y = n(342296),
    L = n(576705),
    O = n(287809),
    R = n(182028),
    P = n(652215),
    j = n(988794),
    D = n(985018),
    w = n(861968);
function M(e) {
    let { guild: t, isStudyRoomNotice: n = !1 } = e,
        a = (0, E.V)(t.id),
        u = (0, f.BP)(t.id),
        y = (0, s.bG)([v.A], () => v.A.getStageInstanceByChannel(a?.id), [a]),
        { isStageNoticeHidden: M, isEventNoticeHidden: G } = (0, s.cf)(
            [p.A],
            () => ({
                isStageNoticeHidden: p.A.isLiveChannelNoticeHidden({ stageId: y?.id }),
                isEventNoticeHidden: p.A.isLiveChannelNoticeHidden({ eventId: u?.id }),
            }),
            [y, u],
        ),
        k = a?.id,
        V = (0, s.yK)([S.A], () => [...new Set(S.A.getMutableParticipants(k, x.ip.SPEAKER).map((e) => e.user))], [k]),
        B = (0, s.bG)([S.A], () => (null != k ? S.A.getParticipantCount(k, x.ip.AUDIENCE) : 0), [k]),
        H = (0, s.bG)([L.A], () => L.A.can(P.xBc.CONNECT, a)),
        F = (0, b.A)(a?.id),
        Y = u?.creator_id,
        W = (0, s.bG)([O.default], () => O.default.getUser(Y), [Y]);
    r.useEffect(() => {
        null != Y && (0, c.wz)(Y);
    }, [Y]);
    let {
        noticeType: q,
        title: z,
        location: K,
        locationIcon: $,
        canListenIn: Q,
        buttonText: X,
        users: Z,
        overflowUsers: J,
        onClose: ee,
    } = r.useMemo(
        () =>
            (function (e) {
                let {
                        guildEvent: t,
                        stageInstance: n,
                        activeChannel: r,
                        canConnect: a,
                        myRole: l,
                        eventCreator: s,
                        speakers: o,
                        listenerCount: c,
                        isEventNoticeHidden: u,
                        isStageNoticeHidden: h,
                        isStudyRoomNotice: p,
                    } = e,
                    E = null != n && null != r && !h,
                    f = null != t ? (0, C.G3)(t) : null;
                if (p && null != r) {
                    let e = (0, A.gU)(r);
                    return {
                        noticeType: 3,
                        title: `📚☕ ${r.name}`,
                        location: D.intl.string(D.t.LZA6Na),
                        locationIcon:
                            null != e ? (0, i.jsx)(e, { size: "xs", color: "currentColor", className: w.NR }) : null,
                        canListenIn: a,
                        buttonText: D.intl.string(D.t.wBoE6L),
                        users: [],
                        overflowUsers: null,
                    };
                }
                if (null == t || u) {
                    if (E) {
                        let e = D.intl.string(D.t.ZYO5OK);
                        return (
                            l?.speaker
                                ? (e = D.intl.string(D.t["/cnSFc"]))
                                : null != l && (e = D.intl.string(D.t.btSGOj)),
                            {
                                noticeType: 0,
                                title: n.topic,
                                location: r.name,
                                locationIcon: (0, i.jsx)(d.qux, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 16,
                                    height: 16,
                                    className: w.NR,
                                }),
                                canListenIn: a,
                                buttonText: e,
                                onClose: () => (0, m.iF)({ stageId: n?.id }),
                                users: o.length > 5 ? o.slice(0, 5) : o,
                                overflowUsers:
                                    c < 1
                                        ? null
                                        : (0, i.jsxs)("div", {
                                              className: w.Io,
                                              children: [
                                                  (0, i.jsx)(d.LoC, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      width: 12,
                                                      height: 12,
                                                      className: w.nW,
                                                  }),
                                                  (0, i.jsx)(d.Text, {
                                                      variant: "text-xs/medium",
                                                      color: "text-default",
                                                      className: w.W8,
                                                      children: c,
                                                  }),
                                              ],
                                          }),
                            }
                        );
                    }
                } else if (t.entity_type === j.Ps.STAGE_INSTANCE && E) {
                    let e = D.intl.string(D.t.ZYO5OK);
                    return (
                        l?.speaker ? (e = D.intl.string(D.t["/cnSFc"])) : null != l && (e = D.intl.string(D.t.btSGOj)),
                        {
                            noticeType: 0,
                            title: n.topic,
                            location: r.name,
                            locationIcon: (0, i.jsx)(d.qux, {
                                size: "custom",
                                color: "currentColor",
                                width: 16,
                                height: 16,
                                className: w.NR,
                            }),
                            canListenIn: a,
                            buttonText: e,
                            onClose: () => (0, m.iF)({ stageId: n?.id }),
                            users: o.length > 5 ? o.slice(0, 5) : o,
                            overflowUsers:
                                c < 1
                                    ? null
                                    : (0, i.jsxs)("div", {
                                          className: w.Io,
                                          children: [
                                              (0, i.jsx)(d.LoC, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  width: 12,
                                                  height: 12,
                                                  className: w.nW,
                                              }),
                                              (0, i.jsx)(d.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  className: w.W8,
                                                  children: c,
                                              }),
                                          ],
                                      }),
                        }
                    );
                } else if (t.entity_type === j.Ps.EXTERNAL) {
                    let e = (0, I.oF)(t);
                    if (null == e) return { noticeType: null };
                    let n = _.Ay.getUserCount(t.id, f);
                    return {
                        noticeType: 1,
                        title: t.name,
                        location: (0, g.l)(e, !0),
                        locationIcon: (0, i.jsx)(d.BT6, {
                            size: "custom",
                            color: "currentColor",
                            width: 16,
                            height: 16,
                            className: w.NR,
                        }),
                        canListenIn: !1,
                        buttonText: D.intl.string(D.t.iW6Xuo),
                        onClose: () => (0, m.iF)({ eventId: t?.id }),
                        users: null == s ? [] : [s],
                        overflowUsers:
                            n < 1
                                ? null
                                : (0, i.jsxs)("div", {
                                      className: w.Io,
                                      children: [
                                          (0, i.jsx)(d.Gg5, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 12,
                                              height: 12,
                                              className: w.nW,
                                          }),
                                          (0, i.jsx)(d.Text, {
                                              variant: "text-xs/medium",
                                              color: "text-default",
                                              className: w.W8,
                                              children: n,
                                          }),
                                      ],
                                  }),
                    };
                } else if (t.entity_type === j.Ps.VOICE && null != r) {
                    let e = (0, A.gU)(r),
                        n = _.Ay.getUserCount(t.id, f);
                    return {
                        noticeType: 2,
                        title: t.name,
                        location: r.name,
                        locationIcon:
                            null != e ? (0, i.jsx)(e, { size: "xs", color: "currentColor", className: w.NR }) : null,
                        canListenIn: a,
                        buttonText: D.intl.string(D.t.nxUtoQ),
                        onClose: () => (0, m.iF)({ eventId: t?.id }),
                        users: null == s ? [] : [s],
                        overflowUsers:
                            n < 1
                                ? null
                                : (0, i.jsxs)("div", {
                                      className: w.Io,
                                      children: [
                                          (0, i.jsx)(d.Gg5, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 12,
                                              height: 12,
                                              className: w.nW,
                                          }),
                                          (0, i.jsx)(d.Text, {
                                              variant: "text-xs/medium",
                                              color: "text-default",
                                              className: w.W8,
                                              children: n,
                                          }),
                                      ],
                                  }),
                    };
                }
                return { noticeType: null };
            })({
                guildEvent: u,
                stageInstance: y,
                activeChannel: a,
                canConnect: H,
                myRole: F,
                eventCreator: W,
                speakers: V,
                listenerCount: B,
                isEventNoticeHidden: G,
                isStageNoticeHidden: M,
                isStudyRoomNotice: n,
            }),
        [u, y, a, H, F, W, V, B, G, M, n],
    );
    return null == q
        ? null
        : (0, i.jsxs)("div", {
              className: w.kL,
              children: [
                  null != ee
                      ? (0, i.jsx)(d.DUT, {
                            onClick: ee,
                            className: w.VN,
                            "aria-label": D.intl.string(D.t.WAI6xu),
                            children: (0, i.jsx)(d.PGe, { size: "md", color: "currentColor", className: w.ut }),
                        })
                      : null,
                  (0, i.jsxs)("div", {
                      className: w.wx,
                      children: [
                          (0, i.jsx)(R.A, { color: o.A.unsafe_rawColors.GREEN_230.css, width: 16, height: 16 }),
                          (0, i.jsx)(d.Text, {
                              variant: "text-xs/semibold",
                              color: "text-feedback-positive",
                              children: D.intl.string(D.t.dI3q4h),
                          }),
                      ],
                  }),
                  (Z.length > 0 || null != J) &&
                      (0, i.jsxs)("div", {
                          className: w.lF,
                          children: [Z.map((e) => (0, i.jsx)(U, { user: e, guildId: t.id }, e.id)), J],
                      }),
                  (0, i.jsx)(d.Text, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      className: l()(w.DD, w.VD),
                      children: z,
                  }),
                  (0, i.jsxs)("div", {
                      className: w.j5,
                      children: [
                          $,
                          (0, i.jsx)(d.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: w.C5,
                              children: K,
                          }),
                      ],
                  }),
                  Q || 1 === q
                      ? (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: w.x6,
                            children: (0, i.jsx)(d.Button, {
                                variant: "active",
                                size: "sm",
                                text: X,
                                onClick: () => {
                                    if (Q)
                                        null != a &&
                                            null != a.getGuildId() &&
                                            ((0, T.av)(a), (0, N.uh)(a.getGuildId(), a.id));
                                    else {
                                        if (null == u) return;
                                        (0, h.uR)({ eventId: u.id });
                                    }
                                },
                                fullWidth: !0,
                            }),
                        })
                      : null,
              ],
          });
}
function U(e) {
    let { user: t, guildId: n } = e,
        a = r.useRef(null);
    return (0, i.jsx)(y.A, {
        targetElementRef: a,
        user: t,
        guildId: n,
        newAnalyticsLocations: [u.A.AVATAR],
        clickTrap: !0,
        children: (e) =>
            (0, i.jsx)(d.euF, {
                ...e,
                ref: a,
                src: t.getAvatarURL(n, 24),
                "aria-label": t.username,
                size: d._3J.SIZE_24,
                className: w.my,
            }),
    });
}
