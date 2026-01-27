n.d(e, {
    EC: () => y,
    Ef: () => L,
    Gg: () => I,
    MH: () => U,
    NV: () => D,
    PH: () => p,
    QM: () => R,
    Y7: () => A,
    dI: () => Y,
    fD: () => S,
    h4: () => f,
    he: () => h,
    iN: () => b,
    jZ: () => N,
    kp: () => C,
    lu: () => F,
    ly: () => M,
    nz: () => g,
    qb: () => O,
    u9: () => v,
    zu: () => m,
}),
    n(896048);
var i,
    l,
    r,
    a,
    o,
    u,
    s,
    d,
    E = n(323125),
    _ = n(927813),
    c = n(842130),
    T = n(985018);
let S = 30 * _.A.Millis.SECOND,
    A = 8,
    C = 3,
    f = 26,
    I = 64,
    N = (t, e) => "https://discord.com/feature/family-center/my-family/".concat(t, "/").concat(e),
    p = 4,
    g = 5 * _.A.Millis.MINUTE,
    y = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    h = (0, E.dN)(
        Object.freeze({
            FAMILY_CENTER_SETTINGS: "/family-center/settings",
            FAMILY_CENTER_MY_FAMILY: "/family-center/my-family",
        }),
        [":", "?", "@"],
    );
