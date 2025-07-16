(n.d(t, { default: () => A }), n(388685), n(953529));
var a = n(255367),
    o = n(73800),
    i = n(442837),
    c = n(544891),
    r = n(755721),
    l = n(481060),
    s = n(904245),
    u = n(166459),
    d = n(680287),
    m = n(313201),
    p = n(247206),
    _ = n(813197),
    f = n(592125),
    g = n(703558),
    b = n(430824),
    h = n(375954),
    T = n(403182),
    y = n(709054),
    C = n(861990),
    x = n(127654),
    v = n(979956),
    O = n(228392),
    I = n(404616),
    E = n(470623),
    j = n(981631),
    S = n(231338),
    w = n(388032),
    M = n(994436);
async function P(e) {
    var t, n, a;
    let o,
        { thread: i, attachments: r, setIsUploading: l, guild: m, onClose: _ } = e,
        f = y.default.castChannelIdAsMessageId(i.id),
        b = new d.Z();
    b.on('progress', (e) => {
        let t = (0, T.dg)(m.id);
        e.currentSize > t && (b.cancel(), l(!1), _(), (0, x.G)(i, (0, v.KZ)(r)));
    });
    let O = h.Z.getMessage(i.id, f),
        I = null != O ? O.attachments : [];
    l(!0);
    try {
        o = await b.uploadFiles(r);
    } catch (e) {
        l(!1);
        return;
    }
    let E = [...I, ...(null != (t = o.map((e, t) => (0, C.B)(e, t))) ? t : [])];
    try {
        (await c.tn.patch({
            url: j.ANM.MESSAGE(i.id, f),
            body: { attachments: E },
            rejectWithError: !1
        }),
            _(),
            u.Z.clearAll(i.id, g.d.ChannelMessage));
    } catch (e) {
        (l(!1), (null == (n = e.body) ? void 0 : n.code) === j.evJ.EXPLICIT_CONTENT && (_(), s.Z.sendExplicitMediaClydeError(i.id, null == (a = e.body) ? void 0 : a.attachments, p.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), u.Z.clearAll(i.id, g.d.ChannelMessage)));
    }
}
function A(e) {
    var t;
    let { threadId: n, attachments: c, sendMessage: s, transitionState: u, onClose: d } = e,
        p = (0, m.Dt)(),
        g = (0, i.e7)([f.Z], () => f.Z.getChannel(n), [n]),
        h = (0, i.e7)([b.Z], () => b.Z.getGuild(null == g ? void 0 : g.getGuildId()), [g]),
        T = (0, i.e7)([f.Z], () => f.Z.getChannel(null == g ? void 0 : g.parent_id), [g]),
        y = null == (t = c[0]) ? void 0 : t.item,
        [C, x] = o.useState(null);
    o.useEffect(() => {
        null != y && (0, _.Fq)(y.file, (e, t) => x(e), S.dG);
    }, [y]);
    let v =
            null != y && null != C
                ? {
                      src: C,
                      width: I.TJ,
                      height: I.Lp,
                      spoiler: c[0].spoiler,
                      alt: c[0].description
                  }
                : null,
        [j, A] = o.useState(!1),
        N = o.useCallback(() => {
            ((0, O.xI)({ added: !1 }), s(), d());
        }, [s, d]),
        k = o.useCallback(() => {
            null != g &&
                null != h &&
                ((0, O.xI)({ added: !0 }),
                P({
                    thread: g,
                    attachments: c,
                    setIsUploading: A,
                    guild: h,
                    onClose: d
                }));
        }, [g, c, A, h, d]);
    return null == T
        ? null
        : (0, a.jsxs)(l.Y0X, {
              transitionState: u,
              size: l.CgR.SMALL,
              className: M.modalRoot,
              'aria-labelledby': p,
              parentComponent: 'AddMediaToOriginalForumPostModal',
              children: [
                  (0, a.jsxs)(l.hzk, {
                      className: M.modal,
                      children: [
                          (0, a.jsx)(l.X6q, {
                              variant: 'heading-md/semibold',
                              className: M.header,
                              id: p,
                              children: w.intl.string(w.t.hMWWMT)
                          }),
                          (0, a.jsx)(l.Text, {
                              variant: 'text-md/normal',
                              className: M.__invalid_body,
                              children: w.intl.string(w.t.zMsUsr)
                          }),
                          (0, a.jsx)('div', {
                              className: M.forumPost,
                              children: (0, a.jsx)(E.oL, {
                                  channel: T,
                                  children: (0, a.jsx)(I.ZP, {
                                      threadId: n,
                                      goToThread: S.dG,
                                      overrideMedia: v
                                  })
                              })
                          })
                      ]
                  }),
                  (0, a.jsxs)(l.mzw, {
                      className: M.modalFooter,
                      children: [
                          (0, a.jsx)(r.zx, {
                              look: r.zx.Looks.BLANK,
                              className: M.cancelButton,
                              disabled: j,
                              onClick: d,
                              children: w.intl.string(w.t['ETE/oK'])
                          }),
                          (0, a.jsx)('div', {
                              'data-button-hoisted-classname-wrapper': !0,
                              className: M.dontAddButton,
                              children: (0, a.jsx)(l.zxk, {
                                  variant: 'secondary',
                                  text: w.intl.string(w.t['8rKVHB']),
                                  disabled: j,
                                  onClick: N
                              })
                          }),
                          (0, a.jsx)('div', {
                              'data-button-hoisted-classname-wrapper': !0,
                              className: M.__invalid_button,
                              children: (0, a.jsx)(l.zxk, {
                                  variant: 'primary',
                                  text: w.intl.string(w.t.d611xM),
                                  loading: j,
                                  onClick: k,
                                  autoFocus: !0
                              })
                          })
                      ]
                  })
              ]
          });
}
