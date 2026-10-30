r.d(t, { PR: () => j });
var n = r(477900),
    l = r(582128),
    a = r(503698),
    i = r.n(a),
    u = r(941143),
    o = r(17928),
    s = r(876230),
    d = r(403581),
    c = r(834730),
    f = r(866665),
    m = r(939249),
    p = r(287809),
    g = r(24482);
let h = (0, r(945810).mj)({
    name: "2026-11-nitro-upload-badge",
    kind: "user",
    defaultConfig: { showNitroUploadBadge: !1 },
    variations: { 0: { showNitroUploadBadge: !1 }, 1: { showNitroUploadBadge: !0 } },
});
var b = r(925056),
    x = r(192308),
    C = r(212524),
    y = r(105292),
    v = r(600502);
let E = "nitro-upload-badge";
function S(e) {
    let { visible: t, animSpring: l, size: a, requiredPremiumType: h } = e,
        b = (0, o.bG)([p.default], () => {
            let e = p.default.getCurrentUser();
            return (0, g.TW)(e) ? (e?.premiumType ?? null) : null;
        }),
        S = (0, g.CC)(b, h),
        _ = y.intl.string(C.default.BokMhV),
        k = y.intl.string(C.default.lCx19K),
        j = i()(v.qS, { [v.EX]: a === s.oA.SM, [v.bG]: !S }),
        P = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(d.t, { size: "xs", color: "currentColor" }),
                (0, n.jsx)(c.E, {
                    variant: a === s.oA.SM ? "text-xxs/semibold" : "text-xs/semibold",
                    color: "none",
                    children: _,
                }),
            ],
        });
    return (0, n.jsx)(u.animated.div, {
        style: {
            opacity: (0, u.to)([l.to({ range: [0, 1], output: [0, 1] })], (e) => `${t ? e : Math.pow(e, 8)}`),
            display: "flex",
            pointerEvents: t ? "auto" : "none",
        },
        children: (0, n.jsx)(f.m, {
            text: k,
            shouldShow: t,
            position: "bottom",
            children: S
                ? (0, n.jsx)("div", { className: j, "data-testid": E, children: P })
                : (0, n.jsx)(m.D, {
                      className: j,
                      "aria-label": k,
                      "data-testid": E,
                      onClick: (e) => {
                          (e.stopPropagation(),
                              (function (e) {
                                  let { viewerPremiumType: t } = e;
                                  (0, x.openModalLazy)(async () => {
                                      let { default: e } = await r.e("320699").then(r.bind(r, 232118));
                                      return (r) => (0, n.jsx)(e, { ...r, viewerPremiumType: t });
                                  });
                              })({ viewerPremiumType: b }));
                      },
                      children: P,
                  }),
        }),
    });
}
function _(e) {
    let { surface: t, ...r } = e,
        { showNitroUploadBadge: l } = (function (e) {
            let { location: t } = e;
            return h.useConfig({ location: t });
        })({ location: (0, b.b)(t) });
    return l ? (0, n.jsx)(S, { ...r }) : null;
}
function k(e) {
    let [t, r] = l.useState(e.visible);
    return (e.visible && !t && r(!0), t) ? (0, n.jsx)(_, { ...e }) : null;
}
function j(e, t) {
    if (null != e) return (r) => (0, n.jsx)(k, { ...r, surface: t, requiredPremiumType: e });
}
