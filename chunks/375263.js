n.d(t, { O: () => f });
var r = n(200651),
    i = n(192379),
    s = n(481060),
    a = n(906732),
    l = n(516129),
    o = n(768581),
    c = n(949640),
    d = n(981631),
    u = n(30513),
    m = n(486324),
    p = n(200299),
    g = n(388032),
    h = n(765069);
function f(e) {
    let { guild: t, canManageGuild: n } = e,
        f = t.hasFeature(d.oNc.BANNER),
        b = t.hasFeature(d.oNc.ANIMATED_BANNER),
        x = f && n,
        { analyticsLocations: j } = (0, a.ZP)(),
        N = i.useCallback(
            (e, n) => {
                (0, c.f4)(t, j, e, n);
            },
            [j, t]
        ),
        v = i.useCallback(
            (e) => {
                e.preventDefault(), e.stopPropagation(), (0, c.E6)(t, j, d.jXE.GUILD_BANNER, d.qAy.UPLOAD_IMAGE, (0, u.XO)());
            },
            [j, t]
        ),
        _ = (0, r.jsx)(l.Z, {
            image: t.banner,
            makeURL: (e) =>
                null != e
                    ? o.ZP.getGuildBannerURL(
                          {
                              id: t.id,
                              banner: e
                          },
                          b
                      )
                    : null,
            disabled: !x,
            onChange: N,
            hint: g.NW.string(g.t.uPvxqK),
            onOpenImageSelectModal: () =>
                (0, c.mw)({
                    uploadType: m.pC.GUILD_BANNER,
                    maxFileSizeBytes: p.B,
                    onComplete: (e) => {
                        let { imageUri: t, file: n } = e;
                        return N(t, n);
                    },
                    analyticsLocation: {
                        page: d.ZY5.GUILD_SETTINGS,
                        section: d.jXE.GUILD_BANNER
                    },
                    analyticsLocations: j
                }),
            enabled: x
        });
    return f
        ? _
        : (0, r.jsx)(s.P3F, {
              'aria-hidden': !0,
              tabIndex: -1,
              className: h.upsell,
              onClick: v,
              children: _
          });
}
