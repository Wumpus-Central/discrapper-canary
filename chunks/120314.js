t.a(e, async function (e, r) {
    try {
        t.r(n), t.d(n, { default: () => k });
        var l = t(54381),
            c = t(473749),
            a = t(126579),
            i = t(734610),
            o = t(481060),
            s = t(460562),
            u = t(960048),
            d = t(222082),
            h = t(63681),
            j = t(743965),
            m = t(12781),
            f = t(980426),
            p = t(659700),
            x = t(733653),
            v = t(249597),
            g = t(312539),
            b = t(325980),
            y = t(472433),
            I = t(701214),
            O = t(388032),
            w = t(622511),
            Z = e([m, y, a]);
        [m, y, a] = Z.then ? (await Z)() : Z;
        let C = {
            text: d.xv,
            paragraph: d.nv,
            empty: d.HY,
            emoji: m.d,
            link: x.r,
            list: v.a,
            listItem: v.H,
            code: h.E,
            code_block: j.d,
            quote: b.p,
            bold: f.d8,
            italic: f.Tx,
            underline: f.v6,
            strikethrough: f.nY,
            mention: g.p,
            heading: p.X,
            small: p.x,
            spoiler: y.o,
            timestamp: I.E,
        };
        function k(e) {
            let { content: n } = e;
            return (0, l.jsx)(i.SV, {
                fallbackRender: (e) => {
                    let { error: t } = e;
                    return (0, l.jsx)(P, {
                        content: n,
                        error: t,
                    });
                },
                children: (0, l.jsx)(a.ZP, {
                    content: n,
                    renderers: C,
                }),
            });
        }
        function P(e) {
            let { content: n, error: t } = e;
            return (
                c.useEffect(() => {
                    u.Z.captureException(t);
                }, [t]),
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("span", { children: n }),
                        (0, l.jsxs)(o.Text, {
                            variant: "text-md/normal",
                            color: "text-feedback-critical",
                            className: w.errorMessage,
                            children: [
                                (0, l.jsx)(s.Z, {
                                    width: 16,
                                    height: 16,
                                }),
                                O.intl.string(O.t.dpFK4M),
                            ],
                        }),
                    ],
                })
            );
        }
        r();
    } catch (e) {
        r(e);
    }
});
