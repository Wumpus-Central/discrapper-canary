o.d(e, { Z: () => l });
var t = o(627968);
o(64700);
let a =
    "https://cdn.discordapp.com/assets/content/354f49a6e211c21e698aad050121ad8b21a568e18f0e117346fded7089ebc51b.riv";
var i = o(502377),
    n = o(799226);
let s = { Wumpus: {}, Background: {} };
function l(r) {
    let { artboard: e = "Wumpus", stateMachine: o, ...l } = r,
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
