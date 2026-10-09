t.d(e, { s: () => f });
var r = t(477900);
t(582128);
let c =
    "https://cdn.discordapp.com/assets/content/fac02dd925a746a61291e1f604a8affff663e9d8a22cd9b21749991ff745f1f2.riv";
var d = t(509482),
    s = t(799226);
let i = { "STACKED COINS": {}, "SINGLE COIN": {} },
    n = { "STACKED COINS": ["State Machine 1"], "SINGLE COIN": ["State Machine 1"] };
function f(a) {
    let { artboard: e = "STACKED COINS", stateMachine: t, ...f } = a,
        { status: o, buffer: S } = (0, s.CE)(c),
        p = (0, s.m2)(c);
    return o === s.BW.Loading
        ? null
        : (0, r.jsx)(d.w, {
              ...(p ? { key: "override" } : {}),
              buffer: S,
              artboard: e,
              stateMachine: t,
              artboardProperties: i,
              artboardStateMachines: n,
              ...f,
          });
}
f.riveSrc = c;
