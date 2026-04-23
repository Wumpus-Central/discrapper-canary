n.d(t, { Q: () => b });
var i = n(64700),
    s = n(311907),
    l = n(827343),
    a = n(793574),
    r = n(419954),
    o = n(933297),
    d = n(347481),
    u = n(430452),
    c = n(780964),
    g = n(533488),
    m = n(983880),
    _ = n(821158),
    A = n(959483),
    h = n(404285),
    p = n(807639),
    x = n(508543),
    E = n(916607),
    T = n(509381),
    S = n(985018);
let f = (0, r.Qx)(c.X.VOICE_INPUT_PROFILE_SETTING, {
        useTitle: () => S.intl.string(S.t.LM3U3k),
        usePredicate: function () {
            let { enabledInputProfiles: e } = (0, g._)({ location: "SettingsRendererConfig" });
            return e.length > 0;
        },
        useSearchTerms: () => [S.intl.string(S.t.nuFtHH), S.intl.string(S.t.VZPR0R), S.intl.string(S.t.cjPbpT)],
        useValue: function () {
            return (0, s.bG)([u.Ay], () => u.Ay.getActiveInputProfile() ?? T.m.CUSTOM);
        },
        setValue: function (e) {
            let t = [a.A.USER_SETTINGS_VOICE_AND_VIDEO];
            l.A.setActiveInputProfile(e, { analyticsLocations: t });
        },
        useOptions: function () {
            let { enabledInputProfiles: e } = (0, g.d)({ location: "InputProfileCategory" });
            return [
                { value: T.m.VOICE_ISOLATION, name: S.intl.string(S.t.cjPbpT), desc: S.intl.string(S.t.CzhvnE) },
                { value: T.m.STUDIO, name: S.intl.string(S.t.VZPR0R), desc: S.intl.string(S.t.ZaJksS) },
                { value: T.m.CUSTOM, name: S.intl.string(S.t["N/PQjv"]), desc: S.intl.string(S.t.SnBmuY) },
            ].filter((t) => {
                let { value: n } = t;
                return e.includes(n);
            });
        },
    }),
    b = (0, r.zZ)(c.X.VOICE_INPUT_PROFILE_CATEGORY, {
        useInlineNotice: function () {
            let e = (0, s.bG)([d.A, u.Ay], () => {
                let e = u.Ay.getInputDeviceId();
                return (
                    (d.A.hasEchoCancellation(e) || d.A.hasNoiseSuppression(e) || d.A.hasAutomaticGainControl(e)) &&
                    u.Ay.isInputProfileCustom()
                );
            });
            return i.useMemo(() => {
                if (e)
                    return {
                        type: o.lT.INLINE_NOTICE,
                        noticeType: "info",
                        useText: () => S.intl.string(S.t["/Whuzi"]),
                    };
            }, [e]);
        },
        buildLayout: () => [f, A.O, h.w, _.h, E.K, p.C, x.m, m.U],
    });
