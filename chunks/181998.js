a.d(l, { U: () => s });
var t = a(627968);
a(64700);
var o = a(71465),
    n = a(786558),
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
        { status: d, buffer: u } = (0, i.CE)(o.A),
        c = (0, i.m2)(o.A);
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
s.riveSrc = o.A;
