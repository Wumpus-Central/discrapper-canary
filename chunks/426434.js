n.d(t, { Z: () => b });
var r = n(951288);
n(647438);
var i = n(392711),
    l = n(442837),
    a = n(481060),
    s = n(313789),
    o = n(518596),
    c = n(601964),
    d = n(496675),
    u = n(594174),
    m = n(434404),
    g = n(449226),
    p = n(981631),
    h = n(388032),
    f = n(824804);
function b(e) {
    let t,
        { guild: n } = e,
        b = n.mfaLevel,
        x = (0, l.e7)([d.Z], () => null != n && d.Z.can(p.Plq.MANAGE_GUILD, n), [n]),
        j = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
        v = (0, c.eM)(n, j),
        _ = null == j ? void 0 : j.mfaEnabled,
        O = b === p.BpS.ELEVATED,
        y = v && _,
        C = (0, i.throttle)(async (e) => {
            y &&
                (await m.Z.updateMFALevel({
                    guildId: n.id,
                    level: e ? p.BpS.ELEVATED : p.BpS.NONE,
                    isEnabled: !e,
                }));
        }, 1000);
    if (!x) return null;
    y ||
        (t = v
            ? h.intl.format(h.t.nFwNyc, {
                  settingsHook: () => (0, o.openUserSettings)(s.n.ACCOUNT_PANEL, { section: p.oAB.ACCOUNT }),
              })
            : h.intl.string(h.t["9Ghu4+"]));
    let N = n.features.has(p.oNc.DISCOVERABLE);
    return (0, r.jsxs)("div", {
        className: f.simpleItemWrapper,
        children: [
            (0, r.jsxs)("div", {
                className: f.itemContent,
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: h.intl.string(h.t.lbBfER),
                    }),
                    (0, r.jsxs)(a.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        children: [h.intl.string(h.t["a/93Jy"]), " ", t],
                    }),
                ],
            }),
            !y || (O && N)
                ? (0, r.jsx)(a.ua7, {
                      text: N
                          ? h.intl.string(h.t["KG1V/P"])
                          : v
                            ? h.intl.string(h.t.NmsheX)
                            : h.intl.string(h.t.LieBtb),
                      children: (e) =>
                          (0, r.jsx)(g.Z, {
                              checked: O,
                              disabled: !0,
                              onChange: C,
                              className: f.bringToFront,
                              tooltipProps: e,
                          }),
                  })
                : (0, r.jsx)(g.Z, {
                      checked: O,
                      onChange: C,
                      className: f.bringToFront,
                  }),
        ],
    });
}
