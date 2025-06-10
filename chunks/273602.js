n.d(t, { default: () => M }), n(388685), n(953529);
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
    h = n(430824),
    _ = n(375954),
    b = n(403182),
    y = n(709054),
    O = n(861990),
    T = n(127654),
    C = n(979956),
    v = n(228392),
    x = n(404616),
    E = n(470623),
    j = n(981631),
    I = n(231338),
    P = n(388032),
    S = n(994436);
async function A(e) {
    var t, n, a;
    let i,
        { thread: r, attachments: o, setIsUploading: u, guild: p, onClose: g } = e,
        h = y.default.castChannelIdAsMessageId(r.id),
        v = new d.Z(j.ANM.MESSAGE(r.id, h), 'PATCH');
    v.on('progress', (e) => {
        let t = (0, b.dg)(p.id);
        e.currentSize > t && (v.cancel(), u(!1), g(), (0, T.G)(r, (0, C.KZ)(o)));
    });
    let x = _.Z.getMessage(r.id, h),
        E = null != x ? x.attachments : [];
    u(!0);
    try {
        i = await v.uploadFilesSimple(o);
    } catch (e) {
        u(!1);
        return;
    }
    let I = [...E, ...(null != (t = i.map((e, t) => (0, O.B)(e, t))) ? t : [])];
    try {
        await l.tn.patch({
            url: j.ANM.MESSAGE(r.id, h),
            body: { attachments: I },
            rejectWithError: !1
        }),
            g(),
            s.Z.clearAll(r.id, f.d.ChannelMessage);
    } catch (e) {
        u(!1), (null == (n = e.body) ? void 0 : n.code) === j.evJ.EXPLICIT_CONTENT && (g(), c.Z.sendExplicitMediaClydeError(r.id, null == (a = e.body) ? void 0 : a.attachments, m.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), s.Z.clearAll(r.id, f.d.ChannelMessage));
    }
}
function M(e) {
    var t;
    let { threadId: n, attachments: l, sendMessage: c, transitionState: s, onClose: d } = e,
        m = (0, u.Dt)(),
        f = (0, r.e7)([g.Z], () => g.Z.getChannel(n), [n]),
        _ = (0, r.e7)([h.Z], () => h.Z.getGuild(null == f ? void 0 : f.getGuildId()), [f]),
        b = (0, r.e7)([g.Z], () => g.Z.getChannel(null == f ? void 0 : f.parent_id), [f]),
        y = null == (t = l[0]) ? void 0 : t.item,
        [O, T] = i.useState(null);
    i.useEffect(() => {
        null != y && (0, p.Fq)(y.file, (e, t) => T(e), I.dG);
    }, [y]);
    let C =
            null != y && null != O
                ? {
                      src: O,
                      width: x.TJ,
                      height: x.Lp,
                      spoiler: l[0].spoiler,
                      alt: l[0].description
                  }
                : null,
        [j, M] = i.useState(!1),
        w = i.useCallback(() => {
            (0, v.xI)({ added: !1 }), c(), d();
        }, [c, d]),
        N = i.useCallback(() => {
            null != f &&
                null != _ &&
                ((0, v.xI)({ added: !0 }),
                A({
                    thread: f,
                    attachments: l,
                    setIsUploading: M,
                    guild: _,
                    onClose: d
                }));
        }, [f, l, M, _, d]);
    return null == b
        ? null
        : (0, a.jsxs)(o.Y0X, {
              transitionState: s,
              size: o.CgR.SMALL,
              className: S.modalRoot,
              'aria-labelledby': m,
              parentComponent: 'AddMediaToOriginalForumPostModal',
              children: [
                  (0, a.jsxs)(o.hzk, {
                      className: S.modal,
                      children: [
                          (0, a.jsx)(o.X6q, {
                              variant: 'heading-md/semibold',
                              className: S.header,
                              id: m,
                              children: P.intl.string(P.t.hMWWMT)
                          }),
                          (0, a.jsx)(o.Text, {
                              variant: 'text-md/normal',
                              className: S.__invalid_body,
                              children: P.intl.string(P.t.zMsUsr)
                          }),
                          (0, a.jsx)('div', {
                              className: S.forumPost,
                              children: (0, a.jsx)(E.oL, {
                                  channel: b,
                                  children: (0, a.jsx)(x.ZP, {
                                      threadId: n,
                                      goToThread: I.dG,
                                      overrideMedia: C
                                  })
                              })
                          })
                      ]
                  }),
                  (0, a.jsxs)(o.mzw, {
                      className: S.modalFooter,
                      children: [
                          (0, a.jsx)(o.zxk, {
                              look: o.zxk.Looks.BLANK,
                              className: S.cancelButton,
                              disabled: j,
                              onClick: d,
                              children: P.intl.string(P.t['ETE/oK'])
                          }),
                          (0, a.jsx)(o.zxk, {
                              color: o.zxk.Colors.PRIMARY,
                              className: S.dontAddButton,
                              disabled: j,
                              onClick: w,
                              children: P.intl.string(P.t['8rKVHB'])
                          }),
                          (0, a.jsx)(o.zxk, {
                              color: o.zxk.Colors.BRAND,
                              className: S.__invalid_button,
                              submitting: j,
                              onClick: N,
                              autoFocus: !0,
                              children: P.intl.string(P.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
