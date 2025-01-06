n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var r = n(392711),
    l = n(442837),
    a = n(481060),
    s = n(230711),
    o = n(496675),
    c = n(594174),
    d = n(434404),
    u = n(449226),
    m = n(981631),
    h = n(388032),
    g = n(232203);
function x(e) {
    let t,
        { guild: n } = e,
        x = n.mfaLevel,
        p = (0, l.e7)([o.Z], () => null != n && o.Z.can(m.Plq.MANAGE_GUILD, n), [n]),
        f = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        C = n.isOwner(f),
        v = null == f ? void 0 : f.mfaEnabled,
        _ = x === m.BpS.ELEVATED,
        I = C && v,
        N = (0, r.throttle)(async (e) => {
            if (!!I)
                await d.Z.updateMFALevel({
                    guildId: n.id,
                    level: e ? m.BpS.ELEVATED : m.BpS.NONE,
                    isEnabled: !e
                });
        }, 1000);
    if (!p) return null;
    !I && (t = C ? h.intl.format(h.t.nFwNyc, { settingsHook: () => s.Z.open(m.oAB.ACCOUNT) }) : h.intl.string(h.t['9Ghu4+']));
    let T = n.hasFeature(m.oNc.DISCOVERABLE);
    return (0, i.jsxs)('div', {
        className: g.simpleItemWrapper,
        children: [
            (0, i.jsxs)('div', {
                className: g.itemContent,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: 'text-md/semibold',
                        color: 'header-primary',
                        children: h.intl.string(h.t.lbBfER)
                    }),
                    (0, i.jsxs)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-secondary',
                        children: [h.intl.string(h.t['a/93Jy']), ' ', t]
                    })
                ]
            }),
            !I || (_ && T)
                ? (0, i.jsx)(a.Tooltip, {
                      text: T ? h.intl.string(h.t['KG1V/P']) : C ? h.intl.string(h.t.NmsheX) : h.intl.string(h.t.LieBtb),
                      children: (e) =>
                          (0, i.jsx)(u.Z, {
                              checked: _,
                              disabled: !0,
                              onChange: N,
                              className: g.bringToFront,
                              tooltipProps: e
                          })
                  })
                : (0, i.jsx)(u.Z, {
                      checked: _,
                      onChange: N,
                      className: g.bringToFront
                  })
        ]
    });
}
