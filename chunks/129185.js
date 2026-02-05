"use strict";
n.d(t, { Xq: () => A, q6: () => T, wE: () => g });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(775602),
    o = n(7584),
    l = n(267102),
    u = n(320501),
    c = n(223567),
    d = n(552122),
    _ = n(401266),
    f = n(187584),
    p = n(764917),
    h = n(652215);
function m(e) {
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
let g = i.createContext({ triggerAnimation: () => {}, untriggerAnimation: () => {} });
function E(e) {
    let { children: t } = e,
        { triggerAnimation: n, untriggerAnimation: a } = i.useContext(g),
        s = (0, l.Us)(),
        o = i.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    s !== h.BRT.OVERLAY && m(e) && n(e);
                },
                untriggerAnimation: (e) => {
                    s !== h.BRT.OVERLAY && m(e) && a(e);
                },
            }),
            [s, n, a],
        );
    return (0, r.jsx)(g.Provider, { value: o, children: t });
}
function A(e) {
    let { children: t } = e,
        n = d.A.useIsEligible(),
        a = i.useCallback((e, t) => {
            switch (t) {
                case c.n.THROW_EMOJI:
                    return (0, r.jsx)(p.V, { children: e });
                case c.n.SNOW:
                    return (0, r.jsx)(f.i, { children: e });
            }
        }, []);
    return n && null != c.A.emojiAnimationType ? a((0, r.jsx)(E, { children: t }), c.A.emojiAnimationType) : t;
}
function I(e) {
    let { emojiRef: t, channelId: n, messageId: r, emojiName: s } = e,
        o = (0, a.bG)([u.A], () => u.A.getMessage(n, r)),
        { triggerAnimation: l } = i.useContext(g);
    return (
        i.useEffect(() => {
            if (!c.A.triggerEmojiAnimationFromSentMessage || o?.state !== h.cmJ.SENT || (0, _.AI)(r)) return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            e >= 0 && n <= window.innerHeight && (l(s), (0, _.IL)(r));
        }, [s, t, o?.state, r, l]),
        null
    );
}
function T(e) {
    let { channelId: t, messageId: n, emojiName: i, disable: o, emojiRef: u } = e,
        c = (0, a.bG)([s.A], () => s.A.useReducedMotion),
        _ = d.A.useIsEligible(),
        f = (0, l.Us)();
    return o || f === h.BRT.OVERLAY || !_ || null == n || null == t || c || null == u || !m(i)
        ? null
        : (0, r.jsx)(I, { emojiRef: u, channelId: t, messageId: n, emojiName: i });
}
