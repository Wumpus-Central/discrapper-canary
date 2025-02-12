n.d(t, {
    ZP: () => A,
    ku: () => b
});
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(399606),
    l = n(481060),
    u = n(596454),
    c = n(722932),
    d = n(125900),
    f = n(801606),
    _ = n(409700),
    p = n(321889),
    h = n(763296),
    m = n(697426),
    g = n(409673),
    E = n(695346),
    v = n(592125),
    y = n(388032),
    I = n(668825);
function T(e) {
    let { playSound: t } = e;
    return (0, i.jsxs)(l.P3F, {
        title: 'Risky Click',
        tag: 'span',
        onClick: t,
        className: I.inlineContainer,
        children: [
            (0, i.jsx)(l.gj8, {
                size: 'md',
                color: 'currentColor',
                className: I.unknownSound
            }),
            (0, i.jsx)('span', { children: 'Unknown' })
        ]
    });
}
function b(e) {
    let { soundId: t } = e,
        n = (0, o.e7)([h.Z], () => h.Z.getSoundById(t)),
        r = (0, d.V2)({ location: 'SoundboardMentionInline' }),
        { isPlaying: a, playSound: s } = (0, p.Z)(n);
    return r
        ? null == n
            ? (0, i.jsx)(T, {})
            : (0, i.jsx)(S, {
                  className: I.inlineTextArea,
                  isPlaying: a,
                  playSound: s,
                  sound: n
              })
        : null;
}
function S(e) {
    let { className: t, sound: n, playSound: r, isPlaying: a } = e,
        o = (null == n ? void 0 : n.emojiId) != null || (null == n ? void 0 : n.emojiName) != null,
        d = y.intl.formatToPlainString(y.t.tuMUJy, {
            emojiName: null == n ? void 0 : n.emojiName,
            soundName: null == n ? void 0 : n.name
        });
    return (0, c.X0)({ location: 'SoundboardMentionInline' })
        ? (0, i.jsxs)(l.P3F, {
              'aria-label': d,
              tag: 'span',
              onClick: r,
              className: s()(I.inlineContainer, I.inlineButton, { [I.playing]: !0 === a }, t),
              children: [
                  o &&
                      (0, i.jsx)(u.Z, {
                          emojiId: null == n ? void 0 : n.emojiId,
                          emojiName: null == n ? void 0 : n.emojiName,
                          className: I.soundmojiEmoji
                      }),
                  (0, i.jsx)('span', { children: ' '.concat(null == n ? void 0 : n.name, ' ') })
              ]
          })
        : null;
}
let A = function (e) {
    let { channelId: t, messageId: n, soundId: a, messageSounds: s, jumbo: u = !1 } = e,
        d = E.jU.useSetting(),
        y = (0, o.e7)([h.Z], () => h.Z.getSoundById(a), [a]),
        b = r.useMemo(() => {
            var e;
            return null !== (e = (0, f.Z)(t, n, a, s)) && void 0 !== e ? e : y;
        }, [t, n, a, s, y]),
        A = (0, o.e7)([v.Z], () => v.Z.getChannel(t)),
        N = (0, c.X0)({ location: 'SoundboardMention' }),
        C = r.useRef(null),
        { isPlaying: R, playSound: O } = (0, p.Z)(b, A),
        D = r.useCallback(() => {
            if (O()) {
                var e;
                null === (e = C.current) || void 0 === e || e.addAnimation();
            }
        }, [O]);
    return N
        ? null == b
            ? (0, i.jsx)(T, { playSound: D })
            : u && !d
              ? (0, i.jsx)(
                    g.ZP,
                    {
                        containerClassName: I.jumboContainer,
                        className: I.jumboButton,
                        sound: b,
                        channel: A,
                        refreshEnabled: !0,
                        onSelectItem: D,
                        isPlayingSoundOverride: R,
                        isSoundmoji: !0,
                        buttonOverlay: m.Pb.SOUNDMOJI,
                        tooltipClassName: I.tooltip,
                        tooltipContentClassName: I.tooltipContainer,
                        tooltipOverride: (0, i.jsx)(_.Dp, { sound: b }),
                        soundmojiVisualEffectRef: C
                    },
                    ''.concat(b.soundId)
                )
              : (0, i.jsx)(l.ua7, {
                    'aria-label': b.name,
                    text: (0, i.jsx)(_.Dp, { sound: b }),
                    tooltipClassName: I.tooltip,
                    tooltipContentClassName: I.tooltipContainer,
                    position: 'top',
                    delay: 500,
                    children: (e) =>
                        (0, i.jsx)('span', {
                            ...e,
                            children: (0, i.jsx)(S, {
                                sound: b,
                                playSound: D,
                                isPlaying: R
                            })
                        })
                })
        : null;
};
