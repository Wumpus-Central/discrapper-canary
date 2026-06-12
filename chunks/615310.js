r.d(t, { Ay: () => c, bB: () => y, l: () => f, mz: () => o });
var n = r(627968),
    a = r(64700),
    l = r(284009),
    i = r.n(l),
    u = r(353640);
let s = a.createContext(null);
function o(e) {
    let { stepConfigs: t, breadcrumbs: r, children: l } = e,
        i = a.useMemo(() => {
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
    return (0, n.jsx)(s, { value: i, children: l });
}
function c(e) {
    let t = a.useContext(s);
    return i()(null != t, "useSteps must be used inside StepContext"), t(e);
}
let d = (e) => e.step,
    p = (e) => e.setStep;
function y() {
    return c(d);
}
function f() {
    return c(p);
}
