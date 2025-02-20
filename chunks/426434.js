n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(392711),
    s = n(442837),
    a = n(481060),
    l = n(230711),
    o = n(496675),
    c = n(594174),
    d = n(434404),
    u = n(449226),
    m = n(981631),
    p = n(388032),
    g = n(412856);
function h(e) {
    let t,
        { guild: n } = e,
        h = n.mfaLevel,
        f = (0, s.e7)([o.Z], () => null != n && o.Z.can(m.Plq.MANAGE_GUILD, n), [n]),
        b = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        x = n.isOwner(b),
        j = null == b ? void 0 : b.mfaEnabled,
        N = h === m.BpS.ELEVATED,
        v = x && j,
        _ = (0, i.throttle)(async (e) => {
            v &&
                (await d.Z.updateMFALevel({
                    guildId: n.id,
                    level: e ? m.BpS.ELEVATED : m.BpS.NONE,
                    isEnabled: !e
                }));
        }, 1000);
    if (!f) return null;
    v || (t = x ? p.NW.format(p.t.nFwNyc, { settingsHook: () => l.Z.open(m.oAB.ACCOUNT) }) : p.NW.string(p.t['9Ghu4+']));
    let O = n.hasFeature(m.oNc.DISCOVERABLE);
    return (0, r.jsxs)('div', {
        className: g.simpleItemWrapper,
        children: [
            (0, r.jsxs)('div', {
                className: g.itemContent,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: p.NW.string(p.t.lbBfER)
                    }),
                    (0, r.jsxs)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [p.NW.string(p.t['a/93Jy']), ' ', t]
                    })
                ]
            }),
            !v || (N && O)
                ? (0, r.jsx)(a.ua7, {
                      text: O ? p.NW.string(p.t['KG1V/P']) : x ? p.NW.string(p.t.NmsheX) : p.NW.string(p.t.LieBtb),
                      children: (e) =>
                          (0, r.jsx)(u.Z, {
                              checked: N,
                              disabled: !0,
                              onChange: _,
                              className: g.bringToFront,
                              tooltipProps: e
                          })
                  })
                : (0, r.jsx)(u.Z, {
                      checked: N,
                      onChange: _,
                      className: g.bringToFront
                  })
        ]
    });
}
