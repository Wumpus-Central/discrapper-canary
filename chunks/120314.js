t.a(e, async function (e, r) {
    try {
        t.r(n), t.d(n, { default: () => j });
        var l = t(255367);
        t(73800);
        var i = t(318569),
            o = t(222082),
            u = t(63681),
            c = t(743965),
            a = t(12781),
            d = t(980426),
            s = t(659700),
            f = t(733653),
            _ = t(249597),
            g = t(312539),
            h = t(325980),
            b = t(472433),
            y = e([a, i]);
        [a, i] = y.then ? (await y)() : y;
        let x = {
            text: o.xv,
            paragraph: o.nv,
            empty: o.HY,
            emoji: a.d,
            link: f.r,
            list: _.a,
            listItem: _.H,
            code: u.E,
            code_block: c.d,
            quote: h.p,
            bold: d.d8,
            italic: d.Tx,
            underline: d.v6,
            strikethrough: d.nY,
            mention: g.p,
            heading: s.X,
            small: s.x,
            spoiler: b.o
        };
        function j(e) {
            let { content: n } = e;
            return (0, l.jsx)(i.ZP, {
                content: n,
                renderers: x
            });
        }
        r();
    } catch (e) {
        r(e);
    }
});
