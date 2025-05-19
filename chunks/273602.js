n.d(t, { default: () => S }), n(388685), n(953529);
var a = n(255367),
    i = n(73800),
    r = n(442837),
    l = n(481060),
    o = n(904245),
    s = n(166459),
    c = n(680287),
    d = n(313201),
    u = n(247206),
    m = n(813197),
    p = n(592125),
    g = n(703558),
    f = n(430824),
    b = n(375954),
    h = n(403182),
    _ = n(709054),
    y = n(127654),
    O = n(979956),
    x = n(228392),
    j = n(404616),
    v = n(470623),
    C = n(981631),
    T = n(231338),
    P = n(388032),
    I = n(994436);
function S(e) {
    var t;
    let { threadId: n, attachments: S, sendMessage: E, transitionState: M, onClose: w } = e,
        A = (0, d.Dt)(),
        D = (0, r.e7)([p.Z], () => p.Z.getChannel(n), [n]),
        N = (0, r.e7)([f.Z], () => f.Z.getGuild(null == D ? void 0 : D.getGuildId()), [D]),
        L = (0, r.e7)([p.Z], () => p.Z.getChannel(null == D ? void 0 : D.parent_id), [D]),
        k = null == (t = S[0]) ? void 0 : t.item,
        [z, Z] = i.useState(null);
    i.useEffect(() => {
        null != k && (0, m.Fq)(k.file, (e, t) => Z(e), T.dG);
    }, [k]);
    let R =
            null != k && null != z
                ? {
                      src: z,
                      width: j.TJ,
                      height: j.Lp,
                      spoiler: S[0].spoiler,
                      alt: S[0].description
                  }
                : null,
        [U, F] = i.useState(!1),
        B = i.useCallback(() => {
            (0, x.xI)({ added: !1 }), E(), w();
        }, [E, w]),
        G = i.useCallback(() => {
            null != D &&
                null != N &&
                ((0, x.xI)({ added: !0 }),
                (function (e) {
                    let { thread: t, attachments: n, setIsUploading: a, guild: i, onClose: r } = e,
                        l = new c.Z(C.ANM.MESSAGE(t.id, _.default.castChannelIdAsMessageId(t.id)), 'PATCH');
                    l.on('start', () => {
                        a(!0);
                    }),
                        l.on('progress', (e) => {
                            let o = (0, h.dg)(i.id);
                            e.currentSize > o && (l.cancel(), a(!1), r(), (0, y.G)(t, (0, O.KZ)(n)));
                        }),
                        l.on('error', (e, n, i) => {
                            a(!1), n === C.evJ.EXPLICIT_CONTENT && (r(), o.Z.sendExplicitMediaClydeError(t.id, null == i ? void 0 : i.attachments, u.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), s.Z.clearAll(t.id, g.d.ChannelMessage));
                        }),
                        l.on('complete', () => {
                            a(!1), r(), s.Z.clearAll(t.id, g.d.ChannelMessage);
                        });
                    let d = b.Z.getMessages(t.id).get(_.default.castChannelIdAsMessageId(t.id)),
                        m = null != d ? d.attachments : [];
                    l.uploadFiles(n, { attachments: [...m] }, { addFilesTo: 'attachments' });
                })({
                    thread: D,
                    attachments: S,
                    setIsUploading: F,
                    guild: N,
                    onClose: w
                }));
        }, [D, S, F, N, w]);
    return null == L
        ? null
        : (0, a.jsxs)(l.Y0X, {
              transitionState: M,
              size: l.CgR.SMALL,
              className: I.modalRoot,
              'aria-labelledby': A,
              children: [
                  (0, a.jsxs)(l.hzk, {
                      className: I.modal,
                      children: [
                          (0, a.jsx)(l.X6q, {
                              variant: 'heading-md/semibold',
                              className: I.header,
                              id: A,
                              children: P.intl.string(P.t.hMWWMT)
                          }),
                          (0, a.jsx)(l.Text, {
                              variant: 'text-md/normal',
                              className: I.__invalid_body,
                              children: P.intl.string(P.t.zMsUsr)
                          }),
                          (0, a.jsx)('div', {
                              className: I.forumPost,
                              children: (0, a.jsx)(v.oL, {
                                  channel: L,
                                  children: (0, a.jsx)(j.ZP, {
                                      threadId: n,
                                      goToThread: T.dG,
                                      overrideMedia: R
                                  })
                              })
                          })
                      ]
                  }),
                  (0, a.jsxs)(l.mzw, {
                      className: I.modalFooter,
                      children: [
                          (0, a.jsx)(l.zxk, {
                              look: l.zxk.Looks.BLANK,
                              className: I.cancelButton,
                              disabled: U,
                              onClick: w,
                              children: P.intl.string(P.t['ETE/oK'])
                          }),
                          (0, a.jsx)(l.zxk, {
                              color: l.zxk.Colors.PRIMARY,
                              className: I.dontAddButton,
                              disabled: U,
                              onClick: B,
                              children: P.intl.string(P.t['8rKVHB'])
                          }),
                          (0, a.jsx)(l.zxk, {
                              color: l.zxk.Colors.BRAND,
                              className: I.__invalid_button,
                              submitting: U,
                              onClick: G,
                              autoFocus: !0,
                              children: P.intl.string(P.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
