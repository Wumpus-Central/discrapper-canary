(i.d(e, { default: () => A }), i(388685), i(953529));
var s = i(255367),
    a = i(73800),
    n = i(442837),
    o = i(544891),
    r = i(179538),
    l = i(82659),
    d = i(904245),
    h = i(166459),
    u = i(680287),
    g = i(247206),
    c = i(813197),
    p = i(592125),
    b = i(703558),
    m = i(430824),
    f = i(375954),
    v = i(403182),
    C = i(709054),
    S = i(861990),
    T = i(127654),
    _ = i(979956),
    F = i(228392),
    O = i(404616),
    w = i(470623),
    x = i(981631),
    y = i(231338),
    I = i(388032),
    E = i(994436);
async function Z(t) {
    var e, i, s;
    let a,
        { thread: n, attachments: r, setIsUploading: l, guild: c, onClose: p } = t,
        m = C.default.castChannelIdAsMessageId(n.id),
        F = new u.Z();
    F.on('progress', (t) => {
        let e = (0, v.dg)(c.id);
        t.currentSize > e && (F.cancel(), l(!1), p(), (0, T.G)(n, (0, _.KZ)(r)));
    });
    let O = f.Z.getMessage(n.id, m),
        w = null != O ? O.attachments : [];
    l(!0);
    try {
        a = await F.uploadFiles(r);
    } catch (t) {
        l(!1);
        return;
    }
    let y = [...w, ...(null != (e = a.map((t, e) => (0, S.B)(t, e))) ? e : [])];
    try {
        (await o.tn.patch({
            url: x.ANM.MESSAGE(n.id, m),
            body: { attachments: y },
            rejectWithError: !1
        }),
            p(),
            h.Z.clearAll(n.id, b.d.ChannelMessage));
    } catch (t) {
        (l(!1), (null == (i = t.body) ? void 0 : i.code) === x.evJ.EXPLICIT_CONTENT && (p(), d.Z.sendExplicitMediaClydeError(n.id, null == (s = t.body) ? void 0 : s.attachments, g.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), h.Z.clearAll(n.id, b.d.ChannelMessage)));
    }
}
function A(t) {
    var e;
    let { threadId: i, attachments: o, sendMessage: d, transitionState: h, onClose: u } = t,
        g = (0, n.e7)([p.Z], () => p.Z.getChannel(i), [i]),
        b = (0, n.e7)([m.Z], () => m.Z.getGuild(null == g ? void 0 : g.getGuildId()), [g]),
        f = (0, n.e7)([p.Z], () => p.Z.getChannel(null == g ? void 0 : g.parent_id), [g]),
        v = null == (e = o[0]) ? void 0 : e.item,
        [C, S] = a.useState(null);
    a.useEffect(() => {
        null != v && (0, c.Fq)(v.file, (t, e) => S(t), y.dG);
    }, [v]);
    let T =
            null != v && null != C
                ? {
                      src: C,
                      width: O.TJ,
                      height: O.Lp,
                      spoiler: o[0].spoiler,
                      alt: o[0].description
                  }
                : null,
        [_, x] = a.useState(!1),
        A = a.useCallback(() => {
            ((0, F.xI)({ added: !1 }), d(), u());
        }, [d, u]),
        M = a.useCallback(() => {
            null != g &&
                null != b &&
                ((0, F.xI)({ added: !0 }),
                Z({
                    thread: g,
                    attachments: o,
                    setIsUploading: x,
                    guild: b,
                    onClose: u
                }));
        }, [g, o, x, b, u]);
    return null == f
        ? null
        : (0, s.jsx)(l.Modal, {
              title: I.intl.string(I.t['+SZF6e']),
              subtitle: I.intl.string(I.t['0Ycgw8']),
              transitionState: h,
              onClose: u,
              actionBarInput: (0, s.jsx)(r.A, {
                  variant: 'secondary',
                  disabled: _,
                  onClick: u,
                  text: I.intl.string(I.t['ETE/oK'])
              }),
              actions: [
                  {
                      variant: 'secondary',
                      text: I.intl.string(I.t['8rKVHB']),
                      disabled: _,
                      onClick: A
                  },
                  {
                      variant: 'primary',
                      text: I.intl.string(I.t.d611xM),
                      loading: _,
                      onClick: M,
                      autoFocus: !0
                  }
              ],
              children: (0, s.jsx)(w.oL, {
                  channel: f,
                  children: (0, s.jsx)(O.ZP, {
                      threadId: i,
                      goToThread: y.dG,
                      overrideMedia: T,
                      className: E.forumPost
                  })
              })
          });
}
