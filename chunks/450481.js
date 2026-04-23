n.d(e, { p: () => u });
var i = n(64700),
    a = n(575593),
    l = n(631670),
    r = n(587600),
    d = n(207803),
    s = n(442759),
    o = n(985018);
let u = (t) => {
    let { product: e, onSuccess: u, onError: p } = t,
        [_, E] = i.useState(!1),
        { firstAvatarDecoration: c, firstProfileEffect: S, firstNameplate: h, firstProfileFrame: R } = (0, s.f5)(e),
        A = ((t) => {
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
            E(!0);
            let t = {};
            try {
                if ((null != c && (t.avatarDecoration = c), null != S || null != R)) {
                    let t = (0, r.yX)({ pendingProfileEffect: S ?? void 0, pendingProfileFrame: R ?? void 0 });
                    await (0, d.gi)(t);
                }
                null != h && (t.nameplate = h), Object.keys(t).length > 0 && (await (0, l._L)(t));
                {
                    let {
                        ToastPosition: t,
                        ToastType: e,
                        createToast: i,
                        popToast: a,
                        showToast: l,
                    } = await n.e("77260").then(n.bind(n, 397927));
                    a(), l(i(A, e.MESSAGE, { duration: 6e3, position: t.TOP }));
                }
                u?.();
            } catch (t) {
                p?.(t);
            } finally {
                E(!1);
            }
        }, [c, S, h, R, u, A, p]),
        isApplying: _,
    };
};
