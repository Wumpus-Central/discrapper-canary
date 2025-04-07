n.d(t, { Z: () => i }), n(539854);
var r = n(192379),
    l = n(399606),
    a = n(45966);
function i(e) {
    let t = (0, l.Wu)([a.Z], () => a.Z.getEnabledOnboardingPrompts(e));
    return r.useMemo(() => {
        let e = 0,
            n = [],
            r = [],
            l = [],
            a = [];
        for (var i = 0; i < t.length; i++) {
            let o = t[i];
            o.isNew ? n.push(o) : o.hasNewAnswers ? (r.push(o), (e += o.options.filter((e) => e.isUnseen).length)) : o.inOnboarding ? a.push(o) : l.push(o);
        }
        return {
            onboardingPromptsRaw: t,
            newOnboardingPrompts: n,
            onboardingPromptsWithNewAnswers: r,
            newAnswersCount: e,
            onboardingPrompts: l.concat(a)
        };
    }, [t]);
}
