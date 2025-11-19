n.d(t, {
    AG: () => c,
    MY: () => b,
    Mu: () => v,
    Of: () => l,
    QH: () => O,
    TX: () => C,
    U: () => A,
    Wz: () => N,
    YC: () => T,
    _6: () => I,
    _w: () => _,
    dG: () => y,
    f2: () => h,
    i0: () => u,
    iB: () => p,
    ip: () => f,
    ix: () => g,
    ne: () => E,
    tx: () => S,
    vH: () => m,
    zE: () => d,
}),
    n(388685);
var r = n(860911),
    i = n(70956),
    a = n(546791),
    o = n(597754),
    s = n(388032);
let l = 30 * i.Z.Millis.SECOND,
    c = 8,
    u = 3,
    d = 26,
    f = 64,
    _ = (e, t) => "https://discord.com/feature/family-center/my-family/".concat(e, "/").concat(t),
    p = 4,
    h = 5 * i.Z.Millis.MINUTE,
    m = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    g = (0, r.Ft)(
        Object.freeze({
            FAMILY_CENTER_SETTINGS: "/family-center/settings",
            FAMILY_CENTER_MY_FAMILY: "/family-center/my-family",
        }),
        [":", "?", "@"],
    );
var E = (function (e) {
        return (
            (e[(e.PENDING = 1)] = "PENDING"),
            (e[(e.ACTIVE = 2)] = "ACTIVE"),
            (e[(e.INACTIVE = 3)] = "INACTIVE"),
            (e[(e.DECLINED = 4)] = "DECLINED"),
            (e[(e.EXPIRED = 5)] = "EXPIRED"),
            e
        );
    })({}),
    b = (function (e) {
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
    y = (function (e) {
        return (
            (e.ACTIVITY = "ACTIVITY"),
            (e.REQUESTS = "REQUESTS"),
            (e.SETTINGS = "SETTINGS"),
            (e.CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL"),
            (e.DATA_AND_PRIVACY = "DATA_AND_PRIVACY"),
            e
        );
    })({}),
    O = (function (e) {
        return (
            (e[(e.ACTIVITY = 0)] = "ACTIVITY"),
            (e[(e.REQUESTS = 1)] = "REQUESTS"),
            (e[(e.SETTINGS = 2)] = "SETTINGS"),
            (e[(e.CONTENT_AND_SOCIAL = 3)] = "CONTENT_AND_SOCIAL"),
            (e[(e.DATA_AND_PRIVACY = 4)] = "DATA_AND_PRIVACY"),
            e
        );
    })({}),
    v = (function (e) {
        return (e.SIDENAV = "SIDENAV"), (e.SETTINGS = "SETTINGS"), e;
    })({}),
    I = (function (e) {
        return (e[(e.SIDENAV = 0)] = "SIDENAV"), (e[(e.SETTINGS = 1)] = "SETTINGS"), e;
    })({}),
    T = (function (e) {
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
let S = new Map([
        [
            3,
            {
                priority: 100,
                tooltipHeader: () => s.intl.string(o.default.kvTgWP),
                tooltipDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default.cY19uR), s.intl.string(o.default.w4wmnb))
                        : (0, a.lW)(s.intl.string(o.default["K5r+sN"]), s.intl.string(o.default.foTzbd)),
                sectionHeader: (e) => s.intl.formatToPlainString(o.default["4T3zWT"], { count: e }),
                sectionDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default.cY19uR), s.intl.string(o.default.w4wmnb))
                        : (0, a.lW)(s.intl.string(o.default["K5r+sN"]), s.intl.string(o.default.foTzbd)),
                timestampFormatter: () => ({
                    today: s.intl.string(o.default.fLBUx7),
                    yesterday: s.intl.string(o.default.cHHgxI),
                    days: o.default.qvKjp8,
                }),
            },
        ],
        [
            5,
            {
                priority: 200,
                tooltipHeader: () => s.intl.string(o.default.D7Sngz),
                tooltipDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default["w7j/Lt"]), s.intl.string(o.default.aiAhnQ))
                        : (0, a.lW)(s.intl.string(o.default.SCIaWK), s.intl.string(o.default["4ufgdz"])),
                sectionHeader: (e) => s.intl.formatToPlainString(o.default["0GE4Ni"], { count: e }),
                sectionDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default["w7j/Lt"]), s.intl.string(o.default.aiAhnQ))
                        : (0, a.lW)(s.intl.string(o.default.SCIaWK), s.intl.string(o.default["4ufgdz"])),
                timestampFormatter: () => ({
                    today: s.intl.string(o.default.IHd5cZ),
                    yesterday: s.intl.string(o.default.wOsfxv),
                    days: o.default.oCk8c4,
                }),
            },
        ],
        [
            1,
            {
                priority: 300,
                tooltipHeader: () => s.intl.string(o.default.kIcKAj),
                tooltipDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default.HvsFJf), s.intl.string(o.default.BkVb1X))
                        : (0, a.lW)(s.intl.string(o.default["1/QpPy"]), s.intl.string(o.default.mpHHfa)),
                sectionHeader: (e) => s.intl.formatToPlainString(o.default["TEvo+H"], { count: e }),
                sectionDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default.HvsFJf), s.intl.string(o.default.BkVb1X))
                        : (0, a.lW)(s.intl.string(o.default["1/QpPy"]), s.intl.string(o.default.mpHHfa)),
                timestampFormatter: () => ({
                    today: s.intl.string(o.default.JUHIYZ),
                    yesterday: s.intl.string(o.default.GiswUW),
                    days: o.default["fwQgE/"],
                }),
            },
        ],
        [
            2,
            {
                priority: 400,
                tooltipHeader: () => (0, a.lW)(s.intl.string(o.default["NulX9+"]), s.intl.string(o.default.uav9Bh)),
                tooltipDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default.Lmz9Vh), s.intl.string(o.default.LVNgTD))
                        : (0, a.lW)(s.intl.string(o.default.MTFxYc), s.intl.string(o.default.TA8GFt)),
                sectionHeader: (e) => s.intl.formatToPlainString(o.default["7feG7T"], { count: e }),
                sectionDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default.Lmz9Vh), s.intl.string(o.default.LVNgTD))
                        : (0, a.lW)(s.intl.string(o.default.MTFxYc), s.intl.string(o.default.TA8GFt)),
            },
        ],
        [
            4,
            {
                priority: 500,
                tooltipHeader: () => s.intl.string(o.default.CcrbCw),
                tooltipDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default.c0NgBX), s.intl.string(o.default.BLgIrk))
                        : (0, a.lW)(s.intl.string(o.default.DLVyFw), s.intl.string(o.default.sSJauZ)),
                sectionHeader: (e) => s.intl.formatToPlainString(o.default.rcPInc, { count: e }),
                sectionDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default.c0NgBX), s.intl.string(o.default.BLgIrk))
                        : (0, a.lW)(s.intl.string(o.default.DLVyFw), s.intl.string(o.default.sSJauZ)),
            },
        ],
    ]),
    A = new Map([
        [
            6,
            {
                priority: 175,
                tooltipHeader: () => s.intl.string(o.default.eo4Fxh),
                tooltipDescription: () => s.intl.string(o.default["O/AElu"]),
                sectionHeader: (e) => s.intl.formatToPlainString(o.default.eGFWUd, { count: e }),
                sectionDescription: () => s.intl.string(o.default["O/AElu"]),
            },
        ],
        [
            7,
            {
                priority: 150,
                tooltipHeader: () => s.intl.string(o.default.NMYKsh),
                tooltipDescription: (e) => (e ? s.intl.string(o.default.cqIdqZ) : s.intl.string(o.default["85PtWu"])),
                sectionHeader: (e) => s.intl.formatToPlainString(o.default.FPViWL, { amount: e }),
                sectionDescription: (e) => (e ? s.intl.string(o.default.cqIdqZ) : s.intl.string(o.default["85PtWu"])),
            },
        ],
    ]),
    C = () => ({
        seconds: s.intl.string(o.default.CJdoee),
        minutes: o.default.InzMn3,
        hours: o.default.ErkYCI,
        yesterday: s.intl.string(o.default.GvfssA),
        days: o.default.pWig18,
        date: o.default.MP3khg,
    }),
    N = () => ({
        seconds: s.intl.string(o.default.Bqsamd),
        minutes: o.default.kX3wJg,
        hours: o.default.J18GbG,
        yesterday: s.intl.string(o.default.Ln9zMn),
        days: o.default.WRtySz,
        date: o.default.Y3ZYtM,
    });
