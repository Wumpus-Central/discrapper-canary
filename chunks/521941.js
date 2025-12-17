n.d(t, { Z: () => i }), n(539854);
var a = n(473749),
    r = n(399606),
    l = n(45966);
function i(e) {
    let t = (0, r.Wu)([l.Z], () => l.Z.getEnabledOnboardingPrompts(e));
    return a.useMemo(() => {
        let e = 0,
            n = [],
            a = [],
            r = [],
            l = [];
        for (var i = 0; i < t.length; i++) {
            let o = t[i];
            o.isNew
                ? n.push(o)
                : o.hasNewAnswers
                  ? (a.push(o), (e += o.options.filter((e) => e.isUnseen).length))
                  : o.inOnboarding
                    ? l.push(o)
                    : r.push(o);
        }
        return {
            onboardingPromptsRaw: t,
            newOnboardingPrompts: n,
            onboardingPromptsWithNewAnswers: a,
            newAnswersCount: e,
            onboardingPrompts: r.concat(l),
        };
    }, [t]);
}
