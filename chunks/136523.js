a.d(t, { default: () => k, m: () => T });
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
    E = a(763827),
    S = a(287809),
    p = a(954571),
    f = a(652215),
    y = a(985018),
    N = a(700494),
    x = a(379649);
let T = "VoiceChannelStatusModal";
function k(e) {
    let { channel: t, transitionState: a, sourceAnalyticsLocations: k, onClose: v } = e,
        b = (0, h.l)(t),
        w = (0, r.bG)([E.A], () => E.A.getMediaSessionId()),
        [m, M] = l.useState(b ?? ""),
        [O, V] = l.useState(!1),
        [I, L] = l.useState(null),
        U = (0, r.bG)([S.default], () => S.default.getCurrentUser()),
        B = (0, c.Ay)(t),
        H = m.length > 500;
    l.useEffect(() => {
        p.default.track(f.HAw.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: t.guild_id,
            location_stack: k,
        });
    }, [t.guild_id, k]);
    let G = (e) => {
            L(new u.LG(e, e.status).getAnyErrorMessage());
        },
        R = async (e) => {
            m === b && v(), e?.preventDefault(), L(null), V(!0);
            let a = m.length,
                n = m.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
                l = A.Ay.parse(t, m),
                { hasErrors: i } = ((e) => {
                    let { invalidEmojis: a } = e;
                    if (null != a && a.length > 0) {
                        let { errorMessage: e } = o.A.validateMessage(a, U, t.id);
                        return L(e), V(!1), { hasErrors: !0 };
                    }
                    return { hasErrors: !1 };
                })(l);
            if (!i) {
                try {
                    let e = await d.Ay.updateVoiceChannelStatus(t.id, l.content);
                    204 === e.status
                        ? (p.default.track(f.HAw.VOICE_CHANNEL_TOPIC_SET, {
                              guild_id: t.guild_id,
                              channel_id: t.id,
                              media_session_id: w,
                              raw_length: a,
                              text_length: n,
                              location_stack: k,
                          }),
                          v())
                        : G(e);
                } catch (e) {
                    G(e);
                }
                V(!1);
            }
        },
        [j, D] = l.useState((0, C.x7)(m)),
        P = async () => (H || O || (await R()), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
        q = (0, n.jsx)(i.D, {
            label: y.intl.string(y.t.Fq5lwN),
            errorMessage: I,
            children: (0, n.jsx)(_.Ay, {
                innerClassName: N.Tg,
                textValue: m,
                richValue: j,
                placeholder: y.intl.formatToPlainString(y.t.DUXxBh, { channelName: B }),
                focused: !0,
                channel: t,
                onChange: (e, t, a) => {
                    M(t), D(a);
                },
                onSubmit: P,
                type: g.oU.VOICE_CHANNEL_STATUS,
                canMentionRoles: !1,
                canMentionChannels: !1,
                allowNewLines: !1,
                parentModalKey: T,
                maxCharacterCount: 500,
                showRemainingCharsAfterCount: 250,
                emojiPickerCloseOnModalOuterClick: !0,
            }),
        });
    return (0, n.jsx)(s.k, {
        transitionState: a,
        onClose: v,
        graphic: { type: "image", src: x },
        title: y.intl.string(y.t["5CyJBd"]),
        subtitle: y.intl.string(y.t.NRBYju),
        actions: [
            { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: v },
            { variant: "primary", loading: O, disabled: H, text: y.intl.string(y.t.XqK2I2), onClick: R },
        ],
        children: q,
    });
}
