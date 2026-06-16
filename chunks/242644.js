"use strict";
n.d(t, { V: () => l });
var i = n(627968);
n(64700);
let r =
    "https://cdn.discordapp.com/assets/content/bee5073bff85cffaf0f4236456029b067925cd9de6742c5bb582f0ce39f1fa49.riv";
var s = n(594639),
    a = n(105596);
let o = { "Icon Unlock": { reducedMotion: "boolean", locked: "boolean", fill: "color" } };
function l(e) {
    let { artboard: t = "Icon Unlock", stateMachine: n, ...l } = e,
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
