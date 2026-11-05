var l = t(477900),
    r = t(582128),
    a = t(503698),
    i = t.n(a),
    s = t(834730),
    o = t(73392),
    u = t(291594),
    c = t(959);
t.d(
    n,
    {},
    {
        A: function (e) {
            let {
                    user: n,
                    text: t,
                    channel: a,
                    textClassName: d,
                    onPopoutClosed: m,
                    enableDisplayNameStyles: h = !1,
                } = e,
                p = r.useMemo(() => [n], [n]),
                x = r.useRef(null),
                f = (0, o.a)({ displayNameStyles: n?.displayNameStyles });
            return (0, l.jsx)(c.A, {
                targetElementRef: x,
                participants: p,
                channel: a,
                onPopoutClosed: m,
                children: (e) =>
                    (0, l.jsx)(u.A, {
                        ...e,
                        tag: "span",
                        children: (0, l.jsx)(s.E, {
                            ref: x,
                            className: h ? i()(d, f) : d,
                            variant: "body-sm/semibold",
                            color: "text-strong",
                            lineClamp: 1,
                            scaleFontToUserSetting: !0,
                            children: t,
                        }),
                    }),
            });
        },
    },
);
