n.d(t, {
    ZP: () => b,
    tS: () => g,
    x3: () => E,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(846519),
    c = n(481060),
    u = n(607070),
    d = n(706454),
    f = n(70956),
    _ = n(506071),
    p = n(719247),
    h = n(561308),
    m = n(722561);
function g(e) {
    let [t, n] = i.useState(Date.now()),
        r = (0, _.n)(),
        a = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        o = !r || (a && !e);
    return (
        i.useEffect(() => {
            let e = new l.Xp();
            return (
                e.start(o ? 15 * f.Z.Millis.SECOND : f.Z.Millis.SECOND, () => {
                    n(Date.now());
                }),
                () => e.stop()
            );
        }, [o]),
        {
            now: t,
            slowTickMode: o,
        }
    );
}
let E = (e) => {
        let {
                entry: t,
                inline: n = !1,
                textColor: a,
                textTabularNumbers: s = !0,
                textFontCode: l = !0,
                hovered: u = !1,
                bold: d = !1,
                scaleFontToUserSetting: f = !1,
            } = e,
            { now: _ } = g(u),
            p = i.useMemo(() => (0, h.T_)(t, _), [t, _]),
            E = i.useRef(p),
            b = i.useRef(p);
        return (
            i.useEffect(() => {
                b.current = p;
            }),
            i.useEffect(() => {
                E.current = b.current;
            }, [t]),
            (0, r.jsx)(c.Text, {
                className: o()({
                    [m.fontCode]: l,
                    [m.bold]: d,
                    [m.inlineTimestamp]: n,
                }),
                variant: "text-xs/medium",
                tabularNumbers: s,
                color: a,
                scaleFontToUserSetting: f,
                "aria-label": E.current,
                children: p,
            })
        );
    },
    b = (e) => {
        var t, n;
        let { entry: i, textColor: a, hovered: o = !1, bold: l = !1, scaleFontToUserSetting: u = !1 } = e,
            f = (0, h.Jg)(i),
            _ = (0, s.e7)([d.default], () => d.default.locale),
            m = (0, s.e7)([p.Z], () => p.Z.getMatchingActivity(i)),
            g =
                null != (n = null == m || null == (t = m.timestamps) ? void 0 : t.start)
                    ? n
                    : null == m
                      ? void 0
                      : m.created_at;
        return null != g
            ? (0, r.jsx)(E, {
                  entry: { start: g },
                  textColor: a,
                  hovered: o,
                  bold: l,
                  scaleFontToUserSetting: u,
              })
            : f
              ? (0, r.jsx)(E, {
                    entry: i,
                    textColor: a,
                    hovered: o,
                    bold: l,
                    scaleFontToUserSetting: u,
                })
              : (0, r.jsx)(c.Text, {
                    variant: "text-xs/normal",
                    color: a,
                    lineClamp: 1,
                    scaleFontToUserSetting: u,
                    children: (0, h.GL)(i, _),
                });
    };
