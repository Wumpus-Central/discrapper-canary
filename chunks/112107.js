n.d(t, { Ay: () => _, LF: () => k });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    a = n.n(l),
    r = n(702841),
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
    N = n(584014),
    I = n(253932),
    b = n(174459),
    f = n(652215);
function v(e, t) {
    let { isPlaying: n, playSound: i } = (0, N.A)(null != e ? (0, g.A)(e.soundId) : null);
    return {
        isPlaying: n,
        playSound: s.useCallback(async () => {
            let n = (0, p.A)(e?.volume ?? 1, I.HO.getSetting());
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
var A = n(209932),
    E = n(807348),
    C = n(805945),
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
        n = (0, r.bG)([A.A], () => A.A.getSoundById(t)),
        s = (0, x.t)({ location: "SoundboardMentionInline" }),
        { isPlaying: l, playSound: a } = v(n);
    return s
        ? null == n
            ? (0, i.jsx)(T, {})
            : (0, i.jsx)(P, { className: y.wg, isPlaying: l, playSound: a, sound: n })
        : null;
}
function P(e) {
    let { className: t, sound: n, playSound: s, isPlaying: l } = e,
        r = n?.emojiId != null || n?.emojiName != null,
        c = O.intl.formatToPlainString(O.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name });
    return (0, m.X)({ location: "SoundboardMentionInline" })
        ? (0, i.jsxs)(o.D, {
              "aria-label": c,
              tag: "span",
              onClick: s,
              className: a()(y.Ls, y.oR, { [y.he]: !0 === l }, t),
              children: [
                  r && (0, i.jsx)(u.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: y.JS }),
                  (0, i.jsx)("span", { children: ` ${n?.name} ` }),
              ],
          })
        : null;
}
let _ = function (e) {
    let { channelId: t, messageId: n, soundId: l, messageSounds: a, jumbo: o = !1 } = e,
        c = I.hH.useSetting(),
        u = (0, r.bG)([A.A], () => A.A.getSoundById(l), [l]),
        x = s.useMemo(() => (0, h.A)(t, n, l, a) ?? u, [t, n, l, a, u]),
        g = (0, r.bG)([S.A], () => S.A.getChannel(t)),
        p = (0, m.X)({ location: "SoundboardMention" }),
        N = s.useRef(null),
        { isPlaying: b, playSound: f } = v(x, g),
        O = s.useCallback(async () => {
            (await f()) && N.current?.addAnimation();
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
                        buttonOverlay: E.If.SOUNDMOJI,
                        tooltipClassName: y.YL,
                        tooltipContentClassName: y.R3,
                        tooltipOverride: (0, i.jsx)(j.WE, { sound: x }),
                        soundmojiVisualEffectRef: N,
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
