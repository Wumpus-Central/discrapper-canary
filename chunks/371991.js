n.d(t, {
    ZP: () => b,
    tS: () => g,
    x3: () => E
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(846519),
    c = n(481060),
    u = n(607070),
    d = n(706454),
    _ = n(70956),
    f = n(506071),
    p = n(719247),
    h = n(561308),
    m = n(419732);
function g(e) {
    let [t, n] = i.useState(Date.now()),
        r = (0, f.n)(),
        a = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        o = !r || (a && !e);
    return (
        i.useEffect(() => {
            let e = new l.Xp();
            return (
                e.start(o ? 15 * _.Z.Millis.SECOND : _.Z.Millis.SECOND, () => {
                    n(Date.now());
                }),
                () => e.stop()
            );
        }, [o]),
        {
            now: t,
            slowTickMode: o
        }
    );
}
let E = (e) => {
        let { entry: t, inline: n = !1, textColor: a, hovered: s = !1, bold: l = !1, scaleFontToUserSetting: u = !1 } = e,
            { now: d } = g(s),
            _ = i.useMemo(() => (0, h.T_)(t, d), [t, d]),
            f = i.useRef(_),
            p = i.useRef(_);
        return (
            i.useEffect(() => {
                p.current = _;
            }),
            i.useEffect(() => {
                f.current = p.current;
            }, [t]),
            (0, r.jsx)(c.Text, {
                className: o()(m.timestamp, {
                    [m.inlineTimestamp]: n,
                    [m.bold]: l
                }),
                variant: 'text-xs/medium',
                tabularNumbers: !0,
                color: a,
                scaleFontToUserSetting: u,
                'aria-label': f.current,
                children: _
            })
        );
    },
    b = (e) => {
        var t, n;
        let { entry: i, textColor: a, hovered: o = !1, bold: l = !1, scaleFontToUserSetting: u = !1 } = e,
            _ = (0, h.Jg)(i),
            f = (0, s.e7)([d.default], () => d.default.locale),
            m = (0, s.e7)([p.Z], () => p.Z.getMatchingActivity(i)),
            g = null != (n = null == m || null == (t = m.timestamps) ? void 0 : t.start) ? n : null == m ? void 0 : m.created_at;
        return null != g
            ? (0, r.jsx)(E, {
                  entry: { start: g },
                  textColor: a,
                  hovered: o,
                  bold: l,
                  scaleFontToUserSetting: u
              })
            : _
              ? (0, r.jsx)(E, {
                    entry: i,
                    textColor: a,
                    hovered: o,
                    bold: l,
                    scaleFontToUserSetting: u
                })
              : (0, r.jsx)(c.Text, {
                    variant: 'text-xs/normal',
                    color: a,
                    lineClamp: 1,
                    scaleFontToUserSetting: u,
                    children: (0, h.GL)(i, f)
                });
    };
