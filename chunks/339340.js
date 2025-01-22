e.r(n),
    e.d(n, {
        VOICE_CHANNEL_STATUS_MODAL_KEY: function () {
            return f;
        },
        default: function () {
            return L;
        }
    }),
    e(47120),
    e(757143);
var i = e(200651),
    l = e(192379),
    r = e(399606),
    d = e(343817),
    a = e(481060),
    u = e(787014),
    s = e(12498),
    o = e(541716),
    _ = e(752305),
    c = e(893718),
    E = e(600164),
    I = e(957730),
    g = e(19780),
    p = e(626135),
    T = e(981631),
    m = e(388032),
    C = e(752670);
let f = 'VoiceChannelStatusModal';
function L(t) {
    let { channel: n, transitionState: e, onClose: L } = t,
        U = (0, r.e7)([s.Z], () => s.Z.getChannelStatus(n)),
        D = (0, r.e7)([g.Z], () => g.Z.getMediaSessionId()),
        [S, N] = l.useState(null != U ? U : ''),
        [G, A] = l.useState(!1),
        [y, Z] = l.useState(null),
        h = S.length > 500;
    l.useEffect(() => {
        p.default.track(T.rMx.OPEN_MODAL, {
            type: 'Voice Channel Topic Modal',
            guild_id: n.guild_id
        });
    }, [n.guild_id]);
    let O = (t) => {
            Z(new d.Hx(t, t.status).getAnyErrorMessage());
        },
        v = async (t) => {
            S === U && L(), null == t || t.preventDefault(), Z(null), A(!0);
            let e = S.length,
                i = S.replace(/<(a)?:[^:]+:[0-9]+>/g, '--').length;
            try {
                let t = I.ZP.parse(void 0, S),
                    l = await u.ZP.updateVoiceChannelStatus(n.id, t.content);
                204 === l.status
                    ? (p.default.track(T.rMx.VOICE_CHANNEL_TOPIC_SET, {
                          guild_id: n.guild_id,
                          channel_id: n.id,
                          media_session_id: D,
                          raw_length: e,
                          text_length: i
                      }),
                      L())
                    : O(l);
            } catch (t) {
                O(t);
            }
            A(!1);
        },
        [z, M] = l.useState((0, _.JM)(S)),
        P = async () => (
            !h && !G && (await v()),
            Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0
            })
        );
    return (0, i.jsx)('form', {
        onSubmit: v,
        className: C.form,
        children: (0, i.jsxs)(a.ModalRoot, {
            transitionState: e,
            size: a.ModalSize.SMALL,
            children: [
                (0, i.jsxs)(a.ModalContent, {
                    children: [
                        (0, i.jsxs)(a.ModalHeader, {
                            direction: E.Z.Direction.VERTICAL,
                            className: C.modalHeader,
                            separator: !1,
                            children: [
                                (0, i.jsx)(a.ModalCloseButton, {
                                    className: C.closeButton,
                                    onClick: L
                                }),
                                (0, i.jsx)('div', { className: C.headerImage }),
                                (0, i.jsx)(a.FormTitle, {
                                    tag: 'h1',
                                    className: C.title,
                                    children: m.intl.string(m.t['5CyJBQ'])
                                }),
                                (0, i.jsx)(a.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: m.intl.string(m.t.NRBYjo)
                                })
                            ]
                        }),
                        (0, i.jsxs)(a.FormSection, {
                            className: C.inputSection,
                            title: m.intl.string(m.t.Fq5lwM),
                            children: [
                                (0, i.jsx)(c.Z, {
                                    innerClassName: C.textArea,
                                    textValue: S,
                                    richValue: z,
                                    placeholder: m.intl.formatToPlainString(m.t.DUXxBg, { channelName: n.name }),
                                    focused: !0,
                                    channel: n,
                                    onChange: (t, n, e) => {
                                        N(n), M(e);
                                    },
                                    onSubmit: P,
                                    type: o.Ie.VOICE_CHANNEL_STATUS,
                                    canMentionRoles: !1,
                                    canMentionChannels: !1,
                                    allowNewLines: !1,
                                    parentModalKey: f,
                                    maxCharacterCount: 500,
                                    showRemainingCharsAfterCount: 250,
                                    emojiPickerCloseOnModalOuterClick: !0
                                }),
                                null != y
                                    ? (0, i.jsx)(a.FormErrorBlock, {
                                          className: C.error,
                                          children: y
                                      })
                                    : null
                            ]
                        })
                    ]
                }),
                (0, i.jsxs)(a.ModalFooter, {
                    justify: E.Z.Justify.BETWEEN,
                    direction: E.Z.Direction.HORIZONTAL,
                    children: [
                        (0, i.jsx)(a.Button, {
                            color: a.Button.Colors.PRIMARY,
                            onClick: L,
                            children: m.intl.string(m.t['ETE/oK'])
                        }),
                        (0, i.jsx)(a.Button, {
                            onClick: v,
                            submitting: G,
                            className: C.button,
                            disabled: h,
                            children: m.intl.string(m.t.XqK2Iy)
                        })
                    ]
                })
            ]
        })
    });
}
