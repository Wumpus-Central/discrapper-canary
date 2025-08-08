n.d(t, { W: () => u }), n(388685);
var r = n(73800),
    l = n(979554),
    a = n(809206),
    i = n(350327),
    o = n(884697),
    s = n(328456),
    c = n(388032);
let u = (e) => {
    let { product: t, onSuccess: u, onError: d } = e,
        [p, g] = r.useState(!1),
        { firstAvatarDecoration: f, firstProfileEffect: b } = (0, s.Rj)(t),
        h = (0, o.x6)(t)
            ? c.intl.string(c.t.tf1ZZ2)
            : t.type === l.Z.AVATAR_DECORATION
              ? c.intl.string(c.t.zOA4a2)
              : t.type === l.Z.NAMEPLATE
                ? c.intl.string(c.t.gOzMv7)
                : c.intl.string(c.t.SWm2am);
    return {
        handleUseNow: r.useCallback(async () => {
            g(!0);
            try {
                if ((null != f && (await (0, a.Mn)({ avatarDecoration: f })), null != b)) {
                    let e = { profile_effect_id: b.id };
                    await (0, i.Z)(e);
                }
                if (t.type === l.Z.NAMEPLATE) {
                    let e = t.items[0];
                    await (0, a.Mn)({ nameplate: e });
                }
                {
                    let {
                        ToastPosition: e,
                        ToastType: t,
                        createToast: r,
                        popToast: l,
                        showToast: a,
                    } = await Promise.resolve().then(n.bind(n, 481060));
                    l(),
                        a(
                            r(h, t.MESSAGE, {
                                duration: 6000,
                                position: e.TOP,
                            }),
                        );
                }
                null == u || u();
            } catch (e) {
                null == d || d(e);
            } finally {
                g(!1);
            }
        }, [f, b, t, u, h, d]),
        isApplying: p,
    };
};
