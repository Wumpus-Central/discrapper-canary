n.d(t, { u: () => nR });
var i = n(477900),
    l = n(633075),
    a = n(646976),
    s = n(289173),
    r = n(210598),
    o = n(591410),
    d = n(582128),
    c = n(869484),
    u = n(855986),
    m = n(315629),
    g = n(834730),
    x = n(465794),
    f = n(450232),
    h = n(287809),
    p = n(448645),
    j = n(735321),
    I = n(40989),
    E = n(939249),
    v = n(792996),
    C = n(954165);
function A(e) {
    let { onClick: t, expanded: n } = e;
    return (0, i.jsx)(E.D, {
        onClick: t,
        className: C.x,
        "aria-expanded": n,
        children: (0, i.jsx)(g.E, {
            variant: "body-sm/medium",
            color: "none",
            children: n ? v.intl.string(v.t["6MwJo/"]) : v.intl.string(v.t.lBeKY2),
        }),
    });
}
var b = n(503698),
    N = n.n(b),
    y = n(43990),
    w = n(241326),
    R = n(33969),
    T = n(866665),
    S = n(245604),
    k = n(601089);
function L(e) {
    let { label: t, onClick: n, className: l } = e;
    return (0, i.jsx)(T.m, {
        text: t,
        children: (0, i.jsxs)(E.D, {
            className: N()(k.kL, l),
            "aria-label": t,
            onClick: n,
            children: [
                (0, i.jsx)("div", { className: k.n8 }),
                (0, i.jsx)("div", { className: k.zc, children: (0, i.jsx)(S.CirclePlusIcon, { size: "sm" }) }),
                (0, i.jsx)("div", { className: k.n8 }),
            ],
        }),
    });
}
var _ = n(34011),
    P = n(448766),
    D = n(770178);
let O = d.createContext({
    isAnyFieldClipped: !1,
    isExpanded: !1,
    setAnyFieldClipped: () => {},
    setIsExpanded: () => {},
});
function G(e) {
    let { children: t } = e,
        [n, l] = d.useState(!1),
        [a, s] = d.useState(!1),
        [r] = d.useState(() => new Set()),
        o = d.useCallback(
            (e, t) => {
                (t ? r.add(e) : r.delete(e), s(r.size > 0));
            },
            [r],
        ),
        c = d.useMemo(
            () => ({ isExpanded: n, setIsExpanded: l, isAnyFieldClipped: a, setAnyFieldClipped: o }),
            [n, a, o],
        );
    return (0, i.jsx)(O.Provider, { value: c, children: t });
}
function M() {
    return d.useContext(O);
}
var F = n(404760),
    U = n(892572);
function K(e) {
    let { className: t, variant: n, color: l, value: a, maxLines: s, interactive: r = !0, disableMarkdown: o = !1 } = e,
        c = r ? P.d : P.j,
        { textRef: u, lineClamp: m } = (function (e, t) {
            let { isExpanded: n, setAnyFieldClipped: i } = d.useContext(O),
                l = d.useId(),
                a = d.useRef(null),
                s = d.useCallback(() => {
                    let e = a.current;
                    null != e && i(l, e.scrollWidth - e.clientWidth > 1 || e.scrollHeight - e.clientHeight > 1);
                }, [l, i]);
            return (
                (0, D.g)(a, s, [n, t], { fireOnMount: !0, fireOnDepsChange: !0 }),
                d.useEffect(() => () => i(l, !1), [l, i]),
                { textRef: a, lineClamp: n ? void 0 : e }
            );
        })(s, a);
    return (0, i.jsx)(g.E, {
        ref: u,
        className: N()(U.YD, { [U.Lq]: s > 1 }, t),
        variant: n,
        color: l,
        lineClamp: m,
        children: o ? a : c(a),
    });
}
function W(e) {
    let {
            value: t,
            placeholder: n,
            variant: l,
            color: a,
            onCommit: s,
            maxLength: r,
            maxLines: o,
            growWidth: c,
            disableMarkdown: u,
        } = e,
        m = d.useCallback((e) => s(e.trim()), [s]),
        { isExpanded: g } = M(),
        x =
            "" === t.trim()
                ? null
                : (0, i.jsx)(K, { interactive: !1, variant: l, color: a, value: t, maxLines: o, disableMarkdown: u });
    return (0, i.jsx)("div", {
        className: N()(F.kL, U.ZZ, { [F.oE]: 1 === o, [F.CP]: c }),
        children: (0, i.jsx)(_.w, {
            value: t,
            onCommit: m,
            autoComplete: "off",
            defaultDirty: !0,
            hideLabel: !0,
            multiline: 1 !== o,
            paddingBlock: "md",
            paddingInline: 1 === o ? "sm" : "md",
            preview: x,
            placeholder: n,
            label: n,
            maxLength: r,
            maxRows: 1 === o || g ? void 0 : o,
            textVariant: l,
            scrollIntoViewOnFocus: !0,
        }),
    });
}
function V(e) {
    return e.canEdit
        ? (0, i.jsx)(W, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, i.jsx)(K, {
                variant: e.variant,
                color: e.color,
                value: e.value,
                maxLines: e.maxLines,
                disableMarkdown: e.disableMarkdown,
            });
}
var X = n(494633),
    H = n(265872),
    Y = n(22231),
    B = n(750943),
    z = n(458499);
