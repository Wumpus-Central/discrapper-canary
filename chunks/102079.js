a.d(t, { Q: () => u });
var i = a(477900);
a(582128);
let r =
    "https://cdn.discordapp.com/assets/content/a9d4129fe10ee310d96f95d04fbf382b9c26914a30780ebb307e908a826248f2.riv";
var o = a(509482),
    m = a(799226);
let n = {
        "box-wumpus": {},
        "+++1_BOX_nested_comp_0": {},
        "+++1_BOX_nested_comp_4": {},
        "+++1_BOX_nested_comp_1": {},
        "+++1_BOX_nested_comp_2": {},
        "+++1_BOX_nested_comp_3": {},
    },
    g = {
        "box-wumpus": ["State Machine 1"],
        "+++1_BOX_nested_comp_0": [],
        "+++1_BOX_nested_comp_4": [],
        "+++1_BOX_nested_comp_1": [],
        "+++1_BOX_nested_comp_2": [],
        "+++1_BOX_nested_comp_3": [],
    };
function u(e) {
    let { artboard: t = "box-wumpus", stateMachine: a, ...u } = e,
        { status: b, buffer: c } = (0, m.CE)(r),
        I = (0, m.m2)(r);
    return b === m.BW.Loading
        ? null
        : (0, i.jsx)(o.w, {
              ...(I ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: a,
              artboardProperties: n,
              artboardStateMachines: g,
              ...u,
          });
}
u.riveSrc = r;
