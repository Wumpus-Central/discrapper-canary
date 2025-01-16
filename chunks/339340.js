e.r(n),
    e.d(n, {
        VOICE_CHANNEL_STATUS_MODAL_KEY: function () {
            return C;
        },
        default: function () {
            return f;
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
    I = e(19780),
    g = e(626135),
    p = e(981631),
    T = e(388032),
    m = e(752670);
let C = 'VoiceChannelStatusModal';
function f(t) {
    let { channel: n, transitionState: e, onClose: f } = t,
        L = (0, r.e7)([s.Z], () => s.Z.getChannelStatus(n)),
        U = (0, r.e7)([I.Z], () => I.Z.getMediaSessionId()),
        [D, S] = l.useState(null != L ? L : ''),
        [N, G] = l.useState(!1),
        [A, y] = l.useState(null),
        Z = D.length > 500;
    l.useEffect(() => {
        g.default.track(p.rMx.OPEN_MODAL, {
            type: 'Voice Channel Topic Modal',
            guild_id: n.guild_id
        });
    }, [n.guild_id]);
    let h = (t) => {
            y(new d.Hx(t, t.status).getAnyErrorMessage());
        },
        O = async (t) => {
            D === L && f(), null == t || t.preventDefault(), y(null), G(!0);
            let e = D.length,
                i = D.replace(/<(a)?:[^:]+:[0-9]+>/g, '--').length;
            try {
                let t = await u.ZP.updateVoiceChannelStatus(n.id, D);
                204 === t.status
                    ? (g.default.track(p.rMx.VOICE_CHANNEL_TOPIC_SET, {
                          guild_id: n.guild_id,
                          channel_id: n.id,
                          media_session_id: U,
                          raw_length: e,
                          text_length: i
                      }),
                      f())
                    : h(t);
            } catch (t) {
                h(t);
            }
            G(!1);
        },
        [v, z] = l.useState((0, _.JM)(D)),
        M = async () => (
            !Z && !N && (await O()),
            Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0
            })
        );
    return (0, i.jsx)('form', {
        onSubmit: O,
        className: m.form,
        children: (0, i.jsxs)(a.ModalRoot, {
            transitionState: e,
            size: a.ModalSize.SMALL,
            children: [
                (0, i.jsxs)(a.ModalContent, {
                    children: [
                        (0, i.jsxs)(a.ModalHeader, {
                            direction: E.Z.Direction.VERTICAL,
                            className: m.modalHeader,
                            separator: !1,
                            children: [
                                (0, i.jsx)(a.ModalCloseButton, {
                                    className: m.closeButton,
                                    onClick: f
                                }),
                                (0, i.jsx)('div', { className: m.headerImage }),
                                (0, i.jsx)(a.FormTitle, {
                                    tag: 'h1',
                                    className: m.title,
                                    children: T.intl.string(T.t['5CyJBQ'])
                                }),
                                (0, i.jsx)(a.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: T.intl.string(T.t.NRBYjo)
                                })
                            ]
                        }),
                        (0, i.jsxs)(a.FormSection, {
                            className: m.inputSection,
                            title: T.intl.string(T.t.Fq5lwM),
                            children: [
                                (0, i.jsx)(c.Z, {
                                    innerClassName: m.textArea,
                                    textValue: D,
                                    richValue: v,
                                    placeholder: T.intl.formatToPlainString(T.t.DUXxBg, { channelName: n.name }),
                                    focused: !0,
                                    channel: n,
                                    onChange: (t, n, e) => {
                                        S(n), z(e);
                                    },
                                    onSubmit: M,
                                    type: o.Ie.VOICE_CHANNEL_STATUS,
                                    canMentionRoles: !1,
                                    canMentionChannels: !1,
                                    allowNewLines: !1,
                                    parentModalKey: C,
                                    maxCharacterCount: 500,
                                    showRemainingCharsAfterCount: 250,
                                    emojiPickerCloseOnModalOuterClick: !0
                                }),
                                null != A
                                    ? (0, i.jsx)(a.FormErrorBlock, {
                                          className: m.error,
                                          children: A
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
                            onClick: f,
                            children: T.intl.string(T.t['ETE/oK'])
                        }),
                        (0, i.jsx)(a.Button, {
                            onClick: O,
                            submitting: N,
                            className: m.button,
                            disabled: Z,
                            children: T.intl.string(T.t.XqK2Iy)
                        })
                    ]
                })
            ]
        })
    });
}
