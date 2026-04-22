n.d(e, { p: () => c });
var i = n(64700),
    a = n(575593),
    r = n(631670),
    l = n(587600),
    s = n(207803),
    d = n(442759),
    o = n(985018);
let c = (t) => {
    let { product: e, onSuccess: c, onError: E } = t,
        [p, u] = i.useState(!1),
        { firstAvatarDecoration: _, firstProfileEffect: T, firstNameplate: A, firstProfileFrame: R } = (0, d.f5)(e),
        S = ((t) => {
            switch (t.type) {
                case a.R.AVATAR_DECORATION:
                    return o.intl.string(o.t.zOA4ax);
                case a.R.NAMEPLATE:
                    return o.intl.string(o.t.gOzMvx);
                case a.R.PROFILE_FRAME:
                    return o.intl.string(o.t.lOF4zR);
                case a.R.PROFILE_EFFECT:
                    return o.intl.string(o.t.SWm2ai);
                case a.R.BUNDLE:
                default:
                    return o.intl.string(o.t.tf1ZZ4);
            }
        })(e);
    return {
        handleUseNow: i.useCallback(async () => {
            u(!0);
            let t = {};
            try {
                if ((null != _ && (t.avatarDecoration = _), null != T || null != R)) {
                    let t = (0, l.yX)({ pendingProfileEffect: T ?? void 0, pendingProfileFrame: R ?? void 0 });
                    await (0, s.gi)(t);
                }
                null != A && (t.nameplate = A), Object.keys(t).length > 0 && (await (0, r._L)(t));
                {
                    let {
                        ToastPosition: t,
                        ToastType: e,
                        createToast: i,
                        popToast: a,
                        showToast: r,
                    } = await n.e("77260").then(n.bind(n, 397927));
                    a(), r(i(S, e.MESSAGE, { duration: 6e3, position: t.TOP }));
                }
                c?.();
            } catch (t) {
                E?.(t);
            } finally {
                u(!1);
            }
        }, [_, T, A, R, c, S, E]),
        isApplying: p,
    };
};
