n.d(t, { Z: () => T }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(442837),
    o = n(481060),
    s = n(570140),
    l = n(2052),
    c = n(932724),
    u = n(716161),
    d = n(672339),
    f = n(747545),
    _ = n(131951),
    p = n(594174),
    h = n(981631),
    m = n(388032),
    g = n(766625);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = 387,
    I = 218;
function T(e) {
    let { previewEnabled: t, onEnablePreview: n, onCancelPreview: E } = e,
        y = _.Z.getCameraComponent(),
        [T, S] = i.useState((0, c.P)(p.default.getCurrentUser())),
        A = i.useRef(!1),
        C = i.useRef(T),
        N = (0, l.O)(),
        R = (0, a.e7)([_.Z], () => _.Z.isVideoAvailable());
    i.useEffect(
        () => () => {
            A.current && s.Z.wait(() => (0, u.Up)(C.current));
        },
        [],
    );
    let P = (e) => {
            (A.current = !0), (C.current = e), S(e), (0, d.wG)(e, { location: N.location }).catch(h.dG4);
        },
        w = (e) =>
            t
                ? (0, r.jsx)("div", {
                      className: g.cameraWrapper,
                      children: (0, r.jsxs)("div", {
                          className: g.camera,
                          children: [
                              (0, r.jsx)(y, {
                                  deviceId: e,
                                  width: v,
                                  height: I,
                                  disabled: !t,
                              }),
                              (0, r.jsx)(f.S, {}),
                          ],
                      }),
                  })
                : (0, r.jsxs)("div", {
                      className: g.cameraWrapper,
                      children: [
                          (0, r.jsx)("div", { className: g.previewImage }),
                          (0, r.jsx)(o.ua7, {
                              text: R ? null : m.intl.string(m.t["8jSzSU"]),
                              children: (e) =>
                                  (0, r.jsx)(
                                      o.zxk,
                                      O(
                                          b(
                                              {
                                                  variant: "primary",
                                                  text: m.intl.string(m.t.JIf4v7),
                                              },
                                              e,
                                          ),
                                          {
                                              onClick: n,
                                              disabled: !R,
                                          },
                                      ),
                                  ),
                          }),
                      ],
                  });
    return (0, r.jsx)(f.Z, {
        selectedBackgroundOption: T,
        onSelectBackgroundOption: P,
        onCancelPreview: E,
        renderCamera: w,
    });
}
