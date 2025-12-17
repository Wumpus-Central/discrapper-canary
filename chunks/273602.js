i.d(t, { default: () => M }), i(388685), i(953529);
var n = i(54381),
    s = i(473749),
    a = i(793030),
    o = i(442837),
    l = i(544891),
    r = i(159691),
    c = i(904245),
    d = i(166459),
    h = i(680287),
    u = i(247206),
    g = i(813197),
    f = i(592125),
    b = i(703558),
    p = i(430824),
    m = i(375954),
    v = i(403182),
    y = i(709054),
    C = i(861990),
    S = i(127654),
    x = i(979956),
    w = i(228392),
    T = i(404616),
    O = i(470623),
    F = i(981631),
    I = i(231338),
    j = i(388032),
    E = i(407157);
async function P(e) {
    var t, i, n;
    let s,
        { thread: a, attachments: o, setIsUploading: r, guild: g, onClose: f } = e,
        p = y.default.castChannelIdAsMessageId(a.id),
        w = new h.Z();
    w.on("progress", (e) => {
        let t = (0, v.dg)(g.id);
        e.currentSize > t && (w.cancel(), r(!1), f(), (0, S.G)(a, (0, x.KZ)(o)));
    });
    let T = m.Z.getMessage(a.id, p),
        O = null != T ? T.attachments : [];
    r(!0);
    try {
        s = await w.uploadFiles(o);
    } catch (e) {
        r(!1);
        return;
    }
    let I = [...O, ...(null != (t = s.map((e, t) => (0, C.B)(e, t))) ? t : [])];
    try {
        await l.tn.patch({
            url: F.ANM.MESSAGE(a.id, p),
            body: { attachments: I },
            rejectWithError: !1,
        }),
            f(),
            d.Z.clearAll(a.id, b.d.ChannelMessage);
    } catch (e) {
        r(!1),
            (null == (i = e.body) ? void 0 : i.code) === F.evJ.EXPLICIT_CONTENT &&
                (f(),
                c.Z.sendExplicitMediaClydeError(
                    a.id,
                    null == (n = e.body) ? void 0 : n.attachments,
                    u.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                ),
                d.Z.clearAll(a.id, b.d.ChannelMessage));
    }
}
function M(e) {
    var t;
    let { threadId: i, attachments: l, sendMessage: c, transitionState: d, onClose: h } = e,
        u = (0, o.e7)([f.Z], () => f.Z.getChannel(i), [i]),
        b = (0, o.e7)([p.Z], () => p.Z.getGuild(null == u ? void 0 : u.getGuildId()), [u]),
        m = (0, o.e7)([f.Z], () => f.Z.getChannel(null == u ? void 0 : u.parent_id), [u]),
        v = null == (t = l[0]) ? void 0 : t.item,
        [y, C] = s.useState(null);
    s.useEffect(() => {
        null != v && (0, g.Fq)(v.file, (e, t) => C(e), I.dG);
    }, [v]);
    let S =
            null != v && null != y
                ? {
                      src: y,
                      width: T.TJ,
                      height: T.Lp,
                      spoiler: l[0].spoiler,
                      alt: l[0].description,
                  }
                : null,
        [x, F] = s.useState(!1),
        M = s.useCallback(() => {
            (0, w.xI)({ added: !1 }), c(), h();
        }, [c, h]),
        Z = s.useCallback(() => {
            null != u &&
                null != b &&
                ((0, w.xI)({ added: !0 }),
                P({
                    thread: u,
                    attachments: l,
                    setIsUploading: F,
                    guild: b,
                    onClose: h,
                }));
        }, [u, l, F, b, h]);
    return null == m
        ? null
        : (0, n.jsx)(a.Modal, {
              title: j.intl.string(j.t["+SZF6S"]),
              subtitle: j.intl.string(j.t["0Ycgw5"]),
              transitionState: d,
              onClose: h,
              actionBarInput: (0, n.jsx)(r.Avr, {
                  variant: "secondary",
                  disabled: x,
                  onClick: h,
                  text: j.intl.string(j.t["ETE/oC"]),
              }),
              actions: [
                  {
                      variant: "secondary",
                      text: j.intl.string(j.t["8rKVHL"]),
                      disabled: x,
                      onClick: M,
                  },
                  {
                      variant: "primary",
                      text: j.intl.string(j.t.d611xH),
                      loading: x,
                      onClick: Z,
                      autoFocus: !0,
                  },
              ],
              children: (0, n.jsx)(O.oL, {
                  channel: m,
                  children: (0, n.jsx)(T.ZP, {
                      threadId: i,
                      goToThread: I.dG,
                      overrideMedia: S,
                      className: E.forumPost,
                  }),
              }),
          });
}
