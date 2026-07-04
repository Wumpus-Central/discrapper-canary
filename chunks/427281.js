t.d(i, { ModifyMosaicAttachmentModal: () => C, default: () => k }), t(323874), t(14289), t(35956), t(938796);
var n = t(627968),
    s = t(64700),
    l = t(503698),
    a = t.n(l),
    r = t(665260),
    o = t(189213),
    c = t(331322),
    u = t(292666),
    d = t(150934),
    p = t(565150),
    m = t(465856),
    f = t(644447),
    g = t(652215),
    x = t(381941),
    h = t(650583),
    j = t(375708),
    v = t(910162);
function b(e) {
    return (0, n.jsx)("img", { src: e.src ?? void 0, className: v.imageFilePreviewImg, "aria-hidden": !0, alt: "" });
}
function E(e) {
    let { file: i } = e,
        [t, l] = s.useState();
    return (
        s.useEffect(() => {
            if (null == i) return void l(void 0);
            let e = URL.createObjectURL(i);
            return (
                l(e),
                () => {
                    l(void 0), URL.revokeObjectURL(e);
                }
            );
        }, [i]),
        (0, n.jsx)(b, { src: t })
    );
}
function I(e) {
    let { upload: i } = e;
    return i.item.platform !== p.xz.WEB
        ? null
        : i.isImage
          ? (0, n.jsx)(E, { file: i.item.file })
          : (0, n.jsx)("div", { className: a()(v.fileIcon, { [v[i.classification ?? ""]]: !0 }) });
}
function S(e) {
    let {
            preview: i,
            filename: t,
            description: l,
            spoiler: a,
            isImage: r,
            isVideo: p,
            disableFilename: m,
            disableSpoiler: f,
            transitionState: g,
            onClose: v,
            onSubmit: b,
        } = e,
        [E, I] = s.useState(t ?? ""),
        [S, k] = s.useState(l ?? ""),
        [C, y] = s.useState(a),
        R = s.useMemo(() => E.startsWith(x.MO), [E]),
        L = () => {
            b({ name: E, description: S, spoiler: C }), v();
        };
    return (0, n.jsx)(o.Modal, {
        transitionState: g,
        onClose: v,
        title: j.intl.string(j.t.Y8ujqr),
        actions: [
            { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: v },
            { variant: "primary", text: j.intl.string(j.t["TY+auE"]), onClick: L },
        ],
        children: (0, n.jsxs)(c.B, {
            gap: 24,
            children: [
                (0, n.jsxs)(c.B, {
                    gap: 16,
                    children: [
                        i,
                        (0, n.jsx)(u.k, {
                            label: j.intl.string(j.t.ILJuBq),
                            value: E,
                            onChange: I,
                            onKeyDown: (e) => {
                                e.key === h.dh.ENTER && (e.preventDefault(), L());
                            },
                            disabled: m,
                        }),
                        r || p
                            ? (0, n.jsx)(u.k, {
                                  label: j.intl.string(j.t.eOB2eR),
                                  placeholder: j.intl.string(j.t.RNH1jn),
                                  value: S,
                                  onChange: k,
                                  onKeyDown: (e) => {
                                      e.key === h.dh.ENTER && (e.preventDefault(), L());
                                  },
                              })
                            : null,
                    ],
                }),
                !0 !== f &&
                    (0, n.jsx)(d.S, { checked: C || R, disabled: R, onChange: y, label: j.intl.string(j.t["gsI+xC"]) }),
            ],
        }),
    });
}
function k(e) {
    let { upload: i, transitionState: t, disableSpoiler: s, onClose: l, onSubmit: a } = e;
    return (0, n.jsx)(S, {
        preview: (0, n.jsx)(I, { upload: i }),
        filename: i.filename,
        description: i.description,
        spoiler: i.spoiler,
        isImage: i.isImage,
        isVideo: i.isVideo,
        disableSpoiler: s,
        transitionState: t,
        onClose: l,
        onSubmit: a,
    });
}
function C(e) {
    let { item: i, transitionState: t, onClose: s, onSubmit: l } = e,
        a = i.originalItem,
        o = "IMAGE" === i.type,
        c = o ? (0, n.jsx)(b, { src: (0, f.E)({ proxyURL: a.proxy_url, url: a.url }) }) : void 0;
    return (0, n.jsx)(S, {
        preview: c,
        filename: (0, m.A)(a),
        description: a.description,
        spoiler: (0, r.Lt)(a.flags ?? 0, g.sbO.IS_SPOILER),
        isImage: o,
        isVideo: "VIDEO" === i.type,
        disableFilename: !0,
        transitionState: t,
        onClose: s,
        onSubmit: l,
    });
}
