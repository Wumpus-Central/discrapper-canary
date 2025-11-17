n.d(t, { Z: () => d });
var r = n(54381),
    a = n(392711),
    i = n.n(a),
    l = n(481060),
    o = n(481250),
    s = n(513547),
    c = n(388032);
function d(e) {
    let { camera: t } = e;
    if (null == t) return (0, r.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE });
    let n = i().map(t, (e, t) => {
        if (!(s.al[t] || void 0 === e))
            return (0, r.jsx)(
                s.ck,
                {
                    label: t,
                    value: e,
                },
                t,
            );
    });
    return (0, r.jsxs)(l.Kqy, {
        children: [
            (0, r.jsx)(l.Heading, {
                variant: "heading-md/medium",
                children: c.intl.string(c.t["2AGBWH"]),
            }),
            (0, o.VE)(n),
        ],
    });
}
