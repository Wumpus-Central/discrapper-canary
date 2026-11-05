(l.r(n), l.d(n, { default: () => W }), l(321073));
var i = l(477900),
    t = l(582128),
    a = l(503698),
    r = l.n(a),
    d = l(806163),
    s = l(152367),
    o = l(442433),
    u = l(636449),
    c = l(263715),
    p = l(283001),
    h = l(751841),
    j = l(381991),
    x = l(111582),
    m = l(16619),
    g = l(855986),
    f = l(165862),
    C = l(477782),
    b = l(972013),
    A = l(927731),
    k = l(191850),
    N = l(792996);
function I(e) {
    let { onImport: n, importDisabled: l } = e,
        t = (0, g.bG)([b.A], () => b.A.isPinned());
    return (0, i.jsxs)(f.W, {
        navId: "conjure-rail",
        onClose: o.Z_,
        onSelect: o.Z_,
        "aria-label": N.intl.string(k.default.uk6jhJ),
        children: [
            (0, i.jsxs)(C.rX, {
                children: [
                    (0, i.jsx)(C.Dr, { id: "new-project", label: N.intl.string(k.default["34+ZcS"]), action: j.o }),
                    (0, i.jsx)(C.Dr, { id: "import", label: N.intl.string(k.default.tx8Azx), disabled: l, action: n }),
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
var S = l(837381),
    w = l(812993),
    _ = l(289873),
    v = l(602853),
    E = l(646514),
    M = l(862328),
    D = l(67811),
    y = l(941971),
    z = l(900848),
    L = l(550591),
    R = l(522265),
    Z = l(104299),
    B = l(738601),
    J = l(840091);
let P = { width: (0, w.o6)(0) },
    F = { width: 12, height: 12 },
    U = t.memo(function (e) {
        let { project: n } = e,
            l = n.id,
            [a, d] = t.useState(!1),
            s = (0, S.Vd)(`conjure-${l}`, 2),
            o = (0, B.yX)(l),
            { url: u, glyphSize: c } = (0, R.A)(n, (0, v.r)(E.A.modules.guildbar.AVATAR_SIZE)),
            p = [
                n.name,
                "working" === o
                    ? N.intl.string(k.default["Y8pS+n"])
                    : "unread" === o
                      ? N.intl.string(k.default["N+3Pzk"])
                      : null,
            ]
                .filter((e) => null != e)
                .join(", "),
            h = t.useCallback(() => (0, j.A)(l), [l]);
        return (0, i.jsxs)(z.c, {
            children: [
                (0, i.jsx)(y.A, { overlay: !0, hovered: a, selected: !1 }),
                (0, i.jsx)(L.A, {
                    hideOnClick: !0,
                    text: n.name,
                    selected: !1,
                    children: (0, i.jsx)(M.Q, {
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
                                              applicationId: n.application_id,
                                              name: n.name,
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
var X = l(652215);
function G() {
    (0, j.A)(null);
}
function O(e) {
    (0, j.A)(e, "create");
}
function W(e) {
    let { projects: n } = e,
        l = (0, h.tb)((0, d.zy)().pathname),
        a = (0, m.rX)("ConjureRailFolder"),
        j = (0, x.A)(a, O),
        { open: g } = j,
        f = n.length > 0,
        C = t.useMemo(() => {
            let e = (0, c.xW)({
                folderId: u.U.CONJURE_FOLDER,
                folderName: N.intl.string(k.default.uk6jhJ),
                expanded: f,
                guildIds: [],
            });
            for (let l of n) e.children.push((0, c.EL)(l.id, e.id));
            return e;
        }, [n, f]),
        b = t.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        A = t.useCallback(
            (e) => {
                let n = e.type === c.PJ.GUILD ? b.get(e.id) : null;
                return null != n ? (0, i.jsx)(U, { project: n }, n.id) : null;
            },
            [b],
        ),
        S = t.useCallback((e) => (0, o.jA)(e, () => (0, i.jsx)(I, { onImport: g, importDisabled: null == a })), [g, a]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.A, {
                folderNode: C,
                selected: l,
                expanded: f,
                draggable: !1,
                sorting: !1,
                onExpandCollapse: X.tEg,
                onHeaderClick: G,
                onContextMenu: S,
                folderButtonSize: "icon",
                folderButtonContent: (0, i.jsx)("div", {
                    className: r()(J.RB, { [J.mv]: l }),
                    children: (0, i.jsx)(s.MagicWandIcon, { size: "md", color: "currentColor" }),
                }),
                renderChildNode: A,
            }),
            j.input,
        ],
    });
}
