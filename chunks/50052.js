n.d(e, { Z: () => I });
var i = n(442837),
    r = n(223245),
    l = n(579806),
    s = n(509613),
    u = n(246946),
    a = n(313789),
    o = n(388032);
let c = (0, s.qs)(a.n.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => o.intl.string(o.t.MkvEgl),
        useValue: () =>
            (0, i.e7)([u.Z], () => {
                let { hidePersonalInformation: t } = u.Z.getSettings();
                return t;
            }),
        setValue: (t) => r.Z.update({ hidePersonalInformation: t }),
    }),
    d = (0, s.qs)(a.n.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => o.intl.string(o.t.uWBOri),
        useValue: () =>
            (0, i.e7)([u.Z], () => {
                let { hideInstantInvites: t } = u.Z.getSettings();
                return t;
            }),
        setValue: (t) => r.Z.update({ hideInstantInvites: t }),
    }),
    E = (0, s.qs)(a.n.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => o.intl.string(o.t.OrqYDP),
        useValue: () =>
            (0, i.e7)([u.Z], () => {
                let { disableSounds: t } = u.Z.getSettings();
                return t;
            }),
        setValue: (t) => r.Z.update({ disableSounds: t }),
    }),
    S = (0, s.qs)(a.n.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => o.intl.string(o.t.sUAbLd),
        useValue: () =>
            (0, i.e7)([u.Z], () => {
                let { disableNotifications: t } = u.Z.getSettings();
                return t;
            }),
        setValue: (t) => r.Z.update({ disableNotifications: t }),
    }),
    T = (0, s.qs)(a.n.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => o.intl.string(o.t["iA81+a"]),
        useSubtitle: () => o.intl.string(o.t.P4vj0h),
        usePredicate: () => {
            var t, e, n;
            return (
                null !=
                    (n =
                        null === l.Z ||
                        void 0 === l.Z ||
                        null == (e = l.Z.window) ||
                        null == (t = e.supportsContentProtection)
                            ? void 0
                            : t.call(e)) && n
            );
        },
        useValue: () =>
            (0, i.e7)([u.Z], () => {
                let { enableContentProtection: t } = u.Z.getSettings();
                return t;
            }),
        setValue: (t) => r.Z.update({ enableContentProtection: t }),
    }),
    I = (0, s.Uc)(a.n.STREAMER_MODE_OPTIONS_LIST, {
        useTitle: () => o.intl.string(o.t.UtW8R6),
        variant: "separators",
        buildLayout: () => [c, d, E, S, T],
    });
