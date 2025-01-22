r.d(n, {
    ku: function () {
        return S;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(120356),
    s = r.n(o),
    l = r(399606),
    u = r(481060),
    c = r(596454),
    d = r(722932),
    f = r(125900),
    p = r(801606),
    h = r(409700),
    _ = r(321889),
    m = r(763296),
    g = r(697426),
    E = r(409673),
    v = r(695346),
    y = r(592125),
    b = r(388032),
    I = r(205659);
function T(e) {
    let { playSound: n } = e;
    return (0, i.jsxs)(u.Clickable, {
        title: 'Risky Click',
        tag: 'span',
        onClick: n,
        className: I.inlineContainer,
        children: [
            (0, i.jsx)(u.VoiceNormalIcon, {
                size: 'md',
                color: 'currentColor',
                className: I.unknownSound
            }),
            (0, i.jsx)('span', { children: 'Unknown' })
        ]
    });
}
function S(e) {
    let { soundId: n } = e,
        r = (0, l.e7)([m.Z], () => m.Z.getSoundById(n)),
        a = (0, f.V2)({ location: 'SoundboardMentionInline' }),
        { playing: o, playSound: s } = (0, _.Z)(r);
    return a
        ? null == r
            ? (0, i.jsx)(T, {})
            : (0, i.jsx)(A, {
                  isPlaying: o,
                  playSound: s,
                  sound: r
              })
        : null;
}
function A(e) {
    let { sound: n, playSound: r, isPlaying: a } = e,
        o = (null == n ? void 0 : n.emojiId) != null || (null == n ? void 0 : n.emojiName) != null,
        l = b.intl.formatToPlainString(b.t.tuMUJy, {
            emojiName: null == n ? void 0 : n.emojiName,
            soundName: null == n ? void 0 : n.name
        });
    return (0, d.X0)({ location: 'SoundboardMentionInline' })
        ? (0, i.jsxs)(u.Clickable, {
              'aria-label': l,
              tag: 'span',
              onClick: r,
              className: s()(I.inlineContainer, I.inlineButton, { [I.playing]: !0 === a }),
              children: [
                  o &&
                      (0, i.jsx)(c.Z, {
                          emojiId: null == n ? void 0 : n.emojiId,
                          emojiName: null == n ? void 0 : n.emojiName,
                          className: I.soundmojiEmoji
                      }),
                  (0, i.jsx)('span', { children: ' '.concat(null == n ? void 0 : n.name, ' ') })
              ]
          })
        : null;
}
function C(e) {
    let { channelId: n, messageId: r, soundId: o, jumbo: s = !1 } = e,
        c = v.jU.useSetting(),
        f = (0, l.e7)([m.Z], () => m.Z.getSoundById(o), [o]),
        b = a.useMemo(() => {
            var e;
            return null !== (e = (0, p.Z)(n, r, o)) && void 0 !== e ? e : f;
        }, [n, r, o, f]),
        S = (0, l.e7)([y.Z], () => y.Z.getChannel(n)),
        C = (0, d.X0)({ location: 'SoundboardMention' }),
        N = a.useRef(null),
        { playing: R, playSound: O } = (0, _.Z)(b, S),
        D = a.useCallback(() => {
            if (O()) {
                var e;
                null === (e = N.current) || void 0 === e || e.addAnimation();
            }
        }, [O]);
    return C
        ? null == b
            ? (0, i.jsx)(T, { playSound: D })
            : s && !c
              ? (0, i.jsx)(
                    E.ZP,
                    {
                        containerClassName: I.jumboContainer,
                        className: I.jumboButton,
                        sound: b,
                        channel: S,
                        refreshEnabled: !0,
                        onSelectItem: D,
                        isPlayingSoundOverride: R,
                        isSoundmoji: !0,
                        buttonOverlay: g.Pb.SOUNDMOJI,
                        tooltipClassName: I.tooltip,
                        tooltipContentClassName: I.tooltipContainer,
                        tooltipOverride: (0, i.jsx)(h.Dp, { sound: b }),
                        soundmojiVisualEffectRef: N
                    },
                    ''.concat(b.soundId)
                )
              : (0, i.jsx)(u.Tooltip, {
                    'aria-label': b.name,
                    text: (0, i.jsx)(h.Dp, { sound: b }),
                    tooltipClassName: I.tooltip,
                    tooltipContentClassName: I.tooltipContainer,
                    position: 'top',
                    delay: 500,
                    children: (e) =>
                        (0, i.jsx)('span', {
                            ...e,
                            children: (0, i.jsx)(A, {
                                sound: b,
                                playSound: D,
                                isPlaying: R
                            })
                        })
                })
        : null;
}
n.ZP = C;
