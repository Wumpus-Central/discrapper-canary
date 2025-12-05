n.d(e, { Q: () => T });
var i = n(442837),
    l = n(223245),
    s = n(579806),
    r = n(509613),
    u = n(246946),
    a = n(313789),
    o = n(388032);
let c = (0, r.qs)(a.n.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => o.intl.string(o.t.MkvEgl),
        useValue: () =>
            (0, i.e7)([u.Z], () => {
                let { hidePersonalInformation: t } = u.Z.getSettings();
                return t;
            }),
        setValue: (t) => l.Z.update({ hidePersonalInformation: t }),
    }),
    d = (0, r.qs)(a.n.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => o.intl.string(o.t.uWBOri),
        useValue: () =>
            (0, i.e7)([u.Z], () => {
                let { hideInstantInvites: t } = u.Z.getSettings();
                return t;
            }),
        setValue: (t) => l.Z.update({ hideInstantInvites: t }),
    }),
    E = (0, r.qs)(a.n.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => o.intl.string(o.t.OrqYDP),
        useValue: () =>
            (0, i.e7)([u.Z], () => {
                let { disableSounds: t } = u.Z.getSettings();
                return t;
            }),
        setValue: (t) => l.Z.update({ disableSounds: t }),
    }),
    S = (0, r.qs)(a.n.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => o.intl.string(o.t.sUAbLd),
        useValue: () =>
            (0, i.e7)([u.Z], () => {
                let { disableNotifications: t } = u.Z.getSettings();
                return t;
            }),
        setValue: (t) => l.Z.update({ disableNotifications: t }),
    }),
    I = (0, r.qs)(a.n.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => o.intl.string(o.t["iA81+a"]),
        useSubtitle: () => o.intl.string(o.t.P4vj0h),
        useValue: () =>
            (0, i.e7)([u.Z], () => {
                let { enableContentProtection: t } = u.Z.getSettings();
                return t;
            }),
        setValue: (t) => l.Z.update({ enableContentProtection: t }),
        usePredicate: () => {
            var t, e, n;
            return (
                null !=
                    (n =
                        null === s.Z ||
                        void 0 === s.Z ||
                        null == (e = s.Z.window) ||
                        null == (t = e.supportsContentProtection)
                            ? void 0
                            : t.call(e)) && n
            );
        },
    }),
    T = (0, r.Uc)(a.n.STREAMER_MODE_OPTIONS_LIST, {
        useTitle: () => o.intl.string(o.t.UtW8R6),
        variant: "separators",
        buildLayout: () => [c, d, E, S, I],
    });
