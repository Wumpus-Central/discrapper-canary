o.d(c, { V: () => s });
var a = o(477900);
o(582128);
let t =
    "https://cdn.discordapp.com/assets/content/bee5073bff85cffaf0f4236456029b067925cd9de6742c5bb582f0ce39f1fa49.riv";
var r = o(845867),
    n = o(799226);
let d = { "Icon Unlock": { reducedMotion: "boolean", locked: "boolean", fill: "color" } },
    i = { "Icon Unlock": ["State Machine 1"] };
function s(e) {
    let { artboard: c = "Icon Unlock", stateMachine: o, ...s } = e,
        { status: l, buffer: b } = (0, n.CE)(t),
        f = (0, n.m2)(t);
    return l === n.BW.Loading
        ? null
        : (0, a.jsx)(r.w, {
              ...(f ? { key: "override" } : {}),
              buffer: b,
              artboard: c,
              stateMachine: o,
              artboardProperties: d,
              artboardStateMachines: i,
              ...s,
          });
}
s.riveSrc = t;
