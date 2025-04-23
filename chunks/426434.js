n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(392711),
    l = n(442837),
    s = n(481060),
    a = n(230711),
    o = n(496675),
    c = n(594174),
    u = n(434404),
    d = n(449226),
    m = n(981631),
    g = n(388032),
    p = n(296205);
function f(e) {
    let t,
        { guild: n } = e,
        f = n.mfaLevel,
        h = (0, l.e7)([o.Z], () => null != n && o.Z.can(m.Plq.MANAGE_GUILD, n), [n]),
        x = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        b = n.isOwner(x),
        j = null == x ? void 0 : x.mfaEnabled,
        _ = f === m.BpS.ELEVATED,
        v = b && j,
        O = (0, i.throttle)(async (e) => {
            v &&
                (await u.Z.updateMFALevel({
                    guildId: n.id,
                    level: e ? m.BpS.ELEVATED : m.BpS.NONE,
                    isEnabled: !e
                }));
        }, 1000);
    if (!h) return null;
    v || (t = b ? g.intl.format(g.t.nFwNyc, { settingsHook: () => a.Z.open(m.oAB.ACCOUNT) }) : g.intl.string(g.t['9Ghu4+']));
    let C = n.hasFeature(m.oNc.DISCOVERABLE);
    return (0, r.jsxs)('div', {
        className: p.simpleItemWrapper,
        children: [
            (0, r.jsxs)('div', {
                className: p.itemContent,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: g.intl.string(g.t.lbBfER)
                    }),
                    (0, r.jsxs)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [g.intl.string(g.t['a/93Jy']), ' ', t]
                    })
                ]
            }),
            !v || (_ && C)
                ? (0, r.jsx)(s.ua7, {
                      text: C ? g.intl.string(g.t['KG1V/P']) : b ? g.intl.string(g.t.NmsheX) : g.intl.string(g.t.LieBtb),
                      children: (e) =>
                          (0, r.jsx)(d.Z, {
                              checked: _,
                              disabled: !0,
                              onChange: O,
                              className: p.bringToFront,
                              tooltipProps: e
                          })
                  })
                : (0, r.jsx)(d.Z, {
                      checked: _,
                      onChange: O,
                      className: p.bringToFront
                  })
        ]
    });
}
