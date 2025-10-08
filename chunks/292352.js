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
    o = n(345909),
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
                tooltipHeader: () => s.intl.string(o.default.kvTgWF),
                tooltipDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default.cY19ub), s.intl.string(o.default.w4wmnZ))
                        : (0, a.lW)(s.intl.string(o.default["K5r+sL"]), s.intl.string(o.default.foTzbW)),
                sectionHeader: (e) => s.intl.formatToPlainString(o.default["4T3zWV"], { count: e }),
                sectionDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default.cY19ub), s.intl.string(o.default.w4wmnZ))
                        : (0, a.lW)(s.intl.string(o.default["K5r+sL"]), s.intl.string(o.default.foTzbW)),
                timestampFormatter: () => ({
                    today: s.intl.string(o.default.fLBUx8),
                    yesterday: s.intl.string(o.default.cHHgxM),
                    days: o.default.qvKjp6,
                }),
            },
        ],
        [
            5,
            {
                priority: 200,
                tooltipHeader: () => s.intl.string(o.default.D7Sng4),
                tooltipDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default["w7j/Li"]), s.intl.string(o.default.aiAhnZ))
                        : (0, a.lW)(s.intl.string(o.default.SCIaWF), s.intl.string(o.default["4ufgd3"])),
                sectionHeader: (e) => s.intl.formatToPlainString(o.default["0GE4Nj"], { count: e }),
                sectionDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default["w7j/Li"]), s.intl.string(o.default.aiAhnZ))
                        : (0, a.lW)(s.intl.string(o.default.SCIaWF), s.intl.string(o.default["4ufgd3"])),
                timestampFormatter: () => ({
                    today: s.intl.string(o.default.IHd5cX),
                    yesterday: s.intl.string(o.default.wOsfxs),
                    days: o.default.oCk8c3,
                }),
            },
        ],
        [
            1,
            {
                priority: 300,
                tooltipHeader: () => s.intl.string(o.default.kIcKAg),
                tooltipDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default.HvsFJS), s.intl.string(o.default.BkVb1d))
                        : (0, a.lW)(s.intl.string(o.default["1/QpPz"]), s.intl.string(o.default.mpHHfX)),
                sectionHeader: (e) => s.intl.formatToPlainString(o.default["TEvo+P"], { count: e }),
                sectionDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default.HvsFJS), s.intl.string(o.default.BkVb1d))
                        : (0, a.lW)(s.intl.string(o.default["1/QpPz"]), s.intl.string(o.default.mpHHfX)),
                timestampFormatter: () => ({
                    today: s.intl.string(o.default.JUHIYW),
                    yesterday: s.intl.string(o.default.GiswUV),
                    days: o.default.fwQgEx,
                }),
            },
        ],
        [
            2,
            {
                priority: 400,
                tooltipHeader: () => (0, a.lW)(s.intl.string(o.default["NulX9/"]), s.intl.string(o.default.uav9Bg)),
                tooltipDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default.Lmz9Vl), s.intl.string(o.default.LVNgTE))
                        : (0, a.lW)(s.intl.string(o.default.MTFxYW), s.intl.string(o.default.TA8GFh)),
                sectionHeader: (e) => s.intl.formatToPlainString(o.default["7feG7e"], { count: e }),
                sectionDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default.Lmz9Vl), s.intl.string(o.default.LVNgTE))
                        : (0, a.lW)(s.intl.string(o.default.MTFxYW), s.intl.string(o.default.TA8GFh)),
            },
        ],
        [
            4,
            {
                priority: 500,
                tooltipHeader: () => s.intl.string(o.default.CcrbCw),
                tooltipDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default.c0NgBQ), s.intl.string(o.default.BLgIrq))
                        : (0, a.lW)(s.intl.string(o.default.DLVyFx), s.intl.string(o.default.sSJaub)),
                sectionHeader: (e) => s.intl.formatToPlainString(o.default.rcPInZ, { count: e }),
                sectionDescription: (e) =>
                    e
                        ? (0, a.lW)(s.intl.string(o.default.c0NgBQ), s.intl.string(o.default.BLgIrq))
                        : (0, a.lW)(s.intl.string(o.default.DLVyFx), s.intl.string(o.default.sSJaub)),
            },
        ],
    ]),
    A = new Map([
        [
            6,
            {
                priority: 175,
                tooltipHeader: () => s.intl.string(o.default.eo4Fxs),
                tooltipDescription: (e) => (e ? s.intl.string(o.default["Mx+/eX"]) : s.intl.string(o.default.n3otj4)),
                sectionHeader: (e) => s.intl.formatToPlainString(o.default.eGFWUV, { count: e }),
                sectionDescription: (e) => (e ? s.intl.string(o.default["Mx+/eX"]) : s.intl.string(o.default.n3otj4)),
            },
        ],
        [
            7,
            {
                priority: 150,
                tooltipHeader: () => s.intl.string(o.default.NMYKsr),
                tooltipDescription: (e) => (e ? s.intl.string(o.default.cqIdqa) : s.intl.string(o.default["85PtWl"])),
                sectionHeader: (e) => s.intl.formatToPlainString(o.default.FPViWF, { amount: e }),
                sectionDescription: (e) => (e ? s.intl.string(o.default.cqIdqa) : s.intl.string(o.default["85PtWl"])),
            },
        ],
    ]),
    C = () => ({
        seconds: s.intl.string(o.default.CJdoeX),
        minutes: o.default.InzMn5,
        hours: o.default.ErkYCA,
        yesterday: s.intl.string(o.default.GvfssL),
        days: o.default.pWig19,
        date: o.default.MP3kho,
    }),
    N = () => ({
        seconds: s.intl.string(o.default.BqsamZ),
        minutes: o.default.kX3wJi,
        hours: o.default.J18GbG,
        yesterday: s.intl.string(o.default.Ln9zMj),
        days: o.default.WRtyS0,
        date: o.default.Y3ZYtL,
    });
