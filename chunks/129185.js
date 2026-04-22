n.d(t, { Xq: () => b, q6: () => x, wE: () => C });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    a = n(775602),
    l = n(7584),
    o = n(267102),
    u = n(320501),
    d = n(223567),
    c = n(552122),
    m = n(401266),
    h = n(187584),
    p = n(764917),
    f = n(652215);
function g(e) {
    if (null == e || null == d.A.emojiAnimationTriggers) return !1;
    for (let t of d.A.emojiAnimationTriggers) {
        let n = l.Ay.getByName(t);
        if (null != n) {
            if (`:${n.uniqueName}:` === e) return !0;
            for (let t in n.diversityChildren) {
                let i = n.diversityChildren[t];
                if (`:${i.uniqueName}:` === e) return !0;
            }
        }
    }
    return !1;
}
let C = s.createContext({ triggerAnimation: () => {}, untriggerAnimation: () => {} });
function y(e) {
    let { children: t } = e,
        { triggerAnimation: n, untriggerAnimation: r } = s.useContext(C),
        a = (0, o.Us)(),
        l = s.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    a !== f.BRT.OVERLAY && g(e) && n(e);
                },
                untriggerAnimation: (e) => {
                    a !== f.BRT.OVERLAY && g(e) && r(e);
                },
            }),
            [a, n, r],
        );
    return (0, i.jsx)(C.Provider, { value: l, children: t });
}
function b(e) {
    let { children: t } = e,
        n = c.A.useIsEligible(),
        r = s.useCallback((e, t) => {
            switch (t) {
                case d.n.THROW_EMOJI:
                    return (0, i.jsx)(p.V, { children: e });
                case d.n.SNOW:
                    return (0, i.jsx)(h.i, { children: e });
            }
        }, []);
    return n && null != d.A.emojiAnimationType ? r((0, i.jsx)(y, { children: t }), d.A.emojiAnimationType) : t;
}
function v(e) {
    let { emojiRef: t, channelId: n, messageId: i, emojiName: a } = e,
        l = (0, r.bG)([u.A], () => u.A.getMessage(n, i)),
        { triggerAnimation: o } = s.useContext(C);
    return (
        s.useEffect(() => {
            if (!d.A.triggerEmojiAnimationFromSentMessage || l?.state !== f.cmJ.SENT || (0, m.AI)(i)) return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            e >= 0 && n <= window.innerHeight && (o(a), (0, m.IL)(i));
        }, [a, t, l?.state, i, o]),
        null
    );
}
function x(e) {
    let { channelId: t, messageId: n, emojiName: s, disable: l, emojiRef: u } = e,
        d = (0, r.bG)([a.A], () => a.A.useReducedMotion),
        m = c.A.useIsEligible(),
        h = (0, o.Us)();
    return l || h === f.BRT.OVERLAY || !m || null == n || null == t || d || null == u || !g(s)
        ? null
        : (0, i.jsx)(v, { emojiRef: u, channelId: t, messageId: n, emojiName: s });
}
