"use strict";
n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(990078),
    a = n(397927),
    s = n(544420),
    o = n(765379),
    l = n(928550),
    u = n(594262),
    c = n(939496),
    d = n(993401),
    _ = n(695311),
    f = n(996988),
    p = n(985018);
function h(e) {
    let { user: t, activity: n, onAction: h, onClose: m } = e,
        { themeType: g } = (0, c.E)(),
        E = (0, _.A)({ applicationId: n?.application_id, onClose: m }),
        A = (0, u.l)({ activity: n ?? void 0, embeddedActivity: void 0, user: t, onClose: m }),
        I = (0, l.d)(n?.application_id);
    if (null == A && null != n && (0, o.A)(n))
        return (0, r.jsx)(d.FD, {
            icon: a.k9F,
            text: p.intl.string(p.t.RscU7I),
            fullWidth: g !== f.d.MODAL_V2,
            onClick: (e) => {
                e.stopPropagation(),
                    null != I ? s.A.launch({ applicationId: I }) : (h?.({ action: "PRESS_PLAY_BUTTON" }), E());
            },
        });
    if (null == A) return null;
    let { isJoining: T, handleJoinRequest: y, buttonCTA: S, tooltip: v, isEnabled: C, isEmbedded: b } = A;
    return (0, r.jsx)(i.m, {
        text: v,
        asContainer: !C,
        children: (0, r.jsx)(d.FD, {
            icon: b ? a.Ihz : a._xR,
            text: S,
            disabled: !C,
            loading: T,
            fullWidth: g !== f.d.MODAL_V2,
            onClick: (e) => {
                e.stopPropagation(), h?.({ action: b ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON" }), y();
            },
        }),
    });
}
