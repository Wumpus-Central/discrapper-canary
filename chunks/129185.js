"use strict";
n.d(t, { Xq: () => A, q6: () => T, wE: () => m });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(775602),
    o = n(7584),
    l = n(267102),
    u = n(320501),
    c = n(223567),
    d = n(552122),
    _ = n(401266),
    f = n(187584),
    p = n(764917),
    h = n(652215);
function E(e) {
    if (null == e || null == c.A.emojiAnimationTriggers) return !1;
    for (let t of c.A.emojiAnimationTriggers) {
        let n = o.Ay.getByName(t);
        if (null != n) {
            if (`:${n.uniqueName}:` === e) return !0;
            for (let t in n.diversityChildren) {
                let r = n.diversityChildren[t];
                if (`:${r.uniqueName}:` === e) return !0;
            }
        }
    }
    return !1;
}
let m = i.createContext({ triggerAnimation: () => {}, untriggerAnimation: () => {} });
function g(e) {
    let { children: t } = e,
        { triggerAnimation: n, untriggerAnimation: s } = i.useContext(m),
        a = (0, l.Us)(),
        o = i.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    a !== h.BRT.OVERLAY && E(e) && n(e);
                },
                untriggerAnimation: (e) => {
                    a !== h.BRT.OVERLAY && E(e) && s(e);
                },
            }),
            [a, n, s],
        );
    return (0, r.jsx)(m.Provider, { value: o, children: t });
}
function A(e) {
    let { children: t } = e,
        n = d.A.useIsEligible(),
        s = i.useCallback((e, t) => {
            switch (t) {
                case c.n.THROW_EMOJI:
                    return (0, r.jsx)(p.V, { children: e });
                case c.n.SNOW:
                    return (0, r.jsx)(f.i, { children: e });
            }
        }, []);
    return n && null != c.A.emojiAnimationType ? s((0, r.jsx)(g, { children: t }), c.A.emojiAnimationType) : t;
}
function I(e) {
    let { emojiRef: t, channelId: n, messageId: r, emojiName: a } = e,
        o = (0, s.bG)([u.A], () => u.A.getMessage(n, r)),
        { triggerAnimation: l } = i.useContext(m);
    return (
        i.useEffect(() => {
            if (!c.A.triggerEmojiAnimationFromSentMessage || o?.state !== h.cmJ.SENT || (0, _.AI)(r)) return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            e >= 0 && n <= window.innerHeight && (l(a), (0, _.IL)(r));
        }, [a, t, o?.state, r, l]),
        null
    );
}
function T(e) {
    let { channelId: t, messageId: n, emojiName: i, disable: o, emojiRef: u } = e,
        c = (0, s.bG)([a.A], () => a.A.useReducedMotion),
        _ = d.A.useIsEligible(),
        f = (0, l.Us)();
    return o || f === h.BRT.OVERLAY || !_ || null == n || null == t || c || null == u || !E(i)
        ? null
        : (0, r.jsx)(I, { emojiRef: u, channelId: t, messageId: n, emojiName: i });
}
