n.d(t, { Z: () => m }), n(388685);
var a = n(255367),
    r = n(73800),
    l = n(481060),
    i = n(845077),
    s = n(118589),
    o = n(603700),
    c = n(693994),
    d = n(388032),
    u = n(681037);
let m = () => {
    let [e, t] = r.useState(null),
        [n, m] = r.useState(!0),
        [x, h] = r.useState(null),
        [p, b] = r.useState(!1),
        f = r.useCallback(async () => {
            m(!0), h(null);
            try {
                var e;
                let n = await (0, i.P)();
                (null == n || null == (e = n.components) ? void 0 : e.every((e) => s.V.has(e.type)))
                    ? t(n)
                    : t({
                          task_id: n.task_id,
                          flow_id: n.flow_id,
                          assignment_id: n.assignment_id,
                          components: [
                              {
                                  type: s.N.REFRESH_APP,
                                  data: {}
                              }
                          ]
                      });
            } catch (e) {
                h(d.intl.string(c.default['/f++3t']));
            } finally {
                m(!1);
            }
        }, []),
        v = r.useCallback(
            async (t) => {
                if (null !== e) {
                    b(!0);
                    try {
                        let n = {
                            task_id: e.task_id,
                            flow_id: e.flow_id,
                            assignment_id: e.assignment_id,
                            data: t
                        };
                        await (0, i.W)(n), f();
                    } catch (e) {
                        h(d.intl.string(c.default['+QRSxc']));
                    } finally {
                        b(!1);
                    }
                }
            },
            [e, f]
        );
    return (
        r.useEffect(() => {
            f();
        }, [f]),
        (0, a.jsx)('div', {
            className: u.safetyFlow,
            children: (0, a.jsxs)('div', {
                className: u.container,
                children: [
                    (0, a.jsx)(l.xBx, {
                        separator: !1,
                        className: u.header,
                        children: (0, a.jsx)(l.X6q, {
                            variant: 'heading-xl/bold',
                            children: d.intl.string(c.default.gqwhj4)
                        })
                    }),
                    (0, a.jsxs)(l.hzk, {
                        className: u.body,
                        children: [
                            n &&
                                (0, a.jsx)(l.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-muted',
                                    children: d.intl.string(c.default.v0H5Tk)
                                }),
                            null !== x &&
                                (0, a.jsx)(l.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-danger',
                                    className: u.error,
                                    children: x
                                }),
                            !n &&
                                null === x &&
                                null !== e &&
                                (0, a.jsx)(o.Z, {
                                    task: e,
                                    onSubmit: v,
                                    disabled: p
                                })
                        ]
                    })
                ]
            })
        })
    );
};
