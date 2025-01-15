r.d(t, {
    Z: function () {
        return d;
    }
});
var n = r(200651);
r(192379);
var a = r(392711),
    i = r.n(a),
    l = r(481060),
    s = r(481250),
    o = r(513547),
    c = r(388032);
function d(e) {
    let { camera: t } = e;
    if (null == t) return (0, n.jsx)(l.Spinner, { type: l.Spinner.Type.SPINNING_CIRCLE });
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
    return (0, n.jsx)(l.FormSection, {
        tag: l.FormTitleTags.H2,
        title: c.intl.string(c.t['2AGBWF']),
        children: (0, s.a)(r)
    });
}
