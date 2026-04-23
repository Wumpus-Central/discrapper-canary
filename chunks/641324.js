t.d(n, { A: () => k });
var l = t(627968);
t(64700);
var r = t(963935),
    i = t(347606),
    s = t(244242),
    a = t(578598),
    o = t(318903),
    c = t(44909),
    d = t(98254),
    u = t(915953),
    x = t(39216),
    j = t(43146),
    h = t(112715),
    m = t(39043),
    f = t(743961),
    p = t(896005),
    y = t(388773),
    g = t(168493),
    v = t(353667),
    A = t(182884),
    N = t(337998);
function b(e) {
    let { node: n } = e;
    switch (((0, h.Z)(n.initialize), n.type)) {
        case r.Z6.ROOT:
        case r.Z6.SECTION:
        case r.Z6.SIDEBAR_ITEM:
        case r.Z6.TAB_ITEM:
            throw Error(`${n.type} nodes should never be rendered directly`);
        case r.Z6.PANEL:
            return (0, l.jsx)(v.j, { node: n });
        case r.Z6.LIST:
            return (0, l.jsx)(y.A, { node: n });
        case r.Z6.FIELD_SET:
            return (0, l.jsx)(p.A, { node: n });
        case r.Z6.RELATED:
            return (0, l.jsx)(A.A, { node: n });
        case r.Z6.CATEGORY:
            return (0, l.jsx)(f.A, { node: n });
        case r.Z6.ACCORDION:
            return (0, l.jsx)(m.A, { node: n });
        case r.Z6.SPLIT:
            return (0, l.jsx)(N.A, { node: n });
        case r.Z6.TOGGLE:
            return (0, l.jsx)(j.v, { node: n });
        case r.Z6.STATIC:
            return (0, l.jsx)(x.A, { node: n });
        case r.Z6.BUTTON:
            return (0, l.jsx)(a.D, { node: n });
        case r.Z6.SELECT:
            return (0, l.jsx)(d.A, { node: n });
        case r.Z6.RADIO:
            return (0, l.jsx)(c.A, { node: n });
        case r.Z6.SLIDER:
            return (0, l.jsx)(u.A, { node: n });
        case r.Z6.NAVIGATOR:
            return (0, l.jsx)(o.A, { node: n });
        case r.Z6.NESTED_PANEL_NAVIGATOR:
            return (0, l.jsx)(g.A, { node: n });
        case r.Z6.CUSTOM:
            return (0, l.jsx)(s.L, { children: (0, l.jsx)(n.Component, {}) });
    }
}
function k(e) {
    let { node: n } = e;
    return n.type === r.Z6.PANEL
        ? (0, l.jsx)(b, { node: n })
        : (0, l.jsx)(i.A, { node: n, children: (0, l.jsx)(b, { node: n }) });
}
