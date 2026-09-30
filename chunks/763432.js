n.d(t, { A: () => iA, u: () => ip });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    o = n(885574),
    d = n(834730),
    c = n(429913),
    u = n(277984),
    g = n(840387),
    m = n(201718),
    f = n(615405),
    x = n(633075),
    h = n(646976),
    p = n(289173),
    I = n(210598),
    E = n(311043),
    A = n(569926),
    j = n(958805),
    v = n(61881),
    C = n(435558),
    b = n(196765),
    k = n(540185),
    S = n(282435);
let y = (0, C.sampleSize)(S.sx, S.sx.length),
    R = (0, b.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (n, i, l) => {
            let s = new Set(l.map((e) => e.gameId));
            for (let l of (e({
                stack: [...n.filter((e) => !s.has(e)), ...y],
                wishlistStack: [...i.filter((e) => !s.has(e)), ...y],
            }),
            Object.values(k.x)))
                t().setNext(6, l);
        },
        setNext: (e, n) => {
            let i = t().getNext(e, n);
            t()._setGameIds(n, i);
            let l = t().peekNext(7, n);
            t()._setPeekedGameIds(n, l);
        },
        getNext: (e, n) => {
            let i = n === k.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                l = i.slice(0, e),
                s = i.slice(e);
            return (t()._setStack(n, s), l);
        },
        peekNext: (e, n) => (n === k.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, n) => {
            let i = t().gameIds[n] ?? [],
                l = i.indexOf(e);
            if (-1 === l) return;
            let s = [...i];
            s.splice(l, 1);
            let a = t().getNext(1, n),
                r = t().peekNext(7, n);
            (t()._setGameIds(n, [...s, ...a]), t()._setPeekedGameIds(n, [...r, ...a]));
        },
        bumpMultiple: (e, n) => {
            let i = (t().gameIds[n] ?? []).filter((t) => !e.includes(t)),
                l = t().getNext(6 - i.length, n),
                s = t().peekNext(7, n);
            (t()._setGameIds(n, [...i, ...l]), t()._setPeekedGameIds(n, [...s, ...l]));
        },
        remove: (e, n) => {
            let i = (n === k.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            (t()._setStack(n, i), t()._setPeekedGameIds(n, t().peekNext(7, n)));
        },
        _setGameIds: (t, n) => {
            e((e) => ({ gameIds: { ...e.gameIds, [t]: n } }));
        },
        _setStack: (t, n) => {
            t === k.x.WANT_TO_PLAY_GAMES ? e({ wishlistStack: n }) : e({ stack: n });
        },
        _setPeekedGameIds: (t, n) => {
            e((e) => ({ peekedGameIds: { ...e.peekedGameIds, [t]: n } }));
        },
    }));
function N(e) {
    let { bump: t, bumpMultiple: n, gameIds: i } = R();
    !(function (e) {
        let { remove: t, peekedGameIds: n } = R(),
            i = l.useMemo(() => n[e] ?? [], [n, e]);
        (0, A.x)(i);
        let s = (0, r.yK)([E.A], () => i.map((e) => E.A.isFetching(e)));
        l.useEffect(() => {
            for (let n of i) {
                let i = E.A.didFetchingFail(n),
                    l = E.A.hasNoData(n),
                    s = !!E.A.getGame(n),
                    a = null != E.A.getCoverImageUrl(n);
                (i || l || (s && !a)) && t(n, e);
            }
        }, [i, t, e, s]);
    })(e);
    let s = l.useMemo(() => i[e] ?? [], [i, e]),
        a = l.useCallback(
            (n) => {
                t(n, e);
            },
            [t, e],
        ),
        o = (0, r.yK)([E.A], () => s.map((e) => E.A.isFetching(e)));
    l.useEffect(() => {
        let t = s.filter((e) => {
            let t = E.A.didFetchingFail(e),
                n = E.A.hasNoData(e),
                i = !!E.A.getGame(e),
                l = null != E.A.getCoverImageUrl(e);
            return t || n || (i && !l);
        });
        t.length > 0 && n(t, e);
    }, [s, e, n, o]);
    let d = l.useMemo(() => s.map((e) => ({ gameId: e })), [s]);
    return { gameIds: s, games: d, onAddGame: a };
}
var T = n(600761),
    w = n(667049),
    L = n(389667),
    P = n(58216),
    _ = n(869484),
    O = n(315629),
    D = n(465794),
    G = n(450232),
    M = n(287809),
    U = n(158045),
    F = n(735321),
    W = n(644346),
    H = n(939249),
    B = n(375708),
    V = n(954165);
function K(e) {
    let { onClick: t, expanded: n } = e;
    return (0, i.jsx)(H.D, {
        onClick: t,
        className: V.x,
        "aria-expanded": n,
        children: (0, i.jsx)(d.E, {
            variant: "text-sm/medium",
            color: "none",
            children: n ? B.intl.string(B.t["6MwJo/"]) : B.intl.string(B.t.lBeKY2),
        }),
    });
}
var z = n(43990),
    X = n(241326),
    Y = n(33969),
    q = n(866665),
    J = n(245604),
    Z = n(601089);
function Q(e) {
    let { label: t, onClick: n, className: l } = e;
    return (0, i.jsx)(q.m, {
        text: t,
        children: (0, i.jsxs)(H.D, {
            className: a()(Z.kL, l),
            "aria-label": t,
            onClick: n,
            children: [
                (0, i.jsx)("div", { className: Z.n8 }),
                (0, i.jsx)("div", { className: Z.zc, children: (0, i.jsx)(J.U, { size: "sm" }) }),
                (0, i.jsx)("div", { className: Z.n8 }),
            ],
        }),
    });
}
var $ = n(34011),
    ee = n(448766),
    et = n(770178);
let en = l.createContext({
    isAnyFieldClipped: !1,
    isExpanded: !1,
    setAnyFieldClipped: () => {},
    setIsExpanded: () => {},
});
function ei(e) {
    let { children: t } = e,
        [n, s] = l.useState(!1),
        [a, r] = l.useState(!1),
        [o] = l.useState(() => new Set()),
        d = l.useCallback(
            (e, t) => {
                (t ? o.add(e) : o.delete(e), r(o.size > 0));
            },
            [o],
        ),
        c = l.useMemo(
            () => ({ isExpanded: n, setIsExpanded: s, isAnyFieldClipped: a, setAnyFieldClipped: d }),
            [n, a, d],
        );
    return (0, i.jsx)(en.Provider, { value: c, children: t });
}
function el() {
    return l.useContext(en);
}
var es = n(404760),
    ea = n(892572);
function er(e) {
    let { className: t, variant: n, color: s, value: r, maxLines: o, interactive: c = !0, disableMarkdown: u = !1 } = e,
        g = c ? ee.d : ee.j,
        { textRef: m, lineClamp: f } = (function (e, t) {
            let { isExpanded: n, setAnyFieldClipped: i } = l.useContext(en),
                s = l.useId(),
                a = l.useRef(null),
                r = l.useCallback(() => {
                    let e = a.current;
                    null != e && i(s, e.scrollWidth - e.clientWidth > 1 || e.scrollHeight - e.clientHeight > 1);
                }, [s, i]);
            return (
                (0, et.g)(a, r, [n, t], { fireOnMount: !0, fireOnDepsChange: !0 }),
                l.useEffect(() => () => i(s, !1), [s, i]),
                { textRef: a, lineClamp: n ? void 0 : e }
            );
        })(o, r);
    return (0, i.jsx)(d.E, {
        ref: m,
        className: a()(ea.YD, { [ea.Lq]: o > 1 }, t),
        variant: n,
        color: s,
        lineClamp: f,
        children: u ? r : g(r),
    });
}
function eo(e) {
    let {
            value: t,
            placeholder: n,
            variant: s,
            color: r,
            onCommit: o,
            maxLength: d,
            maxLines: c,
            growWidth: u,
            disableMarkdown: g,
        } = e,
        m = l.useCallback((e) => o(e.trim()), [o]),
        { isExpanded: f } = el(),
        x =
            "" === t.trim()
                ? null
                : (0, i.jsx)(er, { interactive: !1, variant: s, color: r, value: t, maxLines: c, disableMarkdown: g });
    return (0, i.jsx)("div", {
        className: a()(es.kL, ea.ZZ, { [es.oE]: 1 === c, [es.CP]: u }),
        children: (0, i.jsx)($.w, {
            value: t,
            onCommit: m,
            autoComplete: "off",
            defaultDirty: !0,
            hideLabel: !0,
            multiline: 1 !== c,
            paddingBlock: "md",
            paddingInline: 1 === c ? "sm" : "md",
            preview: x,
            placeholder: n,
            label: n,
            maxLength: d,
            maxRows: 1 === c || f ? void 0 : c,
            textVariant: s,
            scrollIntoViewOnFocus: !0,
        }),
    });
}
function ed(e) {
    return e.canEdit
        ? (0, i.jsx)(eo, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, i.jsx)(er, {
                variant: e.variant,
                color: e.color,
                value: e.value,
                maxLines: e.maxLines,
                disableMarkdown: e.disableMarkdown,
            });
}
var ec = n(326009),
    eu = n(922016),
    eg = n(22231),
    em = n(750943),
    ef = n(458499);
function ex(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: a } = e;
    return (0, i.jsx)(eu.Y, {
        targetElementRef: n,
        align: "right",
        position: "bottom",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(ef.A, { lastEdit: t, cropAndUpload: s, onChangeImage: a, onClose: n });
        },
        children: (e) =>
            (0, i.jsx)(Y.Y, {
                ...e,
                ref: n,
                icon: eg.PencilIcon,
                variant: "overlay-secondary",
                tooltipText: B.intl.string(B.t.RWkUzH),
                "aria-haspopup": "menu",
                disabled: l,
            }),
    });
}
function eh(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: a } = e;
    return null == t
        ? (0, i.jsx)(Y.Y, {
              ref: n,
              icon: em.X,
              variant: "overlay-secondary",
              tooltipText: B.intl.string(B.t.dh0LD5),
              disabled: l,
              onClick: a,
          })
        : (0, i.jsx)(ex, { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: a });
}
var ep = n(376357),
    eI = n(857250),
    eE = n(97483),
    eA = n(192308),
    ej = n(765548),
    ev = n(860840),
    eC = n(229531),
    eb = n(515718),
    ek = n(741394),
    eS = n(38405);
