(r.d(t, { W: () => u }), r(388685));
var n = r(73800),
    l = r(979554),
    i = r(809206),
    a = r(350327),
    o = r(884697),
    s = r(328456),
    c = r(388032);
let u = (e) => {
    let { product: t, onSuccess: u, onError: d } = e,
        [p, f] = n.useState(!1),
        { firstAvatarDecoration: g, firstProfileEffect: h } = (0, s.Rj)(t),
        b = (0, o.x6)(t) ? c.intl.string(c.t.tf1ZZ2) : t.type === l.Z.AVATAR_DECORATION ? c.intl.string(c.t.zOA4a2) : t.type === l.Z.NAMEPLATE ? c.intl.string(c.t.gOzMv7) : c.intl.string(c.t.SWm2am);
    return {
        handleUseNow: n.useCallback(async () => {
            f(!0);
            try {
                if ((null != g && (await (0, i.Mn)({ avatarDecoration: g })), null != h)) {
                    let e = { profile_effect_id: h.id };
                    await (0, a.Z)(e);
                }
                if (t.type === l.Z.NAMEPLATE) {
                    let e = t.items[0];
                    await (0, i.Mn)({ nameplate: e });
                }
                {
                    let { ToastPosition: e, ToastType: t, createToast: n, popToast: l, showToast: i } = await Promise.resolve().then(r.bind(r, 481060));
                    (l(),
                        i(
                            n(b, t.MESSAGE, {
                                duration: 6000,
                                position: e.TOP
                            })
                        ));
                }
                null == u || u();
            } catch (e) {
                null == d || d(e);
            } finally {
                f(!1);
            }
        }, [g, h, t, u, b, d]),
        isApplying: p
    };
};
