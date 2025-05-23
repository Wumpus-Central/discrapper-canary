n.d(t, { default: () => M }), n(388685), n(953529);
var a = n(255367),
    i = n(73800),
    r = n(442837),
    o = n(544891),
    l = n(481060),
    s = n(904245),
    c = n(166459),
    d = n(680287),
    u = n(313201),
    m = n(247206),
    p = n(813197),
    g = n(592125),
    h = n(703558),
    f = n(430824),
    b = n(375954),
    _ = n(403182),
    y = n(709054),
    O = n(861990),
    j = n(127654),
    x = n(979956),
    v = n(228392),
    C = n(404616),
    T = n(470623),
    P = n(981631),
    S = n(231338),
    w = n(388032),
    E = n(745981);
async function I(e) {
    var t, n, a;
    let i,
        { thread: r, attachments: l, setIsUploading: u, guild: p, onClose: g } = e,
        f = y.default.castChannelIdAsMessageId(r.id),
        v = new d.Z(P.ANM.MESSAGE(r.id, f), 'PATCH');
    v.on('progress', (e) => {
        let t = (0, _.dg)(p.id);
        e.currentSize > t && (v.cancel(), u(!1), g(), (0, j.G)(r, (0, x.KZ)(l)));
    });
    let C = b.Z.getMessage(r.id, f),
        T = null != C ? C.attachments : [];
    u(!0);
    try {
        i = await v.uploadFilesSimple(l);
    } catch (e) {
        u(!1);
        return;
    }
    let S = [...T, ...(null != (t = i.map((e, t) => (0, O.B)(e, t))) ? t : [])];
    try {
        await o.tn.patch({
            url: P.ANM.MESSAGE(r.id, f),
            body: { attachments: S },
            rejectWithError: !1
        }),
            g(),
            c.Z.clearAll(r.id, h.d.ChannelMessage);
    } catch (e) {
        u(!1), (null == (n = e.body) ? void 0 : n.code) === P.evJ.EXPLICIT_CONTENT && (g(), s.Z.sendExplicitMediaClydeError(r.id, null == (a = e.body) ? void 0 : a.attachments, m.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), c.Z.clearAll(r.id, h.d.ChannelMessage));
    }
}
function M(e) {
    var t;
    let { threadId: n, attachments: o, sendMessage: s, transitionState: c, onClose: d } = e,
        m = (0, u.Dt)(),
        h = (0, r.e7)([g.Z], () => g.Z.getChannel(n), [n]),
        b = (0, r.e7)([f.Z], () => f.Z.getGuild(null == h ? void 0 : h.getGuildId()), [h]),
        _ = (0, r.e7)([g.Z], () => g.Z.getChannel(null == h ? void 0 : h.parent_id), [h]),
        y = null == (t = o[0]) ? void 0 : t.item,
        [O, j] = i.useState(null);
    i.useEffect(() => {
        null != y && (0, p.Fq)(y.file, (e, t) => j(e), S.dG);
    }, [y]);
    let x =
            null != y && null != O
                ? {
                      src: O,
                      width: C.TJ,
                      height: C.Lp,
                      spoiler: o[0].spoiler,
                      alt: o[0].description
                  }
                : null,
        [P, M] = i.useState(!1),
        A = i.useCallback(() => {
            (0, v.xI)({ added: !1 }), s(), d();
        }, [s, d]),
        D = i.useCallback(() => {
            null != h &&
                null != b &&
                ((0, v.xI)({ added: !0 }),
                I({
                    thread: h,
                    attachments: o,
                    setIsUploading: M,
                    guild: b,
                    onClose: d
                }));
        }, [h, o, M, b, d]);
    return null == _
        ? null
        : (0, a.jsxs)(l.Y0X, {
              transitionState: c,
              size: l.CgR.SMALL,
              className: E.modalRoot,
              'aria-labelledby': m,
              children: [
                  (0, a.jsxs)(l.hzk, {
                      className: E.modal,
                      children: [
                          (0, a.jsx)(l.X6q, {
                              variant: 'heading-md/semibold',
                              className: E.header,
                              id: m,
                              children: w.intl.string(w.t.hMWWMT)
                          }),
                          (0, a.jsx)(l.Text, {
                              variant: 'text-md/normal',
                              className: E.__invalid_body,
                              children: w.intl.string(w.t.zMsUsr)
                          }),
                          (0, a.jsx)('div', {
                              className: E.forumPost,
                              children: (0, a.jsx)(T.oL, {
                                  channel: _,
                                  children: (0, a.jsx)(C.ZP, {
                                      threadId: n,
                                      goToThread: S.dG,
                                      overrideMedia: x
                                  })
                              })
                          })
                      ]
                  }),
                  (0, a.jsxs)(l.mzw, {
                      className: E.modalFooter,
                      children: [
                          (0, a.jsx)(l.zxk, {
                              look: l.zxk.Looks.BLANK,
                              className: E.cancelButton,
                              disabled: P,
                              onClick: d,
                              children: w.intl.string(w.t['ETE/oK'])
                          }),
                          (0, a.jsx)(l.zxk, {
                              color: l.zxk.Colors.PRIMARY,
                              className: E.dontAddButton,
                              disabled: P,
                              onClick: A,
                              children: w.intl.string(w.t['8rKVHB'])
                          }),
                          (0, a.jsx)(l.zxk, {
                              color: l.zxk.Colors.BRAND,
                              className: E.__invalid_button,
                              submitting: P,
                              onClick: D,
                              autoFocus: !0,
                              children: w.intl.string(w.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
