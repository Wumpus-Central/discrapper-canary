var a = n(477900),
    i = n(582128),
    l = n(164636),
    s = n(319400),
    r = n(452027),
    u = n(772707),
    o = n(435183),
    d = n(138399),
    c = n(47167),
    h = n(882840),
    C = n(355622),
    g = n(408018),
    _ = n(989161),
    A = n(451909),
    f = n(495867),
    E = n(287809),
    S = n(129230),
    p = n(652215),
    N = n(792996),
    y = n(809401),
    v = n(379649);
let T = "VoiceChannelStatusModal";
n.d(
    e,
    {},
    {
        default: function (t) {
            let { channel: e, transitionState: n, sourceAnalyticsLocations: x, onClose: b } = t,
                k = (0, h.l)(e),
                I = (0, l.bG)([f.A], () => f.A.getMediaSessionId()),
                [m, w] = i.useState(k ?? ""),
                [O, M] = i.useState(!1),
                [V, L] = i.useState(null),
                U = (0, l.bG)([E.default], () => E.default.getCurrentUser()),
                H = (0, c.Ay)(e),
                q = m.length > 500;
            function B(t) {
                L(new s.LG(t, t.status).getAnyErrorMessage());
            }
            async function G(t) {
                (m === k && b(), t?.preventDefault(), L(null), M(!0));
                let n = m.length,
                    a = m.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
                    i = A.Ay.parse(e, m),
                    { hasErrors: l } = (function (t) {
                        let { invalidEmojis: n } = t;
                        if (null != n && n.length > 0) {
                            let { errorMessage: t } = d.A.validateMessage(n, U, e.id);
                            return (L(t), M(!1), { hasErrors: !0 });
                        }
                        return { hasErrors: !1 };
                    })(i);
                if (!l) {
                    try {
                        let t = await o.Ay.updateVoiceChannelStatus(e.id, i.content);
                        204 === t.status
                            ? (S.default.track(p.HAw.VOICE_CHANNEL_TOPIC_SET, {
                                  guild_id: e.guild_id,
                                  channel_id: e.id,
                                  media_session_id: I,
                                  raw_length: n,
                                  text_length: a,
                                  location_stack: x,
                              }),
                              b())
                            : B(t);
                    } catch (t) {
                        B(t);
                    }
                    M(!1);
                }
            }
            i.useEffect(() => {
                S.default.track(p.HAw.OPEN_MODAL, {
                    type: "Voice Channel Topic Modal",
                    guild_id: e.guild_id,
                    location_stack: x,
                });
            }, [e.guild_id, x]);
            let [R, D] = i.useState((0, g.x7)(m)),
                j = (0, a.jsx)(r.D, {
                    label: N.intl.string(N.t.Fq5lwN),
                    errorMessage: V,
                    children: (0, a.jsx)(_.Ay, {
                        innerClassName: y.Tg,
                        characterCountClassName: y.Dq,
                        textValue: m,
                        richValue: R,
                        placeholder: N.intl.formatToPlainString(N.t.DUXxBh, { channelName: H }),
                        focused: !0,
                        channel: e,
                        onChange: function (t, e, n) {
                            (w(e), D(n));
                        },
                        onSubmit: async function () {
                            return (q || O || (await G()), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 }));
                        },
                        type: C.oU.VOICE_CHANNEL_STATUS,
                        canMentionRoles: !1,
                        canMentionChannels: !1,
                        allowNewLines: !1,
                        parentModalKey: T,
                        maxCharacterCount: 500,
                        showRemainingCharsAfterCount: 250,
                        emojiPickerCloseOnModalOuterClick: !0,
                    }),
                });
            return (0, a.jsx)(u.k, {
                transitionState: n,
                onClose: b,
                graphic: { type: "image", src: v },
                title: N.intl.string(N.t["5CyJBd"]),
                subtitle: N.intl.string(N.t.NRBYju),
                actions: [
                    { variant: "secondary", text: N.intl.string(N.t["ETE/oC"]), onClick: b },
                    { variant: "primary", loading: O, disabled: q, text: N.intl.string(N.t.XqK2I2), onClick: G },
                ],
                children: j,
            });
        },
        m: T,
    },
);
