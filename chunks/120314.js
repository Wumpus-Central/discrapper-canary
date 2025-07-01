t.a(e, async function (e, r) {
    try {
        (t.r(n), t.d(n, { default: () => p }));
        var l = t(255367);
        t(73800);
        var i = t(926302),
            c = t(222082),
            o = t(63681),
            u = t(743965),
            a = t(12781),
            s = t(980426),
            d = t(659700),
            f = t(733653),
            _ = t(249597),
            h = t(312539),
            b = t(325980),
            g = t(472433),
            m = t(701214),
            y = e([a, g, i]);
        [a, g, i] = y.then ? (await y)() : y;
        let j = {
            text: c.xv,
            paragraph: c.nv,
            empty: c.HY,
            emoji: a.d,
            link: f.r,
            list: _.a,
            listItem: _.H,
            code: o.E,
            code_block: u.d,
            quote: b.p,
            bold: s.d8,
            italic: s.Tx,
            underline: s.v6,
            strikethrough: s.nY,
            mention: h.p,
            heading: d.X,
            small: d.x,
            spoiler: g.o,
            timestamp: m.E
        };
        function p(e) {
            let { content: n } = e;
            return (0, l.jsx)(i.ZP, {
                content: n,
                renderers: j
            });
        }
        r();
    } catch (e) {
        r(e);
    }
});
