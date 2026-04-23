a.d(l, { U: () => s });
var t = a(627968);
a(64700);
let o =
    "https://cdn.discordapp.com/assets/content/068d7e953bf2dd5c6e2e63bb703245f76c75d991e7f3d14d3216f6e8175d7c79.riv";
var n = a(502377),
    i = a(799226);
let r = {
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
function s(e) {
    let { artboard: l = "Tab Gradient Dawn", stateMachine: a, ...s } = e,
        { status: d, buffer: u } = (0, i.CE)(o),
        c = (0, i.m2)(o);
    return d === i.BW.Loading
        ? null
        : (0, t.jsx)(n.w, {
              ...(c ? { key: "override" } : {}),
              buffer: u,
              artboard: l,
              stateMachine: a,
              artboardProperties: r,
              ...s,
          });
}
s.riveSrc = o;
