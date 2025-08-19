n.d(e, {
    AG: () => f,
    MY: () => h,
    Mu: () => U,
    Of: () => T,
    QH: () => M,
    TX: () => v,
    U: () => Y,
    Wz: () => F,
    YC: () => b,
    _6: () => D,
    _w: () => p,
    dG: () => R,
    f2: () => y,
    i0: () => S,
    iB: () => g,
    ip: () => C,
    ix: () => N,
    ne: () => L,
    tx: () => O,
    vH: () => A,
    zE: () => I,
}),
    n(388685);
var i,
    r,
    l,
    a,
    o,
    d,
    s,
    u = n(860911),
    E = n(70956),
    c = n(345909),
    _ = n(388032);
let T = 30 * E.Z.Millis.SECOND,
    f = 8,
    S = 3,
    I = 26,
    C = 64,
    p = (t, e) => "https://discord.com/feature/family-center/my-family/".concat(t, "/").concat(e),
    g = 4,
    y = 5 * E.Z.Millis.MINUTE,
    A = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    N = (0, u.Ft)(
        Object.freeze({
            FAMILY_CENTER_SETTINGS: "/family-center/settings",
            FAMILY_CENTER_MY_FAMILY: "/family-center/my-family",
        }),
        [":", "?", "@"],
    );
var L =
        (((i = {})[(i.PENDING = 1)] = "PENDING"),
        (i[(i.ACTIVE = 2)] = "ACTIVE"),
        (i[(i.INACTIVE = 3)] = "INACTIVE"),
        (i[(i.DECLINED = 4)] = "DECLINED"),
        (i[(i.EXPIRED = 5)] = "EXPIRED"),
        i),
    h =
        (((r = {})[(r.USER_ADD = 1)] = "USER_ADD"),
        (r[(r.GUILD_ADD = 2)] = "GUILD_ADD"),
        (r[(r.USER_INTERACTION = 3)] = "USER_INTERACTION"),
        (r[(r.GUILD_INTERACTION = 4)] = "GUILD_INTERACTION"),
        (r[(r.USER_CALLED = 5)] = "USER_CALLED"),
        (r[(r.TOTAL_VOICE_MINUTES = 6)] = "TOTAL_VOICE_MINUTES"),
        (r[(r.PURCHASES = 7)] = "PURCHASES"),
        r),
    R = (((l = {}).ACTIVITY = "ACTIVITY"), (l.REQUESTS = "REQUESTS"), (l.SETTINGS = "SETTINGS"), l),
    M =
        (((a = {})[(a.ACTIVITY = 0)] = "ACTIVITY"),
        (a[(a.REQUESTS = 1)] = "REQUESTS"),
        (a[(a.SETTINGS = 2)] = "SETTINGS"),
        a),
    U = (((o = {}).SIDENAV = "SIDENAV"), (o.SETTINGS = "SETTINGS"), o),
    D = (((d = {})[(d.SIDENAV = 0)] = "SIDENAV"), (d[(d.SETTINGS = 1)] = "SETTINGS"), d),
    b =
        (((s = {})[(s.TabChange = 0)] = "TabChange"),
        (s[(s.ShowQRCodeModal = 1)] = "ShowQRCodeModal"),
        (s[(s.RevealQRCode = 2)] = "RevealQRCode"),
        (s[(s.ScanQRCodeButton = 3)] = "ScanQRCodeButton"),
        (s[(s.ScanQRCode = 4)] = "ScanQRCode"),
        (s[(s.LoadMore = 5)] = "LoadMore"),
        (s[(s.SelectTeen = 6)] = "SelectTeen"),
        (s[(s.HideQRCode = 7)] = "HideQRCode"),
        s);
