"use strict";
n.d(t, { Ay: () => w, LF: () => D });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(702841),
    l = n(990078),
    u = n(939249),
    c = n(983851),
    d = n(565645),
    _ = n(864145),
    h = n(926972),
    f = n(470020),
    p = n(319993),
    E = n(102597),
    m = n(904054),
    g = n(584014),
    A = n(885386),
    I = n(174459),
    T = n(652215);
function S(e, t) {
    let { isPlaying: n, playSound: i } = (0, g.A)(null != e ? (0, E.A)(e.soundId) : null);
    return {
        isPlaying: n,
        playSound: r.useCallback(
            () =>
                !!i({ volume: (0, m.A)(e?.volume ?? 1, A.HO.getSetting()) }) &&
                (I.default.track(T.HAw.SOUNDMOJI_PLAY, {
                    guild_id: t?.guild_id,
                    channel_id: t?.id,
                    sound_guild_id: e?.guildId,
                    sound_id: e?.soundId,
                }),
                !0),
            [t?.guild_id, t?.id, i, e?.guildId, e?.soundId, e?.volume],
        ),
    };
}
var y = n(209932),
    C = n(807348),
    N = n(805945),
    v = n(734057),
    R = n(375708),
    O = n(720417);
function b(e) {
    let { playSound: t } = e;
    return (0, i.jsxs)(u.D, {
        title: "Risky Click",
        tag: "span",
        onClick: t,
        className: O.Ls,
        children: [
            (0, i.jsx)(c.H, { size: "md", color: "currentColor", className: O.uA }),
            (0, i.jsx)("span", { children: "Unknown" }),
        ],
    });
}
function D(e) {
    let { soundId: t } = e,
        n = (0, o.bG)([y.A], () => y.A.getSoundById(t)),
        r = (0, h.tj)({ location: "SoundboardMentionInline" }),
        { isPlaying: s, playSound: a } = S(n);
    return r
        ? null == n
            ? (0, i.jsx)(b, {})
            : (0, i.jsx)(L, { className: O.wg, isPlaying: s, playSound: a, sound: n })
        : null;
}
function L(e) {
    let { className: t, sound: n, playSound: r, isPlaying: s } = e,
        o = n?.emojiId != null || n?.emojiName != null,
        l = R.intl.formatToPlainString(R.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name });
    return (0, _.X)({ location: "SoundboardMentionInline" })
        ? (0, i.jsxs)(u.D, {
              "aria-label": l,
              tag: "span",
              onClick: r,
              className: a()(O.Ls, O.oR, { [O.he]: !0 === s }, t),
              children: [
                  o && (0, i.jsx)(d.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: O.JS }),
                  (0, i.jsx)("span", { children: ` ${n?.name} ` }),
              ],
          })
        : null;
}
let w = function (e) {
    let { channelId: t, messageId: n, soundId: s, messageSounds: a, jumbo: u = !1 } = e,
        c = A.hH.useSetting(),
        d = (0, o.bG)([y.A], () => y.A.getSoundById(s), [s]),
        h = r.useMemo(() => (0, f.A)(t, n, s, a) ?? d, [t, n, s, a, d]),
        E = (0, o.bG)([v.A], () => v.A.getChannel(t)),
        m = (0, _.X)({ location: "SoundboardMention" }),
        g = r.useRef(null),
        { isPlaying: I, playSound: T } = S(h, E),
        R = r.useCallback(async () => {
            (await T()) && g.current?.addAnimation();
        }, [T]);
    return m
        ? null == h
            ? (0, i.jsx)(b, { playSound: R })
            : u && !c
              ? (0, i.jsx)(
                    N.Ay,
                    {
                        containerClassName: O.Ti,
                        className: O.UX,
                        sound: h,
                        channel: E,
                        onSelectItem: R,
                        isPlayingSoundOverride: I,
                        isSoundmoji: !0,
                        buttonOverlay: C.If.SOUNDMOJI,
                        tooltipClassName: O.YL,
                        tooltipContentClassName: O.R3,
                        tooltipOverride: (0, i.jsx)(p.WE, { sound: h }),
                        soundmojiVisualEffectRef: g,
                    },
                    `${h.soundId}`,
                )
              : (0, i.jsx)(l.m, {
                    "aria-label": h.name,
                    "data-pending-richtooltip-migration": !0,
                    __unsupportedReactNodeAsText: (0, i.jsx)(p.WE, { sound: h }),
                    position: "top",
                    delay: 500,
                    children: (0, i.jsx)("span", { children: (0, i.jsx)(L, { sound: h, playSound: R, isPlaying: I }) }),
                })
        : null;
};
