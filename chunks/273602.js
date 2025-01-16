l.r(t),
    l.d(t, {
        default: function () {
            return S;
        }
    }),
    l(47120);
var i = l(200651),
    n = l(192379),
    a = l(442837),
    s = l(481060),
    o = l(904245),
    r = l(166459),
    d = l(680287),
    u = l(313201),
    c = l(247206),
    m = l(813197),
    f = l(592125),
    g = l(703558),
    h = l(430824),
    p = l(375954),
    x = l(403182),
    _ = l(709054),
    b = l(127654),
    v = l(979956),
    E = l(228392),
    I = l(404616),
    j = l(470623),
    M = l(981631),
    C = l(231338),
    P = l(388032),
    A = l(30125);
function S(e) {
    var t;
    let { threadId: l, attachments: S, sendMessage: z, transitionState: T, onClose: y } = e,
        Z = (0, u.Dt)(),
        L = (0, a.e7)([f.Z], () => f.Z.getChannel(l), [l]),
        N = (0, a.e7)([h.Z], () => h.Z.getGuild(null == L ? void 0 : L.getGuildId()), [L]),
        w = (0, a.e7)([f.Z], () => f.Z.getChannel(null == L ? void 0 : L.parent_id), [L]),
        R = null === (t = S[0]) || void 0 === t ? void 0 : t.item,
        [B, U] = n.useState(null);
    n.useEffect(() => {
        null != R && (0, m.Fq)(R.file, (e, t) => U(e), C.dG);
    }, [R]);
    let D =
            null != R && null != B
                ? {
                      src: B,
                      width: I.TJ,
                      height: I.Lp,
                      spoiler: S[0].spoiler,
                      alt: S[0].description
                  }
                : null,
        [k, G] = n.useState(!1),
        O = n.useCallback(() => {
            (0, E.xI)({ added: !1 }), z(), y();
        }, [z, y]),
        $ = n.useCallback(() => {
            null != L &&
                null != N &&
                ((0, E.xI)({ added: !0 }),
                !(function (e) {
                    let { thread: t, attachments: l, setIsUploading: i, guild: n, onClose: a } = e,
                        s = new d.Z(M.ANM.MESSAGE(t.id, _.default.castChannelIdAsMessageId(t.id)), 'PATCH');
                    s.on('start', () => {
                        i(!0);
                    }),
                        s.on('progress', (e) => {
                            let o = (0, x.dg)(n.id);
                            e.currentSize > o && (s.cancel(), i(!1), a(), (0, b.G)(t, (0, v.KZ)(l)));
                        }),
                        s.on('error', (e, l, n) => {
                            i(!1), l === M.evJ.EXPLICIT_CONTENT && (a(), o.Z.sendExplicitMediaClydeError(t.id, null == n ? void 0 : n.attachments, c.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), r.Z.clearAll(t.id, g.d.ChannelMessage));
                        }),
                        s.on('complete', () => {
                            i(!1), a(), r.Z.clearAll(t.id, g.d.ChannelMessage);
                        });
                    let u = p.Z.getMessages(t.id).get(_.default.castChannelIdAsMessageId(t.id)),
                        m = null != u ? u.attachments : [];
                    s.uploadFiles(l, { attachments: [...m] }, { addFilesTo: 'attachments' });
                })({
                    thread: L,
                    attachments: S,
                    setIsUploading: G,
                    guild: N,
                    onClose: y
                }));
        }, [L, S, G, N, y]);
    return null == w
        ? null
        : (0, i.jsxs)(s.ModalRoot, {
              transitionState: T,
              size: s.ModalSize.SMALL,
              className: A.modalRoot,
              'aria-labelledby': Z,
              children: [
                  (0, i.jsxs)(s.ModalContent, {
                      className: A.modal,
                      children: [
                          (0, i.jsx)(s.Heading, {
                              variant: 'heading-md/semibold',
                              className: A.header,
                              id: Z,
                              children: P.intl.string(P.t.hMWWMT)
                          }),
                          (0, i.jsx)(s.Text, {
                              variant: 'text-md/normal',
                              className: A.__invalid_body,
                              children: P.intl.string(P.t.zMsUsr)
                          }),
                          (0, i.jsx)('div', {
                              className: A.forumPost,
                              children: (0, i.jsx)(j.oL, {
                                  channel: w,
                                  children: (0, i.jsx)(I.ZP, {
                                      threadId: l,
                                      goToThread: C.dG,
                                      overrideMedia: D
                                  })
                              })
                          })
                      ]
                  }),
                  (0, i.jsxs)(s.ModalFooter, {
                      className: A.modalFooter,
                      children: [
                          (0, i.jsx)(s.Button, {
                              look: s.Button.Looks.BLANK,
                              className: A.cancelButton,
                              disabled: k,
                              onClick: y,
                              children: P.intl.string(P.t['ETE/oK'])
                          }),
                          (0, i.jsx)(s.Button, {
                              color: s.Button.Colors.PRIMARY,
                              className: A.dontAddButton,
                              disabled: k,
                              onClick: O,
                              children: P.intl.string(P.t['8rKVHB'])
                          }),
                          (0, i.jsx)(s.Button, {
                              color: s.Button.Colors.BRAND,
                              className: A.__invalid_button,
                              submitting: k,
                              onClick: $,
                              autoFocus: !0,
                              children: P.intl.string(P.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
