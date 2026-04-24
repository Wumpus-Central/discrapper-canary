"use strict";
n.d(t, { Ay: () => L, LF: () => w });
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(702841),
    o = n(990078),
    c = n(939249),
    u = n(983851),
    d = n(565645),
    h = n(864145),
    m = n(704591),
    p = n(470020),
    f = n(320572),
    g = n(102597),
    _ = n(904054),
    x = n(584014),
    C = n(253932),
    A = n(954571),
    E = n(652215);
function I(e, t) {
    let { isPlaying: n, playSound: l } = (0, x.A)(null != e ? (0, g.A)(e.soundId) : null);
    return {
        isPlaying: n,
        playSound: i.useCallback(
            () =>
                !!l({ volume: (0, _.A)(e?.volume ?? 1, C.HO.getSetting()) }) &&
                (A.default.track(E.HAw.SOUNDMOJI_PLAY, {
                    guild_id: t?.guild_id,
                    channel_id: t?.id,
                    sound_guild_id: e?.guildId,
                    sound_id: e?.soundId,
                }),
                !0),
            [t?.guild_id, t?.id, l, e?.guildId, e?.soundId, e?.volume],
        ),
    };
}
var v = n(209932),
    y = n(807348),
    b = n(805945),
    S = n(734057),
    N = n(985018),
    j = n(720417);
function T(e) {
    let { playSound: t } = e;
    return (0, l.jsxs)(c.D, {
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
function w(e) {
    let { soundId: t } = e,
        n = (0, r.bG)([v.A], () => v.A.getSoundById(t)),
        i = (0, m.tj)({ location: "SoundboardMentionInline" }),
        { isPlaying: s, playSound: a } = I(n);
    return i
        ? null == n
            ? (0, l.jsx)(T, {})
            : (0, l.jsx)(R, { className: j.wg, isPlaying: s, playSound: a, sound: n })
        : null;
}
function R(e) {
    let { className: t, sound: n, playSound: i, isPlaying: s } = e,
        r = n?.emojiId != null || n?.emojiName != null,
        o = N.intl.formatToPlainString(N.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name });
    return (0, h.X)({ location: "SoundboardMentionInline" })
        ? (0, l.jsxs)(c.D, {
              "aria-label": o,
              tag: "span",
              onClick: i,
              className: a()(j.Ls, j.oR, { [j.he]: !0 === s }, t),
              children: [
                  r && (0, l.jsx)(d.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: j.JS }),
                  (0, l.jsx)("span", { children: ` ${n?.name} ` }),
              ],
          })
        : null;
}
let L = function (e) {
    let { channelId: t, messageId: n, soundId: s, messageSounds: a, jumbo: c = !1 } = e,
        u = C.hH.useSetting(),
        d = (0, r.bG)([v.A], () => v.A.getSoundById(s), [s]),
        m = i.useMemo(() => (0, p.A)(t, n, s, a) ?? d, [t, n, s, a, d]),
        g = (0, r.bG)([S.A], () => S.A.getChannel(t)),
        _ = (0, h.X)({ location: "SoundboardMention" }),
        x = i.useRef(null),
        { isPlaying: A, playSound: E } = I(m, g),
        N = i.useCallback(async () => {
            (await E()) && x.current?.addAnimation();
        }, [E]);
    return _
        ? null == m
            ? (0, l.jsx)(T, { playSound: N })
            : c && !u
              ? (0, l.jsx)(
                    b.Ay,
                    {
                        containerClassName: j.Ti,
                        className: j.UX,
                        sound: m,
                        channel: g,
                        onSelectItem: N,
                        isPlayingSoundOverride: A,
                        isSoundmoji: !0,
                        buttonOverlay: y.If.SOUNDMOJI,
                        tooltipClassName: j.YL,
                        tooltipContentClassName: j.R3,
                        tooltipOverride: (0, l.jsx)(f.WE, { sound: m }),
                        soundmojiVisualEffectRef: x,
                    },
                    `${m.soundId}`,
                )
              : (0, l.jsx)(o.m, {
                    "aria-label": m.name,
                    "data-pending-richtooltip-migration": !0,
                    __unsupportedReactNodeAsText: (0, l.jsx)(f.WE, { sound: m }),
                    position: "top",
                    delay: 500,
                    children: (0, l.jsx)("span", { children: (0, l.jsx)(R, { sound: m, playSound: N, isPlaying: A }) }),
                })
        : null;
};
