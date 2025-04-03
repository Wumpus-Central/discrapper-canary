n.d(t, { Z: () => s }), n(47120);
var r = n(192379),
    i = n(585483),
    l = n(424602),
    o = n(783097),
    a = n(981631);
function s(e) {
    let { obstructedFromView: t, disabled: n } = e,
        s = l._f.getCurrentConfig({ location: 'inAppOAuth2ModalCallback' }, { autoTrackExposure: !1 }),
        [c, u] = r.useState(null),
        d = r.useRef(c);
    r.useInsertionEffect(() => {
        d.current = c;
    });
    let p = r.useMemo(() => (null != c ? (0, o.sl)(c) : null), [c]);
    r.useEffect(() => {
        n && u(null);
    }, [n]);
    let h = null != c && !t;
    return (
        r.useEffect(() => {
            if (!h) return;
            let e = setTimeout(() => {
                t || u(null);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }, [t, h]),
        r.useEffect(() => {
            if (t) return;
            let e = (e) => {
                    let { application: t } = e;
                    u(t), (d.current = t);
                },
                n = (e) => {
                    var t;
                    let { applicationId: n } = e;
                    (null == (t = d.current) ? void 0 : t.id) === n && (u(null), (d.current = null));
                };
            return (
                i.S.subscribe(a.CkL.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, e),
                i.S.subscribe(a.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, n),
                () => {
                    i.S.unsubscribe(a.CkL.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, e), i.S.unsubscribe(a.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, n);
                }
            );
        }, [t]),
        {
            enabled: s.enabled,
            showsTooltip: s.showsTooltip,
            applicationDetails: p,
            shouldShow: h
        }
    );
}
