n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    r = n.n(a),
    s = n(17928),
    o = n(939249),
    c = n(531142),
    d = n(140735),
    u = n(834730),
    _ = n(442433),
    m = n(47167),
    h = n(143413),
    p = n(734057),
    g = n(935208),
    f = n(321045),
    x = n(456874),
    A = n(707539),
    C = n(80682),
    v = n(465364),
    I = n(805964),
    E = n(943220),
    b = n(994500),
    y = n(838541),
    T = n(334211);
function j(e) {
    let { message: t, channel: n } = e,
        { isBlocked: a, isIgnored: r } = (0, s.cf)(
            [b.A],
            () => ({ isBlocked: b.A.isBlockedForMessage(t), isIgnored: b.A.isIgnoredForMessage(t) }),
            [t],
        ),
        o = l.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, C.Eq)(o, "ThreadMessageAccessoryMessage");
    let c = l.useMemo(
        () => (null != t.content && "" !== t.content ? (0, v.Ay)(t, { formatInline: !0 }).content : null),
        [t],
    );
    return (0, i.jsxs)("div", {
        className: T.up,
        children: [
            (0, i.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: T.FJ }),
            (0, i.jsx)(E.A, { message: t, channel: n, compact: !0 }),
            (0, i.jsx)("div", {
                className: T.Au,
                children: (function (e, t, n, l) {
                    let {
                        contentPlaceholder: a,
                        renderedContent: r,
                        leadingIcon: s,
                        trailingIcon: o,
                    } = (0, I.o)(e, t, n, l, T.tP, { trailingIconClass: T._v, leadingIconClass: T.a5, iconSize: y.eJ });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [s, r ?? (0, i.jsx)("span", { className: T.dp, children: a }), o],
                    });
                })(t, c, a, r),
            }),
        ],
    });
}
var N = n(747926),
    S = n(650583),
    k = n(985018),
    L = n(74791);
function R(e) {
    let { message: t, compact: n } = e,
        l = (0, s.bG)([p.A], () => p.A.getChannel(g.default.castMessageIdAsChannelId(t.id)));
    return null == l ? null : (0, i.jsx)(w, { channel: l, compact: n, isSystemMessage: (0, h.A)(t) });
}
function w(e) {
    var t;
    let l,
        a,
        h,
        { channel: p, compact: g, isSystemMessage: C } = e,
        v = (0, m.Ay)(p),
        I = (0, s.bG)([x.A], () => x.A.getCount(p.id)),
        E =
            ((t = p),
            (l = (0, s.bG)([x.A], () => x.A.getMostRecentMessage(t.id))),
            (a = (0, s.bG)([x.A], () => x.A.getCount(t.id))),
            (h = (0, A.JO)(t)),
            t.threadMetadata?.archived
                ? k.intl.string(k.t.ZTo4HS)
                : null == a || 0 === a
                  ? k.intl.string(k.t.HYtNyE)
                  : null == l
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("span", { children: k.intl.string(k.t.ZTo4HS) }),
                              (0, i.jsx)("span", { className: L.vE, children: (0, A.aK)(h) }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(j, { message: l, channel: t }),
                              (0, i.jsx)("span", { className: L.vE, children: (0, A.aK)(h) }),
                          ],
                      })),
        b = null != I && I > 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: r()(L.GI, { [L.E]: !g, [L.E_]: C }) }),
            (0, i.jsx)(o.D, {
                onClick: function (e) {
                    e.stopPropagation(), (0, N.JA)(p, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === S.dh.SPACE || e.key === S.dh.ENTER) && (e.preventDefault(), (t || n) && (0, N.JA)(p, n));
                },
                onContextMenu: function (e) {
                    (0, _.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("35327"),
                            n.e("99011"),
                            n.e("94989"),
                            n.e("1394"),
                        ]).then(n.bind(n, 612826));
                        return (t) => (0, i.jsx)(e, { channel: p, ...t });
                    });
                },
                "aria-roledescription": k.intl.string(k.t["8ipxiY"]),
                className: r()(L.kL, { [L.og]: C }),
                children: (0, i.jsxs)(c.R, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: L.kq,
                            children: [
                                (0, i.jsx)(d.A, { children: k.intl.string(k.t["7Xm5QI"]) }),
                                (0, i.jsx)("span", { className: L.UU, children: v }),
                                (0, i.jsx)("span", {
                                    className: L.lO,
                                    "aria-hidden": !b,
                                    children: (0, f.ub)(I, p.id),
                                }),
                            ],
                        }),
                        (0, i.jsx)(u.E, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: L.sb,
                            children: E,
                        }),
                    ],
                }),
            }),
        ],
    });
}
