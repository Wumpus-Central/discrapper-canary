n.d(t, { PR: () => j });
var r = n(477900),
    l = n(582128),
    i = n(503698),
    a = n.n(i),
    u = n(120692),
    o = n(855986),
    s = n(876230),
    d = n(403581),
    c = n(834730),
    f = n(866665),
    m = n(939249),
    p = n(287809),
    g = n(448645);
let h = (0, n(945810).mj)({
    name: "2026-11-nitro-upload-badge",
    kind: "user",
    defaultConfig: { showNitroUploadBadge: !1 },
    variations: { 0: { showNitroUploadBadge: !1 }, 1: { showNitroUploadBadge: !0 } },
});
var b = n(925056),
    y = n(192308),
    C = n(621488),
    v = n(792996),
    x = n(600502);
let S = "nitro-upload-badge";
function E(e) {
    let { visible: t, animSpring: l, size: i, requiredPremiumType: h } = e,
        b = (0, o.bG)([p.default], () => {
            let e = p.default.getCurrentUser();
            return (0, g.TW)(e) ? (e?.premiumType ?? null) : null;
        }),
        E = (0, g.CC)(b, h),
        k = v.intl.string(C.default.BokMhV),
        _ = v.intl.string(C.default.lCx19K),
        j = a()(x.qS, { [x.EX]: i === s.oA.SM, [x.bG]: !E }),
        w = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(d.NitroWheelIcon, { size: "xs", color: "currentColor" }),
                (0, r.jsx)(c.E, {
                    variant: i === s.oA.SM ? "footnote/semibold" : "body-xs/semibold",
                    color: "none",
                    children: k,
                }),
            ],
        });
    return (0, r.jsx)(u.animated.div, {
        style: {
            opacity: (0, u.to)([l.to({ range: [0, 1], output: [0, 1] })], (e) => `${t ? e : Math.pow(e, 8)}`),
            display: "flex",
            pointerEvents: t ? "auto" : "none",
        },
        children: (0, r.jsx)(f.m, {
            text: _,
            shouldShow: t,
            position: "bottom",
            children: E
                ? (0, r.jsx)("div", { className: j, "data-testid": S, children: w })
                : (0, r.jsx)(m.D, {
                      className: j,
                      "aria-label": _,
                      "data-testid": S,
                      onClick: (e) => {
                          (e.stopPropagation(),
                              (function (e) {
                                  let { viewerPremiumType: t } = e;
                                  (0, y.mM)(async () => {
                                      let { default: e } = await n.e(320699).then(n.bind(n, 232118));
                                      return (n) => (0, r.jsx)(e, { ...n, viewerPremiumType: t });
                                  });
                              })({ viewerPremiumType: b }));
                      },
                      children: w,
                  }),
        }),
    });
}
function k(e) {
    let { surface: t, ...n } = e,
        { showNitroUploadBadge: l } = (function (e) {
            let { location: t } = e;
            return h.useConfig({ location: t });
        })({ location: (0, b.b)(t) });
    return l ? (0, r.jsx)(E, { ...n }) : null;
}
function _(e) {
    let [t, n] = l.useState(e.visible);
    return (e.visible && !t && n(!0), t) ? (0, r.jsx)(k, { ...e }) : null;
}
function j(e, t) {
    if (null != e) return (n) => (0, r.jsx)(_, { ...n, surface: t, requiredPremiumType: e });
}
