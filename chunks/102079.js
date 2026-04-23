o.d(e, { Q: () => l });
var t = o(627968);
o(64700);
let a =
    "https://cdn.discordapp.com/assets/content/a9d4129fe10ee310d96f95d04fbf382b9c26914a30780ebb307e908a826248f2.riv";
var i = o(502377),
    n = o(799226);
let s = {
    "box-wumpus": {},
    "+++1_BOX_nested_comp_0": {},
    "+++1_BOX_nested_comp_4": {},
    "+++1_BOX_nested_comp_1": {},
    "+++1_BOX_nested_comp_2": {},
    "+++1_BOX_nested_comp_3": {},
};
function l(r) {
    let { artboard: e = "box-wumpus", stateMachine: o, ...l } = r,
        { status: c, buffer: b } = (0, n.CE)(a),
        d = (0, n.m2)(a);
    return c === n.BW.Loading
        ? null
        : (0, t.jsx)(i.w, {
              ...(d ? { key: "override" } : {}),
              buffer: b,
              artboard: e,
              stateMachine: o,
              artboardProperties: s,
              ...l,
          });
}
l.riveSrc = a;
