n.d(t, { Y: () => c });
var i = n(311907),
    s = n(817281),
    l = n(419954),
    a = n(964404),
    r = n(253932),
    o = n(780964),
    d = n(985018);
let c = (0, l.zD)(o.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
    useTitle: () => d.intl.string(d.t["//vhWi"]),
    usePredicate: () => r.hH.useSetting(),
    useValue: () => !(0, i.bG)([a.Ay], () => a.Ay.displayCompactAvatars),
    setValue: (e) => {
        s.Ay.updatedUnsyncedSettings({ displayCompactAvatars: !e });
    },
});
