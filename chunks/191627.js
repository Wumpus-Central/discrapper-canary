"use strict";
n.d(t, {
    EC: () => v,
    Ef: () => b,
    Gg: () => S,
    H1: () => G,
    MH: () => M,
    NV: () => D,
    PH: () => C,
    QM: () => O,
    Uy: () => E,
    Y7: () => A,
    dI: () => V,
    fD: () => m,
    h4: () => T,
    he: () => R,
    iN: () => P,
    jZ: () => y,
    kp: () => I,
    lu: () => F,
    ly: () => k,
    nz: () => N,
    qb: () => x,
    tN: () => g,
    u9: () => L,
    vW: () => U,
    zu: () => w,
});
var i,
    r,
    s,
    a,
    o,
    l,
    u,
    c,
    d,
    _ = n(323125),
    h = n(927813),
    f = n(602339),
    p = n(375708);
let E = "RESTRICTED_HOURS_LAYER",
    m = 30 * h.A.Millis.SECOND,
    g = 5 * h.A.Millis.MINUTE,
    A = 8,
    I = 3,
    T = 26,
    S = 64,
    y = (e, t) => `https://discord.com/feature/family-center/my-family/${e}/${t}`,
    C = 4,
    N = 5 * h.A.Millis.MINUTE,
    v = "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    R = (0, _.dN)(
        Object.freeze({
            FAMILY_CENTER_SETTINGS: "/family-center/settings",
            FAMILY_CENTER_MY_FAMILY: "/family-center/my-family",
        }),
        [":", "?", "@"],
    );
var O = (((i = {})[(i.PARENT = 1)] = "PARENT"), (i[(i.CHILD = 2)] = "CHILD"), i),
    b =
        (((r = {})[(r.PENDING = 1)] = "PENDING"),
        (r[(r.ACTIVE = 2)] = "ACTIVE"),
        (r[(r.INACTIVE = 3)] = "INACTIVE"),
        (r[(r.DECLINED = 4)] = "DECLINED"),
        (r[(r.EXPIRED = 5)] = "EXPIRED"),
        r),
    D =
        (((s = {})[(s.USER_ADD = 1)] = "USER_ADD"),
        (s[(s.GUILD_ADD = 2)] = "GUILD_ADD"),
        (s[(s.USER_INTERACTION = 3)] = "USER_INTERACTION"),
        (s[(s.GUILD_INTERACTION = 4)] = "GUILD_INTERACTION"),
        (s[(s.USER_CALLED = 5)] = "USER_CALLED"),
        (s[(s.TOTAL_VOICE_MINUTES = 6)] = "TOTAL_VOICE_MINUTES"),
        (s[(s.PURCHASES = 7)] = "PURCHASES"),
        (s[(s.GIFTS = 8)] = "GIFTS"),
        s),
    L =
        (((a = {}).ACTIVITY = "ACTIVITY"),
        (a.REQUESTS = "REQUESTS"),
        (a.SETTINGS = "SETTINGS"),
        (a.CONTENT_AND_SOCIAL = "CONTENT_AND_SOCIAL"),
        (a.DATA_AND_PRIVACY = "DATA_AND_PRIVACY"),
        (a.SCREEN_TIME_CONTROLS = "SCREEN_TIME_CONTROLS"),
        a),
    w =
        (((o = {})[(o.ACTIVITY = 0)] = "ACTIVITY"),
        (o[(o.REQUESTS = 1)] = "REQUESTS"),
        (o[(o.SETTINGS = 2)] = "SETTINGS"),
        (o[(o.CONTENT_AND_SOCIAL = 3)] = "CONTENT_AND_SOCIAL"),
        (o[(o.DATA_AND_PRIVACY = 4)] = "DATA_AND_PRIVACY"),
        (o[(o.SCREEN_TIME_CONTROLS = 5)] = "SCREEN_TIME_CONTROLS"),
        o),
    M = (((l = {}).SIDENAV = "SIDENAV"), (l.SETTINGS = "SETTINGS"), l),
    P = (((u = {})[(u.SIDENAV = 0)] = "SIDENAV"), (u[(u.SETTINGS = 1)] = "SETTINGS"), u),
    x =
        (((c = {})[(c.TabChange = 0)] = "TabChange"),
        (c[(c.ShowQRCodeModal = 1)] = "ShowQRCodeModal"),
        (c[(c.RevealQRCode = 2)] = "RevealQRCode"),
        (c[(c.ScanQRCodeButton = 3)] = "ScanQRCodeButton"),
        (c[(c.ScanQRCode = 4)] = "ScanQRCode"),
        (c[(c.LoadMore = 5)] = "LoadMore"),
        (c[(c.SelectTeen = 6)] = "SelectTeen"),
        (c[(c.HideQRCode = 7)] = "HideQRCode"),
        (c[(c.NufConsentGateLinkCodeError = 8)] = "NufConsentGateLinkCodeError"),
        c);
