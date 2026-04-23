o.d(e, { r: () => s });
var t = o(627968);
o(64700);
var a = o(943362),
    i = o(786558),
    n = o(799226);
let l = { "Surprise Me": { fill: "color" } };
function s(r) {
    let { artboard: e = "Surprise Me", stateMachine: o, ...s } = r,
        { status: d, buffer: c } = (0, n.CE)(a.A),
        b = (0, n.m2)(a.A);
    return d === n.BW.Loading
        ? null
        : (0, t.jsx)(i.w, {
              ...(b ? { key: "override" } : {}),
              buffer: c,
              artboard: e,
              stateMachine: o,
              artboardProperties: l,
              ...s,
          });
}
s.riveSrc = a.A;
