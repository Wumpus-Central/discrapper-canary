n.d(t, { I: () => h }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n(913793),
    c = n(23893),
    u = n(657707),
    d = n(692547),
    f = n(481060),
    p = n(393903),
    _ = n(206403),
    m = n(481446);
function h(e) {
    let {
            title: t,
            collapsedSubtitle: n,
            isExpanded: a,
            onExpandedChange: h,
            onExpandedChangeComplete: g,
            children: E,
            animate: b = !0,
        } = e,
        y = i.useRef(null),
        [O, v] = i.useState(null),
        S = i.useRef(a),
        I = i.useRef(!1);
    i.useEffect(() => {
        S.current !== a && ((I.current = !0), (S.current = a));
    }, [a]);
    let T = i.useCallback(
            (e) => {
                null != e.target && I.current && ((I.current = !1), null == g || g(a));
            },
            [a, g],
        ),
        C = i.useMemo(() => (0, s.debounce)(T, 50), [T]),
        A = (0, p.y)(C, [], { enabled: null != g }),
        N = a && null != O;
    return (
        i.useLayoutEffect(() => {
            null != y.current && null == O && v(y.current.clientHeight);
        }, [O]),
        (0, r.jsxs)(l.pJ, {
            ref: A,
            isExpanded: a,
            onExpandedChange: h,
            children: [
                (0, r.jsx)(_.x, {
                    ref: y,
                    style: null != O ? { minHeight: O } : void 0,
                    title: t,
                    description: N ? void 0 : n,
                    secondaryTrailingElement: (0, r.jsx)(f.tEY, {
                        children: (0, r.jsx)(c.z, {
                            slot: "trigger",
                            className: m.triggerButton,
                            children: (0, r.jsx)(u.sXD, {
                                className: o()(m.icon, { [m.iconClosed]: !a }),
                                color: d.Z.colors.ICON_LINK,
                            }),
                        }),
                    }),
                    onClick: () => h(!a),
                    headingColor: "text-link",
                }),
                (0, r.jsx)(l.V2, {
                    className: o()(m.panel, { [m.disablePanelAnimation]: !b }),
                    children: (0, r.jsx)(f.Kqy, {
                        gap: 16,
                        padding: { top: 16 },
                        children: E,
                    }),
                }),
            ],
        })
    );
}
