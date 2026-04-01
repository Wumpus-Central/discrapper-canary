"use strict";
n.d(t, { Ay: () => d, bB: () => p, l: () => h, mz: () => u });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(353640);
let l = i.createContext(null);
function u(e) {
    let { stepConfigs: t, breadcrumbs: n, children: s } = e,
        a = i.useMemo(() => c(t, n), [t, n]);
    return (0, r.jsx)(l, { value: a, children: s });
}
function c(e, t) {
    return (0, o.v)((n, r) => ({
        stepConfigs: e,
        steps: e.map((e) => e.key).filter((e) => null != e),
        step: null,
        setStep(e) {
            n({ step: e, previousStep: r().step });
        },
        breadcrumbsData: e
            .filter((e) => null != e.key && e?.options?.useBreadcrumbLabel != null)
            .map((e) => ({
                id: e.key,
                useBreadcrumbLabel: e.options.useBreadcrumbLabel,
                sectionHeaderText: e.options.sectionHeaderText,
            }))
            .sort((e, n) => (null != t ? t.indexOf(e.id) - t.indexOf(n.id) : 0)),
        previousStep: null,
    }));
}
function d(e) {
    let t = i.useContext(l);
    return a()(null != t, "useSteps must be used inside StepContext"), t(e);
}
let _ = (e) => e.step,
    f = (e) => e.setStep;
function p() {
    return d(_);
}
function h() {
    return d(f);
}
