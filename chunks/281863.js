n.d(t, { Z: () => c }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(226690),
    o = n(119315),
    a = n(506262);
let s = !1,
    c = () => {
        let [e, t] = i.useState(!1),
            c = e ? a.activityIndicatorAnimation : s ? a.indicatorDotAfterAnimation : a.indicatorDotDuringAnimation;
        return (
            i.useEffect(() => {
                let e = setTimeout(() => {
                    s = !0;
                }, 4000);
                return () => {
                    clearTimeout(e);
                };
            }, [e]),
            (0, r.jsxs)('div', {
                className: a.channelAppLauncherWordlePromo,
                children: [
                    (0, r.jsx)(l.F, {
                        className: a.animationContainer,
                        delay: s ? void 0 : 1000,
                        onComplete: () => {
                            (s = !0), t(!0);
                        },
                        importData: () => n.e('21797').then(n.t.bind(n, 307530, 19)),
                        shouldAnimate: !s,
                        autoplay: !s,
                        loop: !1
                    }),
                    (0, r.jsx)(o.r, {
                        additionalStyles: c,
                        top: -1,
                        right: -1,
                        size: 7,
                        showBlurpleTreatment: !0,
                        maskColor: o.T.PRIMARY
                    })
                ]
            })
        );
    };
