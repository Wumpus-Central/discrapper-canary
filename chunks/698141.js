"use strict";
n.d(t, { A: () => c });
var i = n(64700),
    r = n(17928),
    s = n(475743),
    a = n(933958),
    o = n(429913),
    l = n(91242),
    u = n(375802);
function c(e) {
    let { applicationId: t, context: n, launchingComponentId: c, onSubmissionComplete: d } = e,
        _ = (0, o.h)(t),
        f = (0, r.bG)([a.Ay], () => a.Ay.getLaunchState(t, "channel" === n.type ? n.channel.id : void 0)),
        h = (0, r.bG)([l.A], () => l.A.isLaunchingFrame(t)),
        p = null != _ && (0, u.x)(_) ? h : null != f && f.isLaunching && f.componentId === c,
        E = (0, s.A)(p);
    return (
        i.useEffect(() => {
            !p && E && d?.();
        }, [p, E, d]),
        { submitting: p, wasSubmitting: E ?? null }
    );
}
