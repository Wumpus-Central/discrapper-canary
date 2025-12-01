n.d(t, { I: () => v }), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(120356),
    o = n.n(i),
    a = n(392711),
    s = n(913793),
    c = n(23893),
    u = n(657707),
    d = n(692547),
    f = n(481060),
    p = n(393903),
    b = n(206403),
    y = n(231338),
    g = n(481446);
function v(e) {
    let {
            title: t,
            collapsedSubtitle: n,
            isExpanded: i,
            onExpandedChange: v,
            onExpandedChangeComplete: m,
            children: h,
            animate: x = !0,
        } = e,
        j = l.useRef(null),
        [O, C] = l.useState(null),
        P = l.useRef(null),
        S = l.useMemo(
            () =>
                null == m
                    ? y.dG
                    : (0, a.debounce)((e) => {
                          null != e.target && m(i);
                      }),
            [i, m],
        );
    (0, p.s)(P, S, [], { enabled: null != m });
    let _ = i && null != O;
    return (
        l.useLayoutEffect(() => {
            null != j.current && null == O && C(j.current.clientHeight);
        }, [O]),
        (0, r.jsxs)(s.pJ, {
            ref: P,
            isExpanded: i,
            onExpandedChange: v,
            children: [
                (0, r.jsx)(b.x, {
                    ref: j,
                    style: null != O ? { minHeight: O } : void 0,
                    title: t,
                    description: _ ? void 0 : n,
                    secondaryTrailingElement: (0, r.jsx)(f.tEY, {
                        children: (0, r.jsx)(c.z, {
                            slot: "trigger",
                            className: g.triggerButton,
                            children: (0, r.jsx)(u.sXD, {
                                className: o()(g.icon, { [g.iconClosed]: !i }),
                                color: d.Z.colors.ICON_LINK,
                            }),
                        }),
                    }),
                    onClick: () => v(!i),
                    headingColor: "text-link",
                }),
                (0, r.jsx)(s.V2, {
                    className: o()(g.panel, { [g.disablePanelAnimation]: !x }),
                    children: (0, r.jsx)(f.Kqy, {
                        gap: 16,
                        padding: { top: 16 },
                        children: h,
                    }),
                }),
            ],
        })
    );
}
