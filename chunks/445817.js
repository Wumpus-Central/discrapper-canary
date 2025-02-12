n.d(t, { Z: () => E }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    a = n(570140),
    o = n(2052),
    c = n(932724),
    d = n(716161),
    u = n(672339),
    h = n(747545),
    m = n(131951),
    g = n(594174),
    x = n(981631),
    _ = n(388032),
    p = n(991520);
function E(e) {
    let { previewEnabled: t, onEnablePreview: n, onCancelPreview: E } = e,
        C = m.Z.getCameraComponent(),
        [f, N] = s.useState((0, c.P)(g.default.getCurrentUser())),
        I = s.useRef(!1),
        T = s.useRef(f),
        S = (0, o.O)(),
        j = (0, l.e7)([m.Z], () => m.Z.isVideoAvailable());
    return (
        s.useEffect(
            () => () => {
                I.current && a.Z.wait(() => (0, d.Up)(T.current));
            },
            []
        ),
        (0, i.jsx)(h.Z, {
            selectedBackgroundOption: f,
            onSelectBackgroundOption: (e) => {
                (I.current = !0), (T.current = e), N(e), (0, u.wG)(e, { location: S.location }).catch(x.dG4);
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
                                  (0, i.jsx)(h.S, {})
                              ]
                          })
                      })
                    : (0, i.jsxs)('div', {
                          className: p.cameraWrapper,
                          children: [
                              (0, i.jsx)('div', { className: p.previewImage }),
                              (0, i.jsx)(r.ua7, {
                                  text: j ? null : _.intl.string(_.t['8jSzSU']),
                                  children: (e) =>
                                      (0, i.jsx)(r.zxk, {
                                          ...e,
                                          onClick: n,
                                          disabled: !j,
                                          children: _.intl.string(_.t.JIf4v7)
                                      })
                              })
                          ]
                      })
        })
    );
}
