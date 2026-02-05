"use strict";
n.d(t, { s: () => l });
var r = n(627968);
n(64700);
var i = n(524007),
    a = n(786558),
    s = n(799226);
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
        { status: u, buffer: c } = (0, s.CE)(i.A),
        d = (0, s.m2)(i.A);
    return u === s.BW.Loading
        ? null
        : (0, r.jsx)(a.w, {
              ...(d ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: n,
              artboardProperties: o,
              ...l,
          });
}
l.riveSrc = i.A;
