n.d(t, { A: () => d });
var i = n(64700),
    l = n(17928),
    a = n(475743),
    s = n(933958),
    r = n(429913),
    o = n(91242),
    c = n(375802);
function d(e) {
    let { applicationId: t, context: n, launchingComponentId: d, onSubmissionComplete: u } = e,
        m = (0, r.h)(t),
        p = (0, l.bG)([s.Ay], () => s.Ay.getLaunchState(t, "channel" === n.type ? n.channel.id : void 0)),
        _ = (0, l.bG)([o.A], () => o.A.isLaunchingFrame(t)),
        h = null != m && (0, c.x)(m) ? _ : null != p && p.isLaunching && p.componentId === d,
        A = (0, a.A)(h);
    return (
        i.useEffect(() => {
            !h && A && u?.();
        }, [h, A, u]),
        { submitting: h, wasSubmitting: A ?? null }
    );
}
