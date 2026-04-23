a.d(l, { u: () => s });
var t = a(627968);
a(64700);
let o =
    "https://cdn.discordapp.com/assets/content/53eb00aa300595b54d999e60d501f621ad4399918c568561f74b536b6f37c0ab.riv";
var n = a(502377),
    i = a(799226);
let r = { "Nitro Wishlist": { reducedMotion: "boolean", logoColor: "color" } };
function s(e) {
    let { artboard: l = "Nitro Wishlist", stateMachine: a, ...s } = e,
        { status: d, buffer: u } = (0, i.CE)(o),
        c = (0, i.m2)(o);
    return d === i.BW.Loading
        ? null
        : (0, t.jsx)(n.w, {
              ...(c ? { key: "override" } : {}),
              buffer: u,
              artboard: l,
              stateMachine: a,
              artboardProperties: r,
              ...s,
          });
}
s.riveSrc = o;
