"use strict";
n.d(t, { U: () => o });
var i = n(627968);
n(64700);
let r =
    "https://cdn.discordapp.com/assets/content/068d7e953bf2dd5c6e2e63bb703245f76c75d991e7f3d14d3216f6e8175d7c79.riv";
var a = n(502377),
    s = n(799226);
let l = {
    "Tab Gradient Dawn": {
        Color_GradientCenter: "color",
        Color_InnerRing: "color",
        Color_OuterRing: "color",
        DimmerWidth: "number",
        NitroVFX: "boolean",
        posX: "number",
    },
    "Nitro VFX": {},
};
function o(e) {
    let { artboard: t = "Tab Gradient Dawn", stateMachine: n, ...o } = e,
        { status: d, buffer: c } = (0, s.CE)(r),
        u = (0, s.m2)(r);
    return d === s.BW.Loading
        ? null
        : (0, i.jsx)(a.w, {
              ...(u ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: n,
              artboardProperties: l,
              ...o,
          });
}
o.riveSrc = r;
