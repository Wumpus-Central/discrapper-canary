a.d(e, { default: () => O });
var l = a(477900),
    n = a(582128),
    i = a(189213),
    s = a(17928),
    r = a(636537),
    d = a(123292),
    c = a(148494),
    o = a(608299),
    u = a(395780),
    h = a(390248),
    C = a(946274),
    A = a(409481),
    g = a(867455),
    p = a(734057),
    E = a(31717),
    b = a(71393),
    y = a(232835),
    I = a(453771),
    T = a(935208),
    M = a(292348),
    _ = a(518960),
    S = a(382287),
    f = a(853742),
    k = a(350527),
    x = a(218152),
    w = a(652215),
    j = a(818348),
    m = a(375708),
    v = a(821737);
async function G(t) {
    let e,
        { thread: a, attachments: l, setIsUploading: n, guild: i, onClose: s } = t,
        d = T.default.castChannelIdAsMessageId(a.id),
        C = new u.A();
    C.on("progress", (t) => {
        let e = (0, A.C)((0, I.o2)(i.id));
        t.currentSize > e && (C.cancel(), n(!1), s(), (0, _.V)(a, (0, S.LJ)(l)));
    });
    let p = y.A.getMessage(a.id, d),
        b = null != p ? p.attachments : [];
    n(!0);
    try {
        e = await C.uploadFiles(l);
    } catch (t) {
        n(!1);
        return;
    }
    let f = [...b, ...(e.map((t, e) => (0, M.OW)(t, e)) ?? [])];
    try {
        await g.A.unarchiveThreadIfNecessary(a.id);
    } catch {
        (n(!1), s());
        return;
    }
    try {
        (await r.Bo.patch({ url: w.Rsh.MESSAGE(a.id, d), body: { attachments: f }, rejectWithError: (0, r.fT)() }),
            s(),
            o.A.clearAll(a.id, E.C.ChannelMessage));
    } catch (t) {
        (n(!1),
            t.body?.code === w.t02.EXPLICIT_CONTENT &&
                (s(),
                c.A.sendExplicitMediaClydeError(
                    a.id,
                    t.body?.attachments,
                    h.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                ),
                o.A.clearAll(a.id, E.C.ChannelMessage)));
    }
}
function O(t) {
    let { threadId: e, attachments: a, sendMessage: r, transitionState: c, onClose: o } = t,
        u = (0, s.bG)([p.A], () => p.A.getChannel(e), [e]),
        h = (0, s.bG)([b.A], () => b.A.getGuild(u?.getGuildId()), [u]),
        A = (0, s.bG)([p.A], () => p.A.getChannel(u?.parent_id), [u]),
        g = a[0]?.item,
        [E, y] = n.useState(null);
    n.useEffect(() => {
        null != g && (0, C.JF)(g.file, (t, e) => y(t), j.tE);
    }, [g]);
    let I =
            null != g && null != E
                ? { src: E, width: k.T5, height: k.Co, spoiler: a[0].spoiler, alt: a[0].description }
                : null,
        [T, M] = n.useState(!1),
        _ = n.useCallback(() => {
            ((0, f.jh)({ added: !1 }), r(), o());
        }, [r, o]),
        S = n.useCallback(() => {
            null != u &&
                null != h &&
                ((0, f.jh)({ added: !0 }), G({ thread: u, attachments: a, setIsUploading: M, guild: h, onClose: o }));
        }, [u, a, M, h, o]);
    return null == A
        ? null
        : (0, l.jsx)(i.Modal, {
              title: m.intl.string(m.t["+SZF6S"]),
              subtitle: m.intl.string(m.t["0Ycgw5"]),
              transitionState: c,
              onClose: o,
              actionBarInput: (0, l.jsx)(d.Q, {
                  variant: "secondary",
                  disabled: T,
                  onClick: o,
                  text: m.intl.string(m.t["ETE/oC"]),
              }),
              actions: [
                  { variant: "secondary", text: m.intl.string(m.t["8rKVHL"]), disabled: T, onClick: _ },
                  { variant: "primary", text: m.intl.string(m.t.d611xH), loading: T, onClick: S, autoFocus: !0 },
              ],
              children: (0, l.jsx)(x.Cp, {
                  channel: A,
                  children: (0, l.jsx)(k.Ay, { threadId: e, goToThread: j.tE, overrideMedia: I, className: v.u }),
              }),
          });
}
