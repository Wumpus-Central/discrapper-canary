n.d(t, {
    AG: () => l,
    MY: () => E,
    Mu: () => O,
    Of: () => s,
    QH: () => y,
    TX: () => T,
    Wz: () => C,
    YC: () => S,
    _6: () => v,
    _w: () => f,
    dG: () => b,
    f2: () => _,
    i0: () => c,
    iB: () => p,
    ip: () => d,
    ix: () => h,
    ne: () => g,
    tx: () => I,
    vH: () => m,
    zE: () => u,
}),
    n(388685);
var r = n(860911),
    i = n(70956),
    a = n(517319),
    o = n(388032);
let s = 30 * i.Z.Millis.SECOND,
    l = 8,
    c = 3,
    u = 26,
    d = 64,
    f = (e, t) => "https://discord.com/feature/family-center/my-family/".concat(e, "/").concat(t),
    p = 4,
    _ = 5 * i.Z.Millis.MINUTE,
    m = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    h = (0, r.Ft)(
        Object.freeze({
            FAMILY_CENTER_SETTINGS: "/family-center/settings",
            FAMILY_CENTER_MY_FAMILY: "/family-center/my-family",
        }),
        [":", "?", "@"],
    );
var g = (function (e) {
        return (
            (e[(e.PENDING = 1)] = "PENDING"),
            (e[(e.ACTIVE = 2)] = "ACTIVE"),
            (e[(e.INACTIVE = 3)] = "INACTIVE"),
            (e[(e.DECLINED = 4)] = "DECLINED"),
            (e[(e.EXPIRED = 5)] = "EXPIRED"),
            e
        );
    })({}),
    E = (function (e) {
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
    b = (function (e) {
        return (
            (e.ACTIVITY = "ACTIVITY"),
            (e.REQUESTS = "REQUESTS"),
            (e.SETTINGS = "SETTINGS"),
            (e.CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL"),
            (e.DATA_AND_PRIVACY = "DATA_AND_PRIVACY"),
            e
        );
    })({}),
    y = (function (e) {
        return (
            (e[(e.ACTIVITY = 0)] = "ACTIVITY"),
            (e[(e.REQUESTS = 1)] = "REQUESTS"),
            (e[(e.SETTINGS = 2)] = "SETTINGS"),
            (e[(e.CONTENT_AND_SOCIAL = 3)] = "CONTENT_AND_SOCIAL"),
            (e[(e.DATA_AND_PRIVACY = 4)] = "DATA_AND_PRIVACY"),
            e
        );
    })({}),
    O = (function (e) {
        return (e.SIDENAV = "SIDENAV"), (e.SETTINGS = "SETTINGS"), e;
    })({}),
    v = (function (e) {
        return (e[(e.SIDENAV = 0)] = "SIDENAV"), (e[(e.SETTINGS = 1)] = "SETTINGS"), e;
    })({}),
    S = (function (e) {
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
let I = new Map([
        [
            3,
            {
                priority: 100,
                tooltipHeader: () => o.intl.string(a.default.kvTgWP),
                tooltipDescription: (e) => (e ? o.intl.string(a.default.w4wmnb) : o.intl.string(a.default.foTzbd)),
                sectionHeader: (e) => o.intl.formatToPlainString(a.default["4T3zWT"], { count: e }),
                sectionDescription: (e) => (e ? o.intl.string(a.default.w4wmnb) : o.intl.string(a.default.foTzbd)),
                timestampFormatter: () => ({
                    today: o.intl.string(a.default.fLBUx7),
                    yesterday: o.intl.string(a.default.cHHgxI),
                    days: a.default.qvKjp8,
                }),
            },
        ],
        [
            5,
            {
                priority: 200,
                tooltipHeader: () => o.intl.string(a.default.D7Sngz),
                tooltipDescription: (e) => (e ? o.intl.string(a.default.aiAhnQ) : o.intl.string(a.default["4ufgdz"])),
                sectionHeader: (e) => o.intl.formatToPlainString(a.default["0GE4Ni"], { count: e }),
                sectionDescription: (e) => (e ? o.intl.string(a.default.aiAhnQ) : o.intl.string(a.default["4ufgdz"])),
                timestampFormatter: () => ({
                    today: o.intl.string(a.default.IHd5cZ),
                    yesterday: o.intl.string(a.default.wOsfxv),
                    days: a.default.oCk8c4,
                }),
            },
        ],
        [
            1,
            {
                priority: 300,
                tooltipHeader: () => o.intl.string(a.default.kIcKAj),
                tooltipDescription: (e) => (e ? o.intl.string(a.default.BkVb1X) : o.intl.string(a.default.mpHHfa)),
                sectionHeader: (e) => o.intl.formatToPlainString(a.default["TEvo+H"], { count: e }),
                sectionDescription: (e) => (e ? o.intl.string(a.default.BkVb1X) : o.intl.string(a.default.mpHHfa)),
                timestampFormatter: () => ({
                    today: o.intl.string(a.default.JUHIYZ),
                    yesterday: o.intl.string(a.default.GiswUW),
                    days: a.default["fwQgE/"],
                }),
            },
        ],
        [
            2,
            {
                priority: 400,
                tooltipHeader: () => o.intl.string(a.default.uav9Bh),
                tooltipDescription: (e) => (e ? o.intl.string(a.default.LVNgTD) : o.intl.string(a.default.TA8GFt)),
                sectionHeader: (e) => o.intl.formatToPlainString(a.default["7feG7T"], { count: e }),
                sectionDescription: (e) => (e ? o.intl.string(a.default.LVNgTD) : o.intl.string(a.default.TA8GFt)),
            },
        ],
        [
            4,
            {
                priority: 500,
                tooltipHeader: () => o.intl.string(a.default.CcrbCw),
                tooltipDescription: (e) => (e ? o.intl.string(a.default.BLgIrk) : o.intl.string(a.default.sSJauZ)),
                sectionHeader: (e) => o.intl.formatToPlainString(a.default.rcPInc, { count: e }),
                sectionDescription: (e) => (e ? o.intl.string(a.default.BLgIrk) : o.intl.string(a.default.sSJauZ)),
            },
        ],
        [
            6,
            {
                priority: 175,
                tooltipHeader: () => o.intl.string(a.default.eo4Fxh),
                tooltipDescription: () => o.intl.string(a.default["O/AElu"]),
                sectionHeader: (e) => o.intl.formatToPlainString(a.default.eGFWUd, { count: e }),
                sectionDescription: () => o.intl.string(a.default["O/AElu"]),
            },
        ],
        [
            7,
            {
                priority: 150,
                tooltipHeader: () => o.intl.string(a.default.NMYKsh),
                tooltipDescription: (e) => (e ? o.intl.string(a.default.cqIdqZ) : o.intl.string(a.default["85PtWu"])),
                sectionHeader: (e) => o.intl.formatToPlainString(a.default.FPViWL, { amount: e }),
                sectionDescription: (e) => (e ? o.intl.string(a.default.cqIdqZ) : o.intl.string(a.default["85PtWu"])),
            },
        ],
    ]),
    T = () => ({
        seconds: o.intl.string(a.default.CJdoee),
        minutes: a.default.InzMn3,
        hours: a.default.ErkYCI,
        yesterday: o.intl.string(a.default.GvfssA),
        days: a.default.pWig18,
        date: a.default.MP3khg,
    }),
    C = () => ({
        seconds: o.intl.string(a.default.Bqsamd),
        minutes: a.default.kX3wJg,
        hours: a.default.J18GbG,
        yesterday: o.intl.string(a.default.Ln9zMn),
        days: a.default.WRtySz,
        date: a.default.Y3ZYtM,
    });
