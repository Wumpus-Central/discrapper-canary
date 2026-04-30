"use strict";
n.d(t, { default: () => C, m: () => y });
var i = n(627968),
    r = n(64700),
    s = n(452027),
    a = n(772707),
    o = n(702841),
    l = n(319400),
    u = n(435183),
    c = n(720149),
    d = n(47167),
    _ = n(882840),
    f = n(355622),
    h = n(408018),
    p = n(201349),
    E = n(451909),
    m = n(763827),
    g = n(287809),
    A = n(174459),
    I = n(652215),
    T = n(375708),
    S = n(700494),
    N = n(379649);
let y = "VoiceChannelStatusModal";
function C(e) {
    let { channel: t, transitionState: n, sourceAnalyticsLocations: C, onClose: v } = e,
        O = (0, _.l)(t),
        R = (0, o.bG)([m.A], () => m.A.getMediaSessionId()),
        [b, D] = r.useState(O ?? ""),
        [L, w] = r.useState(!1),
        [M, P] = r.useState(null),
        x = (0, o.bG)([g.default], () => g.default.getCurrentUser()),
        U = (0, d.Ay)(t),
        k = b.length > 500;
    r.useEffect(() => {
        A.default.track(I.HAw.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: t.guild_id,
            location_stack: C,
        });
    }, [t.guild_id, C]);
    let G = (e) => {
            P(new l.LG(e, e.status).getAnyErrorMessage());
        },
        F = async (e) => {
            b === O && v(), e?.preventDefault(), P(null), w(!0);
            let n = b.length,
                i = b.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
                r = E.Ay.parse(t, b),
                { hasErrors: s } = ((e) => {
                    let { invalidEmojis: n } = e;
                    if (null != n && n.length > 0) {
                        let { errorMessage: e } = c.A.validateMessage(n, x, t.id);
                        return P(e), w(!1), { hasErrors: !0 };
                    }
                    return { hasErrors: !1 };
                })(r);
            if (!s) {
                try {
                    let e = await u.Ay.updateVoiceChannelStatus(t.id, r.content);
                    204 === e.status
                        ? (A.default.track(I.HAw.VOICE_CHANNEL_TOPIC_SET, {
                              guild_id: t.guild_id,
                              channel_id: t.id,
                              media_session_id: R,
                              raw_length: n,
                              text_length: i,
                              location_stack: C,
                          }),
                          v())
                        : G(e);
                } catch (e) {
                    G(e);
                }
                w(!1);
            }
        },
        [V, B] = r.useState((0, h.x7)(b)),
        H = async () => (k || L || (await F()), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
        j = (0, i.jsx)(s.D, {
            label: T.intl.string(T.t.Fq5lwN),
            errorMessage: M,
            children: (0, i.jsx)(p.Ay, {
                innerClassName: S.Tg,
                textValue: b,
                richValue: V,
                placeholder: T.intl.formatToPlainString(T.t.DUXxBh, { channelName: U }),
                focused: !0,
                channel: t,
                onChange: (e, t, n) => {
                    D(t), B(n);
                },
                onSubmit: H,
                type: f.oU.VOICE_CHANNEL_STATUS,
                canMentionRoles: !1,
                canMentionChannels: !1,
                allowNewLines: !1,
                parentModalKey: y,
                maxCharacterCount: 500,
                showRemainingCharsAfterCount: 250,
                emojiPickerCloseOnModalOuterClick: !0,
            }),
        });
    return (0, i.jsx)(a.k, {
        transitionState: n,
        onClose: v,
        graphic: { type: "image", src: N },
        title: T.intl.string(T.t["5CyJBd"]),
        subtitle: T.intl.string(T.t.NRBYju),
        actions: [
            { variant: "secondary", text: T.intl.string(T.t["ETE/oC"]), onClick: v },
            { variant: "primary", loading: L, disabled: k, text: T.intl.string(T.t.XqK2I2), onClick: F },
        ],
        children: j,
    });
}
