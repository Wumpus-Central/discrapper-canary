n.d(t, {
    ZP: () => b,
    tS: () => g,
    x3: () => E
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
    _ = n(506071),
    p = n(719247),
    h = n(561308),
    m = n(419732);
function g(e) {
    let [t, n] = i.useState(Date.now()),
        r = (0, _.n)(),
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
let E = (e) => {
        let { entry: t, inline: n = !1, textColor: o, hovered: s = !1, bold: l = !1, scaleFontToUserSetting: u = !1 } = e,
            { now: d } = g(s),
            f = i.useMemo(() => (0, h.T_)(t, d), [t, d]),
            _ = i.useRef(f),
            p = i.useRef(f);
        return (
            i.useEffect(() => {
                p.current = f;
            }),
            i.useEffect(() => {
                _.current = p.current;
            }, [t]),
            (0, r.jsx)(c.Text, {
                className: a()(m.timestamp, {
                    [m.inlineTimestamp]: n,
                    [m.bold]: l
                }),
                variant: 'text-xs/medium',
                tabularNumbers: !0,
                color: o,
                scaleFontToUserSetting: u,
                'aria-label': _.current,
                children: f
            })
        );
    },
    b = (e) => {
        var t, n;
        let { entry: i, textColor: o, hovered: a = !1, bold: l = !1, scaleFontToUserSetting: u = !1 } = e,
            f = (0, h.Jg)(i),
            _ = (0, s.e7)([d.default], () => d.default.locale),
            m = (0, s.e7)([p.Z], () => p.Z.getMatchingActivity(i)),
            g = null != (n = null == m || null == (t = m.timestamps) ? void 0 : t.start) ? n : null == m ? void 0 : m.created_at;
        return null != g
            ? (0, r.jsx)(E, {
                  entry: { start: g },
                  textColor: o,
                  hovered: a,
                  bold: l,
                  scaleFontToUserSetting: u
              })
            : f
              ? (0, r.jsx)(E, {
                    entry: i,
                    textColor: o,
                    hovered: a,
                    bold: l,
                    scaleFontToUserSetting: u
                })
              : (0, r.jsx)(c.Text, {
                    variant: 'text-xs/normal',
                    color: o,
                    lineClamp: 1,
                    scaleFontToUserSetting: u,
                    children: (0, h.GL)(i, _)
                });
    };
