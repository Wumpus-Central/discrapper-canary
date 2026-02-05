"use strict";
n.d(t, { A: () => i });
var r = n(64700);
function i(e) {
    let { stepConfigs: t, breadcrumbs: n } = e,
        [i, a] = r.useState(t[0]?.key),
        s = r.useRef(null);
    return (
        r.useEffect(() => {
            s.current = i;
        }, [s, i]),
        {
            steps: t.map((e) => e.key).filter((e) => null != e),
            step: i,
            setStep: a,
            breadcrumbsData: t
                .filter((e) => null != e.key && e?.options?.useBreadcrumbLabel != null)
                .map((e) => ({
                    id: e.key,
                    useBreadcrumbLabel: e.options.useBreadcrumbLabel,
                    sectionHeaderText: e.options.sectionHeaderText,
                }))
                .sort((e, t) => (null != n ? n.indexOf(e.id) - n.indexOf(t.id) : 0)),
            previousStepRef: s,
        }
    );
}
