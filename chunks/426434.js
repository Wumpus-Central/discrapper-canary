n.d(t, { Z: () => f });
var r = n(255367);
n(73800);
var i = n(392711),
    l = n(442837),
    a = n(481060),
    s = n(230711),
    o = n(601964),
    c = n(496675),
    d = n(594174),
    u = n(434404),
    m = n(449226),
    g = n(981631),
    p = n(388032),
    h = n(296205);
function f(e) {
    let t,
        { guild: n } = e,
        f = n.mfaLevel,
        x = (0, l.e7)([c.Z], () => null != n && c.Z.can(g.Plq.MANAGE_GUILD, n), [n]),
        b = (0, l.e7)([d.default], () => d.default.getCurrentUser()),
        j = (0, o.eM)(n, b),
        v = null == b ? void 0 : b.mfaEnabled,
        _ = f === g.BpS.ELEVATED,
        O = j && v,
        y = (0, i.throttle)(async (e) => {
            O &&
                (await u.Z.updateMFALevel({
                    guildId: n.id,
                    level: e ? g.BpS.ELEVATED : g.BpS.NONE,
                    isEnabled: !e
                }));
        }, 1000);
    if (!x) return null;
    O || (t = j ? p.intl.format(p.t.nFwNyc, { settingsHook: () => s.Z.open(g.oAB.ACCOUNT) }) : p.intl.string(p.t['9Ghu4+']));
    let C = n.features.has(g.oNc.DISCOVERABLE);
    return (0, r.jsxs)('div', {
        className: h.simpleItemWrapper,
        children: [
            (0, r.jsxs)('div', {
                className: h.itemContent,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: p.intl.string(p.t.lbBfER)
                    }),
                    (0, r.jsxs)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [p.intl.string(p.t['a/93Jy']), ' ', t]
                    })
                ]
            }),
            !O || (_ && C)
                ? (0, r.jsx)(a.ua7, {
                      text: C ? p.intl.string(p.t['KG1V/P']) : j ? p.intl.string(p.t.NmsheX) : p.intl.string(p.t.LieBtb),
                      children: (e) =>
                          (0, r.jsx)(m.Z, {
                              checked: _,
                              disabled: !0,
                              onChange: y,
                              className: h.bringToFront,
                              tooltipProps: e
                          })
                  })
                : (0, r.jsx)(m.Z, {
                      checked: _,
                      onChange: y,
                      className: h.bringToFront
                  })
        ]
    });
}
