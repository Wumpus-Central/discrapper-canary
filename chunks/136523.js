"use strict";
n.d(t, { default: () => N, m: () => y });
var r = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(417597),
    o = n(319400),
    l = n(435183),
    u = n(843472),
    c = n(309698),
    d = n(47167),
    _ = n(355622),
    f = n(408018),
    p = n(133343),
    h = n(451909),
    m = n(383501),
    E = n(287809),
    g = n(954571),
    A = n(652215),
    I = n(985018),
    T = n(169829),
    S = n(379649);
let y = "VoiceChannelStatusModal",
    v = 500;
function N(e) {
    let { channel: t, transitionState: n, sourceAnalyticsLocations: N, onClose: C } = e,
        R = (0, a.bG)([c.A], () => c.A.getChannelStatus(t)),
        O = (0, a.bG)([m.A], () => m.A.getMediaSessionId()),
        [b, D] = i.useState(R ?? ""),
        [L, w] = i.useState(!1),
        [M, x] = i.useState(null),
        P = (0, a.bG)([E.default], () => E.default.getCurrentUser()),
        k = (0, d.Ay)(t),
        U = b.length > v;
    i.useEffect(() => {
        g.default.track(A.HAw.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: t.guild_id,
            location_stack: N,
        });
    }, [t.guild_id, N]);
    let G = (e) => {
            x(new o.LG(e, e.status).getAnyErrorMessage());
        },
        F = (e) => {
            let { invalidEmojis: n } = e;
            if (null != n && n.length > 0) {
                let { errorMessage: e } = u.A.validateMessage(n, P, t.id);
                return x(e), w(!1), { hasErrors: !0 };
            }
            return { hasErrors: !1 };
        },
        V = async (e) => {
            b === R && C(), e?.preventDefault(), x(null), w(!0);
            let n = b.length,
                r = b.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
                i = h.Ay.parse(t, b),
                { hasErrors: s } = F(i);
            if (!s) {
                try {
                    let e = await l.Ay.updateVoiceChannelStatus(t.id, i.content);
                    204 === e.status
                        ? (g.default.track(A.HAw.VOICE_CHANNEL_TOPIC_SET, {
                              guild_id: t.guild_id,
                              channel_id: t.id,
                              media_session_id: O,
                              raw_length: n,
                              text_length: r,
                              location_stack: N,
                          }),
                          C())
                        : G(e);
                } catch (e) {
                    G(e);
                }
                w(!1);
            }
        },
        [B, H] = i.useState((0, f.x7)(b)),
        j = (e, t, n) => {
            D(t), H(n);
        },
        Y = async () => (U || L || (await V()), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
        W = (0, r.jsx)(s.D0$, {
            label: I.intl.string(I.t.Fq5lwN),
            errorMessage: M,
            children: (0, r.jsx)(p.Ay, {
                innerClassName: T.Tg,
                textValue: b,
                richValue: B,
                placeholder: I.intl.formatToPlainString(I.t.DUXxBh, { channelName: k }),
                focused: !0,
                channel: t,
                onChange: j,
                onSubmit: Y,
                type: _.oU.VOICE_CHANNEL_STATUS,
                canMentionRoles: !1,
                canMentionChannels: !1,
                allowNewLines: !1,
                parentModalKey: y,
                maxCharacterCount: v,
                showRemainingCharsAfterCount: v / 2,
                emojiPickerCloseOnModalOuterClick: !0,
            }),
        });
    return (0, r.jsx)(s.ExpressiveModal, {
        transitionState: n,
        onClose: C,
        graphic: { type: "image", src: S },
        title: I.intl.string(I.t["5CyJBd"]),
        subtitle: I.intl.string(I.t.NRBYju),
        actions: [
            { variant: "secondary", text: I.intl.string(I.t["ETE/oC"]), onClick: C },
            { variant: "primary", loading: L, disabled: U, text: I.intl.string(I.t.XqK2I2), onClick: V },
        ],
        children: W,
    });
}
