n.d(t, { Z: () => h }), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(704215),
    s = n(605236),
    o = n(243778),
    c = n(375954),
    d = n(890977),
    u = n(921944);
function h(e) {
    let { children: t, animationContainerClassName: n, glowClassName: h, trinketsClassName: p } = e,
        m = (0, a.e7)([c.Z], () => c.Z.hasCurrentUserSentMessageSinceAppStart()),
        f = l.useMemo(() => {
            let e = [];
            return m && e.push(r.z.DESKTOP_APP_LAUNCHER_ONBOARDING), e;
        }, [m]),
        g = () => {
            setTimeout(() => (0, s.EW)(r.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: u.L.AUTO_DISMISS }), 10000);
        };
    return (0, i.jsx)(o.ZP, {
        contentTypes: f,
        children: (e) => {
            let { visibleContent: l } = e;
            return l === r.z.DESKTOP_APP_LAUNCHER_ONBOARDING
                ? (0, i.jsx)(d.b, {
                      animationContainerClassName: n,
                      glowClassName: h,
                      trinketsClassName: p,
                      onMount: g,
                      children: t
                  })
                : t;
        }
    });
}
