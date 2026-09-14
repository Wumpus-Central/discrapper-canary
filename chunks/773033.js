n.d(t, { A: () => it, u: () => n4 });
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
    A = n(569926),
    E = n(958805),
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
        (0, A.x)(i);
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
    W = n(735321),
    F = n(623280),
    H = n(939249),
    V = n(375708),
    B = n(954165);
function z(e) {
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
var Y = n(43990),
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
    eA = n(765548),
    eE = n(860840),
    ev = n(229531),
    eC = n(515718),
    eS = n(741394),
    eb = n(38405);
function ek(e) {
    let { uploadType: t, returnRef: s, getCropAspectRatio: r, onUploadSuccess: a } = e,
        o = l.useRef(0),
        [d, c] = l.useState(null),
        [u, g] = l.useState(null),
        m = (0, eA.A)(a),
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
                        E.A.uploadWidgetAsset(t),
                        eE.default.fromBlob(n).catch(() => void 0),
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
            (0, W.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
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
        (0, W.AD)((t) => {
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
    function A() {
        (p(), u((e) => ({ ...e, image: void 0 })));
    }
    function E() {
        o.current?.activateUploadDialogue();
    }
    function v() {
        (0, W.AD)((e) => new I.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let C = null != h,
        S = a || "" !== n.title.trim() || "" !== n.subtitle.trim(),
        b = null != n.image || C,
        k = b || a,
        y = j(n.image);
    return (0, i.jsx)(Y.N, {
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
                                            onChangeImage: E,
                                        })
                                      : null,
                                  (0, i.jsx)(X.Y, {
                                      icon: K.TrashIcon,
                                      variant: "overlay-secondary",
                                      tooltipText: b ? V.intl.string(V.t.RyK5Ww) : V.intl.string(V.t.g2jVww),
                                      onClick: b ? A : v,
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
        (0, W.AD)((t) => {
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
function eW(e) {
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
                    (0, W.AD)((t) => new I.Tu({ ...t, header: e }));
                },
                maxLength: 50,
                maxLines: 1,
                disableMarkdown: !0,
            }),
        ],
    });
}
function eF(e) {
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
    return e || t ? (0, i.jsx)(z, { expanded: t, onClick: () => n((e) => !e) }) : null;
}
function eB(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, index: a, trailingContent: o } = e,
        d = s && !0 !== r,
        c = l.useMemo(() => t.sections.some((e) => e.type === _.K.COVER), [t.sections]);
    return (0, i.jsx)(F.A, {
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
                (0, i.jsx)(eW, { widget: t, canEdit: d }),
                d && !c ? (0, i.jsx)(eR, {}) : null,
                t.sections.map((e, t) =>
                    (0, i.jsx)(eF, { userId: n.id, section: e, sectionIndex: t, canEdit: d, hasCoverSection: c }, t),
                ),
                (0, i.jsx)(eV, {}),
                d ? (0, i.jsx)(eH, {}) : null,
            ],
        }),
    });
}
function ez(e) {
    return (0, i.jsx)(ei, { children: (0, i.jsx)(eB, { ...e }) });
}
var eY = n(702841),
    eK = n(821609),
    eX = n(403581),
    eq = n(307301),
    eZ = n(37537),
    eJ = n(183555),
    eQ = n(465318),
    e$ = n(384377),
    e0 = n(554146),
    e1 = n(43105),
    e8 = n(131607),
    e2 = n(518477),
    e7 = n(49999);
function e3() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = eQ.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [n, i] = (0, e8.kn)(e && t ? [e0.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
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
              onRequestClose: () => l(e7.i.USER_DISMISS),
              actions: [
                  {
                      text: V.intl.string(V.t.RCy7Px),
                      icon: eX.t,
                      onClick: function () {
                          let e = (0, I.g0)();
                          ((0, W.Y5)(e),
                              s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, e$.XA)(e2.jM.WIDGET_ADDED));
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
            n && s(e7.i.TAKE_ACTION);
            let e = (0, I.g0)();
            ((0, W.Y5)(e),
                r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, e$.XA)(e2.jM.WIDGET_ADDED));
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
        [c, u] = e3(),
        g = (function () {
            let e = (0, eY.bG)([M.default], () => M.default.getCurrentUser()?.id),
                t = (0, w.A)(e),
                { enabled: n, showCreateEntrypoint: i } = eQ.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === b.x.PERSONAL);
            return n && i && !l;
        })(),
        m = (0, eZ.c)("UserProfileWidgetEditingHeader"),
        x = l.useCallback(() => {
            (c && u(e7.i.TAKE_ACTION),
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
    tm = n(219222);
function tx(e) {
    let { widgetClipId: t, className: n } = e,
        l = V.intl.string(V.t["4z6ldH"]);
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(q.m, {
            text: l,
            ariaHidden: !0,
            children: (0, i.jsx)(tn.K, {
                "aria-label": l,
                icon: tg.P,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, tm.SG)(t), tu.O.announce(V.intl.string(V.t.VCQXvr)));
                },
            }),
        }),
    });
}
var tf = n(314531);
n(926675);
var th = n(305866),
    tp = n(123181),
    tI = n(229087),
    tj = n(753437),
    tA = n(382701),
    tE = n(630900);
function tv(e) {
    let { clipId: t, tags: n, allowEditing: s, disableInteraction: r = !1, onEditingChange: a } = e,
        o = s && !r,
        c = l.useMemo(() => n?.filter((e) => null != (0, tj.W3)(e)) ?? [], [n]),
        u = c.length > 0,
        g = o && c.length < 20,
        { trackUserProfileEditAction: m } = (0, eJ.NJ)(),
        x = l.useRef(null),
        f = l.useRef(new Map()),
        h = l.useRef(null),
        p = l.useRef(null),
        I = l.useRef(null),
        [j, A] = l.useState(c.length),
        [E, v] = l.useState(!1),
        [C, S] = l.useState(!1),
        k = E || C;
    (l.useEffect(() => {
        a(k);
    }, [k, a]),
        l.useEffect(() => () => a(!1), [a]));
    let y = l.useCallback(
            (e, n) => {
                ((0, W.$6)(t, e),
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
                ((0, W.Fo)(t, e), m({ action: "TAG_REMOVED", widgetEdited: b.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        w = l.useCallback(() => {
            if (E) return;
            let e = x.current?.getBoundingClientRect().width ?? 0;
            if (0 === e || 0 === c.length) return void A(c.length);
            let t = I.current?.getBoundingClientRect().width ?? 0,
                n = h.current?.getBoundingClientRect().width ?? 0,
                i = e - (t > 0 ? t + 4 : 0),
                l = c.map((e) => f.current.get(e)?.offsetWidth ?? 0);
            function s(e, t) {
                let n = 0;
                for (let t = 0; t < e; t++) n += l[t] + 4 * (t > 0);
                return n <= t;
            }
            if (s(c.length, i)) return void A(c.length);
            let r = i - (n + 4),
                a = 0;
            for (; a < c.length && s(a + 1, r);) a++;
            A(a);
        }, [c, E]);
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
              className: tE.kL,
              ref: x,
              children: [
                  (0, i.jsxs)("ul", {
                      className: tE.xP,
                      "aria-hidden": !0,
                      children: [
                          c.map((e) =>
                              (0, i.jsx)(
                                  tI.A,
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
                              className: tE.lv,
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
                          className: tE.nM,
                          "aria-label": V.intl.string(V.t["4Rq3a7"]),
                          children: c
                              .slice(0, j)
                              .map((e) =>
                                  (0, i.jsx)(tI.A, { tag: e, variant: "filled", onRemove: o ? () => R(e) : void 0 }, e),
                              ),
                      }),
                  P &&
                      (0, i.jsx)(tC, {
                          buttonRef: p,
                          numHidden: L,
                          isOpen: E,
                          onOpenChange: v,
                          disableInteraction: r,
                          children: c.map((e) =>
                              (0, i.jsx)(tI.A, { tag: e, className: tE.Hl, onRemove: o ? () => _(e) : void 0 }, e),
                          ),
                      }),
                  g && (0, i.jsx)(tp.A, { tags: c, onTagsChange: y, onOpen: T, onClose: N, variant: "filled", ref: I }),
              ],
          })
        : null;
}
function tC(e) {
    let { buttonRef: t, numHidden: n, isOpen: l, onOpenChange: s, disableInteraction: r, children: a } = e,
        o = V.intl.string(V.t.pWHvBI);
    return r
        ? (0, i.jsx)("div", {
              className: `${tE.lv} ${tA.r9}`,
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
                  (0, i.jsx)(th.l, {
                      className: tE.Kt,
                      "aria-label": o,
                      returnRef: t,
                      children: (0, i.jsx)("ul", { className: tE.ns, children: a }),
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
                          className: tE.lv,
                          children: (0, i.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
                      }),
                  }),
          });
}
var tS = n(3026);
n(600253);
var tb = n(936026);
function tk(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, i.jsx)(d.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(tb.Qw, { [tb.qf]: n }),
        children: (0, i.jsx)(tS.A, { children: t }),
    });
}
function ty(e) {
    let { clipId: t, title: n, onEditingChange: s } = e,
        { trackUserProfileEditAction: a } = (0, eJ.NJ)(),
        o = l.useCallback(
            (e) => {
                let i = e.trim();
                i !== n.trim() &&
                    ((0, W.mI)(t, i),
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
            className: r()(tb.ZZ, { [tb.Dy]: d.isEditing }),
            preview: (0, i.jsxs)("span", {
                className: r()(tb.$, tb.TG),
                children: [
                    (0, i.jsx)(eu.PencilIcon, { size: "xxs", color: "currentColor", className: tb.wz }),
                    "" === n.trim() ? (0, i.jsx)(tk, { value: u, isPlaceholder: !0 }) : (0, i.jsx)(tk, { value: n }),
                ],
            }),
            placeholder: u,
            editButtonAriaLabel: V.intl.string(V.t.PDnM11),
            label: V.intl.string(V.t.PDnM11),
            maxLength: 200,
        })
    );
}
function tT(e) {
    let { clipId: t, title: n, allowEditing: l, onEditingChange: s } = e,
        r = null != n && "" !== n.trim();
    return l || r
        ? l
            ? (0, i.jsx)(ty, { clipId: t, title: n ?? "", onEditingChange: s })
            : (0, i.jsx)("span", { className: tb.$, children: (0, i.jsx)(tk, { value: n ?? "" }) })
        : null;
}
var tN = n(663341),
    tR = n(451395),
    tw = n(823016),
    tL = n(282988);
function tP(e) {
    let { widgetClipId: t, className: n } = e,
        { trackUserProfileEditAction: l } = (0, eJ.NJ)(),
        s = V.intl.string(V.t.ib6Mgx);
    return (0, i.jsx)("div", {
        className: n,
        children: (0, i.jsx)(q.m, {
            text: s,
            ariaHidden: !0,
            children: (0, i.jsx)(tn.K, {
                "aria-label": s,
                icon: K.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, W.mC)(t),
                        (0, tL.UE)(t),
                        tu.O.announce(V.intl.string(V.t.zyPNb3)),
                        l({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY }));
                },
            }),
        }),
    });
}
var t_ = n(233002);
function tO(e) {
    let { item: t, index: n, isSelected: s, onSelect: a, allowEditing: o } = e,
        { registerDragHandleRef: d, manageFocusOnReorder: c } = (0, tw.r)(),
        { trackUserProfileEditAction: u } = (0, eJ.NJ)(),
        g = l.useRef(null),
        m = l.useCallback(
            (e, t) => {
                e !== t && ((0, W.N5)(e, t), u({ action: "CLIP_REORDERED", widgetEdited: b.x.CLIPS_GALLERY }));
            },
            [u],
        ),
        x = o && ("saved" === t.status || "pending" === t.status),
        f = o && ("exporting" === t.status || "uploading" === t.status),
        h = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(H.D, {
                    className: r()(t_.Vs, { [t_.wH]: s }),
                    "aria-pressed": s,
                    "aria-label": V.intl.formatToPlainString(V.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, i.jsx)(tf.A, { item: t, ringSize: "sm", className: t_.nC }),
                }),
                x &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tR.jV, { buttonRef: d(t.key), className: t_.BU }),
                            (0, i.jsx)(tP, { widgetClipId: t.key, className: t_.nM }),
                        ],
                    }),
                f && (0, i.jsx)(tx, { widgetClipId: t.key, className: t_.nM }),
            ],
        });
    return (0, i.jsx)("li", {
        ref: g,
        className: t_.NI,
        children: x
            ? (0, i.jsx)(tR.mG, {
                  index: n,
                  itemId: t.key,
                  listType: b.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => g.current?.offsetWidth },
                  "aria-label": V.intl.formatToPlainString(V.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: m,
                  onEnd: () => c(t.key),
                  className: t_.oE,
                  dropBeforeClassName: t_.A,
                  dropAfterClassName: t_.Ze,
                  draggingClassName: t_.Id,
                  children: h,
              })
            : h,
    });
}
function tD(e) {
    let { items: t, selectedKey: n, onSelect: l, onAddClip: s, allowEditing: r = !1 } = e,
        a = Math.max(0, 4 - t.length),
        o = (0, i.jsxs)("ul", {
            className: t_.Xm,
            style: { "--custom-clips-filmstrip-slots": 4 },
            children: [
                t.map((e, t) =>
                    (0, i.jsx)(tO, { item: e, index: t, isSelected: e.key === n, onSelect: l, allowEditing: r }, e.key),
                ),
                null != s &&
                    Array.from({ length: a }, (e, t) =>
                        (0, i.jsx)(
                            "li",
                            {
                                className: t_.NI,
                                children: (0, i.jsx)(H.D, {
                                    className: t_.Yn,
                                    "aria-label": V.intl.string(V.t.rI0i0a),
                                    onClick: s,
                                    children: (0, i.jsx)(tN.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return r ? (0, i.jsx)(tw.B, { emptyListFallbackRef: null, children: o }) : o;
}
var tG = n(729475),
    tM = n(358618),
    tU = n(983851);
function tW(e) {
    let { isMuted: t, onToggleMuted: n, onFullscreen: l } = e,
        s = V.intl.string(V.t.OIDkcp),
        r = V.intl.string(t ? V.t.YqAjXy : V.t.w4m945);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(q.m, {
                text: s,
                ariaHidden: !0,
                children: (0, i.jsx)(tn.K, {
                    "aria-label": s,
                    icon: tG.T,
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
                    icon: t ? tM._ : tU.H,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: n,
                }),
            }),
        ],
    });
}
var tF = n(798108),
    tH = n(297264),
    tV = n(915089),
    tB = n(772168);
function tz(e) {
    let { onDismiss: t, children: n, className: l } = e,
        s = (0, tV.GV)();
    return (0, i.jsxs)("aside", {
        className: r()(tB.kL, l),
        "aria-labelledby": s,
        children: [
            (0, i.jsxs)("div", {
                className: tB.wx,
                children: [
                    (0, i.jsx)(H.D, {
                        className: tB.r,
                        "aria-label": V.intl.string(V.t["pUR+3g"]),
                        onClick: t,
                        children: (0, i.jsx)(tg.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(tH.D, {
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
var tY = n(335978);
function tK(e) {
    let { clip: t, onAddClip: n } = e,
        s = V.intl.formatToPlainString(V.t.gPRdVj, { clipName: t.name ?? t.applicationName }),
        r = l.useCallback(() => n(t), [t, n]);
    return (0, i.jsx)(q.m, {
        text: s,
        ariaHidden: !0,
        children: (0, i.jsxs)(H.D, {
            className: tY.Vs,
            "aria-label": s,
            onClick: r,
            children: [
                (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: tY.xn, loading: "lazy" }),
                (0, i.jsx)(tN.PlusLargeIcon, { size: "sm", color: "currentColor", className: tY.Xv }),
            ],
        }),
    });
}
function tX(e) {
    let { clips: t, onAddClip: n, ...l } = e;
    return (0, i.jsx)(tz, {
        ...l,
        children: (0, i.jsx)("ul", {
            className: tY.p_,
            children: t.map((e) =>
                (0, i.jsx)("li", { className: tY.NI, children: (0, i.jsx)(tK, { clip: e, onAddClip: n }) }, e.id),
            ),
        }),
    });
}
var tq = n(769015),
    tZ = n(202163);
function tJ(e) {
    let { gameId: t, className: n } = e,
        { gameRecord: l } = (0, tZ.A)(t),
        s = l?.name;
    return null == s
        ? null
        : (0, i.jsx)(q.m, {
              text: s,
              ariaHidden: !0,
              children: (0, i.jsx)("div", {
                  className: n,
                  children: (0, i.jsx)(tq.A, { game: l, size: tq.M.XSMALL, allowUnknownGameIcon: !1 }),
              }),
          });
}
var tQ = n(558285),
    t$ = n(608857),
    t0 = n(915725),
    t1 = n(409067),
    t8 = n(696016),
    t2 = n(716112);
function t7(e) {
    let { onClick: t } = e,
        n = V.intl.string(V.t.rI0i0a);
    return (0, i.jsx)(q.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, i.jsx)(tn.K, { variant: "secondary", size: "sm", icon: ti.T, "aria-label": n, onClick: t }),
    });
}
function t3() {
    return (0, i.jsx)("div", {
        className: t2.p$,
        children: (0, i.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: V.intl.format(V.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function t5(e) {
    let t,
        s,
        r,
        { widget: o, user: d, allowEditing: c, disableInteraction: u, ...g } = e,
        [m, x] = l.useState(!1),
        [f, h] = l.useState(!1),
        [p, I] = l.useState(!0),
        j = (0, a.bG)([tl.Ay], () => tl.Ay.useReducedMotion),
        A = (0, tt.K)(h, 0.5),
        [E, v] = l.useState(!1),
        [C, S] = l.useState(!1),
        k = l.useRef(void 0),
        y = (0, t$.A)(o),
        T =
            ((t = (0, a.yK)([t0.Ay], () => Object.values(t0.Ay.getClips()))),
            (s = (0, a.bG)([t0.Ay], () => t0.Ay.getSettings().showPovClipsInGallery)),
            (r = (0, tL.UQ)()),
            l.useMemo(() => {
                let e = new Set(Array.from(r.values(), (e) => e.clip.id));
                for (let t of o.clips) null != t.localClipId && e.add(t.localClipId);
                return t
                    .filter((t) => !(e.has(t.id) || null == t.applicationId || 0 === t.length || (!s && (0, t1.kD)(t))))
                    .sort((e, t) => {
                        let n = !0 === e.isFavorite;
                        return n !== (!0 === t.isFavorite) ? (n ? -1 : 1) : t.createdAt - e.createdAt;
                    })
                    .slice(0, 3);
            }, [t, r, s, o.clips])),
        [N, R] = l.useState(null),
        w = y.find((e) => e.key === N) ?? y[0],
        L = (0, tr.sw)(),
        { trackUserProfileAction: P, trackUserProfileEditAction: _ } = (0, eJ.NJ)(),
        O = c && !0 !== u,
        D = 0 === y.length,
        G = y.length >= 4,
        M = O && L && !G,
        U = O || y.length > 1,
        [B] = l.useState(() => T.length >= 3),
        [z, Y] = l.useState(!1),
        K = tc(o.type),
        X = M && !K && B && !z && T.length > 0,
        q = l.useCallback(() => {
            (Y(!0), _({ action: "DISMISS_SUGGESTED_CLIPS", widgetEdited: b.x.CLIPS_GALLERY }));
        }, [_]),
        Z = l.useCallback(
            (e) => {
                (R(e), e !== w?.key && P({ action: "SELECT_CLIP", widgetType: b.x.CLIPS_GALLERY }));
            },
            [w?.key, P],
        ),
        J = l.useMemo(() => (!0 === u ? [] : y.filter(t$.K)), [y, u]),
        Q = null != w ? J.findIndex((e) => e.key === w.key) : -1,
        $ = l.useCallback(() => {
            Q < 0 ||
                (P({ action: "PRESS_PLAY_CLIP", widgetType: b.x.CLIPS_GALLERY }),
                (0, tQ.A)({ clips: J, startingIndex: Q }));
        }, [J, Q, P]),
        ee = l.useCallback(() => {
            let e = !p;
            (I(e), P({ action: e ? "MUTE_CLIP_PREVIEW" : "UNMUTE_CLIP_PREVIEW", widgetType: b.x.CLIPS_GALLERY }));
        }, [p, P]),
        et = l.useCallback(() => {
            if (Q < 0) return;
            let e = J[(Q + 1) % J.length];
            null != e && R(e.key);
        }, [J, Q]),
        en = Q >= 0 && !j && f,
        ei = en || m,
        el = l.useCallback(() => {
            Q < 0 ||
                en ||
                (k.current = window.setTimeout(() => {
                    (x(!0), P({ action: "HOVER_PLAY_CLIP", widgetType: b.x.CLIPS_GALLERY }));
                }, 150));
        }, [en, Q, P]),
        es = l.useCallback(() => {
            (window.clearTimeout(k.current), x(!1));
        }, []);
    l.useEffect(() => () => window.clearTimeout(k.current), []);
    let er = l.useCallback(
            (e, t) => {
                let n = (0, tL._A)(e, {
                    analyticsLocations: [ts.A.USER_PROFILE_MODAL_V2],
                    source: t,
                    trackEditAction: _,
                });
                null != n && R(n);
            },
            [_],
        ),
        ea = l.useCallback((e) => er(e, e2.IE.SUGGESTED), [er]),
        eo = l.useCallback(() => {
            (_({ action: "PRESS_ADD_CLIP", widgetEdited: b.x.CLIPS_GALLERY }),
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
                                    (((e) => er(e, e2.IE.PICKER))(e), t.onClose());
                                },
                            });
                    },
                    { modalKey: t8.nm },
                ));
        }, [er, _]);
    return (0, i.jsx)(F.A, {
        userId: d.id,
        widget: o,
        allowEditing: c,
        disableInteraction: u,
        headerTitle: (0, W.L)(o),
        headerActionButtons: M && D ? [(0, i.jsx)(t7, { onClick: eo }, "clips-gallery-add-clip")] : void 0,
        trailingContent:
            X &&
            (0, i.jsx)("div", {
                className: t2.$k,
                children: (0, i.jsx)(tX, { clips: T, onAddClip: ea, onDismiss: q }),
            }),
        ...g,
        children:
            null != w
                ? (0, i.jsxs)("div", {
                      className: t2.nV,
                      children: [
                          (0, i.jsxs)("div", {
                              ref: A,
                              className: t2.aM,
                              onMouseEnter: el,
                              onMouseLeave: es,
                              children: [
                                  (0, i.jsx)(tf.A, {
                                      item: w,
                                      ringSize: "lg",
                                      isPlaying: ei,
                                      isMuted: p,
                                      fit: "contain",
                                      onEnded: J.length > 1 ? et : void 0,
                                      className: t2.VH,
                                  }),
                                  Q >= 0 &&
                                      !E &&
                                      !C &&
                                      (0, i.jsx)(H.D, {
                                          className: t2.Hf,
                                          "aria-label": V.intl.string(V.t.CscLHM),
                                          onClick: $,
                                      }),
                                  ("saved" === w.status || "pending" === w.status) &&
                                      (0, i.jsx)(tJ, { gameId: w.gameId, className: t2.AT }),
                                  O &&
                                      ("exporting" === w.status || "uploading" === w.status) &&
                                      (0, i.jsx)(tx, { widgetClipId: w.key, className: t2.MY }),
                                  O
                                      ? ("saved" === w.status || "pending" === w.status) &&
                                        (0, i.jsx)("div", {
                                            className: t2.nP,
                                            children: (0, i.jsx)(tP, { widgetClipId: w.key }),
                                        })
                                      : Q >= 0 &&
                                        (0, i.jsx)("div", {
                                            className: t2.nP,
                                            children: (0, i.jsx)(tW, {
                                                isMuted: p,
                                                onToggleMuted: ee,
                                                onFullscreen: $,
                                            }),
                                        }),
                                  (0, i.jsx)(tF.A, {
                                      children:
                                          ("saved" === w.status || "pending" === w.status) &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(tT, {
                                                      clipId: w.key,
                                                      title: w.title,
                                                      allowEditing: O,
                                                      onEditingChange: v,
                                                  }),
                                                  (0, i.jsx)(tv, {
                                                      clipId: w.key,
                                                      tags: w.tags,
                                                      allowEditing: c,
                                                      disableInteraction: u,
                                                      onEditingChange: S,
                                                  }),
                                              ],
                                          }),
                                  }),
                              ],
                          }),
                          U &&
                              (0, i.jsx)(tD, {
                                  items: y,
                                  selectedKey: w.key,
                                  onSelect: Z,
                                  onAddClip: M ? eo : void 0,
                                  allowEditing: O,
                              }),
                      ],
                  })
                : (0, i.jsx)(t3, {}),
    });
}
var t6 = n(704824),
    t4 = n(382483),
    t9 = n(385113),
    ne = n(334074),
    nt = n(657718),
    nn = n(478016);
function ni(e) {
    let { user: t, application: n, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eJ.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, W.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, e$.XA)(e2.jM.WIDGET_ADDED));
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
                        children: (0, i.jsx)(nt.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tg.P,
                            "aria-label": V.intl.string(V.t.WAI6xu),
                            onClick: () => {
                                s(e7.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(q.m, {
                        text: V.intl.string(V.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(nt.S, {
                            variant: "primary",
                            size: "sm",
                            icon: nn.U,
                            "aria-label": V.intl.formatToPlainString(V.t.KfGahB, { applicationName: n.name }),
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
function nl() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([t9.A], () => t9.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, t4.Wq)();
        }, []);
        let t = (0, a.bG)([M.default], () => M.default.getCurrentUser()),
            n = (0, c.A)(e),
            { tokens: i, fetched: s } = (0, t6.j)(e),
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
            { eligibleToShow: u, markAsDismissed: g } = (0, ne.hj)({
                applications: d,
                dismissibleContent: e0.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: ne.SH,
            }),
            m = l.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = n[0];
    return null == r ? null : (0, i.jsx)(ni, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var ns = n(128988),
    nr = n(896170),
    na = n(453318),
    no = n(321108),
    nd = n(383329),
    nc = n(67710);
function nu(e) {
    let { widgetType: t, widget: n, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: d } = (0, eJ.NJ)(),
        [c, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, nd.R)({ query: c }),
        f = c.trim().length > 0,
        { gameIds: h, onAddGame: p } = N(t),
        I = (0, no.A)(h),
        j = l.useCallback(
            (e) => {
                ((0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    tu.O.announce(V.intl.string(V.t.q0U3DE)),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    h.includes(e) && p(e),
                    s?.());
            },
            [t, d, s, h, p],
        ),
        A = l.useMemo(() => {
            let e = new Map(
                m.map((e) => [
                    String(e.value),
                    { id: String(e.value), value: String(e.value), label: e.label, disabled: o.has(e.value) },
                ]),
            );
            if (f) return [...e.values()];
            let t = I.filter((e) => !o.has(e.id) && (0, W.XX)(e)).map((e) => ({
                    id: String(e.id),
                    value: String(e.id),
                    label: e.name,
                    disabled: !1,
                })),
                n = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !n.has(e.id))];
        }, [m, o, I, f]),
        E = l.useCallback((e) => e, []),
        v = l.useMemo(() => ({ ...x, threshold: nr.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        C = l.useCallback((e) => (f || "" === e.trim() ? A.length : (0, nr.Ht)(A, e, v).length), [f, A, v]),
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
            return (0, i.jsx)(th.l, {
                className: nc.C,
                "aria-label": V.intl.string(V.t.uqw8wK),
                children: (0, i.jsxs)(na.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: A,
                    matchSorterOptions: v,
                    customMatchSorter: f ? E : void 0,
                    children: [
                        (0, i.jsx)(na.a3, {
                            label: V.intl.string(V.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: V.intl.string(V.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: S,
                        }),
                        (0, i.jsx)(na.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function ng(e) {
    let { disabled: t, ...n } = e,
        s = l.useRef(null);
    return (0, i.jsx)(nu, {
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
function nm(e) {
    let t = l.useRef(null);
    return (0, i.jsx)(nu, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, i.jsx)(H.D, {
                innerRef: t,
                className: nc.c,
                "aria-label": V.intl.string(V.t.PYyENc),
                ...e,
                children: (0, i.jsx)(tN.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let nx = l.createContext(null);
function nf(e) {
    let { widgetType: t, children: n } = e,
        s = (0, a.bG)([v.A], () => {
            let e = v.A.getPendingWidgets();
            if (null == e) return !1;
            let n = e.find((e) => e.type === t);
            if (null == n) return !1;
            let i = (0, W.cv)(t);
            return n.games.length > i;
        }),
        [r, o] = l.useState(s);
    return (0, i.jsx)(nx.Provider, { value: { expanded: r, setExpanded: o }, children: n });
}
function nh() {
    let e = l.useContext(nx);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var np = n(67438);
function nI(e) {
    let { widget: t } = e,
        n = (0, W.cv)(t.type),
        l = 1 === n,
        s = l ? V.intl.string(V.t["3FdPBT"]) : V.intl.format(V.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? np.O : np.k,
        children: [
            l && (0, i.jsx)(nm, { widget: t, widgetType: t.type }),
            (0, i.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var nj = n(683071),
    nA = n(312252);
function nE(e) {
    let { widgetType: t, gameCount: n } = e,
        l = (0, W.cv)(t);
    return n <= l
        ? null
        : (0, i.jsx)("div", {
              role: "alert",
              className: nA.l,
              children: (0, i.jsx)(nj.w, {
                  type: "warning",
                  children: V.intl.formatToPlainString(V.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var nv = n(943793),
    nC = n(148420);
function nS(e) {
    let { games: t, user: n, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tw.r)();
    return (0, i.jsx)("ul", {
        className: nC.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(nv.A, {
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
function nb(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, te.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = nh(),
        c = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nS, { ...e, games: c }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(nE, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tw.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nk(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nb, {
                      user: t,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nI, { widget: n }),
    });
}
function ny(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e,
        d = n.games[0];
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            null != d
                ? (0, i.jsx)(nv.A, {
                      user: t,
                      widgetType: n.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nI, { widget: n }),
    });
}
var nT = n(793693);
function nN(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: nT.V,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var nR = n(686246),
    nw = n(201438),
    nL = n(788593),
    nP = n(858808),
    n_ = n(365611),
    nO = n(900850);
function nD(e) {
    let { index: t, widgetType: n, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, tw.r)(),
        c = l.useRef(null);
    return (0, i.jsx)(tR.mG, {
        index: t,
        itemId: s.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => c.current?.offsetWidth },
        "aria-label": V.intl.formatToPlainString(V.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, W.Un)(n, e, t),
        onEnd: () => d(s.gameId),
        className: nO.kL,
        dropBeforeClassName: nO.A,
        dropAfterClassName: nO.Ze,
        draggingClassName: nO.Id,
        children: (0, i.jsx)("div", { ref: c, className: nO.An, children: o }),
    });
}
function nG(e) {
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
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, nw.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tw.r)(),
        x = s && !r,
        { isDragging: f } = (0, nR.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nL.A, {
                    imageSrc: c,
                    gameName: u,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: r,
                    className: null == c || r ? void 0 : n_.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, i.jsx)(tR.jV, { buttonRef: m(t.gameId), className: nO.BU }),
                x && (0, i.jsx)(nP.A, { game: t, widgetType: l, className: nO.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, i.jsx)("div", { className: n_.mD })
        : x
          ? (0, i.jsx)(nD, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, i.jsx)("div", { className: nO.kL, children: h() });
}
function nM(e) {
    let { games: t, userId: n, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tw.r)();
    return (0, i.jsx)(nN, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(nG, {
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
function nU(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, te.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = nh(),
        c = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nM, { ...e, games: c }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(nE, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tw.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nW(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nU, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nI, { widget: n }),
    });
}
function nF(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nU, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nI, { widget: n }),
    });
}
var nH = n(875620);
function nV(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, nw.A)(t),
        d = (0, a.bG)([v.A], () => v.A.suggestedFetchIsLoading),
        c = V.intl.formatToPlainString(V.t["3mb1s5"], { game: r });
    return o || d
        ? (0, i.jsx)("div", { className: n_.mD })
        : (0, i.jsx)(q.m, {
              text: c,
              ariaHidden: !0,
              children: (0, i.jsxs)(H.D, {
                  className: nH.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, i.jsx)(nL.A, {
                          className: nH.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(tN.PlusLargeIcon, { size: "md", className: nH.Xv, color: eL.A.colors.WHITE }),
                  ],
              }),
          });
}
function nB(e) {
    let { userId: t, widgetType: n, ...s } = e,
        { games: r, onAddGame: a } = N(n),
        { setExpanded: o } = nh(),
        { trackUserProfileEditAction: d } = (0, eJ.NJ)(),
        c = l.useCallback(
            (e) => {
                (a(e),
                    o(!0),
                    (0, W.ew)({ widgetType: n, game: { gameId: e } }),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: n }));
            },
            [a, n, d, o],
        );
    return (0, i.jsx)(tz, {
        ...s,
        children: (0, i.jsx)("ul", {
            className: nH.Vg,
            children: r.map((e) => {
                let { gameId: n } = e;
                return (0, i.jsx)("li", { children: (0, i.jsx)(nV, { onClick: () => c(n), userId: t, gameId: n }) }, n);
            }),
        }),
    });
}
var nz = n(870961);
function nY(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, i.jsx)(ny, { widget: t, ...n });
        case b.x.CURRENT_GAMES:
            return (0, i.jsx)(nk, { widget: t, ...n });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(nF, { widget: t, ...n });
        case b.x.PLAYED_GAMES:
            return (0, i.jsx)(nW, { widget: t, ...n });
        default:
            return null;
    }
}
function nK(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, ...a } = e,
        { setExpanded: o } = nh(),
        { shouldShowSuggestions: d, handleDismissSuggestions: c } = (function (e) {
            let [t, n] = l.useState(!1),
                i = tc(e.type),
                s = (0, W.uA)(e);
            return {
                shouldShowSuggestions: !i && !t && !s,
                handleDismissSuggestions: l.useCallback(() => {
                    n(!0);
                }, []),
            };
        })(t),
        u = s && !r,
        g = u && d,
        m = (0, W.L)(t),
        x = (0, W.FM)(t, { showEditingControls: u }),
        f = (0, W.uA)(t),
        h = 1 === (0, W.cv)(t.type);
    return (0, i.jsx)(nY, {
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
                          ng,
                          { disabled: f, widgetType: t.type, widget: t, onAddGame: () => o(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: g && (0, i.jsx)(nB, { userId: n.id, widgetType: t.type, onDismiss: c, className: nz.r }),
        ...a,
    });
}
function nX(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(nf, { widgetType: t.type, children: (0, i.jsx)(nK, { widget: t, ...n }) });
}
var nq = n(669253),
    nZ = n(140355);
n(839272);
let nJ = (0, n(945810).mj)({
    name: "2026-09-profile-widget-empty-state-suggestions",
    kind: "user",
    defaultConfig: { enabled: !1, maxWidgetOptions: 0 },
    variations: { 1: { enabled: !0, maxWidgetOptions: 4 }, 2: { enabled: !0, maxWidgetOptions: 6 } },
});
var nQ = n(96173),
    n$ = n(661439),
    n0 = n(90165),
    n1 = n(788259),
    n8 = n(269507);
function n2(e) {
    let { widgets: t, trackUserProfileEditAction: n, personalWidgetOptionRef: l } = e;
    return (0, i.jsx)("ul", {
        className: n8.ZW,
        "aria-label": V.intl.string(V.t["+EIBSA"]),
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                {
                    ref: e.type === b.x.PERSONAL ? l : void 0,
                    children: (0, i.jsx)(n1.A, { widget: e, size: "small", trackUserProfileEditAction: n }),
                },
                e.getUniqueKey(),
            ),
        ),
    });
}
function n7(e) {
    let { trackUserProfileEditAction: t, personalWidgetOptionRef: n } = e,
        l = (0, nQ.A)();
    return (0, i.jsx)(n2, { widgets: l, personalWidgetOptionRef: n, trackUserProfileEditAction: t });
}
function n3(e) {
    let {
            maxWidgetOptions: t,
            shouldPromotePersonalWidget: s,
            trackUserProfileEditAction: r,
            personalWidgetOptionRef: o,
        } = e,
        d = (0, nQ.A)(),
        u = (function (e) {
            let t = (0, a.bG)([t9.A], () => t9.A.getFeaturedApplicationIds()),
                n = l.useMemo(() => {
                    let n = new Set(t);
                    return e
                        .filter((e) => e instanceof f.R)
                        .map((e) => e.applicationId)
                        .filter((e) => n.has(e));
                }, [t, e]),
                i = (0, c.A)(n),
                s = l.useMemo(() => n.map((e, t) => i[t]?.parentId ?? e), [n, i]),
                { tokens: r } = (0, t6.j)(s);
            l.useEffect(() => {
                (0, n$.X)();
            }, []);
            let o = l.useMemo(() => i.map((e) => e?.getCanonicalGameId() ?? null), [i]),
                d = (0, a.yK)([n0.A], () => o.map((e) => (null != e ? n0.A.getGameDuration(e) : 0))),
                u = (0, a.yK)([n0.A], () => o.map((e) => (null != e ? n0.A.getLastPlayedDateTime(e) : null)));
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
            hasClips: (0, a.bG)([t0.Ay], () => t0.Ay.hasClips()),
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
            (0, i.jsx)(n2, { widgets: g, personalWidgetOptionRef: o, trackUserProfileEditAction: r }),
            (0, i.jsx)(eK.$, { text: V.intl.string(V.t["/NKLK5"]), size: "sm", variant: "secondary", onClick: m }),
        ],
    });
}
function n5(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: s } = (0, eJ.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        c = (0, a.bG)([td.A], () => td.A.getUserProfile(t)?.fetchError != null, [t]),
        [u, g] = e3(!c),
        m = u || (0, I.t0)(),
        { enabled: x, maxWidgetOptions: f } = (function (e) {
            let { location: t } = e;
            return nJ.useConfig({ location: t });
        })({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        l.useEffect(() => {
            r.current || c || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [c, n]),
        (0, i.jsxs)("div", {
            className: n8.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: n8.FS,
                    children: [
                        (0, i.jsx)(tH.D, {
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
                                ? (0, i.jsx)(n3, {
                                      maxWidgetOptions: f,
                                      personalWidgetOptionRef: o,
                                      shouldPromotePersonalWidget: m,
                                      trackUserProfileEditAction: s,
                                  })
                                : (0, i.jsx)(n7, { personalWidgetOptionRef: o, trackUserProfileEditAction: s }),
                            (0, i.jsx)(e5, { targetElementRef: o, isVisible: u, markAsDismissed: g }),
                        ],
                    }),
            ],
        })
    );
}
var n6 = n(366209);
function n4(e) {
    let { widget: t, ...n } = e;
    return t instanceof f.R
        ? (0, i.jsx)(P.A, { widget: t, ...n })
        : t instanceof I.Tu
          ? (0, i.jsx)(ez, { widget: t, ...n })
          : (0, p.fu)(t)
            ? (0, i.jsx)(nX, { widget: t, ...n })
            : t instanceof h.k
              ? (0, i.jsx)(t5, { widget: t, ...n })
              : null;
}
function n9() {
    return (0, i.jsxs)("div", {
        className: n6.mJ,
        children: [
            (0, i.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(d.E, { variant: "text-xs/normal", color: "text-muted", children: V.intl.string(V.t["7blcz6"]) }),
        ],
    });
}
function ie(e) {
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
    function A() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(e9, { className: n6.cG }), d && (0, i.jsx)(n9, {}), (0, i.jsx)(nl, {})],
                    }),
                r.map((e, l) =>
                    (0, i.jsx)(
                        n4,
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
            !n && e && E.A.fetchSuggestedGames();
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
        ? (0, i.jsx)(n5, { userId: t.id })
        : o
          ? (0, i.jsx)(te.D, { children: A() })
          : A();
}
function it(e) {
    let { user: t, ...n } = e,
        s = l.useRef(null);
    (0, R.i)({ containerRef: s });
    let a = (0, nq.k)(t.id);
    return (0, i.jsxs)(nZ.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(n6.XG, { [n6.az]: a }),
        fade: !0,
        children: [(0, i.jsx)(ns.A, { scrollerRef: s }), (0, i.jsx)(ie, { user: t, ...n })],
    });
}
