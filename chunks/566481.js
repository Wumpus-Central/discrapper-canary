(n.r(l), n.d(l, { default: () => G }), n(321073));
var i = n(477900),
    t = n(582128),
    r = n(503698),
    d = n.n(r),
    a = n(806163),
    s = n(152367),
    o = n(442433),
    u = n(636449),
    c = n(263715),
    j = n(283001),
    p = n(751841),
    h = n(381991),
    x = n(111582),
    g = n(16619),
    f = n(855986),
    m = n(165862),
    A = n(477782),
    b = n(972013),
    C = n(927731),
    k = n(191850),
    v = n(792996);
function w(e) {
    let { onImport: l, importDisabled: n } = e,
        t = (0, f.bG)([b.A], () => b.A.isPinned());
    return (0, i.jsxs)(m.W, {
        navId: "conjure-rail",
        onClose: o.Z_,
        onSelect: o.Z_,
        "aria-label": v.intl.string(k.default.uk6jhJ),
        children: [
            (0, i.jsxs)(A.rX, {
                children: [
                    (0, i.jsx)(A.Dr, { id: "new-project", label: v.intl.string(k.default["34+ZcS"]), action: h.o }),
                    (0, i.jsx)(A.Dr, { id: "import", label: v.intl.string(k.default.tx8Azx), disabled: n, action: l }),
                ],
            }),
            (0, i.jsx)(A.rX, {
                children: t
                    ? (0, i.jsx)(A.Dr, { id: "unpin", label: v.intl.string(k.default.dFMslg), action: C.l })
                    : (0, i.jsx)(A.Dr, { id: "pin", label: v.intl.string(k.default["DE7U+m"]), action: C._ }),
            }),
        ],
    });
}
var _ = n(837381),
    D = n(812993),
    E = n(602853),
    I = n(646514),
    M = n(862328),
    N = n(67811),
    S = n(941971),
    z = n(900848),
    y = n(550591),
    B = n(522265),
    J = n(104299),
    L = n(738601),
    R = n(97101),
    Z = n(840091);
let F = { width: (0, D.o6)(0) },
    U = { width: 12, height: 12 },
    X = t.memo(function (e) {
        let { project: l } = e,
            n = l.id,
            [r, d] = t.useState(!1),
            a = (0, _.Vd)(`conjure-${n}`, 2),
            s = (0, L.yX)(n),
            { url: o, glyphSize: u } = (0, B.A)(l, (0, E.r)(I.A.modules.guildbar.AVATAR_SIZE)),
            c = [
                l.name,
                "working" === s
                    ? v.intl.string(k.default["Y8pS+n"])
                    : "unread" === s
                      ? v.intl.string(k.default["N+3Pzk"])
                      : null,
            ]
                .filter((e) => null != e)
                .join(", "),
            j = t.useCallback(() => (0, h.A)(n), [n]);
        return (0, i.jsxs)(z.c, {
            children: [
                (0, i.jsx)(S.A, { overlay: !0, hovered: r, selected: !1 }),
                (0, i.jsx)(y.A, {
                    hideOnClick: !0,
                    text: l.name,
                    selected: !1,
                    children: (0, i.jsx)(M.Q, {
                        selected: !0,
                        lowerBadge: null != s ? (0, i.jsx)(R.A, { activity: s }) : null,
                        lowerBadgeSize: "unread" === s ? U : F,
                        children: (0, i.jsx)(N.j, {
                            ...a,
                            ariaLabel: c,
                            icon: o,
                            selected: r,
                            onClick: j,
                            onMouseEnter: () => d(!0),
                            onMouseLeave: () => d(!1),
                            children:
                                null == o
                                    ? (0, i.jsx)("div", {
                                          className: Z.JZ,
                                          children: (0, i.jsx)(J.A, {
                                              applicationId: l.application_id,
                                              name: l.name,
                                              glyphSize: u,
                                              className: Z.Q_,
                                          }),
                                      })
                                    : null,
                        }),
                    }),
                }),
            ],
        });
    });
var O = n(652215);
function P() {
    (0, h.A)(null);
}
function W(e) {
    (0, h.A)(e, "create");
}
function G(e) {
    let { projects: l } = e,
        n = (0, p.tb)((0, a.zy)().pathname),
        r = (0, g.rX)("ConjureRailFolder"),
        h = (0, x.A)(r, W),
        { open: f } = h,
        m = l.length > 0,
        A = t.useMemo(() => {
            let e = (0, c.xW)({
                folderId: u.U.CONJURE_FOLDER,
                folderName: v.intl.string(k.default.uk6jhJ),
                expanded: m,
                guildIds: [],
            });
            for (let n of l) e.children.push((0, c.EL)(n.id, e.id));
            return e;
        }, [l, m]),
        b = t.useMemo(() => new Map(l.map((e) => [e.id, e])), [l]),
        C = t.useCallback(
            (e) => {
                let l = e.type === c.PJ.GUILD ? b.get(e.id) : null;
                return null != l ? (0, i.jsx)(X, { project: l }, l.id) : null;
            },
            [b],
        ),
        _ = t.useCallback((e) => (0, o.jA)(e, () => (0, i.jsx)(w, { onImport: f, importDisabled: null == r })), [f, r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(j.A, {
                folderNode: A,
                selected: n,
                expanded: m,
                draggable: !1,
                sorting: !1,
                onExpandCollapse: O.tEg,
                onHeaderClick: P,
                onContextMenu: _,
                folderButtonSize: "icon",
                folderButtonContent: (0, i.jsx)("div", {
                    className: d()(Z.RB, { [Z.mv]: n }),
                    children: (0, i.jsx)(s.MagicWandIcon, { size: "md", color: "currentColor" }),
                }),
                renderChildNode: C,
            }),
            h.input,
        ],
    });
}
