var i = n(73153),
    r = n(210608);
function l(e) {
    i.h.dispatch({ type: "STREAM_DRAWING_SET_MODE", streamKey: e });
}
n.d(
    t,
    {},
    {
        WX: function (e) {
            l(r.A.getActiveStreamKey() === e ? null : e);
        },
        cW: function (e, t) {
            i.h.dispatch({ type: "STREAM_DRAWING_UPDATE_TOOLS", streamKey: e, settings: t });
        },
        w3: l,
    },
);
