"use strict";
n.d(t, {
    EC: () => R,
    Ef: () => D,
    Gg: () => S,
    H1: () => F,
    MH: () => P,
    NV: () => v,
    PH: () => C,
    QM: () => y,
    Uy: () => I,
    Y7: () => T,
    bo: () => k,
    dI: () => B,
    fD: () => f,
    h4: () => g,
    he: () => L,
    iN: () => U,
    jZ: () => N,
    kp: () => m,
    lu: () => V,
    ly: () => G,
    nz: () => O,
    qb: () => w,
    tN: () => p,
    u9: () => b,
    vW: () => x,
    zu: () => M,
});
var i,
    r,
    a,
    s,
    l,
    o,
    d,
    c,
    u,
    _ = n(323125),
    E = n(927813),
    A = n(513687),
    h = n(375708);
let I = "RESTRICTED_HOURS_LAYER",
    f = 30 * E.A.Millis.SECOND,
    p = 5 * E.A.Millis.MINUTE,
    T = 8,
    m = 3,
    g = 26,
    S = 64,
    N = (e, t) => `https://discord.com/feature/family-center/my-family/${e}/${t}`,
    C = 4,
    O = 5 * E.A.Millis.MINUTE,
    R = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    L = (0, _.dN)(
        Object.freeze({
            FAMILY_CENTER_SETTINGS: "/family-center/settings",
            FAMILY_CENTER_MY_FAMILY: "/family-center/my-family",
        }),
        [":", "?", "@"],
    );
