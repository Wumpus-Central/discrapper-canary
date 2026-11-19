(l.r(e), l.d(e, { default: () => F }));
var t = l(477900),
    i = l(582128),
    r = l(503698),
    d = l.n(r),
    a = l(806163),
    o = l(152367),
    s = l(442433),
    u = l(636449),
    c = l(263715),
    p = l(283001),
    x = l(751841),
    j = l(381991),
    f = l(111582),
    g = l(16619),
    h = l(855986),
    b = l(165862),
    C = l(477782),
    m = l(972013),
    k = l(927731),
    A = l(191850),
    D = l(792996);
function _(n) {
    let { onImport: e, importDisabled: l } = n,
        i = (0, h.bG)([m.A], () => m.A.isPinned());
    return (0, t.jsxs)(b.W, {
        navId: "conjure-rail",
        onClose: s.Z_,
        onSelect: s.Z_,
        "aria-label": D.intl.string(A.default.uk6jhJ),
        children: [
            (0, t.jsxs)(C.rX, {
                children: [
                    (0, t.jsx)(C.Dr, { id: "new-project", label: D.intl.string(A.default["34+ZcS"]), action: j.o }),
                    (0, t.jsx)(C.Dr, { id: "import", label: D.intl.string(A.default.tx8Azx), disabled: l, action: e }),
                ],
            }),
            (0, t.jsx)(C.rX, {
                children: i
                    ? (0, t.jsx)(C.Dr, { id: "unpin", label: D.intl.string(A.default.dFMslg), action: k.l })
                    : (0, t.jsx)(C.Dr, { id: "pin", label: D.intl.string(A.default["DE7U+m"]), action: k._ }),
            }),
        ],
    });
}
var v = l(652215),
    E = l(840091);
function I() {
    (0, j.A)(null);
}
function N(n) {
    (0, j.A)(n, "create");
}
function z() {
    return null;
}
function F() {
    let n = (0, x.tb)((0, a.zy)().pathname),
        e = (0, g.rX)("ConjureRailFolder"),
        l = (0, f.A)(N),
        { open: r } = l,
        j = i.useMemo(
            () =>
                (0, c.xW)({
                    folderId: u.U.CONJURE_FOLDER,
                    folderName: D.intl.string(A.default.uk6jhJ),
                    expanded: !1,
                    guildIds: [],
                }),
            [],
        ),
        h = i.useCallback((n) => (0, s.jA)(n, () => (0, t.jsx)(_, { onImport: r, importDisabled: null == e })), [r, e]);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(p.A, {
                folderNode: j,
                selected: n,
                expanded: !1,
                draggable: !1,
                sorting: !1,
                onExpandCollapse: v.tEg,
                onHeaderClick: I,
                onContextMenu: h,
                folderButtonSize: "icon",
                folderButtonContent: (0, t.jsx)("div", {
                    className: d()(E.RB, { [E.mv]: n }),
                    children: (0, t.jsx)(o.MagicWandIcon, { size: "md", color: "currentColor" }),
                }),
                renderChildNode: z,
            }),
            l.input,
        ],
    });
}
