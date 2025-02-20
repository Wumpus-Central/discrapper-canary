r.d(t, { Z: () => d });
var n = r(200651);
r(192379);
var a = r(392711),
    i = r.n(a),
    s = r(481060),
    l = r(481250),
    o = r(513547),
    c = r(388032);
function d(e) {
    let { camera: t } = e;
    if (null == t) return (0, n.jsx)(s.$jN, { type: s.$jN.Type.SPINNING_CIRCLE });
    let r = i().map(t, (e, t) => {
        if (!(o.al[t] || void 0 === e))
            return (0, n.jsx)(
                o.ck,
                {
                    label: t,
                    value: e
                },
                t
            );
    });
    return (0, n.jsx)(s.hjN, {
        tag: s.RB0.H2,
        title: c.NW.string(c.t['2AGBWF']),
        children: (0, l.a)(r)
    });
}
