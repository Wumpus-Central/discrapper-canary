t.d(n, { Z: () => r }), t(653041);
var l = t(192379),
    i = t(399606),
    a = t(45966);
function r(e) {
    let n = (0, i.Wu)([a.Z], () => a.Z.getEnabledOnboardingPrompts(e));
    return l.useMemo(() => {
        let e = 0,
            t = [],
            l = [],
            i = [],
            a = [];
        for (var r = 0; r < n.length; r++) {
            let o = n[r];
            o.isNew ? t.push(o) : o.hasNewAnswers ? (l.push(o), (e += o.options.filter((e) => e.isUnseen).length)) : o.inOnboarding ? a.push(o) : i.push(o);
        }
        return {
            onboardingPromptsRaw: n,
            newOnboardingPrompts: t,
            onboardingPromptsWithNewAnswers: l,
            newAnswersCount: e,
            onboardingPrompts: i.concat(a)
        };
    }, [n]);
}
