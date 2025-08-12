i.d(e, { default: () => A }), i(388685), i(953529);
var s = i(255367),
    n = i(73800),
    a = i(442837),
    o = i(544891),
    r = i(179538),
    l = i(82659),
    h = i(904245),
    d = i(166459),
    u = i(680287),
    c = i(247206),
    g = i(813197),
    p = i(592125),
    f = i(703558),
    m = i(430824),
    b = i(375954),
    v = i(403182),
    C = i(709054),
    S = i(861990),
    _ = i(127654),
    T = i(979956),
    y = i(228392),
    F = i(404616),
    w = i(470623),
    x = i(981631),
    O = i(231338),
    I = i(388032),
    E = i(245586);
async function Z(t) {
    var e, i, s;
    let n,
        { thread: a, attachments: r, setIsUploading: l, guild: g, onClose: p } = t,
        m = C.default.castChannelIdAsMessageId(a.id),
        y = new u.Z();
    y.on("progress", (t) => {
        let e = (0, v.dg)(g.id);
        t.currentSize > e && (y.cancel(), l(!1), p(), (0, _.G)(a, (0, T.KZ)(r)));
    });
    let F = b.Z.getMessage(a.id, m),
        w = null != F ? F.attachments : [];
    l(!0);
    try {
        n = await y.uploadFiles(r);
    } catch (t) {
        l(!1);
        return;
    }
    let O = [...w, ...(null != (e = n.map((t, e) => (0, S.B)(t, e))) ? e : [])];
    try {
        await o.tn.patch({
            url: x.ANM.MESSAGE(a.id, m),
            body: { attachments: O },
            rejectWithError: !1,
        }),
            p(),
            d.Z.clearAll(a.id, f.d.ChannelMessage);
    } catch (t) {
        l(!1),
            (null == (i = t.body) ? void 0 : i.code) === x.evJ.EXPLICIT_CONTENT &&
                (p(),
                h.Z.sendExplicitMediaClydeError(
                    a.id,
                    null == (s = t.body) ? void 0 : s.attachments,
                    c.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                ),
                d.Z.clearAll(a.id, f.d.ChannelMessage));
    }
}
function A(t) {
    var e;
    let { threadId: i, attachments: o, sendMessage: h, transitionState: d, onClose: u } = t,
        c = (0, a.e7)([p.Z], () => p.Z.getChannel(i), [i]),
        f = (0, a.e7)([m.Z], () => m.Z.getGuild(null == c ? void 0 : c.getGuildId()), [c]),
        b = (0, a.e7)([p.Z], () => p.Z.getChannel(null == c ? void 0 : c.parent_id), [c]),
        v = null == (e = o[0]) ? void 0 : e.item,
        [C, S] = n.useState(null);
    n.useEffect(() => {
        null != v && (0, g.Fq)(v.file, (t, e) => S(t), O.dG);
    }, [v]);
    let _ =
            null != v && null != C
                ? {
                      src: C,
                      width: F.TJ,
                      height: F.Lp,
                      spoiler: o[0].spoiler,
                      alt: o[0].description,
                  }
                : null,
        [T, x] = n.useState(!1),
        A = n.useCallback(() => {
            (0, y.xI)({ added: !1 }), h(), u();
        }, [h, u]),
        M = n.useCallback(() => {
            null != c &&
                null != f &&
                ((0, y.xI)({ added: !0 }),
                Z({
                    thread: c,
                    attachments: o,
                    setIsUploading: x,
                    guild: f,
                    onClose: u,
                }));
        }, [c, o, x, f, u]);
    return null == b
        ? null
        : (0, s.jsx)(l.Modal, {
              title: I.intl.string(I.t["+SZF6e"]),
              subtitle: I.intl.string(I.t["0Ycgw8"]),
              transitionState: d,
              onClose: u,
              actionBarInput: (0, s.jsx)(r.A, {
                  variant: "secondary",
                  disabled: T,
                  onClick: u,
                  text: I.intl.string(I.t["ETE/oK"]),
              }),
              actions: [
                  {
                      variant: "secondary",
                      text: I.intl.string(I.t["8rKVHB"]),
                      disabled: T,
                      onClick: A,
                  },
                  {
                      variant: "primary",
                      text: I.intl.string(I.t.d611xM),
                      loading: T,
                      onClick: M,
                      autoFocus: !0,
                  },
              ],
              children: (0, s.jsx)(w.oL, {
                  channel: b,
                  children: (0, s.jsx)(F.ZP, {
                      threadId: i,
                      goToThread: O.dG,
                      overrideMedia: _,
                      className: E.forumPost,
                  }),
              }),
          });
}
