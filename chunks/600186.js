"use strict";
n.d(t, { Q: () => l });
var r = n(627968);
n(64700);
var i = n(507109),
    a = n(786558),
    s = n(799226);
let o = {
    "box-wumpus": {},
    "+++1_BOX_nested_comp_0": {},
    "+++1_BOX_nested_comp_4": {},
    "+++1_BOX_nested_comp_1": {},
    "+++1_BOX_nested_comp_2": {},
    "+++1_BOX_nested_comp_3": {},
};
function l(e) {
    let { artboard: t = "box-wumpus", stateMachine: n, ...l } = e,
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
