"use strict";
n.d(t, { default: () => N, m: () => C });
var i = n(627968),
    r = n(64700),
    s = n(452027),
    a = n(772707),
    o = n(702841),
    l = n(319400),
    u = n(435183),
    c = n(493336),
    d = n(47167),
    _ = n(882840),
    h = n(355622),
    f = n(408018),
    p = n(138617),
    E = n(451909),
    m = n(763827),
    g = n(287809),
    A = n(174459),
    I = n(652215),
    T = n(375708),
    S = n(700494),
    y = n(379649);
let C = "VoiceChannelStatusModal";
function N(e) {
    let { channel: t, transitionState: n, sourceAnalyticsLocations: N, onClose: v } = e,
        R = (0, _.l)(t),
        O = (0, o.bG)([m.A], () => m.A.getMediaSessionId()),
        [b, D] = r.useState(R ?? ""),
        [L, w] = r.useState(!1),
        [M, P] = r.useState(null),
        x = (0, o.bG)([g.default], () => g.default.getCurrentUser()),
        k = (0, d.Ay)(t),
        U = b.length > 500;
    function G(e) {
        P(new l.LG(e, e.status).getAnyErrorMessage());
    }
    async function F(e) {
        b === R && v(), e?.preventDefault(), P(null), w(!0);
        let n = b.length,
            i = b.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
            r = E.Ay.parse(t, b),
            { hasErrors: s } = (function (e) {
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
                          media_session_id: O,
                          raw_length: n,
                          text_length: i,
                          location_stack: N,
                      }),
                      v())
                    : G(e);
            } catch (e) {
                G(e);
            }
            w(!1);
        }
    }
    r.useEffect(() => {
        A.default.track(I.HAw.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: t.guild_id,
            location_stack: N,
        });
    }, [t.guild_id, N]);
    let [V, B] = r.useState((0, f.x7)(b));
    async function j() {
        return U || L || (await F()), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
    }
    let H = (0, i.jsx)(s.D, {
        label: T.intl.string(T.t.Fq5lwN),
        errorMessage: M,
        children: (0, i.jsx)(p.Ay, {
            innerClassName: S.Tg,
            characterCountClassName: S.Dq,
            textValue: b,
            richValue: V,
            placeholder: T.intl.formatToPlainString(T.t.DUXxBh, { channelName: k }),
            focused: !0,
            channel: t,
            onChange: function (e, t, n) {
                D(t), B(n);
            },
            onSubmit: j,
            type: h.oU.VOICE_CHANNEL_STATUS,
            canMentionRoles: !1,
            canMentionChannels: !1,
            allowNewLines: !1,
            parentModalKey: C,
            maxCharacterCount: 500,
            showRemainingCharsAfterCount: 250,
            emojiPickerCloseOnModalOuterClick: !0,
        }),
    });
    return (0, i.jsx)(a.k, {
        transitionState: n,
        onClose: v,
        graphic: { type: "image", src: y },
        title: T.intl.string(T.t["5CyJBd"]),
        subtitle: T.intl.string(T.t.NRBYju),
        actions: [
            { variant: "secondary", text: T.intl.string(T.t["ETE/oC"]), onClick: v },
            { variant: "primary", loading: L, disabled: U, text: T.intl.string(T.t.XqK2I2), onClick: F },
        ],
        children: H,
    });
}
