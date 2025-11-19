n.d(t, { Z: () => S }), n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    s = n(209739),
    o = n.n(s),
    a = n(793030),
    c = n(481060),
    d = n(579806),
    u = n(358085),
    f = n(960861),
    p = n(39540),
    h = n(152165),
    m = n(615161),
    _ = n(70722),
    g = n(231338),
    x = n(388032),
    v = n(819112);
function j(e) {
    let { id: t, text: n, icon: i, selected: s, onClick: o } = e;
    return (0, r.jsx)(c.P3F, {
        role: "radio",
        "aria-checked": s,
        onClick: () => o(t),
        tabIndex: 0,
        className: l()(v.nativeSourceTypeButton, v.nativePickerRadioItem, { [v.selected]: s }),
        children: (0, r.jsxs)("div", {
            className: v.nativeSourceTypeButtonInner,
            children: [
                (0, r.jsx)(i, { size: "lg" }),
                (0, r.jsx)(a.xvT, {
                    variant: "text-sm/medium",
                    color: "none",
                    children: n,
                }),
            ],
        }),
    });
}
function S(e) {
    let { onSourceSelect: t } = e;
    (0, f.UB)(), (0, p.Z)(t, g.Vq);
    let [{ nativeSourceType: n }, i] = (0, m.E_)(),
        l = (0, u.isMac)() && o().satisfies(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release, _.jR);
    return (0, r.jsxs)("div", {
        className: v.root,
        children: [
            (0, r.jsx)(a.X6q, {
                className: v.header,
                variant: "heading-lg/semibold",
                color: "text-default",
                children: x.intl.string(x.t.XyYoFc),
            }),
            l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.xvT, {
                              className: v.body,
                              variant: "text-sm/medium",
                              color: "text-secondary",
                              children: x.intl.format(x.t.sbbPhW, { buttonName: x.intl.string(x.t.FiBjwU) }),
                          }),
                          (0, r.jsx)(h.Z, {}),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: v.sourceTypeButtons,
                      children: [
                          (0, r.jsx)(j, {
                              selected: "screen" === n,
                              onClick: () => {
                                  i({
                                      type: "set_native_source_type",
                                      sourceType: "screen",
                                  });
                              },
                              id: "screen",
                              text: x.intl.string(x.t.cVUFXY),
                              icon: c.pzj,
                          }),
                          (0, r.jsx)(j, {
                              selected: "window" === n,
                              onClick: () => {
                                  i({
                                      type: "set_native_source_type",
                                      sourceType: "window",
                                  });
                              },
                              id: "window",
                              text: x.intl.string(x.t.dG2A1E),
                              icon: c.GON,
                          }),
                      ],
                  }),
        ],
    });
}
