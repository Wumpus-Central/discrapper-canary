n.d(t, { Z: () => p }), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(704215),
    a = n(605236),
    s = n(243778),
    c = n(375954),
    u = n(890977),
    d = n(921944);
function p(e) {
    let { children: t, animationContainerClassName: n, glowClassName: p, trinketsClassName: h } = e,
        f = (0, l.e7)([c.Z], () => c.Z.hasCurrentUserSentMessageSinceAppStart()),
        m = i.useMemo(() => {
            let e = [];
            return f && e.push(o.z.DESKTOP_APP_LAUNCHER_ONBOARDING), e;
        }, [f]),
        g = () => {
            setTimeout(() => (0, a.EW)(o.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: d.L.AUTO_DISMISS }), 10000);
        };
    return (0, r.jsx)(s.ZP, {
        contentTypes: m,
        children: (e) => {
            let { visibleContent: i } = e;
            return i === o.z.DESKTOP_APP_LAUNCHER_ONBOARDING
                ? (0, r.jsx)(u.b, {
                      animationContainerClassName: n,
                      glowClassName: p,
                      trinketsClassName: h,
                      onMount: g,
                      children: t
                  })
                : t;
        }
    });
}
