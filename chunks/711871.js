n.d(t, { A: () => n0, u: () => nJ });
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
    j = n(210598),
    I = n(311043),
    A = n(569926),
    v = n(958805),
    E = n(61881),
    C = n(435558),
    S = n(196765),
    b = n(540185),
    T = n(282435);
let N = (0, C.sampleSize)(T.sx, T.sx.length),
    k = (0, S.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (n, i, l) => {
            let s = new Set(l.map((e) => e.gameId));
            for (let l of (e({
                stack: [...n.filter((e) => !s.has(e)), ...N],
                wishlistStack: [...i.filter((e) => !s.has(e)), ...N],
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
            return t()._setStack(n, s), l;
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
            t()._setGameIds(n, [...s, ...r]), t()._setPeekedGameIds(n, [...a, ...r]);
        },
        bumpMultiple: (e, n) => {
            let i = (t().gameIds[n] ?? []).filter((t) => !e.includes(t)),
                l = t().getNext(6 - i.length, n),
                s = t().peekNext(7, n);
            t()._setGameIds(n, [...i, ...l]), t()._setPeekedGameIds(n, [...s, ...l]);
        },
        remove: (e, n) => {
            let i = (n === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            t()._setStack(n, i), t()._setPeekedGameIds(n, t().peekNext(7, n));
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
function y(e) {
    let { bump: t, bumpMultiple: n, gameIds: i } = k();
    !(function (e) {
        let { remove: t, peekedGameIds: n } = k(),
            i = l.useMemo(() => n[e] ?? [], [n, e]);
        (0, A.x)(i);
        let s = (0, a.yK)([I.A], () => i.map((e) => I.A.isFetching(e)));
        l.useEffect(() => {
            for (let n of i) {
                let i = I.A.didFetchingFail(n),
                    l = I.A.hasNoData(n),
                    s = !!I.A.getGame(n),
                    r = null != I.A.getCoverImageUrl(n);
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
        o = (0, a.yK)([I.A], () => s.map((e) => I.A.isFetching(e)));
    l.useEffect(() => {
        let t = s.filter((e) => {
            let t = I.A.didFetchingFail(e),
                n = I.A.hasNoData(e),
                i = !!I.A.getGame(e),
                l = null != I.A.getCoverImageUrl(e);
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
    O = n(520082),
    P = n(869484),
    _ = n(315629),
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
var X = n(43990),
    K = n(241326),
    Y = n(33969),
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
    ee = n(372638),
    et = n(761431),
    en = n(770178);
let ei = l.createContext({
    isAnyFieldClipped: !1,
    isExpanded: !1,
    setAnyFieldClipped: () => {},
    setIsExpanded: () => {},
});
function el(e) {
    let { children: t } = e,
        [n, s] = l.useState(!1),
        [r, a] = l.useState(!1),
        [o] = l.useState(() => new Set()),
        d = l.useCallback(
            (e, t) => {
                t ? o.add(e) : o.delete(e), a(o.size > 0);
            },
            [o],
        ),
        c = l.useMemo(
            () => ({ isExpanded: n, setIsExpanded: s, isAnyFieldClipped: r, setAnyFieldClipped: d }),
            [n, r, d],
        );
    return (0, i.jsx)(ei.Provider, { value: c, children: t });
}
var es = n(892572);
function er(e) {
    let { className: t, variant: n, color: s, value: a, maxLines: o, interactive: c = !0, disableMarkdown: u = !1 } = e,
        g = c ? $.d : $.j,
        { textRef: m, lineClamp: x } = (function (e, t) {
            let { isExpanded: n, setAnyFieldClipped: i } = l.useContext(ei),
                s = l.useId(),
                r = l.useRef(null),
                a = l.useCallback(() => {
                    let e = r.current;
                    null != e && i(s, e.scrollWidth - e.clientWidth > 1 || e.scrollHeight - e.clientHeight > 1);
                }, [s, i]);
            return (
                (0, en.g)(r, a, [n, t], { fireOnMount: !0, fireOnDepsChange: !0 }),
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
        m = (0, et.TX)({ value: t, onCommit: g }),
        x =
            "" === t.trim()
                ? null
                : (0, i.jsx)(er, { interactive: !1, variant: s, color: r, value: t, maxLines: d, disableMarkdown: u }),
        f = {
            ...m,
            removeVerticalPadding: !0,
            growWidth: c || m.isEditing,
            preview: x,
            placeholder: n,
            editButtonAriaLabel: n,
            label: n,
            maxLength: o,
            className: es.ZZ,
        };
    return 1 === d
        ? (0, i.jsx)(et.yV, { ...f, size: "compact", textVariant: s })
        : (0, i.jsx)(ee.f, { ...f, rows: 1, maxRows: d, textVariant: s });
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
            (0, i.jsx)(Y.Y, {
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
        ? (0, i.jsx)(Y.Y, {
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
    ej = n(97483),
    eI = n(192308),
    eA = n(765548),
    ev = n(229531),
    eE = n(515718),
    eC = n(741394),
    eS = n(38405);
function eb(e) {
    let { uploadType: t, returnRef: s, getCropAspectRatio: r, onUploadSuccess: a } = e,
        o = l.useRef(0),
        [d, c] = l.useState(null),
        [u, g] = l.useState(null),
        m = (0, eA.A)(a),
        x = l.useCallback(() => {
            (o.current = o.current + 1), c(null), g(null);
        }, []),
        f = l.useCallback(
            async (e, t, n, i) => {
                o.current = o.current + 1;
                let l = o.current;
                c(e);
                try {
                    let s = await v.A.uploadWidgetAsset(t);
                    if (o.current !== l) return;
                    c(null), g({ filename: s, unprocessedFile: n, transform: i }), m({ filename: s, localDataUri: e });
                } catch (e) {
                    if (o.current !== l) return;
                    c(null), (0, eh.P0)((0, ep.o)(V.intl.string(V.t.F4Neqh), ej.Ck.FAILURE)), eS.A.captureException(e);
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
                    o = (0, eE.aU)(s);
                o.size > 0xa00000
                    ? (0, eh.P0)((0, ep.o)(V.intl.string(V.t.YbdEFK), ej.Ck.FAILURE))
                    : f(
                          s,
                          new File(
                              [o],
                              ((t = r.name),
                              (n = o.type),
                              (i = (0, ev.B)(n) ?? "png"),
                              (l = (0, eC.kh)(t)),
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
                (0, eI.openModalLazy)(
                    async () => {
                        let { default: r } = await Promise.all([
                            n.e("398791"),
                            n.e("655327"),
                            n.e("67702"),
                            n.e("1214"),
                            n.e("343437"),
                            n.e("858164"),
                            n.e("571470"),
                            n.e("837490"),
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
var eT = n(652215),
    eN = n(339984),
    ek = n(148548);
function ey() {
    return (0, i.jsx)(Q, {
        label: V.intl.string(V.t.gQmDk4),
        onClick: function () {
            (0, W.AD)((e) => new j.Tu({ ...e, sections: [(0, j.K)(), ...e.sections] }));
        },
        className: ek.GU,
    });
}
function eR(e) {
    let { userId: t, section: n, sectionIndex: s, canEdit: a } = e,
        o = l.useRef(null),
        d = l.useRef(null),
        c = l.useRef(null);
    function u(e) {
        (0, W.AD)((t) => {
            let n = t.sections[s];
            if (n?.type !== P.K.COVER) return t;
            let i = [...t.sections];
            return (i[s] = e(n)), new j.Tu({ ...t, sections: i });
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
            getLastEdit: I,
        } = eb({
            uploadType: eN.HL.PERSONAL_WIDGET_COVER,
            returnRef: d,
            getCropAspectRatio: x,
            onUploadSuccess: (e) => u((t) => ({ ...t, image: e })),
        });
    function A() {
        p(), u((e) => ({ ...e, image: void 0 }));
    }
    function v() {
        o.current?.activateUploadDialogue();
    }
    function E() {
        (0, W.AD)((e) => new j.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let C = null != h,
        S = a || "" !== n.title.trim() || "" !== n.subtitle.trim(),
        b = null != n.image || C,
        T = b || a,
        N = I(n.image);
    return (0, i.jsx)(X.N, {
        theme: b ? eT.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: c,
                className: r()(ek.kL, { [ek.Vp]: T }, e),
                children: [
                    a || null != n.image
                        ? (0, i.jsxs)("div", {
                              className: ek.El,
                              children: [
                                  (0, i.jsx)(ed.A, {
                                      cropAndUpload: f,
                                      imageInputRef: o,
                                      className: ek.Sl,
                                      canEdit: a,
                                      userId: t,
                                      image: n.image,
                                      previewUri: h,
                                      editVariant: "tooltip",
                                  }),
                                  b && S ? (0, i.jsx)("div", { className: ek.cw }) : null,
                              ],
                          })
                        : null,
                    a
                        ? (0, i.jsxs)(Y.A, {
                              className: ek.o1,
                              children: [
                                  null != n.image
                                      ? (0, i.jsx)(ef, {
                                            lastEdit: N,
                                            buttonRef: d,
                                            disabled: C,
                                            cropAndUpload: f,
                                            onChangeImage: v,
                                        })
                                      : null,
                                  (0, i.jsx)(Y.Y, {
                                      icon: K.TrashIcon,
                                      variant: "overlay-secondary",
                                      tooltipText: b ? V.intl.string(V.t.RyK5Ww) : V.intl.string(V.t.g2jVww),
                                      onClick: b ? A : E,
                                  }),
                              ],
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: r()(ek.hQ, e, { [ek.Vp]: T }),
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
var ew = n(661531),
    eL = n(603090);
function eO(e) {
    let { onClick: t, alwaysVisible: n = !1 } = e;
    return (0, i.jsxs)(H.D, {
        onClick: t,
        className: r()(eL.cR, { [eL.mr]: n }),
        children: [
            (0, i.jsx)(eg.X, { size: "xs", color: ew.A.colors.ICON_SUBTLE }),
            (0, i.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", children: V.intl.string(V.t["9AY+/x"]) }),
        ],
    });
}
function eP(e) {
    let { index: t, userId: n, field: l, canEdit: s, onFieldChange: a, onFieldRemove: o } = e,
        {
            cropAndUpload: d,
            previewUri: c,
            cancelUpload: u,
            getLastEdit: g,
        } = eb({
            uploadType: eN.HL.PERSONAL_WIDGET_FIELD,
            onUploadSuccess: (e) => a(l.key, (t) => ({ ...t, image: e })),
        }),
        m = s ? !0 !== l.hideImage : null != l.image;
    return (0, i.jsxs)("div", {
        className: eL.ez,
        children: [
            m
                ? (0, i.jsxs)("div", {
                      className: eL.tF,
                      children: [
                          (0, i.jsx)(ed.A, {
                              className: r()(eL.k9, s ? eL.y2 : void 0),
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
                                    className: eL.ij,
                                    children: (0, i.jsx)(Y.Y, {
                                        variant: "overlay-secondary",
                                        tooltipText: V.intl.string(V.t.RyK5Ww),
                                        onClick: function () {
                                            u(),
                                                a(l.key, (e) =>
                                                    null != e.image
                                                        ? { ...e, image: void 0 }
                                                        : { ...e, image: void 0, hideImage: !0 },
                                                );
                                        },
                                        icon: K.TrashIcon,
                                    }),
                                })
                              : null,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: eL.oT,
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
                ? (0, i.jsxs)(Y.A, {
                      className: eL.Ms,
                      children: [
                          m
                              ? null
                              : (0, i.jsx)(Y.Y, {
                                    variant: "overlay-secondary",
                                    tooltipText: V.intl.string(V.t.i3vRzP),
                                    onClick: function () {
                                        a(l.key, (e) => ({ ...e, hideImage: void 0 }));
                                    },
                                    icon: eg.X,
                                }),
                          (0, i.jsx)(Y.Y, {
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
function e_(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r } = e;
    function a(e) {
        (0, W.AD)((t) => {
            let n = t.sections[l];
            if (n?.type !== P.K.FIELDS) return t;
            let i = [...t.sections];
            return (i[l] = { ...n, fields: e(n.fields) }), new j.Tu({ ...t, sections: i });
        });
    }
    function o(e, t) {
        a((n) => {
            let i = n.findIndex((t) => t.key === e),
                l = n[i];
            if (null == l) return n;
            let s = [...n];
            return (s[i] = t(l)), s;
        });
    }
    function d(e) {
        a((t) => t.filter((t) => t.key !== e));
    }
    function c() {
        a((e) => [...e, (0, j.yL)()]);
    }
    if (0 === n.fields.length) {
        if (!s) return null;
        if (!r)
            return (0, i.jsx)("div", { className: eL.kL, children: (0, i.jsx)(eO, { alwaysVisible: !0, onClick: c }) });
    }
    let u = n.fields.map((e, n) =>
            (0, i.jsx)(eP, { index: n, userId: t, field: e, canEdit: s, onFieldChange: o, onFieldRemove: d }, e.key),
        ),
        g = n.fields.length % 2 == 1;
    s && g && n.fields.length < 4 && u.push((0, i.jsx)(eO, { onClick: c }, "add-entry"));
    let m = s && !g && n.fields.length + 2 <= 4;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u.length > 0 ? (0, i.jsx)("div", { className: eL.kL, children: u }) : null,
            m
                ? (0, i.jsx)(Q, {
                      label: V.intl.string(V.t.t4vU5I),
                      onClick: function () {
                          a((e) => [...e, (0, j.yL)(), (0, j.yL)()]);
                      },
                  })
                : null,
        ],
    });
}
var eD = n(202541),
    eG = n(877068);
let eM = { section: eT.JJy.PERSONAL_WIDGET };
function eU(e) {
    let { widget: t, canEdit: n } = e;
    return (0, i.jsxs)("div", {
        className: eG.wx,
        children: [
            (0, i.jsx)(G.A, { size: "xs", className: eG.nr }),
            (0, i.jsx)(eo, {
                canEdit: n,
                variant: "text-sm/medium",
                color: "text-default",
                value: t.header,
                placeholder: V.intl.string(V.t.fjSaAm),
                onCommit: function (e) {
                    (0, W.AD)((t) => new j.Tu({ ...t, header: e }));
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
        case P.K.COVER:
            return (0, i.jsx)(eR, { userId: t, section: n, sectionIndex: l, canEdit: s });
        case P.K.FIELDS:
            return (0, i.jsx)(e_, { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r });
    }
}
function eF() {
    return (0, a.bG)([M.default], () => U.Ay.isPremium(M.default.getCurrentUser(), eD.PremiumTypes.TIER_2))
        ? null
        : (0, i.jsxs)("div", {
              className: eG.hc,
              children: [
                  (0, i.jsx)(_.h, { color: "nitro-pink", className: eG.Sp, offsetBottom: -4 }),
                  (0, i.jsxs)("div", {
                      className: eG.LK,
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
                      subscriptionTier: eD.pe.TIER_2,
                      defaultTextOverride: V.intl.string(V.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eM,
                  }),
              ],
          });
}
function eH() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: n } = l.useContext(ei);
    return e || t ? (0, i.jsx)(z, { expanded: t, onClick: () => n((e) => !e) }) : null;
}
function eV(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, index: a, trailingContent: o } = e,
        d = s && !0 !== r,
        c = l.useMemo(() => t.sections.some((e) => e.type === P.K.COVER), [t.sections]);
    return (0, i.jsx)(F.A, {
        userId: n.id,
        widget: t,
        allowEditing: s,
        disableInteraction: r,
        index: a,
        trailingContent: o,
        className: eG.Nr,
        headerClassName: eG.JE,
        children: (0, i.jsxs)("div", {
            className: eG.kL,
            children: [
                (0, i.jsx)(eU, { widget: t, canEdit: d }),
                d && !c ? (0, i.jsx)(ey, {}) : null,
                t.sections.map((e, t) =>
                    (0, i.jsx)(eW, { userId: n.id, section: e, sectionIndex: t, canEdit: d, hasCoverSection: c }, t),
                ),
                (0, i.jsx)(eH, {}),
                d ? (0, i.jsx)(eF, {}) : null,
            ],
        }),
    });
}
function eB(e) {
    return (0, i.jsx)(el, { children: (0, i.jsx)(eV, { ...e }) });
}
var ez = n(702841),
    eX = n(821609),
    eK = n(403581),
    eY = n(307301),
    eq = n(183555),
    eZ = n(465318),
    eJ = n(384377),
    eQ = n(554146),
    e$ = n(43105),
    e0 = n(131607),
    e1 = n(518477),
    e8 = n(49999);
function e2() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = eZ.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [n, i] = (0, e0.kn)(e && t ? [eQ.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [n === eQ.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, i];
}
function e7(e) {
    let { targetElementRef: t, isVisible: n, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, eq.NJ)();
    return n
        ? (0, i.jsx)(e$.A, {
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
              onRequestClose: () => l(e8.i.USER_DISMISS),
              actions: [
                  {
                      text: V.intl.string(V.t.RCy7Px),
                      icon: eK.t,
                      onClick: function () {
                          let e = (0, j.g0)();
                          (0, W.Y5)(e),
                              s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, eJ.XA)(e1.jM.WIDGET_ADDED);
                      },
                  },
              ],
          })
        : null;
}
var e3 = n(410453);
function e5(e) {
    let { buttonRef: t, isCoachmarkVisible: n, markCoachmarkAsDismissed: s } = e,
        { trackUserProfileEditAction: r } = (0, eq.NJ)(),
        a = l.useCallback(() => {
            n && s(e8.i.TAKE_ACTION);
            let e = (0, j.g0)();
            (0, W.Y5)(e),
                r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, eJ.XA)(e1.jM.WIDGET_ADDED);
        }, [r, n, s]);
    return (0, i.jsx)(eX.$, {
        icon: eK.t,
        text: V.intl.string(V.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function e4(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, eq.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [c, u] = e2(),
        g = (function () {
            let e = (0, ez.bG)([M.default], () => M.default.getCurrentUser()?.id),
                t = (0, w.A)(e),
                { enabled: n, showCreateEntrypoint: i } = eZ.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === b.x.PERSONAL);
            return n && i && !l;
        })(),
        m = l.useCallback(() => {
            c && u(e8.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, eI.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("740601"), n.e("422420"), n.e("264707")]).then(
                            n.bind(n, 480142),
                        );
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [s, c, u]);
    return (0, i.jsxs)("div", {
        className: r()(e3.w, t),
        children: [
            (0, i.jsx)(d.E, {
                className: e3.D,
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: V.intl.string(V.t.OYlggR),
            }),
            g ? (0, i.jsx)(e5, { buttonRef: o, isCoachmarkVisible: c, markCoachmarkAsDismissed: u }) : null,
            (0, i.jsx)(eX.$, {
                icon: eY.j,
                text: V.intl.string(V.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: m,
                buttonRef: a,
            }),
            (0, i.jsx)(e7, { targetElementRef: g ? o : a, isVisible: c, markAsDismissed: u }),
        ],
    });
}
var e6 = n(192),
    e9 = n(172218),
    te = n(408278),
    tt = n(499373),
    tn = n(775602),
    ti = n(793574),
    tl = n(734066),
    ts = n(111994),
    tr = n(314531);
n(926675);
var ta = n(305866),
    to = n(123181),
    td = n(229087),
    tc = n(753437),
    tu = n(382701),
    tg = n(630900);
function tm(e) {
    let { clipId: t, tags: n, allowEditing: s, disableInteraction: r = !1, onEditingChange: a } = e,
        o = s && !r,
        c = l.useMemo(() => n?.filter((e) => null != (0, tc.W3)(e)) ?? [], [n]),
        u = c.length > 0,
        g = o && c.length < 20,
        { trackUserProfileEditAction: m } = (0, eq.NJ)(),
        x = l.useRef(null),
        f = l.useRef(new Map()),
        h = l.useRef(null),
        p = l.useRef(null),
        j = l.useRef(null),
        [I, A] = l.useState(c.length),
        [v, E] = l.useState(!1),
        [C, S] = l.useState(!1),
        T = v || C;
    l.useEffect(() => {
        a(T);
    }, [T, a]),
        l.useEffect(() => () => a(!1), [a]);
    let N = l.useCallback(
            (e, n) => {
                (0, W.$6)(t, e),
                    m({ action: "added" === n ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
            },
            [t, m],
        ),
        k = l.useCallback(() => {
            S(!0), m({ action: "PRESS_ADD_TAG", widgetEdited: b.x.CLIPS_GALLERY });
        }, [m]),
        y = l.useCallback(() => S(!1), []),
        R = l.useCallback(
            (e) => {
                (0, W.Fo)(t, e), m({ action: "TAG_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
            },
            [t, m],
        ),
        w = l.useCallback(() => {
            if (v) return;
            let e = x.current?.getBoundingClientRect().width ?? 0;
            if (0 === e || 0 === c.length) return void A(c.length);
            let t = j.current?.getBoundingClientRect().width ?? 0,
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
            for (; a < c.length && s(a + 1, r); ) a++;
            A(a);
        }, [c, v]);
    (0, en.g)(x, w);
    let L = c.length - I,
        O = L > 0,
        P = l.useCallback(
            (e) => {
                1 === L && E(!1), R(e);
            },
            [R, L],
        );
    return u || g
        ? (0, i.jsxs)("div", {
              className: tg.kL,
              ref: x,
              children: [
                  (0, i.jsxs)("ul", {
                      className: tg.xP,
                      "aria-hidden": !0,
                      children: [
                          c.map((e) =>
                              (0, i.jsx)(
                                  td.A,
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
                              className: tg.lv,
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
                          className: tg.nM,
                          "aria-label": V.intl.string(V.t["4Rq3a7"]),
                          children: c
                              .slice(0, I)
                              .map((e) =>
                                  (0, i.jsx)(td.A, { tag: e, variant: "filled", onRemove: o ? () => R(e) : void 0 }, e),
                              ),
                      }),
                  O &&
                      (0, i.jsx)(tx, {
                          buttonRef: p,
                          numHidden: L,
                          isOpen: v,
                          onOpenChange: E,
                          disableInteraction: r,
                          children: c.map((e) =>
                              (0, i.jsx)(
                                  td.A,
                                  {
                                      tag: e,
                                      className: tg.Hl,
                                      removeButtonClassName: tg.Nf,
                                      onRemove: o ? () => P(e) : void 0,
                                  },
                                  e,
                              ),
                          ),
                      }),
                  g && (0, i.jsx)(to.A, { tags: c, onTagsChange: N, onOpen: k, onClose: y, variant: "filled", ref: j }),
              ],
          })
        : null;
}
function tx(e) {
    let { buttonRef: t, numHidden: n, isOpen: l, onOpenChange: s, disableInteraction: r, children: a } = e,
        o = V.intl.string(V.t.pWHvBI);
    return r
        ? (0, i.jsx)("div", {
              className: `${tg.lv} ${tu.r9}`,
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
                  (0, i.jsx)(ta.l, {
                      className: tg.Kt,
                      "aria-label": o,
                      returnRef: t,
                      children: (0, i.jsx)("ul", { className: tg.ns, children: a }),
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
                          className: tg.lv,
                          children: (0, i.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
                      }),
                  }),
          });
}
var tf = n(3026);
n(600253);
var th = n(936026);
function tp(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, i.jsx)(d.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(th.Qw, { [th.qf]: n }),
        children: (0, i.jsx)(tf.A, { children: t }),
    });
}
function tj(e) {
    let { clipId: t, title: n, onEditingChange: s } = e,
        { trackUserProfileEditAction: a } = (0, eq.NJ)(),
        o = l.useCallback(
            (e) => {
                let i = e.trim();
                i !== n.trim() &&
                    ((0, W.mI)(t, i),
                    a({ action: "CLIP_TITLE_EDITED", widgetEdited: b.x.CLIPS_GALLERY, numCharacters: i.length }));
            },
            [t, n, a],
        ),
        d = (0, et.TX)({ value: n, onCommit: o }),
        { isEditing: c } = d,
        u = V.intl.string(V.t["2gwc+H"]);
    return (
        l.useEffect(() => {
            s(c);
        }, [c, s]),
        l.useEffect(() => () => s(!1), [s]),
        (0, i.jsx)(et.yV, {
            ...d,
            size: "compact",
            removeVerticalPadding: !0,
            className: r()(th.ZZ, { [th.Dy]: d.isEditing }),
            preview: (0, i.jsxs)("span", {
                className: r()(th.$, th.TG),
                children: [
                    (0, i.jsx)(eu.PencilIcon, { size: "xxs", color: "currentColor", className: th.wz }),
                    "" === n.trim() ? (0, i.jsx)(tp, { value: u, isPlaceholder: !0 }) : (0, i.jsx)(tp, { value: n }),
                ],
            }),
            placeholder: u,
            editButtonAriaLabel: V.intl.string(V.t.PDnM11),
            label: V.intl.string(V.t.PDnM11),
            maxLength: 200,
        })
    );
}
function tI(e) {
    let { clipId: t, title: n, allowEditing: l, onEditingChange: s } = e,
        r = null != n && "" !== n.trim();
    return l || r
        ? l
            ? (0, i.jsx)(tj, { clipId: t, title: n ?? "", onEditingChange: s })
            : (0, i.jsx)("span", { className: th.$, children: (0, i.jsx)(tp, { value: n ?? "" }) })
        : null;
}
var tA = n(663341),
    tv = n(451395),
    tE = n(823016),
    tC = n(765178),
    tS = n(282988);
function tb(e) {
    let { widgetClipId: t, localClipId: n, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eq.NJ)(),
        r = V.intl.string(V.t.ib6Mgx);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(q.m, {
            text: r,
            ariaHidden: !0,
            children: (0, i.jsx)(te.K, {
                "aria-label": r,
                icon: K.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, W.mC)(t),
                        null != n && (0, tS.UE)(n),
                        tC.O.announce(V.intl.string(V.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var tT = n(233002);
function tN(e) {
    let { item: t, index: n, isSelected: s, onSelect: a, allowEditing: o } = e,
        { registerDragHandleRef: d, manageFocusOnReorder: c } = (0, tE.r)(),
        u = l.useRef(null),
        g = o && ("saved" === t.status || "pending" === t.status),
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(H.D, {
                    className: r()(tT.Vs, { [tT.wH]: s }),
                    "aria-pressed": s,
                    "aria-label": V.intl.formatToPlainString(V.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, i.jsx)(tr.A, { item: t, ringSize: "sm", className: tT.nC }),
                }),
                g &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tv.jV, { buttonRef: d(t.key), className: tT.BU }),
                            (0, i.jsx)(tb, {
                                widgetClipId: t.key,
                                localClipId: "pending" === t.status ? t.localClipId : void 0,
                                className: tT.nM,
                            }),
                        ],
                    }),
            ],
        });
    return (0, i.jsx)("li", {
        ref: u,
        className: tT.NI,
        children: g
            ? (0, i.jsx)(tv.mG, {
                  index: n,
                  itemId: t.key,
                  listType: b.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => u.current?.offsetWidth },
                  "aria-label": V.intl.formatToPlainString(V.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: W.N5,
                  onEnd: () => c(t.key),
                  className: tT.oE,
                  dropBeforeClassName: tT.A,
                  dropAfterClassName: tT.Ze,
                  draggingClassName: tT.Id,
                  children: m,
              })
            : m,
    });
}
function tk(e) {
    let { items: t, selectedKey: n, onSelect: l, onAddClip: s, allowEditing: r = !1 } = e,
        a = Math.max(0, 4 - t.length),
        o = (0, i.jsxs)("ul", {
            className: tT.Xm,
            style: { "--custom-clips-filmstrip-slots": 4 },
            children: [
                t.map((e, t) =>
                    (0, i.jsx)(tN, { item: e, index: t, isSelected: e.key === n, onSelect: l, allowEditing: r }, e.key),
                ),
                null != s &&
                    Array.from({ length: a }, (e, t) =>
                        (0, i.jsx)(
                            "li",
                            {
                                className: tT.NI,
                                children: (0, i.jsx)(H.D, {
                                    className: tT.Yn,
                                    "aria-label": V.intl.string(V.t.rI0i0a),
                                    onClick: s,
                                    children: (0, i.jsx)(tA.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return r ? (0, i.jsx)(tE.B, { emptyListFallbackRef: null, children: o }) : o;
}
var ty = n(729475),
    tR = n(358618),
    tw = n(983851);
function tL(e) {
    let { isMuted: t, onToggleMuted: n, onFullscreen: l } = e,
        s = V.intl.string(V.t.OIDkcp),
        r = V.intl.string(t ? V.t.YqAjXy : V.t.w4m945);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(q.m, {
                text: s,
                ariaHidden: !0,
                children: (0, i.jsx)(te.K, {
                    "aria-label": s,
                    icon: ty.T,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: l,
                }),
            }),
            (0, i.jsx)(q.m, {
                text: r,
                ariaHidden: !0,
                children: (0, i.jsx)(te.K, {
                    "aria-label": r,
                    icon: t ? tR._ : tw.H,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: n,
                }),
            }),
        ],
    });
}
var tO = n(798108),
    tP = n(789645),
    t_ = n(297264),
    tD = n(915089),
    tG = n(772168);
function tM(e) {
    let { onDismiss: t, children: n, className: l } = e,
        s = (0, tD.GV)();
    return (0, i.jsxs)("aside", {
        className: r()(tG.kL, l),
        "aria-labelledby": s,
        children: [
            (0, i.jsxs)("div", {
                className: tG.wx,
                children: [
                    (0, i.jsx)(H.D, {
                        className: tG.r,
                        "aria-label": V.intl.string(V.t["pUR+3g"]),
                        onClick: t,
                        children: (0, i.jsx)(tP.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(t_.D, {
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
var tU = n(335978);
function tW(e) {
    let { clip: t } = e,
        n = V.intl.formatToPlainString(V.t.gPRdVj, { clipName: t.name ?? t.applicationName }),
        s = l.useCallback(() => {
            (0, tS._A)(t, [ti.A.USER_PROFILE_MODAL_V2]);
        }, [t]);
    return (0, i.jsx)(q.m, {
        text: n,
        ariaHidden: !0,
        children: (0, i.jsxs)(H.D, {
            className: tU.Vs,
            "aria-label": n,
            onClick: s,
            children: [
                (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: tU.xn, loading: "lazy" }),
                (0, i.jsx)(tA.PlusLargeIcon, { size: "sm", color: "currentColor", className: tU.Xv }),
            ],
        }),
    });
}
function tF(e) {
    let { clips: t, ...n } = e;
    return (0, i.jsx)(tM, {
        ...n,
        children: (0, i.jsx)("ul", {
            className: tU.p_,
            children: t.map((e) => (0, i.jsx)("li", { className: tU.NI, children: (0, i.jsx)(tW, { clip: e }) }, e.id)),
        }),
    });
}
var tH = n(769015),
    tV = n(202163);
function tB(e) {
    let { gameId: t, className: n } = e,
        { gameRecord: l } = (0, tV.A)(t),
        s = l?.name;
    return null == s
        ? null
        : (0, i.jsx)(q.m, {
              text: s,
              ariaHidden: !0,
              children: (0, i.jsx)("div", {
                  className: n,
                  children: (0, i.jsx)(tH.A, { game: l, size: tH.M.XSMALL, allowUnknownGameIcon: !1 }),
              }),
          });
}
var tz = n(558285),
    tX = n(608857),
    tK = n(915725),
    tY = n(409067),
    tq = n(696016),
    tZ = n(716112);
function tJ(e) {
    let { onClick: t } = e,
        n = V.intl.string(V.t.rI0i0a);
    return (0, i.jsx)(q.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, i.jsx)(te.K, { variant: "secondary", size: "sm", icon: tt.T, "aria-label": n, onClick: t }),
    });
}
function tQ() {
    return (0, i.jsx)("div", {
        className: tZ.p$,
        children: (0, i.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: V.intl.format(V.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function t$(e) {
    let t,
        s,
        r,
        { widget: o, user: d, allowEditing: c, disableInteraction: u, ...g } = e,
        [m, x] = l.useState(null),
        [f, h] = l.useState(!1),
        [p, j] = l.useState(!1),
        [I, A] = l.useState(!0),
        v = (0, a.bG)([tn.Ay], () => tn.Ay.useReducedMotion),
        E = (0, e9.K)(j, 0.5),
        [C, S] = l.useState(!1),
        [b, T] = l.useState(!1),
        N = l.useRef(void 0),
        k = (0, tX.A)(o),
        y =
            ((t = (0, a.yK)([tK.Ay], () => Object.values(tK.Ay.getClips()))),
            (s = (0, a.bG)([tK.Ay], () => tK.Ay.getSettings().showPovClipsInGallery)),
            (r = (0, tS.UQ)()),
            l.useMemo(() => {
                let e = new Set(r.keys());
                for (let t of o.clips) null != t.localClipId && e.add(t.localClipId);
                return t
                    .filter((t) => !(e.has(t.id) || null == t.applicationId || 0 === t.length || (!s && (0, tY.kD)(t))))
                    .sort((e, t) => {
                        let n = !0 === e.isFavorite;
                        return n !== (!0 === t.isFavorite) ? (n ? -1 : 1) : t.createdAt - e.createdAt;
                    })
                    .slice(0, 3);
            }, [t, r, s, o.clips])),
        R = (0, tl.sw)(),
        w = c && !0 !== u,
        L = 0 === k.length,
        O = k.length >= 4,
        P = w && R && !O,
        _ = w || k.length > 1,
        [D] = l.useState(() => y.length >= 3),
        [G, M] = l.useState(!1),
        U = P && D && !G && y.length > 0,
        B = l.useCallback(() => M(!0), []),
        z = k.find((e) => e.key === m) ?? k[0],
        X = l.useMemo(() => (!0 === u ? [] : k.filter(tX.K)), [k, u]),
        K = null != z ? X.findIndex((e) => e.key === z.key) : -1,
        Y = l.useCallback(() => {
            K < 0 || (0, tz.A)({ clips: X, startingIndex: K });
        }, [X, K]),
        q = l.useCallback(() => A((e) => !e), []),
        Z = l.useCallback(() => {
            if (K < 0) return;
            let e = X[(K + 1) % X.length];
            null != e && x(e.key);
        }, [X, K]),
        J = (K >= 0 && !v && p) || f,
        Q = l.useCallback(() => {
            N.current = window.setTimeout(() => h(!0), 150);
        }, []),
        $ = l.useCallback(() => {
            window.clearTimeout(N.current), h(!1);
        }, []);
    l.useEffect(() => () => window.clearTimeout(N.current), []);
    let ee = l.useCallback(() => {
        (0, eI.openModalLazy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("459368"),
                    n.e("251714"),
                    n.e("860350"),
                    n.e("180644"),
                    n.e("821717"),
                    n.e("269714"),
                    n.e("19385"),
                    n.e("398104"),
                    n.e("553829"),
                    n.e("33091"),
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
                    n.e("621573"),
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
                        initialMainLink: ts.oH.ALL_CLIPS,
                        onClipClick: (e) => {
                            ((e) => (0, tS._A)(e, [ti.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                        },
                    });
            },
            { modalKey: tq.nm },
        );
    }, []);
    return (0, i.jsx)(F.A, {
        userId: d.id,
        widget: o,
        allowEditing: c,
        disableInteraction: u,
        headerTitle: (0, W.L)(o),
        headerActionButtons: P && L ? [(0, i.jsx)(tJ, { onClick: ee }, "clips-gallery-add-clip")] : void 0,
        trailingContent:
            U && (0, i.jsx)("div", { className: tZ.$k, children: (0, i.jsx)(tF, { clips: y, onDismiss: B }) }),
        ...g,
        children:
            null != z
                ? (0, i.jsxs)("div", {
                      className: tZ.nV,
                      children: [
                          (0, i.jsxs)("div", {
                              ref: E,
                              className: tZ.aM,
                              onMouseEnter: Q,
                              onMouseLeave: $,
                              children: [
                                  (0, i.jsx)(tr.A, {
                                      item: z,
                                      ringSize: "lg",
                                      isPlaying: J,
                                      isMuted: I,
                                      fit: "contain",
                                      onEnded: X.length > 1 ? Z : void 0,
                                      className: tZ.VH,
                                  }),
                                  K >= 0 &&
                                      !C &&
                                      !b &&
                                      (0, i.jsx)(H.D, {
                                          className: tZ.Hf,
                                          "aria-label": V.intl.string(V.t.CscLHM),
                                          onClick: Y,
                                      }),
                                  ("saved" === z.status || "pending" === z.status) &&
                                      (0, i.jsx)(tB, { gameId: z.gameId, className: tZ.AT }),
                                  w
                                      ? ("saved" === z.status || "pending" === z.status) &&
                                        (0, i.jsx)("div", {
                                            className: tZ.nP,
                                            children: (0, i.jsx)(tb, {
                                                widgetClipId: z.key,
                                                localClipId: "pending" === z.status ? z.localClipId : void 0,
                                            }),
                                        })
                                      : K >= 0 &&
                                        (0, i.jsx)("div", {
                                            className: tZ.nP,
                                            children: (0, i.jsx)(tL, { isMuted: I, onToggleMuted: q, onFullscreen: Y }),
                                        }),
                                  (0, i.jsx)(tO.A, {
                                      children:
                                          ("saved" === z.status || "pending" === z.status) &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(tI, {
                                                      clipId: z.key,
                                                      title: z.title,
                                                      allowEditing: w,
                                                      onEditingChange: S,
                                                  }),
                                                  (0, i.jsx)(tm, {
                                                      clipId: z.key,
                                                      tags: z.tags,
                                                      allowEditing: c,
                                                      disableInteraction: u,
                                                      onEditingChange: T,
                                                  }),
                                              ],
                                          }),
                                  }),
                              ],
                          }),
                          _ &&
                              (0, i.jsx)(tk, {
                                  items: k,
                                  selectedKey: z.key,
                                  onSelect: x,
                                  onAddClip: P ? ee : void 0,
                                  allowEditing: w,
                              }),
                      ],
                  })
                : (0, i.jsx)(tQ, {}),
    });
}
var t0 = n(704824),
    t1 = n(382483),
    t8 = n(385113),
    t2 = n(334074),
    t7 = n(657718),
    t3 = n(478016);
function t5(e) {
    let { user: t, application: n, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eq.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, W.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, eJ.XA)(e1.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, i.jsx)(O.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, i.jsx)(O.A.Cta, {
            showSuggestedForYou: !0,
            heading: V.intl.format(V.t.OIzLCy, { applicationName: n.name }),
            content: V.intl.format(V.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(q.m, {
                        text: V.intl.string(V.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(t7.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tP.P,
                            "aria-label": V.intl.string(V.t.WAI6xu),
                            onClick: () => {
                                s(e8.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(q.m, {
                        text: V.intl.string(V.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(t7.S, {
                            variant: "primary",
                            size: "sm",
                            icon: t3.U,
                            "aria-label": V.intl.formatToPlainString(V.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                s(e8.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function t4() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([t8.A], () => t8.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, t1.Wq)();
        }, []);
        let t = (0, a.bG)([M.default], () => M.default.getCurrentUser()),
            n = (0, c.A)(e),
            { tokens: i, fetched: s } = (0, t0.j)(e),
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
            { eligibleToShow: u, markAsDismissed: g } = (0, t2.hj)({
                applications: d,
                dismissibleContent: eQ.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: t2.SH,
            }),
            m = l.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = n[0];
    return null == r ? null : (0, i.jsx)(t5, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var t6 = n(128988),
    t9 = n(280450),
    ne = n(321191),
    nt = n(896170),
    nn = n(453318),
    ni = n(321108),
    nl = n(383329),
    ns = n(67710);
function nr(e) {
    let { widgetType: t, widget: n, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: d } = (0, eq.NJ)(),
        [c, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, nl.R)({ query: c }),
        f = c.trim().length > 0,
        { gameIds: h, onAddGame: p } = y(t),
        j = (0, ni.A)(h),
        I = l.useCallback(
            (e) => {
                (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    tC.O.announce(V.intl.string(V.t.q0U3DE)),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    h.includes(e) && p(e),
                    s?.();
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
            let t = j
                    .filter((e) => !o.has(e.id) && (0, W.XX)(e))
                    .map((e) => ({ id: String(e.id), value: String(e.id), label: e.name, disabled: !1 })),
                n = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !n.has(e.id))];
        }, [m, o, j, f]),
        v = l.useCallback((e) => e, []),
        E = l.useMemo(() => ({ ...x, threshold: nt.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        C = l.useCallback((e) => (f || "" === e.trim() ? A.length : (0, nt.Ht)(A, e, E).length), [f, A, E]),
        S = l.useCallback(
            (e) => {
                let n = e.target.value;
                "" === c.trim() &&
                    "" !== n.trim() &&
                    d({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: C(n),
                    }),
                    u(n),
                    (g.current = n);
            },
            [c, d, t, C],
        );
    return (0, i.jsx)(ec.Y, {
        ...a,
        onRequestOpen: () => {
            d({ action: "PRESS_ADD_GAME", widgetEdited: t }), u(""), (g.current = "");
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
            return (0, i.jsx)(ta.l, {
                className: ns.C,
                "aria-label": V.intl.string(V.t.uqw8wK),
                children: (0, i.jsxs)(nn.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (I(e), t());
                    },
                    options: A,
                    matchSorterOptions: E,
                    customMatchSorter: f ? v : void 0,
                    children: [
                        (0, i.jsx)(nn.a3, {
                            label: V.intl.string(V.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: V.intl.string(V.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: S,
                        }),
                        (0, i.jsx)(nn.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function na(e) {
    let { disabled: t, ...n } = e,
        s = l.useRef(null);
    return (0, i.jsx)(nr, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...n,
        children: (e) =>
            (0, i.jsx)(q.m, {
                text: V.intl.string(V.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, i.jsx)(te.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: tt.T,
                    "aria-label": V.intl.string(V.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function no(e) {
    let t = l.useRef(null);
    return (0, i.jsx)(nr, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, i.jsx)(H.D, {
                innerRef: t,
                className: ns.c,
                "aria-label": V.intl.string(V.t.PYyENc),
                ...e,
                children: (0, i.jsx)(tA.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let nd = l.createContext(null);
function nc(e) {
    let { widgetType: t, children: n } = e,
        s = (0, a.bG)([E.A], () => {
            let e = E.A.getPendingWidgets();
            if (null == e) return !1;
            let n = e.find((e) => e.type === t);
            if (null == n) return !1;
            let i = (0, W.cv)(t);
            return n.games.length > i;
        }),
        [r, o] = l.useState(s);
    return (0, i.jsx)(nd.Provider, { value: { expanded: r, setExpanded: o }, children: n });
}
function nu() {
    let e = l.useContext(nd);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var ng = n(67438);
function nm(e) {
    let { widget: t } = e,
        n = (0, W.cv)(t.type),
        l = 1 === n,
        s = l ? V.intl.string(V.t["3FdPBT"]) : V.intl.format(V.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? ng.O : ng.k,
        children: [
            l && (0, i.jsx)(no, { widget: t, widgetType: t.type }),
            (0, i.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var nx = n(683071),
    nf = n(312252);
function nh(e) {
    let { widgetType: t, gameCount: n } = e,
        l = (0, W.cv)(t);
    return n <= l
        ? null
        : (0, i.jsx)("div", {
              role: "alert",
              className: nf.l,
              children: (0, i.jsx)(nx.w, {
                  type: "warning",
                  children: V.intl.formatToPlainString(V.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var np = n(943793),
    nj = n(148420);
function nI(e) {
    let { games: t, user: n, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tE.r)();
    return (0, i.jsx)("ul", {
        className: nj.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(np.A, {
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
function nA(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e6.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = nu(),
        c = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nI, { ...e, games: c }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(nh, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tE.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nv(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nA, {
                      user: t,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nm, { widget: n }),
    });
}
function nE(e) {
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
                ? (0, i.jsx)(np.A, {
                      user: t,
                      widgetType: n.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nm, { widget: n }),
    });
}
var nC = n(793693);
function nS(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: nC.V,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var nb = n(686246),
    nT = n(201438),
    nN = n(788593),
    nk = n(858808),
    ny = n(365611),
    nR = n(900850);
function nw(e) {
    let { index: t, widgetType: n, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, tE.r)(),
        c = l.useRef(null);
    return (0, i.jsx)(tv.mG, {
        index: t,
        itemId: s.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => c.current?.offsetWidth },
        "aria-label": V.intl.formatToPlainString(V.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, W.Un)(n, e, t),
        onEnd: () => d(s.gameId),
        className: nR.kL,
        dropBeforeClassName: nR.A,
        dropAfterClassName: nR.Ze,
        draggingClassName: nR.Id,
        children: (0, i.jsx)("div", { ref: c, className: nR.An, children: o }),
    });
}
function nL(e) {
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
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, nT.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tE.r)(),
        x = s && !r,
        { isDragging: f } = (0, nb.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nN.A, {
                    imageSrc: c,
                    gameName: u,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: r,
                    className: null == c || r ? void 0 : ny.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, i.jsx)(tv.jV, { buttonRef: m(t.gameId), className: nR.BU }),
                x && (0, i.jsx)(nk.A, { game: t, widgetType: l, className: nR.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, i.jsx)("div", { className: ny.mD })
        : x
          ? (0, i.jsx)(nw, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, i.jsx)("div", { className: nR.kL, children: h() });
}
function nO(e) {
    let { games: t, userId: n, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tE.r)();
    return (0, i.jsx)(nS, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(nL, {
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
function nP(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e6.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = nu(),
        c = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nO, { ...e, games: c }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(nh, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tE.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function n_(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nP, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nm, { widget: n }),
    });
}
function nD(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nP, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(nm, { widget: n }),
    });
}
var nG = n(875620);
function nM(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, nT.A)(t),
        d = (0, a.bG)([E.A], () => E.A.suggestedFetchIsLoading),
        c = V.intl.formatToPlainString(V.t["3mb1s5"], { game: r });
    return o || d
        ? (0, i.jsx)("div", { className: ny.mD })
        : (0, i.jsx)(q.m, {
              text: c,
              ariaHidden: !0,
              children: (0, i.jsxs)(H.D, {
                  className: nG.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, i.jsx)(nN.A, {
                          className: nG.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(tA.PlusLargeIcon, { size: "md", className: nG.Xv, color: ew.A.colors.WHITE }),
                  ],
              }),
          });
}
function nU(e) {
    let { userId: t, widgetType: n, ...s } = e,
        { games: r, onAddGame: a } = y(n),
        { setExpanded: o } = nu(),
        { trackUserProfileEditAction: d } = (0, eq.NJ)(),
        c = l.useCallback(
            (e) => {
                a(e),
                    o(!0),
                    (0, W.ew)({ widgetType: n, game: { gameId: e } }),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: n });
            },
            [a, n, d, o],
        );
    return (0, i.jsx)(tM, {
        ...s,
        children: (0, i.jsx)("ul", {
            className: nG.Vg,
            children: r.map((e) => {
                let { gameId: n } = e;
                return (0, i.jsx)("li", { children: (0, i.jsx)(nM, { onClick: () => c(n), userId: t, gameId: n }) }, n);
            }),
        }),
    });
}
var nW = n(870961);
function nF(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, i.jsx)(nE, { widget: t, ...n });
        case b.x.CURRENT_GAMES:
            return (0, i.jsx)(nv, { widget: t, ...n });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(nD, { widget: t, ...n });
        case b.x.PLAYED_GAMES:
            return (0, i.jsx)(n_, { widget: t, ...n });
        default:
            return null;
    }
}
function nH(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, ...o } = e,
        { setExpanded: d } = nu(),
        { shouldShowSuggestions: c, handleDismissSuggestions: u } = (function (e) {
            let [t, n] = l.useState(!1),
                i = e.type,
                s = (0, a.bG)([t9.default, ne.A], () => {
                    let e = t9.default.getId();
                    if (null == e) return !1;
                    let t = ne.A.getUserProfile(e);
                    return (t?.widgets ?? []).some((e) => e.type === i);
                }),
                r = (0, W.uA)(e);
            return {
                shouldShowSuggestions: !s && !t && !r,
                handleDismissSuggestions: l.useCallback(() => {
                    n(!0);
                }, []),
            };
        })(t),
        g = s && !r,
        m = g && c,
        x = (0, W.L)(t),
        f = (0, W.FM)(t, { showEditingControls: g }),
        h = (0, W.uA)(t),
        p = 1 === (0, W.cv)(t.type);
    return (0, i.jsx)(nF, {
        widget: t,
        user: n,
        allowEditing: s,
        disableInteraction: r,
        headerTitle: x,
        headerSubtitle: f,
        headerActionButtons:
            g && !p
                ? [
                      (0, i.jsx)(
                          na,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => d(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, i.jsx)(nU, { userId: n.id, widgetType: t.type, onDismiss: u, className: nW.r }),
        ...o,
    });
}
function nV(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(nc, { widgetType: t.type, children: (0, i.jsx)(nH, { widget: t, ...n }) });
}
var nB = n(669253),
    nz = n(94160),
    nX = n(96173),
    nK = n(788259),
    nY = n(269507);
function nq(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: s } = (0, eq.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        c = (0, a.bG)([ne.A], () => ne.A.getUserProfile(t)?.fetchError != null, [t]),
        [u, g] = e2(!c),
        m = (0, nX.A)();
    return (
        l.useEffect(() => {
            r.current || c || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [c, n]),
        (0, i.jsxs)("div", {
            className: nY.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: nY.FS,
                    children: [
                        (0, i.jsx)(t_.D, {
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
                    (0, i.jsx)("ul", {
                        className: nY.ZW,
                        "aria-label": V.intl.string(V.t["+EIBSA"]),
                        children: m.map((e) =>
                            (0, i.jsx)(
                                "li",
                                {
                                    ref: e.type === b.x.PERSONAL ? o : void 0,
                                    children: (0, i.jsx)(nK.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
                !c && (0, i.jsx)(e7, { targetElementRef: o, isVisible: u, markAsDismissed: g }),
            ],
        })
    );
}
var nZ = n(366209);
function nJ(e) {
    let { widget: t, ...n } = e;
    return t instanceof f.R
        ? (0, i.jsx)(O.A, { widget: t, ...n })
        : t instanceof j.Tu
          ? (0, i.jsx)(eB, { widget: t, ...n })
          : (0, p.fu)(t)
            ? (0, i.jsx)(nV, { widget: t, ...n })
            : t instanceof h.k
              ? (0, i.jsx)(t$, { widget: t, ...n })
              : null;
}
function nQ() {
    return (0, i.jsxs)("div", {
        className: nZ.mJ,
        children: [
            (0, i.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(d.E, { variant: "text-xs/normal", color: "text-muted", children: V.intl.string(V.t["7blcz6"]) }),
        ],
    });
}
function n$(e) {
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
        j = l.useMemo(() => r.filter(p.fu), [r]),
        I = l.useMemo(() => r.filter((e) => e instanceof f.R), [r]);
    function A() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(e4, { className: nZ.cG }), d && (0, i.jsx)(nQ, {}), (0, i.jsx)(t4, {})],
                    }),
                r.map((e, l) =>
                    (0, i.jsx)(
                        nJ,
                        { widget: e, user: t, guildId: n, channelId: s, allowEditing: o, index: l },
                        e.getUniqueKey(),
                    ),
                ),
            ],
        });
    }
    return (!(function (e, t) {
        let [n, i, s, r] = (0, a.yK)([E.A], () => [
                E.A.suggestedFetchAttempted,
                E.A.suggestedFetchError,
                E.A.suggestedGameIds,
                E.A.suggestedFetchIsLoading,
            ]),
            { onLoad: o } = k();
        l.useEffect(() => {
            !n && e && v.A.fetchSuggestedGames();
        }, [n, e]);
        let d = n && !r;
        l.useEffect(() => {
            if (!d) return;
            let e = t.map((e) => e.games).flat();
            i || o(s.suggestedGamesIds ?? [], s.suggestedWishlistGamesIds ?? [], e);
        }, [d]);
    })(o, j),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, c.A)(n);
        let { data: i, refetch: s } = (0, m.P)(e),
            r = l.useRef(null !== i);
        l.useEffect(() => {
            r.current && ((r.current = !1), s());
        }, [s]);
    })(t.id, I),
    h)
        ? (0, i.jsx)(nq, { userId: t.id })
        : o
          ? (0, i.jsx)(e6.D, { children: A() })
          : A();
}
function n0(e) {
    let { user: t, ...n } = e,
        s = l.useRef(null);
    (0, R.i)({ containerRef: s });
    let a = (0, nB.k)(t.id);
    return (0, i.jsxs)(nz.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(nZ.XG, { [nZ.az]: a }),
        fade: !0,
        children: [(0, i.jsx)(t6.A, { scrollerRef: s }), (0, i.jsx)(n$, { user: t, ...n })],
    });
}
