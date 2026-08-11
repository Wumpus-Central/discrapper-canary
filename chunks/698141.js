e.d(t, { A: () => d });
var a = e(582128),
    i = e(17928),
    u = e(475743),
    c = e(933958),
    l = e(429913),
    p = e(91242),
    s = e(207371);
function d(n) {
    let { applicationId: t, context: e, launchingComponentId: d, onSubmissionComplete: h } = n,
        r = (0, l.h)(t),
        o = (0, i.bG)([c.Ay], () => c.Ay.getLaunchState(t, "channel" === e.type ? e.channel.id : void 0)),
        A = (0, i.bG)([p.A], () => {
            let n = p.A.getMainFrame();
            return n?.state === "loading" && n.applicationId === t;
        }),
        b = null != r && (0, s.x)(r) ? A : null != o && o.isLaunching && o.componentId === d,
        g = (0, u.Ay)(b);
    return (
        a.useEffect(() => {
            !b && g && h?.();
        }, [b, g, h]),
        { submitting: b, wasSubmitting: g ?? null }
    );
}
