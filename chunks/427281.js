n.d(t, { default: () => x }), n(323874), n(14289), n(35956);
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(189213),
    o = n(331322),
    c = n(292666),
    u = n(150934),
    d = n(565150),
    g = n(650583),
    p = n(375708),
    h = n(910162);
function f(e) {
    let { file: t } = e,
        [n, l] = a.useState();
    return (
        a.useEffect(() => {
            if (null == t) return void l(void 0);
            let e = URL.createObjectURL(t);
            return (
                l(e),
                () => {
                    l(void 0), URL.revokeObjectURL(e);
                }
            );
        }, [t]),
        (0, i.jsx)("img", { src: n, className: h.imageFilePreviewImg, "aria-hidden": !0, alt: "" })
    );
}
function j(e) {
    let { upload: t } = e;
    return t.item.platform !== d.xz.WEB
        ? null
        : t.isImage
          ? (0, i.jsx)(f, { file: t.item.file })
          : (0, i.jsx)("div", { className: s()(h.fileIcon, { [h[t.classification ?? ""]]: !0 }) });
}
function x(e) {
    let { upload: t, transitionState: n, disableSpoiler: l, onClose: s, onSubmit: d } = e,
        [h, f] = a.useState(t.spoiler),
        [x, m] = a.useState(t.filename ?? ""),
        [v, k] = a.useState(t.description ?? ""),
        C = () => {
            d({ name: x, description: v, spoiler: h }), s();
        };
    return (0, i.jsx)(r.Modal, {
        transitionState: n,
        onClose: s,
        title: p.intl.string(p.t.Y8ujqr),
        actions: [
            { variant: "secondary", text: p.intl.string(p.t["ETE/oC"]), onClick: s },
            { variant: "primary", text: p.intl.string(p.t["TY+auE"]), onClick: C },
        ],
        children: (0, i.jsxs)(o.B, {
            gap: 24,
            children: [
                (0, i.jsxs)(o.B, {
                    gap: 16,
                    children: [
                        (0, i.jsx)(j, { upload: t }),
                        (0, i.jsx)(c.k, {
                            label: p.intl.string(p.t.ILJuBq),
                            value: x,
                            onChange: m,
                            onKeyDown: (e) => {
                                e.key === g.dh.ENTER && (e.preventDefault(), C());
                            },
                        }),
                        t.isImage
                            ? (0, i.jsx)(c.k, {
                                  label: p.intl.string(p.t.eOB2eR),
                                  placeholder: p.intl.string(p.t.RNH1jn),
                                  value: v,
                                  onChange: k,
                                  onKeyDown: (e) => {
                                      e.key === g.dh.ENTER && (e.preventDefault(), C());
                                  },
                              })
                            : null,
                    ],
                }),
                !0 !== l && (0, i.jsx)(u.S, { checked: h, onChange: f, label: p.intl.string(p.t["gsI+xC"]) }),
            ],
        }),
    });
}
