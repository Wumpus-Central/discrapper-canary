t.a(e, async function (e, r) {
    try {
        t.r(n), t.d(n, { default: () => y });
        var l = t(255367);
        t(73800);
        var i = t(545578),
            u = t(222082),
            c = t(63681),
            o = t(743965),
            a = t(12781),
            d = t(980426),
            s = t(659700),
            f = t(733653),
            _ = t(249597),
            g = t(312539),
            h = t(325980),
            b = t(472433),
            m = e([i]);
        i = (m.then ? (await m)() : m)[0];
        let p = {
            text: u.xv,
            paragraph: u.nv,
            empty: u.HY,
            emoji: a.d,
            link: f.r,
            list: _.a,
            listItem: _.H,
            code: c.E,
            code_block: o.d,
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
        function y(e) {
            let { content: n } = e;
            return (0, l.jsx)(i.ZP, {
                content: n,
                renderers: p
            });
        }
        r();
    } catch (e) {
        r(e);
    }
});
