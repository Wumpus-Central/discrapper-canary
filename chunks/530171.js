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
    let { title: t, collapsedSubtitle: n, isOpen: i, setIsOpen: b, children: y } = e,
        v = l.useRef(null),
        [g, h] = l.useState(null),
        m = i && null != g;
    return (
        l.useLayoutEffect(() => {
            null != v.current && null == g && h(v.current.clientHeight);
        }, [g]),
        (0, r.jsxs)(a.pJ, {
            isExpanded: i,
            onExpandedChange: b,
            children: [
                (0, r.jsx)(f.x, {
                    ref: v,
                    style: null != g ? { minHeight: g } : void 0,
                    title: t,
                    description: m ? void 0 : n,
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
                    className: p.panel,
                    children: y,
                }),
            ],
        })
    );
}
