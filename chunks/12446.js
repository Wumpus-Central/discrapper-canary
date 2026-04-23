l.d(n, { Ay: () => B });
var a = l(627968),
    s = l(64700),
    t = l(503698),
    i = l.n(t),
    r = l(311907),
    d = l(939249),
    c = l(834730),
    o = l(534514),
    u = l(821609),
    h = l(843472),
    m = l(256265),
    x = l(710948),
    g = l(46054),
    A = l(77350),
    _ = l(294520),
    f = l(652176),
    j = l(976860),
    b = l(138298),
    I = l(253932),
    N = l(734057),
    C = l(808728),
    v = l(320501),
    p = l(576705),
    E = l(531685),
    y = l(486020),
    G = l(225142),
    M = l(248019),
    L = l(639245),
    D = l(652215),
    w = l(985018),
    R = l(361723),
    T = l(992595),
    S = l(296997);
function k(e) {
    let n,
        l,
        { firstMedia: s, channelId: t } = e,
        d = (0, r.bG)([N.A], () => N.A.getChannel(t)),
        [c, o] = (0, _.eJ)({ media: s, channel: d }),
        u = (0, _.rx)(o),
        h = (0, r.bG)([E.A], () => E.A.isFocused()),
        m = (0, A.ge)(s.src),
        g = I.kt.useSetting(),
        { src: j, width: b, height: C, alt: v } = s;
    return (
        C > b ? (l = 72) : (n = 72),
        (0, a.jsxs)("div", {
            className: R.$_,
            children: [
                (0, f.LL)({
                    src: j,
                    maxHeight: n,
                    maxWidth: l,
                    width: b,
                    height: C,
                    alt: null != v && c && null != u ? u : v,
                    autoPlay: g,
                    animated: m && !c && h,
                    containerClassName: R.iT,
                    imageClassName: i()({ [R.cd]: c }),
                    analyticsSource: "ResourceChannelMedia",
                }),
                c && (0, a.jsx)(x.A, { obscureReason: o, iconClassname: R.yo }),
            ],
        })
    );
}
function H(e) {
    let { resource: n } = e,
        l = (0, r.bG)([N.A], () => N.A.getChannel(n.channelId)),
        t = (0, r.bG)([v.A], () => v.A.getMessages(n.channelId)),
        o = (0, r.bG)([p.A], () => p.A.can(D.xBc.VIEW_CHANNEL, l)),
        u = t.first(),
        x = (0, M.A)(u),
        A = (0, m.yC)(u, !1),
        _ = A?.length > 0 ? A[0] : null,
        f = null != l && null == t.first() && !t.loadingMore && !t.ready && !t.hasFetched && o;
    if (
        (s.useEffect(() => {
            f && h.A.fetchMessages({ channelId: n.channelId, after: n.channelId, limit: 5 });
        }, [n.channelId, f]),
        null == l || null == l.guild_id)
    )
        return null;
    let j = y.Ay.getResourceChannelIconURL({ channelId: l.id, icon: n.icon }),
        I = null == n.description || 0 === n.description.length;
    return (0, a.jsxs)(d.D, {
        className: R.G9,
        onClick: (e) => {
            null != l &&
                (e.shiftKey
                    ? (0, G.bN)(l.guild_id, l.id)
                    : b.A.openResourceChannelAsSidebar({ guildId: l.guild_id, channelId: l.id }));
        },
        children: [
            (0, a.jsxs)("div", {
                className: R.Qs,
                children: [
                    (0, a.jsx)(c.E, {
                        className: R.DD,
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: n.title,
                    }),
                    I &&
                        null != x &&
                        (0, a.jsx)(c.E, {
                            className: R.BK,
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: g.A.parse(x, !0, { guildId: l.guild_id, channelId: l.id }),
                        }),
                    !I &&
                        (0, a.jsx)(c.E, {
                            className: i()(R.BK, T.PT),
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: g.A.parse(n.description, !0, { guildId: l.guild_id, channelId: l.id }),
                        }),
                ],
            }),
            null != n.icon && null != j
                ? (0, a.jsx)("div", {
                      className: R.$_,
                      children: (0, a.jsx)("img", {
                          src: j,
                          className: R.__invalid_thumbnail,
                          width: 72,
                          height: 72,
                          alt: "",
                          "aria-hidden": !0,
                      }),
                  })
                : null,
            null == j && null != _ ? (0, a.jsx)(k, { firstMedia: _, channelId: n.channelId }) : null,
        ],
    });
}
function B(e) {
    let { guild: n, isNewMember: l } = e,
        s = (0, L.A)(n.id);
    return 0 === s.length
        ? l
            ? null
            : (0, a.jsxs)("div", {
                  className: R.do,
                  children: [
                      (0, a.jsx)(o.D, {
                          variant: "heading-xl/bold",
                          color: "text-strong",
                          children: w.intl.string(w.t.owvC9U),
                      }),
                      (0, a.jsx)("img", { className: R.QT, src: S, alt: "" }),
                      (0, a.jsx)("div", {
                          className: R.nM,
                          children: (0, a.jsx)(u.$, {
                              size: "md",
                              variant: "primary",
                              onClick: () => {
                                  let e = C.Ay.getDefaultChannel(n.id);
                                  null != e && (0, j.pX)(D.BVt.CHANNEL(n.id, e.id));
                              },
                              fullWidth: !0,
                              text: w.intl.string(w.t["3iCBUn"]),
                          }),
                      }),
                  ],
              })
        : (0, a.jsxs)("div", {
              className: R.kL,
              children: [
                  (0, a.jsx)(o.D, {
                      variant: "heading-lg/bold",
                      color: "text-strong",
                      children: w.intl.string(w.t.xwY4La),
                  }),
                  s.map((e) => (0, a.jsx)(H, { resource: e }, e.channelId)),
              ],
          });
}
