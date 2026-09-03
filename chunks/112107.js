n.d(t, { Ay: () => M, LF: () => R });
var l = n(477900),
    i = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(702841),
    o = n(939249),
    u = n(983851),
    c = n(866665),
    d = n(565645),
    h = n(864145),
    m = n(926972),
    f = n(470020),
    p = n(319993),
    g = n(102597),
    x = n(904054),
    A = n(584014),
    E = n(885386),
    C = n(174459),
    I = n(652215);
function y(e, t) {
    let { isPlaying: n, playSound: l } = (0, A.A)(null != e ? (0, g.A)(e.soundId) : null);
    return {
        isPlaying: n,
        playSound: i.useCallback(async () => {
            let n = (0, x.A)(e?.volume ?? 1, E.HO.getSetting());
            return (
                !!(await l({ volume: n })) &&
                (C.default.track(I.HAw.SOUNDMOJI_PLAY, {
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
var S = n(209932),
    N = n(807348),
    v = n(805945),
    _ = n(734057),
    T = n(375708),
    j = n(701144);
function b(e) {
    let { playSound: t } = e;
    return (0, l.jsxs)(o.D, {
        title: "Risky Click",
        tag: "span",
        onClick: t,
        className: j.Ls,
        children: [
            (0, l.jsx)(u.H, { size: "md", color: "currentColor", className: j.uA }),
            (0, l.jsx)("span", { children: "Unknown" }),
        ],
    });
}
function R(e) {
    let { soundId: t } = e,
        n = (0, a.bG)([S.A], () => S.A.getSoundById(t)),
        i = (0, m.tj)({ location: "SoundboardMentionInline" }),
        { isPlaying: s, playSound: r } = y(n);
    return i
        ? null == n
            ? (0, l.jsx)(b, {})
            : (0, l.jsx)(O, { className: j.wg, isPlaying: s, playSound: r, sound: n })
        : null;
}
function O(e) {
    let { className: t, sound: n, playSound: i, isPlaying: s } = e,
        a = n?.emojiId != null || n?.emojiName != null,
        u = T.intl.formatToPlainString(T.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name });
    return (0, h.X)({ location: "SoundboardMentionInline" })
        ? (0, l.jsxs)(o.D, {
              "aria-label": u,
              tag: "span",
              onClick: i,
              className: r()(j.Ls, j.oR, { [j.he]: !0 === s }, t),
              children: [
                  a && (0, l.jsx)(d.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: j.JS }),
                  (0, l.jsx)("span", { children: ` ${n?.name} ` }),
              ],
          })
        : null;
}
let M = function (e) {
    let { channelId: t, messageId: n, soundId: s, messageSounds: r, jumbo: o = !1 } = e,
        u = E.hH.useSetting(),
        d = (0, a.bG)([S.A], () => S.A.getSoundById(s), [s]),
        m = i.useMemo(() => (0, f.A)(t, n, s, r) ?? d, [t, n, s, r, d]),
        g = (0, a.bG)([_.A], () => _.A.getChannel(t)),
        x = (0, h.X)({ location: "SoundboardMention" }),
        A = i.useRef(null),
        { isPlaying: C, playSound: I } = y(m, g),
        T = i.useCallback(async () => {
            (await I()) && A.current?.addAnimation();
        }, [I]);
    return x
        ? null == m
            ? (0, l.jsx)(b, { playSound: T })
            : o && !u
              ? (0, l.jsx)(
                    v.Ay,
                    {
                        containerClassName: j.Ti,
                        className: j.UX,
                        sound: m,
                        channel: g,
                        onSelectItem: T,
                        isPlayingSoundOverride: C,
                        isSoundmoji: !0,
                        buttonOverlay: N.If.SOUNDMOJI,
                        tooltipClassName: j.YL,
                        tooltipContentClassName: j.R3,
                        tooltipOverride: (0, l.jsx)(p.WE, { sound: m }),
                        soundmojiVisualEffectRef: A,
                    },
                    `${m.soundId}`,
                )
              : (0, l.jsx)(c.m, {
                    "aria-label": m.name,
                    "data-pending-richtooltip-migration": !0,
                    __unsupportedReactNodeAsText: (0, l.jsx)(p.WE, { sound: m }),
                    position: "top",
                    delay: 500,
                    children: (0, l.jsx)("span", { children: (0, l.jsx)(O, { sound: m, playSound: T, isPlaying: C }) }),
                })
        : null;
};
