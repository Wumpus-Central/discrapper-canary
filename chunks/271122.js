(l.r(n), l.d(n, { default: () => q }), l(321073));
var t = l(477900),
    i = l(582128),
    a = l(503698),
    r = l.n(a),
    d = l(806163),
    s = l(152367),
    o = l(442433),
    u = l(636449),
    c = l(263715),
    p = l(299874),
    h = l(751841),
    j = l(381991),
    x = l(111582),
    m = l(16619),
    f = l(17928),
    g = l(980707),
    C = l(477782),
    b = l(972013),
    A = l(927731),
    k = l(809526),
    N = l(105292);
function S(e) {
    let { onImport: n, importDisabled: l } = e,
        i = (0, f.bG)([b.A], () => b.A.isPinned());
    return (0, t.jsxs)(g.W, {
        navId: "conjure-rail",
        onClose: o.Z_,
        onSelect: o.Z_,
        "aria-label": N.intl.string(k.default.uk6jhJ),
        children: [
            (0, t.jsxs)(C.rX, {
                children: [
                    (0, t.jsx)(C.Dr, { id: "new-project", label: N.intl.string(k.default["34+ZcS"]), action: j.o3 }),
                    (0, t.jsx)(C.Dr, { id: "import", label: N.intl.string(k.default.tx8Azx), disabled: l, action: n }),
                ],
            }),
            (0, t.jsx)(C.rX, {
                children: i
                    ? (0, t.jsx)(C.Dr, { id: "unpin", label: N.intl.string(k.default.dFMslg), action: A.l })
                    : (0, t.jsx)(C.Dr, { id: "pin", label: N.intl.string(k.default["DE7U+m"]), action: A._ }),
            }),
        ],
    });
}
var w = l(837381),
    I = l(812993),
    _ = l(289873),
    v = l(602853),
    y = l(661531),
    E = l(862328),
    D = l(67811),
    M = l(941971),
    z = l(900848),
    L = l(550591),
    R = l(522265),
    Z = l(649045),
    B = l(738601),
    J = l(840091);
let P = { width: (0, I.o6)(0) },
    F = { width: 12, height: 12 },
    U = i.memo(function (e) {
        let { project: n } = e,
            l = n.id,
            [a, d] = i.useState(!1),
            s = (0, w.Vd)(`conjure-${l}`, 2),
            o = (0, B.yX)(l),
            { url: u, glyphSize: c } = (0, R.A)(n, (0, v.r)(y.A.modules.guildbar.AVATAR_SIZE)),
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
            h = i.useCallback(() => (0, j.Ay)(l), [l]);
        return (0, t.jsxs)(z.c, {
            children: [
                (0, t.jsx)(M.A, { overlay: !0, hovered: a, selected: !1 }),
                (0, t.jsx)(L.A, {
                    hideOnClick: !0,
                    text: n.name,
                    selected: !1,
                    children: (0, t.jsx)(E.Q, {
                        selected: !0,
                        lowerBadge: (function (e) {
                            switch (e) {
                                case "working":
                                    return (0, t.jsx)("span", {
                                        className: J.qS,
                                        "aria-hidden": !0,
                                        children: (0, t.jsx)(_.y, {
                                            type: _.t.SPINNING_CIRCLE_SIMPLE,
                                            className: J.u1,
                                            itemClassName: J.pu,
                                        }),
                                    });
                                case "unread":
                                    return (0, t.jsx)("span", { className: r()(J.qS, J.Zm), "aria-hidden": !0 });
                                default:
                                    return null;
                            }
                        })(o),
                        lowerBadgeSize: "unread" === o ? F : P,
                        children: (0, t.jsx)(D.j, {
                            ...s,
                            ariaLabel: p,
                            icon: u,
                            selected: a,
                            onClick: h,
                            onMouseEnter: () => d(!0),
                            onMouseLeave: () => d(!1),
                            children:
                                null == u
                                    ? (0, t.jsx)("div", {
                                          className: J.JZ,
                                          children: (0, t.jsx)(Z.A, {
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
    (0, j.Ay)(null);
}
function O(e) {
    (0, j.Ay)(e, "create");
}
function q(e) {
    let { projects: n } = e,
        l = (0, h.tb)((0, d.zy)().pathname),
        a = (0, m.rX)("ConjureRailFolder"),
        j = (0, x.A)(a, O),
        { open: f } = j,
        g = n.length > 0,
        C = i.useMemo(() => {
            let e = (0, c.xW)({
                folderId: u.U.CONJURE_FOLDER,
                folderName: N.intl.string(k.default.uk6jhJ),
                expanded: g,
                guildIds: [],
            });
            for (let l of n) e.children.push((0, c.EL)(l.id, e.id));
            return e;
        }, [n, g]),
        b = i.useMemo(() => new Map(n.map((e) => [e.id, e])), [n]),
        A = i.useCallback(
            (e) => {
                let n = e.type === c.PJ.GUILD ? b.get(e.id) : null;
                return null != n ? (0, t.jsx)(U, { project: n }, n.id) : null;
            },
            [b],
        ),
        w = i.useCallback((e) => (0, o.jA)(e, () => (0, t.jsx)(S, { onImport: f, importDisabled: null == a })), [f, a]);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(p.A, {
                folderNode: C,
                selected: l,
                expanded: g,
                draggable: !1,
                sorting: !1,
                onExpandCollapse: X.tEg,
                onHeaderClick: G,
                onContextMenu: w,
                folderButtonSize: "icon",
                folderButtonContent: (0, t.jsx)("div", {
                    className: r()(J.RB, { [J.mv]: l }),
                    children: (0, t.jsx)(s.D, { size: "md", color: "currentColor" }),
                }),
                renderChildNode: A,
            }),
            j.input,
        ],
    });
}
