n.d(t, { Z: () => b });
var r = n(951288);
n(647438);
var i = n(392711),
    l = n(442837),
    s = n(28664),
    a = n(481060),
    o = n(313789),
    c = n(518596),
    d = n(601964),
    u = n(496675),
    m = n(594174),
    g = n(434404),
    p = n(449226),
    f = n(981631),
    h = n(388032),
    x = n(824804);
function b(e) {
    let t,
        { guild: n } = e,
        b = n.mfaLevel,
        j = (0, l.e7)([u.Z], () => null != n && u.Z.can(f.Plq.MANAGE_GUILD, n), [n]),
        _ = (0, l.e7)([m.default], () => m.default.getCurrentUser()),
        v = (0, d.eM)(n, _),
        C = null == _ ? void 0 : _.mfaEnabled,
        O = b === f.BpS.ELEVATED,
        y = v && C,
        N = (0, i.throttle)(async (e) => {
            y &&
                (await g.Z.updateMFALevel({
                    guildId: n.id,
                    level: e ? f.BpS.ELEVATED : f.BpS.NONE,
                    isEnabled: !e,
                }));
        }, 1000);
    if (!j) return null;
    y ||
        (t = v
            ? h.intl.format(h.t.nFwNyc, {
                  settingsHook: () => (0, c.openUserSettings)(o.n.ACCOUNT_PANEL, { section: f.oAB.ACCOUNT }),
              })
            : h.intl.string(h.t["9Ghu4+"]));
    let E = n.features.has(f.oNc.DISCOVERABLE);
    return (0, r.jsxs)("div", {
        className: x.simpleItemWrapper,
        children: [
            (0, r.jsxs)("div", {
                className: x.itemContent,
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
            !y || (O && E)
                ? (0, r.jsx)(s.u, {
                      text: E
                          ? h.intl.string(h.t["KG1V/P"])
                          : v
                            ? h.intl.string(h.t.NmsheX)
                            : h.intl.string(h.t.LieBtb),
                      children: (0, r.jsx)(p.Z, {
                          checked: O,
                          disabled: !0,
                          onChange: N,
                          className: x.bringToFront,
                      }),
                  })
                : (0, r.jsx)(p.Z, {
                      checked: O,
                      onChange: N,
                      className: x.bringToFront,
                  }),
        ],
    });
}
