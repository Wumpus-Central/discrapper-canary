n.d(t, { Ay: () => G, LF: () => _ });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(702841),
    o = n(939249),
    u = n(983851),
    d = n(866665),
    c = n(565645),
    m = n(864145),
    x = n(926972),
    h = n(470020),
    j = n(319993),
    g = n(102597),
    p = n(904054),
    f = n(584014),
    A = n(885386),
    N = n(174459),
    I = n(652215);
function v(e, t) {
    let { isPlaying: n, playSound: l } = (0, f.A)(null != e ? (0, g.A)(e.soundId) : null);
    return {
        isPlaying: n,
        playSound: i.useCallback(async () => {
            let n = (0, p.A)(e?.volume ?? 1, A.HO.getSetting());
            return (
                !!(await l({ volume: n })) &&
                (N.default.track(I.HAw.SOUNDMOJI_PLAY, {
                    guild_id: t?.guild_id,
                    channel_id: t?.id,
                    sound_guild_id: e?.guildId,
                    sound_id: e?.soundId,
                }),
                !0)
            );
        }, [t?.guild_id, t?.id, l, e?.guildId, e?.soundId, e?.volume]),
    };
}
var b = n(209932),
    E = n(807348),
    S = n(817232),
    C = n(734057),
    T = n(375708),
    y = n(701144);
function O(e) {
    let { playSound: t } = e;
    return (0, l.jsxs)(o.D, {
        title: "Risky Click",
        tag: "span",
        onClick: t,
        className: y.Ls,
        children: [
            (0, l.jsx)(u.H, { size: "md", color: "currentColor", className: y.uA }),
            (0, l.jsx)("span", { children: "Unknown" }),
        ],
    });
}
function _(e) {
    let { soundId: t } = e,
        n = (0, r.bG)([b.A], () => b.A.getSoundById(t)),
        i = (0, x.tj)({ location: "SoundboardMentionInline" }),
        { isPlaying: s, playSound: a } = v(n);
    return i
        ? null == n
            ? (0, l.jsx)(O, {})
            : (0, l.jsx)(R, { className: y.wg, isPlaying: s, playSound: a, sound: n })
        : null;
}
function R(e) {
    let { className: t, sound: n, playSound: i, isPlaying: s } = e,
        r = n?.emojiId != null || n?.emojiName != null,
        u = T.intl.formatToPlainString(T.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name });
    return (0, m.X)({ location: "SoundboardMentionInline" })
        ? (0, l.jsxs)(o.D, {
              "aria-label": u,
              tag: "span",
              onClick: i,
              className: a()(y.Ls, y.oR, { [y.he]: !0 === s }, t),
              children: [
                  r && (0, l.jsx)(c.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: y.JS }),
                  (0, l.jsx)("span", { children: ` ${n?.name} ` }),
              ],
          })
        : null;
}
let G = function (e) {
    let { channelId: t, messageId: n, soundId: s, messageSounds: a, jumbo: o = !1 } = e,
        u = A.hH.useSetting(),
        c = (0, r.bG)([b.A], () => b.A.getSoundById(s), [s]),
        x = i.useMemo(() => (0, h.A)(t, n, s, a) ?? c, [t, n, s, a, c]),
        g = (0, r.bG)([C.A], () => C.A.getChannel(t)),
        p = (0, m.X)({ location: "SoundboardMention" }),
        f = i.useRef(null),
        { isPlaying: N, playSound: I } = v(x, g),
        T = i.useCallback(async () => {
            (await I()) && f.current?.addAnimation();
        }, [I]);
    return p
        ? null == x
            ? (0, l.jsx)(O, { playSound: T })
            : o && !u
              ? (0, l.jsx)(
                    S.Ay,
                    {
                        containerClassName: y.Ti,
                        className: y.UX,
                        sound: x,
                        channel: g,
                        onSelectItem: T,
                        isPlayingSoundOverride: N,
                        isSoundmoji: !0,
                        buttonOverlay: E.If.SOUNDMOJI,
                        tooltipClassName: y.YL,
                        tooltipContentClassName: y.R3,
                        tooltipOverride: (0, l.jsx)(j.WE, { sound: x }),
                        soundmojiVisualEffectRef: f,
                    },
                    `${x.soundId}`,
                )
              : (0, l.jsx)(d.m, {
                    "aria-label": x.name,
                    "data-pending-richtooltip-migration": !0,
                    __unsupportedReactNodeAsText: (0, l.jsx)(j.WE, { sound: x }),
                    position: "top",
                    delay: 500,
                    children: (0, l.jsx)("span", { children: (0, l.jsx)(R, { sound: x, playSound: T, isPlaying: N }) }),
                })
        : null;
};
