"use strict";
n.d(t, { A: () => A });
var i = n(627968);
n(64700);
var s = n(735438),
    l = n(311907),
    r = n(990078),
    a = n(397927),
    o = n(780964),
    d = n(840065),
    c = n(260509),
    u = n(576705),
    m = n(287809),
    g = n(997509),
    x = n(600955),
    h = n(652215),
    _ = n(985018),
    p = n(690450);
function A(e) {
    let t,
        { guild: n } = e,
        A = n.mfaLevel,
        f = (0, l.bG)([u.A], () => null != n && u.A.can(h.xBc.MANAGE_GUILD, n), [n]),
        j = (0, l.bG)([m.default], () => m.default.getCurrentUser()),
        N = (0, c.bM)(n, j),
        E = j?.mfaEnabled,
        b = A === h.EkJ.ELEVATED,
        T = N && E,
        C = (0, s.throttle)(async (e) => {
            T && (await g.A.updateMFALevel({ guildId: n.id, level: e ? h.EkJ.ELEVATED : h.EkJ.NONE }));
        }, 1e3);
    if (!f) return null;
    T ||
        (t = N
            ? _.intl.format(_.t.nFwNyR, { settingsHook: () => (0, d.openUserSettings)(o.X.ACCOUNT_PANEL) })
            : _.intl.string(_.t["9Ghu40"]));
    let I = n.features.has(h.GuildFeatures.DISCOVERABLE);
    return (0, i.jsxs)("div", {
        className: p.ph,
        children: [
            (0, i.jsxs)("div", {
                className: p.Ly,
                children: [
                    (0, i.jsx)(a.Heading, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: _.intl.string(_.t.lbBfEQ),
                    }),
                    (0, i.jsxs)(a.Text, {
                        variant: "text-sm/medium",
                        color: "text-default",
                        children: [_.intl.string(_.t["a/93J6"]), " ", t],
                    }),
                ],
            }),
            !T || (b && I)
                ? (0, i.jsx)(r.m, {
                      text: I
                          ? _.intl.string(_.t["KG1V/E"])
                          : N
                            ? _.intl.string(_.t.NmsheT)
                            : _.intl.string(_.t.LieBta),
                      children: (0, i.jsx)(x.A, { checked: b, disabled: !0, onChange: C, className: p.R0 }),
                  })
                : (0, i.jsx)(x.A, { checked: b, onChange: C, className: p.R0 }),
        ],
    });
}
