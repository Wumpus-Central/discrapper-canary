n.d(t, { Z: () => x });
var r = n(54381);
n(473749);
var i = n(392711),
    l = n(442837),
    a = n(28664),
    s = n(481060),
    o = n(313789),
    c = n(518596),
    d = n(601964),
    u = n(496675),
    g = n(594174),
    m = n(434404),
    p = n(449226),
    f = n(981631),
    h = n(388032),
    b = n(824804);
function x(e) {
    let t,
        { guild: n } = e,
        x = n.mfaLevel,
        j = (0, l.e7)([u.Z], () => null != n && u.Z.can(f.Plq.MANAGE_GUILD, n), [n]),
        _ = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        v = (0, d.eM)(n, _),
        O = null == _ ? void 0 : _.mfaEnabled,
        C = x === f.BpS.ELEVATED,
        y = v && O,
        N = (0, i.throttle)(async (e) => {
            y &&
                (await m.Z.updateMFALevel({
                    guildId: n.id,
                    level: e ? f.BpS.ELEVATED : f.BpS.NONE,
                }));
        }, 1000);
    if (!j) return null;
    y ||
        (t = v
            ? h.intl.format(h.t.nFwNyR, {
                  settingsHook: () => (0, c.openUserSettings)(o.n.ACCOUNT_PANEL, { section: f.oAB.ACCOUNT }),
              })
            : h.intl.string(h.t["9Ghu40"]));
    let E = n.features.has(f.GuildFeatures.DISCOVERABLE);
    return (0, r.jsxs)("div", {
        className: b.simpleItemWrapper,
        children: [
            (0, r.jsxs)("div", {
                className: b.itemContent,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "text-md/semibold",
                        color: "header-primary",
                        children: h.intl.string(h.t.lbBfEQ),
                    }),
                    (0, r.jsxs)(s.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        children: [h.intl.string(h.t["a/93J6"]), " ", t],
                    }),
                ],
            }),
            !y || (C && E)
                ? (0, r.jsx)(a.u, {
                      text: E
                          ? h.intl.string(h.t["KG1V/E"])
                          : v
                            ? h.intl.string(h.t.NmsheT)
                            : h.intl.string(h.t.LieBta),
                      children: (0, r.jsx)(p.Z, {
                          checked: C,
                          disabled: !0,
                          onChange: N,
                          className: b.bringToFront,
                      }),
                  })
                : (0, r.jsx)(p.Z, {
                      checked: C,
                      onChange: N,
                      className: b.bringToFront,
                  }),
        ],
    });
}
