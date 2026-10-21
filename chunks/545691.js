n.d(e, { A: () => p });
var i = n(991690),
    r = n(418241),
    a = n(91242),
    l = n(574172),
    d = n(869146),
    _ = n(652215),
    I = n(457827);
function p(t) {
    let e = a.A.getFrame(t);
    if (null != e) {
        var n;
        if (
            ((n = e.id),
            d.A.getWindowOpen(_.MLl.ACTIVITY_POPOUT) &&
                a.A.getMainFrame()?.id === n &&
                (0, l.close)(_.MLl.ACTIVITY_POPOUT),
            e.surface.type === i.U.VOICE_CHANNEL)
        )
            return void (0, r.N)(e.surface.channelId);
        (0, I.r)(e.id);
    }
}
