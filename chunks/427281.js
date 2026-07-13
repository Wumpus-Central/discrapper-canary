t.d(i, { ModifyMosaicAttachmentModal: () => y, default: () => k }), t(323874), t(14289), t(35956), t(938796);
var n = t(627968),
    s = t(64700),
    l = t(503698),
    a = t.n(l),
    r = t(665260),
    o = t(189213),
    c = t(331322),
    u = t(292666),
    d = t(260598),
    p = t(150934),
    m = t(565150),
    f = t(465856),
    g = t(644447),
    x = t(652215),
    j = t(381941),
    h = t(650583),
    v = t(375708),
    b = t(910162);
function I(e) {
    return (0, n.jsx)("img", { src: e.src ?? void 0, className: b.imageFilePreviewImg, "aria-hidden": !0, alt: "" });
}
function S(e) {
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
        (0, n.jsx)(I, { src: t })
    );
}
function C(e) {
    let { upload: i } = e;
    return i.item.platform !== m.xz.WEB
        ? null
        : i.isImage
          ? (0, n.jsx)(S, { file: i.item.file })
          : (0, n.jsx)("div", { className: a()(b.fileIcon, { [b[i.classification ?? ""]]: !0 }) });
}
function E(e) {
    let {
            preview: i,
            filename: t,
            description: l,
            spoiler: a,
            isImage: r,
            isVideo: m,
            disableFilename: f,
            disableSpoiler: g,
            transitionState: x,
            onClose: b,
            onSubmit: I,
        } = e,
        [S, C] = s.useState(t ?? ""),
        [E, k] = s.useState(l ?? ""),
        [y, R] = s.useState(a),
        L = s.useMemo(() => S.startsWith(j.MO), [S]),
        M = () => {
            I({ name: S, description: E, spoiler: y }), b();
        };
    return (0, n.jsx)(o.Modal, {
        transitionState: x,
        onClose: b,
        title: v.intl.string(v.t.Y8ujqr),
        actions: [
            { variant: "secondary", text: v.intl.string(v.t["ETE/oC"]), onClick: b },
            { variant: "primary", text: v.intl.string(v.t["TY+auE"]), onClick: M },
        ],
        children: (0, n.jsxs)(c.B, {
            gap: 24,
            children: [
                (0, n.jsxs)(c.B, {
                    gap: 16,
                    children: [
                        i,
                        (0, n.jsx)(u.k, {
                            label: v.intl.string(v.t.ILJuBq),
                            value: S,
                            onChange: C,
                            onKeyDown: (e) => {
                                e.key === h.dh.ENTER && (e.preventDefault(), M());
                            },
                            disabled: f,
                        }),
                        r || m
                            ? (0, n.jsx)(d.f, {
                                  label: v.intl.string(v.t.eOB2eR),
                                  placeholder: v.intl.string(v.t.RNH1jn),
                                  value: E,
                                  onChange: k,
                              })
                            : null,
                    ],
                }),
                !0 !== g &&
                    (0, n.jsx)(p.S, { checked: y || L, disabled: L, onChange: R, label: v.intl.string(v.t["gsI+xC"]) }),
            ],
        }),
    });
}
function k(e) {
    let { upload: i, transitionState: t, disableSpoiler: s, onClose: l, onSubmit: a } = e;
    return (0, n.jsx)(E, {
        preview: (0, n.jsx)(C, { upload: i }),
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
function y(e) {
    let { item: i, transitionState: t, onClose: s, onSubmit: l } = e,
        a = i.originalItem,
        o = "IMAGE" === i.type,
        c = o ? (0, n.jsx)(I, { src: (0, g.E)({ proxyURL: a.proxy_url, url: a.url }) }) : void 0;
    return (0, n.jsx)(E, {
        preview: c,
        filename: (0, f.A)(a),
        description: a.description,
        spoiler: (0, r.Lt)(a.flags ?? 0, x.sbO.IS_SPOILER),
        isImage: o,
        isVideo: "VIDEO" === i.type,
        disableFilename: !0,
        transitionState: t,
        onClose: s,
        onSubmit: l,
    });
}
