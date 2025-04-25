t.a(e, async function (e, r) {
    try {
        t.r(n), t.d(n, { default: () => b });
        var l = t(200651);
        t(192379);
        var i = t(138546),
            u = t(222082),
            o = t(63681),
            c = t(12781),
            a = t(980426),
            d = t(733653),
            s = t(249597),
            f = t(312539),
            _ = t(325980),
            g = e([i]);
        i = (g.then ? (await g)() : g)[0];
        let h = {
            text: u.xv,
            paragraph: u.nv,
            empty: u.HY,
            emoji: c.d,
            link: d.r,
            list: s.a,
            listItem: s.H,
            code: o.E,
            code_block: o.d,
            quote: _.p,
            bold: a.d8,
            italic: a.Tx,
            underline: a.v6,
            strikethrough: a.nY,
            mention: f.p
        };
        function b(e) {
            let { content: n } = e;
            return (0, l.jsx)(i.ZP, {
                content: n,
                renderers: h
            });
        }
        r();
    } catch (e) {
        r(e);
    }
});
