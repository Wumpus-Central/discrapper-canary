n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    s = n(837381),
    a = n(311907),
    r = n(827734),
    o = n(777666),
    d = n(912592),
    c = n(782603),
    u = n(862328),
    h = n(67811),
    A = n(941971),
    _ = n(900848),
    m = n(371911),
    g = n(222823),
    p = n(309010),
    f = n(287809),
    E = n(851109),
    x = n(394953),
    I = n(355216),
    C = n(596540),
    b = n(879221);
n(445368);
var N = n(652215),
    S = n(790782),
    v = n(773557);
function T() {
    let e = (0, a.bG)([f.default], () => f.default.getCurrentUser());
    return (0, a.bG)([g.Ay], () => e?.id != null && g.Ay.getMentionCount(e.id, S.P.NOTIFICATION_CENTER) > 0);
}
function y(e) {
    let { onClick: t, selectedOverride: n = !1, popoutProps: m, ref: g } = e,
        f = (0, s.Vd)("notifications-inbox"),
        [C, S] = l.useState(!1),
        y = (0, x.lI)(),
        j = n || y,
        { notificationCenterVariant: R } = (0, E.X8)({ location: "NotificationsInboxButtonInner" }),
        {
            badge: L,
            badgeDimensions: O,
            unreadChannelsCount: G,
        } = (function (e) {
            let { notificationCenterVariant: t } = (0, E.X8)({ location: "NotificationsInboxButtonInner" }),
                { unreadChannelIds: n } = (0, x.U4)(),
                l = T(),
                { badge: s, dimensions: a } = (0, I.ux)({ isSelected: e });
            return t === E.U5.LEGACY
                ? {
                      badge: l
                          ? (0, i.jsx)(o.SC, {
                                style: { height: 13, width: 13, position: "relative" },
                                color: r.A.colors.BACKGROUND_FEEDBACK_NOTIFICATION.css,
                            })
                          : null,
                      unreadChannelsCount: 0,
                      badgeDimensions: { height: 13, width: 13 },
                  }
                : { badge: s, unreadChannelsCount: n.length, badgeDimensions: a };
        })(j),
        M = R === E.U5.LEGACY ? d.K : c.X,
        D = (0, a.bG)([p.A], () => p.A.getChannelId()),
        U = l.useMemo(() => {
            if (R === E.U5.SIDEBAR) return N.BVt.CHANNEL(N.gNP, D);
        }, [R, D]);
    return (0, i.jsxs)(_.c, {
        ref: g,
        children: [
            (0, i.jsx)(A.A, {
                selected: j && R === E.U5.SIDEBAR,
                hovered: C && R === E.U5.SIDEBAR,
                unread: G > 0,
                className: v.Io,
                disabled: R === E.U5.LEGACY,
            }),
            (0, i.jsx)(b.A, {
                children: (0, i.jsx)(u.Q, {
                    selected: j || C,
                    lowerBadge: L,
                    lowerBadgeSize: O,
                    children: (0, i.jsx)(h.j, {
                        ...f,
                        ...m,
                        onClick: t,
                        to: U,
                        selected: j || C,
                        onMouseEnter: () => S(!0),
                        onMouseLeave: () => S(!1),
                        children: (0, i.jsx)(M, {
                            size: "custom",
                            color: "currentColor",
                            className: v.iZ,
                            width: 20,
                            height: 20,
                        }),
                    }),
                }),
            }),
        ],
    });
}
function j() {
    let e = l.useRef(null),
        { notificationCenterVariant: t } = (0, E.X8)({ location: "NotificationsInboxButton" }),
        n = T(),
        s = (0, I.HN)();
    return t === E.U5.SIDEBAR
        ? (0, i.jsx)(y, { onClick: s })
        : t === E.U5.POPOUT
          ? (0, i.jsx)(C.A, {
                targetElementRef: e,
                popoutPosition: "right",
                popoutAlign: "bottom",
                children: (t, n, l) =>
                    (0, i.jsx)(y, {
                        ref: e,
                        selectedOverride: n,
                        onClick: () => {
                            s(), t();
                        },
                        popoutProps: l,
                    }),
            })
          : t === E.U5.LEGACY
            ? (0, i.jsx)(m.C, {
                  spacing: 0,
                  badgeState: { badgeForYou: n },
                  targetElementRef: e,
                  popoutPosition: "right",
                  popoutAlign: "top",
                  children: (t, n, l) =>
                      (0, i.jsx)(y, {
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