let k = new Map([
    [
        3,
        {
            priority: 100,
            tooltipHeader: () => p.intl.string(f.default.kvTgWP),
            tooltipDescription: (e) => (e ? p.intl.string(f.default.w4wmnb) : p.intl.string(f.default.foTzbd)),
            sectionHeader: (e) => p.intl.formatToPlainString(f.default["4T3zWT"], { count: e }),
            sectionDescription: (e) => (e ? p.intl.string(f.default.w4wmnb) : p.intl.string(f.default.foTzbd)),
            timestampFormatter: () => ({
                today: p.intl.string(f.default.fLBUx7),
                yesterday: p.intl.string(f.default.cHHgxI),
                days: f.default.qvKjp8,
            }),
        },
    ],
    [
        5,
        {
            priority: 200,
            tooltipHeader: () => p.intl.string(f.default.D7Sngz),
            tooltipDescription: (e) => (e ? p.intl.string(f.default.aiAhnQ) : p.intl.string(f.default["4ufgdz"])),
            sectionHeader: (e) => p.intl.formatToPlainString(f.default["0GE4Ni"], { count: e }),
            sectionDescription: (e) => (e ? p.intl.string(f.default.aiAhnQ) : p.intl.string(f.default["4ufgdz"])),
            timestampFormatter: () => ({
                today: p.intl.string(f.default.IHd5cZ),
                yesterday: p.intl.string(f.default.wOsfxv),
                days: f.default.oCk8c4,
            }),
        },
    ],
    [
        1,
        {
            priority: 300,
            tooltipHeader: () => p.intl.string(f.default.kIcKAj),
            tooltipDescription: (e) => (e ? p.intl.string(f.default.BkVb1X) : p.intl.string(f.default.mpHHfa)),
            sectionHeader: (e) => p.intl.formatToPlainString(f.default["TEvo+H"], { count: e }),
            sectionDescription: (e) => (e ? p.intl.string(f.default.BkVb1X) : p.intl.string(f.default.mpHHfa)),
            timestampFormatter: () => ({
                today: p.intl.string(f.default.JUHIYZ),
                yesterday: p.intl.string(f.default.GiswUW),
                days: f.default["fwQgE/"],
            }),
        },
    ],
    [
        2,
        {
            priority: 400,
            tooltipHeader: () => p.intl.string(f.default.uav9Bh),
            tooltipDescription: (e) => (e ? p.intl.string(f.default.LVNgTD) : p.intl.string(f.default.TA8GFt)),
            sectionHeader: (e) => p.intl.formatToPlainString(f.default["7feG7T"], { count: e }),
            sectionDescription: (e) => (e ? p.intl.string(f.default.LVNgTD) : p.intl.string(f.default.TA8GFt)),
        },
    ],
    [
        4,
        {
            priority: 500,
            tooltipHeader: () => p.intl.string(f.default.CcrbCw),
            tooltipDescription: (e) => (e ? p.intl.string(f.default.BLgIrk) : p.intl.string(f.default.sSJauZ)),
            sectionHeader: (e) => p.intl.formatToPlainString(f.default.rcPInc, { count: e }),
            sectionDescription: (e) => (e ? p.intl.string(f.default.BLgIrk) : p.intl.string(f.default.sSJauZ)),
        },
    ],
    [
        6,
        {
            priority: 175,
            tooltipHeader: () => p.intl.string(f.default.eo4Fxh),
            tooltipDescription: () => p.intl.string(f.default["O/AElu"]),
            sectionHeader: (e) => p.intl.formatToPlainString(f.default.eGFWUd, { count: e }),
            sectionDescription: () => p.intl.string(f.default["O/AElu"]),
        },
    ],
    [
        7,
        {
            priority: 150,
            tooltipHeader: () => p.intl.string(f.default.NMYKsh),
            tooltipDescription: (e) => (e ? p.intl.string(f.default.cqIdqZ) : p.intl.string(f.default["85PtWu"])),
            sectionHeader: (e) => p.intl.formatToPlainString(f.default.FPViWL, { amount: e }),
            sectionDescription: (e) => (e ? p.intl.string(f.default.cqIdqZ) : p.intl.string(f.default["85PtWu"])),
        },
    ],
    [
        8,
        {
            priority: 160,
            tooltipHeader: () => p.intl.string(f.default.ULUspo),
            tooltipDescription: () => p.intl.string(f.default.nH8vlc),
            sectionHeader: (e) => p.intl.formatToPlainString(f.default.mojZZz, { count: e }),
            sectionDescription: () => p.intl.string(f.default.nH8vlc),
        },
    ],
]);
var U =
    (((d = {})[(d.GENERIC_ERROR = 0)] = "GENERIC_ERROR"),
    (d[(d.INELIGIBLE_FOR_FAMILY_CENTER = 1)] = "INELIGIBLE_FOR_FAMILY_CENTER"),
    (d[(d.PENDING_REQUEST_EXISTS = 2)] = "PENDING_REQUEST_EXISTS"),
    (d[(d.MAX_CONNECTIONS_REACHED = 3)] = "MAX_CONNECTIONS_REACHED"),
    d);
