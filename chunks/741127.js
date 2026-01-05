n.d(t, { Z: () => y }), n(388685);
var r = n(54381);
n(473749);
var i = n(120356),
    s = n.n(i),
    l = n(209739),
    o = n.n(l),
    c = n(793030),
    a = n(481060),
    d = n(579806),
    u = n(131951),
    f = n(358085),
    h = n(960861),
    p = n(39540),
    x = n(443762),
    m = n(152165),
    g = n(70722),
    v = n(231338),
    j = n(388032),
    _ = n(371848);
function b(e) {
    let { id: t, text: n, icon: i, selected: l, onClick: o } = e;
    return (0, r.jsx)(a.P3F, {
        role: "radio",
        "aria-checked": l,
        onClick: () => o(t),
        tabIndex: 0,
        className: s()(_.nativeSourceTypeButton, _.nativePickerRadioItem, { [_.selected]: l }),
        children: (0, r.jsxs)("div", {
            className: _.nativeSourceTypeButtonInner,
            children: [
                (0, r.jsx)(i, { size: "lg" }),
                (0, r.jsx)(c.xvT, {
                    variant: "text-sm/medium",
                    color: "none",
                    children: n,
                }),
            ],
        }),
    });
}
function y(e) {
    let { onSourceSelect: t } = e;
    (0, h.UB)(), (0, p.Z)(t, v.Vq);
    let [{ nativeSourceType: n }, i] = (0, x.E_)(),
        s = (0, f.isMac)() && o().satisfies(null === d.Z || void 0 === d.Z ? void 0 : d.Z.os.release, g.jR),
        l = u.Z.getUseGamescopeCapture(),
        y = l ? "gamescope" : "screen";
    return (0, r.jsxs)("div", {
        className: _.root,
        children: [
            (0, r.jsx)(c.X6q, {
                className: _.header,
                variant: "heading-lg/semibold",
                color: "text-default",
                children: j.intl.string(j.t.XyYoFc),
            }),
            s
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(c.xvT, {
                              className: _.body,
                              variant: "text-sm/medium",
                              color: "text-subtle",
                              children: j.intl.format(j.t.sbbPhW, { buttonName: j.intl.string(j.t.FiBjwU) }),
                          }),
                          (0, r.jsx)(m.Z, {}),
                      ],
                  })
                : (0, r.jsxs)("div", {
                      className: _.sourceTypeButtons,
                      children: [
                          (0, r.jsx)(b, {
                              selected: n === y,
                              onClick: () => {
                                  i({
                                      type: "set_native_source_type",
                                      sourceType: y,
                                  });
                              },
                              id: "screen",
                              text: j.intl.string(j.t.cVUFXY),
                              icon: a.pzj,
                          }),
                          !l &&
                              (0, r.jsx)(b, {
                                  selected: "window" === n,
                                  onClick: () => {
                                      i({
                                          type: "set_native_source_type",
                                          sourceType: "window",
                                      });
                                  },
                                  id: "window",
                                  text: j.intl.string(j.t.dG2A1E),
                                  icon: a.GON,
                              }),
                      ],
                  }),
        ],
    });
}
