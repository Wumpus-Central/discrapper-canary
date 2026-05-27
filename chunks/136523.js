a.d(t, { default: () => T, m: () => x });
var n = a(627968),
    l = a(64700),
    i = a(452027),
    s = a(772707),
    r = a(702841),
    u = a(319400),
    d = a(435183),
    o = a(720149),
    c = a(47167),
    h = a(882840),
    g = a(355622),
    C = a(408018),
    _ = a(201349),
    A = a(451909),
    f = a(763827),
    E = a(287809),
    S = a(174459),
    p = a(652215),
    y = a(375708),
    N = a(700494),
    v = a(379649);
let x = "VoiceChannelStatusModal";
function T(e) {
    let { channel: t, transitionState: a, sourceAnalyticsLocations: T, onClose: b } = e,
        k = (0, h.l)(t),
        w = (0, r.bG)([f.A], () => f.A.getMediaSessionId()),
        [I, m] = l.useState(k ?? ""),
        [M, O] = l.useState(!1),
        [V, L] = l.useState(null),
        U = (0, r.bG)([E.default], () => E.default.getCurrentUser()),
        B = (0, c.Ay)(t),
        G = I.length > 500;
    l.useEffect(() => {
        S.default.track(p.HAw.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: t.guild_id,
            location_stack: T,
        });
    }, [t.guild_id, T]);
    let H = (e) => {
            L(new u.LG(e, e.status).getAnyErrorMessage());
        },
        R = async (e) => {
            I === k && b(), e?.preventDefault(), L(null), O(!0);
            let a = I.length,
                n = I.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
                l = A.Ay.parse(t, I),
                { hasErrors: i } = ((e) => {
                    let { invalidEmojis: a } = e;
                    if (null != a && a.length > 0) {
                        let { errorMessage: e } = o.A.validateMessage(a, U, t.id);
                        return L(e), O(!1), { hasErrors: !0 };
                    }
                    return { hasErrors: !1 };
                })(l);
            if (!i) {
                try {
                    let e = await d.Ay.updateVoiceChannelStatus(t.id, l.content);
                    204 === e.status
                        ? (S.default.track(p.HAw.VOICE_CHANNEL_TOPIC_SET, {
                              guild_id: t.guild_id,
                              channel_id: t.id,
                              media_session_id: w,
                              raw_length: a,
                              text_length: n,
                              location_stack: T,
                          }),
                          b())
                        : H(e);
                } catch (e) {
                    H(e);
                }
                O(!1);
            }
        },
        [j, D] = l.useState((0, C.x7)(I)),
        P = async () => (G || M || (await R()), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
        q = (0, n.jsx)(i.D, {
            label: y.intl.string(y.t.Fq5lwN),
            errorMessage: V,
            children: (0, n.jsx)(_.Ay, {
                innerClassName: N.Tg,
                textValue: I,
                richValue: j,
                placeholder: y.intl.formatToPlainString(y.t.DUXxBh, { channelName: B }),
                focused: !0,
                channel: t,
                onChange: (e, t, a) => {
                    m(t), D(a);
                },
                onSubmit: P,
                type: g.oU.VOICE_CHANNEL_STATUS,
                canMentionRoles: !1,
                canMentionChannels: !1,
                allowNewLines: !1,
                parentModalKey: x,
                maxCharacterCount: 500,
                showRemainingCharsAfterCount: 250,
                emojiPickerCloseOnModalOuterClick: !0,
            }),
        });
    return (0, n.jsx)(s.k, {
        transitionState: a,
        onClose: b,
        graphic: { type: "image", src: v },
        title: y.intl.string(y.t["5CyJBd"]),
        subtitle: y.intl.string(y.t.NRBYju),
        actions: [
            { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: b },
            { variant: "primary", loading: M, disabled: G, text: y.intl.string(y.t.XqK2I2), onClick: R },
        ],
        children: q,
    });
}
