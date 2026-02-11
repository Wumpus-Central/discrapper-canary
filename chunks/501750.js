i.d(t, { y: () => E });
var n = i(934551),
    l = i(419954),
    s = i(933297),
    r = i(780964),
    a = i(358776),
    u = i(517235),
    o = i(965304),
    d = i(485079),
    _ = i(531525),
    T = i(985018);
let A = (0, l.t_)(r.X.NITRO_PANEL, {
        usePredicate: () => !(0, a.dk)("LegacyNitroPanel"),
        useTitle: () => T.intl.string(T.t.Ipxkog),
        StronglyDiscouragedCustomComponent: u.A,
        buildLayout: () => [],
    }),
    S = (0, l.t_)(r.X.NITRO_PANEL, {
        usePredicate: () => (0, a.dk)("NitroPanel"),
        useTitle: () => T.intl.string(T.t.Ipxkog),
        buildLayout: () => [d.r],
    }),
    E = (0, l.i4)(r.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t.Ipxkog),
        getLegacySearchKey: () => ((0, a.WJ)("NitroPanel") ? void 0 : _.H.PREMIUM),
        icon: n.NitroWheelIcon,
        trailing: { type: s.Si.STRONGLY_DISCOURAGED_CUSTOM, useCustomDecoration: (e, t) => (0, o.e)(t) },
        buildLayout: () => ((0, a.WJ)("NitroPanel") ? [S] : [A]),
    });
