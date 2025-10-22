n.d(t, { c: () => j });
var r = n(951288),
    i = n(647438),
    l = n(159691),
    a = n(906732),
    s = n(884858),
    o = n(813197),
    c = n(892803),
    d = n(434404),
    u = n(465682),
    g = n(821458),
    m = n(585961),
    p = n(981631),
    f = n(30513),
    h = n(200299),
    b = n(388032),
    x = n(43628);
function j(e) {
    let { guild: t, canManageGuild: n, buttonClassName: j } = e,
        { analyticsLocations: v } = (0, a.ZP)(),
        _ = t.features.has(p.GuildFeatures.INVITE_SPLASH),
        C = n && _,
        O = i.useRef(null),
        { enabled: y } = c.Z.useConfig({ location: "GuildSettingsInviteBackgroundUploadButton" }),
        E = i.useCallback((e) => {
            d.Z.updateGuild({ splash: e });
        }, []),
        N = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, g.E6)({
                        guild: t,
                        analyticsLocations: v,
                        analyticsSection: p.jXE.GUILD_INVITE_BACKGROUND,
                        analyticsObject: p.qAy.BUTTON_CTA,
                        perks: (0, f.o9)(),
                    });
            },
            [v, t],
        ),
        I = i.useCallback(() => {
            var e;
            null == (e = O.current) || e.activateUploadDialogue();
        }, []);
    return _
        ? (0, r.jsxs)("div", {
              className: j,
              children: [
                  (0, r.jsx)(l.zxk, {
                      disabled: !C,
                      variant: "primary",
                      text: b.intl.string(b.t.yG2pUi),
                      onClick: I,
                  }),
                  (0, r.jsx)("div", {
                      className: x.hiddenInputContainer,
                      children: (0, r.jsx)(o.ZP, {
                          ref: O,
                          disabled: !C,
                          onChange: E,
                          maxFileSizeBytes: h.B,
                          onFileSizeError: () => (0, s.Z)(h.B),
                          tabIndex: -1,
                          "aria-hidden": !0,
                      }),
                  }),
              ],
          })
        : y
          ? (0, r.jsx)("div", {
                className: j,
                children: (0, r.jsx)(u.v, { onClick: N }),
            })
          : (0, r.jsx)(m.P, {
                className: j,
                onClick: N,
            });
}
