n.d(t, { default: () => k });
var i = n(627968),
    a = n(64700),
    o = n(158954),
    r = n(311907),
    l = n(562465),
    s = n(732955),
    c = n(843472),
    d = n(608299),
    u = n(425059),
    _ = n(390248),
    b = n(946274),
    f = n(734057),
    p = n(31717),
    h = n(71393),
    m = n(320501),
    g = n(453771),
    A = n(661191),
    x = n(292348),
    I = n(518960),
    T = n(382287),
    C = n(853742),
    E = n(835369),
    v = n(218152),
    S = n(652215),
    y = n(818348),
    j = n(985018),
    R = n(304439);
async function w(e) {
    let t,
        { thread: n, attachments: i, setIsUploading: a, guild: o, onClose: r } = e,
        s = A.default.castChannelIdAsMessageId(n.id),
        b = new u.A();
    b.on("progress", (e) => {
        let t = (0, g.o2)(o.id);
        e.currentSize > t && (b.cancel(), a(!1), r(), (0, I.V)(n, (0, T.LJ)(i)));
    });
    let f = m.A.getMessage(n.id, s),
        h = null != f ? f.attachments : [];
    a(!0);
    try {
        t = await b.uploadFiles(i);
    } catch (e) {
        a(!1);
        return;
    }
    let C = [...h, ...(t.map((e, t) => (0, x.OW)(e, t)) ?? [])];
    try {
        await l.Bo.patch({ url: S.Rsh.MESSAGE(n.id, s), body: { attachments: C }, rejectWithError: !1 }),
            r(),
            d.A.clearAll(n.id, p.C.ChannelMessage);
    } catch (e) {
        a(!1),
            e.body?.code === S.t02.EXPLICIT_CONTENT &&
                (r(),
                c.A.sendExplicitMediaClydeError(
                    n.id,
                    e.body?.attachments,
                    _.SW.EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED,
                ),
                d.A.clearAll(n.id, p.C.ChannelMessage));
    }
}
function k(e) {
    let { threadId: t, attachments: n, sendMessage: l, transitionState: c, onClose: d } = e,
        u = (0, r.bG)([f.A], () => f.A.getChannel(t), [t]),
        _ = (0, r.bG)([h.A], () => h.A.getGuild(u?.getGuildId()), [u]),
        p = (0, r.bG)([f.A], () => f.A.getChannel(u?.parent_id), [u]),
        m = n[0]?.item,
        [g, A] = a.useState(null);
    a.useEffect(() => {
        null != m && (0, b.JF)(m.file, (e, t) => A(e), y.tE);
    }, [m]);
    let x =
            null != m && null != g
                ? { src: g, width: E.T5, height: E.Co, spoiler: n[0].spoiler, alt: n[0].description }
                : null,
        [I, T] = a.useState(!1),
        S = a.useCallback(() => {
            (0, C.jh)({ added: !1 }), l(), d();
        }, [l, d]),
        k = a.useCallback(() => {
            null != u &&
                null != _ &&
                ((0, C.jh)({ added: !0 }), w({ thread: u, attachments: n, setIsUploading: T, guild: _, onClose: d }));
        }, [u, n, T, _, d]);
    return null == p
        ? null
        : (0, i.jsx)(o.Modal, {
              title: j.intl.string(j.t["+SZF6S"]),
              subtitle: j.intl.string(j.t["0Ycgw5"]),
              transitionState: c,
              onClose: d,
              actionBarInput: (0, i.jsx)(s.QWc, {
                  variant: "secondary",
                  disabled: I,
                  onClick: d,
                  text: j.intl.string(j.t["ETE/oC"]),
              }),
              actions: [
                  { variant: "secondary", text: j.intl.string(j.t["8rKVHL"]), disabled: I, onClick: S },
                  { variant: "primary", text: j.intl.string(j.t.d611xH), loading: I, onClick: k, autoFocus: !0 },
              ],
              children: (0, i.jsx)(v.Cp, {
                  channel: p,
                  children: (0, i.jsx)(E.Ay, { threadId: t, goToThread: y.tE, overrideMedia: x, className: R.u }),
              }),
          });
}
