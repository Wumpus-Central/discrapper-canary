s.d(t, { A: () => _ });
var n = s(627968),
    l = s(64700),
    i = s(311907),
    a = s(397927),
    o = s(212245),
    r = s(287809),
    c = s(927578),
    d = s(987384),
    u = s(912630),
    m = s(965162),
    x = s(413339),
    p = s(952572),
    A = s(144830),
    g = s(577718),
    f = s(652215),
    j = s(693591),
    N = s(985018);
function _(e) {
    let {
            onLearnMore: t,
            selectedBackgroundOption: _,
            onSelectBackgroundOption: h,
            currentDeviceId: O,
            className: E,
        } = e,
        v = (0, i.bG)([r.default], () => r.default.getCurrentUser()),
        [I, T] = l.useState(null),
        C = (0, p.A)(),
        S = c.Ay.canUseCustomBackgrounds(v);
    l.useEffect(() => {
        (0, d.HR)();
    }, []);
    let k = (0, i.cf)([u.A], () => (S ? u.A.videoFilterAssets : {})),
        b = l.useMemo(() => Object.values(k).filter((e) => e.type === g.yZ.BACKGROUND), [k]),
        D = (0, o.p)(),
        U = { isVideoBackgroundSupported: C, onSelectBackgroundOption: h, selectedBackgroundOption: _ },
        y = l.useRef(U);
    l.useEffect(() => {
        y.current = U;
    }),
        l.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: s } = y.current;
            e ? (0, x.S1)(s, O, { track: !1 }).catch(() => t(null)) : null != s && t(null);
        }, [O]);
    let B = (e) => {
        h(e),
            (0, x.S1)(e, O, { location: D.location })
                .then(() => T(null))
                .catch(() => {
                    T(N.intl.string(N.t.ejrSLe)), (0, x.S1)(null, O, { location: D.location });
                });
    };
    return C
        ? (0, n.jsx)("div", {
              className: E,
              children: (0, n.jsx)(a.D0$, {
                  label: N.intl.string(N.t.lZTUPs),
                  errorMessage: I,
                  children: (0, n.jsx)(A.A, {
                      canUseCustomBackgrounds: S,
                      customBackgroundOptions: b,
                      selectedOption: _,
                      onSelectOption: B,
                      onUpsellClick: () => {
                          (0, a.mMO)(async () => {
                              let { default: e } = await s.e("95743").then(s.bind(s, 210402));
                              return (s) =>
                                  (0, n.jsx)(e, {
                                      ...s,
                                      onLearnMore: t,
                                      analyticsSource: { ...D.location, object: f.ZSU.BUTTON_CTA },
                                  });
                          });
                      },
                      onAddBackgroundImage: function (e, t) {
                          let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          return new Promise(async (n) => {
                              try {
                                  let n = await (0, d.F9)(e, g.yZ.BACKGROUND);
                                  B(n), (0, m.D1)(n, t.type === j.a.MP4, s), T(null);
                              } catch (e) {
                                  T(e.message);
                              }
                              n();
                          });
                      },
                  }),
              }),
          })
        : null;
}
