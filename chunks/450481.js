n.d(e, { p: () => o });
var i = n(64700),
    a = n(575593),
    r = n(631670),
    l = n(56348),
    s = n(207803),
    u = n(442759),
    c = n(375708);
function o(t) {
    let { product: e, onSuccess: o, onError: d } = t,
        [f, p] = i.useState(!1),
        { firstAvatarDecoration: h, firstProfileEffect: E, firstNameplate: R, firstProfileFrame: A } = (0, u.f5)(e),
        g = (function (t) {
            switch (t.type) {
                case a.R.AVATAR_DECORATION:
                    return c.intl.string(c.t.zOA4ax);
                case a.R.NAMEPLATE:
                    return c.intl.string(c.t.gOzMvx);
                case a.R.PROFILE_FRAME:
                    return c.intl.string(c.t.lOF4zR);
                case a.R.PROFILE_EFFECT:
                    return c.intl.string(c.t.SWm2ai);
                case a.R.BUNDLE:
                default:
                    return c.intl.string(c.t.tf1ZZ4);
            }
        })(e),
        y = i.useMemo(
            () =>
                (function (t) {
                    if (t.type !== a.R.BUNDLE) return !0;
                    let e = new Set();
                    for (let n of t.items) {
                        if (e.has(n.type)) return !1;
                        e.add(n.type);
                    }
                    return !0;
                })(e),
            [e],
        );
    return {
        handleUseNow: i.useCallback(async () => {
            if (!y) return;
            p(!0);
            let t = {};
            try {
                if ((null != h && (t.avatarDecoration = h), null != E || null != A)) {
                    let t = (0, l.yX)({ pendingProfileEffect: E ?? void 0, pendingProfileFrame: A ?? void 0 });
                    await (0, s.gi)(t);
                }
                null != R && (t.nameplate = R), Object.keys(t).length > 0 && (await (0, r._L)(t));
                {
                    let {
                        ToastPosition: t,
                        ToastType: e,
                        createToast: i,
                        popToast: a,
                        showToast: r,
                    } = await Promise.all([n.e("4823"), n.e("88017")]).then(n.bind(n, 844616));
                    a(), r(i(g, e.MESSAGE, { duration: 6e3, position: t.TOP }));
                }
                o?.();
            } catch (t) {
                d?.(t);
            } finally {
                p(!1);
            }
        }, [y, h, E, R, A, o, g, d]),
        isApplying: f,
        canUseNow: y,
    };
}
