r.d(t, { p: () => f });
var n = r(200651),
    l = r(192379),
    i = r(120356),
    a = r.n(i);
r(913527), r(442837);
var s = r(481060);
r(430824), r(650461), r(353093);
var o = r(105671);
r(532490), r(979264), r(570938), r(550271), r(116175);
var c = r(308083),
    u = r(388032),
    d = r(39780);
function f(e) {
    let { applicationIds: t, playstyle: r, className: i } = e,
        f = l.useMemo(() => Array.from(t), [t]),
        m = (0, o.i)(f),
        p = l.useMemo(() => {
            if (null == m) return null;
            let e = (0, c.mv)(r);
            return null == e
                ? u.NW.format(u.t.dlplKi, { games: m })
                : u.NW.format(u.t['+qicDA'], {
                      playstyle: e,
                      games: m
                  });
        }, [m, r]);
    return (0, n.jsx)(s.Text, {
        variant: 'text-sm/normal',
        color: 'text-muted',
        className: a()(d.overviewText, i),
        children: null == p ? u.NW.string(u.t.AIp7Hx) : p
    });
}
