n.d(t, { Z: () => i }), n(47120), n(230036);
var r = n(192379);
function i(e) {
    var t;
    let { stepConfigs: n, breadcrumbs: i } = e,
        [o, a] = r.useState(null == (t = n[0]) ? void 0 : t.key),
        s = r.useRef(null);
    return (
        r.useEffect(() => {
            s.current = o;
        }, [s, o]),
        {
            steps: n.map((e) => e.key).filter((e) => null != e),
            step: o,
            setStep: a,
            breadcrumbsData: n
                .filter((e) => {
                    var t;
                    return null != e.key && (null == e || null == (t = e.options) ? void 0 : t.useBreadcrumbLabel) != null;
                })
                .map((e) => ({
                    id: e.key,
                    useBreadcrumbLabel: e.options.useBreadcrumbLabel
                }))
                .sort((e, t) => (null != i ? i.indexOf(e.id) - i.indexOf(t.id) : 0)),
            previousStepRef: s
        }
    );
}
