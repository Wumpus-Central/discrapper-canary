n.d(t, {
    a: () => I,
    default: () => S,
}),
    n(388685),
    n(704826),
    n(35282);
var r = n(951288),
    i = n(647438),
    a = n(399606),
    o = n(343817),
    s = n(667202),
    l = n(481060),
    c = n(787014),
    u = n(904245),
    d = n(12498),
    f = n(541716),
    _ = n(752305),
    p = n(893718),
    h = n(957730),
    m = n(19780),
    g = n(594174),
    E = n(626135),
    b = n(981631),
    y = n(388032),
    O = n(459931),
    v = n(740353);
let I = "VoiceChannelStatusModal",
    T = 500;
function S(e) {
    let { channel: t, transitionState: n, sourceAnalyticsLocations: S, onClose: A } = e,
        N = (0, a.e7)([d.Z], () => d.Z.getChannelStatus(t)),
        C = (0, a.e7)([m.Z], () => m.Z.getMediaSessionId()),
        [R, P] = i.useState(null != N ? N : ""),
        [w, D] = i.useState(!1),
        [L, x] = i.useState(null),
        M = (0, a.e7)([g.default], () => g.default.getCurrentUser()),
        k = R.length > T;
    i.useEffect(() => {
        E.default.track(b.rMx.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: t.guild_id,
            location_stack: S,
        });
    }, [t.guild_id, S]);
    let j = (e) => {
            x(new o.Hx(e, e.status).getAnyErrorMessage());
        },
        U = (e) => {
            let { invalidEmojis: n } = e;
            if (null != n && n.length > 0) {
                let { errorMessage: e } = u.Z.validateMessage(n, M, t.id);
                return x(e), D(!1), { hasErrors: !0 };
            }
            return { hasErrors: !1 };
        },
        G = async (e) => {
            R === N && A(), null == e || e.preventDefault(), x(null), D(!0);
            let n = R.length,
                r = R.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
                i = h.ZP.parse(t, R),
                { hasErrors: a } = U(i);
            if (!a) {
                try {
                    let e = await c.ZP.updateVoiceChannelStatus(t.id, i.content);
                    204 === e.status
                        ? (E.default.track(b.rMx.VOICE_CHANNEL_TOPIC_SET, {
                              guild_id: t.guild_id,
                              channel_id: t.id,
                              media_session_id: C,
                              raw_length: n,
                              text_length: r,
                              location_stack: S,
                          }),
                          A())
                        : j(e);
                } catch (e) {
                    j(e);
                }
                D(!1);
            }
        },
        [B, V] = i.useState((0, _.JM)(R)),
        F = (e, t, n) => {
            P(t), V(n);
        },
        Z = async () => (
            k || w || (await G()),
            Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0,
            })
        ),
        H = (0, r.jsxs)(l.hjN, {
            title: y.intl.string(y.t.Fq5lwM),
            children: [
                (0, r.jsx)(p.ZP, {
                    innerClassName: O.textArea,
                    textValue: R,
                    richValue: B,
                    placeholder: y.intl.formatToPlainString(y.t.DUXxBg, { channelName: t.name }),
                    focused: !0,
                    channel: t,
                    onChange: F,
                    onSubmit: Z,
                    type: f.Ie.VOICE_CHANNEL_STATUS,
                    canMentionRoles: !1,
                    canMentionChannels: !1,
                    allowNewLines: !1,
                    parentModalKey: I,
                    maxCharacterCount: T,
                    showRemainingCharsAfterCount: T / 2,
                    emojiPickerCloseOnModalOuterClick: !0,
                }),
                null != L
                    ? (0, r.jsx)(l.kzN, {
                          className: O.error,
                          children: L,
                      })
                    : null,
            ],
        });
    return (0, r.jsx)(s.I, {
        transitionState: n,
        onClose: A,
        graphic: {
            type: "image",
            src: v,
        },
        title: y.intl.string(y.t["5CyJBQ"]),
        subtitle: y.intl.string(y.t.NRBYjo),
        actions: [
            {
                variant: "secondary",
                text: y.intl.string(y.t["ETE/oK"]),
                onClick: A,
            },
            {
                variant: "primary",
                loading: w,
                disabled: k,
                text: y.intl.string(y.t.XqK2Iy),
                onClick: G,
            },
        ],
        children: H,
    });
}