function q(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: a, onChangeImage: s } = e;
    return (0, i.jsx)(H.Y, {
        targetElementRef: n,
        align: "right",
        position: "bottom",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(z.A, { lastEdit: t, cropAndUpload: a, onChangeImage: s, onClose: n });
        },
        children: (e) =>
            (0, i.jsx)(R.Y, {
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
        ? (0, i.jsx)(R.Y, {
              ref: n,
              icon: B.ImagePlusIcon,
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
    el = n(856383),
    ea = n(958805);
function es(e) {
    let { uploadType: t, returnRef: l, getCropAspectRatio: a, onUploadSuccess: s } = e,
        r = d.useRef(0),
        [o, c] = d.useState(null),
        [u, m] = d.useState(null),
        g = (0, Z.A)(s),
        x = d.useCallback(() => {
            ((r.current = r.current + 1), c(null), m(null));
        }, []),
        f = d.useCallback(
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
        h = d.useCallback(
            (e) => {
                var t, n;
                let i,
                    l,
                    { imageUri: a, file: s, transform: r } = e,
                    o = (0, en.aU)(a);
                o.size > 0xa00000
                    ? (0, Q.P0)({ text: v.intl.string(v.t.YbdEFK), variant: "critical" })
                    : f(
                          a,
                          new File(
                              [o],
                              ((t = s.name),
                              (n = o.type),
                              (i = (0, et.B)(n) ?? "png"),
                              (l = (0, ei.kh)(t)),
                              `${"" !== l ? l : "image"}.${i}`),
                              { type: o.type },
                          ),
                          s,
                          r,
                      );
            },
            [f],
        );
    return {
        cropAndUpload: d.useCallback(
            (e, s, r) => {
                let o = a?.();
                (0, $.mM)(
                    async () => {
                        let { default: a } = await Promise.all([
                            n.e(985768),
                            n.e(237403),
                            n.e(655327),
                            n.e(67702),
                            n.e(1214),
                            n.e(863232),
                            n.e(161275),
                            n.e(761253),
                            n.e(791154),
                            n.e(858164),
                            n.e(977547),
                            n.e(444376),
                            n.e(924862),
                            n.e(507406),
                            n.e(50342),
                            n.e(660953),
                            n.e(836681),
                            n.e(779149),
                            n.e(455524),
                            n.e(90017),
                            n.e(324633),
                            n.e(574571),
                            n.e(777124),
                        ]).then(n.bind(n, 142630));
                        return (n) =>
                            (0, i.jsx)(a, {
                                ...n,
                                file: s,
                                imageUri: e,
                                uploadType: t,
                                returnRef: l,
                                initialTransform: r,
                                cropAspectRatio: o,
                                onCrop: h,
                            });
                    },
                    { stackingBehavior: "stack" },
                );
            },
            [h, t, l, a],
        ),
        previewUri: o,
        cancelUpload: x,
        getLastEdit: d.useCallback(
            (e) => (null != u && null != e && "filename" in e && e.filename === u.filename ? u : null),
            [u],
        ),
    };
}
var er = n(652215),
    eo = n(339984),
    ed = n(148548);
function ec() {
    return (0, i.jsx)(L, {
        label: v.intl.string(v.t.gQmDk4),
        onClick: function () {
            (0, j.AD)((e) => new r.Tu({ ...e, sections: [(0, r.K)(), ...e.sections] }));
        },
        className: ed.GU,
    });
}
function eu(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: a } = e,
        s = d.useRef(null),
        o = d.useRef(null),
        u = d.useRef(null);
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
    let f = d.useCallback(() => {
            let e = u.current?.getBoundingClientRect();
            return null != e && e.width > 0 && e.height > 0 ? e.width / e.height : void 0;
        }, []),
        {
            cropAndUpload: h,
            previewUri: p,
            cancelUpload: I,
            getLastEdit: E,
        } = es({
            uploadType: eo.HL.PERSONAL_WIDGET_COVER,
            returnRef: o,
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
    let T = null != p,
        S = a || "" !== n.title.trim() || "" !== n.subtitle.trim(),
        k = null != n.image || T,
        L = k || a,
        _ = E(n.image);
    return (0, i.jsx)(y.N, {
        theme: k ? er.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: u,
                className: N()(ed.kL, { [ed.Vp]: L }, e),
                children: [
                    a || null != n.image
                        ? (0, i.jsxs)("div", {
                              className: ed.El,
                              children: [
                                  (0, i.jsx)(X.A, {
                                      cropAndUpload: h,
                                      imageInputRef: s,
                                      className: ed.Sl,
                                      canEdit: a,
                                      userId: t,
                                      image: n.image,
                                      previewUri: p,
                                      editVariant: "tooltip",
                                  }),
                                  k && S ? (0, i.jsx)("div", { className: ed.cw }) : null,
                              ],
                          })
                        : null,
                    a
                        ? (0, i.jsxs)(R.A, {
                              className: ed.o1,
                              children: [
                                  null != n.image
                                      ? (0, i.jsx)(J, {
                                            lastEdit: _,
                                            buttonRef: o,
                                            disabled: T,
                                            cropAndUpload: h,
                                            onChangeImage: A,
                                        })
                                      : null,
                                  (0, i.jsx)(R.Y, {
                                      icon: w.TrashIcon,
                                      variant: "overlay-secondary",
                                      tooltipText: k ? v.intl.string(v.t.RyK5Ww) : v.intl.string(v.t.g2jVww),
                                      onClick: k ? C : b,
                                  }),
                              ],
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: N()(ed.hQ, e, { [ed.Vp]: L }),
                        children: [
                            (0, i.jsx)(V, {
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
                            (0, i.jsx)(V, {
                                canEdit: a,
                                variant: "body-sm/medium",
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
var em = n(646514),
    eg = n(603090);
function ex(e) {
    let { onClick: t, alwaysVisible: n = !1 } = e;
    return (0, i.jsxs)(E.D, {
        onClick: t,
        className: N()(eg.cR, { [eg.mr]: n }),
        children: [
            (0, i.jsx)(B.ImagePlusIcon, { size: "xs", color: em.A.colors.ICON_SUBTLE }),
            (0, i.jsx)(g.E, { variant: "body-sm/medium", color: "text-muted", children: v.intl.string(v.t["9AY+/x"]) }),
        ],
    });
}
function ef(e) {
    let { index: t, userId: n, field: l, canEdit: a, onFieldChange: s, onFieldRemove: r } = e,
        {
            cropAndUpload: o,
            previewUri: d,
            cancelUpload: c,
            getLastEdit: u,
        } = es({
            uploadType: eo.HL.PERSONAL_WIDGET_FIELD,
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
                              previewUri: d,
                              cropAndUpload: o,
                              editVariant: "overlay",
                              lastEdit: u(l.image),
                          }),
                          a
                              ? (0, i.jsx)(R.A, {
                                    className: eg.ij,
                                    children: (0, i.jsx)(R.Y, {
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
                                        icon: w.TrashIcon,
                                    }),
                                })
                              : null,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: eg.oT,
                children: [
                    (0, i.jsx)(V, {
                        canEdit: a,
                        variant: "body-sm/medium",
                        color: "text-default",
                        value: l.title,
                        placeholder: v.intl.formatToPlainString(v.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            s(l.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 40,
                        maxLines: 2,
                    }),
                    (0, i.jsx)(V, {
                        canEdit: a,
                        variant: "body-xs/normal",
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
                ? (0, i.jsxs)(R.A, {
                      className: eg.Ms,
                      children: [
                          m
                              ? null
                              : (0, i.jsx)(R.Y, {
                                    variant: "overlay-secondary",
                                    tooltipText: v.intl.string(v.t.i3vRzP),
                                    onClick: function () {
                                        s(l.key, (e) => ({ ...e, hideImage: void 0 }));
                                    },
                                    icon: B.ImagePlusIcon,
                                }),
                          (0, i.jsx)(R.Y, {
                              variant: "overlay-secondary",
                              tooltipText: v.intl.string(v.t.g2jVww),
                              onClick: function () {
                                  r(l.key);
                              },
                              icon: w.TrashIcon,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eh(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: a, hasCoverSection: s } = e;
    function o(e) {
        (0, j.AD)((t) => {
            let n = t.sections[l];
            if (n?.type !== c.K.FIELDS) return t;
            let i = [...t.sections];
            return ((i[l] = { ...n, fields: e(n.fields) }), new r.Tu({ ...t, sections: i }));
        });
    }
    function d(e, t) {
        o((n) => {
            let i = n.findIndex((t) => t.key === e),
                l = n[i];
            if (null == l) return n;
            let a = [...n];
            return ((a[i] = t(l)), a);
        });
    }
    function u(e) {
        o((t) => t.filter((t) => t.key !== e));
    }
    function m() {
        o((e) => [...e, (0, r.yL)()]);
    }
    if (0 === n.fields.length) {
        if (!a) return null;
        if (!s)
            return (0, i.jsx)("div", { className: eg.kL, children: (0, i.jsx)(ex, { alwaysVisible: !0, onClick: m }) });
    }
    let g = n.fields.map((e, n) =>
            (0, i.jsx)(ef, { index: n, userId: t, field: e, canEdit: a, onFieldChange: d, onFieldRemove: u }, e.key),
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
                          o((e) => [...e, (0, r.yL)(), (0, r.yL)()]);
                      },
                  })
                : null,
        ],
    });
}
var ep = n(554146),
    ej = n(43105),
    eI = n(263775),
    eE = n(46653),
    ev = n(49999);
function eC(e) {
    let { userId: t, targetElementRef: n } = e,
        l = (0, u.bG)([eE.default], () => eE.default.getId() === t, [t]),
        [a, s] = (0, eI.kn)(l ? [ep.M.PERSONAL_WIDGET_GOING_AWAY_COACHMARK] : []);
    return a !== ep.M.PERSONAL_WIDGET_GOING_AWAY_COACHMARK
        ? null
        : (0, i.jsx)(ej.A, {
              targetElementRef: n,
              position: "left",
              alignmentStrategy: "edge",
              align: "top",
              caretConfig: { align: "start" },
              title: v.intl.string(v.t["+Nspne"]),
              body: v.intl.string(v.t.fvGAJa),
              onRequestClose: () => s(ev.i.USER_DISMISS),
              actions: [{ text: v.intl.string(v.t["NX+WJN"]), onClick: () => s(ev.i.TAKE_ACTION) }],
          });
}
var eA = n(682901),
    eb = n(877068);
let eN = { section: er.JJy.PERSONAL_WIDGET };
function ey(e) {
    let { widget: t, canEdit: n } = e;
    return (0, i.jsxs)("div", {
        className: eb.wx,
        children: [
            (0, i.jsx)(f.A, { size: "xs", className: eb.nr }),
            (0, i.jsx)(V, {
                canEdit: n,
                variant: "body-sm/medium",
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
function ew(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: a, hasCoverSection: s } = e;
    switch (n.type) {
        case c.K.COVER:
            return (0, i.jsx)(eu, { userId: t, section: n, sectionIndex: l, canEdit: a });
        case c.K.FIELDS:
            return (0, i.jsx)(eh, { userId: t, section: n, sectionIndex: l, canEdit: a, hasCoverSection: s });
    }
}
function eR() {
    return (0, u.bG)([h.default], () => p.Ay.isPremium(h.default.getCurrentUser(), eA.PremiumTypes.TIER_2))
        ? null
        : (0, i.jsxs)("div", {
              className: eb.hc,
              children: [
                  (0, i.jsx)(m.h, { color: "nitro-pink", className: eb.Sp, offsetBottom: -4 }),
                  (0, i.jsxs)("div", {
                      className: eb.LK,
                      children: [
                          (0, i.jsx)(g.E, {
                              variant: "body-xs/semibold",
                              color: "text-strong",
                              children: v.intl.string(v.t.WOPVdz),
                          }),
                          (0, i.jsx)(g.E, {
                              variant: "body-xs/medium",
                              color: "text-default",
                              children: v.intl.string(v.t["55tM3t"]),
                          }),
                      ],
                  }),
                  (0, i.jsx)(x.A, {
                      size: "sm",
                      subscriptionTier: eA.pe.TIER_2,
                      defaultTextOverride: v.intl.string(v.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eN,
                  }),
              ],
          });
}
function eT() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: n } = M();
    return e || t ? (0, i.jsx)(A, { expanded: t, onClick: () => n((e) => !e) }) : null;
}
function eS(e) {
    let { widget: t, user: n, allowEditing: l, disableInteraction: a, index: s, trailingContent: r } = e,
        o = l && !0 !== a,
        u = d.useRef(null),
        m = d.useMemo(() => t.sections.some((e) => e.type === c.K.COVER), [t.sections]);
    return (0, i.jsxs)(I.A, {
        userId: n.id,
        widget: t,
        allowEditing: l,
        disableInteraction: a,
        index: s,
        trailingContent: r,
        className: eb.Nr,
        headerClassName: eb.JE,
        children: [
            (0, i.jsxs)("div", {
                ref: u,
                className: eb.kL,
                children: [
                    (0, i.jsx)(ey, { widget: t, canEdit: o }),
                    o && !m ? (0, i.jsx)(ec, {}) : null,
                    t.sections.map((e, t) =>
                        (0, i.jsx)(
                            ew,
                            { userId: n.id, section: e, sectionIndex: t, canEdit: o, hasCoverSection: m },
                            t,
                        ),
                    ),
                    (0, i.jsx)(eT, {}),
                    o ? (0, i.jsx)(eR, {}) : null,
                ],
            }),
            !0 !== a ? (0, i.jsx)(eC, { userId: n.id, targetElementRef: u }) : null,
        ],
    });
}
function ek(e) {
    return (0, i.jsx)(G, { children: (0, i.jsx)(eS, { ...e }) });
}
var eL = n(172218),
    e_ = n(540185),
    eP = n(408278),
    eD = n(499373),
    eO = n(775602),
    eG = n(793574),
    eM = n(734066),
    eF = n(682176),
    eU = n(111994),
    eK = n(183555),
    eW = n(851767);
function eV(e) {
    return (0, u.bG)(
        [eE.default, eW.A],
        () => (eW.A.getUserProfile(eE.default.getId())?.widgets ?? []).some((t) => t.type === e),
        [e],
    );
}
var eX = n(403777),
    eH = n(765178),
    eY = n(789645);
(n(323874), n(14289), n(35956));
var eB = n(762555),
    ez = n(341923),
    eq = n(489496),
    eJ = n(956050),
    eQ = n(132319),
    e$ = n(195880),
    eZ = n(219222),
    e0 = n(518477),
    e1 = n(696016);
function e2(e) {
    let { widgetClipId: t, gameId: n, className: l } = e,
        { trackUserProfileEditAction: a } = (0, eK.NJ)(),
        s = v.intl.string(v.t["4z6ldH"]);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(T.m, {
            text: s,
            ariaHidden: !0,
            children: (0, i.jsx)(eP.K, {
                "aria-label": s,
                icon: eY.XSmallIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, eZ._V)(t),
                        (0, j.mC)(t),
                        eH.O.announce(v.intl.string(v.t.VCQXvr)),
                        a({ action: "CLIP_UPLOAD_CANCELED", widgetEdited: e_.x.CLIPS_GALLERY, gameId: n }));
                },
            }),
        }),
    });
}
n(600253);
var e5 = n(741934);
n(926675);
var e9 = n(305866),
    e8 = n(55999),
    e6 = n(229087),
    e7 = n(394245),
    e4 = n(382701),
    e3 = n(408519);
function te(e) {
    let { clipId: t, tags: n, allowEditing: l, disableInteraction: a = !1, onEditingChange: s } = e,
        r = l && !a,
        o = d.useMemo(() => n?.filter((e) => null != (0, e7.W)(e)) ?? [], [n]),
        c = o.length > 0,
        u = r && o.length < 20,
        { trackUserProfileEditAction: m } = (0, eK.NJ)(),
        x = d.useRef(null),
        f = d.useRef(new Map()),
        h = d.useRef(null),
        p = d.useRef(null),
        I = d.useRef(null),
        [E, C] = d.useState(o.length),
        [A, b] = d.useState(!1),
        [N, y] = d.useState(!1),
        w = A || N;
    (d.useEffect(() => {
        s(w);
    }, [w, s]),
        d.useEffect(() => () => s(!1), [s]));
    let R = d.useCallback(
            (e, n) => {
                ((0, j.$6)(t, e),
                    m({ action: "added" === n ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: e_.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        T = d.useCallback(() => {
            (y(!0), m({ action: "PRESS_ADD_TAG", widgetEdited: e_.x.CLIPS_GALLERY }));
        }, [m]),
        S = d.useCallback(() => y(!1), []),
        k = d.useCallback(
            (e) => {
                ((0, j.Fo)(t, e), m({ action: "TAG_REMOVED", widgetEdited: e_.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        L = d.useCallback(() => {
            if (A) return;
            let e = x.current?.getBoundingClientRect().width ?? 0;
            if (0 === e || 0 === o.length) return void C(o.length);
            let t = I.current?.getBoundingClientRect().width ?? 0,
                n = h.current?.getBoundingClientRect().width ?? 0,
                i = e - (t > 0 ? t + 4 : 0),
                l = o.map((e) => f.current.get(e)?.offsetWidth ?? 0);
            function a(e, t) {
                let n = 0;
                for (let t = 0; t < e; t++) n += l[t] + 4 * (t > 0);
                return n <= t;
            }
            if (a(o.length, i)) return void C(o.length);
            let s = i - (n + 4),
                r = 0;
            for (; r < o.length && a(r + 1, s);) r++;
            C(r);
        }, [o, A]);
    (0, D.g)(x, L);
    let _ = o.length - E,
        P = _ > 0,
        O = d.useCallback(
            (e) => {
                (1 === _ && b(!1), k(e));
            },
            [k, _],
        );
    return c || u
        ? (0, i.jsxs)("div", {
              className: e3.kL,
              ref: x,
              children: [
                  (0, i.jsxs)("ul", {
                      className: e3.xP,
                      "aria-hidden": !0,
                      children: [
                          o.map((e) =>
                              (0, i.jsx)(
                                  e6.A,
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
                              className: e3.lv,
                              ref: h,
                              children: (0, i.jsx)(g.E, {
                                  variant: "footnote/medium",
                                  color: "none",
                                  children: `+${o.length}`,
                              }),
                          }),
                      ],
                  }),
                  c &&
                      (0, i.jsx)("ul", {
                          className: e3.nM,
                          "aria-label": v.intl.string(v.t["4Rq3a7"]),
                          children: o
                              .slice(0, E)
                              .map((e) =>
                                  (0, i.jsx)(e6.A, { tag: e, variant: "filled", onRemove: r ? () => k(e) : void 0 }, e),
                              ),
                      }),
                  P &&
                      (0, i.jsx)(tt, {
                          buttonRef: p,
                          numHidden: _,
                          isOpen: A,
                          onOpenChange: b,
                          disableInteraction: a,
                          children: o.map((e) =>
                              (0, i.jsx)(e6.A, { tag: e, className: e3.Hl, onRemove: r ? () => O(e) : void 0 }, e),
                          ),
                      }),
                  u && (0, i.jsx)(e8.A, { tags: o, onTagsChange: R, onOpen: T, onClose: S, variant: "filled", ref: I }),
              ],
          })
        : null;
}
function tt(e) {
    let { buttonRef: t, numHidden: n, isOpen: l, onOpenChange: a, disableInteraction: s, children: r } = e,
        o = v.intl.string(v.t.pWHvBI);
    return s
        ? (0, i.jsx)("div", {
              className: `${e3.lv} ${e4.r9}`,
              ref: t,
              children: (0, i.jsx)(g.E, { variant: "footnote/medium", color: "none", children: `+${n}` }),
          })
        : (0, i.jsx)(H.Y, {
              targetElementRef: t,
              position: "top",
              align: "left",
              shouldShow: l,
              onRequestOpen: () => a(!0),
              onRequestClose: () => a(!1),
              renderPopout: () =>
                  (0, i.jsx)(e9.l, {
                      className: e3.Kt,
                      "aria-label": o,
                      returnRef: t,
                      children: (0, i.jsx)("ul", { className: e3.ns, children: r }),
                  }),
              children: (e) =>
                  (0, i.jsx)(T.m, {
                      text: o,
                      ariaHidden: !0,
                      children: (0, i.jsx)(E.D, {
                          ...e,
                          innerRef: t,
                          "aria-label": o,
                          "aria-expanded": l,
                          className: e3.lv,
                          children: (0, i.jsx)(g.E, { variant: "footnote/medium", color: "none", children: `+${n}` }),
                      }),
                  }),
          });
}
var tn = n(3026),
    ti = n(936026);
function tl(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, i.jsx)(g.E, {
        variant: "body-sm/medium",
        color: "text-overlay-light",
        className: N()(ti.Qw, { [ti.qf]: n }),
        children: (0, i.jsx)(tn.A, { children: t }),
    });
}
function ta(e) {
    let { clipId: t, title: n, onEditingChange: l } = e,
        { trackUserProfileEditAction: a } = (0, eK.NJ)(),
        s = d.useCallback(
            (e) => {
                let i = e.trim();
                i !== n.trim() &&
                    ((0, j.mI)(t, i),
                    a({ action: "CLIP_TITLE_EDITED", widgetEdited: e_.x.CLIPS_GALLERY, numCharacters: i.length }));
            },
            [t, n, a],
        ),
        r = v.intl.string(v.t["2gwc+H"]);
    return (
        d.useEffect(() => (l(!1), () => l(!1)), [l]),
        (0, i.jsx)("div", {
            className: N()(F.kL, F.oE, ti.ZZ),
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
                    className: N()(ti.$, ti.TG),
                    children: [
                        (0, i.jsx)(Y.PencilIcon, { size: "xxs", color: "currentColor", className: ti.wz }),
                        "" === n.trim()
                            ? (0, i.jsx)(tl, { value: r, isPlaceholder: !0 })
                            : (0, i.jsx)(tl, { value: n }),
                    ],
                }),
                placeholder: r,
                label: v.intl.string(v.t.PDnM11),
                maxLength: 200,
            }),
        })
    );
}
function ts(e) {
    let { clipId: t, title: n, allowEditing: l, onEditingChange: a } = e,
        s = null != n && "" !== n.trim();
    return l || s
        ? l
            ? (0, i.jsx)(ta, { clipId: t, title: n ?? "", onEditingChange: a })
            : (0, i.jsx)("span", { className: ti.$, children: (0, i.jsx)(tl, { value: n ?? "" }) })
        : null;
}
var tr = n(663341),
    to = n(451395),
    td = n(823016);
function tc(e) {
    let { widgetClipId: t, gameId: n, className: l } = e,
        { trackUserProfileEditAction: a } = (0, eK.NJ)(),
        s = v.intl.string(v.t.ib6Mgx);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(T.m, {
            text: s,
            ariaHidden: !0,
            children: (0, i.jsx)(eP.K, {
                "aria-label": s,
                icon: w.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, j.mC)(t),
                        eH.O.announce(v.intl.string(v.t.zyPNb3)),
                        a({ action: "CLIP_REMOVED", widgetEdited: e_.x.CLIPS_GALLERY, gameId: n }));
                },
            }),
        }),
    });
}
var tu = n(233002);
function tm(e) {
    let { item: t, index: n, isSelected: l, onSelect: a, allowEditing: s } = e,
        { registerDragHandleRef: r, manageFocusOnReorder: o } = (0, td.r)(),
        { trackUserProfileEditAction: c } = (0, eK.NJ)(),
        u = d.useRef(null),
        m = d.useCallback(
            (e, t) => {
                e !== t && ((0, j.N5)(e, t), c({ action: "CLIP_REORDERED", widgetEdited: e_.x.CLIPS_GALLERY }));
            },
            [c],
        ),
        g = s && ("saved" === t.status || "pending" === t.status),
        x = s && "uploading" === t.status,
        f = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(E.D, {
                    className: N()(tu.Vs, { [tu.wH]: l }),
                    "aria-pressed": l,
                    "aria-label": v.intl.formatToPlainString(v.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, i.jsx)(e5.A, { item: t, ringSize: "sm", className: tu.nC }),
                }),
                g &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(to.jV, { buttonRef: r(t.key), className: tu.BU }),
                            (0, i.jsx)(tc, { widgetClipId: t.key, gameId: t.gameId, className: tu.nM }),
                        ],
                    }),
                x && (0, i.jsx)(e2, { widgetClipId: t.key, gameId: t.gameId, className: tu.nM }),
            ],
        });
    return (0, i.jsx)("li", {
        ref: u,
        className: tu.NI,
        children: g
            ? (0, i.jsx)(to.mG, {
                  index: n,
                  itemId: t.key,
                  listType: e_.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => u.current?.offsetWidth },
                  "aria-label": v.intl.formatToPlainString(v.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: m,
                  onEnd: () => o(t.key),
                  className: tu.oE,
                  dropBeforeClassName: tu.A,
                  dropAfterClassName: tu.Ze,
                  draggingClassName: tu.Id,
                  children: f,
              })
            : f,
    });
}
function tg(e) {
    let { items: t, selectedKey: n, onSelect: l, onAddClip: a, allowEditing: s = !1 } = e,
        r = Math.max(0, 4 - t.length),
        o = (0, i.jsxs)("ul", {
            className: tu.Xm,
            style: { "--custom-clips-filmstrip-slots": 4 },
            children: [
                t.map((e, t) =>
                    (0, i.jsx)(tm, { item: e, index: t, isSelected: e.key === n, onSelect: l, allowEditing: s }, e.key),
                ),
                null != a &&
                    Array.from({ length: r }, (e, t) =>
                        (0, i.jsx)(
                            "li",
                            {
                                className: tu.NI,
                                children: (0, i.jsx)(E.D, {
                                    className: tu.Yn,
                                    "aria-label": v.intl.string(v.t.rI0i0a),
                                    onClick: a,
                                    children: (0, i.jsx)(tr.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return s ? (0, i.jsx)(td.B, { emptyListFallbackRef: null, children: o }) : o;
}
var tx = n(729475),
    tf = n(358618),
    th = n(983851);
function tp(e) {
    let { isMuted: t, onToggleMuted: n, onFullscreen: l } = e,
        a = v.intl.string(v.t.dcl9MQ),
        s = v.intl.string(t ? v.t.YqAjXy : v.t.w4m945);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(T.m, {
                text: a,
                ariaHidden: !0,
                children: (0, i.jsx)(eP.K, {
                    "aria-label": a,
                    icon: tx.FullscreenEnterIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: l,
                }),
            }),
            (0, i.jsx)(T.m, {
                text: s,
                ariaHidden: !0,
                children: (0, i.jsx)(eP.K, {
                    "aria-label": s,
                    icon: t ? tf.VoiceXIcon : th.VoiceNormalIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: n,
                }),
            }),
        ],
    });
}
var tj = n(798108),
    tI = n(224360),
    tE = n(335978);
function tv(e) {
    let { clip: t, onAddClip: n } = e,
        l = v.intl.formatToPlainString(v.t.gPRdVj, { clipName: t.name ?? t.applicationName }),
        a = d.useCallback(() => n(t), [t, n]);
    return (0, i.jsx)(T.m, {
        text: l,
        ariaHidden: !0,
        children: (0, i.jsxs)(E.D, {
            className: tE.Vs,
            "aria-label": l,
            onClick: a,
            children: [
                (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: tE.xn, loading: "lazy" }),
                (0, i.jsx)(tr.PlusLargeIcon, { size: "sm", color: "currentColor", className: tE.Xv }),
            ],
        }),
    });
}
function tC(e) {
    let { clips: t, onAddClip: n, ...l } = e;
    return (0, i.jsx)(tI.A, {
        ...l,
        children: (0, i.jsx)("ul", {
            className: tE.p_,
            children: t.map((e) =>
                (0, i.jsx)("li", { className: tE.NI, children: (0, i.jsx)(tv, { clip: e, onAddClip: n }) }, e.id),
            ),
        }),
    });
}
var tA = n(769015),
    tb = n(409626),
    tN = n(692969),
    ty = n(202163),
    tw = n(207803),
    tR = n(591179),
    tT = n(485745),
    tS = n(308766);
function tk(e) {
    let { gameId: t, userId: n, className: l } = e,
        { gameRecord: a } = (0, ty.Ay)(t),
        s = !(0, tR.X)("WidgetClipGameIcon"),
        r = (0, tT.A)(s),
        o = (0, tN.A)({
            location: "WidgetClipGameIcon",
            applicationId: t,
            source: tb.GameProfileSources.UserProfile,
            sourceUserId: n,
        }),
        c = d.useCallback(
            (e) => {
                if (r) {
                    (e.preventDefault(), e.stopPropagation(), (0, tw.VQ)());
                    return;
                }
                o?.(e);
            },
            [r, o],
        ),
        u = a?.name;
    if (null == u) return null;
    let m = (0, i.jsx)(tA.A, { game: a, size: tA.M.XSMALL, allowUnknownGameIcon: !1 });
    return (0, i.jsx)(T.m, {
        text: u,
        ariaHidden: !0,
        children:
            null == o
                ? (0, i.jsx)(T.m, {
                      text: u,
                      ariaHidden: !0,
                      children: (0, i.jsx)("div", { className: l, children: m }),
                  })
                : (0, i.jsx)(E.D, {
                      className: N()(tS.v, l),
                      "aria-label": v.intl.formatToPlainString(v.t["8QLQB+"], { gameName: u }),
                      onClick: c,
                      children: m,
                  }),
    });
}
function tL(e) {
    return null != e.applicationId && 0 !== e.length;
}
var t_ = n(558285),
    tP = n(608857),
    tD = n(419490),
    tO = n(409067),
    tG = n(716112);
function tM(e) {
    let { onClick: t } = e,
        n = v.intl.string(v.t.rI0i0a);
    return (0, i.jsx)(T.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, i.jsx)(eP.K, {
            variant: "secondary",
            size: "sm",
            icon: eD.PlusMediumIcon,
            "aria-label": n,
            onClick: t,
        }),
    });
}
function tF() {
    return (0, i.jsx)("div", {
        className: tG.p$,
        children: (0, i.jsx)(g.E, {
            variant: "body-xs/normal",
            color: "text-subtle",
            children: v.intl.format(v.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tU(e) {
    let t,
        l,
        { widget: a, user: s, allowEditing: r, disableInteraction: o, ...c } = e,
        [m, g] = d.useState(!1),
        [x, f] = d.useState(!1),
        [h, p] = d.useState(!0),
        C = (0, u.bG)([eO.Ay], () => eO.Ay.useReducedMotion),
        A = (0, eL.K)(f, 0.5),
        [b, N] = d.useState(!1),
        [y, w] = d.useState(!1),
        R = d.useRef(void 0),
        T = (0, tP.A)(a),
        S =
            ((t = (0, u.yK)([tD.Ay], () => Object.values(tD.Ay.getClips()))),
            (l = (0, u.bG)([tD.Ay], () => tD.Ay.getSettings().showPovClipsInGallery)),
            d.useMemo(() => {
                let e = new Set();
                for (let t of a.clips) null != t.localClipId && e.add(t.localClipId);
                return t
                    .filter((t) => !(e.has(t.id) || !tL(t) || (!l && (0, tO.kD)(t))))
                    .sort((e, t) => {
                        let n = !0 === e.isFavorite;
                        return n !== (!0 === t.isFavorite) ? (n ? -1 : 1) : t.createdAt - e.createdAt;
                    })
                    .slice(0, 3);
            }, [t, l, a.clips])),
        [k, L] = d.useState(null),
        _ = T.find((e) => e.key === k) ?? T[0],
        P = (0, eM.sw)(),
        { trackUserProfileAction: D, trackUserProfileEditAction: O } = (0, eK.NJ)(),
        G = r && !0 !== o,
        M = 0 === T.length,
        F = T.length >= 4,
        U = G && P && !F,
        K = G || T.length > 1,
        [W] = d.useState(() => S.length >= 3),
        [V, X] = d.useState(!1),
        H = eV(a.type),
        Y = U && !H && W && !V && S.length > 0,
        B = d.useCallback(() => {
            (X(!0), O({ action: "DISMISS_SUGGESTED_CLIPS", widgetEdited: e_.x.CLIPS_GALLERY }));
        }, [O]),
        z = d.useCallback(
            (e) => {
                (L(e), e !== _?.key && D({ action: "SELECT_CLIP", widgetType: e_.x.CLIPS_GALLERY }));
            },
            [_?.key, D],
        ),
        q = d.useMemo(() => (!0 === o ? [] : T.filter(tP.K)), [T, o]),
        J = null != _ ? q.findIndex((e) => e.key === _.key) : -1,
        Z = d.useCallback(() => {
            J < 0 ||
                (D({ action: "PRESS_PLAY_CLIP", widgetType: e_.x.CLIPS_GALLERY }),
                (0, t_.A)({ clips: q, startingIndex: J }));
        }, [q, J, D]),
        ee = d.useCallback(() => {
            let e = !h;
            (p(e), D({ action: e ? "MUTE_CLIP_PREVIEW" : "UNMUTE_CLIP_PREVIEW", widgetType: e_.x.CLIPS_GALLERY }));
        }, [h, D]),
        et = d.useCallback(() => {
            if (J < 0) return;
            let e = q[(J + 1) % q.length];
            null != e && L(e.key);
        }, [q, J]),
        en = J >= 0 && !C && x,
        ei = (en || m) && !b && !y,
        el = d.useCallback(() => {
            J < 0 ||
                en ||
                (R.current = window.setTimeout(() => {
                    (g(!0), D({ action: "HOVER_PLAY_CLIP", widgetType: e_.x.CLIPS_GALLERY }));
                }, 150));
        }, [en, J, D]),
        es = d.useCallback(() => {
            (window.clearTimeout(R.current), g(!1));
        }, []);
    (d.useEffect(() => () => window.clearTimeout(R.current), []),
        d.useEffect(() => {
            (0, eF.v)();
        }, []));
    let er = d.useCallback(
            (e, t) => {
                let n = (function (e, t) {
                    let n;
                    if (null == e.applicationId)
                        return ((0, Q.P0)({ text: v.intl.string(v.t.xcLXWy), variant: "critical" }), null);
                    let i = (0, e$.m)();
                    if (
                        !(0, j.$C)({
                            status: "uploading",
                            id: i,
                            localClipId: e.id,
                            gameId: e.applicationId,
                            title: (0, eQ.l)(e),
                            thumbnail: e.thumbnail,
                            clipEventsTimeline:
                                (n = (0, eB.lz)(e)?.filter((e) => null != e.game) ?? []).length > 0
                                    ? n.slice(0, 100)
                                    : void 0,
                        })
                    )
                        return null;
                    let l = new AbortController();
                    return (
                        (0, eZ.yf)(i, l),
                        (async function (e, t, n, i, l) {
                            let { analyticsLocations: a, source: s, trackEditAction: r } = l,
                                o = "exporting";
                            try {
                                let l = await (0, eq.VO)(e, { analyticsLocations: a, watermark: (0, ez.s)() });
                                if (i.signal.aborted || !(0, j.iu)(t)) return;
                                ((o = "uploading"),
                                    (async function (e, t) {
                                        let n = URL.createObjectURL(t);
                                        try {
                                            let t = await (0, eJ.m)(n, 0);
                                            (0, j.QN)(e, t);
                                        } catch (e) {
                                            e1.GU.warn(
                                                `Clips gallery widget thumbnail refresh failed; keeping placeholder: ${e}`,
                                            );
                                        } finally {
                                            URL.revokeObjectURL(n);
                                        }
                                    })(t, l).catch(() => {}));
                                let d = new File([l], "clip.mp4", { type: "video/mp4" }),
                                    c = await ea.A.uploadWidgetClip(d, {
                                        onProgress: (e) => (0, eZ.Fj)(t, e),
                                        signal: i.signal,
                                    });
                                if (!(0, j.WX)(t, c)) return;
                                r({
                                    action: s === e0.IE.PICKER ? "CLIP_ADDED_FROM_PICKER" : "CLIP_ADDED_FROM_SUGGESTED",
                                    widgetEdited: e_.x.CLIPS_GALLERY,
                                    gameId: n,
                                });
                            } catch (l) {
                                if (i.signal.aborted) return;
                                ((0, j.mC)(t),
                                    e1.GU.error("Failed to upload a clip for the clips gallery widget", l, {
                                        stage: o,
                                        clipType: e.type,
                                        crop: e.editMetadata?.crop,
                                        trackTypes: e.tracks?.map((e) => e.type),
                                    }),
                                    (0, Q.P0)({ text: v.intl.string(v.t.iufib1), variant: "critical" }),
                                    r({
                                        action: "exporting" === o ? "CLIP_EXPORT_FAILED" : "CLIP_UPLOAD_FAILED",
                                        widgetEdited: e_.x.CLIPS_GALLERY,
                                        gameId: n,
                                    }));
                            } finally {
                                (0, eZ.cG)(t);
                            }
                        })(e, i, e.applicationId, l, t),
                        i
                    );
                })(e, { analyticsLocations: [eG.A.USER_PROFILE_MODAL_V2], source: t, trackEditAction: O });
                null != n && L(n);
            },
            [O],
        ),
        eo = d.useCallback((e) => er(e, e0.IE.SUGGESTED), [er]),
        ed = d.useCallback(() => {
            (O({ action: "PRESS_ADD_CLIP", widgetEdited: e_.x.CLIPS_GALLERY }),
                (0, $.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(409495),
                            n.e(685432),
                            n.e(269714),
                            n.e(19385),
                            n.e(718955),
                            n.e(126301),
                            n.e(201074),
                            n.e(879641),
                            n.e(216112),
                            n.e(498167),
                            n.e(553829),
                            n.e(508233),
                            n.e(865257),
                            n.e(228767),
                            n.e(323079),
                            n.e(437655),
                            n.e(626501),
                            n.e(5257),
                            n.e(970846),
                            n.e(795807),
                            n.e(538733),
                            n.e(491279),
                            n.e(317225),
                            n.e(918024),
                            n.e(124060),
                            n.e(146566),
                            n.e(32661),
                            n.e(696123),
                            n.e(124006),
                            n.e(73500),
                            n.e(237834),
                            n.e(875842),
                            n.e(858337),
                            n.e(97210),
                            n.e(820683),
                            n.e(781202),
                            n.e(838090),
                            n.e(757598),
                            n.e(203930),
                            n.e(903663),
                            n.e(177104),
                            n.e(583518),
                            n.e(901922),
                            n.e(507406),
                            n.e(466147),
                            n.e(16954),
                            n.e(795365),
                            n.e(100126),
                            n.e(501962),
                            n.e(17736),
                            n.e(280559),
                            n.e(974049),
                            n.e(237715),
                            n.e(895008),
                            n.e(231782),
                            n.e(377683),
                            n.e(698101),
                            n.e(306270),
                            n.e(823077),
                            n.e(626750),
                            n.e(689160),
                            n.e(827037),
                            n.e(520342),
                            n.e(305744),
                        ]).then(n.bind(n, 34515));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                initialMainLink: eU.oH.ALL_CLIPS,
                                picker: {
                                    onPick: (e) => {
                                        (((e) => er(e, e0.IE.PICKER))(e), t.onClose());
                                    },
                                    action: eU.qh.UPLOAD,
                                    filterClip: tL,
                                    allowMultiSelect: !1,
                                },
                            });
                    },
                    { modalKey: e1.nm },
                ));
        }, [er, O]);
    return (0, i.jsx)(I.A, {
        userId: s.id,
        widget: a,
        allowEditing: r,
        disableInteraction: o,
        headerTitle: (0, j.L)(a),
        headerSubtitle: G && !M ? v.intl.format(v.t.pb2Was, { numClips: 4 }) : void 0,
        headerActionButtons: U && M ? [(0, i.jsx)(tM, { onClick: ed }, "clips-gallery-add-clip")] : void 0,
        trailingContent:
            Y &&
            (0, i.jsx)("div", {
                className: tG.$k,
                children: (0, i.jsx)(tC, { clips: S, onAddClip: eo, onDismiss: B }),
            }),
        ...c,
        children:
            null != _
                ? (0, i.jsxs)("div", {
                      className: tG.nV,
                      children: [
                          (0, i.jsxs)("div", {
                              ref: A,
                              className: tG.aM,
                              onMouseEnter: el,
                              onMouseLeave: es,
                              children: [
                                  (0, i.jsx)(e5.A, {
                                      item: _,
                                      ringSize: "lg",
                                      isPlaying: ei,
                                      isMuted: h,
                                      modalKey: (0, eX.n1)(s.id, c.guildId),
                                      fit: "contain",
                                      onEnded: q.length > 1 ? et : void 0,
                                      className: tG.VH,
                                  }),
                                  J >= 0 &&
                                      !b &&
                                      !y &&
                                      (0, i.jsx)(E.D, {
                                          className: tG.Hf,
                                          "aria-label": v.intl.string(v.t.CscLHM),
                                          onClick: Z,
                                      }),
                                  ("saved" === _.status || "pending" === _.status) &&
                                      (0, i.jsx)(tk, { gameId: _.gameId, userId: s.id, className: tG.AT }),
                                  G &&
                                      "uploading" === _.status &&
                                      (0, i.jsx)(e2, { widgetClipId: _.key, gameId: _.gameId, className: tG.MY }),
                                  G
                                      ? ("saved" === _.status || "pending" === _.status) &&
                                        (0, i.jsx)("div", {
                                            className: tG.nP,
                                            children: (0, i.jsx)(tc, { widgetClipId: _.key, gameId: _.gameId }),
                                        })
                                      : J >= 0 &&
                                        (0, i.jsx)("div", {
                                            className: tG.nP,
                                            children: (0, i.jsx)(tp, {
                                                isMuted: h,
                                                onToggleMuted: ee,
                                                onFullscreen: Z,
                                            }),
                                        }),
                                  (0, i.jsx)(tj.A, {
                                      children:
                                          ("saved" === _.status || "pending" === _.status) &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(ts, {
                                                      clipId: _.key,
                                                      title: _.title,
                                                      allowEditing: G,
                                                      onEditingChange: N,
                                                  }),
                                                  (0, i.jsx)(te, {
                                                      clipId: _.key,
                                                      tags: _.tags,
                                                      allowEditing: r,
                                                      disableInteraction: o,
                                                      onEditingChange: w,
                                                  }),
                                              ],
                                          }),
                                  }),
                              ],
                          }),
                          K &&
                              (0, i.jsx)(tg, {
                                  items: T,
                                  selectedKey: _.key,
                                  onSelect: z,
                                  onAddClip: U ? ed : void 0,
                                  allowEditing: G,
                              }),
                      ],
                  })
                : (0, i.jsx)(tF, {}),
    });
}
var tK = n(896170),
    tW = n(873200),
    tV = n(168017),
    tX = n(778747),
    tH = n(321108),
    tY = n(106191),
    tB = n(404277),
    tz = n(939200),
    tq = n(813832),
    tJ = n(67710);
function tQ(e) {
    let { renderGameListItem: t } = e,
        { extraChromeEnabled: n } = tV.A.useConfig({ location: "browse_games_popout" });
    return (0, i.jsx)(tW.X2, { maxVisibleItems: 7, renderListItem: n ? t : void 0 });
}
function t$(e) {
    let { widgetType: t, widget: n, onAddGame: l, children: a, ...s } = e,
        r = d.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: o } = (0, eK.NJ)(),
        [c, u] = d.useState(""),
        m = d.useRef(""),
        {
            options: x,
            matchSorterOptions: f,
            metadataByGameId: h,
            onSelect: p,
            endSession: I,
        } = (0, tz.R)({ surface: tX.K.PROFILE_WIDGET, query: c }),
        E = c.trim().length > 0,
        { gameIds: C, onAddGame: A } = (0, tq.S)(t),
        b = (0, tH.A)(C),
        N = d.useCallback(
            (e) => {
                (p(e),
                    (0, j.ew)({ widgetType: t, game: { gameId: e } }),
                    eH.O.announce(v.intl.string(v.t.q0U3DE)),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    C.includes(e) && A(e),
                    l?.());
            },
            [t, o, l, C, A, p],
        ),
        y = d.useMemo(() => {
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
                n = new Set(t.map((e) => e.id)),
                i = [...e.values()].filter((e) => !n.has(e.id));
            return [...t, ...i];
        }, [x, r, b, E]),
        w = d.useMemo(() => {
            let e = new Map(h);
            for (let t of b) e.set(t.id, { icon: t.media?.icon, platformAvailability: t.platformAvailability });
            return e;
        }, [h, b]),
        R = d.useCallback(
            (e) => {
                let t = e.value,
                    n = null != t ? w.get(t) : void 0;
                return (0, i.jsxs)("div", {
                    className: tJ.mN,
                    children: [
                        null != t &&
                            (0, i.jsx)(tY.A, {
                                game: { id: t, icon: n?.icon },
                                iconClassName: tJ.DG,
                                withBackground: !0,
                            }),
                        (0, i.jsx)(g.E, {
                            variant: "body-md/medium",
                            color: "currentColor",
                            lineClamp: 1,
                            className: tJ.EF,
                            children: e.label,
                        }),
                        (0, i.jsx)(tB.A, { platforms: n?.platformAvailability }),
                    ],
                });
            },
            [w],
        ),
        T = d.useCallback((e) => e, []),
        S = d.useMemo(() => ({ ...f, threshold: tK.Ht.rankings.CONTAINS, keys: ["label"] }), [f]),
        k = d.useCallback((e) => (E || "" === e.trim() ? y.length : (0, tK.Ht)(y, e, S).length), [E, y, S]),
        L = d.useCallback(
            (e) => {
                let n = e.target.value;
                ("" === c.trim() &&
                    "" !== n.trim() &&
                    o({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: k(n),
                    }),
                    u(n),
                    (m.current = n));
            },
            [c, o, t, k],
        );
    return (0, i.jsx)(H.Y, {
        ...s,
        onRequestOpen: () => {
            (o({ action: "PRESS_ADD_GAME", widgetEdited: t }), u(""), (m.current = ""));
        },
        onRequestClose: () => {
            (I(),
                o({
                    action: "GAME_SEARCH_SESSION_ENDED",
                    widgetEdited: t,
                    numCharacters: m.current.trim().length,
                    numResults: k(m.current),
                }));
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(e9.l, {
                className: tJ.C2,
                "aria-label": v.intl.string(v.t.uqw8wK),
                children: (0, i.jsxs)(tW.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (N(e), t(), I());
                    },
                    options: y,
                    matchSorterOptions: S,
                    customMatchSorter: E ? T : void 0,
                    children: [
                        (0, i.jsx)(tW.a3, {
                            label: v.intl.string(v.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: v.intl.string(v.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: L,
                        }),
                        (0, i.jsx)(tQ, { renderGameListItem: R }),
                    ],
                }),
            });
        },
        children: (e) => a(e),
    });
}
function tZ(e) {
    let { disabled: t, ...n } = e,
        l = d.useRef(null);
    return (0, i.jsx)(t$, {
        targetElementRef: l,
        position: "bottom",
        align: "center",
        ...n,
        children: (e) =>
            (0, i.jsx)(T.m, {
                text: v.intl.string(v.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, i.jsx)(eP.K, {
                    buttonRef: l,
                    variant: "secondary",
                    size: "sm",
                    icon: eD.PlusMediumIcon,
                    "aria-label": v.intl.string(v.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function t0(e) {
    let t = d.useRef(null);
    return (0, i.jsx)(t$, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, i.jsx)(E.D, {
                innerRef: t,
                className: tJ.cV,
                "aria-label": v.intl.string(v.t.PYyENc),
                ...e,
                children: (0, i.jsx)(tr.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
var t1 = n(61881);
let t2 = d.createContext(null);
function t5(e) {
    let { widgetType: t, children: n } = e,
        l = (0, u.bG)([t1.A], () => {
            let e = t1.A.getPendingWidgets();
            if (null == e) return !1;
            let n = e.find((e) => e.type === t);
            if (null == n) return !1;
            let i = (0, j.cv)(t);
            return n.games.length > i;
        }),
        [a, s] = d.useState(l),
        r = d.useMemo(() => ({ expanded: a, setExpanded: s }), [a]);
    return (0, i.jsx)(t2.Provider, { value: r, children: n });
}
function t9() {
    let e = d.useContext(t2);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var t8 = n(67438);
function t6(e) {
    let { widget: t } = e,
        n = (0, j.cv)(t.type),
        l = 1 === n,
        a = l ? v.intl.string(v.t["3FdPBT"]) : v.intl.format(v.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? t8.O : t8.k,
        children: [
            l && (0, i.jsx)(t0, { widget: t, widgetType: t.type }),
            (0, i.jsx)(g.E, { variant: "body-xs/normal", color: "text-subtle", children: a }),
        ],
    });
}
var t7 = n(683071),
    t4 = n(312252);
function t3(e) {
    let { widgetType: t, gameCount: n } = e,
        l = (0, j.cv)(t);
    return n <= l
        ? null
        : (0, i.jsx)("div", {
              className: t4.l,
              children: (0, i.jsx)(t7.w, {
                  type: "warning",
                  message: v.intl.formatToPlainString(v.t.Rv3wYq, { maxGames: l }),
                  role: "alert",
              }),
          });
}
var ne = n(132085),
    nt = n(192),
    nn = n(148420);
function ni(e) {
    let { games: t, user: n, widgetType: l, ...a } = e,
        { registerItemRef: s, manageFocusOnDelete: r } = (0, td.r)();
    return (0, i.jsx)("ul", {
        className: nn.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(ne.A, {
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
function nl(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: a } = e,
        { getManageButtonForWidget: s } = (0, nt.r)(),
        r = s(t),
        { expanded: o, setExpanded: d } = t9(),
        c = o ? a : a.slice(0, 2),
        u = a.length > 2,
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(ni, { ...e, games: c }),
                u && (0, i.jsx)(A, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(t3, { widgetType: t, gameCount: a.length }),
                  (0, i.jsx)(td.B, { emptyListFallbackRef: r, children: m }),
              ],
          })
        : m;
}
function na(e) {
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...o } = e;
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nl, {
                      user: t,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(t6, { widget: n }),
    });
}
function ns(e) {
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...o } = e,
        d = n.games[0];
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...o,
        children:
            null != d
                ? (0, i.jsx)(ne.A, {
                      user: t,
                      widgetType: n.type,
                      game: d,
                      guildId: l,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(t6, { widget: n }),
    });
}
var nr = n(793693);
function no(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: nr.V,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var nd = n(675816),
    nc = n(201438),
    nu = n(788593),
    nm = n(858808),
    ng = n(365611),
    nx = n(900850);
function nf(e) {
    let { index: t, widgetType: n, game: l, coverImageUrl: a, iconImageUrl: s, gameName: r, children: o } = e,
        { manageFocusOnReorder: c } = (0, td.r)(),
        u = d.useRef(null);
    return (0, i.jsx)(to.mG, {
        index: t,
        itemId: l.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: a, iconSrc: s, gameName: r, getWidth: () => u.current?.offsetWidth },
        "aria-label": v.intl.formatToPlainString(v.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, j.Un)(n, e, t),
        onEnd: () => c(l.gameId),
        className: nx.kL,
        dropBeforeClassName: nx.A,
        dropAfterClassName: nx.Ze,
        draggingClassName: nx.Id,
        children: (0, i.jsx)("div", { ref: u, className: nx.An, children: o }),
    });
}
function nh(e) {
    let {
            game: t,
            userId: n,
            widgetType: l,
            allowEditing: a,
            disableInteraction: s = !1,
            index: r,
            onRemoveGame: o,
            coverRef: d,
        } = e,
        { coverImageUrl: c, iconImageUrl: u, gameName: m, isLoading: g } = (0, nc.A)(t.gameId),
        { registerDragHandleRef: x } = (0, td.r)(),
        f = a && !s,
        { isDragging: h } = (0, nd.V)((e) => ({ isDragging: e.isDragging() }));
    function p() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nu.A, {
                    imageSrc: c,
                    iconSrc: u,
                    gameName: m,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: s,
                    className: (null == c && null == u) || s ? void 0 : ng.iL,
                    hideTooltip: h,
                    coverRef: d,
                }),
                f && (0, i.jsx)(to.jV, { buttonRef: x(t.gameId), className: nx.BU }),
                f && (0, i.jsx)(nm.A, { game: t, widgetType: l, className: nx.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, i.jsx)("div", { className: ng.mD })
        : f
          ? (0, i.jsx)(nf, {
                widgetType: l,
                index: r ?? 0,
                game: t,
                coverImageUrl: c,
                iconImageUrl: u,
                gameName: m,
                children: p(),
            })
          : (0, i.jsx)("div", { className: nx.kL, children: p() });
}
function np(e) {
    let { games: t, userId: n, widgetType: l, allowEditing: a, disableInteraction: s } = e,
        { registerItemRef: r, manageFocusOnDelete: o } = (0, td.r)();
    return (0, i.jsx)(no, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(nh, {
                index: t,
                game: e,
                userId: n,
                widgetType: l,
                allowEditing: a,
                disableInteraction: s,
                coverRef: r(e.gameId),
                onRemoveGame: o,
            }),
    });
}
function nj(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: a } = e,
        { getManageButtonForWidget: s } = (0, nt.r)(),
        r = s(t),
        { expanded: o, setExpanded: d } = t9(),
        c = o ? a : a.slice(0, 8),
        u = a.length > 8,
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(np, { ...e, games: c }),
                u && (0, i.jsx)(A, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(t3, { widgetType: t, gameCount: a.length }),
                  (0, i.jsx)(td.B, { emptyListFallbackRef: r, children: m }),
              ],
          })
        : m;
}
function nI(e) {
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...o } = e;
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nj, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(t6, { widget: n }),
    });
}
function nE(e) {
    let { user: t, widget: n, guildId: l, channelId: a, allowEditing: s, disableInteraction: r, ...o } = e;
    return (0, i.jsx)(I.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nj, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(t6, { widget: n }),
    });
}
var nv = n(875620);
function nC(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: a, iconImageUrl: s, gameName: r, isLoading: o } = (0, nc.A)(t),
        d = (0, u.bG)([t1.A], () => t1.A.suggestedFetchIsLoading),
        c = v.intl.formatToPlainString(v.t["3mb1s5"], { game: r });
    return o || d
        ? (0, i.jsx)("div", { className: ng.mD })
        : (0, i.jsx)(T.m, {
              text: c,
              ariaHidden: !0,
              children: (0, i.jsxs)(E.D, {
                  className: nv.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, i.jsx)(nu.A, {
                          className: nv.Iv,
                          imageSrc: a,
                          iconSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(tr.PlusLargeIcon, { size: "md", className: nv.Xv, color: em.A.colors.WHITE }),
                  ],
              }),
          });
}
function nA(e) {
    let { userId: t, widgetType: n, ...l } = e,
        { games: a, onAddGame: s } = (0, tq.S)(n),
        { setExpanded: r } = t9(),
        { trackUserProfileEditAction: o } = (0, eK.NJ)(),
        c = d.useCallback(
            (e) => {
                (s(e),
                    r(!0),
                    (0, j.ew)({ widgetType: n, game: { gameId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: n }));
            },
            [s, n, o, r],
        );
    return (0, i.jsx)(tI.A, {
        ...l,
        children: (0, i.jsx)("ul", {
            className: nv.Vg,
            children: a.map((e) => {
                let { gameId: n } = e;
                return (0, i.jsx)("li", { children: (0, i.jsx)(nC, { onClick: () => c(n), userId: t, gameId: n }) }, n);
            }),
        }),
    });
}
var nb = n(870961);
function nN(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case e_.x.FAVORITE_GAMES:
            return (0, i.jsx)(ns, { widget: t, ...n });
        case e_.x.CURRENT_GAMES:
            return (0, i.jsx)(na, { widget: t, ...n });
        case e_.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(nE, { widget: t, ...n });
        case e_.x.PLAYED_GAMES:
            return (0, i.jsx)(nI, { widget: t, ...n });
        default:
            return null;
    }
}
function ny(e) {
    let { widget: t, user: n, allowEditing: l, disableInteraction: a, ...s } = e,
        { setExpanded: r } = t9(),
        { shouldShowSuggestions: o, handleDismissSuggestions: c } = (function (e) {
            let [t, n] = d.useState(!1),
                i = eV(e.type),
                l = (0, j.uA)(e);
            return {
                shouldShowSuggestions: !i && !t && !l,
                handleDismissSuggestions: d.useCallback(() => {
                    n(!0);
                }, []),
            };
        })(t),
        u = l && !a,
        m = u && o,
        g = (0, j.L)(t),
        x = (0, j.FM)(t, { showEditingControls: u }),
        f = (0, j.uA)(t),
        h = 1 === (0, j.cv)(t.type);
    return (0, i.jsx)(nN, {
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
                          tZ,
                          { disabled: f, widgetType: t.type, widget: t, onAddGame: () => r(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, i.jsx)(nA, { userId: n.id, widgetType: t.type, onDismiss: c, className: nb.r }),
        ...s,
    });
}
function nw(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(t5, { widgetType: t.type, children: (0, i.jsx)(ny, { widget: t, ...n }) });
}
function nR(e) {
    let { widget: t, ...n } = e;
    return t instanceof l.R
        ? (0, i.jsx)(o.A, { widget: t, ...n })
        : t instanceof r.Tu
          ? (0, i.jsx)(ek, { widget: t, ...n })
          : (0, s.fu)(t)
            ? (0, i.jsx)(nw, { widget: t, ...n })
            : t instanceof a.kM
              ? (0, i.jsx)(tU, { widget: t, ...n })
              : null;
}
