"use strict";
n.d(t, { s: () => o });
var i = n(477900);
n(582128);
let r =
    "https://cdn.discordapp.com/assets/content/431cff901982be5f61cdad9935b62804bb53d9ed428708f9695bbc77094c6437.riv";
var a = n(502377),
    s = n(799226);
let l = {
    HoverLightmode: { posy: "number", posx: "number" },
    BaseGlow: {},
    ButtonFillLightmode: {},
    HoverDarkmode: { posy: "number", posx: "number" },
    BaseGlowRemapped: {},
    ButtonFillDarkmode: {},
};
function o(e) {
    let { artboard: t = "HoverLightmode", stateMachine: n, ...o } = e,
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
