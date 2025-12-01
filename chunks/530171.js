n.d(t, { I: () => b }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(913793),
    s = n(23893),
    c = n(657707),
    u = n(692547),
    d = n(481060),
    f = n(206403),
    p = n(481446);
function b(e) {
    let { title: t, collapsedSubtitle: n, isOpen: i, setIsOpen: b, children: y, animate: g = !0 } = e,
        v = l.useRef(null),
        [m, h] = l.useState(null),
        x = i && null != m;
    return (
        l.useLayoutEffect(() => {
            null != v.current && null == m && h(v.current.clientHeight);
        }, [m]),
        (0, r.jsxs)(a.pJ, {
            isExpanded: i,
            onExpandedChange: b,
            children: [
                (0, r.jsx)(f.x, {
                    ref: v,
                    style: null != m ? { minHeight: m } : void 0,
                    title: t,
                    description: x ? void 0 : n,
                    secondaryTrailingElement: (0, r.jsx)(d.tEY, {
                        children: (0, r.jsx)(s.z, {
                            slot: "trigger",
                            className: p.triggerButton,
                            children: (0, r.jsx)(c.sXD, {
                                className: o()(p.icon, { [p.iconClosed]: !i }),
                                color: u.Z.colors.ICON_LINK,
                            }),
                        }),
                    }),
                    onClick: () => b(!i),
                    headingColor: "text-link",
                }),
                (0, r.jsx)(a.V2, {
                    className: o()(p.panel, { [p.disablePanelAnimation]: !g }),
                    children: (0, r.jsx)(d.Kqy, {
                        gap: 16,
                        padding: { top: 16 },
                        children: y,
                    }),
                }),
            ],
        })
    );
}
