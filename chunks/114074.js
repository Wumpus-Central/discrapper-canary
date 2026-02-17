i.d(e, { K: () => I });
var n = i(311907),
    l = i(775602),
    s = i(502229),
    r = i(47671),
    a = i(419954),
    u = i(933297),
    o = i(780964),
    d = i(70040),
    A = i(840065),
    T = i(506305),
    S = i(69551),
    E = i(225216),
    g = i(866352),
    _ = i(652215),
    c = i(985018);
let I = (0, a.zZ)(o.X.DISPLAY_THEME_CATEGORY, {
    useTitle: () => c.intl.string(c.t.Ksh3ik),
    useInlineNotice: function () {
        return (0, n.bG)([l.A], () => l.A.useForcedColors)
            ? {
                  type: u.lT.INLINE_NOTICE,
                  noticeType: "info",
                  useText: () =>
                      (0, s.D)()
                          ? c.intl.format(c.t.Jae48E, {
                                onClick: () => {
                                    (0, A.openUserSettings)(o.X.SYNC_FORCED_COLORS, { section: _.nc_.ACCESSIBILITY });
                                },
                            })
                          : c.intl.string(c.t.AUMSZP),
              }
            : null;
    },
    useHeaderDecoration: function () {
        return (0, n.bG)([r.A, l.A], () => l.A.useForcedColors || r.A.isPreview)
            ? null
            : {
                  type: u.WX.BUTTON_GROUP,
                  buttons: [
                      {
                          id: "open-client-themes-button",
                          type: u.UV.BUTTON,
                          useText: () => c.intl.string(c.t["E+COuA"]),
                          onClick: d.J3,
                      },
                  ],
              };
    },
    buildLayout: () => [E.k, S.l, T.p, g.W],
});
