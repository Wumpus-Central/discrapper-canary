t.d(n, { LF: () => O, Ay: () => M });
var l = t(477900),
    s = t(582128),
    a = t(503698),
    i = t.n(a),
    r = t(164636),
    o = t(939249),
    u = t(983851),
    c = t(866665),
    d = t(565645),
    m = t(864145),
    x = t(926972),
    h = t(470020),
    p = t(456086),
    j = t(102597),
    g = t(904054),
    f = t(584014),
    v = t(253932),
    N = t(129230),
    I = t(652215);
function b(e, n) {
    let { isPlaying: t, playSound: l } = (0, f.A)(null != e ? (0, j.A)(e.soundId) : null);
    return {
        isPlaying: t,
        playSound: s.useCallback(async () => {
            let t = (0, g.A)(e?.volume ?? 1, v.HO.getSetting());
            return (
                !!(await l({ volume: t })) &&
                (N.default.track(I.HAw.SOUNDMOJI_PLAY, {
                    guild_id: n?.guild_id,
                    channel_id: n?.id,
                    sound_guild_id: e?.guildId,
                    sound_id: e?.soundId,
                }),
                !0)
            );
        }, [n?.guild_id, n?.id, l, e?.guildId, e?.soundId, e?.volume]),
    };
}
var E = t(209932),
    A = t(807348),
    C = t(533491),
    T = t(734057),
    y = t(792996),
    _ = t(701144);
function S(e) {
    let { playSound: n } = e;
    return (0, l.jsxs)(o.D, {
        title: "Risky Click",
        tag: "span",
        onClick: n,
        className: _.Ls,
        children: [
            (0, l.jsx)(u.VoiceNormalIcon, { size: "md", color: "currentColor", className: _.uA }),
            (0, l.jsx)("span", { children: "Unknown" }),
        ],
    });
}
function O(e) {
    let { soundId: n } = e,
        t = (0, r.bG)([E.A], () => E.A.getSoundById(n)),
        s = (0, x.t)({ location: "SoundboardMentionInline" }),
        { isPlaying: a, playSound: i } = b(t);
    return s
        ? null == t
            ? (0, l.jsx)(S, {})
            : (0, l.jsx)(R, { className: _.wg, isPlaying: a, playSound: i, sound: t })
        : null;
}
function R(e) {
    let { className: n, sound: t, playSound: s, isPlaying: a } = e,
        r = t?.emojiId != null || t?.emojiName != null,
        u = y.intl.formatToPlainString(y.t.tuMUJ2, { emojiName: t?.emojiName, soundName: t?.name });
    return (0, m.X)({ location: "SoundboardMentionInline" })
        ? (0, l.jsxs)(o.D, {
              "aria-label": u,
              tag: "span",
              onClick: s,
              className: i()(_.Ls, _.oR, { [_.he]: !0 === a }, n),
              children: [
                  r && (0, l.jsx)(d.A, { emojiId: t?.emojiId, emojiName: t?.emojiName, className: _.JS }),
                  (0, l.jsx)("span", { children: ` ${t?.name} ` }),
              ],
          })
        : null;
}
let M = function (e) {
    let { channelId: n, messageId: t, soundId: a, messageSounds: i, jumbo: o = !1 } = e,
        u = v.hH.useSetting(),
        d = (0, r.bG)([E.A], () => E.A.getSoundById(a), [a]),
        x = s.useMemo(() => (0, h.A)(n, t, a, i) ?? d, [n, t, a, i, d]),
        j = (0, r.bG)([T.A], () => T.A.getChannel(n)),
        g = (0, m.X)({ location: "SoundboardMention" }),
        f = s.useRef(null),
        { isPlaying: N, playSound: I } = b(x, j),
        y = s.useCallback(async () => {
            (await I()) && f.current?.addAnimation();
        }, [I]);
    return g
        ? null == x
            ? (0, l.jsx)(S, { playSound: y })
            : o && !u
              ? (0, l.jsx)(
                    C.Ay,
                    {
                        containerClassName: _.Ti,
                        className: _.UX,
                        sound: x,
                        channel: j,
                        onSelectItem: y,
                        isPlayingSoundOverride: N,
                        isSoundmoji: !0,
                        buttonOverlay: A.If.SOUNDMOJI,
                        tooltipClassName: _.YL,
                        tooltipContentClassName: _.R3,
                        tooltipOverride: (0, l.jsx)(p.WE, { sound: x }),
                        soundmojiVisualEffectRef: f,
                    },
                    `${x.soundId}`,
                )
              : (0, l.jsx)(c.m, {
                    "aria-label": x.name,
                    "data-pending-richtooltip-migration": !0,
                    __unsupportedReactNodeAsText: (0, l.jsx)(p.WE, { sound: x }),
                    position: "top",
                    delay: 500,
                    children: (0, l.jsx)("span", { children: (0, l.jsx)(R, { sound: x, playSound: y, isPlaying: N }) }),
                })
        : null;
};
