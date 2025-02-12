n.d(t, { default: () => S }), n(47120);
var a = n(200651),
    i = n(192379),
    l = n(442837),
    s = n(481060),
    o = n(904245),
    r = n(166459),
    c = n(680287),
    d = n(313201),
    u = n(247206),
    m = n(813197),
    p = n(592125),
    g = n(703558),
    _ = n(430824),
    h = n(375954),
    f = n(403182),
    C = n(709054),
    E = n(127654),
    v = n(979956),
    y = n(228392),
    x = n(404616),
    T = n(470623),
    I = n(981631),
    b = n(231338),
    M = n(388032),
    A = n(322079);
function S(e) {
    var t;
    let { threadId: n, attachments: S, sendMessage: P, transitionState: D, onClose: L } = e,
        Z = (0, d.Dt)(),
        U = (0, l.e7)([p.Z], () => p.Z.getChannel(n), [n]),
        R = (0, l.e7)([_.Z], () => _.Z.getGuild(null == U ? void 0 : U.getGuildId()), [U]),
        w = (0, l.e7)([p.Z], () => p.Z.getChannel(null == U ? void 0 : U.parent_id), [U]),
        j = null === (t = S[0]) || void 0 === t ? void 0 : t.item,
        [O, N] = i.useState(null);
    i.useEffect(() => {
        null != j && (0, m.Fq)(j.file, (e, t) => N(e), b.dG);
    }, [j]);
    let z =
            null != j && null != O
                ? {
                      src: O,
                      width: x.TJ,
                      height: x.Lp,
                      spoiler: S[0].spoiler,
                      alt: S[0].description
                  }
                : null,
        [k, B] = i.useState(!1),
        F = i.useCallback(() => {
            (0, y.xI)({ added: !1 }), P(), L();
        }, [P, L]),
        G = i.useCallback(() => {
            null != U &&
                null != R &&
                ((0, y.xI)({ added: !0 }),
                (function (e) {
                    let { thread: t, attachments: n, setIsUploading: a, guild: i, onClose: l } = e,
                        s = new c.Z(I.ANM.MESSAGE(t.id, C.default.castChannelIdAsMessageId(t.id)), 'PATCH');
                    s.on('start', () => {
                        a(!0);
                    }),
                        s.on('progress', (e) => {
                            let o = (0, f.dg)(i.id);
                            e.currentSize > o && (s.cancel(), a(!1), l(), (0, E.G)(t, (0, v.KZ)(n)));
                        }),
                        s.on('error', (e, n, i) => {
                            a(!1), n === I.evJ.EXPLICIT_CONTENT && (l(), o.Z.sendExplicitMediaClydeError(t.id, null == i ? void 0 : i.attachments, u.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), r.Z.clearAll(t.id, g.d.ChannelMessage));
                        }),
                        s.on('complete', () => {
                            a(!1), l(), r.Z.clearAll(t.id, g.d.ChannelMessage);
                        });
                    let d = h.Z.getMessages(t.id).get(C.default.castChannelIdAsMessageId(t.id)),
                        m = null != d ? d.attachments : [];
                    s.uploadFiles(n, { attachments: [...m] }, { addFilesTo: 'attachments' });
                })({
                    thread: U,
                    attachments: S,
                    setIsUploading: B,
                    guild: R,
                    onClose: L
                }));
        }, [U, S, B, R, L]);
    return null == w
        ? null
        : (0, a.jsxs)(s.Y0X, {
              transitionState: D,
              size: s.CgR.SMALL,
              className: A.modalRoot,
              'aria-labelledby': Z,
              children: [
                  (0, a.jsxs)(s.hzk, {
                      className: A.modal,
                      children: [
                          (0, a.jsx)(s.X6q, {
                              variant: 'heading-md/semibold',
                              className: A.header,
                              id: Z,
                              children: M.intl.string(M.t.hMWWMT)
                          }),
                          (0, a.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              className: A.__invalid_body,
                              children: M.intl.string(M.t.zMsUsr)
                          }),
                          (0, a.jsx)('div', {
                              className: A.forumPost,
                              children: (0, a.jsx)(T.oL, {
                                  channel: w,
                                  children: (0, a.jsx)(x.ZP, {
                                      threadId: n,
                                      goToThread: b.dG,
                                      overrideMedia: z
                                  })
                              })
                          })
                      ]
                  }),
                  (0, a.jsxs)(s.mzw, {
                      className: A.modalFooter,
                      children: [
                          (0, a.jsx)(s.zxk, {
                              look: s.zxk.Looks.BLANK,
                              className: A.cancelButton,
                              disabled: k,
                              onClick: L,
                              children: M.intl.string(M.t['ETE/oK'])
                          }),
                          (0, a.jsx)(s.zxk, {
                              color: s.zxk.Colors.PRIMARY,
                              className: A.dontAddButton,
                              disabled: k,
                              onClick: F,
                              children: M.intl.string(M.t['8rKVHB'])
                          }),
                          (0, a.jsx)(s.zxk, {
                              color: s.zxk.Colors.BRAND,
                              className: A.__invalid_button,
                              submitting: k,
                              onClick: G,
                              autoFocus: !0,
                              children: M.intl.string(M.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
