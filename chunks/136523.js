"use strict";
n.d(t, { default: () => y, m: () => C });
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
    E = n(138617),
    p = n(451909),
    m = n(763827),
    g = n(287809),
    A = n(174459),
    I = n(652215),
    T = n(375708),
    S = n(700494),
    N = n(379649);
let C = "VoiceChannelStatusModal";
function y(e) {
    let { channel: t, transitionState: n, sourceAnalyticsLocations: y, onClose: O } = e,
        R = (0, _.l)(t),
        v = (0, o.bG)([m.A], () => m.A.getMediaSessionId()),
        [b, L] = r.useState(R ?? ""),
        [D, w] = r.useState(!1),
        [P, M] = r.useState(null),
        x = (0, o.bG)([g.default], () => g.default.getCurrentUser()),
        U = (0, d.Ay)(t),
        k = b.length > 500;
    function G(e) {
        M(new l.LG(e, e.status).getAnyErrorMessage());
    }
    async function V(e) {
        b === R && O(), e?.preventDefault(), M(null), w(!0);
        let n = b.length,
            i = b.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
            r = p.Ay.parse(t, b),
            { hasErrors: s } = (function (e) {
                let { invalidEmojis: n } = e;
                if (null != n && n.length > 0) {
                    let { errorMessage: e } = c.A.validateMessage(n, x, t.id);
                    return M(e), w(!1), { hasErrors: !0 };
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
                          media_session_id: v,
                          raw_length: n,
                          text_length: i,
                          location_stack: y,
                      }),
                      O())
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
            location_stack: y,
        });
    }, [t.guild_id, y]);
    let [F, B] = r.useState((0, f.x7)(b));
    async function H() {
        return k || D || (await V()), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
    }
    let j = (0, i.jsx)(s.D, {
        label: T.intl.string(T.t.Fq5lwN),
        errorMessage: P,
        children: (0, i.jsx)(E.Ay, {
            innerClassName: S.Tg,
            characterCountClassName: S.Dq,
            textValue: b,
            richValue: F,
            placeholder: T.intl.formatToPlainString(T.t.DUXxBh, { channelName: U }),
            focused: !0,
            channel: t,
            onChange: function (e, t, n) {
                L(t), B(n);
            },
            onSubmit: H,
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
        onClose: O,
        graphic: { type: "image", src: N },
        title: T.intl.string(T.t["5CyJBd"]),
        subtitle: T.intl.string(T.t.NRBYju),
        actions: [
            { variant: "secondary", text: T.intl.string(T.t["ETE/oC"]), onClick: O },
            { variant: "primary", loading: D, disabled: k, text: T.intl.string(T.t.XqK2I2), onClick: V },
        ],
        children: j,
    });
}
