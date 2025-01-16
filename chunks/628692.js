r.d(n, {
    ku: function () {
        return S;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(120356),
    o = r.n(s),
    l = r(399606),
    u = r(481060),
    c = r(596454),
    d = r(722932),
    f = r(125900),
    _ = r(801606),
    h = r(409700),
    p = r(321889),
    m = r(763296),
    g = r(697426),
    E = r(409673),
    v = r(695346),
    I = r(592125),
    T = r(388032),
    b = r(205659);
function y(e) {
    let { playSound: n } = e;
    return (0, i.jsxs)(u.Clickable, {
        title: 'Risky Click',
        tag: 'span',
        onClick: n,
        className: b.inlineContainer,
        children: [
            (0, i.jsx)(u.VoiceNormalIcon, {
                size: 'md',
                color: 'currentColor',
                className: b.unknownSound
            }),
            (0, i.jsx)('span', { children: 'Unknown' })
        ]
    });
}
function S(e) {
    let { soundId: n } = e,
        r = (0, l.e7)([m.Z], () => m.Z.getSoundById(n)),
        a = (0, f.V2)({ location: 'SoundboardMentionInline' }),
        { playing: s, playSound: o } = (0, p.Z)(r);
    return a
        ? null == r
            ? (0, i.jsx)(y, {})
            : (0, i.jsx)(A, {
                  isPlaying: s,
                  playSound: o,
                  sound: r
              })
        : null;
}
function A(e) {
    let { sound: n, playSound: r, isPlaying: a } = e,
        s = (null == n ? void 0 : n.emojiId) != null || (null == n ? void 0 : n.emojiName) != null,
        l = T.intl.formatToPlainString(T.t.tuMUJy, {
            emojiName: null == n ? void 0 : n.emojiName,
            soundName: null == n ? void 0 : n.name
        });
    return (0, d.X0)({ location: 'SoundboardMentionInline' })
        ? (0, i.jsxs)(u.Clickable, {
              'aria-label': l,
              tag: 'span',
              onClick: r,
              className: o()(b.inlineContainer, b.inlineButton, { [b.playing]: !0 === a }),
              children: [
                  s &&
                      (0, i.jsx)(c.Z, {
                          emojiId: null == n ? void 0 : n.emojiId,
                          emojiName: null == n ? void 0 : n.emojiName,
                          className: b.soundmojiEmoji
                      }),
                  (0, i.jsx)('span', { children: ' '.concat(null == n ? void 0 : n.name, ' ') })
              ]
          })
        : null;
}
function N(e) {
    let { channelId: n, messageId: r, soundId: s, jumbo: o = !1 } = e,
        c = v.jU.useSetting(),
        f = (0, l.e7)([m.Z], () => m.Z.getSoundById(s), [s]),
        T = a.useMemo(() => {
            var e;
            return null !== (e = (0, _.Z)(n, r, s)) && void 0 !== e ? e : f;
        }, [n, r, s, f]),
        S = (0, l.e7)([I.Z], () => I.Z.getChannel(n)),
        N = (0, d.X0)({ location: 'SoundboardMention' }),
        C = a.useRef(null),
        { playing: R, playSound: O } = (0, p.Z)(T, S),
        D = a.useCallback(() => {
            if (O()) {
                var e;
                null === (e = C.current) || void 0 === e || e.addAnimation();
            }
        }, [O]);
    return N
        ? null == T
            ? (0, i.jsx)(y, { playSound: D })
            : o && !c
              ? (0, i.jsx)(
                    E.ZP,
                    {
                        containerClassName: b.jumboContainer,
                        className: b.jumboButton,
                        sound: T,
                        channel: S,
                        refreshEnabled: !0,
                        onSelectItem: D,
                        isPlayingSoundOverride: R,
                        isSoundmoji: !0,
                        buttonOverlay: g.Pb.SOUNDMOJI,
                        tooltipClassName: b.tooltip,
                        tooltipContentClassName: b.tooltipContainer,
                        tooltipOverride: (0, i.jsx)(h.Dp, { sound: T }),
                        soundmojiVisualEffectRef: C
                    },
                    ''.concat(T.soundId)
                )
              : (0, i.jsx)(u.Tooltip, {
                    'aria-label': T.name,
                    text: (0, i.jsx)(h.Dp, { sound: T }),
                    tooltipClassName: b.tooltip,
                    tooltipContentClassName: b.tooltipContainer,
                    position: 'top',
                    delay: 500,
                    children: (e) =>
                        (0, i.jsx)('span', {
                            ...e,
                            children: (0, i.jsx)(A, {
                                sound: T,
                                playSound: D,
                                isPlaying: R
                            })
                        })
                })
        : null;
}
n.ZP = N;
