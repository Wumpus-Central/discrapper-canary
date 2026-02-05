"use strict";
n.d(t, { A: () => m, z: () => h });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    u = n(773669),
    c = n(574520),
    d = n(583846),
    _ = n(977788),
    f = n(809854),
    p = n(181691);
let h = (e) => {
        let {
                entry: t,
                inline: n = !1,
                textColor: a,
                textTabularNumbers: o = !0,
                textFontCode: u = !0,
                hovered: c = !1,
                bold: h = !1,
                scaleFontToUserSetting: m = !1,
            } = e,
            { now: g } = (0, f.e)(c),
            { enabled: E } = _.e.useConfig({ location: "active_timestamp" }),
            A = i.useMemo(() => (0, d.W6)(t, g), [t, g]),
            I = i.useRef(A),
            T = i.useRef(A);
        return (
            i.useEffect(() => {
                T.current = A;
            }),
            i.useEffect(() => {
                I.current = T.current;
            }, [t]),
            (0, r.jsx)(l.Text, {
                className: s()({ [p.$N]: !!E || u, [p.Cr]: !E && h, [p.E1]: n }),
                variant: E ? "text-xs/normal" : "text-xs/medium",
                tabularNumbers: o,
                color: a,
                scaleFontToUserSetting: m,
                "aria-label": I.current,
                children: A,
            })
        );
    },
    m = (e) => {
        let { entry: t, textColor: n, hovered: i = !1, bold: a = !1, scaleFontToUserSetting: s = !1 } = e,
            _ = (0, d.Hd)(t),
            f = (0, o.bG)([u.default], () => u.default.locale),
            p = (0, o.bG)([c.A], () => c.A.getMatchingActivity(t)),
            m = p?.timestamps?.start ?? p?.created_at;
        return null != m
            ? (0, r.jsx)(h, { entry: { start: m }, textColor: n, hovered: i, bold: a, scaleFontToUserSetting: s })
            : _
              ? (0, r.jsx)(h, { entry: t, textColor: n, hovered: i, bold: a, scaleFontToUserSetting: s })
              : (0, r.jsx)(l.Text, {
                    variant: "text-xs/normal",
                    color: n,
                    lineClamp: 1,
                    scaleFontToUserSetting: s,
                    children: (0, d.aJ)(t, f),
                });
    };
