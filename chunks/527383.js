a.d(l, { D: () => s });
var t = a(627968);
a(64700);
let o =
    "https://cdn.discordapp.com/assets/content/4e02ee0451e556464805350795ce905d3f1fae8d476d249189c0d236fd312029.riv";
var n = a(502377),
    i = a(799226);
let r = {
    "Boost Server": { reducedMotion: "boolean" },
    "Boost Crystal": { reducedMotion: "boolean" },
    "Crystal Side B": {},
    "Crystal Side A": {},
    "Boost Saved": { reducedMotion: "boolean" },
};
function s(e) {
    let { artboard: l = "Boost Server", stateMachine: a, ...s } = e,
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
