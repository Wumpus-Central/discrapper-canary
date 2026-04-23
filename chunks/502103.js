n.d(t, { A: () => E });
var i = n(627968),
    r = n(64700),
    a = n(554146),
    l = n(192308),
    s = n(15073),
    o = n(5180),
    d = n(954571),
    u = n(488926),
    c = n(45780),
    A = n(652215),
    h = n(49999),
    _ = n(124759);
function E(e) {
    let t = (0, s.TZ)(e),
        E = _.dR.some((t) => !(0, o.ai)(e?.id) && u.Ib(t, e)),
        p = e?.defaultMessageNotifications === A.orn.ALL_MESSAGES,
        m = (0, c.G$)(a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e?.id ?? A.dJq),
        g = t && (E || p) && !m,
        I = r.useCallback(() => {
            (0, c._$)(a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e?.id ?? A.dJq, !0, h.i.DISMISS);
        }, [e]),
        C = r.useRef(!1);
    r.useEffect(() => {
        g &&
            !C.current &&
            ((0, l.openModalLazy)(
                async () => {
                    let { default: t } = await n.e("42446").then(n.bind(n, 653981));
                    return (n) =>
                        (0, i.jsx)(t, { guild: e, canEveryoneModerate: E, isDefaultNotificationsAllMessages: p, ...n });
                },
                { onCloseCallback: I },
            ),
            d.default.track(A.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                type: a.V[a.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                guild_id: e?.id ?? A.dJq,
            }),
            (C.current = !0));
    }, [E, e, I, p, g]);
}
