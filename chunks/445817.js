n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    a = n(481060),
    l = n(570140),
    o = n(2052),
    c = n(932724),
    d = n(716161),
    u = n(672339),
    m = n(747545),
    g = n(131951),
    h = n(594174),
    p = n(981631),
    x = n(388032),
    f = n(31181);
let _ = 387,
    E = 218;
function C(e) {
    let { previewEnabled: t, onEnablePreview: n } = e,
        C = g.Z.getCameraComponent(),
        [T, S] = s.useState((0, c.P)(h.default.getCurrentUser())),
        b = s.useRef(!1),
        I = s.useRef(T),
        N = (0, o.O)(),
        v = (0, r.e7)([g.Z], () => Object.values(g.Z.getVideoDevices()).length > 0);
    return (
        s.useEffect(
            () => () => {
                b.current && l.Z.wait(() => (0, d.Up)(I.current));
            },
            []
        ),
        (0, i.jsx)(m.Z, {
            selectedBackgroundOption: T,
            onSelectBackgroundOption: (e) => {
                (b.current = !0), (I.current = e), S(e), (0, u.wG)(e, { location: N.location }).catch(p.dG4);
            },
            renderCamera: (e) =>
                t
                    ? (0, i.jsx)('div', {
                          className: f.cameraWrapper,
                          children: (0, i.jsxs)('div', {
                              className: f.camera,
                              children: [
                                  (0, i.jsx)(C, {
                                      deviceId: e,
                                      width: _,
                                      height: E,
                                      disabled: !t
                                  }),
                                  (0, i.jsx)(m.S, {})
                              ]
                          })
                      })
                    : (0, i.jsxs)('div', {
                          className: f.cameraWrapper,
                          children: [
                              (0, i.jsx)('div', { className: f.previewImage }),
                              (0, i.jsx)(a.Tooltip, {
                                  text: v ? null : x.intl.string(x.t['8jSzSU']),
                                  children: (e) =>
                                      (0, i.jsx)(a.Button, {
                                          ...e,
                                          onClick: n,
                                          disabled: !v,
                                          children: x.intl.string(x.t.JIf4v7)
                                      })
                              })
                          ]
                      })
        })
    );
}
