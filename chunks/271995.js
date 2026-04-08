s.d(e, { $b: () => u, QB: () => d, _k: () => h, bh: () => m }), s(64700);
var i = s(827734),
    n = s(397927),
    a = s(975807),
    r = s(739010),
    l = s(335891),
    c = s(239093),
    o = s(985018);
function d() {
    return {
        [r.PN.ALL_GOOD]: {
            title: o.t.uaKrRi,
            description: o.intl.format(o.t.pEdBD4, {
                termsOfService: c.d$.TOS_LINK,
                communityGuidelines: c.d$.COMMUNITY_GUIDELINES,
            }),
            status: o.t["/Idfao"],
            Icon: n.yr3,
            color: i.A.colors.STATUS_POSITIVE,
        },
        [r.PN.LIMITED]: {
            title: o.t.epkcmS,
            description: o.intl.string(o.t["774juc"]),
            status: o.t.umleq4,
            Icon: n.EpV,
            color: i.A.colors.STATUS_WARNING,
        },
        [r.PN.VERY_LIMITED]: {
            title: o.t.crzE2X,
            description: o.intl.string(o.t["T/Ufh9"]),
            status: o.t.WBtMHf,
            Icon: n.EpV,
            color: i.A.unsafe_rawColors.ORANGE_345,
        },
        [r.PN.AT_RISK]: {
            title: o.t.XRNVzO,
            description: o.intl.string(o.t["hbH+9S"]),
            status: o.t["7f+4Lg"],
            Icon: n.EpV,
            color: i.A.colors.ICON_FEEDBACK_CRITICAL,
        },
        [r.PN.SUSPENDED]: {
            title: o.t.MExFkz,
            description: o.intl.string(o.t["2liUvt"]),
            status: o.t["0OONGB"],
            Icon: n.aXh,
            color: i.A.colors.ICON_MUTED,
        },
    };
}
function u() {
    switch ((0, l.K)().state) {
        case r.PN.ALL_GOOD:
            return o.intl.string(o.t["0Djcou"]);
        case r.PN.LIMITED:
            return o.intl.string(o.t["4AV3TM"]);
        case r.PN.VERY_LIMITED:
            return o.intl.string(o.t["aUNu/o"]);
        case r.PN.AT_RISK:
            return o.intl.string(o.t.j1eOqz);
        case r.PN.SUSPENDED:
            return o.intl.string(o.t.r77e2V);
    }
}
function m() {
    switch ((0, l.K)().state) {
        case r.PN.ALL_GOOD:
            return o.intl.format(o.t.pEdBD4, {
                termsOfService: (t) => {
                    t.stopPropagation(), (0, a.A)(c.d$.TOS_LINK);
                },
                communityGuidelines: (t) => {
                    t.stopPropagation(), (0, a.A)(c.d$.COMMUNITY_GUIDELINES);
                },
            });
        case r.PN.LIMITED:
            return o.intl.string(o.t["774juc"]);
        case r.PN.VERY_LIMITED:
            return o.intl.string(o.t["T/Ufh9"]);
        case r.PN.AT_RISK:
            return o.intl.string(o.t["hbH+9S"]);
        case r.PN.SUSPENDED:
            return o.intl.string(o.t["2liUvt"]);
    }
}
let N = {
    [r.PN.ALL_GOOD]: {
        color: i.A.colors.ICON_FEEDBACK_POSITIVE,
        backgroundColor: i.A.colors.BACKGROUND_FEEDBACK_POSITIVE,
        Icon: n.yr3,
    },
    [r.PN.LIMITED]: {
        color: i.A.colors.ICON_FEEDBACK_WARNING,
        backgroundColor: i.A.colors.BACKGROUND_FEEDBACK_WARNING,
        Icon: n.id,
    },
    [r.PN.VERY_LIMITED]: {
        color: i.A.unsafe_rawColors.ORANGE_345,
        backgroundColor: i.A.unsafe_rawColors.OPACITY_ORANGE_12,
        Icon: n.id,
    },
    [r.PN.AT_RISK]: {
        color: i.A.colors.ICON_FEEDBACK_CRITICAL,
        backgroundColor: i.A.colors.BACKGROUND_FEEDBACK_CRITICAL,
        Icon: n.EpV,
    },
    [r.PN.SUSPENDED]: { color: i.A.colors.ICON_MUTED, backgroundColor: i.A.colors.BACKGROUND_MOD_MUTED, Icon: n.aXh },
};
function h() {
    return N[(0, l.K)().state];
}
