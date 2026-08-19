t.a(e, async function (e, l) {
    try {
        t.r(n), t.d(n, { default: () => N });
        var r = t(477900),
            a = t(582128),
            i = t(924557),
            s = t(292442),
            c = t(834730),
            d = t(791606),
            u = t(38405),
            o = t(715764),
            h = t(614740),
            m = t(440801),
            x = t(4837),
            j = t(750854),
            g = t(131765),
            f = t(167507),
            p = t(908347),
            I = t(62849),
            v = t(558447),
            A = t(886609),
            k = t(580019),
            y = t(375708),
            C = t(944063),
            b = e([x, i]);
        [x, i] = b.then ? (await b)() : b;
        let S = {
            text: o.EY,
            paragraph: o.fz,
            empty: o.Sv,
            emoji: x.z,
            link: f.N,
            list: p.B,
            listItem: p.c,
            code: h.C,
            code_block: m.N,
            quote: v.P,
            bold: j.yN,
            italic: j.J2,
            underline: j.z2,
            strikethrough: j.Gk,
            mention: I.P,
            heading: g.D,
            small: g.O,
            spoiler: A.d,
            timestamp: k.D,
        };
        function N(e) {
            let { content: n } = e;
            return (0, r.jsx)(s.tH, {
                fallbackRender: (e) => {
                    let { error: t } = e;
                    return (0, r.jsx)(w, { content: n, error: t });
                },
                children: (0, r.jsx)(i.Ay, { content: n, renderers: S }),
            });
        }
        function w(e) {
            let { content: n, error: t } = e;
            return (
                a.useEffect(() => {
                    u.A.captureException(t);
                }, [t]),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("span", { children: n }),
                        (0, r.jsxs)(c.E, {
                            variant: "text-md/normal",
                            color: "text-feedback-critical",
                            className: C.g,
                            children: [(0, r.jsx)(d.A, { width: 16, height: 16 }), y.intl.string(y.t.dpFK4M)],
                        }),
                    ],
                })
            );
        }
        l();
    } catch (e) {
        l(e);
    }
});
