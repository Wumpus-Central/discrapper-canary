l.d(t, { default: () => P }), l(47120);
var i = l(200651),
    n = l(192379),
    a = l(442837),
    s = l(481060),
    o = l(904245),
    r = l(166459),
    d = l(680287),
    c = l(313201),
    u = l(247206),
    h = l(813197),
    m = l(592125),
    _ = l(703558),
    f = l(430824),
    g = l(375954),
    p = l(403182),
    x = l(709054),
    b = l(127654),
    E = l(979956),
    v = l(228392),
    y = l(404616),
    I = l(470623),
    j = l(981631),
    C = l(231338),
    M = l(388032),
    w = l(30125);
function P(e) {
    var t;
    let { threadId: l, attachments: P, sendMessage: z, transitionState: T, onClose: S } = e,
        A = (0, c.Dt)(),
        Z = (0, a.e7)([m.Z], () => m.Z.getChannel(l), [l]),
        L = (0, a.e7)([f.Z], () => f.Z.getGuild(null == Z ? void 0 : Z.getGuildId()), [Z]),
        N = (0, a.e7)([m.Z], () => m.Z.getChannel(null == Z ? void 0 : Z.parent_id), [Z]),
        k = null === (t = P[0]) || void 0 === t ? void 0 : t.item,
        [R, U] = n.useState(null);
    n.useEffect(() => {
        null != k && (0, h.Fq)(k.file, (e, t) => U(e), C.dG);
    }, [k]);
    let D =
            null != k && null != R
                ? {
                      src: R,
                      width: y.TJ,
                      height: y.Lp,
                      spoiler: P[0].spoiler,
                      alt: P[0].description
                  }
                : null,
        [B, O] = n.useState(!1),
        F = n.useCallback(() => {
            (0, v.xI)({ added: !1 }), z(), S();
        }, [z, S]),
        G = n.useCallback(() => {
            null != Z &&
                null != L &&
                ((0, v.xI)({ added: !0 }),
                (function (e) {
                    let { thread: t, attachments: l, setIsUploading: i, guild: n, onClose: a } = e,
                        s = new d.Z(j.ANM.MESSAGE(t.id, x.default.castChannelIdAsMessageId(t.id)), 'PATCH');
                    s.on('start', () => {
                        i(!0);
                    }),
                        s.on('progress', (e) => {
                            let o = (0, p.dg)(n.id);
                            e.currentSize > o && (s.cancel(), i(!1), a(), (0, b.G)(t, (0, E.KZ)(l)));
                        }),
                        s.on('error', (e, l, n) => {
                            i(!1), l === j.evJ.EXPLICIT_CONTENT && (a(), o.Z.sendExplicitMediaClydeError(t.id, null == n ? void 0 : n.attachments, u.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), r.Z.clearAll(t.id, _.d.ChannelMessage));
                        }),
                        s.on('complete', () => {
                            i(!1), a(), r.Z.clearAll(t.id, _.d.ChannelMessage);
                        });
                    let c = g.Z.getMessages(t.id).get(x.default.castChannelIdAsMessageId(t.id)),
                        h = null != c ? c.attachments : [];
                    s.uploadFiles(l, { attachments: [...h] }, { addFilesTo: 'attachments' });
                })({
                    thread: Z,
                    attachments: P,
                    setIsUploading: O,
                    guild: L,
                    onClose: S
                }));
        }, [Z, P, O, L, S]);
    return null == N
        ? null
        : (0, i.jsxs)(s.Y0X, {
              transitionState: T,
              size: s.CgR.SMALL,
              className: w.modalRoot,
              'aria-labelledby': A,
              children: [
                  (0, i.jsxs)(s.hzk, {
                      className: w.modal,
                      children: [
                          (0, i.jsx)(s.X6q, {
                              variant: 'heading-md/semibold',
                              className: w.header,
                              id: A,
                              children: M.intl.string(M.t.hMWWMT)
                          }),
                          (0, i.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              className: w.__invalid_body,
                              children: M.intl.string(M.t.zMsUsr)
                          }),
                          (0, i.jsx)('div', {
                              className: w.forumPost,
                              children: (0, i.jsx)(I.oL, {
                                  channel: N,
                                  children: (0, i.jsx)(y.ZP, {
                                      threadId: l,
                                      goToThread: C.dG,
                                      overrideMedia: D
                                  })
                              })
                          })
                      ]
                  }),
                  (0, i.jsxs)(s.mzw, {
                      className: w.modalFooter,
                      children: [
                          (0, i.jsx)(s.zxk, {
                              look: s.zxk.Looks.BLANK,
                              className: w.cancelButton,
                              disabled: B,
                              onClick: S,
                              children: M.intl.string(M.t['ETE/oK'])
                          }),
                          (0, i.jsx)(s.zxk, {
                              color: s.zxk.Colors.PRIMARY,
                              className: w.dontAddButton,
                              disabled: B,
                              onClick: F,
                              children: M.intl.string(M.t['8rKVHB'])
                          }),
                          (0, i.jsx)(s.zxk, {
                              color: s.zxk.Colors.BRAND,
                              className: w.__invalid_button,
                              submitting: B,
                              onClick: G,
                              autoFocus: !0,
                              children: M.intl.string(M.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
