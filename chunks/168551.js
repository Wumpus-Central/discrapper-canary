n.d(t, {
    PQ: () => p,
    ZP: () => g,
    e3: () => u.e3,
});
var r = n(647438),
    i = n(120356),
    a = n.n(i),
    o = n(392711),
    s = n(442837),
    l = n(210887),
    c = n(581883),
    u = n(575196),
    d = n(233398),
    f = n(514361),
    _ = n(803038);
let p = "data-client-themes",
    h = () => {
        let e = (0, s.e7)([f.Z], () => f.Z.gradientPreset);
        return r.useMemo(() => {
            if (null == e) return null;
            let t = f.Z.getLinearGradient();
            return null == t ? null : (0, u.yf)(e, t);
        }, [e]);
    };
function m() {
    let e = _.Mc.useExperiment({ location: "RootThemeContextProvider" }).enabled,
        t = (0, s.e7)([l.Z], () => l.Z.theme),
        { colors: n, chassisMixAmount: i, gradientAngle: a, setAll: f } = (0, d.Ig)(),
        p = (0, s.e7)([c.Z], () => {
            var e, t;
            return null == (t = c.Z.settings.appearance) || null == (e = t.clientThemeSettings)
                ? void 0
                : e.customUserThemeSettings;
        }),
        h = r.useRef(void 0);
    return (
        r.useEffect(() => {
            if (!(0, o.isEqual)(p, h.current)) {
                var e, t, n;
                (h.current = p),
                    f({
                        colors: null != (e = null == p ? void 0 : p.colors) ? e : [],
                        gradientAngle: null != (t = null == p ? void 0 : p.gradientAngle) ? t : 0,
                        chassisMixAmount: null != (n = null == p ? void 0 : p.baseMix) ? n : d.BH,
                    });
            }
        }, [p, f]),
        r.useMemo(() => (e && 0 !== n.length ? (0, u.gj)(n, a, i, t) : null), [n, i, a, e, t])
    );
}
function g() {
    let e = h(),
        t = m();
    return null != t
        ? {
              clientThemesCSS: t,
              clientThemesClassName: a()(u.e3, u.pX),
          }
        : null === e
          ? {
                clientThemesCSS: "",
                clientThemesClassName: "",
            }
          : {
                clientThemesCSS: e,
                clientThemesClassName: u.e3,
            };
}
