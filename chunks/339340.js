(n.d(t, {
    a: () => N,
    default: () => R
}),
    n(388685),
    n(704826),
    n(35282));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(399606),
    l = n(343817),
    c = n(667202),
    u = n(481060),
    d = n(787014),
    f = n(904245),
    _ = n(12498),
    p = n(541716),
    h = n(752305),
    m = n(893718),
    g = n(600164),
    E = n(724723),
    b = n(957730),
    y = n(19780),
    O = n(594174),
    v = n(626135),
    I = n(981631),
    T = n(388032),
    S = n(823150),
    A = n(740353);
let N = 'VoiceChannelStatusModal',
    C = 500;
function R(e) {
    let { channel: t, transitionState: n, sourceAnalyticsLocations: a, onClose: R } = e,
        P = E.Z.getCurrentConfig({ location: 'VoiceChannelStatusModal' }, { autoTrackExposure: !0 }).enabled,
        w = (0, s.e7)([_.Z], () => _.Z.getChannelStatus(t)),
        D = (0, s.e7)([y.Z], () => y.Z.getMediaSessionId()),
        [L, x] = i.useState(null != w ? w : ''),
        [M, k] = i.useState(!1),
        [j, U] = i.useState(null),
        G = (0, s.e7)([O.default], () => O.default.getCurrentUser()),
        B = L.length > C;
    i.useEffect(() => {
        v.default.track(I.rMx.OPEN_MODAL, {
            type: 'Voice Channel Topic Modal',
            guild_id: t.guild_id,
            location_stack: a
        });
    }, [t.guild_id, a]);
    let V = (e) => {
            U(new l.Hx(e, e.status).getAnyErrorMessage());
        },
        F = (e) => {
            let { invalidEmojis: n } = e;
            if (null != n && n.length > 0) {
                let { errorMessage: e } = f.Z.validateMessage(n, G, t.id);
                return (U(e), k(!1), { hasErrors: !0 });
            }
            return { hasErrors: !1 };
        },
        Z = async (e) => {
            (L === w && R(), null == e || e.preventDefault(), U(null), k(!0));
            let n = L.length,
                r = L.replace(/<(a)?:[^:]+:[0-9]+>/g, '--').length,
                i = b.ZP.parse(t, L),
                { hasErrors: o } = F(i);
            if (!o) {
                try {
                    let e = await d.ZP.updateVoiceChannelStatus(t.id, i.content);
                    204 === e.status
                        ? (v.default.track(I.rMx.VOICE_CHANNEL_TOPIC_SET, {
                              guild_id: t.guild_id,
                              channel_id: t.id,
                              media_session_id: D,
                              raw_length: n,
                              text_length: r,
                              location_stack: a
                          }),
                          R())
                        : V(e);
                } catch (e) {
                    V(e);
                }
                k(!1);
            }
        },
        [H, Y] = i.useState((0, h.JM)(L)),
        W = (e, t, n) => {
            (x(t), Y(n));
        },
        K = async () => (
            B || M || (await Z()),
            Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0
            })
        ),
        z = (0, r.jsxs)(u.hjN, {
            className: P ? void 0 : S.inputSection,
            title: T.intl.string(T.t.Fq5lwM),
            children: [
                (0, r.jsx)(m.Z, {
                    innerClassName: S.textArea,
                    textValue: L,
                    richValue: H,
                    placeholder: T.intl.formatToPlainString(T.t.DUXxBg, { channelName: t.name }),
                    focused: !0,
                    channel: t,
                    onChange: W,
                    onSubmit: K,
                    type: p.Ie.VOICE_CHANNEL_STATUS,
                    canMentionRoles: !1,
                    canMentionChannels: !1,
                    allowNewLines: !1,
                    parentModalKey: N,
                    maxCharacterCount: C,
                    showRemainingCharsAfterCount: C / 2,
                    emojiPickerCloseOnModalOuterClick: !0
                }),
                null != j
                    ? (0, r.jsx)(u.kzN, {
                          className: S.error,
                          children: j
                      })
                    : null
            ]
        });
    return P
        ? (0, r.jsx)(c.I, {
              transitionState: n,
              onClose: R,
              graphic: A,
              heading: T.intl.string(T.t['5CyJBQ']),
              headerBody: T.intl.string(T.t.NRBYjo),
              actions: [
                  {
                      variant: 'secondary',
                      text: T.intl.string(T.t['ETE/oK']),
                      onClick: R
                  },
                  {
                      variant: 'primary',
                      loading: M,
                      disabled: B,
                      text: T.intl.string(T.t.XqK2Iy),
                      onClick: Z
                  }
              ],
              children: z
          })
        : (0, r.jsx)('form', {
              onSubmit: Z,
              className: S.form,
              children: (0, r.jsxs)(u.Y0X, {
                  transitionState: n,
                  size: u.CgR.SMALL,
                  className: o()(S.modal, S.gradientBorder),
                  parentComponent: 'VoiceChannelStatusModal',
                  children: [
                      (0, r.jsxs)(u.hzk, {
                          className: S.container,
                          children: [
                              (0, r.jsxs)(u.xBx, {
                                  direction: g.Z.Direction.VERTICAL,
                                  className: S.modalHeader,
                                  separator: !1,
                                  children: [
                                      (0, r.jsx)(u.olH, {
                                          className: S.closeButton,
                                          onClick: R
                                      }),
                                      (0, r.jsx)('div', { className: S.headerImage }),
                                      (0, r.jsx)(u.vwX, {
                                          tag: 'h1',
                                          className: S.title,
                                          children: T.intl.string(T.t['5CyJBQ'])
                                      }),
                                      (0, r.jsx)(u.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: T.intl.string(T.t.NRBYjo)
                                      })
                                  ]
                              }),
                              z
                          ]
                      }),
                      (0, r.jsxs)(u.mzw, {
                          justify: g.Z.Justify.END,
                          direction: g.Z.Direction.HORIZONTAL,
                          className: S.modalFooter,
                          children: [
                              (0, r.jsx)(u.zxk, {
                                  look: u.zxk.Looks.FILLED,
                                  color: u.zxk.Colors.PRIMARY,
                                  className: S.cancelButton,
                                  onClick: R,
                                  children: T.intl.string(T.t['ETE/oK'])
                              }),
                              (0, r.jsx)(u.zxk, {
                                  onClick: Z,
                                  submitting: M,
                                  className: S.button,
                                  disabled: B,
                                  children: T.intl.string(T.t.XqK2Iy)
                              })
                          ]
                      })
                  ]
              })
          });
}
