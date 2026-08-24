"use strict";
n.d(t, { s: () => o });
var i = n(477900);
n(582128);
let r =
    "https://cdn.discordapp.com/assets/content/bd712b6e0f8e5ee33f7f102f7bb02e40850fe06ccdf425523f3093c838ef6a28.riv";
var a = n(502377),
    s = n(799226);
let l = {
    HoverDarkmode: { posy: "number", posx: "number" },
    ButtonFillDarkmode: {},
    BaseGlowRemapped: {},
    BaseGlow: {},
    HoverLightmode: { posy: "number", posx: "number" },
    ButtonFillLightmode: {},
};
function o(e) {
    let { artboard: t = "HoverDarkmode", stateMachine: n, ...o } = e,
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
