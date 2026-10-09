t.d(r, { U: () => s });
var a = t(477900);
t(582128);
let o =
    "https://cdn.discordapp.com/assets/content/068d7e953bf2dd5c6e2e63bb703245f76c75d991e7f3d14d3216f6e8175d7c79.riv";
var n = t(509482),
    i = t(799226);
let d = {
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
    c = { "Tab Gradient Dawn": ["State Machine 1"], "Nitro VFX": ["State Machine 1"] };
function s(e) {
    let { artboard: r = "Tab Gradient Dawn", stateMachine: t, ...s } = e,
        { status: b, buffer: l } = (0, i.CE)(o),
        p = (0, i.m2)(o);
    return b === i.BW.Loading
        ? null
        : (0, a.jsx)(n.w, {
              ...(p ? { key: "override" } : {}),
              buffer: l,
              artboard: r,
              stateMachine: t,
              artboardProperties: d,
              artboardStateMachines: c,
              ...s,
          });
}
s.riveSrc = o;
