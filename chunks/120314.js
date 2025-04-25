t.a(e, async function (e, r) {
    try {
        t.r(n), t.d(n, { default: () => h });
        var l = t(200651);
        t(192379);
        var i = t(138546),
            u = t(222082),
            o = t(63681),
            c = t(12781),
            a = t(980426),
            d = t(659700),
            s = t(733653),
            f = t(249597),
            _ = t(312539),
            g = t(325980),
            b = e([i]);
        i = (b.then ? (await b)() : b)[0];
        let m = {
            text: u.xv,
            paragraph: u.nv,
            empty: u.HY,
            emoji: c.d,
            link: s.r,
            list: f.a,
            listItem: f.H,
            code: o.E,
            code_block: o.d,
            quote: g.p,
            bold: a.d8,
            italic: a.Tx,
            underline: a.v6,
            strikethrough: a.nY,
            mention: _.p,
            heading: d.X
        };
        function h(e) {
            let { content: n } = e;
            return (0, l.jsx)(i.ZP, {
                content: n,
                renderers: m
            });
        }
        r();
    } catch (e) {
        r(e);
    }
});
