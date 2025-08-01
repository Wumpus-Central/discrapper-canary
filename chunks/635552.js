(r.d(t, { W: () => u }), r(388685));
var n = r(73800),
    a = r(979554),
    l = r(809206),
    i = r(350327),
    o = r(884697),
    s = r(328456),
    c = r(388032);
let u = (e) => {
    let { product: t, onSuccess: u, onError: d } = e,
        [p, b] = n.useState(!1),
        { firstAvatarDecoration: h, firstProfileEffect: f } = (0, s.Rj)(t),
        v = (0, o.x6)(t) ? c.intl.string(c.t.tf1ZZ2) : t.type === a.Z.AVATAR_DECORATION ? c.intl.string(c.t.zOA4a2) : t.type === a.Z.NAMEPLATE ? c.intl.string(c.t.gOzMv7) : c.intl.string(c.t.SWm2am);
    return {
        handleUseNow: n.useCallback(async () => {
            b(!0);
            try {
                if ((null != h && (await (0, l.Mn)({ avatarDecoration: h })), null != f)) {
                    let e = { profile_effect_id: f.id };
                    await (0, i.Z)(e);
                }
                if (t.type === a.Z.NAMEPLATE) {
                    let e = t.items[0];
                    await (0, l.Mn)({ nameplate: e });
                }
                {
                    let { ToastPosition: e, ToastType: t, createToast: n, popToast: a, showToast: l } = await Promise.resolve().then(r.bind(r, 481060));
                    (a(),
                        l(
                            n(v, t.MESSAGE, {
                                duration: 6000,
                                position: e.TOP
                            })
                        ));
                }
                null == u || u();
            } catch (e) {
                null == d || d(e);
            } finally {
                b(!1);
            }
        }, [h, f, t, u, v, d]),
        isApplying: p
    };
};
