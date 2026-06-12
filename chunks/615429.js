a.d(r, { R: () => o });
var t = a(627968);
a(64700);
let d =
    "https://cdn.discordapp.com/assets/content/905fd829443af468087dff86c879838d5fc2dba35ccdaa856f6481b1af1d5c74.riv";
var c = a(594639),
    s = a(105596);
let n = { Wumpus: {}, Background: {} };
function o(e) {
    let { artboard: r = "Wumpus", stateMachine: a, ...o } = e,
        { status: u, buffer: i } = (0, s.CE)(d),
        p = (0, s.m2)(d);
    return u === s.BW.Loading
        ? null
        : (0, t.jsx)(c.w, {
              ...(p ? { key: "override" } : {}),
              buffer: i,
              artboard: r,
              stateMachine: a,
              artboardProperties: n,
              ...o,
          });
}
o.riveSrc = d;
