n.d(t, { A: () => A }), n(65821);
var r = n(627968);
n(64700);
var i = n(963935),
    a = n(347606),
    s = n(244242),
    o = n(578598),
    l = n(318903),
    c = n(44909),
    u = n(98254),
    d = n(915953),
    f = n(39216),
    p = n(43146),
    _ = n(39043),
    h = n(743961),
    m = n(896005),
    g = n(388773),
    E = n(353667),
    b = n(182884),
    y = n(115617);
function O(e) {
    let { node: t } = e;
    switch (t.type) {
        case i.Z6.ROOT:
        case i.Z6.SECTION:
        case i.Z6.SIDEBAR_ITEM:
        case i.Z6.TAB_ITEM:
            throw Error("".concat(t.type, " nodes should never be rendered directly"));
        case i.Z6.PANEL:
            return (0, r.jsx)(E.j, { node: t });
        case i.Z6.LIST:
            return (0, r.jsx)(g.A, { node: t });
        case i.Z6.FIELD_SET:
            return (0, r.jsx)(m.A, { node: t });
        case i.Z6.RELATED:
            return (0, r.jsx)(b.A, { node: t });
        case i.Z6.CATEGORY:
            return (0, r.jsx)(h.A, { node: t });
        case i.Z6.ACCORDION:
            return (0, r.jsx)(_.A, { node: t });
        case i.Z6.SPLIT:
            return (0, r.jsx)(y.A, { node: t });
        case i.Z6.TOGGLE:
            return (0, r.jsx)(p.v, { node: t });
        case i.Z6.STATIC:
            return (0, r.jsx)(f.A, { node: t });
        case i.Z6.BUTTON:
            return (0, r.jsx)(o.D, { node: t });
        case i.Z6.SELECT:
            return (0, r.jsx)(u.A, { node: t });
        case i.Z6.RADIO:
            return (0, r.jsx)(c.A, { node: t });
        case i.Z6.SLIDER:
            return (0, r.jsx)(d.A, { node: t });
        case i.Z6.NAVIGATOR:
            return (0, r.jsx)(l.A, { node: t });
        case i.Z6.CUSTOM:
            return (0, r.jsx)(s.L, { children: (0, r.jsx)(t.Component, {}) });
    }
}
function A(e) {
    let { node: t } = e;
    return t.type === i.Z6.PANEL
        ? (0, r.jsx)(O, { node: t })
        : (0, r.jsx)(a.A, {
              node: t,
              children: (0, r.jsx)(O, { node: t }),
          });
}
