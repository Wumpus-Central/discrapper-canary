n.d(t, {
    p: () => f,
}),
    n(896048);
var r = n(64700),
    i = n(575593),
    a = n(631670),
    s = n(587600),
    o = n(207803),
    l = n(993408),
    c = n(442759),
    u = n(985018);
let d = 6e3,
    f = (e) => {
        let { product: t, onSuccess: f, onError: p } = e,
            [_, h] = r.useState(!1),
            { firstAvatarDecoration: m, firstProfileEffect: g, firstNameplate: E } = (0, c.f5)(t),
            y = (0, l.aw)(t)
                ? u.intl.string(u.t.tf1ZZ4)
                : t.type === i.R.AVATAR_DECORATION
                  ? u.intl.string(u.t.zOA4ax)
                  : t.type === i.R.NAMEPLATE
                    ? u.intl.string(u.t.gOzMvx)
                    : u.intl.string(u.t.SWm2ai);
        return {
            handleUseNow: r.useCallback(async () => {
                h(!0);
                let e = {};
                try {
                    if ((null != m && (e.avatarDecoration = m), null != g)) {
                        let e = (0, s.yX)({
                            pendingProfileEffect: g,
                        });
                        await (0, o.gi)(e);
                    }
                    null != E && (e.nameplate = E), Object.keys(e).length > 0 && (await (0, a.yu)(e));
                    {
                        let {
                            ToastPosition: e,
                            ToastType: t,
                            createToast: r,
                            popToast: i,
                            showToast: a,
                        } = await Promise.resolve().then(n.bind(n, 397927));
                        i(),
                            a(
                                r(y, t.MESSAGE, {
                                    duration: d,
                                    position: e.TOP,
                                }),
                            );
                    }
                    null == f || f();
                } catch (e) {
                    null == p || p(e);
                } finally {
                    h(!1);
                }
            }, [m, g, E, f, y, p]),
            isApplying: _,
        };
    };
