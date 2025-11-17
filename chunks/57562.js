n.d(t, {
    D: () => d,
    T: () => u,
});
var r = n(54381);
n(473749);
var i = n(481060),
    a = n(570140),
    o = n(955204),
    s = n(510273),
    l = n(388032);
let c = 6000;
function u(e) {
    a.Z.dispatch({
        type: "POGGERMODE_ACHIEVEMENT_UNLOCK",
        achievementId: e,
    });
}
function d(e, t) {
    let n = (0, o.oX)(e);
    null != n &&
        (0, i.showToast)(
            (0, i.createToast)(l.intl.string(l.t.MPpEUA), i.ToastType.CUSTOM, {
                position: i.ToastPosition.BOTTOM,
                component: (0, r.jsx)(s.Z, {
                    achievement: n,
                    unlocked: t,
                }),
                duration: c,
            }),
        );
}
