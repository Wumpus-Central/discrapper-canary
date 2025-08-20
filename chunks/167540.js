n.d(t, { Z: () => E }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(921801),
    u = n(131951),
    d = n(962100),
    f = n(445817),
    _ = n(726985),
    p = n(65154),
    h = n(388032),
    m = n(197571);
function g() {
    return (0, r.jsx)(l.ToO, {
        type: l.sje.PRIMARY,
        title: h.intl.string(h.t.XLw6FB),
        body: h.intl.string(h.t.wVjKGh),
        button: (0, r.jsx)("div", {
            "data-button-hoisted-classname-wrapper": !0,
            className: m.marginTop20,
            children: (0, r.jsx)(l.zxk, {
                variant: "primary",
                size: "sm",
                text: h.intl.string(h.t.BK8LKy),
                onClick: () => (0, d.y)("Video unsupported browser"),
            }),
        }),
    });
}
function E(e) {
    let { refreshStyles: t = !1 } = e,
        n = (0, s.e7)([u.Z], () => u.Z.supports(p.AN.VIDEO)),
        [a, d] = i.useState(!1),
        E = (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.F, {
                    setting: _.s6.VOICE_AND_VIDEO_VIDEO_CAMERA,
                    children: (0, r.jsx)(f.Z, {
                        previewEnabled: a,
                        onEnablePreview: () => d(!0),
                        onCancelPreview: () => d(!1),
                    }),
                }),
                !n && (0, r.jsx)(g, {}),
            ],
        });
    return t
        ? E
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(l.y5t, {
                      component: (0, r.jsx)(l.vwX, {
                          tag: l.RB0.H1,
                          className: m.marginBottom20,
                          children: h.intl.string(h.t.LKzQSE),
                      }),
                      children: E,
                  }),
                  (0, r.jsx)(l.$i$, { className: o()(m.marginBottom40, m.marginTop40) }),
              ],
          });
}
