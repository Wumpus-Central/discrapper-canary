n.d(t, { T: () => g });
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(15285),
    r = n(227309),
    o = n(544028),
    d = n(475380),
    c = n(610215),
    u = n(985018),
    m = n(473169);
function _() {
    let e = (0, s.bG)([o.A], () => o.A.theme);
    return (0, i.jsxs)(l.ppr, {
        theme: e,
        className: m.eT,
        children: [
            (0, i.jsx)(l.G8R, { darkSrc: n(839628), lightSrc: n(446404), width: 430, height: 250 }),
            (0, i.jsx)(l.SGT, { children: u.intl.string(u.t["1yiJwn"]) }),
        ],
    });
}
function g() {
    let { gameHistory: e, robloxSubgameHistory: t, overrideExePaths: n } = (0, c.a)();
    return 0 === e.length
        ? (0, i.jsx)(_, {})
        : (0, i.jsx)(l.nVY, {
              children: (0, i.jsx)("div", {
                  children: e.map((e) =>
                      (0, i.jsx)(
                          d.A,
                          { rawGame: e, isOverride: n.has(e.exePath), subgames: e.id === r.a7 ? t : void 0 },
                          (0, a.Es)(e),
                      ),
                  ),
              }),
          });
}
