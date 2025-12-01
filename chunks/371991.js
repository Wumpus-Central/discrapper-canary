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
    p = n(506071),
    _ = n(719247),
    m = n(561308),
    h = n(284635);
function g(e) {
    let [t, n] = i.useState(Date.now()),
        r = (0, p.n)(),
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
            { now: p } = g(u),
            _ = i.useMemo(() => (0, m.T_)(t, p), [t, p]),
            E = i.useRef(_),
            b = i.useRef(_);
        return (
            i.useEffect(() => {
                b.current = _;
            }),
            i.useEffect(() => {
                E.current = b.current;
            }, [t]),
            (0, r.jsx)(c.Text, {
                className: o()({
                    [h.fontCode]: l,
                    [h.bold]: d,
                    [h.inlineTimestamp]: n,
                }),
                variant: "text-xs/medium",
                tabularNumbers: s,
                color: a,
                scaleFontToUserSetting: f,
                "aria-label": E.current,
                children: _,
            })
        );
    },
    b = (e) => {
        var t, n;
        let { entry: i, textColor: a, hovered: o = !1, bold: l = !1, scaleFontToUserSetting: u = !1 } = e,
            f = (0, m.Jg)(i),
            p = (0, s.e7)([d.default], () => d.default.locale),
            h = (0, s.e7)([_.Z], () => _.Z.getMatchingActivity(i)),
            g =
                null != (n = null == h || null == (t = h.timestamps) ? void 0 : t.start)
                    ? n
                    : null == h
                      ? void 0
                      : h.created_at;
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
                    children: (0, m.GL)(i, p),
                });
    };
