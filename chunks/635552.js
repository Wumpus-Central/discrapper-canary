n.d(t, { W: () => d }), n(388685);
var r = n(647438),
    i = n(979554),
    a = n(809206),
    o = n(350327),
    s = n(884697),
    l = n(328456),
    c = n(388032);
let u = 6000,
    d = (e) => {
        let { product: t, onSuccess: d, onError: f } = e,
            [_, p] = r.useState(!1),
            { firstAvatarDecoration: h, firstProfileEffect: m, firstNameplate: g } = (0, l.Rj)(t),
            E = (0, s.x6)(t)
                ? c.intl.string(c.t.tf1ZZ2)
                : t.type === i.Z.AVATAR_DECORATION
                  ? c.intl.string(c.t.zOA4a2)
                  : t.type === i.Z.NAMEPLATE
                    ? c.intl.string(c.t.gOzMv7)
                    : c.intl.string(c.t.SWm2am);
        return {
            handleUseNow: r.useCallback(async () => {
                p(!0);
                let e = {};
                try {
                    if ((null != h && (e.avatarDecoration = h), null != m)) {
                        let e = { profile_effect_id: m.id };
                        await (0, o.Z)(e);
                    }
                    null != g && (e.nameplate = g), Object.keys(e).length > 0 && (await (0, a.Mn)(e));
                    {
                        let {
                            ToastPosition: e,
                            ToastType: t,
                            createToast: r,
                            popToast: i,
                            showToast: a,
                        } = await Promise.resolve().then(n.bind(n, 481060));
                        i(),
                            a(
                                r(E, t.MESSAGE, {
                                    duration: u,
                                    position: e.TOP,
                                }),
                            );
                    }
                    null == d || d();
                } catch (e) {
                    null == f || f(e);
                } finally {
                    p(!1);
                }
            }, [h, m, g, d, E, f]),
            isApplying: _,
        };
    };
