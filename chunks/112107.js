n.d(t, { Ay: () => G, LF: () => k });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    r = n.n(l),
    a = n(702841),
    o = n(939249),
    c = n(983851),
    d = n(866665),
    u = n(565645),
    m = n(864145),
    x = n(926972),
    h = n(470020),
    j = n(319993),
    g = n(102597),
    p = n(904054),
    I = n(584014),
    N = n(885386),
    b = n(174459),
    f = n(652215);
function A(e, t) {
    let { isPlaying: n, playSound: i } = (0, I.A)(null != e ? (0, g.A)(e.soundId) : null);
    return {
        isPlaying: n,
        playSound: s.useCallback(async () => {
            let n = (0, p.A)(e?.volume ?? 1, N.HO.getSetting());
            return (
                !!(await i({ volume: n })) &&
                (b.default.track(f.HAw.SOUNDMOJI_PLAY, {
                    guild_id: t?.guild_id,
                    channel_id: t?.id,
                    sound_guild_id: e?.guildId,
                    sound_id: e?.soundId,
                }),
                !0)
            );
        }, [t?.guild_id, t?.id, i, e?.guildId, e?.soundId, e?.volume]),
    };
}
var E = n(209932),
    v = n(807348),
    C = n(817232),
    S = n(734057),
    O = n(105292),
    y = n(701144);
function T(e) {
    let { playSound: t } = e;
    return (0, i.jsxs)(o.D, {
        title: "Risky Click",
        tag: "span",
        onClick: t,
        className: y.Ls,
        children: [
            (0, i.jsx)(c.H, { size: "md", color: "currentColor", className: y.uA }),
            (0, i.jsx)("span", { children: "Unknown" }),
        ],
    });
}
function k(e) {
    let { soundId: t } = e,
        n = (0, a.bG)([E.A], () => E.A.getSoundById(t)),
        s = (0, x.tj)({ location: "SoundboardMentionInline" }),
        { isPlaying: l, playSound: r } = A(n);
    return s
        ? null == n
            ? (0, i.jsx)(T, {})
            : (0, i.jsx)(P, { className: y.wg, isPlaying: l, playSound: r, sound: n })
        : null;
}
function P(e) {
    let { className: t, sound: n, playSound: s, isPlaying: l } = e,
        a = n?.emojiId != null || n?.emojiName != null,
        c = O.intl.formatToPlainString(O.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name });
    return (0, m.X)({ location: "SoundboardMentionInline" })
        ? (0, i.jsxs)(o.D, {
              "aria-label": c,
              tag: "span",
              onClick: s,
              className: r()(y.Ls, y.oR, { [y.he]: !0 === l }, t),
              children: [
                  a && (0, i.jsx)(u.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: y.JS }),
                  (0, i.jsx)("span", { children: ` ${n?.name} ` }),
              ],
          })
        : null;
}
let G = function (e) {
    let { channelId: t, messageId: n, soundId: l, messageSounds: r, jumbo: o = !1 } = e,
        c = N.hH.useSetting(),
        u = (0, a.bG)([E.A], () => E.A.getSoundById(l), [l]),
        x = s.useMemo(() => (0, h.A)(t, n, l, r) ?? u, [t, n, l, r, u]),
        g = (0, a.bG)([S.A], () => S.A.getChannel(t)),
        p = (0, m.X)({ location: "SoundboardMention" }),
        I = s.useRef(null),
        { isPlaying: b, playSound: f } = A(x, g),
        O = s.useCallback(async () => {
            (await f()) && I.current?.addAnimation();
        }, [f]);
    return p
        ? null == x
            ? (0, i.jsx)(T, { playSound: O })
            : o && !c
              ? (0, i.jsx)(
                    C.Ay,
                    {
                        containerClassName: y.Ti,
                        className: y.UX,
                        sound: x,
                        channel: g,
                        onSelectItem: O,
                        isPlayingSoundOverride: b,
                        isSoundmoji: !0,
                        buttonOverlay: v.If.SOUNDMOJI,
                        tooltipClassName: y.YL,
                        tooltipContentClassName: y.R3,
                        tooltipOverride: (0, i.jsx)(j.WE, { sound: x }),
                        soundmojiVisualEffectRef: I,
                    },
                    `${x.soundId}`,
                )
              : (0, i.jsx)(d.m, {
                    "aria-label": x.name,
                    "data-pending-richtooltip-migration": !0,
                    __unsupportedReactNodeAsText: (0, i.jsx)(j.WE, { sound: x }),
                    position: "top",
                    delay: 500,
                    children: (0, i.jsx)("span", { children: (0, i.jsx)(P, { sound: x, playSound: O, isPlaying: b }) }),
                })
        : null;
};
