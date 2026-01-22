n.d(t, {
    Xq: () => b,
    q6: () => O,
    wE: () => g,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(775602),
    o = n(7584),
    l = n(267102),
    c = n(320501),
    u = n(223567),
    d = n(552122),
    f = n(401266),
    p = n(187584),
    _ = n(764917),
    h = n(652215);

function m(e) {
    if (null == e || null == u.A.emojiAnimationTriggers) return !1;
    for (let t of u.A.emojiAnimationTriggers) {
        let n = o.Ay.getByName(t);
        if (null != n) {
            if (":".concat(n.uniqueName, ":") === e) return !0;
            for (let t in n.diversityChildren) {
                let r = n.diversityChildren[t];
                if (":".concat(r.uniqueName, ":") === e) return !0;
            }
        }
    }
    return !1;
}
let g = i.createContext({
    triggerAnimation: () => {},
    untriggerAnimation: () => {},
});

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
    return (0, r.jsx)(g.Provider, {
        value: o,
        children: t,
    });
}

function b(e) {
    let { children: t } = e,
        n = d.A.useIsEligible(),
        a = i.useCallback((e, t) => {
            switch (t) {
                case u.n.THROW_EMOJI:
                    return (0, r.jsx)(_.V, {
                        children: e,
                    });
                case u.n.SNOW:
                    return (0, r.jsx)(p.i, {
                        children: e,
                    });
            }
        }, []);
    return n && null != u.A.emojiAnimationType
        ? a(
              (0, r.jsx)(E, {
                  children: t,
              }),
              u.A.emojiAnimationType,
          )
        : t;
}

function y(e) {
    let { emojiRef: t, channelId: n, messageId: r, emojiName: s } = e,
        o = (0, a.bG)([c.A], () => c.A.getMessage(n, r)),
        { triggerAnimation: l } = i.useContext(g);
    return (
        i.useEffect(() => {
            if (
                !u.A.triggerEmojiAnimationFromSentMessage ||
                (null == o ? void 0 : o.state) !== h.cmJ.SENT ||
                (0, f.AI)(r)
            )
                return;
            let { top: e, bottom: n } = t.getBoundingClientRect();
            e >= 0 && n <= window.innerHeight && (l(s), (0, f.IL)(r));
        }, [s, t, null == o ? void 0 : o.state, r, l]),
        null
    );
}

function O(e) {
    let { channelId: t, messageId: n, emojiName: i, disable: o, emojiRef: c } = e,
        u = (0, a.bG)([s.A], () => s.A.useReducedMotion),
        f = d.A.useIsEligible(),
        p = (0, l.Us)();
    return o || p === h.BRT.OVERLAY || !f || null == n || null == t || u || null == c || !m(i)
        ? null
        : (0, r.jsx)(y, {
              emojiRef: c,
              channelId: t,
              messageId: n,
              emojiName: i,
          });
}
