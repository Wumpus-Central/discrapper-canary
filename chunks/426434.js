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
    f = n(434404),
    m = n(449226),
    b = n(981631),
    p = n(388032),
    h = n(146473);
function x(e) {
    let t,
        { guild: n } = e,
        x = n.mfaLevel,
        j = (0, l.e7)([u.Z], () => null != n && u.Z.can(b.Plq.MANAGE_GUILD, n), [n]),
        v = (0, l.e7)([g.default], () => g.default.getCurrentUser()),
        O = (0, d.eM)(n, v),
        C = null == v ? void 0 : v.mfaEnabled,
        y = x === b.BpS.ELEVATED,
        N = O && C,
        E = (0, i.throttle)(async (e) => {
            N &&
                (await f.Z.updateMFALevel({
                    guildId: n.id,
                    level: e ? b.BpS.ELEVATED : b.BpS.NONE,
                }));
        }, 1000);
    if (!j) return null;
    N ||
        (t = O
            ? p.intl.format(p.t.nFwNyR, {
                  settingsHook: () => (0, c.openUserSettings)(o.n.ACCOUNT_PANEL, { section: b.oAB.ACCOUNT }),
              })
            : p.intl.string(p.t["9Ghu40"]));
    let I = n.features.has(b.GuildFeatures.DISCOVERABLE);
    return (0, r.jsxs)("div", {
        className: h.simpleItemWrapper,
        children: [
            (0, r.jsxs)("div", {
                className: h.itemContent,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: p.intl.string(p.t.lbBfEQ),
                    }),
                    (0, r.jsxs)(s.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [p.intl.string(p.t["a/93J6"]), " ", t],
                    }),
                ],
            }),
            !N || (y && I)
                ? (0, r.jsx)(a.u, {
                      text: I
                          ? p.intl.string(p.t["KG1V/E"])
                          : O
                            ? p.intl.string(p.t.NmsheT)
                            : p.intl.string(p.t.LieBta),
                      children: (0, r.jsx)(m.Z, {
                          checked: y,
                          disabled: !0,
                          onChange: E,
                          className: h.bringToFront,
                      }),
                  })
                : (0, r.jsx)(m.Z, {
                      checked: y,
                      onChange: E,
                      className: h.bringToFront,
                  }),
        ],
    });
}
