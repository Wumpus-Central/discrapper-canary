e.d(r, { u: () => n });
var a = e(477900);
e(582128);
let i =
    "https://cdn.discordapp.com/assets/content/53eb00aa300595b54d999e60d501f621ad4399918c568561f74b536b6f37c0ab.riv";
var o = e(509482),
    s = e(799226);
let c = { "Nitro Wishlist": { reducedMotion: "boolean", logoColor: "color" } },
    d = { "Nitro Wishlist": ["State Machine 1"] };
function n(t) {
    let { artboard: r = "Nitro Wishlist", stateMachine: e, ...n } = t,
        { status: b, buffer: h } = (0, s.CE)(i),
        l = (0, s.m2)(i);
    return b === s.BW.Loading
        ? null
        : (0, a.jsx)(o.w, {
              ...(l ? { key: "override" } : {}),
              buffer: h,
              artboard: r,
              stateMachine: e,
              artboardProperties: c,
              artboardStateMachines: d,
              ...n,
          });
}
n.riveSrc = i;
