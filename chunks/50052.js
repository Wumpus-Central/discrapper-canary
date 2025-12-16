n.d(e, { Q: () => g });
var i = n(442837),
    l = n(223245),
    s = n(579806),
    u = n(509613),
    r = n(246946),
    a = n(313789),
    o = n(388032);
let c = (0, u.qs)(a.n.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => o.intl.string(o.t["yR/d2T"]),
        useSubtitle: () => o.intl.string(o.t.RiIiPw),
        useValue: () =>
            (0, i.e7)([r.Z], () => {
                let { hidePersonalInformation: t } = r.Z.getSettings();
                return t;
            }),
        setValue: (t) => l.Z.update({ hidePersonalInformation: t }),
    }),
    T = (0, u.qs)(a.n.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => o.intl.string(o.t.uWBOri),
        useValue: () =>
            (0, i.e7)([r.Z], () => {
                let { hideInstantInvites: t } = r.Z.getSettings();
                return t;
            }),
        setValue: (t) => l.Z.update({ hideInstantInvites: t }),
    }),
    S = (0, u.qs)(a.n.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => o.intl.string(o.t.OrqYDP),
        useValue: () =>
            (0, i.e7)([r.Z], () => {
                let { disableSounds: t } = r.Z.getSettings();
                return t;
            }),
        setValue: (t) => l.Z.update({ disableSounds: t }),
    }),
    d = (0, u.qs)(a.n.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => o.intl.string(o.t.sUAbLd),
        useValue: () =>
            (0, i.e7)([r.Z], () => {
                let { disableNotifications: t } = r.Z.getSettings();
                return t;
            }),
        setValue: (t) => l.Z.update({ disableNotifications: t }),
    }),
    E = (0, u.qs)(a.n.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => o.intl.string(o.t["iA81+a"]),
        useSubtitle: () => o.intl.string(o.t.P4vj0h),
        useValue: () =>
            (0, i.e7)([r.Z], () => {
                let { enableContentProtection: t } = r.Z.getSettings();
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
    g = (0, u.Uc)(a.n.STREAMER_MODE_OPTIONS_LIST, {
        useTitle: () => o.intl.string(o.t.UtW8R6),
        variant: "separators",
        buildLayout: () => [c, T, S, d, E],
    });
