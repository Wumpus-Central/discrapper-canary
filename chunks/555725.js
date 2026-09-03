s.d(e, { bh: () => x, QB: () => I, _k: () => D, aO: () => g }), s(582128);
var n = s(661531),
    i = s(628284),
    r = s(695366),
    a = s(285796),
    l = s(738188),
    o = s(290136),
    c = s(975807),
    d = s(739010),
    u = s(375708);
let N = {
    [d.PN.ALL_GOOD]: u.t["/Idfao"],
    [d.PN.LIMITED]: u.t.umleq4,
    [d.PN.VERY_LIMITED]: u.t.WBtMHf,
    [d.PN.AT_RISK]: u.t["7f+4Lg"],
    [d.PN.SUSPENDED]: u.t["0OONGB"],
};
var m = s(335891),
    E = s(259960),
    h = s(239093);
function I() {
    return {
        [d.PN.ALL_GOOD]: {
            title: u.t.uaKrRi,
            description: u.intl.format(u.t.pEdBD4, {
                termsOfService: h.d$.TOS_LINK,
                communityGuidelines: h.d$.COMMUNITY_GUIDELINES,
            }),
            status: N[d.PN.ALL_GOOD],
            Icon: i.y,
            color: n.A.colors.STATUS_POSITIVE,
        },
        [d.PN.LIMITED]: {
            title: u.t.epkcmS,
            description: u.intl.string(u.t["774juc"]),
            status: N[d.PN.LIMITED],
            Icon: r.E,
            color: n.A.colors.STATUS_WARNING,
        },
        [d.PN.VERY_LIMITED]: {
            title: u.t.crzE2X,
            description: u.intl.string(u.t["T/Ufh9"]),
            status: N[d.PN.VERY_LIMITED],
            Icon: r.E,
            color: n.A.unsafe_rawColors.ORANGE_345,
        },
        [d.PN.AT_RISK]: {
            title: u.t.XRNVzO,
            description: u.intl.string(u.t["hbH+9S"]),
            status: N[d.PN.AT_RISK],
            Icon: r.E,
            color: n.A.colors.ICON_FEEDBACK_CRITICAL,
        },
        [d.PN.SUSPENDED]: {
            title: u.t.MExFkz,
            description: u.intl.string(u.t["2liUvt"]),
            status: N[d.PN.SUSPENDED],
            Icon: a.a,
            color: n.A.colors.ICON_MUTED,
        },
    };
}
function g() {
    let t = (0, m.K)();
    return (0, E.v)() ? u.intl.formatToPlainString(N[t.state], { hook: (t) => t }) : u.intl.string(u.t.ZTNur7);
}
function x() {
    let t = (0, m.K)();
    if (!(0, E.v)()) return u.intl.string(u.t["9m2Bkk"]);
    switch (t.state) {
        case d.PN.ALL_GOOD:
            return u.intl.format(u.t.pEdBD4, {
                termsOfService: (t) => {
                    t.stopPropagation(), (0, c.A)(h.d$.TOS_LINK);
                },
                communityGuidelines: (t) => {
                    t.stopPropagation(), (0, c.A)(h.d$.COMMUNITY_GUIDELINES);
                },
            });
        case d.PN.LIMITED:
            return u.intl.string(u.t["774juc"]);
        case d.PN.VERY_LIMITED:
            return u.intl.string(u.t["T/Ufh9"]);
        case d.PN.AT_RISK:
            return u.intl.string(u.t["hbH+9S"]);
        case d.PN.SUSPENDED:
            return u.intl.string(u.t["2liUvt"]);
    }
}
let A = {
        [d.PN.ALL_GOOD]: {
            color: n.A.colors.ICON_FEEDBACK_POSITIVE,
            backgroundColor: n.A.colors.BACKGROUND_FEEDBACK_POSITIVE,
            Icon: i.y,
        },
        [d.PN.LIMITED]: {
            color: n.A.colors.ICON_FEEDBACK_WARNING,
            backgroundColor: n.A.colors.BACKGROUND_FEEDBACK_WARNING,
            Icon: l.WarningIcon,
        },
        [d.PN.VERY_LIMITED]: {
            color: n.A.unsafe_rawColors.ORANGE_345,
            backgroundColor: n.A.unsafe_rawColors.OPACITY_ORANGE_12,
            Icon: l.WarningIcon,
        },
        [d.PN.AT_RISK]: {
            color: n.A.colors.ICON_FEEDBACK_CRITICAL,
            backgroundColor: n.A.colors.BACKGROUND_FEEDBACK_CRITICAL,
            Icon: r.E,
        },
        [d.PN.SUSPENDED]: { color: n.A.colors.ICON_MUTED, backgroundColor: n.A.colors.BACKGROUND_MOD_MUTED, Icon: a.a },
    },
    _ = { color: n.A.colors.ICON_MUTED, backgroundColor: n.A.colors.BACKGROUND_MOD_MUTED, Icon: o.CircleQuestionIcon };
function D() {
    let t = (0, m.K)();
    return (0, E.v)() ? A[t.state] : _;
}
