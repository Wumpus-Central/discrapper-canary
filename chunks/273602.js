(n.d(t, { default: () => w }), n(388685), n(953529));
var a = n(255367),
    o = n(73800),
    i = n(442837),
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
    y = n(709054),
    T = n(861990),
    C = n(127654),
    O = n(979956),
    E = n(228392),
    x = n(404616),
    v = n(470623),
    I = n(981631),
    M = n(231338),
    S = n(388032),
    j = n(994436);
async function N(e) {
    var t, n, a;
    let o,
        { thread: i, attachments: c, setIsUploading: l, guild: p, onClose: _ } = e,
        g = y.default.castChannelIdAsMessageId(i.id),
        E = new d.Z();
    E.on('progress', (e) => {
        let t = (0, h.dg)(p.id);
        e.currentSize > t && (E.cancel(), l(!1), _(), (0, C.G)(i, (0, O.KZ)(c)));
    });
    let x = b.Z.getMessage(i.id, g),
        v = null != x ? x.attachments : [];
    l(!0);
    try {
        o = await E.uploadFiles(c);
    } catch (e) {
        l(!1);
        return;
    }
    let M = [...v, ...(null != (t = o.map((e, t) => (0, T.B)(e, t))) ? t : [])];
    try {
        (await r.tn.patch({
            url: I.ANM.MESSAGE(i.id, g),
            body: { attachments: M },
            rejectWithError: !1
        }),
            _(),
            u.Z.clearAll(i.id, f.d.ChannelMessage));
    } catch (e) {
        (l(!1), (null == (n = e.body) ? void 0 : n.code) === I.evJ.EXPLICIT_CONTENT && (_(), s.Z.sendExplicitMediaClydeError(i.id, null == (a = e.body) ? void 0 : a.attachments, m.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), u.Z.clearAll(i.id, f.d.ChannelMessage)));
    }
}
function w(e) {
    var t;
    let { threadId: n, attachments: r, sendMessage: s, transitionState: u, onClose: d } = e,
        m = (0, i.e7)([_.Z], () => _.Z.getChannel(n), [n]),
        f = (0, i.e7)([g.Z], () => g.Z.getGuild(null == m ? void 0 : m.getGuildId()), [m]),
        b = (0, i.e7)([_.Z], () => _.Z.getChannel(null == m ? void 0 : m.parent_id), [m]),
        h = null == (t = r[0]) ? void 0 : t.item,
        [y, T] = o.useState(null);
    o.useEffect(() => {
        null != h && (0, p.Fq)(h.file, (e, t) => T(e), M.dG);
    }, [h]);
    let C =
            null != h && null != y
                ? {
                      src: y,
                      width: x.TJ,
                      height: x.Lp,
                      spoiler: r[0].spoiler,
                      alt: r[0].description
                  }
                : null,
        [O, I] = o.useState(!1),
        w = o.useCallback(() => {
            ((0, E.xI)({ added: !1 }), s(), d());
        }, [s, d]),
        P = o.useCallback(() => {
            null != m &&
                null != f &&
                ((0, E.xI)({ added: !0 }),
                N({
                    thread: m,
                    attachments: r,
                    setIsUploading: I,
                    guild: f,
                    onClose: d
                }));
        }, [m, r, I, f, d]);
    return null == b
        ? null
        : (0, a.jsx)(l.Modal, {
              title: S.intl.string(S.t.hMWWMT),
              subtitle: S.intl.string(S.t.zMsUsr),
              transitionState: u,
              onClose: d,
              actionBarInput: (0, a.jsx)(c.A, {
                  variant: 'secondary',
                  disabled: O,
                  onClick: d,
                  text: S.intl.string(S.t['ETE/oK'])
              }),
              actions: [
                  {
                      variant: 'secondary',
                      text: S.intl.string(S.t['8rKVHB']),
                      disabled: O,
                      onClick: w
                  },
                  {
                      variant: 'primary',
                      text: S.intl.string(S.t.d611xM),
                      loading: O,
                      onClick: P,
                      autoFocus: !0
                  }
              ],
              children: (0, a.jsx)(v.oL, {
                  channel: b,
                  children: (0, a.jsx)(x.ZP, {
                      threadId: n,
                      goToThread: M.dG,
                      overrideMedia: C,
                      className: j.forumPost
                  })
              })
          });
}
