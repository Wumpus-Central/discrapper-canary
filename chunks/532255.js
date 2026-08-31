t.a(e, async function (e, l) {
    try {
        t.r(n), t.d(n, { default: () => S });
        var r = t(477900),
            a = t(582128),
            i = t(960218),
            s = t(730340),
            c = t(292442),
            u = t(834730),
            d = t(791606),
            o = t(38405),
            h = t(715764),
            m = t(614740),
            x = t(440801),
            j = t(4837),
            g = t(750854),
            f = t(131765),
            p = t(167507),
            v = t(908347),
            I = t(62849),
            A = t(558447),
            y = t(886609),
            k = t(580019),
            C = t(596008),
            b = t(375708),
            N = t(254221),
            w = e([p, s]);
        [p, s] = w.then ? (await w)() : w;
        let _ = {
            text: h.EY,
            paragraph: h.fz,
            empty: h.Sv,
            emoji: j.z,
            link: p.N,
            list: v.B,
            listItem: v.c,
            code: m.C,
            code_block: x.N,
            quote: A.P,
            bold: g.yN,
            italic: g.J2,
            underline: g.z2,
            strikethrough: g.Gk,
            mention: I.P,
            heading: f.D,
            small: f.O,
            spoiler: y.d,
            timestamp: k.D,
        };
        function S(e) {
            let { content: n } = e;
            return (0, r.jsx)(c.tH, {
                fallbackRender: (e) => {
                    let { error: t } = e;
                    return (0, r.jsx)($, { content: n, error: t });
                },
                children: (0, r.jsx)(M, { content: n }),
            });
        }
        function M(e) {
            let { content: n } = e,
                t = a.useMemo(() => (0, s.q)(n), [n]);
            return (0, r.jsx)(C.K.Provider, { value: t, children: (0, r.jsx)(i.$, { nodes: t, renderers: _ }) });
        }
        function $(e) {
            let { content: n, error: t } = e;
            return (
                a.useEffect(() => {
                    o.A.captureException(t);
                }, [t]),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("span", { children: n }),
                        (0, r.jsxs)(u.E, {
                            variant: "text-md/normal",
                            color: "text-feedback-critical",
                            className: N.g,
                            children: [(0, r.jsx)(d.A, { width: 16, height: 16 }), b.intl.string(b.t.dpFK4M)],
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
