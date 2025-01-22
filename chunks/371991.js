r.d(n, {
    tS: function () {
        return v;
    },
    x3: function () {
        return y;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(442837),
    c = r(846519),
    d = r(481060),
    f = r(607070),
    p = r(706454),
    h = r(70956),
    _ = r(506071),
    m = r(561308),
    g = r(687371);
let E = (e) => {
    let { entry: n, textColor: r, hovered: i = !1, bold: o = !1, scaleFontToUserSetting: s = !1 } = e,
        l = (0, m.Jg)(n),
        c = (0, u.e7)([p.default], () => p.default.locale);
    return l
        ? (0, a.jsx)(y, {
              entry: n,
              textColor: r,
              hovered: i,
              bold: o,
              scaleFontToUserSetting: s
          })
        : (0, a.jsx)(d.Text, {
              variant: 'text-xs/normal',
              color: r,
              lineClamp: 1,
              scaleFontToUserSetting: s,
              children: (0, m.GL)(n, c)
          });
};
function v(e) {
    let [n, r] = o.useState(Date.now()),
        i = (0, _.n)(),
        a = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        s = !i || (a && !e);
    return (
        o.useEffect(() => {
            let e = new c.Xp();
            return (
                e.start(s ? 15 * h.Z.Millis.SECOND : h.Z.Millis.SECOND, () => {
                    r(Date.now());
                }),
                () => e.stop()
            );
        }, [s]),
        {
            now: n,
            slowTickMode: s
        }
    );
}
let y = (e) => {
    let { entry: n, inline: r = !1, textColor: i, hovered: s = !1, bold: u = !1, scaleFontToUserSetting: c = !1 } = e,
        { now: f } = v(s),
        p = o.useMemo(() => (0, m.T_)(n, f), [n, f]),
        h = o.useRef(p),
        _ = o.useRef(p);
    return (
        o.useEffect(() => {
            _.current = p;
        }),
        o.useEffect(() => {
            h.current = _.current;
        }, [n]),
        (0, a.jsx)(d.Text, {
            className: l()(g.timestamp, {
                [g.inlineTimestamp]: r,
                [g.bold]: u
            }),
            variant: 'text-xs/medium',
            tabularNumbers: !0,
            color: i,
            scaleFontToUserSetting: c,
            'aria-label': h.current,
            children: p
        })
    );
};
n.ZP = E;
