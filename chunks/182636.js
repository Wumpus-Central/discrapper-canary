n.d(t, { u: () => nN });
var i = n(477900),
    l = n(633075),
    a = n(646976),
    s = n(289173),
    r = n(210598),
    d = n(58216),
    o = n(582128),
    c = n(869484),
    u = n(17928),
    m = n(315629),
    g = n(834730),
    x = n(465794),
    f = n(450232),
    h = n(287809),
    p = n(158045),
    j = n(735321),
    I = n(644346),
    E = n(939249),
    v = n(105292),
    C = n(954165);
function A(e) {
    let { onClick: t, expanded: n } = e;
    return (0, i.jsx)(E.D, {
        onClick: t,
        className: C.x,
        "aria-expanded": n,
        children: (0, i.jsx)(g.E, {
            variant: "text-sm/medium",
            color: "none",
            children: n ? v.intl.string(v.t["6MwJo/"]) : v.intl.string(v.t.lBeKY2),
        }),
    });
}
var b = n(503698),
    N = n.n(b),
    w = n(43990),
    T = n(241326),
    y = n(33969),
    k = n(866665),
    R = n(245604),
    S = n(601089);
function L(e) {
    let { label: t, onClick: n, className: l } = e;
    return (0, i.jsx)(k.m, {
        text: t,
        children: (0, i.jsxs)(E.D, {
            className: N()(S.kL, l),
            "aria-label": t,
            onClick: n,
            children: [
                (0, i.jsx)("div", { className: S.n8 }),
                (0, i.jsx)("div", { className: S.zc, children: (0, i.jsx)(R.U, { size: "sm" }) }),
                (0, i.jsx)("div", { className: S.n8 }),
            ],
        }),
    });
}
var _ = n(34011),
    P = n(448766),
    D = n(770178);
let O = o.createContext({
    isAnyFieldClipped: !1,
    isExpanded: !1,
    setAnyFieldClipped: () => {},
    setIsExpanded: () => {},
});
function G(e) {
    let { children: t } = e,
        [n, l] = o.useState(!1),
        [a, s] = o.useState(!1),
        [r] = o.useState(() => new Set()),
        d = o.useCallback(
            (e, t) => {
                (t ? r.add(e) : r.delete(e), s(r.size > 0));
            },
            [r],
        ),
        c = o.useMemo(
            () => ({ isExpanded: n, setIsExpanded: l, isAnyFieldClipped: a, setAnyFieldClipped: d }),
            [n, a, d],
        );
    return (0, i.jsx)(O.Provider, { value: c, children: t });
}
function M() {
    return o.useContext(O);
}
var F = n(404760),
    U = n(892572);
function H(e) {
    let { className: t, variant: n, color: l, value: a, maxLines: s, interactive: r = !0, disableMarkdown: d = !1 } = e,
        c = r ? P.d : P.j,
        { textRef: u, lineClamp: m } = (function (e, t) {
            let { isExpanded: n, setAnyFieldClipped: i } = o.useContext(O),
                l = o.useId(),
                a = o.useRef(null),
                s = o.useCallback(() => {
                    let e = a.current;
                    null != e && i(l, e.scrollWidth - e.clientWidth > 1 || e.scrollHeight - e.clientHeight > 1);
                }, [l, i]);
            return (
                (0, D.g)(a, s, [n, t], { fireOnMount: !0, fireOnDepsChange: !0 }),
                o.useEffect(() => () => i(l, !1), [l, i]),
                { textRef: a, lineClamp: n ? void 0 : e }
            );
        })(s, a);
    return (0, i.jsx)(g.E, {
        ref: u,
        className: N()(U.YD, { [U.Lq]: s > 1 }, t),
        variant: n,
        color: l,
        lineClamp: m,
        children: d ? a : c(a),
    });
}
function V(e) {
    let {
            value: t,
            placeholder: n,
            variant: l,
            color: a,
            onCommit: s,
            maxLength: r,
            maxLines: d,
            growWidth: c,
            disableMarkdown: u,
        } = e,
        m = o.useCallback((e) => s(e.trim()), [s]),
        { isExpanded: g } = M(),
        x =
            "" === t.trim()
                ? null
                : (0, i.jsx)(H, { interactive: !1, variant: l, color: a, value: t, maxLines: d, disableMarkdown: u });
    return (0, i.jsx)("div", {
        className: N()(F.kL, U.ZZ, { [F.oE]: 1 === d, [F.CP]: c }),
        children: (0, i.jsx)(_.w, {
            value: t,
            onCommit: m,
            autoComplete: "off",
            defaultDirty: !0,
            hideLabel: !0,
            multiline: 1 !== d,
            paddingBlock: "md",
            paddingInline: 1 === d ? "sm" : "md",
            preview: x,
            placeholder: n,
            label: n,
            maxLength: r,
            maxRows: 1 === d || g ? void 0 : d,
            textVariant: l,
            scrollIntoViewOnFocus: !0,
        }),
    });
}
function W(e) {
    return e.canEdit
        ? (0, i.jsx)(V, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, i.jsx)(H, {
                variant: e.variant,
                color: e.color,
                value: e.value,
                maxLines: e.maxLines,
                disableMarkdown: e.disableMarkdown,
            });
}
var X = n(326009),
    K = n(922016),
    Y = n(22231),
    B = n(750943),
    z = n(458499);
function q(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: a, onChangeImage: s } = e;
    return (0, i.jsx)(K.Y, {
        targetElementRef: n,
        align: "right",
        position: "bottom",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(z.A, { lastEdit: t, cropAndUpload: a, onChangeImage: s, onClose: n });
        },
        children: (e) =>
            (0, i.jsx)(y.Y, {
                ...e,
                ref: n,
                icon: Y.PencilIcon,
                variant: "overlay-secondary",
                tooltipText: v.intl.string(v.t.RWkUzH),
                "aria-haspopup": "menu",
                disabled: l,
            }),
    });
}
function J(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: a, onChangeImage: s } = e;
    return null == t
        ? (0, i.jsx)(y.Y, {
              ref: n,
              icon: B.X,
              variant: "overlay-secondary",
              tooltipText: v.intl.string(v.t.dh0LD5),
              disabled: l,
              onClick: s,
          })
        : (0, i.jsx)(q, { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: a, onChangeImage: s });
}
var Q = n(858899),
    $ = n(192308),
    Z = n(765548),
    ee = n(860840),
    et = n(229531),
    en = n(515718),
    ei = n(741394),
    el = n(38405),
    ea = n(958805);
function es(e) {
    let { uploadType: t, returnRef: l, getCropAspectRatio: a, onUploadSuccess: s } = e,
        r = o.useRef(0),
        [d, c] = o.useState(null),
        [u, m] = o.useState(null),
        g = (0, Z.A)(s),
        x = o.useCallback(() => {
            ((r.current = r.current + 1), c(null), m(null));
        }, []),
        f = o.useCallback(
            async (e, t, n, i) => {
                r.current = r.current + 1;
                let l = r.current;
                c(e);
                try {
                    let [a, s] = await Promise.all([
                        ea.A.uploadWidgetAsset(t),
                        ee.default.fromBlob(n).catch(() => void 0),
                    ]);
                    if (r.current !== l) return;
                    (c(null),
                        m({ filename: a, unprocessedFile: n, transform: i }),
                        g({ filename: a, localDataUri: e, originalHash: s }));
                } catch (e) {
                    if (r.current !== l) return;
                    (c(null),
                        (0, Q.P0)({ text: v.intl.string(v.t.F4Neqh), variant: "critical" }),
                        el.A.captureException(e));
                }
            },
            [g],
        ),
        h = o.useCallback(
            (e) => {
                var t, n;
                let i,
                    l,
                    { imageUri: a, file: s, transform: r } = e,
                    d = (0, en.aU)(a);
                d.size > 0xa00000
                    ? (0, Q.P0)({ text: v.intl.string(v.t.YbdEFK), variant: "critical" })
                    : f(
                          a,
                          new File(
                              [d],
                              ((t = s.name),
                              (n = d.type),
                              (i = (0, et.B)(n) ?? "png"),
                              (l = (0, ei.kh)(t)),
                              `${"" !== l ? l : "image"}.${i}`),
                              { type: d.type },
                          ),
                          s,
                          r,
                      );
            },
            [f],
        );
    return {
        cropAndUpload: o.useCallback(
            (e, s, r) => {
                let d = a?.();
                (0, $.openModalLazy)(
                    async () => {
                        let { default: a } = await Promise.all([
                            n.e("237403"),
                            n.e("655327"),
                            n.e("67702"),
                            n.e("1214"),
                            n.e("863232"),
                            n.e("858164"),
                            n.e("427032"),
                            n.e("444376"),
                            n.e("318546"),
                            n.e("571470"),
                            n.e("50342"),
                            n.e("507406"),
                            n.e("463726"),
                            n.e("93513"),
                            n.e("779149"),
                            n.e("455524"),
                            n.e("90017"),
                            n.e("489908"),
                            n.e("574571"),
                            n.e("750348"),
                        ]).then(n.bind(n, 142630));
                        return (n) =>
                            (0, i.jsx)(a, {
                                ...n,
                                file: s,
                                imageUri: e,
                                uploadType: t,
                                returnRef: l,
                                initialTransform: r,
                                cropAspectRatio: d,
                                onCrop: h,
                            });
                    },
                    { stackingBehavior: "stack" },
                );
            },
            [h, t, l, a],
        ),
        previewUri: d,
        cancelUpload: x,
        getLastEdit: o.useCallback(
            (e) => (null != u && null != e && "filename" in e && e.filename === u.filename ? u : null),
            [u],
        ),
    };
}
var er = n(652215),
    ed = n(339984),
    eo = n(148548);
