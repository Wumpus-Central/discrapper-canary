"use strict";
n.d(t, { u: () => l });
var i = n(627968);
n(64700);
let r =
    "https://cdn.discordapp.com/assets/content/53eb00aa300595b54d999e60d501f621ad4399918c568561f74b536b6f37c0ab.riv";
var s = n(594639),
    a = n(105596);
let o = { "Nitro Wishlist": { reducedMotion: "boolean", logoColor: "color" } };
function l(e) {
    let { artboard: t = "Nitro Wishlist", stateMachine: n, ...l } = e,
        { status: u, buffer: c } = (0, a.CE)(r),
        d = (0, a.m2)(r);
    return u === a.BW.Loading
        ? null
        : (0, i.jsx)(s.w, {
              ...(d ? { key: "override" } : {}),
              buffer: c,
              artboard: t,
              stateMachine: n,
              artboardProperties: o,
              ...l,
          });
}
l.riveSrc = r;
