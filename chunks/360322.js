i.d(t, { A: () => ng, u: () => nd });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    a = i.n(s),
    r = i(17928),
    o = i(885574),
    d = i(834730),
    c = i(429913),
    u = i(277984),
    g = i(840387),
    m = i(201718),
    x = i(615405),
    f = i(633075),
    h = i(646976),
    I = i(289173),
    p = i(210598),
    A = i(311043),
    j = i(569926),
    E = i(958805),
    v = i(61881),
    C = i(435558),
    S = i(196765),
    b = i(540185),
    k = i(282435);
let T = (0, C.sampleSize)(k.sx, k.sx.length),
    y = (0, S.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (i, n, l) => {
            let s = new Set(l.map((e) => e.gameId));
            for (let l of (e({
                stack: [...i.filter((e) => !s.has(e)), ...T],
                wishlistStack: [...n.filter((e) => !s.has(e)), ...T],
            }),
            Object.values(b.x)))
                t().setNext(6, l);
        },
        setNext: (e, i) => {
            let n = t().getNext(e, i);
            t()._setGameIds(i, n);
            let l = t().peekNext(7, i);
            t()._setPeekedGameIds(i, l);
        },
        getNext: (e, i) => {
            let n = i === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                l = n.slice(0, e),
                s = n.slice(e);
            return (t()._setStack(i, s), l);
        },
        peekNext: (e, i) => (i === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, i) => {
            let n = t().gameIds[i] ?? [],
                l = n.indexOf(e);
            if (-1 === l) return;
            let s = [...n];
            s.splice(l, 1);
            let a = t().getNext(1, i),
                r = t().peekNext(7, i);
            (t()._setGameIds(i, [...s, ...a]), t()._setPeekedGameIds(i, [...r, ...a]));
        },
        bumpMultiple: (e, i) => {
            let n = (t().gameIds[i] ?? []).filter((t) => !e.includes(t)),
                l = t().getNext(6 - n.length, i),
                s = t().peekNext(7, i);
            (t()._setGameIds(i, [...n, ...l]), t()._setPeekedGameIds(i, [...s, ...l]));
        },
        remove: (e, i) => {
            let n = (i === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            (t()._setStack(i, n), t()._setPeekedGameIds(i, t().peekNext(7, i)));
        },
        _setGameIds: (t, i) => {
            e((e) => ({ gameIds: { ...e.gameIds, [t]: i } }));
        },
        _setStack: (t, i) => {
            t === b.x.WANT_TO_PLAY_GAMES ? e({ wishlistStack: i }) : e({ stack: i });
        },
        _setPeekedGameIds: (t, i) => {
            e((e) => ({ peekedGameIds: { ...e.peekedGameIds, [t]: i } }));
        },
    }));
function N(e) {
    let { bump: t, bumpMultiple: i, gameIds: n } = y();
    !(function (e) {
        let { remove: t, peekedGameIds: i } = y(),
            n = l.useMemo(() => i[e] ?? [], [i, e]);
        (0, j.x)(n);
        let s = (0, r.yK)([A.A], () => n.map((e) => A.A.isFetching(e)));
        l.useEffect(() => {
            for (let i of n) {
                let n = A.A.didFetchingFail(i),
                    l = A.A.hasNoData(i),
                    s = !!A.A.getGame(i),
                    a = null != A.A.getCoverImageUrl(i);
                (n || l || (s && !a)) && t(i, e);
            }
        }, [n, t, e, s]);
    })(e);
    let s = l.useMemo(() => n[e] ?? [], [n, e]),
        a = l.useCallback(
            (i) => {
                t(i, e);
            },
            [t, e],
        ),
        o = (0, r.yK)([A.A], () => s.map((e) => A.A.isFetching(e)));
    l.useEffect(() => {
        let t = s.filter((e) => {
            let t = A.A.didFetchingFail(e),
                i = A.A.hasNoData(e),
                n = !!A.A.getGame(e),
                l = null != A.A.getCoverImageUrl(e);
            return t || i || (n && !l);
        });
        t.length > 0 && i(t, e);
    }, [s, e, i, o]);
    let d = l.useMemo(() => s.map((e) => ({ gameId: e })), [s]);
    return { gameIds: s, games: d, onAddGame: a };
}
var R = i(600761),
    w = i(667049),
    L = i(389667),
    _ = i(479299),
    P = i(869484),
    O = i(315629),
    D = i(465794),
    G = i(450232),
    M = i(287809),
    U = i(158045),
    F = i(735321),
    W = i(644346),
    H = i(939249),
    V = i(375708),
    B = i(954165);
function Y(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(H.D, {
        onClick: t,
        className: B.x,
        "aria-expanded": i,
        children: (0, n.jsx)(d.E, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? V.intl.string(V.t["6MwJo/"]) : V.intl.string(V.t.lBeKY2),
        }),
    });
}
var z = i(43990),
    X = i(241326),
    K = i(33969),
    q = i(866665),
    Z = i(245604),
    J = i(601089);
function Q(e) {
    let { label: t, onClick: i, className: l } = e;
    return (0, n.jsx)(q.m, {
        text: t,
        children: (0, n.jsxs)(H.D, {
            className: a()(J.kL, l),
            "aria-label": t,
            onClick: i,
            children: [
                (0, n.jsx)("div", { className: J.n8 }),
                (0, n.jsx)("div", { className: J.zc, children: (0, n.jsx)(Z.U, { size: "sm" }) }),
                (0, n.jsx)("div", { className: J.n8 }),
            ],
        }),
    });
}
var $ = i(236408),
    ee = i(448766),
    et = i(770178);
let ei = l.createContext({
    isAnyFieldClipped: !1,
    isExpanded: !1,
    setAnyFieldClipped: () => {},
    setIsExpanded: () => {},
});
function en(e) {
    let { children: t } = e,
        [i, s] = l.useState(!1),
        [a, r] = l.useState(!1),
        [o] = l.useState(() => new Set()),
        d = l.useCallback(
            (e, t) => {
                (t ? o.add(e) : o.delete(e), r(o.size > 0));
            },
            [o],
        ),
        c = l.useMemo(
            () => ({ isExpanded: i, setIsExpanded: s, isAnyFieldClipped: a, setAnyFieldClipped: d }),
            [i, a, d],
        );
    return (0, n.jsx)(ei.Provider, { value: c, children: t });
}
function el() {
    return l.useContext(ei);
}
var es = i(404760),
    ea = i(892572);
function er(e) {
    let { className: t, variant: i, color: s, value: r, maxLines: o, interactive: c = !0, disableMarkdown: u = !1 } = e,
        g = c ? ee.d : ee.j,
        { textRef: m, lineClamp: x } = (function (e, t) {
            let { isExpanded: i, setAnyFieldClipped: n } = l.useContext(ei),
                s = l.useId(),
                a = l.useRef(null),
                r = l.useCallback(() => {
                    let e = a.current;
                    null != e && n(s, e.scrollWidth - e.clientWidth > 1 || e.scrollHeight - e.clientHeight > 1);
                }, [s, n]);
            return (
                (0, et.g)(a, r, [i, t], { fireOnMount: !0, fireOnDepsChange: !0 }),
                l.useEffect(() => () => n(s, !1), [s, n]),
                { textRef: a, lineClamp: i ? void 0 : e }
            );
        })(o, r);
    return (0, n.jsx)(d.E, {
        ref: m,
        className: a()(ea.YD, { [ea.Lq]: o > 1 }, t),
        variant: i,
        color: s,
        lineClamp: x,
        children: u ? r : g(r),
    });
}
function eo(e) {
    let {
            value: t,
            placeholder: i,
            variant: s,
            color: r,
            onCommit: o,
            maxLength: d,
            maxLines: c,
            growWidth: u,
            disableMarkdown: g,
        } = e,
        m = l.useCallback((e) => o(e.trim()), [o]),
        { isExpanded: x } = el(),
        f =
            "" === t.trim()
                ? null
                : (0, n.jsx)(er, { interactive: !1, variant: s, color: r, value: t, maxLines: c, disableMarkdown: g });
    return (0, n.jsx)("div", {
        className: a()(es.kL, ea.ZZ, { [es.oE]: 1 === c, [es.CP]: u }),
        children: (0, n.jsx)($.A, {
            value: t,
            onCommit: m,
            autoComplete: "off",
            defaultDirty: !0,
            hideLabel: !0,
            multiline: 1 !== c,
            paddingBlock: "md",
            paddingInline: 1 === c ? "sm" : "md",
            preview: f,
            placeholder: i,
            label: i,
            maxLength: d,
            maxRows: 1 === c || x ? void 0 : c,
            textVariant: s,
            scrollIntoViewOnFocus: !0,
        }),
    });
}
function ed(e) {
    return e.canEdit
        ? (0, n.jsx)(eo, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, n.jsx)(er, {
                variant: e.variant,
                color: e.color,
                value: e.value,
                maxLines: e.maxLines,
                disableMarkdown: e.disableMarkdown,
            });
}
var ec = i(326009),
    eu = i(922016),
    eg = i(22231),
    em = i(750943),
    ex = i(458499);
function ef(e) {
    let { lastEdit: t, buttonRef: i, disabled: l, cropAndUpload: s, onChangeImage: a } = e;
    return (0, n.jsx)(eu.Y, {
        targetElementRef: i,
        align: "right",
        position: "bottom",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: i } = e;
            return (0, n.jsx)(ex.A, { lastEdit: t, cropAndUpload: s, onChangeImage: a, onClose: i });
        },
        children: (e) =>
            (0, n.jsx)(K.Y, {
                ...e,
                ref: i,
                icon: eg.PencilIcon,
                variant: "overlay-secondary",
                tooltipText: V.intl.string(V.t.RWkUzH),
                "aria-haspopup": "menu",
                disabled: l,
            }),
    });
}
function eh(e) {
    let { lastEdit: t, buttonRef: i, disabled: l, cropAndUpload: s, onChangeImage: a } = e;
    return null == t
        ? (0, n.jsx)(K.Y, {
              ref: i,
              icon: em.X,
              variant: "overlay-secondary",
              tooltipText: V.intl.string(V.t.dh0LD5),
              disabled: l,
              onClick: a,
          })
        : (0, n.jsx)(ef, { lastEdit: t, buttonRef: i, disabled: l, cropAndUpload: s, onChangeImage: a });
}
var eI = i(691540),
    ep = i(857250),
    eA = i(97483),
    ej = i(192308),
    eE = i(765548),
    ev = i(860840),
    eC = i(229531),
    eS = i(515718),
    eb = i(741394),
    ek = i(38405);
