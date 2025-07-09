(n.d(t, { Z: () => _ }), n(388685));
var i = n(255367),
    r = n(73800),
    s = n(442837),
    a = n(481060),
    l = n(570140),
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
let x = {
    width: 387,
    height: 218
};
function _(e) {
    let { previewEnabled: t, onEnablePreview: n, onCancelPreview: _ } = e,
        j = p.Z.getCameraComponent(),
        [E, O] = r.useState((0, c.P)(g.default.getCurrentUser())),
        C = r.useRef(!1),
        v = r.useRef(E),
        S = (0, o.O)(),
        T = (0, s.e7)([p.Z], () => p.Z.isVideoAvailable());
    return (
        r.useEffect(
            () => () => {
                C.current && l.Z.wait(() => (0, d.Up)(v.current));
            },
            []
        ),
        (0, i.jsx)(m.Z, {
            selectedBackgroundOption: E,
            onSelectBackgroundOption: (e) => {
                ((C.current = !0), (v.current = e), O(e), (0, u.wG)(e, { location: S.location }).catch(h.dG4));
            },
            onCancelPreview: _,
            renderCamera: (e) =>
                t
                    ? (0, i.jsx)('div', {
                          className: b.cameraWrapper,
                          children: (0, i.jsxs)('div', {
                              className: b.camera,
                              children: [
                                  (0, i.jsx)(j, {
                                      deviceId: e,
                                      width: x.width,
                                      height: x.height,
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
                              (0, i.jsx)(a.ua7, {
                                  text: T ? null : f.intl.string(f.t['8jSzSU']),
                                  children: (e) => {
                                      var t, r;
                                      return (0, i.jsx)(
                                          a.zxk,
                                          ((t = (function (e) {
                                              for (var t = 1; t < arguments.length; t++) {
                                                  var n = null != arguments[t] ? arguments[t] : {},
                                                      i = Object.keys(n);
                                                  ('function' == typeof Object.getOwnPropertySymbols &&
                                                      (i = i.concat(
                                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                                          })
                                                      )),
                                                      i.forEach(function (t) {
                                                          var i;
                                                          ((i = n[t]),
                                                              t in e
                                                                  ? Object.defineProperty(e, t, {
                                                                        value: i,
                                                                        enumerable: !0,
                                                                        configurable: !0,
                                                                        writable: !0
                                                                    })
                                                                  : (e[t] = i));
                                                      }));
                                              }
                                              return e;
                                          })(
                                              {
                                                  variant: 'primary',
                                                  text: f.intl.string(f.t.JIf4v7)
                                              },
                                              e
                                          )),
                                          (r = r =
                                              {
                                                  onClick: n,
                                                  disabled: !T
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
