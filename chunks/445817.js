n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(570140),
    o = n(2052),
    c = n(932724),
    d = n(716161),
    u = n(672339),
    m = n(747545),
    h = n(131951),
    g = n(594174),
    _ = n(981631),
    x = n(388032),
    p = n(31181);
function E(e) {
    let { previewEnabled: t, onEnablePreview: n, onCancelPreview: E } = e,
        C = h.Z.getCameraComponent(),
        [f, T] = s.useState((0, c.P)(g.default.getCurrentUser())),
        N = s.useRef(!1),
        I = s.useRef(f),
        S = (0, o.O)(),
        b = (0, r.e7)([h.Z], () => h.Z.isVideoAvailable());
    return (
        s.useEffect(
            () => () => {
                N.current && a.Z.wait(() => (0, d.Up)(I.current));
            },
            []
        ),
        (0, i.jsx)(m.Z, {
            selectedBackgroundOption: f,
            onSelectBackgroundOption: (e) => {
                (N.current = !0), (I.current = e), T(e), (0, u.wG)(e, { location: S.location }).catch(_.dG4);
            },
            onCancelPreview: E,
            renderCamera: (e) =>
                t
                    ? (0, i.jsx)('div', {
                          className: p.cameraWrapper,
                          children: (0, i.jsxs)('div', {
                              className: p.camera,
                              children: [
                                  (0, i.jsx)(C, {
                                      deviceId: e,
                                      width: 387,
                                      height: 218,
                                      disabled: !t
                                  }),
                                  (0, i.jsx)(m.S, {})
                              ]
                          })
                      })
                    : (0, i.jsxs)('div', {
                          className: p.cameraWrapper,
                          children: [
                              (0, i.jsx)('div', { className: p.previewImage }),
                              (0, i.jsx)(l.ua7, {
                                  text: b ? null : x.intl.string(x.t['8jSzSU']),
                                  children: (e) =>
                                      (0, i.jsx)(l.zxk, {
                                          ...e,
                                          onClick: n,
                                          disabled: !b,
                                          children: x.intl.string(x.t.JIf4v7)
                                      })
                              })
                          ]
                      })
        })
    );
}