function ey(e) {
    let { uploadType: t, returnRef: s, getCropAspectRatio: a, onUploadSuccess: r } = e,
        o = l.useRef(0),
        [d, c] = l.useState(null),
        [u, g] = l.useState(null),
        m = (0, ej.A)(r),
        f = l.useCallback(() => {
            ((o.current = o.current + 1), c(null), g(null));
        }, []),
        x = l.useCallback(
            async (e, t, n, i) => {
                o.current = o.current + 1;
                let l = o.current;
                c(e);
                try {
                    let [s, a] = await Promise.all([
                        j.A.uploadWidgetAsset(t),
                        ev.default.fromBlob(n).catch(() => void 0),
                    ]);
                    if (o.current !== l) return;
                    (c(null),
                        g({ filename: s, unprocessedFile: n, transform: i }),
                        m({ filename: s, localDataUri: e, originalHash: a }));
                } catch (e) {
                    if (o.current !== l) return;
                    (c(null), (0, ep.P)((0, eI.o)(B.intl.string(B.t.F4Neqh), eE.Ck.FAILURE)), eS.A.captureException(e));
                }
            },
            [m],
        ),
        h = l.useCallback(
            (e) => {
                var t, n;
                let i,
                    l,
                    { imageUri: s, file: a, transform: r } = e,
                    o = (0, eb.aU)(s);
                o.size > 0xa00000
                    ? (0, ep.P)((0, eI.o)(B.intl.string(B.t.YbdEFK), eE.Ck.FAILURE))
                    : x(
                          s,
                          new File(
                              [o],
                              ((t = a.name),
                              (n = o.type),
                              (i = (0, eC.B)(n) ?? "png"),
                              (l = (0, ek.kh)(t)),
                              `${"" !== l ? l : "image"}.${i}`),
                              { type: o.type },
                          ),
                          a,
                          r,
                      );
            },
            [x],
        );
    return {
        cropAndUpload: l.useCallback(
            (e, l, r) => {
                let o = a?.();
                (0, eA.openModalLazy)(
                    async () => {
                        let { default: a } = await Promise.all([
                            n.e("398791"),
                            n.e("655327"),
                            n.e("67702"),
                            n.e("1214"),
                            n.e("858164"),
                            n.e("427032"),
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
                                file: l,
                                imageUri: e,
                                uploadType: t,
                                returnRef: s,
                                initialTransform: r,
                                cropAspectRatio: o,
                                onCrop: h,
                            });
                    },
                    { stackingBehavior: "stack" },
                );
            },
            [h, t, s, a],
        ),
        previewUri: d,
        cancelUpload: f,
        getLastEdit: l.useCallback(
            (e) => (null != u && null != e && "filename" in e && e.filename === u.filename ? u : null),
            [u],
        ),
    };
}
var eR = n(652215),
    eN = n(339984),
    eT = n(148548);
