n.d(t, {
    C: () => l,
    R: () => s
});
var r = n(570140),
    i = n(522474),
    o = n(788983),
    a = n(981631);
function s() {
    return !1;
}
async function l(e, t) {
    let n,
        s = i.Z.getWindowOpen(a.KJ3.ACTIVITY_POPOUT);
    e &&
        !s &&
        r.Z.wait(() => {
            r.Z.dispatch({ type: 'ACTIVITY_POPOUT_WINDOW_OPEN' });
        });
    try {
        n = await t();
    } catch (e) {
        n = !1;
    }
    return !n && e && o.xv(a.KJ3.ACTIVITY_POPOUT), n;
}
