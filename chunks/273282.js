n.d(t, { c: () => h });
var r = n(54381),
    i = n(473749),
    l = n(159691),
    a = n(906732),
    s = n(884858),
    o = n(813197),
    c = n(434404),
    d = n(465682),
    u = n(821458),
    g = n(981631),
    f = n(30513),
    m = n(200299),
    b = n(388032),
    p = n(434170);
function h(e) {
    let { guild: t, canManageGuild: n, buttonClassName: h } = e,
        { analyticsLocations: x } = (0, a.ZP)(),
        j = t.features.has(g.GuildFeatures.INVITE_SPLASH),
        v = n && j,
        O = i.useRef(null),
        C = i.useCallback((e) => {
            c.Z.updateGuild({ splash: e });
        }, []),
        y = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, u.E6)({
                        guild: t,
                        analyticsLocations: x,
                        analyticsSection: g.jXE.GUILD_INVITE_BACKGROUND,
                        analyticsObject: g.qAy.BUTTON_CTA,
                        perks: (0, f.o9)(),
                    });
            },
            [x, t],
        ),
        N = i.useCallback(() => {
            var e;
            null == (e = O.current) || e.activateUploadDialogue();
        }, []);
    return j
        ? (0, r.jsxs)("div", {
              className: h,
              children: [
                  (0, r.jsx)(l.zxk, {
                      disabled: !v,
                      variant: "primary",
                      text: b.intl.string(b.t.yG2pUi),
                      onClick: N,
                  }),
                  (0, r.jsx)("div", {
                      className: p.hiddenInputContainer,
                      children: (0, r.jsx)(o.ZP, {
                          ref: O,
                          disabled: !v,
                          onChange: C,
                          maxFileSizeBytes: m.B,
                          onFileSizeError: () => (0, s.Z)(m.B),
                          tabIndex: -1,
                          "aria-hidden": !0,
                      }),
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: h,
              children: (0, r.jsx)(d.v, { onClick: y }),
          });
}
