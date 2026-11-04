var i = e(392054),
    s = e(213404),
    r = e(834968);
(e(73510),
    e.d(
        n,
        {},
        {
            Rg: function (t) {
                return t.type === i.Hf.BUILT_IN ? r.A : s.A;
            },
            Yn: function (t, n) {
                let e = n,
                    i = !1,
                    s = n.indexOf(":");
                if (s >= 0) {
                    let t = n.lastIndexOf(" ", s);
                    t >= 0 ? ((n = n.substring(0, t)), (i = !0)) : (n = n.substring(0, s));
                } else n = n.substring(0, n.length);
                let r = n.split(" ", 4);
                return (
                    r.length > 3 && ((i = !0), r.pop()),
                    (n = r.join(" ")),
                    (e.length > n.length || n.endsWith(" ")) && ((i = !0), (n = n.trimEnd())),
                    { text: n, parts: r, hasSpaceTerminator: i }
                );
            },
            a8: function (t) {
                return `${t / 16}rem`;
            },
        },
    ));
