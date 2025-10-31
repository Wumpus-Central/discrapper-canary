t.d(n, { W: () => d }), t(388685);
var r = t(647438),
    l = t(979554),
    i = t(809206),
    a = t(164946),
    o = t(350327),
    s = t(884697),
    u = t(328456),
    c = t(388032);
let d = (e) => {
    let { product: n, onSuccess: d, onError: v } = e,
        [f, p] = r.useState(!1),
        { firstAvatarDecoration: b, firstProfileEffect: g, firstNameplate: m } = (0, u.Rj)(n),
        x = (0, s.x6)(n)
            ? c.intl.string(c.t.tf1ZZ4)
            : n.type === l.Z.AVATAR_DECORATION
              ? c.intl.string(c.t.zOA4ax)
              : n.type === l.Z.NAMEPLATE
                ? c.intl.string(c.t.gOzMvx)
                : c.intl.string(c.t.SWm2ai);
    return {
        handleUseNow: r.useCallback(async () => {
            p(!0);
            let e = {};
            try {
                if ((null != b && (e.avatarDecoration = b), null != g)) {
                    let e = (0, a.g9)({ pendingProfileEffect: g });
                    await (0, o.Z)(e);
                }
                null != m && (e.nameplate = m), Object.keys(e).length > 0 && (await (0, i.Mn)(e));
                {
                    let {
                        ToastPosition: e,
                        ToastType: n,
                        createToast: r,
                        popToast: l,
                        showToast: i,
                    } = await Promise.resolve().then(t.bind(t, 481060));
                    l(),
                        i(
                            r(x, n.MESSAGE, {
                                duration: 6000,
                                position: e.TOP,
                            }),
                        );
                }
                null == d || d();
            } catch (e) {
                null == v || v(e);
            } finally {
                p(!1);
            }
        }, [b, g, m, d, x, v]),
        isApplying: f,
    };
};
