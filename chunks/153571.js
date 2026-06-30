n.r(t), n.d(t, { default: () => B });
var o = n(627968),
    i = n(64700),
    s = n(837381),
    r = n(17928),
    l = n(912592),
    c = n(782603),
    u = n(862328),
    a = n(67811),
    d = n(941971),
    h = n(900848),
    p = n(371911),
    g = n(309010),
    x = n(851109),
    C = n(394953),
    f = n(355216),
    A = n(625864),
    j = n(990078),
    b = n(375708);
function E(e) {
    let { children: t } = e,
        { notificationCenterVariant: n } = (0, x.X8)({ location: "NotificationsInboxTooltip" }),
        i = n === x.U5.LEGACY ? b.intl.string(b.t.GSmTKJ) : b.intl.string(b.t.HcoRu0);
    return (0, o.jsx)(j.m, { spacing: 12, position: "right", text: i, children: (0, o.jsx)("div", { children: t }) });
}
n(445368);
var I = n(652215),
    U = n(773557);
function m(e) {
    let { onClick: t, selectedOverride: n = !1, popoutProps: p, ref: A } = e,
        j = (0, s.Vd)("notifications-inbox"),
        [b, m] = i.useState(!1),
        B = (0, C.lI)(),
        N = n || B,
        { notificationCenterVariant: k } = (0, x.X8)({ location: "NotificationsInboxButtonInner" }),
        {
            badge: v,
            badgeDimensions: R,
            unreadChannelsCount: G,
        } = (function (e) {
            let { notificationCenterVariant: t } = (0, x.X8)({ location: "NotificationsInboxButtonInner" }),
                { unreadChannelIds: n } = (0, C.U4)(),
                { badge: o, dimensions: i } = (0, f.ux)({ isSelected: e });
            return t === x.U5.LEGACY
                ? { badge: null, unreadChannelsCount: 0, badgeDimensions: { height: 13, width: 13 } }
                : { badge: o, unreadChannelsCount: n.length, badgeDimensions: i };
        })(N),
        L = k === x.U5.LEGACY ? l.K : c.X,
        P = (0, r.bG)([g.A], () => g.A.getChannelId()),
        S = i.useMemo(() => {
            if (k === x.U5.SIDEBAR) return I.BVt.CHANNEL(I.gNP, P);
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
            (0, o.jsx)(E, {
                children: (0, o.jsx)(u.Q, {
                    selected: N || b,
                    lowerBadge: v,
                    lowerBadgeSize: R,
                    children: (0, o.jsx)(a.j, {
                        ...j,
                        ...p,
                        onClick: t,
                        to: S,
                        selected: N || b,
                        onMouseEnter: () => m(!0),
                        onMouseLeave: () => m(!1),
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
function B() {
    let e = i.useRef(null),
        { notificationCenterVariant: t } = (0, x.X8)({ location: "NotificationsInboxButton" }),
        n = (0, f.HN)();
    return t === x.U5.SIDEBAR
        ? (0, o.jsx)(m, { onClick: n })
        : t === x.U5.POPOUT
          ? (0, o.jsx)(A.A, {
                targetElementRef: e,
                popoutPosition: "right",
                popoutAlign: "bottom",
                children: (t, i, s) =>
                    (0, o.jsx)(m, {
                        ref: e,
                        selectedOverride: i,
                        onClick: () => {
                            n(), t();
                        },
                        popoutProps: s,
                    }),
            })
          : t === x.U5.LEGACY
            ? (0, o.jsx)(p.C, {
                  spacing: 0,
                  targetElementRef: e,
                  popoutPosition: "right",
                  popoutAlign: "top",
                  children: (t, i, s) =>
                      (0, o.jsx)(m, {
                          ref: e,
                          selectedOverride: i,
                          onClick: () => {
                              n(), t();
                          },
                          popoutProps: s,
                      }),
              })
            : null;
}
