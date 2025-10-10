n.d(t, { W: () => d }), n(388685);
var r = n(647438),
    l = n(979554),
    i = n(809206),
    a = n(164946),
    o = n(350327),
    s = n(884697),
    c = n(328456),
    u = n(388032);
let d = (e) => {
    let { product: t, onSuccess: d, onError: p } = e,
        [f, b] = r.useState(!1),
        { firstAvatarDecoration: y, firstProfileEffect: m, firstNameplate: O } = (0, c.Rj)(t),
        g = (0, s.x6)(t)
            ? u.intl.string(u.t.tf1ZZ2)
            : t.type === l.Z.AVATAR_DECORATION
              ? u.intl.string(u.t.zOA4a2)
              : t.type === l.Z.NAMEPLATE
                ? u.intl.string(u.t.gOzMv7)
                : u.intl.string(u.t.SWm2am);
    return {
        handleUseNow: r.useCallback(async () => {
            b(!0);
            let e = {};
            try {
                if ((null != y && (e.avatarDecoration = y), null != m)) {
                    let e = (0, a.g9)({ pendingProfileEffect: m });
                    await (0, o.Z)(e);
                }
                null != O && (e.nameplate = O), Object.keys(e).length > 0 && (await (0, i.Mn)(e));
                {
                    let {
                        ToastPosition: e,
                        ToastType: t,
                        createToast: r,
                        popToast: l,
                        showToast: i,
                    } = await Promise.resolve().then(n.bind(n, 481060));
                    l(),
                        i(
                            r(g, t.MESSAGE, {
                                duration: 6000,
                                position: e.TOP,
                            }),
                        );
                }
                null == d || d();
            } catch (e) {
                null == p || p(e);
            } finally {
                b(!1);
            }
        }, [y, m, O, d, g, p]),
        isApplying: f,
    };
};
