"use strict";
n.d(t, { R: () => _ });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(397927),
    a = n(565645),
    o = n(375499),
    c = n(937773),
    d = n(961350),
    u = n(734057),
    h = n(309010),
    A = n(559405),
    p = n(652215),
    g = n(307731),
    m = n(680930);
function _(e) {
    let {
            customStatusEmoji: t,
            setCustomStatusEmoji: n,
            selectedDefaultStatus: _,
            setIsEmojiPickerOpen: f,
            defaultStatusVariant: x,
        } = e,
        C = s.useRef(null),
        E = (0, l.bG)([h.A, u.A], () => u.A.getChannel(h.A.getVoiceChannelId())),
        I = s.useCallback(
            () =>
                null != t
                    ? (0, i.jsx)(a.A, { emojiId: t.id, emojiName: t.name, animated: !!t.animated })
                    : null != _
                      ? (0, i.jsx)(A.A, {
                            className: m.Kk,
                            userId: d.default.getId(),
                            size: 20,
                            hangStatusActivity: { type: p.$pd.HANG_STATUS, state: _ },
                            fallbackVariant: x,
                        })
                      : null,
            [t, x, _],
        );
    return (0, i.jsx)(r.YNO, {
        targetElementRef: C,
        onRequestOpen: () => f(!0),
        onRequestClose: () => f(!1),
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(c.A, {
                channel: E,
                guildId: E?.guild_id ?? void 0,
                closePopout: t,
                onSelectEmoji: (e) => {
                    let { emoji: i, willClose: s } = e;
                    null == i
                        ? n(null)
                        : n(
                              null != i.id
                                  ? { id: i.id, name: i.name, animated: i.animated }
                                  : { id: null, name: i.optionallyDiverseSequence ?? "", animated: !1 },
                          ),
                        s && t();
                },
                pickerIntention: g.b_.STATUS,
            });
        },
        position: "left",
        animation: r.YNO.Animation.NONE,
        align: "top",
        children: (e, n) => {
            let { isShown: s } = n;
            return (0, i.jsx)(o.A, {
                ...e,
                ref: C,
                active: s,
                tabIndex: 0,
                renderButtonContents: null == t && null == _ ? null : I,
            });
        },
    });
}
