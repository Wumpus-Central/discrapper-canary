a.d(i, { A: () => u });
var r = a(991690),
    d = a(418241),
    n = a(91242),
    t = a(574172),
    c = a(869146),
    s = a(652215),
    p = a(457827);
function u(e) {
    let i = n.A.getFrame(e);
    if (null != i) {
        var a;
        if (
            ((a = i.id),
            c.A.getWindowOpen(s.MLl.ACTIVITY_POPOUT) &&
                n.A.getMainFrame()?.id === a &&
                (0, t.close)(s.MLl.ACTIVITY_POPOUT),
            i.surface.type === r.U.VOICE_CHANNEL)
        )
            return void (0, d.N)(i.surface.channelId);
        (0, p.r)(i.id);
    }
}
