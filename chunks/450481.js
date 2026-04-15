n.d(t, { p: () => s });
var i = n(64700),
    a = n(575593),
    l = n(631670),
    r = n(587600),
    o = n(207803),
    d = n(442759),
    _ = n(985018);
let s = (e) => {
    let { product: t, onSuccess: s, onError: E } = e,
        [p, u] = i.useState(!1),
        { firstAvatarDecoration: c, firstProfileEffect: S, firstNameplate: R, firstProfileFrame: T } = (0, d.f5)(t),
        h = ((e) => {
            switch (e.type) {
                case a.R.AVATAR_DECORATION:
                    return _.intl.string(_.t.zOA4ax);
                case a.R.NAMEPLATE:
                    return _.intl.string(_.t.gOzMvx);
                case a.R.PROFILE_FRAME:
                    return _.intl.string(_.t.lOF4zR);
                case a.R.PROFILE_EFFECT:
                    return _.intl.string(_.t.SWm2ai);
                case a.R.BUNDLE:
                default:
                    return _.intl.string(_.t.tf1ZZ4);
            }
        })(t);
    return {
        handleUseNow: i.useCallback(async () => {
            u(!0);
            let e = {};
            try {
                if ((null != c && (e.avatarDecoration = c), null != S || null != T)) {
                    let e = (0, r.yX)({ pendingProfileEffect: S ?? void 0, pendingProfileFrame: T ?? void 0 });
                    await (0, o.gi)(e);
                }
                null != R && (e.nameplate = R), Object.keys(e).length > 0 && (await (0, l._L)(e));
                {
                    let {
                        ToastPosition: e,
                        ToastType: t,
                        createToast: i,
                        popToast: a,
                        showToast: l,
                    } = await Promise.resolve().then(n.bind(n, 397927));
                    a(), l(i(h, t.MESSAGE, { duration: 6e3, position: e.TOP }));
                }
                s?.();
            } catch (e) {
                E?.(e);
            } finally {
                u(!1);
            }
        }, [c, S, R, T, s, h, E]),
        isApplying: p,
    };
};
