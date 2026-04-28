a.d(e, { p: () => d });
var n = a(64700),
    i = a(575593),
    l = a(631670),
    r = a(56348),
    s = a(207803),
    u = a(442759),
    c = a(985018);
let d = (t) => {
    let { product: e, onSuccess: d, onError: p } = t,
        [h, o] = n.useState(!1),
        { firstAvatarDecoration: E, firstProfileEffect: A, firstNameplate: R, firstProfileFrame: f } = (0, u.f5)(e),
        g = ((t) => {
            switch (t.type) {
                case i.R.AVATAR_DECORATION:
                    return c.intl.string(c.t.zOA4ax);
                case i.R.NAMEPLATE:
                    return c.intl.string(c.t.gOzMvx);
                case i.R.PROFILE_FRAME:
                    return c.intl.string(c.t.lOF4zR);
                case i.R.PROFILE_EFFECT:
                    return c.intl.string(c.t.SWm2ai);
                case i.R.BUNDLE:
                default:
                    return c.intl.string(c.t.tf1ZZ4);
            }
        })(e);
    return {
        handleUseNow: n.useCallback(async () => {
            o(!0);
            let t = {};
            try {
                if ((null != E && (t.avatarDecoration = E), null != A || null != f)) {
                    let t = (0, r.yX)({ pendingProfileEffect: A ?? void 0, pendingProfileFrame: f ?? void 0 });
                    await (0, s.gi)(t);
                }
                null != R && (t.nameplate = R), Object.keys(t).length > 0 && (await (0, l._L)(t));
                {
                    let {
                        ToastPosition: t,
                        ToastType: e,
                        createToast: n,
                        popToast: i,
                        showToast: l,
                    } = await Promise.all([a.e("4823"), a.e("10398")]).then(a.bind(a, 844616));
                    i(), l(n(g, e.MESSAGE, { duration: 6e3, position: t.TOP }));
                }
                d?.();
            } catch (t) {
                p?.(t);
            } finally {
                o(!1);
            }
        }, [E, A, R, f, d, g, p]),
        isApplying: h,
    };
};
