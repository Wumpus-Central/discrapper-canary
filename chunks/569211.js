n.d(t, { Z: () => o }), n(47120);
var i = n(192379),
    l = n(585483),
    a = n(424602),
    r = n(783097),
    s = n(981631);
function o(e) {
    let { obstructedFromView: t, disabled: n } = e,
        o = a._f.getCurrentConfig({ location: 'inAppOAuth2ModalCallback' }, { autoTrackExposure: !1 }),
        [c, d] = i.useState(null),
        u = i.useRef(c);
    i.useInsertionEffect(() => {
        u.current = c;
    });
    let h = i.useMemo(() => (null != c ? (0, r.sl)(c) : null), [c]);
    i.useEffect(() => {
        n && d(null);
    }, [n]);
    let p = null != c && !t;
    return (
        i.useEffect(() => {
            if (!p) return;
            let e = setTimeout(() => {
                !t && d(null);
            }, 3000);
            return () => {
                clearTimeout(e);
            };
        }, [t, p]),
        i.useEffect(() => {
            if (t) return;
            let e = (e) => {
                    let { application: t } = e;
                    d(t), (u.current = t);
                },
                n = (e) => {
                    var t;
                    let { applicationId: n } = e;
                    (null === (t = u.current) || void 0 === t ? void 0 : t.id) === n && (d(null), (u.current = null));
                };
            return (
                l.S.subscribe(s.CkL.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, e),
                l.S.subscribe(s.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, n),
                () => {
                    l.S.unsubscribe(s.CkL.SHOW_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, e), l.S.unsubscribe(s.CkL.HIDE_APP_LAUNCHER_BUTTON_APP_INSTALLED_EDUCATION, n);
                }
            );
        }, [t]),
        {
            enabled: o.enabled,
            showsTooltip: o.showsTooltip,
            applicationDetails: h,
            shouldShow: p
        }
    );
}
