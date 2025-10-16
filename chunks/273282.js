n.d(t, { c: () => b });
var r = n(951288),
    i = n(647438),
    l = n(159691),
    a = n(906732),
    s = n(884858),
    o = n(813197),
    c = n(434404),
    d = n(821458),
    u = n(585961),
    g = n(981631),
    m = n(30513),
    p = n(200299),
    f = n(388032),
    h = n(43628);
function b(e) {
    let { guild: t, canManageGuild: n, buttonClassName: b } = e,
        { analyticsLocations: x } = (0, a.ZP)(),
        j = t.features.has(g.GuildFeatures.INVITE_SPLASH),
        v = n && j,
        _ = i.useRef(null),
        C = i.useCallback((e) => {
            c.Z.updateGuild({ splash: e });
        }, []),
        O = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, d.E6)({
                        guild: t,
                        analyticsLocations: x,
                        analyticsSection: g.jXE.GUILD_INVITE_BACKGROUND,
                        analyticsObject: g.qAy.BUTTON_CTA,
                        perks: (0, m.o9)(),
                    });
            },
            [x, t],
        ),
        y = i.useCallback(() => {
            var e;
            null == (e = _.current) || e.activateUploadDialogue();
        }, []);
    return j
        ? (0, r.jsxs)("div", {
              className: b,
              children: [
                  (0, r.jsx)(l.zxk, {
                      disabled: !v,
                      variant: "primary",
                      text: f.intl.string(f.t.yG2pUl),
                      onClick: y,
                  }),
                  (0, r.jsx)("div", {
                      className: h.hiddenInputContainer,
                      children: (0, r.jsx)(o.ZP, {
                          ref: _,
                          disabled: !v,
                          onChange: C,
                          maxFileSizeBytes: p.B,
                          onFileSizeError: () => (0, s.Z)(p.B),
                          tabIndex: -1,
                          "aria-hidden": !0,
                      }),
                  }),
              ],
          })
        : (0, r.jsx)(u.P, {
              className: b,
              onClick: O,
          });
}