let O = new Map([
        [
            3,
            {
                priority: 100,
                tooltipHeader: () => _.intl.string(c.default.kvTgWF),
                tooltipDescription: (t) => (t ? _.intl.string(c.default.cY19ub) : _.intl.string(c.default["K5r+sL"])),
                sectionHeader: (t) => _.intl.formatToPlainString(c.default["4T3zWV"], { count: t }),
                sectionDescription: (t) => (t ? _.intl.string(c.default.cY19ub) : _.intl.string(c.default["K5r+sL"])),
                timestampFormatter: () => ({
                    today: _.intl.string(c.default.fLBUx8),
                    yesterday: _.intl.string(c.default.cHHgxM),
                    days: c.default.qvKjp6,
                }),
            },
        ],
        [
            5,
            {
                priority: 200,
                tooltipHeader: () => _.intl.string(c.default.D7Sng4),
                tooltipDescription: (t) => (t ? _.intl.string(c.default["w7j/Li"]) : _.intl.string(c.default.SCIaWF)),
                sectionHeader: (t) => _.intl.formatToPlainString(c.default["0GE4Nj"], { count: t }),
                sectionDescription: (t) => (t ? _.intl.string(c.default["w7j/Li"]) : _.intl.string(c.default.SCIaWF)),
                timestampFormatter: () => ({
                    today: _.intl.string(c.default.IHd5cX),
                    yesterday: _.intl.string(c.default.wOsfxs),
                    days: c.default.oCk8c3,
                }),
            },
        ],
        [
            1,
            {
                priority: 300,
                tooltipHeader: () => _.intl.string(c.default.kIcKAg),
                tooltipDescription: (t) => (t ? _.intl.string(c.default.HvsFJS) : _.intl.string(c.default["1/QpPz"])),
                sectionHeader: (t) => _.intl.formatToPlainString(c.default["TEvo+P"], { count: t }),
                sectionDescription: (t) => (t ? _.intl.string(c.default.HvsFJS) : _.intl.string(c.default["1/QpPz"])),
                timestampFormatter: () => ({
                    today: _.intl.string(c.default.JUHIYW),
                    yesterday: _.intl.string(c.default.GiswUV),
                    days: c.default.fwQgEx,
                }),
            },
        ],
        [
            2,
            {
                priority: 400,
                tooltipHeader: () => _.intl.string(c.default["NulX9/"]),
                tooltipDescription: (t) => (t ? _.intl.string(c.default.Lmz9Vl) : _.intl.string(c.default.MTFxYW)),
                sectionHeader: (t) => _.intl.formatToPlainString(c.default["7feG7e"], { count: t }),
                sectionDescription: (t) => (t ? _.intl.string(c.default.Lmz9Vl) : _.intl.string(c.default.MTFxYW)),
            },
        ],
        [
            4,
            {
                priority: 500,
                tooltipHeader: () => _.intl.string(c.default.CcrbCw),
                tooltipDescription: m,
                sectionHeader: (t) => _.intl.formatToPlainString(c.default.rcPInZ, { count: t }),
                sectionDescription: m,
            },
        ],
    ]),
    Y = new Map([
        [
            6,
            {
                priority: 175,
                tooltipHeader: () => _.intl.string(c.default.eo4Fxs),
                tooltipDescription: (t) => (t ? _.intl.string(c.default["Mx+/eX"]) : _.intl.string(c.default.n3otj4)),
                sectionHeader: (t) => _.intl.formatToPlainString(c.default.eGFWUV, { count: t }),
                sectionDescription: (t) => (t ? _.intl.string(c.default["Mx+/eX"]) : _.intl.string(c.default.n3otj4)),
            },
        ],
        [
            7,
            {
                priority: 150,
                tooltipHeader: () => _.intl.string(c.default.aOLJDw),
                tooltipDescription: (t) => (t ? _.intl.string(c.default.c9BHsr) : _.intl.string(c.default["85PtWl"])),
                sectionHeader: (t) => _.intl.formatToPlainString(c.default.SIgpS0, { count: t }),
                sectionDescription: (t) => (t ? _.intl.string(c.default.c9BHsr) : _.intl.string(c.default["85PtWl"])),
            },
        ],
    ]);
function m(t, e) {
    return t
        ? e
            ? _.intl.string(c.default.c0NgBQ)
            : _.intl.string(c.default.dcvNX1)
        : e
          ? _.intl.string(c.default.DLVyFx)
          : _.intl.string(c.default["823ugY"]);
}
let v = () => ({
        seconds: _.intl.string(c.default.CJdoeX),
        minutes: c.default.InzMn5,
        hours: c.default.ErkYCA,
        yesterday: _.intl.string(c.default.GvfssL),
        days: c.default.pWig19,
        date: c.default.MP3kho,
    }),
    F = () => ({
        seconds: _.intl.string(c.default.BqsamZ),
        minutes: c.default.kX3wJi,
        hours: c.default.J18GbG,
        yesterday: _.intl.string(c.default.Ln9zMj),
        days: c.default.WRtyS0,
        date: c.default.Y3ZYtL,
    });
