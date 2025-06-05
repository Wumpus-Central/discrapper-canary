n.d(t, { q: () => y });
var r = n(255367),
    l = n(73800),
    i = n(120356),
    a = n.n(i),
    s = n(442837),
    o = n(481060),
    c = n(596454),
    d = n(493773),
    u = n(607070),
    m = n(745510),
    h = n(208049),
    g = n(763296),
    f = n(326706),
    x = n(675654),
    p = n(710111),
    b = n(463959),
    j = n(388032),
    v = n(773967);
function C(e) {
    let { className: t, sound: n, playSound: l, isPlaying: i, text: s } = e,
        d = (null == n ? void 0 : n.emojiId) != null || (null == n ? void 0 : n.emojiName) != null,
        u = j.intl.formatToPlainString(j.t.tuMUJy, {
            emojiName: null == n ? void 0 : n.emojiName,
            soundName: null == n ? void 0 : n.name
        });
    return (0, r.jsxs)(o.P3F, {
        'aria-label': u,
        tag: 'span',
        onClick: l,
        className: a()(v.inlineContainer, v.inlineButton, { [v.playing]: !0 === i }, t),
        children: [
            d &&
                (0, r.jsx)(c.Z, {
                    emojiId: null == n ? void 0 : n.emojiId,
                    emojiName: null == n ? void 0 : n.emojiName,
                    className: v.soundmojiEmoji
                }),
            (0, r.jsx)('span', { children: ' '.concat(s, ' ') })
        ]
    });
}
function _(e) {
    let { containerRef: t, text: n } = e,
        i = l.useRef(null),
        a = (0, s.e7)([g.Z], () => {
            var e;
            return null == (e = g.Z.getSoundsForGuild(p.X8)) ? void 0 : e.find((e) => 'airhorn' === e.name);
        }),
        { createMultipleConfettiAt: o } = l.useContext(m.h),
        c = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        { isPlaying: b, playSound: j } = (0, f.W)(a);
    (0, d.ZP)(() => {
        (0, h.w)();
    });
    let v = l.useCallback(async () => {
        if (await j()) {
            var e;
            if ((null == (e = i.current) || e.addAnimation(), !c && (null == t ? void 0 : t.current) != null)) {
                let e = t.current.getBoundingClientRect(),
                    n = {
                        x: e.left + e.width / 2,
                        y: e.top + e.height / 3
                    },
                    r = x.CA[Math.floor(Math.random() * x.CA.length)];
                o(
                    n.x,
                    n.y,
                    {
                        velocity: {
                            type: 'static-random',
                            minValue: {
                                x: -500,
                                y: -500
                            },
                            maxValue: {
                                x: 500,
                                y: -100
                            }
                        }
                    },
                    40,
                    { sprite: r }
                );
            }
        }
    }, [j, o, c, t]);
    return void 0 === a
        ? null
        : (0, r.jsx)(C, {
              sound: a,
              playSound: v,
              isPlaying: b,
              text: n
          });
}
function y() {
    let e = l.useRef(null);
    return (0, r.jsxs)(o.Kqy, {
        direction: 'vertical',
        align: 'center',
        justify: 'center',
        padding: {
            top: 32,
            bottom: 16
        },
        ref: e,
        children: [
            (0, r.jsx)(o.X6q, {
                className: v.header,
                variant: 'heading-md/medium',
                children: j.intl.string(b.default.h6QNk5)
            }),
            (0, r.jsx)(o.Text, {
                className: v.text,
                variant: 'text-md/medium',
                color: 'text-secondary',
                children: j.intl.format(b.default['8N4c5+'], {
                    airhornHook: (t) =>
                        (0, r.jsx)(_, {
                            containerRef: e,
                            text: t
                        })
                })
            })
        ]
    });
}
