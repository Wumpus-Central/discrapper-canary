e.d(a, { w: () => b });
var i = e(477900);
e(582128);
let t =
    "https://cdn.discordapp.com/assets/content/b5a7e4dd53b173c7d1f38ddbd65142267a79529a228987d184c858c16c21ddf6.riv";
var o = e(509482),
    n = e(799226);
let l = {
        Artboard: { reducedMotion: "boolean", TextColor: "color", "Fire CountUp": "trigger", DisplayValue: "number" },
    },
    s = { Artboard: ["State Machine 1"] };
function b(r) {
    let { artboard: a = "Artboard", stateMachine: e, ...b } = r,
        { status: c, buffer: m } = (0, n.CE)(t),
        v = (0, n.m2)(t);
    return c === n.BW.Loading
        ? null
        : (0, i.jsx)(o.w, {
              ...(v ? { key: "override" } : {}),
              buffer: m,
              artboard: a,
              stateMachine: e,
              artboardProperties: l,
              artboardStateMachines: s,
              ...b,
          });
}
b.riveSrc = t;
