n.d(t, { Ay: () => _, LF: () => k });
var l = n(477900),
    s = n(582128),
    i = n(503698),
    a = n.n(i),
    r = n(702841),
    o = n(939249),
    u = n(983851),
    c = n(866665),
    d = n(565645),
    m = n(864145),
    x = n(926972),
    h = n(470020),
    j = n(319993),
    p = n(102597),
    g = n(904054),
    f = n(584014),
    N = n(885386),
    I = n(174459),
    A = n(652215);
function v(e, t) {
    let { isPlaying: n, playSound: l } = (0, f.A)(null != e ? (0, p.A)(e.soundId) : null);
    return {
        isPlaying: n,
        playSound: s.useCallback(async () => {
            let n = (0, g.A)(e?.volume ?? 1, N.HO.getSetting());
            return (
                !!(await l({ volume: n })) &&
                (I.default.track(A.HAw.SOUNDMOJI_PLAY, {
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
    S = n(807348),
    E = n(817232),
    C = n(734057),
    T = n(660183),
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
function k(e) {
    let { soundId: t } = e,
        n = (0, r.bG)([b.A], () => b.A.getSoundById(t)),
        s = (0, x.tj)({ location: "SoundboardMentionInline" }),
        { isPlaying: i, playSound: a } = v(n);
    return s
        ? null == n
            ? (0, l.jsx)(O, {})
            : (0, l.jsx)(G, { className: y.wg, isPlaying: i, playSound: a, sound: n })
        : null;
}
function G(e) {
    let { className: t, sound: n, playSound: s, isPlaying: i } = e,
        r = n?.emojiId != null || n?.emojiName != null,
        u = T.intl.formatToPlainString(T.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name });
    return (0, m.X)({ location: "SoundboardMentionInline" })
        ? (0, l.jsxs)(o.D, {
              "aria-label": u,
              tag: "span",
              onClick: s,
              className: a()(y.Ls, y.oR, { [y.he]: !0 === i }, t),
              children: [
                  r && (0, l.jsx)(d.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: y.JS }),
                  (0, l.jsx)("span", { children: ` ${n?.name} ` }),
              ],
          })
        : null;
}
let _ = function (e) {
    let { channelId: t, messageId: n, soundId: i, messageSounds: a, jumbo: o = !1 } = e,
        u = N.hH.useSetting(),
        d = (0, r.bG)([b.A], () => b.A.getSoundById(i), [i]),
        x = s.useMemo(() => (0, h.A)(t, n, i, a) ?? d, [t, n, i, a, d]),
        p = (0, r.bG)([C.A], () => C.A.getChannel(t)),
        g = (0, m.X)({ location: "SoundboardMention" }),
        f = s.useRef(null),
        { isPlaying: I, playSound: A } = v(x, p),
        T = s.useCallback(async () => {
            (await A()) && f.current?.addAnimation();
        }, [A]);
    return g
        ? null == x
            ? (0, l.jsx)(O, { playSound: T })
            : o && !u
              ? (0, l.jsx)(
                    E.Ay,
                    {
                        containerClassName: y.Ti,
                        className: y.UX,
                        sound: x,
                        channel: p,
                        onSelectItem: T,
                        isPlayingSoundOverride: I,
                        isSoundmoji: !0,
                        buttonOverlay: S.If.SOUNDMOJI,
                        tooltipClassName: y.YL,
                        tooltipContentClassName: y.R3,
                        tooltipOverride: (0, l.jsx)(j.WE, { sound: x }),
                        soundmojiVisualEffectRef: f,
                    },
                    `${x.soundId}`,
                )
              : (0, l.jsx)(c.m, {
                    "aria-label": x.name,
                    "data-pending-richtooltip-migration": !0,
                    __unsupportedReactNodeAsText: (0, l.jsx)(j.WE, { sound: x }),
                    position: "top",
                    delay: 500,
                    children: (0, l.jsx)("span", { children: (0, l.jsx)(G, { sound: x, playSound: T, isPlaying: I }) }),
                })
        : null;
};
