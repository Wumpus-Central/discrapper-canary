e.d(a, { M: () => b });
var t = e(477900);
e(582128);
let c =
    "https://cdn.discordapp.com/assets/content/5ff46e6a38cbffb1450e062ca9e8dcabf8452f6890907b70dc0489fb3ec489de.riv";
var d = e(509482),
    s = e(799226);
let i = { Artboard: {} },
    o = { Artboard: ["stateMachine"] };
function b(r) {
    let { artboard: a = "Artboard", stateMachine: e, ...b } = r,
        { status: n, buffer: p } = (0, s.CE)(c),
        f = (0, s.m2)(c);
    return n === s.BW.Loading
        ? null
        : (0, t.jsx)(d.w, {
              ...(f ? { key: "override" } : {}),
              buffer: p,
              artboard: a,
              stateMachine: e,
              artboardProperties: i,
              artboardStateMachines: o,
              ...b,
          });
}
b.riveSrc = c;
