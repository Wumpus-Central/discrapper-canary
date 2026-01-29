n.d(t, {
    A: () => h,
}),
    n(896048);
var s = n(627968),
    r = n(64700),
    l = n(311907),
    i = n(397927),
    o = n(212245),
    a = n(287809),
    c = n(927578),
    u = n(987384),
    d = n(912630),
    p = n(965162),
    m = n(413339),
    O = n(952572),
    f = n(144830),
    j = n(577718),
    g = n(652215),
    b = n(693591),
    x = n(985018);

function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (s = s.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            s.forEach(function (t) {
                var s;
                (s = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: s,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = s);
            });
    }
    return e;
}

function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var s = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, s);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function h(e) {
    let {
            onLearnMore: t,
            selectedBackgroundOption: h,
            onSelectBackgroundOption: v,
            currentDeviceId: N,
            className: E,
        } = e,
        _ = (0, l.bG)([a.default], () => a.default.getCurrentUser()),
        [S, P] = r.useState(null),
        D = (0, O.A)(),
        I = c.Ay.canUseCustomBackgrounds(_);
    r.useEffect(() => {
        (0, u.HR)();
    }, []);
    let T = (0, l.cf)([d.A], () => (I ? d.A.videoFilterAssets : {})),
        k = r.useMemo(() => Object.values(T).filter((e) => e.type === j.yZ.BACKGROUND), [T]),
        C = (0, o.p)(),
        w = {
            isVideoBackgroundSupported: D,
            onSelectBackgroundOption: v,
            selectedBackgroundOption: h,
        },
        U = r.useRef(w);
    r.useEffect(() => {
        U.current = w;
    }),
        r.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: n } = U.current;
            e
                ? (0, m.S1)(n, N, {
                      track: !1,
                  }).catch(() => t(null))
                : null != n && t(null);
        }, [N]);
    let B = (e) => {
        v(e),
            (0, m.S1)(e, N, {
                location: C.location,
            })
                .then(() => P(null))
                .catch(() => {
                    P(x.intl.string(x.t.ejrSLe)),
                        (0, m.S1)(null, N, {
                            location: C.location,
                        });
                });
    };
    return D
        ? (0, s.jsx)("div", {
              className: E,
              children: (0, s.jsx)(i.D0$, {
                  label: x.intl.string(x.t.lZTUPs),
                  errorMessage: S,
                  children: (0, s.jsx)(f.A, {
                      canUseCustomBackgrounds: I,
                      customBackgroundOptions: k,
                      selectedOption: h,
                      onSelectOption: B,
                      onUpsellClick: () => {
                          (0, i.mMO)(async () => {
                              let { default: e } = await n.e("95743").then(n.bind(n, 210402));
                              return (n) =>
                                  (0, s.jsx)(
                                      e,
                                      A(y({}, n), {
                                          onLearnMore: t,
                                          analyticsSource: A(y({}, C.location), {
                                              object: g.ZSU.BUTTON_CTA,
                                          }),
                                      }),
                                  );
                          });
                      },
                      onAddBackgroundImage: function (e, t) {
                          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          return new Promise(async (s) => {
                              try {
                                  let s = await (0, u.F9)(e, j.yZ.BACKGROUND);
                                  B(s), (0, p.D1)(s, t.type === b.a.MP4, n), P(null);
                              } catch (e) {
                                  P(e.message);
                              }
                              s();
                          });
                      },
                  }),
              }),
          })
        : null;
}
