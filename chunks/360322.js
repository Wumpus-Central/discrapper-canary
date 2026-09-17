n.d(t, { A: () => ic, u: () => ia });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(885574),
    d = n(834730),
    c = n(429913),
    u = n(277984),
    g = n(840387),
    m = n(201718),
    x = n(615405),
    f = n(633075),
    h = n(646976),
    p = n(289173),
    I = n(210598),
    j = n(311043),
    E = n(569926),
    A = n(958805),
    v = n(61881),
    C = n(435558),
    S = n(196765),
    b = n(540185),
    k = n(282435);
let y = (0, C.sampleSize)(k.sx, k.sx.length),
    T = (0, S.v)((e, t) => ({
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
            Object.values(b.x)))
                t().setNext(6, l);
        },
        setNext: (e, n) => {
            let i = t().getNext(e, n);
            t()._setGameIds(n, i);
            let l = t().peekNext(7, n);
            t()._setPeekedGameIds(n, l);
        },
        getNext: (e, n) => {
            let i = n === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                l = i.slice(0, e),
                s = i.slice(e);
            return (t()._setStack(n, s), l);
        },
        peekNext: (e, n) => (n === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, n) => {
            let i = t().gameIds[n] ?? [],
                l = i.indexOf(e);
            if (-1 === l) return;
            let s = [...i];
            s.splice(l, 1);
            let r = t().getNext(1, n),
                a = t().peekNext(7, n);
            (t()._setGameIds(n, [...s, ...r]), t()._setPeekedGameIds(n, [...a, ...r]));
        },
        bumpMultiple: (e, n) => {
            let i = (t().gameIds[n] ?? []).filter((t) => !e.includes(t)),
                l = t().getNext(6 - i.length, n),
                s = t().peekNext(7, n);
            (t()._setGameIds(n, [...i, ...l]), t()._setPeekedGameIds(n, [...s, ...l]));
        },
        remove: (e, n) => {
            let i = (n === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            (t()._setStack(n, i), t()._setPeekedGameIds(n, t().peekNext(7, n)));
        },
        _setGameIds: (t, n) => {
            e((e) => ({ gameIds: { ...e.gameIds, [t]: n } }));
        },
        _setStack: (t, n) => {
            t === b.x.WANT_TO_PLAY_GAMES ? e({ wishlistStack: n }) : e({ stack: n });
        },
        _setPeekedGameIds: (t, n) => {
            e((e) => ({ peekedGameIds: { ...e.peekedGameIds, [t]: n } }));
        },
    }));
function N(e) {
    let { bump: t, bumpMultiple: n, gameIds: i } = T();
    !(function (e) {
        let { remove: t, peekedGameIds: n } = T(),
            i = l.useMemo(() => n[e] ?? [], [n, e]);
        (0, E.x)(i);
        let s = (0, a.yK)([j.A], () => i.map((e) => j.A.isFetching(e)));
        l.useEffect(() => {
            for (let n of i) {
                let i = j.A.didFetchingFail(n),
                    l = j.A.hasNoData(n),
                    s = !!j.A.getGame(n),
                    r = null != j.A.getCoverImageUrl(n);
                (i || l || (s && !r)) && t(n, e);
            }
        }, [i, t, e, s]);
    })(e);
    let s = l.useMemo(() => i[e] ?? [], [i, e]),
        r = l.useCallback(
            (n) => {
                t(n, e);
            },
            [t, e],
        ),
        o = (0, a.yK)([j.A], () => s.map((e) => j.A.isFetching(e)));
    l.useEffect(() => {
        let t = s.filter((e) => {
            let t = j.A.didFetchingFail(e),
                n = j.A.hasNoData(e),
                i = !!j.A.getGame(e),
                l = null != j.A.getCoverImageUrl(e);
            return t || n || (i && !l);
        });
        t.length > 0 && n(t, e);
    }, [s, e, n, o]);
    let d = l.useMemo(() => s.map((e) => ({ gameId: e })), [s]);
    return { gameIds: s, games: d, onAddGame: r };
}
var R = n(600761),
    w = n(667049),
    L = n(389667),
    P = n(520082),
    _ = n(869484),
    O = n(315629),
    D = n(465794),
    G = n(450232),
    M = n(287809),
    U = n(158045),
    F = n(735321),
    W = n(644346),
    H = n(939249),
    V = n(375708),
    B = n(954165);
function Y(e) {
    let { onClick: t, expanded: n } = e;
    return (0, i.jsx)(H.D, {
        onClick: t,
        className: B.x,
        "aria-expanded": n,
        children: (0, i.jsx)(d.E, {
            variant: "text-sm/medium",
            color: "none",
            children: n ? V.intl.string(V.t["6MwJo/"]) : V.intl.string(V.t.lBeKY2),
        }),
    });
}
var z = n(43990),
    K = n(241326),
    X = n(33969),
    q = n(866665),
    Z = n(245604),
    J = n(601089);
function Q(e) {
    let { label: t, onClick: n, className: l } = e;
    return (0, i.jsx)(q.m, {
        text: t,
        children: (0, i.jsxs)(H.D, {
            className: r()(J.kL, l),
            "aria-label": t,
            onClick: n,
            children: [
                (0, i.jsx)("div", { className: J.n8 }),
                (0, i.jsx)("div", { className: J.zc, children: (0, i.jsx)(Z.U, { size: "sm" }) }),
                (0, i.jsx)("div", { className: J.n8 }),
            ],
        }),
    });
}
var $ = n(448766),
    ee = n(761431),
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
        [r, a] = l.useState(!1),
        [o] = l.useState(() => new Set()),
        d = l.useCallback(
            (e, t) => {
                (t ? o.add(e) : o.delete(e), a(o.size > 0));
            },
            [o],
        ),
        c = l.useMemo(
            () => ({ isExpanded: n, setIsExpanded: s, isAnyFieldClipped: r, setAnyFieldClipped: d }),
            [n, r, d],
        );
    return (0, i.jsx)(en.Provider, { value: c, children: t });
}
function el() {
    return l.useContext(en);
}
var es = n(892572);
function er(e) {
    let { className: t, variant: n, color: s, value: a, maxLines: o, interactive: c = !0, disableMarkdown: u = !1 } = e,
        g = c ? $.d : $.j,
        { textRef: m, lineClamp: x } = (function (e, t) {
            let { isExpanded: n, setAnyFieldClipped: i } = l.useContext(en),
                s = l.useId(),
                r = l.useRef(null),
                a = l.useCallback(() => {
                    let e = r.current;
                    null != e && i(s, e.scrollWidth - e.clientWidth > 1 || e.scrollHeight - e.clientHeight > 1);
                }, [s, i]);
            return (
                (0, et.g)(r, a, [n, t], { fireOnMount: !0, fireOnDepsChange: !0 }),
                l.useEffect(() => () => i(s, !1), [s, i]),
                { textRef: r, lineClamp: n ? void 0 : e }
            );
        })(o, a);
    return (0, i.jsx)(d.E, {
        ref: m,
        className: r()(es.YD, { [es.Lq]: o > 1 }, t),
        variant: n,
        color: s,
        lineClamp: x,
        children: u ? a : g(a),
    });
}
function ea(e) {
    let {
            value: t,
            placeholder: n,
            variant: s,
            color: r,
            onCommit: a,
            maxLength: o,
            maxLines: d,
            growWidth: c,
            disableMarkdown: u,
        } = e,
        g = l.useCallback((e) => a(e.trim()), [a]),
        m = (0, ee.T)({ value: t, onCommit: g }),
        { isExpanded: x } = el(),
        f =
            "" === t.trim()
                ? null
                : (0, i.jsx)(er, { interactive: !1, variant: s, color: r, value: t, maxLines: d, disableMarkdown: u }),
        h = {
            ...m,
            removeVerticalPadding: !0,
            growWidth: c || m.isEditing,
            preview: f,
            placeholder: n,
            editButtonAriaLabel: n,
            label: n,
            maxLength: o,
            className: es.ZZ,
        };
    return 1 === d
        ? (0, i.jsx)(ee.y, { ...h, variant: "compact", textVariant: s })
        : (0, i.jsx)(ee.y, {
              ...h,
              variant: "multiline",
              rows: 1,
              maxRows: m.isInlineSurface && x ? void 0 : d,
              textVariant: s,
          });
}
function eo(e) {
    return e.canEdit
        ? (0, i.jsx)(ea, { ...e })
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
var ed = n(326009),
    ec = n(922016),
    eu = n(22231),
    eg = n(750943),
    em = n(458499);
function ex(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    return (0, i.jsx)(ec.Y, {
        targetElementRef: n,
        align: "right",
        position: "bottom",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(em.A, { lastEdit: t, cropAndUpload: s, onChangeImage: r, onClose: n });
        },
        children: (e) =>
            (0, i.jsx)(X.Y, {
                ...e,
                ref: n,
                icon: eu.PencilIcon,
                variant: "overlay-secondary",
                tooltipText: V.intl.string(V.t.RWkUzH),
                "aria-haspopup": "menu",
                disabled: l,
            }),
    });
}
function ef(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    return null == t
        ? (0, i.jsx)(X.Y, {
              ref: n,
              icon: eg.X,
              variant: "overlay-secondary",
              tooltipText: V.intl.string(V.t.dh0LD5),
              disabled: l,
              onClick: r,
          })
        : (0, i.jsx)(ex, { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r });
}
var eh = n(691540),
    ep = n(857250),
    eI = n(97483),
    ej = n(192308),
    eE = n(765548),
    eA = n(860840),
    ev = n(229531),
    eC = n(515718),
    eS = n(741394),
    eb = n(38405);
