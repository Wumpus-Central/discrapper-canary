n.d(t, { default: () => w }), n(388685), n(953529);
var a = n(255367),
    i = n(73800),
    r = n(442837),
    l = n(544891),
    o = n(481060),
    c = n(904245),
    s = n(166459),
    d = n(680287),
    u = n(313201),
    m = n(247206),
    p = n(813197),
    g = n(592125),
    f = n(703558),
    b = n(430824),
    h = n(375954),
    _ = n(403182),
    y = n(709054),
    O = n(861990),
    x = n(127654),
    j = n(979956),
    v = n(228392),
    C = n(404616),
    T = n(470623),
    P = n(981631),
    S = n(231338),
    I = n(388032),
    E = n(994436);
async function M(e) {
    var t, n, a;
    let i,
        { thread: r, attachments: o, setIsUploading: u, guild: p, onClose: g } = e,
        b = y.default.castChannelIdAsMessageId(r.id),
        v = new d.Z(P.ANM.MESSAGE(r.id, b), 'PATCH');
    v.on('progress', (e) => {
        let t = (0, _.dg)(p.id);
        e.currentSize > t && (v.cancel(), u(!1), g(), (0, x.G)(r, (0, j.KZ)(o)));
    });
    let C = h.Z.getMessage(r.id, b),
        T = null != C ? C.attachments : [];
    u(!0);
    try {
        i = await v.uploadFilesSimple(o);
    } catch (e) {
        u(!1);
        return;
    }
    let S = [...T, ...(null != (t = i.map((e, t) => (0, O.B)(e, t))) ? t : [])];
    try {
        await l.tn.patch({
            url: P.ANM.MESSAGE(r.id, b),
            body: { attachments: S },
            rejectWithError: !1
        }),
            g(),
            s.Z.clearAll(r.id, f.d.ChannelMessage);
    } catch (e) {
        u(!1), (null == (n = e.body) ? void 0 : n.code) === P.evJ.EXPLICIT_CONTENT && (g(), c.Z.sendExplicitMediaClydeError(r.id, null == (a = e.body) ? void 0 : a.attachments, m.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), s.Z.clearAll(r.id, f.d.ChannelMessage));
    }
}
function w(e) {
    var t;
    let { threadId: n, attachments: l, sendMessage: c, transitionState: s, onClose: d } = e,
        m = (0, u.Dt)(),
        f = (0, r.e7)([g.Z], () => g.Z.getChannel(n), [n]),
        h = (0, r.e7)([b.Z], () => b.Z.getGuild(null == f ? void 0 : f.getGuildId()), [f]),
        _ = (0, r.e7)([g.Z], () => g.Z.getChannel(null == f ? void 0 : f.parent_id), [f]),
        y = null == (t = l[0]) ? void 0 : t.item,
        [O, x] = i.useState(null);
    i.useEffect(() => {
        null != y && (0, p.Fq)(y.file, (e, t) => x(e), S.dG);
    }, [y]);
    let j =
            null != y && null != O
                ? {
                      src: O,
                      width: C.TJ,
                      height: C.Lp,
                      spoiler: l[0].spoiler,
                      alt: l[0].description
                  }
                : null,
        [P, w] = i.useState(!1),
        A = i.useCallback(() => {
            (0, v.xI)({ added: !1 }), c(), d();
        }, [c, d]),
        D = i.useCallback(() => {
            null != f &&
                null != h &&
                ((0, v.xI)({ added: !0 }),
                M({
                    thread: f,
                    attachments: l,
                    setIsUploading: w,
                    guild: h,
                    onClose: d
                }));
        }, [f, l, w, h, d]);
    return null == _
        ? null
        : (0, a.jsxs)(o.Y0X, {
              transitionState: s,
              size: o.CgR.SMALL,
              className: E.modalRoot,
              'aria-labelledby': m,
              children: [
                  (0, a.jsxs)(o.hzk, {
                      className: E.modal,
                      children: [
                          (0, a.jsx)(o.X6q, {
                              variant: 'heading-md/semibold',
                              className: E.header,
                              id: m,
                              children: I.intl.string(I.t.hMWWMT)
                          }),
                          (0, a.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              className: E.__invalid_body,
                              children: I.intl.string(I.t.zMsUsr)
                          }),
                          (0, a.jsx)('div', {
                              className: E.forumPost,
                              children: (0, a.jsx)(T.oL, {
                                  channel: _,
                                  children: (0, a.jsx)(C.ZP, {
                                      threadId: n,
                                      goToThread: S.dG,
                                      overrideMedia: j
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
                              disabled: P,
                              onClick: d,
                              children: I.intl.string(I.t['ETE/oK'])
                          }),
                          (0, a.jsx)(o.zxk, {
                              color: o.zxk.Colors.PRIMARY,
                              className: E.dontAddButton,
                              disabled: P,
                              onClick: A,
                              children: I.intl.string(I.t['8rKVHB'])
                          }),
                          (0, a.jsx)(o.zxk, {
                              color: o.zxk.Colors.BRAND,
                              className: E.__invalid_button,
                              submitting: P,
                              onClick: D,
                              autoFocus: !0,
                              children: I.intl.string(I.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
