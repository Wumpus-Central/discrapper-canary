n.d(e, {
    a: () => D,
    default: () => A
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
    o = n(787014),
    _ = n(904245),
    c = n(12498),
    E = n(541716),
    g = n(752305),
    I = n(893718),
    T = n(600164),
    p = n(540059),
    C = n(957730),
    m = n(19780),
    N = n(594174),
    L = n(626135),
    S = n(981631),
    U = n(388032),
    f = n(752670);
let D = 'VoiceChannelStatusModal';
function A(t) {
    let { channel: e, transitionState: n, onClose: r } = t,
        A = (0, d.e7)([c.Z], () => c.Z.getChannelStatus(e)),
        Z = (0, d.e7)([m.Z], () => m.Z.getMediaSessionId()),
        [G, h] = l.useState(null != A ? A : ''),
        [v, y] = l.useState(!1),
        [O, P] = l.useState(null),
        M = (0, d.e7)([N.default], () => N.default.getCurrentUser()),
        z = G.length > 500,
        H = (0, p.Q3)('VoiceChannelStatusModal');
    l.useEffect(() => {
        L.default.track(S.rMx.OPEN_MODAL, {
            type: 'Voice Channel Topic Modal',
            guild_id: e.guild_id
        });
    }, [e.guild_id]);
    let B = (t) => {
            P(new s.Hx(t, t.status).getAnyErrorMessage());
        },
        b = (t) => {
            let { invalidEmojis: n } = t;
            if (null != n && n.length > 0) {
                let { errorMessage: t } = _.Z.validateMessage(n, M, e.id);
                return P(t), y(!1), { hasErrors: !0 };
            }
            return { hasErrors: !1 };
        },
        R = async (t) => {
            G === A && r(), null == t || t.preventDefault(), P(null), y(!0);
            let n = G.length,
                i = G.replace(/<(a)?:[^:]+:[0-9]+>/g, '--').length,
                l = C.ZP.parse(void 0, G),
                { hasErrors: a } = b(l);
            if (!a) {
                try {
                    let t = await o.ZP.updateVoiceChannelStatus(e.id, l.content);
                    204 === t.status
                        ? (L.default.track(S.rMx.VOICE_CHANNEL_TOPIC_SET, {
                              guild_id: e.guild_id,
                              channel_id: e.id,
                              media_session_id: Z,
                              raw_length: n,
                              text_length: i
                          }),
                          r())
                        : B(t);
                } catch (t) {
                    B(t);
                }
                y(!1);
            }
        },
        [V, x] = l.useState((0, g.JM)(G)),
        X = async () => (
            z || v || (await R()),
            Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0
            })
        );
    return (0, i.jsx)('form', {
        onSubmit: R,
        className: f.form,
        children: (0, i.jsxs)(u.Y0X, {
            transitionState: n,
            size: u.CgR.SMALL,
            className: a()(f.modal, f.gradientBorder),
            children: [
                (0, i.jsxs)(u.hzk, {
                    className: f.container,
                    children: [
                        (0, i.jsxs)(u.xBx, {
                            direction: T.Z.Direction.VERTICAL,
                            className: f.modalHeader,
                            separator: !1,
                            children: [
                                (0, i.jsx)(u.olH, {
                                    className: f.closeButton,
                                    onClick: r
                                }),
                                (0, i.jsx)('div', { className: f.headerImage }),
                                (0, i.jsx)(u.vwX, {
                                    tag: 'h1',
                                    className: f.title,
                                    children: U.intl.string(U.t['5CyJBQ'])
                                }),
                                (0, i.jsx)(u.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: U.intl.string(U.t.NRBYjo)
                                })
                            ]
                        }),
                        (0, i.jsxs)(u.hjN, {
                            className: f.inputSection,
                            title: U.intl.string(U.t.Fq5lwM),
                            children: [
                                (0, i.jsx)(I.Z, {
                                    innerClassName: f.textArea,
                                    textValue: G,
                                    richValue: V,
                                    placeholder: U.intl.formatToPlainString(U.t.DUXxBg, { channelName: e.name }),
                                    focused: !0,
                                    channel: e,
                                    onChange: (t, e, n) => {
                                        h(e), x(n);
                                    },
                                    onSubmit: X,
                                    type: E.Ie.VOICE_CHANNEL_STATUS,
                                    canMentionRoles: !1,
                                    canMentionChannels: !1,
                                    allowNewLines: !1,
                                    parentModalKey: D,
                                    maxCharacterCount: 500,
                                    showRemainingCharsAfterCount: 250,
                                    emojiPickerCloseOnModalOuterClick: !0
                                }),
                                null != O
                                    ? (0, i.jsx)(u.kzN, {
                                          className: f.error,
                                          children: O
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)(u.mzw, {
                    justify: H ? T.Z.Justify.END : T.Z.Justify.BETWEEN,
                    direction: T.Z.Direction.HORIZONTAL,
                    className: f.modalFooter,
                    children: [
                        (0, i.jsx)(u.zxk, {
                            look: u.zxk.Looks.FILLED,
                            color: u.zxk.Colors.PRIMARY,
                            className: f.cancelButton,
                            onClick: r,
                            children: U.intl.string(U.t['ETE/oK'])
                        }),
                        (0, i.jsx)(u.zxk, {
                            onClick: R,
                            submitting: v,
                            className: f.button,
                            disabled: z,
                            children: U.intl.string(U.t.XqK2Iy)
                        })
                    ]
                })
            ]
        })
    });
}