var R = (((i = {})[(i.PARENT = 1)] = "PARENT"), (i[(i.CHILD = 2)] = "CHILD"), i),
    L =
        (((l = {})[(l.PENDING = 1)] = "PENDING"),
        (l[(l.ACTIVE = 2)] = "ACTIVE"),
        (l[(l.INACTIVE = 3)] = "INACTIVE"),
        (l[(l.DECLINED = 4)] = "DECLINED"),
        (l[(l.EXPIRED = 5)] = "EXPIRED"),
        l),
    D =
        (((r = {})[(r.USER_ADD = 1)] = "USER_ADD"),
        (r[(r.GUILD_ADD = 2)] = "GUILD_ADD"),
        (r[(r.USER_INTERACTION = 3)] = "USER_INTERACTION"),
        (r[(r.GUILD_INTERACTION = 4)] = "GUILD_INTERACTION"),
        (r[(r.USER_CALLED = 5)] = "USER_CALLED"),
        (r[(r.TOTAL_VOICE_MINUTES = 6)] = "TOTAL_VOICE_MINUTES"),
        (r[(r.PURCHASES = 7)] = "PURCHASES"),
        r),
    v =
        (((a = {}).ACTIVITY = "ACTIVITY"),
        (a.REQUESTS = "REQUESTS"),
        (a.SETTINGS = "SETTINGS"),
        (a.CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL"),
        (a.DATA_AND_PRIVACY = "DATA_AND_PRIVACY"),
        a),
    m =
        (((o = {})[(o.ACTIVITY = 0)] = "ACTIVITY"),
        (o[(o.REQUESTS = 1)] = "REQUESTS"),
        (o[(o.SETTINGS = 2)] = "SETTINGS"),
        (o[(o.CONTENT_AND_SOCIAL = 3)] = "CONTENT_AND_SOCIAL"),
        (o[(o.DATA_AND_PRIVACY = 4)] = "DATA_AND_PRIVACY"),
        o),
    U = (((u = {}).SIDENAV = "SIDENAV"), (u.SETTINGS = "SETTINGS"), u),
    b = (((s = {})[(s.SIDENAV = 0)] = "SIDENAV"), (s[(s.SETTINGS = 1)] = "SETTINGS"), s),
    O =
        (((d = {})[(d.TabChange = 0)] = "TabChange"),
        (d[(d.ShowQRCodeModal = 1)] = "ShowQRCodeModal"),
        (d[(d.RevealQRCode = 2)] = "RevealQRCode"),
        (d[(d.ScanQRCodeButton = 3)] = "ScanQRCodeButton"),
        (d[(d.ScanQRCode = 4)] = "ScanQRCode"),
        (d[(d.LoadMore = 5)] = "LoadMore"),
        (d[(d.SelectTeen = 6)] = "SelectTeen"),
        (d[(d.HideQRCode = 7)] = "HideQRCode"),
        d);
let M = new Map([
        [
            3,
            {
                priority: 100,
                tooltipHeader: () => T.intl.string(c.default.kvTgWP),
                tooltipDescription: (t) => (t ? T.intl.string(c.default.w4wmnb) : T.intl.string(c.default.foTzbd)),
                sectionHeader: (t) =>
                    T.intl.formatToPlainString(c.default["4T3zWT"], {
                        count: t,
                    }),
                sectionDescription: (t) => (t ? T.intl.string(c.default.w4wmnb) : T.intl.string(c.default.foTzbd)),
                timestampFormatter: () => ({
                    today: T.intl.string(c.default.fLBUx7),
                    yesterday: T.intl.string(c.default.cHHgxI),
                    days: c.default.qvKjp8,
                }),
            },
        ],
        [
            5,
            {
                priority: 200,
                tooltipHeader: () => T.intl.string(c.default.D7Sngz),
                tooltipDescription: (t) => (t ? T.intl.string(c.default.aiAhnQ) : T.intl.string(c.default["4ufgdz"])),
                sectionHeader: (t) =>
                    T.intl.formatToPlainString(c.default["0GE4Ni"], {
                        count: t,
                    }),
                sectionDescription: (t) => (t ? T.intl.string(c.default.aiAhnQ) : T.intl.string(c.default["4ufgdz"])),
                timestampFormatter: () => ({
                    today: T.intl.string(c.default.IHd5cZ),
                    yesterday: T.intl.string(c.default.wOsfxv),
                    days: c.default.oCk8c4,
                }),
            },
        ],
        [
            1,
            {
                priority: 300,
                tooltipHeader: () => T.intl.string(c.default.kIcKAj),
                tooltipDescription: (t) => (t ? T.intl.string(c.default.BkVb1X) : T.intl.string(c.default.mpHHfa)),
                sectionHeader: (t) =>
                    T.intl.formatToPlainString(c.default["TEvo+H"], {
                        count: t,
                    }),
                sectionDescription: (t) => (t ? T.intl.string(c.default.BkVb1X) : T.intl.string(c.default.mpHHfa)),
                timestampFormatter: () => ({
                    today: T.intl.string(c.default.JUHIYZ),
                    yesterday: T.intl.string(c.default.GiswUW),
                    days: c.default["fwQgE/"],
                }),
            },
        ],
        [
            2,
            {
                priority: 400,
                tooltipHeader: () => T.intl.string(c.default.uav9Bh),
                tooltipDescription: (t) => (t ? T.intl.string(c.default.LVNgTD) : T.intl.string(c.default.TA8GFt)),
                sectionHeader: (t) =>
                    T.intl.formatToPlainString(c.default["7feG7T"], {
                        count: t,
                    }),
                sectionDescription: (t) => (t ? T.intl.string(c.default.LVNgTD) : T.intl.string(c.default.TA8GFt)),
            },
        ],
        [
            4,
            {
                priority: 500,
                tooltipHeader: () => T.intl.string(c.default.CcrbCw),
                tooltipDescription: (t) => (t ? T.intl.string(c.default.BLgIrk) : T.intl.string(c.default.sSJauZ)),
                sectionHeader: (t) =>
                    T.intl.formatToPlainString(c.default.rcPInc, {
                        count: t,
                    }),
                sectionDescription: (t) => (t ? T.intl.string(c.default.BLgIrk) : T.intl.string(c.default.sSJauZ)),
            },
        ],
        [
            6,
            {
                priority: 175,
                tooltipHeader: () => T.intl.string(c.default.eo4Fxh),
                tooltipDescription: () => T.intl.string(c.default["O/AElu"]),
                sectionHeader: (t) =>
                    T.intl.formatToPlainString(c.default.eGFWUd, {
                        count: t,
                    }),
                sectionDescription: () => T.intl.string(c.default["O/AElu"]),
            },
        ],
        [
            7,
            {
                priority: 150,
                tooltipHeader: () => T.intl.string(c.default.NMYKsh),
                tooltipDescription: (t) => (t ? T.intl.string(c.default.cqIdqZ) : T.intl.string(c.default["85PtWu"])),
                sectionHeader: (t) =>
                    T.intl.formatToPlainString(c.default.FPViWL, {
                        amount: t,
                    }),
                sectionDescription: (t) => (t ? T.intl.string(c.default.cqIdqZ) : T.intl.string(c.default["85PtWu"])),
            },
        ],
    ]),
    F = () => ({
        seconds: T.intl.string(c.default.CJdoee),
        minutes: c.default.InzMn3,
        hours: c.default.ErkYCI,
        yesterday: T.intl.string(c.default.GvfssA),
        days: c.default.pWig18,
        date: c.default.MP3khg,
    }),
    Y = () => ({
        seconds: T.intl.string(c.default.Bqsamd),
        minutes: c.default.kX3wJg,
        hours: c.default.J18GbG,
        yesterday: T.intl.string(c.default.Ln9zMn),
        days: c.default.WRtySz,
        date: c.default.Y3ZYtM,
    });
