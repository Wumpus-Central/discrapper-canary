(n.r(l), n.d(l, { default: () => O }), n(321073));
var t = n(477900),
    r = n(582128),
    i = n(503698),
    d = n.n(i),
    a = n(806163),
    s = n(152367),
    o = n(442433),
    u = n(636449),
    c = n(263715),
    j = n(299874),
    h = n(751841),
    p = n(381991),
    x = n(111582),
    m = n(16619),
    f = n(17928),
    g = n(980707),
    C = n(477782),
    b = n(972013),
    k = n(927731),
    A = n(87501),
    N = n(105292);
function w(e) {
    let { onImport: l, importDisabled: n } = e,
        r = (0, f.bG)([b.A], () => b.A.isPinned());
    return (0, t.jsxs)(g.W, {
        navId: "conjure-rail",
        onClose: o.Z_,
        onSelect: o.Z_,
        "aria-label": N.intl.string(A.default.uk6jhJ),
        children: [
            (0, t.jsxs)(C.rX, {
                children: [
                    (0, t.jsx)(C.Dr, { id: "new-project", label: N.intl.string(A.default["34+ZcS"]), action: p.o3 }),
                    (0, t.jsx)(C.Dr, { id: "import", label: N.intl.string(A.default.tx8Azx), disabled: n, action: l }),
                ],
            }),
            (0, t.jsx)(C.rX, {
                children: r
                    ? (0, t.jsx)(C.Dr, { id: "unpin", label: N.intl.string(A.default.dFMslg), action: k.l })
                    : (0, t.jsx)(C.Dr, { id: "pin", label: N.intl.string(A.default["DE7U+m"]), action: k._ }),
            }),
        ],
    });
}
var S = n(837381),
    E = n(812993),
    I = n(289873),
    v = n(602853),
    y = n(661531),
    D = n(862328),
    _ = n(67811),
    M = n(323384),
    z = n(941971),
    L = n(900848),
    R = n(550591),
    B = n(522265),
    P = n(738601),
    Z = n(840091);
let F = { width: (0, E.o6)(0) },
    J = { width: 12, height: 12 },
    U = r.memo(function (e) {
        let { project: l } = e,
            n = l.id,
            [i, a] = r.useState(!1),
            s = (0, S.Vd)(`conjure-${n}`, 2),
            o = (0, P.yX)(n),
            { url: u } = (0, B.A)(l, (0, v.r)(y.A.modules.guildbar.AVATAR_SIZE)),
            c = [
                l.name,
                "working" === o
                    ? N.intl.string(A.default["Y8pS+n"])
                    : "unread" === o
                      ? N.intl.string(A.default["N+3Pzk"])
                      : null,
            ]
                .filter((e) => null != e)
                .join(", "),
            j = r.useCallback(() => (0, p.Ay)(n), [n]);
        return (0, t.jsxs)(L.c, {
            children: [
                (0, t.jsx)(z.A, { overlay: !0, hovered: i, selected: !1 }),
                (0, t.jsx)(R.A, {
                    hideOnClick: !0,
                    text: l.name,
                    selected: !1,
                    children: (0, t.jsx)(D.Q, {
                        selected: !0,
                        lowerBadge: (function (e) {
                            switch (e) {
                                case "working":
                                    return (0, t.jsx)("span", {
                                        className: Z.qS,
                                        "aria-hidden": !0,
                                        children: (0, t.jsx)(I.y, {
                                            type: I.t.SPINNING_CIRCLE_SIMPLE,
                                            className: Z.u1,
                                            itemClassName: Z.pu,
                                        }),
                                    });
                                case "unread":
                                    return (0, t.jsx)("span", { className: d()(Z.qS, Z.Zm), "aria-hidden": !0 });
                                default:
                                    return null;
                            }
                        })(o),
                        lowerBadgeSize: "unread" === o ? J : F,
                        children: (0, t.jsx)(_.j, {
                            ...s,
                            ariaLabel: c,
                            icon: u,
                            selected: i,
                            onClick: j,
                            onMouseEnter: () => a(!0),
                            onMouseLeave: () => a(!1),
                            children: null == u ? (0, t.jsx)(M.k, { size: "md", color: "currentColor" }) : null,
                        }),
                    }),
                }),
            ],
        });
    });
var X = n(652215);
function G() {
    (0, p.Ay)(null);
}
function O(e) {
    let { projects: l } = e,
        n = (0, h.tb)((0, a.zy)().pathname),
        i = (0, m.rX)("ConjureRailFolder"),
        f = (0, x.A)(i, p.Ay),
        { open: g } = f,
        C = l.length > 0,
        b = r.useMemo(() => {
            let e = (0, c.xW)({
                folderId: u.U.CONJURE_FOLDER,
                folderName: N.intl.string(A.default.uk6jhJ),
                expanded: C,
                guildIds: [],
            });
            for (let n of l) e.children.push((0, c.EL)(n.id, e.id));
            return e;
        }, [l, C]),
        k = r.useMemo(() => new Map(l.map((e) => [e.id, e])), [l]),
        S = r.useCallback(
            (e) => {
                let l = e.type === c.PJ.GUILD ? k.get(e.id) : null;
                return null != l ? (0, t.jsx)(U, { project: l }, l.id) : null;
            },
            [k],
        ),
        E = r.useCallback((e) => (0, o.jA)(e, () => (0, t.jsx)(w, { onImport: g, importDisabled: null == i })), [g, i]);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(j.A, {
                folderNode: b,
                selected: n,
                expanded: C,
                draggable: !1,
                sorting: !1,
                onExpandCollapse: X.tEg,
                onHeaderClick: G,
                onContextMenu: E,
                folderButtonSize: "icon",
                folderButtonContent: (0, t.jsx)("div", {
                    className: d()(Z.RB, { [Z.mv]: n }),
                    children: (0, t.jsx)(s.D, { size: "md", color: "currentColor" }),
                }),
                renderChildNode: S,
            }),
            f.input,
        ],
    });
}
