n.d(e, { Q: () => u });
var o = n(477900);
n(582128);
let a =
    "https://cdn.discordapp.com/assets/content/a9d4129fe10ee310d96f95d04fbf382b9c26914a30780ebb307e908a826248f2.riv";
var i = n(729901),
    r = n(799226);
let l = {
        "box-wumpus": {},
        "+++1_BOX_nested_comp_0": {},
        "+++1_BOX_nested_comp_4": {},
        "+++1_BOX_nested_comp_1": {},
        "+++1_BOX_nested_comp_2": {},
        "+++1_BOX_nested_comp_3": {},
    },
    d = {
        "box-wumpus": [],
        "+++1_BOX_nested_comp_0": [],
        "+++1_BOX_nested_comp_4": [],
        "+++1_BOX_nested_comp_1": [],
        "+++1_BOX_nested_comp_2": [],
        "+++1_BOX_nested_comp_3": [],
    },
    s = {
        "box-wumpus": ["State Machine 1"],
        "+++1_BOX_nested_comp_0": [],
        "+++1_BOX_nested_comp_4": [],
        "+++1_BOX_nested_comp_1": [],
        "+++1_BOX_nested_comp_2": [],
        "+++1_BOX_nested_comp_3": [],
    };
function u(t) {
    let { artboard: e = "box-wumpus", stateMachine: n, ...u } = t,
        { status: c, buffer: g } = (0, r.CE)(a),
        b = (0, r.m2)(a);
    return c === r.BW.Loading
        ? null
        : (0, o.jsx)(i.w, {
              ...(b ? { key: "override" } : {}),
              buffer: g,
              artboard: e,
              stateMachine: n,
              artboardProperties: l,
              artboardViewModelInstances: d,
              artboardStateMachines: s,
              ...u,
          });
}
u.riveSrc = a;
