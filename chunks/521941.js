t.d(n, { Z: () => a }), t(539854);
var l = t(73800),
    r = t(399606),
    i = t(45966);
function a(e) {
    let n = (0, r.Wu)([i.Z], () => i.Z.getEnabledOnboardingPrompts(e));
    return l.useMemo(() => {
        let e = 0,
            t = [],
            l = [],
            r = [],
            i = [];
        for (var a = 0; a < n.length; a++) {
            let o = n[a];
            o.isNew ? t.push(o) : o.hasNewAnswers ? (l.push(o), (e += o.options.filter((e) => e.isUnseen).length)) : o.inOnboarding ? i.push(o) : r.push(o);
        }
        return {
            onboardingPromptsRaw: n,
            newOnboardingPrompts: t,
            onboardingPromptsWithNewAnswers: l,
            newAnswersCount: e,
            onboardingPrompts: r.concat(i)
        };
    }, [n]);
}
