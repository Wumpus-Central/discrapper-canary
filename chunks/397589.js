var i = r(200651),
    a = r(192379),
    s = r(481060),
    o = r(111810),
    l = r(287941),
    u = r(388032),
    c = r(814169);
let d = (e) => {
    let { message: n } = e,
        r = (0, o.p7)('Message Header') && n.hasPotions(),
        d = a.useMemo(() => {
            var e, r;
            return null !== (r = null === (e = n.potions) || void 0 === e ? void 0 : e.length) && void 0 !== r ? r : 0;
        }, [n]),
        f = a.useCallback(() => {
            n.hasPotions() && (0, l.Z)(n);
        }, [n]);
    return r
        ? (0, i.jsx)(s.Clickable, {
              onFocus: f,
              children: (0, i.jsx)(s.Tooltip, {
                  text: u.intl.string(d > 1 ? u.t.sNHsqa : u.t.wjLsq6),
                  children: (e) =>
                      (0, i.jsxs)('div', {
                          className: c.potionBadge,
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
                                  children: u.intl.string(u.t['9rhzMj'])
                              })
                          ]
                      })
              })
          })
        : null;
};
n.Z = d;
