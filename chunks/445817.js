n.d(t, {
    Z: function () {
        return C;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    s = n(442837),
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
    let { previewEnabled: t, onEnablePreview: n, onCancelPreview: C } = e,
        T = g.Z.getCameraComponent(),
        [S, b] = r.useState((0, c.P)(h.default.getCurrentUser())),
        I = r.useRef(!1),
        N = r.useRef(S),
        v = (0, o.O)(),
        A = (0, s.e7)([g.Z], () => Object.values(g.Z.getVideoDevices()).length > 0);
    return (
        r.useEffect(
            () => () => {
                I.current && l.Z.wait(() => (0, d.Up)(N.current));
            },
            []
        ),
        (0, i.jsx)(m.Z, {
            selectedBackgroundOption: S,
            onSelectBackgroundOption: (e) => {
                (I.current = !0), (N.current = e), b(e), (0, u.wG)(e, { location: v.location }).catch(p.dG4);
            },
            onCancelPreview: C,
            renderCamera: (e) =>
                t
                    ? (0, i.jsx)('div', {
                          className: f.cameraWrapper,
                          children: (0, i.jsxs)('div', {
                              className: f.camera,
                              children: [
                                  (0, i.jsx)(T, {
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
                                  text: A ? null : x.intl.string(x.t['8jSzSU']),
                                  children: (e) =>
                                      (0, i.jsx)(a.Button, {
                                          ...e,
                                          onClick: n,
                                          disabled: !A,
                                          children: x.intl.string(x.t.JIf4v7)
                                      })
                              })
                          ]
                      })
        })
    );
}
