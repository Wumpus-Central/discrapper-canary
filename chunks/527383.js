a.d(t, { D: () => n });
var o = a(477900);
a(582128);
let r =
    "https://cdn.discordapp.com/assets/content/4e02ee0451e556464805350795ce905d3f1fae8d476d249189c0d236fd312029.riv";
var d = a(845867),
    s = a(799226);
let i = {
        "Boost Server": { reducedMotion: "boolean" },
        "Boost Crystal": { reducedMotion: "boolean" },
        "Crystal Side B": {},
        "Crystal Side A": {},
        "Boost Saved": { reducedMotion: "boolean" },
    },
    c = {
        "Boost Server": ["State Machine 1"],
        "Boost Crystal": ["State Machine 1"],
        "Crystal Side B": ["State Machine 1"],
        "Crystal Side A": ["State Machine 1"],
        "Boost Saved": ["State Machine 1"],
    };
function n(e) {
    let { artboard: t = "Boost Server", stateMachine: a, ...n } = e,
        { status: S, buffer: l } = (0, s.CE)(r),
        h = (0, s.m2)(r);
    return S === s.BW.Loading
        ? null
        : (0, o.jsx)(d.w, {
              ...(h ? { key: "override" } : {}),
              buffer: l,
              artboard: t,
              stateMachine: a,
              artboardProperties: i,
              artboardStateMachines: c,
              ...n,
          });
}
n.riveSrc = r;
