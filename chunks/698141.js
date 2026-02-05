"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(311907),
    a = n(475743),
    s = n(933958),
    o = n(429913),
    l = n(91242),
    u = n(207371);
function c(e) {
    let { applicationId: t, context: n, launchingComponentId: c, onSubmissionComplete: d } = e,
        _ = (0, o.h)(t),
        f = (0, i.bG)([s.Ay], () => s.Ay.getLaunchState(t, "channel" === n.type ? n.channel.id : void 0)),
        p = (0, i.bG)([l.A], () => l.A.isLaunchingFrame(t)),
        h = null != _ && (0, u.x)(_) ? p : null != f && f.isLaunching && f.componentId === c,
        m = (0, a.A)(h);
    return (
        r.useEffect(() => {
            !h && m && d?.();
        }, [h, m, d]),
        { submitting: h, wasSubmitting: m ?? null }
    );
}
