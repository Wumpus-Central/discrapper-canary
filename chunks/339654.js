"use strict";
n.d(t, { m: () => l });
var r = n(627968);
n(64700);
var i = n(980441),
    a = n(786558),
    s = n(799226);
let o = { "Icon Dice": { fill: "color", muted: "boolean" } };
function l(e) {
    let { artboard: t = "Icon Dice", stateMachine: n, ...l } = e,
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