var y = (((i = {})[(i.PARENT = 1)] = "PARENT"), (i[(i.CHILD = 2)] = "CHILD"), i),
    D =
        (((r = {})[(r.PENDING = 1)] = "PENDING"),
        (r[(r.ACTIVE = 2)] = "ACTIVE"),
        (r[(r.INACTIVE = 3)] = "INACTIVE"),
        (r[(r.DECLINED = 4)] = "DECLINED"),
        (r[(r.EXPIRED = 5)] = "EXPIRED"),
        r),
    v =
        (((a = {})[(a.USER_ADD = 1)] = "USER_ADD"),
        (a[(a.GUILD_ADD = 2)] = "GUILD_ADD"),
        (a[(a.USER_INTERACTION = 3)] = "USER_INTERACTION"),
        (a[(a.GUILD_INTERACTION = 4)] = "GUILD_INTERACTION"),
        (a[(a.USER_CALLED = 5)] = "USER_CALLED"),
        (a[(a.TOTAL_VOICE_MINUTES = 6)] = "TOTAL_VOICE_MINUTES"),
        (a[(a.PURCHASES = 7)] = "PURCHASES"),
        (a[(a.GIFTS = 8)] = "GIFTS"),
        a),
    b =
        (((s = {}).ACTIVITY = "ACTIVITY"),
        (s.REQUESTS = "REQUESTS"),
        (s.SETTINGS = "SETTINGS"),
        (s.CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL"),
        (s.DATA_AND_PRIVACY = "DATA_AND_PRIVACY"),
        (s.SCREEN_TIME_CONTROLS = "SCREEN_TIME_CONTROLS"),
        s),
    M =
        (((l = {})[(l.ACTIVITY = 0)] = "ACTIVITY"),
        (l[(l.REQUESTS = 1)] = "REQUESTS"),
        (l[(l.SETTINGS = 2)] = "SETTINGS"),
        (l[(l.CONTENT_AND_SOCIAL = 3)] = "CONTENT_AND_SOCIAL"),
        (l[(l.DATA_AND_PRIVACY = 4)] = "DATA_AND_PRIVACY"),
        (l[(l.SCREEN_TIME_CONTROLS = 5)] = "SCREEN_TIME_CONTROLS"),
        l),
    P = (((o = {}).SIDENAV = "SIDENAV"), (o.SETTINGS = "SETTINGS"), o),
    U = (((d = {})[(d.SIDENAV = 0)] = "SIDENAV"), (d[(d.SETTINGS = 1)] = "SETTINGS"), d),
    w =
        (((c = {})[(c.TabChange = 0)] = "TabChange"),
        (c[(c.ShowQRCodeModal = 1)] = "ShowQRCodeModal"),
        (c[(c.RevealQRCode = 2)] = "RevealQRCode"),
        (c[(c.ScanQRCodeButton = 3)] = "ScanQRCodeButton"),
        (c[(c.ScanQRCode = 4)] = "ScanQRCode"),
        (c[(c.LoadMore = 5)] = "LoadMore"),
        (c[(c.SelectTeen = 6)] = "SelectTeen"),
        (c[(c.HideQRCode = 7)] = "HideQRCode"),
        (c[(c.NufConsentGateLinkCodeError = 8)] = "NufConsentGateLinkCodeError"),
        (c[(c.ShareLink = 9)] = "ShareLink"),
        (c[(c.CopyLink = 10)] = "CopyLink"),
        c);
let G = new Map([
    [
        3,
        {
            priority: 100,
            tooltipHeader: () => h.intl.string(A.default.kvTgWP),
            tooltipDescription: (e) => (e ? h.intl.string(A.default.w4wmnb) : h.intl.string(A.default.foTzbd)),
            sectionHeader: (e) => h.intl.formatToPlainString(A.default["4T3zWT"], { count: e }),
            sectionDescription: (e) => (e ? h.intl.string(A.default.w4wmnb) : h.intl.string(A.default.foTzbd)),
            timestampFormatter: () => ({
                today: h.intl.string(A.default.fLBUx7),
                yesterday: h.intl.string(A.default.cHHgxI),
                days: A.default.qvKjp8,
            }),
        },
    ],
    [
        5,
        {
            priority: 200,
            tooltipHeader: () => h.intl.string(A.default.D7Sngz),
            tooltipDescription: (e) => (e ? h.intl.string(A.default.aiAhnQ) : h.intl.string(A.default["4ufgdz"])),
            sectionHeader: (e) => h.intl.formatToPlainString(A.default["0GE4Ni"], { count: e }),
            sectionDescription: (e) => (e ? h.intl.string(A.default.aiAhnQ) : h.intl.string(A.default["4ufgdz"])),
            timestampFormatter: () => ({
                today: h.intl.string(A.default.IHd5cZ),
                yesterday: h.intl.string(A.default.wOsfxv),
                days: A.default.oCk8c4,
            }),
        },
    ],
    [
        1,
        {
            priority: 300,
            tooltipHeader: () => h.intl.string(A.default.kIcKAj),
            tooltipDescription: (e) => (e ? h.intl.string(A.default.BkVb1X) : h.intl.string(A.default.mpHHfa)),
            sectionHeader: (e) => h.intl.formatToPlainString(A.default["TEvo+H"], { count: e }),
            sectionDescription: (e) => (e ? h.intl.string(A.default.BkVb1X) : h.intl.string(A.default.mpHHfa)),
            timestampFormatter: () => ({
                today: h.intl.string(A.default.JUHIYZ),
                yesterday: h.intl.string(A.default.GiswUW),
                days: A.default["fwQgE/"],
            }),
        },
    ],
    [
        2,
        {
            priority: 400,
            tooltipHeader: () => h.intl.string(A.default.uav9Bh),
            tooltipDescription: (e) => (e ? h.intl.string(A.default.LVNgTD) : h.intl.string(A.default.TA8GFt)),
            sectionHeader: (e) => h.intl.formatToPlainString(A.default["7feG7T"], { count: e }),
            sectionDescription: (e) => (e ? h.intl.string(A.default.LVNgTD) : h.intl.string(A.default.TA8GFt)),
        },
    ],
    [
        4,
        {
            priority: 500,
            tooltipHeader: () => h.intl.string(A.default.CcrbCw),
            tooltipDescription: (e) => (e ? h.intl.string(A.default.BLgIrk) : h.intl.string(A.default.sSJauZ)),
            sectionHeader: (e) => h.intl.formatToPlainString(A.default.rcPInc, { count: e }),
            sectionDescription: (e) => (e ? h.intl.string(A.default.BLgIrk) : h.intl.string(A.default.sSJauZ)),
        },
    ],
    [
        6,
        {
            priority: 175,
            tooltipHeader: () => h.intl.string(A.default.eo4Fxh),
            tooltipDescription: () => h.intl.string(A.default["O/AElu"]),
            sectionHeader: (e) => h.intl.formatToPlainString(A.default.eGFWUd, { count: e }),
            sectionDescription: () => h.intl.string(A.default["O/AElu"]),
        },
    ],
    [
        7,
        {
            priority: 150,
            tooltipHeader: () => h.intl.string(A.default.NMYKsh),
            tooltipDescription: (e) => (e ? h.intl.string(A.default.cqIdqZ) : h.intl.string(A.default["85PtWu"])),
            sectionHeader: (e) => h.intl.formatToPlainString(A.default.FPViWL, { amount: e }),
            sectionDescription: (e) => (e ? h.intl.string(A.default.cqIdqZ) : h.intl.string(A.default["85PtWu"])),
        },
    ],
    [
        8,
        {
            priority: 600,
            tooltipHeader: () => h.intl.string(A.default.ULUspo),
            tooltipDescription: () => h.intl.string(A.default.nH8vlc),
            sectionHeader: (e) => h.intl.formatToPlainString(A.default["0R6I/b"], { amount: e }),
            sectionDescription: () => h.intl.string(A.default.nH8vlc),
        },
    ],
]);
var x =
    (((u = {})[(u.GENERIC_ERROR = 0)] = "GENERIC_ERROR"),
    (u[(u.INELIGIBLE_FOR_FAMILY_CENTER = 1)] = "INELIGIBLE_FOR_FAMILY_CENTER"),
    (u[(u.PENDING_REQUEST_EXISTS = 2)] = "PENDING_REQUEST_EXISTS"),
    (u[(u.MAX_CONNECTIONS_REACHED = 3)] = "MAX_CONNECTIONS_REACHED"),
    u);
let k = { 29e4: 1, 290002: 3, 290005: 2 },
    F = {
        0: {
            header: () => h.intl.string(A.default.nGX8Co),
            description: () => h.intl.string(A.default.Uss2dn),
            icon: 1,
        },
        2: {
            header: () => h.intl.string(A.default.tu0MRv),
            description: (e) => {
                let { email: t } = e;
                return null != t
                    ? h.intl.formatToPlainString(A.default.xNEkdx, { email: t })
                    : h.intl.string(A.default.Xyjnwn);
            },
            icon: 0,
        },
        3: {
            header: (e) => {
                let { isAdult: t } = e;
                return t ? h.intl.string(A.default.bS5x94) : h.intl.string(A.default.MzX4RP);
            },
            description: (e) => {
                let { isAdult: t } = e;
                return t
                    ? h.intl.format(A.default.GKzqWi, {
                          link: "https://support.discord.com/hc/articles/14155043715735",
                      })
                    : h.intl.format(A.default["69F+eS"], {
                          link: "https://support.discord.com/hc/articles/14155060633623",
                      });
            },
            icon: 1,
        },
        1: {
            header: () => h.intl.string(A.default.W9JLJh),
            description: () =>
                h.intl.format(A.default.On5iRI, {
                    link: "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731",
                }),
            icon: 1,
        },
    },
    V = () => ({
        seconds: h.intl.string(A.default.CJdoee),
        minutes: A.default.InzMn3,
        hours: A.default.ErkYCI,
        yesterday: h.intl.string(A.default.GvfssA),
        days: A.default.pWig18,
        date: A.default.MP3khg,
    }),
    B = () => ({
        seconds: h.intl.string(A.default.Bqsamd),
        minutes: A.default.kX3wJg,
        hours: A.default.J18GbG,
        yesterday: h.intl.string(A.default.Ln9zMn),
        days: A.default.WRtySz,
        date: A.default.Y3ZYtM,
    });
