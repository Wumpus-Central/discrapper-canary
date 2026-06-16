"use strict";
n.d(t, { Z: () => l });
var i = n(627968);
n(64700);
let r =
    "https://cdn.discordapp.com/assets/content/8a7ac8dc9047bab64168144f5a3b303136a96b175530939355c8612193350419.riv";
var s = n(594639),
    a = n(105596);
let o = { Torbs_Main: {} };
function l(e) {
    let { artboard: t = "Torbs_Main", stateMachine: n, ...l } = e,
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
