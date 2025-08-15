n.d(t, { default: () => M }), n(388685), n(953529);
var a = n(951288),
    o = n(647438),
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
    T = n(709054),
    y = n(861990),
    C = n(127654),
    O = n(979956),
    v = n(228392),
    I = n(404616),
    E = n(470623),
    x = n(981631),
    S = n(231338),
    j = n(388032),
    w = n(646632);
async function P(e) {
    var t, n, a;
    let o,
        { thread: i, attachments: c, setIsUploading: l, guild: p, onClose: _ } = e,
        g = T.default.castChannelIdAsMessageId(i.id),
        v = new d.Z();
    v.on("progress", (e) => {
        let t = (0, h.dg)(p.id);
        e.currentSize > t && (v.cancel(), l(!1), _(), (0, C.G)(i, (0, O.KZ)(c)));
    });
    let I = b.Z.getMessage(i.id, g),
        E = null != I ? I.attachments : [];
    l(!0);
    try {
        o = await v.uploadFiles(c);
    } catch (e) {
        l(!1);
        return;
    }
    let S = [...E, ...(null != (t = o.map((e, t) => (0, y.B)(e, t))) ? t : [])];
    try {
        await r.tn.patch({
            url: x.ANM.MESSAGE(i.id, g),
            body: { attachments: S },
            rejectWithError: !1,
        }),
            _(),
            u.Z.clearAll(i.id, f.d.ChannelMessage);
    } catch (e) {
        l(!1),
            (null == (n = e.body) ? void 0 : n.code) === x.evJ.EXPLICIT_CONTENT &&
                (_(),
                s.Z.sendExplicitMediaClydeError(
                    i.id,
                    null == (a = e.body) ? void 0 : a.attachments,
                    m.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                ),
                u.Z.clearAll(i.id, f.d.ChannelMessage));
    }
}
function M(e) {
    var t;
    let { threadId: n, attachments: r, sendMessage: s, transitionState: u, onClose: d } = e,
        m = (0, i.e7)([_.Z], () => _.Z.getChannel(n), [n]),
        f = (0, i.e7)([g.Z], () => g.Z.getGuild(null == m ? void 0 : m.getGuildId()), [m]),
        b = (0, i.e7)([_.Z], () => _.Z.getChannel(null == m ? void 0 : m.parent_id), [m]),
        h = null == (t = r[0]) ? void 0 : t.item,
        [T, y] = o.useState(null);
    o.useEffect(() => {
        null != h && (0, p.Fq)(h.file, (e, t) => y(e), S.dG);
    }, [h]);
    let C =
            null != h && null != T
                ? {
                      src: T,
                      width: I.TJ,
                      height: I.Lp,
                      spoiler: r[0].spoiler,
                      alt: r[0].description,
                  }
                : null,
        [O, x] = o.useState(!1),
        M = o.useCallback(() => {
            (0, v.xI)({ added: !1 }), s(), d();
        }, [s, d]),
        A = o.useCallback(() => {
            null != m &&
                null != f &&
                ((0, v.xI)({ added: !0 }),
                P({
                    thread: m,
                    attachments: r,
                    setIsUploading: x,
                    guild: f,
                    onClose: d,
                }));
        }, [m, r, x, f, d]);
    return null == b
        ? null
        : (0, a.jsx)(l.Modal, {
              title: j.intl.string(j.t["+SZF6e"]),
              subtitle: j.intl.string(j.t["0Ycgw8"]),
              transitionState: u,
              onClose: d,
              actionBarInput: (0, a.jsx)(c.A, {
                  variant: "secondary",
                  disabled: O,
                  onClick: d,
                  text: j.intl.string(j.t["ETE/oK"]),
              }),
              actions: [
                  {
                      variant: "secondary",
                      text: j.intl.string(j.t["8rKVHB"]),
                      disabled: O,
                      onClick: M,
                  },
                  {
                      variant: "primary",
                      text: j.intl.string(j.t.d611xM),
                      loading: O,
                      onClick: A,
                      autoFocus: !0,
                  },
              ],
              children: (0, a.jsx)(E.oL, {
                  channel: b,
                  children: (0, a.jsx)(I.ZP, {
                      threadId: n,
                      goToThread: S.dG,
                      overrideMedia: C,
                      className: w.forumPost,
                  }),
              }),
          });
}
