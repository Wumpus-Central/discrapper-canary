"use strict";
n.d(t, { A: () => c });
var i = n(64700),
    r = n(17928),
    a = n(475743),
    s = n(933958),
    l = n(429913),
    o = n(91242),
    d = n(207371);
function c(e) {
    let { applicationId: t, context: n, launchingComponentId: c, onSubmissionComplete: u } = e,
        _ = (0, l.h)(t),
        E = (0, r.bG)([s.Ay], () => s.Ay.getLaunchState(t, "channel" === n.type ? n.channel.id : void 0)),
        A = (0, r.bG)([o.A], () => o.A.isLaunchingFrame(t)),
        h = null != _ && (0, d.x)(_) ? A : null != E && E.isLaunching && E.componentId === c,
        I = (0, a.A)(h);
    return (
        i.useEffect(() => {
            !h && I && u?.();
        }, [h, I, u]),
        { submitting: h, wasSubmitting: I ?? null }
    );
}
