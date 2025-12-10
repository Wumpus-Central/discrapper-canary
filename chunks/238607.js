n.d(t, { Z: () => m });
var r = n(54381);
n(473749);
var i = n(28664),
    a = n(481060),
    o = n(224706),
    s = n(841784),
    l = n(171516),
    c = n(103450),
    u = n(652853),
    d = n(732380),
    f = n(614716),
    p = n(671955),
    _ = n(388032);
function m(e) {
    let { user: t, activity: n, onAction: m, onClose: h } = e,
        { themeType: g } = (0, u.z)(),
        E = (0, f.Z)({
            applicationId: null == n ? void 0 : n.application_id,
            onClose: h,
        }),
        b = (0, c.e)({
            activity: null != n ? n : void 0,
            embeddedActivity: void 0,
            user: t,
            onClose: h,
        }),
        y = (0, l.h)(null == n ? void 0 : n.application_id);
    if (null == b && null != n && (0, s.Z)(n))
        return (0, r.jsx)(d.O1, {
            icon: a.jje,
            text: _.intl.string(_.t.RscU7I),
            fullWidth: g !== p.l.MODAL_V2,
            onClick: (e) => {
                e.stopPropagation(),
                    null != y
                        ? o.Z.launch({ applicationId: y })
                        : (null == m || m({ action: "PRESS_PLAY_BUTTON" }), E());
            },
        });
    if (null == b) return null;
    let { isJoining: O, handleJoinRequest: v, buttonCTA: S, tooltip: I, isEnabled: T, isEmbedded: C } = b;
    return (0, r.jsx)(i.u, {
        text: I,
        asContainer: !T,
        children: (0, r.jsx)(d.O1, {
            icon: C ? a.YVR : a.iWm,
            text: S,
            disabled: !T,
            loading: O,
            fullWidth: g !== p.l.MODAL_V2,
            onClick: (e) => {
                e.stopPropagation(),
                    null == m || m({ action: C ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON" }),
                    v();
            },
        }),
    });
}
