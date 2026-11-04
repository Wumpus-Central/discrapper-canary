n.d(t, { w: () => c });
var i = n(477900);
n(582128);
let r =
    "https://cdn.discordapp.com/assets/content/0e8095ebdbf89e1289f83a859a892a5790e8a76949d9bf9bb02e4dfc16190d10.riv";
var a = n(729901),
    s = n(799226);
let l = {
        "Teen Screen Time Illo": {},
        "Gradient Vertical": {},
        "RAW ILLO (Do not deploy)": {},
        "Gradient Horizontal": {},
    },
    o = {
        "Teen Screen Time Illo": [],
        "Gradient Vertical": [],
        "RAW ILLO (Do not deploy)": [],
        "Gradient Horizontal": [],
    },
    d = {
        "Teen Screen Time Illo": ["State Machine 1"],
        "Gradient Vertical": ["State Machine 1"],
        "RAW ILLO (Do not deploy)": ["State Machine 1"],
        "Gradient Horizontal": ["State Machine 1"],
    };
function c(e) {
    let { artboard: t = "Teen Screen Time Illo", stateMachine: n, ...c } = e,
        { status: u, buffer: _ } = (0, s.CE)(r),
        E = (0, s.m2)(r);
    return u === s.BW.Loading
        ? null
        : (0, i.jsx)(a.w, {
              ...(E ? { key: "override" } : {}),
              buffer: _,
              artboard: t,
              stateMachine: n,
              artboardProperties: l,
              artboardViewModelInstances: o,
              artboardStateMachines: d,
              ...c,
          });
}
c.riveSrc = r;
