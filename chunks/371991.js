n.d(t, {
    Z: () => h,
    x: () => m,
});
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(706454),
    u = n(719247),
    d = n(561308),
    f = n(368176),
    p = n(288469),
    _ = n(14743);
let m = (e) => {
        let {
                entry: t,
                inline: n = !1,
                textColor: a,
                textTabularNumbers: s = !0,
                textFontCode: c = !0,
                hovered: u = !1,
                bold: m = !1,
                scaleFontToUserSetting: h = !1,
            } = e,
            { now: g } = (0, p.g)(u),
            { enabled: E } = f.Q.useConfig({ location: "active_timestamp" }),
            b = i.useMemo(() => (0, d.T_)(t, g), [t, g]),
            y = i.useRef(b),
            O = i.useRef(b);
        return (
            i.useEffect(() => {
                O.current = b;
            }),
            i.useEffect(() => {
                y.current = O.current;
            }, [t]),
            (0, r.jsx)(l.Text, {
                className: o()({
                    [_.fontCode]: !!E || c,
                    [_.bold]: !E && m,
                    [_.inlineTimestamp]: n,
                }),
                variant: E ? "text-xs/normal" : "text-xs/medium",
                tabularNumbers: s,
                color: a,
                scaleFontToUserSetting: h,
                "aria-label": y.current,
                children: b,
            })
        );
    },
    h = (e) => {
        var t, n;
        let { entry: i, textColor: a, hovered: o = !1, bold: f = !1, scaleFontToUserSetting: p = !1 } = e,
            _ = (0, d.Jg)(i),
            h = (0, s.e7)([c.default], () => c.default.locale),
            g = (0, s.e7)([u.Z], () => u.Z.getMatchingActivity(i)),
            E =
                null != (n = null == g || null == (t = g.timestamps) ? void 0 : t.start)
                    ? n
                    : null == g
                      ? void 0
                      : g.created_at;
        return null != E
            ? (0, r.jsx)(m, {
                  entry: { start: E },
                  textColor: a,
                  hovered: o,
                  bold: f,
                  scaleFontToUserSetting: p,
              })
            : _
              ? (0, r.jsx)(m, {
                    entry: i,
                    textColor: a,
                    hovered: o,
                    bold: f,
                    scaleFontToUserSetting: p,
                })
              : (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: a,
                    lineClamp: 1,
                    scaleFontToUserSetting: p,
                    children: (0, d.GL)(i, h),
                });
    };
