n.d(t, { Z: () => g });
var i = n(200651),
    l = n(192379),
    r = n(704215),
    a = n(481060),
    s = n(785697),
    o = n(626135),
    c = n(700785),
    d = n(645041),
    u = n(981631),
    h = n(921944),
    m = n(647086),
    p = n(135899);
function g(e) {
    var t;
    let g = (0, s.SE)(e),
        _ = p.$X.some((t) => (null == e ? void 0 : e.id) !== m._ && c.oz(t, e)),
        f = (null == e ? void 0 : e.defaultMessageNotifications) === u.bL.ALL_MESSAGES,
        E = (0, d.FT)(r.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : u.lds),
        I = g && (_ || f) && !E,
        C = l.useCallback(() => {
            var t;
            (0, d.Qd)(r.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : u.lds, !0, h.L.DISMISS);
        }, [e]),
        N = l.useRef(!1);
    l.useEffect(() => {
        if (I && !N.current) {
            var t;
            (0, a.ZDy)(
                async () => {
                    let { default: t } = await n.e('54597').then(n.bind(n, 29022));
                    return (n) =>
                        (0, i.jsx)(t, {
                            guild: e,
                            canEveryoneModerate: _,
                            isDefaultNotificationsAllMessages: f,
                            ...n
                        });
                },
                { onCloseCallback: C }
            ),
                o.default.track(u.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                    type: r.C[r.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : u.lds
                }),
                (N.current = !0);
        }
    }, [_, e, C, f, I]);
}
