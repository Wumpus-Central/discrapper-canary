n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(735438),
    l = n(311907),
    s = n(990078),
    a = n(397927),
    c = n(780964),
    o = n(840065),
    d = n(260509),
    u = n(576705),
    f = n(287809),
    g = n(997509),
    b = n(600955),
    m = n(652215),
    p = n(985018),
    x = n(690450);
function h(e) {
    let t,
        { guild: n } = e,
        h = n.mfaLevel,
        j = (0, l.bG)([u.A], () => null != n && u.A.can(m.xBc.MANAGE_GUILD, n), [n]),
        O = (0, l.bG)([f.default], () => f.default.getCurrentUser()),
        y = (0, d.bM)(n, O),
        v = null == O ? void 0 : O.mfaEnabled,
        A = h === m.EkJ.ELEVATED,
        E = y && v,
        N = (0, i.throttle)(async (e) => {
            E &&
                (await g.A.updateMFALevel({
                    guildId: n.id,
                    level: e ? m.EkJ.ELEVATED : m.EkJ.NONE,
                }));
        }, 1000);
    if (!j) return null;
    E ||
        (t = y
            ? p.intl.format(p.t.nFwNyR, {
                  settingsHook: () => (0, o.openUserSettings)(c.X.ACCOUNT_PANEL, { section: m.nc_.ACCOUNT }),
              })
            : p.intl.string(p.t["9Ghu40"]));
    let _ = n.features.has(m.GuildFeatures.DISCOVERABLE);
    return (0, r.jsxs)("div", {
        className: x.ph,
        children: [
            (0, r.jsxs)("div", {
                className: x.Ly,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: p.intl.string(p.t.lbBfEQ),
                    }),
                    (0, r.jsxs)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [p.intl.string(p.t["a/93J6"]), " ", t],
                    }),
                ],
            }),
            !E || (A && _)
                ? (0, r.jsx)(s.m, {
                      text: _
                          ? p.intl.string(p.t["KG1V/E"])
                          : y
                            ? p.intl.string(p.t.NmsheT)
                            : p.intl.string(p.t.LieBta),
                      children: (0, r.jsx)(b.A, {
                          checked: A,
                          disabled: !0,
                          onChange: N,
                          className: x.R0,
                      }),
                  })
                : (0, r.jsx)(b.A, {
                      checked: A,
                      onChange: N,
                      className: x.R0,
                  }),
        ],
    });
}