function ew() {
    return (0, i.jsx)(Q, {
        label: B.intl.string(B.t.gQmDk4),
        onClick: function () {
            (0, F.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
        },
        className: eT.GU,
    });
}
function eL(e) {
    let { userId: t, section: n, sectionIndex: s, canEdit: r } = e,
        o = l.useRef(null),
        d = l.useRef(null),
        c = l.useRef(null);
    function u(e) {
        (0, F.AD)((t) => {
            let n = t.sections[s];
            if (n?.type !== _.K.COVER) return t;
            let i = [...t.sections];
            return ((i[s] = e(n)), new I.Tu({ ...t, sections: i }));
        });
    }
    function g(e) {
        u((t) => ({ ...t, title: e }));
    }
    function m(e) {
        u((t) => ({ ...t, subtitle: e }));
    }
    let f = l.useCallback(() => {
            let e = c.current?.getBoundingClientRect();
            return null != e && e.width > 0 && e.height > 0 ? e.width / e.height : void 0;
        }, []),
        {
            cropAndUpload: x,
            previewUri: h,
            cancelUpload: p,
            getLastEdit: E,
        } = ey({
            uploadType: eN.HL.PERSONAL_WIDGET_COVER,
            returnRef: d,
            getCropAspectRatio: f,
            onUploadSuccess: (e) => u((t) => ({ ...t, image: e })),
        });
    function A() {
        (p(), u((e) => ({ ...e, image: void 0 })));
    }
    function j() {
        o.current?.activateUploadDialogue();
    }
    function v() {
        (0, F.AD)((e) => new I.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let C = null != h,
        b = r || "" !== n.title.trim() || "" !== n.subtitle.trim(),
        k = null != n.image || C,
        S = k || r,
        y = E(n.image);
    return (0, i.jsx)(z.N, {
        theme: k ? eR.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: c,
                className: a()(eT.kL, { [eT.Vp]: S }, e),
                children: [
                    r || null != n.image
                        ? (0, i.jsxs)("div", {
                              className: eT.El,
                              children: [
                                  (0, i.jsx)(ec.A, {
                                      cropAndUpload: x,
                                      imageInputRef: o,
                                      className: eT.Sl,
                                      canEdit: r,
                                      userId: t,
                                      image: n.image,
                                      previewUri: h,
                                      editVariant: "tooltip",
                                  }),
                                  k && b ? (0, i.jsx)("div", { className: eT.cw }) : null,
                              ],
                          })
                        : null,
                    r
                        ? (0, i.jsxs)(Y.A, {
                              className: eT.o1,
                              children: [
                                  null != n.image
                                      ? (0, i.jsx)(eh, {
                                            lastEdit: y,
                                            buttonRef: d,
                                            disabled: C,
                                            cropAndUpload: x,
                                            onChangeImage: j,
                                        })
                                      : null,
                                  (0, i.jsx)(Y.Y, {
                                      icon: X.TrashIcon,
                                      variant: "overlay-secondary",
                                      tooltipText: k ? B.intl.string(B.t.RyK5Ww) : B.intl.string(B.t.g2jVww),
                                      onClick: k ? A : v,
                                  }),
                              ],
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: a()(eT.hQ, e, { [eT.Vp]: S }),
                        children: [
                            (0, i.jsx)(ed, {
                                canEdit: r,
                                growWidth: !0,
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                value: n.title,
                                placeholder: B.intl.string(B.t.KqCDvK),
                                onCommit: g,
                                maxLength: 50,
                                maxLines: 2,
                            }),
                            (0, i.jsx)(ed, {
                                canEdit: r,
                                variant: "text-sm/medium",
                                color: "text-default",
                                value: n.subtitle,
                                placeholder: B.intl.string(B.t.k8zZFd),
                                onCommit: m,
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
var eP = n(661531),
    e_ = n(603090);
function eO(e) {
    let { onClick: t, alwaysVisible: n = !1 } = e;
    return (0, i.jsxs)(H.D, {
        onClick: t,
        className: a()(e_.cR, { [e_.mr]: n }),
        children: [
            (0, i.jsx)(em.X, { size: "xs", color: eP.A.colors.ICON_SUBTLE }),
            (0, i.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", children: B.intl.string(B.t["9AY+/x"]) }),
        ],
    });
}
function eD(e) {
    let { index: t, userId: n, field: l, canEdit: s, onFieldChange: r, onFieldRemove: o } = e,
        {
            cropAndUpload: d,
            previewUri: c,
            cancelUpload: u,
            getLastEdit: g,
        } = ey({
            uploadType: eN.HL.PERSONAL_WIDGET_FIELD,
            onUploadSuccess: (e) => r(l.key, (t) => ({ ...t, image: e })),
        }),
        m = s ? !0 !== l.hideImage : null != l.image;
    return (0, i.jsxs)("div", {
        className: e_.ez,
        children: [
            m
                ? (0, i.jsxs)("div", {
                      className: e_.tF,
                      children: [
                          (0, i.jsx)(ec.A, {
                              className: a()(e_.k9, s ? e_.y2 : void 0),
                              canEdit: s,
                              userId: n,
                              image: l.image,
                              previewUri: c,
                              cropAndUpload: d,
                              editVariant: "overlay",
                              lastEdit: g(l.image),
                          }),
                          s
                              ? (0, i.jsx)(Y.A, {
                                    className: e_.ij,
                                    children: (0, i.jsx)(Y.Y, {
                                        variant: "overlay-secondary",
                                        tooltipText: B.intl.string(B.t.RyK5Ww),
                                        onClick: function () {
                                            (u(),
                                                r(l.key, (e) =>
                                                    null != e.image
                                                        ? { ...e, image: void 0 }
                                                        : { ...e, image: void 0, hideImage: !0 },
                                                ));
                                        },
                                        icon: X.TrashIcon,
                                    }),
                                })
                              : null,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: e_.oT,
                children: [
                    (0, i.jsx)(ed, {
                        canEdit: s,
                        variant: "text-sm/medium",
                        color: "text-default",
                        value: l.title,
                        placeholder: B.intl.formatToPlainString(B.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            r(l.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 40,
                        maxLines: 2,
                    }),
                    (0, i.jsx)(ed, {
                        canEdit: s,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        value: l.description,
                        placeholder: B.intl.formatToPlainString(B.t.Hs14K3, { number: t + 1 }),
                        onCommit: function (e) {
                            r(l.key, (t) => ({ ...t, description: e }));
                        },
                        maxLength: 90,
                        maxLines: 4,
                    }),
                ],
            }),
            s
                ? (0, i.jsxs)(Y.A, {
                      className: e_.Ms,
                      children: [
                          m
                              ? null
                              : (0, i.jsx)(Y.Y, {
                                    variant: "overlay-secondary",
                                    tooltipText: B.intl.string(B.t.i3vRzP),
                                    onClick: function () {
                                        r(l.key, (e) => ({ ...e, hideImage: void 0 }));
                                    },
                                    icon: em.X,
                                }),
                          (0, i.jsx)(Y.Y, {
                              variant: "overlay-secondary",
                              tooltipText: B.intl.string(B.t.g2jVww),
                              onClick: function () {
                                  o(l.key);
                              },
                              icon: X.TrashIcon,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eG(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: a } = e;
    function r(e) {
        (0, F.AD)((t) => {
            let n = t.sections[l];
            if (n?.type !== _.K.FIELDS) return t;
            let i = [...t.sections];
            return ((i[l] = { ...n, fields: e(n.fields) }), new I.Tu({ ...t, sections: i }));
        });
    }
    function o(e, t) {
        r((n) => {
            let i = n.findIndex((t) => t.key === e),
                l = n[i];
            if (null == l) return n;
            let s = [...n];
            return ((s[i] = t(l)), s);
        });
    }
    function d(e) {
        r((t) => t.filter((t) => t.key !== e));
    }
    function c() {
        r((e) => [...e, (0, I.yL)()]);
    }
    if (0 === n.fields.length) {
        if (!s) return null;
        if (!a)
            return (0, i.jsx)("div", { className: e_.kL, children: (0, i.jsx)(eO, { alwaysVisible: !0, onClick: c }) });
    }
    let u = n.fields.map((e, n) =>
            (0, i.jsx)(eD, { index: n, userId: t, field: e, canEdit: s, onFieldChange: o, onFieldRemove: d }, e.key),
        ),
        g = n.fields.length % 2 == 1;
    s && g && n.fields.length < 4 && u.push((0, i.jsx)(eO, { onClick: c }, "add-entry"));
    let m = s && !g && n.fields.length + 2 <= 4;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u.length > 0 ? (0, i.jsx)("div", { className: e_.kL, children: u }) : null,
            m
                ? (0, i.jsx)(Q, {
                      label: B.intl.string(B.t.t4vU5I),
                      onClick: function () {
                          r((e) => [...e, (0, I.yL)(), (0, I.yL)()]);
                      },
                  })
                : null,
        ],
    });
}
var eM = n(202541),
    eU = n(877068);
let eF = { section: eR.JJy.PERSONAL_WIDGET };
function eW(e) {
    let { widget: t, canEdit: n } = e;
    return (0, i.jsxs)("div", {
        className: eU.wx,
        children: [
            (0, i.jsx)(G.A, { size: "xs", className: eU.nr }),
            (0, i.jsx)(ed, {
                canEdit: n,
                variant: "text-sm/medium",
                color: "text-default",
                value: t.header,
                placeholder: B.intl.string(B.t.fjSaAm),
                onCommit: function (e) {
                    (0, F.AD)((t) => new I.Tu({ ...t, header: e }));
                },
                maxLength: 50,
                maxLines: 1,
                disableMarkdown: !0,
            }),
        ],
    });
}
function eH(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: a } = e;
    switch (n.type) {
        case _.K.COVER:
            return (0, i.jsx)(eL, { userId: t, section: n, sectionIndex: l, canEdit: s });
        case _.K.FIELDS:
            return (0, i.jsx)(eG, { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: a });
    }
}
function eB() {
    return (0, r.bG)([M.default], () => U.Ay.isPremium(M.default.getCurrentUser(), eM.PremiumTypes.TIER_2))
        ? null
        : (0, i.jsxs)("div", {
              className: eU.hc,
              children: [
                  (0, i.jsx)(O.h, { color: "nitro-pink", className: eU.Sp, offsetBottom: -4 }),
                  (0, i.jsxs)("div", {
                      className: eU.LK,
                      children: [
                          (0, i.jsx)(d.E, {
                              variant: "text-xs/semibold",
                              color: "text-strong",
                              children: B.intl.string(B.t.WOPVdz),
                          }),
                          (0, i.jsx)(d.E, {
                              variant: "text-xs/medium",
                              color: "text-default",
                              children: B.intl.string(B.t["55tM3t"]),
                          }),
                      ],
                  }),
                  (0, i.jsx)(D.A, {
                      size: "sm",
                      subscriptionTier: eM.pe.TIER_2,
                      defaultTextOverride: B.intl.string(B.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eF,
                  }),
              ],
          });
}
function eV() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: n } = el();
    return e || t ? (0, i.jsx)(K, { expanded: t, onClick: () => n((e) => !e) }) : null;
}
function eK(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: a, index: r, trailingContent: o } = e,
        d = s && !0 !== a,
        c = l.useMemo(() => t.sections.some((e) => e.type === _.K.COVER), [t.sections]);
    return (0, i.jsx)(W.A, {
        userId: n.id,
        widget: t,
        allowEditing: s,
        disableInteraction: a,
        index: r,
        trailingContent: o,
        className: eU.Nr,
        headerClassName: eU.JE,
        children: (0, i.jsxs)("div", {
            className: eU.kL,
            children: [
                (0, i.jsx)(eW, { widget: t, canEdit: d }),
                d && !c ? (0, i.jsx)(ew, {}) : null,
                t.sections.map((e, t) =>
                    (0, i.jsx)(eH, { userId: n.id, section: e, sectionIndex: t, canEdit: d, hasCoverSection: c }, t),
                ),
                (0, i.jsx)(eV, {}),
                d ? (0, i.jsx)(eB, {}) : null,
            ],
        }),
    });
}
function ez(e) {
    return (0, i.jsx)(ei, { children: (0, i.jsx)(eK, { ...e }) });
}
var eX = n(702841),
    eY = n(821609),
    eq = n(403581),
    eJ = n(307301),
    eZ = n(37537),
    eQ = n(183555),
    e$ = n(465318),
    e0 = n(384377),
    e1 = n(554146),
    e8 = n(43105),
    e7 = n(131607),
    e5 = n(518477),
    e2 = n(49999);
function e3() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = e$.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [n, i] = (0, e7.kn)(e && t ? [e1.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [n === e1.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, i];
}
function e4(e) {
    let { targetElementRef: t, isVisible: n, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, eQ.NJ)();
    return n
        ? (0, i.jsx)(e8.A, {
              targetElementRef: t,
              badge: "beta",
              graphic: {
                  type: "image",
                  src: "https://cdn.discordapp.com/assets/content/6eb69edbb7097ad438eaec0f50efb2316dc02df984de7b7423253f599c3e23ce.svg",
              },
              position: "left",
              alignmentStrategy: "edge",
              align: "top",
              caretConfig: { align: "start" },
              gradientColor: "nitro-pink",
              title: B.intl.string(B.t.KKGxNt),
              body: B.intl.string(B.t["IS+QTV"]),
              onRequestClose: () => l(e2.i.USER_DISMISS),
              actions: [
                  {
                      text: B.intl.string(B.t.RCy7Px),
                      icon: eq.t,
                      onClick: function () {
                          let e = (0, I.g0)();
                          ((0, F.Y5)(e),
                              s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, e0.XA)(e5.jM.WIDGET_ADDED));
                      },
                  },
              ],
          })
        : null;
}
var e6 = n(410453);
function e9(e) {
    let { buttonRef: t, isCoachmarkVisible: n, markCoachmarkAsDismissed: s } = e,
        { trackUserProfileEditAction: a } = (0, eQ.NJ)(),
        r = l.useCallback(() => {
            n && s(e2.i.TAKE_ACTION);
            let e = (0, I.g0)();
            ((0, F.Y5)(e),
                a({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, e0.XA)(e5.jM.WIDGET_ADDED));
        }, [a, n, s]);
    return (0, i.jsx)(eY.$, {
        icon: eq.t,
        text: B.intl.string(B.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: r,
        buttonRef: t,
    });
}
function te(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, eQ.NJ)(),
        r = l.useRef(null),
        o = l.useRef(null),
        [c, u] = e3(),
        g = (function () {
            let e = (0, eX.bG)([M.default], () => M.default.getCurrentUser()?.id),
                t = (0, w.A)(e),
                { enabled: n, showCreateEntrypoint: i } = e$.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === k.x.PERSONAL);
            return n && i && !l;
        })(),
        m = (0, eZ.c)("UserProfileWidgetEditingHeader"),
        f = l.useCallback(() => {
            (c && u(e2.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, eA.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("376053"), n.e("487697"), n.e("56438")]).then(
                            n.bind(n, 709013),
                        );
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [s, c, u]);
    return (0, i.jsxs)("div", {
        className: a()(e6.w, t),
        children: [
            (0, i.jsx)(d.E, {
                className: e6.D,
                variant: m ? "text-sm/semibold" : "text-xs/semibold",
                color: "text-subtle",
                children: B.intl.string(B.t.OYlggR),
            }),
            g ? (0, i.jsx)(e9, { buttonRef: o, isCoachmarkVisible: c, markCoachmarkAsDismissed: u }) : null,
            (0, i.jsx)(eY.$, {
                icon: eJ.j,
                text: B.intl.string(B.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: f,
                buttonRef: r,
            }),
            (0, i.jsx)(e4, { targetElementRef: g ? o : r, isVisible: c, markAsDismissed: u }),
        ],
    });
}
var tt = n(192),
    tn = n(172218),
    ti = n(408278),
    tl = n(499373),
    ts = n(775602),
    ta = n(793574),
    tr = n(734066),
    to = n(682176),
    td = n(111994),
    tc = n(280450),
    tu = n(321191);
function tg(e) {
    return (0, r.bG)(
        [tc.default, tu.A],
        () => (tu.A.getUserProfile(tc.default.getId())?.widgets ?? []).some((t) => t.type === e),
        [e],
    );
}
var tm = n(765178),
    tf = n(789645);
(n(323874), n(14289), n(35956));
var tx = n(614584),
    th = n(956050),
    tp = n(195880),
    tI = n(219222),
    tE = n(696016);
async function tA(e, t) {
    let n = URL.createObjectURL(t);
    try {
        let t = await (0, th.m)(n, 0);
        (0, F.QN)(e, t);
    } catch (e) {
        tE.nx.warn(`Clips gallery widget thumbnail refresh failed; keeping placeholder: ${e}`);
    } finally {
        URL.revokeObjectURL(n);
    }
}
async function tj(e, t, n, i, l) {
    let { analyticsLocations: s, source: a, trackEditAction: r } = l,
        o = "exporting";
    try {
        let l = await (0, tx.VO)(e, { analyticsLocations: s });
        if (i.signal.aborted || !(0, F.iu)(t)) return;
        ((o = "uploading"), tA(t, l).catch(() => {}));
        let d = new File([l], "clip.mp4", { type: "video/mp4" }),
            c = await j.A.uploadWidgetClip(d, { onProgress: (e) => (0, tI.Fj)(t, e), signal: i.signal });
        if (!(0, F.WX)(t, c)) return;
        r({
            action: a === e5.IE.PICKER ? "CLIP_ADDED_FROM_PICKER" : "CLIP_ADDED_FROM_SUGGESTED",
            widgetEdited: k.x.CLIPS_GALLERY,
            gameId: n,
        });
    } catch (l) {
        if (i.signal.aborted) return;
        ((0, F.mC)(t),
            tE.nx.error("Failed to upload a clip for the clips gallery widget", l, {
                stage: o,
                clipType: e.type,
                crop: e.editMetadata?.crop,
                trackTypes: e.tracks?.map((e) => e.type),
            }),
            (0, ep.P)((0, eI.o)(B.intl.string(B.t.iufib1), eE.Ck.FAILURE)),
            r({
                action: "exporting" === o ? "CLIP_EXPORT_FAILED" : "CLIP_UPLOAD_FAILED",
                widgetEdited: k.x.CLIPS_GALLERY,
                gameId: n,
            }));
    } finally {
        (0, tI.cG)(t);
    }
}
function tv(e) {
    let { widgetClipId: t, gameId: n, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eQ.NJ)(),
        a = B.intl.string(B.t["4z6ldH"]);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(q.m, {
            text: a,
            ariaHidden: !0,
            children: (0, i.jsx)(ti.K, {
                "aria-label": a,
                icon: tf.P,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, tI._V)(t),
                        (0, F.mC)(t),
                        tm.O.announce(B.intl.string(B.t.VCQXvr)),
                        s({ action: "CLIP_UPLOAD_CANCELED", widgetEdited: k.x.CLIPS_GALLERY, gameId: n }));
                },
            }),
        }),
    });
}
var tC = n(314531);
n(926675);
var tb = n(305866),
    tk = n(123181),
    tS = n(229087),
    ty = n(753437),
    tR = n(382701),
    tN = n(408519);
function tT(e) {
    let { clipId: t, tags: n, allowEditing: s, disableInteraction: a = !1, onEditingChange: r } = e,
        o = s && !a,
        c = l.useMemo(() => n?.filter((e) => null != (0, ty.W3)(e)) ?? [], [n]),
        u = c.length > 0,
        g = o && c.length < 20,
        { trackUserProfileEditAction: m } = (0, eQ.NJ)(),
        f = l.useRef(null),
        x = l.useRef(new Map()),
        h = l.useRef(null),
        p = l.useRef(null),
        I = l.useRef(null),
        [E, A] = l.useState(c.length),
        [j, v] = l.useState(!1),
        [C, b] = l.useState(!1),
        S = j || C;
    (l.useEffect(() => {
        r(S);
    }, [S, r]),
        l.useEffect(() => () => r(!1), [r]));
    let y = l.useCallback(
            (e, n) => {
                ((0, F.$6)(t, e),
                    m({ action: "added" === n ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: k.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        R = l.useCallback(() => {
            (b(!0), m({ action: "PRESS_ADD_TAG", widgetEdited: k.x.CLIPS_GALLERY }));
        }, [m]),
        N = l.useCallback(() => b(!1), []),
        T = l.useCallback(
            (e) => {
                ((0, F.Fo)(t, e), m({ action: "TAG_REMOVED", widgetEdited: k.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        w = l.useCallback(() => {
            if (j) return;
            let e = f.current?.getBoundingClientRect().width ?? 0;
            if (0 === e || 0 === c.length) return void A(c.length);
            let t = I.current?.getBoundingClientRect().width ?? 0,
                n = h.current?.getBoundingClientRect().width ?? 0,
                i = e - (t > 0 ? t + 4 : 0),
                l = c.map((e) => x.current.get(e)?.offsetWidth ?? 0);
            function s(e, t) {
                let n = 0;
                for (let t = 0; t < e; t++) n += l[t] + 4 * (t > 0);
                return n <= t;
            }
            if (s(c.length, i)) return void A(c.length);
            let a = i - (n + 4),
                r = 0;
            for (; r < c.length && s(r + 1, a);) r++;
            A(r);
        }, [c, j]);
    (0, et.g)(f, w);
    let L = c.length - E,
        P = L > 0,
        _ = l.useCallback(
            (e) => {
                (1 === L && v(!1), T(e));
            },
            [T, L],
        );
    return u || g
        ? (0, i.jsxs)("div", {
              className: tN.kL,
              ref: f,
              children: [
                  (0, i.jsxs)("ul", {
                      className: tN.xP,
                      "aria-hidden": !0,
                      children: [
                          c.map((e) =>
                              (0, i.jsx)(
                                  tS.A,
                                  {
                                      tag: e,
                                      variant: "filled",
                                      onRemove: o ? () => {} : void 0,
                                      ref: (t) => {
                                          null != t && x.current.set(e, t);
                                      },
                                  },
                                  e,
                              ),
                          ),
                          (0, i.jsx)("li", {
                              className: tN.lv,
                              ref: h,
                              children: (0, i.jsx)(d.E, {
                                  variant: "text-xxs/medium",
                                  color: "none",
                                  children: `+${c.length}`,
                              }),
                          }),
                      ],
                  }),
                  u &&
                      (0, i.jsx)("ul", {
                          className: tN.nM,
                          "aria-label": B.intl.string(B.t["4Rq3a7"]),
                          children: c
                              .slice(0, E)
                              .map((e) =>
                                  (0, i.jsx)(tS.A, { tag: e, variant: "filled", onRemove: o ? () => T(e) : void 0 }, e),
                              ),
                      }),
                  P &&
                      (0, i.jsx)(tw, {
                          buttonRef: p,
                          numHidden: L,
                          isOpen: j,
                          onOpenChange: v,
                          disableInteraction: a,
                          children: c.map((e) =>
                              (0, i.jsx)(tS.A, { tag: e, className: tN.Hl, onRemove: o ? () => _(e) : void 0 }, e),
                          ),
                      }),
                  g && (0, i.jsx)(tk.A, { tags: c, onTagsChange: y, onOpen: R, onClose: N, variant: "filled", ref: I }),
              ],
          })
        : null;
}
function tw(e) {
    let { buttonRef: t, numHidden: n, isOpen: l, onOpenChange: s, disableInteraction: a, children: r } = e,
        o = B.intl.string(B.t.pWHvBI);
    return a
        ? (0, i.jsx)("div", {
              className: `${tN.lv} ${tR.r9}`,
              ref: t,
              children: (0, i.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
          })
        : (0, i.jsx)(eu.Y, {
              targetElementRef: t,
              position: "top",
              align: "left",
              shouldShow: l,
              onRequestOpen: () => s(!0),
              onRequestClose: () => s(!1),
              renderPopout: () =>
                  (0, i.jsx)(tb.l, {
                      className: tN.Kt,
                      "aria-label": o,
                      returnRef: t,
                      children: (0, i.jsx)("ul", { className: tN.ns, children: r }),
                  }),
              children: (e) =>
                  (0, i.jsx)(q.m, {
                      text: o,
                      ariaHidden: !0,
                      children: (0, i.jsx)(H.D, {
                          ...e,
                          innerRef: t,
                          "aria-label": o,
                          "aria-expanded": l,
                          className: tN.lv,
                          children: (0, i.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
                      }),
                  }),
          });
}
var tL = n(3026);
n(600253);
var tP = n(936026);
function t_(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, i.jsx)(d.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: a()(tP.Qw, { [tP.qf]: n }),
        children: (0, i.jsx)(tL.A, { children: t }),
    });
}
function tO(e) {
    let { clipId: t, title: n, onEditingChange: s } = e,
        { trackUserProfileEditAction: r } = (0, eQ.NJ)(),
        o = l.useCallback(
            (e) => {
                let i = e.trim();
                i !== n.trim() &&
                    ((0, F.mI)(t, i),
                    r({ action: "CLIP_TITLE_EDITED", widgetEdited: k.x.CLIPS_GALLERY, numCharacters: i.length }));
            },
            [t, n, r],
        ),
        d = B.intl.string(B.t["2gwc+H"]);
    return (
        l.useEffect(() => (s(!1), () => s(!1)), [s]),
        (0, i.jsx)("div", {
            className: a()(es.kL, es.oE, tP.ZZ),
            children: (0, i.jsx)($.w, {
                value: n,
                onCommit: o,
                onFocus: () => s(!0),
                onBlur: () => s(!1),
                autoComplete: "off",
                defaultDirty: !0,
                hideLabel: !0,
                paddingBlock: "md",
                paddingInline: "sm",
                scrollIntoViewOnFocus: !0,
                preview: (0, i.jsxs)("span", {
                    className: a()(tP.$, tP.TG),
                    children: [
                        (0, i.jsx)(eg.PencilIcon, { size: "xxs", color: "currentColor", className: tP.wz }),
                        "" === n.trim()
                            ? (0, i.jsx)(t_, { value: d, isPlaceholder: !0 })
                            : (0, i.jsx)(t_, { value: n }),
                    ],
                }),
                placeholder: d,
                label: B.intl.string(B.t.PDnM11),
                maxLength: 200,
            }),
        })
    );
}
function tD(e) {
    let { clipId: t, title: n, allowEditing: l, onEditingChange: s } = e,
        a = null != n && "" !== n.trim();
    return l || a
        ? l
            ? (0, i.jsx)(tO, { clipId: t, title: n ?? "", onEditingChange: s })
            : (0, i.jsx)("span", { className: tP.$, children: (0, i.jsx)(t_, { value: n ?? "" }) })
        : null;
}
var tG = n(663341),
    tM = n(451395),
    tU = n(823016);
function tF(e) {
    let { widgetClipId: t, gameId: n, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eQ.NJ)(),
        a = B.intl.string(B.t.ib6Mgx);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(q.m, {
            text: a,
            ariaHidden: !0,
            children: (0, i.jsx)(ti.K, {
                "aria-label": a,
                icon: X.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, F.mC)(t),
                        tm.O.announce(B.intl.string(B.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: k.x.CLIPS_GALLERY, gameId: n }));
                },
            }),
        }),
    });
}
var tW = n(233002);
function tH(e) {
    let { item: t, index: n, isSelected: s, onSelect: r, allowEditing: o } = e,
        { registerDragHandleRef: d, manageFocusOnReorder: c } = (0, tU.r)(),
        { trackUserProfileEditAction: u } = (0, eQ.NJ)(),
        g = l.useRef(null),
        m = l.useCallback(
            (e, t) => {
                e !== t && ((0, F.N5)(e, t), u({ action: "CLIP_REORDERED", widgetEdited: k.x.CLIPS_GALLERY }));
            },
            [u],
        ),
        f = o && ("saved" === t.status || "pending" === t.status),
        x = o && "uploading" === t.status,
        h = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(H.D, {
                    className: a()(tW.Vs, { [tW.wH]: s }),
                    "aria-pressed": s,
                    "aria-label": B.intl.formatToPlainString(B.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => r(t.key),
                    children: (0, i.jsx)(tC.A, { item: t, ringSize: "sm", className: tW.nC }),
                }),
                f &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tM.jV, { buttonRef: d(t.key), className: tW.BU }),
                            (0, i.jsx)(tF, { widgetClipId: t.key, gameId: t.gameId, className: tW.nM }),
                        ],
                    }),
                x && (0, i.jsx)(tv, { widgetClipId: t.key, gameId: t.gameId, className: tW.nM }),
            ],
        });
    return (0, i.jsx)("li", {
        ref: g,
        className: tW.NI,
        children: f
            ? (0, i.jsx)(tM.mG, {
                  index: n,
                  itemId: t.key,
                  listType: k.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => g.current?.offsetWidth },
                  "aria-label": B.intl.formatToPlainString(B.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: m,
                  onEnd: () => c(t.key),
                  className: tW.oE,
                  dropBeforeClassName: tW.A,
                  dropAfterClassName: tW.Ze,
                  draggingClassName: tW.Id,
                  children: h,
              })
            : h,
    });
}
function tB(e) {
    let { items: t, selectedKey: n, onSelect: l, onAddClip: s, allowEditing: a = !1 } = e,
        r = Math.max(0, 4 - t.length),
        o = (0, i.jsxs)("ul", {
            className: tW.Xm,
            style: { "--custom-clips-filmstrip-slots": 4 },
            children: [
                t.map((e, t) =>
                    (0, i.jsx)(tH, { item: e, index: t, isSelected: e.key === n, onSelect: l, allowEditing: a }, e.key),
                ),
                null != s &&
                    Array.from({ length: r }, (e, t) =>
                        (0, i.jsx)(
                            "li",
                            {
                                className: tW.NI,
                                children: (0, i.jsx)(H.D, {
                                    className: tW.Yn,
                                    "aria-label": B.intl.string(B.t.rI0i0a),
                                    onClick: s,
                                    children: (0, i.jsx)(tG.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return a ? (0, i.jsx)(tU.B, { emptyListFallbackRef: null, children: o }) : o;
}
var tV = n(729475),
    tK = n(358618),
    tz = n(983851);
function tX(e) {
    let { isMuted: t, onToggleMuted: n, onFullscreen: l } = e,
        s = B.intl.string(B.t.dcl9MQ),
        a = B.intl.string(t ? B.t.YqAjXy : B.t.w4m945);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(q.m, {
                text: s,
                ariaHidden: !0,
                children: (0, i.jsx)(ti.K, {
                    "aria-label": s,
                    icon: tV.T,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: l,
                }),
            }),
            (0, i.jsx)(q.m, {
                text: a,
                ariaHidden: !0,
                children: (0, i.jsx)(ti.K, {
                    "aria-label": a,
                    icon: t ? tK._ : tz.H,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: n,
                }),
            }),
        ],
    });
}
var tY = n(798108),
    tq = n(297264),
    tJ = n(915089),
    tZ = n(772168);
function tQ(e) {
    let { onDismiss: t, children: n, className: l } = e,
        s = (0, tJ.GV)();
    return (0, i.jsxs)("aside", {
        className: a()(tZ.kL, l),
        "aria-labelledby": s,
        children: [
            (0, i.jsxs)("div", {
                className: tZ.wx,
                children: [
                    (0, i.jsx)(H.D, {
                        className: tZ.r,
                        "aria-label": B.intl.string(B.t["pUR+3g"]),
                        onClick: t,
                        children: (0, i.jsx)(tf.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(tq.D, {
                        id: s,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: B.intl.string(B.t.zMUr6Z),
                    }),
                ],
            }),
            n,
        ],
    });
}
var t$ = n(335978);
function t0(e) {
    let { clip: t, onAddClip: n } = e,
        s = B.intl.formatToPlainString(B.t.gPRdVj, { clipName: t.name ?? t.applicationName }),
        a = l.useCallback(() => n(t), [t, n]);
    return (0, i.jsx)(q.m, {
        text: s,
        ariaHidden: !0,
        children: (0, i.jsxs)(H.D, {
            className: t$.Vs,
            "aria-label": s,
            onClick: a,
            children: [
                (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: t$.xn, loading: "lazy" }),
                (0, i.jsx)(tG.PlusLargeIcon, { size: "sm", color: "currentColor", className: t$.Xv }),
            ],
        }),
    });
}
function t1(e) {
    let { clips: t, onAddClip: n, ...l } = e;
    return (0, i.jsx)(tQ, {
        ...l,
        children: (0, i.jsx)("ul", {
            className: t$.p_,
            children: t.map((e) =>
                (0, i.jsx)("li", { className: t$.NI, children: (0, i.jsx)(t0, { clip: e, onAddClip: n }) }, e.id),
            ),
        }),
    });
}
var t8 = n(769015),
    t7 = n(409626),
    t5 = n(692969),
    t2 = n(202163),
    t3 = n(207803),
    t4 = n(591179),
    t6 = n(485745),
    t9 = n(308766);
function ne(e) {
    let { gameId: t, userId: n, className: s } = e,
        { gameRecord: r } = (0, t2.A)(t),
        o = !(0, t4.X)("WidgetClipGameIcon"),
        d = (0, t6.A)(o),
        c = (0, t5.A)({
            location: "WidgetClipGameIcon",
            applicationId: t,
            source: t7.GameProfileSources.UserProfile,
            sourceUserId: n,
        }),
        u = l.useCallback(
            (e) => {
                if (d) {
                    (e.preventDefault(), e.stopPropagation(), (0, t3.VQ)());
                    return;
                }
                c?.(e);
            },
            [d, c],
        ),
        g = r?.name;
    if (null == g) return null;
    let m = (0, i.jsx)(t8.A, { game: r, size: t8.M.XSMALL, allowUnknownGameIcon: !1 });
    return (0, i.jsx)(q.m, {
        text: g,
        ariaHidden: !0,
        children:
            null == c
                ? (0, i.jsx)(q.m, {
                      text: g,
                      ariaHidden: !0,
                      children: (0, i.jsx)("div", { className: s, children: m }),
                  })
                : (0, i.jsx)(H.D, {
                      className: a()(t9.v, s),
                      "aria-label": B.intl.formatToPlainString(B.t["8QLQB+"], { gameName: g }),
                      onClick: u,
                      children: m,
                  }),
    });
}
function nt(e) {
    return null != e.applicationId && 0 !== e.length;
}
var nn = n(558285),
    ni = n(608857),
    nl = n(915725),
    ns = n(409067),
    na = n(716112);
function nr(e) {
    let { onClick: t } = e,
        n = B.intl.string(B.t.rI0i0a);
    return (0, i.jsx)(q.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, i.jsx)(ti.K, { variant: "secondary", size: "sm", icon: tl.T, "aria-label": n, onClick: t }),
    });
}
function no() {
    return (0, i.jsx)("div", {
        className: na.p$,
        children: (0, i.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: B.intl.format(B.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function nd(e) {
    let t,
        s,
        { widget: a, user: o, allowEditing: d, disableInteraction: c, ...u } = e,
        [g, m] = l.useState(!1),
        [f, x] = l.useState(!1),
        [h, p] = l.useState(!0),
        I = (0, r.bG)([ts.Ay], () => ts.Ay.useReducedMotion),
        E = (0, tn.K)(x, 0.5),
        [A, j] = l.useState(!1),
        [v, C] = l.useState(!1),
        b = l.useRef(void 0),
        S = (0, ni.A)(a),
        y =
            ((t = (0, r.yK)([nl.Ay], () => Object.values(nl.Ay.getClips()))),
            (s = (0, r.bG)([nl.Ay], () => nl.Ay.getSettings().showPovClipsInGallery)),
            l.useMemo(() => {
                let e = new Set();
                for (let t of a.clips) null != t.localClipId && e.add(t.localClipId);
                return t
                    .filter((t) => !(e.has(t.id) || !nt(t) || (!s && (0, ns.kD)(t))))
                    .sort((e, t) => {
                        let n = !0 === e.isFavorite;
                        return n !== (!0 === t.isFavorite) ? (n ? -1 : 1) : t.createdAt - e.createdAt;
                    })
                    .slice(0, 3);
            }, [t, s, a.clips])),
        [R, N] = l.useState(null),
        T = S.find((e) => e.key === R) ?? S[0],
        w = (0, tr.sw)(),
        { trackUserProfileAction: L, trackUserProfileEditAction: P } = (0, eQ.NJ)(),
        _ = d && !0 !== c,
        O = 0 === S.length,
        D = S.length >= 4,
        G = _ && w && !D,
        M = _ || S.length > 1,
        [U] = l.useState(() => y.length >= 3),
        [V, K] = l.useState(!1),
        z = tg(a.type),
        X = G && !z && U && !V && y.length > 0,
        Y = l.useCallback(() => {
            (K(!0), P({ action: "DISMISS_SUGGESTED_CLIPS", widgetEdited: k.x.CLIPS_GALLERY }));
        }, [P]),
        q = l.useCallback(
            (e) => {
                (N(e), e !== T?.key && L({ action: "SELECT_CLIP", widgetType: k.x.CLIPS_GALLERY }));
            },
            [T?.key, L],
        ),
        J = l.useMemo(() => (!0 === c ? [] : S.filter(ni.K)), [S, c]),
        Z = null != T ? J.findIndex((e) => e.key === T.key) : -1,
        Q = l.useCallback(() => {
            Z < 0 ||
                (L({ action: "PRESS_PLAY_CLIP", widgetType: k.x.CLIPS_GALLERY }),
                (0, nn.A)({ clips: J, startingIndex: Z }));
        }, [J, Z, L]),
        $ = l.useCallback(() => {
            let e = !h;
            (p(e), L({ action: e ? "MUTE_CLIP_PREVIEW" : "UNMUTE_CLIP_PREVIEW", widgetType: k.x.CLIPS_GALLERY }));
        }, [h, L]),
        ee = l.useCallback(() => {
            if (Z < 0) return;
            let e = J[(Z + 1) % J.length];
            null != e && N(e.key);
        }, [J, Z]),
        et = Z >= 0 && !I && f,
        en = (et || g) && !A && !v,
        ei = l.useCallback(() => {
            Z < 0 ||
                et ||
                (b.current = window.setTimeout(() => {
                    (m(!0), L({ action: "HOVER_PLAY_CLIP", widgetType: k.x.CLIPS_GALLERY }));
                }, 150));
        }, [et, Z, L]),
        el = l.useCallback(() => {
            (window.clearTimeout(b.current), m(!1));
        }, []);
    (l.useEffect(() => () => window.clearTimeout(b.current), []),
        l.useEffect(() => {
            (0, to.v)();
        }, []));
    let es = l.useCallback(
            (e, t) => {
                let n = (function (e, t) {
                    if (null == e.applicationId)
                        return ((0, ep.P)((0, eI.o)(B.intl.string(B.t.xcLXWy), eE.Ck.FAILURE)), null);
                    let n = (0, tp.m)();
                    if (
                        !(0, F.$C)({
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
                    return ((0, tI.yf)(n, i), tj(e, n, e.applicationId, i, t), n);
                })(e, { analyticsLocations: [ta.A.USER_PROFILE_MODAL_V2], source: t, trackEditAction: P });
                null != n && N(n);
            },
            [P],
        ),
        ea = l.useCallback((e) => es(e, e5.IE.SUGGESTED), [es]),
        er = l.useCallback(() => {
            (P({ action: "PRESS_ADD_CLIP", widgetEdited: k.x.CLIPS_GALLERY }),
                (0, eA.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("459368"),
                            n.e("821717"),
                            n.e("269714"),
                            n.e("19385"),
                            n.e("718955"),
                            n.e("94954"),
                            n.e("571247"),
                            n.e("498167"),
                            n.e("553829"),
                            n.e("895840"),
                            n.e("865257"),
                            n.e("287946"),
                            n.e("323079"),
                            n.e("437655"),
                            n.e("430877"),
                            n.e("48055"),
                            n.e("914553"),
                            n.e("586467"),
                            n.e("875842"),
                            n.e("858337"),
                            n.e("324761"),
                            n.e("203930"),
                            n.e("903663"),
                            n.e("496268"),
                            n.e("918024"),
                            n.e("466147"),
                            n.e("507406"),
                            n.e("838090"),
                            n.e("501962"),
                            n.e("901922"),
                            n.e("583518"),
                            n.e("237715"),
                            n.e("974049"),
                            n.e("280559"),
                            n.e("895008"),
                            n.e("352566"),
                            n.e("793784"),
                            n.e("689160"),
                            n.e("231782"),
                            n.e("565977"),
                            n.e("520342"),
                            n.e("432262"),
                            n.e("717278"),
                        ]).then(n.bind(n, 25682));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                initialMainLink: td.oH.ALL_CLIPS,
                                picker: {
                                    onPick: (e) => {
                                        (((e) => es(e, e5.IE.PICKER))(e), t.onClose());
                                    },
                                    action: td.qh.UPLOAD,
                                    filterClip: nt,
                                    allowMultiSelect: !1,
                                },
                            });
                    },
                    { modalKey: tE.nm },
                ));
        }, [es, P]);
    return (0, i.jsx)(W.A, {
        userId: o.id,
        widget: a,
        allowEditing: d,
        disableInteraction: c,
        headerTitle: (0, F.L)(a),
        headerSubtitle: _ && !O ? B.intl.format(B.t.pb2Was, { numClips: 4 }) : void 0,
        headerActionButtons: G && O ? [(0, i.jsx)(nr, { onClick: er }, "clips-gallery-add-clip")] : void 0,
        trailingContent:
            X &&
            (0, i.jsx)("div", {
                className: na.$k,
                children: (0, i.jsx)(t1, { clips: y, onAddClip: ea, onDismiss: Y }),
            }),
        ...u,
        children:
            null != T
                ? (0, i.jsxs)("div", {
                      className: na.nV,
                      children: [
                          (0, i.jsxs)("div", {
                              ref: E,
                              className: na.aM,
                              onMouseEnter: ei,
                              onMouseLeave: el,
                              children: [
                                  (0, i.jsx)(tC.A, {
                                      item: T,
                                      ringSize: "lg",
                                      isPlaying: en,
                                      isMuted: h,
                                      fit: "contain",
                                      onEnded: J.length > 1 ? ee : void 0,
                                      className: na.VH,
                                  }),
                                  Z >= 0 &&
                                      !A &&
                                      !v &&
                                      (0, i.jsx)(H.D, {
                                          className: na.Hf,
                                          "aria-label": B.intl.string(B.t.CscLHM),
                                          onClick: Q,
                                      }),
                                  ("saved" === T.status || "pending" === T.status) &&
                                      (0, i.jsx)(ne, { gameId: T.gameId, userId: o.id, className: na.AT }),
                                  _ &&
                                      "uploading" === T.status &&
                                      (0, i.jsx)(tv, { widgetClipId: T.key, gameId: T.gameId, className: na.MY }),
                                  _
                                      ? ("saved" === T.status || "pending" === T.status) &&
                                        (0, i.jsx)("div", {
                                            className: na.nP,
                                            children: (0, i.jsx)(tF, { widgetClipId: T.key, gameId: T.gameId }),
                                        })
                                      : Z >= 0 &&
                                        (0, i.jsx)("div", {
                                            className: na.nP,
                                            children: (0, i.jsx)(tX, { isMuted: h, onToggleMuted: $, onFullscreen: Q }),
                                        }),
                                  (0, i.jsx)(tY.A, {
                                      children:
                                          ("saved" === T.status || "pending" === T.status) &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(tD, {
                                                      clipId: T.key,
                                                      title: T.title,
                                                      allowEditing: _,
                                                      onEditingChange: j,
                                                  }),
                                                  (0, i.jsx)(tT, {
                                                      clipId: T.key,
                                                      tags: T.tags,
                                                      allowEditing: d,
                                                      disableInteraction: c,
                                                      onEditingChange: C,
                                                  }),
                                              ],
                                          }),
                                  }),
                              ],
                          }),
                          M &&
                              (0, i.jsx)(tB, {
                                  items: S,
                                  selectedKey: T.key,
                                  onSelect: q,
                                  onAddClip: G ? er : void 0,
                                  allowEditing: _,
                              }),
                      ],
                  })
                : (0, i.jsx)(no, {}),
    });
}
var nc = n(704824),
    nu = n(382483),
    ng = n(385113),
    nm = n(334074),
    nf = n(657718),
    nx = n(478016);
function nh(e) {
    let { user: t, application: n, onDismiss: s } = e,
        { trackUserProfileEditAction: a } = (0, eQ.NJ)(),
        r = l.useMemo(() => new x.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != r &&
                ((0, F.Y5)(r),
                a({ action: "WIDGET_ADDED", ...r.getProfileEditAnalyticsOptions() }),
                (0, e0.XA)(e5.jM.WIDGET_ADDED));
        }, [r, a]);
    return (0, i.jsx)(P.A, {
        user: t,
        widget: r,
        allowEditing: !1,
        subtle: !0,
        cta: (0, i.jsx)(P.A.Cta, {
            showSuggestedForYou: !0,
            heading: B.intl.format(B.t.OIzLCy, { applicationName: n.name }),
            content: B.intl.format(B.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(q.m, {
                        text: B.intl.string(B.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(nf.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tf.P,
                            "aria-label": B.intl.string(B.t.WAI6xu),
                            onClick: () => {
                                s(e2.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(q.m, {
                        text: B.intl.string(B.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(nf.S, {
                            variant: "primary",
                            size: "sm",
                            icon: nx.U,
                            "aria-label": B.intl.formatToPlainString(B.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                (s(e2.i.TAKE_ACTION), o());
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function np() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: s,
    } = (function () {
        let e = (0, r.yK)([ng.A], () => ng.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, nu.Wq)();
        }, []);
        let t = (0, r.bG)([M.default], () => M.default.getCurrentUser()),
            n = (0, c.A)(e),
            { tokens: i, fetched: s } = (0, nc.j)(e),
            a = (0, w.A)(t?.id),
            o = null == t || null == e || null == i || !s,
            d = l.useMemo(
                () =>
                    o
                        ? []
                        : n.filter(
                              (e) =>
                                  !(null == e || a.some((t) => t instanceof x.R && t.applicationId === e.id)) &&
                                  null != i.find((t) => t.application.id === e.id),
                          ),
                [o, n, i, a],
            ),
            { eligibleToShow: u, markAsDismissed: g } = (0, nm.hj)({
                applications: d,
                dismissibleContent: e1.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: nm.SH,
            }),
            m = l.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let a = n[0];
    return null == a ? null : (0, i.jsx)(nh, { user: t, application: a, onDismiss: (e) => s([a.id], e) }, a.id);
}
var nI = n(128988),
    nE = n(896170),
    nA = n(453318),
    nj = n(168017),
    nv = n(321108),
    nC = n(106191),
    nb = n(404277),
    nk = n(383329),
    nS = n(67710);
function ny(e) {
    let { renderGameListItem: t } = e,
        { extraChromeEnabled: n } = nj.A.useConfig({ location: "browse_games_popout" });
    return (0, i.jsx)(nA.X2, { maxVisibleItems: 7, renderListItem: n ? t : void 0 });
}
function nR(e) {
    let { widgetType: t, widget: n, onAddGame: s, children: a, ...r } = e,
        o = l.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: c } = (0, eQ.NJ)(),
        [u, g] = l.useState(""),
        m = l.useRef(""),
        { options: f, matchSorterOptions: x, metadataByGameId: h } = (0, nk.R)({ query: u }),
        p = u.trim().length > 0,
        { gameIds: I, onAddGame: E } = N(t),
        A = (0, nv.A)(I),
        j = l.useCallback(
            (e) => {
                ((0, F.ew)({ widgetType: t, game: { gameId: e } }),
                    tm.O.announce(B.intl.string(B.t.q0U3DE)),
                    c({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    I.includes(e) && E(e),
                    s?.());
            },
            [t, c, s, I, E],
        ),
        v = l.useMemo(() => {
            let e = new Map(
                f.map((e) => [
                    String(e.value),
                    { id: String(e.value), value: String(e.value), label: e.label, disabled: o.has(e.value) },
                ]),
            );
            if (p) return [...e.values()];
            let t = A.filter((e) => !o.has(e.id) && (0, F.XX)(e)).map((e) => ({
                    id: String(e.id),
                    value: String(e.id),
                    label: e.name,
                    disabled: !1,
                })),
                n = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !n.has(e.id))];
        }, [f, o, A, p]),
        C = l.useMemo(() => {
            let e = new Map(h);
            for (let t of A) e.set(t.id, { icon: t.media?.icon, platformAvailability: t.platformAvailability });
            return e;
        }, [h, A]),
        b = l.useCallback(
            (e) => {
                let t = e.value,
                    n = null != t ? C.get(t) : void 0;
                return (0, i.jsxs)("div", {
                    className: nS.mN,
                    children: [
                        null != t && (0, i.jsx)(nC.A, { game: { id: t, icon: n?.icon }, iconClassName: nS.DG }),
                        (0, i.jsx)(d.E, {
                            variant: "text-md/medium",
                            color: "currentColor",
                            lineClamp: 1,
                            className: nS.EF,
                            children: e.label,
                        }),
                        (0, i.jsx)(nb.A, { platforms: n?.platformAvailability }),
                    ],
                });
            },
            [C],
        ),
        k = l.useCallback((e) => e, []),
        S = l.useMemo(() => ({ ...x, threshold: nE.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        y = l.useCallback((e) => (p || "" === e.trim() ? v.length : (0, nE.Ht)(v, e, S).length), [p, v, S]),
        R = l.useCallback(
            (e) => {
                let n = e.target.value;
                ("" === u.trim() &&
                    "" !== n.trim() &&
                    c({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: y(n),
                    }),
                    g(n),
                    (m.current = n));
            },
            [u, c, t, y],
        );
    return (0, i.jsx)(eu.Y, {
        ...r,
        onRequestOpen: () => {
            (c({ action: "PRESS_ADD_GAME", widgetEdited: t }), g(""), (m.current = ""));
        },
        onRequestClose: () => {
            c({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: m.current.trim().length,
                numResults: y(m.current),
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(tb.l, {
                className: nS.C2,
                "aria-label": B.intl.string(B.t.uqw8wK),
                children: (0, i.jsxs)(nA.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: v,
                    matchSorterOptions: S,
                    customMatchSorter: p ? k : void 0,
                    children: [
                        (0, i.jsx)(nA.a3, {
                            label: B.intl.string(B.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: B.intl.string(B.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: R,
                        }),
                        (0, i.jsx)(ny, { renderGameListItem: b }),
                    ],
                }),
            });
        },
        children: (e) => a(e),
    });
}
function nN(e) {
    let { disabled: t, ...n } = e,
        s = l.useRef(null);
    return (0, i.jsx)(nR, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...n,
        children: (e) =>
            (0, i.jsx)(q.m, {
                text: B.intl.string(B.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, i.jsx)(ti.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: tl.T,
                    "aria-label": B.intl.string(B.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function nT(e) {
    let t = l.useRef(null);
    return (0, i.jsx)(nR, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, i.jsx)(H.D, {
                innerRef: t,
                className: nS.cV,
                "aria-label": B.intl.string(B.t.PYyENc),
                ...e,
                children: (0, i.jsx)(tG.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let nw = l.createContext(null);
function nL(e) {
    let { widgetType: t, children: n } = e,
        s = (0, r.bG)([v.A], () => {
            let e = v.A.getPendingWidgets();
            if (null == e) return !1;
            let n = e.find((e) => e.type === t);
            if (null == n) return !1;
            let i = (0, F.cv)(t);
            return n.games.length > i;
        }),
        [a, o] = l.useState(s);
    return (0, i.jsx)(nw.Provider, { value: { expanded: a, setExpanded: o }, children: n });
}
function nP() {
    let e = l.useContext(nw);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var n_ = n(67438);
function nO(e) {
    let { widget: t } = e,
        n = (0, F.cv)(t.type),
        l = 1 === n,
        s = l ? B.intl.string(B.t["3FdPBT"]) : B.intl.format(B.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? n_.O : n_.k,
        children: [
            l && (0, i.jsx)(nT, { widget: t, widgetType: t.type }),
            (0, i.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var nD = n(683071),
    nG = n(312252);
function nM(e) {
    let { widgetType: t, gameCount: n } = e,
        l = (0, F.cv)(t);
    return n <= l
        ? null
        : (0, i.jsx)("div", {
              role: "alert",
              className: nG.l,
              children: (0, i.jsx)(nD.w, {
                  type: "warning",
                  children: B.intl.formatToPlainString(B.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var nU = n(943793),
    nF = n(148420);
function nW(e) {
    let { games: t, user: n, widgetType: l, ...s } = e,
        { registerItemRef: a, manageFocusOnDelete: r } = (0, tU.r)();
    return (0, i.jsx)("ul", {
        className: nF.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(nU.A, {
                        index: t,
                        user: n,
                        game: e,
                        widgetType: l,
                        coverRef: a(e.gameId),
                        onRemoveGame: r,
                        ...s,
                    }),
                },
                e.gameId,
            ),
        ),
    });
}
function nH(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: a } = (0, tt.r)(),
        r = a(t),
        { expanded: o, setExpanded: d } = nP(),
        c = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nW, { ...e, games: c }),
                u && (0, i.jsx)(K, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(nM, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tU.B, { emptyListFallbackRef: r, children: g }),
              ],
          })
        : g;
}
function nB(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: a, disableInteraction: r, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: a,
        disableInteraction: r,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nH, {
                      user: t,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: a,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(nO, { widget: n }),
    });
}
function nV(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: a, disableInteraction: r, ...o } = e,
        d = n.games[0];
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: a,
        disableInteraction: r,
        ...o,
        children:
            null != d
                ? (0, i.jsx)(nU.A, {
                      user: t,
                      widgetType: n.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: a,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(nO, { widget: n }),
    });
}
var nK = n(793693);
function nz(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: nK.V,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var nX = n(675816),
    nY = n(201438),
    nq = n(788593),
    nJ = n(858808),
    nZ = n(365611),
    nQ = n(900850);
function n$(e) {
    let { index: t, widgetType: n, game: s, coverImageUrl: a, gameName: r, children: o } = e,
        { manageFocusOnReorder: d } = (0, tU.r)(),
        c = l.useRef(null);
    return (0, i.jsx)(tM.mG, {
        index: t,
        itemId: s.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: a, gameName: r, getWidth: () => c.current?.offsetWidth },
        "aria-label": B.intl.formatToPlainString(B.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, F.Un)(n, e, t),
        onEnd: () => d(s.gameId),
        className: nQ.kL,
        dropBeforeClassName: nQ.A,
        dropAfterClassName: nQ.Ze,
        draggingClassName: nQ.Id,
        children: (0, i.jsx)("div", { ref: c, className: nQ.An, children: o }),
    });
}
function n0(e) {
    let {
            game: t,
            userId: n,
            widgetType: l,
            allowEditing: s,
            disableInteraction: a = !1,
            index: r,
            onRemoveGame: o,
            coverRef: d,
        } = e,
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, nY.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tU.r)(),
        f = s && !a,
        { isDragging: x } = (0, nX.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nq.A, {
                    imageSrc: c,
                    gameName: u,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: a,
                    className: null == c || a ? void 0 : nZ.iL,
                    hideTooltip: x,
                    coverRef: d,
                }),
                f && (0, i.jsx)(tM.jV, { buttonRef: m(t.gameId), className: nQ.BU }),
                f && (0, i.jsx)(nJ.A, { game: t, widgetType: l, className: nQ.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, i.jsx)("div", { className: nZ.mD })
        : f
          ? (0, i.jsx)(n$, { widgetType: l, index: r ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, i.jsx)("div", { className: nQ.kL, children: h() });
}
function n1(e) {
    let { games: t, userId: n, widgetType: l, allowEditing: s, disableInteraction: a } = e,
        { registerItemRef: r, manageFocusOnDelete: o } = (0, tU.r)();
    return (0, i.jsx)(nz, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(n0, {
                index: t,
                game: e,
                userId: n,
                widgetType: l,
                allowEditing: s,
                disableInteraction: a,
                coverRef: r(e.gameId),
                onRemoveGame: o,
            }),
    });
}
function n8(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: a } = (0, tt.r)(),
        r = a(t),
        { expanded: o, setExpanded: d } = nP(),
        c = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(n1, { ...e, games: c }),
                u && (0, i.jsx)(K, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(nM, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tU.B, { emptyListFallbackRef: r, children: g }),
              ],
          })
        : g;
}
function n7(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: a, disableInteraction: r, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: a,
        disableInteraction: r,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(n8, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: a,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(nO, { widget: n }),
    });
}
function n5(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: a, disableInteraction: r, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: a,
        disableInteraction: r,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(n8, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: a,
                      disableInteraction: r,
                  })
                : (0, i.jsx)(nO, { widget: n }),
    });
}
var n2 = n(875620);
function n3(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: s, gameName: a, isLoading: o } = (0, nY.A)(t),
        d = (0, r.bG)([v.A], () => v.A.suggestedFetchIsLoading),
        c = B.intl.formatToPlainString(B.t["3mb1s5"], { game: a });
    return o || d
        ? (0, i.jsx)("div", { className: nZ.mD })
        : (0, i.jsx)(q.m, {
              text: c,
              ariaHidden: !0,
              children: (0, i.jsxs)(H.D, {
                  className: n2.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, i.jsx)(nq.A, {
                          className: n2.Iv,
                          imageSrc: s,
                          gameName: a,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(tG.PlusLargeIcon, { size: "md", className: n2.Xv, color: eP.A.colors.WHITE }),
                  ],
              }),
          });
}
function n4(e) {
    let { userId: t, widgetType: n, ...s } = e,
        { games: a, onAddGame: r } = N(n),
        { setExpanded: o } = nP(),
        { trackUserProfileEditAction: d } = (0, eQ.NJ)(),
        c = l.useCallback(
            (e) => {
                (r(e),
                    o(!0),
                    (0, F.ew)({ widgetType: n, game: { gameId: e } }),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: n }));
            },
            [r, n, d, o],
        );
    return (0, i.jsx)(tQ, {
        ...s,
        children: (0, i.jsx)("ul", {
            className: n2.Vg,
            children: a.map((e) => {
                let { gameId: n } = e;
                return (0, i.jsx)("li", { children: (0, i.jsx)(n3, { onClick: () => c(n), userId: t, gameId: n }) }, n);
            }),
        }),
    });
}
var n6 = n(870961);
function n9(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case k.x.FAVORITE_GAMES:
            return (0, i.jsx)(nV, { widget: t, ...n });
        case k.x.CURRENT_GAMES:
            return (0, i.jsx)(nB, { widget: t, ...n });
        case k.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(n5, { widget: t, ...n });
        case k.x.PLAYED_GAMES:
            return (0, i.jsx)(n7, { widget: t, ...n });
        default:
            return null;
    }
}
function ie(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: a, ...r } = e,
        { setExpanded: o } = nP(),
        { shouldShowSuggestions: d, handleDismissSuggestions: c } = (function (e) {
            let [t, n] = l.useState(!1),
                i = tg(e.type),
                s = (0, F.uA)(e);
            return {
                shouldShowSuggestions: !i && !t && !s,
                handleDismissSuggestions: l.useCallback(() => {
                    n(!0);
                }, []),
            };
        })(t),
        u = s && !a,
        g = u && d,
        m = (0, F.L)(t),
        f = (0, F.FM)(t, { showEditingControls: u }),
        x = (0, F.uA)(t),
        h = 1 === (0, F.cv)(t.type);
    return (0, i.jsx)(n9, {
        widget: t,
        user: n,
        allowEditing: s,
        disableInteraction: a,
        headerTitle: m,
        headerSubtitle: f,
        headerActionButtons:
            u && !h
                ? [
                      (0, i.jsx)(
                          nN,
                          { disabled: x, widgetType: t.type, widget: t, onAddGame: () => o(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: g && (0, i.jsx)(n4, { userId: n.id, widgetType: t.type, onDismiss: c, className: n6.r }),
        ...r,
    });
}
function it(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(nL, { widgetType: t.type, children: (0, i.jsx)(ie, { widget: t, ...n }) });
}
var ii = n(669253),
    il = n(286409);
n(839272);
let is = (0, n(945810).mj)({
    name: "2026-09-profile-widget-empty-state-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1, maxWidgetOptions: 0 },
    variations: { 1: { enabled: !0, maxWidgetOptions: 4 }, 2: { enabled: !0, maxWidgetOptions: 6 } },
});
var ia = n(96173),
    ir = n(661439),
    io = n(90165),
    id = n(788259),
    ic = n(269507);
function iu(e) {
    let { widgets: t, trackUserProfileEditAction: n, personalWidgetOptionRef: l } = e;
    return (0, i.jsx)("ul", {
        className: ic.ZW,
        "aria-label": B.intl.string(B.t["+EIBSA"]),
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                {
                    ref: e.type === k.x.PERSONAL ? l : void 0,
                    children: (0, i.jsx)(id.A, { widget: e, size: "small", trackUserProfileEditAction: n }),
                },
                e.getUniqueKey(),
            ),
        ),
    });
}
function ig(e) {
    let { trackUserProfileEditAction: t, personalWidgetOptionRef: n } = e,
        l = (0, ia.A)();
    return (0, i.jsx)(iu, { widgets: l, personalWidgetOptionRef: n, trackUserProfileEditAction: t });
}
function im(e) {
    let {
            maxWidgetOptions: t,
            shouldPromotePersonalWidget: s,
            trackUserProfileEditAction: a,
            personalWidgetOptionRef: o,
        } = e,
        d = (0, ia.A)(),
        u = (function (e) {
            let t = (0, r.bG)([ng.A], () => ng.A.getFeaturedApplicationIds()),
                n = l.useMemo(() => {
                    let n = new Set(t);
                    return e
                        .filter((e) => e instanceof x.R)
                        .map((e) => e.applicationId)
                        .filter((e) => n.has(e));
                }, [t, e]),
                i = (0, c.A)(n),
                s = l.useMemo(() => n.map((e, t) => i[t]?.parentId ?? e), [n, i]),
                { tokens: a } = (0, nc.j)(s);
            l.useEffect(() => {
                (0, ir.X)();
            }, []);
            let o = l.useMemo(() => i.map((e) => e?.getCanonicalGameId() ?? null), [i]),
                d = (0, r.yK)([io.A], () => o.map((e) => (null != e ? io.A.getGameDuration(e) : 0))),
                u = (0, r.yK)([io.A], () => o.map((e) => (null != e ? io.A.getLastPlayedDateTime(e) : null)));
            return l.useMemo(() => {
                let e = new Set(a.map((e) => e.application.id)),
                    t = [];
                for (let i = 0; i < n.length; i++)
                    t.push({
                        applicationId: n[i],
                        isConnected: e.has(s[i]),
                        totalPlayDuration: d[i] ?? 0,
                        lastPlayedAt: u[i] ?? null,
                    });
                return t;
            }, [n, s, u, a, d]);
        })(d),
        g = (function (e) {
            let t,
                {
                    addableWidgets: n,
                    applicationAffinityData: i,
                    hasClips: l,
                    hasPremium: s,
                    maxWidgetOptions: a,
                    promotedWidgetTypes: r,
                } = e,
                o = [],
                d = new Set();
            function c(e) {
                d.has(e.getUniqueKey()) || (o.push(e), d.add(e.getUniqueKey()));
            }
            function u(e) {
                let t = n.find((t) => t.type === e);
                null != t && c(t);
            }
            function g(e) {
                let t = n.find((t) => (0, x.E)(t, e));
                null != t && c(t);
            }
            return (
                r.forEach(u),
                ((t = Date.now()),
                i
                    .filter((e) => {
                        let { isConnected: n, lastPlayedAt: i } = e;
                        return n || (null != i && t - i < 7776e6);
                    })
                    .toSorted((e, t) => {
                        if (e.isConnected !== t.isConnected) return e.isConnected ? -1 : 1;
                        let n = t.totalPlayDuration - e.totalPlayDuration;
                        return 0 !== n ? n : (t.lastPlayedAt ?? 0) - (e.lastPlayedAt ?? 0);
                    })
                    .slice(0, 2)
                    .map((e) => {
                        let { applicationId: t } = e;
                        return t;
                    })).forEach(g),
                l && u(k.x.CLIPS_GALLERY),
                s && u(k.x.PERSONAL),
                u(k.x.FAVORITE_GAMES),
                u(k.x.PLAYED_GAMES),
                g("1346069614634864772"),
                u(k.x.CURRENT_GAMES),
                u(k.x.WANT_TO_PLAY_GAMES),
                g("1323482066758930452"),
                o.slice(0, a)
            );
        })({
            addableWidgets: d,
            applicationAffinityData: u,
            hasClips: (0, r.bG)([nl.Ay], () => nl.Ay.hasClips()),
            hasPremium: (0, r.bG)([M.default], () =>
                U.Ay.isPremium(M.default.getCurrentUser(), eM.PremiumTypes.TIER_2),
            ),
            maxWidgetOptions: t,
            promotedWidgetTypes: s ? [k.x.PERSONAL] : [],
        }),
        m = l.useCallback(() => {
            (a({ action: "PRESS_ADD_WIDGET" }),
                (0, eA.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("376053"), n.e("487697"), n.e("56438")]).then(
                            n.bind(n, 709013),
                        );
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: a });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [a]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(iu, { widgets: g, personalWidgetOptionRef: o, trackUserProfileEditAction: a }),
            (0, i.jsx)(eY.$, { text: B.intl.string(B.t["/NKLK5"]), size: "sm", variant: "secondary", onClick: m }),
        ],
    });
}
function ix(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: s } = (0, eQ.NJ)(),
        a = l.useRef(!1),
        o = l.useRef(null),
        c = (0, r.bG)([tu.A], () => tu.A.getUserProfile(t)?.fetchError != null, [t]),
        [u, g] = e3(!c),
        m = u || (0, I.t0)(),
        { enabled: f, maxWidgetOptions: x } = (function (e) {
            let { location: t } = e;
            return is.useConfig({ location: t });
        })({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        l.useEffect(() => {
            a.current || c || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (a.current = !0));
        }, [c, n]),
        (0, i.jsxs)("div", {
            className: ic.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: ic.FS,
                    children: [
                        (0, i.jsx)(tq.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: B.intl.string(B.t["oqalC+"]),
                        }),
                        (0, i.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: c ? B.intl.string(B.t["+W59o5"]) : B.intl.string(B.t.O9SQ1c),
                        }),
                    ],
                }),
                !c &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            f
                                ? (0, i.jsx)(im, {
                                      maxWidgetOptions: x,
                                      personalWidgetOptionRef: o,
                                      shouldPromotePersonalWidget: m,
                                      trackUserProfileEditAction: s,
                                  })
                                : (0, i.jsx)(ig, { personalWidgetOptionRef: o, trackUserProfileEditAction: s }),
                            (0, i.jsx)(e4, { targetElementRef: o, isVisible: u, markAsDismissed: g }),
                        ],
                    }),
            ],
        })
    );
}
var ih = n(366209);
function ip(e) {
    let { widget: t, ...n } = e;
    return t instanceof x.R
        ? (0, i.jsx)(P.A, { widget: t, ...n })
        : t instanceof I.Tu
          ? (0, i.jsx)(ez, { widget: t, ...n })
          : (0, p.fu)(t)
            ? (0, i.jsx)(it, { widget: t, ...n })
            : t instanceof h.kM
              ? (0, i.jsx)(nd, { widget: t, ...n })
              : null;
}
function iI() {
    return (0, i.jsxs)("div", {
        className: ih.mJ,
        children: [
            (0, i.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(d.E, { variant: "text-xs/normal", color: "text-muted", children: B.intl.string(B.t["7blcz6"]) }),
        ],
    });
}
function iE(e) {
    let { user: t, guildId: n, channelId: s } = e,
        a = (0, w.A)(t.id),
        o = (0, L.A)(t.id),
        d = (function () {
            let [e, t] = (0, r.yK)([f.A], () => [f.A.ipCountryCode, f.A.ipCountryCodeRequest]),
                n = (0, g.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, u.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        h = 0 === a.length && o,
        I = l.useMemo(() => a.filter(p.fu), [a]),
        E = l.useMemo(() => a.filter((e) => e instanceof x.R), [a]);
    function A() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(te, { className: ih.cG }), d && (0, i.jsx)(iI, {}), (0, i.jsx)(np, {})],
                    }),
                a.map((e, l) =>
                    (0, i.jsx)(
                        ip,
                        { widget: e, user: t, guildId: n, channelId: s, allowEditing: o, index: l },
                        e.getUniqueKey(),
                    ),
                ),
            ],
        });
    }
    return (!(function (e, t) {
        let [n, i, s, a] = (0, r.yK)([v.A], () => [
                v.A.suggestedFetchAttempted,
                v.A.suggestedFetchError,
                v.A.suggestedGameIds,
                v.A.suggestedFetchIsLoading,
            ]),
            { onLoad: o } = R();
        l.useEffect(() => {
            !n && e && j.A.fetchSuggestedGames();
        }, [n, e]);
        let d = n && !a;
        l.useEffect(() => {
            if (!d) return;
            let e = t.map((e) => e.games).flat();
            i || o(s.suggestedGamesIds ?? [], s.suggestedWishlistGamesIds ?? [], e);
        }, [d]);
    })(o, I),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, c.A)(n);
        let { data: i, refetch: s } = (0, m.P)(e),
            a = l.useRef(null !== i);
        l.useEffect(() => {
            a.current && ((a.current = !1), s());
        }, [s]);
    })(t.id, E),
    h)
        ? (0, i.jsx)(ix, { userId: t.id })
        : o
          ? (0, i.jsx)(tt.D, { children: A() })
          : A();
}
function iA(e) {
    let { user: t, ...n } = e,
        s = l.useRef(null);
    (0, T.i)({ containerRef: s });
    let r = (0, ii.k)(t.id);
    return (0, i.jsxs)(il.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: a()(ih.XG, { [ih.az]: r }),
        fade: !0,
        children: [(0, i.jsx)(nI.A, { scrollerRef: s }), (0, i.jsx)(iE, { user: t, ...n })],
    });
}
