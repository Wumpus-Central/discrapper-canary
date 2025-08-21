n.d(t, {
    AG: () => l,
    MY: () => E,
    Mu: () => O,
    Of: () => s,
    QH: () => y,
    TX: () => C,
    U: () => S,
    Wz: () => N,
    YC: () => I,
    _6: () => v,
    _w: () => f,
    dG: () => b,
    f2: () => p,
    i0: () => c,
    iB: () => _,
    ip: () => d,
    ix: () => m,
    ne: () => g,
    tx: () => T,
    vH: () => h,
    zE: () => u,
}),
    n(388685);
var r = n(860911),
    i = n(70956),
    a = n(345909),
    o = n(388032);
let s = 30 * i.Z.Millis.SECOND,
    l = 8,
    c = 3,
    u = 26,
    d = 64,
    f = (e, t) => "https://discord.com/feature/family-center/my-family/".concat(e, "/").concat(t),
    _ = 4,
    p = 5 * i.Z.Millis.MINUTE,
    h = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    m = (0, r.Ft)(
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
    I = (function (e) {
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
let T = new Map([
        [
            3,
            {
                priority: 100,
                tooltipHeader: () => o.intl.string(a.default.kvTgWF),
                tooltipDescription: (e) => (e ? o.intl.string(a.default.cY19ub) : o.intl.string(a.default["K5r+sL"])),
                sectionHeader: (e) => o.intl.formatToPlainString(a.default["4T3zWV"], { count: e }),
                sectionDescription: (e) => (e ? o.intl.string(a.default.cY19ub) : o.intl.string(a.default["K5r+sL"])),
                timestampFormatter: () => ({
                    today: o.intl.string(a.default.fLBUx8),
                    yesterday: o.intl.string(a.default.cHHgxM),
                    days: a.default.qvKjp6,
                }),
            },
        ],
        [
            5,
            {
                priority: 200,
                tooltipHeader: () => o.intl.string(a.default.D7Sng4),
                tooltipDescription: (e) => (e ? o.intl.string(a.default["w7j/Li"]) : o.intl.string(a.default.SCIaWF)),
                sectionHeader: (e) => o.intl.formatToPlainString(a.default["0GE4Nj"], { count: e }),
                sectionDescription: (e) => (e ? o.intl.string(a.default["w7j/Li"]) : o.intl.string(a.default.SCIaWF)),
                timestampFormatter: () => ({
                    today: o.intl.string(a.default.IHd5cX),
                    yesterday: o.intl.string(a.default.wOsfxs),
                    days: a.default.oCk8c3,
                }),
            },
        ],
        [
            1,
            {
                priority: 300,
                tooltipHeader: () => o.intl.string(a.default.kIcKAg),
                tooltipDescription: (e) => (e ? o.intl.string(a.default.HvsFJS) : o.intl.string(a.default["1/QpPz"])),
                sectionHeader: (e) => o.intl.formatToPlainString(a.default["TEvo+P"], { count: e }),
                sectionDescription: (e) => (e ? o.intl.string(a.default.HvsFJS) : o.intl.string(a.default["1/QpPz"])),
                timestampFormatter: () => ({
                    today: o.intl.string(a.default.JUHIYW),
                    yesterday: o.intl.string(a.default.GiswUV),
                    days: a.default.fwQgEx,
                }),
            },
        ],
        [
            2,
            {
                priority: 400,
                tooltipHeader: () => o.intl.string(a.default["NulX9/"]),
                tooltipDescription: (e) => (e ? o.intl.string(a.default.Lmz9Vl) : o.intl.string(a.default.MTFxYW)),
                sectionHeader: (e) => o.intl.formatToPlainString(a.default["7feG7e"], { count: e }),
                sectionDescription: (e) => (e ? o.intl.string(a.default.Lmz9Vl) : o.intl.string(a.default.MTFxYW)),
            },
        ],
        [
            4,
            {
                priority: 500,
                tooltipHeader: () => o.intl.string(a.default.CcrbCw),
                tooltipDescription: A,
                sectionHeader: (e) => o.intl.formatToPlainString(a.default.rcPInZ, { count: e }),
                sectionDescription: A,
            },
        ],
    ]),
    S = new Map([
        [
            6,
            {
                priority: 175,
                tooltipHeader: () => o.intl.string(a.default.eo4Fxs),
                tooltipDescription: (e) => (e ? o.intl.string(a.default["Mx+/eX"]) : o.intl.string(a.default.n3otj4)),
                sectionHeader: (e) => o.intl.formatToPlainString(a.default.eGFWUV, { count: e }),
                sectionDescription: (e) => (e ? o.intl.string(a.default["Mx+/eX"]) : o.intl.string(a.default.n3otj4)),
            },
        ],
        [
            7,
            {
                priority: 150,
                tooltipHeader: () => o.intl.string(a.default.aOLJDw),
                tooltipDescription: (e) => (e ? o.intl.string(a.default.c9BHsr) : o.intl.string(a.default["85PtWl"])),
                sectionHeader: (e) => o.intl.formatToPlainString(a.default.SIgpS0, { count: e }),
                sectionDescription: (e) => (e ? o.intl.string(a.default.c9BHsr) : o.intl.string(a.default["85PtWl"])),
            },
        ],
    ]);
function A(e, t) {
    return e
        ? t
            ? o.intl.string(a.default.c0NgBQ)
            : o.intl.string(a.default.dcvNX1)
        : t
          ? o.intl.string(a.default.DLVyFx)
          : o.intl.string(a.default["823ugY"]);
}
let C = () => ({
        seconds: o.intl.string(a.default.CJdoeX),
        minutes: a.default.InzMn5,
        hours: a.default.ErkYCA,
        yesterday: o.intl.string(a.default.GvfssL),
        days: a.default.pWig19,
        date: a.default.MP3kho,
    }),
    N = () => ({
        seconds: o.intl.string(a.default.BqsamZ),
        minutes: a.default.kX3wJi,
        hours: a.default.J18GbG,
        yesterday: o.intl.string(a.default.Ln9zMj),
        days: a.default.WRtyS0,
        date: a.default.Y3ZYtL,
    });
