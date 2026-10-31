n.d(t, { Ay: () => L, LF: () => k });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
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
    N = n(584014),
    f = n(253932),
    b = n(174459),
    I = n(652215);
function v(e, t) {
    let { isPlaying: n, playSound: i } = (0, N.A)(null != e ? (0, g.A)(e.soundId) : null);
    return {
        isPlaying: n,
        playSound: l.useCallback(async () => {
            let n = (0, p.A)(e?.volume ?? 1, f.HO.getSetting());
            return (
                !!(await i({ volume: n })) &&
                (b.default.track(I.HAw.SOUNDMOJI_PLAY, {
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
    y = n(105292),
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
        l = (0, x.t)({ location: "SoundboardMentionInline" }),
        { isPlaying: s, playSound: a } = v(n);
    return l
        ? null == n
            ? (0, i.jsx)(T, {})
            : (0, i.jsx)(P, { className: O.wg, isPlaying: s, playSound: a, sound: n })
        : null;
}
function P(e) {
    let { className: t, sound: n, playSound: l, isPlaying: s } = e,
        r = n?.emojiId != null || n?.emojiName != null,
        d = y.intl.formatToPlainString(y.t.tuMUJ2, { emojiName: n?.emojiName, soundName: n?.name });
    return (0, m.X)({ location: "SoundboardMentionInline" })
        ? (0, i.jsxs)(o.D, {
              "aria-label": d,
              tag: "span",
              onClick: l,
              className: a()(O.Ls, O.oR, { [O.he]: !0 === s }, t),
              children: [
                  r && (0, i.jsx)(c.A, { emojiId: n?.emojiId, emojiName: n?.emojiName, className: O.JS }),
                  (0, i.jsx)("span", { children: ` ${n?.name} ` }),
              ],
          })
        : null;
}
let L = function (e) {
    let { channelId: t, messageId: n, soundId: s, messageSounds: a, jumbo: o = !1 } = e,
        d = f.hH.useSetting(),
        c = (0, r.bG)([A.A], () => A.A.getSoundById(s), [s]),
        x = l.useMemo(() => (0, h.A)(t, n, s, a) ?? c, [t, n, s, a, c]),
        g = (0, r.bG)([S.A], () => S.A.getChannel(t)),
        p = (0, m.X)({ location: "SoundboardMention" }),
        N = l.useRef(null),
        { isPlaying: b, playSound: I } = v(x, g),
        y = l.useCallback(async () => {
            (await I()) && N.current?.addAnimation();
        }, [I]);
    return p
        ? null == x
            ? (0, i.jsx)(T, { playSound: y })
            : o && !d
              ? (0, i.jsx)(
                    C.Ay,
                    {
                        containerClassName: O.Ti,
                        className: O.UX,
                        sound: x,
                        channel: g,
                        onSelectItem: y,
                        isPlayingSoundOverride: b,
                        isSoundmoji: !0,
                        buttonOverlay: E.If.SOUNDMOJI,
                        tooltipClassName: O.YL,
                        tooltipContentClassName: O.R3,
                        tooltipOverride: (0, i.jsx)(j.WE, { sound: x }),
                        soundmojiVisualEffectRef: N,
                    },
                    `${x.soundId}`,
                )
              : (0, i.jsx)(u.m, {
                    "aria-label": x.name,
                    "data-pending-richtooltip-migration": !0,
                    __unsupportedReactNodeAsText: (0, i.jsx)(j.WE, { sound: x }),
                    position: "top",
                    delay: 500,
                    children: (0, i.jsx)("span", { children: (0, i.jsx)(P, { sound: x, playSound: y, isPlaying: b }) }),
                })
        : null;
};
