n.d(t, { A: () => C });
var i = n(627968);
n(64700);
var s = n(963935),
    l = n(347606),
    r = n(244242),
    a = n(578598),
    o = n(318903),
    d = n(44909),
    c = n(98254),
    u = n(915953),
    m = n(39216),
    g = n(43146),
    _ = n(112715),
    x = n(39043),
    h = n(743961),
    A = n(896005),
    p = n(388773),
    T = n(168493),
    f = n(353667),
    S = n(182884),
    E = n(337998);
function b(e) {
    let { node: t } = e;
    switch (((0, _.Z)(t.initialize), t.type)) {
        case s.Z6.ROOT:
        case s.Z6.SECTION:
        case s.Z6.SIDEBAR_ITEM:
        case s.Z6.TAB_ITEM:
            throw Error(`${t.type} nodes should never be rendered directly`);
        case s.Z6.PANEL:
            return (0, i.jsx)(f.j, { node: t });
        case s.Z6.LIST:
            return (0, i.jsx)(p.A, { node: t });
        case s.Z6.FIELD_SET:
            return (0, i.jsx)(A.A, { node: t });
        case s.Z6.RELATED:
            return (0, i.jsx)(S.A, { node: t });
        case s.Z6.CATEGORY:
            return (0, i.jsx)(h.A, { node: t });
        case s.Z6.ACCORDION:
            return (0, i.jsx)(x.A, { node: t });
        case s.Z6.SPLIT:
            return (0, i.jsx)(E.A, { node: t });
        case s.Z6.TOGGLE:
            return (0, i.jsx)(g.v, { node: t });
        case s.Z6.STATIC:
            return (0, i.jsx)(m.A, { node: t });
        case s.Z6.BUTTON:
            return (0, i.jsx)(a.D, { node: t });
        case s.Z6.SELECT:
            return (0, i.jsx)(c.A, { node: t });
        case s.Z6.RADIO:
            return (0, i.jsx)(d.A, { node: t });
        case s.Z6.SLIDER:
            return (0, i.jsx)(u.A, { node: t });
        case s.Z6.NAVIGATOR:
            return (0, i.jsx)(o.A, { node: t });
        case s.Z6.NESTED_PANEL_NAVIGATOR:
            return (0, i.jsx)(T.A, { node: t });
        case s.Z6.CUSTOM:
            return (0, i.jsx)(r.L, { children: (0, i.jsx)(t.Component, {}) });
    }
}
function C(e) {
    let { node: t } = e;
    return t.type === s.Z6.PANEL
        ? (0, i.jsx)(b, { node: t })
        : (0, i.jsx)(l.A, { node: t, children: (0, i.jsx)(b, { node: t }) });
}
