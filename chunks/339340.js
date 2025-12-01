n.d(t, {
    a: () => v,
    default: () => I,
}),
    n(388685),
    n(704826),
    n(35282);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(399606),
    s = n(343817),
    l = n(787014),
    c = n(904245),
    u = n(12498),
    d = n(541716),
    f = n(752305),
    p = n(893718),
    _ = n(957730),
    m = n(19780),
    h = n(594174),
    g = n(626135),
    E = n(981631),
    b = n(388032),
    y = n(459931),
    O = n(740353);
let v = "VoiceChannelStatusModal",
    S = 500;
function I(e) {
    let { channel: t, transitionState: n, sourceAnalyticsLocations: I, onClose: T } = e,
        A = (0, o.e7)([u.Z], () => u.Z.getChannelStatus(t)),
        C = (0, o.e7)([m.Z], () => m.Z.getMediaSessionId()),
        [N, P] = i.useState(null != A ? A : ""),
        [R, w] = i.useState(!1),
        [D, x] = i.useState(null),
        L = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        j = N.length > S;
    i.useEffect(() => {
        g.default.track(E.rMx.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: t.guild_id,
            location_stack: I,
        });
    }, [t.guild_id, I]);
    let M = (e) => {
            x(new s.Hx(e, e.status).getAnyErrorMessage());
        },
        k = (e) => {
            let { invalidEmojis: n } = e;
            if (null != n && n.length > 0) {
                let { errorMessage: e } = c.Z.validateMessage(n, L, t.id);
                return x(e), w(!1), { hasErrors: !0 };
            }
            return { hasErrors: !1 };
        },
        U = async (e) => {
            N === A && T(), null == e || e.preventDefault(), x(null), w(!0);
            let n = N.length,
                r = N.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
                i = _.ZP.parse(t, N),
                { hasErrors: a } = k(i);
            if (!a) {
                try {
                    let e = await l.ZP.updateVoiceChannelStatus(t.id, i.content);
                    204 === e.status
                        ? (g.default.track(E.rMx.VOICE_CHANNEL_TOPIC_SET, {
                              guild_id: t.guild_id,
                              channel_id: t.id,
                              media_session_id: C,
                              raw_length: n,
                              text_length: r,
                              location_stack: I,
                          }),
                          T())
                        : M(e);
                } catch (e) {
                    M(e);
                }
                w(!1);
            }
        },
        [G, Z] = i.useState((0, f.JM)(N)),
        B = (e, t, n) => {
            P(t), Z(n);
        },
        F = async () => (
            j || R || (await U()),
            Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0,
            })
        ),
        V = (0, r.jsx)(a.gNt, {
            label: b.intl.string(b.t.Fq5lwN),
            errorMessage: D,
            children: (0, r.jsx)(p.ZP, {
                innerClassName: y.textArea,
                textValue: N,
                richValue: G,
                placeholder: b.intl.formatToPlainString(b.t.DUXxBh, { channelName: t.name }),
                focused: !0,
                channel: t,
                onChange: B,
                onSubmit: F,
                type: d.Ie.VOICE_CHANNEL_STATUS,
                canMentionRoles: !1,
                canMentionChannels: !1,
                allowNewLines: !1,
                parentModalKey: v,
                maxCharacterCount: S,
                showRemainingCharsAfterCount: S / 2,
                emojiPickerCloseOnModalOuterClick: !0,
            }),
        });
    return (0, r.jsx)(a.ExpressiveModal, {
        transitionState: n,
        onClose: T,
        graphic: {
            type: "image",
            src: O,
        },
        title: b.intl.string(b.t["5CyJBd"]),
        subtitle: b.intl.string(b.t.NRBYju),
        actions: [
            {
                variant: "secondary",
                text: b.intl.string(b.t["ETE/oC"]),
                onClick: T,
            },
            {
                variant: "primary",
                loading: R,
                disabled: j,
                text: b.intl.string(b.t.XqK2I2),
                onClick: U,
            },
        ],
        children: V,
    });
}
