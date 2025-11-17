n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(28664),
    a = n(481060),
    o = n(224706),
    s = n(456100),
    l = n(841784),
    c = n(171516),
    u = n(103450),
    d = n(652853),
    f = n(732380),
    _ = n(614716),
    p = n(671955),
    h = n(388032);
function m(e) {
    let { user: t, activity: n, onAction: m, onClose: g } = e,
        { themeType: E } = (0, d.z)(),
        b = (0, _.Z)({
            applicationId: null == n ? void 0 : n.application_id,
            onClose: g,
        }),
        y = (0, u.e)({
            activity: null != n ? n : void 0,
            embeddedActivity: void 0,
            user: t,
            onClose: g,
        }),
        { enabled: O } = s.c.useExperiment({ location: "ActivityButton" }, { autoTrackExposure: !0 }),
        v = (0, c.h)(null == n ? void 0 : n.application_id),
        I = O ? a.iWm : a.jje;
    if (null == y && null != n && (0, l.Z)(n))
        return (0, r.jsx)(f.O1, {
            icon: I,
            text: h.intl.string(h.t.RscU7I),
            fullWidth: E !== p.l.MODAL_V2,
            onClick: (e) => {
                e.stopPropagation(),
                    null != v
                        ? o.Z.launch({ applicationId: v })
                        : (null == m || m({ action: "PRESS_PLAY_BUTTON" }), b());
            },
        });
    if (null == y) return null;
    let { isJoining: T, handleJoinRequest: S, buttonCTA: A, tooltip: C, isEnabled: N, isEmbedded: R } = y;
    return (0, r.jsx)(i.u, {
        text: C,
        asContainer: !N,
        children: (0, r.jsx)(f.O1, {
            icon: R ? a.YVR : a.iWm,
            text: A,
            disabled: !N,
            loading: T,
            fullWidth: E !== p.l.MODAL_V2,
            onClick: (e) => {
                e.stopPropagation(),
                    null == m || m({ action: R ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON" }),
                    S();
            },
        }),
    });
}
