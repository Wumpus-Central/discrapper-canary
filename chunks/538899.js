n.d(t, { default: () => T }), n(896048), n(228524);
var l = n(627968),
    a = n(64700),
    c = n(158954),
    r = n(311907),
    i = n(562465),
    d = n(732955),
    s = n(843472),
    o = n(608299),
    f = n(425059),
    u = n(390248),
    b = n(946274),
    p = n(734057),
    h = n(31717),
    g = n(71393),
    _ = n(320501),
    m = n(453771),
    y = n(661191),
    x = n(292348),
    j = n(518960),
    v = n(382287),
    A = n(853742),
    C = n(835369),
    E = n(218152),
    O = n(652215),
    w = n(818348),
    S = n(985018),
    M = n(304439);
async function P(e) {
    var t, n, l;
    let a,
        { thread: c, attachments: r, setIsUploading: d, guild: b, onClose: p } = e,
        g = y.default.castChannelIdAsMessageId(c.id),
        A = new f.A();
    A.on("progress", (e) => {
        let t = (0, m.o2)(b.id);
        e.currentSize > t && (A.cancel(), d(!1), p(), (0, j.V)(c, (0, v.LJ)(r)));
    });
    let C = _.A.getMessage(c.id, g),
        E = null != C ? C.attachments : [];
    d(!0);
    try {
        a = await A.uploadFiles(r);
    } catch (e) {
        d(!1);
        return;
    }
    let w = [...E, ...(null != (t = a.map((e, t) => (0, x.OW)(e, t))) ? t : [])];
    try {
        await i.Bo.patch({
            url: O.Rsh.MESSAGE(c.id, g),
            body: { attachments: w },
            rejectWithError: !1,
        }),
            p(),
            o.A.clearAll(c.id, h.C.ChannelMessage);
    } catch (e) {
        d(!1),
            (null == (n = e.body) ? void 0 : n.code) === O.t02.EXPLICIT_CONTENT &&
                (p(),
                s.A.sendExplicitMediaClydeError(
                    c.id,
                    null == (l = e.body) ? void 0 : l.attachments,
                    u.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                ),
                o.A.clearAll(c.id, h.C.ChannelMessage));
    }
}
function T(e) {
    var t;
    let { threadId: n, attachments: i, sendMessage: s, transitionState: o, onClose: f } = e,
        u = (0, r.bG)([p.A], () => p.A.getChannel(n), [n]),
        h = (0, r.bG)([g.A], () => g.A.getGuild(null == u ? void 0 : u.getGuildId()), [u]),
        _ = (0, r.bG)([p.A], () => p.A.getChannel(null == u ? void 0 : u.parent_id), [u]),
        m = null == (t = i[0]) ? void 0 : t.item,
        [y, x] = a.useState(null);
    a.useEffect(() => {
        null != m && (0, b.JF)(m.file, (e, t) => x(e), w.tE);
    }, [m]);
    let j =
            null != m && null != y
                ? {
                      src: y,
                      width: C.T5,
                      height: C.Co,
                      spoiler: i[0].spoiler,
                      alt: i[0].description,
                  }
                : null,
        [v, O] = a.useState(!1),
        T = a.useCallback(() => {
            (0, A.jh)({ added: !1 }), s(), f();
        }, [s, f]),
        k = a.useCallback(() => {
            null != u &&
                null != h &&
                ((0, A.jh)({ added: !0 }),
                P({
                    thread: u,
                    attachments: i,
                    setIsUploading: O,
                    guild: h,
                    onClose: f,
                }));
        }, [u, i, O, h, f]);
    return null == _
        ? null
        : (0, l.jsx)(c.Modal, {
              title: S.intl.string(S.t["+SZF6S"]),
              subtitle: S.intl.string(S.t["0Ycgw5"]),
              transitionState: o,
              onClose: f,
              actionBarInput: (0, l.jsx)(d.QWc, {
                  variant: "secondary",
                  disabled: v,
                  onClick: f,
                  text: S.intl.string(S.t["ETE/oC"]),
              }),
              actions: [
                  {
                      variant: "secondary",
                      text: S.intl.string(S.t["8rKVHL"]),
                      disabled: v,
                      onClick: T,
                  },
                  {
                      variant: "primary",
                      text: S.intl.string(S.t.d611xH),
                      loading: v,
                      onClick: k,
                      autoFocus: !0,
                  },
              ],
              children: (0, l.jsx)(E.Cp, {
                  channel: _,
                  children: (0, l.jsx)(C.Ay, {
                      threadId: n,
                      goToThread: w.tE,
                      overrideMedia: j,
                      className: M.u,
                  }),
              }),
          });
}
