s.d(t, { A: () => N });
var n = s(627968),
    l = s(64700),
    i = s(311907),
    a = s(192308),
    o = s(452027),
    r = s(212245),
    c = s(287809),
    d = s(927578),
    u = s(987384),
    m = s(912630),
    x = s(965162),
    p = s(413339),
    g = s(952572),
    A = s(144830),
    h = s(577718),
    v = s(652215),
    f = s(693591),
    j = s(985018);
function N(e) {
    let {
            onLearnMore: t,
            selectedBackgroundOption: N,
            onSelectBackgroundOption: _,
            currentDeviceId: I,
            className: D,
        } = e,
        O = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        [E, C] = l.useState(null),
        b = (0, g.A)(),
        T = d.Ay.canUseCustomBackgrounds(O);
    l.useEffect(() => {
        (0, u.HR)();
    }, []);
    let S = (0, i.cf)([m.A], () => (T ? m.A.videoFilterAssets : {})),
        U = l.useMemo(() => Object.values(S).filter((e) => e.type === h.yZ.BACKGROUND), [S]),
        y = (0, r.p)(),
        k = { isVideoBackgroundSupported: b, onSelectBackgroundOption: _, selectedBackgroundOption: N },
        M = l.useRef(k);
    l.useEffect(() => {
        M.current = k;
    }),
        l.useEffect(() => {
            let { isVideoBackgroundSupported: e, onSelectBackgroundOption: t, selectedBackgroundOption: s } = M.current;
            e ? (0, p.S1)(s, I, { track: !1 }).catch(() => t(null)) : null != s && t(null);
        }, [I]);
    let w = (e) => {
        _(e),
            (0, p.S1)(e, I, { location: y.location })
                .then(() => C(null))
                .catch(() => {
                    C(j.intl.string(j.t.ejrSLe)), (0, p.S1)(null, I, { location: y.location });
                });
    };
    return b
        ? (0, n.jsx)("div", {
              className: D,
              children: (0, n.jsx)(o.D, {
                  label: j.intl.string(j.t.lZTUPs),
                  errorMessage: E,
                  children: (0, n.jsx)(A.A, {
                      canUseCustomBackgrounds: T,
                      customBackgroundOptions: U,
                      selectedOption: N,
                      onSelectOption: w,
                      onUpsellClick: () => {
                          (0, a.openModalLazy)(async () => {
                              let { default: e } = await s.e("95743").then(s.bind(s, 210402));
                              return (s) =>
                                  (0, n.jsx)(e, {
                                      ...s,
                                      onLearnMore: t,
                                      analyticsSource: { ...y.location, object: v.ZSU.BUTTON_CTA },
                                  });
                          });
                      },
                      onAddBackgroundImage: function (e, t) {
                          let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                          return new Promise(async (n) => {
                              try {
                                  let n = await (0, u.F9)(e, h.yZ.BACKGROUND);
                                  w(n), (0, x.D1)(n, t.type === f.a.MP4, s), C(null);
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
