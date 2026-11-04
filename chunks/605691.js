var a = i(477900),
    e = i(582128),
    l = i(192308),
    r = i(477782),
    o = i(308528),
    s = i(994500),
    d = i(287809),
    c = i(47167),
    u = i(792996);
i.d(
    n,
    {},
    {
        A: function (t, n) {
            let h = e.useCallback(() => {
                let e = (0, c.m1)(t, d.default, s.A),
                    r = u.intl.formatToPlainString(u.t.hJ5Ap4, { name: e }),
                    h = u.intl.format(u.t.SSIVOu, { name: e });
                function f(i) {
                    let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    o.A.closePrivateChannel(t.id, n, a);
                }
                (t.isManaged() &&
                    ((r = u.intl.formatToPlainString(u.t.hVGjEW, { name: e })),
                    (h = u.intl.format(u.t.IK1Qvs, { name: e }))),
                    (0, l.mM)(async () => {
                        let { default: t } = await Promise.all([i.e(446215), i.e(137803)]).then(i.bind(i, 925785));
                        return (n) => (0, a.jsx)(t, { title: r, body: h, onSubmit: f, ...n });
                    }));
            }, [t, n]);
            return (0, a.jsx)(r.Dr, {
                id: "leave-channel",
                label: u.intl.string(u.t["26C4oi"]),
                action: h,
                color: "danger",
            });
        },
    },
);
