"use strict";
n.d(t, { u: () => o });
var i = n(627968);
n(64700);
let r =
    "https://cdn.discordapp.com/assets/content/53eb00aa300595b54d999e60d501f621ad4399918c568561f74b536b6f37c0ab.riv";
var a = n(502377),
    s = n(799226);
let l = { "Nitro Wishlist": { reducedMotion: "boolean", logoColor: "color" } };
function o(e) {
    let { artboard: t = "Nitro Wishlist", stateMachine: n, ...o } = e,
        { status: d, buffer: c } = (0, s.CE)(r),
        u = (0, s.m2)(r);
    return d === s.BW.Loading
        ? null
        : (0, i.jsx)(a.w, {
              ...(u ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: n,
              artboardProperties: l,
              ...o,
          });
}
o.riveSrc = r;
