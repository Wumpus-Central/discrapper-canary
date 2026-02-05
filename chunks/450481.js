"use strict";
n.d(t, { p: () => _ });
var r = n(64700),
    i = n(575593),
    a = n(631670),
    s = n(587600),
    o = n(207803),
    l = n(993408),
    u = n(442759),
    c = n(985018);
let d = 6e3,
    _ = (e) => {
        let { product: t, onSuccess: _, onError: f } = e,
            [p, h] = r.useState(!1),
            { firstAvatarDecoration: m, firstProfileEffect: g, firstNameplate: E } = (0, u.f5)(t),
            A = (0, l.aw)(t)
                ? c.intl.string(c.t.tf1ZZ4)
                : t.type === i.R.AVATAR_DECORATION
                  ? c.intl.string(c.t.zOA4ax)
                  : t.type === i.R.NAMEPLATE
                    ? c.intl.string(c.t.gOzMvx)
                    : c.intl.string(c.t.SWm2ai);
        return {
            handleUseNow: r.useCallback(async () => {
                h(!0);
                let e = {};
                try {
                    if ((null != m && (e.avatarDecoration = m), null != g)) {
                        let e = (0, s.yX)({ pendingProfileEffect: g });
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
                        i(), a(r(A, t.MESSAGE, { duration: d, position: e.TOP }));
                    }
                    _?.();
                } catch (e) {
                    f?.(e);
                } finally {
                    h(!1);
                }
            }, [m, g, E, _, A, f]),
            isApplying: p,
        };
    };
