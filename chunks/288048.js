n.d(t, { K: () => p });
var i = n(311907),
    s = n(775602),
    l = n(502229),
    a = n(47671),
    r = n(419954),
    o = n(933297),
    d = n(780964),
    u = n(884210),
    c = n(858897),
    g = n(601659),
    m = n(901205),
    _ = n(409658),
    A = n(585970),
    h = n(985018);
let p = (0, r.zZ)(d.X.APPEARANCE_THEME_CATEGORY, {
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
                                    (0, c.openUserSettings)(d.X.SYNC_FORCED_COLORS);
                                },
                            })
                          : h.intl.string(h.t.AUMSZP),
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
                          text: h.intl.string(h.t["E+COuA"]),
                          onClick: u.J3,
                      },
                  ],
              };
    },
    buildLayout: () => [_.k, m.l, g.p, A.W],
});
