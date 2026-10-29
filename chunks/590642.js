e.d(a, { m: () => b });
var i = e(477900);
e(582128);
let t =
    "https://cdn.discordapp.com/assets/content/ce09db302fba4b6308baf379d0cbd02ee57cbf2503a998192e31df9637cc161e.riv";
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
