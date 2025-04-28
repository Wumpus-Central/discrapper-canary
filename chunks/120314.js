t.a(e, async function (e, r) {
    try {
        t.r(n), t.d(n, { default: () => m });
        var l = t(200651);
        t(192379);
        var i = t(946884),
            u = t(222082),
            c = t(63681),
            o = t(743965),
            a = t(12781),
            d = t(980426),
            s = t(659700),
            f = t(733653),
            _ = t(249597),
            g = t(312539),
            b = t(325980),
            h = e([i]);
        i = (h.then ? (await h)() : h)[0];
        let y = {
            text: u.xv,
            paragraph: u.nv,
            empty: u.HY,
            emoji: a.d,
            link: f.r,
            list: _.a,
            listItem: _.H,
            code: c.E,
            code_block: o.d,
            quote: b.p,
            bold: d.d8,
            italic: d.Tx,
            underline: d.v6,
            strikethrough: d.nY,
            mention: g.p,
            heading: s.X,
            small: s.x
        };
        function m(e) {
            let { content: n } = e;
            return (0, l.jsx)(i.ZP, {
                content: n,
                renderers: y
            });
        }
        r();
    } catch (e) {
        r(e);
    }
});
