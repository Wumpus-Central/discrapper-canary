n.d(t, { A: () => nY, u: () => nz });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(885574),
    c = n(834730),
    u = n(429913),
    d = n(277984),
    g = n(840387),
    m = n(201718),
    x = n(615405),
    f = n(633075),
    h = n(646976),
    p = n(289173),
    I = n(210598),
    j = n(311043),
    A = n(569926),
    v = n(958805),
    E = n(61881),
    C = n(435558),
    S = n(196765),
    b = n(540185),
    y = n(282435);
let N = (0, C.sampleSize)(y.sx, y.sx.length),
    T = (0, S.v)((e, t) => ({
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
function k(e) {
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
    let c = l.useMemo(() => s.map((e) => ({ gameId: e })), [s]);
    return { gameIds: s, games: c, onAddGame: r };
}
var w = n(600761),
    R = n(667049),
    L = n(389667),
    O = n(520082),
    P = n(869484),
    _ = n(315629),
    D = n(465794),
    G = n(450232),
    M = n(287809),
    U = n(158045),
    F = n(735321),
    W = n(623280),
    H = n(939249),
    V = n(375708),
    B = n(954165);
function z(e) {
    let { onClick: t, expanded: n } = e;
    return (0, i.jsx)(H.D, {
        onClick: t,
        className: B.x,
        "aria-expanded": n,
        children: (0, i.jsx)(c.E, {
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
        c = l.useCallback(
            (e, t) => {
                t ? o.add(e) : o.delete(e), a(o.size > 0);
            },
            [o],
        ),
        u = l.useMemo(
            () => ({ isExpanded: n, setIsExpanded: s, isAnyFieldClipped: r, setAnyFieldClipped: c }),
            [n, r, c],
        );
    return (0, i.jsx)(ei.Provider, { value: u, children: t });
}
var es = n(892572);
function er(e) {
    let { className: t, variant: n, color: s, value: a, maxLines: o, interactive: u = !0, disableMarkdown: d = !1 } = e,
        g = u ? $.d : $.j,
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
    return (0, i.jsx)(c.E, {
        ref: m,
        className: r()(es.YD, { [es.Lq]: o > 1 }, t),
        variant: n,
        color: s,
        lineClamp: x,
        children: d ? a : g(a),
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
            maxLines: c,
            growWidth: u,
            disableMarkdown: d,
        } = e,
        g = l.useCallback((e) => a(e.trim()), [a]),
        m = (0, et.TX)({ value: t, onCommit: g }),
        x =
            "" === t.trim()
                ? null
                : (0, i.jsx)(er, { interactive: !1, variant: s, color: r, value: t, maxLines: c, disableMarkdown: d }),
        f = {
            ...m,
            removeVerticalPadding: !0,
            growWidth: u || m.isEditing,
            preview: x,
            placeholder: n,
            editButtonAriaLabel: n,
            label: n,
            maxLength: o,
            className: es.ZZ,
        };
    return 1 === c
        ? (0, i.jsx)(et.yV, { ...f, size: "compact", textVariant: s })
        : (0, i.jsx)(ee.f, { ...f, rows: 1, maxRows: c, textVariant: s });
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
var ec = n(326009),
    eu = n(922016),
    ed = n(22231),
    eg = n(750943),
    em = n(458499);
function ex(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    return (0, i.jsx)(eu.Y, {
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
                icon: ed.PencilIcon,
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
    eI = n(97483),
    ej = n(192308),
    eA = n(765548),
    ev = n(229531),
    eE = n(515718),
    eC = n(741394),
    eS = n(38405);
function eb(e) {
    let { uploadType: t, returnRef: s, getCropAspectRatio: r, onUploadSuccess: a } = e,
        o = l.useRef(0),
        [c, u] = l.useState(null),
        [d, g] = l.useState(null),
        m = (0, eA.A)(a),
        x = l.useCallback(() => {
            (o.current = o.current + 1), u(null), g(null);
        }, []),
        f = l.useCallback(
            async (e, t, n, i) => {
                o.current = o.current + 1;
                let l = o.current;
                u(e);
                try {
                    let s = await v.A.uploadWidgetAsset(t);
                    if (o.current !== l) return;
                    u(null), g({ filename: s, unprocessedFile: n, transform: i }), m({ filename: s, localDataUri: e });
                } catch (e) {
                    if (o.current !== l) return;
                    u(null), (0, eh.P0)((0, ep.o)(V.intl.string(V.t.F4Neqh), eI.Ck.FAILURE)), eS.A.captureException(e);
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
                    ? (0, eh.P0)((0, ep.o)(V.intl.string(V.t.YbdEFK), eI.Ck.FAILURE))
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
                (0, ej.openModalLazy)(
                    async () => {
                        let { default: r } = await Promise.all([
                            n.e("940226"),
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
        previewUri: c,
        cancelUpload: x,
        getLastEdit: l.useCallback(
            (e) => (null != d && null != e && "filename" in e && e.filename === d.filename ? d : null),
            [d],
        ),
    };
}
var ey = n(652215),
    eN = n(339984),
    eT = n(148548);
function ek() {
    return (0, i.jsx)(Q, {
        label: V.intl.string(V.t.gQmDk4),
        onClick: function () {
            (0, F.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
        },
        className: eT.GU,
    });
}
function ew(e) {
    let { userId: t, section: n, sectionIndex: s, canEdit: a } = e,
        o = l.useRef(null),
        c = l.useRef(null),
        u = l.useRef(null);
    function d(e) {
        (0, F.AD)((t) => {
            let n = t.sections[s];
            if (n?.type !== P.K.COVER) return t;
            let i = [...t.sections];
            return (i[s] = e(n)), new I.Tu({ ...t, sections: i });
        });
    }
    function g(e) {
        d((t) => ({ ...t, title: e }));
    }
    function m(e) {
        d((t) => ({ ...t, subtitle: e }));
    }
    let x = l.useCallback(() => {
            let e = u.current?.getBoundingClientRect();
            return null != e && e.width > 0 && e.height > 0 ? e.width / e.height : void 0;
        }, []),
        {
            cropAndUpload: f,
            previewUri: h,
            cancelUpload: p,
            getLastEdit: j,
        } = eb({
            uploadType: eN.HL.PERSONAL_WIDGET_COVER,
            returnRef: c,
            getCropAspectRatio: x,
            onUploadSuccess: (e) => d((t) => ({ ...t, image: e })),
        });
    function A() {
        p(), d((e) => ({ ...e, image: void 0 }));
    }
    function v() {
        o.current?.activateUploadDialogue();
    }
    function E() {
        (0, F.AD)((e) => new I.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let C = null != h,
        S = a || "" !== n.title.trim() || "" !== n.subtitle.trim(),
        b = null != n.image || C,
        y = b || a,
        N = j(n.image);
    return (0, i.jsx)(X.N, {
        theme: b ? ey.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: u,
                className: r()(eT.kL, { [eT.Vp]: y }, e),
                children: [
                    a || null != n.image
                        ? (0, i.jsxs)("div", {
                              className: eT.El,
                              children: [
                                  (0, i.jsx)(ec.A, {
                                      cropAndUpload: f,
                                      imageInputRef: o,
                                      className: eT.Sl,
                                      canEdit: a,
                                      userId: t,
                                      image: n.image,
                                      previewUri: h,
                                      editVariant: "tooltip",
                                  }),
                                  b && S ? (0, i.jsx)("div", { className: eT.cw }) : null,
                              ],
                          })
                        : null,
                    a
                        ? (0, i.jsxs)(Y.A, {
                              className: eT.o1,
                              children: [
                                  null != n.image
                                      ? (0, i.jsx)(ef, {
                                            lastEdit: N,
                                            buttonRef: c,
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
                        className: r()(eT.hQ, e, { [eT.Vp]: y }),
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
var eR = n(661531),
    eL = n(603090);
function eO(e) {
    let { onClick: t, alwaysVisible: n = !1 } = e;
    return (0, i.jsxs)(H.D, {
        onClick: t,
        className: r()(eL.cR, { [eL.mr]: n }),
        children: [
            (0, i.jsx)(eg.X, { size: "xs", color: eR.A.colors.ICON_SUBTLE }),
            (0, i.jsx)(c.E, { variant: "text-sm/medium", color: "text-muted", children: V.intl.string(V.t["9AY+/x"]) }),
        ],
    });
}
function eP(e) {
    let { index: t, userId: n, field: l, canEdit: s, onFieldChange: a, onFieldRemove: o } = e,
        {
            cropAndUpload: c,
            previewUri: u,
            cancelUpload: d,
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
                          (0, i.jsx)(ec.A, {
                              className: r()(eL.k9, s ? eL.y2 : void 0),
                              canEdit: s,
                              userId: n,
                              image: l.image,
                              previewUri: u,
                              cropAndUpload: c,
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
                                            d(),
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
        (0, F.AD)((t) => {
            let n = t.sections[l];
            if (n?.type !== P.K.FIELDS) return t;
            let i = [...t.sections];
            return (i[l] = { ...n, fields: e(n.fields) }), new I.Tu({ ...t, sections: i });
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
    function c(e) {
        a((t) => t.filter((t) => t.key !== e));
    }
    function u() {
        a((e) => [...e, (0, I.yL)()]);
    }
    if (0 === n.fields.length) {
        if (!s) return null;
        if (!r)
            return (0, i.jsx)("div", { className: eL.kL, children: (0, i.jsx)(eO, { alwaysVisible: !0, onClick: u }) });
    }
    let d = n.fields.map((e, n) =>
            (0, i.jsx)(eP, { index: n, userId: t, field: e, canEdit: s, onFieldChange: o, onFieldRemove: c }, e.key),
        ),
        g = n.fields.length % 2 == 1;
    s && g && n.fields.length < 4 && d.push((0, i.jsx)(eO, { onClick: u }, "add-entry"));
    let m = s && !g && n.fields.length + 2 <= 4;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            d.length > 0 ? (0, i.jsx)("div", { className: eL.kL, children: d }) : null,
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
var eD = n(202541),
    eG = n(877068);
let eM = { section: ey.JJy.PERSONAL_WIDGET };
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
                    (0, F.AD)((t) => new I.Tu({ ...t, header: e }));
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
        case P.K.COVER:
            return (0, i.jsx)(ew, { userId: t, section: n, sectionIndex: l, canEdit: s });
        case P.K.FIELDS:
            return (0, i.jsx)(e_, { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r });
    }
}
function eW() {
    return (0, a.bG)([M.default], () => U.Ay.isPremium(M.default.getCurrentUser(), eD.PremiumTypes.TIER_2))
        ? null
        : (0, i.jsxs)("div", {
              className: eG.hc,
              children: [
                  (0, i.jsx)(_.h, { color: "nitro-pink", className: eG.Sp, offsetBottom: -4 }),
                  (0, i.jsxs)("div", {
                      className: eG.LK,
                      children: [
                          (0, i.jsx)(c.E, {
                              variant: "text-xs/semibold",
                              color: "text-strong",
                              children: V.intl.string(V.t.WOPVdz),
                          }),
                          (0, i.jsx)(c.E, {
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
        c = s && !0 !== r,
        u = l.useMemo(() => t.sections.some((e) => e.type === P.K.COVER), [t.sections]);
    return (0, i.jsx)(W.A, {
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
                (0, i.jsx)(eU, { widget: t, canEdit: c }),
                c && !u ? (0, i.jsx)(ek, {}) : null,
                t.sections.map((e, t) =>
                    (0, i.jsx)(eF, { userId: n.id, section: e, sectionIndex: t, canEdit: c, hasCoverSection: u }, t),
                ),
                (0, i.jsx)(eH, {}),
                c ? (0, i.jsx)(eW, {}) : null,
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
function e5(e) {
    let { targetElementRef: t, isVisible: n, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, eq.NJ)();
    return n
        ? (0, i.jsx)(e$.A, {
              targetElementRef: t,
              position: "left",
              title: V.intl.string(V.t.KKGxNt),
              body: V.intl.string(V.t["IS+QTV"]),
              onRequestClose: () => l(e8.i.USER_DISMISS),
              actions: [
                  {
                      text: V.intl.string(V.t.RCy7Px),
                      onClick: function () {
                          let e = (0, I.g0)();
                          (0, F.Y5)(e),
                              s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, eJ.XA)(e1.jM.WIDGET_ADDED);
                      },
                  },
              ],
          })
        : null;
}
var e7 = n(410453);
function e3(e) {
    let { buttonRef: t, isCoachmarkVisible: n, markCoachmarkAsDismissed: s } = e,
        { trackUserProfileEditAction: r } = (0, eq.NJ)(),
        a = l.useCallback(() => {
            n && s(e8.i.TAKE_ACTION);
            let e = (0, I.g0)();
            (0, F.Y5)(e),
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
        [u, d] = e2(),
        g = (function () {
            let e = (0, ez.bG)([M.default], () => M.default.getCurrentUser()?.id),
                t = (0, R.A)(e),
                { enabled: n, showCreateEntrypoint: i } = eZ.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === b.x.PERSONAL);
            return n && i && !l;
        })(),
        m = l.useCallback(() => {
            u && d(e8.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, ej.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("740601"), n.e("422420"), n.e("264707")]).then(
                            n.bind(n, 480142),
                        );
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [s, u, d]);
    return (0, i.jsxs)("div", {
        className: r()(e7.w, t),
        children: [
            (0, i.jsx)(c.E, {
                className: e7.D,
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: V.intl.string(V.t.OYlggR),
            }),
            g ? (0, i.jsx)(e3, { buttonRef: o, isCoachmarkVisible: u, markCoachmarkAsDismissed: d }) : null,
            (0, i.jsx)(eX.$, {
                icon: eY.j,
                text: V.intl.string(V.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: m,
                buttonRef: a,
            }),
            (0, i.jsx)(e5, { targetElementRef: g ? o : a, isVisible: u, markAsDismissed: d }),
        ],
    });
}
var e6 = n(192),
    e9 = n(408278),
    te = n(499373),
    tt = n(793574),
    tn = n(111994),
    ti = n(314531),
    tl = n(3026);
n(600253);
var ts = n(936026);
function tr(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, i.jsx)(c.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(ts.Qw, { [ts.qf]: n }),
        children: (0, i.jsx)(tl.A, { children: t }),
    });
}
function ta(e) {
    let { clipId: t, title: n, onEditingChange: s } = e,
        { trackUserProfileEditAction: a } = (0, eq.NJ)(),
        o = l.useCallback(
            (e) => {
                let i = e.trim();
                i !== n.trim() &&
                    ((0, F.mI)(t, i),
                    a({ action: "CLIP_TITLE_EDITED", widgetEdited: b.x.CLIPS_GALLERY, numCharacters: i.length }));
            },
            [t, n, a],
        ),
        c = (0, et.TX)({ value: n, onCommit: o }),
        { isEditing: u } = c,
        d = V.intl.string(V.t["2gwc+H"]);
    return (
        l.useEffect(() => {
            s(u);
        }, [u, s]),
        l.useEffect(() => () => s(!1), [s]),
        (0, i.jsx)(et.yV, {
            ...c,
            size: "compact",
            removeVerticalPadding: !0,
            className: r()(ts.ZZ, { [ts.Dy]: c.isEditing }),
            preview: (0, i.jsxs)("span", {
                className: r()(ts.$, ts.TG),
                children: [
                    (0, i.jsx)(ed.PencilIcon, { size: "xxs", color: "currentColor", className: ts.wz }),
                    "" === n.trim() ? (0, i.jsx)(tr, { value: d, isPlaceholder: !0 }) : (0, i.jsx)(tr, { value: n }),
                ],
            }),
            placeholder: d,
            editButtonAriaLabel: V.intl.string(V.t.PDnM11),
            label: V.intl.string(V.t.PDnM11),
            maxLength: 200,
        })
    );
}
function to(e) {
    let { clipId: t, title: n, allowEditing: l, onEditingChange: s } = e,
        r = null != n && "" !== n.trim();
    return l || r
        ? l
            ? (0, i.jsx)(ta, { clipId: t, title: n ?? "", onEditingChange: s })
            : (0, i.jsx)("span", { className: ts.$, children: (0, i.jsx)(tr, { value: n ?? "" }) })
        : null;
}
var tc = n(663341),
    tu = n(451395),
    td = n(823016),
    tg = n(765178),
    tm = n(539572),
    tx = n(195880),
    tf = n(696016);
let th = (0, S.v)(() => ({ localClips: new Map() }));
function tp(e, t) {
    th.setState((n) => ({ localClips: new Map(n.localClips).set(e, t) }));
}
function tI(e) {
    th.setState((t) => {
        let n = new Map(t.localClips);
        return n.delete(e), { localClips: n };
    });
}
function tj() {
    return th((e) => e.localClips);
}
async function tA(e, t) {
    if (!th.getState().localClips.has(e.id)) {
        if (null == e.applicationId) return void (0, eh.P0)((0, ep.o)(V.intl.string(V.t.xcLXWy), eI.Ck.FAILURE));
        tp(e.id, { status: "exporting", clip: e });
        try {
            let n = await (0, tm.VO)(e, { analyticsLocations: t });
            tp(e.id, { status: "uploading", clip: e, progress: 0 });
            let i = new File([n], "clip.mp4", { type: "video/mp4" }),
                l = await v.A.uploadWidgetClip(i, {
                    onProgress: (t) => {
                        var n;
                        return (
                            (n = e.id),
                            void th.setState((e) => {
                                let i = e.localClips.get(n);
                                return i?.status !== "uploading"
                                    ? e
                                    : { localClips: new Map(e.localClips).set(n, { ...i, progress: t }) };
                            })
                        );
                    },
                });
            tp(e.id, { status: "uploaded", clip: e, uploadFilename: l }),
                (0, F.XW)({
                    status: "pending",
                    id: (0, tx.m)(),
                    localClipId: e.id,
                    gameId: e.applicationId,
                    title: e.name,
                    uploadFilename: l,
                });
        } catch (t) {
            tI(e.id),
                tf.nx.error("Failed to upload a clip for the clips gallery widget", t),
                (0, eh.P0)((0, ep.o)(V.intl.string(V.t.iufib1), eI.Ck.FAILURE));
        }
    }
}
function tv(e) {
    let { widgetClipId: t, localClipId: n, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eq.NJ)(),
        r = V.intl.string(V.t.ib6Mgx);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(q.m, {
            text: r,
            ariaHidden: !0,
            children: (0, i.jsx)(e9.K, {
                "aria-label": r,
                icon: K.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, F.mC)(t),
                        null != n && tI(n),
                        tg.O.announce(V.intl.string(V.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var tE = n(233002);
function tC(e) {
    let { item: t, index: n, isSelected: s, onSelect: a, allowEditing: o } = e,
        { registerDragHandleRef: c, manageFocusOnReorder: u } = (0, td.r)(),
        d = l.useRef(null),
        g = o && ("saved" === t.status || "pending" === t.status),
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(H.D, {
                    className: r()(tE.Vs, { [tE.wH]: s }),
                    "aria-pressed": s,
                    "aria-label": V.intl.formatToPlainString(V.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, i.jsx)(ti.A, { item: t, ringSize: "sm", className: tE.nC }),
                }),
                g &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tu.jV, { buttonRef: c(t.key), className: tE.BU }),
                            (0, i.jsx)(tv, {
                                widgetClipId: t.key,
                                localClipId: "pending" === t.status ? t.localClipId : void 0,
                                className: tE.nM,
                            }),
                        ],
                    }),
            ],
        });
    return (0, i.jsx)("li", {
        ref: d,
        className: tE.NI,
        children: g
            ? (0, i.jsx)(tu.mG, {
                  index: n,
                  itemId: t.key,
                  listType: b.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => d.current?.offsetWidth },
                  "aria-label": V.intl.formatToPlainString(V.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: F.N5,
                  onEnd: () => u(t.key),
                  className: tE.oE,
                  dropBeforeClassName: tE.A,
                  dropAfterClassName: tE.Ze,
                  draggingClassName: tE.Id,
                  children: m,
              })
            : m,
    });
}
function tS(e) {
    let { items: t, selectedKey: n, onSelect: l, onAddClip: s, allowEditing: r = !1 } = e,
        a = Math.max(0, 4 - t.length),
        o = (0, i.jsxs)("ul", {
            className: tE.Xm,
            children: [
                t.map((e, t) =>
                    (0, i.jsx)(tC, { item: e, index: t, isSelected: e.key === n, onSelect: l, allowEditing: r }, e.key),
                ),
                null != s &&
                    Array.from({ length: a }, (e, t) =>
                        (0, i.jsx)(
                            "li",
                            {
                                className: tE.NI,
                                children: (0, i.jsx)(H.D, {
                                    className: tE.Yn,
                                    "aria-label": V.intl.string(V.t.rI0i0a),
                                    onClick: s,
                                    children: (0, i.jsx)(tc.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return r ? (0, i.jsx)(td.B, { emptyListFallbackRef: null, children: o }) : o;
}
var tb = n(457404);
function ty(e) {
    let { children: t } = e;
    return (0, i.jsxs)("div", {
        className: tb.Lw,
        children: [(0, i.jsx)("div", { className: tb.tB }), (0, i.jsx)("div", { className: tb.Qs, children: t })],
    });
}
var tN = n(789645),
    tT = n(297264),
    tk = n(915089),
    tw = n(772168);
function tR(e) {
    let { onDismiss: t, children: n, className: l } = e,
        s = (0, tk.GV)();
    return (0, i.jsxs)("aside", {
        className: r()(tw.kL, l),
        "aria-labelledby": s,
        children: [
            (0, i.jsxs)("div", {
                className: tw.wx,
                children: [
                    (0, i.jsx)(H.D, {
                        className: tw.r,
                        "aria-label": V.intl.string(V.t["pUR+3g"]),
                        onClick: t,
                        children: (0, i.jsx)(tN.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(tT.D, {
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
var tL = n(335978);
function tO(e) {
    let { clip: t } = e,
        n = V.intl.formatToPlainString(V.t.gPRdVj, { clipName: t.name ?? t.applicationName }),
        s = l.useCallback(() => {
            tA(t, [tt.A.USER_PROFILE_MODAL_V2]);
        }, [t]);
    return (0, i.jsx)(q.m, {
        text: n,
        ariaHidden: !0,
        children: (0, i.jsxs)(H.D, {
            className: tL.Vs,
            "aria-label": n,
            onClick: s,
            children: [
                (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: tL.xn, loading: "lazy" }),
                (0, i.jsx)(tc.PlusLargeIcon, { size: "sm", color: "currentColor", className: tL.Xv }),
            ],
        }),
    });
}
function tP(e) {
    let { clips: t, ...n } = e;
    return (0, i.jsx)(tR, {
        ...n,
        children: (0, i.jsx)("ul", {
            className: tL.p_,
            children: t.map((e) => (0, i.jsx)("li", { className: tL.NI, children: (0, i.jsx)(tO, { clip: e }) }, e.id)),
        }),
    });
}
var t_ = n(256905);
let tD = { width: 1920, height: 1080 };
async function tG(e) {
    if (null == e) return tD;
    try {
        let { width: t, height: n } = await new Promise((t, n) => {
            let i = new Image();
            (i.onload = () => t({ width: i.naturalWidth, height: i.naturalHeight })),
                (i.onerror = () => n(Error("measureImage: the image failed to load"))),
                (i.src = e);
        });
        return t > 0 && n > 0 ? { width: t, height: n } : tD;
    } catch {
        return tD;
    }
}
async function tM(e) {
    let { videoURL: t, thumbnailURL: n, title: i } = e,
        { width: l, height: s } = await tG(n);
    return { type: "VIDEO", url: t, proxyUrl: t, poster: n, width: l, height: s, alt: i };
}
async function tU(e) {
    let { clips: t, startingIndex: n } = e;
    if (0 === t.length) return;
    let i = await Promise.all(t.map(tM));
    (0, t_.R)({ location: "user_profile_widget_clip", items: i, startingIndex: n, shouldHideMediaOptions: !0 });
}
var tF = n(915725),
    tW = n(409067),
    tH = n(716112);
function tV(e) {
    return "saved" === e.status && null != e.videoURL;
}
function tB(e) {
    let { onClick: t } = e,
        n = V.intl.string(V.t.rI0i0a);
    return (0, i.jsx)(q.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, i.jsx)(e9.K, { variant: "secondary", size: "sm", icon: te.T, "aria-label": n, onClick: t }),
    });
}
function tz() {
    return (0, i.jsx)("div", {
        className: tH.p$,
        children: (0, i.jsx)(c.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: V.intl.format(V.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tX(e) {
    let t,
        s,
        r,
        o,
        { widget: c, user: u, allowEditing: d, disableInteraction: g, ...m } = e,
        [x, f] = l.useState(null),
        [h, p] = l.useState(!1),
        [I, j] = l.useState(!1),
        A = l.useRef(void 0),
        v =
            ((t = tj()),
            l.useMemo(
                () => [
                    ...c.clips.flatMap((e) => {
                        if ("saved" === e.status)
                            return [
                                {
                                    status: "saved",
                                    key: e.id,
                                    videoURL: e.videoURL,
                                    thumbnailURL: e.thumbnailURL,
                                    title: e.title,
                                },
                            ];
                        let n = t.get(e.localClipId);
                        return null != n
                            ? [
                                  {
                                      status: "pending",
                                      key: e.id,
                                      localClipId: e.localClipId,
                                      thumbnail: n.clip.thumbnail,
                                      title: e.title,
                                  },
                              ]
                            : [];
                    }),
                    ...Array.from(t.values()).flatMap((e) => {
                        switch (e.status) {
                            case "exporting":
                                return [{ status: "exporting", key: e.clip.id, thumbnail: e.clip.thumbnail }];
                            case "uploading":
                                return [
                                    {
                                        status: "uploading",
                                        key: e.clip.id,
                                        thumbnail: e.clip.thumbnail,
                                        progress: e.progress,
                                    },
                                ];
                            case "uploaded":
                                return [];
                        }
                    }),
                ],
                [c.clips, t],
            )),
        E =
            ((s = (0, a.yK)([tF.Ay], () => Object.values(tF.Ay.getClips()))),
            (r = (0, a.bG)([tF.Ay], () => tF.Ay.getSettings().showPovClipsInGallery)),
            (o = tj()),
            l.useMemo(() => {
                let e = new Set(o.keys());
                for (let t of c.clips) null != t.localClipId && e.add(t.localClipId);
                return s
                    .filter((t) => !(e.has(t.id) || null == t.applicationId || 0 === t.length || (!r && (0, tW.kD)(t))))
                    .sort((e, t) => {
                        let n = !0 === e.isFavorite;
                        return n !== (!0 === t.isFavorite) ? (n ? -1 : 1) : t.createdAt - e.createdAt;
                    })
                    .slice(0, 3);
            }, [s, o, r, c.clips])),
        C = d && !0 !== g,
        S = 0 === v.length,
        b = v.length >= 4,
        [y] = l.useState(() => E.length >= 3),
        [N, T] = l.useState(!1),
        k = C && !b && y && !N && E.length > 0,
        w = l.useCallback(() => T(!0), []),
        R = v.find((e) => e.key === x) ?? v[v.length - 1],
        L = l.useMemo(() => (!0 === g ? [] : v.filter(tV)), [v, g]),
        O = null != R ? L.findIndex((e) => e.key === R.key) : -1,
        P = l.useCallback(() => {
            O < 0 || tU({ clips: L, startingIndex: O });
        }, [L, O]),
        _ = l.useCallback(() => {
            A.current = window.setTimeout(() => p(!0), 150);
        }, []),
        D = l.useCallback(() => {
            window.clearTimeout(A.current), p(!1);
        }, []);
    l.useEffect(() => () => window.clearTimeout(A.current), []);
    let G = l.useCallback(() => {
        (0, ej.openModalLazy)(
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
                    n.e("220287"),
                    n.e("324761"),
                    n.e("918024"),
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
                        initialMainLink: tn.oH.ALL_CLIPS,
                        onClipClick: (e) => {
                            ((e) => tA(e, [tt.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                        },
                    });
            },
            { modalKey: tf.nm },
        );
    }, []);
    return (0, i.jsx)(W.A, {
        userId: u.id,
        widget: c,
        allowEditing: d,
        disableInteraction: g,
        className: tH.kL,
        headerTitle: (0, F.L)(c),
        headerActionButtons: C && S ? [(0, i.jsx)(tB, { onClick: G }, "clips-gallery-add-clip")] : void 0,
        trailingContent: k && (0, i.jsx)(tP, { clips: E, onDismiss: w }),
        ...m,
        children:
            null != R
                ? (0, i.jsxs)("div", {
                      className: tH.nV,
                      children: [
                          (0, i.jsxs)("div", {
                              className: tH.aM,
                              onMouseEnter: _,
                              onMouseLeave: D,
                              children: [
                                  (0, i.jsx)(ti.A, { item: R, ringSize: "lg", isPlaying: h, className: tH.VH }),
                                  O >= 0 &&
                                      !I &&
                                      (0, i.jsx)(H.D, {
                                          className: tH.Hf,
                                          "aria-label": V.intl.string(V.t.CscLHM),
                                          onClick: P,
                                      }),
                                  (0, i.jsx)(ty, {
                                      children:
                                          ("saved" === R.status || "pending" === R.status) &&
                                          (0, i.jsx)(to, {
                                              clipId: R.key,
                                              title: R.title,
                                              allowEditing: C,
                                              onEditingChange: j,
                                          }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(tS, {
                              items: v,
                              selectedKey: R.key,
                              onSelect: f,
                              onAddClip: C && !b ? G : void 0,
                              allowEditing: C,
                          }),
                      ],
                  })
                : (0, i.jsx)(tz, {}),
    });
}
var tK = n(704824),
    tY = n(382483),
    tq = n(385113),
    tZ = n(334074),
    tJ = n(657718),
    tQ = n(478016);
function t$(e) {
    let { user: t, application: n, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eq.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, F.Y5)(a),
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
                        children: (0, i.jsx)(tJ.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tN.P,
                            "aria-label": V.intl.string(V.t.WAI6xu),
                            onClick: () => {
                                s(e8.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(q.m, {
                        text: V.intl.string(V.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(tJ.S, {
                            variant: "primary",
                            size: "sm",
                            icon: tQ.U,
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
function t0() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([tq.A], () => tq.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, tY.Wq)();
        }, []);
        let t = (0, a.bG)([M.default], () => M.default.getCurrentUser()),
            n = (0, u.A)(e),
            { tokens: i, fetched: s } = (0, tK.j)(e),
            r = (0, R.A)(t?.id),
            o = null == t || null == e || null == i || !s,
            c = l.useMemo(
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
            { eligibleToShow: d, markAsDismissed: g } = (0, tZ.hj)({
                applications: c,
                dismissibleContent: eQ.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: tZ.SH,
            }),
            m = l.useMemo(() => c.filter((e) => d.includes(e.id)), [c, d]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = n[0];
    return null == r ? null : (0, i.jsx)(t$, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var t1 = n(128988),
    t8 = n(280450),
    t2 = n(321191),
    t5 = n(896170),
    t7 = n(305866),
    t3 = n(453318),
    t4 = n(321108),
    t6 = n(383329),
    t9 = n(67710);
function ne(e) {
    let { widgetType: t, widget: n, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: c } = (0, eq.NJ)(),
        [u, d] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, t6.R)({ query: u }),
        f = u.trim().length > 0,
        { gameIds: h, onAddGame: p } = k(t),
        I = (0, t4.A)(h),
        j = l.useCallback(
            (e) => {
                (0, F.ew)({ widgetType: t, game: { gameId: e } }),
                    tg.O.announce(V.intl.string(V.t.q0U3DE)),
                    c({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    h.includes(e) && p(e),
                    s?.();
            },
            [t, c, s, h, p],
        ),
        A = l.useMemo(() => {
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
        v = l.useCallback((e) => e, []),
        E = l.useMemo(() => ({ ...x, threshold: t5.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        C = l.useCallback((e) => (f || "" === e.trim() ? A.length : (0, t5.Ht)(A, e, E).length), [f, A, E]),
        S = l.useCallback(
            (e) => {
                let n = e.target.value;
                "" === u.trim() &&
                    "" !== n.trim() &&
                    c({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: C(n),
                    }),
                    d(n),
                    (g.current = n);
            },
            [u, c, t, C],
        );
    return (0, i.jsx)(eu.Y, {
        ...a,
        onRequestOpen: () => {
            c({ action: "PRESS_ADD_GAME", widgetEdited: t }), d(""), (g.current = "");
        },
        onRequestClose: () => {
            c({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: g.current.trim().length,
                numResults: C(g.current),
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(t7.l, {
                className: t9.C,
                "aria-label": V.intl.string(V.t.uqw8wK),
                children: (0, i.jsxs)(t3.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: A,
                    matchSorterOptions: E,
                    customMatchSorter: f ? v : void 0,
                    children: [
                        (0, i.jsx)(t3.a3, {
                            label: V.intl.string(V.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: V.intl.string(V.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: S,
                        }),
                        (0, i.jsx)(t3.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function nt(e) {
    let { disabled: t, ...n } = e,
        s = l.useRef(null);
    return (0, i.jsx)(ne, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...n,
        children: (e) =>
            (0, i.jsx)(q.m, {
                text: V.intl.string(V.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, i.jsx)(e9.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: te.T,
                    "aria-label": V.intl.string(V.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function nn(e) {
    let t = l.useRef(null);
    return (0, i.jsx)(ne, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, i.jsx)(H.D, {
                innerRef: t,
                className: t9.c,
                "aria-label": V.intl.string(V.t.PYyENc),
                ...e,
                children: (0, i.jsx)(tc.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let ni = l.createContext(null);
function nl(e) {
    let { widgetType: t, children: n } = e,
        s = (0, a.bG)([E.A], () => {
            let e = E.A.getPendingWidgets();
            if (null == e) return !1;
            let n = e.find((e) => e.type === t);
            if (null == n) return !1;
            let i = (0, F.cv)(t);
            return n.games.length > i;
        }),
        [r, o] = l.useState(s);
    return (0, i.jsx)(ni.Provider, { value: { expanded: r, setExpanded: o }, children: n });
}
function ns() {
    let e = l.useContext(ni);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var nr = n(67438);
function na(e) {
    let { widget: t } = e,
        n = (0, F.cv)(t.type),
        l = 1 === n,
        s = l ? V.intl.string(V.t["3FdPBT"]) : V.intl.format(V.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? nr.O : nr.k,
        children: [
            l && (0, i.jsx)(nn, { widget: t, widgetType: t.type }),
            (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var no = n(683071),
    nc = n(312252);
function nu(e) {
    let { widgetType: t, gameCount: n } = e,
        l = (0, F.cv)(t);
    return n <= l
        ? null
        : (0, i.jsx)("div", {
              role: "alert",
              className: nc.l,
              children: (0, i.jsx)(no.w, {
                  type: "warning",
                  children: V.intl.formatToPlainString(V.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var nd = n(249264),
    ng = n(148420);
function nm(e) {
    let { games: t, user: n, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, td.r)();
    return (0, i.jsx)("ul", {
        className: ng.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(nd.A, {
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
function nx(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e6.r)(),
        a = r(t),
        { expanded: o, setExpanded: c } = ns(),
        u = o ? s : s.slice(0, 2),
        d = s.length > 2,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nm, { ...e, games: u }),
                d && (0, i.jsx)(z, { expanded: o, onClick: () => c((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(nu, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(td.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nf(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nx, {
                      user: t,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(na, { widget: n }),
    });
}
function nh(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e,
        c = n.games[0];
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            null != c
                ? (0, i.jsx)(nd.A, {
                      user: t,
                      widgetType: n.type,
                      game: c,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(na, { widget: n }),
    });
}
var np = n(793693);
function nI(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: np.V,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var nj = n(686246),
    nA = n(201438),
    nv = n(788593),
    nE = n(858808),
    nC = n(365611),
    nS = n(900850);
function nb(e) {
    let { index: t, widgetType: n, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: c } = (0, td.r)(),
        u = l.useRef(null);
    return (0, i.jsx)(tu.mG, {
        index: t,
        itemId: s.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => u.current?.offsetWidth },
        "aria-label": V.intl.formatToPlainString(V.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, F.Un)(n, e, t),
        onEnd: () => c(s.gameId),
        className: nS.kL,
        dropBeforeClassName: nS.A,
        dropAfterClassName: nS.Ze,
        draggingClassName: nS.Id,
        children: (0, i.jsx)("div", { ref: u, className: nS.An, children: o }),
    });
}
function ny(e) {
    let {
            game: t,
            userId: n,
            widgetType: l,
            allowEditing: s,
            disableInteraction: r = !1,
            index: a,
            onRemoveGame: o,
            coverRef: c,
        } = e,
        { coverImageUrl: u, gameName: d, isLoading: g } = (0, nA.A)(t.gameId),
        { registerDragHandleRef: m } = (0, td.r)(),
        x = s && !r,
        { isDragging: f } = (0, nj.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nv.A, {
                    imageSrc: u,
                    gameName: d,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: r,
                    className: null == u || r ? void 0 : nC.iL,
                    hideTooltip: f,
                    coverRef: c,
                }),
                x && (0, i.jsx)(tu.jV, { buttonRef: m(t.gameId), className: nS.BU }),
                x && (0, i.jsx)(nE.A, { game: t, widgetType: l, className: nS.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, i.jsx)("div", { className: nC.mD })
        : x
          ? (0, i.jsx)(nb, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: u, gameName: d, children: h() })
          : (0, i.jsx)("div", { className: nS.kL, children: h() });
}
function nN(e) {
    let { games: t, userId: n, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, td.r)();
    return (0, i.jsx)(nI, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(ny, {
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
function nT(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e6.r)(),
        a = r(t),
        { expanded: o, setExpanded: c } = ns(),
        u = o ? s : s.slice(0, 8),
        d = s.length > 8,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nN, { ...e, games: u }),
                d && (0, i.jsx)(z, { expanded: o, onClick: () => c((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(nu, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(td.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nk(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nT, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(na, { widget: n }),
    });
}
function nw(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nT, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(na, { widget: n }),
    });
}
var nR = n(875620);
function nL(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, nA.A)(t),
        c = (0, a.bG)([E.A], () => E.A.suggestedFetchIsLoading),
        u = V.intl.formatToPlainString(V.t["3mb1s5"], { game: r });
    return o || c
        ? (0, i.jsx)("div", { className: nC.mD })
        : (0, i.jsx)(q.m, {
              text: u,
              ariaHidden: !0,
              children: (0, i.jsxs)(H.D, {
                  className: nR.c9,
                  onClick: l,
                  "aria-label": u,
                  children: [
                      (0, i.jsx)(nv.A, {
                          className: nR.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(tc.PlusLargeIcon, { size: "md", className: nR.Xv, color: eR.A.colors.WHITE }),
                  ],
              }),
          });
}
function nO(e) {
    let { userId: t, widgetType: n, ...s } = e,
        { games: r, onAddGame: a } = k(n),
        { setExpanded: o } = ns(),
        { trackUserProfileEditAction: c } = (0, eq.NJ)(),
        u = l.useCallback(
            (e) => {
                a(e),
                    o(!0),
                    (0, F.ew)({ widgetType: n, game: { gameId: e } }),
                    c({ action: "GAME_ADDED", gameId: e, widgetEdited: n });
            },
            [a, n, c, o],
        );
    return (0, i.jsx)(tR, {
        ...s,
        children: (0, i.jsx)("ul", {
            className: nR.Vg,
            children: r.map((e) => {
                let { gameId: n } = e;
                return (0, i.jsx)("li", { children: (0, i.jsx)(nL, { onClick: () => u(n), userId: t, gameId: n }) }, n);
            }),
        }),
    });
}
var nP = n(870961);
function n_(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, i.jsx)(nh, { widget: t, ...n });
        case b.x.CURRENT_GAMES:
            return (0, i.jsx)(nf, { widget: t, ...n });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(nw, { widget: t, ...n });
        case b.x.PLAYED_GAMES:
            return (0, i.jsx)(nk, { widget: t, ...n });
        default:
            return null;
    }
}
function nD(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, ...o } = e,
        { setExpanded: c } = ns(),
        { shouldShowSuggestions: u, handleDismissSuggestions: d } = (function (e) {
            let [t, n] = l.useState(!1),
                i = e.type,
                s = (0, a.bG)([t8.default, t2.A], () => {
                    let e = t8.default.getId();
                    if (null == e) return !1;
                    let t = t2.A.getUserProfile(e);
                    return (t?.widgets ?? []).some((e) => e.type === i);
                }),
                r = (0, F.uA)(e);
            return {
                shouldShowSuggestions: !s && !t && !r,
                handleDismissSuggestions: l.useCallback(() => {
                    n(!0);
                }, []),
            };
        })(t),
        g = s && !r,
        m = g && u,
        x = (0, F.L)(t),
        f = (0, F.FM)(t, { showEditingControls: g }),
        h = (0, F.uA)(t),
        p = 1 === (0, F.cv)(t.type);
    return (0, i.jsx)(n_, {
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
                          nt,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => c(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, i.jsx)(nO, { userId: n.id, widgetType: t.type, onDismiss: d, className: nP.r }),
        ...o,
    });
}
function nG(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(nl, { widgetType: t.type, children: (0, i.jsx)(nD, { widget: t, ...n }) });
}
var nM = n(271383),
    nU = n(94160),
    nF = n(96173),
    nW = n(788259),
    nH = n(269507);
function nV(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: s } = (0, eq.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        u = (0, a.bG)([t2.A], () => t2.A.getUserProfile(t)?.fetchError != null, [t]),
        [d, g] = e2(!u),
        m = (0, nF.A)();
    return (
        l.useEffect(() => {
            r.current || u || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [u, n]),
        (0, i.jsxs)("div", {
            className: nH.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: nH.FS,
                    children: [
                        (0, i.jsx)(tT.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: V.intl.string(V.t["oqalC+"]),
                        }),
                        (0, i.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: u ? V.intl.string(V.t["+W59o5"]) : V.intl.string(V.t.O9SQ1c),
                        }),
                    ],
                }),
                !u &&
                    (0, i.jsx)("ul", {
                        className: nH.ZW,
                        "aria-label": V.intl.string(V.t["+EIBSA"]),
                        children: m.map((e) =>
                            (0, i.jsx)(
                                "li",
                                {
                                    ref: e.type === b.x.PERSONAL ? o : void 0,
                                    children: (0, i.jsx)(nW.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
                !u && (0, i.jsx)(e5, { targetElementRef: o, isVisible: d, markAsDismissed: g }),
            ],
        })
    );
}
var nB = n(366209);
function nz(e) {
    let { widget: t, ...n } = e;
    return t instanceof f.R
        ? (0, i.jsx)(O.A, { widget: t, ...n })
        : t instanceof I.Tu
          ? (0, i.jsx)(eB, { widget: t, ...n })
          : (0, p.fu)(t)
            ? (0, i.jsx)(nG, { widget: t, ...n })
            : t instanceof h.k
              ? (0, i.jsx)(tX, { widget: t, ...n })
              : null;
}
function nX() {
    return (0, i.jsxs)("div", {
        className: nB.mJ,
        children: [
            (0, i.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: V.intl.string(V.t["7blcz6"]) }),
        ],
    });
}
function nK(e) {
    let { user: t, guildId: n, channelId: s } = e,
        r = (0, R.A)(t.id),
        o = (0, L.A)(t.id),
        c = (function () {
            let [e, t] = (0, a.yK)([x.A], () => [x.A.ipCountryCode, x.A.ipCountryCodeRequest]),
                n = (0, g.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, d.xe)();
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
                        children: [(0, i.jsx)(e4, { className: nB.cG }), c && (0, i.jsx)(nX, {}), (0, i.jsx)(t0, {})],
                    }),
                r.map((e, l) =>
                    (0, i.jsx)(
                        nz,
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
            { onLoad: o } = T();
        l.useEffect(() => {
            !n && e && v.A.fetchSuggestedGames();
        }, [n, e]);
        let c = n && !r;
        l.useEffect(() => {
            if (!c) return;
            let e = t.map((e) => e.games).flat();
            i || o(s.suggestedGamesIds ?? [], s.suggestedWishlistGamesIds ?? [], e);
        }, [c]);
    })(o, I),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, u.A)(n);
        let { data: i, refetch: s } = (0, m.P)(e),
            r = l.useRef(null !== i);
        l.useEffect(() => {
            r.current && ((r.current = !1), s());
        }, [s]);
    })(t.id, j),
    h)
        ? (0, i.jsx)(nV, { userId: t.id })
        : o
          ? (0, i.jsx)(e6.D, { children: A() })
          : A();
}
function nY(e) {
    let { user: t, ...n } = e,
        s = l.useRef(null);
    (0, w.i)({ containerRef: s });
    let a = (0, nM.k)(t.id);
    return (0, i.jsxs)(nU.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(nB.XG, { [nB.az]: a }),
        fade: !0,
        children: [(0, i.jsx)(t1.A, { scrollerRef: s }), (0, i.jsx)(nK, { user: t, ...n })],
    });
}
