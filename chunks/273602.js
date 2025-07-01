(n.d(t, { default: () => P }), n(388685), n(953529));
var a = n(255367),
    o = n(73800),
    i = n(442837),
    r = n(544891),
    c = n(481060),
    l = n(904245),
    s = n(166459),
    u = n(680287),
    d = n(313201),
    m = n(247206),
    p = n(813197),
    _ = n(592125),
    f = n(703558),
    g = n(430824),
    b = n(375954),
    h = n(403182),
    T = n(709054),
    y = n(861990),
    C = n(127654),
    v = n(979956),
    x = n(228392),
    O = n(404616),
    I = n(470623),
    E = n(981631),
    S = n(231338),
    j = n(388032),
    w = n(994436);
async function M(e) {
    var t, n, a;
    let o,
        { thread: i, attachments: c, setIsUploading: d, guild: p, onClose: _ } = e,
        g = T.default.castChannelIdAsMessageId(i.id),
        x = new u.Z();
    x.on('progress', (e) => {
        let t = (0, h.dg)(p.id);
        e.currentSize > t && (x.cancel(), d(!1), _(), (0, C.G)(i, (0, v.KZ)(c)));
    });
    let O = b.Z.getMessage(i.id, g),
        I = null != O ? O.attachments : [];
    d(!0);
    try {
        o = await x.uploadFiles(c);
    } catch (e) {
        d(!1);
        return;
    }
    let S = [...I, ...(null != (t = o.map((e, t) => (0, y.B)(e, t))) ? t : [])];
    try {
        (await r.tn.patch({
            url: E.ANM.MESSAGE(i.id, g),
            body: { attachments: S },
            rejectWithError: !1
        }),
            _(),
            s.Z.clearAll(i.id, f.d.ChannelMessage));
    } catch (e) {
        (d(!1), (null == (n = e.body) ? void 0 : n.code) === E.evJ.EXPLICIT_CONTENT && (_(), l.Z.sendExplicitMediaClydeError(i.id, null == (a = e.body) ? void 0 : a.attachments, m.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), s.Z.clearAll(i.id, f.d.ChannelMessage)));
    }
}
function P(e) {
    var t;
    let { threadId: n, attachments: r, sendMessage: l, transitionState: s, onClose: u } = e,
        m = (0, d.Dt)(),
        f = (0, i.e7)([_.Z], () => _.Z.getChannel(n), [n]),
        b = (0, i.e7)([g.Z], () => g.Z.getGuild(null == f ? void 0 : f.getGuildId()), [f]),
        h = (0, i.e7)([_.Z], () => _.Z.getChannel(null == f ? void 0 : f.parent_id), [f]),
        T = null == (t = r[0]) ? void 0 : t.item,
        [y, C] = o.useState(null);
    o.useEffect(() => {
        null != T && (0, p.Fq)(T.file, (e, t) => C(e), S.dG);
    }, [T]);
    let v =
            null != T && null != y
                ? {
                      src: y,
                      width: O.TJ,
                      height: O.Lp,
                      spoiler: r[0].spoiler,
                      alt: r[0].description
                  }
                : null,
        [E, P] = o.useState(!1),
        N = o.useCallback(() => {
            ((0, x.xI)({ added: !1 }), l(), u());
        }, [l, u]),
        A = o.useCallback(() => {
            null != f &&
                null != b &&
                ((0, x.xI)({ added: !0 }),
                M({
                    thread: f,
                    attachments: r,
                    setIsUploading: P,
                    guild: b,
                    onClose: u
                }));
        }, [f, r, P, b, u]);
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
                              children: j.intl.string(j.t.hMWWMT)
                          }),
                          (0, a.jsx)(c.Text, {
                              variant: 'text-md/normal',
                              className: w.__invalid_body,
                              children: j.intl.string(j.t.zMsUsr)
                          }),
                          (0, a.jsx)('div', {
                              className: w.forumPost,
                              children: (0, a.jsx)(I.oL, {
                                  channel: h,
                                  children: (0, a.jsx)(O.ZP, {
                                      threadId: n,
                                      goToThread: S.dG,
                                      overrideMedia: v
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
                              disabled: E,
                              onClick: u,
                              children: j.intl.string(j.t['ETE/oK'])
                          }),
                          (0, a.jsx)(c.zxk, {
                              color: c.zxk.Colors.PRIMARY,
                              className: w.dontAddButton,
                              disabled: E,
                              onClick: N,
                              children: j.intl.string(j.t['8rKVHB'])
                          }),
                          (0, a.jsx)(c.zxk, {
                              color: c.zxk.Colors.BRAND,
                              className: w.__invalid_button,
                              submitting: E,
                              onClick: A,
                              autoFocus: !0,
                              children: j.intl.string(j.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
