n.d(t, { p: () => u });
var a = n(64700),
    l = n(575593),
    i = n(631670),
    r = n(56348),
    s = n(207803),
    o = n(442759),
    d = n(985018);
let u = (e) => {
    let { product: t, onSuccess: u, onError: c } = e,
        [p, g] = a.useState(!1),
        { firstAvatarDecoration: v, firstProfileEffect: m, firstNameplate: h, firstProfileFrame: A } = (0, o.f5)(t),
        C = ((e) => {
            switch (e.type) {
                case l.R.AVATAR_DECORATION:
                    return d.intl.string(d.t.zOA4ax);
                case l.R.NAMEPLATE:
                    return d.intl.string(d.t.gOzMvx);
                case l.R.PROFILE_FRAME:
                    return d.intl.string(d.t.lOF4zR);
                case l.R.PROFILE_EFFECT:
                    return d.intl.string(d.t.SWm2ai);
                case l.R.BUNDLE:
                default:
                    return d.intl.string(d.t.tf1ZZ4);
            }
        })(t);
    return {
        handleUseNow: a.useCallback(async () => {
            g(!0);
            let e = {};
            try {
                if ((null != v && (e.avatarDecoration = v), null != m || null != A)) {
                    let e = (0, r.yX)({ pendingProfileEffect: m ?? void 0, pendingProfileFrame: A ?? void 0 });
                    await (0, s.gi)(e);
                }
                null != h && (e.nameplate = h), Object.keys(e).length > 0 && (await (0, i._L)(e));
                {
                    let {
                        ToastPosition: e,
                        ToastType: t,
                        createToast: a,
                        popToast: l,
                        showToast: i,
                    } = await n.e("88017").then(n.bind(n, 844616));
                    l(), i(a(C, t.MESSAGE, { duration: 6e3, position: e.TOP }));
                }
                u?.();
            } catch (e) {
                c?.(e);
            } finally {
                g(!1);
            }
        }, [v, m, h, A, u, C, c]),
        isApplying: p,
    };
};
