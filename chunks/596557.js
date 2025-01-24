n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651),
    r = n(192379),
    l = n(704215),
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
        f = p.$X.some((t) => (null == e ? void 0 : e.id) !== m._ && c.oz(t, e)),
        _ = (null == e ? void 0 : e.defaultMessageNotifications) === u.bL.ALL_MESSAGES,
        E = (0, d.FT)(l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : u.lds),
        I = g && (f || _) && !E,
        C = r.useCallback(() => {
            var t;
            (0, d.Qd)(l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE, null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : u.lds, !0, h.L.DISMISS);
        }, [e]),
        v = r.useRef(!1);
    r.useEffect(() => {
        if (I && !v.current) {
            var t;
            (0, a.openModalLazy)(
                async () => {
                    let { default: t } = await n.e('54597').then(n.bind(n, 29022));
                    return (n) =>
                        (0, i.jsx)(t, {
                            guild: e,
                            canEveryoneModerate: f,
                            isDefaultNotificationsAllMessages: _,
                            ...n
                        });
                },
                { onCloseCallback: C }
            ),
                o.default.track(u.rMx.DISMISSIBLE_CONTENT_SHOWN, {
                    type: l.C[l.C.DISABLE_UNSAFE_COMMUNITY_PERMISSIONS_NOTICE],
                    guild_id: null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : u.lds
                }),
                (v.current = !0);
        }
    }, [f, e, C, _, I]);
}
