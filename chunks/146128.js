r.d(n, {
    BV: function () {
        return b;
    },
    Rm: function () {
        return v;
    },
    aO: function () {
        return T;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(442837),
    l = r(40851),
    u = r(607070),
    c = r(633302),
    d = r(375954),
    f = r(378364),
    p = r(197344),
    h = r(978636),
    _ = r(643420),
    m = r(131333),
    g = r(981631);
function E(e) {
    if (null == e || null == f.Z.emojiAnimationTriggers) return !1;
    for (let n of f.Z.emojiAnimationTriggers) {
        let r = c.ZP.getByName(n);
        if (null != r) {
            if (':'.concat(r.uniqueName, ':') === e) return !0;
            for (let n in r.diversityChildren) {
                let i = r.diversityChildren[n];
                if (':'.concat(i.uniqueName, ':') === e) return !0;
            }
        }
    }
    return !1;
}
let v = o.createContext({
    triggerAnimation: () => {},
    untriggerAnimation: () => {}
});
function y(e) {
    let { children: n } = e,
        { triggerAnimation: r, untriggerAnimation: i } = o.useContext(v),
        s = (0, l.bp)(),
        u = o.useMemo(
            () => ({
                triggerAnimation: (e) => {
                    s !== g.IlC.OVERLAY && E(e) && r(e);
                },
                untriggerAnimation: (e) => {
                    s !== g.IlC.OVERLAY && E(e) && i(e);
                }
            }),
            [s, r, i]
        );
    return (0, a.jsx)(v.Provider, {
        value: u,
        children: n
    });
}
function b(e) {
    let { children: n } = e,
        r = p.Z.useIsEligible(),
        i = o.useCallback((e, n) => {
            switch (n) {
                case f.O.THROW_EMOJI:
                    return (0, a.jsx)(m.t, { children: e });
                case f.O.SNOW:
                    return (0, a.jsx)(_.k, { children: e });
            }
        }, []);
    return r && null != f.Z.emojiAnimationType ? i((0, a.jsx)(y, { children: n }), f.Z.emojiAnimationType) : (0, a.jsx)(a.Fragment, { children: n });
}
function I(e) {
    let { emojiRef: n, channelId: r, messageId: i, emojiName: a } = e,
        l = (0, s.e7)([d.Z], () => d.Z.getMessage(r, i)),
        { triggerAnimation: u } = o.useContext(v);
    return (
        o.useEffect(() => {
            if (!f.Z.triggerEmojiAnimationFromSentMessage || (null == l ? void 0 : l.state) !== g.yb.SENT || (0, h.JL)(i)) return;
            let { top: e, bottom: r } = n.getBoundingClientRect();
            if (!!(e >= 0 && r <= window.innerHeight)) u(a), (0, h.i9)(i);
        }, [a, n, null == l ? void 0 : l.state, i, u]),
        null
    );
}
function T(e) {
    let { channelId: n, messageId: r, emojiName: i, disable: o, emojiRef: c } = e,
        d = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        f = p.Z.useIsEligible(),
        h = (0, l.bp)();
    return o || h === g.IlC.OVERLAY || !f || null == r || null == n || d || null == c || !E(i)
        ? null
        : (0, a.jsx)(I, {
              emojiRef: c,
              channelId: n,
              messageId: r,
              emojiName: i
          });
}
