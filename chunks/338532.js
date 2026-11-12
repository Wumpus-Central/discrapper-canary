var n = l(582128),
    i = l(77593);
l.d(
    t,
    {},
    {
        R: function (e) {
            let t = (0, i.K)(),
                l = n.useRef(!1);
            n.useEffect(() => {
                if (l.current || null == t || !t.isVisible) return;
                let { guildId: n, widget: i, loadId: s, column: a, order: r } = t;
                null != s &&
                    null != a &&
                    null != r &&
                    ((l.current = !0), e({ guildId: n, widget: i, loadId: s, column: a, order: r }));
            }, [t, e]);
        },
    },
);
