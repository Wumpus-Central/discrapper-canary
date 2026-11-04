a.d(e, { l: () => l });
var o = a(477900);
a(582128);
let t =
    "https://cdn.discordapp.com/assets/content/0ee832fb7026bd6a854e96096076fc8a7f77a42de83e540b99bcdc33415e97c2.riv";
var i = a(729901),
    n = a(799226);
let d = { "Nitro Referral Confirmation - Old Logo": {} },
    c = { "Nitro Referral Confirmation - Old Logo": [] },
    s = { "Nitro Referral Confirmation - Old Logo": ["State Machine 1"] };
function l(r) {
    let { artboard: e = "Nitro Referral Confirmation - Old Logo", stateMachine: a, ...l } = r,
        { status: f, buffer: b } = (0, n.CE)(t),
        p = (0, n.m2)(t);
    return f === n.BW.Loading
        ? null
        : (0, o.jsx)(i.w, {
              ...(p ? { key: "override" } : {}),
              buffer: b,
              artboard: e,
              stateMachine: a,
              artboardProperties: d,
              artboardViewModelInstances: c,
              artboardStateMachines: s,
              ...l,
          });
}
l.riveSrc = t;
