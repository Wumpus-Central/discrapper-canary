(n.r(l), n.d(l, { default: () => O }), n(321073));
var i = n(477900),
    t = n(582128),
    a = n(503698),
    r = n.n(a),
    d = n(806163),
    s = n(152367),
    o = n(442433),
    u = n(636449),
    c = n(263715),
    p = n(299874),
    h = n(751841),
    j = n(381991),
    x = n(111582),
    m = n(16619),
    g = n(17928),
    f = n(980707),
    C = n(477782),
    b = n(972013),
    A = n(927731),
    k = n(809526),
    N = n(105292);
function S(e) {
    let { onImport: l, importDisabled: n } = e,
        t = (0, g.bG)([b.A], () => b.A.isPinned());
    return (0, i.jsxs)(f.W, {
        navId: "conjure-rail",
        onClose: o.Z_,
        onSelect: o.Z_,
        "aria-label": N.intl.string(k.default.uk6jhJ),
        children: [
            (0, i.jsxs)(C.rX, {
                children: [
                    (0, i.jsx)(C.Dr, { id: "new-project", label: N.intl.string(k.default["34+ZcS"]), action: j.o3 }),
                    (0, i.jsx)(C.Dr, { id: "import", label: N.intl.string(k.default.tx8Azx), disabled: n, action: l }),
                ],
            }),
            (0, i.jsx)(C.rX, {
                children: t
                    ? (0, i.jsx)(C.Dr, { id: "unpin", label: N.intl.string(k.default.dFMslg), action: A.l })
                    : (0, i.jsx)(C.Dr, { id: "pin", label: N.intl.string(k.default["DE7U+m"]), action: A._ }),
            }),
        ],
    });
}
var w = n(837381),
    I = n(812993),
    _ = n(289873),
    v = n(602853),
    y = n(661531),
    E = n(862328),
    D = n(67811),
    M = n(941971),
    z = n(900848),
    L = n(550591),
    R = n(522265),
    Z = n(649045),
    B = n(738601),
    J = n(840091);
let P = { width: (0, I.o6)(0) },
    F = { width: 12, height: 12 },
    U = t.memo(function (e) {
        let { project: l } = e,
            n = l.id,
            [a, d] = t.useState(!1),
            s = (0, w.Vd)(`conjure-${n}`, 2),
            o = (0, B.yX)(n),
            { url: u, glyphSize: c } = (0, R.A)(l, (0, v.r)(y.A.modules.guildbar.AVATAR_SIZE)),
            p = [
                l.name,
                "working" === o
                    ? N.intl.string(k.default["Y8pS+n"])
                    : "unread" === o
                      ? N.intl.string(k.default["N+3Pzk"])
                      : null,
            ]
                .filter((e) => null != e)
                .join(", "),
            h = t.useCallback(() => (0, j.Ay)(n), [n]);
        return (0, i.jsxs)(z.c, {
            children: [
                (0, i.jsx)(M.A, { overlay: !0, hovered: a, selected: !1 }),
                (0, i.jsx)(L.A, {
                    hideOnClick: !0,
                    text: l.name,
                    selected: !1,
                    children: (0, i.jsx)(E.Q, {
                        selected: !0,
                        lowerBadge: (function (e) {
                            switch (e) {
                                case "working":
                                    return (0, i.jsx)("span", {
                                        className: J.qS,
                                        "aria-hidden": !0,
                                        children: (0, i.jsx)(_.y, {
                                            type: _.t.SPINNING_CIRCLE_SIMPLE,
                                            className: J.u1,
                                            itemClassName: J.pu,
                                        }),
                                    });
                                case "unread":
                                    return (0, i.jsx)("span", { className: r()(J.qS, J.Zm), "aria-hidden": !0 });
                                default:
                                    return null;
                            }
                        })(o),
                        lowerBadgeSize: "unread" === o ? F : P,
                        children: (0, i.jsx)(D.j, {
                            ...s,
                            ariaLabel: p,
                            icon: u,
                            selected: a,
                            onClick: h,
                            onMouseEnter: () => d(!0),
                            onMouseLeave: () => d(!1),
                            children:
                                null == u
                                    ? (0, i.jsx)("div", {
                                          className: J.JZ,
                                          children: (0, i.jsx)(Z.A, {
                                              applicationId: l.application_id,
                                              name: l.name,
                                              glyphSize: c,
                                              className: J.Q_,
                                          }),
                                      })
                                    : null,
                        }),
                    }),
                }),
            ],
        });
    });
var X = n(652215);
function G() {
    (0, j.Ay)(null);
}
function O(e) {
    let { projects: l } = e,
        n = (0, h.tb)((0, d.zy)().pathname),
        a = (0, m.rX)("ConjureRailFolder"),
        g = (0, x.A)(a, j.Ay),
        { open: f } = g,
        C = l.length > 0,
        b = t.useMemo(() => {
            let e = (0, c.xW)({
                folderId: u.U.CONJURE_FOLDER,
                folderName: N.intl.string(k.default.uk6jhJ),
                expanded: C,
                guildIds: [],
            });
            for (let n of l) e.children.push((0, c.EL)(n.id, e.id));
            return e;
        }, [l, C]),
        A = t.useMemo(() => new Map(l.map((e) => [e.id, e])), [l]),
        w = t.useCallback(
            (e) => {
                let l = e.type === c.PJ.GUILD ? A.get(e.id) : null;
                return null != l ? (0, i.jsx)(U, { project: l }, l.id) : null;
            },
            [A],
        ),
        I = t.useCallback((e) => (0, o.jA)(e, () => (0, i.jsx)(S, { onImport: f, importDisabled: null == a })), [f, a]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.A, {
                folderNode: b,
                selected: n,
                expanded: C,
                draggable: !1,
                sorting: !1,
                onExpandCollapse: X.tEg,
                onHeaderClick: G,
                onContextMenu: I,
                folderButtonSize: "icon",
                folderButtonContent: (0, i.jsx)("div", {
                    className: r()(J.RB, { [J.mv]: n }),
                    children: (0, i.jsx)(s.D, { size: "md", color: "currentColor" }),
                }),
                renderChildNode: w,
            }),
            g.input,
        ],
    });
}
