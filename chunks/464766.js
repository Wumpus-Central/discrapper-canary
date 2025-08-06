t.d(n, { Z: () => d }), t(539854);
var l = t(255367),
    i = t(73800),
    r = t(120356),
    o = t.n(r),
    c = t(481060),
    s = t(765305),
    a = t(388032),
    u = t(645331);
function d(e) {
    let { onClose: n, selectedTab: t, onTabSelected: r, userCount: d, hasBanner: _, isHub: f = !1 } = e,
        h = i.useRef(null);
    i.useEffect(() => {
        var e, n, t;
        return null == (t = h.current) || null == (n = t.ref) || null == (e = n.blur) ? void 0 : e.call(n);
    }, []);
    let g = a.intl.formatToPlainString(a.t["ZrTT/P"], { userCount: d }),
        m = [
            (0, l.jsx)(
                c.njP.Item,
                {
                    className: u.tabBarItem,
                    id: s.fL.EVENT_INFO,
                    children: a.intl.string(a.t.iW6Xur),
                },
                "event-details",
            ),
        ];
    return (
        f ||
            m.push(
                (0, l.jsx)(
                    c.njP.Item,
                    {
                        className: u.tabBarItem,
                        id: s.fL.RSVP_LIST,
                        children: g,
                    },
                    "is-hub",
                ),
            ),
        (0, l.jsxs)("div", {
            className: u.container,
            children: [
                (0, l.jsx)(c.P3F, {
                    ref: h,
                    onClick: n,
                    className: u.closeButton,
                    "aria-label": a.intl.string(a.t.cpT0Cg),
                    children: (0, l.jsx)(c.Dio, {
                        size: "md",
                        color: "currentColor",
                        className: o()(u.closeIcon, _ && u.closeIconBanner),
                    }),
                }),
                (0, l.jsx)(c.njP, {
                    className: u.tabBar,
                    "aria-label": a.intl.string(a.t["+1H47u"]),
                    selectedItem: t,
                    type: "top",
                    onItemSelect: r,
                    children: m,
                }),
            ],
        })
    );
}
