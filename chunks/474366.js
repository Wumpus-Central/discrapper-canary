n.d(t, { q: () => y });
var r = n(200651),
    i = n(192379),
    l = n(120356),
    a = n.n(l),
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
    b = n(776571),
    j = n(388032),
    v = n(773967);
function C(e) {
    let { className: t, sound: n, playSound: i, isPlaying: l } = e,
        s = (null == n ? void 0 : n.emojiId) != null || (null == n ? void 0 : n.emojiName) != null,
        d = j.intl.formatToPlainString(j.t.tuMUJy, {
            emojiName: null == n ? void 0 : n.emojiName,
            soundName: null == n ? void 0 : n.name
        });
    return (0, r.jsxs)(o.P3F, {
        'aria-label': d,
        tag: 'span',
        onClick: i,
        className: a()(v.inlineContainer, v.inlineButton, { [v.playing]: !0 === l }, t),
        children: [
            s &&
                (0, r.jsx)(c.Z, {
                    emojiId: null == n ? void 0 : n.emojiId,
                    emojiName: null == n ? void 0 : n.emojiName,
                    className: v.soundmojiEmoji
                }),
            (0, r.jsx)('span', { children: ' '.concat(null == n ? void 0 : n.name, ' ') })
        ]
    });
}
function _() {
    let e = i.useRef(null),
        t = i.useRef(null),
        n = (0, s.e7)([g.Z], () => {
            var e;
            return null == (e = g.Z.getSoundsForGuild(p.X8)) ? void 0 : e.find((e) => 'airhorn' === e.name);
        }),
        { createMultipleConfettiAt: l } = i.useContext(m.h),
        a = (0, s.e7)([u.Z], () => u.Z.useReducedMotion),
        { isPlaying: o, playSound: c } = (0, f.W)(n);
    (0, d.ZP)(() => {
        (0, h.w)();
    });
    let b = i.useCallback(async () => {
        if (await c()) {
            var n;
            if ((null == (n = e.current) || n.addAnimation(), !a && null != t.current)) {
                let e = t.current.getBoundingClientRect(),
                    n = {
                        x: e.left + e.width / 2,
                        y: e.top + e.height / 2
                    },
                    r = x.CA[Math.floor(Math.random() * x.CA.length)];
                l(n.x, n.y, void 0, void 0, { sprite: r });
            }
        }
    }, [c, l, a]);
    return void 0 === n
        ? null
        : (0, r.jsx)('div', {
              ref: t,
              children: (0, r.jsx)(C, {
                  sound: n,
                  playSound: b,
                  isPlaying: o
              })
          });
}
function y() {
    return (0, r.jsxs)(o.Kqy, {
        direction: 'vertical',
        align: 'center',
        justify: 'center',
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
                children: j.intl.format(b.default['8N4c5+'], { airhornHook: () => (0, r.jsx)(_, {}) })
            })
        ]
    });
}
