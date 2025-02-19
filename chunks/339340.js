n.d(t, {
    a: () => O,
    default: () => D
}),
    n(47120),
    n(757143),
    n(301563);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    d = n.n(a),
    l = n(399606),
    s = n(343817),
    o = n(481060),
    _ = n(787014),
    u = n(904245),
    c = n(12498),
    p = n(541716),
    g = n(752305),
    N = n(893718),
    E = n(600164),
    I = n(540059),
    T = n(957730),
    m = n(19780),
    L = n(594174),
    S = n(626135),
    U = n(981631),
    y = n(388032),
    C = n(541383);
let O = 'VoiceChannelStatusModal';
function D(e) {
    let { channel: t, transitionState: n, onClose: a } = e,
        D = (0, l.e7)([c.Z], () => c.Z.getChannelStatus(t)),
        f = (0, l.e7)([m.Z], () => m.Z.getMediaSessionId()),
        [A, G] = r.useState(null != D ? D : ''),
        [W, h] = r.useState(!1),
        [v, z] = r.useState(null),
        b = (0, l.e7)([L.default], () => L.default.getCurrentUser()),
        Z = A.length > 500,
        H = (0, I.Q3)('VoiceChannelStatusModal');
    r.useEffect(() => {
        S.default.track(U.rMx.OPEN_MODAL, {
            type: 'Voice Channel Topic Modal',
            guild_id: t.guild_id
        });
    }, [t.guild_id]);
    let R = (e) => {
            z(new s.Hx(e, e.status).getAnyErrorMessage());
        },
        B = (e) => {
            let { invalidEmojis: n } = e;
            if (null != n && n.length > 0) {
                let { errorMessage: e } = u.Z.validateMessage(n, b, t.id);
                return z(e), h(!1), { hasErrors: !0 };
            }
            return { hasErrors: !1 };
        },
        M = async (e) => {
            A === D && a(), null == e || e.preventDefault(), z(null), h(!0);
            let n = A.length,
                i = A.replace(/<(a)?:[^:]+:[0-9]+>/g, '--').length,
                r = T.ZP.parse(void 0, A),
                { hasErrors: d } = B(r);
            if (!d) {
                try {
                    let e = await _.ZP.updateVoiceChannelStatus(t.id, r.content);
                    204 === e.status
                        ? (S.default.track(U.rMx.VOICE_CHANNEL_TOPIC_SET, {
                              guild_id: t.guild_id,
                              channel_id: t.id,
                              media_session_id: f,
                              raw_length: n,
                              text_length: i
                          }),
                          a())
                        : R(e);
                } catch (e) {
                    R(e);
                }
                h(!1);
            }
        },
        [P, x] = r.useState((0, g.JM)(A)),
        X = async () => (
            Z || W || (await M()),
            Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0
            })
        );
    return (0, i.jsx)('form', {
        onSubmit: M,
        className: C.form,
        children: (0, i.jsxs)(o.Y0X, {
            transitionState: n,
            size: o.CgR.SMALL,
            className: d()(C.modal, C.gradientBorder),
            children: [
                (0, i.jsxs)(o.hzk, {
                    className: C.container,
                    children: [
                        (0, i.jsxs)(o.xBx, {
                            direction: E.Z.Direction.VERTICAL,
                            className: C.modalHeader,
                            separator: !1,
                            children: [
                                (0, i.jsx)(o.olH, {
                                    className: C.closeButton,
                                    onClick: a
                                }),
                                (0, i.jsx)('div', { className: C.headerImage }),
                                (0, i.jsx)(o.vwX, {
                                    tag: 'h1',
                                    className: C.title,
                                    children: y.NW.string(y.t['5CyJBQ'])
                                }),
                                (0, i.jsx)(o.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: y.NW.string(y.t.NRBYjo)
                                })
                            ]
                        }),
                        (0, i.jsxs)(o.hjN, {
                            className: C.inputSection,
                            title: y.NW.string(y.t.Fq5lwM),
                            children: [
                                (0, i.jsx)(N.Z, {
                                    innerClassName: C.textArea,
                                    textValue: A,
                                    richValue: P,
                                    placeholder: y.NW.formatToPlainString(y.t.DUXxBg, { channelName: t.name }),
                                    focused: !0,
                                    channel: t,
                                    onChange: (e, t, n) => {
                                        G(t), x(n);
                                    },
                                    onSubmit: X,
                                    type: p.Ie.VOICE_CHANNEL_STATUS,
                                    canMentionRoles: !1,
                                    canMentionChannels: !1,
                                    allowNewLines: !1,
                                    parentModalKey: O,
                                    maxCharacterCount: 500,
                                    showRemainingCharsAfterCount: 250,
                                    emojiPickerCloseOnModalOuterClick: !0
                                }),
                                null != v
                                    ? (0, i.jsx)(o.kzN, {
                                          className: C.error,
                                          children: v
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)(o.mzw, {
                    justify: H ? E.Z.Justify.END : E.Z.Justify.BETWEEN,
                    direction: E.Z.Direction.HORIZONTAL,
                    className: C.modalFooter,
                    children: [
                        (0, i.jsx)(o.zxk, {
                            look: o.zxk.Looks.FILLED,
                            color: o.zxk.Colors.PRIMARY,
                            className: C.cancelButton,
                            onClick: a,
                            children: y.NW.string(y.t['ETE/oK'])
                        }),
                        (0, i.jsx)(o.zxk, {
                            onClick: M,
                            submitting: W,
                            className: C.button,
                            disabled: Z,
                            children: y.NW.string(y.t.XqK2Iy)
                        })
                    ]
                })
            ]
        })
    });
}
