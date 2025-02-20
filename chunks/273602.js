n.d(t, { default: () => I }), n(47120), n(266796);
var a = n(200651),
    i = n(192379),
    r = n(442837),
    l = n(481060),
    o = n(904245),
    s = n(166459),
    c = n(680287),
    d = n(313201),
    u = n(247206),
    p = n(813197),
    m = n(592125),
    g = n(703558),
    f = n(430824),
    h = n(375954),
    _ = n(403182),
    b = n(709054),
    y = n(127654),
    v = n(979956),
    O = n(228392),
    C = n(404616),
    E = n(470623),
    P = n(981631),
    x = n(231338),
    j = n(388032),
    T = n(55587);
function I(e) {
    var t;
    let { threadId: n, attachments: I, sendMessage: S, transitionState: M, onClose: A } = e,
        w = (0, d.Dt)(),
        D = (0, r.e7)([m.Z], () => m.Z.getChannel(n), [n]),
        L = (0, r.e7)([f.Z], () => f.Z.getGuild(null == D ? void 0 : D.getGuildId()), [D]),
        N = (0, r.e7)([m.Z], () => m.Z.getChannel(null == D ? void 0 : D.parent_id), [D]),
        Z = null === (t = I[0]) || void 0 === t ? void 0 : t.item,
        [U, R] = i.useState(null);
    i.useEffect(() => {
        null != Z && (0, p.Fq)(Z.file, (e, t) => R(e), x.dG);
    }, [Z]);
    let k =
            null != Z && null != U
                ? {
                      src: U,
                      width: C.TJ,
                      height: C.Lp,
                      spoiler: I[0].spoiler,
                      alt: I[0].description
                  }
                : null,
        [z, B] = i.useState(!1),
        F = i.useCallback(() => {
            (0, O.xI)({ added: !1 }), S(), A();
        }, [S, A]),
        W = i.useCallback(() => {
            null != D &&
                null != L &&
                ((0, O.xI)({ added: !0 }),
                (function (e) {
                    let { thread: t, attachments: n, setIsUploading: a, guild: i, onClose: r } = e,
                        l = new c.Z(P.ANM.MESSAGE(t.id, b.default.castChannelIdAsMessageId(t.id)), 'PATCH');
                    l.on('start', () => {
                        a(!0);
                    }),
                        l.on('progress', (e) => {
                            let o = (0, _.dg)(i.id);
                            e.currentSize > o && (l.cancel(), a(!1), r(), (0, y.G)(t, (0, v.KZ)(n)));
                        }),
                        l.on('error', (e, n, i) => {
                            a(!1), n === P.evJ.EXPLICIT_CONTENT && (r(), o.Z.sendExplicitMediaClydeError(t.id, null == i ? void 0 : i.attachments, u.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), s.Z.clearAll(t.id, g.d.ChannelMessage));
                        }),
                        l.on('complete', () => {
                            a(!1), r(), s.Z.clearAll(t.id, g.d.ChannelMessage);
                        });
                    let d = h.Z.getMessages(t.id).get(b.default.castChannelIdAsMessageId(t.id)),
                        p = null != d ? d.attachments : [];
                    l.uploadFiles(n, { attachments: [...p] }, { addFilesTo: 'attachments' });
                })({
                    thread: D,
                    attachments: I,
                    setIsUploading: B,
                    guild: L,
                    onClose: A
                }));
        }, [D, I, B, L, A]);
    return null == N
        ? null
        : (0, a.jsxs)(l.Y0X, {
              transitionState: M,
              size: l.CgR.SMALL,
              className: T.modalRoot,
              'aria-labelledby': w,
              children: [
                  (0, a.jsxs)(l.hzk, {
                      className: T.modal,
                      children: [
                          (0, a.jsx)(l.X6q, {
                              variant: 'heading-md/semibold',
                              className: T.header,
                              id: w,
                              children: j.NW.string(j.t.hMWWMT)
                          }),
                          (0, a.jsx)(l.Text, {
                              variant: 'text-md/normal',
                              className: T.__invalid_body,
                              children: j.NW.string(j.t.zMsUsr)
                          }),
                          (0, a.jsx)('div', {
                              className: T.forumPost,
                              children: (0, a.jsx)(E.oL, {
                                  channel: N,
                                  children: (0, a.jsx)(C.ZP, {
                                      threadId: n,
                                      goToThread: x.dG,
                                      overrideMedia: k
                                  })
                              })
                          })
                      ]
                  }),
                  (0, a.jsxs)(l.mzw, {
                      className: T.modalFooter,
                      children: [
                          (0, a.jsx)(l.zxk, {
                              look: l.zxk.Looks.BLANK,
                              className: T.cancelButton,
                              disabled: z,
                              onClick: A,
                              children: j.NW.string(j.t['ETE/oK'])
                          }),
                          (0, a.jsx)(l.zxk, {
                              color: l.zxk.Colors.PRIMARY,
                              className: T.dontAddButton,
                              disabled: z,
                              onClick: F,
                              children: j.NW.string(j.t['8rKVHB'])
                          }),
                          (0, a.jsx)(l.zxk, {
                              color: l.zxk.Colors.BRAND,
                              className: T.__invalid_button,
                              submitting: z,
                              onClick: W,
                              autoFocus: !0,
                              children: j.NW.string(j.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
