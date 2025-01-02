l.d(t, {
    p: function () {
        return x;
    }
});
var n = l(200651),
    i = l(192379),
    a = l(120356),
    s = l.n(a);
l(913527), l(442837);
var r = l(481060);
l(430824), l(650461), l(353093);
var o = l(105671);
l(532490), l(979264), l(570938), l(550271), l(116175);
var c = l(308083),
    d = l(388032),
    u = l(869650);
function x(e) {
    let { applicationIds: t, playstyle: l, className: a } = e,
        x = i.useMemo(() => Array.from(t), [t]),
        m = (0, o.i)(x),
        h = i.useMemo(() => {
            if (null == m) return null;
            let e = (0, c.mv)(l);
            return null == e
                ? d.intl.format(d.t.dlplKi, { games: m })
                : d.intl.format(d.t['+qicDA'], {
                      playstyle: e,
                      games: m
                  });
        }, [m, l]);
    return (0, n.jsx)(r.Text, {
        variant: 'text-sm/normal',
        color: 'text-muted',
        className: s()(u.overviewText, a),
        children: null == h ? d.intl.string(d.t.AIp7Hx) : h
    });
}
