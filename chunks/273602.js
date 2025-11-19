i.d(t, { default: () => P }), i(388685), i(953529);
var n = i(54381),
    s = i(473749),
    a = i(793030),
    o = i(442837),
    l = i(544891),
    r = i(159691),
    d = i(904245),
    h = i(166459),
    c = i(680287),
    u = i(247206),
    g = i(813197),
    p = i(592125),
    b = i(703558),
    f = i(430824),
    m = i(375954),
    v = i(403182),
    _ = i(709054),
    y = i(861990),
    C = i(127654),
    S = i(979956),
    x = i(228392),
    w = i(404616),
    T = i(470623),
    O = i(981631),
    F = i(231338),
    I = i(388032),
    j = i(646632);
async function E(e) {
    var t, i, n;
    let s,
        { thread: a, attachments: o, setIsUploading: r, guild: g, onClose: p } = e,
        f = _.default.castChannelIdAsMessageId(a.id),
        x = new c.Z();
    x.on("progress", (e) => {
        let t = (0, v.dg)(g.id);
        e.currentSize > t && (x.cancel(), r(!1), p(), (0, C.G)(a, (0, S.KZ)(o)));
    });
    let w = m.Z.getMessage(a.id, f),
        T = null != w ? w.attachments : [];
    r(!0);
    try {
        s = await x.uploadFiles(o);
    } catch (e) {
        r(!1);
        return;
    }
    let F = [...T, ...(null != (t = s.map((e, t) => (0, y.B)(e, t))) ? t : [])];
    try {
        await l.tn.patch({
            url: O.ANM.MESSAGE(a.id, f),
            body: { attachments: F },
            rejectWithError: !1,
        }),
            p(),
            h.Z.clearAll(a.id, b.d.ChannelMessage);
    } catch (e) {
        r(!1),
            (null == (i = e.body) ? void 0 : i.code) === O.evJ.EXPLICIT_CONTENT &&
                (p(),
                d.Z.sendExplicitMediaClydeError(
                    a.id,
                    null == (n = e.body) ? void 0 : n.attachments,
                    u.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                ),
                h.Z.clearAll(a.id, b.d.ChannelMessage));
    }
}
function P(e) {
    var t;
    let { threadId: i, attachments: l, sendMessage: d, transitionState: h, onClose: c } = e,
        u = (0, o.e7)([p.Z], () => p.Z.getChannel(i), [i]),
        b = (0, o.e7)([f.Z], () => f.Z.getGuild(null == u ? void 0 : u.getGuildId()), [u]),
        m = (0, o.e7)([p.Z], () => p.Z.getChannel(null == u ? void 0 : u.parent_id), [u]),
        v = null == (t = l[0]) ? void 0 : t.item,
        [_, y] = s.useState(null);
    s.useEffect(() => {
        null != v && (0, g.Fq)(v.file, (e, t) => y(e), F.dG);
    }, [v]);
    let C =
            null != v && null != _
                ? {
                      src: _,
                      width: w.TJ,
                      height: w.Lp,
                      spoiler: l[0].spoiler,
                      alt: l[0].description,
                  }
                : null,
        [S, O] = s.useState(!1),
        P = s.useCallback(() => {
            (0, x.xI)({ added: !1 }), d(), c();
        }, [d, c]),
        M = s.useCallback(() => {
            null != u &&
                null != b &&
                ((0, x.xI)({ added: !0 }),
                E({
                    thread: u,
                    attachments: l,
                    setIsUploading: O,
                    guild: b,
                    onClose: c,
                }));
        }, [u, l, O, b, c]);
    return null == m
        ? null
        : (0, n.jsx)(a.Modal, {
              title: I.intl.string(I.t["+SZF6S"]),
              subtitle: I.intl.string(I.t["0Ycgw5"]),
              transitionState: h,
              onClose: c,
              actionBarInput: (0, n.jsx)(r.Avr, {
                  variant: "secondary",
                  disabled: S,
                  onClick: c,
                  text: I.intl.string(I.t["ETE/oC"]),
              }),
              actions: [
                  {
                      variant: "secondary",
                      text: I.intl.string(I.t["8rKVHL"]),
                      disabled: S,
                      onClick: P,
                  },
                  {
                      variant: "primary",
                      text: I.intl.string(I.t.d611xH),
                      loading: S,
                      onClick: M,
                      autoFocus: !0,
                  },
              ],
              children: (0, n.jsx)(T.oL, {
                  channel: m,
                  children: (0, n.jsx)(w.ZP, {
                      threadId: i,
                      goToThread: F.dG,
                      overrideMedia: C,
                      className: j.forumPost,
                  }),
              }),
          });
}
