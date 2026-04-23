n.d(t, { F: () => m });
var i = n(627968),
    s = n(939249),
    l = n(311907),
    a = n(817281),
    r = n(419954),
    o = n(964404),
    d = n(253932),
    u = n(780964),
    c = n(858897),
    g = n(985018);
let m = (0, r.zD)(u.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
    useTitle: () => g.intl.string(g.t.JgjNG3),
    useSubtitle: () => {
        if (!d.hH.useSetting())
            return g.intl.format(g.t["31PRaj"], {
                a11yHook: (e, t) =>
                    (0, i.jsx)(
                        s.D,
                        {
                            tag: "a",
                            onClick: () => (0, c.openUserSettings)(u.X.APPEARANCE_MESSAGE_DISPLAY_MODE),
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
        a.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
    },
});
