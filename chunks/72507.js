n.d(t, {
    l: () => x,
});
var r = n(627968),
    i = n(64700),
    l = n(732955),
    s = n(688810),
    a = n(2553),
    c = n(946274),
    o = n(997509),
    d = n(342490),
    u = n(695800),
    f = n(652215),
    g = n(874864),
    b = n(478644),
    m = n(985018),
    p = n(822679);

function x(e) {
    let { guild: t, canManageGuild: n, buttonClassName: x } = e,
        { analyticsLocations: h } = (0, s.Ay)(),
        j = t.features.has(f.GuildFeatures.INVITE_SPLASH),
        O = n && j,
        y = i.useRef(null),
        v = i.useCallback((e) => {
            o.A.updateGuild({
                splash: e,
            });
        }, []),
        A = i.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, u.p_)({
                        guild: t,
                        analyticsLocations: h,
                        analyticsSection: f.JJy.GUILD_INVITE_BACKGROUND,
                        analyticsObject: f.ZSU.BUTTON_CTA,
                        perks: (0, g.Lp)(),
                    });
            },
            [h, t],
        ),
        E = i.useCallback(() => {
            var e;
            null == (e = y.current) || e.activateUploadDialogue();
        }, []);
    return j
        ? (0, r.jsxs)("div", {
              className: x,
              children: [
                  (0, r.jsx)(l.$nd, {
                      disabled: !O,
                      variant: "primary",
                      text: m.intl.string(m.t.yG2pUi),
                      onClick: E,
                  }),
                  (0, r.jsx)("div", {
                      className: p.y,
                      children: (0, r.jsx)(c.Ay, {
                          ref: y,
                          disabled: !O,
                          onChange: v,
                          maxFileSizeBytes: b.j,
                          onFileSizeError: () => (0, a.A)(b.j),
                          tabIndex: -1,
                          "aria-hidden": !0,
                      }),
                  }),
              ],
          })
        : (0, r.jsx)("div", {
              className: x,
              children: (0, r.jsx)(d.u, {
                  onClick: A,
              }),
          });
}