function eT(e) {
    let { uploadType: t, returnRef: s, getCropAspectRatio: a, onUploadSuccess: r } = e,
        o = l.useRef(0),
        [d, c] = l.useState(null),
        [u, g] = l.useState(null),
        m = (0, eE.A)(r),
        x = l.useCallback(() => {
            ((o.current = o.current + 1), c(null), g(null));
        }, []),
        f = l.useCallback(
            async (e, t, i, n) => {
                o.current = o.current + 1;
                let l = o.current;
                c(e);
                try {
                    let [s, a] = await Promise.all([
                        E.A.uploadWidgetAsset(t),
                        ev.default.fromBlob(i).catch(() => void 0),
                    ]);
                    if (o.current !== l) return;
                    (c(null),
                        g({ filename: s, unprocessedFile: i, transform: n }),
                        m({ filename: s, localDataUri: e, originalHash: a }));
                } catch (e) {
                    if (o.current !== l) return;
                    (c(null),
                        (0, eI.P0)((0, ep.o)(V.intl.string(V.t.F4Neqh), eA.Ck.FAILURE)),
                        ek.A.captureException(e));
                }
            },
            [m],
        ),
        h = l.useCallback(
            (e) => {
                var t, i;
                let n,
                    l,
                    { imageUri: s, file: a, transform: r } = e,
                    o = (0, eS.aU)(s);
                o.size > 0xa00000
                    ? (0, eI.P0)((0, ep.o)(V.intl.string(V.t.YbdEFK), eA.Ck.FAILURE))
                    : f(
                          s,
                          new File(
                              [o],
                              ((t = a.name),
                              (i = o.type),
                              (n = (0, eC.B)(i) ?? "png"),
                              (l = (0, eb.kh)(t)),
                              `${"" !== l ? l : "image"}.${n}`),
                              { type: o.type },
                          ),
                          a,
                          r,
                      );
            },
            [f],
        );
    return {
        cropAndUpload: l.useCallback(
            (e, l, r) => {
                let o = a?.();
                (0, ej.openModalLazy)(
                    async () => {
                        let { default: a } = await Promise.all([
                            i.e("398791"),
                            i.e("655327"),
                            i.e("67702"),
                            i.e("1214"),
                            i.e("858164"),
                            i.e("427032"),
                            i.e("571470"),
                            i.e("50342"),
                            i.e("507406"),
                            i.e("463726"),
                            i.e("93513"),
                            i.e("779149"),
                            i.e("455524"),
                            i.e("90017"),
                            i.e("489908"),
                            i.e("574571"),
                            i.e("750348"),
                        ]).then(i.bind(i, 142630));
                        return (i) =>
                            (0, n.jsx)(a, {
                                ...i,
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
        cancelUpload: x,
        getLastEdit: l.useCallback(
            (e) => (null != u && null != e && "filename" in e && e.filename === u.filename ? u : null),
            [u],
        ),
    };
}
var ey = i(652215),
    eN = i(339984),
    eR = i(148548);
function ew() {
    return (0, n.jsx)(Q, {
        label: V.intl.string(V.t.gQmDk4),
        onClick: function () {
            (0, F.AD)((e) => new p.Tu({ ...e, sections: [(0, p.K)(), ...e.sections] }));
        },
        className: eR.GU,
    });
}
function eL(e) {
    let { userId: t, section: i, sectionIndex: s, canEdit: r } = e,
        o = l.useRef(null),
        d = l.useRef(null),
        c = l.useRef(null);
    function u(e) {
        (0, F.AD)((t) => {
            let i = t.sections[s];
            if (i?.type !== P.K.COVER) return t;
            let n = [...t.sections];
            return ((n[s] = e(i)), new p.Tu({ ...t, sections: n }));
        });
    }
    function g(e) {
        u((t) => ({ ...t, title: e }));
    }
    function m(e) {
        u((t) => ({ ...t, subtitle: e }));
    }
    let x = l.useCallback(() => {
            let e = c.current?.getBoundingClientRect();
            return null != e && e.width > 0 && e.height > 0 ? e.width / e.height : void 0;
        }, []),
        {
            cropAndUpload: f,
            previewUri: h,
            cancelUpload: I,
            getLastEdit: A,
        } = eT({
            uploadType: eN.HL.PERSONAL_WIDGET_COVER,
            returnRef: d,
            getCropAspectRatio: x,
            onUploadSuccess: (e) => u((t) => ({ ...t, image: e })),
        });
    function j() {
        (I(), u((e) => ({ ...e, image: void 0 })));
    }
    function E() {
        o.current?.activateUploadDialogue();
    }
    function v() {
        (0, F.AD)((e) => new p.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let C = null != h,
        S = r || "" !== i.title.trim() || "" !== i.subtitle.trim(),
        b = null != i.image || C,
        k = b || r,
        T = A(i.image);
    return (0, n.jsx)(z.N, {
        theme: b ? ey.NJ8.DARK : void 0,
        children: (e) =>
            (0, n.jsxs)("div", {
                ref: c,
                className: a()(eR.kL, { [eR.Vp]: k }, e),
                children: [
                    r || null != i.image
                        ? (0, n.jsxs)("div", {
                              className: eR.El,
                              children: [
                                  (0, n.jsx)(ec.A, {
                                      cropAndUpload: f,
                                      imageInputRef: o,
                                      className: eR.Sl,
                                      canEdit: r,
                                      userId: t,
                                      image: i.image,
                                      previewUri: h,
                                      editVariant: "tooltip",
                                  }),
                                  b && S ? (0, n.jsx)("div", { className: eR.cw }) : null,
                              ],
                          })
                        : null,
                    r
                        ? (0, n.jsxs)(K.A, {
                              className: eR.o1,
                              children: [
                                  null != i.image
                                      ? (0, n.jsx)(eh, {
                                            lastEdit: T,
                                            buttonRef: d,
                                            disabled: C,
                                            cropAndUpload: f,
                                            onChangeImage: E,
                                        })
                                      : null,
                                  (0, n.jsx)(K.Y, {
                                      icon: X.TrashIcon,
                                      variant: "overlay-secondary",
                                      tooltipText: b ? V.intl.string(V.t.RyK5Ww) : V.intl.string(V.t.g2jVww),
                                      onClick: b ? j : v,
                                  }),
                              ],
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        className: a()(eR.hQ, e, { [eR.Vp]: k }),
                        children: [
                            (0, n.jsx)(ed, {
                                canEdit: r,
                                growWidth: !0,
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                value: i.title,
                                placeholder: V.intl.string(V.t.KqCDvK),
                                onCommit: g,
                                maxLength: 50,
                                maxLines: 2,
                            }),
                            (0, n.jsx)(ed, {
                                canEdit: r,
                                variant: "text-sm/medium",
                                color: "text-default",
                                value: i.subtitle,
                                placeholder: V.intl.string(V.t.k8zZFd),
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
i(321073);
var e_ = i(661531),
    eP = i(603090);
function eO(e) {
    let { onClick: t, alwaysVisible: i = !1 } = e;
    return (0, n.jsxs)(H.D, {
        onClick: t,
        className: a()(eP.cR, { [eP.mr]: i }),
        children: [
            (0, n.jsx)(em.X, { size: "xs", color: e_.A.colors.ICON_SUBTLE }),
            (0, n.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", children: V.intl.string(V.t["9AY+/x"]) }),
        ],
    });
}
function eD(e) {
    let { index: t, userId: i, field: l, canEdit: s, onFieldChange: r, onFieldRemove: o } = e,
        {
            cropAndUpload: d,
            previewUri: c,
            cancelUpload: u,
            getLastEdit: g,
        } = eT({
            uploadType: eN.HL.PERSONAL_WIDGET_FIELD,
            onUploadSuccess: (e) => r(l.key, (t) => ({ ...t, image: e })),
        }),
        m = s ? !0 !== l.hideImage : null != l.image;
    return (0, n.jsxs)("div", {
        className: eP.ez,
        children: [
            m
                ? (0, n.jsxs)("div", {
                      className: eP.tF,
                      children: [
                          (0, n.jsx)(ec.A, {
                              className: a()(eP.k9, s ? eP.y2 : void 0),
                              canEdit: s,
                              userId: i,
                              image: l.image,
                              previewUri: c,
                              cropAndUpload: d,
                              editVariant: "overlay",
                              lastEdit: g(l.image),
                          }),
                          s
                              ? (0, n.jsx)(K.A, {
                                    className: eP.ij,
                                    children: (0, n.jsx)(K.Y, {
                                        variant: "overlay-secondary",
                                        tooltipText: V.intl.string(V.t.RyK5Ww),
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
            (0, n.jsxs)("div", {
                className: eP.oT,
                children: [
                    (0, n.jsx)(ed, {
                        canEdit: s,
                        variant: "text-sm/medium",
                        color: "text-default",
                        value: l.title,
                        placeholder: V.intl.formatToPlainString(V.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            r(l.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 40,
                        maxLines: 2,
                    }),
                    (0, n.jsx)(ed, {
                        canEdit: s,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        value: l.description,
                        placeholder: V.intl.formatToPlainString(V.t.Hs14K3, { number: t + 1 }),
                        onCommit: function (e) {
                            r(l.key, (t) => ({ ...t, description: e }));
                        },
                        maxLength: 90,
                        maxLines: 4,
                    }),
                ],
            }),
            s
                ? (0, n.jsxs)(K.A, {
                      className: eP.Ms,
                      children: [
                          m
                              ? null
                              : (0, n.jsx)(K.Y, {
                                    variant: "overlay-secondary",
                                    tooltipText: V.intl.string(V.t.i3vRzP),
                                    onClick: function () {
                                        r(l.key, (e) => ({ ...e, hideImage: void 0 }));
                                    },
                                    icon: em.X,
                                }),
                          (0, n.jsx)(K.Y, {
                              variant: "overlay-secondary",
                              tooltipText: V.intl.string(V.t.g2jVww),
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
    let { userId: t, section: i, sectionIndex: l, canEdit: s, hasCoverSection: a } = e;
    function r(e) {
        (0, F.AD)((t) => {
            let i = t.sections[l];
            if (i?.type !== P.K.FIELDS) return t;
            let n = [...t.sections];
            return ((n[l] = { ...i, fields: e(i.fields) }), new p.Tu({ ...t, sections: n }));
        });
    }
    function o(e, t) {
        r((i) => {
            let n = i.findIndex((t) => t.key === e),
                l = i[n];
            if (null == l) return i;
            let s = [...i];
            return ((s[n] = t(l)), s);
        });
    }
    function d(e) {
        r((t) => t.filter((t) => t.key !== e));
    }
    function c() {
        r((e) => [...e, (0, p.yL)()]);
    }
    if (0 === i.fields.length) {
        if (!s) return null;
        if (!a)
            return (0, n.jsx)("div", { className: eP.kL, children: (0, n.jsx)(eO, { alwaysVisible: !0, onClick: c }) });
    }
    let u = i.fields.map((e, i) =>
            (0, n.jsx)(eD, { index: i, userId: t, field: e, canEdit: s, onFieldChange: o, onFieldRemove: d }, e.key),
        ),
        g = i.fields.length % 2 == 1;
    s && g && i.fields.length < 4 && u.push((0, n.jsx)(eO, { onClick: c }, "add-entry"));
    let m = s && !g && i.fields.length + 2 <= 4;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            u.length > 0 ? (0, n.jsx)("div", { className: eP.kL, children: u }) : null,
            m
                ? (0, n.jsx)(Q, {
                      label: V.intl.string(V.t.t4vU5I),
                      onClick: function () {
                          r((e) => [...e, (0, p.yL)(), (0, p.yL)()]);
                      },
                  })
                : null,
        ],
    });
}
var eM = i(202541),
    eU = i(877068);
let eF = { section: ey.JJy.PERSONAL_WIDGET };
function eW(e) {
    let { widget: t, canEdit: i } = e;
    return (0, n.jsxs)("div", {
        className: eU.wx,
        children: [
            (0, n.jsx)(G.A, { size: "xs", className: eU.nr }),
            (0, n.jsx)(ed, {
                canEdit: i,
                variant: "text-sm/medium",
                color: "text-default",
                value: t.header,
                placeholder: V.intl.string(V.t.fjSaAm),
                onCommit: function (e) {
                    (0, F.AD)((t) => new p.Tu({ ...t, header: e }));
                },
                maxLength: 50,
                maxLines: 1,
                disableMarkdown: !0,
            }),
        ],
    });
}
function eH(e) {
    let { userId: t, section: i, sectionIndex: l, canEdit: s, hasCoverSection: a } = e;
    switch (i.type) {
        case P.K.COVER:
            return (0, n.jsx)(eL, { userId: t, section: i, sectionIndex: l, canEdit: s });
        case P.K.FIELDS:
            return (0, n.jsx)(eG, { userId: t, section: i, sectionIndex: l, canEdit: s, hasCoverSection: a });
    }
}
function eV() {
    return (0, r.bG)([M.default], () => U.Ay.isPremium(M.default.getCurrentUser(), eM.PremiumTypes.TIER_2))
        ? null
        : (0, n.jsxs)("div", {
              className: eU.hc,
              children: [
                  (0, n.jsx)(O.h, { color: "nitro-pink", className: eU.Sp, offsetBottom: -4 }),
                  (0, n.jsxs)("div", {
                      className: eU.LK,
                      children: [
                          (0, n.jsx)(d.E, {
                              variant: "text-xs/semibold",
                              color: "text-strong",
                              children: V.intl.string(V.t.WOPVdz),
                          }),
                          (0, n.jsx)(d.E, {
                              variant: "text-xs/medium",
                              color: "text-default",
                              children: V.intl.string(V.t["55tM3t"]),
                          }),
                      ],
                  }),
                  (0, n.jsx)(D.A, {
                      size: "sm",
                      subscriptionTier: eM.pe.TIER_2,
                      defaultTextOverride: V.intl.string(V.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eF,
                  }),
              ],
          });
}
function eB() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: i } = el();
    return e || t ? (0, n.jsx)(Y, { expanded: t, onClick: () => i((e) => !e) }) : null;
}
function eY(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: a, index: r, trailingContent: o } = e,
        d = s && !0 !== a,
        c = l.useMemo(() => t.sections.some((e) => e.type === P.K.COVER), [t.sections]);
    return (0, n.jsx)(W.A, {
        userId: i.id,
        widget: t,
        allowEditing: s,
        disableInteraction: a,
        index: r,
        trailingContent: o,
        className: eU.Nr,
        headerClassName: eU.JE,
        children: (0, n.jsxs)("div", {
            className: eU.kL,
            children: [
                (0, n.jsx)(eW, { widget: t, canEdit: d }),
                d && !c ? (0, n.jsx)(ew, {}) : null,
                t.sections.map((e, t) =>
                    (0, n.jsx)(eH, { userId: i.id, section: e, sectionIndex: t, canEdit: d, hasCoverSection: c }, t),
                ),
                (0, n.jsx)(eB, {}),
                d ? (0, n.jsx)(eV, {}) : null,
            ],
        }),
    });
}
function ez(e) {
    return (0, n.jsx)(en, { children: (0, n.jsx)(eY, { ...e }) });
}
var eX = i(702841),
    eK = i(821609),
    eq = i(403581),
    eZ = i(307301),
    eJ = i(37537),
    eQ = i(183555),
    e$ = i(465318),
    e0 = i(384377),
    e1 = i(554146),
    e2 = i(43105),
    e8 = i(131607),
    e5 = i(518477),
    e7 = i(49999);
function e3() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = e$.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [i, n] = (0, e8.kn)(e && t ? [e1.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [i === e1.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, n];
}
function e6(e) {
    let { targetElementRef: t, isVisible: i, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, eQ.NJ)();
    return i
        ? (0, n.jsx)(e2.A, {
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
              title: V.intl.string(V.t.KKGxNt),
              body: V.intl.string(V.t["IS+QTV"]),
              onRequestClose: () => l(e7.i.USER_DISMISS),
              actions: [
                  {
                      text: V.intl.string(V.t.RCy7Px),
                      icon: eq.t,
                      onClick: function () {
                          let e = (0, p.g0)();
                          ((0, F.Y5)(e),
                              s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, e0.XA)(e5.jM.WIDGET_ADDED));
                      },
                  },
              ],
          })
        : null;
}
var e4 = i(410453);
function e9(e) {
    let { buttonRef: t, isCoachmarkVisible: i, markCoachmarkAsDismissed: s } = e,
        { trackUserProfileEditAction: a } = (0, eQ.NJ)(),
        r = l.useCallback(() => {
            i && s(e7.i.TAKE_ACTION);
            let e = (0, p.g0)();
            ((0, F.Y5)(e),
                a({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, e0.XA)(e5.jM.WIDGET_ADDED));
        }, [a, i, s]);
    return (0, n.jsx)(eK.$, {
        icon: eq.t,
        text: V.intl.string(V.t.eGAirq),
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
                { enabled: i, showCreateEntrypoint: n } = e$.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === b.x.PERSONAL);
            return i && n && !l;
        })(),
        m = (0, eJ.c)("UserProfileWidgetEditingHeader"),
        x = l.useCallback(() => {
            (c && u(e7.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, ej.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([i.e("376053"), i.e("487697"), i.e("56438")]).then(
                            i.bind(i, 709013),
                        );
                        return (t) => (0, n.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [s, c, u]);
    return (0, n.jsxs)("div", {
        className: a()(e4.w, t),
        children: [
            (0, n.jsx)(d.E, {
                className: e4.D,
                variant: m ? "text-sm/semibold" : "text-xs/semibold",
                color: "text-subtle",
                children: V.intl.string(V.t.OYlggR),
            }),
            g ? (0, n.jsx)(e9, { buttonRef: o, isCoachmarkVisible: c, markCoachmarkAsDismissed: u }) : null,
            (0, n.jsx)(eK.$, {
                icon: eZ.j,
                text: V.intl.string(V.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: x,
                buttonRef: r,
            }),
            (0, n.jsx)(e6, { targetElementRef: g ? o : r, isVisible: c, markAsDismissed: u }),
        ],
    });
}
var tt = i(192),
    ti = i(172218),
    tn = i(408278),
    tl = i(499373),
    ts = i(775602),
    ta = i(793574),
    tr = i(734066),
    to = i(111994),
    td = i(280450),
    tc = i(321191);
function tu(e) {
    return (0, r.bG)(
        [td.default, tc.A],
        () => (tc.A.getUserProfile(td.default.getId())?.widgets ?? []).some((t) => t.type === e),
        [e],
    );
}
var tg = i(765178),
    tm = i(789645),
    tx = i(614584),
    tf = i(195880),
    th = i(219222),
    tI = i(696016);
async function tp(e, t, i, n, l) {
    let { analyticsLocations: s, source: a, trackEditAction: r } = l,
        o = "exporting";
    try {
        let l = await (0, tx.VO)(e, { analyticsLocations: s });
        if (n.signal.aborted || !(0, F.iu)(t)) return;
        o = "uploading";
        let d = new File([l], "clip.mp4", { type: "video/mp4" }),
            c = await E.A.uploadWidgetClip(d, { onProgress: (e) => (0, th.Fj)(t, e), signal: n.signal });
        if (!(0, F.WX)(t, c)) return;
        r({
            action: a === e5.IE.PICKER ? "CLIP_ADDED_FROM_PICKER" : "CLIP_ADDED_FROM_SUGGESTED",
            widgetEdited: b.x.CLIPS_GALLERY,
            gameId: i,
        });
    } catch (e) {
        if (n.signal.aborted) return;
        ((0, F.mC)(t),
            tI.nx.error("Failed to upload a clip for the clips gallery widget", e),
            (0, eI.P0)((0, ep.o)(V.intl.string(V.t.iufib1), eA.Ck.FAILURE)),
            r({
                action: "exporting" === o ? "CLIP_EXPORT_FAILED" : "CLIP_UPLOAD_FAILED",
                widgetEdited: b.x.CLIPS_GALLERY,
                gameId: i,
            }));
    } finally {
        (0, th.cG)(t);
    }
}
function tA(e) {
    let { widgetClipId: t, gameId: i, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eQ.NJ)(),
        a = V.intl.string(V.t["4z6ldH"]);
    return (0, n.jsx)("div", {
        className: l,
        children: (0, n.jsx)(q.m, {
            text: a,
            ariaHidden: !0,
            children: (0, n.jsx)(tn.K, {
                "aria-label": a,
                icon: tm.P,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, th._V)(t),
                        (0, F.mC)(t),
                        tg.O.announce(V.intl.string(V.t.VCQXvr)),
                        s({ action: "CLIP_UPLOAD_CANCELED", widgetEdited: b.x.CLIPS_GALLERY, gameId: i }));
                },
            }),
        }),
    });
}
var tj = i(314531);
i(926675);
var tE = i(305866),
    tv = i(123181),
    tC = i(229087),
    tS = i(753437),
    tb = i(382701),
    tk = i(630900);
function tT(e) {
    let { clipId: t, tags: i, allowEditing: s, disableInteraction: a = !1, onEditingChange: r } = e,
        o = s && !a,
        c = l.useMemo(() => i?.filter((e) => null != (0, tS.W3)(e)) ?? [], [i]),
        u = c.length > 0,
        g = o && c.length < 20,
        { trackUserProfileEditAction: m } = (0, eQ.NJ)(),
        x = l.useRef(null),
        f = l.useRef(new Map()),
        h = l.useRef(null),
        I = l.useRef(null),
        p = l.useRef(null),
        [A, j] = l.useState(c.length),
        [E, v] = l.useState(!1),
        [C, S] = l.useState(!1),
        k = E || C;
    (l.useEffect(() => {
        r(k);
    }, [k, r]),
        l.useEffect(() => () => r(!1), [r]));
    let T = l.useCallback(
            (e, i) => {
                ((0, F.$6)(t, e),
                    m({ action: "added" === i ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: b.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        y = l.useCallback(() => {
            (S(!0), m({ action: "PRESS_ADD_TAG", widgetEdited: b.x.CLIPS_GALLERY }));
        }, [m]),
        N = l.useCallback(() => S(!1), []),
        R = l.useCallback(
            (e) => {
                ((0, F.Fo)(t, e), m({ action: "TAG_REMOVED", widgetEdited: b.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        w = l.useCallback(() => {
            if (E) return;
            let e = x.current?.getBoundingClientRect().width ?? 0;
            if (0 === e || 0 === c.length) return void j(c.length);
            let t = p.current?.getBoundingClientRect().width ?? 0,
                i = h.current?.getBoundingClientRect().width ?? 0,
                n = e - (t > 0 ? t + 4 : 0),
                l = c.map((e) => f.current.get(e)?.offsetWidth ?? 0);
            function s(e, t) {
                let i = 0;
                for (let t = 0; t < e; t++) i += l[t] + 4 * (t > 0);
                return i <= t;
            }
            if (s(c.length, n)) return void j(c.length);
            let a = n - (i + 4),
                r = 0;
            for (; r < c.length && s(r + 1, a);) r++;
            j(r);
        }, [c, E]);
    (0, et.g)(x, w);
    let L = c.length - A,
        _ = L > 0,
        P = l.useCallback(
            (e) => {
                (1 === L && v(!1), R(e));
            },
            [R, L],
        );
    return u || g
        ? (0, n.jsxs)("div", {
              className: tk.kL,
              ref: x,
              children: [
                  (0, n.jsxs)("ul", {
                      className: tk.xP,
                      "aria-hidden": !0,
                      children: [
                          c.map((e) =>
                              (0, n.jsx)(
                                  tC.A,
                                  {
                                      tag: e,
                                      variant: "filled",
                                      onRemove: o ? () => {} : void 0,
                                      ref: (t) => {
                                          null != t && f.current.set(e, t);
                                      },
                                  },
                                  e,
                              ),
                          ),
                          (0, n.jsx)("li", {
                              className: tk.lv,
                              ref: h,
                              children: (0, n.jsx)(d.E, {
                                  variant: "text-xxs/medium",
                                  color: "none",
                                  children: `+${c.length}`,
                              }),
                          }),
                      ],
                  }),
                  u &&
                      (0, n.jsx)("ul", {
                          className: tk.nM,
                          "aria-label": V.intl.string(V.t["4Rq3a7"]),
                          children: c
                              .slice(0, A)
                              .map((e) =>
                                  (0, n.jsx)(tC.A, { tag: e, variant: "filled", onRemove: o ? () => R(e) : void 0 }, e),
                              ),
                      }),
                  _ &&
                      (0, n.jsx)(ty, {
                          buttonRef: I,
                          numHidden: L,
                          isOpen: E,
                          onOpenChange: v,
                          disableInteraction: a,
                          children: c.map((e) =>
                              (0, n.jsx)(tC.A, { tag: e, className: tk.Hl, onRemove: o ? () => P(e) : void 0 }, e),
                          ),
                      }),
                  g && (0, n.jsx)(tv.A, { tags: c, onTagsChange: T, onOpen: y, onClose: N, variant: "filled", ref: p }),
              ],
          })
        : null;
}
function ty(e) {
    let { buttonRef: t, numHidden: i, isOpen: l, onOpenChange: s, disableInteraction: a, children: r } = e,
        o = V.intl.string(V.t.pWHvBI);
    return a
        ? (0, n.jsx)("div", {
              className: `${tk.lv} ${tb.r9}`,
              ref: t,
              children: (0, n.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${i}` }),
          })
        : (0, n.jsx)(eu.Y, {
              targetElementRef: t,
              position: "top",
              align: "left",
              shouldShow: l,
              onRequestOpen: () => s(!0),
              onRequestClose: () => s(!1),
              renderPopout: () =>
                  (0, n.jsx)(tE.l, {
                      className: tk.Kt,
                      "aria-label": o,
                      returnRef: t,
                      children: (0, n.jsx)("ul", { className: tk.ns, children: r }),
                  }),
              children: (e) =>
                  (0, n.jsx)(q.m, {
                      text: o,
                      ariaHidden: !0,
                      children: (0, n.jsx)(H.D, {
                          ...e,
                          innerRef: t,
                          "aria-label": o,
                          "aria-expanded": l,
                          className: tk.lv,
                          children: (0, n.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${i}` }),
                      }),
                  }),
          });
}
var tN = i(3026);
i(600253);
var tR = i(936026);
function tw(e) {
    let { value: t, isPlaceholder: i = !1 } = e;
    return (0, n.jsx)(d.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: a()(tR.Qw, { [tR.qf]: i }),
        children: (0, n.jsx)(tN.A, { children: t }),
    });
}
function tL(e) {
    let { clipId: t, title: i, onEditingChange: s } = e,
        { trackUserProfileEditAction: r } = (0, eQ.NJ)(),
        o = l.useCallback(
            (e) => {
                let n = e.trim();
                n !== i.trim() &&
                    ((0, F.mI)(t, n),
                    r({ action: "CLIP_TITLE_EDITED", widgetEdited: b.x.CLIPS_GALLERY, numCharacters: n.length }));
            },
            [t, i, r],
        ),
        d = V.intl.string(V.t["2gwc+H"]);
    return (
        l.useEffect(() => (s(!1), () => s(!1)), [s]),
        (0, n.jsx)("div", {
            className: a()(es.kL, es.oE, tR.ZZ),
            children: (0, n.jsx)($.A, {
                value: i,
                onCommit: o,
                onFocus: () => s(!0),
                onBlur: () => s(!1),
                autoComplete: "off",
                defaultDirty: !0,
                hideLabel: !0,
                paddingBlock: "md",
                paddingInline: "sm",
                scrollIntoViewOnFocus: !0,
                preview: (0, n.jsxs)("span", {
                    className: a()(tR.$, tR.TG),
                    children: [
                        (0, n.jsx)(eg.PencilIcon, { size: "xxs", color: "currentColor", className: tR.wz }),
                        "" === i.trim()
                            ? (0, n.jsx)(tw, { value: d, isPlaceholder: !0 })
                            : (0, n.jsx)(tw, { value: i }),
                    ],
                }),
                placeholder: d,
                label: V.intl.string(V.t.PDnM11),
                maxLength: 200,
            }),
        })
    );
}
function t_(e) {
    let { clipId: t, title: i, allowEditing: l, onEditingChange: s } = e,
        a = null != i && "" !== i.trim();
    return l || a
        ? l
            ? (0, n.jsx)(tL, { clipId: t, title: i ?? "", onEditingChange: s })
            : (0, n.jsx)("span", { className: tR.$, children: (0, n.jsx)(tw, { value: i ?? "" }) })
        : null;
}
var tP = i(663341),
    tO = i(451395),
    tD = i(823016);
function tG(e) {
    let { widgetClipId: t, gameId: i, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eQ.NJ)(),
        a = V.intl.string(V.t.ib6Mgx);
    return (0, n.jsx)("div", {
        className: l,
        children: (0, n.jsx)(q.m, {
            text: a,
            ariaHidden: !0,
            children: (0, n.jsx)(tn.K, {
                "aria-label": a,
                icon: X.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, F.mC)(t),
                        tg.O.announce(V.intl.string(V.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY, gameId: i }));
                },
            }),
        }),
    });
}
var tM = i(233002);
function tU(e) {
    let { item: t, index: i, isSelected: s, onSelect: r, allowEditing: o } = e,
        { registerDragHandleRef: d, manageFocusOnReorder: c } = (0, tD.r)(),
        { trackUserProfileEditAction: u } = (0, eQ.NJ)(),
        g = l.useRef(null),
        m = l.useCallback(
            (e, t) => {
                e !== t && ((0, F.N5)(e, t), u({ action: "CLIP_REORDERED", widgetEdited: b.x.CLIPS_GALLERY }));
            },
            [u],
        ),
        x = o && ("saved" === t.status || "pending" === t.status),
        f = o && "uploading" === t.status,
        h = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(H.D, {
                    className: a()(tM.Vs, { [tM.wH]: s }),
                    "aria-pressed": s,
                    "aria-label": V.intl.formatToPlainString(V.t.zrtAwA, { clipNumber: i + 1 }),
                    onClick: () => r(t.key),
                    children: (0, n.jsx)(tj.A, { item: t, ringSize: "sm", className: tM.nC }),
                }),
                x &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(tO.jV, { buttonRef: d(t.key), className: tM.BU }),
                            (0, n.jsx)(tG, { widgetClipId: t.key, gameId: t.gameId, className: tM.nM }),
                        ],
                    }),
                f && (0, n.jsx)(tA, { widgetClipId: t.key, gameId: t.gameId, className: tM.nM }),
            ],
        });
    return (0, n.jsx)("li", {
        ref: g,
        className: tM.NI,
        children: x
            ? (0, n.jsx)(tO.mG, {
                  index: i,
                  itemId: t.key,
                  listType: b.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => g.current?.offsetWidth },
                  "aria-label": V.intl.formatToPlainString(V.t.P9nKjJ, { positionNumber: i + 1 }),
                  onReorder: m,
                  onEnd: () => c(t.key),
                  className: tM.oE,
                  dropBeforeClassName: tM.A,
                  dropAfterClassName: tM.Ze,
                  draggingClassName: tM.Id,
                  children: h,
              })
            : h,
    });
}
function tF(e) {
    let { items: t, selectedKey: i, onSelect: l, onAddClip: s, allowEditing: a = !1 } = e,
        r = Math.max(0, 4 - t.length),
        o = (0, n.jsxs)("ul", {
            className: tM.Xm,
            style: { "--custom-clips-filmstrip-slots": 4 },
            children: [
                t.map((e, t) =>
                    (0, n.jsx)(tU, { item: e, index: t, isSelected: e.key === i, onSelect: l, allowEditing: a }, e.key),
                ),
                null != s &&
                    Array.from({ length: r }, (e, t) =>
                        (0, n.jsx)(
                            "li",
                            {
                                className: tM.NI,
                                children: (0, n.jsx)(H.D, {
                                    className: tM.Yn,
                                    "aria-label": V.intl.string(V.t.rI0i0a),
                                    onClick: s,
                                    children: (0, n.jsx)(tP.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return a ? (0, n.jsx)(tD.B, { emptyListFallbackRef: null, children: o }) : o;
}
var tW = i(729475),
    tH = i(358618),
    tV = i(983851);
function tB(e) {
    let { isMuted: t, onToggleMuted: i, onFullscreen: l } = e,
        s = V.intl.string(V.t.dcl9MQ),
        a = V.intl.string(t ? V.t.YqAjXy : V.t.w4m945);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(q.m, {
                text: s,
                ariaHidden: !0,
                children: (0, n.jsx)(tn.K, {
                    "aria-label": s,
                    icon: tW.T,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: l,
                }),
            }),
            (0, n.jsx)(q.m, {
                text: a,
                ariaHidden: !0,
                children: (0, n.jsx)(tn.K, {
                    "aria-label": a,
                    icon: t ? tH._ : tV.H,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: i,
                }),
            }),
        ],
    });
}
var tY = i(798108),
    tz = i(297264),
    tX = i(915089),
    tK = i(772168);
function tq(e) {
    let { onDismiss: t, children: i, className: l } = e,
        s = (0, tX.GV)();
    return (0, n.jsxs)("aside", {
        className: a()(tK.kL, l),
        "aria-labelledby": s,
        children: [
            (0, n.jsxs)("div", {
                className: tK.wx,
                children: [
                    (0, n.jsx)(H.D, {
                        className: tK.r,
                        "aria-label": V.intl.string(V.t["pUR+3g"]),
                        onClick: t,
                        children: (0, n.jsx)(tm.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(tz.D, {
                        id: s,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: V.intl.string(V.t.zMUr6Z),
                    }),
                ],
            }),
            i,
        ],
    });
}
var tZ = i(335978);
function tJ(e) {
    let { clip: t, onAddClip: i } = e,
        s = V.intl.formatToPlainString(V.t.gPRdVj, { clipName: t.name ?? t.applicationName }),
        a = l.useCallback(() => i(t), [t, i]);
    return (0, n.jsx)(q.m, {
        text: s,
        ariaHidden: !0,
        children: (0, n.jsxs)(H.D, {
            className: tZ.Vs,
            "aria-label": s,
            onClick: a,
            children: [
                (0, n.jsx)("img", { src: t.thumbnail, alt: "", className: tZ.xn, loading: "lazy" }),
                (0, n.jsx)(tP.PlusLargeIcon, { size: "sm", color: "currentColor", className: tZ.Xv }),
            ],
        }),
    });
}
function tQ(e) {
    let { clips: t, onAddClip: i, ...l } = e;
    return (0, n.jsx)(tq, {
        ...l,
        children: (0, n.jsx)("ul", {
            className: tZ.p_,
            children: t.map((e) =>
                (0, n.jsx)("li", { className: tZ.NI, children: (0, n.jsx)(tJ, { clip: e, onAddClip: i }) }, e.id),
            ),
        }),
    });
}
var t$ = i(769015),
    t0 = i(409626),
    t1 = i(692969),
    t2 = i(202163),
    t8 = i(207803),
    t5 = i(591179),
    t7 = i(485745),
    t3 = i(308766);
function t6(e) {
    let { gameId: t, userId: i, className: s } = e,
        { gameRecord: r } = (0, t2.A)(t),
        o = !(0, t5.X)("WidgetClipGameIcon"),
        d = (0, t7.A)(o),
        c = (0, t1.A)({
            location: "WidgetClipGameIcon",
            applicationId: t,
            source: t0.GameProfileSources.UserProfile,
            sourceUserId: i,
        }),
        u = l.useCallback(
            (e) => {
                if (d) {
                    (e.preventDefault(), e.stopPropagation(), (0, t8.VQ)());
                    return;
                }
                c?.(e);
            },
            [d, c],
        ),
        g = r?.name;
    if (null == g) return null;
    let m = (0, n.jsx)(t$.A, { game: r, size: t$.M.XSMALL, allowUnknownGameIcon: !1 });
    return (0, n.jsx)(q.m, {
        text: g,
        ariaHidden: !0,
        children:
            null == c
                ? (0, n.jsx)(q.m, {
                      text: g,
                      ariaHidden: !0,
                      children: (0, n.jsx)("div", { className: s, children: m }),
                  })
                : (0, n.jsx)(H.D, {
                      className: a()(t3.v, s),
                      "aria-label": V.intl.formatToPlainString(V.t["8QLQB+"], { gameName: g }),
                      onClick: u,
                      children: m,
                  }),
    });
}
var t4 = i(558285),
    t9 = i(608857),
    ie = i(915725),
    it = i(409067),
    ii = i(716112);
function il(e) {
    let { onClick: t } = e,
        i = V.intl.string(V.t.rI0i0a);
    return (0, n.jsx)(q.m, {
        text: i,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, n.jsx)(tn.K, { variant: "secondary", size: "sm", icon: tl.T, "aria-label": i, onClick: t }),
    });
}
function is() {
    return (0, n.jsx)("div", {
        className: ii.p$,
        children: (0, n.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: V.intl.format(V.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function ia(e) {
    let t,
        s,
        { widget: a, user: o, allowEditing: d, disableInteraction: c, ...u } = e,
        [g, m] = l.useState(!1),
        [x, f] = l.useState(!1),
        [h, I] = l.useState(!0),
        p = (0, r.bG)([ts.Ay], () => ts.Ay.useReducedMotion),
        A = (0, ti.K)(f, 0.5),
        [j, E] = l.useState(!1),
        [v, C] = l.useState(!1),
        S = l.useRef(void 0),
        k = (0, t9.A)(a),
        T =
            ((t = (0, r.yK)([ie.Ay], () => Object.values(ie.Ay.getClips()))),
            (s = (0, r.bG)([ie.Ay], () => ie.Ay.getSettings().showPovClipsInGallery)),
            l.useMemo(() => {
                let e = new Set();
                for (let t of a.clips) null != t.localClipId && e.add(t.localClipId);
                return t
                    .filter((t) => !(e.has(t.id) || null == t.applicationId || 0 === t.length || (!s && (0, it.kD)(t))))
                    .sort((e, t) => {
                        let i = !0 === e.isFavorite;
                        return i !== (!0 === t.isFavorite) ? (i ? -1 : 1) : t.createdAt - e.createdAt;
                    })
                    .slice(0, 3);
            }, [t, s, a.clips])),
        [y, N] = l.useState(null),
        R = k.find((e) => e.key === y) ?? k[0],
        w = (0, tr.sw)(),
        { trackUserProfileAction: L, trackUserProfileEditAction: _ } = (0, eQ.NJ)(),
        P = d && !0 !== c,
        O = 0 === k.length,
        D = k.length >= 4,
        G = P && w && !D,
        M = P || k.length > 1,
        [U] = l.useState(() => T.length >= 3),
        [B, Y] = l.useState(!1),
        z = tu(a.type),
        X = G && !z && U && !B && T.length > 0,
        K = l.useCallback(() => {
            (Y(!0), _({ action: "DISMISS_SUGGESTED_CLIPS", widgetEdited: b.x.CLIPS_GALLERY }));
        }, [_]),
        q = l.useCallback(
            (e) => {
                (N(e), e !== R?.key && L({ action: "SELECT_CLIP", widgetType: b.x.CLIPS_GALLERY }));
            },
            [R?.key, L],
        ),
        Z = l.useMemo(() => (!0 === c ? [] : k.filter(t9.K)), [k, c]),
        J = null != R ? Z.findIndex((e) => e.key === R.key) : -1,
        Q = l.useCallback(() => {
            J < 0 ||
                (L({ action: "PRESS_PLAY_CLIP", widgetType: b.x.CLIPS_GALLERY }),
                (0, t4.A)({ clips: Z, startingIndex: J }));
        }, [Z, J, L]),
        $ = l.useCallback(() => {
            let e = !h;
            (I(e), L({ action: e ? "MUTE_CLIP_PREVIEW" : "UNMUTE_CLIP_PREVIEW", widgetType: b.x.CLIPS_GALLERY }));
        }, [h, L]),
        ee = l.useCallback(() => {
            if (J < 0) return;
            let e = Z[(J + 1) % Z.length];
            null != e && N(e.key);
        }, [Z, J]),
        et = J >= 0 && !p && x,
        ei = (et || g) && !j && !v,
        en = l.useCallback(() => {
            J < 0 ||
                et ||
                (S.current = window.setTimeout(() => {
                    (m(!0), L({ action: "HOVER_PLAY_CLIP", widgetType: b.x.CLIPS_GALLERY }));
                }, 150));
        }, [et, J, L]),
        el = l.useCallback(() => {
            (window.clearTimeout(S.current), m(!1));
        }, []);
    l.useEffect(() => () => window.clearTimeout(S.current), []);
    let es = l.useCallback(
            (e, t) => {
                let i = (function (e, t) {
                    if (null == e.applicationId)
                        return ((0, eI.P0)((0, ep.o)(V.intl.string(V.t.xcLXWy), eA.Ck.FAILURE)), null);
                    let i = (0, tf.m)();
                    if (
                        !(0, F.$C)({
                            status: "uploading",
                            id: i,
                            localClipId: e.id,
                            gameId: e.applicationId,
                            title: e.name,
                            thumbnail: e.thumbnail,
                        })
                    )
                        return null;
                    let n = new AbortController();
                    return ((0, th.yf)(i, n), tp(e, i, e.applicationId, n, t), i);
                })(e, { analyticsLocations: [ta.A.USER_PROFILE_MODAL_V2], source: t, trackEditAction: _ });
                null != i && N(i);
            },
            [_],
        ),
        ea = l.useCallback((e) => es(e, e5.IE.SUGGESTED), [es]),
        er = l.useCallback(() => {
            (_({ action: "PRESS_ADD_CLIP", widgetEdited: b.x.CLIPS_GALLERY }),
                (0, ej.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            i.e("440065"),
                            i.e("251714"),
                            i.e("860350"),
                            i.e("180644"),
                            i.e("821717"),
                            i.e("269714"),
                            i.e("19385"),
                            i.e("722562"),
                            i.e("553829"),
                            i.e("627154"),
                            i.e("865257"),
                            i.e("318196"),
                            i.e("323079"),
                            i.e("437655"),
                            i.e("430877"),
                            i.e("48055"),
                            i.e("808915"),
                            i.e("586467"),
                            i.e("875842"),
                            i.e("858337"),
                            i.e("883952"),
                            i.e("3131"),
                            i.e("918024"),
                            i.e("220287"),
                            i.e("324761"),
                            i.e("8563"),
                            i.e("203930"),
                            i.e("903663"),
                            i.e("647177"),
                            i.e("169201"),
                            i.e("111527"),
                            i.e("127272"),
                            i.e("496268"),
                            i.e("466147"),
                            i.e("122266"),
                            i.e("838090"),
                            i.e("507406"),
                            i.e("501962"),
                            i.e("901922"),
                            i.e("583518"),
                            i.e("237715"),
                            i.e("974049"),
                            i.e("280559"),
                            i.e("895008"),
                            i.e("352566"),
                            i.e("964113"),
                            i.e("689160"),
                            i.e("231782"),
                            i.e("520342"),
                            i.e("771453"),
                            i.e("194676"),
                        ]).then(i.bind(i, 671884));
                        return (t) =>
                            (0, n.jsx)(e, {
                                ...t,
                                initialMainLink: to.oH.ALL_CLIPS,
                                onClipClick: (e) => {
                                    (((e) => es(e, e5.IE.PICKER))(e), t.onClose());
                                },
                            });
                    },
                    { modalKey: tI.nm },
                ));
        }, [es, _]);
    return (0, n.jsx)(W.A, {
        userId: o.id,
        widget: a,
        allowEditing: d,
        disableInteraction: c,
        headerTitle: (0, F.L)(a),
        headerSubtitle: P && !O ? V.intl.format(V.t.pb2Was, { numClips: 4 }) : void 0,
        headerActionButtons: G && O ? [(0, n.jsx)(il, { onClick: er }, "clips-gallery-add-clip")] : void 0,
        trailingContent:
            X &&
            (0, n.jsx)("div", {
                className: ii.$k,
                children: (0, n.jsx)(tQ, { clips: T, onAddClip: ea, onDismiss: K }),
            }),
        ...u,
        children:
            null != R
                ? (0, n.jsxs)("div", {
                      className: ii.nV,
                      children: [
                          (0, n.jsxs)("div", {
                              ref: A,
                              className: ii.aM,
                              onMouseEnter: en,
                              onMouseLeave: el,
                              children: [
                                  (0, n.jsx)(tj.A, {
                                      item: R,
                                      ringSize: "lg",
                                      isPlaying: ei,
                                      isMuted: h,
                                      fit: "contain",
                                      onEnded: Z.length > 1 ? ee : void 0,
                                      className: ii.VH,
                                  }),
                                  J >= 0 &&
                                      !j &&
                                      !v &&
                                      (0, n.jsx)(H.D, {
                                          className: ii.Hf,
                                          "aria-label": V.intl.string(V.t.CscLHM),
                                          onClick: Q,
                                      }),
                                  ("saved" === R.status || "pending" === R.status) &&
                                      (0, n.jsx)(t6, { gameId: R.gameId, userId: o.id, className: ii.AT }),
                                  P &&
                                      "uploading" === R.status &&
                                      (0, n.jsx)(tA, { widgetClipId: R.key, gameId: R.gameId, className: ii.MY }),
                                  P
                                      ? ("saved" === R.status || "pending" === R.status) &&
                                        (0, n.jsx)("div", {
                                            className: ii.nP,
                                            children: (0, n.jsx)(tG, { widgetClipId: R.key, gameId: R.gameId }),
                                        })
                                      : J >= 0 &&
                                        (0, n.jsx)("div", {
                                            className: ii.nP,
                                            children: (0, n.jsx)(tB, { isMuted: h, onToggleMuted: $, onFullscreen: Q }),
                                        }),
                                  (0, n.jsx)(tY.A, {
                                      children:
                                          ("saved" === R.status || "pending" === R.status) &&
                                          (0, n.jsxs)(n.Fragment, {
                                              children: [
                                                  (0, n.jsx)(t_, {
                                                      clipId: R.key,
                                                      title: R.title,
                                                      allowEditing: P,
                                                      onEditingChange: E,
                                                  }),
                                                  (0, n.jsx)(tT, {
                                                      clipId: R.key,
                                                      tags: R.tags,
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
                              (0, n.jsx)(tF, {
                                  items: k,
                                  selectedKey: R.key,
                                  onSelect: q,
                                  onAddClip: G ? er : void 0,
                                  allowEditing: P,
                              }),
                      ],
                  })
                : (0, n.jsx)(is, {}),
    });
}
var ir = i(704824),
    io = i(382483),
    id = i(385113),
    ic = i(334074),
    iu = i(657718),
    ig = i(478016);
function im(e) {
    let { user: t, application: i, onDismiss: s } = e,
        { trackUserProfileEditAction: a } = (0, eQ.NJ)(),
        r = l.useMemo(() => new f.R({ applicationId: i.id }), [i.id]),
        o = l.useCallback(() => {
            null != r &&
                ((0, F.Y5)(r),
                a({ action: "WIDGET_ADDED", ...r.getProfileEditAnalyticsOptions() }),
                (0, e0.XA)(e5.jM.WIDGET_ADDED));
        }, [r, a]);
    return (0, n.jsx)(_.A, {
        user: t,
        widget: r,
        allowEditing: !1,
        subtle: !0,
        cta: (0, n.jsx)(_.A.Cta, {
            showSuggestedForYou: !0,
            heading: V.intl.format(V.t.OIzLCy, { applicationName: i.name }),
            content: V.intl.format(V.t.BQySru, { applicationName: i.name }),
            buttons: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(q.m, {
                        text: V.intl.string(V.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, n.jsx)(iu.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tm.P,
                            "aria-label": V.intl.string(V.t.WAI6xu),
                            onClick: () => {
                                s(e7.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(q.m, {
                        text: V.intl.string(V.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)(iu.S, {
                            variant: "primary",
                            size: "sm",
                            icon: ig.U,
                            "aria-label": V.intl.formatToPlainString(V.t.KfGahB, { applicationName: i.name }),
                            onClick: () => {
                                (s(e7.i.TAKE_ACTION), o());
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function ix() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: i,
        markAsDismissed: s,
    } = (function () {
        let e = (0, r.yK)([id.A], () => id.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, io.Wq)();
        }, []);
        let t = (0, r.bG)([M.default], () => M.default.getCurrentUser()),
            i = (0, c.A)(e),
            { tokens: n, fetched: s } = (0, ir.j)(e),
            a = (0, w.A)(t?.id),
            o = null == t || null == e || null == n || !s,
            d = l.useMemo(
                () =>
                    o
                        ? []
                        : i.filter(
                              (e) =>
                                  !(null == e || a.some((t) => t instanceof f.R && t.applicationId === e.id)) &&
                                  null != n.find((t) => t.application.id === e.id),
                          ),
                [o, i, n, a],
            ),
            { eligibleToShow: u, markAsDismissed: g } = (0, ic.hj)({
                applications: d,
                dismissibleContent: e1.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: ic.SH,
            }),
            m = l.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let a = i[0];
    return null == a ? null : (0, n.jsx)(im, { user: t, application: a, onDismiss: (e) => s([a.id], e) }, a.id);
}
var ih = i(128988),
    iI = i(896170),
    ip = i(453318),
    iA = i(321108),
    ij = i(383329),
    iE = i(67710);
function iv(e) {
    let { widgetType: t, widget: i, onAddGame: s, children: a, ...r } = e,
        o = l.useMemo(() => new Set(i.games.map((e) => e.gameId)), [i.games]),
        { trackUserProfileEditAction: d } = (0, eQ.NJ)(),
        [c, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, ij.R)({ query: c }),
        f = c.trim().length > 0,
        { gameIds: h, onAddGame: I } = N(t),
        p = (0, iA.A)(h),
        A = l.useCallback(
            (e) => {
                ((0, F.ew)({ widgetType: t, game: { gameId: e } }),
                    tg.O.announce(V.intl.string(V.t.q0U3DE)),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    h.includes(e) && I(e),
                    s?.());
            },
            [t, d, s, h, I],
        ),
        j = l.useMemo(() => {
            let e = new Map(
                m.map((e) => [
                    String(e.value),
                    { id: String(e.value), value: String(e.value), label: e.label, disabled: o.has(e.value) },
                ]),
            );
            if (f) return [...e.values()];
            let t = p
                    .filter((e) => !o.has(e.id) && (0, F.XX)(e))
                    .map((e) => ({ id: String(e.id), value: String(e.id), label: e.name, disabled: !1 })),
                i = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !i.has(e.id))];
        }, [m, o, p, f]),
        E = l.useCallback((e) => e, []),
        v = l.useMemo(() => ({ ...x, threshold: iI.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        C = l.useCallback((e) => (f || "" === e.trim() ? j.length : (0, iI.Ht)(j, e, v).length), [f, j, v]),
        S = l.useCallback(
            (e) => {
                let i = e.target.value;
                ("" === c.trim() &&
                    "" !== i.trim() &&
                    d({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: i.trim().length,
                        numResults: C(i),
                    }),
                    u(i),
                    (g.current = i));
            },
            [c, d, t, C],
        );
    return (0, n.jsx)(eu.Y, {
        ...r,
        onRequestOpen: () => {
            (d({ action: "PRESS_ADD_GAME", widgetEdited: t }), u(""), (g.current = ""));
        },
        onRequestClose: () => {
            d({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: g.current.trim().length,
                numResults: C(g.current),
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(tE.l, {
                className: iE.C,
                "aria-label": V.intl.string(V.t.uqw8wK),
                children: (0, n.jsxs)(ip.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (A(e), t());
                    },
                    options: j,
                    matchSorterOptions: v,
                    customMatchSorter: f ? E : void 0,
                    children: [
                        (0, n.jsx)(ip.a3, {
                            label: V.intl.string(V.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: V.intl.string(V.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: S,
                        }),
                        (0, n.jsx)(ip.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => a(e),
    });
}
function iC(e) {
    let { disabled: t, ...i } = e,
        s = l.useRef(null);
    return (0, n.jsx)(iv, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(q.m, {
                text: V.intl.string(V.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(tn.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: tl.T,
                    "aria-label": V.intl.string(V.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function iS(e) {
    let t = l.useRef(null);
    return (0, n.jsx)(iv, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(H.D, {
                innerRef: t,
                className: iE.c,
                "aria-label": V.intl.string(V.t.PYyENc),
                ...e,
                children: (0, n.jsx)(tP.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let ib = l.createContext(null);
function ik(e) {
    let { widgetType: t, children: i } = e,
        s = (0, r.bG)([v.A], () => {
            let e = v.A.getPendingWidgets();
            if (null == e) return !1;
            let i = e.find((e) => e.type === t);
            if (null == i) return !1;
            let n = (0, F.cv)(t);
            return i.games.length > n;
        }),
        [a, o] = l.useState(s);
    return (0, n.jsx)(ib.Provider, { value: { expanded: a, setExpanded: o }, children: i });
}
function iT() {
    let e = l.useContext(ib);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var iy = i(67438);
function iN(e) {
    let { widget: t } = e,
        i = (0, F.cv)(t.type),
        l = 1 === i,
        s = l ? V.intl.string(V.t["3FdPBT"]) : V.intl.format(V.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: l ? iy.O : iy.k,
        children: [
            l && (0, n.jsx)(iS, { widget: t, widgetType: t.type }),
            (0, n.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var iR = i(683071),
    iw = i(312252);
function iL(e) {
    let { widgetType: t, gameCount: i } = e,
        l = (0, F.cv)(t);
    return i <= l
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: iw.l,
              children: (0, n.jsx)(iR.w, {
                  type: "warning",
                  children: V.intl.formatToPlainString(V.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var i_ = i(943793),
    iP = i(148420);
function iO(e) {
    let { games: t, user: i, widgetType: l, ...s } = e,
        { registerItemRef: a, manageFocusOnDelete: r } = (0, tD.r)();
    return (0, n.jsx)("ul", {
        className: iP.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(i_.A, {
                        index: t,
                        user: i,
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
function iD(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: a } = (0, tt.r)(),
        r = a(t),
        { expanded: o, setExpanded: d } = iT(),
        c = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(iO, { ...e, games: c }),
                u && (0, n.jsx)(Y, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(iL, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tD.B, { emptyListFallbackRef: r, children: g }),
              ],
          })
        : g;
}
function iG(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: a, disableInteraction: r, ...o } = e;
    return (0, n.jsx)(W.A, {
        userId: t.id,
        widget: i,
        allowEditing: a,
        disableInteraction: r,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(iD, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: a,
                      disableInteraction: r,
                  })
                : (0, n.jsx)(iN, { widget: i }),
    });
}
function iM(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: a, disableInteraction: r, ...o } = e,
        d = i.games[0];
    return (0, n.jsx)(W.A, {
        userId: t.id,
        widget: i,
        allowEditing: a,
        disableInteraction: r,
        ...o,
        children:
            null != d
                ? (0, n.jsx)(i_.A, {
                      user: t,
                      widgetType: i.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: a,
                      disableInteraction: r,
                  })
                : (0, n.jsx)(iN, { widget: i }),
    });
}
var iU = i(793693);
function iF(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: iU.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.gameId)),
    });
}
var iW = i(686246),
    iH = i(201438),
    iV = i(788593),
    iB = i(858808),
    iY = i(365611),
    iz = i(900850);
function iX(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: a, gameName: r, children: o } = e,
        { manageFocusOnReorder: d } = (0, tD.r)(),
        c = l.useRef(null);
    return (0, n.jsx)(tO.mG, {
        index: t,
        itemId: s.gameId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: a, gameName: r, getWidth: () => c.current?.offsetWidth },
        "aria-label": V.intl.formatToPlainString(V.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, F.Un)(i, e, t),
        onEnd: () => d(s.gameId),
        className: iz.kL,
        dropBeforeClassName: iz.A,
        dropAfterClassName: iz.Ze,
        draggingClassName: iz.Id,
        children: (0, n.jsx)("div", { ref: c, className: iz.An, children: o }),
    });
}
function iK(e) {
    let {
            game: t,
            userId: i,
            widgetType: l,
            allowEditing: s,
            disableInteraction: a = !1,
            index: r,
            onRemoveGame: o,
            coverRef: d,
        } = e,
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, iH.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tD.r)(),
        x = s && !a,
        { isDragging: f } = (0, iW.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(iV.A, {
                    imageSrc: c,
                    gameName: u,
                    gameId: t.gameId,
                    userId: i,
                    disableInteraction: a,
                    className: null == c || a ? void 0 : iY.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, n.jsx)(tO.jV, { buttonRef: m(t.gameId), className: iz.BU }),
                x && (0, n.jsx)(iB.A, { game: t, widgetType: l, className: iz.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, n.jsx)("div", { className: iY.mD })
        : x
          ? (0, n.jsx)(iX, { widgetType: l, index: r ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, n.jsx)("div", { className: iz.kL, children: h() });
}
function iq(e) {
    let { games: t, userId: i, widgetType: l, allowEditing: s, disableInteraction: a } = e,
        { registerItemRef: r, manageFocusOnDelete: o } = (0, tD.r)();
    return (0, n.jsx)(iF, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(iK, {
                index: t,
                game: e,
                userId: i,
                widgetType: l,
                allowEditing: s,
                disableInteraction: a,
                coverRef: r(e.gameId),
                onRemoveGame: o,
            }),
    });
}
function iZ(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: a } = (0, tt.r)(),
        r = a(t),
        { expanded: o, setExpanded: d } = iT(),
        c = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(iq, { ...e, games: c }),
                u && (0, n.jsx)(Y, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(iL, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tD.B, { emptyListFallbackRef: r, children: g }),
              ],
          })
        : g;
}
function iJ(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: a, disableInteraction: r, ...o } = e;
    return (0, n.jsx)(W.A, {
        userId: t.id,
        widget: i,
        allowEditing: a,
        disableInteraction: r,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(iZ, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: a,
                      disableInteraction: r,
                  })
                : (0, n.jsx)(iN, { widget: i }),
    });
}
function iQ(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: a, disableInteraction: r, ...o } = e;
    return (0, n.jsx)(W.A, {
        userId: t.id,
        widget: i,
        allowEditing: a,
        disableInteraction: r,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(iZ, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: a,
                      disableInteraction: r,
                  })
                : (0, n.jsx)(iN, { widget: i }),
    });
}
var i$ = i(875620);
function i0(e) {
    let { gameId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: a, isLoading: o } = (0, iH.A)(t),
        d = (0, r.bG)([v.A], () => v.A.suggestedFetchIsLoading),
        c = V.intl.formatToPlainString(V.t["3mb1s5"], { game: a });
    return o || d
        ? (0, n.jsx)("div", { className: iY.mD })
        : (0, n.jsx)(q.m, {
              text: c,
              ariaHidden: !0,
              children: (0, n.jsxs)(H.D, {
                  className: i$.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, n.jsx)(iV.A, {
                          className: i$.Iv,
                          imageSrc: s,
                          gameName: a,
                          gameId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(tP.PlusLargeIcon, { size: "md", className: i$.Xv, color: e_.A.colors.WHITE }),
                  ],
              }),
          });
}
function i1(e) {
    let { userId: t, widgetType: i, ...s } = e,
        { games: a, onAddGame: r } = N(i),
        { setExpanded: o } = iT(),
        { trackUserProfileEditAction: d } = (0, eQ.NJ)(),
        c = l.useCallback(
            (e) => {
                (r(e),
                    o(!0),
                    (0, F.ew)({ widgetType: i, game: { gameId: e } }),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: i }));
            },
            [r, i, d, o],
        );
    return (0, n.jsx)(tq, {
        ...s,
        children: (0, n.jsx)("ul", {
            className: i$.Vg,
            children: a.map((e) => {
                let { gameId: i } = e;
                return (0, n.jsx)("li", { children: (0, n.jsx)(i0, { onClick: () => c(i), userId: t, gameId: i }) }, i);
            }),
        }),
    });
}
var i2 = i(870961);
function i8(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, n.jsx)(iM, { widget: t, ...i });
        case b.x.CURRENT_GAMES:
            return (0, n.jsx)(iG, { widget: t, ...i });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(iQ, { widget: t, ...i });
        case b.x.PLAYED_GAMES:
            return (0, n.jsx)(iJ, { widget: t, ...i });
        default:
            return null;
    }
}
function i5(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: a, ...r } = e,
        { setExpanded: o } = iT(),
        { shouldShowSuggestions: d, handleDismissSuggestions: c } = (function (e) {
            let [t, i] = l.useState(!1),
                n = tu(e.type),
                s = (0, F.uA)(e);
            return {
                shouldShowSuggestions: !n && !t && !s,
                handleDismissSuggestions: l.useCallback(() => {
                    i(!0);
                }, []),
            };
        })(t),
        u = s && !a,
        g = u && d,
        m = (0, F.L)(t),
        x = (0, F.FM)(t, { showEditingControls: u }),
        f = (0, F.uA)(t),
        h = 1 === (0, F.cv)(t.type);
    return (0, n.jsx)(i8, {
        widget: t,
        user: i,
        allowEditing: s,
        disableInteraction: a,
        headerTitle: m,
        headerSubtitle: x,
        headerActionButtons:
            u && !h
                ? [
                      (0, n.jsx)(
                          iC,
                          { disabled: f, widgetType: t.type, widget: t, onAddGame: () => o(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: g && (0, n.jsx)(i1, { userId: i.id, widgetType: t.type, onDismiss: c, className: i2.r }),
        ...r,
    });
}
function i7(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(ik, { widgetType: t.type, children: (0, n.jsx)(i5, { widget: t, ...i }) });
}
var i3 = i(669253),
    i6 = i(140355);
i(839272);
let i4 = (0, i(945810).mj)({
    name: "2026-09-profile-widget-empty-state-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1, maxWidgetOptions: 0 },
    variations: { 1: { enabled: !0, maxWidgetOptions: 4 }, 2: { enabled: !0, maxWidgetOptions: 6 } },
});
var i9 = i(96173),
    ne = i(661439),
    nt = i(90165),
    ni = i(788259),
    nn = i(269507);
function nl(e) {
    let { widgets: t, trackUserProfileEditAction: i, personalWidgetOptionRef: l } = e;
    return (0, n.jsx)("ul", {
        className: nn.ZW,
        "aria-label": V.intl.string(V.t["+EIBSA"]),
        children: t.map((e) =>
            (0, n.jsx)(
                "li",
                {
                    ref: e.type === b.x.PERSONAL ? l : void 0,
                    children: (0, n.jsx)(ni.A, { widget: e, size: "small", trackUserProfileEditAction: i }),
                },
                e.getUniqueKey(),
            ),
        ),
    });
}
function ns(e) {
    let { trackUserProfileEditAction: t, personalWidgetOptionRef: i } = e,
        l = (0, i9.A)();
    return (0, n.jsx)(nl, { widgets: l, personalWidgetOptionRef: i, trackUserProfileEditAction: t });
}
function na(e) {
    let {
            maxWidgetOptions: t,
            shouldPromotePersonalWidget: s,
            trackUserProfileEditAction: a,
            personalWidgetOptionRef: o,
        } = e,
        d = (0, i9.A)(),
        u = (function (e) {
            let t = (0, r.bG)([id.A], () => id.A.getFeaturedApplicationIds()),
                i = l.useMemo(() => {
                    let i = new Set(t);
                    return e
                        .filter((e) => e instanceof f.R)
                        .map((e) => e.applicationId)
                        .filter((e) => i.has(e));
                }, [t, e]),
                n = (0, c.A)(i),
                s = l.useMemo(() => i.map((e, t) => n[t]?.parentId ?? e), [i, n]),
                { tokens: a } = (0, ir.j)(s);
            l.useEffect(() => {
                (0, ne.X)();
            }, []);
            let o = l.useMemo(() => n.map((e) => e?.getCanonicalGameId() ?? null), [n]),
                d = (0, r.yK)([nt.A], () => o.map((e) => (null != e ? nt.A.getGameDuration(e) : 0))),
                u = (0, r.yK)([nt.A], () => o.map((e) => (null != e ? nt.A.getLastPlayedDateTime(e) : null)));
            return l.useMemo(() => {
                let e = new Set(a.map((e) => e.application.id)),
                    t = [];
                for (let n = 0; n < i.length; n++)
                    t.push({
                        applicationId: i[n],
                        isConnected: e.has(s[n]),
                        totalPlayDuration: d[n] ?? 0,
                        lastPlayedAt: u[n] ?? null,
                    });
                return t;
            }, [i, s, u, a, d]);
        })(d),
        g = (function (e) {
            let t,
                {
                    addableWidgets: i,
                    applicationAffinityData: n,
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
                let t = i.find((t) => t.type === e);
                null != t && c(t);
            }
            function g(e) {
                let t = i.find((t) => (0, f.E)(t, e));
                null != t && c(t);
            }
            return (
                r.forEach(u),
                ((t = Date.now()),
                n
                    .filter((e) => {
                        let { isConnected: i, lastPlayedAt: n } = e;
                        return i || (null != n && t - n < 7776e6);
                    })
                    .toSorted((e, t) => {
                        if (e.isConnected !== t.isConnected) return e.isConnected ? -1 : 1;
                        let i = t.totalPlayDuration - e.totalPlayDuration;
                        return 0 !== i ? i : (t.lastPlayedAt ?? 0) - (e.lastPlayedAt ?? 0);
                    })
                    .slice(0, 2)
                    .map((e) => {
                        let { applicationId: t } = e;
                        return t;
                    })).forEach(g),
                l && u(b.x.CLIPS_GALLERY),
                s && u(b.x.PERSONAL),
                u(b.x.FAVORITE_GAMES),
                u(b.x.PLAYED_GAMES),
                g("1346069614634864772"),
                u(b.x.CURRENT_GAMES),
                u(b.x.WANT_TO_PLAY_GAMES),
                g("1323482066758930452"),
                o.slice(0, a)
            );
        })({
            addableWidgets: d,
            applicationAffinityData: u,
            hasClips: (0, r.bG)([ie.Ay], () => ie.Ay.hasClips()),
            hasPremium: (0, r.bG)([M.default], () =>
                U.Ay.isPremium(M.default.getCurrentUser(), eM.PremiumTypes.TIER_2),
            ),
            maxWidgetOptions: t,
            promotedWidgetTypes: s ? [b.x.PERSONAL] : [],
        }),
        m = l.useCallback(() => {
            (a({ action: "PRESS_ADD_WIDGET" }),
                (0, ej.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([i.e("376053"), i.e("487697"), i.e("56438")]).then(
                            i.bind(i, 709013),
                        );
                        return (t) => (0, n.jsx)(e, { ...t, trackUserProfileEditAction: a });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [a]);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(nl, { widgets: g, personalWidgetOptionRef: o, trackUserProfileEditAction: a }),
            (0, n.jsx)(eK.$, { text: V.intl.string(V.t["/NKLK5"]), size: "sm", variant: "secondary", onClick: m }),
        ],
    });
}
function nr(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: s } = (0, eQ.NJ)(),
        a = l.useRef(!1),
        o = l.useRef(null),
        c = (0, r.bG)([tc.A], () => tc.A.getUserProfile(t)?.fetchError != null, [t]),
        [u, g] = e3(!c),
        m = u || (0, p.t0)(),
        { enabled: x, maxWidgetOptions: f } = (function (e) {
            let { location: t } = e;
            return i4.useConfig({ location: t });
        })({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        l.useEffect(() => {
            a.current || c || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (a.current = !0));
        }, [c, i]),
        (0, n.jsxs)("div", {
            className: nn.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: nn.FS,
                    children: [
                        (0, n.jsx)(tz.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: V.intl.string(V.t["oqalC+"]),
                        }),
                        (0, n.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: c ? V.intl.string(V.t["+W59o5"]) : V.intl.string(V.t.O9SQ1c),
                        }),
                    ],
                }),
                !c &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            x
                                ? (0, n.jsx)(na, {
                                      maxWidgetOptions: f,
                                      personalWidgetOptionRef: o,
                                      shouldPromotePersonalWidget: m,
                                      trackUserProfileEditAction: s,
                                  })
                                : (0, n.jsx)(ns, { personalWidgetOptionRef: o, trackUserProfileEditAction: s }),
                            (0, n.jsx)(e6, { targetElementRef: o, isVisible: u, markAsDismissed: g }),
                        ],
                    }),
            ],
        })
    );
}
var no = i(366209);
function nd(e) {
    let { widget: t, ...i } = e;
    return t instanceof f.R
        ? (0, n.jsx)(_.A, { widget: t, ...i })
        : t instanceof p.Tu
          ? (0, n.jsx)(ez, { widget: t, ...i })
          : (0, I.fu)(t)
            ? (0, n.jsx)(i7, { widget: t, ...i })
            : t instanceof h.kM
              ? (0, n.jsx)(ia, { widget: t, ...i })
              : null;
}
function nc() {
    return (0, n.jsxs)("div", {
        className: no.mJ,
        children: [
            (0, n.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, n.jsx)(d.E, { variant: "text-xs/normal", color: "text-muted", children: V.intl.string(V.t["7blcz6"]) }),
        ],
    });
}
function nu(e) {
    let { user: t, guildId: i, channelId: s } = e,
        a = (0, w.A)(t.id),
        o = (0, L.A)(t.id),
        d = (function () {
            let [e, t] = (0, r.yK)([x.A], () => [x.A.ipCountryCode, x.A.ipCountryCodeRequest]),
                i = (0, g.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && i && (0, u.xe)();
                }, [e, t, i]),
                "GB" === e && i
            );
        })(),
        h = 0 === a.length && o,
        p = l.useMemo(() => a.filter(I.fu), [a]),
        A = l.useMemo(() => a.filter((e) => e instanceof f.R), [a]);
    function j() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                o &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(te, { className: no.cG }), d && (0, n.jsx)(nc, {}), (0, n.jsx)(ix, {})],
                    }),
                a.map((e, l) =>
                    (0, n.jsx)(
                        nd,
                        { widget: e, user: t, guildId: i, channelId: s, allowEditing: o, index: l },
                        e.getUniqueKey(),
                    ),
                ),
            ],
        });
    }
    return (!(function (e, t) {
        let [i, n, s, a] = (0, r.yK)([v.A], () => [
                v.A.suggestedFetchAttempted,
                v.A.suggestedFetchError,
                v.A.suggestedGameIds,
                v.A.suggestedFetchIsLoading,
            ]),
            { onLoad: o } = y();
        l.useEffect(() => {
            !i && e && E.A.fetchSuggestedGames();
        }, [i, e]);
        let d = i && !a;
        l.useEffect(() => {
            if (!d) return;
            let e = t.map((e) => e.games).flat();
            n || o(s.suggestedGamesIds ?? [], s.suggestedWishlistGamesIds ?? [], e);
        }, [d]);
    })(o, p),
    !(function (e, t) {
        let i = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, c.A)(i);
        let { data: n, refetch: s } = (0, m.P)(e),
            a = l.useRef(null !== n);
        l.useEffect(() => {
            a.current && ((a.current = !1), s());
        }, [s]);
    })(t.id, A),
    h)
        ? (0, n.jsx)(nr, { userId: t.id })
        : o
          ? (0, n.jsx)(tt.D, { children: j() })
          : j();
}
function ng(e) {
    let { user: t, ...i } = e,
        s = l.useRef(null);
    (0, R.i)({ containerRef: s });
    let r = (0, i3.k)(t.id);
    return (0, n.jsxs)(i6.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: a()(no.XG, { [no.az]: r }),
        fade: !0,
        children: [(0, n.jsx)(ih.A, { scrollerRef: s }), (0, n.jsx)(nu, { user: t, ...i })],
    });
}
