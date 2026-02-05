n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var s = n(963935),
    r = n(347606),
    a = n(244242),
    l = n(578598),
    o = n(318903),
    c = n(44909),
    d = n(98254),
    u = n(915953),
    _ = n(39216),
    m = n(43146),
    A = n(112715),
    g = n(39043),
    E = n(743961),
    h = n(896005),
    p = n(388773),
    C = n(691116),
    x = n(353667),
    T = n(182884),
    I = n(115617);
function S(e) {
    let { node: t } = e;
    switch (((0, A.Z)(t.initialize), t.type)) {
        case s.Z6.ROOT:
        case s.Z6.SECTION:
        case s.Z6.SIDEBAR_ITEM:
        case s.Z6.TAB_ITEM:
            throw Error(`${t.type} nodes should never be rendered directly`);
        case s.Z6.PANEL:
            return (0, i.jsx)(x.j, { node: t });
        case s.Z6.LIST:
            return (0, i.jsx)(p.A, { node: t });
        case s.Z6.FIELD_SET:
            return (0, i.jsx)(h.A, { node: t });
        case s.Z6.RELATED:
            return (0, i.jsx)(T.A, { node: t });
        case s.Z6.CATEGORY:
            return (0, i.jsx)(E.A, { node: t });
        case s.Z6.ACCORDION:
            return (0, i.jsx)(g.A, { node: t });
        case s.Z6.SPLIT:
            return (0, i.jsx)(I.A, { node: t });
        case s.Z6.TOGGLE:
            return (0, i.jsx)(m.v, { node: t });
        case s.Z6.STATIC:
            return (0, i.jsx)(_.A, { node: t });
        case s.Z6.BUTTON:
            return (0, i.jsx)(l.D, { node: t });
        case s.Z6.SELECT:
            return (0, i.jsx)(d.A, { node: t });
        case s.Z6.RADIO:
            return (0, i.jsx)(c.A, { node: t });
        case s.Z6.SLIDER:
            return (0, i.jsx)(u.A, { node: t });
        case s.Z6.NAVIGATOR:
            return (0, i.jsx)(o.A, { node: t });
        case s.Z6.NESTED_PANEL:
            return (0, i.jsx)(C.A, { node: t });
        case s.Z6.CUSTOM:
            return (0, i.jsx)(a.L, { children: (0, i.jsx)(t.Component, {}) });
    }
}
function f(e) {
    let { node: t } = e;
    return t.type === s.Z6.PANEL
        ? (0, i.jsx)(S, { node: t })
        : (0, i.jsx)(r.A, { node: t, children: (0, i.jsx)(S, { node: t }) });
}
