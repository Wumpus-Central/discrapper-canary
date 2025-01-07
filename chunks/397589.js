var i = r(200651),
    a = r(192379),
    s = r(481060),
    o = r(111810),
    l = r(388032),
    u = r(814169);
let c = (e) => {
    let { message: n } = e,
        r = (0, o.p7)('Message Header') && n.hasPotions(),
        c = a.useMemo(() => {
            var e, r;
            return null !== (r = null === (e = n.potions) || void 0 === e ? void 0 : e.length) && void 0 !== r ? r : 0;
        }, [n]);
    return r
        ? (0, i.jsx)(s.Tooltip, {
              text: l.intl.string(c > 1 ? l.t.sNHsqa : l.t.wjLsq6),
              children: (e) =>
                  (0, i.jsxs)('div', {
                      className: u.potionBadge,
                      ...e,
                      children: [
                          (0, i.jsx)(s.PotionIcon, {
                              size: 'custom',
                              color: 'currentColor',
                              width: 12,
                              height: 12
                          }),
                          (0, i.jsx)(s.Text, {
                              variant: 'text-xs/bold',
                              color: 'currentColor',
                              children: l.intl.string(l.t['9rhzMj'])
                          })
                      ]
                  })
          })
        : null;
};
n.Z = c;
