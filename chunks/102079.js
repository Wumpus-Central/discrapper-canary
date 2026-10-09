r.d(t, { Q: () => l });
var a = r(477900);
r(582128);
let o =
    "https://cdn.discordapp.com/assets/content/a9d4129fe10ee310d96f95d04fbf382b9c26914a30780ebb307e908a826248f2.riv";
var i = r(509482),
    n = r(799226);
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
function l(e) {
    let { artboard: t = "box-wumpus", stateMachine: r, ...l } = e,
        { status: b, buffer: d } = (0, n.CE)(o),
        u = (0, n.m2)(o);
    return b === n.BW.Loading
        ? null
        : (0, a.jsx)(i.w, {
              ...(u ? { key: "override" } : {}),
              buffer: d,
              artboard: t,
              stateMachine: r,
              artboardProperties: s,
              artboardStateMachines: c,
              ...l,
          });
}
l.riveSrc = o;
