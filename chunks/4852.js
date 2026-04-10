n.d(t, { p: () => h });
var i = n(311907),
    s = n(55619),
    l = n(77729),
    r = n(419954),
    a = n(351906),
    o = n(780964),
    d = n(358776),
    c = n(533570),
    u = n(985018);
let m = (0, r.zD)(o.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => ((0, d.bp)("StreamerModeOptions") ? u.intl.string(u.t.LSBUGR) : u.intl.string(u.t["yR/d2T"])),
        useSubtitle: () => ((0, d.bp)("StreamerModeOptions") ? "" : u.intl.string(u.t.RiIiPw)),
        useValue: () =>
            (0, i.bG)([a.A], () => {
                let { hidePersonalInformation: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ hidePersonalInformation: e }),
    }),
    g = (0, r.zD)(o.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => u.intl.string(u.t.uWBOri),
        useValue: () =>
            (0, i.bG)([a.A], () => {
                let { hideInstantInvites: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ hideInstantInvites: e }),
    }),
    _ = (0, r.zD)(o.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => u.intl.string(u.t.OrqYDP),
        useValue: () =>
            (0, i.bG)([a.A], () => {
                let { disableSounds: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ disableSounds: e }),
    }),
    x = (0, r.zD)(o.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => u.intl.string(u.t.sUAbLd),
        useValue: () =>
            (0, i.bG)([a.A], () => {
                let { disableNotifications: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ disableNotifications: e }),
    }),
    A = (0, r.zD)(o.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => u.intl.string(u.t["iA81+a"]),
        useSubtitle: () => u.intl.string(u.t.P4vj0h),
        useValue: () =>
            (0, i.bG)([a.A], () => {
                let { enableContentProtection: e } = a.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ enableContentProtection: e }),
        usePredicate: () => l.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    h = (0, r.FW)(o.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => ((0, d.bp)("StreamerModeOptions") ? u.intl.string(u.t.xYhOEh) : u.intl.string(u.t.UtW8R6)),
        buildLayout: () => [m, g, _, x, A, c.h],
    });
