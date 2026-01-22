t.a(e, async function (e, r) {
    try {
        t.r(n),
            t.d(n, {
                default: () => w,
            });
        var l = t(627968),
            c = t(64700),
            a = t(223535),
            i = t(484030),
            s = t(397927),
            o = t(791606),
            u = t(728458),
            d = t(715764),
            h = t(614740),
            m = t(440801),
            j = t(4837),
            p = t(750854),
            f = t(131765),
            x = t(167507),
            g = t(908347),
            v = t(62849),
            y = t(558447),
            b = t(886609),
            I = t(580019),
            A = t(985018),
            O = t(967615),
            k = e([j, b, a]);
        [j, b, a] = k.then ? (await k)() : k;
        let N = {
            text: d.EY,
            paragraph: d.fz,
            empty: d.Sv,
            emoji: j.z,
            link: x.N,
            list: g.B,
            listItem: g.c,
            code: h.C,
            code_block: m.N,
            quote: y.P,
            bold: p.yN,
            italic: p.J2,
            underline: p.z2,
            strikethrough: p.Gk,
            mention: v.P,
            heading: f.D,
            small: f.O,
            spoiler: b.d,
            timestamp: I.D,
        };

        function w(e) {
            let { content: n } = e;
            return (0, l.jsx)(i.tH, {
                fallbackRender: (e) => {
                    let { error: t } = e;
                    return (0, l.jsx)(P, {
                        content: n,
                        error: t,
                    });
                },
                children: (0, l.jsx)(a.Ay, {
                    content: n,
                    renderers: N,
                }),
            });
        }

        function P(e) {
            let { content: n, error: t } = e;
            return (
                c.useEffect(() => {
                    u.A.captureException(t);
                }, [t]),
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("span", {
                            children: n,
                        }),
                        (0, l.jsxs)(s.Text, {
                            variant: "text-md/normal",
                            color: "text-feedback-critical",
                            className: O.g,
                            children: [
                                (0, l.jsx)(o.A, {
                                    width: 16,
                                    height: 16,
                                }),
                                A.intl.string(A.t.dpFK4M),
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
