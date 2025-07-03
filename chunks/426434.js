n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(392711),
    l = n(442837),
    s = n(481060),
    a = n(230711),
    o = n(601964),
    c = n(496675),
    d = n(594174),
    u = n(434404),
    m = n(449226),
    g = n(981631),
    p = n(388032),
    f = n(296205);
function h(e) {
    let t,
        { guild: n } = e,
        h = n.mfaLevel,
        x = (0, l.e7)([c.Z], () => null != n && c.Z.can(g.Plq.MANAGE_GUILD, n), [n]),
        b = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        j = (0, o.eM)(n, b),
        _ = null == b ? void 0 : b.mfaEnabled,
        v = h === g.BpS.ELEVATED,
        O = j && _,
        C = (0, i.throttle)(async (e) => {
            O &&
                (await u.Z.updateMFALevel({
                    guildId: n.id,
                    level: e ? g.BpS.ELEVATED : g.BpS.NONE,
                    isEnabled: !e
                }));
        }, 1000);
    if (!x) return null;
    O || (t = j ? p.intl.format(p.t.nFwNyc, { settingsHook: () => a.Z.open(g.oAB.ACCOUNT) }) : p.intl.string(p.t['9Ghu4+']));
    let y = n.features.has(g.oNc.DISCOVERABLE);
    return (0, r.jsxs)('div', {
        className: f.simpleItemWrapper,
        children: [
            (0, r.jsxs)('div', {
                className: f.itemContent,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: p.intl.string(p.t.lbBfER)
                    }),
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [p.intl.string(p.t['a/93Jy']), ' ', t]
                    })
                ]
            }),
            !O || (v && y)
                ? (0, r.jsx)(s.ua7, {
                      text: y ? p.intl.string(p.t['KG1V/P']) : j ? p.intl.string(p.t.NmsheX) : p.intl.string(p.t.LieBtb),
                      children: (e) =>
                          (0, r.jsx)(m.Z, {
                              checked: v,
                              disabled: !0,
                              onChange: C,
                              className: f.bringToFront,
                              tooltipProps: e
                          })
                  })
                : (0, r.jsx)(m.Z, {
                      checked: v,
                      onChange: C,
                      className: f.bringToFront
                  })
        ]
    });
}
