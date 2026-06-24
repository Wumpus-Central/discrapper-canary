"use strict";
n.d(t, { Ay: () => c, Z8: () => h, bB: () => f, l: () => p, mz: () => u });
var i = n(627968),
    r = n(64700),
    s = n(284009),
    a = n.n(s),
    o = n(353640);
let l = r.createContext(null);
function u(e) {
    let { stepConfigs: t, breadcrumbs: n, children: s } = e,
        a = r.useMemo(() => {
            var e, i;
            return (
                (e = t),
                (i = n),
                (0, o.v)((t, n) => ({
                    stepConfigs: e,
                    steps: e.map((e) => e.key).filter((e) => null != e),
                    step: null != e[0] ? e[0].key : null,
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
                        .sort((e, t) => (null != i ? i.indexOf(e.id) - i.indexOf(t.id) : 0)),
                    previousStep: null,
                }))
            );
        }, [t, n]);
    return (0, i.jsx)(l, { value: a, children: s });
}
function c(e) {
    let t = r.useContext(l);
    return a()(null != t, "useSteps must be used inside StepContext"), t(e);
}
function d(e) {
    return e.step;
}
function _(e) {
    return e.setStep;
}
function h() {
    let { step: e, stepConfigs: t } = c();
    return t.find((t) => t.key === e) ?? null;
}
function f() {
    return c(d);
}
function p() {
    return c(_);
}
