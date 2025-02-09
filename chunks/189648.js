n.d(t, { Z: () => c });
var r = n(200651);
n(192379);
var a = n(392711),
    i = n.n(a),
    o = n(481060),
    l = n(481250),
    s = n(513547),
    d = n(388032);
function c(e) {
    let { camera: t } = e;
    if (null == t) return (0, r.jsx)(o.$jN, { type: o.$jN.Type.SPINNING_CIRCLE });
    let n = i().map(t, (e, t) => {
        if (!(s.al[t] || void 0 === e))
            return (0, r.jsx)(
                s.ck,
                {
                    label: t,
                    value: e
                },
                t
            );
    });
    return (0, r.jsx)(o.hjN, {
        tag: o.RB0.H2,
        title: d.intl.string(d.t['2AGBWF']),
        children: (0, l.a)(n)
    });
}
