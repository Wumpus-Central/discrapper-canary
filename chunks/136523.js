n.d(t, {
    default: () => S,
    m: () => A,
}),
    n(896048),
    n(747238),
    n(812715);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(417597),
    o = n(319400),
    l = n(435183),
    c = n(843472),
    u = n(309698),
    d = n(355622),
    f = n(408018),
    p = n(133343),
    _ = n(451909),
    h = n(383501),
    m = n(287809),
    g = n(954571),
    E = n(652215),
    b = n(985018),
    y = n(171927),
    O = n(379649);
let A = "VoiceChannelStatusModal",
    v = 500;
function S(e) {
    let { channel: t, transitionState: n, sourceAnalyticsLocations: S, onClose: I } = e,
        T = (0, s.bG)([u.A], () => u.A.getChannelStatus(t)),
        C = (0, s.bG)([h.A], () => h.A.getMediaSessionId()),
        [N, R] = i.useState(null != T ? T : ""),
        [w, P] = i.useState(!1),
        [D, x] = i.useState(null),
        L = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
        j = N.length > v;
    i.useEffect(() => {
        g.default.track(E.HAw.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: t.guild_id,
            location_stack: S,
        });
    }, [t.guild_id, S]);
    let M = (e) => {
            x(new o.LG(e, e.status).getAnyErrorMessage());
        },
        k = (e) => {
            let { invalidEmojis: n } = e;
            if (null != n && n.length > 0) {
                let { errorMessage: e } = c.A.validateMessage(n, L, t.id);
                return x(e), P(!1), { hasErrors: !0 };
            }
            return { hasErrors: !1 };
        },
        U = async (e) => {
            N === T && I(), null == e || e.preventDefault(), x(null), P(!0);
            let n = N.length,
                r = N.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
                i = _.Ay.parse(t, N),
                { hasErrors: a } = k(i);
            if (!a) {
                try {
                    let e = await l.Ay.updateVoiceChannelStatus(t.id, i.content);
                    204 === e.status
                        ? (g.default.track(E.HAw.VOICE_CHANNEL_TOPIC_SET, {
                              guild_id: t.guild_id,
                              channel_id: t.id,
                              media_session_id: C,
                              raw_length: n,
                              text_length: r,
                              location_stack: S,
                          }),
                          I())
                        : M(e);
                } catch (e) {
                    M(e);
                }
                P(!1);
            }
        },
        [G, V] = i.useState((0, f.x7)(N)),
        F = (e, t, n) => {
            R(t), V(n);
        },
        B = async () => (
            j || w || (await U()),
            Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0,
            })
        ),
        H = (0, r.jsx)(a.D0$, {
            label: b.intl.string(b.t.Fq5lwN),
            errorMessage: D,
            children: (0, r.jsx)(p.Ay, {
                innerClassName: y.Tg,
                textValue: N,
                richValue: G,
                placeholder: b.intl.formatToPlainString(b.t.DUXxBh, { channelName: t.name }),
                focused: !0,
                channel: t,
                onChange: F,
                onSubmit: B,
                type: d.oU.VOICE_CHANNEL_STATUS,
                canMentionRoles: !1,
                canMentionChannels: !1,
                allowNewLines: !1,
                parentModalKey: A,
                maxCharacterCount: v,
                showRemainingCharsAfterCount: v / 2,
                emojiPickerCloseOnModalOuterClick: !0,
            }),
        });
    return (0, r.jsx)(a.ExpressiveModal, {
        transitionState: n,
        onClose: I,
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
                onClick: I,
            },
            {
                variant: "primary",
                loading: w,
                disabled: j,
                text: b.intl.string(b.t.XqK2I2),
                onClick: U,
            },
        ],
        children: H,
    });
}
