n.d(t, { Z: () => r }), n(47120);
var i = n(192379);
function r(e) {
    var t;
    let { stepConfigs: n, breadcrumbs: r } = e,
        [a, s] = i.useState(null === (t = n[0]) || void 0 === t ? void 0 : t.key),
        o = i.useRef(null);
    return (
        i.useEffect(() => {
            o.current = a;
        }, [o, a]),
        {
            steps: n.map((e) => e.key).filter((e) => null != e),
            step: a,
            setStep: s,
            breadcrumbsData: n
                .filter((e) => {
                    var t;
                    return null != e.key && (null == e ? void 0 : null === (t = e.options) || void 0 === t ? void 0 : t.useBreadcrumbLabel) != null;
                })
                .map((e) => ({
                    id: e.key,
                    useBreadcrumbLabel: e.options.useBreadcrumbLabel
                }))
                .sort((e, t) => (null != r ? r.indexOf(e.id) - r.indexOf(t.id) : 0)),
            previousStepRef: o
        }
    );
}
