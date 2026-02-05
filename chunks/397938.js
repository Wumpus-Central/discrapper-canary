n.d(t, { A: () => N });
var i = n(627968),
    l = n(64700),
    s = n(837381),
    a = n(311907),
    r = n(827734),
    o = n(397927),
    d = n(941971),
    c = n(900848),
    u = n(371911),
    h = n(222823),
    A = n(309010),
    g = n(287809),
    m = n(851109),
    p = n(394953),
    _ = n(355216),
    x = n(596540),
    f = n(879221);
n(445368);
var E = n(652215),
    C = n(790782),
    I = n(626600);
function S() {
    let e = (0, a.bG)([g.default], () => g.default.getCurrentUser());
    return (0, a.bG)([h.Ay], () => e?.id != null && h.Ay.getMentionCount(e.id, C.P.NOTIFICATION_CENTER) > 0);
}
function b(e) {
    let { onClick: t, selectedOverride: n = !1, popoutProps: u, ref: h } = e,
        g = (0, s.Vd)("notifications-inbox"),
        [x, C] = l.useState(!1),
        b = (0, p.lI)(),
        N = n || b,
        { notificationCenterVariant: T } = (0, m.X8)({ location: "NotificationsInboxButtonInner" }),
        {
            badge: j,
            badgeDimensions: v,
            unreadChannelsCount: y,
        } = (function (e) {
            let { notificationCenterVariant: t } = (0, m.X8)({ location: "NotificationsInboxButtonInner" }),
                { unreadChannelIds: n } = (0, p.U4)(),
                l = S(),
                { badge: s, dimensions: a } = (0, _.ux)({ isSelected: e });
            return t === m.U5.LEGACY
                ? {
                      badge: l
                          ? (0, i.jsx)(o.SC0, {
                                style: { height: 13, width: 13, position: "relative" },
                                color: r.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                            })
                          : null,
                      unreadChannelsCount: 0,
                      badgeDimensions: { height: 13, width: 13 },
                  }
                : { badge: s, unreadChannelsCount: n.length, badgeDimensions: a };
        })(N),
        R = T === m.U5.LEGACY ? o.K$s : o.XFE,
        O = (0, a.bG)([A.A], () => A.A.getChannelId()),
        L = l.useMemo(() => {
            if (T === m.U5.SIDEBAR) return E.BVt.CHANNEL(E.gNP, O);
        }, [T, O]);
    return (0, i.jsxs)(c.c, {
        ref: h,
        children: [
            (0, i.jsx)(d.A, {
                selected: N && T === m.U5.SIDEBAR,
                hovered: x && T === m.U5.SIDEBAR,
                unread: y > 0,
                className: I.Io,
                disabled: T === m.U5.LEGACY,
            }),
            (0, i.jsx)(f.A, {
                children: (0, i.jsx)(o.Qk9, {
                    selected: N || x,
                    lowerBadge: j,
                    lowerBadgeSize: v,
                    children: (0, i.jsx)(o.jlP, {
                        ...g,
                        ...u,
                        onClick: t,
                        to: L,
                        selected: N || x,
                        onMouseEnter: () => C(!0),
                        onMouseLeave: () => C(!1),
                        children: (0, i.jsx)(R, {
                            size: "custom",
                            color: "currentColor",
                            className: I.iZ,
                            width: 20,
                            height: 20,
                        }),
                    }),
                }),
            }),
        ],
    });
}
function N() {
    let e = l.useRef(null),
        { notificationCenterVariant: t } = (0, m.X8)({ location: "NotificationsInboxButton" }),
        n = S(),
        s = (0, _.HN)();
    return t === m.U5.SIDEBAR
        ? (0, i.jsx)(b, { onClick: s })
        : t === m.U5.POPOUT
          ? (0, i.jsx)(x.A, {
                targetElementRef: e,
                popoutPosition: "right",
                popoutAlign: "bottom",
                children: (t, n, l) =>
                    (0, i.jsx)(b, {
                        ref: e,
                        selectedOverride: n,
                        onClick: () => {
                            s(), t();
                        },
                        popoutProps: l,
                    }),
            })
          : t === m.U5.LEGACY
            ? (0, i.jsx)(u.C, {
                  spacing: 0,
                  badgeState: { badgeForYou: n },
                  targetElementRef: e,
                  popoutPosition: "right",
                  popoutAlign: "top",
                  children: (t, n, l) =>
                      (0, i.jsx)(b, {
                          ref: e,
                          selectedOverride: n,
                          onClick: () => {
                              s(), t();
                          },
                          popoutProps: l,
                      }),
              })
            : null;
}
