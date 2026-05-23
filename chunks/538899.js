l.d(e, { default: () => G });
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
    g = l(734057),
    p = l(31717),
    A = l(71393),
    E = l(232835),
    b = l(453771),
    y = l(935208),
    I = l(292348),
    M = l(518960),
    _ = l(382287),
    S = l(853742),
    T = l(350527),
    k = l(218152),
    x = l(652215),
    f = l(818348),
    j = l(375708),
    m = l(158482);
async function w(t) {
    let e,
        { thread: l, attachments: a, setIsUploading: n, guild: i, onClose: s } = t,
        r = y.default.castChannelIdAsMessageId(l.id),
        C = new u.A();
    C.on("progress", (t) => {
        let e = (0, b.o2)(i.id);
        t.currentSize > e && (C.cancel(), n(!1), s(), (0, M.V)(l, (0, _.LJ)(a)));
    });
    let g = E.A.getMessage(l.id, r),
        A = null != g ? g.attachments : [];
    n(!0);
    try {
        e = await C.uploadFiles(a);
    } catch (t) {
        n(!1);
        return;
    }
    let S = [...A, ...(e.map((t, e) => (0, I.OW)(t, e)) ?? [])];
    try {
        await d.Bo.patch({ url: x.Rsh.MESSAGE(l.id, r), body: { attachments: S }, rejectWithError: !1 }),
            s(),
            o.A.clearAll(l.id, p.C.ChannelMessage);
    } catch (t) {
        n(!1),
            t.body?.code === x.t02.EXPLICIT_CONTENT &&
                (s(),
                c.A.sendExplicitMediaClydeError(
                    l.id,
                    t.body?.attachments,
                    h.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                ),
                o.A.clearAll(l.id, p.C.ChannelMessage));
    }
}
function G(t) {
    let { threadId: e, attachments: l, sendMessage: d, transitionState: c, onClose: o } = t,
        u = (0, s.bG)([g.A], () => g.A.getChannel(e), [e]),
        h = (0, s.bG)([A.A], () => A.A.getGuild(u?.getGuildId()), [u]),
        p = (0, s.bG)([g.A], () => g.A.getChannel(u?.parent_id), [u]),
        E = l[0]?.item,
        [b, y] = n.useState(null);
    n.useEffect(() => {
        null != E && (0, C.JF)(E.file, (t, e) => y(t), f.tE);
    }, [E]);
    let I =
            null != E && null != b
                ? { src: b, width: T.T5, height: T.Co, spoiler: l[0].spoiler, alt: l[0].description }
                : null,
        [M, _] = n.useState(!1),
        x = n.useCallback(() => {
            (0, S.jh)({ added: !1 }), d(), o();
        }, [d, o]),
        G = n.useCallback(() => {
            null != u &&
                null != h &&
                ((0, S.jh)({ added: !0 }), w({ thread: u, attachments: l, setIsUploading: _, guild: h, onClose: o }));
        }, [u, l, _, h, o]);
    return null == p
        ? null
        : (0, a.jsx)(i.Modal, {
              title: j.intl.string(j.t["+SZF6S"]),
              subtitle: j.intl.string(j.t["0Ycgw5"]),
              transitionState: c,
              onClose: o,
              actionBarInput: (0, a.jsx)(r.Q, {
                  variant: "secondary",
                  disabled: M,
                  onClick: o,
                  text: j.intl.string(j.t["ETE/oC"]),
              }),
              actions: [
                  { variant: "secondary", text: j.intl.string(j.t["8rKVHL"]), disabled: M, onClick: x },
                  { variant: "primary", text: j.intl.string(j.t.d611xH), loading: M, onClick: G, autoFocus: !0 },
              ],
              children: (0, a.jsx)(k.Cp, {
                  channel: p,
                  children: (0, a.jsx)(T.Ay, { threadId: e, goToThread: f.tE, overrideMedia: I, className: m.u }),
              }),
          });
}
