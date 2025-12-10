n.d(e, { W: () => c }), n(388685);
var i = n(473749),
    r = n(979554),
    l = n(809206),
    a = n(164946),
    s = n(350327),
    u = n(884697),
    o = n(328456),
    d = n(388032);
let c = (t) => {
    let { product: e, onSuccess: c, onError: p } = t,
        [O, f] = i.useState(!1),
        { firstAvatarDecoration: h, firstProfileEffect: b, firstNameplate: y } = (0, o.Rj)(e),
        A = (0, u.x6)(e)
            ? d.intl.string(d.t.tf1ZZ4)
            : e.type === r.Z.AVATAR_DECORATION
              ? d.intl.string(d.t.zOA4ax)
              : e.type === r.Z.NAMEPLATE
                ? d.intl.string(d.t.gOzMvx)
                : d.intl.string(d.t.SWm2ai);
    return {
        handleUseNow: i.useCallback(async () => {
            f(!0);
            let t = {};
            try {
                if ((null != h && (t.avatarDecoration = h), null != b)) {
                    let t = (0, a.g9)({ pendingProfileEffect: b });
                    await (0, s.Z)(t);
                }
                null != y && (t.nameplate = y), Object.keys(t).length > 0 && (await (0, l.Mn)(t));
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
                            i(A, e.MESSAGE, {
                                duration: 6000,
                                position: t.TOP,
                            }),
                        );
                }
                null == c || c();
            } catch (t) {
                null == p || p(t);
            } finally {
                f(!1);
            }
        }, [h, b, y, c, A, p]),
        isApplying: O,
    };
};
