(n.d(t, { default: () => P }), n(388685), n(953529));
var a = n(255367),
    i = n(73800),
    o = n(442837),
    r = n(544891),
    c = n(179538),
    l = n(82659),
    s = n(904245),
    u = n(166459),
    d = n(680287),
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
    O = n(979956),
    x = n(228392),
    E = n(404616),
    v = n(470623),
    I = n(981631),
    S = n(231338),
    M = n(388032),
    j = n(994436);
async function w(e) {
    var t, n, a;
    let i,
        { thread: o, attachments: c, setIsUploading: l, guild: p, onClose: _ } = e,
        g = T.default.castChannelIdAsMessageId(o.id),
        x = new d.Z();
    x.on('progress', (e) => {
        let t = (0, h.dg)(p.id);
        e.currentSize > t && (x.cancel(), l(!1), _(), (0, C.G)(o, (0, O.KZ)(c)));
    });
    let E = b.Z.getMessage(o.id, g),
        v = null != E ? E.attachments : [];
    l(!0);
    try {
        i = await x.uploadFiles(c);
    } catch (e) {
        l(!1);
        return;
    }
    let S = [...v, ...(null != (t = i.map((e, t) => (0, y.B)(e, t))) ? t : [])];
    try {
        (await r.tn.patch({
            url: I.ANM.MESSAGE(o.id, g),
            body: { attachments: S },
            rejectWithError: !1
        }),
            _(),
            u.Z.clearAll(o.id, f.d.ChannelMessage));
    } catch (e) {
        (l(!1), (null == (n = e.body) ? void 0 : n.code) === I.evJ.EXPLICIT_CONTENT && (_(), s.Z.sendExplicitMediaClydeError(o.id, null == (a = e.body) ? void 0 : a.attachments, m.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), u.Z.clearAll(o.id, f.d.ChannelMessage)));
    }
}
function P(e) {
    var t;
    let { threadId: n, attachments: r, sendMessage: s, transitionState: u, onClose: d } = e,
        m = (0, o.e7)([_.Z], () => _.Z.getChannel(n), [n]),
        f = (0, o.e7)([g.Z], () => g.Z.getGuild(null == m ? void 0 : m.getGuildId()), [m]),
        b = (0, o.e7)([_.Z], () => _.Z.getChannel(null == m ? void 0 : m.parent_id), [m]),
        h = null == (t = r[0]) ? void 0 : t.item,
        [T, y] = i.useState(null);
    i.useEffect(() => {
        null != h && (0, p.Fq)(h.file, (e, t) => y(e), S.dG);
    }, [h]);
    let C =
            null != h && null != T
                ? {
                      src: T,
                      width: E.TJ,
                      height: E.Lp,
                      spoiler: r[0].spoiler,
                      alt: r[0].description
                  }
                : null,
        [O, I] = i.useState(!1),
        P = i.useCallback(() => {
            ((0, x.xI)({ added: !1 }), s(), d());
        }, [s, d]),
        N = i.useCallback(() => {
            null != m &&
                null != f &&
                ((0, x.xI)({ added: !0 }),
                w({
                    thread: m,
                    attachments: r,
                    setIsUploading: I,
                    guild: f,
                    onClose: d
                }));
        }, [m, r, I, f, d]);
    return null == b
        ? null
        : (0, a.jsx)(l.u, {
              title: M.intl.string(M.t.hMWWMT),
              subtitle: M.intl.string(M.t.zMsUsr),
              transitionState: u,
              onClose: d,
              actionBarInput: (0, a.jsx)(c.A, {
                  variant: 'secondary',
                  disabled: O,
                  onClick: d,
                  text: M.intl.string(M.t['ETE/oK'])
              }),
              actions: [
                  {
                      variant: 'secondary',
                      text: M.intl.string(M.t['8rKVHB']),
                      disabled: O,
                      onClick: P
                  },
                  {
                      variant: 'primary',
                      text: M.intl.string(M.t.d611xM),
                      loading: O,
                      onClick: N,
                      autoFocus: !0
                  }
              ],
              children: (0, a.jsx)(v.oL, {
                  channel: b,
                  children: (0, a.jsx)(E.ZP, {
                      threadId: n,
                      goToThread: S.dG,
                      overrideMedia: C,
                      className: j.forumPost
                  })
              })
          });
}
