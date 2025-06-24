n.d(t, {
    a: () => T,
    default: () => A
}),
    n(388685),
    n(704826),
    n(35282);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
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
    g = n(957730),
    E = n(19780),
    b = n(594174),
    y = n(626135),
    O = n(981631),
    v = n(388032),
    I = n(823150);
let T = 'VoiceChannelStatusModal',
    S = 500;
function A(e) {
    let { channel: t, transitionState: n, sourceAnalyticsLocations: a, onClose: A } = e,
        N = (0, s.e7)([f.Z], () => f.Z.getChannelStatus(t)),
        C = (0, s.e7)([E.Z], () => E.Z.getMediaSessionId()),
        [R, P] = i.useState(null != N ? N : ''),
        [w, D] = i.useState(!1),
        [L, x] = i.useState(null),
        k = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
        M = R.length > S;
    i.useEffect(() => {
        y.default.track(O.rMx.OPEN_MODAL, {
            type: 'Voice Channel Topic Modal',
            guild_id: t.guild_id,
            location_stack: a
        });
    }, [t.guild_id, a]);
    let j = (e) => {
            x(new l.Hx(e, e.status).getAnyErrorMessage());
        },
        U = (e) => {
            let { invalidEmojis: n } = e;
            if (null != n && n.length > 0) {
                let { errorMessage: e } = d.Z.validateMessage(n, k, t.id);
                return x(e), D(!1), { hasErrors: !0 };
            }
            return { hasErrors: !1 };
        },
        G = async (e) => {
            R === N && A(), null == e || e.preventDefault(), x(null), D(!0);
            let n = R.length,
                r = R.replace(/<(a)?:[^:]+:[0-9]+>/g, '--').length,
                i = g.ZP.parse(void 0, R),
                { hasErrors: o } = U(i);
            if (!o) {
                try {
                    let e = await u.ZP.updateVoiceChannelStatus(t.id, i.content);
                    204 === e.status
                        ? (y.default.track(O.rMx.VOICE_CHANNEL_TOPIC_SET, {
                              guild_id: t.guild_id,
                              channel_id: t.id,
                              media_session_id: C,
                              raw_length: n,
                              text_length: r,
                              location_stack: a
                          }),
                          A())
                        : j(e);
                } catch (e) {
                    j(e);
                }
                D(!1);
            }
        },
        [B, V] = i.useState((0, p.JM)(R)),
        F = (e, t, n) => {
            P(t), V(n);
        },
        Z = async () => (
            M || w || (await G()),
            Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0
            })
        );
    return (0, r.jsx)('form', {
        onSubmit: G,
        className: I.form,
        children: (0, r.jsxs)(c.Y0X, {
            transitionState: n,
            size: c.CgR.SMALL,
            className: o()(I.modal, I.gradientBorder),
            parentComponent: 'VoiceChannelStatusModal',
            children: [
                (0, r.jsxs)(c.hzk, {
                    className: I.container,
                    children: [
                        (0, r.jsxs)(c.xBx, {
                            direction: m.Z.Direction.VERTICAL,
                            className: I.modalHeader,
                            separator: !1,
                            children: [
                                (0, r.jsx)(c.olH, {
                                    className: I.closeButton,
                                    onClick: A
                                }),
                                (0, r.jsx)('div', { className: I.headerImage }),
                                (0, r.jsx)(c.vwX, {
                                    tag: 'h1',
                                    className: I.title,
                                    children: v.intl.string(v.t['5CyJBQ'])
                                }),
                                (0, r.jsx)(c.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: v.intl.string(v.t.NRBYjo)
                                })
                            ]
                        }),
                        (0, r.jsxs)(c.hjN, {
                            className: I.inputSection,
                            title: v.intl.string(v.t.Fq5lwM),
                            children: [
                                (0, r.jsx)(h.Z, {
                                    innerClassName: I.textArea,
                                    textValue: R,
                                    richValue: B,
                                    placeholder: v.intl.formatToPlainString(v.t.DUXxBg, { channelName: t.name }),
                                    focused: !0,
                                    channel: t,
                                    onChange: F,
                                    onSubmit: Z,
                                    type: _.Ie.VOICE_CHANNEL_STATUS,
                                    canMentionRoles: !1,
                                    canMentionChannels: !1,
                                    allowNewLines: !1,
                                    parentModalKey: T,
                                    maxCharacterCount: S,
                                    showRemainingCharsAfterCount: S / 2,
                                    emojiPickerCloseOnModalOuterClick: !0
                                }),
                                null != L
                                    ? (0, r.jsx)(c.kzN, {
                                          className: I.error,
                                          children: L
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, r.jsxs)(c.mzw, {
                    justify: m.Z.Justify.END,
                    direction: m.Z.Direction.HORIZONTAL,
                    className: I.modalFooter,
                    children: [
                        (0, r.jsx)(c.zxk, {
                            look: c.zxk.Looks.FILLED,
                            color: c.zxk.Colors.PRIMARY,
                            className: I.cancelButton,
                            onClick: A,
                            children: v.intl.string(v.t['ETE/oK'])
                        }),
                        (0, r.jsx)(c.zxk, {
                            onClick: G,
                            submitting: w,
                            className: I.button,
                            disabled: M,
                            children: v.intl.string(v.t.XqK2Iy)
                        })
                    ]
                })
            ]
        })
    });
}
