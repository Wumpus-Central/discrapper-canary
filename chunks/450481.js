n.d(e, { p: () => f });
var i = n(582128),
    r = n(575593),
    a = n(631670),
    l = n(56348),
    s = n(207803),
    u = n(442759),
    c = n(758836),
    o = n(660183);
function f(t) {
    let { product: e, onSuccess: f, onError: p } = t,
        [d, R] = i.useState(!1),
        { firstAvatarDecoration: h, firstProfileEffect: E, firstNameplate: g, firstProfileFrame: y } = (0, u.f5)(e),
        w = (function (t) {
            switch (t.type) {
                case r.R.AVATAR_DECORATION:
                    return o.intl.string(o.t.zOA4ax);
                case r.R.NAMEPLATE:
                    return o.intl.string(o.t.gOzMvx);
                case r.R.PROFILE_FRAME:
                    return o.intl.string(o.t.lOF4zR);
                case r.R.PROFILE_EFFECT:
                    return o.intl.string(o.t.SWm2ai);
                case r.R.BUNDLE:
                default:
                    return o.intl.string(o.t.tf1ZZ4);
            }
        })(e),
        A = i.useMemo(
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
            if (!A) return;
            R(!0);
            let t = {};
            try {
                if ((null != h && (t.avatarDecoration = h), null != E || null != y)) {
                    let t = (0, l.yX)({ pendingProfileEffect: E ?? void 0, pendingProfileFrame: y ?? void 0 });
                    await (0, s.gi)(t);
                }
                (null != g && (t.nameplate = g), Object.keys(t).length > 0 && (await (0, a._L)(t)));
                {
                    let { popToast: t, showToast: e } = await Promise.all([
                        n.e("304823"),
                        n.e("223976"),
                        n.e("288688"),
                        n.e("977260"),
                    ]).then(n.bind(n, 397927));
                    (t(), e({ text: w, duration: 6e3, position: "top" }));
                }
                f?.();
            } catch (t) {
                p?.(t);
            } finally {
                R(!1);
            }
        }, [A, h, E, g, y, f, w, p]),
        isApplying: d,
        canUseNow: A,
    };
}
