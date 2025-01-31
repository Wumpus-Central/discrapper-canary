n.d(t, {
    Kw: () => s,
    Po: () => l,
    hv: () => o
});
var i = n(570140),
    r = n(626135),
    a = n(981631);
function s(e) {
    r.default.track(a.rMx.HOTSPOT_HIDDEN, { hotspot_location: e }),
        i.Z.wait(() => {
            i.Z.dispatch({
                type: 'HOTSPOT_HIDE',
                location: e
            });
        });
}
function o(e, t) {
    i.Z.dispatch({
        type: 'HOTSPOT_OVERRIDE_SET',
        location: e,
        enabled: t
    });
}
function l(e) {
    i.Z.dispatch({
        type: 'HOTSPOT_OVERRIDE_CLEAR',
        location: e
    });
}
