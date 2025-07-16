(n.d(t, { default: () => P }), n(388685), n(953529));
var a = n(255367),
    o = n(73800),
    i = n(442837),
    c = n(544891),
    r = n(179538),
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
    v = n(979956),
    O = n(228392),
    x = n(404616),
    I = n(470623),
    E = n(981631),
    S = n(231338),
    j = n(388032),
    w = n(994436);
async function M(e) {
    var t, n, a;
    let o,
        { thread: i, attachments: r, setIsUploading: l, guild: p, onClose: _ } = e,
        g = T.default.castChannelIdAsMessageId(i.id),
        O = new d.Z();
    O.on('progress', (e) => {
        let t = (0, h.dg)(p.id);
        e.currentSize > t && (O.cancel(), l(!1), _(), (0, C.G)(i, (0, v.KZ)(r)));
    });
    let x = b.Z.getMessage(i.id, g),
        I = null != x ? x.attachments : [];
    l(!0);
    try {
        o = await O.uploadFiles(r);
    } catch (e) {
        l(!1);
        return;
    }
    let S = [...I, ...(null != (t = o.map((e, t) => (0, y.B)(e, t))) ? t : [])];
    try {
        (await c.tn.patch({
            url: E.ANM.MESSAGE(i.id, g),
            body: { attachments: S },
            rejectWithError: !1
        }),
            _(),
            u.Z.clearAll(i.id, f.d.ChannelMessage));
    } catch (e) {
        (l(!1), (null == (n = e.body) ? void 0 : n.code) === E.evJ.EXPLICIT_CONTENT && (_(), s.Z.sendExplicitMediaClydeError(i.id, null == (a = e.body) ? void 0 : a.attachments, m.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED), u.Z.clearAll(i.id, f.d.ChannelMessage)));
    }
}
function P(e) {
    var t;
    let { threadId: n, attachments: c, sendMessage: s, transitionState: u, onClose: d } = e,
        m = (0, i.e7)([_.Z], () => _.Z.getChannel(n), [n]),
        f = (0, i.e7)([g.Z], () => g.Z.getGuild(null == m ? void 0 : m.getGuildId()), [m]),
        b = (0, i.e7)([_.Z], () => _.Z.getChannel(null == m ? void 0 : m.parent_id), [m]),
        h = null == (t = c[0]) ? void 0 : t.item,
        [T, y] = o.useState(null);
    o.useEffect(() => {
        null != h && (0, p.Fq)(h.file, (e, t) => y(e), S.dG);
    }, [h]);
    let C =
            null != h && null != T
                ? {
                      src: T,
                      width: x.TJ,
                      height: x.Lp,
                      spoiler: c[0].spoiler,
                      alt: c[0].description
                  }
                : null,
        [v, E] = o.useState(!1),
        P = o.useCallback(() => {
            ((0, O.xI)({ added: !1 }), s(), d());
        }, [s, d]),
        A = o.useCallback(() => {
            null != m &&
                null != f &&
                ((0, O.xI)({ added: !0 }),
                M({
                    thread: m,
                    attachments: c,
                    setIsUploading: E,
                    guild: f,
                    onClose: d
                }));
        }, [m, c, E, f, d]);
    return null == b
        ? null
        : (0, a.jsx)(l.u, {
              title: j.intl.string(j.t.hMWWMT),
              subtitle: j.intl.string(j.t.zMsUsr),
              transitionState: u,
              onClose: d,
              actionBarInput: (0, a.jsx)(r.A, {
                  variant: 'secondary',
                  disabled: v,
                  onClick: d,
                  text: j.intl.string(j.t['ETE/oK'])
              }),
              actions: [
                  {
                      variant: 'secondary',
                      text: j.intl.string(j.t['8rKVHB']),
                      disabled: v,
                      onClick: P
                  },
                  {
                      variant: 'primary',
                      text: j.intl.string(j.t.d611xM),
                      loading: v,
                      onClick: A,
                      autoFocus: !0
                  }
              ],
              children: (0, a.jsx)(I.oL, {
                  channel: b,
                  children: (0, a.jsx)(x.ZP, {
                      threadId: n,
                      goToThread: S.dG,
                      overrideMedia: C,
                      className: w.forumPost
                  })
              })
          });
}
