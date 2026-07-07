"use strict";
n.d(t, { s: () => l });
var i = n(627968);
n(64700);
let r =
    "https://cdn.discordapp.com/assets/content/431cff901982be5f61cdad9935b62804bb53d9ed428708f9695bbc77094c6437.riv";
var s = n(594639),
    a = n(105596);
let o = {
    HoverLightmode: { posy: "number", posx: "number" },
    BaseGlow: {},
    ButtonFillLightmode: {},
    HoverDarkmode: { posy: "number", posx: "number" },
    BaseGlowRemapped: {},
    ButtonFillDarkmode: {},
};
function l(e) {
    let { artboard: t = "HoverLightmode", stateMachine: n, ...l } = e,
        { status: u, buffer: c } = (0, a.CE)(r),
        d = (0, a.m2)(r);
    return u === a.BW.Loading
        ? null
        : (0, i.jsx)(s.w, {
              ...(d ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: n,
              artboardProperties: o,
              ...l,
          });
}
l.riveSrc = r;
