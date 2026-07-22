"use strict";
n.d(t, { Z: () => o });
var i = n(627968);
n(64700);
let r =
    "https://cdn.discordapp.com/assets/content/8a7ac8dc9047bab64168144f5a3b303136a96b175530939355c8612193350419.riv";
var a = n(502377),
    s = n(799226);
let l = { Torbs_Main: {} };
function o(e) {
    let { artboard: t = "Torbs_Main", stateMachine: n, ...o } = e,
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
