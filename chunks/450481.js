n.d(e, {
    p: () => p,
}),
    n(896048);
var i = n(64700),
    r = n(575593),
    l = n(631670),
    a = n(587600),
    s = n(207803),
    u = n(993408),
    d = n(442759),
    o = n(985018);
let p = (t) => {
    let { product: e, onSuccess: p, onError: c } = t,
        [O, h] = i.useState(!1),
        { firstAvatarDecoration: f, firstProfileEffect: b, firstNameplate: y } = (0, d.f5)(e),
        A = (0, u.aw)(e)
            ? o.intl.string(o.t.tf1ZZ4)
            : e.type === r.R.AVATAR_DECORATION
              ? o.intl.string(o.t.zOA4ax)
              : e.type === r.R.NAMEPLATE
                ? o.intl.string(o.t.gOzMvx)
                : o.intl.string(o.t.SWm2ai);
    return {
        handleUseNow: i.useCallback(async () => {
            h(!0);
            let t = {};
            try {
                if ((null != f && (t.avatarDecoration = f), null != b)) {
                    let t = (0, a.yX)({
                        pendingProfileEffect: b,
                    });
                    await (0, s.gi)(t);
                }
                null != y && (t.nameplate = y), Object.keys(t).length > 0 && (await (0, l.yu)(t));
                {
                    let {
                        ToastPosition: t,
                        ToastType: e,
                        createToast: i,
                        popToast: r,
                        showToast: l,
                    } = await Promise.resolve().then(n.bind(n, 397927));
                    r(),
                        l(
                            i(A, e.MESSAGE, {
                                duration: 6e3,
                                position: t.TOP,
                            }),
                        );
                }
                null == p || p();
            } catch (t) {
                null == c || c(t);
            } finally {
                h(!1);
            }
        }, [f, b, y, p, A, c]),
        isApplying: O,
    };
};
