n.d(t, { A: () => w });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
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
    I = n(508654),
    f = n(9448),
    C = n(974930),
    T = n(976860),
    N = n(323443),
    S = n(63995),
    x = n(69407),
    v = n(446600),
    b = n(964175),
    y = n(342296),
    O = n(576705),
    L = n(287809),
    R = n(182028),
    P = n(652215),
    D = n(988794),
    M = n(985018),
    j = n(436965);
function w(e) {
    let { guild: t, isStudyRoomNotice: n = !1 } = e,
        a = (0, E.V)(t.id),
        u = (0, I.BP)(t.id),
        y = (0, s.bG)([v.A], () => v.A.getStageInstanceByChannel(a?.id), [a]),
        { isStageNoticeHidden: w, isEventNoticeHidden: G } = (0, s.cf)(
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
        H = (0, s.bG)([O.A], () => O.A.can(P.xBc.CONNECT, a)),
        F = (0, b.A)(a?.id),
        Y = u?.creator_id,
        W = (0, s.bG)([L.default], () => L.default.getUser(Y), [Y]);
    l.useEffect(() => {
        null != Y && (0, c.wz)(Y);
    }, [Y]);
    let {
        noticeType: K,
        title: q,
        location: z,
        locationIcon: $,
        canListenIn: Q,
        buttonText: X,
        users: Z,
        overflowUsers: J,
        onClose: ee,
    } = l.useMemo(
        () =>
            (function (e) {
                let {
                        guildEvent: t,
                        stageInstance: n,
                        activeChannel: l,
                        canConnect: a,
                        myRole: r,
                        eventCreator: s,
                        speakers: o,
                        listenerCount: c,
                        isEventNoticeHidden: u,
                        isStageNoticeHidden: h,
                        isStudyRoomNotice: p,
                    } = e,
                    E = null != n && null != l && !h,
                    I = null != t ? (0, C.G3)(t) : null;
                if (p && null != l) {
                    let e = (0, A.gU)(l);
                    return {
                        noticeType: 3,
                        title: `📚☕ ${l.name}`,
                        location: M.intl.string(M.t.LZA6Na),
                        locationIcon:
                            null != e ? (0, i.jsx)(e, { size: "xs", color: "currentColor", className: j.NR }) : null,
                        canListenIn: a,
                        buttonText: M.intl.string(M.t.wBoE6L),
                        users: [],
                        overflowUsers: null,
                    };
                }
                if (null == t || u) {
                    if (E) {
                        let e = M.intl.string(M.t.ZYO5OK);
                        return (
                            r?.speaker
                                ? (e = M.intl.string(M.t["/cnSFc"]))
                                : null != r && (e = M.intl.string(M.t.btSGOj)),
                            {
                                noticeType: 0,
                                title: n.topic,
                                location: l.name,
                                locationIcon: (0, i.jsx)(d.qux, {
                                    size: "custom",
                                    color: "currentColor",
                                    width: 16,
                                    height: 16,
                                    className: j.NR,
                                }),
                                canListenIn: a,
                                buttonText: e,
                                onClose: () => (0, m.iF)({ stageId: n?.id }),
                                users: o.length > 5 ? o.slice(0, 5) : o,
                                overflowUsers:
                                    c < 1
                                        ? null
                                        : (0, i.jsxs)("div", {
                                              className: j.Io,
                                              children: [
                                                  (0, i.jsx)(d.LoC, {
                                                      size: "custom",
                                                      color: "currentColor",
                                                      width: 12,
                                                      height: 12,
                                                      className: j.nW,
                                                  }),
                                                  (0, i.jsx)(d.Text, {
                                                      variant: "text-xs/medium",
                                                      color: "text-default",
                                                      className: j.W8,
                                                      children: c,
                                                  }),
                                              ],
                                          }),
                            }
                        );
                    }
                } else if (t.entity_type === D.Ps.STAGE_INSTANCE && E) {
                    let e = M.intl.string(M.t.ZYO5OK);
                    return (
                        r?.speaker ? (e = M.intl.string(M.t["/cnSFc"])) : null != r && (e = M.intl.string(M.t.btSGOj)),
                        {
                            noticeType: 0,
                            title: n.topic,
                            location: l.name,
                            locationIcon: (0, i.jsx)(d.qux, {
                                size: "custom",
                                color: "currentColor",
                                width: 16,
                                height: 16,
                                className: j.NR,
                            }),
                            canListenIn: a,
                            buttonText: e,
                            onClose: () => (0, m.iF)({ stageId: n?.id }),
                            users: o.length > 5 ? o.slice(0, 5) : o,
                            overflowUsers:
                                c < 1
                                    ? null
                                    : (0, i.jsxs)("div", {
                                          className: j.Io,
                                          children: [
                                              (0, i.jsx)(d.LoC, {
                                                  size: "custom",
                                                  color: "currentColor",
                                                  width: 12,
                                                  height: 12,
                                                  className: j.nW,
                                              }),
                                              (0, i.jsx)(d.Text, {
                                                  variant: "text-xs/medium",
                                                  color: "text-default",
                                                  className: j.W8,
                                                  children: c,
                                              }),
                                          ],
                                      }),
                        }
                    );
                } else if (t.entity_type === D.Ps.EXTERNAL) {
                    let e = (0, f.oF)(t);
                    if (null == e) return { noticeType: null };
                    let n = _.Ay.getUserCount(t.id, I);
                    return {
                        noticeType: 1,
                        title: t.name,
                        location: (0, g.l)(e, !0),
                        locationIcon: (0, i.jsx)(d.BT6, {
                            size: "custom",
                            color: "currentColor",
                            width: 16,
                            height: 16,
                            className: j.NR,
                        }),
                        canListenIn: !1,
                        buttonText: M.intl.string(M.t.iW6Xuo),
                        onClose: () => (0, m.iF)({ eventId: t?.id }),
                        users: null == s ? [] : [s],
                        overflowUsers:
                            n < 1
                                ? null
                                : (0, i.jsxs)("div", {
                                      className: j.Io,
                                      children: [
                                          (0, i.jsx)(d.Gg5, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 12,
                                              height: 12,
                                              className: j.nW,
                                          }),
                                          (0, i.jsx)(d.Text, {
                                              variant: "text-xs/medium",
                                              color: "text-default",
                                              className: j.W8,
                                              children: n,
                                          }),
                                      ],
                                  }),
                    };
                } else if (t.entity_type === D.Ps.VOICE && null != l) {
                    let e = (0, A.gU)(l),
                        n = _.Ay.getUserCount(t.id, I);
                    return {
                        noticeType: 2,
                        title: t.name,
                        location: l.name,
                        locationIcon:
                            null != e ? (0, i.jsx)(e, { size: "xs", color: "currentColor", className: j.NR }) : null,
                        canListenIn: a,
                        buttonText: M.intl.string(M.t.nxUtoQ),
                        onClose: () => (0, m.iF)({ eventId: t?.id }),
                        users: null == s ? [] : [s],
                        overflowUsers:
                            n < 1
                                ? null
                                : (0, i.jsxs)("div", {
                                      className: j.Io,
                                      children: [
                                          (0, i.jsx)(d.Gg5, {
                                              size: "custom",
                                              color: "currentColor",
                                              width: 12,
                                              height: 12,
                                              className: j.nW,
                                          }),
                                          (0, i.jsx)(d.Text, {
                                              variant: "text-xs/medium",
                                              color: "text-default",
                                              className: j.W8,
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
                isStageNoticeHidden: w,
                isStudyRoomNotice: n,
            }),
        [u, y, a, H, F, W, V, B, G, w, n],
    );
    return null == K
        ? null
        : (0, i.jsxs)("div", {
              className: j.kL,
              children: [
                  null != ee
                      ? (0, i.jsx)(d.DUT, {
                            onClick: ee,
                            className: j.VN,
                            "aria-label": M.intl.string(M.t.WAI6xu),
                            children: (0, i.jsx)(d.PGe, { size: "md", color: "currentColor", className: j.ut }),
                        })
                      : null,
                  (0, i.jsxs)("div", {
                      className: j.wx,
                      children: [
                          (0, i.jsx)(R.A, { color: o.A.unsafe_rawColors.GREEN_230.css, width: 16, height: 16 }),
                          (0, i.jsx)(d.Text, {
                              variant: "text-xs/semibold",
                              color: "text-feedback-positive",
                              children: M.intl.string(M.t.dI3q4h),
                          }),
                      ],
                  }),
                  (Z.length > 0 || null != J) &&
                      (0, i.jsxs)("div", {
                          className: j.lF,
                          children: [Z.map((e) => (0, i.jsx)(U, { user: e, guildId: t.id }, e.id)), J],
                      }),
                  (0, i.jsx)(d.Text, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      className: r()(j.DD, j.VD),
                      children: q,
                  }),
                  (0, i.jsxs)("div", {
                      className: j.j5,
                      children: [
                          $,
                          (0, i.jsx)(d.Text, {
                              variant: "text-xs/normal",
                              color: "text-muted",
                              className: j.C5,
                              children: z,
                          }),
                      ],
                  }),
                  Q || 1 === K
                      ? (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: j.x6,
                            children: (0, i.jsx)(d.Button, {
                                variant: "active",
                                size: "sm",
                                text: X,
                                onClick: () => {
                                    if (Q)
                                        null != a &&
                                            null != a.getGuildId() &&
                                            ((0, N.av)(a), (0, T.uh)(a.getGuildId(), a.id));
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
        a = l.useRef(null);
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
                className: j.my,
            }),
    });
}
