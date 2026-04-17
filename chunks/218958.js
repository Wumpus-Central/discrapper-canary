n.d(t, { F: () => g });
var i = n(627968),
    s = n(158954),
    l = n(311907),
    r = n(817281),
    a = n(419954),
    o = n(964404),
    d = n(253932),
    c = n(780964),
    u = n(858897),
    m = n(985018);
let g = (0, a.zD)(c.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
    useTitle: () => m.intl.string(m.t.JgjNG3),
    useSubtitle: () => {
        if (!d.hH.useSetting())
            return m.intl.format(m.t["31PRaj"], {
                a11yHook: (e, t) =>
                    (0, i.jsx)(
                        s.DUT,
                        {
                            tag: "a",
                            onClick: () => (0, u.openUserSettings)(c.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
                            children: e,
                        },
                        t,
                    ),
            });
    },
    useDisabled: () => !d.hH.useSetting(),
    useValue: () => {
        let e = (0, l.bG)([o.Ay], () => o.Ay.displayCompactAvatars);
        return !d.hH.useSetting() || e;
    },
    setValue: (e) => {
        r.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
    },
});
