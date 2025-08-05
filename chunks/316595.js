(n.d(t, { Z: () => f }), n(539854));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(704215),
    s = n(890977),
    l = n(266454),
    c = n(243778),
    u = n(375954),
    d = n(921944);
function f(e) {
    let { children: t, enabled: n, animationContainerClassName: f, glowClassName: _, trinketsClassName: p } = e,
        h = (0, a.e7)([u.Z], () => u.Z.hasCurrentUserSentMessageSinceAppStart()),
        m = i.useMemo(() => {
            let e = [];
            return (h && n && e.push(o.z.ACTIVITIES_CHAT_BUTTON_NUX_V2), e);
        }, [h, n]),
        g = () => {
            setTimeout(() => (0, l.Q3)(o.z.ACTIVITIES_CHAT_BUTTON_NUX_V2, { dismissAction: d.L.AUTO_DISMISS }), 10000);
        };
    return (0, r.jsx)(c.ZP, {
        contentTypes: m,
        children: (e) => {
            let { visibleContent: n } = e;
            return n === o.z.ACTIVITIES_CHAT_BUTTON_NUX_V2
                ? (0, r.jsx)(s.b, {
                      animationContainerClassName: f,
                      glowClassName: _,
                      trinketsClassName: p,
                      onMount: g,
                      children: t
                  })
                : t;
        }
    });
}
