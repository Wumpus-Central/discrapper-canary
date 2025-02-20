n.d(e, {
    AG: () => T,
    MY: () => L,
    Mu: () => D,
    Of: () => _,
    QH: () => M,
    TX: () => O,
    Wz: () => m,
    YC: () => v,
    _6: () => U,
    _w: () => C,
    dG: () => R,
    f2: () => A,
    i0: () => S,
    iB: () => y,
    ip: () => I,
    ix: () => g,
    ne: () => f,
    tx: () => Y,
    vH: () => p,
    zE: () => N
}),
    n(47120);
var r,
    i,
    o,
    a,
    s,
    l,
    E,
    u = n(860911),
    d = n(70956),
    c = n(388032);
let _ = 30 * d.Z.Millis.SECOND,
    T = 8,
    S = 3,
    N = 26,
    I = 64,
    C = (t, e) => 'https://discord.com/feature/family-center/my-family/'.concat(t, '/').concat(e),
    y = 4,
    A = 5 * d.Z.Millis.MINUTE,
    p = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    g = (0, u.Ft)(
        Object.freeze({
            FAMILY_CENTER_SETTINGS: '/family-center/settings',
            FAMILY_CENTER_MY_FAMILY: '/family-center/my-family'
        }),
        [':', '?', '@']
    );
var f = (((r = {})[(r.PENDING = 1)] = 'PENDING'), (r[(r.ACTIVE = 2)] = 'ACTIVE'), (r[(r.INACTIVE = 3)] = 'INACTIVE'), (r[(r.DECLINED = 4)] = 'DECLINED'), (r[(r.EXPIRED = 5)] = 'EXPIRED'), r),
    L = (((i = {})[(i.USER_ADD = 1)] = 'USER_ADD'), (i[(i.GUILD_ADD = 2)] = 'GUILD_ADD'), (i[(i.USER_INTERACTION = 3)] = 'USER_INTERACTION'), (i[(i.GUILD_INTERACTION = 4)] = 'GUILD_INTERACTION'), (i[(i.USER_CALLED = 5)] = 'USER_CALLED'), i),
    R = (((o = {}).ACTIVITY = 'ACTIVITY'), (o.REQUESTS = 'REQUESTS'), (o.SETTINGS = 'SETTINGS'), o),
    M = (((a = {})[(a.ACTIVITY = 0)] = 'ACTIVITY'), (a[(a.REQUESTS = 1)] = 'REQUESTS'), (a[(a.SETTINGS = 2)] = 'SETTINGS'), a),
    D = (((s = {}).SIDENAV = 'SIDENAV'), (s.SETTINGS = 'SETTINGS'), s),
    U = (((l = {})[(l.SIDENAV = 0)] = 'SIDENAV'), (l[(l.SETTINGS = 1)] = 'SETTINGS'), l),
    v = (((E = {})[(E.TabChange = 0)] = 'TabChange'), (E[(E.ShowQRCodeModal = 1)] = 'ShowQRCodeModal'), (E[(E.RevealQRCode = 2)] = 'RevealQRCode'), (E[(E.ScanQRCodeButton = 3)] = 'ScanQRCodeButton'), (E[(E.ScanQRCode = 4)] = 'ScanQRCode'), (E[(E.LoadMore = 5)] = 'LoadMore'), (E[(E.SelectTeen = 6)] = 'SelectTeen'), (E[(E.HideQRCode = 7)] = 'HideQRCode'), E);
let Y = new Map([
    [
        3,
        {
            tooltipHeader: () => c.NW.string(c.t.kvTgWF),
            tooltipDescription: (t) => (t ? c.NW.string(c.t.cY19ub) : c.NW.string(c.t['K5r+sL'])),
            sectionHeader: (t) => c.NW.formatToPlainString(c.t['4T3zWV'], { count: t }),
            sectionDescription: (t) => (t ? c.NW.string(c.t.cY19ub) : c.NW.string(c.t['K5r+sL'])),
            timestampFormatter: () => ({
                today: c.NW.string(c.t.fLBUx8),
                yesterday: c.NW.string(c.t.cHHgxM),
                days: c.t.qvKjp6
            })
        }
    ],
    [
        5,
        {
            tooltipHeader: () => c.NW.string(c.t.D7Sng4),
            tooltipDescription: (t) => (t ? c.NW.string(c.t['w7j/Li']) : c.NW.string(c.t.SCIaWF)),
            sectionHeader: (t) => c.NW.formatToPlainString(c.t['0GE4Nj'], { count: t }),
            sectionDescription: (t) => (t ? c.NW.string(c.t['w7j/Li']) : c.NW.string(c.t.SCIaWF)),
            timestampFormatter: () => ({
                today: c.NW.string(c.t.IHd5cX),
                yesterday: c.NW.string(c.t.wOsfxs),
                days: c.t.oCk8c3
            })
        }
    ],
    [
        1,
        {
            tooltipHeader: () => c.NW.string(c.t.kIcKAg),
            tooltipDescription: (t) => (t ? c.NW.string(c.t.HvsFJS) : c.NW.string(c.t['1/QpPz'])),
            sectionHeader: (t) => c.NW.formatToPlainString(c.t['TEvo+P'], { count: t }),
            sectionDescription: (t) => (t ? c.NW.string(c.t.HvsFJS) : c.NW.string(c.t['1/QpPz'])),
            timestampFormatter: () => ({
                today: c.NW.string(c.t.JUHIYW),
                yesterday: c.NW.string(c.t.GiswUV),
                days: c.t.fwQgEx
            })
        }
    ],
    [
        2,
        {
            tooltipHeader: () => c.NW.string(c.t['NulX9/']),
            tooltipDescription: (t) => (t ? c.NW.string(c.t.Lmz9Vl) : c.NW.string(c.t.MTFxYW)),
            sectionHeader: (t) => c.NW.formatToPlainString(c.t['7feG7e'], { count: t }),
            sectionDescription: (t) => (t ? c.NW.string(c.t.Lmz9Vl) : c.NW.string(c.t.MTFxYW))
        }
    ],
    [
        4,
        {
            tooltipHeader: () => c.NW.string(c.t.CcrbCw),
            tooltipDescription: h,
            sectionHeader: (t) => c.NW.formatToPlainString(c.t.rcPInZ, { count: t }),
            sectionDescription: h
        }
    ]
]);
function h(t, e) {
    return t ? (e ? c.NW.string(c.t.c0NgBQ) : c.NW.string(c.t.dcvNX1)) : e ? c.NW.string(c.t.DLVyFx) : c.NW.string(c.t['823ugY']);
}
let O = () => ({
        seconds: c.NW.string(c.t.CJdoeX),
        minutes: c.t.InzMn5,
        hours: c.t.ErkYCA,
        yesterday: c.NW.string(c.t.GvfssL),
        days: c.t.pWig19,
        date: c.t.MP3kho
    }),
    m = () => ({
        seconds: c.NW.string(c.t.BqsamZ),
        minutes: c.t.kX3wJi,
        hours: c.t.J18GbG,
        yesterday: c.NW.string(c.t.Ln9zMj),
        days: c.t.WRtyS0,
        date: c.t.Y3ZYtL
    });
