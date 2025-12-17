n.d(t, {
    $y: () => j,
    Cr: () => O,
    Ev: () => s,
    Fu: () => h,
    GM: () => L,
    Gu: () => D,
    JT: () => m,
    K8: () => v,
    OF: () => x,
    P9: () => y,
    Pc: () => C,
    S4: () => I,
    Si: () => E,
    Ws: () => S,
    Zc: () => _,
    cE: () => N,
    cc: () => a,
    d: () => o,
    eB: () => b,
    jT: () => p,
    qm: () => c,
    sI: () => g,
    u2: () => l,
    um: () => A,
    wP: () => w,
    wT: () => R,
    xK: () => T,
}),
    n(388685);
var r = n(911969),
    i = n(981631);
let a = 160,
    o = /^https?:\/\/(?:www\.)?(twitch\.tv\/(.+)|youtube.com\/watch\?v=)/,
    s = "438122941302046720",
    l = "1417273808645259344",
    c = "773336526917861400",
    u = "755600276941176913",
    d = "880218832743055411",
    f = "1050941315912835122",
    p = "880218394199220334",
    _ = "755827207812677713",
    m = "1234546995360694434",
    h = "1214629548377768066",
    g = "https://discord.com/blog/server-activities-games-voice-watch-together",
    E = {
        SMALL: 64,
        LARGE: 160,
    },
    b = ["in_development", "activities_team", "employee_release"],
    y = [
        "1037680572660727838",
        "235088799074484224",
        "1007373802981822582",
        "1067803140071620628",
        "1194351737264406548",
        "1245041113882955918",
        "1245040907732910201",
        "1245040436427489471",
        "1208090049871351890",
        "1235205910863806484",
        "1227719606223765687",
    ],
    O = ["1247266306231898122", "1257458870390099989", "1276239071764680926"];
var v = (function (e) {
        return (
            (e.ADS = "ADS"),
            (e.FAILED_LOAD = "FAILED_LOAD"),
            (e.LAGGING = "LAGGING"),
            (e.CONFUSING = "CONFUSING"),
            (e.NOT_FUN = "NOT_FUN"),
            (e.OTHER = "OTHER"),
            e
        );
    })({}),
    S = (function (e) {
        return (e[(e.PLAY = 0)] = "PLAY"), (e[(e.SPECTATE = 1)] = "SPECTATE"), e;
    })({}),
    I = (function (e) {
        return (e.DESKTOP = "desktop"), (e.MOBILE = "mobile"), e;
    })({}),
    T = (function (e) {
        return (
            (e[(e.UNLOCKED = 1)] = "UNLOCKED"),
            (e[(e.PORTRAIT = 2)] = "PORTRAIT"),
            (e[(e.LANDSCAPE = 3)] = "LANDSCAPE"),
            e
        );
    })({});
let C = new Set([u, d, f, p]),
    A = new Set([d, f, p]);
var N = (function (e) {
    return (e[(e.FOCUSED = 0)] = "FOCUSED"), (e[(e.PIP = 1)] = "PIP"), (e[(e.GRID = 2)] = "GRID"), e;
})({});
let P = {
        label_type: r.ww.NONE,
        release_phase: "",
        label_from: null,
        label_until: null,
        omit_badge_from_surfaces: [],
    },
    R = {
        application_id: "",
        requires_age_gate: !1,
        legacy_responsive_aspect_ratio: !1,
        default_orientation_lock_state: 1,
        tablet_default_orientation_lock_state: 1,
        supported_platforms: [r.C3.WEB],
        client_platform_config: {
            [r.C3.WEB]: P,
            [r.C3.IOS]: P,
            [r.C3.ANDROID]: P,
        },
        has_csp_exception: !1,
        displays_advertisements: !1,
        blocked_locales: [],
        supported_locales: [],
    },
    w = [i.d4z.GUILD_TEXT, i.d4z.DM, i.d4z.GROUP_DM],
    D = [...w, i.d4z.GUILD_VOICE],
    x = "https://support-dev.discord.com/hc/en-us/articles/21692628851351-Private-Activity-Safety";
var L = (function (e) {
    return (e.NORMAL = "normal"), (e.FULL_SCREEN = "full-screen"), e;
})({});
let j = 21600000;
