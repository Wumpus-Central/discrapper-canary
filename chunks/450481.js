n.d(e, { p: () => f });
var i = n(582128),
    r = n(575593),
    a = n(631670),
    l = n(56348),
    s = n(207803),
    u = n(442759),
    c = n(758836),
    d = n(375708);
function f(t) {
    let { product: e, onSuccess: f, onError: o } = t,
        [p, h] = i.useState(!1),
        { firstAvatarDecoration: E, firstProfileEffect: R, firstNameplate: A, firstProfileFrame: g } = (0, u.f5)(e),
        y = (function (t) {
            switch (t.type) {
                case r.R.AVATAR_DECORATION:
                    return d.intl.string(d.t.zOA4ax);
                case r.R.NAMEPLATE:
                    return d.intl.string(d.t.gOzMvx);
                case r.R.PROFILE_FRAME:
                    return d.intl.string(d.t.lOF4zR);
                case r.R.PROFILE_EFFECT:
                    return d.intl.string(d.t.SWm2ai);
                case r.R.BUNDLE:
                default:
                    return d.intl.string(d.t.tf1ZZ4);
            }
        })(e),
        O = i.useMemo(
            () =>
                (function (t) {
                    if ((0, c.pQ)(t.skuId)) return !1;
                    if (t.type !== r.R.BUNDLE) return !0;
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
            if (!O) return;
            h(!0);
            let t = {};
            try {
                if ((null != E && (t.avatarDecoration = E), null != R || null != g)) {
                    let t = (0, l.yX)({ pendingProfileEffect: R ?? void 0, pendingProfileFrame: g ?? void 0 });
                    await (0, s.gi)(t);
                }
                null != A && (t.nameplate = A), Object.keys(t).length > 0 && (await (0, a._L)(t));
                {
                    let {
                        ToastPosition: t,
                        ToastType: e,
                        createToast: i,
                        popToast: r,
                        showToast: a,
                    } = await Promise.all([n.e("4823"), n.e("77260")]).then(n.bind(n, 397927));
                    r(), a(i(y, e.MESSAGE, { duration: 6e3, position: t.TOP }));
                }
                f?.();
            } catch (t) {
                o?.(t);
            } finally {
                h(!1);
            }
        }, [O, E, R, A, g, f, y, o]),
        isApplying: p,
        canUseNow: O,
    };
}
