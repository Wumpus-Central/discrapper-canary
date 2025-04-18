n.d(t, { Z: () => h });
var r = n(200651);
n(192379);
var i = n(392711),
    s = n(442837),
    l = n(481060),
    a = n(230711),
    o = n(496675),
    c = n(594174),
    d = n(434404),
    u = n(449226),
    m = n(981631),
    g = n(388032),
    p = n(542904);
function h(e) {
    let t,
        { guild: n } = e,
        h = n.mfaLevel,
        f = (0, s.e7)([o.Z], () => null != n && o.Z.can(m.Plq.MANAGE_GUILD, n), [n]),
        x = (0, s.e7)([c.default], () => c.default.getCurrentUser()),
        b = n.isOwner(x),
        j = null == x ? void 0 : x.mfaEnabled,
        N = h === m.BpS.ELEVATED,
        _ = b && j,
        v = (0, i.throttle)(async (e) => {
            _ &&
                (await d.Z.updateMFALevel({
                    guildId: n.id,
                    level: e ? m.BpS.ELEVATED : m.BpS.NONE,
                    isEnabled: !e
                }));
        }, 1000);
    if (!f) return null;
    _ || (t = b ? g.NW.format(g.t.nFwNyc, { settingsHook: () => a.Z.open(m.oAB.ACCOUNT) }) : g.NW.string(g.t['9Ghu4+']));
    let O = n.hasFeature(m.oNc.DISCOVERABLE);
    return (0, r.jsxs)('div', {
        className: p.simpleItemWrapper,
        children: [
            (0, r.jsxs)('div', {
                className: p.itemContent,
                children: [
                    (0, r.jsx)(l.X6q, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: g.NW.string(g.t.lbBfER)
                    }),
                    (0, r.jsxs)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [g.NW.string(g.t['a/93Jy']), ' ', t]
                    })
                ]
            }),
            !_ || (N && O)
                ? (0, r.jsx)(l.ua7, {
                      text: O ? g.NW.string(g.t['KG1V/P']) : b ? g.NW.string(g.t.NmsheX) : g.NW.string(g.t.LieBtb),
                      children: (e) =>
                          (0, r.jsx)(u.Z, {
                              checked: N,
                              disabled: !0,
                              onChange: v,
                              className: p.bringToFront,
                              tooltipProps: e
                          })
                  })
                : (0, r.jsx)(u.Z, {
                      checked: N,
                      onChange: v,
                      className: p.bringToFront
                  })
        ]
    });
}
