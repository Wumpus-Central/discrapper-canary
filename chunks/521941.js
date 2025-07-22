(n.d(t, { Z: () => a }), n(539854));
var l = n(73800),
    r = n(399606),
    i = n(45966);
function a(e) {
    let t = (0, r.Wu)([i.Z], () => i.Z.getEnabledOnboardingPrompts(e));
    return l.useMemo(() => {
        let e = 0,
            n = [],
            l = [],
            r = [],
            i = [];
        for (var a = 0; a < t.length; a++) {
            let o = t[a];
            o.isNew ? n.push(o) : o.hasNewAnswers ? (l.push(o), (e += o.options.filter((e) => e.isUnseen).length)) : o.inOnboarding ? i.push(o) : r.push(o);
        }
        return {
            onboardingPromptsRaw: t,
            newOnboardingPrompts: n,
            onboardingPromptsWithNewAnswers: l,
            newAnswersCount: e,
            onboardingPrompts: r.concat(i)
        };
    }, [t]);
}
