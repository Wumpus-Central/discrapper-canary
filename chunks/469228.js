t.d(a, { w: () => u });
var i = t(477900);
t(582128);
let r =
    "https://cdn.discordapp.com/assets/content/b5a7e4dd53b173c7d1f38ddbd65142267a79529a228987d184c858c16c21ddf6.riv";
var m = t(857973),
    o = t(799226);
let g = {
        Artboard: { reducedMotion: "boolean", TextColor: "color", "Fire CountUp": "trigger", DisplayValue: "number" },
    },
    n = { Artboard: ["State Machine 1"] };
function u(e) {
    let { artboard: a = "Artboard", stateMachine: t, ...u } = e,
        { status: b, buffer: c } = (0, o.CE)(r),
        I = (0, o.m2)(r);
    return b === o.BW.Loading
        ? null
        : (0, i.jsx)(m.w, {
              ...(I ? { key: "override" } : {}),
              buffer: c,
              artboard: a,
              stateMachine: t,
              artboardProperties: g,
              artboardStateMachines: n,
              ...u,
          });
}
u.riveSrc = r;
