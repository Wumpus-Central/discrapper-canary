n.d(t, { Z: () => a });
var r = n(200651);
n(192379);
var s = n(481060),
    o = n(918701),
    i = n(835965);
let a = (e) => {
    let { quest: t, children: n } = e,
        a = (0, o.xN)(t.config),
        l = (0, o.LM)(t.config);
    return a && null != l
        ? (0, r.jsxs)('div', {
              className: i.questRewardTileContainer,
              children: [
                  (0, r.jsxs)(s.Text, {
                      color: 'always-white',
                      variant: 'text-xs/bold',
                      className: i.questOrbQuantity,
                      children: ['+', l]
                  }),
                  n
              ]
          })
        : n;
};
