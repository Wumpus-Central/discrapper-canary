var i = r(200651),
    a = r(192379),
    s = r(481060),
    o = r(594174),
    l = r(111810),
    u = r(287941),
    c = r(477931),
    d = r(235894),
    f = r(388032),
    _ = r(814169);
let h = (e) => {
    var n, r;
    let { message: h } = e,
        p = (0, l.p7)('Message Header') && h.hasPotions(),
        m = null === (n = h.potions) || void 0 === n ? void 0 : n[0],
        g = a.useMemo(() => (null == m ? null : o.default.getUser(m.used_by)), [m]),
        E = a.useCallback(() => {
            (0, d.U)(h) && (0, u.Z)(h);
        }, [h]);
    return p && null != g && (null == m ? void 0 : m.type) === c.B.CONFETTI
        ? (0, i.jsx)(s.Clickable, {
              onFocus: E,
              children: (0, i.jsx)(s.Tooltip, {
                  text: f.intl.formatToPlainString(f.t['FE++aG'], { user: null !== (r = g.globalName) && void 0 !== r ? r : g.username }),
                  children: (e) =>
                      (0, i.jsxs)('div', {
                          className: _.potionBadge,
                          ...e,
                          children: [
                              (0, i.jsx)(s.StarShootingIcon, {
                                  size: 'custom',
                                  color: 'currentColor',
                                  width: 12,
                                  height: 12
                              }),
                              (0, i.jsx)(s.Text, {
                                  variant: 'text-xs/bold',
                                  color: 'currentColor',
                                  children: f.intl.string(f.t['8Rrro6'])
                              })
                          ]
                      })
              })
          })
        : null;
};
n.Z = h;
