n.d(e, {
    AG: () => c,
    MY: () => y,
    Mu: () => D,
    Of: () => T,
    QH: () => M,
    TX: () => m,
    Wz: () => F,
    YC: () => Y,
    _6: () => U,
    _w: () => A,
    dG: () => f,
    f2: () => g,
    i0: () => S,
    iB: () => N,
    ip: () => C,
    ix: () => R,
    ne: () => p,
    tx: () => h,
    vH: () => L,
    zE: () => I
}),
    n(47120);
var i,
    r,
    l,
    a,
    s,
    o,
    E,
    d = n(860911),
    _ = n(70956),
    u = n(388032);
let T = 30 * _.Z.Millis.SECOND,
    c = 8,
    S = 3,
    I = 26,
    C = 64,
    A = (t, e) => 'https://discord.com/feature/family-center/my-family/'.concat(t, '/').concat(e),
    N = 4,
    g = 5 * _.Z.Millis.MINUTE,
    L = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    R = (0, d.Ft)(
        Object.freeze({
            FAMILY_CENTER_SETTINGS: '/family-center/settings',
            FAMILY_CENTER_MY_FAMILY: '/family-center/my-family'
        }),
        [':', '?', '@']
    );
var p = (((i = {})[(i.PENDING = 1)] = 'PENDING'), (i[(i.ACTIVE = 2)] = 'ACTIVE'), (i[(i.INACTIVE = 3)] = 'INACTIVE'), (i[(i.DECLINED = 4)] = 'DECLINED'), (i[(i.EXPIRED = 5)] = 'EXPIRED'), i),
    y = (((r = {})[(r.USER_ADD = 1)] = 'USER_ADD'), (r[(r.GUILD_ADD = 2)] = 'GUILD_ADD'), (r[(r.USER_INTERACTION = 3)] = 'USER_INTERACTION'), (r[(r.GUILD_INTERACTION = 4)] = 'GUILD_INTERACTION'), (r[(r.USER_CALLED = 5)] = 'USER_CALLED'), r),
    f = (((l = {}).ACTIVITY = 'ACTIVITY'), (l.REQUESTS = 'REQUESTS'), (l.SETTINGS = 'SETTINGS'), l),
    M = (((a = {})[(a.ACTIVITY = 0)] = 'ACTIVITY'), (a[(a.REQUESTS = 1)] = 'REQUESTS'), (a[(a.SETTINGS = 2)] = 'SETTINGS'), a),
    D = (((s = {}).SIDENAV = 'SIDENAV'), (s.SETTINGS = 'SETTINGS'), s),
    U = (((o = {})[(o.SIDENAV = 0)] = 'SIDENAV'), (o[(o.SETTINGS = 1)] = 'SETTINGS'), o),
    Y = (((E = {})[(E.TabChange = 0)] = 'TabChange'), (E[(E.ShowQRCodeModal = 1)] = 'ShowQRCodeModal'), (E[(E.RevealQRCode = 2)] = 'RevealQRCode'), (E[(E.ScanQRCodeButton = 3)] = 'ScanQRCodeButton'), (E[(E.ScanQRCode = 4)] = 'ScanQRCode'), (E[(E.LoadMore = 5)] = 'LoadMore'), (E[(E.SelectTeen = 6)] = 'SelectTeen'), (E[(E.HideQRCode = 7)] = 'HideQRCode'), E);
let h = new Map([
    [
        3,
        {
            tooltipHeader: () => u.intl.string(u.t.kvTgWF),
            tooltipDescription: (t) => (t ? u.intl.string(u.t.cY19ub) : u.intl.string(u.t['K5r+sL'])),
            sectionHeader: (t) => u.intl.formatToPlainString(u.t['4T3zWV'], { count: t }),
            sectionDescription: (t) => (t ? u.intl.string(u.t.cY19ub) : u.intl.string(u.t['K5r+sL'])),
            timestampFormatter: () => ({
                today: u.intl.string(u.t.fLBUx8),
                yesterday: u.intl.string(u.t.cHHgxM),
                days: u.t.qvKjp6
            })
        }
    ],
    [
        5,
        {
            tooltipHeader: () => u.intl.string(u.t.D7Sng4),
            tooltipDescription: (t) => (t ? u.intl.string(u.t['w7j/Li']) : u.intl.string(u.t.SCIaWF)),
            sectionHeader: (t) => u.intl.formatToPlainString(u.t['0GE4Nj'], { count: t }),
            sectionDescription: (t) => (t ? u.intl.string(u.t['w7j/Li']) : u.intl.string(u.t.SCIaWF)),
            timestampFormatter: () => ({
                today: u.intl.string(u.t.IHd5cX),
                yesterday: u.intl.string(u.t.wOsfxs),
                days: u.t.oCk8c3
            })
        }
    ],
    [
        1,
        {
            tooltipHeader: () => u.intl.string(u.t.kIcKAg),
            tooltipDescription: (t) => (t ? u.intl.string(u.t.HvsFJS) : u.intl.string(u.t['1/QpPz'])),
            sectionHeader: (t) => u.intl.formatToPlainString(u.t['TEvo+P'], { count: t }),
            sectionDescription: (t) => (t ? u.intl.string(u.t.HvsFJS) : u.intl.string(u.t['1/QpPz'])),
            timestampFormatter: () => ({
                today: u.intl.string(u.t.JUHIYW),
                yesterday: u.intl.string(u.t.GiswUV),
                days: u.t.fwQgEx
            })
        }
    ],
    [
        2,
        {
            tooltipHeader: () => u.intl.string(u.t['NulX9/']),
            tooltipDescription: (t) => (t ? u.intl.string(u.t.Lmz9Vl) : u.intl.string(u.t.MTFxYW)),
            sectionHeader: (t) => u.intl.formatToPlainString(u.t['7feG7e'], { count: t }),
            sectionDescription: (t) => (t ? u.intl.string(u.t.Lmz9Vl) : u.intl.string(u.t.MTFxYW))
        }
    ],
    [
        4,
        {
            tooltipHeader: () => u.intl.string(u.t.CcrbCw),
            tooltipDescription: v,
            sectionHeader: (t) => u.intl.formatToPlainString(u.t.rcPInZ, { count: t }),
            sectionDescription: v
        }
    ]
]);
function v(t, e) {
    return t ? (e ? u.intl.string(u.t.c0NgBQ) : u.intl.string(u.t.dcvNX1)) : e ? u.intl.string(u.t.DLVyFx) : u.intl.string(u.t['823ugY']);
}
let m = () => ({
        seconds: u.intl.string(u.t.CJdoeX),
        minutes: u.t.InzMn5,
        hours: u.t.ErkYCA,
        yesterday: u.intl.string(u.t.GvfssL),
        days: u.t.pWig19,
        date: u.t.MP3kho
    }),
    F = () => ({
        seconds: u.intl.string(u.t.BqsamZ),
        minutes: u.t.kX3wJi,
        hours: u.t.J18GbG,
        yesterday: u.intl.string(u.t.Ln9zMj),
        days: u.t.WRtyS0,
        date: u.t.Y3ZYtL
    });
