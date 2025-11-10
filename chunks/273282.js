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
        { analyticsLocations: _ } = (0, a.ZP)(),
        v = t.features.has(p.GuildFeatures.INVITE_SPLASH),
        O = n && v,
        C = i.useRef(null),
        { enabled: y } = c.Z.useConfig({ location: "GuildSettingsInviteBackgroundUploadButton" }),
        N = i.useCallback((e) => {
            d.Z.updateGuild({ splash: e });
        }, []),
        E = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, g.E6)({
                        guild: t,
                        analyticsLocations: _,
                        analyticsSection: p.jXE.GUILD_INVITE_BACKGROUND,
                        analyticsObject: p.qAy.BUTTON_CTA,
                        perks: (0, f.o9)(),
                    });
            },
            [_, t],
        ),
        I = i.useCallback(() => {
            var e;
            null == (e = C.current) || e.activateUploadDialogue();
        }, []);
    return v
        ? (0, r.jsxs)("div", {
              className: j,
              children: [
                  (0, r.jsx)(l.zxk, {
                      disabled: !O,
                      variant: "primary",
                      text: b.intl.string(b.t.yG2pUi),
                      onClick: I,
                  }),
                  (0, r.jsx)("div", {
                      className: x.hiddenInputContainer,
                      children: (0, r.jsx)(o.ZP, {
                          ref: C,
                          disabled: !O,
                          onChange: N,
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
                children: (0, r.jsx)(u.v, { onClick: E }),
            })
          : (0, r.jsx)(m.P, {
                className: j,
                onClick: E,
            });
}