function ek(e) {
    let { uploadType: t, returnRef: s, getCropAspectRatio: r, onUploadSuccess: a } = e,
        o = l.useRef(0),
        [d, c] = l.useState(null),
        [u, g] = l.useState(null),
        m = (0, eE.A)(a),
        x = l.useCallback(() => {
            ((o.current = o.current + 1), c(null), g(null));
        }, []),
        f = l.useCallback(
            async (e, t, n, i) => {
                o.current = o.current + 1;
                let l = o.current;
                c(e);
                try {
                    let [s, r] = await Promise.all([
                        A.A.uploadWidgetAsset(t),
                        eA.default.fromBlob(n).catch(() => void 0),
                    ]);
                    if (o.current !== l) return;
                    (c(null),
                        g({ filename: s, unprocessedFile: n, transform: i }),
                        m({ filename: s, localDataUri: e, originalHash: r }));
                } catch (e) {
                    if (o.current !== l) return;
                    (c(null),
                        (0, eh.P0)((0, ep.o)(V.intl.string(V.t.F4Neqh), eI.Ck.FAILURE)),
                        eb.A.captureException(e));
                }
            },
            [m],
        ),
        h = l.useCallback(
            (e) => {
                var t, n;
                let i,
                    l,
                    { imageUri: s, file: r, transform: a } = e,
                    o = (0, eC.aU)(s);
                o.size > 0xa00000
                    ? (0, eh.P0)((0, ep.o)(V.intl.string(V.t.YbdEFK), eI.Ck.FAILURE))
                    : f(
                          s,
                          new File(
                              [o],
                              ((t = r.name),
                              (n = o.type),
                              (i = (0, ev.B)(n) ?? "png"),
                              (l = (0, eS.kh)(t)),
                              `${"" !== l ? l : "image"}.${i}`),
                              { type: o.type },
                          ),
                          r,
                          a,
                      );
            },
            [f],
        );
    return {
        cropAndUpload: l.useCallback(
            (e, l, a) => {
                let o = r?.();
                (0, ej.openModalLazy)(
                    async () => {
                        let { default: r } = await Promise.all([
                            n.e("398791"),
                            n.e("655327"),
                            n.e("67702"),
                            n.e("1214"),
                            n.e("858164"),
                            n.e("427032"),
                            n.e("571470"),
                            n.e("50342"),
                            n.e("463726"),
                            n.e("93513"),
                            n.e("779149"),
                            n.e("507406"),
                            n.e("455524"),
                            n.e("90017"),
                            n.e("489908"),
                            n.e("574571"),
                            n.e("750348"),
                        ]).then(n.bind(n, 142630));
                        return (n) =>
                            (0, i.jsx)(r, {
                                ...n,
                                file: l,
                                imageUri: e,
                                uploadType: t,
                                returnRef: s,
                                initialTransform: a,
                                cropAspectRatio: o,
                                onCrop: h,
                            });
                    },
                    { stackingBehavior: "stack" },
                );
            },
            [h, t, s, r],
        ),
        previewUri: d,
        cancelUpload: x,
        getLastEdit: l.useCallback(
            (e) => (null != u && null != e && "filename" in e && e.filename === u.filename ? u : null),
            [u],
        ),
    };
}
var ey = n(652215),
    eT = n(339984),
    eN = n(148548);
