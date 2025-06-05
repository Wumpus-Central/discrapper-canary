n.d(t, { default: () => M }), n(388685), n(953529);
var a = n(255367),
    i = n(73800),
    r = n(442837),
    l = n(544891),
    o = n(481060),
    c = n(904245),
    s = n(166459),
    u = n(680287),
    d = n(313201),
    m = n(247206),
    p = n(813197),
    g = n(592125),
    f = n(703558),
    b = n(430824),
    _ = n(375954),
    y = n(403182),
    O = n(709054),
    h = n(861990),
    v = n(127654),
    j = n(979956),
    P = n(228392),
    C = n(404616),
    E = n(470623),
    x = n(981631),
    T = n(231338),
    S = n(388032),
    I = n(994436);
async function A(e) {
    var t, n, a;
    let i,
        { thread: r, attachments: o, setIsUploading: d, guild: p, onClose: g } = e,
        b = O.default.castChannelIdAsMessageId(r.id),
        P = new u.Z(x.ANM.MESSAGE(r.id, b), 'PATCH');
    P.on('progress', (e) => {
        let t = (0, y.dg)(p.id);
        e.currentSize > t && (P.cancel(), d(!1), g(), (0, v.G)(r, (0, j.KZ)(o)));
    });
    let C = _.Z.getMessage(r.id, b),
        E = null != C ? C.attachments : [];
    d(!0);
    try {
        i = await P.uploadFilesSimple(o);
    } catch (e) {
        d(!1);
        return;
    }
    let T = [...E, ...(null != (t = i.map((e, t) => (0, h.B)(e, t))) ? t : [])];
    try {
        await l.tn.patch({
            url: x.ANM.MESSAGE(r.id, b),
            body: { attachments: T },
            rejectWithError: !1
        }),
            g(),
            s.Z.clearAll(r.id, f.d.ChannelMessage);
    } catch (e) {
        d(!1), (null == (n = e.body) ? void 0 : n.code) === x.evJ.EXPLICIT_CONTENT && (g(), c.Z.sendExplicitMediaClydeError(r.id, null == (a = e.body) ? void 0 : a.attachments, m.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), s.Z.clearAll(r.id, f.d.ChannelMessage));
    }
}
function M(e) {
    var t;
    let { threadId: n, attachments: l, sendMessage: c, transitionState: s, onClose: u } = e,
        m = (0, d.Dt)(),
        f = (0, r.e7)([g.Z], () => g.Z.getChannel(n), [n]),
        _ = (0, r.e7)([b.Z], () => b.Z.getGuild(null == f ? void 0 : f.getGuildId()), [f]),
        y = (0, r.e7)([g.Z], () => g.Z.getChannel(null == f ? void 0 : f.parent_id), [f]),
        O = null == (t = l[0]) ? void 0 : t.item,
        [h, v] = i.useState(null);
    i.useEffect(() => {
        null != O && (0, p.Fq)(O.file, (e, t) => v(e), T.dG);
    }, [O]);
    let j =
            null != O && null != h
                ? {
                      src: h,
                      width: C.TJ,
                      height: C.Lp,
                      spoiler: l[0].spoiler,
                      alt: l[0].description
                  }
                : null,
        [x, M] = i.useState(!1),
        w = i.useCallback(() => {
            (0, P.xI)({ added: !1 }), c(), u();
        }, [c, u]),
        D = i.useCallback(() => {
            null != f &&
                null != _ &&
                ((0, P.xI)({ added: !0 }),
                A({
                    thread: f,
                    attachments: l,
                    setIsUploading: M,
                    guild: _,
                    onClose: u
                }));
        }, [f, l, M, _, u]);
    return null == y
        ? null
        : (0, a.jsxs)(o.Y0X, {
              transitionState: s,
              size: o.CgR.SMALL,
              className: I.modalRoot,
              'aria-labelledby': m,
              parentComponent: 'AddMediaToOriginalForumPostModal',
              children: [
                  (0, a.jsxs)(o.hzk, {
                      className: I.modal,
                      children: [
                          (0, a.jsx)(o.X6q, {
                              variant: 'heading-md/semibold',
                              className: I.header,
                              id: m,
                              children: S.intl.string(S.t.hMWWMT)
                          }),
                          (0, a.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              className: I.__invalid_body,
                              children: S.intl.string(S.t.zMsUsr)
                          }),
                          (0, a.jsx)('div', {
                              className: I.forumPost,
                              children: (0, a.jsx)(E.oL, {
                                  channel: y,
                                  children: (0, a.jsx)(C.ZP, {
                                      threadId: n,
                                      goToThread: T.dG,
                                      overrideMedia: j
                                  })
                              })
                          })
                      ]
                  }),
                  (0, a.jsxs)(o.mzw, {
                      className: I.modalFooter,
                      children: [
                          (0, a.jsx)(o.zxk, {
                              look: o.zxk.Looks.BLANK,
                              className: I.cancelButton,
                              disabled: x,
                              onClick: u,
                              children: S.intl.string(S.t['ETE/oK'])
                          }),
                          (0, a.jsx)(o.zxk, {
                              color: o.zxk.Colors.PRIMARY,
                              className: I.dontAddButton,
                              disabled: x,
                              onClick: w,
                              children: S.intl.string(S.t['8rKVHB'])
                          }),
                          (0, a.jsx)(o.zxk, {
                              color: o.zxk.Colors.BRAND,
                              className: I.__invalid_button,
                              submitting: x,
                              onClick: D,
                              autoFocus: !0,
                              children: S.intl.string(S.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
