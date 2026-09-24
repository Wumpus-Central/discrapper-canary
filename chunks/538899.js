a.d(e, { default: () => D });
var l = a(477900),
    n = a(582128),
    i = a(189213),
    s = a(17928),
    r = a(636537),
    d = a(123292),
    c = a(346055),
    o = a(148494),
    u = a(608299),
    h = a(395780),
    C = a(390248),
    A = a(946274),
    g = a(409481),
    p = a(867455),
    E = a(734057),
    b = a(31717),
    y = a(71393),
    I = a(232835),
    M = a(453771),
    T = a(935208),
    _ = a(292348),
    x = a(518960),
    S = a(382287),
    f = a(853742),
    k = a(350527),
    j = a(218152),
    w = a(652215),
    m = a(818348),
    v = a(375708),
    G = a(821737);
async function O(t) {
    let e,
        { thread: a, attachments: l, setIsUploading: n, guild: i, onClose: s } = t,
        d = T.default.castChannelIdAsMessageId(a.id),
        c = new h.A();
    c.on("progress", (t) => {
        let e = (0, g.C)((0, M.o2)(i.id));
        t.currentSize > e && (c.cancel(), n(!1), s(), (0, x.V)(a, (0, S.LJ)(l)));
    });
    let A = I.A.getMessage(a.id, d),
        E = null != A ? A.attachments : [];
    n(!0);
    try {
        e = await c.uploadFiles(l);
    } catch (t) {
        n(!1);
        return;
    }
    let y = [...E, ...(e.map((t, e) => (0, _.OW)(t, e)) ?? [])];
    try {
        await p.A.unarchiveThreadIfNecessary(a.id);
    } catch {
        (n(!1), s());
        return;
    }
    try {
        (await r.Bo.patch({ url: w.Rsh.MESSAGE(a.id, d), body: { attachments: y }, rejectWithError: (0, r.fT)() }),
            s(),
            u.A.clearAll(a.id, b.C.ChannelMessage));
    } catch (t) {
        (n(!1),
            t.body?.code === w.t02.EXPLICIT_CONTENT &&
                (s(),
                o.A.sendExplicitMediaClydeError(
                    a.id,
                    t.body?.attachments,
                    C.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                ),
                u.A.clearAll(a.id, b.C.ChannelMessage)));
    }
}
function D(t) {
    let { threadId: e, attachments: a, sendMessage: r, transitionState: o, onClose: u } = t,
        h = (0, s.bG)([E.A], () => E.A.getChannel(e), [e]),
        C = (0, s.bG)([y.A], () => y.A.getGuild(h?.getGuildId()), [h]),
        g = (0, s.bG)([E.A], () => E.A.getChannel(h?.parent_id), [h]),
        p = a[0]?.item,
        [b, I] = n.useState(null);
    n.useEffect(() => {
        null != p && (0, A.JF)(p.file, (t, e) => I(t), m.tE);
    }, [p]);
    let M =
            null != p && null != b
                ? { src: b, width: k.T5, height: k.Co, spoiler: a[0].spoiler, alt: a[0].description }
                : null,
        [T, _] = n.useState(!1),
        x = n.useCallback(() => {
            ((0, f.jh)({ added: !1 }), r(), u());
        }, [r, u]),
        S = n.useCallback(() => {
            null != h &&
                null != C &&
                ((0, f.jh)({ added: !0 }), O({ thread: h, attachments: a, setIsUploading: _, guild: C, onClose: u }));
        }, [h, a, _, C, u]);
    return null == g
        ? null
        : (0, l.jsx)(i.Modal, {
              title: v.intl.string(v.t["+SZF6S"]),
              subtitle: v.intl.string(v.t["0Ycgw5"]),
              transitionState: o,
              onClose: u,
              actionBarInput: (0, l.jsx)(d.Q, {
                  variant: "secondary",
                  disabled: T,
                  onClick: u,
                  text: v.intl.string(v.t["ETE/oC"]),
              }),
              actions: [
                  { variant: "secondary", text: v.intl.string(v.t["8rKVHL"]), disabled: T, onClick: x },
                  { variant: "primary", text: v.intl.string(v.t.d611xH), loading: T, onClick: S, autoFocus: !0 },
              ],
              children: (0, l.jsx)(j.Cp, {
                  channel: g,
                  children: (0, l.jsx)(c.M, {
                      children: (0, l.jsx)(k.Ay, { threadId: e, goToThread: m.tE, overrideMedia: M, className: G.u }),
                  }),
              }),
          });
}
