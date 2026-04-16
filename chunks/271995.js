s.d(e, { $b: () => N, QB: () => u, _k: () => g, bh: () => m }), s(64700);
var i = s(827734),
    n = s(397927),
    r = s(975807),
    a = s(739010),
    l = s(335891),
    c = s(259960),
    o = s(239093),
    d = s(985018);
function u() {
    return {
        [a.PN.ALL_GOOD]: {
            title: d.t.uaKrRi,
            description: d.intl.format(d.t.pEdBD4, {
                termsOfService: o.d$.TOS_LINK,
                communityGuidelines: o.d$.COMMUNITY_GUIDELINES,
            }),
            status: d.t["/Idfao"],
            Icon: n.yr3,
            color: i.A.colors.STATUS_POSITIVE,
        },
        [a.PN.LIMITED]: {
            title: d.t.epkcmS,
            description: d.intl.string(d.t["774juc"]),
            status: d.t.umleq4,
            Icon: n.EpV,
            color: i.A.colors.STATUS_WARNING,
        },
        [a.PN.VERY_LIMITED]: {
            title: d.t.crzE2X,
            description: d.intl.string(d.t["T/Ufh9"]),
            status: d.t.WBtMHf,
            Icon: n.EpV,
            color: i.A.unsafe_rawColors.ORANGE_345,
        },
        [a.PN.AT_RISK]: {
            title: d.t.XRNVzO,
            description: d.intl.string(d.t["hbH+9S"]),
            status: d.t["7f+4Lg"],
            Icon: n.EpV,
            color: i.A.colors.ICON_FEEDBACK_CRITICAL,
        },
        [a.PN.SUSPENDED]: {
            title: d.t.MExFkz,
            description: d.intl.string(d.t["2liUvt"]),
            status: d.t["0OONGB"],
            Icon: n.aXh,
            color: i.A.colors.ICON_MUTED,
        },
    };
}
function N() {
    let t = (0, l.K)();
    if (!(0, c.v)()) return d.intl.string(d.t.ZTNur7);
    switch (t.state) {
        case a.PN.ALL_GOOD:
            return d.intl.string(d.t["0Djcou"]);
        case a.PN.LIMITED:
            return d.intl.string(d.t["4AV3TM"]);
        case a.PN.VERY_LIMITED:
            return d.intl.string(d.t["aUNu/o"]);
        case a.PN.AT_RISK:
            return d.intl.string(d.t.j1eOqz);
        case a.PN.SUSPENDED:
            return d.intl.string(d.t.r77e2V);
    }
}
function m() {
    let t = (0, l.K)();
    if (!(0, c.v)()) return d.intl.string(d.t["9m2Bkk"]);
    switch (t.state) {
        case a.PN.ALL_GOOD:
            return d.intl.format(d.t.pEdBD4, {
                termsOfService: (t) => {
                    t.stopPropagation(), (0, r.A)(o.d$.TOS_LINK);
                },
                communityGuidelines: (t) => {
                    t.stopPropagation(), (0, r.A)(o.d$.COMMUNITY_GUIDELINES);
                },
            });
        case a.PN.LIMITED:
            return d.intl.string(d.t["774juc"]);
        case a.PN.VERY_LIMITED:
            return d.intl.string(d.t["T/Ufh9"]);
        case a.PN.AT_RISK:
            return d.intl.string(d.t["hbH+9S"]);
        case a.PN.SUSPENDED:
            return d.intl.string(d.t["2liUvt"]);
    }
}
let h = {
        [a.PN.ALL_GOOD]: {
            color: i.A.colors.ICON_FEEDBACK_POSITIVE,
            backgroundColor: i.A.colors.BACKGROUND_FEEDBACK_POSITIVE,
            Icon: n.yr3,
        },
        [a.PN.LIMITED]: {
            color: i.A.colors.ICON_FEEDBACK_WARNING,
            backgroundColor: i.A.colors.BACKGROUND_FEEDBACK_WARNING,
            Icon: n.id,
        },
        [a.PN.VERY_LIMITED]: {
            color: i.A.unsafe_rawColors.ORANGE_345,
            backgroundColor: i.A.unsafe_rawColors.OPACITY_ORANGE_12,
            Icon: n.id,
        },
        [a.PN.AT_RISK]: {
            color: i.A.colors.ICON_FEEDBACK_CRITICAL,
            backgroundColor: i.A.colors.BACKGROUND_FEEDBACK_CRITICAL,
            Icon: n.EpV,
        },
        [a.PN.SUSPENDED]: {
            color: i.A.colors.ICON_MUTED,
            backgroundColor: i.A.colors.BACKGROUND_MOD_MUTED,
            Icon: n.aXh,
        },
    },
    x = { color: i.A.colors.ICON_MUTED, backgroundColor: i.A.colors.BACKGROUND_MOD_MUTED, Icon: n.cBN };
function g() {
    let t = (0, l.K)();
    return (0, c.v)() ? h[t.state] : x;
}
