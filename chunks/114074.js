i.d(t, { K: () => c });
var n = i(311907),
    l = i(775602),
    s = i(502229),
    r = i(47671),
    a = i(419954),
    u = i(933297),
    o = i(780964),
    d = i(70040),
    _ = i(840065),
    T = i(179357),
    A = i(225216),
    S = i(652215),
    E = i(985018);
let c = (0, a.zZ)(o.X.DISPLAY_THEME_CATEGORY, {
    useTitle: () => E.intl.string(E.t.Ksh3ik),
    useInlineNotice: function () {
        return (0, n.bG)([l.A], () => l.A.useForcedColors)
            ? {
                  type: u.lT.INLINE_NOTICE,
                  noticeType: "info",
                  useText: () =>
                      (0, s.D)()
                          ? E.intl.format(E.t.Jae48E, {
                                onClick: () => {
                                    (0, _.openUserSettings)(o.X.SYNC_FORCED_COLORS, { section: S.nc_.ACCESSIBILITY });
                                },
                            })
                          : E.intl.string(E.t.AUMSZP),
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
                          useText: () => E.intl.string(E.t["E+COuA"]),
                          onClick: d.J3,
                      },
                  ],
              };
    },
    buildLayout: () => [A.k, T.x],
});
