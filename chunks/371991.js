n.d(t, {
    ZP: () => E,
    tS: () => m,
    x3: () => g
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(442837),
    l = n(846519),
    u = n(481060),
    c = n(607070),
    d = n(706454),
    f = n(70956),
    _ = n(506071),
    p = n(561308),
    h = n(463269);
function m(e) {
    let [t, n] = r.useState(Date.now()),
        i = (0, _.n)(),
        a = (0, o.e7)([c.Z], () => c.Z.useReducedMotion),
        s = !i || (a && !e);
    return (
        r.useEffect(() => {
            let e = new l.Xp();
            return (
                e.start(s ? 15 * f.Z.Millis.SECOND : f.Z.Millis.SECOND, () => {
                    n(Date.now());
                }),
                () => e.stop()
            );
        }, [s]),
        {
            now: t,
            slowTickMode: s
        }
    );
}
let g = (e) => {
        let { entry: t, inline: n = !1, textColor: a, hovered: o = !1, bold: l = !1, scaleFontToUserSetting: c = !1 } = e,
            { now: d } = m(o),
            f = r.useMemo(() => (0, p.T_)(t, d), [t, d]),
            _ = r.useRef(f),
            g = r.useRef(f);
        return (
            r.useEffect(() => {
                g.current = f;
            }),
            r.useEffect(() => {
                _.current = g.current;
            }, [t]),
            (0, i.jsx)(u.Text, {
                className: s()(h.timestamp, {
                    [h.inlineTimestamp]: n,
                    [h.bold]: l
                }),
                variant: 'text-xs/medium',
                tabularNumbers: !0,
                color: a,
                scaleFontToUserSetting: c,
                'aria-label': _.current,
                children: f
            })
        );
    },
    E = (e) => {
        let { entry: t, textColor: n, hovered: r = !1, bold: a = !1, scaleFontToUserSetting: s = !1 } = e,
            l = (0, p.Jg)(t),
            c = (0, o.e7)([d.default], () => d.default.locale);
        return l
            ? (0, i.jsx)(g, {
                  entry: t,
                  textColor: n,
                  hovered: r,
                  bold: a,
                  scaleFontToUserSetting: s
              })
            : (0, i.jsx)(u.Text, {
                  variant: 'text-xs/normal',
                  color: n,
                  lineClamp: 1,
                  scaleFontToUserSetting: s,
                  children: (0, p.GL)(t, c)
              });
    };
