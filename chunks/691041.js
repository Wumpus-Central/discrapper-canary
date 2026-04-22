e.d(n, { A: () => E });
var i = e(627968);
e(64700);
var l = e(990078),
    r = e(323384),
    a = e(808666),
    s = e(687966),
    o = e(544420),
    c = e(765379),
    u = e(928550),
    d = e(594262),
    A = e(939496),
    x = e(993401),
    p = e(695311),
    f = e(996988),
    _ = e(985018),
    m = e(514566);
function E(t) {
    let { user: n, activity: e, onAction: E, onClose: T } = t,
        { themeType: g } = (0, A.E)(),
        N = (0, p.A)({ applicationId: e?.application_id, onClose: T }),
        C = (0, d.l)({ activity: e ?? void 0, embeddedActivity: void 0, user: n, onClose: T }),
        I = (0, u.d)(e?.application_id);
    if (null == C && null != e && (0, c.A)(e))
        return (0, i.jsx)(x.FD, {
            icon: r.k,
            text: _.intl.string(_.t.RscU7I),
            fullWidth: g !== f.d.MODAL_V2,
            onClick: (t) => {
                t.stopPropagation(),
                    null != I ? o.Ay.launch({ applicationId: I }) : (E?.({ action: "PRESS_PLAY_BUTTON" }), N());
            },
        });
    if (null == C) return null;
    let { isJoining: O, handleJoinRequest: S, buttonCTA: y, tooltip: h, isEnabled: j, isEmbedded: v } = C,
        P = g !== f.d.MODAL_V2;
    return (0, i.jsx)("div", {
        className: P ? m.Ij : void 0,
        children: (0, i.jsx)(l.m, {
            text: h,
            asContainer: !j,
            children: (0, i.jsx)(x.FD, {
                icon: v ? a.I : s._,
                text: y,
                disabled: !j,
                loading: O,
                fullWidth: P,
                onClick: (t) => {
                    t.stopPropagation(), E?.({ action: v ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON" }), S();
                },
            }),
        }),
    });
}
