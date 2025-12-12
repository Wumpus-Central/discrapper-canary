n.d(t, { c: () => x });
var r = n(54381),
    i = n(473749),
    l = n(159691),
    s = n(906732),
    a = n(884858),
    o = n(813197),
    c = n(434404),
    u = n(465682),
    d = n(821458),
    g = n(981631),
    m = n(30513),
    p = n(200299),
    f = n(388032),
    h = n(43628);
function x(e) {
    let { guild: t, canManageGuild: n, buttonClassName: x } = e,
        { analyticsLocations: b } = (0, s.ZP)(),
        j = t.features.has(g.GuildFeatures.INVITE_SPLASH),
        _ = n && j,
        v = i.useRef(null),
        O = i.useCallback((e) => {
            c.Z.updateGuild({ splash: e });
        }, []),
        C = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, d.E6)({
                        guild: t,
                        analyticsLocations: b,
                        analyticsSection: g.jXE.GUILD_INVITE_BACKGROUND,
                        analyticsObject: g.qAy.BUTTON_CTA,
                        perks: (0, m.o9)(),
                    });
            },
            [b, t],
        ),
        y = i.useCallback(() => {
            var e;
            null == (e = v.current) || e.activateUploadDialogue();
        }, []);
    return j
        ? (0, r.jsxs)("div", {
              className: x,
              children: [
                  (0, r.jsx)(l.zxk, {
                      disabled: !_,
                      variant: "primary",
                      text: f.intl.string(f.t.yG2pUi),
                      onClick: y,
                  }),
                  (0, r.jsx)("div", {
                      className: h.hiddenInputContainer,
                      children: (0, r.jsx)(o.ZP, {
                          ref: v,
                          disabled: !_,
                          onChange: O,
                          maxFileSizeBytes: p.B,
                          onFileSizeError: () => (0, a.Z)(p.B),
                          tabIndex: -1,
                          "aria-hidden": !0,
                      }),
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: x,
              children: (0, r.jsx)(u.v, { onClick: C }),
          });
}
