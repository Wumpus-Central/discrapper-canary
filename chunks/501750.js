n.d(t, { y: () => _ });
var i = n(64700),
    s = n(934551),
    l = n(419954),
    a = n(933297),
    r = n(780964),
    o = n(965304),
    d = n(485079),
    c = n(985018);
let u = (0, l.t_)(r.X.NITRO_PANEL, { useTitle: () => c.intl.string(c.t.Ipxkog), buildLayout: () => [d.r] }),
    _ = (0, l.i4)(r.X.NITRO_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(c.t.Ipxkog),
        icon: s.NitroWheelIcon,
        usePersistentBadge: function (e) {
            return i.useMemo(
                () => ({ badgeType: a.Xi.STRONGLY_DISCOURAGED_CUSTOM, useCustomBadge: () => (0, o.e)(e) }),
                [e],
            );
        },
        buildLayout: () => [u],
    });
