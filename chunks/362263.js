r.d(t, { w: () => l });
var a = r(477900);
r(582128);
let o =
    "https://cdn.discordapp.com/assets/content/b5a7e4dd53b173c7d1f38ddbd65142267a79529a228987d184c858c16c21ddf6.riv";
var i = r(509482),
    n = r(799226);
let s = {
        Artboard: { reducedMotion: "boolean", TextColor: "color", "Fire CountUp": "trigger", DisplayValue: "number" },
    },
    c = { Artboard: ["State Machine 1"] };
function l(e) {
    let { artboard: t = "Artboard", stateMachine: r, ...l } = e,
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
