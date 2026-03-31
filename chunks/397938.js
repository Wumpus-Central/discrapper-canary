n.d(t, { A: () => S });
var i = n(627968),
    l = n(64700),
    s = n(837381),
    a = n(311907),
    r = n(827734),
    o = n(397927),
    c = n(941971),
    d = n(900848),
    u = n(371911),
    h = n(222823),
    A = n(309010),
    _ = n(287809),
    m = n(851109),
    g = n(394953),
    p = n(355216),
    f = n(596540),
    x = n(879221);
n(445368);
var E = n(652215),
    I = n(790782),
    C = n(480293);
function N() {
    let e = (0, a.bG)([_.default], () => _.default.getCurrentUser());
    return (0, a.bG)([h.Ay], () => e?.id != null && h.Ay.getMentionCount(e.id, I.P.NOTIFICATION_CENTER) > 0);
}
function T(e) {
    let { onClick: t, selectedOverride: n = !1, popoutProps: u, ref: h } = e,
        _ = (0, s.Vd)("notifications-inbox"),
        [f, I] = l.useState(!1),
        T = (0, g.lI)(),
        S = n || T,
        { notificationCenterVariant: b } = (0, m.X8)({ location: "NotificationsInboxButtonInner" }),
        {
            badge: y,
            badgeDimensions: v,
            unreadChannelsCount: j,
        } = (function (e) {
            let { notificationCenterVariant: t } = (0, m.X8)({ location: "NotificationsInboxButtonInner" }),
                { unreadChannelIds: n } = (0, g.U4)(),
                l = N(),
                { badge: s, dimensions: a } = (0, p.ux)({ isSelected: e });
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
        })(S),
        R = b === m.U5.LEGACY ? o.K$s : o.XFE,
        O = (0, a.bG)([A.A], () => A.A.getChannelId()),
        L = l.useMemo(() => {
            if (b === m.U5.SIDEBAR) return E.BVt.CHANNEL(E.gNP, O);
        }, [b, O]);
    return (0, i.jsxs)(d.c, {
        ref: h,
        children: [
            (0, i.jsx)(c.A, {
                selected: S && b === m.U5.SIDEBAR,
                hovered: f && b === m.U5.SIDEBAR,
                unread: j > 0,
                className: C.Io,
                disabled: b === m.U5.LEGACY,
            }),
            (0, i.jsx)(x.A, {
                children: (0, i.jsx)(o.Qk9, {
                    selected: S || f,
                    lowerBadge: y,
                    lowerBadgeSize: v,
                    children: (0, i.jsx)(o.jlP, {
                        ..._,
                        ...u,
                        onClick: t,
                        to: L,
                        selected: S || f,
                        onMouseEnter: () => I(!0),
                        onMouseLeave: () => I(!1),
                        children: (0, i.jsx)(R, {
                            size: "custom",
                            color: "currentColor",
                            className: C.iZ,
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
    let e = l.useRef(null),
        { notificationCenterVariant: t } = (0, m.X8)({ location: "NotificationsInboxButton" }),
        n = N(),
        s = (0, p.HN)();
    return t === m.U5.SIDEBAR
        ? (0, i.jsx)(T, { onClick: s })
        : t === m.U5.POPOUT
          ? (0, i.jsx)(f.A, {
                targetElementRef: e,
                popoutPosition: "right",
                popoutAlign: "bottom",
                children: (t, n, l) =>
                    (0, i.jsx)(T, {
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
                      (0, i.jsx)(T, {
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
