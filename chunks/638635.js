n.d(t, { Q: () => c });
var i = n(311907),
    s = n(554146),
    l = n(955572),
    a = n(775602),
    r = n(419954),
    o = n(933297),
    d = n(780964),
    u = n(985018);
let c = (0, r.zD)(d.X.HIGH_CONTRAST_MODE, {
    useTitle: () => u.intl.string(u.t.aZlePv),
    useSubtitle: () => u.intl.string(u.t["v2qF8+"]),
    useValue: () => (0, i.bG)([a.A], () => a.A.isHighContrastModeEnabled),
    setValue: (e) => (0, l.uh)(e ? a._.HIGH : a._.DEFAULT),
    getDismissibleBadges: () => [
        { badgeType: o.Xi.NEW, dismissibleContent: s.M.ACCESSIBILITY_HIGH_CONTRAST_MODE_NEW_BADGE },
    ],
});
