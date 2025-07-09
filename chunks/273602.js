(n.d(t, { default: () => N }), n(388685), n(953529));
var a = n(255367),
    o = n(73800),
    i = n(442837),
    r = n(544891),
    c = n(755721),
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
    v = n(127654),
    x = n(979956),
    O = n(228392),
    I = n(404616),
    E = n(470623),
    S = n(981631),
    j = n(231338),
    w = n(388032),
    M = n(994436);
async function P(e) {
    var t, n, a;
    let o,
        { thread: i, attachments: c, setIsUploading: l, guild: m, onClose: _ } = e,
        f = y.default.castChannelIdAsMessageId(i.id),
        b = new d.Z();
    b.on('progress', (e) => {
        let t = (0, T.dg)(m.id);
        e.currentSize > t && (b.cancel(), l(!1), _(), (0, v.G)(i, (0, x.KZ)(c)));
    });
    let O = h.Z.getMessage(i.id, f),
        I = null != O ? O.attachments : [];
    l(!0);
    try {
        o = await b.uploadFiles(c);
    } catch (e) {
        l(!1);
        return;
    }
    let E = [...I, ...(null != (t = o.map((e, t) => (0, C.B)(e, t))) ? t : [])];
    try {
        (await r.tn.patch({
            url: S.ANM.MESSAGE(i.id, f),
            body: { attachments: E },
            rejectWithError: !1
        }),
            _(),
            u.Z.clearAll(i.id, g.d.ChannelMessage));
    } catch (e) {
        (l(!1), (null == (n = e.body) ? void 0 : n.code) === S.evJ.EXPLICIT_CONTENT && (_(), s.Z.sendExplicitMediaClydeError(i.id, null == (a = e.body) ? void 0 : a.attachments, p.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), u.Z.clearAll(i.id, g.d.ChannelMessage)));
    }
}
function N(e) {
    var t;
    let { threadId: n, attachments: r, sendMessage: s, transitionState: u, onClose: d } = e,
        p = (0, m.Dt)(),
        g = (0, i.e7)([f.Z], () => f.Z.getChannel(n), [n]),
        h = (0, i.e7)([b.Z], () => b.Z.getGuild(null == g ? void 0 : g.getGuildId()), [g]),
        T = (0, i.e7)([f.Z], () => f.Z.getChannel(null == g ? void 0 : g.parent_id), [g]),
        y = null == (t = r[0]) ? void 0 : t.item,
        [C, v] = o.useState(null);
    o.useEffect(() => {
        null != y && (0, _.Fq)(y.file, (e, t) => v(e), j.dG);
    }, [y]);
    let x =
            null != y && null != C
                ? {
                      src: C,
                      width: I.TJ,
                      height: I.Lp,
                      spoiler: r[0].spoiler,
                      alt: r[0].description
                  }
                : null,
        [S, N] = o.useState(!1),
        A = o.useCallback(() => {
            ((0, O.xI)({ added: !1 }), s(), d());
        }, [s, d]),
        k = o.useCallback(() => {
            null != g &&
                null != h &&
                ((0, O.xI)({ added: !0 }),
                P({
                    thread: g,
                    attachments: r,
                    setIsUploading: N,
                    guild: h,
                    onClose: d
                }));
        }, [g, r, N, h, d]);
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
                                      goToThread: j.dG,
                                      overrideMedia: x
                                  })
                              })
                          })
                      ]
                  }),
                  (0, a.jsxs)(l.mzw, {
                      className: M.modalFooter,
                      children: [
                          (0, a.jsx)(c.zx, {
                              look: c.zx.Looks.BLANK,
                              className: M.cancelButton,
                              disabled: S,
                              onClick: d,
                              children: w.intl.string(w.t['ETE/oK'])
                          }),
                          (0, a.jsx)('div', {
                              'data-button-hoisted-classname-wrapper': !0,
                              className: M.dontAddButton,
                              children: (0, a.jsx)(l.zxk, {
                                  variant: 'secondary',
                                  text: w.intl.string(w.t['8rKVHB']),
                                  disabled: S,
                                  onClick: A
                              })
                          }),
                          (0, a.jsx)('div', {
                              'data-button-hoisted-classname-wrapper': !0,
                              className: M.__invalid_button,
                              children: (0, a.jsx)(l.zxk, {
                                  variant: 'primary',
                                  text: w.intl.string(w.t.d611xM),
                                  loading: S,
                                  onClick: k,
                                  autoFocus: !0
                              })
                          })
                      ]
                  })
              ]
          });
}
