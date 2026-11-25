var i = n(582128),
    r = n(855986),
    l = n(652896),
    s = n(775456),
    a = n(130444),
    o = n(623485),
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
                    h = (0, d.y)(e),
                    m = (0, c.A)(e),
                    p = null != m,
                    f = i.useCallback(() => {
                        null != e && (p ? (0, u.HQ)(e) : (0, u.Bw)(e));
                    }, [e, p]);
                if (null == e || !t || h) return null;
                let g = a.Q.PASS;
                return (
                    null != m ? (g = a.Q.TAKE_BACK_FROM(m)) : n && (g = a.Q.TAKE_BACK),
                    { isActive: n, label: g, toggle: f }
                );
            },
        },
    ));
