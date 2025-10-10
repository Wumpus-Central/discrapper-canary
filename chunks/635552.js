n.d(e, { W: () => c }), n(388685);
var i = n(647438),
    r = n(979554),
    l = n(809206),
    a = n(164946),
    s = n(350327),
    u = n(884697),
    o = n(328456),
    d = n(388032);
let c = (t) => {
    let { product: e, onSuccess: c, onError: p } = t,
        [h, E] = i.useState(!1),
        { firstAvatarDecoration: f, firstProfileEffect: A, firstNameplate: O } = (0, o.Rj)(e),
        C = (0, u.x6)(e)
            ? d.intl.string(d.t.tf1ZZ2)
            : e.type === r.Z.AVATAR_DECORATION
              ? d.intl.string(d.t.zOA4a2)
              : e.type === r.Z.NAMEPLATE
                ? d.intl.string(d.t.gOzMv7)
                : d.intl.string(d.t.SWm2am);
    return {
        handleUseNow: i.useCallback(async () => {
            E(!0);
            let t = {};
            try {
                if ((null != f && (t.avatarDecoration = f), null != A)) {
                    let t = (0, a.g9)({ pendingProfileEffect: A });
                    await (0, s.Z)(t);
                }
                null != O && (t.nameplate = O), Object.keys(t).length > 0 && (await (0, l.Mn)(t));
                {
                    let {
                        ToastPosition: t,
                        ToastType: e,
                        createToast: i,
                        popToast: r,
                        showToast: l,
                    } = await Promise.resolve().then(n.bind(n, 481060));
                    r(),
                        l(
                            i(C, e.MESSAGE, {
                                duration: 6000,
                                position: t.TOP,
                            }),
                        );
                }
                null == c || c();
            } catch (t) {
                null == p || p(t);
            } finally {
                E(!1);
            }
        }, [f, A, O, c, C, p]),
        isApplying: h,
    };
};
