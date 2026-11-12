n.d(e, { U: () => b });
var t = n(477900),
    a = n(582128);
let i =
    "https://cdn.discordapp.com/assets/content/068d7e953bf2dd5c6e2e63bb703245f76c75d991e7f3d14d3216f6e8175d7c79.riv";
var o = n(729901),
    d = n(611361),
    l = n(799226),
    h = n(752540);
let c = {
        "Tab Gradient Dawn": {
            Color_GradientCenter: "color",
            Color_InnerRing: "color",
            Color_OuterRing: "color",
            DimmerWidth: "number",
            NitroVFX: "boolean",
            posX: "number",
        },
        "Nitro VFX": {},
    },
    s = {
        "Tab Gradient Dawn": [
            "3rdParty 1 DarkTheme",
            "3rdParty 1 LightTheme",
            "Nitro DarkTheme",
            "Nitro LightTheme",
            "Standard DarkTheme",
            "Standard LightTheme",
        ],
        "Nitro VFX": [],
    },
    C = { "Tab Gradient Dawn": ["State Machine 1"], "Nitro VFX": ["State Machine 1"] },
    u = {
        "Tab Gradient Dawn": function (r) {
            let { dataBinding: e, onDataBindingChange: n } = r,
                { instance: t, playIfNeeded: a } = (0, d.o)();
            return (
                (0, h.QJ)("Color_GradientCenter", t, e?.Color_GradientCenter, n?.Color_GradientCenter, a),
                (0, h.QJ)("Color_InnerRing", t, e?.Color_InnerRing, n?.Color_InnerRing, a),
                (0, h.QJ)("Color_OuterRing", t, e?.Color_OuterRing, n?.Color_OuterRing, a),
                (0, h.Of)("DimmerWidth", t, e?.DimmerWidth, n?.DimmerWidth, a),
                (0, h.Dr)("NitroVFX", t, e?.NitroVFX, n?.NitroVFX, a),
                (0, h.Of)("posX", t, e?.posX, n?.posX, a),
                null
            );
        },
    };
function b(r) {
    let { artboard: e = "Tab Gradient Dawn", stateMachine: n, dataBinding: d, onDataBindingChange: h, ...b } = r,
        { status: g, buffer: m } = (0, l.CE)(i),
        D = (0, l.m2)(i),
        p = a.useCallback(() => {
            let r = u[e];
            return null == r ? null : (0, t.jsx)(r, { dataBinding: d, onDataBindingChange: h });
        }, [e, d, h]);
    return g === l.BW.Loading
        ? null
        : (0, t.jsx)(o.w, {
              ...(D ? { key: "override" } : {}),
              buffer: m,
              artboard: e,
              stateMachine: n,
              artboardProperties: c,
              artboardViewModelInstances: s,
              artboardStateMachines: C,
              renderDataBinding: p,
              ...b,
          });
}
b.riveSrc = i;
