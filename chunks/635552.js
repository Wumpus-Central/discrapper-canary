n.d(t, { W: () => u }), n(388685);
var a = n(473749),
    l = n(979554),
    r = n(809206),
    i = n(164946),
    s = n(350327),
    o = n(884697),
    c = n(328456),
    d = n(388032);
let u = (e) => {
    let { product: t, onSuccess: u, onError: m } = e,
        [p, h] = a.useState(!1),
        { firstAvatarDecoration: x, firstProfileEffect: f, firstNameplate: g } = (0, c.Rj)(t),
        b = (0, o.x6)(t)
            ? d.intl.string(d.t.tf1ZZ4)
            : t.type === l.Z.AVATAR_DECORATION
              ? d.intl.string(d.t.zOA4ax)
              : t.type === l.Z.NAMEPLATE
                ? d.intl.string(d.t.gOzMvx)
                : d.intl.string(d.t.SWm2ai);
    return {
        handleUseNow: a.useCallback(async () => {
            h(!0);
            let e = {};
            try {
                if ((null != x && (e.avatarDecoration = x), null != f)) {
                    let e = (0, i.g9)({ pendingProfileEffect: f });
                    await (0, s.Z)(e);
                }
                null != g && (e.nameplate = g), Object.keys(e).length > 0 && (await (0, r.Mn)(e));
                {
                    let {
                        ToastPosition: e,
                        ToastType: t,
                        createToast: a,
                        popToast: l,
                        showToast: r,
                    } = await Promise.resolve().then(n.bind(n, 481060));
                    l(),
                        r(
                            a(b, t.MESSAGE, {
                                duration: 6000,
                                position: e.TOP,
                            }),
                        );
                }
                null == u || u();
            } catch (e) {
                null == m || m(e);
            } finally {
                h(!1);
            }
        }, [x, f, g, u, b, m]),
        isApplying: p,
    };
};
