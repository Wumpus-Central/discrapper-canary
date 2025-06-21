n.d(t, { default: () => M }), n(388685), n(953529);
var a = n(255367),
    i = n(73800),
    o = n(442837),
    r = n(544891),
    c = n(481060),
    l = n(904245),
    s = n(166459),
    d = n(680287),
    u = n(313201),
    m = n(247206),
    p = n(813197),
    f = n(592125),
    _ = n(703558),
    g = n(430824),
    b = n(375954),
    h = n(403182),
    y = n(709054),
    T = n(861990),
    C = n(127654),
    O = n(979956),
    x = n(228392),
    j = n(404616),
    v = n(470623),
    I = n(981631),
    E = n(231338),
    P = n(388032),
    w = n(994436);
async function S(e) {
    var t, n, a;
    let i,
        { thread: o, attachments: c, setIsUploading: u, guild: p, onClose: f } = e,
        g = y.default.castChannelIdAsMessageId(o.id),
        x = new d.Z();
    x.on('progress', (e) => {
        let t = (0, h.dg)(p.id);
        e.currentSize > t && (x.cancel(), u(!1), f(), (0, C.G)(o, (0, O.KZ)(c)));
    });
    let j = b.Z.getMessage(o.id, g),
        v = null != j ? j.attachments : [];
    u(!0);
    try {
        i = await x.uploadFiles(c);
    } catch (e) {
        u(!1);
        return;
    }
    let E = [...v, ...(null != (t = i.map((e, t) => (0, T.B)(e, t))) ? t : [])];
    try {
        await r.tn.patch({
            url: I.ANM.MESSAGE(o.id, g),
            body: { attachments: E },
            rejectWithError: !1
        }),
            f(),
            s.Z.clearAll(o.id, _.d.ChannelMessage);
    } catch (e) {
        u(!1), (null == (n = e.body) ? void 0 : n.code) === I.evJ.EXPLICIT_CONTENT && (f(), l.Z.sendExplicitMediaClydeError(o.id, null == (a = e.body) ? void 0 : a.attachments, m.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), s.Z.clearAll(o.id, _.d.ChannelMessage));
    }
}
function M(e) {
    var t;
    let { threadId: n, attachments: r, sendMessage: l, transitionState: s, onClose: d } = e,
        m = (0, u.Dt)(),
        _ = (0, o.e7)([f.Z], () => f.Z.getChannel(n), [n]),
        b = (0, o.e7)([g.Z], () => g.Z.getGuild(null == _ ? void 0 : _.getGuildId()), [_]),
        h = (0, o.e7)([f.Z], () => f.Z.getChannel(null == _ ? void 0 : _.parent_id), [_]),
        y = null == (t = r[0]) ? void 0 : t.item,
        [T, C] = i.useState(null);
    i.useEffect(() => {
        null != y && (0, p.Fq)(y.file, (e, t) => C(e), E.dG);
    }, [y]);
    let O =
            null != y && null != T
                ? {
                      src: T,
                      width: j.TJ,
                      height: j.Lp,
                      spoiler: r[0].spoiler,
                      alt: r[0].description
                  }
                : null,
        [I, M] = i.useState(!1),
        A = i.useCallback(() => {
            (0, x.xI)({ added: !1 }), l(), d();
        }, [l, d]),
        N = i.useCallback(() => {
            null != _ &&
                null != b &&
                ((0, x.xI)({ added: !0 }),
                S({
                    thread: _,
                    attachments: r,
                    setIsUploading: M,
                    guild: b,
                    onClose: d
                }));
        }, [_, r, M, b, d]);
    return null == h
        ? null
        : (0, a.jsxs)(c.Y0X, {
              transitionState: s,
              size: c.CgR.SMALL,
              className: w.modalRoot,
              'aria-labelledby': m,
              parentComponent: 'AddMediaToOriginalForumPostModal',
              children: [
                  (0, a.jsxs)(c.hzk, {
                      className: w.modal,
                      children: [
                          (0, a.jsx)(c.X6q, {
                              variant: 'heading-md/semibold',
                              className: w.header,
                              id: m,
                              children: P.intl.string(P.t.hMWWMT)
                          }),
                          (0, a.jsx)(c.Text, {
                              variant: 'text-md/normal',
                              className: w.__invalid_body,
                              children: P.intl.string(P.t.zMsUsr)
                          }),
                          (0, a.jsx)('div', {
                              className: w.forumPost,
                              children: (0, a.jsx)(v.oL, {
                                  channel: h,
                                  children: (0, a.jsx)(j.ZP, {
                                      threadId: n,
                                      goToThread: E.dG,
                                      overrideMedia: O
                                  })
                              })
                          })
                      ]
                  }),
                  (0, a.jsxs)(c.mzw, {
                      className: w.modalFooter,
                      children: [
                          (0, a.jsx)(c.zxk, {
                              look: c.zxk.Looks.BLANK,
                              className: w.cancelButton,
                              disabled: I,
                              onClick: d,
                              children: P.intl.string(P.t['ETE/oK'])
                          }),
                          (0, a.jsx)(c.zxk, {
                              color: c.zxk.Colors.PRIMARY,
                              className: w.dontAddButton,
                              disabled: I,
                              onClick: A,
                              children: P.intl.string(P.t['8rKVHB'])
                          }),
                          (0, a.jsx)(c.zxk, {
                              color: c.zxk.Colors.BRAND,
                              className: w.__invalid_button,
                              submitting: I,
                              onClick: N,
                              autoFocus: !0,
                              children: P.intl.string(P.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
