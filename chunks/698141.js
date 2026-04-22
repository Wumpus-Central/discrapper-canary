n.d(t, { A: () => d });
var l = n(64700),
    i = n(311907),
    a = n(475743),
    s = n(933958),
    r = n(429913),
    o = n(91242),
    c = n(207371);
function d(e) {
    let { applicationId: t, context: n, launchingComponentId: d, onSubmissionComplete: u } = e,
        m = (0, r.h)(t),
        p = (0, i.bG)([s.Ay], () => s.Ay.getLaunchState(t, "channel" === n.type ? n.channel.id : void 0)),
        _ = (0, i.bG)([o.A], () => o.A.isLaunchingFrame(t)),
        A = null != m && (0, c.x)(m) ? _ : null != p && p.isLaunching && p.componentId === d,
        h = (0, a.A)(A);
    return (
        l.useEffect(() => {
            !A && h && u?.();
        }, [A, h, u]),
        { submitting: A, wasSubmitting: h ?? null }
    );
}
