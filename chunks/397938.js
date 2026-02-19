"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    s = n(64700),
    l = n(837381),
    r = n(311907),
    a = n(827734),
    o = n(397927),
    c = n(941971),
    d = n(900848),
    u = n(371911),
    h = n(222823),
    A = n(309010),
    p = n(287809),
    g = n(851109),
    m = n(394953),
    _ = n(355216),
    f = n(596540),
    x = n(879221);
n(445368);
var C = n(652215),
    E = n(790782),
    I = n(626600);
function b() {
    let e = (0, r.bG)([p.default], () => p.default.getCurrentUser());
    return (0, r.bG)([h.Ay], () => e?.id != null && h.Ay.getMentionCount(e.id, E.P.NOTIFICATION_CENTER) > 0);
}
function N(e) {
    let { onClick: t, selectedOverride: n = !1, popoutProps: u, ref: h } = e,
        p = (0, l.Vd)("notifications-inbox"),
        [f, E] = s.useState(!1),
        N = (0, m.lI)(),
        S = n || N,
        { notificationCenterVariant: T } = (0, g.X8)({ location: "NotificationsInboxButtonInner" }),
        {
            badge: v,
            badgeDimensions: y,
            unreadChannelsCount: j,
        } = (function (e) {
            let { notificationCenterVariant: t } = (0, g.X8)({ location: "NotificationsInboxButtonInner" }),
                { unreadChannelIds: n } = (0, m.U4)(),
                s = b(),
                { badge: l, dimensions: r } = (0, _.ux)({ isSelected: e });
            return t === g.U5.LEGACY
                ? {
                      badge: s
                          ? (0, i.jsx)(o.SC0, {
                                style: { height: 13, width: 13, position: "relative" },
                                color: a.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                            })
                          : null,
                      unreadChannelsCount: 0,
                      badgeDimensions: { height: 13, width: 13 },
                  }
                : { badge: l, unreadChannelsCount: n.length, badgeDimensions: r };
        })(S),
        R = T === g.U5.LEGACY ? o.K$s : o.XFE,
        O = (0, r.bG)([A.A], () => A.A.getChannelId()),
        L = s.useMemo(() => {
            if (T === g.U5.SIDEBAR) return C.BVt.CHANNEL(C.gNP, O);
        }, [T, O]);
    return (0, i.jsxs)(d.c, {
        ref: h,
        children: [
            (0, i.jsx)(c.A, {
                selected: S && T === g.U5.SIDEBAR,
                hovered: f && T === g.U5.SIDEBAR,
                unread: j > 0,
                className: I.Io,
                disabled: T === g.U5.LEGACY,
            }),
            (0, i.jsx)(x.A, {
                children: (0, i.jsx)(o.Qk9, {
                    selected: S || f,
                    lowerBadge: v,
                    lowerBadgeSize: y,
                    children: (0, i.jsx)(o.jlP, {
                        ...p,
                        ...u,
                        onClick: t,
                        to: L,
                        selected: S || f,
                        onMouseEnter: () => E(!0),
                        onMouseLeave: () => E(!1),
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
function S() {
    let e = s.useRef(null),
        { notificationCenterVariant: t } = (0, g.X8)({ location: "NotificationsInboxButton" }),
        n = b(),
        l = (0, _.HN)();
    return t === g.U5.SIDEBAR
        ? (0, i.jsx)(N, { onClick: l })
        : t === g.U5.POPOUT
          ? (0, i.jsx)(f.A, {
                targetElementRef: e,
                popoutPosition: "right",
                popoutAlign: "bottom",
                children: (t, n, s) =>
                    (0, i.jsx)(N, {
                        ref: e,
                        selectedOverride: n,
                        onClick: () => {
                            l(), t();
                        },
                        popoutProps: s,
                    }),
            })
          : t === g.U5.LEGACY
            ? (0, i.jsx)(u.C, {
                  spacing: 0,
                  badgeState: { badgeForYou: n },
                  targetElementRef: e,
                  popoutPosition: "right",
                  popoutAlign: "top",
                  children: (t, n, s) =>
                      (0, i.jsx)(N, {
                          ref: e,
                          selectedOverride: n,
                          onClick: () => {
                              l(), t();
                          },
                          popoutProps: s,
                      }),
              })
            : null;
}
