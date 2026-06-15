t.d(e, { U: () => c });
var a = t(627968);
t(64700);
let o =
    "https://cdn.discordapp.com/assets/content/068d7e953bf2dd5c6e2e63bb703245f76c75d991e7f3d14d3216f6e8175d7c79.riv";
var n = t(594639),
    d = t(105596);
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
    let { artboard: e = "Tab Gradient Dawn", stateMachine: t, ...c } = r,
        { status: s, buffer: b } = (0, d.CE)(o),
        l = (0, d.m2)(o);
    return s === d.BW.Loading
        ? null
        : (0, a.jsx)(n.w, {
              ...(l ? { key: "override" } : {}),
              buffer: b,
              artboard: e,
              stateMachine: t,
              artboardProperties: i,
              ...c,
          });
}
c.riveSrc = o;
