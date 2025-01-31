n.d(t, { Z: () => g }), n(47120);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(392711),
    o = n(772848),
    c = n(442837),
    d = n(570140),
    u = n(596454),
    h = n(607070),
    p = n(288479);
let m = [p.emoji1, p.emoji2, p.emoji3, p.emoji4],
    f = l.memo(function (e) {
        var t;
        let { emoji: n, onAnimationEnd: a } = e,
            o = (0, s.sample)(m),
            c = l.useCallback(() => {
                a(n.key);
            }, [n.key, a]);
        return (0, i.jsx)('div', {
            className: r()(p.emoji, o),
            onAnimationEnd: c,
            children: (0, i.jsx)(u.Z, {
                emojiId: n.id,
                emojiName: n.name,
                animated: null !== (t = n.animated) && void 0 !== t && t
            })
        });
    });
function g(e) {
    let { channelId: t, callHeight: n } = e,
        a = (0, c.e7)([h.Z], () => h.Z.useReducedMotion),
        [r, s] = l.useState([]);
    l.useEffect(() => {
        function e(e) {
            let { channelId: n, emoji: i } = e;
            n === t &&
                !a &&
                null != i &&
                s((e) => [
                    ...e,
                    {
                        key: (0, o.Z)(),
                        ...i
                    }
                ]);
        }
        return (
            d.Z.subscribe('VOICE_CHANNEL_EFFECT_SEND', e),
            () => {
                d.Z.unsubscribe('VOICE_CHANNEL_EFFECT_SEND', e);
            }
        );
    }, [t, a]);
    let u = l.useCallback((e) => {
        s((t) => t.filter((t) => t.key !== e));
    }, []);
    return a
        ? null
        : (0, i.jsx)('div', {
              className: p.container,
              style: { top: n - 16 },
              'aria-hidden': !0,
              children: r.map((e) =>
                  (0, i.jsx)(
                      f,
                      {
                          emoji: e,
                          onAnimationEnd: u
                      },
                      e.key
                  )
              )
          });
}
