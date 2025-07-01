n.d(t, { q: () => N });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    l = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(596454),
    d = n(493773),
    u = n(607070),
    m = n(745510),
    h = n(208049),
    g = n(763296),
    f = n(914010),
    x = n(626135),
    p = n(326706),
    b = n(981631),
    j = n(675654),
    v = n(710111),
    _ = n(130883),
    C = n(388032),
    y = n(773967);
function O(e) {
    let { className: t, sound: n, playSound: a, isPlaying: s, text: d } = e,
        u = (null == n ? void 0 : n.emojiId) != null || (null == n ? void 0 : n.emojiName) != null,
        m = C.intl.formatToPlainString(C.t.tuMUJy, {
            emojiName: null == n ? void 0 : n.emojiName,
            soundName: null == n ? void 0 : n.name
        }),
        h = i.useCallback(() => {
            (x.default.track(b.rMx.MODERATOR_QUEUE_ACTION, {
                guild_id: f.Z.getGuildId(),
                action: 'airhorn'
            }),
                null != a && a());
        }, [a]);
    return (0, r.jsxs)(o.P3F, {
        'aria-label': m,
        tag: 'span',
        onClick: h,
        className: l()(y.inlineContainer, y.inlineButton, { [y.playing]: !0 === s }, t),
        children: [
            u &&
                (0, r.jsx)(c.Z, {
                    emojiId: null == n ? void 0 : n.emojiId,
                    emojiName: null == n ? void 0 : n.emojiName,
                    className: y.soundmojiEmoji
                }),
            (0, r.jsx)('span', { children: ' '.concat(d, ' ') })
        ]
    });
}
function w(e) {
    let { containerRef: t, text: n } = e,
        a = i.useRef(null),
        l = (0, s.e7)([g.Z], () => {
            var e;
            return null == (e = g.Z.getSoundsForGuild(v.X8)) ? void 0 : e.find((e) => 'airhorn' === e.name);
        }),
        { createMultipleConfettiAt: o } = i.useContext(m.h),
        c = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        { isPlaying: f, playSound: x } = (0, p.W)(l);
    (0, d.ZP)(() => {
        (0, h.w)();
    });
    let b = i.useCallback(async () => {
        if (await x()) {
            var e;
            if ((null == (e = a.current) || e.addAnimation(), !c && (null == t ? void 0 : t.current) != null)) {
                let e = t.current.getBoundingClientRect(),
                    n = {
                        x: e.left + e.width / 2,
                        y: e.top + e.height / 3
                    },
                    r = j.CA[Math.floor(Math.random() * j.CA.length)];
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
    }, [x, o, c, t]);
    return void 0 === l
        ? null
        : (0, r.jsx)(O, {
              sound: l,
              playSound: b,
              isPlaying: f,
              text: n
          });
}
function N() {
    let e = i.useRef(null);
    return (0, r.jsxs)(o.Kqy, {
        className: y.container,
        direction: 'vertical',
        align: 'center',
        justify: 'center',
        padding: {
            top: 24,
            bottom: 24
        },
        ref: e,
        children: [
            (0, r.jsx)(o.l22, {
                size: 'custom',
                width: 48,
                height: 48
            }),
            (0, r.jsxs)(o.Kqy, {
                direction: 'vertical',
                align: 'center',
                justify: 'center',
                children: [
                    (0, r.jsx)(o.X6q, {
                        className: y.header,
                        variant: 'heading-md/medium',
                        children: C.intl.string(_.default.h6QNk5)
                    }),
                    (0, r.jsx)(o.Text, {
                        className: y.text,
                        variant: 'text-md/medium',
                        color: 'text-secondary',
                        children: C.intl.format(_.default['8N4c5+'], {
                            airhornHook: (t) =>
                                (0, r.jsx)(w, {
                                    containerRef: e,
                                    text: t
                                })
                        })
                    })
                ]
            })
        ]
    });
}
