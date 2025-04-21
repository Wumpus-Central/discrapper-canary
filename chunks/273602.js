n.d(t, { default: () => P }), n(388685), n(953529);
var a = n(200651),
    i = n(192379),
    l = n(442837),
    r = n(481060),
    o = n(904245),
    s = n(166459),
    c = n(680287),
    d = n(313201),
    u = n(247206),
    m = n(813197),
    p = n(592125),
    g = n(703558),
    _ = n(430824),
    f = n(375954),
    h = n(403182),
    b = n(709054),
    y = n(127654),
    C = n(979956),
    x = n(228392),
    v = n(404616),
    T = n(470623),
    O = n(981631),
    j = n(231338),
    I = n(388032),
    M = n(994436);
function P(e) {
    var t;
    let { threadId: n, attachments: P, sendMessage: E, transitionState: S, onClose: A } = e,
        w = (0, d.Dt)(),
        D = (0, l.e7)([p.Z], () => p.Z.getChannel(n), [n]),
        k = (0, l.e7)([_.Z], () => _.Z.getGuild(null == D ? void 0 : D.getGuildId()), [D]),
        z = (0, l.e7)([p.Z], () => p.Z.getChannel(null == D ? void 0 : D.parent_id), [D]),
        L = null == (t = P[0]) ? void 0 : t.item,
        [R, N] = i.useState(null);
    i.useEffect(() => {
        null != L && (0, m.Fq)(L.file, (e, t) => N(e), j.dG);
    }, [L]);
    let Z =
            null != L && null != R
                ? {
                      src: R,
                      width: v.TJ,
                      height: v.Lp,
                      spoiler: P[0].spoiler,
                      alt: P[0].description
                  }
                : null,
        [U, B] = i.useState(!1),
        G = i.useCallback(() => {
            (0, x.xI)({ added: !1 }), E(), A();
        }, [E, A]),
        F = i.useCallback(() => {
            null != D &&
                null != k &&
                ((0, x.xI)({ added: !0 }),
                (function (e) {
                    let { thread: t, attachments: n, setIsUploading: a, guild: i, onClose: l } = e,
                        r = new c.Z(O.ANM.MESSAGE(t.id, b.default.castChannelIdAsMessageId(t.id)), 'PATCH');
                    r.on('start', () => {
                        a(!0);
                    }),
                        r.on('progress', (e) => {
                            let o = (0, h.dg)(i.id);
                            e.currentSize > o && (r.cancel(), a(!1), l(), (0, y.G)(t, (0, C.KZ)(n)));
                        }),
                        r.on('error', (e, n, i) => {
                            a(!1), n === O.evJ.EXPLICIT_CONTENT && (l(), o.Z.sendExplicitMediaClydeError(t.id, null == i ? void 0 : i.attachments, u.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), s.Z.clearAll(t.id, g.d.ChannelMessage));
                        }),
                        r.on('complete', () => {
                            a(!1), l(), s.Z.clearAll(t.id, g.d.ChannelMessage);
                        });
                    let d = f.Z.getMessages(t.id).get(b.default.castChannelIdAsMessageId(t.id)),
                        m = null != d ? d.attachments : [];
                    r.uploadFiles(n, { attachments: [...m] }, { addFilesTo: 'attachments' });
                })({
                    thread: D,
                    attachments: P,
                    setIsUploading: B,
                    guild: k,
                    onClose: A
                }));
        }, [D, P, B, k, A]);
    return null == z
        ? null
        : (0, a.jsxs)(r.Y0X, {
              transitionState: S,
              size: r.CgR.SMALL,
              className: M.modalRoot,
              'aria-labelledby': w,
              children: [
                  (0, a.jsxs)(r.hzk, {
                      className: M.modal,
                      children: [
                          (0, a.jsx)(r.X6q, {
                              variant: 'heading-md/semibold',
                              className: M.header,
                              id: w,
                              children: I.intl.string(I.t.hMWWMT)
                          }),
                          (0, a.jsx)(r.Text, {
                              variant: 'text-md/normal',
                              className: M.__invalid_body,
                              children: I.intl.string(I.t.zMsUsr)
                          }),
                          (0, a.jsx)('div', {
                              className: M.forumPost,
                              children: (0, a.jsx)(T.oL, {
                                  channel: z,
                                  children: (0, a.jsx)(v.ZP, {
                                      threadId: n,
                                      goToThread: j.dG,
                                      overrideMedia: Z
                                  })
                              })
                          })
                      ]
                  }),
                  (0, a.jsxs)(r.mzw, {
                      className: M.modalFooter,
                      children: [
                          (0, a.jsx)(r.zxk, {
                              look: r.zxk.Looks.BLANK,
                              className: M.cancelButton,
                              disabled: U,
                              onClick: A,
                              children: I.intl.string(I.t['ETE/oK'])
                          }),
                          (0, a.jsx)(r.zxk, {
                              color: r.zxk.Colors.PRIMARY,
                              className: M.dontAddButton,
                              disabled: U,
                              onClick: G,
                              children: I.intl.string(I.t['8rKVHB'])
                          }),
                          (0, a.jsx)(r.zxk, {
                              color: r.zxk.Colors.BRAND,
                              className: M.__invalid_button,
                              submitting: U,
                              onClick: F,
                              autoFocus: !0,
                              children: I.intl.string(I.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
