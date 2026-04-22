a.d(t, { i: () => s });
var l = a(627968);
a(64700);
var n = a(697431),
    i = a(786558),
    r = a(799226);
let d = { "Emoji Neg": {}, "Emoji Mid": {}, "Emoji Happy": {} };
function s(e) {
    let { artboard: t = "Emoji Neg", stateMachine: a, ...s } = e,
        { status: u, buffer: o } = (0, r.CE)(n.A),
        b = (0, r.m2)(n.A);
    return u === r.BW.Loading
        ? null
        : (0, l.jsx)(i.w, {
              ...(b ? { key: "override" } : {}),
              buffer: o,
              artboard: t,
              stateMachine: a,
              artboardProperties: d,
              ...s,
          });
}
s.riveSrc = n.A;
