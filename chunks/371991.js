n.d(t, {
    ZP: () => E,
    tS: () => m,
    x3: () => g
}),
    n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(442837),
    l = n(846519),
    c = n(481060),
    u = n(607070),
    d = n(706454),
    f = n(70956),
    p = n(506071),
    _ = n(561308),
    h = n(122266);
function m(e) {
    let [t, n] = i.useState(Date.now()),
        r = (0, p.n)(),
        o = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        a = !r || (o && !e);
    return (
        i.useEffect(() => {
            let e = new l.Xp();
            return (
                e.start(a ? 15 * f.Z.Millis.SECOND : f.Z.Millis.SECOND, () => {
                    n(Date.now());
                }),
                () => e.stop()
            );
        }, [a]),
        {
            now: t,
            slowTickMode: a
        }
    );
}
let g = (e) => {
        let { entry: t, inline: n = !1, textColor: o, hovered: s = !1, bold: l = !1, scaleFontToUserSetting: u = !1 } = e,
            { now: d } = m(s),
            f = i.useMemo(() => (0, _.T_)(t, d), [t, d]),
            p = i.useRef(f),
            g = i.useRef(f);
        return (
            i.useEffect(() => {
                g.current = f;
            }),
            i.useEffect(() => {
                p.current = g.current;
            }, [t]),
            (0, r.jsx)(c.Text, {
                className: a()(h.timestamp, {
                    [h.inlineTimestamp]: n,
                    [h.bold]: l
                }),
                variant: 'text-xs/medium',
                tabularNumbers: !0,
                color: o,
                scaleFontToUserSetting: u,
                'aria-label': p.current,
                children: f
            })
        );
    },
    E = (e) => {
        let { entry: t, textColor: n, hovered: i = !1, bold: o = !1, scaleFontToUserSetting: a = !1 } = e,
            l = (0, _.Jg)(t),
            u = (0, s.e7)([d.default], () => d.default.locale);
        return l
            ? (0, r.jsx)(g, {
                  entry: t,
                  textColor: n,
                  hovered: i,
                  bold: o,
                  scaleFontToUserSetting: a
              })
            : (0, r.jsx)(c.Text, {
                  variant: 'text-xs/normal',
                  color: n,
                  lineClamp: 1,
                  scaleFontToUserSetting: a,
                  children: (0, _.GL)(t, u)
              });
    };
