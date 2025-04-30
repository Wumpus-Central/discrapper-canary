n.d(t, { Z: () => x }), n(388685);
var i = n(200651),
    r = n(192379),
    s = n(442837),
    l = n(481060),
    a = n(570140),
    o = n(2052),
    c = n(932724),
    d = n(716161),
    u = n(672339),
    m = n(747545),
    p = n(131951),
    g = n(594174),
    h = n(981631),
    f = n(388032),
    b = n(959963);
let _ = {
    width: 387,
    height: 218
};
function x(e) {
    let { previewEnabled: t, onEnablePreview: n, onCancelPreview: x } = e,
        E = p.Z.getCameraComponent(),
        [j, C] = r.useState((0, c.P)(g.default.getCurrentUser())),
        O = r.useRef(!1),
        S = r.useRef(j),
        v = (0, o.O)(),
        T = (0, s.e7)([p.Z], () => p.Z.isVideoAvailable());
    return (
        r.useEffect(
            () => () => {
                O.current && a.Z.wait(() => (0, d.Up)(S.current));
            },
            []
        ),
        (0, i.jsx)(m.Z, {
            selectedBackgroundOption: j,
            onSelectBackgroundOption: (e) => {
                (O.current = !0), (S.current = e), C(e), (0, u.wG)(e, { location: v.location }).catch(h.dG4);
            },
            onCancelPreview: x,
            renderCamera: (e) =>
                t
                    ? (0, i.jsx)('div', {
                          className: b.cameraWrapper,
                          children: (0, i.jsxs)('div', {
                              className: b.camera,
                              children: [
                                  (0, i.jsx)(E, {
                                      deviceId: e,
                                      width: _.width,
                                      height: _.height,
                                      disabled: !t
                                  }),
                                  (0, i.jsx)(m.S, {})
                              ]
                          })
                      })
                    : (0, i.jsxs)('div', {
                          className: b.cameraWrapper,
                          children: [
                              (0, i.jsx)('div', { className: b.previewImage }),
                              (0, i.jsx)(l.ua7, {
                                  text: T ? null : f.intl.string(f.t['8jSzSU']),
                                  children: (e) => {
                                      var t, r;
                                      return (0, i.jsx)(
                                          l.zxk,
                                          ((t = (function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var n = null != arguments[t] ? arguments[t] : {},
                                                      i = Object.keys(n);
                                                  'function' == typeof Object.getOwnPropertySymbols &&
                                                      (i = i.concat(
                                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                          })
                                                      )),
                                                      i.forEach(function (t) {
                                                          var i;
                                                          (i = n[t]),
                                                              t in e
                                                                  ? Object.defineProperty(e, t, {
                                                                        value: i,
                                                                        enumerable: !0,
                                                                        configurable: !0,
                                                                        writable: !0
                                                                    })
                                                                  : (e[t] = i);
                                                      });
                                              }
                                              return e;
                                          })({}, e)),
                                          (r = r =
                                              {
                                                  onClick: n,
                                                  disabled: !T,
                                                  children: f.intl.string(f.t.JIf4v7)
                                              }),
                                          Object.getOwnPropertyDescriptors
                                              ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                                              : (function (e, t) {
                                                    var n = Object.keys(e);
                                                    if (Object.getOwnPropertySymbols) {
                                                        var i = Object.getOwnPropertySymbols(e);
                                                        n.push.apply(n, i);
                                                    }
                                                    return n;
                                                })(Object(r)).forEach(function (e) {
                                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                                                }),
                                          t)
                                      );
                                  }
                              })
                          ]
                      })
        })
    );
}
