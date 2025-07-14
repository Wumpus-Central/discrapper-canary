r.d(t, { Z: () => d });
var n = r(255367);
r(73800);
var a = r(392711),
    i = r.n(a),
    l = r(481060),
    o = r(481250),
    s = r(513547),
    c = r(388032);
function d(e) {
    let { camera: t } = e;
    if (null == t) return (0, n.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE });
    let r = i().map(t, (e, t) => {
        if (!(s.al[t] || void 0 === e))
            return (0, n.jsx)(
                s.ck,
                {
                    label: t,
                    value: e
                },
                t
            );
    });
    return (0, n.jsx)(l.hjN, {
        tag: l.RB0.H2,
        title: c.intl.string(c.t['2AGBWF']),
        children: (0, o.a)(r)
    });
}
