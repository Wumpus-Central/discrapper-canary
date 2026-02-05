"use strict";
n.d(t, { Z: () => l });
var r = n(627968);
n(64700);
var i = n(115216),
    a = n(786558),
    s = n(799226);
let o = { Wumpus: {}, Background: {} };
function l(e) {
    let { artboard: t = "Wumpus", stateMachine: n, ...l } = e,
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
