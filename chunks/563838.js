t.d(e, { F: () => I });
var a = t(627968),
    n = t(64700),
    r = t(503698),
    l = t.n(r),
    i = t(827734),
    s = t(990078),
    o = t(529689),
    d = t(696986),
    c = t(834730),
    u = t(289873),
    g = t(939249),
    h = t(789645),
    p = t(626034),
    f = t(65593),
    m = t(565150),
    q = t(915089),
    v = t(703007),
    C = t(464990),
    x = t(253141),
    U = t(698638);
t(634654);
var V = t(985018),
    b = t(847761);
let j = (0, q.Ld)();
function N(A) {
    let { upload: e, progress: t = 0, onDeleteAttachment: r } = A,
        p = n.useCallback(() => {
            r?.(e.id);
        }, [r, e.id]),
        f = t >= 1,
        m = t < 0,
        q = f || m,
        v = e.filename ?? e.id,
        C = (0, x.kt)(t);
    return (0, a.jsx)(s.m, {
        asContainer: !0,
        text: C,
        children: (0, a.jsxs)("div", {
            className: l()(b.hC, { [b.t]: m, [b.ik]: !q }),
            children: [
                (0, a.jsx)(o.D, { size: "xs", color: i.A.colors.ICON_MUTED.css }),
                (0, a.jsx)(d.h, { size: 10, horizontal: !0 }),
                (0, a.jsx)(c.E, { variant: "text-sm/normal", children: v }),
                !q && (0, a.jsx)(u.y, { className: b.eD, type: u.y.Type.SPINNING_CIRCLE }),
                q &&
                    null != r &&
                    (0, a.jsx)(g.D, {
                        onClick: p,
                        "aria-label": V.intl.formatToPlainString(V.t["1o5hyW"], { attachment: v }),
                        "aria-hidden": !1,
                        className: b.G5,
                        children: (0, a.jsx)(h.P, {
                            size: "xxs",
                            color: "currentColor",
                            className: b.__invalid_deleteIcon,
                        }),
                    }),
            ],
        }),
    });
}
function I(A) {
    let { onFileAdded: e } = A,
        {
            uploads: t,
            canAttachFiles: r,
            canAttachArchives: l,
            addAttachment: i,
            deleteAttachment: s,
            fileUploadProgresses: o,
        } = (0, C.Z)(),
        u = n.useRef(!1);
    function g(A) {
        try {
            for (let e of A) i({ platform: m.xz.WEB, file: e, origin: "unknown:guild_product_attachment" });
            u.current = !0;
        } catch {}
    }
    return (
        n.useEffect(() => {
            u.current && (e(), (u.current = !1));
        }, [e]),
        (0, a.jsxs)("div", {
            className: b.kL,
            children: [
                (0, a.jsx)(f.A, {
                    className: b.x4,
                    title: V.intl.string(V.t["5eTk2g"]),
                    description: V.intl.string(V.t.Ecxoxl),
                    icons: U.ir,
                    onDrop: g,
                }),
                (0, a.jsxs)(v.A, {
                    className: b.zd,
                    innerClassName: b._3,
                    disabled: !r,
                    "aria-label": V.intl.string(V.t["23LeCD"]),
                    "aria-describedby": j,
                    multiple: !0,
                    onChange: function (A) {
                        null != A.currentTarget.files && g(A.currentTarget.files);
                    },
                    children: [
                        (0, a.jsx)(p.k, { size: "xs", color: "currentColor", className: b.T8, "aria-hidden": !0 }),
                        (0, a.jsx)(c.E, {
                            variant: "text-sm/medium",
                            color: "always-white",
                            children: V.intl.string(V.t["23LeCD"]),
                        }),
                    ],
                }),
                (0, a.jsx)(d.h, { size: 12 }),
                (0, a.jsx)(c.E, {
                    id: j,
                    color: "text-muted",
                    variant: "text-xs/normal",
                    children: l
                        ? V.intl.formatToPlainString(V.t.lvU6sr, { fileUploadLimit: "1 GB" })
                        : V.intl.formatToPlainString(V.t.DOXzIU, { fileUploadLimit: "1 GB" }),
                }),
                t.length > 0 &&
                    (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)("div", { className: b.me }),
                            (0, a.jsx)("ul", {
                                className: b.$W,
                                "aria-label": V.intl.string(V.t.YZ6cTW),
                                children: t.map((A) =>
                                    (0, a.jsx)(
                                        "li",
                                        {
                                            children: (0, a.jsx)(N, {
                                                upload: A,
                                                onDeleteAttachment: s,
                                                progress: o[A.id],
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
