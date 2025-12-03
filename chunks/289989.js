n.d(t, { Z: () => b }), n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    s = n(209739),
    o = n.n(s),
    a = n(793030),
    c = n(481060),
    d = n(579806),
    u = n(131951),
    f = n(358085),
    p = n(960861),
    h = n(39540),
    m = n(152165),
    _ = n(615161),
    g = n(70722),
    x = n(231338),
    v = n(388032),
    j = n(341338);
function S(e) {
    let { id: t, text: n, icon: i, selected: s, onClick: o } = e;
    return (0, r.jsx)(c.P3F, {
        role: "radio",
        "aria-checked": s,
        onClick: () => o(t),
        tabIndex: 0,
        className: l()(j.nativeSourceTypeButton, j.nativePickerRadioItem, { [j.selected]: s }),
        children: (0, r.jsxs)("div", {
            className: j.nativeSourceTypeButtonInner,
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
function b(e) {
    let { onSourceSelect: t } = e;
    (0, p.UB)(), (0, h.Z)(t, x.Vq);
    let [{ nativeSourceType: n }, i] = (0, _.E_)(),
        l = (0, f.isMac)() && o().satisfies(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release, g.jR),
        s = u.Z.getUseGamescopeCapture(),
        b = s ? "gamescope" : "screen";
    return (0, r.jsxs)("div", {
        className: j.root,
        children: [
            (0, r.jsx)(a.X6q, {
                className: j.header,
                variant: "heading-lg/semibold",
                color: "text-default",
                children: v.intl.string(v.t.XyYoFc),
            }),
            l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(a.xvT, {
                              className: j.body,
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: v.intl.format(v.t.sbbPhW, { buttonName: v.intl.string(v.t.FiBjwU) }),
                          }),
                          (0, r.jsx)(m.Z, {}),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: j.sourceTypeButtons,
                      children: [
                          (0, r.jsx)(S, {
                              selected: n === b,
                              onClick: () => {
                                  i({
                                      type: "set_native_source_type",
                                      sourceType: b,
                                  });
                              },
                              id: "screen",
                              text: v.intl.string(v.t.cVUFXY),
                              icon: c.pzj,
                          }),
                          !s &&
                              (0, r.jsx)(S, {
                                  selected: "window" === n,
                                  onClick: () => {
                                      i({
                                          type: "set_native_source_type",
                                          sourceType: "window",
                                      });
                                  },
                                  id: "window",
                                  text: v.intl.string(v.t.dG2A1E),
                                  icon: c.GON,
                              }),
                      ],
                  }),
        ],
    });
}
