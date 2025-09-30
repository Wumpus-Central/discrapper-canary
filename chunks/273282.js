n.d(t, { c: () => x });
var r = n(951288),
    i = n(647438),
    l = n(159691),
    s = n(906732),
    a = n(884858),
    o = n(813197),
    c = n(434404),
    d = n(821458),
    u = n(585961),
    m = n(981631),
    g = n(30513),
    p = n(200299),
    f = n(388032),
    h = n(43628);
function x(e) {
    let { guild: t, canManageGuild: n, buttonClassName: x } = e,
        { analyticsLocations: b } = (0, s.ZP)(),
        j = t.features.has(m.oNc.INVITE_SPLASH),
        v = n && j,
        _ = i.useRef(null),
        O = i.useCallback((e) => {
            c.Z.updateGuild({ splash: e });
        }, []),
        y = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, d.E6)({
                        guild: t,
                        analyticsLocations: b,
                        analyticsSection: m.jXE.GUILD_INVITE_BACKGROUND,
                        analyticsObject: m.qAy.BUTTON_CTA,
                        perks: (0, g.o9)(),
                    });
            },
            [b, t],
        ),
        C = i.useCallback(() => {
            var e;
            null == (e = _.current) || e.activateUploadDialogue();
        }, []);
    return j
        ? (0, r.jsxs)("div", {
              className: x,
              children: [
                  (0, r.jsx)(l.zxk, {
                      disabled: !v,
                      variant: "primary",
                      text: f.intl.string(f.t.yG2pUl),
                      onClick: C,
                  }),
                  (0, r.jsx)("div", {
                      className: h.hiddenInputContainer,
                      children: (0, r.jsx)(o.ZP, {
                          ref: _,
                          disabled: !v,
                          onChange: O,
                          maxFileSizeBytes: p.B,
                          onFileSizeError: () => (0, a.Z)(p.B),
                          tabIndex: -1,
                          "aria-hidden": !0,
                      }),
                  }),
              ],
          })
        : (0, r.jsx)(u.P, {
              className: x,
              onClick: y,
          });
}
