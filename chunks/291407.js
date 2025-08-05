(n.d(t, { Z: () => f }), n(539854));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(704215),
    s = n(266454),
    l = n(243778),
    c = n(375954),
    u = n(890977),
    d = n(921944);
function f(e) {
    let { children: t, animationContainerClassName: n, glowClassName: f, trinketsClassName: _ } = e,
        p = (0, a.e7)([c.Z], () => c.Z.hasCurrentUserSentMessageSinceAppStart()),
        h = i.useMemo(() => {
            let e = [];
            return (p && e.push(o.z.DESKTOP_APP_LAUNCHER_ONBOARDING), e);
        }, [p]),
        m = () => {
            setTimeout(() => (0, s.Q3)(o.z.DESKTOP_APP_LAUNCHER_ONBOARDING, { dismissAction: d.L.AUTO_DISMISS }), 10000);
        };
    return (0, r.jsx)(l.ZP, {
        contentTypes: h,
        children: (e) => {
            let { visibleContent: i } = e;
            return i === o.z.DESKTOP_APP_LAUNCHER_ONBOARDING
                ? (0, r.jsx)(u.b, {
                      animationContainerClassName: n,
                      glowClassName: f,
                      trinketsClassName: _,
                      onMount: m,
                      children: t
                  })
                : t;
        }
    });
}
