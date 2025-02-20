t.d(n, { Z: () => i }), t(653041);
var r = t(192379),
    l = t(399606),
    a = t(45966);
function i(e) {
    let n = (0, l.Wu)([a.Z], () => a.Z.getEnabledOnboardingPrompts(e));
    return r.useMemo(() => {
        let e = 0,
            t = [],
            r = [],
            l = [],
            a = [];
        for (var i = 0; i < n.length; i++) {
            let o = n[i];
            o.isNew ? t.push(o) : o.hasNewAnswers ? (r.push(o), (e += o.options.filter((e) => e.isUnseen).length)) : o.inOnboarding ? a.push(o) : l.push(o);
        }
        return {
            onboardingPromptsRaw: n,
            newOnboardingPrompts: t,
            onboardingPromptsWithNewAnswers: r,
            newAnswersCount: e,
            onboardingPrompts: l.concat(a)
        };
    }, [n]);
}
