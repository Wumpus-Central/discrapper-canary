s.d(t, { A: () => h });
var n = s(627968),
    i = s(64700),
    l = s(311907),
    a = s(397927),
    o = s(212245),
    r = s(287809),
    c = s(927578),
    d = s(987384),
    u = s(912630),
    m = s(965162),
    x = s(413339),
    p = s(952572),
    g = s(144830),
    A = s(577718),
    v = s(652215),
    f = s(693591),
    N = s(985018);
function h(e) {
    let {
            onLearnMore: t,
            selectedBackgroundOption: h,
            onSelectBackgroundOption: j,
            currentDeviceId: O,
            className: _,
        } = e,
        D = (0, l.bG)([r.default], () => r.default.getCurrentUser()),
        [I, C] = i.useState(null),
        T = (0, p.A)(),
        E = c.Ay.canUseCustomBackgrounds(D);
    i.useEffect(() => {
        (0, d.HR)();
    }, []);
    let b = (0, l.cf)([u.A], () => (E ? u.A.videoFilterAssets : {})),
        S = i.useMemo(() => Object.values(b).filter((e) => e.type === A.yZ.BACKGROUND), [b]),
        U = (0, o.p)(),
        k = { isVideoBackgroundSupported: T, onSelectBackgroundOption: j, selectedBackgroundOption: h },
        y = i.useRef(k);
    i.useEffect(() => {
        y.current = k;
    }),
        i.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: s } = y.current;
            e ? (0, x.S1)(s, O, { track: !1 }).catch(() => t(null)) : null != s && t(null);
        }, [O]);
    let M = (e) => {
        j(e),
            (0, x.S1)(e, O, { location: U.location })
                .then(() => C(null))
                .catch(() => {
                    C(N.intl.string(N.t.ejrSLe)), (0, x.S1)(null, O, { location: U.location });
                });
    };
    return T
        ? (0, n.jsx)("div", {
              className: _,
              children: (0, n.jsx)(a.D0$, {
                  label: N.intl.string(N.t.lZTUPs),
                  errorMessage: I,
                  children: (0, n.jsx)(g.A, {
                      canUseCustomBackgrounds: E,
                      customBackgroundOptions: S,
                      selectedOption: h,
                      onSelectOption: M,
                      onUpsellClick: () => {
                          (0, a.mMO)(async () => {
                              let { default: e } = await s.e("95743").then(s.bind(s, 210402));
                              return (s) =>
                                  (0, n.jsx)(e, {
                                      ...s,
                                      onLearnMore: t,
                                      analyticsSource: { ...U.location, object: v.ZSU.BUTTON_CTA },
                                  });
                          });
                      },
                      onAddBackgroundImage: function (e, t) {
                          let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          return new Promise(async (n) => {
                              try {
                                  let n = await (0, d.F9)(e, A.yZ.BACKGROUND);
                                  M(n), (0, m.D1)(n, t.type === f.a.MP4, s), C(null);
                              } catch (e) {
                                  C(e.message);
                              }
                              n();
                          });
                      },
                  }),
              }),
          })
        : null;
}
