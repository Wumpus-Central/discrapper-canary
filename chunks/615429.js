o.d(e, { R: () => l });
var t = o(627968);
o(64700);
let a =
    "https://cdn.discordapp.com/assets/content/905fd829443af468087dff86c879838d5fc2dba35ccdaa856f6481b1af1d5c74.riv";
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
