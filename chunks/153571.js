n.r(t), n.d(t, { default: () => G });
var i = n(627968),
    o = n(64700),
    s = n(837381),
    a = n(17928),
    r = n(661531),
    l = n(777666),
    u = n(912592),
    c = n(782603),
    d = n(862328),
    b = n(67811),
    h = n(941971),
    g = n(900848),
    E = n(371911),
    A = n(222823),
    p = n(309010),
    f = n(287809),
    T = n(851109),
    I = n(394953),
    N = n(355216),
    x = n(625864),
    _ = n(990078),
    C = n(985018);
function m(e) {
    let { children: t } = e,
        { notificationCenterVariant: n } = (0, T.X8)({ location: "NotificationsInboxTooltip" }),
        o = n === T.U5.LEGACY ? C.intl.string(C.t.GSmTKJ) : C.intl.string(C.t.HcoRu0);
    return (0, i.jsx)(_.m, { spacing: 12, position: "right", text: o, children: (0, i.jsx)("div", { children: t }) });
}
n(445368);
var R = n(652215),
    S = n(790782),
    j = n(773557);
function O() {
    let e = (0, a.bG)([f.default], () => f.default.getCurrentUser());
    return (0, a.bG)([A.Ay], () => e?.id != null && A.Ay.getMentionCount(e.id, S.P.NOTIFICATION_CENTER) > 0);
}
function L(e) {
    let { onClick: t, selectedOverride: n = !1, popoutProps: E, ref: A } = e,
        f = (0, s.Vd)("notifications-inbox"),
        [x, _] = o.useState(!1),
        C = (0, I.lI)(),
        S = n || C,
        { notificationCenterVariant: L } = (0, T.X8)({ location: "NotificationsInboxButtonInner" }),
        {
            badge: G,
            badgeDimensions: w,
            unreadChannelsCount: v,
        } = (function (e) {
            let { notificationCenterVariant: t } = (0, T.X8)({ location: "NotificationsInboxButtonInner" }),
                { unreadChannelIds: n } = (0, I.U4)(),
                o = O(),
                { badge: s, dimensions: a } = (0, N.ux)({ isSelected: e });
            return t === T.U5.LEGACY
                ? {
                      badge: o
                          ? (0, i.jsx)(l.SC, {
                                style: { height: 13, width: 13, position: "relative" },
                                color: r.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                            })
                          : null,
                      unreadChannelsCount: 0,
                      badgeDimensions: { height: 13, width: 13 },
                  }
                : { badge: s, unreadChannelsCount: n.length, badgeDimensions: a };
        })(S),
        U = L === T.U5.LEGACY ? u.K : c.X,
        k = (0, a.bG)([p.A], () => p.A.getChannelId()),
        B = o.useMemo(() => {
            if (L === T.U5.SIDEBAR) return R.BVt.CHANNEL(R.gNP, k);
        }, [L, k]);
    return (0, i.jsxs)(g.c, {
        ref: A,
        children: [
            (0, i.jsx)(h.A, {
                selected: S && L === T.U5.SIDEBAR,
                hovered: x && L === T.U5.SIDEBAR,
                unread: v > 0,
                className: j.Io,
                disabled: L === T.U5.LEGACY,
            }),
            (0, i.jsx)(m, {
                children: (0, i.jsx)(d.Q, {
                    selected: S || x,
                    lowerBadge: G,
                    lowerBadgeSize: w,
                    children: (0, i.jsx)(b.j, {
                        ...f,
                        ...E,
                        onClick: t,
                        to: B,
                        selected: S || x,
                        onMouseEnter: () => _(!0),
                        onMouseLeave: () => _(!1),
                        children: (0, i.jsx)(U, {
                            size: "custom",
                            color: "currentColor",
                            className: j.iZ,
                            width: 20,
                            height: 20,
                        }),
                    }),
                }),
            }),
        ],
    });
}
function G() {
    let e = o.useRef(null),
        { notificationCenterVariant: t } = (0, T.X8)({ location: "NotificationsInboxButton" }),
        n = O(),
        s = (0, N.HN)();
    return t === T.U5.SIDEBAR
        ? (0, i.jsx)(L, { onClick: s })
        : t === T.U5.POPOUT
          ? (0, i.jsx)(x.A, {
                targetElementRef: e,
                popoutPosition: "right",
                popoutAlign: "bottom",
                children: (t, n, o) =>
                    (0, i.jsx)(L, {
                        ref: e,
                        selectedOverride: n,
                        onClick: () => {
                            s(), t();
                        },
                        popoutProps: o,
                    }),
            })
          : t === T.U5.LEGACY
            ? (0, i.jsx)(E.C, {
                  spacing: 0,
                  badgeState: { badgeForYou: n },
                  targetElementRef: e,
                  popoutPosition: "right",
                  popoutAlign: "top",
                  children: (t, n, o) =>
                      (0, i.jsx)(L, {
                          ref: e,
                          selectedOverride: n,
                          onClick: () => {
                              s(), t();
                          },
                          popoutProps: o,
                      }),
              })
            : null;
}
