i.d(e, { y: () => _ });
var n = i(934551),
    l = i(419954),
    s = i(933297),
    r = i(780964),
    u = i(358776),
    a = i(517235),
    o = i(965304),
    T = i(485079),
    A = i(531525),
    S = i(985018);
let E = (0, l.t_)(r.X.NITRO_PANEL, {
        usePredicate: () => !(0, u.dk)("LegacyNitroPanel"),
        useTitle: () => S.intl.string(S.t.Ipxkog),
        StronglyDiscouragedCustomComponent: a.A,
        buildLayout: () => [],
    }),
    d = (0, l.t_)(r.X.NITRO_PANEL, {
        usePredicate: () => (0, u.dk)("NitroPanel"),
        useTitle: () => S.intl.string(S.t.Ipxkog),
        buildLayout: () => [T.r],
    }),
    _ = (0, l.i4)(r.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t.Ipxkog),
        getLegacySearchKey: () => ((0, u.WJ)("NitroPanel") ? void 0 : A.H.PREMIUM),
        icon: n.NitroWheelIcon,
        trailing: {
            type: s.S.STRONGLY_DISCOURAGED_CUSTOM,
            useCustomDecoration: (t, e) => (0, o.e)(e),
        },
        buildLayout: () => ((0, u.WJ)("NitroPanel") ? [d] : [E]),
    });
