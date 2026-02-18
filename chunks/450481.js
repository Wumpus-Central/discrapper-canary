n.d(e, { p: () => u });
var i = n(64700),
    a = n(575593),
    l = n(631670),
    r = n(587600),
    d = n(207803),
    s = n(993408),
    o = n(442759),
    p = n(985018);
let u = (t) => {
    let { product: e, onSuccess: u, onError: c } = t,
        [g, A] = i.useState(!1),
        { firstAvatarDecoration: h, firstProfileEffect: f, firstNameplate: m } = (0, o.f5)(e),
        y = (0, s.aw)(e)
            ? p.intl.string(p.t.tf1ZZ4)
            : e.type === a.R.AVATAR_DECORATION
              ? p.intl.string(p.t.zOA4ax)
              : e.type === a.R.NAMEPLATE
                ? p.intl.string(p.t.gOzMvx)
                : p.intl.string(p.t.SWm2ai);
    return {
        handleUseNow: i.useCallback(async () => {
            A(!0);
            let t = {};
            try {
                if ((null != h && (t.avatarDecoration = h), null != f)) {
                    let t = (0, r.yX)({ pendingProfileEffect: f });
                    await (0, d.gi)(t);
                }
                null != m && (t.nameplate = m), Object.keys(t).length > 0 && (await (0, l._L)(t));
                {
                    let {
                        ToastPosition: t,
                        ToastType: e,
                        createToast: i,
                        popToast: a,
                        showToast: l,
                    } = await Promise.resolve().then(n.bind(n, 397927));
                    a(), l(i(y, e.MESSAGE, { duration: 6e3, position: t.TOP }));
                }
                u?.();
            } catch (t) {
                c?.(t);
            } finally {
                A(!1);
            }
        }, [h, f, m, u, y, c]),
        isApplying: g,
    };
};