function eR() {
    return (0, i.jsx)(Q, {
        label: V.intl.string(V.t.gQmDk4),
        onClick: function () {
            (0, F.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
        },
        className: eN.GU,
    });
}
function ew(e) {
    let { userId: t, section: n, sectionIndex: s, canEdit: a } = e,
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
    let x = l.useCallback(() => {
            let e = c.current?.getBoundingClientRect();
            return null != e && e.width > 0 && e.height > 0 ? e.width / e.height : void 0;
        }, []),
        {
            cropAndUpload: f,
            previewUri: h,
            cancelUpload: p,
            getLastEdit: j,
        } = ek({
            uploadType: eT.HL.PERSONAL_WIDGET_COVER,
            returnRef: d,
            getCropAspectRatio: x,
            onUploadSuccess: (e) => u((t) => ({ ...t, image: e })),
        });
    function E() {
        (p(), u((e) => ({ ...e, image: void 0 })));
    }
    function A() {
        o.current?.activateUploadDialogue();
    }
    function v() {
        (0, F.AD)((e) => new I.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let C = null != h,
        S = a || "" !== n.title.trim() || "" !== n.subtitle.trim(),
        b = null != n.image || C,
        k = b || a,
        y = j(n.image);
    return (0, i.jsx)(z.N, {
        theme: b ? ey.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: c,
                className: r()(eN.kL, { [eN.Vp]: k }, e),
                children: [
                    a || null != n.image
                        ? (0, i.jsxs)("div", {
                              className: eN.El,
                              children: [
                                  (0, i.jsx)(ed.A, {
                                      cropAndUpload: f,
                                      imageInputRef: o,
                                      className: eN.Sl,
                                      canEdit: a,
                                      userId: t,
                                      image: n.image,
                                      previewUri: h,
                                      editVariant: "tooltip",
                                  }),
                                  b && S ? (0, i.jsx)("div", { className: eN.cw }) : null,
                              ],
                          })
                        : null,
                    a
                        ? (0, i.jsxs)(X.A, {
                              className: eN.o1,
                              children: [
                                  null != n.image
                                      ? (0, i.jsx)(ef, {
                                            lastEdit: y,
                                            buttonRef: d,
                                            disabled: C,
                                            cropAndUpload: f,
                                            onChangeImage: A,
                                        })
                                      : null,
                                  (0, i.jsx)(X.Y, {
                                      icon: K.TrashIcon,
                                      variant: "overlay-secondary",
                                      tooltipText: b ? V.intl.string(V.t.RyK5Ww) : V.intl.string(V.t.g2jVww),
                                      onClick: b ? E : v,
                                  }),
                              ],
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: r()(eN.hQ, e, { [eN.Vp]: k }),
                        children: [
                            (0, i.jsx)(eo, {
                                canEdit: a,
                                growWidth: !0,
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                value: n.title,
                                placeholder: V.intl.string(V.t.KqCDvK),
                                onCommit: g,
                                maxLength: 50,
                                maxLines: 2,
                            }),
                            (0, i.jsx)(eo, {
                                canEdit: a,
                                variant: "text-sm/medium",
                                color: "text-default",
                                value: n.subtitle,
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
n(321073);
var eL = n(661531),
    eP = n(603090);
function e_(e) {
    let { onClick: t, alwaysVisible: n = !1 } = e;
    return (0, i.jsxs)(H.D, {
        onClick: t,
        className: r()(eP.cR, { [eP.mr]: n }),
        children: [
            (0, i.jsx)(eg.X, { size: "xs", color: eL.A.colors.ICON_SUBTLE }),
            (0, i.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", children: V.intl.string(V.t["9AY+/x"]) }),
        ],
    });
}
function eO(e) {
    let { index: t, userId: n, field: l, canEdit: s, onFieldChange: a, onFieldRemove: o } = e,
        {
            cropAndUpload: d,
            previewUri: c,
            cancelUpload: u,
            getLastEdit: g,
        } = ek({
            uploadType: eT.HL.PERSONAL_WIDGET_FIELD,
            onUploadSuccess: (e) => a(l.key, (t) => ({ ...t, image: e })),
        }),
        m = s ? !0 !== l.hideImage : null != l.image;
    return (0, i.jsxs)("div", {
        className: eP.ez,
        children: [
            m
                ? (0, i.jsxs)("div", {
                      className: eP.tF,
                      children: [
                          (0, i.jsx)(ed.A, {
                              className: r()(eP.k9, s ? eP.y2 : void 0),
                              canEdit: s,
                              userId: n,
                              image: l.image,
                              previewUri: c,
                              cropAndUpload: d,
                              editVariant: "overlay",
                              lastEdit: g(l.image),
                          }),
                          s
                              ? (0, i.jsx)(X.A, {
                                    className: eP.ij,
                                    children: (0, i.jsx)(X.Y, {
                                        variant: "overlay-secondary",
                                        tooltipText: V.intl.string(V.t.RyK5Ww),
                                        onClick: function () {
                                            (u(),
                                                a(l.key, (e) =>
                                                    null != e.image
                                                        ? { ...e, image: void 0 }
                                                        : { ...e, image: void 0, hideImage: !0 },
                                                ));
                                        },
                                        icon: K.TrashIcon,
                                    }),
                                })
                              : null,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: eP.oT,
                children: [
                    (0, i.jsx)(eo, {
                        canEdit: s,
                        variant: "text-sm/medium",
                        color: "text-default",
                        value: l.title,
                        placeholder: V.intl.formatToPlainString(V.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            a(l.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 40,
                        maxLines: 2,
                    }),
                    (0, i.jsx)(eo, {
                        canEdit: s,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        value: l.description,
                        placeholder: V.intl.formatToPlainString(V.t.Hs14K3, { number: t + 1 }),
                        onCommit: function (e) {
                            a(l.key, (t) => ({ ...t, description: e }));
                        },
                        maxLength: 90,
                        maxLines: 4,
                    }),
                ],
            }),
            s
                ? (0, i.jsxs)(X.A, {
                      className: eP.Ms,
                      children: [
                          m
                              ? null
                              : (0, i.jsx)(X.Y, {
                                    variant: "overlay-secondary",
                                    tooltipText: V.intl.string(V.t.i3vRzP),
                                    onClick: function () {
                                        a(l.key, (e) => ({ ...e, hideImage: void 0 }));
                                    },
                                    icon: eg.X,
                                }),
                          (0, i.jsx)(X.Y, {
                              variant: "overlay-secondary",
                              tooltipText: V.intl.string(V.t.g2jVww),
                              onClick: function () {
                                  o(l.key);
                              },
                              icon: K.TrashIcon,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eD(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r } = e;
    function a(e) {
        (0, F.AD)((t) => {
            let n = t.sections[l];
            if (n?.type !== _.K.FIELDS) return t;
            let i = [...t.sections];
            return ((i[l] = { ...n, fields: e(n.fields) }), new I.Tu({ ...t, sections: i }));
        });
    }
    function o(e, t) {
        a((n) => {
            let i = n.findIndex((t) => t.key === e),
                l = n[i];
            if (null == l) return n;
            let s = [...n];
            return ((s[i] = t(l)), s);
        });
    }
    function d(e) {
        a((t) => t.filter((t) => t.key !== e));
    }
    function c() {
        a((e) => [...e, (0, I.yL)()]);
    }
    if (0 === n.fields.length) {
        if (!s) return null;
        if (!r)
            return (0, i.jsx)("div", { className: eP.kL, children: (0, i.jsx)(e_, { alwaysVisible: !0, onClick: c }) });
    }
    let u = n.fields.map((e, n) =>
            (0, i.jsx)(eO, { index: n, userId: t, field: e, canEdit: s, onFieldChange: o, onFieldRemove: d }, e.key),
        ),
        g = n.fields.length % 2 == 1;
    s && g && n.fields.length < 4 && u.push((0, i.jsx)(e_, { onClick: c }, "add-entry"));
    let m = s && !g && n.fields.length + 2 <= 4;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u.length > 0 ? (0, i.jsx)("div", { className: eP.kL, children: u }) : null,
            m
                ? (0, i.jsx)(Q, {
                      label: V.intl.string(V.t.t4vU5I),
                      onClick: function () {
                          a((e) => [...e, (0, I.yL)(), (0, I.yL)()]);
                      },
                  })
                : null,
        ],
    });
}
var eG = n(202541),
    eM = n(877068);
let eU = { section: ey.JJy.PERSONAL_WIDGET };
function eF(e) {
    let { widget: t, canEdit: n } = e;
    return (0, i.jsxs)("div", {
        className: eM.wx,
        children: [
            (0, i.jsx)(G.A, { size: "xs", className: eM.nr }),
            (0, i.jsx)(eo, {
                canEdit: n,
                variant: "text-sm/medium",
                color: "text-default",
                value: t.header,
                placeholder: V.intl.string(V.t.fjSaAm),
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
function eW(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r } = e;
    switch (n.type) {
        case _.K.COVER:
            return (0, i.jsx)(ew, { userId: t, section: n, sectionIndex: l, canEdit: s });
        case _.K.FIELDS:
            return (0, i.jsx)(eD, { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r });
    }
}
function eH() {
    return (0, a.bG)([M.default], () => U.Ay.isPremium(M.default.getCurrentUser(), eG.PremiumTypes.TIER_2))
        ? null
        : (0, i.jsxs)("div", {
              className: eM.hc,
              children: [
                  (0, i.jsx)(O.h, { color: "nitro-pink", className: eM.Sp, offsetBottom: -4 }),
                  (0, i.jsxs)("div", {
                      className: eM.LK,
                      children: [
                          (0, i.jsx)(d.E, {
                              variant: "text-xs/semibold",
                              color: "text-strong",
                              children: V.intl.string(V.t.WOPVdz),
                          }),
                          (0, i.jsx)(d.E, {
                              variant: "text-xs/medium",
                              color: "text-default",
                              children: V.intl.string(V.t["55tM3t"]),
                          }),
                      ],
                  }),
                  (0, i.jsx)(D.A, {
                      size: "sm",
                      subscriptionTier: eG.pe.TIER_2,
                      defaultTextOverride: V.intl.string(V.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eU,
                  }),
              ],
          });
}
function eV() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: n } = el();
    return e || t ? (0, i.jsx)(Y, { expanded: t, onClick: () => n((e) => !e) }) : null;
}
function eB(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, index: a, trailingContent: o } = e,
        d = s && !0 !== r,
        c = l.useMemo(() => t.sections.some((e) => e.type === _.K.COVER), [t.sections]);
    return (0, i.jsx)(W.A, {
        userId: n.id,
        widget: t,
        allowEditing: s,
        disableInteraction: r,
        index: a,
        trailingContent: o,
        className: eM.Nr,
        headerClassName: eM.JE,
        children: (0, i.jsxs)("div", {
            className: eM.kL,
            children: [
                (0, i.jsx)(eF, { widget: t, canEdit: d }),
                d && !c ? (0, i.jsx)(eR, {}) : null,
                t.sections.map((e, t) =>
                    (0, i.jsx)(eW, { userId: n.id, section: e, sectionIndex: t, canEdit: d, hasCoverSection: c }, t),
                ),
                (0, i.jsx)(eV, {}),
                d ? (0, i.jsx)(eH, {}) : null,
            ],
        }),
    });
}
function eY(e) {
    return (0, i.jsx)(ei, { children: (0, i.jsx)(eB, { ...e }) });
}
var ez = n(702841),
    eK = n(821609),
    eX = n(403581),
    eq = n(307301),
    eZ = n(37537),
    eJ = n(183555),
    eQ = n(465318),
    e$ = n(384377),
    e0 = n(554146),
    e1 = n(43105),
    e2 = n(131607),
    e8 = n(518477),
    e3 = n(49999);
function e7() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = eQ.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [n, i] = (0, e2.kn)(e && t ? [e0.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [n === e0.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, i];
}
function e5(e) {
    let { targetElementRef: t, isVisible: n, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, eJ.NJ)();
    return n
        ? (0, i.jsx)(e1.A, {
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
              onRequestClose: () => l(e3.i.USER_DISMISS),
              actions: [
                  {
                      text: V.intl.string(V.t.RCy7Px),
                      icon: eX.t,
                      onClick: function () {
                          let e = (0, I.g0)();
                          ((0, F.Y5)(e),
                              s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, e$.XA)(e8.jM.WIDGET_ADDED));
                      },
                  },
              ],
          })
        : null;
}
var e6 = n(410453);
function e4(e) {
    let { buttonRef: t, isCoachmarkVisible: n, markCoachmarkAsDismissed: s } = e,
        { trackUserProfileEditAction: r } = (0, eJ.NJ)(),
        a = l.useCallback(() => {
            n && s(e3.i.TAKE_ACTION);
            let e = (0, I.g0)();
            ((0, F.Y5)(e),
                r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, e$.XA)(e8.jM.WIDGET_ADDED));
        }, [r, n, s]);
    return (0, i.jsx)(eK.$, {
        icon: eX.t,
        text: V.intl.string(V.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function e9(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, eJ.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [c, u] = e7(),
        g = (function () {
            let e = (0, ez.bG)([M.default], () => M.default.getCurrentUser()?.id),
                t = (0, w.A)(e),
                { enabled: n, showCreateEntrypoint: i } = eQ.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === b.x.PERSONAL);
            return n && i && !l;
        })(),
        m = (0, eZ.c)("UserProfileWidgetEditingHeader"),
        x = l.useCallback(() => {
            (c && u(e3.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, ej.openModalLazy)(
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
        className: r()(e6.w, t),
        children: [
            (0, i.jsx)(d.E, {
                className: e6.D,
                variant: m ? "text-sm/semibold" : "text-xs/semibold",
                color: "text-subtle",
                children: V.intl.string(V.t.OYlggR),
            }),
            g ? (0, i.jsx)(e4, { buttonRef: o, isCoachmarkVisible: c, markCoachmarkAsDismissed: u }) : null,
            (0, i.jsx)(eK.$, {
                icon: eq.j,
                text: V.intl.string(V.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: x,
                buttonRef: a,
            }),
            (0, i.jsx)(e5, { targetElementRef: g ? o : a, isVisible: c, markAsDismissed: u }),
        ],
    });
}
var te = n(192),
    tt = n(172218),
    tn = n(408278),
    ti = n(499373),
    tl = n(775602),
    ts = n(793574),
    tr = n(734066),
    ta = n(111994),
    to = n(280450),
    td = n(321191);
function tc(e) {
    return (0, a.bG)(
        [to.default, td.A],
        () => (td.A.getUserProfile(to.default.getId())?.widgets ?? []).some((t) => t.type === e),
        [e],
    );
}
var tu = n(765178),
    tg = n(789645),
    tm = n(614584),
    tx = n(195880),
    tf = n(219222),
    th = n(696016);
async function tp(e, t, n, i, l) {
    let { analyticsLocations: s, source: r, trackEditAction: a } = l,
        o = "exporting";
    try {
        let l = await (0, tm.VO)(e, { analyticsLocations: s });
        if (i.signal.aborted || !(0, F.iu)(t)) return;
        o = "uploading";
        let d = new File([l], "clip.mp4", { type: "video/mp4" }),
            c = await A.A.uploadWidgetClip(d, { onProgress: (e) => (0, tf.Fj)(t, e), signal: i.signal });
        if (!(0, F.WX)(t, c)) return;
        a({
            action: r === e8.IE.PICKER ? "CLIP_ADDED_FROM_PICKER" : "CLIP_ADDED_FROM_SUGGESTED",
            widgetEdited: b.x.CLIPS_GALLERY,
            gameId: n,
        });
    } catch (e) {
        if (i.signal.aborted) return;
        ((0, F.mC)(t),
            th.nx.error("Failed to upload a clip for the clips gallery widget", e),
            (0, eh.P0)((0, ep.o)(V.intl.string(V.t.iufib1), eI.Ck.FAILURE)),
            a({
                action: "exporting" === o ? "CLIP_EXPORT_FAILED" : "CLIP_UPLOAD_FAILED",
                widgetEdited: b.x.CLIPS_GALLERY,
                gameId: n,
            }));
    } finally {
        (0, tf.cG)(t);
    }
}
function tI(e) {
    let { widgetClipId: t, gameId: n, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eJ.NJ)(),
        r = V.intl.string(V.t["4z6ldH"]);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(q.m, {
            text: r,
            ariaHidden: !0,
            children: (0, i.jsx)(tn.K, {
                "aria-label": r,
                icon: tg.P,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, tf._V)(t),
                        (0, F.mC)(t),
                        tu.O.announce(V.intl.string(V.t.VCQXvr)),
                        s({ action: "CLIP_UPLOAD_CANCELED", widgetEdited: b.x.CLIPS_GALLERY, gameId: n }));
                },
            }),
        }),
    });
}
var tj = n(314531);
n(926675);
var tE = n(305866),
    tA = n(123181),
    tv = n(229087),
    tC = n(753437),
    tS = n(382701),
    tb = n(630900);
function tk(e) {
    let { clipId: t, tags: n, allowEditing: s, disableInteraction: r = !1, onEditingChange: a } = e,
        o = s && !r,
        c = l.useMemo(() => n?.filter((e) => null != (0, tC.W3)(e)) ?? [], [n]),
        u = c.length > 0,
        g = o && c.length < 20,
        { trackUserProfileEditAction: m } = (0, eJ.NJ)(),
        x = l.useRef(null),
        f = l.useRef(new Map()),
        h = l.useRef(null),
        p = l.useRef(null),
        I = l.useRef(null),
        [j, E] = l.useState(c.length),
        [A, v] = l.useState(!1),
        [C, S] = l.useState(!1),
        k = A || C;
    (l.useEffect(() => {
        a(k);
    }, [k, a]),
        l.useEffect(() => () => a(!1), [a]));
    let y = l.useCallback(
            (e, n) => {
                ((0, F.$6)(t, e),
                    m({ action: "added" === n ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: b.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        T = l.useCallback(() => {
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
            if (A) return;
            let e = x.current?.getBoundingClientRect().width ?? 0;
            if (0 === e || 0 === c.length) return void E(c.length);
            let t = I.current?.getBoundingClientRect().width ?? 0,
                n = h.current?.getBoundingClientRect().width ?? 0,
                i = e - (t > 0 ? t + 4 : 0),
                l = c.map((e) => f.current.get(e)?.offsetWidth ?? 0);
            function s(e, t) {
                let n = 0;
                for (let t = 0; t < e; t++) n += l[t] + 4 * (t > 0);
                return n <= t;
            }
            if (s(c.length, i)) return void E(c.length);
            let r = i - (n + 4),
                a = 0;
            for (; a < c.length && s(a + 1, r);) a++;
            E(a);
        }, [c, A]);
    (0, et.g)(x, w);
    let L = c.length - j,
        P = L > 0,
        _ = l.useCallback(
            (e) => {
                (1 === L && v(!1), R(e));
            },
            [R, L],
        );
    return u || g
        ? (0, i.jsxs)("div", {
              className: tb.kL,
              ref: x,
              children: [
                  (0, i.jsxs)("ul", {
                      className: tb.xP,
                      "aria-hidden": !0,
                      children: [
                          c.map((e) =>
                              (0, i.jsx)(
                                  tv.A,
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
                          (0, i.jsx)("li", {
                              className: tb.lv,
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
                          className: tb.nM,
                          "aria-label": V.intl.string(V.t["4Rq3a7"]),
                          children: c
                              .slice(0, j)
                              .map((e) =>
                                  (0, i.jsx)(tv.A, { tag: e, variant: "filled", onRemove: o ? () => R(e) : void 0 }, e),
                              ),
                      }),
                  P &&
                      (0, i.jsx)(ty, {
                          buttonRef: p,
                          numHidden: L,
                          isOpen: A,
                          onOpenChange: v,
                          disableInteraction: r,
                          children: c.map((e) =>
                              (0, i.jsx)(tv.A, { tag: e, className: tb.Hl, onRemove: o ? () => _(e) : void 0 }, e),
                          ),
                      }),
                  g && (0, i.jsx)(tA.A, { tags: c, onTagsChange: y, onOpen: T, onClose: N, variant: "filled", ref: I }),
              ],
          })
        : null;
}
function ty(e) {
    let { buttonRef: t, numHidden: n, isOpen: l, onOpenChange: s, disableInteraction: r, children: a } = e,
        o = V.intl.string(V.t.pWHvBI);
    return r
        ? (0, i.jsx)("div", {
              className: `${tb.lv} ${tS.r9}`,
              ref: t,
              children: (0, i.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
          })
        : (0, i.jsx)(ec.Y, {
              targetElementRef: t,
              position: "top",
              align: "left",
              shouldShow: l,
              onRequestOpen: () => s(!0),
              onRequestClose: () => s(!1),
              renderPopout: () =>
                  (0, i.jsx)(tE.l, {
                      className: tb.Kt,
                      "aria-label": o,
                      returnRef: t,
                      children: (0, i.jsx)("ul", { className: tb.ns, children: a }),
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
                          className: tb.lv,
                          children: (0, i.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
                      }),
                  }),
          });
}
var tT = n(3026);
n(600253);
var tN = n(936026);
function tR(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, i.jsx)(d.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(tN.Qw, { [tN.qf]: n }),
        children: (0, i.jsx)(tT.A, { children: t }),
    });
}
function tw(e) {
    let { clipId: t, title: n, onEditingChange: s } = e,
        { trackUserProfileEditAction: a } = (0, eJ.NJ)(),
        o = l.useCallback(
            (e) => {
                let i = e.trim();
                i !== n.trim() &&
                    ((0, F.mI)(t, i),
                    a({ action: "CLIP_TITLE_EDITED", widgetEdited: b.x.CLIPS_GALLERY, numCharacters: i.length }));
            },
            [t, n, a],
        ),
        d = (0, ee.T)({ value: n, onCommit: o }),
        { isEditing: c } = d,
        u = V.intl.string(V.t["2gwc+H"]);
    return (
        l.useEffect(() => {
            s(c);
        }, [c, s]),
        l.useEffect(() => () => s(!1), [s]),
        (0, i.jsx)(ee.y, {
            ...d,
            variant: "compact",
            removeVerticalPadding: !0,
            className: r()(tN.ZZ, { [tN.Dy]: d.isEditing }),
            preview: (0, i.jsxs)("span", {
                className: r()(tN.$, tN.TG),
                children: [
                    (0, i.jsx)(eu.PencilIcon, { size: "xxs", color: "currentColor", className: tN.wz }),
                    "" === n.trim() ? (0, i.jsx)(tR, { value: u, isPlaceholder: !0 }) : (0, i.jsx)(tR, { value: n }),
                ],
            }),
            placeholder: u,
            editButtonAriaLabel: V.intl.string(V.t.PDnM11),
            label: V.intl.string(V.t.PDnM11),
            maxLength: 200,
        })
    );
}
function tL(e) {
    let { clipId: t, title: n, allowEditing: l, onEditingChange: s } = e,
        r = null != n && "" !== n.trim();
    return l || r
        ? l
            ? (0, i.jsx)(tw, { clipId: t, title: n ?? "", onEditingChange: s })
            : (0, i.jsx)("span", { className: tN.$, children: (0, i.jsx)(tR, { value: n ?? "" }) })
        : null;
}
var tP = n(663341),
    t_ = n(451395),
    tO = n(823016);
function tD(e) {
    let { widgetClipId: t, gameId: n, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eJ.NJ)(),
        r = V.intl.string(V.t.ib6Mgx);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(q.m, {
            text: r,
            ariaHidden: !0,
            children: (0, i.jsx)(tn.K, {
                "aria-label": r,
                icon: K.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, F.mC)(t),
                        tu.O.announce(V.intl.string(V.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY, gameId: n }));
                },
            }),
        }),
    });
}
var tG = n(233002);
function tM(e) {
    let { item: t, index: n, isSelected: s, onSelect: a, allowEditing: o } = e,
        { registerDragHandleRef: d, manageFocusOnReorder: c } = (0, tO.r)(),
        { trackUserProfileEditAction: u } = (0, eJ.NJ)(),
        g = l.useRef(null),
        m = l.useCallback(
            (e, t) => {
                e !== t && ((0, F.N5)(e, t), u({ action: "CLIP_REORDERED", widgetEdited: b.x.CLIPS_GALLERY }));
            },
            [u],
        ),
        x = o && ("saved" === t.status || "pending" === t.status),
        f = o && "uploading" === t.status,
        h = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(H.D, {
                    className: r()(tG.Vs, { [tG.wH]: s }),
                    "aria-pressed": s,
                    "aria-label": V.intl.formatToPlainString(V.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, i.jsx)(tj.A, { item: t, ringSize: "sm", className: tG.nC }),
                }),
                x &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(t_.jV, { buttonRef: d(t.key), className: tG.BU }),
                            (0, i.jsx)(tD, { widgetClipId: t.key, gameId: t.gameId, className: tG.nM }),
                        ],
                    }),
                f && (0, i.jsx)(tI, { widgetClipId: t.key, gameId: t.gameId, className: tG.nM }),
            ],
        });
    return (0, i.jsx)("li", {
        ref: g,
        className: tG.NI,
        children: x
            ? (0, i.jsx)(t_.mG, {
                  index: n,
                  itemId: t.key,
                  listType: b.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => g.current?.offsetWidth },
                  "aria-label": V.intl.formatToPlainString(V.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: m,
                  onEnd: () => c(t.key),
                  className: tG.oE,
                  dropBeforeClassName: tG.A,
                  dropAfterClassName: tG.Ze,
                  draggingClassName: tG.Id,
                  children: h,
              })
            : h,
    });
}
function tU(e) {
    let { items: t, selectedKey: n, onSelect: l, onAddClip: s, allowEditing: r = !1 } = e,
        a = Math.max(0, 4 - t.length),
        o = (0, i.jsxs)("ul", {
            className: tG.Xm,
            style: { "--custom-clips-filmstrip-slots": 4 },
            children: [
                t.map((e, t) =>
                    (0, i.jsx)(tM, { item: e, index: t, isSelected: e.key === n, onSelect: l, allowEditing: r }, e.key),
                ),
                null != s &&
                    Array.from({ length: a }, (e, t) =>
                        (0, i.jsx)(
                            "li",
                            {
                                className: tG.NI,
                                children: (0, i.jsx)(H.D, {
                                    className: tG.Yn,
                                    "aria-label": V.intl.string(V.t.rI0i0a),
                                    onClick: s,
                                    children: (0, i.jsx)(tP.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return r ? (0, i.jsx)(tO.B, { emptyListFallbackRef: null, children: o }) : o;
}
var tF = n(729475),
    tW = n(358618),
    tH = n(983851);
function tV(e) {
    let { isMuted: t, onToggleMuted: n, onFullscreen: l } = e,
        s = V.intl.string(V.t.dcl9MQ),
        r = V.intl.string(t ? V.t.YqAjXy : V.t.w4m945);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(q.m, {
                text: s,
                ariaHidden: !0,
                children: (0, i.jsx)(tn.K, {
                    "aria-label": s,
                    icon: tF.T,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: l,
                }),
            }),
            (0, i.jsx)(q.m, {
                text: r,
                ariaHidden: !0,
                children: (0, i.jsx)(tn.K, {
                    "aria-label": r,
                    icon: t ? tW._ : tH.H,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: n,
                }),
            }),
        ],
    });
}
var tB = n(798108),
    tY = n(297264),
    tz = n(915089),
    tK = n(772168);
function tX(e) {
    let { onDismiss: t, children: n, className: l } = e,
        s = (0, tz.GV)();
    return (0, i.jsxs)("aside", {
        className: r()(tK.kL, l),
        "aria-labelledby": s,
        children: [
            (0, i.jsxs)("div", {
                className: tK.wx,
                children: [
                    (0, i.jsx)(H.D, {
                        className: tK.r,
                        "aria-label": V.intl.string(V.t["pUR+3g"]),
                        onClick: t,
                        children: (0, i.jsx)(tg.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(tY.D, {
                        id: s,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: V.intl.string(V.t.zMUr6Z),
                    }),
                ],
            }),
            n,
        ],
    });
}
var tq = n(335978);
function tZ(e) {
    let { clip: t, onAddClip: n } = e,
        s = V.intl.formatToPlainString(V.t.gPRdVj, { clipName: t.name ?? t.applicationName }),
        r = l.useCallback(() => n(t), [t, n]);
    return (0, i.jsx)(q.m, {
        text: s,
        ariaHidden: !0,
        children: (0, i.jsxs)(H.D, {
            className: tq.Vs,
            "aria-label": s,
            onClick: r,
            children: [
                (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: tq.xn, loading: "lazy" }),
                (0, i.jsx)(tP.PlusLargeIcon, { size: "sm", color: "currentColor", className: tq.Xv }),
            ],
        }),
    });
}
function tJ(e) {
    let { clips: t, onAddClip: n, ...l } = e;
    return (0, i.jsx)(tX, {
        ...l,
        children: (0, i.jsx)("ul", {
            className: tq.p_,
            children: t.map((e) =>
                (0, i.jsx)("li", { className: tq.NI, children: (0, i.jsx)(tZ, { clip: e, onAddClip: n }) }, e.id),
            ),
        }),
    });
}
var tQ = n(769015),
    t$ = n(409626),
    t0 = n(692969),
    t1 = n(202163),
    t2 = n(207803),
    t8 = n(591179),
    t3 = n(485745),
    t7 = n(308766);
function t5(e) {
    let { gameId: t, userId: n, className: s } = e,
        { gameRecord: a } = (0, t1.A)(t),
        o = !(0, t8.X)("WidgetClipGameIcon"),
        d = (0, t3.A)(o),
        c = (0, t0.A)({
            location: "WidgetClipGameIcon",
            applicationId: t,
            source: t$.GameProfileSources.UserProfile,
            sourceUserId: n,
        }),
        u = l.useCallback(
            (e) => {
                if (d) {
                    (e.preventDefault(), e.stopPropagation(), (0, t2.VQ)());
                    return;
                }
                c?.(e);
            },
            [d, c],
        ),
        g = a?.name;
    if (null == g) return null;
    let m = (0, i.jsx)(tQ.A, { game: a, size: tQ.M.XSMALL, allowUnknownGameIcon: !1 });
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
                      className: r()(t7.v, s),
                      "aria-label": V.intl.formatToPlainString(V.t["8QLQB+"], { gameName: g }),
                      onClick: u,
                      children: m,
                  }),
    });
}
var t6 = n(558285),
    t4 = n(608857),
    t9 = n(915725),
    ne = n(409067),
    nt = n(716112);
function nn(e) {
    let { onClick: t } = e,
        n = V.intl.string(V.t.rI0i0a);
    return (0, i.jsx)(q.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, i.jsx)(tn.K, { variant: "secondary", size: "sm", icon: ti.T, "aria-label": n, onClick: t }),
    });
}
function ni() {
    return (0, i.jsx)("div", {
        className: nt.p$,
        children: (0, i.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: V.intl.format(V.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function nl(e) {
    let t,
        s,
        { widget: r, user: o, allowEditing: d, disableInteraction: c, ...u } = e,
        [g, m] = l.useState(!1),
        [x, f] = l.useState(!1),
        [h, p] = l.useState(!0),
        I = (0, a.bG)([tl.Ay], () => tl.Ay.useReducedMotion),
        j = (0, tt.K)(f, 0.5),
        [E, A] = l.useState(!1),
        [v, C] = l.useState(!1),
        S = l.useRef(void 0),
        k = (0, t4.A)(r),
        y =
            ((t = (0, a.yK)([t9.Ay], () => Object.values(t9.Ay.getClips()))),
            (s = (0, a.bG)([t9.Ay], () => t9.Ay.getSettings().showPovClipsInGallery)),
            l.useMemo(() => {
                let e = new Set();
                for (let t of r.clips) null != t.localClipId && e.add(t.localClipId);
                return t
                    .filter((t) => !(e.has(t.id) || null == t.applicationId || 0 === t.length || (!s && (0, ne.kD)(t))))
                    .sort((e, t) => {
                        let n = !0 === e.isFavorite;
                        return n !== (!0 === t.isFavorite) ? (n ? -1 : 1) : t.createdAt - e.createdAt;
                    })
                    .slice(0, 3);
            }, [t, s, r.clips])),
        [T, N] = l.useState(null),
        R = k.find((e) => e.key === T) ?? k[0],
        w = (0, tr.sw)(),
        { trackUserProfileAction: L, trackUserProfileEditAction: P } = (0, eJ.NJ)(),
        _ = d && !0 !== c,
        O = 0 === k.length,
        D = k.length >= 4,
        G = _ && w && !D,
        M = _ || k.length > 1,
        [U] = l.useState(() => y.length >= 3),
        [B, Y] = l.useState(!1),
        z = tc(r.type),
        K = G && !z && U && !B && y.length > 0,
        X = l.useCallback(() => {
            (Y(!0), P({ action: "DISMISS_SUGGESTED_CLIPS", widgetEdited: b.x.CLIPS_GALLERY }));
        }, [P]),
        q = l.useCallback(
            (e) => {
                (N(e), e !== R?.key && L({ action: "SELECT_CLIP", widgetType: b.x.CLIPS_GALLERY }));
            },
            [R?.key, L],
        ),
        Z = l.useMemo(() => (!0 === c ? [] : k.filter(t4.K)), [k, c]),
        J = null != R ? Z.findIndex((e) => e.key === R.key) : -1,
        Q = l.useCallback(() => {
            J < 0 ||
                (L({ action: "PRESS_PLAY_CLIP", widgetType: b.x.CLIPS_GALLERY }),
                (0, t6.A)({ clips: Z, startingIndex: J }));
        }, [Z, J, L]),
        $ = l.useCallback(() => {
            let e = !h;
            (p(e), L({ action: e ? "MUTE_CLIP_PREVIEW" : "UNMUTE_CLIP_PREVIEW", widgetType: b.x.CLIPS_GALLERY }));
        }, [h, L]),
        ee = l.useCallback(() => {
            if (J < 0) return;
            let e = Z[(J + 1) % Z.length];
            null != e && N(e.key);
        }, [Z, J]),
        et = J >= 0 && !I && x,
        en = (et || g) && !E && !v,
        ei = l.useCallback(() => {
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
                let n = (function (e, t) {
                    if (null == e.applicationId)
                        return ((0, eh.P0)((0, ep.o)(V.intl.string(V.t.xcLXWy), eI.Ck.FAILURE)), null);
                    let n = (0, tx.m)();
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
                    return ((0, tf.yf)(n, i), tp(e, n, e.applicationId, i, t), n);
                })(e, { analyticsLocations: [ts.A.USER_PROFILE_MODAL_V2], source: t, trackEditAction: P });
                null != n && N(n);
            },
            [P],
        ),
        er = l.useCallback((e) => es(e, e8.IE.SUGGESTED), [es]),
        ea = l.useCallback(() => {
            (P({ action: "PRESS_ADD_CLIP", widgetEdited: b.x.CLIPS_GALLERY }),
                (0, ej.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("440065"),
                            n.e("251714"),
                            n.e("860350"),
                            n.e("180644"),
                            n.e("821717"),
                            n.e("269714"),
                            n.e("19385"),
                            n.e("398104"),
                            n.e("553829"),
                            n.e("606859"),
                            n.e("865257"),
                            n.e("318196"),
                            n.e("323079"),
                            n.e("437655"),
                            n.e("430877"),
                            n.e("48055"),
                            n.e("808915"),
                            n.e("586467"),
                            n.e("875842"),
                            n.e("883952"),
                            n.e("858337"),
                            n.e("3131"),
                            n.e("918024"),
                            n.e("220287"),
                            n.e("324761"),
                            n.e("203930"),
                            n.e("903663"),
                            n.e("8563"),
                            n.e("647177"),
                            n.e("169201"),
                            n.e("111527"),
                            n.e("496268"),
                            n.e("127272"),
                            n.e("466147"),
                            n.e("838090"),
                            n.e("122266"),
                            n.e("501962"),
                            n.e("901922"),
                            n.e("583518"),
                            n.e("237715"),
                            n.e("974049"),
                            n.e("280559"),
                            n.e("895008"),
                            n.e("352566"),
                            n.e("489492"),
                            n.e("689160"),
                            n.e("231782"),
                            n.e("520342"),
                            n.e("771453"),
                            n.e("194676"),
                        ]).then(n.bind(n, 671884));
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                initialMainLink: ta.oH.ALL_CLIPS,
                                onClipClick: (e) => {
                                    (((e) => es(e, e8.IE.PICKER))(e), t.onClose());
                                },
                            });
                    },
                    { modalKey: th.nm },
                ));
        }, [es, P]);
    return (0, i.jsx)(W.A, {
        userId: o.id,
        widget: r,
        allowEditing: d,
        disableInteraction: c,
        headerTitle: (0, F.L)(r),
        headerSubtitle: _ && !O ? V.intl.format(V.t.pb2Was, { numClips: 4 }) : void 0,
        headerActionButtons: G && O ? [(0, i.jsx)(nn, { onClick: ea }, "clips-gallery-add-clip")] : void 0,
        trailingContent:
            K &&
            (0, i.jsx)("div", {
                className: nt.$k,
                children: (0, i.jsx)(tJ, { clips: y, onAddClip: er, onDismiss: X }),
            }),
        ...u,
        children:
            null != R
                ? (0, i.jsxs)("div", {
                      className: nt.nV,
                      children: [
                          (0, i.jsxs)("div", {
                              ref: j,
                              className: nt.aM,
                              onMouseEnter: ei,
                              onMouseLeave: el,
                              children: [
                                  (0, i.jsx)(tj.A, {
                                      item: R,
                                      ringSize: "lg",
                                      isPlaying: en,
                                      isMuted: h,
                                      fit: "contain",
                                      onEnded: Z.length > 1 ? ee : void 0,
                                      className: nt.VH,
                                  }),
                                  J >= 0 &&
                                      !E &&
                                      !v &&
                                      (0, i.jsx)(H.D, {
                                          className: nt.Hf,
                                          "aria-label": V.intl.string(V.t.CscLHM),
                                          onClick: Q,
                                      }),
                                  ("saved" === R.status || "pending" === R.status) &&
                                      (0, i.jsx)(t5, { gameId: R.gameId, userId: o.id, className: nt.AT }),
                                  _ &&
                                      "uploading" === R.status &&
                                      (0, i.jsx)(tI, { widgetClipId: R.key, gameId: R.gameId, className: nt.MY }),
                                  _
                                      ? ("saved" === R.status || "pending" === R.status) &&
                                        (0, i.jsx)("div", {
                                            className: nt.nP,
                                            children: (0, i.jsx)(tD, { widgetClipId: R.key, gameId: R.gameId }),
                                        })
                                      : J >= 0 &&
                                        (0, i.jsx)("div", {
                                            className: nt.nP,
                                            children: (0, i.jsx)(tV, { isMuted: h, onToggleMuted: $, onFullscreen: Q }),
                                        }),
                                  (0, i.jsx)(tB.A, {
                                      children:
                                          ("saved" === R.status || "pending" === R.status) &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(tL, {
                                                      clipId: R.key,
                                                      title: R.title,
                                                      allowEditing: _,
                                                      onEditingChange: A,
                                                  }),
                                                  (0, i.jsx)(tk, {
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
                              (0, i.jsx)(tU, {
                                  items: k,
                                  selectedKey: R.key,
                                  onSelect: q,
                                  onAddClip: G ? ea : void 0,
                                  allowEditing: _,
                              }),
                      ],
                  })
                : (0, i.jsx)(ni, {}),
    });
}
var ns = n(704824),
    nr = n(382483),
    na = n(385113),
    no = n(334074),
    nd = n(657718),
    nc = n(478016);
function nu(e) {
    let { user: t, application: n, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eJ.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, F.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, e$.XA)(e8.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, i.jsx)(P.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, i.jsx)(P.A.Cta, {
            showSuggestedForYou: !0,
            heading: V.intl.format(V.t.OIzLCy, { applicationName: n.name }),
            content: V.intl.format(V.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(q.m, {
                        text: V.intl.string(V.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(nd.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tg.P,
                            "aria-label": V.intl.string(V.t.WAI6xu),
                            onClick: () => {
                                s(e3.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(q.m, {
                        text: V.intl.string(V.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(nd.S, {
                            variant: "primary",
                            size: "sm",
                            icon: nc.U,
                            "aria-label": V.intl.formatToPlainString(V.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                (s(e3.i.TAKE_ACTION), o());
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function ng() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([na.A], () => na.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, nr.Wq)();
        }, []);
        let t = (0, a.bG)([M.default], () => M.default.getCurrentUser()),
            n = (0, c.A)(e),
            { tokens: i, fetched: s } = (0, ns.j)(e),
            r = (0, w.A)(t?.id),
            o = null == t || null == e || null == i || !s,
            d = l.useMemo(
                () =>
                    o
                        ? []
                        : n.filter(
                              (e) =>
                                  !(null == e || r.some((t) => t instanceof f.R && t.applicationId === e.id)) &&
                                  null != i.find((t) => t.application.id === e.id),
                          ),
                [o, n, i, r],
            ),
            { eligibleToShow: u, markAsDismissed: g } = (0, no.hj)({
                applications: d,
                dismissibleContent: e0.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: no.SH,
            }),
            m = l.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = n[0];
    return null == r ? null : (0, i.jsx)(nu, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var nm = n(128988),
    nx = n(896170),
    nf = n(453318),
    nh = n(321108),
    np = n(383329),
    nI = n(67710);
function nj(e) {
    let { widgetType: t, widget: n, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: d } = (0, eJ.NJ)(),
        [c, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, np.R)({ query: c }),
        f = c.trim().length > 0,
        { gameIds: h, onAddGame: p } = N(t),
        I = (0, nh.A)(h),
        j = l.useCallback(
            (e) => {
                ((0, F.ew)({ widgetType: t, game: { gameId: e } }),
                    tu.O.announce(V.intl.string(V.t.q0U3DE)),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    h.includes(e) && p(e),
                    s?.());
            },
            [t, d, s, h, p],
        ),
        E = l.useMemo(() => {
            let e = new Map(
                m.map((e) => [
                    String(e.value),
                    { id: String(e.value), value: String(e.value), label: e.label, disabled: o.has(e.value) },
                ]),
            );
            if (f) return [...e.values()];
            let t = I.filter((e) => !o.has(e.id) && (0, F.XX)(e)).map((e) => ({
                    id: String(e.id),
                    value: String(e.id),
                    label: e.name,
                    disabled: !1,
                })),
                n = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !n.has(e.id))];
        }, [m, o, I, f]),
        A = l.useCallback((e) => e, []),
        v = l.useMemo(() => ({ ...x, threshold: nx.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        C = l.useCallback((e) => (f || "" === e.trim() ? E.length : (0, nx.Ht)(E, e, v).length), [f, E, v]),
        S = l.useCallback(
            (e) => {
                let n = e.target.value;
                ("" === c.trim() &&
                    "" !== n.trim() &&
                    d({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: C(n),
                    }),
                    u(n),
                    (g.current = n));
            },
            [c, d, t, C],
        );
    return (0, i.jsx)(ec.Y, {
        ...a,
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
            return (0, i.jsx)(tE.l, {
                className: nI.C,
                "aria-label": V.intl.string(V.t.uqw8wK),
                children: (0, i.jsxs)(nf.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: E,
                    matchSorterOptions: v,
                    customMatchSorter: f ? A : void 0,
                    children: [
                        (0, i.jsx)(nf.a3, {
                            label: V.intl.string(V.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: V.intl.string(V.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: S,
                        }),
                        (0, i.jsx)(nf.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function nE(e) {
    let { disabled: t, ...n } = e,
        s = l.useRef(null);
    return (0, i.jsx)(nj, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...n,
        children: (e) =>
            (0, i.jsx)(q.m, {
                text: V.intl.string(V.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, i.jsx)(tn.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: ti.T,
                    "aria-label": V.intl.string(V.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function nA(e) {
    let t = l.useRef(null);
    return (0, i.jsx)(nj, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, i.jsx)(H.D, {
                innerRef: t,
                className: nI.c,
                "aria-label": V.intl.string(V.t.PYyENc),
                ...e,
                children: (0, i.jsx)(tP.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let nv = l.createContext(null);
function nC(e) {
    let { widgetType: t, children: n } = e,
        s = (0, a.bG)([v.A], () => {
            let e = v.A.getPendingWidgets();
            if (null == e) return !1;
            let n = e.find((e) => e.type === t);
            if (null == n) return !1;
            let i = (0, F.cv)(t);
            return n.games.length > i;
        }),
        [r, o] = l.useState(s);
    return (0, i.jsx)(nv.Provider, { value: { expanded: r, setExpanded: o }, children: n });
}
function nS() {
    let e = l.useContext(nv);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var nb = n(67438);
function nk(e) {
    let { widget: t } = e,
        n = (0, F.cv)(t.type),
        l = 1 === n,
        s = l ? V.intl.string(V.t["3FdPBT"]) : V.intl.format(V.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? nb.O : nb.k,
        children: [
            l && (0, i.jsx)(nA, { widget: t, widgetType: t.type }),
            (0, i.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var ny = n(683071),
    nT = n(312252);
function nN(e) {
    let { widgetType: t, gameCount: n } = e,
        l = (0, F.cv)(t);
    return n <= l
        ? null
        : (0, i.jsx)("div", {
              role: "alert",
              className: nT.l,
              children: (0, i.jsx)(ny.w, {
                  type: "warning",
                  children: V.intl.formatToPlainString(V.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var nR = n(943793),
    nw = n(148420);
function nL(e) {
    let { games: t, user: n, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tO.r)();
    return (0, i.jsx)("ul", {
        className: nw.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(nR.A, {
                        index: t,
                        user: n,
                        game: e,
                        widgetType: l,
                        coverRef: r(e.gameId),
                        onRemoveGame: a,
                        ...s,
                    }),
                },
                e.gameId,
            ),
        ),
    });
}
function nP(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, te.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = nS(),
        c = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nL, { ...e, games: c }),
                u && (0, i.jsx)(Y, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(nN, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tO.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function n_(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nP, {
                      user: t,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nk, { widget: n }),
    });
}
function nO(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e,
        d = n.games[0];
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            null != d
                ? (0, i.jsx)(nR.A, {
                      user: t,
                      widgetType: n.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nk, { widget: n }),
    });
}
var nD = n(793693);
function nG(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: nD.V,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var nM = n(686246),
    nU = n(201438),
    nF = n(788593),
    nW = n(858808),
    nH = n(365611),
    nV = n(900850);
function nB(e) {
    let { index: t, widgetType: n, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, tO.r)(),
        c = l.useRef(null);
    return (0, i.jsx)(t_.mG, {
        index: t,
        itemId: s.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => c.current?.offsetWidth },
        "aria-label": V.intl.formatToPlainString(V.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, F.Un)(n, e, t),
        onEnd: () => d(s.gameId),
        className: nV.kL,
        dropBeforeClassName: nV.A,
        dropAfterClassName: nV.Ze,
        draggingClassName: nV.Id,
        children: (0, i.jsx)("div", { ref: c, className: nV.An, children: o }),
    });
}
function nY(e) {
    let {
            game: t,
            userId: n,
            widgetType: l,
            allowEditing: s,
            disableInteraction: r = !1,
            index: a,
            onRemoveGame: o,
            coverRef: d,
        } = e,
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, nU.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tO.r)(),
        x = s && !r,
        { isDragging: f } = (0, nM.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nF.A, {
                    imageSrc: c,
                    gameName: u,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: r,
                    className: null == c || r ? void 0 : nH.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, i.jsx)(t_.jV, { buttonRef: m(t.gameId), className: nV.BU }),
                x && (0, i.jsx)(nW.A, { game: t, widgetType: l, className: nV.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, i.jsx)("div", { className: nH.mD })
        : x
          ? (0, i.jsx)(nB, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, i.jsx)("div", { className: nV.kL, children: h() });
}
function nz(e) {
    let { games: t, userId: n, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tO.r)();
    return (0, i.jsx)(nG, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(nY, {
                index: t,
                game: e,
                userId: n,
                widgetType: l,
                allowEditing: s,
                disableInteraction: r,
                coverRef: a(e.gameId),
                onRemoveGame: o,
            }),
    });
}
function nK(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, te.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = nS(),
        c = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nz, { ...e, games: c }),
                u && (0, i.jsx)(Y, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(nN, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tO.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nX(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nK, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nk, { widget: n }),
    });
}
function nq(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nK, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nk, { widget: n }),
    });
}
var nZ = n(875620);
function nJ(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, nU.A)(t),
        d = (0, a.bG)([v.A], () => v.A.suggestedFetchIsLoading),
        c = V.intl.formatToPlainString(V.t["3mb1s5"], { game: r });
    return o || d
        ? (0, i.jsx)("div", { className: nH.mD })
        : (0, i.jsx)(q.m, {
              text: c,
              ariaHidden: !0,
              children: (0, i.jsxs)(H.D, {
                  className: nZ.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, i.jsx)(nF.A, {
                          className: nZ.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(tP.PlusLargeIcon, { size: "md", className: nZ.Xv, color: eL.A.colors.WHITE }),
                  ],
              }),
          });
}
function nQ(e) {
    let { userId: t, widgetType: n, ...s } = e,
        { games: r, onAddGame: a } = N(n),
        { setExpanded: o } = nS(),
        { trackUserProfileEditAction: d } = (0, eJ.NJ)(),
        c = l.useCallback(
            (e) => {
                (a(e),
                    o(!0),
                    (0, F.ew)({ widgetType: n, game: { gameId: e } }),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: n }));
            },
            [a, n, d, o],
        );
    return (0, i.jsx)(tX, {
        ...s,
        children: (0, i.jsx)("ul", {
            className: nZ.Vg,
            children: r.map((e) => {
                let { gameId: n } = e;
                return (0, i.jsx)("li", { children: (0, i.jsx)(nJ, { onClick: () => c(n), userId: t, gameId: n }) }, n);
            }),
        }),
    });
}
var n$ = n(870961);
function n0(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, i.jsx)(nO, { widget: t, ...n });
        case b.x.CURRENT_GAMES:
            return (0, i.jsx)(n_, { widget: t, ...n });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(nq, { widget: t, ...n });
        case b.x.PLAYED_GAMES:
            return (0, i.jsx)(nX, { widget: t, ...n });
        default:
            return null;
    }
}
function n1(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, ...a } = e,
        { setExpanded: o } = nS(),
        { shouldShowSuggestions: d, handleDismissSuggestions: c } = (function (e) {
            let [t, n] = l.useState(!1),
                i = tc(e.type),
                s = (0, F.uA)(e);
            return {
                shouldShowSuggestions: !i && !t && !s,
                handleDismissSuggestions: l.useCallback(() => {
                    n(!0);
                }, []),
            };
        })(t),
        u = s && !r,
        g = u && d,
        m = (0, F.L)(t),
        x = (0, F.FM)(t, { showEditingControls: u }),
        f = (0, F.uA)(t),
        h = 1 === (0, F.cv)(t.type);
    return (0, i.jsx)(n0, {
        widget: t,
        user: n,
        allowEditing: s,
        disableInteraction: r,
        headerTitle: m,
        headerSubtitle: x,
        headerActionButtons:
            u && !h
                ? [
                      (0, i.jsx)(
                          nE,
                          { disabled: f, widgetType: t.type, widget: t, onAddGame: () => o(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: g && (0, i.jsx)(nQ, { userId: n.id, widgetType: t.type, onDismiss: c, className: n$.r }),
        ...a,
    });
}
function n2(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(nC, { widgetType: t.type, children: (0, i.jsx)(n1, { widget: t, ...n }) });
}
var n8 = n(669253),
    n3 = n(140355);
n(839272);
let n7 = (0, n(945810).mj)({
    name: "2026-09-profile-widget-empty-state-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1, maxWidgetOptions: 0 },
    variations: { 1: { enabled: !0, maxWidgetOptions: 4 }, 2: { enabled: !0, maxWidgetOptions: 6 } },
});
var n5 = n(96173),
    n6 = n(661439),
    n4 = n(90165),
    n9 = n(788259),
    ie = n(269507);
function it(e) {
    let { widgets: t, trackUserProfileEditAction: n, personalWidgetOptionRef: l } = e;
    return (0, i.jsx)("ul", {
        className: ie.ZW,
        "aria-label": V.intl.string(V.t["+EIBSA"]),
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                {
                    ref: e.type === b.x.PERSONAL ? l : void 0,
                    children: (0, i.jsx)(n9.A, { widget: e, size: "small", trackUserProfileEditAction: n }),
                },
                e.getUniqueKey(),
            ),
        ),
    });
}
function ii(e) {
    let { trackUserProfileEditAction: t, personalWidgetOptionRef: n } = e,
        l = (0, n5.A)();
    return (0, i.jsx)(it, { widgets: l, personalWidgetOptionRef: n, trackUserProfileEditAction: t });
}
function il(e) {
    let {
            maxWidgetOptions: t,
            shouldPromotePersonalWidget: s,
            trackUserProfileEditAction: r,
            personalWidgetOptionRef: o,
        } = e,
        d = (0, n5.A)(),
        u = (function (e) {
            let t = (0, a.bG)([na.A], () => na.A.getFeaturedApplicationIds()),
                n = l.useMemo(() => {
                    let n = new Set(t);
                    return e
                        .filter((e) => e instanceof f.R)
                        .map((e) => e.applicationId)
                        .filter((e) => n.has(e));
                }, [t, e]),
                i = (0, c.A)(n),
                s = l.useMemo(() => n.map((e, t) => i[t]?.parentId ?? e), [n, i]),
                { tokens: r } = (0, ns.j)(s);
            l.useEffect(() => {
                (0, n6.X)();
            }, []);
            let o = l.useMemo(() => i.map((e) => e?.getCanonicalGameId() ?? null), [i]),
                d = (0, a.yK)([n4.A], () => o.map((e) => (null != e ? n4.A.getGameDuration(e) : 0))),
                u = (0, a.yK)([n4.A], () => o.map((e) => (null != e ? n4.A.getLastPlayedDateTime(e) : null)));
            return l.useMemo(() => {
                let e = new Set(r.map((e) => e.application.id)),
                    t = [];
                for (let i = 0; i < n.length; i++)
                    t.push({
                        applicationId: n[i],
                        isConnected: e.has(s[i]),
                        totalPlayDuration: d[i] ?? 0,
                        lastPlayedAt: u[i] ?? null,
                    });
                return t;
            }, [n, s, u, r, d]);
        })(d),
        g = (function (e) {
            let t,
                {
                    addableWidgets: n,
                    applicationAffinityData: i,
                    hasClips: l,
                    hasPremium: s,
                    maxWidgetOptions: r,
                    promotedWidgetTypes: a,
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
                let t = n.find((t) => (0, f.E)(t, e));
                null != t && c(t);
            }
            return (
                a.forEach(u),
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
                l && u(b.x.CLIPS_GALLERY),
                s && u(b.x.PERSONAL),
                u(b.x.FAVORITE_GAMES),
                u(b.x.PLAYED_GAMES),
                g("1346069614634864772"),
                u(b.x.CURRENT_GAMES),
                u(b.x.WANT_TO_PLAY_GAMES),
                g("1323482066758930452"),
                o.slice(0, r)
            );
        })({
            addableWidgets: d,
            applicationAffinityData: u,
            hasClips: (0, a.bG)([t9.Ay], () => t9.Ay.hasClips()),
            hasPremium: (0, a.bG)([M.default], () =>
                U.Ay.isPremium(M.default.getCurrentUser(), eG.PremiumTypes.TIER_2),
            ),
            maxWidgetOptions: t,
            promotedWidgetTypes: s ? [b.x.PERSONAL] : [],
        }),
        m = l.useCallback(() => {
            (r({ action: "PRESS_ADD_WIDGET" }),
                (0, ej.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("376053"), n.e("487697"), n.e("56438")]).then(
                            n.bind(n, 709013),
                        );
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: r });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [r]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(it, { widgets: g, personalWidgetOptionRef: o, trackUserProfileEditAction: r }),
            (0, i.jsx)(eK.$, { text: V.intl.string(V.t["/NKLK5"]), size: "sm", variant: "secondary", onClick: m }),
        ],
    });
}
function is(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: s } = (0, eJ.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        c = (0, a.bG)([td.A], () => td.A.getUserProfile(t)?.fetchError != null, [t]),
        [u, g] = e7(!c),
        m = u || (0, I.t0)(),
        { enabled: x, maxWidgetOptions: f } = (function (e) {
            let { location: t } = e;
            return n7.useConfig({ location: t });
        })({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        l.useEffect(() => {
            r.current || c || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [c, n]),
        (0, i.jsxs)("div", {
            className: ie.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: ie.FS,
                    children: [
                        (0, i.jsx)(tY.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: V.intl.string(V.t["oqalC+"]),
                        }),
                        (0, i.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: c ? V.intl.string(V.t["+W59o5"]) : V.intl.string(V.t.O9SQ1c),
                        }),
                    ],
                }),
                !c &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            x
                                ? (0, i.jsx)(il, {
                                      maxWidgetOptions: f,
                                      personalWidgetOptionRef: o,
                                      shouldPromotePersonalWidget: m,
                                      trackUserProfileEditAction: s,
                                  })
                                : (0, i.jsx)(ii, { personalWidgetOptionRef: o, trackUserProfileEditAction: s }),
                            (0, i.jsx)(e5, { targetElementRef: o, isVisible: u, markAsDismissed: g }),
                        ],
                    }),
            ],
        })
    );
}
var ir = n(366209);
function ia(e) {
    let { widget: t, ...n } = e;
    return t instanceof f.R
        ? (0, i.jsx)(P.A, { widget: t, ...n })
        : t instanceof I.Tu
          ? (0, i.jsx)(eY, { widget: t, ...n })
          : (0, p.fu)(t)
            ? (0, i.jsx)(n2, { widget: t, ...n })
            : t instanceof h.kM
              ? (0, i.jsx)(nl, { widget: t, ...n })
              : null;
}
function io() {
    return (0, i.jsxs)("div", {
        className: ir.mJ,
        children: [
            (0, i.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(d.E, { variant: "text-xs/normal", color: "text-muted", children: V.intl.string(V.t["7blcz6"]) }),
        ],
    });
}
function id(e) {
    let { user: t, guildId: n, channelId: s } = e,
        r = (0, w.A)(t.id),
        o = (0, L.A)(t.id),
        d = (function () {
            let [e, t] = (0, a.yK)([x.A], () => [x.A.ipCountryCode, x.A.ipCountryCodeRequest]),
                n = (0, g.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, u.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        h = 0 === r.length && o,
        I = l.useMemo(() => r.filter(p.fu), [r]),
        j = l.useMemo(() => r.filter((e) => e instanceof f.R), [r]);
    function E() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(e9, { className: ir.cG }), d && (0, i.jsx)(io, {}), (0, i.jsx)(ng, {})],
                    }),
                r.map((e, l) =>
                    (0, i.jsx)(
                        ia,
                        { widget: e, user: t, guildId: n, channelId: s, allowEditing: o, index: l },
                        e.getUniqueKey(),
                    ),
                ),
            ],
        });
    }
    return (!(function (e, t) {
        let [n, i, s, r] = (0, a.yK)([v.A], () => [
                v.A.suggestedFetchAttempted,
                v.A.suggestedFetchError,
                v.A.suggestedGameIds,
                v.A.suggestedFetchIsLoading,
            ]),
            { onLoad: o } = T();
        l.useEffect(() => {
            !n && e && A.A.fetchSuggestedGames();
        }, [n, e]);
        let d = n && !r;
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
            r = l.useRef(null !== i);
        l.useEffect(() => {
            r.current && ((r.current = !1), s());
        }, [s]);
    })(t.id, j),
    h)
        ? (0, i.jsx)(is, { userId: t.id })
        : o
          ? (0, i.jsx)(te.D, { children: E() })
          : E();
}
function ic(e) {
    let { user: t, ...n } = e,
        s = l.useRef(null);
    (0, R.i)({ containerRef: s });
    let a = (0, n8.k)(t.id);
    return (0, i.jsxs)(n3.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(ir.XG, { [ir.az]: a }),
        fade: !0,
        children: [(0, i.jsx)(nm.A, { scrollerRef: s }), (0, i.jsx)(id, { user: t, ...n })],
    });
}
