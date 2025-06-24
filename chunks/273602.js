n.d(t, { default: () => M }), n(388685), n(953529);
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
    f = n(592125),
    _ = n(703558),
    b = n(430824),
    g = n(375954),
    h = n(403182),
    y = n(709054),
    T = n(861990),
    C = n(127654),
    O = n(979956),
    v = n(228392),
    x = n(404616),
    I = n(470623),
    j = n(981631),
    E = n(231338),
    S = n(388032),
    w = n(994436);
async function P(e) {
    var t, n, a;
    let o,
        { thread: i, attachments: c, setIsUploading: d, guild: p, onClose: f } = e,
        b = y.default.castChannelIdAsMessageId(i.id),
        v = new u.Z();
    v.on('progress', (e) => {
        let t = (0, h.dg)(p.id);
        e.currentSize > t && (v.cancel(), d(!1), f(), (0, C.G)(i, (0, O.KZ)(c)));
    });
    let x = g.Z.getMessage(i.id, b),
        I = null != x ? x.attachments : [];
    d(!0);
    try {
        o = await v.uploadFiles(c);
    } catch (e) {
        d(!1);
        return;
    }
    let E = [...I, ...(null != (t = o.map((e, t) => (0, T.B)(e, t))) ? t : [])];
    try {
        await r.tn.patch({
            url: j.ANM.MESSAGE(i.id, b),
            body: { attachments: E },
            rejectWithError: !1
        }),
            f(),
            s.Z.clearAll(i.id, _.d.ChannelMessage);
    } catch (e) {
        d(!1), (null == (n = e.body) ? void 0 : n.code) === j.evJ.EXPLICIT_CONTENT && (f(), l.Z.sendExplicitMediaClydeError(i.id, null == (a = e.body) ? void 0 : a.attachments, m.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), s.Z.clearAll(i.id, _.d.ChannelMessage));
    }
}
function M(e) {
    var t;
    let { threadId: n, attachments: r, sendMessage: l, transitionState: s, onClose: u } = e,
        m = (0, d.Dt)(),
        _ = (0, i.e7)([f.Z], () => f.Z.getChannel(n), [n]),
        g = (0, i.e7)([b.Z], () => b.Z.getGuild(null == _ ? void 0 : _.getGuildId()), [_]),
        h = (0, i.e7)([f.Z], () => f.Z.getChannel(null == _ ? void 0 : _.parent_id), [_]),
        y = null == (t = r[0]) ? void 0 : t.item,
        [T, C] = o.useState(null);
    o.useEffect(() => {
        null != y && (0, p.Fq)(y.file, (e, t) => C(e), E.dG);
    }, [y]);
    let O =
            null != y && null != T
                ? {
                      src: T,
                      width: x.TJ,
                      height: x.Lp,
                      spoiler: r[0].spoiler,
                      alt: r[0].description
                  }
                : null,
        [j, M] = o.useState(!1),
        A = o.useCallback(() => {
            (0, v.xI)({ added: !1 }), l(), u();
        }, [l, u]),
        N = o.useCallback(() => {
            null != _ &&
                null != g &&
                ((0, v.xI)({ added: !0 }),
                P({
                    thread: _,
                    attachments: r,
                    setIsUploading: M,
                    guild: g,
                    onClose: u
                }));
        }, [_, r, M, g, u]);
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
                              children: S.intl.string(S.t.hMWWMT)
                          }),
                          (0, a.jsx)(c.Text, {
                              variant: 'text-md/normal',
                              className: w.__invalid_body,
                              children: S.intl.string(S.t.zMsUsr)
                          }),
                          (0, a.jsx)('div', {
                              className: w.forumPost,
                              children: (0, a.jsx)(I.oL, {
                                  channel: h,
                                  children: (0, a.jsx)(x.ZP, {
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
                              disabled: j,
                              onClick: u,
                              children: S.intl.string(S.t['ETE/oK'])
                          }),
                          (0, a.jsx)(c.zxk, {
                              color: c.zxk.Colors.PRIMARY,
                              className: w.dontAddButton,
                              disabled: j,
                              onClick: A,
                              children: S.intl.string(S.t['8rKVHB'])
                          }),
                          (0, a.jsx)(c.zxk, {
                              color: c.zxk.Colors.BRAND,
                              className: w.__invalid_button,
                              submitting: j,
                              onClick: N,
                              autoFocus: !0,
                              children: S.intl.string(S.t.d611xM)
                          })
                      ]
                  })
              ]
          });
}