function ec() {
    return (0, i.jsx)(L, {
        label: v.intl.string(v.t.gQmDk4),
        onClick: function () {
            (0, j.AD)((e) => new r.Tu({ ...e, sections: [(0, r.K)(), ...e.sections] }));
        },
        className: eo.GU,
    });
}
function eu(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: a } = e,
        s = o.useRef(null),
        d = o.useRef(null),
        u = o.useRef(null);
    function m(e) {
        (0, j.AD)((t) => {
            let n = t.sections[l];
            if (n?.type !== c.K.COVER) return t;
            let i = [...t.sections];
            return ((i[l] = e(n)), new r.Tu({ ...t, sections: i }));
        });
    }
    function g(e) {
        m((t) => ({ ...t, title: e }));
    }
    function x(e) {
        m((t) => ({ ...t, subtitle: e }));
    }
    let f = o.useCallback(() => {
            let e = u.current?.getBoundingClientRect();
            return null != e && e.width > 0 && e.height > 0 ? e.width / e.height : void 0;
        }, []),
        {
            cropAndUpload: h,
            previewUri: p,
            cancelUpload: I,
            getLastEdit: E,
        } = es({
            uploadType: ed.HL.PERSONAL_WIDGET_COVER,
            returnRef: d,
            getCropAspectRatio: f,
            onUploadSuccess: (e) => m((t) => ({ ...t, image: e })),
        });
    function C() {
        (I(), m((e) => ({ ...e, image: void 0 })));
    }
    function A() {
        s.current?.activateUploadDialogue();
    }
    function b() {
        (0, j.AD)((e) => new r.Tu({ ...e, sections: e.sections.filter((e, t) => t !== l) }));
    }
    let k = null != p,
        R = a || "" !== n.title.trim() || "" !== n.subtitle.trim(),
        S = null != n.image || k,
        L = S || a,
        _ = E(n.image);
    return (0, i.jsx)(w.N, {
        theme: S ? er.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: u,
                className: N()(eo.kL, { [eo.Vp]: L }, e),
                children: [
                    a || null != n.image
                        ? (0, i.jsxs)("div", {
                              className: eo.El,
                              children: [
                                  (0, i.jsx)(X.A, {
                                      cropAndUpload: h,
                                      imageInputRef: s,
                                      className: eo.Sl,
                                      canEdit: a,
                                      userId: t,
                                      image: n.image,
                                      previewUri: p,
                                      editVariant: "tooltip",
                                  }),
                                  S && R ? (0, i.jsx)("div", { className: eo.cw }) : null,
                              ],
                          })
                        : null,
                    a
                        ? (0, i.jsxs)(y.A, {
                              className: eo.o1,
                              children: [
                                  null != n.image
                                      ? (0, i.jsx)(J, {
                                            lastEdit: _,
                                            buttonRef: d,
                                            disabled: k,
                                            cropAndUpload: h,
                                            onChangeImage: A,
                                        })
                                      : null,
                                  (0, i.jsx)(y.Y, {
                                      icon: T.TrashIcon,
                                      variant: "overlay-secondary",
                                      tooltipText: S ? v.intl.string(v.t.RyK5Ww) : v.intl.string(v.t.g2jVww),
                                      onClick: S ? C : b,
                                  }),
                              ],
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: N()(eo.hQ, e, { [eo.Vp]: L }),
                        children: [
                            (0, i.jsx)(W, {
                                canEdit: a,
                                growWidth: !0,
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                value: n.title,
                                placeholder: v.intl.string(v.t.KqCDvK),
                                onCommit: g,
                                maxLength: 50,
                                maxLines: 2,
                            }),
                            (0, i.jsx)(W, {
                                canEdit: a,
                                variant: "text-sm/medium",
                                color: "text-default",
                                value: n.subtitle,
                                placeholder: v.intl.string(v.t.k8zZFd),
                                onCommit: x,
                                maxLength: 150,
                                maxLines: 3,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
n(321073);
var em = n(661531),
    eg = n(603090);
function ex(e) {
    let { onClick: t, alwaysVisible: n = !1 } = e;
    return (0, i.jsxs)(E.D, {
        onClick: t,
        className: N()(eg.cR, { [eg.mr]: n }),
        children: [
            (0, i.jsx)(B.X, { size: "xs", color: em.A.colors.ICON_SUBTLE }),
            (0, i.jsx)(g.E, { variant: "text-sm/medium", color: "text-muted", children: v.intl.string(v.t["9AY+/x"]) }),
        ],
    });
}
function ef(e) {
    let { index: t, userId: n, field: l, canEdit: a, onFieldChange: s, onFieldRemove: r } = e,
        {
            cropAndUpload: d,
            previewUri: o,
            cancelUpload: c,
            getLastEdit: u,
        } = es({
            uploadType: ed.HL.PERSONAL_WIDGET_FIELD,
            onUploadSuccess: (e) => s(l.key, (t) => ({ ...t, image: e })),
        }),
        m = a ? !0 !== l.hideImage : null != l.image;
    return (0, i.jsxs)("div", {
        className: eg.ez,
        children: [
            m
                ? (0, i.jsxs)("div", {
                      className: eg.tF,
                      children: [
                          (0, i.jsx)(X.A, {
                              className: N()(eg.k9, a ? eg.y2 : void 0),
                              canEdit: a,
                              userId: n,
                              image: l.image,
                              previewUri: o,
                              cropAndUpload: d,
                              editVariant: "overlay",
                              lastEdit: u(l.image),
                          }),
                          a
                              ? (0, i.jsx)(y.A, {
                                    className: eg.ij,
                                    children: (0, i.jsx)(y.Y, {
                                        variant: "overlay-secondary",
                                        tooltipText: v.intl.string(v.t.RyK5Ww),
                                        onClick: function () {
                                            (c(),
                                                s(l.key, (e) =>
                                                    null != e.image
                                                        ? { ...e, image: void 0 }
                                                        : { ...e, image: void 0, hideImage: !0 },
                                                ));
                                        },
                                        icon: T.TrashIcon,
                                    }),
                                })
                              : null,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: eg.oT,
                children: [
                    (0, i.jsx)(W, {
                        canEdit: a,
                        variant: "text-sm/medium",
                        color: "text-default",
                        value: l.title,
                        placeholder: v.intl.formatToPlainString(v.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            s(l.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 40,
                        maxLines: 2,
                    }),
                    (0, i.jsx)(W, {
                        canEdit: a,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        value: l.description,
                        placeholder: v.intl.formatToPlainString(v.t.Hs14K3, { number: t + 1 }),
                        onCommit: function (e) {
                            s(l.key, (t) => ({ ...t, description: e }));
                        },
                        maxLength: 90,
                        maxLines: 4,
                    }),
                ],
            }),
            a
                ? (0, i.jsxs)(y.A, {
                      className: eg.Ms,
                      children: [
                          m
                              ? null
                              : (0, i.jsx)(y.Y, {
                                    variant: "overlay-secondary",
                                    tooltipText: v.intl.string(v.t.i3vRzP),
                                    onClick: function () {
                                        s(l.key, (e) => ({ ...e, hideImage: void 0 }));
                                    },
                                    icon: B.X,
                                }),
                          (0, i.jsx)(y.Y, {
                              variant: "overlay-secondary",
                              tooltipText: v.intl.string(v.t.g2jVww),
                              onClick: function () {
                                  r(l.key);
                              },
                              icon: T.TrashIcon,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eh(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: a, hasCoverSection: s } = e;
    function d(e) {
        (0, j.AD)((t) => {
            let n = t.sections[l];
            if (n?.type !== c.K.FIELDS) return t;
            let i = [...t.sections];
            return ((i[l] = { ...n, fields: e(n.fields) }), new r.Tu({ ...t, sections: i }));
        });
    }
    function o(e, t) {
        d((n) => {
            let i = n.findIndex((t) => t.key === e),
                l = n[i];
            if (null == l) return n;
            let a = [...n];
            return ((a[i] = t(l)), a);
        });
    }
    function u(e) {
        d((t) => t.filter((t) => t.key !== e));
    }
    function m() {
        d((e) => [...e, (0, r.yL)()]);
    }
    if (0 === n.fields.length) {
        if (!a) return null;
        if (!s)
            return (0, i.jsx)("div", { className: eg.kL, children: (0, i.jsx)(ex, { alwaysVisible: !0, onClick: m }) });
    }
    let g = n.fields.map((e, n) =>
            (0, i.jsx)(ef, { index: n, userId: t, field: e, canEdit: a, onFieldChange: o, onFieldRemove: u }, e.key),
        ),
        x = n.fields.length % 2 == 1;
    a && x && n.fields.length < 4 && g.push((0, i.jsx)(ex, { onClick: m }, "add-entry"));
    let f = a && !x && n.fields.length + 2 <= 4;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            g.length > 0 ? (0, i.jsx)("div", { className: eg.kL, children: g }) : null,
            f
                ? (0, i.jsx)(L, {
                      label: v.intl.string(v.t.t4vU5I),
                      onClick: function () {
                          d((e) => [...e, (0, r.yL)(), (0, r.yL)()]);
                      },
                  })
                : null,
        ],
    });
}
var ep = n(202541),
    ej = n(877068);
let eI = { section: er.JJy.PERSONAL_WIDGET };
function eE(e) {
    let { widget: t, canEdit: n } = e;
    return (0, i.jsxs)("div", {
        className: ej.wx,
        children: [
            (0, i.jsx)(f.A, { size: "xs", className: ej.nr }),
            (0, i.jsx)(W, {
                canEdit: n,
                variant: "text-sm/medium",
                color: "text-default",
                value: t.header,
                placeholder: v.intl.string(v.t.fjSaAm),
                onCommit: function (e) {
                    (0, j.AD)((t) => new r.Tu({ ...t, header: e }));
                },
                maxLength: 50,
                maxLines: 1,
                disableMarkdown: !0,
            }),
        ],
    });
}
function ev(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: a, hasCoverSection: s } = e;
    switch (n.type) {
        case c.K.COVER:
            return (0, i.jsx)(eu, { userId: t, section: n, sectionIndex: l, canEdit: a });
        case c.K.FIELDS:
            return (0, i.jsx)(eh, { userId: t, section: n, sectionIndex: l, canEdit: a, hasCoverSection: s });
    }
}
function eC() {
    return (0, u.bG)([h.default], () => p.Ay.isPremium(h.default.getCurrentUser(), ep.PremiumTypes.TIER_2))
        ? null
        : (0, i.jsxs)("div", {
              className: ej.hc,
              children: [
                  (0, i.jsx)(m.h, { color: "nitro-pink", className: ej.Sp, offsetBottom: -4 }),
                  (0, i.jsxs)("div", {
                      className: ej.LK,
                      children: [
                          (0, i.jsx)(g.E, {
                              variant: "text-xs/semibold",
                              color: "text-strong",
                              children: v.intl.string(v.t.WOPVdz),
                          }),
                          (0, i.jsx)(g.E, {
                              variant: "text-xs/medium",
                              color: "text-default",
                              children: v.intl.string(v.t["55tM3t"]),
                          }),
                      ],
                  }),
                  (0, i.jsx)(x.A, {
                      size: "sm",
                      subscriptionTier: ep.pe.TIER_2,
                      defaultTextOverride: v.intl.string(v.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eI,
                  }),
              ],
          });
}
function eA() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: n } = M();
    return e || t ? (0, i.jsx)(A, { expanded: t, onClick: () => n((e) => !e) }) : null;
}
function eb(e) {
    let { widget: t, user: n, allowEditing: l, disableInteraction: a, index: s, trailingContent: r } = e,
        d = l && !0 !== a,
        u = o.useMemo(() => t.sections.some((e) => e.type === c.K.COVER), [t.sections]);
    return (0, i.jsx)(I.A, {
        userId: n.id,
        widget: t,
        allowEditing: l,
        disableInteraction: a,
        index: s,
        trailingContent: r,
        className: ej.Nr,
        headerClassName: ej.JE,
        children: (0, i.jsxs)("div", {
            className: ej.kL,
            children: [
                (0, i.jsx)(eE, { widget: t, canEdit: d }),
                d && !u ? (0, i.jsx)(ec, {}) : null,
                t.sections.map((e, t) =>
                    (0, i.jsx)(ev, { userId: n.id, section: e, sectionIndex: t, canEdit: d, hasCoverSection: u }, t),
                ),
                (0, i.jsx)(eA, {}),
                d ? (0, i.jsx)(eC, {}) : null,
            ],
        }),
    });
}
function eN(e) {
    return (0, i.jsx)(G, { children: (0, i.jsx)(eb, { ...e }) });
}
var ew = n(172218),
    eT = n(540185),
    ey = n(408278),
    ek = n(499373),
    eR = n(775602),
    eS = n(793574),
    eL = n(734066),
    e_ = n(682176),
    eP = n(111994),
    eD = n(183555),
    eO = n(280450),
    eG = n(321191);
function eM(e) {
    return (0, u.bG)(
        [eO.default, eG.A],
        () => (eG.A.getUserProfile(eO.default.getId())?.widgets ?? []).some((t) => t.type === e),
        [e],
    );
}
var eF = n(403777),
    eU = n(765178),
    eH = n(789645);
(n(323874), n(14289), n(35956));
var eV = n(614584),
    eW = n(956050),
    eX = n(195880),
    eK = n(219222),
    eY = n(518477),
    eB = n(696016);
async function ez(e, t) {
    let n = URL.createObjectURL(t);
    try {
        let t = await (0, eW.m)(n, 0);
        (0, j.QN)(e, t);
    } catch (e) {
        eB.nx.warn(`Clips gallery widget thumbnail refresh failed; keeping placeholder: ${e}`);
    } finally {
        URL.revokeObjectURL(n);
    }
}
async function eq(e, t, n, i, l) {
    let { analyticsLocations: a, source: s, trackEditAction: r } = l,
        d = "exporting";
    try {
        let l = await (0, eV.VO)(e, { analyticsLocations: a });
        if (i.signal.aborted || !(0, j.iu)(t)) return;
        ((d = "uploading"), ez(t, l).catch(() => {}));
        let o = new File([l], "clip.mp4", { type: "video/mp4" }),
            c = await ea.A.uploadWidgetClip(o, { onProgress: (e) => (0, eK.Fj)(t, e), signal: i.signal });
        if (!(0, j.WX)(t, c)) return;
        r({
            action: s === eY.IE.PICKER ? "CLIP_ADDED_FROM_PICKER" : "CLIP_ADDED_FROM_SUGGESTED",
            widgetEdited: eT.x.CLIPS_GALLERY,
            gameId: n,
        });
    } catch (l) {
        if (i.signal.aborted) return;
        ((0, j.mC)(t),
            eB.nx.error("Failed to upload a clip for the clips gallery widget", l, {
                stage: d,
                clipType: e.type,
                crop: e.editMetadata?.crop,
                trackTypes: e.tracks?.map((e) => e.type),
            }),
            (0, Q.P0)({ text: v.intl.string(v.t.iufib1), variant: "critical" }),
            r({
                action: "exporting" === d ? "CLIP_EXPORT_FAILED" : "CLIP_UPLOAD_FAILED",
                widgetEdited: eT.x.CLIPS_GALLERY,
                gameId: n,
            }));
    } finally {
        (0, eK.cG)(t);
    }
}
function eJ(e) {
    let { widgetClipId: t, gameId: n, className: l } = e,
        { trackUserProfileEditAction: a } = (0, eD.NJ)(),
        s = v.intl.string(v.t["4z6ldH"]);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(k.m, {
            text: s,
            ariaHidden: !0,
            children: (0, i.jsx)(ey.K, {
                "aria-label": s,
                icon: eH.P,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, eK._V)(t),
                        (0, j.mC)(t),
                        eU.O.announce(v.intl.string(v.t.VCQXvr)),
                        a({ action: "CLIP_UPLOAD_CANCELED", widgetEdited: eT.x.CLIPS_GALLERY, gameId: n }));
                },
            }),
        }),
    });
}
var eQ = n(314531);
n(926675);
var e$ = n(305866),
    eZ = n(123181),
    e0 = n(229087),
    e1 = n(753437),
    e2 = n(382701),
    e8 = n(408519);
function e7(e) {
    let { clipId: t, tags: n, allowEditing: l, disableInteraction: a = !1, onEditingChange: s } = e,
        r = l && !a,
        d = o.useMemo(() => n?.filter((e) => null != (0, e1.W3)(e)) ?? [], [n]),
        c = d.length > 0,
        u = r && d.length < 20,
        { trackUserProfileEditAction: m } = (0, eD.NJ)(),
        x = o.useRef(null),
        f = o.useRef(new Map()),
        h = o.useRef(null),
        p = o.useRef(null),
        I = o.useRef(null),
        [E, C] = o.useState(d.length),
        [A, b] = o.useState(!1),
        [N, w] = o.useState(!1),
        T = A || N;
    (o.useEffect(() => {
        s(T);
    }, [T, s]),
        o.useEffect(() => () => s(!1), [s]));
    let y = o.useCallback(
            (e, n) => {
                ((0, j.$6)(t, e),
                    m({ action: "added" === n ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: eT.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        k = o.useCallback(() => {
            (w(!0), m({ action: "PRESS_ADD_TAG", widgetEdited: eT.x.CLIPS_GALLERY }));
        }, [m]),
        R = o.useCallback(() => w(!1), []),
        S = o.useCallback(
            (e) => {
                ((0, j.Fo)(t, e), m({ action: "TAG_REMOVED", widgetEdited: eT.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        L = o.useCallback(() => {
            if (A) return;
            let e = x.current?.getBoundingClientRect().width ?? 0;
            if (0 === e || 0 === d.length) return void C(d.length);
            let t = I.current?.getBoundingClientRect().width ?? 0,
                n = h.current?.getBoundingClientRect().width ?? 0,
                i = e - (t > 0 ? t + 4 : 0),
                l = d.map((e) => f.current.get(e)?.offsetWidth ?? 0);
            function a(e, t) {
                let n = 0;
                for (let t = 0; t < e; t++) n += l[t] + 4 * (t > 0);
                return n <= t;
            }
            if (a(d.length, i)) return void C(d.length);
            let s = i - (n + 4),
                r = 0;
            for (; r < d.length && a(r + 1, s);) r++;
            C(r);
        }, [d, A]);
    (0, D.g)(x, L);
    let _ = d.length - E,
        P = _ > 0,
        O = o.useCallback(
            (e) => {
                (1 === _ && b(!1), S(e));
            },
            [S, _],
        );
    return c || u
        ? (0, i.jsxs)("div", {
              className: e8.kL,
              ref: x,
              children: [
                  (0, i.jsxs)("ul", {
                      className: e8.xP,
                      "aria-hidden": !0,
                      children: [
                          d.map((e) =>
                              (0, i.jsx)(
                                  e0.A,
                                  {
                                      tag: e,
                                      variant: "filled",
                                      onRemove: r ? () => {} : void 0,
                                      ref: (t) => {
                                          null != t && f.current.set(e, t);
                                      },
                                  },
                                  e,
                              ),
                          ),
                          (0, i.jsx)("li", {
                              className: e8.lv,
                              ref: h,
                              children: (0, i.jsx)(g.E, {
                                  variant: "text-xxs/medium",
                                  color: "none",
                                  children: `+${d.length}`,
                              }),
                          }),
                      ],
                  }),
                  c &&
                      (0, i.jsx)("ul", {
                          className: e8.nM,
                          "aria-label": v.intl.string(v.t["4Rq3a7"]),
                          children: d
                              .slice(0, E)
                              .map((e) =>
                                  (0, i.jsx)(e0.A, { tag: e, variant: "filled", onRemove: r ? () => S(e) : void 0 }, e),
                              ),
                      }),
                  P &&
                      (0, i.jsx)(e3, {
                          buttonRef: p,
                          numHidden: _,
                          isOpen: A,
                          onOpenChange: b,
                          disableInteraction: a,
                          children: d.map((e) =>
                              (0, i.jsx)(e0.A, { tag: e, className: e8.Hl, onRemove: r ? () => O(e) : void 0 }, e),
                          ),
                      }),
                  u && (0, i.jsx)(eZ.A, { tags: d, onTagsChange: y, onOpen: k, onClose: R, variant: "filled", ref: I }),
              ],
          })
        : null;
}
function e3(e) {
    let { buttonRef: t, numHidden: n, isOpen: l, onOpenChange: a, disableInteraction: s, children: r } = e,
        d = v.intl.string(v.t.pWHvBI);
    return s
        ? (0, i.jsx)("div", {
              className: `${e8.lv} ${e2.r9}`,
              ref: t,
              children: (0, i.jsx)(g.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
          })
        : (0, i.jsx)(K.Y, {
              targetElementRef: t,
              position: "top",
              align: "left",
              shouldShow: l,
              onRequestOpen: () => a(!0),
              onRequestClose: () => a(!1),
              renderPopout: () =>
                  (0, i.jsx)(e$.l, {
                      className: e8.Kt,
                      "aria-label": d,
                      returnRef: t,
                      children: (0, i.jsx)("ul", { className: e8.ns, children: r }),
                  }),
              children: (e) =>
                  (0, i.jsx)(k.m, {
                      text: d,
                      ariaHidden: !0,
                      children: (0, i.jsx)(E.D, {
                          ...e,
                          innerRef: t,
                          "aria-label": d,
                          "aria-expanded": l,
                          className: e8.lv,
                          children: (0, i.jsx)(g.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
                      }),
                  }),
          });
}
var e5 = n(3026);
n(600253);
var e4 = n(936026);
function e6(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, i.jsx)(g.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: N()(e4.Qw, { [e4.qf]: n }),
        children: (0, i.jsx)(e5.A, { children: t }),
    });
}
function e9(e) {
    let { clipId: t, title: n, onEditingChange: l } = e,
        { trackUserProfileEditAction: a } = (0, eD.NJ)(),
        s = o.useCallback(
            (e) => {
                let i = e.trim();
                i !== n.trim() &&
                    ((0, j.mI)(t, i),
                    a({ action: "CLIP_TITLE_EDITED", widgetEdited: eT.x.CLIPS_GALLERY, numCharacters: i.length }));
            },
            [t, n, a],
        ),
        r = v.intl.string(v.t["2gwc+H"]);
    return (
        o.useEffect(() => (l(!1), () => l(!1)), [l]),
        (0, i.jsx)("div", {
            className: N()(F.kL, F.oE, e4.ZZ),
            children: (0, i.jsx)(_.w, {
                value: n,
                onCommit: s,
                onFocus: () => l(!0),
                onBlur: () => l(!1),
                autoComplete: "off",
                defaultDirty: !0,
                hideLabel: !0,
                paddingBlock: "md",
                paddingInline: "sm",
                scrollIntoViewOnFocus: !0,
                preview: (0, i.jsxs)("span", {
                    className: N()(e4.$, e4.TG),
                    children: [
                        (0, i.jsx)(Y.PencilIcon, { size: "xxs", color: "currentColor", className: e4.wz }),
                        "" === n.trim()
                            ? (0, i.jsx)(e6, { value: r, isPlaceholder: !0 })
                            : (0, i.jsx)(e6, { value: n }),
                    ],
                }),
                placeholder: r,
                label: v.intl.string(v.t.PDnM11),
                maxLength: 200,
            }),
        })
    );
}
function te(e) {
    let { clipId: t, title: n, allowEditing: l, onEditingChange: a } = e,
        s = null != n && "" !== n.trim();
    return l || s
        ? l
            ? (0, i.jsx)(e9, { clipId: t, title: n ?? "", onEditingChange: a })
            : (0, i.jsx)("span", { className: e4.$, children: (0, i.jsx)(e6, { value: n ?? "" }) })
        : null;
}
var tt = n(663341),
    tn = n(451395),
    ti = n(823016);
function tl(e) {
    let { widgetClipId: t, gameId: n, className: l } = e,
        { trackUserProfileEditAction: a } = (0, eD.NJ)(),
        s = v.intl.string(v.t.ib6Mgx);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(k.m, {
            text: s,
            ariaHidden: !0,
            children: (0, i.jsx)(ey.K, {
                "aria-label": s,
                icon: T.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, j.mC)(t),
                        eU.O.announce(v.intl.string(v.t.zyPNb3)),
                        a({ action: "CLIP_REMOVED", widgetEdited: eT.x.CLIPS_GALLERY, gameId: n }));
                },
            }),
        }),
    });
}
var ta = n(233002);
function ts(e) {
    let { item: t, index: n, isSelected: l, onSelect: a, allowEditing: s } = e,
        { registerDragHandleRef: r, manageFocusOnReorder: d } = (0, ti.r)(),
        { trackUserProfileEditAction: c } = (0, eD.NJ)(),
        u = o.useRef(null),
        m = o.useCallback(
            (e, t) => {
                e !== t && ((0, j.N5)(e, t), c({ action: "CLIP_REORDERED", widgetEdited: eT.x.CLIPS_GALLERY }));
            },
            [c],
        ),
        g = s && ("saved" === t.status || "pending" === t.status),
        x = s && "uploading" === t.status,
        f = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(E.D, {
                    className: N()(ta.Vs, { [ta.wH]: l }),
                    "aria-pressed": l,
                    "aria-label": v.intl.formatToPlainString(v.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, i.jsx)(eQ.A, { item: t, ringSize: "sm", className: ta.nC }),
                }),
                g &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tn.jV, { buttonRef: r(t.key), className: ta.BU }),
                            (0, i.jsx)(tl, { widgetClipId: t.key, gameId: t.gameId, className: ta.nM }),
                        ],
                    }),
                x && (0, i.jsx)(eJ, { widgetClipId: t.key, gameId: t.gameId, className: ta.nM }),
            ],
        });
    return (0, i.jsx)("li", {
        ref: u,
        className: ta.NI,
        children: g
            ? (0, i.jsx)(tn.mG, {
                  index: n,
                  itemId: t.key,
                  listType: eT.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => u.current?.offsetWidth },
                  "aria-label": v.intl.formatToPlainString(v.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: m,
                  onEnd: () => d(t.key),
                  className: ta.oE,
                  dropBeforeClassName: ta.A,
                  dropAfterClassName: ta.Ze,
                  draggingClassName: ta.Id,
                  children: f,
              })
            : f,
    });
}
function tr(e) {
    let { items: t, selectedKey: n, onSelect: l, onAddClip: a, allowEditing: s = !1 } = e,
        r = Math.max(0, 4 - t.length),
        d = (0, i.jsxs)("ul", {
            className: ta.Xm,
            style: { "--custom-clips-filmstrip-slots": 4 },
            children: [
                t.map((e, t) =>
                    (0, i.jsx)(ts, { item: e, index: t, isSelected: e.key === n, onSelect: l, allowEditing: s }, e.key),
                ),
                null != a &&
                    Array.from({ length: r }, (e, t) =>
                        (0, i.jsx)(
                            "li",
                            {
                                className: ta.NI,
                                children: (0, i.jsx)(E.D, {
                                    className: ta.Yn,
                                    "aria-label": v.intl.string(v.t.rI0i0a),
                                    onClick: a,
                                    children: (0, i.jsx)(tt.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return s ? (0, i.jsx)(ti.B, { emptyListFallbackRef: null, children: d }) : d;
}
var td = n(729475),
    to = n(358618),
    tc = n(983851);
function tu(e) {
    let { isMuted: t, onToggleMuted: n, onFullscreen: l } = e,
        a = v.intl.string(v.t.dcl9MQ),
        s = v.intl.string(t ? v.t.YqAjXy : v.t.w4m945);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(k.m, {
                text: a,
                ariaHidden: !0,
                children: (0, i.jsx)(ey.K, {
                    "aria-label": a,
                    icon: td.T,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: l,
                }),
            }),
            (0, i.jsx)(k.m, {
                text: s,
                ariaHidden: !0,
                children: (0, i.jsx)(ey.K, {
                    "aria-label": s,
                    icon: t ? to._ : tc.H,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: n,
                }),
            }),
        ],
    });
}
var tm = n(798108),
    tg = n(297264),
    tx = n(915089),
    tf = n(772168);
function th(e) {
    let { onDismiss: t, children: n, className: l } = e,
        a = (0, tx.GV)();
    return (0, i.jsxs)("aside", {
        className: N()(tf.kL, l),
        "aria-labelledby": a,
        children: [
            (0, i.jsxs)("div", {
                className: tf.wx,
                children: [
                    (0, i.jsx)(E.D, {
                        className: tf.r,
                        "aria-label": v.intl.string(v.t["pUR+3g"]),
                        onClick: t,
                        children: (0, i.jsx)(eH.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(tg.D, {
                        id: a,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: v.intl.string(v.t.zMUr6Z),
                    }),
                ],
            }),
            n,
        ],
    });
}
var tp = n(335978);
function tj(e) {
    let { clip: t, onAddClip: n } = e,
        l = v.intl.formatToPlainString(v.t.gPRdVj, { clipName: t.name ?? t.applicationName }),
        a = o.useCallback(() => n(t), [t, n]);
    return (0, i.jsx)(k.m, {
        text: l,
        ariaHidden: !0,
        children: (0, i.jsxs)(E.D, {
            className: tp.Vs,
            "aria-label": l,
            onClick: a,
            children: [
                (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: tp.xn, loading: "lazy" }),
                (0, i.jsx)(tt.PlusLargeIcon, { size: "sm", color: "currentColor", className: tp.Xv }),
            ],
        }),
    });
}
function tI(e) {
    let { clips: t, onAddClip: n, ...l } = e;
    return (0, i.jsx)(th, {
        ...l,
        children: (0, i.jsx)("ul", {
            className: tp.p_,
            children: t.map((e) =>
                (0, i.jsx)("li", { className: tp.NI, children: (0, i.jsx)(tj, { clip: e, onAddClip: n }) }, e.id),
            ),
        }),
    });
}
var tE = n(769015),
    tv = n(409626),
    tC = n(692969),
    tA = n(202163),
    tb = n(207803),
    tN = n(591179),
    tw = n(485745),
    tT = n(308766);
function ty(e) {
    let { gameId: t, userId: n, className: l } = e,
        { gameRecord: a } = (0, tA.A)(t),
        s = !(0, tN.X)("WidgetClipGameIcon"),
        r = (0, tw.A)(s),
        d = (0, tC.A)({
            location: "WidgetClipGameIcon",
            applicationId: t,
            source: tv.GameProfileSources.UserProfile,
            sourceUserId: n,
        }),
        c = o.useCallback(
            (e) => {
                if (r) {
                    (e.preventDefault(), e.stopPropagation(), (0, tb.VQ)());
                    return;
                }
                d?.(e);
            },
            [r, d],
        ),
        u = a?.name;
    if (null == u) return null;
    let m = (0, i.jsx)(tE.A, { game: a, size: tE.M.XSMALL, allowUnknownGameIcon: !1 });
    return (0, i.jsx)(k.m, {
        text: u,
        ariaHidden: !0,
        children:
            null == d
                ? (0, i.jsx)(k.m, {
                      text: u,
                      ariaHidden: !0,
                      children: (0, i.jsx)("div", { className: l, children: m }),
                  })
                : (0, i.jsx)(E.D, {
                      className: N()(tT.v, l),
                      "aria-label": v.intl.formatToPlainString(v.t["8QLQB+"], { gameName: u }),
                      onClick: c,
                      children: m,
                  }),
    });
}
function tk(e) {
    return null != e.applicationId && 0 !== e.length;
}
var tR = n(558285),
    tS = n(608857),
    tL = n(274372),
    t_ = n(409067),
    tP = n(716112);
function tD(e) {
    let { onClick: t } = e,
        n = v.intl.string(v.t.rI0i0a);
    return (0, i.jsx)(k.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, i.jsx)(ey.K, { variant: "secondary", size: "sm", icon: ek.T, "aria-label": n, onClick: t }),
    });
}
function tO() {
    return (0, i.jsx)("div", {
        className: tP.p$,
        children: (0, i.jsx)(g.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: v.intl.format(v.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tG(e) {
    let t,
        l,
        { widget: a, user: s, allowEditing: r, disableInteraction: d, ...c } = e,
        [m, g] = o.useState(!1),
        [x, f] = o.useState(!1),
        [h, p] = o.useState(!0),
        C = (0, u.bG)([eR.Ay], () => eR.Ay.useReducedMotion),
        A = (0, ew.K)(f, 0.5),
        [b, N] = o.useState(!1),
        [w, T] = o.useState(!1),
        y = o.useRef(void 0),
        k = (0, tS.A)(a),
        R =
            ((t = (0, u.yK)([tL.Ay], () => Object.values(tL.Ay.getClips()))),
            (l = (0, u.bG)([tL.Ay], () => tL.Ay.getSettings().showPovClipsInGallery)),
            o.useMemo(() => {
                let e = new Set();
                for (let t of a.clips) null != t.localClipId && e.add(t.localClipId);
                return t
                    .filter((t) => !(e.has(t.id) || !tk(t) || (!l && (0, t_.kD)(t))))
                    .sort((e, t) => {
                        let n = !0 === e.isFavorite;
                        return n !== (!0 === t.isFavorite) ? (n ? -1 : 1) : t.createdAt - e.createdAt;
                    })
                    .slice(0, 3);
            }, [t, l, a.clips])),
        [S, L] = o.useState(null),
        _ = k.find((e) => e.key === S) ?? k[0],
        P = (0, eL.sw)(),
        { trackUserProfileAction: D, trackUserProfileEditAction: O } = (0, eD.NJ)(),
        G = r && !0 !== d,
        M = 0 === k.length,
        F = k.length >= 4,
        U = G && P && !F,
        H = G || k.length > 1,
        [V] = o.useState(() => R.length >= 3),
        [W, X] = o.useState(!1),
        K = eM(a.type),
        Y = U && !K && V && !W && R.length > 0,
        B = o.useCallback(() => {
            (X(!0), O({ action: "DISMISS_SUGGESTED_CLIPS", widgetEdited: eT.x.CLIPS_GALLERY }));
        }, [O]),
        z = o.useCallback(
            (e) => {
                (L(e), e !== _?.key && D({ action: "SELECT_CLIP", widgetType: eT.x.CLIPS_GALLERY }));
            },
            [_?.key, D],
        ),
        q = o.useMemo(() => (!0 === d ? [] : k.filter(tS.K)), [k, d]),
        J = null != _ ? q.findIndex((e) => e.key === _.key) : -1,
        Z = o.useCallback(() => {
            J < 0 ||
                (D({ action: "PRESS_PLAY_CLIP", widgetType: eT.x.CLIPS_GALLERY }),
                (0, tR.A)({ clips: q, startingIndex: J }));
        }, [q, J, D]),
        ee = o.useCallback(() => {
            let e = !h;
            (p(e), D({ action: e ? "MUTE_CLIP_PREVIEW" : "UNMUTE_CLIP_PREVIEW", widgetType: eT.x.CLIPS_GALLERY }));
        }, [h, D]),
        et = o.useCallback(() => {
            if (J < 0) return;
            let e = q[(J + 1) % q.length];
            null != e && L(e.key);
        }, [q, J]),
        en = J >= 0 && !C && x,
        ei = (en || m) && !b && !w,
        el = o.useCallback(() => {
            J < 0 ||
                en ||
                (y.current = window.setTimeout(() => {
                    (g(!0), D({ action: "HOVER_PLAY_CLIP", widgetType: eT.x.CLIPS_GALLERY }));
                }, 150));
        }, [en, J, D]),
        ea = o.useCallback(() => {
            (window.clearTimeout(y.current), g(!1));
        }, []);
    (o.useEffect(() => () => window.clearTimeout(y.current), []),
        o.useEffect(() => {
            (0, e_.v)();
        }, []));
    let es = o.useCallback(
            (e, t) => {
                let n = (function (e, t) {
                    if (null == e.applicationId)
                        return ((0, Q.P0)({ text: v.intl.string(v.t.xcLXWy), variant: "critical" }), null);
                    let n = (0, eX.m)();
                    if (
                        !(0, j.$C)({
                            status: "uploading",
                            id: n,
                            localClipId: e.id,
                            gameId: e.applicationId,
                            title: e.name,
                            thumbnail: e.thumbnail,
                        })
                    )
                        return null;
                    let i = new AbortController();
                    return ((0, eK.yf)(n, i), eq(e, n, e.applicationId, i, t), n);
                })(e, { analyticsLocations: [eS.A.USER_PROFILE_MODAL_V2], source: t, trackEditAction: O });
                null != n && L(n);
            },
            [O],
        ),
        er = o.useCallback((e) => es(e, eY.IE.SUGGESTED), [es]),
        ed = o.useCallback(() => {
            (O({ action: "PRESS_ADD_CLIP", widgetEdited: eT.x.CLIPS_GALLERY }),
                (0, $.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("459368"),
                            n.e("821717"),
                            n.e("269714"),
                            n.e("19385"),
                            n.e("718955"),
                            n.e("126301"),
                            n.e("201074"),
                            n.e("879641"),
                            n.e("216112"),
                            n.e("498167"),
                            n.e("553829"),
                            n.e("895840"),
                            n.e("865257"),
                            n.e("228767"),
                            n.e("323079"),
                            n.e("437655"),
                            n.e("430877"),
                            n.e("641794"),
                            n.e("914553"),
                            n.e("586467"),
                            n.e("875842"),
                            n.e("643612"),
                            n.e("124060"),
                            n.e("146566"),
                            n.e("317225"),
                            n.e("32661"),
                            n.e("696123"),
                            n.e("124006"),
                            n.e("73500"),
                            n.e("237834"),
                            n.e("858337"),
                            n.e("324761"),
                            n.e("97210"),
                            n.e("434691"),
                            n.e("757598"),
                            n.e("203930"),
                            n.e("903663"),
                            n.e("177104"),
                            n.e("496268"),
                            n.e("918024"),
                            n.e("466147"),
                            n.e("507406"),
                            n.e("838090"),
                            n.e("501962"),
                            n.e("901922"),
                            n.e("583518"),
                            n.e("974049"),
                            n.e("280559"),
                            n.e("237715"),
                            n.e("231782"),
                            n.e("895008"),
                            n.e("352566"),
                            n.e("793784"),
                            n.e("689160"),
                            n.e("520342"),
                            n.e("306270"),
                            n.e("650676"),
                            n.e("717278"),
                        ]).then(n.bind(n, 272351));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                initialMainLink: eP.oH.ALL_CLIPS,
                                picker: {
                                    onPick: (e) => {
                                        (((e) => es(e, eY.IE.PICKER))(e), t.onClose());
                                    },
                                    action: eP.qh.UPLOAD,
                                    filterClip: tk,
                                    allowMultiSelect: !1,
                                },
                            });
                    },
                    { modalKey: eB.nm },
                ));
        }, [es, O]);
    return (0, i.jsx)(I.A, {
        userId: s.id,
        widget: a,
        allowEditing: r,
        disableInteraction: d,
        headerTitle: (0, j.L)(a),
        headerSubtitle: G && !M ? v.intl.format(v.t.pb2Was, { numClips: 4 }) : void 0,
        headerActionButtons: U && M ? [(0, i.jsx)(tD, { onClick: ed }, "clips-gallery-add-clip")] : void 0,
        trailingContent:
            Y &&
            (0, i.jsx)("div", {
                className: tP.$k,
                children: (0, i.jsx)(tI, { clips: R, onAddClip: er, onDismiss: B }),
            }),
        ...c,
        children:
            null != _
                ? (0, i.jsxs)("div", {
                      className: tP.nV,
                      children: [
                          (0, i.jsxs)("div", {
                              ref: A,
                              className: tP.aM,
                              onMouseEnter: el,
                              onMouseLeave: ea,
                              children: [
                                  (0, i.jsx)(eQ.A, {
                                      item: _,
                                      ringSize: "lg",
                                      isPlaying: ei,
                                      isMuted: h,
                                      modalKey: (0, eF.n1)(s.id, c.guildId),
                                      fit: "contain",
                                      onEnded: q.length > 1 ? et : void 0,
                                      className: tP.VH,
                                  }),
                                  J >= 0 &&
                                      !b &&
                                      !w &&
                                      (0, i.jsx)(E.D, {
                                          className: tP.Hf,
                                          "aria-label": v.intl.string(v.t.CscLHM),
                                          onClick: Z,
                                      }),
                                  ("saved" === _.status || "pending" === _.status) &&
                                      (0, i.jsx)(ty, { gameId: _.gameId, userId: s.id, className: tP.AT }),
                                  G &&
                                      "uploading" === _.status &&
                                      (0, i.jsx)(eJ, { widgetClipId: _.key, gameId: _.gameId, className: tP.MY }),
                                  G
                                      ? ("saved" === _.status || "pending" === _.status) &&
                                        (0, i.jsx)("div", {
                                            className: tP.nP,
                                            children: (0, i.jsx)(tl, { widgetClipId: _.key, gameId: _.gameId }),
                                        })
                                      : J >= 0 &&
                                        (0, i.jsx)("div", {
                                            className: tP.nP,
                                            children: (0, i.jsx)(tu, {
                                                isMuted: h,
                                                onToggleMuted: ee,
                                                onFullscreen: Z,
                                            }),
                                        }),
                                  (0, i.jsx)(tm.A, {
                                      children:
                                          ("saved" === _.status || "pending" === _.status) &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(te, {
                                                      clipId: _.key,
                                                      title: _.title,
                                                      allowEditing: G,
                                                      onEditingChange: N,
                                                  }),
                                                  (0, i.jsx)(e7, {
                                                      clipId: _.key,
                                                      tags: _.tags,
                                                      allowEditing: r,
                                                      disableInteraction: d,
                                                      onEditingChange: T,
                                                  }),
                                              ],
                                          }),
                                  }),
                              ],
                          }),
                          H &&
                              (0, i.jsx)(tr, {
                                  items: k,
                                  selectedKey: _.key,
                                  onSelect: z,
                                  onAddClip: U ? ed : void 0,
                                  allowEditing: G,
                              }),
                      ],
                  })
                : (0, i.jsx)(tO, {}),
    });
}
var tM = n(896170),
    tF = n(453318),
    tU = n(168017),
    tH = n(778747),
    tV = n(321108),
    tW = n(106191),
    tX = n(404277),
    tK = n(383329),
    tY = n(373842),
    tB = n(67710);
function tz(e) {
    let { renderGameListItem: t } = e,
        { extraChromeEnabled: n } = tU.A.useConfig({ location: "browse_games_popout" });
    return (0, i.jsx)(tF.X2, { maxVisibleItems: 7, renderListItem: n ? t : void 0 });
}
function tq(e) {
    let { widgetType: t, widget: n, onAddGame: l, children: a, ...s } = e,
        r = o.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: d } = (0, eD.NJ)(),
        [c, u] = o.useState(""),
        m = o.useRef(""),
        {
            options: x,
            matchSorterOptions: f,
            metadataByGameId: h,
            onSelect: p,
            endSession: I,
        } = (0, tK.R)({ surface: tH.K.PROFILE_WIDGET, query: c }),
        E = c.trim().length > 0,
        { gameIds: C, onAddGame: A } = (0, tY.S)(t),
        b = (0, tV.A)(C),
        N = o.useCallback(
            (e) => {
                (p(e),
                    (0, j.ew)({ widgetType: t, game: { gameId: e } }),
                    eU.O.announce(v.intl.string(v.t.q0U3DE)),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    C.includes(e) && A(e),
                    l?.());
            },
            [t, d, l, C, A, p],
        ),
        w = o.useMemo(() => {
            let e = new Map(
                x.map((e) => [
                    String(e.value),
                    { id: String(e.value), value: String(e.value), label: e.label, disabled: r.has(e.value) },
                ]),
            );
            if (E) return [...e.values()];
            let t = b
                    .filter((e) => !r.has(e.id) && (0, j.XX)(e))
                    .map((e) => ({ id: String(e.id), value: String(e.id), label: e.name, disabled: !1 })),
                n = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !n.has(e.id))];
        }, [x, r, b, E]),
        T = o.useMemo(() => {
            let e = new Map(h);
            for (let t of b) e.set(t.id, { icon: t.media?.icon, platformAvailability: t.platformAvailability });
            return e;
        }, [h, b]),
        y = o.useCallback(
            (e) => {
                let t = e.value,
                    n = null != t ? T.get(t) : void 0;
                return (0, i.jsxs)("div", {
                    className: tB.mN,
                    children: [
                        null != t && (0, i.jsx)(tW.A, { game: { id: t, icon: n?.icon }, iconClassName: tB.DG }),
                        (0, i.jsx)(g.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            lineClamp: 1,
                            className: tB.EF,
                            children: e.label,
                        }),
                        (0, i.jsx)(tX.A, { platforms: n?.platformAvailability }),
                    ],
                });
            },
            [T],
        ),
        k = o.useCallback((e) => e, []),
        R = o.useMemo(() => ({ ...f, threshold: tM.Ht.rankings.CONTAINS, keys: ["label"] }), [f]),
        S = o.useCallback((e) => (E || "" === e.trim() ? w.length : (0, tM.Ht)(w, e, R).length), [E, w, R]),
        L = o.useCallback(
            (e) => {
                let n = e.target.value;
                ("" === c.trim() &&
                    "" !== n.trim() &&
                    d({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: S(n),
                    }),
                    u(n),
                    (m.current = n));
            },
            [c, d, t, S],
        );
    return (0, i.jsx)(K.Y, {
        ...s,
        onRequestOpen: () => {
            (d({ action: "PRESS_ADD_GAME", widgetEdited: t }), u(""), (m.current = ""));
        },
        onRequestClose: () => {
            (I(),
                d({
                    action: "GAME_SEARCH_SESSION_ENDED",
                    widgetEdited: t,
                    numCharacters: m.current.trim().length,
                    numResults: S(m.current),
                }));
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(e$.l, {
                className: tB.C2,
                "aria-label": v.intl.string(v.t.uqw8wK),
                children: (0, i.jsxs)(tF.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (N(e), t(), I());
                    },
                    options: w,
                    matchSorterOptions: R,
                    customMatchSorter: E ? k : void 0,
                    children: [
                        (0, i.jsx)(tF.a3, {
                            label: v.intl.string(v.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: v.intl.string(v.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: L,
                        }),
                        (0, i.jsx)(tz, { renderGameListItem: y }),
                    ],
                }),
            });
        },
        children: (e) => a(e),
    });
}
function tJ(e) {
    let { disabled: t, ...n } = e,
        l = o.useRef(null);
    return (0, i.jsx)(tq, {
        targetElementRef: l,
        position: "bottom",
        align: "center",
        ...n,
        children: (e) =>
            (0, i.jsx)(k.m, {
                text: v.intl.string(v.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, i.jsx)(ey.K, {
                    buttonRef: l,
                    variant: "secondary",
                    size: "sm",
                    icon: ek.T,
                    "aria-label": v.intl.string(v.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function tQ(e) {
    let t = o.useRef(null);
    return (0, i.jsx)(tq, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, i.jsx)(E.D, {
                innerRef: t,
                className: tB.cV,
                "aria-label": v.intl.string(v.t.PYyENc),
                ...e,
                children: (0, i.jsx)(tt.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
var t$ = n(61881);
let tZ = o.createContext(null);
function t0(e) {
    let { widgetType: t, children: n } = e,
        l = (0, u.bG)([t$.A], () => {
            let e = t$.A.getPendingWidgets();
            if (null == e) return !1;
            let n = e.find((e) => e.type === t);
            if (null == n) return !1;
            let i = (0, j.cv)(t);
            return n.games.length > i;
        }),
        [a, s] = o.useState(l);
    return (0, i.jsx)(tZ.Provider, { value: { expanded: a, setExpanded: s }, children: n });
}
function t1() {
    let e = o.useContext(tZ);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var t2 = n(67438);
function t8(e) {
    let { widget: t } = e,
        n = (0, j.cv)(t.type),
        l = 1 === n,
        a = l ? v.intl.string(v.t["3FdPBT"]) : v.intl.format(v.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? t2.O : t2.k,
        children: [
            l && (0, i.jsx)(tQ, { widget: t, widgetType: t.type }),
            (0, i.jsx)(g.E, { variant: "text-xs/normal", color: "text-subtle", children: a }),
        ],
    });
}
var t7 = n(683071),
    t3 = n(312252);
function t5(e) {
    let { widgetType: t, gameCount: n } = e,
        l = (0, j.cv)(t);
    return n <= l
        ? null
        : (0, i.jsx)("div", {
              role: "alert",
              className: t3.l,
              children: (0, i.jsx)(t7.w, {
                  type: "warning",
                  message: v.intl.formatToPlainString(v.t.Rv3wYq, { maxGames: l }),
                  role: "none",
              }),
          });
}
var t4 = n(943793),
    t6 = n(192),
    t9 = n(148420);
function ne(e) {
    let { games: t, user: n, widgetType: l, ...a } = e,
        { registerItemRef: s, manageFocusOnDelete: r } = (0, ti.r)();
    return (0, i.jsx)("ul", {
        className: t9.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(t4.A, {
                        index: t,
                        user: n,
                        game: e,
                        widgetType: l,
                        coverRef: s(e.gameId),
                        onRemoveGame: r,
                        ...a,
                    }),
                },
                e.gameId,
            ),
        ),
    });
}
function nt(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: a } = e,
        { getManageButtonForWidget: s } = (0, t6.r)(),
        r = s(t),
        { expanded: d, setExpanded: o } = t1(),
        c = d ? a : a.slice(0, 2),
        u = a.length > 2,
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ne, { ...e, games: c }),
                u && (0, i.jsx)(A, { expanded: d, onClick: () => o((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(t5, { widgetType: t, gameCount: a.length }),
                  (0, i.jsx)(ti.B, { emptyListFallbackRef: r, children: m }),
              ],
          })
        : m;
}
function nn(e) {
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...d } = e;
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...d,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nt, {
                      user: t,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(t8, { widget: n }),
    });
}
function ni(e) {
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...d } = e,
        o = n.games[0];
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...d,
        children:
            null != o
                ? (0, i.jsx)(t4.A, {
                      user: t,
                      widgetType: n.type,
                      game: o,
                      guildId: l,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(t8, { widget: n }),
    });
}
var nl = n(793693);
function na(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: nl.V,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var ns = n(675816),
    nr = n(201438),
    nd = n(788593),
    no = n(858808),
    nc = n(365611),
    nu = n(900850);
function nm(e) {
    let { index: t, widgetType: n, game: l, coverImageUrl: a, gameName: s, children: r } = e,
        { manageFocusOnReorder: d } = (0, ti.r)(),
        c = o.useRef(null);
    return (0, i.jsx)(tn.mG, {
        index: t,
        itemId: l.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: a, gameName: s, getWidth: () => c.current?.offsetWidth },
        "aria-label": v.intl.formatToPlainString(v.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, j.Un)(n, e, t),
        onEnd: () => d(l.gameId),
        className: nu.kL,
        dropBeforeClassName: nu.A,
        dropAfterClassName: nu.Ze,
        draggingClassName: nu.Id,
        children: (0, i.jsx)("div", { ref: c, className: nu.An, children: r }),
    });
}
function ng(e) {
    let {
            game: t,
            userId: n,
            widgetType: l,
            allowEditing: a,
            disableInteraction: s = !1,
            index: r,
            onRemoveGame: d,
            coverRef: o,
        } = e,
        { coverImageUrl: c, gameName: u, isLoading: m } = (0, nr.A)(t.gameId),
        { registerDragHandleRef: g } = (0, ti.r)(),
        x = a && !s,
        { isDragging: f } = (0, ns.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nd.A, {
                    imageSrc: c,
                    gameName: u,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: s,
                    className: null == c || s ? void 0 : nc.iL,
                    hideTooltip: f,
                    coverRef: o,
                }),
                x && (0, i.jsx)(tn.jV, { buttonRef: g(t.gameId), className: nu.BU }),
                x && (0, i.jsx)(no.A, { game: t, widgetType: l, className: nu.vS, onRemove: () => d?.(t.gameId) }),
            ],
        });
    }
    return m
        ? (0, i.jsx)("div", { className: nc.mD })
        : x
          ? (0, i.jsx)(nm, { widgetType: l, index: r ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, i.jsx)("div", { className: nu.kL, children: h() });
}
function nx(e) {
    let { games: t, userId: n, widgetType: l, allowEditing: a, disableInteraction: s } = e,
        { registerItemRef: r, manageFocusOnDelete: d } = (0, ti.r)();
    return (0, i.jsx)(na, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(ng, {
                index: t,
                game: e,
                userId: n,
                widgetType: l,
                allowEditing: a,
                disableInteraction: s,
                coverRef: r(e.gameId),
                onRemoveGame: d,
            }),
    });
}
function nf(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: a } = e,
        { getManageButtonForWidget: s } = (0, t6.r)(),
        r = s(t),
        { expanded: d, setExpanded: o } = t1(),
        c = d ? a : a.slice(0, 8),
        u = a.length > 8,
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nx, { ...e, games: c }),
                u && (0, i.jsx)(A, { expanded: d, onClick: () => o((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(t5, { widgetType: t, gameCount: a.length }),
                  (0, i.jsx)(ti.B, { emptyListFallbackRef: r, children: m }),
              ],
          })
        : m;
}
function nh(e) {
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...d } = e;
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...d,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nf, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(t8, { widget: n }),
    });
}
function np(e) {
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...d } = e;
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...d,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nf, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(t8, { widget: n }),
    });
}
var nj = n(875620);
function nI(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: a, gameName: s, isLoading: r } = (0, nr.A)(t),
        d = (0, u.bG)([t$.A], () => t$.A.suggestedFetchIsLoading),
        o = v.intl.formatToPlainString(v.t["3mb1s5"], { game: s });
    return r || d
        ? (0, i.jsx)("div", { className: nc.mD })
        : (0, i.jsx)(k.m, {
              text: o,
              ariaHidden: !0,
              children: (0, i.jsxs)(E.D, {
                  className: nj.c9,
                  onClick: l,
                  "aria-label": o,
                  children: [
                      (0, i.jsx)(nd.A, {
                          className: nj.Iv,
                          imageSrc: a,
                          gameName: s,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(tt.PlusLargeIcon, { size: "md", className: nj.Xv, color: em.A.colors.WHITE }),
                  ],
              }),
          });
}
function nE(e) {
    let { userId: t, widgetType: n, ...l } = e,
        { games: a, onAddGame: s } = (0, tY.S)(n),
        { setExpanded: r } = t1(),
        { trackUserProfileEditAction: d } = (0, eD.NJ)(),
        c = o.useCallback(
            (e) => {
                (s(e),
                    r(!0),
                    (0, j.ew)({ widgetType: n, game: { gameId: e } }),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: n }));
            },
            [s, n, d, r],
        );
    return (0, i.jsx)(th, {
        ...l,
        children: (0, i.jsx)("ul", {
            className: nj.Vg,
            children: a.map((e) => {
                let { gameId: n } = e;
                return (0, i.jsx)("li", { children: (0, i.jsx)(nI, { onClick: () => c(n), userId: t, gameId: n }) }, n);
            }),
        }),
    });
}
var nv = n(870961);
function nC(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case eT.x.FAVORITE_GAMES:
            return (0, i.jsx)(ni, { widget: t, ...n });
        case eT.x.CURRENT_GAMES:
            return (0, i.jsx)(nn, { widget: t, ...n });
        case eT.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(np, { widget: t, ...n });
        case eT.x.PLAYED_GAMES:
            return (0, i.jsx)(nh, { widget: t, ...n });
        default:
            return null;
    }
}
function nA(e) {
    let { widget: t, user: n, allowEditing: l, disableInteraction: a, ...s } = e,
        { setExpanded: r } = t1(),
        { shouldShowSuggestions: d, handleDismissSuggestions: c } = (function (e) {
            let [t, n] = o.useState(!1),
                i = eM(e.type),
                l = (0, j.uA)(e);
            return {
                shouldShowSuggestions: !i && !t && !l,
                handleDismissSuggestions: o.useCallback(() => {
                    n(!0);
                }, []),
            };
        })(t),
        u = l && !a,
        m = u && d,
        g = (0, j.L)(t),
        x = (0, j.FM)(t, { showEditingControls: u }),
        f = (0, j.uA)(t),
        h = 1 === (0, j.cv)(t.type);
    return (0, i.jsx)(nC, {
        widget: t,
        user: n,
        allowEditing: l,
        disableInteraction: a,
        headerTitle: g,
        headerSubtitle: x,
        headerActionButtons:
            u && !h
                ? [
                      (0, i.jsx)(
                          tJ,
                          { disabled: f, widgetType: t.type, widget: t, onAddGame: () => r(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, i.jsx)(nE, { userId: n.id, widgetType: t.type, onDismiss: c, className: nv.r }),
        ...s,
    });
}
function nb(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(t0, { widgetType: t.type, children: (0, i.jsx)(nA, { widget: t, ...n }) });
}
function nN(e) {
    let { widget: t, ...n } = e;
    return t instanceof l.R
        ? (0, i.jsx)(d.A, { widget: t, ...n })
        : t instanceof r.Tu
          ? (0, i.jsx)(eN, { widget: t, ...n })
          : (0, s.fu)(t)
            ? (0, i.jsx)(nb, { widget: t, ...n })
            : t instanceof a.kM
              ? (0, i.jsx)(tG, { widget: t, ...n })
              : null;
}
