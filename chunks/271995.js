s.d(e, { QB: () => x, _k: () => _, aO: () => g, bh: () => E }), s(582128);
var n = s(661531),
    i = s(628284),
    r = s(695366),
    a = s(285796),
    l = s(738188),
    o = s(290136),
    c = s(975807),
    d = s(739010),
    u = s(335891),
    m = s(259960),
    h = s(239093),
    N = s(375708);
function x() {
    return {
        [d.PN.ALL_GOOD]: {
            title: N.t.uaKrRi,
            description: N.intl.format(N.t.pEdBD4, {
                termsOfService: h.d$.TOS_LINK,
                communityGuidelines: h.d$.COMMUNITY_GUIDELINES,
            }),
            status: N.t["/Idfao"],
            Icon: i.y,
            color: n.A.colors.STATUS_POSITIVE,
        },
        [d.PN.LIMITED]: {
            title: N.t.epkcmS,
            description: N.intl.string(N.t["774juc"]),
            status: N.t.umleq4,
            Icon: r.E,
            color: n.A.colors.STATUS_WARNING,
        },
        [d.PN.VERY_LIMITED]: {
            title: N.t.crzE2X,
            description: N.intl.string(N.t["T/Ufh9"]),
            status: N.t.WBtMHf,
            Icon: r.E,
            color: n.A.unsafe_rawColors.ORANGE_345,
        },
        [d.PN.AT_RISK]: {
            title: N.t.XRNVzO,
            description: N.intl.string(N.t["hbH+9S"]),
            status: N.t["7f+4Lg"],
            Icon: r.E,
            color: n.A.colors.ICON_FEEDBACK_CRITICAL,
        },
        [d.PN.SUSPENDED]: {
            title: N.t.MExFkz,
            description: N.intl.string(N.t["2liUvt"]),
            status: N.t["0OONGB"],
            Icon: a.a,
            color: n.A.colors.ICON_MUTED,
        },
    };
}
function g() {
    let t = (0, u.K)();
    if (!(0, m.v)()) return null;
    let { status: e } = x()[t.state];
    return N.intl.formatToPlainString(e, { hook: (t) => t });
}
function E() {
    let t = (0, u.K)();
    if (!(0, m.v)()) return N.intl.string(N.t["9m2Bkk"]);
    switch (t.state) {
        case d.PN.ALL_GOOD:
            return N.intl.format(N.t.pEdBD4, {
                termsOfService: (t) => {
                    t.stopPropagation(), (0, c.A)(h.d$.TOS_LINK);
                },
                communityGuidelines: (t) => {
                    t.stopPropagation(), (0, c.A)(h.d$.COMMUNITY_GUIDELINES);
                },
            });
        case d.PN.LIMITED:
            return N.intl.string(N.t["774juc"]);
        case d.PN.VERY_LIMITED:
            return N.intl.string(N.t["T/Ufh9"]);
        case d.PN.AT_RISK:
            return N.intl.string(N.t["hbH+9S"]);
        case d.PN.SUSPENDED:
            return N.intl.string(N.t["2liUvt"]);
    }
}
let I = {
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
    A = { color: n.A.colors.ICON_MUTED, backgroundColor: n.A.colors.BACKGROUND_MOD_MUTED, Icon: o.CircleQuestionIcon };
function _() {
    let t = (0, u.K)();
    return (0, m.v)() ? I[t.state] : A;
}
