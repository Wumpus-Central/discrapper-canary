t.d(n, { W: () => d }), t(388685);
var r = t(473749),
    l = t(979554),
    i = t(809206),
    a = t(164946),
    o = t(350327),
    s = t(884697),
    c = t(328456),
    u = t(388032);
let d = (e) => {
    let { product: n, onSuccess: d, onError: v } = e,
        [p, f] = r.useState(!1),
        { firstAvatarDecoration: b, firstProfileEffect: g, firstNameplate: m } = (0, c.Rj)(n),
        h = (0, s.x6)(n)
            ? u.intl.string(u.t.tf1ZZ4)
            : n.type === l.Z.AVATAR_DECORATION
              ? u.intl.string(u.t.zOA4ax)
              : n.type === l.Z.NAMEPLATE
                ? u.intl.string(u.t.gOzMvx)
                : u.intl.string(u.t.SWm2ai);
    return {
        handleUseNow: r.useCallback(async () => {
            f(!0);
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
                            r(h, n.MESSAGE, {
                                duration: 6000,
                                position: e.TOP,
                            }),
                        );
                }
                null == d || d();
            } catch (e) {
                null == v || v(e);
            } finally {
                f(!1);
            }
        }, [b, g, m, d, h, v]),
        isApplying: p,
    };
};
