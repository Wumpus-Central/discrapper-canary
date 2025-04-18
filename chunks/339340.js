n.d(t, {
    a: () => T,
    default: () => A
}),
    n(388685),
    n(704826),
    n(35282);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(399606),
    l = n(343817),
    c = n(481060),
    u = n(787014),
    d = n(904245),
    f = n(12498),
    _ = n(541716),
    p = n(752305),
    h = n(893718),
    m = n(600164),
    g = n(540059),
    E = n(957730),
    b = n(19780),
    y = n(594174),
    v = n(626135),
    O = n(981631),
    I = n(388032),
    S = n(903308);
let T = 'VoiceChannelStatusModal',
    N = 500;
function A(e) {
    let { channel: t, transitionState: n, sourceAnalyticsLocations: o, onClose: A } = e,
        C = (0, s.e7)([f.Z], () => f.Z.getChannelStatus(t)),
        R = (0, s.e7)([b.Z], () => b.Z.getMediaSessionId()),
        [P, w] = i.useState(null != C ? C : ''),
        [D, L] = i.useState(!1),
        [x, M] = i.useState(null),
        k = (0, s.e7)([y.default], () => y.default.getCurrentUser()),
        j = P.length > N,
        U = (0, g.Q3)('VoiceChannelStatusModal');
    i.useEffect(() => {
        v.default.track(O.rMx.OPEN_MODAL, {
            type: 'Voice Channel Topic Modal',
            guild_id: t.guild_id,
            location_stack: o
        });
    }, [t.guild_id, o]);
    let G = (e) => {
            M(new l.Hx(e, e.status).getAnyErrorMessage());
        },
        B = (e) => {
            let { invalidEmojis: n } = e;
            if (null != n && n.length > 0) {
                let { errorMessage: e } = d.Z.validateMessage(n, k, t.id);
                return M(e), L(!1), { hasErrors: !0 };
            }
            return { hasErrors: !1 };
        },
        F = async (e) => {
            P === C && A(), null == e || e.preventDefault(), M(null), L(!0);
            let n = P.length,
                r = P.replace(/<(a)?:[^:]+:[0-9]+>/g, '--').length,
                i = E.ZP.parse(void 0, P),
                { hasErrors: a } = B(i);
            if (!a) {
                try {
                    let e = await u.ZP.updateVoiceChannelStatus(t.id, i.content);
                    204 === e.status
                        ? (v.default.track(O.rMx.VOICE_CHANNEL_TOPIC_SET, {
                              guild_id: t.guild_id,
                              channel_id: t.id,
                              media_session_id: R,
                              raw_length: n,
                              text_length: r,
                              location_stack: o
                          }),
                          A())
                        : G(e);
                } catch (e) {
                    G(e);
                }
                L(!1);
            }
        },
        [V, Z] = i.useState((0, p.JM)(P)),
        H = (e, t, n) => {
            w(t), Z(n);
        },
        W = async () => (
            j || D || (await F()),
            Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0
            })
        );
    return (0, r.jsx)('form', {
        onSubmit: F,
        className: S.form,
        children: (0, r.jsxs)(c.Y0X, {
            transitionState: n,
            size: c.CgR.SMALL,
            className: a()(S.modal, S.gradientBorder),
            children: [
                (0, r.jsxs)(c.hzk, {
                    className: S.container,
                    children: [
                        (0, r.jsxs)(c.xBx, {
                            direction: m.Z.Direction.VERTICAL,
                            className: S.modalHeader,
                            separator: !1,
                            children: [
                                (0, r.jsx)(c.olH, {
                                    className: S.closeButton,
                                    onClick: A
                                }),
                                (0, r.jsx)('div', { className: S.headerImage }),
                                (0, r.jsx)(c.vwX, {
                                    tag: 'h1',
                                    className: S.title,
                                    children: I.NW.string(I.t['5CyJBQ'])
                                }),
                                (0, r.jsx)(c.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: I.NW.string(I.t.NRBYjo)
                                })
                            ]
                        }),
                        (0, r.jsxs)(c.hjN, {
                            className: S.inputSection,
                            title: I.NW.string(I.t.Fq5lwM),
                            children: [
                                (0, r.jsx)(h.Z, {
                                    innerClassName: S.textArea,
                                    textValue: P,
                                    richValue: V,
                                    placeholder: I.NW.formatToPlainString(I.t.DUXxBg, { channelName: t.name }),
                                    focused: !0,
                                    channel: t,
                                    onChange: H,
                                    onSubmit: W,
                                    type: _.Ie.VOICE_CHANNEL_STATUS,
                                    canMentionRoles: !1,
                                    canMentionChannels: !1,
                                    allowNewLines: !1,
                                    parentModalKey: T,
                                    maxCharacterCount: N,
                                    showRemainingCharsAfterCount: N / 2,
                                    emojiPickerCloseOnModalOuterClick: !0
                                }),
                                null != x
                                    ? (0, r.jsx)(c.kzN, {
                                          className: S.error,
                                          children: x
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)(c.mzw, {
                    justify: U ? m.Z.Justify.END : m.Z.Justify.BETWEEN,
                    direction: m.Z.Direction.HORIZONTAL,
                    className: S.modalFooter,
                    children: [
                        (0, r.jsx)(c.zxk, {
                            look: c.zxk.Looks.FILLED,
                            color: c.zxk.Colors.PRIMARY,
                            className: S.cancelButton,
                            onClick: A,
                            children: I.NW.string(I.t['ETE/oK'])
                        }),
                        (0, r.jsx)(c.zxk, {
                            onClick: F,
                            submitting: D,
                            className: S.button,
                            disabled: j,
                            children: I.NW.string(I.t.XqK2Iy)
                        })
                    ]
                })
            ]
        })
    });
}
