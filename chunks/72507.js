n.d(t, { l: () => p });
var i = n(627968),
    l = n(64700),
    s = n(821609),
    r = n(688810),
    a = n(2553),
    o = n(946274),
    d = n(997509),
    c = n(342490),
    u = n(695800),
    m = n(652215),
    g = n(874864),
    h = n(478644),
    x = n(985018),
    _ = n(528472);
function p(e) {
    let { guild: t, canManageGuild: n, buttonClassName: p } = e,
        { analyticsLocations: A } = (0, r.Ay)(),
        E = t.features.has(m.GuildFeatures.INVITE_SPLASH),
        f = n && E,
        j = l.useRef(null),
        N = l.useCallback((e) => {
            d.A.updateGuild({ splash: e });
        }, []),
        I = l.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, u.p_)({
                        guild: t,
                        analyticsLocations: A,
                        analyticsSection: m.JJy.GUILD_INVITE_BACKGROUND,
                        analyticsObject: m.ZSU.BUTTON_CTA,
                        perks: (0, g.Lp)(),
                    });
            },
            [A, t],
        ),
        C = l.useCallback(() => {
            j.current?.activateUploadDialogue();
        }, []);
    return E
        ? (0, i.jsxs)("div", {
              className: p,
              children: [
                  (0, i.jsx)(s.$, { disabled: !f, variant: "primary", text: x.intl.string(x.t.yG2pUi), onClick: C }),
                  (0, i.jsx)("div", {
                      className: _.y,
                      children: (0, i.jsx)(o.Ay, {
                          ref: j,
                          disabled: !f,
                          onChange: N,
                          maxFileSizeBytes: h.j,
                          onFileSizeError: () => (0, a.A)(h.j),
                          tabIndex: -1,
                          "aria-hidden": !0,
                      }),
                  }),
              ],
          })
        : (0, i.jsx)("div", { className: p, children: (0, i.jsx)(c.u, { onClick: I }) });
}
