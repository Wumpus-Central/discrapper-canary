"use strict";
n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var i = n(990078),
    s = n(397927),
    a = n(544420),
    o = n(765379),
    l = n(928550),
    u = n(594262),
    c = n(939496),
    d = n(993401),
    _ = n(695311),
    f = n(996988),
    p = n(985018),
    h = n(844630);
function m(e) {
    let { user: t, activity: n, onAction: m, onClose: E } = e,
        { themeType: g } = (0, c.E)(),
        A = (0, _.A)({ applicationId: n?.application_id, onClose: E }),
        I = (0, u.l)({ activity: n ?? void 0, embeddedActivity: void 0, user: t, onClose: E }),
        T = (0, l.d)(n?.application_id);
    if (null == I && null != n && (0, o.A)(n))
        return (0, r.jsx)(d.FD, {
            icon: s.k9F,
            text: p.intl.string(p.t.RscU7I),
            fullWidth: g !== f.d.MODAL_V2,
            onClick: (e) => {
                e.stopPropagation(),
                    null != T ? a.Ay.launch({ applicationId: T }) : (m?.({ action: "PRESS_PLAY_BUTTON" }), A());
            },
        });
    if (null == I) return null;
    let { isJoining: S, handleJoinRequest: y, buttonCTA: v, tooltip: N, isEnabled: C, isEmbedded: R } = I,
        O = g !== f.d.MODAL_V2;
    return (0, r.jsx)("div", {
        className: O ? h.Ij : void 0,
        children: (0, r.jsx)(i.m, {
            text: N,
            asContainer: !C,
            children: (0, r.jsx)(d.FD, {
                icon: R ? s.Ihz : s._xR,
                text: v,
                disabled: !C,
                loading: S,
                fullWidth: O,
                onClick: (e) => {
                    e.stopPropagation(), m?.({ action: R ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON" }), y();
                },
            }),
        }),
    });
}
