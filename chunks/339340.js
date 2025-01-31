n.d(e, {
    a: () => f,
    default: () => G
}),
    n(47120),
    n(757143);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    d = n(399606),
    s = n(343817),
    u = n(481060),
    _ = n(787014),
    o = n(904245),
    E = n(12498),
    c = n(541716),
    g = n(752305),
    I = n(893718),
    T = n(600164),
    p = n(540059),
    m = n(957730),
    C = n(19780),
    L = n(594174),
    S = n(626135),
    U = n(981631),
    N = n(388032),
    D = n(752670);
let f = 'VoiceChannelStatusModal';
function G(t) {
    let { channel: e, transitionState: n, onClose: r } = t,
        G = (0, d.e7)([E.Z], () => E.Z.getChannelStatus(e)),
        A = (0, d.e7)([C.Z], () => C.Z.getMediaSessionId()),
        [y, O] = l.useState(null != G ? G : ''),
        [v, Z] = l.useState(!1),
        [h, P] = l.useState(null),
        z = (0, d.e7)([L.default], () => L.default.getCurrentUser()),
        H = y.length > 500,
        M = (0, p.Q3)('VoiceChannelStatusModal');
    l.useEffect(() => {
        S.default.track(U.rMx.OPEN_MODAL, {
            type: 'Voice Channel Topic Modal',
            guild_id: e.guild_id
        });
    }, [e.guild_id]);
    let B = (t) => {
            P(new s.Hx(t, t.status).getAnyErrorMessage());
        },
        V = (t) => {
            let { invalidEmojis: n } = t;
            if (null != n && n.length > 0) {
                let { errorMessage: t } = o.Z.validateMessage(n, z, e.id);
                return P(t), Z(!1), { hasErrors: !0 };
            }
            return { hasErrors: !1 };
        },
        R = async (t) => {
            y === G && r(), null == t || t.preventDefault(), P(null), Z(!0);
            let n = y.length,
                i = y.replace(/<(a)?:[^:]+:[0-9]+>/g, '--').length,
                l = m.ZP.parse(void 0, y),
                { hasErrors: a } = V(l);
            if (!a) {
                try {
                    let t = await _.ZP.updateVoiceChannelStatus(e.id, l.content);
                    204 === t.status
                        ? (S.default.track(U.rMx.VOICE_CHANNEL_TOPIC_SET, {
                              guild_id: e.guild_id,
                              channel_id: e.id,
                              media_session_id: A,
                              raw_length: n,
                              text_length: i
                          }),
                          r())
                        : B(t);
                } catch (t) {
                    B(t);
                }
                Z(!1);
            }
        },
        [b, x] = l.useState((0, g.JM)(y)),
        X = async () => (
            H || v || (await R()),
            Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0
            })
        );
    return (0, i.jsx)('form', {
        onSubmit: R,
        className: D.form,
        children: (0, i.jsxs)(u.Y0X, {
            transitionState: n,
            size: u.CgR.SMALL,
            className: a()(D.modal, D.gradientBorder),
            children: [
                (0, i.jsxs)(u.hzk, {
                    className: D.container,
                    children: [
                        (0, i.jsxs)(u.xBx, {
                            direction: T.Z.Direction.VERTICAL,
                            className: D.modalHeader,
                            separator: !1,
                            children: [
                                (0, i.jsx)(u.olH, {
                                    className: D.closeButton,
                                    onClick: r
                                }),
                                (0, i.jsx)('div', { className: D.headerImage }),
                                (0, i.jsx)(u.vwX, {
                                    tag: 'h1',
                                    className: D.title,
                                    children: N.intl.string(N.t['5CyJBQ'])
                                }),
                                (0, i.jsx)(u.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: N.intl.string(N.t.NRBYjo)
                                })
                            ]
                        }),
                        (0, i.jsxs)(u.hjN, {
                            className: D.inputSection,
                            title: N.intl.string(N.t.Fq5lwM),
                            children: [
                                (0, i.jsx)(I.Z, {
                                    innerClassName: D.textArea,
                                    textValue: y,
                                    richValue: b,
                                    placeholder: N.intl.formatToPlainString(N.t.DUXxBg, { channelName: e.name }),
                                    focused: !0,
                                    channel: e,
                                    onChange: (t, e, n) => {
                                        O(e), x(n);
                                    },
                                    onSubmit: X,
                                    type: c.Ie.VOICE_CHANNEL_STATUS,
                                    canMentionRoles: !1,
                                    canMentionChannels: !1,
                                    allowNewLines: !1,
                                    parentModalKey: f,
                                    maxCharacterCount: 500,
                                    showRemainingCharsAfterCount: 250,
                                    emojiPickerCloseOnModalOuterClick: !0
                                }),
                                null != h
                                    ? (0, i.jsx)(u.kzN, {
                                          className: D.error,
                                          children: h
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)(u.mzw, {
                    justify: M ? T.Z.Justify.END : T.Z.Justify.BETWEEN,
                    direction: T.Z.Direction.HORIZONTAL,
                    className: D.modalFooter,
                    children: [
                        (0, i.jsx)(u.zxk, {
                            look: u.zxk.Looks.FILLED,
                            color: u.zxk.Colors.PRIMARY,
                            className: D.cancelButton,
                            onClick: r,
                            children: N.intl.string(N.t['ETE/oK'])
                        }),
                        (0, i.jsx)(u.zxk, {
                            onClick: R,
                            submitting: v,
                            className: D.button,
                            disabled: H,
                            children: N.intl.string(N.t.XqK2Iy)
                        })
                    ]
                })
            ]
        })
    });
}
