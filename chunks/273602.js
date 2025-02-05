l.d(t, { default: () => S }), l(47120);
var n = l(200651),
    i = l(192379),
    a = l(442837),
    s = l(481060),
    o = l(904245),
    r = l(166459),
    d = l(680287),
    c = l(313201),
    u = l(247206),
    h = l(813197),
    m = l(592125),
    p = l(703558),
    _ = l(430824),
    f = l(375954),
    g = l(403182),
    E = l(709054),
    x = l(127654),
    v = l(979956),
    I = l(228392),
    y = l(404616),
    C = l(470623),
    A = l(981631),
    M = l(231338),
    b = l(388032),
    P = l(30125);
function S(e) {
    var t;
    let { threadId: l, attachments: S, sendMessage: T, transitionState: Z, onClose: L } = e,
        D = (0, c.Dt)(),
        w = (0, a.e7)([m.Z], () => m.Z.getChannel(l), [l]),
        j = (0, a.e7)([_.Z], () => _.Z.getGuild(null == w ? void 0 : w.getGuildId()), [w]),
        U = (0, a.e7)([m.Z], () => m.Z.getChannel(null == w ? void 0 : w.parent_id), [w]),
        R = null === (t = S[0]) || void 0 === t ? void 0 : t.item,
        [O, z] = i.useState(null);
    i.useEffect(() => {
        null != R && (0, h.Fq)(R.file, (e, t) => z(e), M.dG);
    }, [R]);
    let N =
            null != R && null != O
                ? {
                      src: O,
                      width: y.TJ,
                      height: y.Lp,
                      spoiler: S[0].spoiler,
                      alt: S[0].description
                  }
                : null,
        [k, F] = i.useState(!1),
        B = i.useCallback(() => {
            (0, I.xI)({ added: !1 }), T(), L();
        }, [T, L]),
        G = i.useCallback(() => {
            null != w &&
                null != j &&
                ((0, I.xI)({ added: !0 }),
                (function (e) {
                    let { thread: t, attachments: l, setIsUploading: n, guild: i, onClose: a } = e,
                        s = new d.Z(A.ANM.MESSAGE(t.id, E.default.castChannelIdAsMessageId(t.id)), 'PATCH');
                    s.on('start', () => {
                        n(!0);
                    }),
                        s.on('progress', (e) => {
                            let o = (0, g.dg)(i.id);
                            e.currentSize > o && (s.cancel(), n(!1), a(), (0, x.G)(t, (0, v.KZ)(l)));
                        }),
                        s.on('error', (e, l, i) => {
                            n(!1), l === A.evJ.EXPLICIT_CONTENT && (a(), o.Z.sendExplicitMediaClydeError(t.id, null == i ? void 0 : i.attachments, u.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), r.Z.clearAll(t.id, p.d.ChannelMessage));
                        }),
                        s.on('complete', () => {
                            n(!1), a(), r.Z.clearAll(t.id, p.d.ChannelMessage);
                        });
                    let c = f.Z.getMessages(t.id).get(E.default.castChannelIdAsMessageId(t.id)),
                        h = null != c ? c.attachments : [];
                    s.uploadFiles(l, { attachments: [...h] }, { addFilesTo: 'attachments' });
                })({
                    thread: w,
                    attachments: S,
                    setIsUploading: F,
                    guild: j,
                    onClose: L
                }));
        }, [w, S, F, j, L]);
    return null == U
        ? null
        : (0, n.jsxs)(s.Y0X, {
              transitionState: Z,
              size: s.CgR.SMALL,
              className: P.modalRoot,
              'aria-labelledby': D,
              children: [
                  (0, n.jsxs)(s.hzk, {
                      className: P.modal,
                      children: [
                          (0, n.jsx)(s.X6q, {
                              variant: 'heading-md/semibold',
                              className: P.header,
                              id: D,
                              children: b.intl.string(b.t.hMWWMT)
                          }),
                          (0, n.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              className: P.__invalid_body,
                              children: b.intl.string(b.t.zMsUsr)
                          }),
                          (0, n.jsx)('div', {
                              className: P.forumPost,
                              children: (0, n.jsx)(C.oL, {
                                  channel: U,
                                  children: (0, n.jsx)(y.ZP, {
                                      threadId: l,
                                      goToThread: M.dG,
                                      overrideMedia: N
                                  })
                              })
                          })
                      ]
                  }),
                  (0, n.jsxs)(s.mzw, {
                      className: P.modalFooter,
                      children: [
                          (0, n.jsx)(s.zxk, {
                              look: s.zxk.Looks.BLANK,
                              className: P.cancelButton,
                              disabled: k,
                              onClick: L,
                              children: b.intl.string(b.t['ETE/oK'])
                          }),
                          (0, n.jsx)(s.zxk, {
                              color: s.zxk.Colors.PRIMARY,
                              className: P.dontAddButton,
                              disabled: k,
                              onClick: B,
                              children: b.intl.string(b.t['8rKVHB'])
                          }),
                          (0, n.jsx)(s.zxk, {
                              color: s.zxk.Colors.BRAND,
                              className: P.__invalid_button,
                              submitting: k,
                              onClick: G,
                              autoFocus: !0,
                              children: b.intl.string(b.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