let G = {
        0: {
            header: () => p.intl.string(f.default.nGX8Co),
            description: () => p.intl.string(f.default.Uss2dn),
            icon: 1,
        },
        2: {
            header: () => p.intl.string(f.default.tu0MRv),
            description: (e) => {
                let { email: t } = e;
                return null != t
                    ? p.intl.formatToPlainString(f.default.xNEkdx, { email: t })
                    : p.intl.string(f.default.Xyjnwn);
            },
            icon: 0,
        },
        3: {
            header: (e) => {
                let { isAdult: t } = e;
                return t ? p.intl.string(f.default.bS5x94) : p.intl.string(f.default.MzX4RP);
            },
            description: (e) => {
                let { isAdult: t } = e;
                return t
                    ? p.intl.format(f.default.GKzqWi, {
                          link: "https://support.discord.com/hc/articles/14155043715735",
                      })
                    : p.intl.format(f.default["69F+eS"], {
                          link: "https://support.discord.com/hc/articles/14155060633623",
                      });
            },
            icon: 1,
        },
        1: {
            header: () => p.intl.string(f.default.W9JLJh),
            description: () =>
                p.intl.format(f.default.On5iRI, {
                    link: "https://support.discord.com/hc/requests/new?ticket_form_id=360000029731",
                }),
            icon: 1,
        },
    },
    F = () => ({
        seconds: p.intl.string(f.default.CJdoee),
        minutes: f.default.InzMn3,
        hours: f.default.ErkYCI,
        yesterday: p.intl.string(f.default.GvfssA),
        days: f.default.pWig18,
        date: f.default.MP3khg,
    }),
    V = () => ({
        seconds: p.intl.string(f.default.Bqsamd),
        minutes: f.default.kX3wJg,
        hours: f.default.J18GbG,
        yesterday: p.intl.string(f.default.Ln9zMn),
        days: f.default.WRtySz,
        date: f.default.Y3ZYtM,
    });
