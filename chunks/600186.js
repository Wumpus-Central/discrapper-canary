o.d(e, { Q: () => s });
var t = o(627968);
o(64700);
var a = o(507109),
    i = o(786558),
    n = o(799226);
let l = {
    "box-wumpus": {},
    "+++1_BOX_nested_comp_0": {},
    "+++1_BOX_nested_comp_4": {},
    "+++1_BOX_nested_comp_1": {},
    "+++1_BOX_nested_comp_2": {},
    "+++1_BOX_nested_comp_3": {},
};
function s(r) {
    let { artboard: e = "box-wumpus", stateMachine: o, ...s } = r,
        { status: d, buffer: c } = (0, n.CE)(a.A),
        b = (0, n.m2)(a.A);
    return d === n.BW.Loading
        ? null
        : (0, t.jsx)(i.w, {
              ...(b ? { key: "override" } : {}),
              buffer: c,
              artboard: e,
              stateMachine: o,
              artboardProperties: l,
              ...s,
          });
}
s.riveSrc = a.A;
