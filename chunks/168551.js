n.d(t, {
    PQ: () => f,
    ZP: () => h,
    e3: () => l.e3
});
var r = n(73800),
    i = n(392711),
    a = n(442837),
    o = n(210887),
    s = n(581883),
    l = n(575196),
    c = n(233398),
    u = n(514361),
    d = n(803038);
let f = 'data-client-themes',
    _ = () => {
        let e = (0, a.e7)([u.Z], () => u.Z.gradientPreset);
        return r.useMemo(() => {
            if (null == e) return null;
            let t = u.Z.getLinearGradient();
            return null == t ? null : (0, l.yf)(e, t);
        }, [e]);
    };
function p() {
    let e = d.M.useExperiment({ location: 'RootThemeContextProvider' }).enabled,
        t = (0, a.e7)([o.Z], () => o.Z.theme),
        { colors: n, chassisMixAmount: u, gradientAngle: f, setAll: _ } = (0, c.Ig)(),
        p = (0, a.e7)([s.Z], () => {
            var e, t;
            return null == (t = s.Z.settings.appearance) || null == (e = t.clientThemeSettings) ? void 0 : e.customUserThemeSettings;
        }),
        h = r.useRef(void 0);
    return (
        r.useEffect(() => {
            if (!(0, i.isEqual)(p, h.current)) {
                var e, t, n;
                ((h.current = p),
                    _({
                        colors: null != (e = null == p ? void 0 : p.colors) ? e : [],
                        gradientAngle: null != (t = null == p ? void 0 : p.gradientAngle) ? t : 0,
                        chassisMixAmount: null != (n = null == p ? void 0 : p.baseMix) ? n : c.BH
                    }));
            }
        }, [p, _]),
        r.useMemo(() => (e && 0 !== n.length ? (0, l.gj)(n, f, u, t) : null), [n, u, f, e, t])
    );
}
function h() {
    let e = _(),
        t = p();
    return null != t
        ? {
              clientThemesCSS: t,
              clientThemesClassName: l.e3
          }
        : null === e
          ? {
                clientThemesCSS: '',
                clientThemesClassName: ''
            }
          : {
                clientThemesCSS: e,
                clientThemesClassName: l.e3
            };
}
