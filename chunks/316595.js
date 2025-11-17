n.d(t, { Z: () => p }), n(539854);
var i = n(54381),
    r = n(473749),
    l = n(442837),
    a = n(704215),
    o = n(890977),
    s = n(266454),
    c = n(243778),
    u = n(375954),
    d = n(921944);
function p(e) {
    let { children: t, enabled: n, animationContainerClassName: p, glowClassName: h, trinketsClassName: f } = e,
        m = (0, l.e7)([u.Z], () => u.Z.hasCurrentUserSentMessageSinceAppStart()),
        g = r.useMemo(() => {
            let e = [];
            return m && n && e.push(a.z.ACTIVITIES_CHAT_BUTTON_NUX_V2), e;
        }, [m, n]),
        b = () => {
            setTimeout(() => (0, s.Q3)(a.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: d.L.AUTO_DISMISS }), 10000);
        };
    return (0, i.jsx)(c.ZP, {
        contentTypes: g,
        children: (e) => {
            let { visibleContent: n } = e;
            return n === a.z.ACTIVITIES_CHAT_BUTTON_NUX_V2
                ? (0, i.jsx)(o.b, {
                      animationContainerClassName: p,
                      glowClassName: h,
                      trinketsClassName: f,
                      onMount: b,
                      children: t,
                  })
                : t;
        },
    });
}
