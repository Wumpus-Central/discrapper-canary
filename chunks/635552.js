n.d(e, {
    W: function () {
        return d;
    }
}),
    n(47120);
var r = n(192379),
    a = n(979554),
    i = n(809206),
    o = n(350327),
    s = n(884697),
    l = n(328456),
    c = n(388032);
let d = (t) => {
    let { product: e, onSuccess: d, onError: u } = t,
        [f, g] = r.useState(!1),
        { firstAvatarDecoration: p, firstProfileEffect: v } = (0, l.R)(e),
        h = (0, s.x6)(e) ? c.intl.string(c.t.tf1ZZ2) : e.type === a.Z.AVATAR_DECORATION ? c.intl.string(c.t.zOA4a2) : c.intl.string(c.t.SWm2am);
    return {
        handleUseNow: r.useCallback(async () => {
            g(!0);
            try {
                if ((null != p && (await (0, i.Mn)({ avatarDecoration: p })), null != v)) {
                    let t = { profile_effect_id: v.id };
                    await (0, o.Z)(t);
                }
                {
                    let { ToastPosition: t, ToastType: e, createToast: r, popToast: a, showToast: i } = await Promise.resolve().then(n.bind(n, 481060));
                    a(),
                        i(
                            r(h, e.MESSAGE, {
                                duration: 6000,
                                position: t.TOP
                            })
                        );
                }
                null == d || d();
            } catch (t) {
                null == u || u(t);
            } finally {
                g(!1);
            }
        }, [p, v, d, h, u]),
        isApplying: f
    };
};
