n.d(t, {
    a: () => v,
    default: () => T,
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
    _ = n(893718),
    p = n(957730),
    h = n(19780),
    m = n(594174),
    g = n(626135),
    E = n(981631),
    b = n(388032),
    y = n(418128),
    O = n(740353);
let v = "VoiceChannelStatusModal",
    I = 500;
function T(e) {
    let { channel: t, transitionState: n, sourceAnalyticsLocations: T, onClose: S } = e,
        A = (0, o.e7)([u.Z], () => u.Z.getChannelStatus(t)),
        C = (0, o.e7)([h.Z], () => h.Z.getMediaSessionId()),
        [N, R] = i.useState(null != A ? A : ""),
        [P, D] = i.useState(!1),
        [w, L] = i.useState(null),
        x = (0, o.e7)([m.default], () => m.default.getCurrentUser()),
        M = N.length > I;
    i.useEffect(() => {
        g.default.track(E.rMx.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: t.guild_id,
            location_stack: T,
        });
    }, [t.guild_id, T]);
    let j = (e) => {
            L(new s.Hx(e, e.status).getAnyErrorMessage());
        },
        k = (e) => {
            let { invalidEmojis: n } = e;
            if (null != n && n.length > 0) {
                let { errorMessage: e } = c.Z.validateMessage(n, x, t.id);
                return L(e), D(!1), { hasErrors: !0 };
            }
            return { hasErrors: !1 };
        },
        U = async (e) => {
            N === A && S(), null == e || e.preventDefault(), L(null), D(!0);
            let n = N.length,
                r = N.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
                i = p.ZP.parse(t, N),
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
                              location_stack: T,
                          }),
                          S())
                        : j(e);
                } catch (e) {
                    j(e);
                }
                D(!1);
            }
        },
        [G, B] = i.useState((0, f.JM)(N)),
        Z = (e, t, n) => {
            R(t), B(n);
        },
        F = async () => (
            M || P || (await U()),
            Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0,
            })
        ),
        V = (0, r.jsx)(a.gNt, {
            label: b.intl.string(b.t.Fq5lwN),
            errorMessage: w,
            children: (0, r.jsx)(_.ZP, {
                innerClassName: y.textArea,
                textValue: N,
                richValue: G,
                placeholder: b.intl.formatToPlainString(b.t.DUXxBh, { channelName: t.name }),
                focused: !0,
                channel: t,
                onChange: Z,
                onSubmit: F,
                type: d.Ie.VOICE_CHANNEL_STATUS,
                canMentionRoles: !1,
                canMentionChannels: !1,
                allowNewLines: !1,
                parentModalKey: v,
                maxCharacterCount: I,
                showRemainingCharsAfterCount: I / 2,
                emojiPickerCloseOnModalOuterClick: !0,
            }),
        });
    return (0, r.jsx)(a.ExpressiveModal, {
        transitionState: n,
        onClose: S,
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
                onClick: S,
            },
            {
                variant: "primary",
                loading: P,
                disabled: M,
                text: b.intl.string(b.t.XqK2I2),
                onClick: U,
            },
        ],
        children: V,
    });
}
