n.d(t, { default: () => I }), n(47120), n(266796);
var a = n(200651),
    i = n(192379),
    r = n(442837),
    o = n(481060),
    l = n(904245),
    s = n(166459),
    c = n(680287),
    d = n(313201),
    u = n(247206),
    m = n(813197),
    p = n(592125),
    g = n(703558),
    h = n(430824),
    _ = n(375954),
    f = n(403182),
    b = n(709054),
    y = n(127654),
    x = n(979956),
    C = n(228392),
    v = n(404616),
    O = n(470623),
    j = n(981631),
    T = n(231338),
    P = n(388032),
    E = n(994436);
function I(e) {
    var t;
    let { threadId: n, attachments: I, sendMessage: w, transitionState: S, onClose: M } = e,
        A = (0, d.Dt)(),
        D = (0, r.e7)([p.Z], () => p.Z.getChannel(n), [n]),
        N = (0, r.e7)([h.Z], () => h.Z.getGuild(null == D ? void 0 : D.getGuildId()), [D]),
        k = (0, r.e7)([p.Z], () => p.Z.getChannel(null == D ? void 0 : D.parent_id), [D]),
        z = null == (t = I[0]) ? void 0 : t.item,
        [L, Z] = i.useState(null);
    i.useEffect(() => {
        null != z && (0, m.Fq)(z.file, (e, t) => Z(e), T.dG);
    }, [z]);
    let R =
            null != z && null != L
                ? {
                      src: L,
                      width: v.TJ,
                      height: v.Lp,
                      spoiler: I[0].spoiler,
                      alt: I[0].description
                  }
                : null,
        [U, B] = i.useState(!1),
        W = i.useCallback(() => {
            (0, C.xI)({ added: !1 }), w(), M();
        }, [w, M]),
        G = i.useCallback(() => {
            null != D &&
                null != N &&
                ((0, C.xI)({ added: !0 }),
                (function (e) {
                    let { thread: t, attachments: n, setIsUploading: a, guild: i, onClose: r } = e,
                        o = new c.Z(j.ANM.MESSAGE(t.id, b.default.castChannelIdAsMessageId(t.id)), 'PATCH');
                    o.on('start', () => {
                        a(!0);
                    }),
                        o.on('progress', (e) => {
                            let l = (0, f.dg)(i.id);
                            e.currentSize > l && (o.cancel(), a(!1), r(), (0, y.G)(t, (0, x.KZ)(n)));
                        }),
                        o.on('error', (e, n, i) => {
                            a(!1), n === j.evJ.EXPLICIT_CONTENT && (r(), l.Z.sendExplicitMediaClydeError(t.id, null == i ? void 0 : i.attachments, u.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), s.Z.clearAll(t.id, g.d.ChannelMessage));
                        }),
                        o.on('complete', () => {
                            a(!1), r(), s.Z.clearAll(t.id, g.d.ChannelMessage);
                        });
                    let d = _.Z.getMessages(t.id).get(b.default.castChannelIdAsMessageId(t.id)),
                        m = null != d ? d.attachments : [];
                    o.uploadFiles(n, { attachments: [...m] }, { addFilesTo: 'attachments' });
                })({
                    thread: D,
                    attachments: I,
                    setIsUploading: B,
                    guild: N,
                    onClose: M
                }));
        }, [D, I, B, N, M]);
    return null == k
        ? null
        : (0, a.jsxs)(o.Y0X, {
              transitionState: S,
              size: o.CgR.SMALL,
              className: E.modalRoot,
              'aria-labelledby': A,
              children: [
                  (0, a.jsxs)(o.hzk, {
                      className: E.modal,
                      children: [
                          (0, a.jsx)(o.X6q, {
                              variant: 'heading-md/semibold',
                              className: E.header,
                              id: A,
                              children: P.NW.string(P.t.hMWWMT)
                          }),
                          (0, a.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              className: E.__invalid_body,
                              children: P.NW.string(P.t.zMsUsr)
                          }),
                          (0, a.jsx)('div', {
                              className: E.forumPost,
                              children: (0, a.jsx)(O.oL, {
                                  channel: k,
                                  children: (0, a.jsx)(v.ZP, {
                                      threadId: n,
                                      goToThread: T.dG,
                                      overrideMedia: R
                                  })
                              })
                          })
                      ]
                  }),
                  (0, a.jsxs)(o.mzw, {
                      className: E.modalFooter,
                      children: [
                          (0, a.jsx)(o.zxk, {
                              look: o.zxk.Looks.BLANK,
                              className: E.cancelButton,
                              disabled: U,
                              onClick: M,
                              children: P.NW.string(P.t['ETE/oK'])
                          }),
                          (0, a.jsx)(o.zxk, {
                              color: o.zxk.Colors.PRIMARY,
                              className: E.dontAddButton,
                              disabled: U,
                              onClick: W,
                              children: P.NW.string(P.t['8rKVHB'])
                          }),
                          (0, a.jsx)(o.zxk, {
                              color: o.zxk.Colors.BRAND,
                              className: E.__invalid_button,
                              submitting: U,
                              onClick: G,
                              autoFocus: !0,
                              children: P.NW.string(P.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
