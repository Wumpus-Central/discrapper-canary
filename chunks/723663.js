"use strict";
n.d(t, { r: () => l });
var r = n(627968);
n(64700);
var i = n(943362),
    a = n(786558),
    s = n(799226);
let o = { "Surprise Me": { fill: "color" } };
function l(e) {
    let { artboard: t = "Surprise Me", stateMachine: n, ...l } = e,
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
