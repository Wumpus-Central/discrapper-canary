n.d(t, {
    A: () => h,
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(46054),
    l = n(465364),
    c = n(207963),
    u = n(647901),
    d = n(560438),
    f = n(483496),
    p = n(206314);

function _(e) {
    let t = (0, c.jc)();
    return (0, i.useMemo)(() => {
        let n;
        return null === t
            ? null
            : ((n =
                  null != t.message
                      ? (0, l.ko)(t.message, d.l)
                      : (0, l.Le)({
                            channelId: t.channelId,
                            renderOptions: d.l,
                        })),
              o.A.parse(e, !0, n));
    }, [e, t]);
}

function h(e) {
    let { content: t, className: n } = e,
        i = _(t),
        a = (0, u.X)();
    return (0, r.jsx)("div", {
        className: s()(n, p.PT, f.T, a.className),
        children: i,
    });
}
