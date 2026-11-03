n.d(t, { Ay: () => L, LF: () => k });
var i = n(477900),
    s = n(582128),
    l = n(503698),
    a = n.n(l),
    r = n(702841),
    o = n(939249),
    d = n(983851),
    u = n(866665),
    c = n(788026),
    m = n(864145),
    x = n(926972),
    h = n(470020),
    j = n(319993),
    g = n(102597),
    p = n(904054),
    b = n(584014),
    N = n(253932),
    f = n(174459),
    I = n(652215);
function v(e, t) {
    let { isPlaying: n, playSound: i } = (0, b.A)(null != e ? (0, g.A)(e.soundId) : null);
    return {
        isPlaying: n,
        playSound: s.useCallback(async () => {
            let n = (0, p.A)(e?.volume ?? 1, N.HO.getSetting());
            return (
                !!(await i({ volume: n })) &&
                (f.default.track(I.HAw.SOUNDMOJI_PLAY, {
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
    y = n(734057),
    S = n(105292),
    O = n(701144);
function T(e) {
    let { playSound: t } = e;
    return (0, i.jsxs)(o.D, {
        title: "Risky Click",
        tag: "span",
        onClick: t,
        className: O.Ls,
        children: [
            (0, i.jsx)(d.H, { size: "md", color: "currentColor", className: O.uA }),
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
            : (0, i.jsx)(P, { className: O.wg, isPlaying: l, playSound: a, sound: n })
        : null;
}
function P(e) {
    let { className: t, sound: n, playSound: s, isPlaying: l } = e,
        r = n?.emojiId != null || n?.emojiName != null,
        d = S.intl.formatToPlainString(S.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name });
    return (0, m.X)({ location: "SoundboardMentionInline" })
        ? (0, i.jsxs)(o.D, {
              "aria-label": d,
              tag: "span",
              onClick: s,
              className: a()(O.Ls, O.oR, { [O.he]: !0 === l }, t),
              children: [
                  r && (0, i.jsx)(c.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: O.JS }),
                  (0, i.jsx)("span", { children: ` ${n?.name} ` }),
              ],
          })
        : null;
}
let L = function (e) {
    let { channelId: t, messageId: n, soundId: l, messageSounds: a, jumbo: o = !1 } = e,
        d = N.hH.useSetting(),
        c = (0, r.bG)([A.A], () => A.A.getSoundById(l), [l]),
        x = s.useMemo(() => (0, h.A)(t, n, l, a) ?? c, [t, n, l, a, c]),
        g = (0, r.bG)([y.A], () => y.A.getChannel(t)),
        p = (0, m.X)({ location: "SoundboardMention" }),
        b = s.useRef(null),
        { isPlaying: f, playSound: I } = v(x, g),
        S = s.useCallback(async () => {
            (await I()) && b.current?.addAnimation();
        }, [I]);
    return p
        ? null == x
            ? (0, i.jsx)(T, { playSound: S })
            : o && !d
              ? (0, i.jsx)(
                    C.Ay,
                    {
                        containerClassName: O.Ti,
                        className: O.UX,
                        sound: x,
                        channel: g,
                        onSelectItem: S,
                        isPlayingSoundOverride: f,
                        isSoundmoji: !0,
                        buttonOverlay: E.If.SOUNDMOJI,
                        tooltipClassName: O.YL,
                        tooltipContentClassName: O.R3,
                        tooltipOverride: (0, i.jsx)(j.WE, { sound: x }),
                        soundmojiVisualEffectRef: b,
                    },
                    `${x.soundId}`,
                )
              : (0, i.jsx)(u.m, {
                    "aria-label": x.name,
                    "data-pending-richtooltip-migration": !0,
                    __unsupportedReactNodeAsText: (0, i.jsx)(j.WE, { sound: x }),
                    position: "top",
                    delay: 500,
                    children: (0, i.jsx)("span", { children: (0, i.jsx)(P, { sound: x, playSound: S, isPlaying: f }) }),
                })
        : null;
};
