n.d(t, { Z: () => p }), n(653041);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(704215),
    a = n(890977),
    s = n(605236),
    c = n(243778),
    u = n(375954),
    d = n(921944);
function p(e) {
    let { children: t, enabled: n, animationContainerClassName: p, glowClassName: h, trinketsClassName: f } = e,
        m = (0, l.e7)([u.Z], () => u.Z.hasCurrentUserSentMessageSinceAppStart()),
        g = i.useMemo(() => {
            let e = [];
            return m && n && e.push(o.z.ACTIVITIES_CHAT_BUTTON_NUX_V2), e;
        }, [m, n]),
        b = () => {
            setTimeout(() => (0, s.EW)(o.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: d.L.AUTO_DISMISS }), 10000);
        };
    return (0, r.jsx)(c.ZP, {
        contentTypes: g,
        children: (e) => {
            let { visibleContent: n } = e;
            return n === o.z.ACTIVITIES_CHAT_BUTTON_NUX_V2
                ? (0, r.jsx)(a.b, {
                      animationContainerClassName: p,
                      glowClassName: h,
                      trinketsClassName: f,
                      onMount: b,
                      children: t
                  })
                : t;
        }
    });
}
