n.d(t, { c: () => b });
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
    m = n(30513),
    p = n(200299),
    f = n(388032),
    h = n(289059);
function b(e) {
    let { guild: t, canManageGuild: n, buttonClassName: b } = e,
        { analyticsLocations: x } = (0, a.ZP)(),
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
                    (0, u.E6)({
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
            null == (e = v.current) || e.activateUploadDialogue();
        }, []);
    return j
        ? (0, r.jsxs)("div", {
              className: b,
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
                          onFileSizeError: () => (0, s.Z)(p.B),
                          tabIndex: -1,
                          "aria-hidden": !0,
                      }),
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: b,
              children: (0, r.jsx)(d.v, { onClick: C }),
          });
}
