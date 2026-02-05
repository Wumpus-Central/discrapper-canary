n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    a = n(554146),
    l = n(397927),
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
        m = _.dR.some((t) => e?.id !== h.V && d.Ib(t, e)),
        p = e?.defaultMessageNotifications === u.orn.ALL_MESSAGES,
        g = (0, c.G$)(a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e?.id ?? u.dJq),
        E = t && (m || p) && !g,
        f = r.useCallback(() => {
            (0, c._$)(a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e?.id ?? u.dJq, !0, A.i.DISMISS);
        }, [e]),
        I = r.useRef(!1);
    r.useEffect(() => {
        E &&
            !I.current &&
            ((0, l.mMO)(
                async () => {
                    let { default: t } = await n.e("42446").then(n.bind(n, 653981));
                    return (n) =>
                        (0, i.jsx)(t, { guild: e, canEveryoneModerate: m, isDefaultNotificationsAllMessages: p, ...n });
                },
                { onCloseCallback: f },
            ),
            o.default.track(u.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                type: a.V[a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                guild_id: e?.id ?? u.dJq,
            }),
            (I.current = !0));
    }, [m, e, f, p, E]);
}
