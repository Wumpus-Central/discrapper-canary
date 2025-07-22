(n.d(t, {
    BV: () => b,
    Rm: () => g,
    aO: () => O
}),
    n(388685));
var r = n(255367),
    i = n(73800),
    a = n(442837),
    o = n(40851),
    s = n(607070),
    l = n(633302),
    c = n(375954),
    u = n(378364),
    d = n(197344),
    _ = n(978636),
    f = n(643420),
    p = n(131333),
    h = n(981631);
function m(e) {
    if (null == e || null == u.Z.emojiAnimationTriggers) return !1;
    for (let t of u.Z.emojiAnimationTriggers) {
        let n = l.ZP.getByName(t);
        if (null != n) {
            if (':'.concat(n.uniqueName, ':') === e) return !0;
            for (let t in n.diversityChildren) {
                let r = n.diversityChildren[t];
                if (':'.concat(r.uniqueName, ':') === e) return !0;
            }
        }
    }
    return !1;
}
let g = i.createContext({
    triggerAnimation: () => {},
    untriggerAnimation: () => {}
});
function E(e) {
    let { children: t } = e,
        { triggerAnimation: n, untriggerAnimation: a } = i.useContext(g),
        s = (0, o.bp)(),
        l = i.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    s !== h.IlC.OVERLAY && m(e) && n(e);
                },
                untriggerAnimation: (e) => {
                    s !== h.IlC.OVERLAY && m(e) && a(e);
                }
            }),
            [s, n, a]
        );
    return (0, r.jsx)(g.Provider, {
        value: l,
        children: t
    });
}
function b(e) {
    let { children: t } = e,
        n = d.Z.useIsEligible(),
        a = i.useCallback((e, t) => {
            switch (t) {
                case u.O.THROW_EMOJI:
                    return (0, r.jsx)(p.t, { children: e });
                case u.O.SNOW:
                    return (0, r.jsx)(f.k, { children: e });
            }
        }, []);
    return n && null != u.Z.emojiAnimationType ? a((0, r.jsx)(E, { children: t }), u.Z.emojiAnimationType) : t;
}
function y(e) {
    let { emojiRef: t, channelId: n, messageId: r, emojiName: o } = e,
        s = (0, a.e7)([c.Z], () => c.Z.getMessage(n, r)),
        { triggerAnimation: l } = i.useContext(g);
    return (
        i.useEffect(() => {
            if (!u.Z.triggerEmojiAnimationFromSentMessage || (null == s ? void 0 : s.state) !== h.yb.SENT || (0, _.JL)(r)) return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            e >= 0 && n <= window.innerHeight && (l(o), (0, _.i9)(r));
        }, [o, t, null == s ? void 0 : s.state, r, l]),
        null
    );
}
function O(e) {
    let { channelId: t, messageId: n, emojiName: i, disable: l, emojiRef: c } = e,
        u = (0, a.e7)([s.Z], () => s.Z.useReducedMotion),
        _ = d.Z.useIsEligible(),
        f = (0, o.bp)();
    return l || f === h.IlC.OVERLAY || !_ || null == n || null == t || u || null == c || !m(i)
        ? null
        : (0, r.jsx)(y, {
              emojiRef: c,
              channelId: t,
              messageId: n,
              emojiName: i
          });
}
