n.d(t, {
    ZP: () => v,
    tS: () => m,
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
    g = n(32515);
function m(e) {
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
            { now: d } = m(s),
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
                className: a()(g.timestamp, {
                    [g.inlineTimestamp]: n,
                    [g.bold]: l
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
    v = (e) => {
        var t, n;
        let { entry: i, textColor: o, hovered: a = !1, bold: l = !1, scaleFontToUserSetting: u = !1 } = e,
            f = (0, h.Jg)(i),
            _ = (0, s.e7)([d.default], () => d.default.locale),
            g = (0, s.e7)([p.Z], () => p.Z.getMatchingActivity(i)),
            m = null !== (n = null == g ? void 0 : null === (t = g.timestamps) || void 0 === t ? void 0 : t.start) && void 0 !== n ? n : null == g ? void 0 : g.created_at;
        return null != m
            ? (0, r.jsx)(E, {
                  entry: { start: m },
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
