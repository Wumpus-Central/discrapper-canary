n.d(e, {
    AG: () => S,
    MY: () => L,
    Mu: () => M,
    Of: () => T,
    QH: () => b,
    TX: () => O,
    Wz: () => m,
    YC: () => D,
    _6: () => Z,
    _w: () => p,
    dG: () => R,
    f2: () => y,
    i0: () => N,
    iB: () => f,
    ip: () => C,
    ix: () => g,
    ne: () => h,
    tx: () => U,
    vH: () => A,
    zE: () => I
}),
    n(47120);
var r,
    i,
    a,
    o,
    s,
    l,
    d,
    E = n(860911),
    u = n(70956),
    c = n(332495),
    _ = n(388032);
let T = 30 * u.Z.Millis.SECOND,
    S = 8,
    N = 3,
    I = 26,
    C = 64,
    p = (t, e) => 'https://discord.com/feature/family-center/my-family/'.concat(t, '/').concat(e),
    f = 4,
    y = 5 * u.Z.Millis.MINUTE,
    A = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    g = (0, E.Ft)(
        Object.freeze({
            FAMILY_CENTER_SETTINGS: '/family-center/settings',
            FAMILY_CENTER_MY_FAMILY: '/family-center/my-family'
        }),
        [':', '?', '@']
    );
var h = (((r = {})[(r.PENDING = 1)] = 'PENDING'), (r[(r.ACTIVE = 2)] = 'ACTIVE'), (r[(r.INACTIVE = 3)] = 'INACTIVE'), (r[(r.DECLINED = 4)] = 'DECLINED'), (r[(r.EXPIRED = 5)] = 'EXPIRED'), r),
    L = (((i = {})[(i.USER_ADD = 1)] = 'USER_ADD'), (i[(i.GUILD_ADD = 2)] = 'GUILD_ADD'), (i[(i.USER_INTERACTION = 3)] = 'USER_INTERACTION'), (i[(i.GUILD_INTERACTION = 4)] = 'GUILD_INTERACTION'), (i[(i.USER_CALLED = 5)] = 'USER_CALLED'), i),
    R = (((a = {}).ACTIVITY = 'ACTIVITY'), (a.REQUESTS = 'REQUESTS'), (a.SETTINGS = 'SETTINGS'), a),
    b = (((o = {})[(o.ACTIVITY = 0)] = 'ACTIVITY'), (o[(o.REQUESTS = 1)] = 'REQUESTS'), (o[(o.SETTINGS = 2)] = 'SETTINGS'), o),
    M = (((s = {}).SIDENAV = 'SIDENAV'), (s.SETTINGS = 'SETTINGS'), s),
    Z = (((l = {})[(l.SIDENAV = 0)] = 'SIDENAV'), (l[(l.SETTINGS = 1)] = 'SETTINGS'), l),
    D = (((d = {})[(d.TabChange = 0)] = 'TabChange'), (d[(d.ShowQRCodeModal = 1)] = 'ShowQRCodeModal'), (d[(d.RevealQRCode = 2)] = 'RevealQRCode'), (d[(d.ScanQRCodeButton = 3)] = 'ScanQRCodeButton'), (d[(d.ScanQRCode = 4)] = 'ScanQRCode'), (d[(d.LoadMore = 5)] = 'LoadMore'), (d[(d.SelectTeen = 6)] = 'SelectTeen'), (d[(d.HideQRCode = 7)] = 'HideQRCode'), d);
let U = new Map([
    [
        3,
        {
            tooltipHeader: () => _.NW.string(c.Z.kvTgWF),
            tooltipDescription: (t) => (t ? _.NW.string(c.Z.cY19ub) : _.NW.string(c.Z['K5r+sL'])),
            sectionHeader: (t) => _.NW.formatToPlainString(c.Z['4T3zWV'], { count: t }),
            sectionDescription: (t) => (t ? _.NW.string(c.Z.cY19ub) : _.NW.string(c.Z['K5r+sL'])),
            timestampFormatter: () => ({
                today: _.NW.string(c.Z.fLBUx8),
                yesterday: _.NW.string(c.Z.cHHgxM),
                days: c.Z.qvKjp6
            })
        }
    ],
    [
        5,
        {
            tooltipHeader: () => _.NW.string(c.Z.D7Sng4),
            tooltipDescription: (t) => (t ? _.NW.string(c.Z['w7j/Li']) : _.NW.string(c.Z.SCIaWF)),
            sectionHeader: (t) => _.NW.formatToPlainString(c.Z['0GE4Nj'], { count: t }),
            sectionDescription: (t) => (t ? _.NW.string(c.Z['w7j/Li']) : _.NW.string(c.Z.SCIaWF)),
            timestampFormatter: () => ({
                today: _.NW.string(c.Z.IHd5cX),
                yesterday: _.NW.string(c.Z.wOsfxs),
                days: c.Z.oCk8c3
            })
        }
    ],
    [
        1,
        {
            tooltipHeader: () => _.NW.string(c.Z.kIcKAg),
            tooltipDescription: (t) => (t ? _.NW.string(c.Z.HvsFJS) : _.NW.string(c.Z['1/QpPz'])),
            sectionHeader: (t) => _.NW.formatToPlainString(c.Z['TEvo+P'], { count: t }),
            sectionDescription: (t) => (t ? _.NW.string(c.Z.HvsFJS) : _.NW.string(c.Z['1/QpPz'])),
            timestampFormatter: () => ({
                today: _.NW.string(c.Z.JUHIYW),
                yesterday: _.NW.string(c.Z.GiswUV),
                days: c.Z.fwQgEx
            })
        }
    ],
    [
        2,
        {
            tooltipHeader: () => _.NW.string(c.Z['NulX9/']),
            tooltipDescription: (t) => (t ? _.NW.string(c.Z.Lmz9Vl) : _.NW.string(c.Z.MTFxYW)),
            sectionHeader: (t) => _.NW.formatToPlainString(c.Z['7feG7e'], { count: t }),
            sectionDescription: (t) => (t ? _.NW.string(c.Z.Lmz9Vl) : _.NW.string(c.Z.MTFxYW))
        }
    ],
    [
        4,
        {
            tooltipHeader: () => _.NW.string(c.Z.CcrbCw),
            tooltipDescription: Y,
            sectionHeader: (t) => _.NW.formatToPlainString(c.Z.rcPInZ, { count: t }),
            sectionDescription: Y
        }
    ]
]);
function Y(t, e) {
    return t ? (e ? _.NW.string(c.Z.c0NgBQ) : _.NW.string(c.Z.dcvNX1)) : e ? _.NW.string(c.Z.DLVyFx) : _.NW.string(c.Z['823ugY']);
}
let O = () => ({
        seconds: _.NW.string(c.Z.CJdoeX),
        minutes: c.Z.InzMn5,
        hours: c.Z.ErkYCA,
        yesterday: _.NW.string(c.Z.GvfssL),
        days: c.Z.pWig19,
        date: c.Z.MP3kho
    }),
    m = () => ({
        seconds: _.NW.string(c.Z.BqsamZ),
        minutes: c.Z.kX3wJi,
        hours: c.Z.J18GbG,
        yesterday: _.NW.string(c.Z.Ln9zMj),
        days: c.Z.WRtyS0,
        date: c.Z.Y3ZYtL
    });
