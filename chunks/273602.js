n.d(t, { default: () => S }), n(388685), n(953529);
var a = n(951288),
    o = n(647438),
    i = n(442837),
    l = n(544891),
    r = n(82659),
    s = n(159691),
    c = n(904245),
    u = n(166459),
    d = n(680287),
    b = n(247206),
    f = n(813197),
    g = n(592125),
    p = n(703558),
    _ = n(430824),
    h = n(375954),
    m = n(403182),
    y = n(709054),
    x = n(861990),
    v = n(127654),
    w = n(979956),
    C = n(228392),
    j = n(404616),
    T = n(470623),
    I = n(981631),
    O = n(231338),
    M = n(388032),
    E = n(646632);
async function P(e) {
    var t, n, a;
    let o,
        { thread: i, attachments: r, setIsUploading: s, guild: f, onClose: g } = e,
        _ = y.default.castChannelIdAsMessageId(i.id),
        C = new d.Z();
    C.on("progress", (e) => {
        let t = (0, m.dg)(f.id);
        e.currentSize > t && (C.cancel(), s(!1), g(), (0, v.G)(i, (0, w.KZ)(r)));
    });
    let j = h.Z.getMessage(i.id, _),
        T = null != j ? j.attachments : [];
    s(!0);
    try {
        o = await C.uploadFiles(r);
    } catch (e) {
        s(!1);
        return;
    }
    let O = [...T, ...(null != (t = o.map((e, t) => (0, x.B)(e, t))) ? t : [])];
    try {
        await l.tn.patch({
            url: I.ANM.MESSAGE(i.id, _),
            body: { attachments: O },
            rejectWithError: !1,
        }),
            g(),
            u.Z.clearAll(i.id, p.d.ChannelMessage);
    } catch (e) {
        s(!1),
            (null == (n = e.body) ? void 0 : n.code) === I.evJ.EXPLICIT_CONTENT &&
                (g(),
                c.Z.sendExplicitMediaClydeError(
                    i.id,
                    null == (a = e.body) ? void 0 : a.attachments,
                    b.UU.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                ),
                u.Z.clearAll(i.id, p.d.ChannelMessage));
    }
}
function S(e) {
    var t;
    let { threadId: n, attachments: l, sendMessage: c, transitionState: u, onClose: d } = e,
        b = (0, i.e7)([g.Z], () => g.Z.getChannel(n), [n]),
        p = (0, i.e7)([_.Z], () => _.Z.getGuild(null == b ? void 0 : b.getGuildId()), [b]),
        h = (0, i.e7)([g.Z], () => g.Z.getChannel(null == b ? void 0 : b.parent_id), [b]),
        m = null == (t = l[0]) ? void 0 : t.item,
        [y, x] = o.useState(null);
    o.useEffect(() => {
        null != m && (0, f.Fq)(m.file, (e, t) => x(e), O.dG);
    }, [m]);
    let v =
            null != m && null != y
                ? {
                      src: y,
                      width: j.TJ,
                      height: j.Lp,
                      spoiler: l[0].spoiler,
                      alt: l[0].description,
                  }
                : null,
        [w, I] = o.useState(!1),
        S = o.useCallback(() => {
            (0, C.xI)({ added: !1 }), c(), d();
        }, [c, d]),
        k = o.useCallback(() => {
            null != b &&
                null != p &&
                ((0, C.xI)({ added: !0 }),
                P({
                    thread: b,
                    attachments: l,
                    setIsUploading: I,
                    guild: p,
                    onClose: d,
                }));
        }, [b, l, I, p, d]);
    return null == h
        ? null
        : (0, a.jsx)(r.Modal, {
              title: M.intl.string(M.t["+SZF6e"]),
              subtitle: M.intl.string(M.t["0Ycgw8"]),
              transitionState: u,
              onClose: d,
              actionBarInput: (0, a.jsx)(s.Avr, {
                  variant: "secondary",
                  disabled: w,
                  onClick: d,
                  text: M.intl.string(M.t["ETE/oK"]),
              }),
              actions: [
                  {
                      variant: "secondary",
                      text: M.intl.string(M.t["8rKVHB"]),
                      disabled: w,
                      onClick: S,
                  },
                  {
                      variant: "primary",
                      text: M.intl.string(M.t.d611xM),
                      loading: w,
                      onClick: k,
                      autoFocus: !0,
                  },
              ],
              children: (0, a.jsx)(T.oL, {
                  channel: h,
                  children: (0, a.jsx)(j.ZP, {
                      threadId: n,
                      goToThread: O.dG,
                      overrideMedia: v,
                      className: E.forumPost,
                  }),
              }),
          });
}
