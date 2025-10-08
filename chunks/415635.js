n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(772848),
    o = n(442837),
    s = n(570140),
    l = n(607070),
    c = n(367907),
    u = n(37091),
    d = n(721264),
    f = n(963838),
    _ = n(39127),
    p = n(981631),
    h = n(825836);
let m = 50;
function g(e) {
    let { channelId: t, guildId: n, userId: g, containerDimensions: E } = e,
        b = (0, o.e7)([l.Z], () => l.Z.useReducedMotion),
        [y, O] = i.useState([]),
        v = y.length < m;
    i.useEffect(() => {
        function e(e) {
            var r;
            let { channelId: i, userId: o, emoji: s, animationType: l, animationId: _ } = e;
            if (
                (null != g && g !== o) ||
                (u.Z.getEnabled() && (0, d.Z)(null != (r = null == s ? void 0 : s.name) ? r : ""))
            )
                return;
            let h = null != s && null != l && null != _;
            if (i === t && !b && v && h) {
                let e = (0, f._r)(s),
                    r = null != s.id && !s.animated,
                    i = {
                        id: (0, a.Z)(),
                        animationType: l,
                        animationId: _,
                        shouldResize: r,
                        url: e,
                        userId: o,
                    };
                O((e) => [...e, i]),
                    c.ZP.trackWithMetadata(p.rMx.VOICE_CHANNEL_EFFECT_VIEWED, {
                        channel_id: t,
                        guild_id: n,
                    });
            }
        }
        return (
            s.Z.subscribe("VOICE_CHANNEL_EFFECT_SEND", e),
            () => {
                s.Z.unsubscribe("VOICE_CHANNEL_EFFECT_SEND", e);
            }
        );
    }, [t, n, g, b, v]);
    let I = i.useCallback((e) => {
        O((t) => {
            let n = [...t],
                r = n.findIndex((t) => t.id === e);
            return n.splice(r, 1), n;
        });
    }, []);
    return b
        ? null
        : (0, r.jsx)("div", {
              className: h.effectsWrapper,
              style: { width: E.width },
              children: (0, r.jsx)("div", {
                  className: h.effects,
                  children: y.map((e) =>
                      (0, r.jsx)(
                          _.Z,
                          {
                              containerDimensions: E,
                              effect: e,
                              onComplete: I,
                          },
                          e.id,
                      ),
                  ),
              }),
          });
}
