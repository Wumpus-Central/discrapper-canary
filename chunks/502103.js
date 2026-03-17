n.d(t, { A: () => m });
var i = n(627968),
    r = n(64700),
    l = n(554146),
    a = n(397927),
    s = n(15073),
    o = n(5180),
    d = n(954571),
    c = n(488926),
    u = n(45780),
    A = n(652215),
    h = n(49999),
    _ = n(124759);
function m(e) {
    let t = (0, s.TZ)(e),
        m = _.dR.some((t) => !(0, o.ai)(e?.id) && c.Ib(t, e)),
        g = e?.defaultMessageNotifications === A.orn.ALL_MESSAGES,
        p = (0, u.G$)(l.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e?.id ?? A.dJq),
        E = t && (m || g) && !p,
        I = r.useCallback(() => {
            (0, u._$)(l.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, e?.id ?? A.dJq, !0, h.i.DISMISS);
        }, [e]),
        f = r.useRef(!1);
    r.useEffect(() => {
        E &&
            !f.current &&
            ((0, a.mMO)(
                async () => {
                    let { default: t } = await n.e("42446").then(n.bind(n, 653981));
                    return (n) =>
                        (0, i.jsx)(t, { guild: e, canEveryoneModerate: m, isDefaultNotificationsAllMessages: g, ...n });
                },
                { onCloseCallback: I },
            ),
            d.default.track(A.HAw.DISMISSIBLE_CONTENT_SHOWN, {
                type: l.V[l.V.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                guild_id: e?.id ?? A.dJq,
            }),
            (f.current = !0));
    }, [m, e, I, g, E]);
}
