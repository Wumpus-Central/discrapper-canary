n.d(t, {
    BV: () => v,
    Rm: () => g,
    aO: () => I
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(442837),
    s = n(40851),
    o = n(607070),
    l = n(633302),
    u = n(375954),
    c = n(378364),
    d = n(197344),
    f = n(978636),
    _ = n(643420),
    p = n(131333),
    h = n(981631);
function m(e) {
    if (null == e || null == c.Z.emojiAnimationTriggers) return !1;
    for (let t of c.Z.emojiAnimationTriggers) {
        let n = l.ZP.getByName(t);
        if (null != n) {
            if (':'.concat(n.uniqueName, ':') === e) return !0;
            for (let t in n.diversityChildren) {
                let i = n.diversityChildren[t];
                if (':'.concat(i.uniqueName, ':') === e) return !0;
            }
        }
    }
    return !1;
}
let g = r.createContext({
    triggerAnimation: () => {},
    untriggerAnimation: () => {}
});
function E(e) {
    let { children: t } = e,
        { triggerAnimation: n, untriggerAnimation: a } = r.useContext(g),
        o = (0, s.bp)(),
        l = r.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    o !== h.IlC.OVERLAY && m(e) && n(e);
                },
                untriggerAnimation: (e) => {
                    o !== h.IlC.OVERLAY && m(e) && a(e);
                }
            }),
            [o, n, a]
        );
    return (0, i.jsx)(g.Provider, {
        value: l,
        children: t
    });
}
function v(e) {
    let { children: t } = e,
        n = d.Z.useIsEligible(),
        a = r.useCallback((e, t) => {
            switch (t) {
                case c.O.THROW_EMOJI:
                    return (0, i.jsx)(p.t, { children: e });
                case c.O.SNOW:
                    return (0, i.jsx)(_.k, { children: e });
            }
        }, []);
    return n && null != c.Z.emojiAnimationType ? a((0, i.jsx)(E, { children: t }), c.Z.emojiAnimationType) : (0, i.jsx)(i.Fragment, { children: t });
}
function y(e) {
    let { emojiRef: t, channelId: n, messageId: i, emojiName: s } = e,
        o = (0, a.e7)([u.Z], () => u.Z.getMessage(n, i)),
        { triggerAnimation: l } = r.useContext(g);
    return (
        r.useEffect(() => {
            if (!c.Z.triggerEmojiAnimationFromSentMessage || (null == o ? void 0 : o.state) !== h.yb.SENT || (0, f.JL)(i)) return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            e >= 0 && n <= window.innerHeight && (l(s), (0, f.i9)(i));
        }, [s, t, null == o ? void 0 : o.state, i, l]),
        null
    );
}
function I(e) {
    let { channelId: t, messageId: n, emojiName: r, disable: l, emojiRef: u } = e,
        c = (0, a.e7)([o.Z], () => o.Z.useReducedMotion),
        f = d.Z.useIsEligible(),
        _ = (0, s.bp)();
    return l || _ === h.IlC.OVERLAY || !f || null == n || null == t || c || null == u || !m(r)
        ? null
        : (0, i.jsx)(y, {
              emojiRef: u,
              channelId: t,
              messageId: n,
              emojiName: r
          });
}
