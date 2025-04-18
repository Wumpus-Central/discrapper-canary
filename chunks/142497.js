n.d(t, {
    Kw: () => o,
    Po: () => l,
    hv: () => s
});
var r = n(570140),
    i = n(626135),
    a = n(981631);
function o(e) {
    i.default.track(a.rMx.HOTSPOT_HIDDEN, { hotspot_location: e }),
        r.Z.wait(() => {
            r.Z.dispatch({
                type: 'HOTSPOT_HIDE',
                location: e
            });
        });
}
function s(e, t) {
    r.Z.dispatch({
        type: 'HOTSPOT_OVERRIDE_SET',
        location: e,
        enabled: t
    });
}
function l(e) {
    r.Z.dispatch({
        type: 'HOTSPOT_OVERRIDE_CLEAR',
        location: e
    });
}
