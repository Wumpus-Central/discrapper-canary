l.d(n, { Ay: () => L }), l(896048), l(228524);
var t = l(627968),
    a = l(64700),
    r = l(503698),
    i = l.n(r),
    s = l(311907),
    c = l(397927),
    d = l(843472),
    o = l(256265),
    u = l(710948),
    f = l(46054),
    h = l(77350),
    b = l(294520),
    m = l(652176),
    x = l(976860),
    g = l(138298),
    j = l(253932),
    A = l(734057),
    p = l(808728),
    v = l(320501),
    y = l(576705),
    N = l(531685),
    O = l(486020),
    I = l(225142),
    C = l(248019),
    _ = l(639245),
    w = l(652215),
    E = l(985018),
    G = l(446964),
    M = l(206314),
    S = l(296997);
function D(e) {
    let n,
        l,
        { firstMedia: a, channelId: r } = e,
        c = (0, s.bG)([A.A], () => A.A.getChannel(r)),
        [d, o] = (0, b.eJ)({
            media: a,
            channel: c,
        }),
        f = (0, b.rx)(o),
        x = (0, s.bG)([N.A], () => N.A.isFocused()),
        g = (0, h.ge)(a.src),
        p = j.kt.useSetting(),
        { src: v, width: y, height: O, alt: I } = a;
    return (
        O > y ? (l = 72) : (n = 72),
        (0, t.jsxs)("div", {
            className: G.$_,
            children: [
                (0, m.LL)({
                    src: v,
                    maxHeight: n,
                    maxWidth: l,
                    width: y,
                    height: O,
                    alt: null != I && d && null != f ? f : I,
                    autoPlay: p,
                    animated: g && !d && x,
                    containerClassName: G.iT,
                    imageClassName: i()({ [G.cd]: d }),
                    analyticsSource: "ResourceChannelMedia",
                }),
                d &&
                    (0, t.jsx)(u.A, {
                        obscureReason: o,
                        iconClassname: G.yo,
                    }),
            ],
        })
    );
}
function P(e) {
    let { resource: n } = e,
        l = (0, s.bG)([A.A], () => A.A.getChannel(n.channelId)),
        r = (0, s.bG)([v.A], () => v.A.getMessages(n.channelId)),
        u = (0, s.bG)([y.A], () => y.A.can(w.xBc.VIEW_CHANNEL, l)),
        h = r.first(),
        b = (0, C.A)(h),
        m = (0, o.yC)(h, !1),
        x = (null == m ? void 0 : m.length) > 0 ? m[0] : null,
        j = null != l && null == r.first() && !r.loadingMore && !r.ready && !r.hasFetched && u;
    if (
        (a.useEffect(() => {
            j &&
                d.A.fetchMessages({
                    channelId: n.channelId,
                    after: n.channelId,
                    limit: 5,
                });
        }, [n.channelId, j]),
        null == l || null == l.guild_id)
    )
        return null;
    let p = O.Ay.getResourceChannelIconURL({
            channelId: l.id,
            icon: n.icon,
        }),
        N = null == n.description || 0 === n.description.length;
    return (0, t.jsxs)(c.DUT, {
        className: G.G9,
        onClick: (e) => {
            null != l &&
                (e.shiftKey
                    ? (0, I.bN)(l.guild_id, l.id)
                    : g.A.openResourceChannelAsSidebar({
                          guildId: l.guild_id,
                          channelId: l.id,
                      }));
        },
        children: [
            (0, t.jsxs)("div", {
                className: G.Qs,
                children: [
                    (0, t.jsx)(c.Text, {
                        className: G.DD,
                        variant: "text-md/bold",
                        color: "text-strong",
                        children: n.title,
                    }),
                    N &&
                        null != b &&
                        (0, t.jsx)(c.Text, {
                            className: G.BK,
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: f.A.parse(b, !0, {
                                guildId: l.guild_id,
                                channelId: l.id,
                            }),
                        }),
                    !N &&
                        (0, t.jsx)(c.Text, {
                            className: i()(G.BK, M.PT),
                            variant: "text-sm/normal",
                            color: "text-default",
                            lineClamp: 3,
                            children: f.A.parse(n.description, !0, {
                                guildId: l.guild_id,
                                channelId: l.id,
                            }),
                        }),
                ],
            }),
            null != n.icon && null != p
                ? (0, t.jsx)("div", {
                      className: G.$_,
                      children: (0, t.jsx)("img", {
                          src: p,
                          className: G.__invalid_thumbnail,
                          width: 72,
                          height: 72,
                          alt: "",
                          "aria-hidden": !0,
                      }),
                  })
                : null,
            null == p && null != x
                ? (0, t.jsx)(D, {
                      firstMedia: x,
                      channelId: n.channelId,
                  })
                : null,
        ],
    });
}
function L(e) {
    let { guild: n, isNewMember: l } = e,
        a = (0, _.A)(n.id);
    return 0 === a.length
        ? l
            ? null
            : (0, t.jsxs)("div", {
                  className: G.do,
                  children: [
                      (0, t.jsx)(c.Heading, {
                          variant: "heading-xl/bold",
                          color: "text-strong",
                          children: E.intl.string(E.t.owvC9U),
                      }),
                      (0, t.jsx)("img", {
                          className: G.QT,
                          src: S,
                          alt: "",
                      }),
                      (0, t.jsx)("div", {
                          className: G.nM,
                          children: (0, t.jsx)(c.Button, {
                              size: "md",
                              variant: "primary",
                              onClick: () => {
                                  let e = p.Ay.getDefaultChannel(n.id);
                                  null != e && (0, x.pX)(w.BVt.CHANNEL(n.id, e.id));
                              },
                              fullWidth: !0,
                              text: E.intl.string(E.t["3iCBUn"]),
                          }),
                      }),
                  ],
              })
        : (0, t.jsxs)("div", {
              className: G.kL,
              children: [
                  (0, t.jsx)(c.Heading, {
                      variant: "heading-lg/bold",
                      color: "text-strong",
                      children: E.intl.string(E.t.xwY4La),
                  }),
                  a.map((e) => (0, t.jsx)(P, { resource: e }, e.channelId)),
              ],
          });
}
