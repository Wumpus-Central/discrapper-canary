n.d(t, { K: () => A });
var i = n(311907),
    s = n(775602),
    l = n(502229),
    r = n(47671),
    a = n(419954),
    o = n(933297),
    d = n(780964),
    c = n(123857),
    u = n(858897),
    m = n(601659),
    g = n(901205),
    _ = n(409658),
    x = n(585970),
    h = n(985018);
let A = (0, a.zZ)(d.X.APPEARANCE_THEME_CATEGORY, {
    useTitle: () => h.intl.string(h.t.Ksh3ik),
    useInlineNotice: function () {
        return (0, i.bG)([s.A], () => s.A.useForcedColors)
            ? {
                  type: o.lT.INLINE_NOTICE,
                  noticeType: "info",
                  useText: () =>
                      (0, l.D)()
                          ? h.intl.format(h.t.Jae48E, {
                                onClick: () => {
                                    (0, u.openUserSettings)(d.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : h.intl.string(h.t.AUMSZP),
              }
            : null;
    },
    useHeaderDecoration: function () {
        return (0, i.bG)([r.A, s.A], () => s.A.useForcedColors || r.A.isPreview)
            ? null
            : {
                  type: o.WX.BUTTON_GROUP,
                  buttons: [
                      {
                          id: "open-client-themes-button",
                          type: o.UV.BUTTON,
                          text: h.intl.string(h.t["E+COuA"]),
                          onClick: c.J3,
                      },
                  ],
              };
    },
    buildLayout: () => [_.k, g.l, m.p, x.W],
});
