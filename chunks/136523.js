"use strict";
n.d(t, { default: () => v, m: () => y });
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(417597),
    o = n(319400),
    l = n(435183),
    u = n(843472),
    c = n(309698),
    d = n(355622),
    _ = n(408018),
    f = n(133343),
    p = n(451909),
    h = n(383501),
    m = n(287809),
    g = n(954571),
    E = n(652215),
    A = n(985018),
    I = n(171927),
    T = n(379649);
let y = "VoiceChannelStatusModal",
    S = 500;
function v(e) {
    let { channel: t, transitionState: n, sourceAnalyticsLocations: v, onClose: C } = e,
        b = (0, s.bG)([c.A], () => c.A.getChannelStatus(t)),
        N = (0, s.bG)([h.A], () => h.A.getMediaSessionId()),
        [R, O] = i.useState(b ?? ""),
        [D, L] = i.useState(!1),
        [w, x] = i.useState(null),
        P = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        M = R.length > S;
    i.useEffect(() => {
        g.default.track(E.HAw.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: t.guild_id,
            location_stack: v,
        });
    }, [t.guild_id, v]);
    let k = (e) => {
            x(new o.LG(e, e.status).getAnyErrorMessage());
        },
        U = (e) => {
            let { invalidEmojis: n } = e;
            if (null != n && n.length > 0) {
                let { errorMessage: e } = u.A.validateMessage(n, P, t.id);
                return x(e), L(!1), { hasErrors: !0 };
            }
            return { hasErrors: !1 };
        },
        G = async (e) => {
            R === b && C(), e?.preventDefault(), x(null), L(!0);
            let n = R.length,
                r = R.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
                i = p.Ay.parse(t, R),
                { hasErrors: a } = U(i);
            if (!a) {
                try {
                    let e = await l.Ay.updateVoiceChannelStatus(t.id, i.content);
                    204 === e.status
                        ? (g.default.track(E.HAw.VOICE_CHANNEL_TOPIC_SET, {
                              guild_id: t.guild_id,
                              channel_id: t.id,
                              media_session_id: N,
                              raw_length: n,
                              text_length: r,
                              location_stack: v,
                          }),
                          C())
                        : k(e);
                } catch (e) {
                    k(e);
                }
                L(!1);
            }
        },
        [V, F] = i.useState((0, _.x7)(R)),
        B = (e, t, n) => {
            O(t), F(n);
        },
        j = async () => (M || D || (await G()), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
        H = (0, r.jsx)(a.D0$, {
            label: A.intl.string(A.t.Fq5lwN),
            errorMessage: w,
            children: (0, r.jsx)(f.Ay, {
                innerClassName: I.Tg,
                textValue: R,
                richValue: V,
                placeholder: A.intl.formatToPlainString(A.t.DUXxBh, { channelName: t.name }),
                focused: !0,
                channel: t,
                onChange: B,
                onSubmit: j,
                type: d.oU.VOICE_CHANNEL_STATUS,
                canMentionRoles: !1,
                canMentionChannels: !1,
                allowNewLines: !1,
                parentModalKey: y,
                maxCharacterCount: S,
                showRemainingCharsAfterCount: S / 2,
                emojiPickerCloseOnModalOuterClick: !0,
            }),
        });
    return (0, r.jsx)(a.ExpressiveModal, {
        transitionState: n,
        onClose: C,
        graphic: { type: "image", src: T },
        title: A.intl.string(A.t["5CyJBd"]),
        subtitle: A.intl.string(A.t.NRBYju),
        actions: [
            { variant: "secondary", text: A.intl.string(A.t["ETE/oC"]), onClick: C },
            { variant: "primary", loading: D, disabled: M, text: A.intl.string(A.t.XqK2I2), onClick: G },
        ],
        children: H,
    });
}
