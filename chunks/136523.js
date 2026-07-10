"use strict";
n.d(t, { default: () => R, m: () => C });
var i = n(627968),
    r = n(64700),
    a = n(452027),
    s = n(772707),
    l = n(702841),
    o = n(319400),
    d = n(435183),
    c = n(493336),
    u = n(47167),
    _ = n(882840),
    E = n(355622),
    A = n(408018),
    h = n(138617),
    I = n(451909),
    f = n(763827),
    p = n(287809),
    T = n(174459),
    m = n(652215),
    g = n(375708),
    S = n(482446),
    N = n(379649);
let C = "VoiceChannelStatusModal";
function R(e) {
    let { channel: t, transitionState: n, sourceAnalyticsLocations: R, onClose: O } = e,
        L = (0, _.l)(t),
        D = (0, l.bG)([f.A], () => f.A.getMediaSessionId()),
        [y, v] = r.useState(L ?? ""),
        [b, M] = r.useState(!1),
        [P, U] = r.useState(null),
        w = (0, l.bG)([p.default], () => p.default.getCurrentUser()),
        G = (0, u.Ay)(t),
        x = y.length > 500;
    function k(e) {
        U(new o.LG(e, e.status).getAnyErrorMessage());
    }
    async function F(e) {
        y === L && O(), e?.preventDefault(), U(null), M(!0);
        let n = y.length,
            i = y.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
            r = I.Ay.parse(t, y),
            { hasErrors: a } = (function (e) {
                let { invalidEmojis: n } = e;
                if (null != n && n.length > 0) {
                    let { errorMessage: e } = c.A.validateMessage(n, w, t.id);
                    return U(e), M(!1), { hasErrors: !0 };
                }
                return { hasErrors: !1 };
            })(r);
        if (!a) {
            try {
                let e = await d.Ay.updateVoiceChannelStatus(t.id, r.content);
                204 === e.status
                    ? (T.default.track(m.HAw.VOICE_CHANNEL_TOPIC_SET, {
                          guild_id: t.guild_id,
                          channel_id: t.id,
                          media_session_id: D,
                          raw_length: n,
                          text_length: i,
                          location_stack: R,
                      }),
                      O())
                    : k(e);
            } catch (e) {
                k(e);
            }
            M(!1);
        }
    }
    r.useEffect(() => {
        T.default.track(m.HAw.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: t.guild_id,
            location_stack: R,
        });
    }, [t.guild_id, R]);
    let [V, B] = r.useState((0, A.x7)(y));
    async function H() {
        return x || b || (await F()), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
    }
    let j = (0, i.jsx)(a.D, {
        label: g.intl.string(g.t.Fq5lwN),
        errorMessage: P,
        children: (0, i.jsx)(h.Ay, {
            innerClassName: S.Tg,
            characterCountClassName: S.Dq,
            textValue: y,
            richValue: V,
            placeholder: g.intl.formatToPlainString(g.t.DUXxBh, { channelName: G }),
            focused: !0,
            channel: t,
            onChange: function (e, t, n) {
                v(t), B(n);
            },
            onSubmit: H,
            type: E.oU.VOICE_CHANNEL_STATUS,
            canMentionRoles: !1,
            canMentionChannels: !1,
            allowNewLines: !1,
            parentModalKey: C,
            maxCharacterCount: 500,
            showRemainingCharsAfterCount: 250,
            emojiPickerCloseOnModalOuterClick: !0,
        }),
    });
    return (0, i.jsx)(s.k, {
        transitionState: n,
        onClose: O,
        graphic: { type: "image", src: N },
        title: g.intl.string(g.t["5CyJBd"]),
        subtitle: g.intl.string(g.t.NRBYju),
        actions: [
            { variant: "secondary", text: g.intl.string(g.t["ETE/oC"]), onClick: O },
            { variant: "primary", loading: b, disabled: x, text: g.intl.string(g.t.XqK2I2), onClick: F },
        ],
        children: j,
    });
}
