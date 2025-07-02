t.a(e, async function (e, r) {
    try {
        (t.r(n), t.d(n, { default: () => Z }));
        var l = t(255367),
            c = t(73800),
            i = t(926302),
            o = t(740442),
            a = t(481060),
            s = t(460562),
            u = t(960048),
            d = t(222082),
            h = t(63681),
            f = t(743965),
            j = t(12781),
            m = t(980426),
            p = t(659700),
            g = t(733653),
            v = t(249597),
            b = t(312539),
            x = t(325980),
            y = t(472433),
            O = t(701214),
            w = t(388032),
            I = t(718905),
            P = e([j, y, i]);
        [j, y, i] = P.then ? (await P)() : P;
        let C = {
            text: d.xv,
            paragraph: d.nv,
            empty: d.HY,
            emoji: j.d,
            link: g.r,
            list: v.a,
            listItem: v.H,
            code: h.E,
            code_block: f.d,
            quote: x.p,
            bold: m.d8,
            italic: m.Tx,
            underline: m.v6,
            strikethrough: m.nY,
            mention: b.p,
            heading: p.X,
            small: p.x,
            spoiler: y.o,
            timestamp: O.E
        };
        function Z(e) {
            let { content: n } = e;
            return (0, l.jsx)(o.SV, {
                fallbackRender: (e) => {
                    let { error: t } = e;
                    return (0, l.jsx)(k, {
                        content: n,
                        error: t
                    });
                },
                children: (0, l.jsx)(i.ZP, {
                    content: n,
                    renderers: C
                })
            });
        }
        function k(e) {
            let { content: n, error: t } = e;
            return (
                c.useEffect(() => {
                    u.Z.captureException(t);
                }, [t]),
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)('span', { children: n }),
                        (0, l.jsxs)(a.Text, {
                            variant: 'text-md/normal',
                            color: 'text-danger',
                            className: I.errorMessage,
                            children: [
                                (0, l.jsx)(s.Z, {
                                    width: 16,
                                    height: 16
                                }),
                                w.intl.string(w.t.dpFK4O)
                            ]
                        })
                    ]
                })
            );
        }
        r();
    } catch (e) {
        r(e);
    }
});
