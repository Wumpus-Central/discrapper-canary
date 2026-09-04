t.a(e, async function (e, l) {
    try {
        t.r(n), t.d(n, { default: () => w });
        var r = t(477900),
            a = t(582128),
            s = t(244377),
            i = t(680441),
            c = t(292442),
            d = t(834730),
            u = t(791606),
            o = t(38405),
            h = t(715764),
            m = t(614740),
            x = t(440801),
            j = t(4837),
            g = t(750854),
            f = t(131765),
            p = t(167507),
            I = t(908347),
            v = t(62849),
            A = t(558447),
            k = t(886609),
            y = t(580019),
            C = t(596008),
            b = t(375708),
            N = t(254221),
            S = e([i]);
        i = (S.then ? (await S)() : S)[0];
        let _ = {
            text: h.EY,
            paragraph: h.fz,
            empty: h.Sv,
            emoji: j.z,
            link: p.N,
            list: I.B,
            listItem: I.c,
            code: m.C,
            code_block: x.N,
            quote: A.P,
            bold: g.yN,
            italic: g.J2,
            underline: g.z2,
            strikethrough: g.Gk,
            mention: v.P,
            heading: f.D,
            small: f.O,
            spoiler: k.d,
            timestamp: y.D,
        };
        function w(e) {
            let { content: n } = e;
            return (0, r.jsx)(c.tH, {
                fallbackRender: (e) => {
                    let { error: t } = e;
                    return (0, r.jsx)(M, { content: n, error: t });
                },
                children: (0, r.jsx)($, { content: n }),
            });
        }
        function $(e) {
            let { content: n } = e,
                t = a.useMemo(() => (0, i.q)(n), [n]);
            return (0, r.jsx)(C.K.Provider, { value: t, children: (0, r.jsx)(s.$, { nodes: t, renderers: _ }) });
        }
        function M(e) {
            let { content: n, error: t } = e;
            return (
                a.useEffect(() => {
                    o.A.captureException(t);
                }, [t]),
                (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsx)("span", { children: n }),
                        (0, r.jsxs)(d.E, {
                            variant: "text-md/normal",
                            color: "text-feedback-critical",
                            className: N.g,
                            children: [(0, r.jsx)(u.A, { width: 16, height: 16 }), b.intl.string(b.t.dpFK4M)],
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
