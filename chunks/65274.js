i.d(a, { i: () => p });
var t = i(477900);
i(582128);
let o =
    "https://cdn.discordapp.com/assets/content/087fb34ba986c4c0e0ed4973e0a2e7cc730de3a715dfed275d9533742484f3b4.riv";
var r = i(729901),
    d = i(799226);
let c = { "Emoji Neg": {}, "Emoji Mid": {}, "Emoji Happy": {} },
    s = { "Emoji Neg": [], "Emoji Mid": [], "Emoji Happy": [] },
    n = { "Emoji Neg": ["State Machine"], "Emoji Mid": ["State Machine"], "Emoji Happy": ["State Machine"] };
function p(e) {
    let { artboard: a = "Emoji Neg", stateMachine: i, ...p } = e,
        { status: m, buffer: h } = (0, d.CE)(o),
        j = (0, d.m2)(o);
    return m === d.BW.Loading
        ? null
        : (0, t.jsx)(r.w, {
              ...(j ? { key: "override" } : {}),
              buffer: h,
              artboard: a,
              stateMachine: i,
              artboardProperties: c,
              artboardViewModelInstances: s,
              artboardStateMachines: n,
              ...p,
          });
}
p.riveSrc = o;
