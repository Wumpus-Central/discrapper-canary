(n.d(t, {
    a: () => C,
    default: () => P
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
    u = n(755721),
    d = n(481060),
    _ = n(787014),
    f = n(904245),
    p = n(12498),
    h = n(541716),
    m = n(752305),
    g = n(893718),
    E = n(600164),
    b = n(724723),
    y = n(957730),
    O = n(19780),
    v = n(594174),
    I = n(626135),
    T = n(981631),
    S = n(388032),
    A = n(823150),
    N = n(740353);
let C = 'VoiceChannelStatusModal',
    R = 500;
function P(e) {
    let { channel: t, transitionState: n, sourceAnalyticsLocations: a, onClose: P } = e,
        w = b.Z.getCurrentConfig({ location: 'VoiceChannelStatusModal' }, { autoTrackExposure: !0 }).enabled,
        D = (0, s.e7)([p.Z], () => p.Z.getChannelStatus(t)),
        L = (0, s.e7)([O.Z], () => O.Z.getMediaSessionId()),
        [x, k] = i.useState(null != D ? D : ''),
        [M, j] = i.useState(!1),
        [U, G] = i.useState(null),
        B = (0, s.e7)([v.default], () => v.default.getCurrentUser()),
        V = x.length > R;
    i.useEffect(() => {
        I.default.track(T.rMx.OPEN_MODAL, {
            type: 'Voice Channel Topic Modal',
            guild_id: t.guild_id,
            location_stack: a
        });
    }, [t.guild_id, a]);
    let F = (e) => {
            G(new l.Hx(e, e.status).getAnyErrorMessage());
        },
        Z = (e) => {
            let { invalidEmojis: n } = e;
            if (null != n && n.length > 0) {
                let { errorMessage: e } = f.Z.validateMessage(n, B, t.id);
                return (G(e), j(!1), { hasErrors: !0 });
            }
            return { hasErrors: !1 };
        },
        H = async (e) => {
            (x === D && P(), null == e || e.preventDefault(), G(null), j(!0));
            let n = x.length,
                r = x.replace(/<(a)?:[^:]+:[0-9]+>/g, '--').length,
                i = y.ZP.parse(t, x),
                { hasErrors: o } = Z(i);
            if (!o) {
                try {
                    let e = await _.ZP.updateVoiceChannelStatus(t.id, i.content);
                    204 === e.status
                        ? (I.default.track(T.rMx.VOICE_CHANNEL_TOPIC_SET, {
                              guild_id: t.guild_id,
                              channel_id: t.id,
                              media_session_id: L,
                              raw_length: n,
                              text_length: r,
                              location_stack: a
                          }),
                          P())
                        : F(e);
                } catch (e) {
                    F(e);
                }
                j(!1);
            }
        },
        [Y, W] = i.useState((0, m.JM)(x)),
        K = (e, t, n) => {
            (k(t), W(n));
        },
        z = async () => (
            V || M || (await H()),
            Promise.resolve({
                shouldClear: !1,
                shouldRefocus: !0
            })
        ),
        q = (0, r.jsxs)(d.hjN, {
            className: w ? void 0 : A.inputSection,
            title: S.intl.string(S.t.Fq5lwM),
            children: [
                (0, r.jsx)(g.Z, {
                    innerClassName: A.textArea,
                    textValue: x,
                    richValue: Y,
                    placeholder: S.intl.formatToPlainString(S.t.DUXxBg, { channelName: t.name }),
                    focused: !0,
                    channel: t,
                    onChange: K,
                    onSubmit: z,
                    type: h.Ie.VOICE_CHANNEL_STATUS,
                    canMentionRoles: !1,
                    canMentionChannels: !1,
                    allowNewLines: !1,
                    parentModalKey: C,
                    maxCharacterCount: R,
                    showRemainingCharsAfterCount: R / 2,
                    emojiPickerCloseOnModalOuterClick: !0
                }),
                null != U
                    ? (0, r.jsx)(d.kzN, {
                          className: A.error,
                          children: U
                      })
                    : null
            ]
        });
    return w
        ? (0, r.jsx)(c.I, {
              transitionState: n,
              onClose: P,
              graphic: { src: N },
              title: S.intl.string(S.t['5CyJBQ']),
              subtitle: S.intl.string(S.t.NRBYjo),
              actions: [
                  {
                      variant: 'secondary',
                      text: S.intl.string(S.t['ETE/oK']),
                      onClick: P
                  },
                  {
                      variant: 'primary',
                      loading: M,
                      disabled: V,
                      text: S.intl.string(S.t.XqK2Iy),
                      onClick: H
                  }
              ],
              children: q
          })
        : (0, r.jsx)('form', {
              onSubmit: H,
              className: A.form,
              children: (0, r.jsxs)(d.Y0X, {
                  transitionState: n,
                  size: d.CgR.SMALL,
                  className: o()(A.modal, A.gradientBorder),
                  parentComponent: 'VoiceChannelStatusModal',
                  children: [
                      (0, r.jsxs)(d.hzk, {
                          className: A.container,
                          children: [
                              (0, r.jsxs)(d.xBx, {
                                  direction: E.Z.Direction.VERTICAL,
                                  className: A.modalHeader,
                                  separator: !1,
                                  children: [
                                      (0, r.jsx)(d.olH, {
                                          className: A.closeButton,
                                          onClick: P
                                      }),
                                      (0, r.jsx)('div', { className: A.headerImage }),
                                      (0, r.jsx)(d.vwX, {
                                          tag: 'h1',
                                          className: A.title,
                                          children: S.intl.string(S.t['5CyJBQ'])
                                      }),
                                      (0, r.jsx)(d.Text, {
                                          color: 'header-secondary',
                                          variant: 'text-sm/normal',
                                          children: S.intl.string(S.t.NRBYjo)
                                      })
                                  ]
                              }),
                              q
                          ]
                      }),
                      (0, r.jsxs)(d.mzw, {
                          justify: E.Z.Justify.END,
                          direction: E.Z.Direction.HORIZONTAL,
                          className: A.modalFooter,
                          children: [
                              (0, r.jsx)('div', {
                                  'data-button-hoisted-classname-wrapper': !0,
                                  className: A.cancelButton,
                                  children: (0, r.jsx)(d.zxk, {
                                      variant: 'secondary',
                                      text: S.intl.string(S.t['ETE/oK']),
                                      onClick: P
                                  })
                              }),
                              (0, r.jsx)(u.zx, {
                                  onClick: H,
                                  submitting: M,
                                  className: A.button,
                                  disabled: V,
                                  children: S.intl.string(S.t.XqK2Iy)
                              })
                          ]
                      })
                  ]
              })
          });
}
