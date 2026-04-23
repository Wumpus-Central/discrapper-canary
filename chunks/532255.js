t.a(e, async function (e, l) {
    try {
        t.r(n), t.d(n, { default: () => N });
        var r = t(627968),
            a = t(64700),
            s = t(223535),
            c = t(484030),
            i = t(834730),
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
            v = t(62849),
            I = t(558447),
            A = t(886609),
            y = t(580019),
            k = t(985018),
            b = t(352372),
            C = e([x, A, s]);
        [x, A, s] = C.then ? (await C)() : C;
        let $ = {
            text: o.EY,
            paragraph: o.fz,
            empty: o.Sv,
            emoji: x.z,
            link: f.N,
            list: p.B,
            listItem: p.c,
            code: h.C,
            code_block: m.N,
            quote: I.P,
            bold: j.yN,
            italic: j.J2,
            underline: j.z2,
            strikethrough: j.Gk,
            mention: v.P,
            heading: g.D,
            small: g.O,
            spoiler: A.d,
            timestamp: y.D,
        };
        function N(e) {
            let { content: n } = e;
            return (0, r.jsx)(c.tH, {
                fallbackRender: (e) => {
                    let { error: t } = e;
                    return (0, r.jsx)(w, { content: n, error: t });
                },
                children: (0, r.jsx)(s.Ay, { content: n, renderers: $ }),
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
                        (0, r.jsxs)(i.E, {
                            variant: "text-md/normal",
                            color: "text-feedback-critical",
                            className: b.g,
                            children: [(0, r.jsx)(d.A, { width: 16, height: 16 }), k.intl.string(k.t.dpFK4M)],
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
