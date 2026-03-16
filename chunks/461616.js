n.d(t, { F: () => m });
var i = n(627968),
    s = n(158954),
    l = n(311907),
    a = n(817281),
    r = n(419954),
    o = n(964404),
    d = n(253932),
    c = n(780964),
    u = n(840065),
    _ = n(985018);
let m = (0, r.zD)(c.X.APPEARANCE_DISPLAY_COMPACT_AVATARS, {
    useTitle: () => _.intl.string(_.t.JgjNG3),
    useSubtitle: () => {
        if (!d.hH.useSetting())
            return _.intl.format(_.t["31PRaj"], {
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
        a.Ay.updatedUnsyncedSettings({ displayCompactAvatars: e });
    },
});
