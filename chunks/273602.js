n.d(t, { default: () => S }), n(388685), n(953529);
var a = n(255367),
    i = n(73800),
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
    f = n(430824),
    h = n(375954),
    b = n(403182),
    _ = n(709054),
    y = n(127654),
    O = n(979956),
    j = n(228392),
    x = n(404616),
    v = n(470623),
    C = n(981631),
    T = n(231338),
    P = n(388032),
    w = n(994436);
function S(e) {
    var t;
    let { threadId: n, attachments: S, sendMessage: E, transitionState: I, onClose: M } = e,
        A = (0, d.Dt)(),
        D = (0, r.e7)([p.Z], () => p.Z.getChannel(n), [n]),
        N = (0, r.e7)([f.Z], () => f.Z.getGuild(null == D ? void 0 : D.getGuildId()), [D]),
        L = (0, r.e7)([p.Z], () => p.Z.getChannel(null == D ? void 0 : D.parent_id), [D]),
        k = null == (t = S[0]) ? void 0 : t.item,
        [Z, z] = i.useState(null);
    i.useEffect(() => {
        null != k && (0, m.Fq)(k.file, (e, t) => z(e), T.dG);
    }, [k]);
    let R =
            null != k && null != Z
                ? {
                      src: Z,
                      width: x.TJ,
                      height: x.Lp,
                      spoiler: S[0].spoiler,
                      alt: S[0].description
                  }
                : null,
        [F, U] = i.useState(!1),
        B = i.useCallback(() => {
            (0, j.xI)({ added: !1 }), E(), M();
        }, [E, M]),
        G = i.useCallback(() => {
            null != D &&
                null != N &&
                ((0, j.xI)({ added: !0 }),
                (function (e) {
                    let { thread: t, attachments: n, setIsUploading: a, guild: i, onClose: r } = e,
                        o = new c.Z(C.ANM.MESSAGE(t.id, _.default.castChannelIdAsMessageId(t.id)), 'PATCH');
                    o.on('start', () => {
                        a(!0);
                    }),
                        o.on('progress', (e) => {
                            let l = (0, b.dg)(i.id);
                            e.currentSize > l && (o.cancel(), a(!1), r(), (0, y.G)(t, (0, O.KZ)(n)));
                        }),
                        o.on('error', (e, n, i) => {
                            a(!1), n === C.evJ.EXPLICIT_CONTENT && (r(), l.Z.sendExplicitMediaClydeError(t.id, null == i ? void 0 : i.attachments, u.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), s.Z.clearAll(t.id, g.d.ChannelMessage));
                        }),
                        o.on('complete', () => {
                            a(!1), r(), s.Z.clearAll(t.id, g.d.ChannelMessage);
                        });
                    let d = h.Z.getMessages(t.id).get(_.default.castChannelIdAsMessageId(t.id)),
                        m = null != d ? d.attachments : [];
                    o.uploadFiles(n, { attachments: [...m] }, { addFilesTo: 'attachments' });
                })({
                    thread: D,
                    attachments: S,
                    setIsUploading: U,
                    guild: N,
                    onClose: M
                }));
        }, [D, S, U, N, M]);
    return null == L
        ? null
        : (0, a.jsxs)(o.Y0X, {
              transitionState: I,
              size: o.CgR.SMALL,
              className: w.modalRoot,
              'aria-labelledby': A,
              children: [
                  (0, a.jsxs)(o.hzk, {
                      className: w.modal,
                      children: [
                          (0, a.jsx)(o.X6q, {
                              variant: 'heading-md/semibold',
                              className: w.header,
                              id: A,
                              children: P.intl.string(P.t.hMWWMT)
                          }),
                          (0, a.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              className: w.__invalid_body,
                              children: P.intl.string(P.t.zMsUsr)
                          }),
                          (0, a.jsx)('div', {
                              className: w.forumPost,
                              children: (0, a.jsx)(v.oL, {
                                  channel: L,
                                  children: (0, a.jsx)(x.ZP, {
                                      threadId: n,
                                      goToThread: T.dG,
                                      overrideMedia: R
                                  })
                              })
                          })
                      ]
                  }),
                  (0, a.jsxs)(o.mzw, {
                      className: w.modalFooter,
                      children: [
                          (0, a.jsx)(o.zxk, {
                              look: o.zxk.Looks.BLANK,
                              className: w.cancelButton,
                              disabled: F,
                              onClick: M,
                              children: P.intl.string(P.t['ETE/oK'])
                          }),
                          (0, a.jsx)(o.zxk, {
                              color: o.zxk.Colors.PRIMARY,
                              className: w.dontAddButton,
                              disabled: F,
                              onClick: B,
                              children: P.intl.string(P.t['8rKVHB'])
                          }),
                          (0, a.jsx)(o.zxk, {
                              color: o.zxk.Colors.BRAND,
                              className: w.__invalid_button,
                              submitting: F,
                              onClick: G,
                              autoFocus: !0,
                              children: P.intl.string(P.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
