r.d(n, {
    tS: function () {
        return v;
    },
    x3: function () {
        return I;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(442837),
    c = r(846519),
    d = r(481060),
    f = r(607070),
    _ = r(706454),
    h = r(70956),
    p = r(506071),
    m = r(561308),
    g = r(687371);
let E = (e) => {
    let { entry: n, textColor: r, hovered: i = !1, bold: s = !1, scaleFontToUserSetting: o = !1 } = e,
        l = (0, m.Jg)(n),
        c = (0, u.e7)([_.default], () => _.default.locale);
    return l
        ? (0, a.jsx)(I, {
              entry: n,
              textColor: r,
              hovered: i,
              bold: s,
              scaleFontToUserSetting: o
          })
        : (0, a.jsx)(d.Text, {
              variant: 'text-xs/normal',
              color: r,
              lineClamp: 1,
              scaleFontToUserSetting: o,
              children: (0, m.GL)(n, c)
          });
};
function v(e) {
    let [n, r] = s.useState(Date.now()),
        i = (0, p.n)(),
        a = (0, u.e7)([f.Z], () => f.Z.useReducedMotion),
        o = !i || (a && !e);
    return (
        s.useEffect(() => {
            let e = new c.Xp();
            return (
                e.start(o ? 15 * h.Z.Millis.SECOND : h.Z.Millis.SECOND, () => {
                    r(Date.now());
                }),
                () => e.stop()
            );
        }, [o]),
        {
            now: n,
            slowTickMode: o
        }
    );
}
let I = (e) => {
    let { entry: n, inline: r = !1, textColor: i, hovered: o = !1, bold: u = !1, scaleFontToUserSetting: c = !1 } = e,
        { now: f } = v(o),
        _ = s.useMemo(() => (0, m.T_)(n, f), [n, f]),
        h = s.useRef(_),
        p = s.useRef(_);
    return (
        s.useEffect(() => {
            p.current = _;
        }),
        s.useEffect(() => {
            h.current = p.current;
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
            children: _
        })
    );
};
n.ZP = E;
