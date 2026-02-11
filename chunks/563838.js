t.d(e, { F: () => U });
var n = t(627968),
    a = t(64700),
    r = t(503698),
    i = t.n(r),
    l = t(827734),
    s = t(990078),
    o = t(397927),
    d = t(65593),
    u = t(565150),
    c = t(915089),
    g = t(703007),
    q = t(464990),
    p = t(253141),
    f = t(698638);
t(634654);
var m = t(985018),
    h = t(208318);
let C = (0, c.Ld)();
function v(A) {
    let { upload: e, progress: t = 0, onDeleteAttachment: r } = A,
        d = a.useCallback(() => {
            r?.(e.id);
        }, [r, e.id]),
        u = t >= 1,
        c = t < 0,
        g = u || c,
        q = e.filename ?? e.id,
        f = (0, p.kt)(t);
    return (0, n.jsx)(s.m, {
        asContainer: !0,
        text: f,
        children: (0, n.jsxs)("div", {
            className: i()(h.hC, { [h.t]: c, [h.ik]: !g }),
            children: [
                (0, n.jsx)(o.DF1, { size: "xs", color: l.A.colors.ICON_MUTED.css }),
                (0, n.jsx)(o.hKd, { size: 10, horizontal: !0 }),
                (0, n.jsx)(o.Text, { variant: "text-sm/normal", children: q }),
                !g && (0, n.jsx)(o.y$y, { className: h.eD, type: o.y$y.Type.SPINNING_CIRCLE }),
                g &&
                    null != r &&
                    (0, n.jsx)(o.DUT, {
                        onClick: d,
                        "aria-label": m.intl.formatToPlainString(m.t["1o5hyW"], { attachment: q }),
                        "aria-hidden": !1,
                        className: h.G5,
                        children: (0, n.jsx)(o.PGe, {
                            size: "xxs",
                            color: "currentColor",
                            className: h.__invalid_deleteIcon,
                        }),
                    }),
            ],
        }),
    });
}
function U(A) {
    let { onFileAdded: e } = A,
        {
            uploads: t,
            canAttachFiles: r,
            canAttachArchives: i,
            addAttachment: l,
            deleteAttachment: s,
            fileUploadProgresses: c,
        } = (0, q.Z)(),
        p = a.useRef(!1);
    function U(A) {
        try {
            for (let e of A) l({ platform: u.xz.WEB, file: e, origin: "unknown:guild_product_attachment" });
            p.current = !0;
        } catch {}
    }
    return (
        a.useEffect(() => {
            p.current && (e(), (p.current = !1));
        }, [e]),
        (0, n.jsxs)("div", {
            className: h.kL,
            children: [
                (0, n.jsx)(d.A, {
                    className: h.x4,
                    title: m.intl.string(m.t["5eTk2g"]),
                    description: m.intl.string(m.t.Ecxoxl),
                    icons: f.ir,
                    onDrop: U,
                }),
                (0, n.jsxs)(g.A, {
                    className: h.zd,
                    innerClassName: h._3,
                    disabled: !r,
                    "aria-label": m.intl.string(m.t["23LeCD"]),
                    "aria-describedby": C,
                    multiple: !0,
                    onChange: function (A) {
                        null != A.currentTarget.files && U(A.currentTarget.files);
                    },
                    children: [
                        (0, n.jsx)(o.kpT, { size: "xs", color: "currentColor", className: h.T8, "aria-hidden": !0 }),
                        (0, n.jsx)(o.Text, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: m.intl.string(m.t["23LeCD"]),
                        }),
                    ],
                }),
                (0, n.jsx)(o.hKd, { size: 12 }),
                (0, n.jsx)(o.Text, {
                    id: C,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: i
                        ? m.intl.formatToPlainString(m.t.lvU6sr, { fileUploadLimit: "1 GB" })
                        : m.intl.formatToPlainString(m.t.DOXzIU, { fileUploadLimit: "1 GB" }),
                }),
                t.length > 0 &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)("div", { className: h.me }),
                            (0, n.jsx)("ul", {
                                className: h.$W,
                                "aria-label": m.intl.string(m.t.YZ6cTW),
                                children: t.map((A) =>
                                    (0, n.jsx)(
                                        "li",
                                        {
                                            children: (0, n.jsx)(v, {
                                                upload: A,
                                                onDeleteAttachment: s,
                                                progress: c[A.id],
                                            }),
                                        },
                                        A.id,
                                    ),
                                ),
                            }),
                        ],
                    }),
            ],
        })
    );
}
