"use strict";
n.d(t, { l: () => A });
var i = n(627968),
    s = n(64700),
    l = n(732955),
    r = n(688810),
    a = n(2553),
    o = n(946274),
    d = n(997509),
    c = n(342490),
    u = n(695800),
    m = n(652215),
    g = n(874864),
    x = n(478644),
    h = n(985018),
    _ = n(822679);
function A(e) {
    let { guild: t, canManageGuild: n, buttonClassName: A } = e,
        { analyticsLocations: p } = (0, r.Ay)(),
        f = t.features.has(m.GuildFeatures.INVITE_SPLASH),
        j = n && f,
        N = s.useRef(null),
        E = s.useCallback((e) => {
            d.A.updateGuild({ splash: e });
        }, []),
        b = s.useCallback(
            (e) => {
                e.preventDefault(),
                    e.stopPropagation(),
                    (0, u.p_)({
                        guild: t,
                        analyticsLocations: p,
                        analyticsSection: m.JJy.GUILD_INVITE_BACKGROUND,
                        analyticsObject: m.ZSU.BUTTON_CTA,
                        perks: (0, g.Lp)(),
                    });
            },
            [p, t],
        ),
        T = s.useCallback(() => {
            N.current?.activateUploadDialogue();
        }, []);
    return f
        ? (0, i.jsxs)("div", {
              className: A,
              children: [
                  (0, i.jsx)(l.$nd, { disabled: !j, variant: "primary", text: h.intl.string(h.t.yG2pUi), onClick: T }),
                  (0, i.jsx)("div", {
                      className: _.y,
                      children: (0, i.jsx)(o.Ay, {
                          ref: N,
                          disabled: !j,
                          onChange: E,
                          maxFileSizeBytes: x.j,
                          onFileSizeError: () => (0, a.A)(x.j),
                          tabIndex: -1,
                          "aria-hidden": !0,
                      }),
                  }),
              ],
          })
        : (0, i.jsx)("div", { className: A, children: (0, i.jsx)(c.u, { onClick: b }) });
}
