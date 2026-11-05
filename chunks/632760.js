t.d(n, { LF: () => k, Ay: () => R });
var s = t(477900),
    i = t(582128),
    l = t(503698),
    a = t.n(l),
    r = t(164636),
    o = t(939249),
    c = t(983851),
    d = t(866665),
    u = t(565645),
    m = t(864145),
    h = t(926972),
    x = t(470020),
    j = t(456086),
    g = t(102597),
    p = t(904054),
    b = t(584014),
    N = t(253932),
    I = t(129230),
    f = t(652215);
function v(e, n) {
    let { isPlaying: t, playSound: s } = (0, b.A)(null != e ? (0, g.A)(e.soundId) : null);
    return {
        isPlaying: t,
        playSound: i.useCallback(async () => {
            let t = (0, p.A)(e?.volume ?? 1, N.HO.getSetting());
            return (
                !!(await s({ volume: t })) &&
                (I.default.track(f.HAw.SOUNDMOJI_PLAY, {
                    guild_id: n?.guild_id,
                    channel_id: n?.id,
                    sound_guild_id: e?.guildId,
                    sound_id: e?.soundId,
                }),
                !0)
            );
        }, [n?.guild_id, n?.id, s, e?.guildId, e?.soundId, e?.volume]),
    };
}
var C = t(209932),
    A = t(807348),
    E = t(533491),
    S = t(734057),
    y = t(792996),
    O = t(701144);
function T(e) {
    let { playSound: n } = e;
    return (0, s.jsxs)(o.D, {
        title: "Risky Click",
        tag: "span",
        onClick: n,
        className: O.Ls,
        children: [
            (0, s.jsx)(c.VoiceNormalIcon, { size: "md", color: "currentColor", className: O.uA }),
            (0, s.jsx)("span", { children: "Unknown" }),
        ],
    });
}
function k(e) {
    let { soundId: n } = e,
        t = (0, r.bG)([C.A], () => C.A.getSoundById(n)),
        i = (0, h.t)({ location: "SoundboardMentionInline" }),
        { isPlaying: l, playSound: a } = v(t);
    return i
        ? null == t
            ? (0, s.jsx)(T, {})
            : (0, s.jsx)(_, { className: O.wg, isPlaying: l, playSound: a, sound: t })
        : null;
}
function _(e) {
    let { className: n, sound: t, playSound: i, isPlaying: l } = e,
        r = t?.emojiId != null || t?.emojiName != null,
        c = y.intl.formatToPlainString(y.t.tuMUJ2, { emojiName: t?.emojiName, soundName: t?.name });
    return (0, m.X)({ location: "SoundboardMentionInline" })
        ? (0, s.jsxs)(o.D, {
              "aria-label": c,
              tag: "span",
              onClick: i,
              className: a()(O.Ls, O.oR, { [O.he]: !0 === l }, n),
              children: [
                  r && (0, s.jsx)(u.A, { emojiId: t?.emojiId, emojiName: t?.emojiName, className: O.JS }),
                  (0, s.jsx)("span", { children: ` ${t?.name} ` }),
              ],
          })
        : null;
}
let R = function (e) {
    let { channelId: n, messageId: t, soundId: l, messageSounds: a, jumbo: o = !1 } = e,
        c = N.hH.useSetting(),
        u = (0, r.bG)([C.A], () => C.A.getSoundById(l), [l]),
        h = i.useMemo(() => (0, x.A)(n, t, l, a) ?? u, [n, t, l, a, u]),
        g = (0, r.bG)([S.A], () => S.A.getChannel(n)),
        p = (0, m.X)({ location: "SoundboardMention" }),
        b = i.useRef(null),
        { isPlaying: I, playSound: f } = v(h, g),
        y = i.useCallback(async () => {
            (await f()) && b.current?.addAnimation();
        }, [f]);
    return p
        ? null == h
            ? (0, s.jsx)(T, { playSound: y })
            : o && !c
              ? (0, s.jsx)(
                    E.Ay,
                    {
                        containerClassName: O.Ti,
                        className: O.UX,
                        sound: h,
                        channel: g,
                        onSelectItem: y,
                        isPlayingSoundOverride: I,
                        isSoundmoji: !0,
                        buttonOverlay: A.If.SOUNDMOJI,
                        tooltipClassName: O.YL,
                        tooltipContentClassName: O.R3,
                        tooltipOverride: (0, s.jsx)(j.WE, { sound: h }),
                        soundmojiVisualEffectRef: b,
                    },
                    `${h.soundId}`,
                )
              : (0, s.jsx)(d.m, {
                    "aria-label": h.name,
                    "data-pending-richtooltip-migration": !0,
                    __unsupportedReactNodeAsText: (0, s.jsx)(j.WE, { sound: h }),
                    position: "top",
                    delay: 500,
                    children: (0, s.jsx)("span", { children: (0, s.jsx)(_, { sound: h, playSound: y, isPlaying: I }) }),
                })
        : null;
};
