t.d(a, { a: () => i });
var r = t(477900);
t(582128);
let o =
    "https://cdn.discordapp.com/assets/content/1f36d546a4ac8054dbd6ab0384a6aa4bf3c574c8b435c58e0e4e8d922a0a4cce.riv";
var n = t(509482),
    d = t(799226);
let s = { "Bounties Illo Hands": { reducedMotion: "boolean" }, "Orb shine": { reducedMotion: "boolean" } },
    c = { "Bounties Illo Hands": ["State Machine 1"], "Orb shine": ["SM_Orb"] };
function i(e) {
    let { artboard: a = "Bounties Illo Hands", stateMachine: t, ...i } = e,
        { status: b, buffer: l } = (0, d.CE)(o),
        u = (0, d.m2)(o);
    return b === d.BW.Loading
        ? null
        : (0, r.jsx)(n.w, {
              ...(u ? { key: "override" } : {}),
              buffer: l,
              artboard: a,
              stateMachine: t,
              artboardProperties: s,
              artboardStateMachines: c,
              ...i,
          });
}
i.riveSrc = o;
