r.d(n, {
    $m: function () {
        return p;
    },
    NJ: function () {
        return f;
    },
    Xo: function () {
        return h;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(512722),
    l = r.n(s),
    u = r(846519),
    c = r(810097);
let d = o.createContext(void 0);
function f(e) {
    let { value: n, children: r } = e;
    return (0, a.jsx)(d.Provider, {
        value: n,
        children: r
    });
}
function p() {
    let [e, n] = o.useState(null),
        [r, i] = o.useState(null),
        [a, s] = o.useState(null),
        l = o.useCallback((e) => {
            n(e.interactionType), i(e.interactionSource), s(e.interactionSourceId);
        }, []),
        d = o.useCallback(() => {
            l({
                interactionType: null,
                interactionSource: null,
                interactionSourceId: null
            });
        }, [l]),
        [f, p] = o.useState(!1),
        [h, _] = o.useState(null),
        [m] = o.useState(new u.V7()),
        g = o.useCallback(
            (e) => {
                _(e), p(!0), null === e ? m.stop() : m.start(c._1, () => p(!1));
            },
            [m]
        );
    return (
        o.useEffect(() => {
            m.stop();
        }, [m]),
        o.useMemo(
            () => ({
                interactionType: e,
                interactionSource: r,
                interactionSourceId: a,
                onInteraction: l,
                setInteractionToast: g,
                resetInteraction: d,
                showInteractionToast: f,
                interactionTypeSent: h
            }),
            [l, g, r, a, f, e, h, d]
        )
    );
}
function h() {
    let e = o.useContext(d);
    return l()(null != e, 'must use useUserProfileInteractionContext within a UserProfileInteractionContextProvider'), e;
}
