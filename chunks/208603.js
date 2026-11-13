var i = n(582128),
    r = n(855986),
    l = n(652896),
    s = n(775456),
    a = n(130444),
    o = n(712766),
    u = n(677099),
    c = n(881780),
    d = n(565886);
(n(652215),
    n.d(
        t,
        {},
        {
            A: function (e) {
                let { enabled: t } = s.A.useConfig({
                        guildId: e?.guildId ?? "",
                        location: "usePassTheControllerHostAction",
                    }),
                    n = (0, r.bG)([o.A], () => null != e && o.A.isSelfPassingController((0, l._z)(e)), [e]),
                    m = (0, d.y)(e),
                    h = (0, c.A)(e),
                    f = null != h,
                    g = i.useCallback(() => {
                        null != e && (f ? (0, u.HQ)(e) : (0, u.Bw)(e));
                    }, [e, f]);
                if (null == e || !t || m) return null;
                let A = a.Q.PASS;
                return (
                    null != h ? (A = a.Q.TAKE_BACK_FROM(h)) : n && (A = a.Q.TAKE_BACK),
                    { isActive: n, label: A, toggle: g }
                );
            },
        },
    ));
