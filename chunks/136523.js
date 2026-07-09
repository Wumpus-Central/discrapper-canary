n.d(e, { default: () => T, m: () => x });
var a = n(627968),
    l = n(64700),
    i = n(452027),
    s = n(772707),
    r = n(702841),
    u = n(319400),
    o = n(435183),
    d = n(493336),
    c = n(47167),
    h = n(882840),
    C = n(355622),
    g = n(408018),
    _ = n(138617),
    A = n(451909),
    f = n(763827),
    E = n(287809),
    S = n(174459),
    p = n(652215),
    y = n(375708),
    N = n(482446),
    v = n(379649);
let x = "VoiceChannelStatusModal";
function T(t) {
    let { channel: e, transitionState: n, sourceAnalyticsLocations: T, onClose: b } = t,
        k = (0, h.l)(e),
        m = (0, r.bG)([f.A], () => f.A.getMediaSessionId()),
        [w, I] = l.useState(k ?? ""),
        [M, O] = l.useState(!1),
        [V, L] = l.useState(null),
        U = (0, r.bG)([E.default], () => E.default.getCurrentUser()),
        B = (0, c.Ay)(e),
        G = w.length > 500;
    function H(t) {
        L(new u.LG(t, t.status).getAnyErrorMessage());
    }
    async function D(t) {
        w === k && b(), t?.preventDefault(), L(null), O(!0);
        let n = w.length,
            a = w.replace(/<(a)?:[^:]+:[0-9]+>/g, "--").length,
            l = A.Ay.parse(e, w),
            { hasErrors: i } = (function (t) {
                let { invalidEmojis: n } = t;
                if (null != n && n.length > 0) {
                    let { errorMessage: t } = d.A.validateMessage(n, U, e.id);
                    return L(t), O(!1), { hasErrors: !0 };
                }
                return { hasErrors: !1 };
            })(l);
        if (!i) {
            try {
                let t = await o.Ay.updateVoiceChannelStatus(e.id, l.content);
                204 === t.status
                    ? (S.default.track(p.HAw.VOICE_CHANNEL_TOPIC_SET, {
                          guild_id: e.guild_id,
                          channel_id: e.id,
                          media_session_id: m,
                          raw_length: n,
                          text_length: a,
                          location_stack: T,
                      }),
                      b())
                    : H(t);
            } catch (t) {
                H(t);
            }
            O(!1);
        }
    }
    l.useEffect(() => {
        S.default.track(p.HAw.OPEN_MODAL, {
            type: "Voice Channel Topic Modal",
            guild_id: e.guild_id,
            location_stack: T,
        });
    }, [e.guild_id, T]);
    let [R, j] = l.useState((0, g.x7)(w));
    async function q() {
        return G || M || (await D()), Promise.resolve({ shouldClear: !1, shouldRefocus: !0 });
    }
    let P = (0, a.jsx)(i.D, {
        label: y.intl.string(y.t.Fq5lwN),
        errorMessage: V,
        children: (0, a.jsx)(_.Ay, {
            innerClassName: N.Tg,
            characterCountClassName: N.Dq,
            textValue: w,
            richValue: R,
            placeholder: y.intl.formatToPlainString(y.t.DUXxBh, { channelName: B }),
            focused: !0,
            channel: e,
            onChange: function (t, e, n) {
                I(e), j(n);
            },
            onSubmit: q,
            type: C.oU.VOICE_CHANNEL_STATUS,
            canMentionRoles: !1,
            canMentionChannels: !1,
            allowNewLines: !1,
            parentModalKey: x,
            maxCharacterCount: 500,
            showRemainingCharsAfterCount: 250,
            emojiPickerCloseOnModalOuterClick: !0,
        }),
    });
    return (0, a.jsx)(s.k, {
        transitionState: n,
        onClose: b,
        graphic: { type: "image", src: v },
        title: y.intl.string(y.t["5CyJBd"]),
        subtitle: y.intl.string(y.t.NRBYju),
        actions: [
            { variant: "secondary", text: y.intl.string(y.t["ETE/oC"]), onClick: b },
            { variant: "primary", loading: M, disabled: G, text: y.intl.string(y.t.XqK2I2), onClick: D },
        ],
        children: P,
    });
}
