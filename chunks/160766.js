n.d(t, { Z: () => l });
var r = n(200651);
n(192379);
var s = n(481060),
    i = n(918701),
    o = n(587508);
let l = (e) => {
    let { quest: t, children: n } = e,
        l = (0, i.xN)(t.config),
        a = (0, i.LM)(t.config);
    return l && null != a
        ? (0, r.jsxs)('div', {
              className: o.questRewardTileContainer,
              children: [
                  (0, r.jsxs)(s.Text, {
                      color: 'always-white',
                      variant: 'text-xs/bold',
                      className: o.questOrbQuantity,
                      children: ['+', a]
                  }),
                  n
              ]
          })
        : n;
};
