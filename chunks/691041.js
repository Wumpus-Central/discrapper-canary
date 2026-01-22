n.d(t, { A: () => h });
var r = n(627968);
n(64700);
var i = n(990078),
    a = n(397927),
    s = n(544420),
    o = n(765379),
    l = n(928550),
    c = n(594262),
    u = n(939496),
    d = n(993401),
    f = n(695311),
    p = n(996988),
    _ = n(985018);
function h(e) {
    let { user: t, activity: n, onAction: h, onClose: m } = e,
        { themeType: g } = (0, u.E)(),
        E = (0, f.A)({
            applicationId: null == n ? void 0 : n.application_id,
            onClose: m,
        }),
        b = (0, c.l)({
            activity: null != n ? n : void 0,
            embeddedActivity: void 0,
            user: t,
            onClose: m,
        }),
        y = (0, l.d)(null == n ? void 0 : n.application_id);
    if (null == b && null != n && (0, o.A)(n))
        return (0, r.jsx)(d.FD, {
            icon: a.k9F,
            text: _.intl.string(_.t.RscU7I),
            fullWidth: g !== p.d.MODAL_V2,
            onClick: (e) => {
                e.stopPropagation(),
                    null != y
                        ? s.A.launch({ applicationId: y })
                        : (null == h || h({ action: "PRESS_PLAY_BUTTON" }), E());
            },
        });
    if (null == b) return null;
    let { isJoining: O, handleJoinRequest: A, buttonCTA: v, tooltip: S, isEnabled: I, isEmbedded: T } = b;
    return (0, r.jsx)(i.m, {
        text: S,
        asContainer: !I,
        children: (0, r.jsx)(d.FD, {
            icon: T ? a.Ihz : a._xR,
            text: v,
            disabled: !I,
            loading: O,
            fullWidth: g !== p.d.MODAL_V2,
            onClick: (e) => {
                e.stopPropagation(),
                    null == h || h({ action: T ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON" }),
                    A();
            },
        }),
    });
}
