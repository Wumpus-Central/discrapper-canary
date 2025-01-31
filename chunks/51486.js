n.d(t, { Z: () => m }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(399606),
    r = n(704215),
    s = n(952265),
    o = n(481060),
    c = n(243778),
    d = n(38618),
    u = n(914010),
    h = n(921944);
function p(e) {
    return 'dismissible_content_'.concat(h.R.GUILD_TAKEOVER_MODAL, '-').concat(e);
}
let m = l.memo(function () {
    return (
        !(function () {
            let e = ((0, a.e7)([d.Z], () => d.Z.isConnected()), []),
                [t, m] = (0, c.US)(e, h.R.GUILD_TAKEOVER_MODAL),
                f = (0, s.f9)(),
                g = l.useRef(null);
            l.useEffect(() => {
                if (null == t) {
                    g.current = null;
                    return;
                }
                !f &&
                    g.current !== t &&
                    ((function (e) {
                        let { dismissibleContent: t, markAsDismissed: l } = e,
                            a = {
                                onCloseCallback: (e) => l(null != e ? e : h.L.UNKNOWN),
                                modalKey: p(t)
                            },
                            s = u.Z.getGuildId();
                        t === r.z.SERVER_SHOP_UPSELL &&
                            null != s &&
                            (0, o.ZDy)(async () => {
                                let { default: e } = await n.e('7302').then(n.bind(n, 756779));
                                return (t) =>
                                    (0, i.jsx)(e, {
                                        ...t,
                                        guildId: s,
                                        markAsDismissed: l
                                    });
                            }, a);
                    })({
                        dismissibleContent: t,
                        markAsDismissed: m
                    }),
                    (g.current = t));
            }, [t, f, m]),
                l.useEffect(
                    () => () => {
                        null != t && (0, s.Mr)(p(t));
                    },
                    [t]
                );
        })(),
        null
    );
});
