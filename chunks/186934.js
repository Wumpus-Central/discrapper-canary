n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(442837),
    l = n(481060),
    o = n(846027),
    c = n(921801),
    d = n(131951),
    u = n(726985),
    m = n(388032),
    g = n(232186);
function h(e) {
    let { refreshStyles: t = !1 } = e,
        { sidechainEnabled: n, sidechainStrength: r } = (0, a.cj)([d.Z], () => ({
            sidechainEnabled: d.Z.getSidechainCompression(),
            sidechainStrength: d.Z.getSidechainCompressionStrength()
        })),
        h = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(l.FormSwitch, {
                    className: t ? null : s()(g.marginTop8, g.marginBottom20),
                    value: n,
                    onChange: (e) => o.Z.setSidechainCompression(e),
                    note: m.intl.string(m.t.IwZbbG),
                    hideBorder: t,
                    children: m.intl.string(m.t['/jwMtr'])
                }),
                (0, i.jsx)(l.FormItem, {
                    title: m.intl.string(m.t.fhEzfn),
                    children: (0, i.jsx)(l.Slider, {
                        initialValue: r,
                        minValue: 1,
                        onValueChange: (e) => o.Z.setSidechainCompressionStrength(e)
                    })
                })
            ]
        });
    return (0, i.jsx)(c.F, {
        setting: u.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION,
        children: t
            ? h
            : (0, i.jsx)(l.FormSection, {
                  className: g.marginBottom20,
                  children: h
              })
    });
}
