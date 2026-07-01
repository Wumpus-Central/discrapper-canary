t.d(i, { ModifyMosaicAttachmentModal: () => k, default: () => S }), t(323874), t(14289), t(35956), t(938796);
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
    f = t(465856),
    m = t(644447),
    g = t(652215),
    x = t(650583),
    j = t(375708),
    h = t(910162);
function v(e) {
    return (0, n.jsx)("img", { src: e.src ?? void 0, className: h.imageFilePreviewImg, "aria-hidden": !0, alt: "" });
}
function b(e) {
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
        (0, n.jsx)(v, { src: t })
    );
}
function E(e) {
    let { upload: i } = e;
    return i.item.platform !== p.xz.WEB
        ? null
        : i.isImage
          ? (0, n.jsx)(b, { file: i.item.file })
          : (0, n.jsx)("div", { className: a()(h.fileIcon, { [h[i.classification ?? ""]]: !0 }) });
}
function I(e) {
    let {
            preview: i,
            filename: t,
            description: l,
            spoiler: a,
            isImage: r,
            isVideo: p,
            disableFilename: f,
            disableSpoiler: m,
            transitionState: g,
            onClose: h,
            onSubmit: v,
        } = e,
        [b, E] = s.useState(t ?? ""),
        [I, S] = s.useState(l ?? ""),
        [k, C] = s.useState(a),
        y = () => {
            v({ name: b, description: I, spoiler: k }), h();
        };
    return (0, n.jsx)(o.Modal, {
        transitionState: g,
        onClose: h,
        title: j.intl.string(j.t.Y8ujqr),
        actions: [
            { variant: "secondary", text: j.intl.string(j.t["ETE/oC"]), onClick: h },
            { variant: "primary", text: j.intl.string(j.t["TY+auE"]), onClick: y },
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
                            value: b,
                            onChange: E,
                            onKeyDown: (e) => {
                                e.key === x.dh.ENTER && (e.preventDefault(), y());
                            },
                            disabled: f,
                        }),
                        r || p
                            ? (0, n.jsx)(u.k, {
                                  label: j.intl.string(j.t.eOB2eR),
                                  placeholder: j.intl.string(j.t.RNH1jn),
                                  value: I,
                                  onChange: S,
                                  onKeyDown: (e) => {
                                      e.key === x.dh.ENTER && (e.preventDefault(), y());
                                  },
                              })
                            : null,
                    ],
                }),
                !0 !== m && (0, n.jsx)(d.S, { checked: k, onChange: C, label: j.intl.string(j.t["gsI+xC"]) }),
            ],
        }),
    });
}
function S(e) {
    let { upload: i, transitionState: t, disableSpoiler: s, onClose: l, onSubmit: a } = e;
    return (0, n.jsx)(I, {
        preview: (0, n.jsx)(E, { upload: i }),
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
function k(e) {
    let { item: i, transitionState: t, onClose: s, onSubmit: l } = e,
        a = i.originalItem,
        o = "IMAGE" === i.type,
        c = o ? (0, n.jsx)(v, { src: (0, m.E)({ proxyURL: a.proxy_url, url: a.url }) }) : void 0;
    return (0, n.jsx)(I, {
        preview: c,
        filename: (0, f.A)(a),
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
