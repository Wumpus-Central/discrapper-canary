(t.d(i, { ModifyMosaicAttachmentModal: () => y, default: () => k }), t(323874), t(14289), t(35956), t(938796));
var n = t(477900),
    s = t(582128),
    a = t(503698),
    l = t.n(a),
    r = t(665260),
    o = t(189213),
    c = t(331322),
    u = t(95477),
    d = t(103557),
    p = t(150934),
    f = t(565150),
    m = t(465856),
    g = t(644447),
    x = t(652215),
    j = t(381941),
    h = t(650583),
    v = t(375708),
    b = t(946027);
function I(e) {
    return (0, n.jsx)("img", { src: e.src ?? void 0, className: b.imageFilePreviewImg, "aria-hidden": !0, alt: "" });
}
function S(e) {
    let { file: i } = e,
        [t, a] = s.useState();
    return (
        s.useEffect(() => {
            if (null == i) return void a(void 0);
            let e = URL.createObjectURL(i);
            return (
                a(e),
                () => {
                    (a(void 0), URL.revokeObjectURL(e));
                }
            );
        }, [i]),
        (0, n.jsx)(I, { src: t })
    );
}
function C(e) {
    let { upload: i } = e;
    return i.item.platform !== f.xz.WEB
        ? null
        : i.isImage
          ? (0, n.jsx)(S, { file: i.item.file })
          : (0, n.jsx)("div", { className: l()(b.fileIcon, { [b[i.classification ?? ""]]: !0 }) });
}
function E(e) {
    let {
            preview: i,
            filename: t,
            description: a,
            spoiler: l,
            isImage: r,
            isVideo: f,
            disableFilename: m,
            disableSpoiler: g,
            transitionState: x,
            onClose: b,
            onSubmit: I,
        } = e,
        [S, C] = s.useState(t ?? ""),
        [E, k] = s.useState(a ?? ""),
        [y, R] = s.useState(l),
        L = s.useMemo(() => S.startsWith(j.MO), [S]);
    function O() {
        (I({ name: S, description: E, spoiler: y }), b());
    }
    return (0, n.jsx)(o.a, {
        transitionState: x,
        onClose: b,
        title: v.intl.string(v.t.Y8ujqr),
        actions: [
            { variant: "secondary", text: v.intl.string(v.t["ETE/oC"]), onClick: b },
            { variant: "primary", text: v.intl.string(v.t["TY+auE"]), onClick: O },
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
                                e.key === h.dh.ENTER && (e.preventDefault(), O());
                            },
                            disabled: m,
                        }),
                        r || f
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
    let { upload: i, transitionState: t, disableSpoiler: s, onClose: a, onSubmit: l } = e;
    return (0, n.jsx)(E, {
        preview: (0, n.jsx)(C, { upload: i }),
        filename: i.filename,
        description: i.description,
        spoiler: i.spoiler,
        isImage: i.isImage,
        isVideo: i.isVideo,
        disableSpoiler: s,
        transitionState: t,
        onClose: a,
        onSubmit: l,
    });
}
function y(e) {
    let { item: i, transitionState: t, onClose: s, onSubmit: a } = e,
        l = i.originalItem,
        o = "IMAGE" === i.type,
        c = o ? (0, n.jsx)(I, { src: (0, g.E)({ proxyURL: l.proxy_url, url: l.url }) }) : void 0;
    return (0, n.jsx)(E, {
        preview: c,
        filename: (0, m.A)(l),
        description: l.description,
        spoiler: (0, r.Lt)(l.flags ?? 0, x.sbO.IS_SPOILER),
        isImage: o,
        isVideo: "VIDEO" === i.type,
        disableFilename: !0,
        transitionState: t,
        onClose: s,
        onSubmit: a,
    });
}
