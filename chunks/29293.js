var i = t(477900);
t(582128);
var l = t(855986),
    a = t(477782),
    r = t(192308),
    d = t(994500),
    s = t(792996);
t.d(
    e,
    {},
    {
        A: function (n) {
            let { user: e, onAction: u, appContext: c } = n,
                o = e.id,
                [b, A] = (0, l.yK)([d.A], () => [d.A.isFriend(o), d.A.getNickname(o) ?? null], [o]);
            if (!b) return null;
            let k = null == A ? s.intl.string(s.t.BGYkaH) : s.intl.string(s.t["8pOYUE"]);
            return (0, i.jsx)(a.Dr, {
                id: null == A ? "add-friend-nickname" : "edit-friend-nickname",
                label: k,
                action: () => {
                    (u?.(),
                        (0, r.mM)(
                            async () => {
                                let { default: n } = await Promise.all([t.e(144909), t.e(188941), t.e(659139)]).then(
                                    t.bind(t, 609422),
                                );
                                return (t) => (0, i.jsx)(n, { user: e, nickname: A, ...t });
                            },
                            { contextKey: null != c ? (0, r.TI)(c) : void 0 },
                        ));
                },
            });
        },
    },
);
