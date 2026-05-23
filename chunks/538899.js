l.d(e, { default: () => F });
var a = l(627968),
    n = l(64700),
    i = l(189213),
    s = l(17928),
    d = l(636537),
    r = l(123292),
    c = l(720149),
    o = l(608299),
    u = l(395780),
    h = l(390248),
    C = l(946274),
    g = l(550642),
    A = l(734057),
    p = l(31717),
    E = l(71393),
    b = l(232835),
    M = l(453771),
    y = l(935208),
    I = l(292348),
    T = l(518960),
    _ = l(382287),
    S = l(853742),
    k = l(350527),
    x = l(218152),
    m = l(652215),
    w = l(818348),
    f = l(375708),
    j = l(158482);
async function O(t) {
    let e,
        { thread: l, attachments: a, setIsUploading: n, guild: i, onClose: s } = t,
        r = y.default.castChannelIdAsMessageId(l.id),
        C = new u.A();
    C.on("progress", (t) => {
        let e = (0, g.R8)({ location: "web.AddMediaToOriginalForumPostModal" }),
            d = (0, g.Jy)(e, (0, M.o2)(i.id));
        t.currentSize > d && (C.cancel(), n(!1), s(), (0, T.V)(l, (0, _.LJ)(a)));
    });
    let A = b.A.getMessage(l.id, r),
        E = null != A ? A.attachments : [];
    n(!0);
    try {
        e = await C.uploadFiles(a);
    } catch (t) {
        n(!1);
        return;
    }
    let S = [...E, ...(e.map((t, e) => (0, I.OW)(t, e)) ?? [])];
    try {
        await d.Bo.patch({ url: m.Rsh.MESSAGE(l.id, r), body: { attachments: S }, rejectWithError: !1 }),
            s(),
            o.A.clearAll(l.id, p.C.ChannelMessage);
    } catch (t) {
        n(!1),
            t.body?.code === m.t02.EXPLICIT_CONTENT &&
                (s(),
                c.A.sendExplicitMediaClydeError(
                    l.id,
                    t.body?.attachments,
                    h.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                ),
                o.A.clearAll(l.id, p.C.ChannelMessage));
    }
}
function F(t) {
    let { threadId: e, attachments: l, sendMessage: d, transitionState: c, onClose: o } = t,
        u = (0, s.bG)([A.A], () => A.A.getChannel(e), [e]),
        h = (0, s.bG)([E.A], () => E.A.getGuild(u?.getGuildId()), [u]),
        g = (0, s.bG)([A.A], () => A.A.getChannel(u?.parent_id), [u]),
        p = l[0]?.item,
        [b, M] = n.useState(null);
    n.useEffect(() => {
        null != p && (0, C.JF)(p.file, (t, e) => M(t), w.tE);
    }, [p]);
    let y =
            null != p && null != b
                ? { src: b, width: k.T5, height: k.Co, spoiler: l[0].spoiler, alt: l[0].description }
                : null,
        [I, T] = n.useState(!1),
        _ = n.useCallback(() => {
            (0, S.jh)({ added: !1 }), d(), o();
        }, [d, o]),
        m = n.useCallback(() => {
            null != u &&
                null != h &&
                ((0, S.jh)({ added: !0 }), O({ thread: u, attachments: l, setIsUploading: T, guild: h, onClose: o }));
        }, [u, l, T, h, o]);
    return null == g
        ? null
        : (0, a.jsx)(i.Modal, {
              title: f.intl.string(f.t["+SZF6S"]),
              subtitle: f.intl.string(f.t["0Ycgw5"]),
              transitionState: c,
              onClose: o,
              actionBarInput: (0, a.jsx)(r.Q, {
                  variant: "secondary",
                  disabled: I,
                  onClick: o,
                  text: f.intl.string(f.t["ETE/oC"]),
              }),
              actions: [
                  { variant: "secondary", text: f.intl.string(f.t["8rKVHL"]), disabled: I, onClick: _ },
                  { variant: "primary", text: f.intl.string(f.t.d611xH), loading: I, onClick: m, autoFocus: !0 },
              ],
              children: (0, a.jsx)(x.Cp, {
                  channel: g,
                  children: (0, a.jsx)(k.Ay, { threadId: e, goToThread: w.tE, overrideMedia: y, className: j.u }),
              }),
          });
}
