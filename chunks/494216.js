n.d(t, { A: () => R });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    o = n(939249),
    d = n(531142),
    c = n(140735),
    u = n(834730),
    m = n(442433),
    h = n(47167),
    g = n(143413),
    A = n(734057),
    p = n(935208),
    x = n(321045),
    f = n(456874),
    C = n(707539),
    E = n(80682),
    v = n(465364),
    I = n(805964),
    _ = n(943220),
    j = n(994500),
    N = n(838541),
    T = n(334211);
function y(e) {
    let { message: t, channel: n } = e,
        { isBlocked: s, isIgnored: a } = (0, r.cf)(
            [j.A],
            () => ({ isBlocked: j.A.isBlockedForMessage(t), isIgnored: j.A.isIgnoredForMessage(t) }),
            [t],
        ),
        o = l.useMemo(() => ({ [n.guild_id]: [t.author.id] }), [n.guild_id, t.author.id]);
    (0, E.Eq)(o, "ThreadMessageAccessoryMessage");
    let d = l.useMemo(
        () => (null != t.content && "" !== t.content ? (0, v.Ay)(t, { formatInline: !0 }).content : null),
        [t],
    );
    return (0, i.jsxs)("div", {
        className: T.up,
        children: [
            (0, i.jsx)("img", { alt: "", src: t.author.getAvatarURL(n.guild_id, 16), className: T.FJ }),
            (0, i.jsx)(_.A, { message: t, channel: n, compact: !0 }),
            (0, i.jsx)("div", {
                className: T.Au,
                children: (function (e, t, n, l) {
                    let {
                        contentPlaceholder: s,
                        renderedContent: a,
                        leadingIcon: r,
                        trailingIcon: o,
                    } = (0, I.o)(e, t, n, l, T.tP, { trailingIconClass: T._v, leadingIconClass: T.a5, iconSize: N.eJ });
                    return (0, i.jsxs)(i.Fragment, {
                        children: [r, a ?? (0, i.jsx)("span", { className: T.dp, children: s }), o],
                    });
                })(t, d, s, a),
            }),
        ],
    });
}
var S = n(747926),
    b = n(650583),
    k = n(985018),
    L = n(74791);
function R(e) {
    let { message: t, compact: n } = e,
        l = (0, r.bG)([A.A], () => A.A.getChannel(p.default.castMessageIdAsChannelId(t.id)));
    return null == l ? null : (0, i.jsx)(P, { channel: l, compact: n, isSystemMessage: (0, g.A)(t) });
}
function P(e) {
    var t;
    let l,
        s,
        g,
        { channel: A, compact: p, isSystemMessage: E } = e,
        v = (0, h.Ay)(A),
        I = (0, r.bG)([f.A], () => f.A.getCount(A.id)),
        _ =
            ((t = A),
            (l = (0, r.bG)([f.A], () => f.A.getMostRecentMessage(t.id))),
            (s = (0, r.bG)([f.A], () => f.A.getCount(t.id))),
            (g = (0, C.JO)(t)),
            t.threadMetadata?.archived
                ? k.intl.string(k.t.ZTo4HS)
                : null == s || 0 === s
                  ? k.intl.string(k.t.HYtNyE)
                  : null == l
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)("span", { children: k.intl.string(k.t.ZTo4HS) }),
                              (0, i.jsx)("span", { className: L.vE, children: (0, C.aK)(g) }),
                          ],
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(y, { message: l, channel: t }),
                              (0, i.jsx)("span", { className: L.vE, children: (0, C.aK)(g) }),
                          ],
                      })),
        j = null != I && I > 0;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)("div", { className: a()(L.GI, { [L.E]: !p, [L.E_]: E }) }),
            (0, i.jsx)(o.D, {
                onClick: function (e) {
                    e.stopPropagation(), (0, S.JA)(A, e.shiftKey);
                },
                onKeyDown: function (e) {
                    e.stopPropagation();
                    let t = !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey,
                        n = e.shiftKey && !(e.altKey || e.ctrlKey || e.metaKey);
                    (e.key === b.dh.SPACE || e.key === b.dh.ENTER) && (e.preventDefault(), (t || n) && (0, S.JA)(A, n));
                },
                onContextMenu: function (e) {
                    (0, m.L3)(e, async () => {
                        let { default: e } = await Promise.all([
                            n.e("26132"),
                            n.e("91763"),
                            n.e("38730"),
                            n.e("34971"),
                            n.e("3998"),
                            n.e("43266"),
                            n.e("91671"),
                            n.e("12255"),
                            n.e("40959"),
                            n.e("96804"),
                            n.e("21060"),
                            n.e("98725"),
                            n.e("40175"),
                            n.e("43746"),
                            n.e("90554"),
                            n.e("37588"),
                            n.e("99011"),
                            n.e("85802"),
                            n.e("65200"),
                            n.e("26250"),
                            n.e("51212"),
                            n.e("84615"),
                        ]).then(n.bind(n, 612826));
                        return (t) => (0, i.jsx)(e, { channel: A, ...t });
                    });
                },
                "aria-roledescription": k.intl.string(k.t["8ipxiY"]),
                className: a()(L.kL, { [L.og]: E }),
                children: (0, i.jsxs)(d.R, {
                    children: [
                        (0, i.jsxs)("div", {
                            className: L.kq,
                            children: [
                                (0, i.jsx)(c.A, { children: k.intl.string(k.t["7Xm5QI"]) }),
                                (0, i.jsx)("span", { className: L.UU, children: v }),
                                (0, i.jsx)("span", {
                                    className: L.lO,
                                    "aria-hidden": !j,
                                    children: (0, x.ub)(I, A.id),
                                }),
                            ],
                        }),
                        (0, i.jsx)(u.E, {
                            variant: "text-sm/normal",
                            "aria-hidden": !0,
                            lineClamp: 1,
                            color: "text-default",
                            className: L.sb,
                            children: _,
                        }),
                    ],
                }),
            }),
        ],
    });
}
