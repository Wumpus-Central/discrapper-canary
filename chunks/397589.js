var i = r(200651),
    a = r(192379),
    s = r(481060),
    o = r(111810),
    l = r(287941),
    u = r(235894),
    c = r(388032),
    d = r(814169);
let f = (e) => {
    let { message: n } = e,
        r = (0, o.p7)('Message Header') && n.hasPotions(),
        f = a.useMemo(() => {
            var e, r;
            return null !== (r = null === (e = n.potions) || void 0 === e ? void 0 : e.length) && void 0 !== r ? r : 0;
        }, [n]),
        _ = a.useCallback(() => {
            (0, u.U)(n) && (0, l.Z)(n);
        }, [n]);
    return r
        ? (0, i.jsx)(s.Clickable, {
              onFocus: _,
              children: (0, i.jsx)(s.Tooltip, {
                  text: c.intl.string(f > 1 ? c.t.sNHsqa : c.t.wjLsq6),
                  children: (e) =>
                      (0, i.jsxs)('div', {
                          className: d.potionBadge,
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
                                  children: c.intl.string(c.t['9rhzMj'])
                              })
                          ]
                      })
              })
          })
        : null;
};
n.Z = f;
