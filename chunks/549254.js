o.d(e, { U: () => c });
var t = o(627968);
o(64700);
let n =
    "https://cdn.discordapp.com/assets/content/068d7e953bf2dd5c6e2e63bb703245f76c75d991e7f3d14d3216f6e8175d7c79.riv";
var a = o(502377),
    d = o(799226);
let i = {
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
function c(r) {
    let { artboard: e = "Tab Gradient Dawn", stateMachine: o, ...c } = r,
        { status: s, buffer: b } = (0, d.CE)(n),
        l = (0, d.m2)(n);
    return s === d.BW.Loading
        ? null
        : (0, t.jsx)(a.w, {
              ...(l ? { key: "override" } : {}),
              buffer: b,
              artboard: e,
              stateMachine: o,
              artboardProperties: i,
              ...c,
          });
}
c.riveSrc = n;
