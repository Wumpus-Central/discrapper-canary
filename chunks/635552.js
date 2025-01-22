r.d(n, {
    W: function () {
        return p;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(979554),
    s = r(809206),
    l = r(350327),
    u = r(884697),
    c = r(328456),
    d = r(388032);
let f = 6000,
    p = (e) => {
        let { product: n, onSuccess: i, onError: p } = e,
            [h, _] = a.useState(!1),
            { firstAvatarDecoration: m, firstProfileEffect: g } = (0, c.R)(n),
            E = (0, u.x6)(n) ? d.intl.string(d.t.tf1ZZ2) : n.type === o.Z.AVATAR_DECORATION ? d.intl.string(d.t.zOA4a2) : d.intl.string(d.t.SWm2am);
        return {
            handleUseNow: a.useCallback(async () => {
                _(!0);
                try {
                    if (null != m) {
                        let e = { avatarDecoration: m };
                        await (0, s.Mn)(e);
                    }
                    if (null != g) {
                        let e = { profile_effect_id: g.id };
                        await (0, l.Z)(e);
                    }
                    {
                        let { ToastPosition: e, ToastType: n, createToast: i, popToast: a, showToast: o } = await Promise.resolve().then(r.bind(r, 481060));
                        a(),
                            o(
                                i(E, n.MESSAGE, {
                                    duration: f,
                                    position: e.TOP
                                })
                            );
                    }
                    null == i || i();
                } catch (e) {
                    null == p || p(e);
                } finally {
                    _(!1);
                }
            }, [m, g, i, E, p]),
            isApplying: h
        };
    };
