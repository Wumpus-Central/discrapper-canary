i.d(t, { default: () => S, m: () => E });
var l = i(627968),
    n = i(64700),
    s = i(452027),
    a = i(772707),
    d = i(417597),
    r = i(319400),
    o = i(435183),
    c = i(843472),
    u = i(47167),
    A = i(882840),
    h = i(355622),
    g = i(408018),
    x = i(133343),
    m = i(451909),
    C = i(383501),
    _ = i(287809),
    p = i(954571),
    N = i(652215),
    f = i(985018),
    v = i(700494),
    j = i(379649);
let E = "VoiceChannelStatusModal";
function S(e) {
    let { channel: t, transitionState: i, sourceAnalyticsLocations: S, onClose: O } = e,
        I = (0, A.l)(t),
        y = (0, d.bG)([C.A], () => C.A.getMediaSessionId()),
        [T, b] = n.useState(I ?? ""),
        [L, M] = n.useState(!1),
        [V, D] = n.useState(null),
        w = (0, d.bG)([_.default], () => _.default.getCurrentUser()),
        G = (0, u.Ay)(t),
        U = T.length > 500;
    n.useEffect(() => {
        p.default.track(N.HAw.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: t.guild_id,
            location_stack: S,
        });
    }, [t.guild_id, S]);
    let P = (e) => {
            D(new r.LG(e, e.status).getAnyErrorMessage());
        },
        F = async (e) => {
            T === I && O(), e?.preventDefault(), D(null), M(!0);
            let i = T.length,
                l = T.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
                n = m.Ay.parse(t, T),
                { hasErrors: s } = ((e) => {
                    let { invalidEmojis: i } = e;
                    if (null != i && i.length > 0) {
                        let { errorMessage: e } = c.A.validateMessage(i, w, t.id);
                        return D(e), M(!1), { hasErrors: !0 };
                    }
                    return { hasErrors: !1 };
                })(n);
            if (!s) {
                try {
                    let e = await o.Ay.updateVoiceChannelStatus(t.id, n.content);
                    204 === e.status
                        ? (p.default.track(N.HAw.VOICE_CHANNEL_TOPIC_SET, {
                              guild_id: t.guild_id,
                              channel_id: t.id,
                              media_session_id: y,
                              raw_length: i,
                              text_length: l,
                              location_stack: S,
                          }),
                          O())
                        : P(e);
                } catch (e) {
                    P(e);
                }
                M(!1);
            }
        },
        [k, R] = n.useState((0, g.x7)(T)),
        H = async () => (U || L || (await F()), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 })),
        B = (0, l.jsx)(s.D, {
            label: f.intl.string(f.t.Fq5lwN),
            errorMessage: V,
            children: (0, l.jsx)(x.Ay, {
                innerClassName: v.Tg,
                textValue: T,
                richValue: k,
                placeholder: f.intl.formatToPlainString(f.t.DUXxBh, { channelName: G }),
                focused: !0,
                channel: t,
                onChange: (e, t, i) => {
                    b(t), R(i);
                },
                onSubmit: H,
                type: h.oU.VOICE_CHANNEL_STATUS,
                canMentionRoles: !1,
                canMentionChannels: !1,
                allowNewLines: !1,
                parentModalKey: E,
                maxCharacterCount: 500,
                showRemainingCharsAfterCount: 250,
                emojiPickerCloseOnModalOuterClick: !0,
            }),
        });
    return (0, l.jsx)(a.k, {
        transitionState: i,
        onClose: O,
        graphic: { type: "image", src: j },
        title: f.intl.string(f.t["5CyJBd"]),
        subtitle: f.intl.string(f.t.NRBYju),
        actions: [
            { variant: "secondary", text: f.intl.string(f.t["ETE/oC"]), onClick: O },
            { variant: "primary", loading: L, disabled: U, text: f.intl.string(f.t.XqK2I2), onClick: F },
        ],
        children: B,
    });
}
