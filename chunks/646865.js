n.d(t, {
    f: () => o,
    w: () => l,
});
var r = n(73153),
    i = n(87001),
    a = n(574172),
    s = n(652215);

function o() {
    return !1;
}
async function l(e, t) {
    let n,
        o = i.A.getWindowOpen(s.MLl.ACTIVITY_POPOUT);
    e &&
        !o &&
        r.h.wait(() => {
            r.h.dispatch({
                type: "ACTIVITY_POPOUT_WINDOW_OPEN",
            });
        });
    try {
        n = await t();
    } catch (e) {
        n = !1;
    }
    return !n && e && a.close(s.MLl.ACTIVITY_POPOUT), n;
}
