n.d(t, {
    A: () => u,
});
var r = n(64700),
    i = n(311907),
    a = n(475743),
    s = n(933958),
    o = n(429913),
    l = n(91242),
    c = n(207371);

function u(e) {
    let { applicationId: t, context: n, launchingComponentId: u, onSubmissionComplete: d } = e,
        f = (0, o.h)(t),
        p = (0, i.bG)([s.Ay], () => s.Ay.getLaunchState(t, "channel" === n.type ? n.channel.id : void 0)),
        _ = (0, i.bG)([l.A], () => l.A.isLaunchingFrame(t)),
        h = null != f && (0, c.x)(f) ? _ : null != p && p.isLaunching && p.componentId === u,
        m = (0, a.A)(h);
    return (
        r.useEffect(() => {
            !h && m && (null == d || d());
        }, [h, m, d]),
        {
            submitting: h,
            wasSubmitting: null != m ? m : null,
        }
    );
}
