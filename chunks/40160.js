n.d(t, { A: () => E });
var i = n(627968);
n(64700);
var l = n(735438),
    s = n(311907),
    r = n(990078),
    a = n(534514),
    o = n(834730),
    d = n(780964),
    c = n(858897),
    u = n(260509),
    m = n(576705),
    g = n(287809),
    h = n(997509),
    x = n(600955),
    _ = n(652215),
    p = n(985018),
    A = n(101839);
function E(e) {
    let t,
        { guild: n } = e,
        E = n.mfaLevel,
        f = (0, s.bG)([m.A], () => null != n && m.A.can(_.xBc.MANAGE_GUILD, n), [n]),
        j = (0, s.bG)([g.default], () => g.default.getCurrentUser()),
        N = (0, u.bM)(n, j),
        I = j?.mfaEnabled,
        C = E === _.EkJ.ELEVATED,
        b = N && I,
        v = (0, l.throttle)(async (e) => {
            b && (await h.A.updateMFALevel({ guildId: n.id, level: e ? _.EkJ.ELEVATED : _.EkJ.NONE }));
        }, 1e3);
    if (!f) return null;
    b ||
        (t = N
            ? p.intl.format(p.t.nFwNyR, { settingsHook: () => (0, c.openUserSettings)(d.X.ACCOUNT_PANEL) })
            : p.intl.string(p.t["9Ghu40"]));
    let S = n.features.has(_.GuildFeatures.DISCOVERABLE);
    return (0, i.jsxs)("div", {
        className: A.ph,
        children: [
            (0, i.jsxs)("div", {
                className: A.Ly,
                children: [
                    (0, i.jsx)(a.D, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: p.intl.string(p.t.lbBfEQ),
                    }),
                    (0, i.jsxs)(o.E, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [p.intl.string(p.t["a/93J6"]), " ", t],
                    }),
                ],
            }),
            !b || (C && S)
                ? (0, i.jsx)(r.m, {
                      text: S
                          ? p.intl.string(p.t["KG1V/E"])
                          : N
                            ? p.intl.string(p.t.NmsheT)
                            : p.intl.string(p.t.LieBta),
                      children: (0, i.jsx)(x.A, { checked: C, disabled: !0, onChange: v, className: A.R0 }),
                  })
                : (0, i.jsx)(x.A, { checked: C, onChange: v, className: A.R0 }),
        ],
    });
}
