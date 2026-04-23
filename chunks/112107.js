"use strict";
n.d(t, { Ay: () => w, LF: () => L });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(702841),
    l = n(990078),
    d = n(939249),
    _ = n(983851),
    u = n(565645),
    c = n(864145),
    E = n(704591),
    h = n(470020),
    m = n(320572),
    f = n(102597),
    g = n(904054),
    p = n(584014),
    A = n(253932),
    I = n(954571),
    T = n(652215);
function S(e, t) {
    let { isPlaying: n, playSound: i } = (0, p.A)(null != e ? (0, f.A)(e.soundId) : null);
    return {
        isPlaying: n,
        playSound: r.useCallback(
            () =>
                !!i({ volume: (0, g.A)(e?.volume ?? 1, A.HO.getSetting()) }) &&
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
var N = n(209932),
    C = n(807348),
    R = n(805945),
    O = n(734057),
    y = n(985018),
    v = n(720417);
function D(e) {
    let { playSound: t } = e;
    return (0, i.jsxs)(d.D, {
        title: "Risky Click",
        tag: "span",
        onClick: t,
        className: v.Ls,
        children: [
            (0, i.jsx)(_.H, { size: "md", color: "currentColor", className: v.uA }),
            (0, i.jsx)("span", { children: "Unknown" }),
        ],
    });
}
function L(e) {
    let { soundId: t } = e,
        n = (0, o.bG)([N.A], () => N.A.getSoundById(t)),
        r = (0, E.tj)({ location: "SoundboardMentionInline" }),
        { isPlaying: s, playSound: a } = S(n);
    return r
        ? null == n
            ? (0, i.jsx)(D, {})
            : (0, i.jsx)(b, { className: v.wg, isPlaying: s, playSound: a, sound: n })
        : null;
}
function b(e) {
    let { className: t, sound: n, playSound: r, isPlaying: s } = e,
        o = n?.emojiId != null || n?.emojiName != null,
        l = y.intl.formatToPlainString(y.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name });
    return (0, c.X)({ location: "SoundboardMentionInline" })
        ? (0, i.jsxs)(d.D, {
              "aria-label": l,
              tag: "span",
              onClick: r,
              className: a()(v.Ls, v.oR, { [v.he]: !0 === s }, t),
              children: [
                  o && (0, i.jsx)(u.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: v.JS }),
                  (0, i.jsx)("span", { children: ` ${n?.name} ` }),
              ],
          })
        : null;
}
let w = function (e) {
    let { channelId: t, messageId: n, soundId: s, messageSounds: a, jumbo: d = !1 } = e,
        _ = A.hH.useSetting(),
        u = (0, o.bG)([N.A], () => N.A.getSoundById(s), [s]),
        E = r.useMemo(() => (0, h.A)(t, n, s, a) ?? u, [t, n, s, a, u]),
        f = (0, o.bG)([O.A], () => O.A.getChannel(t)),
        g = (0, c.X)({ location: "SoundboardMention" }),
        p = r.useRef(null),
        { isPlaying: I, playSound: T } = S(E, f),
        y = r.useCallback(async () => {
            (await T()) && p.current?.addAnimation();
        }, [T]);
    return g
        ? null == E
            ? (0, i.jsx)(D, { playSound: y })
            : d && !_
              ? (0, i.jsx)(
                    R.Ay,
                    {
                        containerClassName: v.Ti,
                        className: v.UX,
                        sound: E,
                        channel: f,
                        onSelectItem: y,
                        isPlayingSoundOverride: I,
                        isSoundmoji: !0,
                        buttonOverlay: C.If.SOUNDMOJI,
                        tooltipClassName: v.YL,
                        tooltipContentClassName: v.R3,
                        tooltipOverride: (0, i.jsx)(m.WE, { sound: E }),
                        soundmojiVisualEffectRef: p,
                    },
                    `${E.soundId}`,
                )
              : (0, i.jsx)(l.m, {
                    "aria-label": E.name,
                    "data-pending-richtooltip-migration": !0,
                    __unsupportedReactNodeAsText: (0, i.jsx)(m.WE, { sound: E }),
                    position: "top",
                    delay: 500,
                    children: (0, i.jsx)("span", { children: (0, i.jsx)(b, { sound: E, playSound: y, isPlaying: I }) }),
                })
        : null;
};
