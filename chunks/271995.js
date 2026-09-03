s.d(e, { QB: () => g, _k: () => _, aO: () => x, bh: () => E }), s(582128);
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
    N = s(239093),
    h = s(375708);
function g() {
    return {
        [d.PN.ALL_GOOD]: {
            title: h.t.uaKrRi,
            description: h.intl.format(h.t.pEdBD4, {
                termsOfService: N.d$.TOS_LINK,
                communityGuidelines: N.d$.COMMUNITY_GUIDELINES,
            }),
            status: h.t["/Idfao"],
            Icon: i.y,
            color: n.A.colors.STATUS_POSITIVE,
        },
        [d.PN.LIMITED]: {
            title: h.t.epkcmS,
            description: h.intl.string(h.t["774juc"]),
            status: h.t.umleq4,
            Icon: r.E,
            color: n.A.colors.STATUS_WARNING,
        },
        [d.PN.VERY_LIMITED]: {
            title: h.t.crzE2X,
            description: h.intl.string(h.t["T/Ufh9"]),
            status: h.t.WBtMHf,
            Icon: r.E,
            color: n.A.unsafe_rawColors.ORANGE_345,
        },
        [d.PN.AT_RISK]: {
            title: h.t.XRNVzO,
            description: h.intl.string(h.t["hbH+9S"]),
            status: h.t["7f+4Lg"],
            Icon: r.E,
            color: n.A.colors.ICON_FEEDBACK_CRITICAL,
        },
        [d.PN.SUSPENDED]: {
            title: h.t.MExFkz,
            description: h.intl.string(h.t["2liUvt"]),
            status: h.t["0OONGB"],
            Icon: a.a,
            color: n.A.colors.ICON_MUTED,
        },
    };
}
function x() {
    let t = (0, u.K)();
    if (!(0, m.v)()) return h.intl.string(h.t.ZTNur7);
    let { status: e } = g()[t.state];
    return h.intl.formatToPlainString(e, { hook: (t) => t });
}
function E() {
    let t = (0, u.K)();
    if (!(0, m.v)()) return h.intl.string(h.t["9m2Bkk"]);
    switch (t.state) {
        case d.PN.ALL_GOOD:
            return h.intl.format(h.t.pEdBD4, {
                termsOfService: (t) => {
                    t.stopPropagation(), (0, c.A)(N.d$.TOS_LINK);
                },
                communityGuidelines: (t) => {
                    t.stopPropagation(), (0, c.A)(N.d$.COMMUNITY_GUIDELINES);
                },
            });
        case d.PN.LIMITED:
            return h.intl.string(h.t["774juc"]);
        case d.PN.VERY_LIMITED:
            return h.intl.string(h.t["T/Ufh9"]);
        case d.PN.AT_RISK:
            return h.intl.string(h.t["hbH+9S"]);
        case d.PN.SUSPENDED:
            return h.intl.string(h.t["2liUvt"]);
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
