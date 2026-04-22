n.d(t, { T: () => A });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(396478),
    a = n(270003),
    r = n(15285),
    o = n(227309),
    d = n(544028),
    u = n(475380),
    c = n(610215),
    g = n(985018),
    m = n(818050);
function _() {
    let e = (0, s.bG)([d.A], () => d.A.theme);
    return (0, i.jsxs)(l.pp, {
        theme: e,
        className: m.eT,
        children: [
            (0, i.jsx)(l.G8, { darkSrc: n(839628), lightSrc: n(446404), width: 430, height: 250 }),
            (0, i.jsx)(l.SG, { children: g.intl.string(g.t["1yiJwn"]) }),
        ],
    });
}
function A() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = (0, c.a)();
    return 0 === e.length
        ? (0, i.jsx)(_, {})
        : (0, i.jsx)(a.n, {
              children: (0, i.jsx)("div", {
                  children: e.map((e) =>
                      (0, i.jsx)(
                          u.A,
                          { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === o.a7 ? t : void 0 },
                          (0, r.Es)(e),
                      ),
                  ),
              }),
          });
}
