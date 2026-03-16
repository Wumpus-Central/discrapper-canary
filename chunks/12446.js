l.d(n, { Ay: () => k });
var a = l(627968),
    s = l(64700),
    t = l(503698),
    i = l.n(t),
    r = l(311907),
    d = l(397927),
    c = l(843472),
    o = l(256265),
    u = l(710948),
    h = l(46054),
    m = l(77350),
    x = l(294520),
    g = l(652176),
    A = l(976860),
    _ = l(138298),
    f = l(253932),
    j = l(734057),
    b = l(808728),
    I = l(320501),
    N = l(576705),
    C = l(531685),
    p = l(486020),
    v = l(225142),
    y = l(248019),
    G = l(639245),
    M = l(652215),
    E = l(985018),
    T = l(446964),
    L = l(206314),
    w = l(296997);
function H(e) {
    let n,
        l,
        { firstMedia: s, channelId: t } = e,
        d = (0, r.bG)([j.A], () => j.A.getChannel(t)),
        [c, o] = (0, x.eJ)({ media: s, channel: d }),
        h = (0, x.rx)(o),
        A = (0, r.bG)([C.A], () => C.A.isFocused()),
        _ = (0, m.ge)(s.src),
        b = f.kt.useSetting(),
        { src: I, width: N, height: p, alt: v } = s;
    return (
        p > N ? (l = 72) : (n = 72),
        (0, a.jsxs)("div", {
            className: T.$_,
            children: [
                (0, g.LL)({
                    src: I,
                    maxHeight: n,
                    maxWidth: l,
                    width: N,
                    height: p,
                    alt: null != v && c && null != h ? h : v,
                    autoPlay: b,
                    animated: _ && !c && A,
                    containerClassName: T.iT,
                    imageClassName: i()({ [T.cd]: c }),
                    analyticsSource: "ResourceChannelMedia",
                }),
                c && (0, a.jsx)(u.A, { obscureReason: o, iconClassname: T.yo }),
            ],
        })
    );
}
function R(e) {
    let { resource: n } = e,
        l = (0, r.bG)([j.A], () => j.A.getChannel(n.channelId)),
        t = (0, r.bG)([I.A], () => I.A.getMessages(n.channelId)),
        u = (0, r.bG)([N.A], () => N.A.can(M.xBc.VIEW_CHANNEL, l)),
        m = t.first(),
        x = (0, y.A)(m),
        g = (0, o.yC)(m, !1),
        A = g?.length > 0 ? g[0] : null,
        f = null != l && null == t.first() && !t.loadingMore && !t.ready && !t.hasFetched && u;
    if (
        (s.useEffect(() => {
            f && c.A.fetchMessages({ channelId: n.channelId, after: n.channelId, limit: 5 });
        }, [n.channelId, f]),
        null == l || null == l.guild_id)
    )
        return null;
    let b = p.Ay.getResourceChannelIconURL({ channelId: l.id, icon: n.icon }),
        C = null == n.description || 0 === n.description.length;
    return (0, a.jsxs)(d.DUT, {
        className: T.G9,
        onClick: (e) => {
            null != l &&
                (e.shiftKey
                    ? (0, v.bN)(l.guild_id, l.id)
                    : _.A.openResourceChannelAsSidebar({ guildId: l.guild_id, channelId: l.id }));
        },
        children: [
            (0, a.jsxs)("div", {
                className: T.Qs,
                children: [
                    (0, a.jsx)(d.Text, {
                        className: T.DD,
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: n.title,
                    }),
                    C &&
                        null != x &&
                        (0, a.jsx)(d.Text, {
                            className: T.BK,
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: h.A.parse(x, !0, { guildId: l.guild_id, channelId: l.id }),
                        }),
                    !C &&
                        (0, a.jsx)(d.Text, {
                            className: i()(T.BK, L.PT),
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: h.A.parse(n.description, !0, { guildId: l.guild_id, channelId: l.id }),
                        }),
                ],
            }),
            null != n.icon && null != b
                ? (0, a.jsx)("div", {
                      className: T.$_,
                      children: (0, a.jsx)("img", {
                          src: b,
                          className: T.__invalid_thumbnail,
                          width: 72,
                          height: 72,
                          alt: "",
                          "aria-hidden": !0,
                      }),
                  })
                : null,
            null == b && null != A ? (0, a.jsx)(H, { firstMedia: A, channelId: n.channelId }) : null,
        ],
    });
}
function k(e) {
    let { guild: n, isNewMember: l } = e,
        s = (0, G.A)(n.id);
    return 0 === s.length
        ? l
            ? null
            : (0, a.jsxs)("div", {
                  className: T.do,
                  children: [
                      (0, a.jsx)(d.Heading, {
                          variant: "heading-xl/bold",
                          color: "text-strong",
                          children: E.intl.string(E.t.owvC9U),
                      }),
                      (0, a.jsx)("img", { className: T.QT, src: w, alt: "" }),
                      (0, a.jsx)("div", {
                          className: T.nM,
                          children: (0, a.jsx)(d.Button, {
                              size: "md",
                              variant: "primary",
                              onClick: () => {
                                  let e = b.Ay.getDefaultChannel(n.id);
                                  null != e && (0, A.pX)(M.BVt.CHANNEL(n.id, e.id));
                              },
                              fullWidth: !0,
                              text: E.intl.string(E.t["3iCBUn"]),
                          }),
                      }),
                  ],
              })
        : (0, a.jsxs)("div", {
              className: T.kL,
              children: [
                  (0, a.jsx)(d.Heading, {
                      variant: "heading-lg/bold",
                      color: "text-strong",
                      children: E.intl.string(E.t.xwY4La),
                  }),
                  s.map((e) => (0, a.jsx)(R, { resource: e }, e.channelId)),
              ],
          });
}
