r.d(t, { Ay: () => c, Z8: () => y, bB: () => f, l: () => b, mz: () => o });
var n = r(627968),
    l = r(64700),
    a = r(284009),
    i = r.n(a),
    u = r(353640);
let s = l.createContext(null);
function o(e) {
    let { stepConfigs: t, breadcrumbs: r, children: a } = e,
        i = l.useMemo(() => {
            var e, n;
            return (
                (e = t),
                (n = r),
                (0, u.v)((t, r) => ({
                    stepConfigs: e,
                    steps: e.map((e) => e.key).filter((e) => null != e),
                    step: null != e[0] ? e[0].key : null,
                    setStep(e) {
                        t({ step: e, previousStep: r().step });
                    },
                    breadcrumbsData: e
                        .filter((e) => null != e.key && e?.options?.useBreadcrumbLabel != null)
                        .map((e) => ({
                            id: e.key,
                            useBreadcrumbLabel: e.options.useBreadcrumbLabel,
                            sectionHeaderText: e.options.sectionHeaderText,
                        }))
                        .sort((e, t) => (null != n ? n.indexOf(e.id) - n.indexOf(t.id) : 0)),
                    previousStep: null,
                }))
            );
        }, [t, r]);
    return (0, n.jsx)(s, { value: i, children: a });
}
function c(e) {
    let t = l.useContext(s);
    return i()(null != t, "useSteps must be used inside StepContext"), t(e);
}
function d(e) {
    return e.step;
}
function p(e) {
    return e.setStep;
}
function y() {
    let { step: e, stepConfigs: t } = c();
    return t.find((t) => t.key === e) ?? null;
}
function f() {
    return c(d);
}
function b() {
    return c(p);
}
