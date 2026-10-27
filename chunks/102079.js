r.d(t, { Q: () => d });
var a = r(477900);
r(582128);
let o =
    "https://cdn.discordapp.com/assets/content/a9d4129fe10ee310d96f95d04fbf382b9c26914a30780ebb307e908a826248f2.riv";
var n = r(509482),
    i = r(799226);
let s = {
        "box-wumpus": {},
        "+++1_BOX_nested_comp_0": {},
        "+++1_BOX_nested_comp_4": {},
        "+++1_BOX_nested_comp_1": {},
        "+++1_BOX_nested_comp_2": {},
        "+++1_BOX_nested_comp_3": {},
    },
    c = {
        "box-wumpus": ["State Machine 1"],
        "+++1_BOX_nested_comp_0": [],
        "+++1_BOX_nested_comp_4": [],
        "+++1_BOX_nested_comp_1": [],
        "+++1_BOX_nested_comp_2": [],
        "+++1_BOX_nested_comp_3": [],
    };
function d(e) {
    let { artboard: t = "box-wumpus", stateMachine: r, ...d } = e,
        { status: l, buffer: u } = (0, i.CE)(o),
        b = (0, i.m2)(o);
    return l === i.BW.Loading
        ? null
        : (0, a.jsx)(n.w, {
              ...(b ? { key: "override" } : {}),
              buffer: u,
              artboard: t,
              stateMachine: r,
              artboardProperties: s,
              artboardStateMachines: c,
              ...d,
          });
}
d.riveSrc = o;
