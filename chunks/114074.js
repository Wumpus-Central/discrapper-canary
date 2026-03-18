n.d(t, { K: () => h });
var i = n(311907),
    s = n(775602),
    l = n(502229),
    a = n(47671),
    r = n(419954),
    o = n(933297),
    d = n(780964),
    c = n(123857),
    u = n(840065),
    _ = n(506305),
    m = n(69551),
    g = n(225216),
    A = n(866352),
    x = n(985018);
let h = (0, r.zZ)(d.X.DISPLAY_THEME_CATEGORY, {
    useTitle: () => x.intl.string(x.t.Ksh3ik),
    useInlineNotice: function () {
        return (0, i.bG)([s.A], () => s.A.useForcedColors)
            ? {
                  type: o.lT.INLINE_NOTICE,
                  noticeType: "info",
                  useText: () =>
                      (0, l.D)()
                          ? x.intl.format(x.t.Jae48E, {
                                onClick: () => {
                                    (0, u.openUserSettings)(d.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : x.intl.string(x.t.AUMSZP),
              }
            : null;
    },
    useHeaderDecoration: function () {
        return (0, i.bG)([a.A, s.A], () => s.A.useForcedColors || a.A.isPreview)
            ? null
            : {
                  type: o.WX.BUTTON_GROUP,
                  buttons: [
                      {
                          id: "open-client-themes-button",
                          type: o.UV.BUTTON,
                          useText: () => x.intl.string(x.t["E+COuA"]),
                          onClick: c.J3,
                      },
                  ],
              };
    },
    buildLayout: () => [g.k, m.l, _.p, A.W],
});
