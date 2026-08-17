t.r(n), t.d(n, { default: () => m });
var o = t(477900),
    i = t(582128),
    s = t(837381),
    r = t(17928),
    l = t(912592),
    c = t(782603),
    u = t(862328),
    a = t(67811),
    d = t(941971),
    h = t(900848),
    p = t(938483),
    g = t(309010),
    x = t(851109),
    C = t(394953),
    f = t(355216),
    A = t(625864),
    I = t(866665),
    b = t(375708);
function j(e) {
    let { children: n } = e,
        { notificationCenterVariant: t } = (0, x.X8)({ location: "NotificationsInboxTooltip" }),
        i = t === x.U5.LEGACY ? b.intl.string(b.t.GSmTKJ) : b.intl.string(b.t.HcoRu0);
    return (0, o.jsx)(I.m, { spacing: 12, position: "right", text: i, children: (0, o.jsx)("div", { children: n }) });
}
t(445368);
var E = t(652215),
    U = t(350845);
function B(e) {
    let { onClick: n, selectedOverride: t = !1, popoutProps: p, ref: A } = e,
        I = (0, s.Vd)("notifications-inbox"),
        [b, B] = i.useState(!1),
        m = (0, C.lI)(),
        N = t || m,
        { notificationCenterVariant: k } = (0, x.X8)({ location: "NotificationsInboxButtonInner" }),
        {
            badge: v,
            badgeDimensions: R,
            unreadChannelsCount: G,
        } = (function (e) {
            let { notificationCenterVariant: n } = (0, x.X8)({ location: "NotificationsInboxButtonInner" }),
                { unreadChannelIds: t } = (0, C.U4)(),
                { badge: o, dimensions: i } = (0, f.ux)({ isSelected: e });
            return n === x.U5.LEGACY
                ? { badge: null, unreadChannelsCount: 0, badgeDimensions: { height: 13, width: 13 } }
                : { badge: o, unreadChannelsCount: t.length, badgeDimensions: i };
        })(N),
        L = k === x.U5.LEGACY ? l.InboxIcon : c.BellIcon,
        P = (0, r.bG)([g.Ay], () => g.Ay.getChannelId()),
        S = i.useMemo(() => {
            if (k === x.U5.SIDEBAR) return E.BVt.CHANNEL(E.gNP, P);
        }, [k, P]);
    return (0, o.jsxs)(h.c, {
        ref: A,
        children: [
            (0, o.jsx)(d.A, {
                overlay: !0,
                selected: N && k === x.U5.SIDEBAR,
                hovered: b && k === x.U5.SIDEBAR,
                unread: G > 0,
                disabled: k === x.U5.LEGACY,
            }),
            (0, o.jsx)(j, {
                children: (0, o.jsx)(u.Q, {
                    selected: N || b,
                    lowerBadge: v,
                    lowerBadgeSize: R,
                    children: (0, o.jsx)(a.j, {
                        ...I,
                        ...p,
                        onClick: n,
                        to: S,
                        selected: N || b,
                        onMouseEnter: () => B(!0),
                        onMouseLeave: () => B(!1),
                        children: (0, o.jsx)(L, {
                            size: "custom",
                            color: "currentColor",
                            className: U.iZ,
                            width: 20,
                            height: 20,
                        }),
                    }),
                }),
            }),
        ],
    });
}
function m() {
    let e = i.useRef(null),
        { notificationCenterVariant: n } = (0, x.X8)({ location: "NotificationsInboxButton" }),
        t = (0, f.HN)();
    return n === x.U5.SIDEBAR
        ? (0, o.jsx)(B, { onClick: t })
        : n === x.U5.POPOUT
          ? (0, o.jsx)(A.A, {
                targetElementRef: e,
                popoutPosition: "right",
                popoutAlign: "bottom",
                children: (n, i, s) =>
                    (0, o.jsx)(B, {
                        ref: e,
                        selectedOverride: i,
                        onClick: () => {
                            t(), n();
                        },
                        popoutProps: s,
                    }),
            })
          : n === x.U5.LEGACY
            ? (0, o.jsx)(p.U, {
                  spacing: 0,
                  targetElementRef: e,
                  popoutPosition: "right",
                  popoutAlign: "top",
                  children: (n, i, s) =>
                      (0, o.jsx)(B, {
                          ref: e,
                          selectedOverride: i,
                          onClick: () => {
                              t(), n();
                          },
                          popoutProps: s,
                      }),
              })
            : null;
}
