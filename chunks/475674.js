n.d(t, { Z: () => i }), n(47120);
var r = n(442837),
    l = n(674503);
function i(e) {
    let t = e.id;
    return (0, r.e7)(
        [l.Z],
        () => {
            for (let e of l.Z.getActiveErrors().values()) if ('streamKey' in e && 'videoError' in e && e.streamKey === t) return e.videoError;
        },
        [t]
    );
}
