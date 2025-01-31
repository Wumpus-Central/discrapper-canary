n.d(t, { W: () => d }), n(47120);
var i = n(192379),
    r = n(979554),
    a = n(809206),
    s = n(350327),
    o = n(884697),
    l = n(328456),
    u = n(388032);
let c = 6000,
    d = (e) => {
        let { product: t, onSuccess: d, onError: f } = e,
            [_, p] = i.useState(!1),
            { firstAvatarDecoration: h, firstProfileEffect: m } = (0, l.R)(t),
            g = (0, o.x6)(t) ? u.intl.string(u.t.tf1ZZ2) : t.type === r.Z.AVATAR_DECORATION ? u.intl.string(u.t.zOA4a2) : u.intl.string(u.t.SWm2am);
        return {
            handleUseNow: i.useCallback(async () => {
                p(!0);
                try {
                    if (null != h) {
                        let e = { avatarDecoration: h };
                        await (0, a.Mn)(e);
                    }
                    if (null != m) {
                        let e = { profile_effect_id: m.id };
                        await (0, s.Z)(e);
                    }
                    {
                        let { ToastPosition: e, ToastType: t, createToast: i, popToast: r, showToast: a } = await Promise.resolve().then(n.bind(n, 481060));
                        r(),
                            a(
                                i(g, t.MESSAGE, {
                                    duration: c,
                                    position: e.TOP
                                })
                            );
                    }
                    null == d || d();
                } catch (e) {
                    null == f || f(e);
                } finally {
                    p(!1);
                }
            }, [h, m, d, g, f]),
            isApplying: _
        };
    };
