n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    l = n(554146),
    a = n(397927),
    s = n(15073),
    o = n(954571),
    d = n(488926),
    c = n(45780),
    u = n(652215),
    A = n(49999),
    h = n(349828),
    _ = n(124759);
function m(e) {
    let t = (0, s.TZ)(e),
        m = _.dR.some((t) => e?.id !== h.Vc && d.Ib(t, e)),
        p = e?.defaultMessageNotifications === u.orn.ALL_MESSAGES,
        g = (0, c.G$)(l.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e?.id ?? u.dJq),
        E = t && (m || p) && !g,
        I = r.useCallback(() => {
            (0, c._$)(l.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e?.id ?? u.dJq, !0, A.i.DISMISS);
        }, [e]),
        f = r.useRef(!1);
    r.useEffect(() => {
        E &&
            !f.current &&
            ((0, a.mMO)(
                async () => {
                    let { default: t } = await n.e("42446").then(n.bind(n, 653981));
                    return (n) =>
                        (0, i.jsx)(t, { guild: e, canEveryoneModerate: m, isDefaultNotificationsAllMessages: p, ...n });
                },
                { onCloseCallback: I },
            ),
            o.default.track(u.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                type: l.V[l.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                guild_id: e?.id ?? u.dJq,
            }),
            (f.current = !0));
    }, [m, e, I, p, E]);
}
