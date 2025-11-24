n.d(t, { Z: () => h });
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
    _ = n(671955),
    p = n(388032);
function h(e) {
    let { user: t, activity: n, onAction: h, onClose: m } = e,
        { themeType: g } = (0, u.z)(),
        E = (0, f.Z)({
            applicationId: null == n ? void 0 : n.application_id,
            onClose: m,
        }),
        b = (0, c.e)({
            activity: null != n ? n : void 0,
            embeddedActivity: void 0,
            user: t,
            onClose: m,
        }),
        y = (0, l.h)(null == n ? void 0 : n.application_id);
    if (null == b && null != n && (0, s.Z)(n))
        return (0, r.jsx)(d.O1, {
            icon: a.jje,
            text: p.intl.string(p.t.RscU7I),
            fullWidth: g !== _.l.MODAL_V2,
            onClick: (e) => {
                e.stopPropagation(),
                    null != y
                        ? o.Z.launch({ applicationId: y })
                        : (null == h || h({ action: "PRESS_PLAY_BUTTON" }), E());
            },
        });
    if (null == b) return null;
    let { isJoining: O, handleJoinRequest: v, buttonCTA: I, tooltip: T, isEnabled: S, isEmbedded: A } = b;
    return (0, r.jsx)(i.u, {
        text: T,
        asContainer: !S,
        children: (0, r.jsx)(d.O1, {
            icon: A ? a.YVR : a.iWm,
            text: I,
            disabled: !S,
            loading: O,
            fullWidth: g !== _.l.MODAL_V2,
            onClick: (e) => {
                e.stopPropagation(),
                    null == h || h({ action: A ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON" }),
                    v();
            },
        }),
    });
}
