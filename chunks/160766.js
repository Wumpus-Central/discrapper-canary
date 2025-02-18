n.d(t, { Z: () => r });
var s = n(200651);
n(192379);
var i = n(481060),
    l = n(918701),
    a = n(589978);
let r = (e) => {
    let { quest: t, children: n } = e,
        r = (0, l.xN)(t.config),
        o = (0, l.LM)(t.config);
    return r && null != o
        ? (0, s.jsxs)('div', {
              className: a.questRewardTileContainer,
              children: [
                  (0, s.jsxs)(i.Text, {
                      color: 'always-white',
                      variant: 'text-xs/bold',
                      className: a.questOrbQuantity,
                      children: ['+', o]
                  }),
                  n
              ]
          })
        : n;
};
