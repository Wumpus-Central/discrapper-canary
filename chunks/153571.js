n.r(t), n.d(t, { default: () => S });
var o = n(627968),
    i = n(64700),
    r = n(837381),
    s = n(17928),
    l = n(661531),
    u = n(777666),
    c = n(912592),
    d = n(782603),
    a = n(862328),
    h = n(67811),
    p = n(941971),
    C = n(900848),
    g = n(371911),
    A = n(222823),
    x = n(309010),
    f = n(287809),
    I = n(851109),
    b = n(394953),
    E = n(355216),
    j = n(625864),
    N = n(990078),
    U = n(985018);
function B(e) {
    let { children: t } = e,
        { notificationCenterVariant: n } = (0, I.X8)({ location: "NotificationsInboxTooltip" }),
        i = n === I.U5.LEGACY ? U.intl.string(U.t.GSmTKJ) : U.intl.string(U.t.HcoRu0);
    return (0, o.jsx)(N.m, { spacing: 12, position: "right", text: i, children: (0, o.jsx)("div", { children: t }) });
}
n(445368);
var m = n(652215),
    G = n(790782),
    R = n(773557);
function v() {
    let e = (0, s.bG)([f.default], () => f.default.getCurrentUser());
    return (0, s.bG)([A.Ay], () => e?.id != null && A.Ay.getMentionCount(e.id, G.P.NOTIFICATION_CENTER) > 0);
}
function O(e) {
    let { onClick: t, selectedOverride: n = !1, popoutProps: g, ref: A } = e,
        f = (0, r.Vd)("notifications-inbox"),
        [j, N] = i.useState(!1),
        U = (0, b.lI)(),
        G = n || U,
        { notificationCenterVariant: O } = (0, I.X8)({ location: "NotificationsInboxButtonInner" }),
        {
            badge: S,
            badgeDimensions: k,
            unreadChannelsCount: D,
        } = (function (e) {
            let { notificationCenterVariant: t } = (0, I.X8)({ location: "NotificationsInboxButtonInner" }),
                { unreadChannelIds: n } = (0, b.U4)(),
                i = v(),
                { badge: r, dimensions: s } = (0, E.ux)({ isSelected: e });
            return t === I.U5.LEGACY
                ? {
                      badge: i
                          ? (0, o.jsx)(u.SC, {
                                style: { height: 13, width: 13, position: "relative" },
                                color: l.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                            })
                          : null,
                      unreadChannelsCount: 0,
                      badgeDimensions: { height: 13, width: 13 },
                  }
                : { badge: r, unreadChannelsCount: n.length, badgeDimensions: s };
        })(G),
        P = O === I.U5.LEGACY ? c.K : d.X,
        T = (0, s.bG)([x.A], () => x.A.getChannelId()),
        w = i.useMemo(() => {
            if (O === I.U5.SIDEBAR) return m.BVt.CHANNEL(m.gNP, T);
        }, [O, T]);
    return (0, o.jsxs)(C.c, {
        ref: A,
        children: [
            (0, o.jsx)(p.A, {
                overlay: !0,
                selected: G && O === I.U5.SIDEBAR,
                hovered: j && O === I.U5.SIDEBAR,
                unread: D > 0,
                disabled: O === I.U5.LEGACY,
            }),
            (0, o.jsx)(B, {
                children: (0, o.jsx)(a.Q, {
                    selected: G || j,
                    lowerBadge: S,
                    lowerBadgeSize: k,
                    children: (0, o.jsx)(h.j, {
                        ...f,
                        ...g,
                        onClick: t,
                        to: w,
                        selected: G || j,
                        onMouseEnter: () => N(!0),
                        onMouseLeave: () => N(!1),
                        children: (0, o.jsx)(P, {
                            size: "custom",
                            color: "currentColor",
                            className: R.iZ,
                            width: 20,
                            height: 20,
                        }),
                    }),
                }),
            }),
        ],
    });
}
function S() {
    let e = i.useRef(null),
        { notificationCenterVariant: t } = (0, I.X8)({ location: "NotificationsInboxButton" }),
        n = v(),
        r = (0, E.HN)();
    return t === I.U5.SIDEBAR
        ? (0, o.jsx)(O, { onClick: r })
        : t === I.U5.POPOUT
          ? (0, o.jsx)(j.A, {
                targetElementRef: e,
                popoutPosition: "right",
                popoutAlign: "bottom",
                children: (t, n, i) =>
                    (0, o.jsx)(O, {
                        ref: e,
                        selectedOverride: n,
                        onClick: () => {
                            r(), t();
                        },
                        popoutProps: i,
                    }),
            })
          : t === I.U5.LEGACY
            ? (0, o.jsx)(g.C, {
                  spacing: 0,
                  badgeState: { badgeForYou: n },
                  targetElementRef: e,
                  popoutPosition: "right",
                  popoutAlign: "top",
                  children: (t, n, i) =>
                      (0, o.jsx)(O, {
                          ref: e,
                          selectedOverride: n,
                          onClick: () => {
                              r(), t();
                          },
                          popoutProps: i,
                      }),
              })
            : null;
}
