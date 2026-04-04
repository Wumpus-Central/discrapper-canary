n.d(t, { p: () => A });
var i = n(311907),
    s = n(55619),
    l = n(77729),
    a = n(419954),
    r = n(351906),
    o = n(780964),
    d = n(358776),
    c = n(985018);
let u = (0, a.zD)(o.X.STREAMER_MODE_HIDE_PERSONAL_INFORMATION, {
        useTitle: () => ((0, d.bp)("StreamerModeOptions") ? c.intl.string(c.t.LSBUGR) : c.intl.string(c.t["yR/d2T"])),
        useSubtitle: () => ((0, d.bp)("StreamerModeOptions") ? "" : c.intl.string(c.t.RiIiPw)),
        useValue: () =>
            (0, i.bG)([r.A], () => {
                let { hidePersonalInformation: e } = r.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ hidePersonalInformation: e }),
    }),
    m = (0, a.zD)(o.X.STREAMER_MODE_HIDE_INVITE_LINKS, {
        useTitle: () => c.intl.string(c.t.uWBOri),
        useValue: () =>
            (0, i.bG)([r.A], () => {
                let { hideInstantInvites: e } = r.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ hideInstantInvites: e }),
    }),
    g = (0, a.zD)(o.X.STREAMER_MODE_DISABLE_SOUNDS, {
        useTitle: () => c.intl.string(c.t.OrqYDP),
        useValue: () =>
            (0, i.bG)([r.A], () => {
                let { disableSounds: e } = r.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ disableSounds: e }),
    }),
    _ = (0, a.zD)(o.X.STREAMER_MODE_DISABLE_NOTIFICATIONS, {
        useTitle: () => c.intl.string(c.t.sUAbLd),
        useValue: () =>
            (0, i.bG)([r.A], () => {
                let { disableNotifications: e } = r.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ disableNotifications: e }),
    }),
    x = (0, a.zD)(o.X.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE, {
        useTitle: () => c.intl.string(c.t["iA81+a"]),
        useSubtitle: () => c.intl.string(c.t.P4vj0h),
        useValue: () =>
            (0, i.bG)([r.A], () => {
                let { enableContentProtection: e } = r.A.getSettings();
                return e;
            }),
        setValue: (e) => s.A.update({ enableContentProtection: e }),
        usePredicate: () => l.A?.window?.supportsContentProtection?.() ?? !1,
    }),
    A = (0, a.FW)(o.X.STREAMER_MODE_OPTIONS_LIST, {
        variant: "compact",
        useTitle: () => ((0, d.bp)("StreamerModeOptions") ? c.intl.string(c.t.xYhOEh) : c.intl.string(c.t.UtW8R6)),
        buildLayout: () => [u, m, g, _, x],
    });
