n.d(t, {
    A: () => x,
}),
    n(65821);
var r = n(627968);
n(64700);
var i = n(963935),
    l = n(347606),
    s = n(244242),
    a = n(578598),
    o = n(318903),
    c = n(44909),
    d = n(98254),
    u = n(915953),
    _ = n(39216),
    p = n(43146),
    m = n(112715),
    g = n(39043),
    A = n(743961),
    f = n(896005),
    b = n(388773),
    h = n(353667),
    E = n(182884),
    O = n(115617);

function C(e) {
    let { node: t } = e;
    switch (((0, m.Z)(t.initialize), t.type)) {
        case i.Z6.ROOT:
        case i.Z6.SECTION:
        case i.Z6.SIDEBAR_ITEM:
        case i.Z6.TAB_ITEM:
            throw Error("".concat(t.type, " nodes should never be rendered directly"));
        case i.Z6.PANEL:
            return (0, r.jsx)(h.j, {
                node: t,
            });
        case i.Z6.LIST:
            return (0, r.jsx)(b.A, {
                node: t,
            });
        case i.Z6.FIELD_SET:
            return (0, r.jsx)(f.A, {
                node: t,
            });
        case i.Z6.RELATED:
            return (0, r.jsx)(E.A, {
                node: t,
            });
        case i.Z6.CATEGORY:
            return (0, r.jsx)(A.A, {
                node: t,
            });
        case i.Z6.ACCORDION:
            return (0, r.jsx)(g.A, {
                node: t,
            });
        case i.Z6.SPLIT:
            return (0, r.jsx)(O.A, {
                node: t,
            });
        case i.Z6.TOGGLE:
            return (0, r.jsx)(p.v, {
                node: t,
            });
        case i.Z6.STATIC:
            return (0, r.jsx)(_.A, {
                node: t,
            });
        case i.Z6.BUTTON:
            return (0, r.jsx)(a.D, {
                node: t,
            });
        case i.Z6.SELECT:
            return (0, r.jsx)(d.A, {
                node: t,
            });
        case i.Z6.RADIO:
            return (0, r.jsx)(c.A, {
                node: t,
            });
        case i.Z6.SLIDER:
            return (0, r.jsx)(u.A, {
                node: t,
            });
        case i.Z6.NAVIGATOR:
            return (0, r.jsx)(o.A, {
                node: t,
            });
        case i.Z6.CUSTOM:
            return (0, r.jsx)(s.L, {
                children: (0, r.jsx)(t.Component, {}),
            });
    }
}

function x(e) {
    let { node: t } = e;
    return t.type === i.Z6.PANEL
        ? (0, r.jsx)(C, {
              node: t,
          })
        : (0, r.jsx)(l.A, {
              node: t,
              children: (0, r.jsx)(C, {
                  node: t,
              }),
          });
}
