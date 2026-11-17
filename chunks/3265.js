t.d(e, { Q: () => s });
var a = t(477900);
t(582128);
let o =
    "https://cdn.discordapp.com/assets/content/a9d4129fe10ee310d96f95d04fbf382b9c26914a30780ebb307e908a826248f2.riv";
var i = t(729901),
    r = t(799226);
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
    c = {
        "box-wumpus": ["State Machine 1"],
        "+++1_BOX_nested_comp_0": [],
        "+++1_BOX_nested_comp_4": [],
        "+++1_BOX_nested_comp_1": [],
        "+++1_BOX_nested_comp_2": [],
        "+++1_BOX_nested_comp_3": [],
    };
function s(n) {
    let { artboard: e = "box-wumpus", stateMachine: t, ...s } = n,
        { status: u, buffer: b } = (0, r.CE)(o),
        f = (0, r.m2)(o);
    return u === r.BW.Loading
        ? null
        : (0, a.jsx)(i.w, {
              ...(f ? { key: "override" } : {}),
              buffer: b,
              artboard: e,
              stateMachine: t,
              artboardProperties: l,
              artboardViewModelInstances: d,
              artboardStateMachines: c,
              ...s,
          });
}
s.riveSrc = o;
