"use strict";
n.d(t, { Ay: () => d, bB: () => f, l: () => E, mz: () => u });
var r = n(627968),
    i = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(353640);
let l = i.createContext(null);
function u(e) {
    let { stepConfigs: t, breadcrumbs: n, children: s } = e,
        a = i.useMemo(() => {
            var e, r;
            return (
                (e = t),
                (r = n),
                (0, o.v)((t, n) => ({
                    stepConfigs: e,
                    steps: e.map((e) => e.key).filter((e) => null != e),
                    step: null,
                    setStep(e) {
                        t({ step: e, previousStep: n().step });
                    },
                    breadcrumbsData: e
                        .filter((e) => null != e.key && e?.options?.useBreadcrumbLabel != null)
                        .map((e) => ({
                            id: e.key,
                            useBreadcrumbLabel: e.options.useBreadcrumbLabel,
                            sectionHeaderText: e.options.sectionHeaderText,
                        }))
                        .sort((e, t) => (null != r ? r.indexOf(e.id) - r.indexOf(t.id) : 0)),
                    previousStep: null,
                }))
            );
        }, [t, n]);
    return (0, r.jsx)(l, { value: a, children: s });
}
function d(e) {
    let t = i.useContext(l);
    return a()(null != t, "useSteps must be used inside StepContext"), t(e);
}
let c = (e) => e.step,
    _ = (e) => e.setStep;
function f() {
    return d(c);
}
function E() {
    return d(_);
}
