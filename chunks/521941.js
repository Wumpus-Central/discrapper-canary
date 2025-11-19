t.d(n, { Z: () => a }), t(539854);
var r = t(473749),
    l = t(399606),
    i = t(45966);
function a(e) {
    let n = (0, l.Wu)([i.Z], () => i.Z.getEnabledOnboardingPrompts(e));
    return r.useMemo(() => {
        let e = 0,
            t = [],
            r = [],
            l = [],
            i = [];
        for (var a = 0; a < n.length; a++) {
            let o = n[a];
            o.isNew
                ? t.push(o)
                : o.hasNewAnswers
                  ? (r.push(o), (e += o.options.filter((e) => e.isUnseen).length))
                  : o.inOnboarding
                    ? i.push(o)
                    : l.push(o);
        }
        return {
            onboardingPromptsRaw: n,
            newOnboardingPrompts: t,
            onboardingPromptsWithNewAnswers: r,
            newAnswersCount: e,
            onboardingPrompts: l.concat(i),
        };
    }, [n]);
}
