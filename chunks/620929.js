l.d(t, { p: () => f });
var n = l(200651),
    r = l(192379),
    i = l(120356),
    a = l.n(i);
l(913527), l(442837);
var s = l(481060);
l(430824), l(650461), l(353093);
var o = l(105671);
l(532490), l(979264), l(570938), l(550271), l(116175);
var c = l(308083),
    d = l(388032),
    u = l(318457);
function f(e) {
    let { applicationIds: t, playstyle: l, className: i } = e,
        f = r.useMemo(() => Array.from(t), [t]),
        m = (0, o.i)(f),
        h = r.useMemo(() => {
            if (null == m) return null;
            let e = (0, c.mv)(l);
            return null == e
                ? d.NW.format(d.t.dlplKi, { games: m })
                : d.NW.format(d.t['+qicDA'], {
                      playstyle: e,
                      games: m
                  });
        }, [m, l]);
    return (0, n.jsx)(s.Text, {
        variant: 'text-sm/normal',
        color: 'text-muted',
        className: a()(u.overviewText, i),
        children: null == h ? d.NW.string(d.t.AIp7Hx) : h
    });
}
