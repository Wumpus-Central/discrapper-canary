"use strict";
n.d(t, {
    EC: () => p,
    Ef: () => g,
    Gg: () => d,
    MH: () => S,
    NV: () => A,
    PH: () => f,
    QM: () => E,
    Y7: () => l,
    dI: () => R,
    fD: () => o,
    h4: () => c,
    he: () => m,
    iN: () => y,
    jZ: () => _,
    kp: () => u,
    lu: () => N,
    ly: () => C,
    nz: () => h,
    qb: () => v,
    u9: () => I,
    zu: () => T,
});
var r = n(323125),
    i = n(927813),
    s = n(221425),
    a = n(985018);
let o = 30 * i.A.Millis.SECOND,
    l = 8,
    u = 3,
    c = 26,
    d = 64,
    _ = (e, t) => `https://discord.com/feature/family-center/my-family/${e}/${t}`,
    f = 4,
    h = 5 * i.A.Millis.MINUTE,
    p = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    m = (0, r.dN)(
        Object.freeze({
            FAMILY_CENTER_SETTINGS: "/family-center/settings",
            FAMILY_CENTER_MY_FAMILY: "/family-center/my-family",
        }),
        [":", "?", "@"],
    );
var E = (function (e) {
        return (e[(e.PARENT = 1)] = "PARENT"), (e[(e.CHILD = 2)] = "CHILD"), e;
    })({}),
    g = (function (e) {
        return (
            (e[(e.PENDING = 1)] = "PENDING"),
            (e[(e.ACTIVE = 2)] = "ACTIVE"),
            (e[(e.INACTIVE = 3)] = "INACTIVE"),
            (e[(e.DECLINED = 4)] = "DECLINED"),
            (e[(e.EXPIRED = 5)] = "EXPIRED"),
            e
        );
    })({}),
    A = (function (e) {
        return (
            (e[(e.USER_ADD = 1)] = "USER_ADD"),
            (e[(e.GUILD_ADD = 2)] = "GUILD_ADD"),
            (e[(e.USER_INTERACTION = 3)] = "USER_INTERACTION"),
            (e[(e.GUILD_INTERACTION = 4)] = "GUILD_INTERACTION"),
            (e[(e.USER_CALLED = 5)] = "USER_CALLED"),
            (e[(e.TOTAL_VOICE_MINUTES = 6)] = "TOTAL_VOICE_MINUTES"),
            (e[(e.PURCHASES = 7)] = "PURCHASES"),
            e
        );
    })({}),
    I = (function (e) {
        return (
            (e.ACTIVITY = "ACTIVITY"),
            (e.REQUESTS = "REQUESTS"),
            (e.SETTINGS = "SETTINGS"),
            (e.CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL"),
            (e.DATA_AND_PRIVACY = "DATA_AND_PRIVACY"),
            (e.SCREEN_TIME_CONTROLS = "SCREEN_TIME_CONTROLS"),
            e
        );
    })({}),
    T = (function (e) {
        return (
            (e[(e.ACTIVITY = 0)] = "ACTIVITY"),
            (e[(e.REQUESTS = 1)] = "REQUESTS"),
            (e[(e.SETTINGS = 2)] = "SETTINGS"),
            (e[(e.CONTENT_AND_SOCIAL = 3)] = "CONTENT_AND_SOCIAL"),
            (e[(e.DATA_AND_PRIVACY = 4)] = "DATA_AND_PRIVACY"),
            (e[(e.SCREEN_TIME_CONTROLS = 5)] = "SCREEN_TIME_CONTROLS"),
            e
        );
    })({}),
    S = (function (e) {
        return (e.SIDENAV = "SIDENAV"), (e.SETTINGS = "SETTINGS"), e;
    })({}),
    y = (function (e) {
        return (e[(e.SIDENAV = 0)] = "SIDENAV"), (e[(e.SETTINGS = 1)] = "SETTINGS"), e;
    })({}),
    v = (function (e) {
        return (
            (e[(e.TabChange = 0)] = "TabChange"),
            (e[(e.ShowQRCodeModal = 1)] = "ShowQRCodeModal"),
            (e[(e.RevealQRCode = 2)] = "RevealQRCode"),
            (e[(e.ScanQRCodeButton = 3)] = "ScanQRCodeButton"),
            (e[(e.ScanQRCode = 4)] = "ScanQRCode"),
            (e[(e.LoadMore = 5)] = "LoadMore"),
            (e[(e.SelectTeen = 6)] = "SelectTeen"),
            (e[(e.HideQRCode = 7)] = "HideQRCode"),
            e
        );
    })({});
let C = new Map([
        [
            3,
            {
                priority: 100,
                tooltipHeader: () => a.intl.string(s.default.kvTgWP),
                tooltipDescription: (e) => (e ? a.intl.string(s.default.w4wmnb) : a.intl.string(s.default.foTzbd)),
                sectionHeader: (e) => a.intl.formatToPlainString(s.default["4T3zWT"], { count: e }),
                sectionDescription: (e) => (e ? a.intl.string(s.default.w4wmnb) : a.intl.string(s.default.foTzbd)),
                timestampFormatter: () => ({
                    today: a.intl.string(s.default.fLBUx7),
                    yesterday: a.intl.string(s.default.cHHgxI),
                    days: s.default.qvKjp8,
                }),
            },
        ],
        [
            5,
            {
                priority: 200,
                tooltipHeader: () => a.intl.string(s.default.D7Sngz),
                tooltipDescription: (e) => (e ? a.intl.string(s.default.aiAhnQ) : a.intl.string(s.default["4ufgdz"])),
                sectionHeader: (e) => a.intl.formatToPlainString(s.default["0GE4Ni"], { count: e }),
                sectionDescription: (e) => (e ? a.intl.string(s.default.aiAhnQ) : a.intl.string(s.default["4ufgdz"])),
                timestampFormatter: () => ({
                    today: a.intl.string(s.default.IHd5cZ),
                    yesterday: a.intl.string(s.default.wOsfxv),
                    days: s.default.oCk8c4,
                }),
            },
        ],
        [
            1,
            {
                priority: 300,
                tooltipHeader: () => a.intl.string(s.default.kIcKAj),
                tooltipDescription: (e) => (e ? a.intl.string(s.default.BkVb1X) : a.intl.string(s.default.mpHHfa)),
                sectionHeader: (e) => a.intl.formatToPlainString(s.default["TEvo+H"], { count: e }),
                sectionDescription: (e) => (e ? a.intl.string(s.default.BkVb1X) : a.intl.string(s.default.mpHHfa)),
                timestampFormatter: () => ({
                    today: a.intl.string(s.default.JUHIYZ),
                    yesterday: a.intl.string(s.default.GiswUW),
                    days: s.default["fwQgE/"],
                }),
            },
        ],
        [
            2,
            {
                priority: 400,
                tooltipHeader: () => a.intl.string(s.default.uav9Bh),
                tooltipDescription: (e) => (e ? a.intl.string(s.default.LVNgTD) : a.intl.string(s.default.TA8GFt)),
                sectionHeader: (e) => a.intl.formatToPlainString(s.default["7feG7T"], { count: e }),
                sectionDescription: (e) => (e ? a.intl.string(s.default.LVNgTD) : a.intl.string(s.default.TA8GFt)),
            },
        ],
        [
            4,
            {
                priority: 500,
                tooltipHeader: () => a.intl.string(s.default.CcrbCw),
                tooltipDescription: (e) => (e ? a.intl.string(s.default.BLgIrk) : a.intl.string(s.default.sSJauZ)),
                sectionHeader: (e) => a.intl.formatToPlainString(s.default.rcPInc, { count: e }),
                sectionDescription: (e) => (e ? a.intl.string(s.default.BLgIrk) : a.intl.string(s.default.sSJauZ)),
            },
        ],
        [
            6,
            {
                priority: 175,
                tooltipHeader: () => a.intl.string(s.default.eo4Fxh),
                tooltipDescription: () => a.intl.string(s.default["O/AElu"]),
                sectionHeader: (e) => a.intl.formatToPlainString(s.default.eGFWUd, { count: e }),
                sectionDescription: () => a.intl.string(s.default["O/AElu"]),
            },
        ],
        [
            7,
            {
                priority: 150,
                tooltipHeader: () => a.intl.string(s.default.NMYKsh),
                tooltipDescription: (e) => (e ? a.intl.string(s.default.cqIdqZ) : a.intl.string(s.default["85PtWu"])),
                sectionHeader: (e) => a.intl.formatToPlainString(s.default.FPViWL, { amount: e }),
                sectionDescription: (e) => (e ? a.intl.string(s.default.cqIdqZ) : a.intl.string(s.default["85PtWu"])),
            },
        ],
    ]),
    N = () => ({
        seconds: a.intl.string(s.default.CJdoee),
        minutes: s.default.InzMn3,
        hours: s.default.ErkYCI,
        yesterday: a.intl.string(s.default.GvfssA),
        days: s.default.pWig18,
        date: s.default.MP3khg,
    }),
    R = () => ({
        seconds: a.intl.string(s.default.Bqsamd),
        minutes: s.default.kX3wJg,
        hours: s.default.J18GbG,
        yesterday: a.intl.string(s.default.Ln9zMn),
        days: s.default.WRtySz,
        date: s.default.Y3ZYtM,
    });
