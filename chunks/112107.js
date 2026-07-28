"use strict";
n.d(t, { Ay: () => M, LF: () => v });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(702841),
    o = n(939249),
    d = n(983851),
    c = n(866665),
    u = n(565645),
    _ = n(864145),
    E = n(926972),
    A = n(470020),
    h = n(319993),
    I = n(102597),
    f = n(904054),
    p = n(584014),
    T = n(885386),
    m = n(174459),
    g = n(652215);
function S(e, t) {
    let { isPlaying: n, playSound: i } = (0, p.A)(null != e ? (0, I.A)(e.soundId) : null);
    return {
        isPlaying: n,
        playSound: r.useCallback(async () => {
            let n = (0, f.A)(e?.volume ?? 1, T.HO.getSetting());
            return (
                !!(await i({ volume: n })) &&
                (m.default.track(g.HAw.SOUNDMOJI_PLAY, {
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
var N = n(209932),
    C = n(807348),
    O = n(805945),
    R = n(734057),
    L = n(375708),
    y = n(514169);
function D(e) {
    let { playSound: t } = e;
    return (0, i.jsxs)(o.D, {
        title: "Risky Click",
        tag: "span",
        onClick: t,
        className: y.Ls,
        children: [
            (0, i.jsx)(d.H, { size: "md", color: "currentColor", className: y.uA }),
            (0, i.jsx)("span", { children: "Unknown" }),
        ],
    });
}
function v(e) {
    let { soundId: t } = e,
        n = (0, l.bG)([N.A], () => N.A.getSoundById(t)),
        r = (0, E.tj)({ location: "SoundboardMentionInline" }),
        { isPlaying: a, playSound: s } = S(n);
    return r
        ? null == n
            ? (0, i.jsx)(D, {})
            : (0, i.jsx)(b, { className: y.wg, isPlaying: a, playSound: s, sound: n })
        : null;
}
function b(e) {
    let { className: t, sound: n, playSound: r, isPlaying: a } = e,
        l = n?.emojiId != null || n?.emojiName != null,
        d = L.intl.formatToPlainString(L.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name });
    return (0, _.X)({ location: "SoundboardMentionInline" })
        ? (0, i.jsxs)(o.D, {
              "aria-label": d,
              tag: "span",
              onClick: r,
              className: s()(y.Ls, y.oR, { [y.he]: !0 === a }, t),
              children: [
                  l && (0, i.jsx)(u.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: y.JS }),
                  (0, i.jsx)("span", { children: ` ${n?.name} ` }),
              ],
          })
        : null;
}
let M = function (e) {
    let { channelId: t, messageId: n, soundId: a, messageSounds: s, jumbo: o = !1 } = e,
        d = T.hH.useSetting(),
        u = (0, l.bG)([N.A], () => N.A.getSoundById(a), [a]),
        E = r.useMemo(() => (0, A.A)(t, n, a, s) ?? u, [t, n, a, s, u]),
        I = (0, l.bG)([R.A], () => R.A.getChannel(t)),
        f = (0, _.X)({ location: "SoundboardMention" }),
        p = r.useRef(null),
        { isPlaying: m, playSound: g } = S(E, I),
        L = r.useCallback(async () => {
            (await g()) && p.current?.addAnimation();
        }, [g]);
    return f
        ? null == E
            ? (0, i.jsx)(D, { playSound: L })
            : o && !d
              ? (0, i.jsx)(
                    O.Ay,
                    {
                        containerClassName: y.Ti,
                        className: y.UX,
                        sound: E,
                        channel: I,
                        onSelectItem: L,
                        isPlayingSoundOverride: m,
                        isSoundmoji: !0,
                        buttonOverlay: C.If.SOUNDMOJI,
                        tooltipClassName: y.YL,
                        tooltipContentClassName: y.R3,
                        tooltipOverride: (0, i.jsx)(h.WE, { sound: E }),
                        soundmojiVisualEffectRef: p,
                    },
                    `${E.soundId}`,
                )
              : (0, i.jsx)(c.m, {
                    "aria-label": E.name,
                    "data-pending-richtooltip-migration": !0,
                    __unsupportedReactNodeAsText: (0, i.jsx)(h.WE, { sound: E }),
                    position: "top",
                    delay: 500,
                    children: (0, i.jsx)("span", { children: (0, i.jsx)(b, { sound: E, playSound: L, isPlaying: m }) }),
                })
        : null;
};
