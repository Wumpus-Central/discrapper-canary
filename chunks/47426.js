n.d(t, { A: () => nG, u: () => nP });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(885574),
    c = n(834730),
    d = n(429913),
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
    T = n(282435);
let N = (0, C.sampleSize)(T.sx, T.sx.length),
    y = (0, S.v)((e, t) => ({
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
    let { bump: t, bumpMultiple: n, gameIds: i } = y();
    !(function (e) {
        let { remove: t, peekedGameIds: n } = y(),
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
        d = l.useMemo(
            () => ({ isExpanded: n, setIsExpanded: s, isAnyFieldClipped: r, setAnyFieldClipped: c }),
            [n, r, c],
        );
    return (0, i.jsx)(ei.Provider, { value: d, children: t });
}
var es = n(892572);
function er(e) {
    let { className: t, variant: n, color: s, value: a, maxLines: o, interactive: d = !0, disableMarkdown: u = !1 } = e,
        g = d ? $.d : $.j,
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
            maxLines: c,
            growWidth: d,
            disableMarkdown: u,
        } = e,
        g = l.useCallback((e) => a(e.trim()), [a]),
        m = (0, et.TX)({ value: t, onCommit: g }),
        x =
            "" === t.trim()
                ? null
                : (0, i.jsx)(er, { interactive: !1, variant: s, color: r, value: t, maxLines: c, disableMarkdown: u }),
        f = {
            ...m,
            removeVerticalPadding: !0,
            growWidth: d || m.isEditing,
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
    ed = n(922016),
    eu = n(22231),
    eg = n(750943),
    em = n(458499);
function ex(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    return (0, i.jsx)(ed.Y, {
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
    eI = n(97483),
    ej = n(192308),
    eA = n(765548),
    eE = n(229531),
    ev = n(515718),
    eC = n(741394),
    eS = n(38405);
function eb(e) {
    let { uploadType: t, returnRef: s, getCropAspectRatio: r, onUploadSuccess: a } = e,
        o = l.useRef(0),
        [c, d] = l.useState(null),
        [u, g] = l.useState(null),
        m = (0, eA.A)(a),
        x = l.useCallback(() => {
            (o.current = o.current + 1), d(null), g(null);
        }, []),
        f = l.useCallback(
            async (e, t, n, i) => {
                o.current = o.current + 1;
                let l = o.current;
                d(e);
                try {
                    let s = await E.A.uploadWidgetAsset(t);
                    if (o.current !== l) return;
                    d(null), g({ filename: s, unprocessedFile: n, transform: i }), m({ filename: s, localDataUri: e });
                } catch (e) {
                    if (o.current !== l) return;
                    d(null), (0, eh.P0)((0, ep.o)(V.intl.string(V.t.F4Neqh), eI.Ck.FAILURE)), eS.A.captureException(e);
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
                    o = (0, ev.aU)(s);
                o.size > 0xa00000
                    ? (0, eh.P0)((0, ep.o)(V.intl.string(V.t.YbdEFK), eI.Ck.FAILURE))
                    : f(
                          s,
                          new File(
                              [o],
                              ((t = r.name),
                              (n = o.type),
                              (i = (0, eE.B)(n) ?? "png"),
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
        previewUri: c,
        cancelUpload: x,
        getLastEdit: l.useCallback(
            (e) => (null != u && null != e && "filename" in e && e.filename === u.filename ? u : null),
            [u],
        ),
    };
}
var eT = n(652215),
    eN = n(339984),
    ey = n(148548);
function ek() {
    return (0, i.jsx)(Q, {
        label: V.intl.string(V.t.gQmDk4),
        onClick: function () {
            (0, F.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
        },
        className: ey.GU,
    });
}
function ew(e) {
    let { userId: t, section: n, sectionIndex: s, canEdit: a } = e,
        o = l.useRef(null),
        c = l.useRef(null),
        d = l.useRef(null);
    function u(e) {
        (0, F.AD)((t) => {
            let n = t.sections[s];
            if (n?.type !== P.K.COVER) return t;
            let i = [...t.sections];
            return (i[s] = e(n)), new I.Tu({ ...t, sections: i });
        });
    }
    function g(e) {
        u((t) => ({ ...t, title: e }));
    }
    function m(e) {
        u((t) => ({ ...t, subtitle: e }));
    }
    let x = l.useCallback(() => {
            let e = d.current?.getBoundingClientRect();
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
            onUploadSuccess: (e) => u((t) => ({ ...t, image: e })),
        });
    function A() {
        p(), u((e) => ({ ...e, image: void 0 }));
    }
    function E() {
        o.current?.activateUploadDialogue();
    }
    function v() {
        (0, F.AD)((e) => new I.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let C = null != h,
        S = a || "" !== n.title.trim() || "" !== n.subtitle.trim(),
        b = null != n.image || C,
        T = b || a,
        N = j(n.image);
    return (0, i.jsx)(X.N, {
        theme: b ? eT.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: d,
                className: r()(ey.kL, { [ey.Vp]: T }, e),
                children: [
                    a || null != n.image
                        ? (0, i.jsxs)("div", {
                              className: ey.El,
                              children: [
                                  (0, i.jsx)(ec.A, {
                                      cropAndUpload: f,
                                      imageInputRef: o,
                                      className: ey.Sl,
                                      canEdit: a,
                                      userId: t,
                                      image: n.image,
                                      previewUri: h,
                                      editVariant: "tooltip",
                                  }),
                                  b && S ? (0, i.jsx)("div", { className: ey.cw }) : null,
                              ],
                          })
                        : null,
                    a
                        ? (0, i.jsxs)(Y.A, {
                              className: ey.o1,
                              children: [
                                  null != n.image
                                      ? (0, i.jsx)(ef, {
                                            lastEdit: N,
                                            buttonRef: c,
                                            disabled: C,
                                            cropAndUpload: f,
                                            onChangeImage: E,
                                        })
                                      : null,
                                  (0, i.jsx)(Y.Y, {
                                      icon: K.TrashIcon,
                                      variant: "overlay-secondary",
                                      tooltipText: b ? V.intl.string(V.t.RyK5Ww) : V.intl.string(V.t.g2jVww),
                                      onClick: b ? A : v,
                                  }),
                              ],
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: r()(ey.hQ, e, { [ey.Vp]: T }),
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
            previewUri: d,
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
                          (0, i.jsx)(ec.A, {
                              className: r()(eL.k9, s ? eL.y2 : void 0),
                              canEdit: s,
                              userId: n,
                              image: l.image,
                              previewUri: d,
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
    function d() {
        a((e) => [...e, (0, I.yL)()]);
    }
    if (0 === n.fields.length) {
        if (!s) return null;
        if (!r)
            return (0, i.jsx)("div", { className: eL.kL, children: (0, i.jsx)(eO, { alwaysVisible: !0, onClick: d }) });
    }
    let u = n.fields.map((e, n) =>
            (0, i.jsx)(eP, { index: n, userId: t, field: e, canEdit: s, onFieldChange: o, onFieldRemove: c }, e.key),
        ),
        g = n.fields.length % 2 == 1;
    s && g && n.fields.length < 4 && u.push((0, i.jsx)(eO, { onClick: d }, "add-entry"));
    let m = s && !g && n.fields.length + 2 <= 4;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u.length > 0 ? (0, i.jsx)("div", { className: eL.kL, children: u }) : null,
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
        d = l.useMemo(() => t.sections.some((e) => e.type === P.K.COVER), [t.sections]);
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
                c && !d ? (0, i.jsx)(ek, {}) : null,
                t.sections.map((e, t) =>
                    (0, i.jsx)(eF, { userId: n.id, section: e, sectionIndex: t, canEdit: c, hasCoverSection: d }, t),
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
var e5 = n(410453);
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
        [d, u] = e2(),
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
            d && u(e8.i.TAKE_ACTION),
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
        }, [s, d, u]);
    return (0, i.jsxs)("div", {
        className: r()(e5.w, t),
        children: [
            (0, i.jsx)(c.E, {
                className: e5.D,
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: V.intl.string(V.t.OYlggR),
            }),
            g ? (0, i.jsx)(e3, { buttonRef: o, isCoachmarkVisible: d, markCoachmarkAsDismissed: u }) : null,
            (0, i.jsx)(eX.$, {
                icon: eY.j,
                text: V.intl.string(V.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: m,
                buttonRef: a,
            }),
            (0, i.jsx)(e7, { targetElementRef: g ? o : a, isVisible: d, markAsDismissed: u }),
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
        { isEditing: d } = c,
        u = V.intl.string(V.t["2gwc+H"]);
    return (
        l.useEffect(() => {
            s(d);
        }, [d, s]),
        l.useEffect(() => () => s(!1), [s]),
        (0, i.jsx)(et.yV, {
            ...c,
            size: "compact",
            removeVerticalPadding: !0,
            className: r()(ts.ZZ, { [ts.Dy]: c.isEditing }),
            preview: (0, i.jsxs)("span", {
                className: r()(ts.$, ts.TG),
                children: [
                    (0, i.jsx)(eu.PencilIcon, { size: "xxs", color: "currentColor", className: ts.wz }),
                    "" === n.trim() ? (0, i.jsx)(tr, { value: u, isPlaceholder: !0 }) : (0, i.jsx)(tr, { value: n }),
                ],
            }),
            placeholder: u,
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
    td = n(451395),
    tu = n(823016),
    tg = n(765178),
    tm = n(282988);
function tx(e) {
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
                        null != n && (0, tm.UE)(n),
                        tg.O.announce(V.intl.string(V.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var tf = n(233002);
function th(e) {
    let { item: t, index: n, isSelected: s, onSelect: a, allowEditing: o } = e,
        { registerDragHandleRef: c, manageFocusOnReorder: d } = (0, tu.r)(),
        u = l.useRef(null),
        g = o && ("saved" === t.status || "pending" === t.status),
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(H.D, {
                    className: r()(tf.Vs, { [tf.wH]: s }),
                    "aria-pressed": s,
                    "aria-label": V.intl.formatToPlainString(V.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, i.jsx)(ti.A, { item: t, ringSize: "sm", className: tf.nC }),
                }),
                g &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(td.jV, { buttonRef: c(t.key), className: tf.BU }),
                            (0, i.jsx)(tx, {
                                widgetClipId: t.key,
                                localClipId: "pending" === t.status ? t.localClipId : void 0,
                                className: tf.nM,
                            }),
                        ],
                    }),
            ],
        });
    return (0, i.jsx)("li", {
        ref: u,
        className: tf.NI,
        children: g
            ? (0, i.jsx)(td.mG, {
                  index: n,
                  itemId: t.key,
                  listType: b.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => u.current?.offsetWidth },
                  "aria-label": V.intl.formatToPlainString(V.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: F.N5,
                  onEnd: () => d(t.key),
                  className: tf.oE,
                  dropBeforeClassName: tf.A,
                  dropAfterClassName: tf.Ze,
                  draggingClassName: tf.Id,
                  children: m,
              })
            : m,
    });
}
function tp(e) {
    let { items: t, selectedKey: n, onSelect: l, onAddClip: s, allowEditing: r = !1 } = e,
        a = Math.max(0, 4 - t.length),
        o = (0, i.jsxs)("ul", {
            className: tf.Xm,
            children: [
                t.map((e, t) =>
                    (0, i.jsx)(th, { item: e, index: t, isSelected: e.key === n, onSelect: l, allowEditing: r }, e.key),
                ),
                null != s &&
                    Array.from({ length: a }, (e, t) =>
                        (0, i.jsx)(
                            "li",
                            {
                                className: tf.NI,
                                children: (0, i.jsx)(H.D, {
                                    className: tf.Yn,
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
    return r ? (0, i.jsx)(tu.B, { emptyListFallbackRef: null, children: o }) : o;
}
var tI = n(798108),
    tj = n(789645),
    tA = n(297264),
    tE = n(915089),
    tv = n(772168);
function tC(e) {
    let { onDismiss: t, children: n, className: l } = e,
        s = (0, tE.GV)();
    return (0, i.jsxs)("aside", {
        className: r()(tv.kL, l),
        "aria-labelledby": s,
        children: [
            (0, i.jsxs)("div", {
                className: tv.wx,
                children: [
                    (0, i.jsx)(H.D, {
                        className: tv.r,
                        "aria-label": V.intl.string(V.t["pUR+3g"]),
                        onClick: t,
                        children: (0, i.jsx)(tj.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(tA.D, {
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
var tS = n(335978);
function tb(e) {
    let { clip: t } = e,
        n = V.intl.formatToPlainString(V.t.gPRdVj, { clipName: t.name ?? t.applicationName }),
        s = l.useCallback(() => {
            (0, tm._A)(t, [tt.A.USER_PROFILE_MODAL_V2]);
        }, [t]);
    return (0, i.jsx)(q.m, {
        text: n,
        ariaHidden: !0,
        children: (0, i.jsxs)(H.D, {
            className: tS.Vs,
            "aria-label": n,
            onClick: s,
            children: [
                (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: tS.xn, loading: "lazy" }),
                (0, i.jsx)(tc.PlusLargeIcon, { size: "sm", color: "currentColor", className: tS.Xv }),
            ],
        }),
    });
}
function tT(e) {
    let { clips: t, ...n } = e;
    return (0, i.jsx)(tC, {
        ...n,
        children: (0, i.jsx)("ul", {
            className: tS.p_,
            children: t.map((e) => (0, i.jsx)("li", { className: tS.NI, children: (0, i.jsx)(tb, { clip: e }) }, e.id)),
        }),
    });
}
var tN = n(558285),
    ty = n(608857),
    tk = n(915725),
    tw = n(409067),
    tR = n(696016),
    tL = n(716112);
function tO(e) {
    let { onClick: t } = e,
        n = V.intl.string(V.t.rI0i0a);
    return (0, i.jsx)(q.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, i.jsx)(e9.K, { variant: "secondary", size: "sm", icon: te.T, "aria-label": n, onClick: t }),
    });
}
function tP() {
    return (0, i.jsx)("div", {
        className: tL.p$,
        children: (0, i.jsx)(c.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: V.intl.format(V.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function t_(e) {
    let t,
        s,
        r,
        { widget: o, user: c, allowEditing: d, disableInteraction: u, ...g } = e,
        [m, x] = l.useState(null),
        [f, h] = l.useState(!1),
        [p, I] = l.useState(!1),
        j = l.useRef(void 0),
        A = (0, ty.A)(o),
        E =
            ((t = (0, a.yK)([tk.Ay], () => Object.values(tk.Ay.getClips()))),
            (s = (0, a.bG)([tk.Ay], () => tk.Ay.getSettings().showPovClipsInGallery)),
            (r = (0, tm.UQ)()),
            l.useMemo(() => {
                let e = new Set(r.keys());
                for (let t of o.clips) null != t.localClipId && e.add(t.localClipId);
                return t
                    .filter((t) => !(e.has(t.id) || null == t.applicationId || 0 === t.length || (!s && (0, tw.kD)(t))))
                    .sort((e, t) => {
                        let n = !0 === e.isFavorite;
                        return n !== (!0 === t.isFavorite) ? (n ? -1 : 1) : t.createdAt - e.createdAt;
                    })
                    .slice(0, 3);
            }, [t, r, s, o.clips])),
        v = d && !0 !== u,
        C = 0 === A.length,
        S = A.length >= 4,
        [b] = l.useState(() => E.length >= 3),
        [T, N] = l.useState(!1),
        y = v && !S && b && !T && E.length > 0,
        k = l.useCallback(() => N(!0), []),
        w = A.find((e) => e.key === m) ?? A[A.length - 1],
        R = l.useMemo(() => (!0 === u ? [] : A.filter(ty.K)), [A, u]),
        L = null != w ? R.findIndex((e) => e.key === w.key) : -1,
        O = l.useCallback(() => {
            L < 0 || (0, tN.A)({ clips: R, startingIndex: L });
        }, [R, L]),
        P = l.useCallback(() => {
            j.current = window.setTimeout(() => h(!0), 150);
        }, []),
        _ = l.useCallback(() => {
            window.clearTimeout(j.current), h(!1);
        }, []);
    l.useEffect(() => () => window.clearTimeout(j.current), []);
    let D = l.useCallback(() => {
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
                            ((e) => (0, tm._A)(e, [tt.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                        },
                    });
            },
            { modalKey: tR.nm },
        );
    }, []);
    return (0, i.jsx)(W.A, {
        userId: c.id,
        widget: o,
        allowEditing: d,
        disableInteraction: u,
        className: tL.kL,
        headerTitle: (0, F.L)(o),
        headerActionButtons: v && C ? [(0, i.jsx)(tO, { onClick: D }, "clips-gallery-add-clip")] : void 0,
        trailingContent: y && (0, i.jsx)(tT, { clips: E, onDismiss: k }),
        ...g,
        children:
            null != w
                ? (0, i.jsxs)("div", {
                      className: tL.nV,
                      children: [
                          (0, i.jsxs)("div", {
                              className: tL.aM,
                              onMouseEnter: P,
                              onMouseLeave: _,
                              children: [
                                  (0, i.jsx)(ti.A, { item: w, ringSize: "lg", isPlaying: f, className: tL.VH }),
                                  L >= 0 &&
                                      !p &&
                                      (0, i.jsx)(H.D, {
                                          className: tL.Hf,
                                          "aria-label": V.intl.string(V.t.CscLHM),
                                          onClick: O,
                                      }),
                                  (0, i.jsx)(tI.A, {
                                      children:
                                          ("saved" === w.status || "pending" === w.status) &&
                                          (0, i.jsx)(to, {
                                              clipId: w.key,
                                              title: w.title,
                                              allowEditing: v,
                                              onEditingChange: I,
                                          }),
                                  }),
                              ],
                          }),
                          (0, i.jsx)(tp, {
                              items: A,
                              selectedKey: w.key,
                              onSelect: x,
                              onAddClip: v && !S ? D : void 0,
                              allowEditing: v,
                          }),
                      ],
                  })
                : (0, i.jsx)(tP, {}),
    });
}
var tD = n(704824),
    tG = n(382483),
    tM = n(385113),
    tU = n(334074),
    tF = n(657718),
    tW = n(478016);
function tH(e) {
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
                        children: (0, i.jsx)(tF.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tj.P,
                            "aria-label": V.intl.string(V.t.WAI6xu),
                            onClick: () => {
                                s(e8.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(q.m, {
                        text: V.intl.string(V.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(tF.S, {
                            variant: "primary",
                            size: "sm",
                            icon: tW.U,
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
function tV() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([tM.A], () => tM.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, tG.Wq)();
        }, []);
        let t = (0, a.bG)([M.default], () => M.default.getCurrentUser()),
            n = (0, d.A)(e),
            { tokens: i, fetched: s } = (0, tD.j)(e),
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
            { eligibleToShow: u, markAsDismissed: g } = (0, tU.hj)({
                applications: c,
                dismissibleContent: eQ.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: tU.SH,
            }),
            m = l.useMemo(() => c.filter((e) => u.includes(e.id)), [c, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = n[0];
    return null == r ? null : (0, i.jsx)(tH, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var tB = n(128988),
    tz = n(280450),
    tX = n(321191),
    tK = n(896170),
    tY = n(305866),
    tq = n(453318),
    tZ = n(321108),
    tJ = n(383329),
    tQ = n(67710);
function t$(e) {
    let { widgetType: t, widget: n, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: c } = (0, eq.NJ)(),
        [d, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, tJ.R)({ query: d }),
        f = d.trim().length > 0,
        { gameIds: h, onAddGame: p } = k(t),
        I = (0, tZ.A)(h),
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
        E = l.useCallback((e) => e, []),
        v = l.useMemo(() => ({ ...x, threshold: tK.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        C = l.useCallback((e) => (f || "" === e.trim() ? A.length : (0, tK.Ht)(A, e, v).length), [f, A, v]),
        S = l.useCallback(
            (e) => {
                let n = e.target.value;
                "" === d.trim() &&
                    "" !== n.trim() &&
                    c({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: C(n),
                    }),
                    u(n),
                    (g.current = n);
            },
            [d, c, t, C],
        );
    return (0, i.jsx)(ed.Y, {
        ...a,
        onRequestOpen: () => {
            c({ action: "PRESS_ADD_GAME", widgetEdited: t }), u(""), (g.current = "");
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
            return (0, i.jsx)(tY.l, {
                className: tQ.C,
                "aria-label": V.intl.string(V.t.uqw8wK),
                children: (0, i.jsxs)(tq.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: A,
                    matchSorterOptions: v,
                    customMatchSorter: f ? E : void 0,
                    children: [
                        (0, i.jsx)(tq.a3, {
                            label: V.intl.string(V.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: V.intl.string(V.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: S,
                        }),
                        (0, i.jsx)(tq.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function t0(e) {
    let { disabled: t, ...n } = e,
        s = l.useRef(null);
    return (0, i.jsx)(t$, {
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
function t1(e) {
    let t = l.useRef(null);
    return (0, i.jsx)(t$, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, i.jsx)(H.D, {
                innerRef: t,
                className: tQ.c,
                "aria-label": V.intl.string(V.t.PYyENc),
                ...e,
                children: (0, i.jsx)(tc.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let t8 = l.createContext(null);
function t2(e) {
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
    return (0, i.jsx)(t8.Provider, { value: { expanded: r, setExpanded: o }, children: n });
}
function t7() {
    let e = l.useContext(t8);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var t5 = n(67438);
function t3(e) {
    let { widget: t } = e,
        n = (0, F.cv)(t.type),
        l = 1 === n,
        s = l ? V.intl.string(V.t["3FdPBT"]) : V.intl.format(V.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? t5.O : t5.k,
        children: [
            l && (0, i.jsx)(t1, { widget: t, widgetType: t.type }),
            (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var t4 = n(683071),
    t6 = n(312252);
function t9(e) {
    let { widgetType: t, gameCount: n } = e,
        l = (0, F.cv)(t);
    return n <= l
        ? null
        : (0, i.jsx)("div", {
              role: "alert",
              className: t6.l,
              children: (0, i.jsx)(t4.w, {
                  type: "warning",
                  children: V.intl.formatToPlainString(V.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var ne = n(249264),
    nt = n(148420);
function nn(e) {
    let { games: t, user: n, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tu.r)();
    return (0, i.jsx)("ul", {
        className: nt.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(ne.A, {
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
function ni(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e6.r)(),
        a = r(t),
        { expanded: o, setExpanded: c } = t7(),
        d = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nn, { ...e, games: d }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => c((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(t9, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tu.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nl(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(ni, {
                      user: t,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(t3, { widget: n }),
    });
}
function ns(e) {
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
                ? (0, i.jsx)(ne.A, {
                      user: t,
                      widgetType: n.type,
                      game: c,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(t3, { widget: n }),
    });
}
var nr = n(793693);
function na(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: nr.V,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var no = n(686246),
    nc = n(201438),
    nd = n(788593),
    nu = n(858808),
    ng = n(365611),
    nm = n(900850);
function nx(e) {
    let { index: t, widgetType: n, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: c } = (0, tu.r)(),
        d = l.useRef(null);
    return (0, i.jsx)(td.mG, {
        index: t,
        itemId: s.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => d.current?.offsetWidth },
        "aria-label": V.intl.formatToPlainString(V.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, F.Un)(n, e, t),
        onEnd: () => c(s.gameId),
        className: nm.kL,
        dropBeforeClassName: nm.A,
        dropAfterClassName: nm.Ze,
        draggingClassName: nm.Id,
        children: (0, i.jsx)("div", { ref: d, className: nm.An, children: o }),
    });
}
function nf(e) {
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
        { coverImageUrl: d, gameName: u, isLoading: g } = (0, nc.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tu.r)(),
        x = s && !r,
        { isDragging: f } = (0, no.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nd.A, {
                    imageSrc: d,
                    gameName: u,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: r,
                    className: null == d || r ? void 0 : ng.iL,
                    hideTooltip: f,
                    coverRef: c,
                }),
                x && (0, i.jsx)(td.jV, { buttonRef: m(t.gameId), className: nm.BU }),
                x && (0, i.jsx)(nu.A, { game: t, widgetType: l, className: nm.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, i.jsx)("div", { className: ng.mD })
        : x
          ? (0, i.jsx)(nx, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: d, gameName: u, children: h() })
          : (0, i.jsx)("div", { className: nm.kL, children: h() });
}
function nh(e) {
    let { games: t, userId: n, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tu.r)();
    return (0, i.jsx)(na, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(nf, {
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
function np(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e6.r)(),
        a = r(t),
        { expanded: o, setExpanded: c } = t7(),
        d = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nh, { ...e, games: d }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => c((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(t9, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tu.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nI(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(np, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(t3, { widget: n }),
    });
}
function nj(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(np, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(t3, { widget: n }),
    });
}
var nA = n(875620);
function nE(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, nc.A)(t),
        c = (0, a.bG)([v.A], () => v.A.suggestedFetchIsLoading),
        d = V.intl.formatToPlainString(V.t["3mb1s5"], { game: r });
    return o || c
        ? (0, i.jsx)("div", { className: ng.mD })
        : (0, i.jsx)(q.m, {
              text: d,
              ariaHidden: !0,
              children: (0, i.jsxs)(H.D, {
                  className: nA.c9,
                  onClick: l,
                  "aria-label": d,
                  children: [
                      (0, i.jsx)(nd.A, {
                          className: nA.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(tc.PlusLargeIcon, { size: "md", className: nA.Xv, color: eR.A.colors.WHITE }),
                  ],
              }),
          });
}
function nv(e) {
    let { userId: t, widgetType: n, ...s } = e,
        { games: r, onAddGame: a } = k(n),
        { setExpanded: o } = t7(),
        { trackUserProfileEditAction: c } = (0, eq.NJ)(),
        d = l.useCallback(
            (e) => {
                a(e),
                    o(!0),
                    (0, F.ew)({ widgetType: n, game: { gameId: e } }),
                    c({ action: "GAME_ADDED", gameId: e, widgetEdited: n });
            },
            [a, n, c, o],
        );
    return (0, i.jsx)(tC, {
        ...s,
        children: (0, i.jsx)("ul", {
            className: nA.Vg,
            children: r.map((e) => {
                let { gameId: n } = e;
                return (0, i.jsx)("li", { children: (0, i.jsx)(nE, { onClick: () => d(n), userId: t, gameId: n }) }, n);
            }),
        }),
    });
}
var nC = n(870961);
function nS(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, i.jsx)(ns, { widget: t, ...n });
        case b.x.CURRENT_GAMES:
            return (0, i.jsx)(nl, { widget: t, ...n });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(nj, { widget: t, ...n });
        case b.x.PLAYED_GAMES:
            return (0, i.jsx)(nI, { widget: t, ...n });
        default:
            return null;
    }
}
function nb(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, ...o } = e,
        { setExpanded: c } = t7(),
        { shouldShowSuggestions: d, handleDismissSuggestions: u } = (function (e) {
            let [t, n] = l.useState(!1),
                i = e.type,
                s = (0, a.bG)([tz.default, tX.A], () => {
                    let e = tz.default.getId();
                    if (null == e) return !1;
                    let t = tX.A.getUserProfile(e);
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
        m = g && d,
        x = (0, F.L)(t),
        f = (0, F.FM)(t, { showEditingControls: g }),
        h = (0, F.uA)(t),
        p = 1 === (0, F.cv)(t.type);
    return (0, i.jsx)(nS, {
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
                          t0,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => c(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, i.jsx)(nv, { userId: n.id, widgetType: t.type, onDismiss: u, className: nC.r }),
        ...o,
    });
}
function nT(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(t2, { widgetType: t.type, children: (0, i.jsx)(nb, { widget: t, ...n }) });
}
var nN = n(271383),
    ny = n(94160),
    nk = n(96173),
    nw = n(788259),
    nR = n(269507);
function nL(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: s } = (0, eq.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        d = (0, a.bG)([tX.A], () => tX.A.getUserProfile(t)?.fetchError != null, [t]),
        [u, g] = e2(!d),
        m = (0, nk.A)();
    return (
        l.useEffect(() => {
            r.current || d || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [d, n]),
        (0, i.jsxs)("div", {
            className: nR.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: nR.FS,
                    children: [
                        (0, i.jsx)(tA.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: V.intl.string(V.t["oqalC+"]),
                        }),
                        (0, i.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: d ? V.intl.string(V.t["+W59o5"]) : V.intl.string(V.t.O9SQ1c),
                        }),
                    ],
                }),
                !d &&
                    (0, i.jsx)("ul", {
                        className: nR.ZW,
                        "aria-label": V.intl.string(V.t["+EIBSA"]),
                        children: m.map((e) =>
                            (0, i.jsx)(
                                "li",
                                {
                                    ref: e.type === b.x.PERSONAL ? o : void 0,
                                    children: (0, i.jsx)(nw.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
                !d && (0, i.jsx)(e7, { targetElementRef: o, isVisible: u, markAsDismissed: g }),
            ],
        })
    );
}
var nO = n(366209);
function nP(e) {
    let { widget: t, ...n } = e;
    return t instanceof f.R
        ? (0, i.jsx)(O.A, { widget: t, ...n })
        : t instanceof I.Tu
          ? (0, i.jsx)(eB, { widget: t, ...n })
          : (0, p.fu)(t)
            ? (0, i.jsx)(nT, { widget: t, ...n })
            : t instanceof h.k
              ? (0, i.jsx)(t_, { widget: t, ...n })
              : null;
}
function n_() {
    return (0, i.jsxs)("div", {
        className: nO.mJ,
        children: [
            (0, i.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: V.intl.string(V.t["7blcz6"]) }),
        ],
    });
}
function nD(e) {
    let { user: t, guildId: n, channelId: s } = e,
        r = (0, R.A)(t.id),
        o = (0, L.A)(t.id),
        c = (function () {
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
                        children: [(0, i.jsx)(e4, { className: nO.cG }), c && (0, i.jsx)(n_, {}), (0, i.jsx)(tV, {})],
                    }),
                r.map((e, l) =>
                    (0, i.jsx)(
                        nP,
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
            { onLoad: o } = y();
        l.useEffect(() => {
            !n && e && E.A.fetchSuggestedGames();
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
        (0, d.A)(n);
        let { data: i, refetch: s } = (0, m.P)(e),
            r = l.useRef(null !== i);
        l.useEffect(() => {
            r.current && ((r.current = !1), s());
        }, [s]);
    })(t.id, j),
    h)
        ? (0, i.jsx)(nL, { userId: t.id })
        : o
          ? (0, i.jsx)(e6.D, { children: A() })
          : A();
}
function nG(e) {
    let { user: t, ...n } = e,
        s = l.useRef(null);
    (0, w.i)({ containerRef: s });
    let a = (0, nN.k)(t.id);
    return (0, i.jsxs)(ny.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(nO.XG, { [nO.az]: a }),
        fade: !0,
        children: [(0, i.jsx)(tB.A, { scrollerRef: s }), (0, i.jsx)(nD, { user: t, ...n })],
    });
}
