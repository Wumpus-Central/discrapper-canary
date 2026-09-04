n.d(t, { A: () => n0, u: () => nJ });
var i = n(477900),
    l = n(582128),
    s = n(503698),
    r = n.n(s),
    a = n(17928),
    o = n(885574),
    d = n(834730),
    u = n(429913),
    c = n(277984),
    g = n(840387),
    m = n(201718),
    f = n(615405),
    x = n(633075),
    h = n(646976),
    I = n(289173),
    p = n(210598),
    A = n(311043),
    j = n(569926),
    E = n(958805),
    v = n(61881),
    S = n(435558),
    C = n(196765),
    b = n(540185),
    k = n(282435);
let T = (0, S.sampleSize)(k.sx, k.sx.length),
    N = (0, C.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (n, i, l) => {
            let s = new Set(l.map((e) => e.gameId));
            for (let l of (e({
                stack: [...n.filter((e) => !s.has(e)), ...T],
                wishlistStack: [...i.filter((e) => !s.has(e)), ...T],
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
    let { bump: t, bumpMultiple: n, gameIds: i } = N();
    !(function (e) {
        let { remove: t, peekedGameIds: n } = N(),
            i = l.useMemo(() => n[e] ?? [], [n, e]);
        (0, j.x)(i);
        let s = (0, a.yK)([A.A], () => i.map((e) => A.A.isFetching(e)));
        l.useEffect(() => {
            for (let n of i) {
                let i = A.A.didFetchingFail(n),
                    l = A.A.hasNoData(n),
                    s = !!A.A.getGame(n),
                    r = null != A.A.getCoverImageUrl(n);
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
        o = (0, a.yK)([A.A], () => s.map((e) => A.A.isFetching(e)));
    l.useEffect(() => {
        let t = s.filter((e) => {
            let t = A.A.didFetchingFail(e),
                n = A.A.hasNoData(e),
                i = !!A.A.getGame(e),
                l = null != A.A.getCoverImageUrl(e);
            return t || n || (i && !l);
        });
        t.length > 0 && n(t, e);
    }, [s, e, n, o]);
    let d = l.useMemo(() => s.map((e) => ({ gameId: e })), [s]);
    return { gameIds: s, games: d, onAddGame: r };
}
var w = n(600761),
    R = n(667049),
    _ = n(389667),
    L = n(520082),
    O = n(869484),
    P = n(315629),
    D = n(465794),
    M = n(450232),
    G = n(287809),
    U = n(158045),
    W = n(735321),
    F = n(623280),
    H = n(939249),
    B = n(375708),
    V = n(954165);
function z(e) {
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
var K = n(43990),
    Y = n(241326),
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
                t ? o.add(e) : o.delete(e), a(o.size > 0);
            },
            [o],
        ),
        u = l.useMemo(
            () => ({ isExpanded: n, setIsExpanded: s, isAnyFieldClipped: r, setAnyFieldClipped: d }),
            [n, r, d],
        );
    return (0, i.jsx)(en.Provider, { value: u, children: t });
}
var el = n(892572);
function es(e) {
    let { className: t, variant: n, color: s, value: a, maxLines: o, interactive: u = !0, disableMarkdown: c = !1 } = e,
        g = u ? $.d : $.j,
        { textRef: m, lineClamp: f } = (function (e, t) {
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
        className: r()(el.YD, { [el.Lq]: o > 1 }, t),
        variant: n,
        color: s,
        lineClamp: f,
        children: c ? a : g(a),
    });
}
function er(e) {
    let {
            value: t,
            placeholder: n,
            variant: s,
            color: r,
            onCommit: a,
            maxLength: o,
            maxLines: d,
            growWidth: u,
            disableMarkdown: c,
        } = e,
        g = l.useCallback((e) => a(e.trim()), [a]),
        m = (0, ee.T)({ value: t, onCommit: g }),
        f =
            "" === t.trim()
                ? null
                : (0, i.jsx)(es, { interactive: !1, variant: s, color: r, value: t, maxLines: d, disableMarkdown: c }),
        x = {
            ...m,
            removeVerticalPadding: !0,
            growWidth: u || m.isEditing,
            preview: f,
            placeholder: n,
            editButtonAriaLabel: n,
            label: n,
            maxLength: o,
            className: el.ZZ,
        };
    return 1 === d
        ? (0, i.jsx)(ee.y, { ...x, variant: "compact", textVariant: s })
        : (0, i.jsx)(ee.y, { ...x, variant: "multiline", rows: 1, maxRows: d, textVariant: s });
}
function ea(e) {
    return e.canEdit
        ? (0, i.jsx)(er, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, i.jsx)(es, {
                variant: e.variant,
                color: e.color,
                value: e.value,
                maxLines: e.maxLines,
                disableMarkdown: e.disableMarkdown,
            });
}
var eo = n(326009),
    ed = n(922016),
    eu = n(22231),
    ec = n(750943),
    eg = n(458499);
function em(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    return (0, i.jsx)(ed.Y, {
        targetElementRef: n,
        align: "right",
        position: "bottom",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: n } = e;
            return (0, i.jsx)(eg.A, { lastEdit: t, cropAndUpload: s, onChangeImage: r, onClose: n });
        },
        children: (e) =>
            (0, i.jsx)(X.Y, {
                ...e,
                ref: n,
                icon: eu.PencilIcon,
                variant: "overlay-secondary",
                tooltipText: B.intl.string(B.t.RWkUzH),
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
              icon: ec.X,
              variant: "overlay-secondary",
              tooltipText: B.intl.string(B.t.dh0LD5),
              disabled: l,
              onClick: r,
          })
        : (0, i.jsx)(em, { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r });
}
var ex = n(691540),
    eh = n(857250),
    eI = n(97483),
    ep = n(192308),
    eA = n(765548),
    ej = n(229531),
    eE = n(515718),
    ev = n(741394),
    eS = n(38405);
function eC(e) {
    let { uploadType: t, returnRef: s, getCropAspectRatio: r, onUploadSuccess: a } = e,
        o = l.useRef(0),
        [d, u] = l.useState(null),
        [c, g] = l.useState(null),
        m = (0, eA.A)(a),
        f = l.useCallback(() => {
            (o.current = o.current + 1), u(null), g(null);
        }, []),
        x = l.useCallback(
            async (e, t, n, i) => {
                o.current = o.current + 1;
                let l = o.current;
                u(e);
                try {
                    let s = await E.A.uploadWidgetAsset(t);
                    if (o.current !== l) return;
                    u(null), g({ filename: s, unprocessedFile: n, transform: i }), m({ filename: s, localDataUri: e });
                } catch (e) {
                    if (o.current !== l) return;
                    u(null), (0, ex.P0)((0, eh.o)(B.intl.string(B.t.F4Neqh), eI.Ck.FAILURE)), eS.A.captureException(e);
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
                    ? (0, ex.P0)((0, eh.o)(B.intl.string(B.t.YbdEFK), eI.Ck.FAILURE))
                    : x(
                          s,
                          new File(
                              [o],
                              ((t = r.name),
                              (n = o.type),
                              (i = (0, ej.B)(n) ?? "png"),
                              (l = (0, ev.kh)(t)),
                              `${"" !== l ? l : "image"}.${i}`),
                              { type: o.type },
                          ),
                          r,
                          a,
                      );
            },
            [x],
        );
    return {
        cropAndUpload: l.useCallback(
            (e, l, a) => {
                let o = r?.();
                (0, ep.openModalLazy)(
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
        cancelUpload: f,
        getLastEdit: l.useCallback(
            (e) => (null != c && null != e && "filename" in e && e.filename === c.filename ? c : null),
            [c],
        ),
    };
}
var eb = n(652215),
    ek = n(339984),
    eT = n(148548);
function eN() {
    return (0, i.jsx)(Q, {
        label: B.intl.string(B.t.gQmDk4),
        onClick: function () {
            (0, W.AD)((e) => new p.Tu({ ...e, sections: [(0, p.K)(), ...e.sections] }));
        },
        className: eT.GU,
    });
}
function ey(e) {
    let { userId: t, section: n, sectionIndex: s, canEdit: a } = e,
        o = l.useRef(null),
        d = l.useRef(null),
        u = l.useRef(null);
    function c(e) {
        (0, W.AD)((t) => {
            let n = t.sections[s];
            if (n?.type !== O.K.COVER) return t;
            let i = [...t.sections];
            return (i[s] = e(n)), new p.Tu({ ...t, sections: i });
        });
    }
    function g(e) {
        c((t) => ({ ...t, title: e }));
    }
    function m(e) {
        c((t) => ({ ...t, subtitle: e }));
    }
    let f = l.useCallback(() => {
            let e = u.current?.getBoundingClientRect();
            return null != e && e.width > 0 && e.height > 0 ? e.width / e.height : void 0;
        }, []),
        {
            cropAndUpload: x,
            previewUri: h,
            cancelUpload: I,
            getLastEdit: A,
        } = eC({
            uploadType: ek.HL.PERSONAL_WIDGET_COVER,
            returnRef: d,
            getCropAspectRatio: f,
            onUploadSuccess: (e) => c((t) => ({ ...t, image: e })),
        });
    function j() {
        I(), c((e) => ({ ...e, image: void 0 }));
    }
    function E() {
        o.current?.activateUploadDialogue();
    }
    function v() {
        (0, W.AD)((e) => new p.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let S = null != h,
        C = a || "" !== n.title.trim() || "" !== n.subtitle.trim(),
        b = null != n.image || S,
        k = b || a,
        T = A(n.image);
    return (0, i.jsx)(K.N, {
        theme: b ? eb.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: u,
                className: r()(eT.kL, { [eT.Vp]: k }, e),
                children: [
                    a || null != n.image
                        ? (0, i.jsxs)("div", {
                              className: eT.El,
                              children: [
                                  (0, i.jsx)(eo.A, {
                                      cropAndUpload: x,
                                      imageInputRef: o,
                                      className: eT.Sl,
                                      canEdit: a,
                                      userId: t,
                                      image: n.image,
                                      previewUri: h,
                                      editVariant: "tooltip",
                                  }),
                                  b && C ? (0, i.jsx)("div", { className: eT.cw }) : null,
                              ],
                          })
                        : null,
                    a
                        ? (0, i.jsxs)(X.A, {
                              className: eT.o1,
                              children: [
                                  null != n.image
                                      ? (0, i.jsx)(ef, {
                                            lastEdit: T,
                                            buttonRef: d,
                                            disabled: S,
                                            cropAndUpload: x,
                                            onChangeImage: E,
                                        })
                                      : null,
                                  (0, i.jsx)(X.Y, {
                                      icon: Y.TrashIcon,
                                      variant: "overlay-secondary",
                                      tooltipText: b ? B.intl.string(B.t.RyK5Ww) : B.intl.string(B.t.g2jVww),
                                      onClick: b ? j : v,
                                  }),
                              ],
                          })
                        : null,
                    (0, i.jsxs)("div", {
                        className: r()(eT.hQ, e, { [eT.Vp]: k }),
                        children: [
                            (0, i.jsx)(ea, {
                                canEdit: a,
                                growWidth: !0,
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                value: n.title,
                                placeholder: B.intl.string(B.t.KqCDvK),
                                onCommit: g,
                                maxLength: 50,
                                maxLines: 2,
                            }),
                            (0, i.jsx)(ea, {
                                canEdit: a,
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
var ew = n(661531),
    eR = n(603090);
function e_(e) {
    let { onClick: t, alwaysVisible: n = !1 } = e;
    return (0, i.jsxs)(H.D, {
        onClick: t,
        className: r()(eR.cR, { [eR.mr]: n }),
        children: [
            (0, i.jsx)(ec.X, { size: "xs", color: ew.A.colors.ICON_SUBTLE }),
            (0, i.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", children: B.intl.string(B.t["9AY+/x"]) }),
        ],
    });
}
function eL(e) {
    let { index: t, userId: n, field: l, canEdit: s, onFieldChange: a, onFieldRemove: o } = e,
        {
            cropAndUpload: d,
            previewUri: u,
            cancelUpload: c,
            getLastEdit: g,
        } = eC({
            uploadType: ek.HL.PERSONAL_WIDGET_FIELD,
            onUploadSuccess: (e) => a(l.key, (t) => ({ ...t, image: e })),
        }),
        m = s ? !0 !== l.hideImage : null != l.image;
    return (0, i.jsxs)("div", {
        className: eR.ez,
        children: [
            m
                ? (0, i.jsxs)("div", {
                      className: eR.tF,
                      children: [
                          (0, i.jsx)(eo.A, {
                              className: r()(eR.k9, s ? eR.y2 : void 0),
                              canEdit: s,
                              userId: n,
                              image: l.image,
                              previewUri: u,
                              cropAndUpload: d,
                              editVariant: "overlay",
                              lastEdit: g(l.image),
                          }),
                          s
                              ? (0, i.jsx)(X.A, {
                                    className: eR.ij,
                                    children: (0, i.jsx)(X.Y, {
                                        variant: "overlay-secondary",
                                        tooltipText: B.intl.string(B.t.RyK5Ww),
                                        onClick: function () {
                                            c(),
                                                a(l.key, (e) =>
                                                    null != e.image
                                                        ? { ...e, image: void 0 }
                                                        : { ...e, image: void 0, hideImage: !0 },
                                                );
                                        },
                                        icon: Y.TrashIcon,
                                    }),
                                })
                              : null,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: eR.oT,
                children: [
                    (0, i.jsx)(ea, {
                        canEdit: s,
                        variant: "text-sm/medium",
                        color: "text-default",
                        value: l.title,
                        placeholder: B.intl.formatToPlainString(B.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            a(l.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 40,
                        maxLines: 2,
                    }),
                    (0, i.jsx)(ea, {
                        canEdit: s,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        value: l.description,
                        placeholder: B.intl.formatToPlainString(B.t.Hs14K3, { number: t + 1 }),
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
                      className: eR.Ms,
                      children: [
                          m
                              ? null
                              : (0, i.jsx)(X.Y, {
                                    variant: "overlay-secondary",
                                    tooltipText: B.intl.string(B.t.i3vRzP),
                                    onClick: function () {
                                        a(l.key, (e) => ({ ...e, hideImage: void 0 }));
                                    },
                                    icon: ec.X,
                                }),
                          (0, i.jsx)(X.Y, {
                              variant: "overlay-secondary",
                              tooltipText: B.intl.string(B.t.g2jVww),
                              onClick: function () {
                                  o(l.key);
                              },
                              icon: Y.TrashIcon,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eO(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r } = e;
    function a(e) {
        (0, W.AD)((t) => {
            let n = t.sections[l];
            if (n?.type !== O.K.FIELDS) return t;
            let i = [...t.sections];
            return (i[l] = { ...n, fields: e(n.fields) }), new p.Tu({ ...t, sections: i });
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
    function u() {
        a((e) => [...e, (0, p.yL)()]);
    }
    if (0 === n.fields.length) {
        if (!s) return null;
        if (!r)
            return (0, i.jsx)("div", { className: eR.kL, children: (0, i.jsx)(e_, { alwaysVisible: !0, onClick: u }) });
    }
    let c = n.fields.map((e, n) =>
            (0, i.jsx)(eL, { index: n, userId: t, field: e, canEdit: s, onFieldChange: o, onFieldRemove: d }, e.key),
        ),
        g = n.fields.length % 2 == 1;
    s && g && n.fields.length < 4 && c.push((0, i.jsx)(e_, { onClick: u }, "add-entry"));
    let m = s && !g && n.fields.length + 2 <= 4;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            c.length > 0 ? (0, i.jsx)("div", { className: eR.kL, children: c }) : null,
            m
                ? (0, i.jsx)(Q, {
                      label: B.intl.string(B.t.t4vU5I),
                      onClick: function () {
                          a((e) => [...e, (0, p.yL)(), (0, p.yL)()]);
                      },
                  })
                : null,
        ],
    });
}
var eP = n(202541),
    eD = n(877068);
let eM = { section: eb.JJy.PERSONAL_WIDGET };
function eG(e) {
    let { widget: t, canEdit: n } = e;
    return (0, i.jsxs)("div", {
        className: eD.wx,
        children: [
            (0, i.jsx)(M.A, { size: "xs", className: eD.nr }),
            (0, i.jsx)(ea, {
                canEdit: n,
                variant: "text-sm/medium",
                color: "text-default",
                value: t.header,
                placeholder: B.intl.string(B.t.fjSaAm),
                onCommit: function (e) {
                    (0, W.AD)((t) => new p.Tu({ ...t, header: e }));
                },
                maxLength: 50,
                maxLines: 1,
                disableMarkdown: !0,
            }),
        ],
    });
}
function eU(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r } = e;
    switch (n.type) {
        case O.K.COVER:
            return (0, i.jsx)(ey, { userId: t, section: n, sectionIndex: l, canEdit: s });
        case O.K.FIELDS:
            return (0, i.jsx)(eO, { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r });
    }
}
function eW() {
    return (0, a.bG)([G.default], () => U.Ay.isPremium(G.default.getCurrentUser(), eP.PremiumTypes.TIER_2))
        ? null
        : (0, i.jsxs)("div", {
              className: eD.hc,
              children: [
                  (0, i.jsx)(P.h, { color: "nitro-pink", className: eD.Sp, offsetBottom: -4 }),
                  (0, i.jsxs)("div", {
                      className: eD.LK,
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
                      subscriptionTier: eP.pe.TIER_2,
                      defaultTextOverride: B.intl.string(B.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eM,
                  }),
              ],
          });
}
function eF() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: n } = l.useContext(en);
    return e || t ? (0, i.jsx)(z, { expanded: t, onClick: () => n((e) => !e) }) : null;
}
function eH(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, index: a, trailingContent: o } = e,
        d = s && !0 !== r,
        u = l.useMemo(() => t.sections.some((e) => e.type === O.K.COVER), [t.sections]);
    return (0, i.jsx)(F.A, {
        userId: n.id,
        widget: t,
        allowEditing: s,
        disableInteraction: r,
        index: a,
        trailingContent: o,
        className: eD.Nr,
        headerClassName: eD.JE,
        children: (0, i.jsxs)("div", {
            className: eD.kL,
            children: [
                (0, i.jsx)(eG, { widget: t, canEdit: d }),
                d && !u ? (0, i.jsx)(eN, {}) : null,
                t.sections.map((e, t) =>
                    (0, i.jsx)(eU, { userId: n.id, section: e, sectionIndex: t, canEdit: d, hasCoverSection: u }, t),
                ),
                (0, i.jsx)(eF, {}),
                d ? (0, i.jsx)(eW, {}) : null,
            ],
        }),
    });
}
function eB(e) {
    return (0, i.jsx)(ei, { children: (0, i.jsx)(eH, { ...e }) });
}
var eV = n(702841),
    ez = n(821609),
    eK = n(403581),
    eY = n(307301),
    eX = n(183555),
    eq = n(465318),
    eZ = n(384377),
    eJ = n(554146),
    eQ = n(43105),
    e$ = n(131607),
    e0 = n(518477),
    e1 = n(49999);
function e8() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = eq.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [n, i] = (0, e$.kn)(e && t ? [eJ.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [n === eJ.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, i];
}
function e2(e) {
    let { targetElementRef: t, isVisible: n, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, eX.NJ)();
    return n
        ? (0, i.jsx)(eQ.A, {
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
              onRequestClose: () => l(e1.i.USER_DISMISS),
              actions: [
                  {
                      text: B.intl.string(B.t.RCy7Px),
                      icon: eK.t,
                      onClick: function () {
                          let e = (0, p.g0)();
                          (0, W.Y5)(e),
                              s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, eZ.XA)(e0.jM.WIDGET_ADDED);
                      },
                  },
              ],
          })
        : null;
}
var e7 = n(410453);
function e5(e) {
    let { buttonRef: t, isCoachmarkVisible: n, markCoachmarkAsDismissed: s } = e,
        { trackUserProfileEditAction: r } = (0, eX.NJ)(),
        a = l.useCallback(() => {
            n && s(e1.i.TAKE_ACTION);
            let e = (0, p.g0)();
            (0, W.Y5)(e),
                r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, eZ.XA)(e0.jM.WIDGET_ADDED);
        }, [r, n, s]);
    return (0, i.jsx)(ez.$, {
        icon: eK.t,
        text: B.intl.string(B.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function e3(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, eX.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [u, c] = e8(),
        g = (function () {
            let e = (0, eV.bG)([G.default], () => G.default.getCurrentUser()?.id),
                t = (0, R.A)(e),
                { enabled: n, showCreateEntrypoint: i } = eq.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === b.x.PERSONAL);
            return n && i && !l;
        })(),
        m = l.useCallback(() => {
            u && c(e1.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, ep.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("962982"), n.e("422420"), n.e("264707")]).then(
                            n.bind(n, 480142),
                        );
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [s, u, c]);
    return (0, i.jsxs)("div", {
        className: r()(e7.w, t),
        children: [
            (0, i.jsx)(d.E, {
                className: e7.D,
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: B.intl.string(B.t.OYlggR),
            }),
            g ? (0, i.jsx)(e5, { buttonRef: o, isCoachmarkVisible: u, markCoachmarkAsDismissed: c }) : null,
            (0, i.jsx)(ez.$, {
                icon: eY.j,
                text: B.intl.string(B.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: m,
                buttonRef: a,
            }),
            (0, i.jsx)(e2, { targetElementRef: g ? o : a, isVisible: u, markAsDismissed: c }),
        ],
    });
}
var e4 = n(192),
    e9 = n(172218),
    e6 = n(408278),
    te = n(499373),
    tt = n(775602),
    tn = n(793574),
    ti = n(734066),
    tl = n(111994),
    ts = n(280450),
    tr = n(321191);
function ta(e) {
    return (0, a.bG)(
        [ts.default, tr.A],
        () => (tr.A.getUserProfile(ts.default.getId())?.widgets ?? []).some((t) => t.type === e),
        [e],
    );
}
var to = n(314531);
n(926675);
var td = n(305866),
    tu = n(123181),
    tc = n(229087),
    tg = n(753437),
    tm = n(382701),
    tf = n(630900);
function tx(e) {
    let { clipId: t, tags: n, allowEditing: s, disableInteraction: r = !1, onEditingChange: a } = e,
        o = s && !r,
        u = l.useMemo(() => n?.filter((e) => null != (0, tg.W3)(e)) ?? [], [n]),
        c = u.length > 0,
        g = o && u.length < 20,
        { trackUserProfileEditAction: m } = (0, eX.NJ)(),
        f = l.useRef(null),
        x = l.useRef(new Map()),
        h = l.useRef(null),
        I = l.useRef(null),
        p = l.useRef(null),
        [A, j] = l.useState(u.length),
        [E, v] = l.useState(!1),
        [S, C] = l.useState(!1),
        k = E || S;
    l.useEffect(() => {
        a(k);
    }, [k, a]),
        l.useEffect(() => () => a(!1), [a]);
    let T = l.useCallback(
            (e, n) => {
                (0, W.$6)(t, e),
                    m({ action: "added" === n ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
            },
            [t, m],
        ),
        N = l.useCallback(() => {
            C(!0), m({ action: "PRESS_ADD_TAG", widgetEdited: b.x.CLIPS_GALLERY });
        }, [m]),
        y = l.useCallback(() => C(!1), []),
        w = l.useCallback(
            (e) => {
                (0, W.Fo)(t, e), m({ action: "TAG_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
            },
            [t, m],
        ),
        R = l.useCallback(() => {
            if (E) return;
            let e = f.current?.getBoundingClientRect().width ?? 0;
            if (0 === e || 0 === u.length) return void j(u.length);
            let t = p.current?.getBoundingClientRect().width ?? 0,
                n = h.current?.getBoundingClientRect().width ?? 0,
                i = e - (t > 0 ? t + 4 : 0),
                l = u.map((e) => x.current.get(e)?.offsetWidth ?? 0);
            function s(e, t) {
                let n = 0;
                for (let t = 0; t < e; t++) n += l[t] + 4 * (t > 0);
                return n <= t;
            }
            if (s(u.length, i)) return void j(u.length);
            let r = i - (n + 4),
                a = 0;
            for (; a < u.length && s(a + 1, r); ) a++;
            j(a);
        }, [u, E]);
    (0, et.g)(f, R);
    let _ = u.length - A,
        L = _ > 0,
        O = l.useCallback(
            (e) => {
                1 === _ && v(!1), w(e);
            },
            [w, _],
        );
    return c || g
        ? (0, i.jsxs)("div", {
              className: tf.kL,
              ref: f,
              children: [
                  (0, i.jsxs)("ul", {
                      className: tf.xP,
                      "aria-hidden": !0,
                      children: [
                          u.map((e) =>
                              (0, i.jsx)(
                                  tc.A,
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
                              className: tf.lv,
                              ref: h,
                              children: (0, i.jsx)(d.E, {
                                  variant: "text-xxs/medium",
                                  color: "none",
                                  children: `+${u.length}`,
                              }),
                          }),
                      ],
                  }),
                  c &&
                      (0, i.jsx)("ul", {
                          className: tf.nM,
                          "aria-label": B.intl.string(B.t["4Rq3a7"]),
                          children: u
                              .slice(0, A)
                              .map((e) =>
                                  (0, i.jsx)(tc.A, { tag: e, variant: "filled", onRemove: o ? () => w(e) : void 0 }, e),
                              ),
                      }),
                  L &&
                      (0, i.jsx)(th, {
                          buttonRef: I,
                          numHidden: _,
                          isOpen: E,
                          onOpenChange: v,
                          disableInteraction: r,
                          children: u.map((e) =>
                              (0, i.jsx)(tc.A, { tag: e, className: tf.Hl, onRemove: o ? () => O(e) : void 0 }, e),
                          ),
                      }),
                  g && (0, i.jsx)(tu.A, { tags: u, onTagsChange: T, onOpen: N, onClose: y, variant: "filled", ref: p }),
              ],
          })
        : null;
}
function th(e) {
    let { buttonRef: t, numHidden: n, isOpen: l, onOpenChange: s, disableInteraction: r, children: a } = e,
        o = B.intl.string(B.t.pWHvBI);
    return r
        ? (0, i.jsx)("div", {
              className: `${tf.lv} ${tm.r9}`,
              ref: t,
              children: (0, i.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
          })
        : (0, i.jsx)(ed.Y, {
              targetElementRef: t,
              position: "top",
              align: "left",
              shouldShow: l,
              onRequestOpen: () => s(!0),
              onRequestClose: () => s(!1),
              renderPopout: () =>
                  (0, i.jsx)(td.l, {
                      className: tf.Kt,
                      "aria-label": o,
                      returnRef: t,
                      children: (0, i.jsx)("ul", { className: tf.ns, children: a }),
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
                          className: tf.lv,
                          children: (0, i.jsx)(d.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
                      }),
                  }),
          });
}
var tI = n(3026);
n(600253);
var tp = n(936026);
function tA(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, i.jsx)(d.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(tp.Qw, { [tp.qf]: n }),
        children: (0, i.jsx)(tI.A, { children: t }),
    });
}
function tj(e) {
    let { clipId: t, title: n, onEditingChange: s } = e,
        { trackUserProfileEditAction: a } = (0, eX.NJ)(),
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
        { isEditing: u } = d,
        c = B.intl.string(B.t["2gwc+H"]);
    return (
        l.useEffect(() => {
            s(u);
        }, [u, s]),
        l.useEffect(() => () => s(!1), [s]),
        (0, i.jsx)(ee.y, {
            ...d,
            variant: "compact",
            removeVerticalPadding: !0,
            className: r()(tp.ZZ, { [tp.Dy]: d.isEditing }),
            preview: (0, i.jsxs)("span", {
                className: r()(tp.$, tp.TG),
                children: [
                    (0, i.jsx)(eu.PencilIcon, { size: "xxs", color: "currentColor", className: tp.wz }),
                    "" === n.trim() ? (0, i.jsx)(tA, { value: c, isPlaceholder: !0 }) : (0, i.jsx)(tA, { value: n }),
                ],
            }),
            placeholder: c,
            editButtonAriaLabel: B.intl.string(B.t.PDnM11),
            label: B.intl.string(B.t.PDnM11),
            maxLength: 200,
        })
    );
}
function tE(e) {
    let { clipId: t, title: n, allowEditing: l, onEditingChange: s } = e,
        r = null != n && "" !== n.trim();
    return l || r
        ? l
            ? (0, i.jsx)(tj, { clipId: t, title: n ?? "", onEditingChange: s })
            : (0, i.jsx)("span", { className: tp.$, children: (0, i.jsx)(tA, { value: n ?? "" }) })
        : null;
}
var tv = n(663341),
    tS = n(451395),
    tC = n(823016),
    tb = n(765178),
    tk = n(282988);
function tT(e) {
    let { widgetClipId: t, localClipId: n, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eX.NJ)(),
        r = B.intl.string(B.t.ib6Mgx);
    return (0, i.jsx)("div", {
        className: l,
        children: (0, i.jsx)(q.m, {
            text: r,
            ariaHidden: !0,
            children: (0, i.jsx)(e6.K, {
                "aria-label": r,
                icon: Y.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, W.mC)(t),
                        null != n && (0, tk.UE)(n),
                        tb.O.announce(B.intl.string(B.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var tN = n(233002);
function ty(e) {
    let { item: t, index: n, isSelected: s, onSelect: a, allowEditing: o } = e,
        { registerDragHandleRef: d, manageFocusOnReorder: u } = (0, tC.r)(),
        c = l.useRef(null),
        g = o && ("saved" === t.status || "pending" === t.status),
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(H.D, {
                    className: r()(tN.Vs, { [tN.wH]: s }),
                    "aria-pressed": s,
                    "aria-label": B.intl.formatToPlainString(B.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, i.jsx)(to.A, { item: t, ringSize: "sm", className: tN.nC }),
                }),
                g &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tS.jV, { buttonRef: d(t.key), className: tN.BU }),
                            (0, i.jsx)(tT, {
                                widgetClipId: t.key,
                                localClipId: "pending" === t.status ? t.localClipId : void 0,
                                className: tN.nM,
                            }),
                        ],
                    }),
            ],
        });
    return (0, i.jsx)("li", {
        ref: c,
        className: tN.NI,
        children: g
            ? (0, i.jsx)(tS.mG, {
                  index: n,
                  itemId: t.key,
                  listType: b.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => c.current?.offsetWidth },
                  "aria-label": B.intl.formatToPlainString(B.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: W.N5,
                  onEnd: () => u(t.key),
                  className: tN.oE,
                  dropBeforeClassName: tN.A,
                  dropAfterClassName: tN.Ze,
                  draggingClassName: tN.Id,
                  children: m,
              })
            : m,
    });
}
function tw(e) {
    let { items: t, selectedKey: n, onSelect: l, onAddClip: s, allowEditing: r = !1 } = e,
        a = Math.max(0, 4 - t.length),
        o = (0, i.jsxs)("ul", {
            className: tN.Xm,
            style: { "--custom-clips-filmstrip-slots": 4 },
            children: [
                t.map((e, t) =>
                    (0, i.jsx)(ty, { item: e, index: t, isSelected: e.key === n, onSelect: l, allowEditing: r }, e.key),
                ),
                null != s &&
                    Array.from({ length: a }, (e, t) =>
                        (0, i.jsx)(
                            "li",
                            {
                                className: tN.NI,
                                children: (0, i.jsx)(H.D, {
                                    className: tN.Yn,
                                    "aria-label": B.intl.string(B.t.rI0i0a),
                                    onClick: s,
                                    children: (0, i.jsx)(tv.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return r ? (0, i.jsx)(tC.B, { emptyListFallbackRef: null, children: o }) : o;
}
var tR = n(729475),
    t_ = n(358618),
    tL = n(983851);
function tO(e) {
    let { isMuted: t, onToggleMuted: n, onFullscreen: l } = e,
        s = B.intl.string(B.t.OIDkcp),
        r = B.intl.string(t ? B.t.YqAjXy : B.t.w4m945);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(q.m, {
                text: s,
                ariaHidden: !0,
                children: (0, i.jsx)(e6.K, {
                    "aria-label": s,
                    icon: tR.T,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: l,
                }),
            }),
            (0, i.jsx)(q.m, {
                text: r,
                ariaHidden: !0,
                children: (0, i.jsx)(e6.K, {
                    "aria-label": r,
                    icon: t ? t_._ : tL.H,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: n,
                }),
            }),
        ],
    });
}
var tP = n(798108),
    tD = n(789645),
    tM = n(297264),
    tG = n(915089),
    tU = n(772168);
function tW(e) {
    let { onDismiss: t, children: n, className: l } = e,
        s = (0, tG.GV)();
    return (0, i.jsxs)("aside", {
        className: r()(tU.kL, l),
        "aria-labelledby": s,
        children: [
            (0, i.jsxs)("div", {
                className: tU.wx,
                children: [
                    (0, i.jsx)(H.D, {
                        className: tU.r,
                        "aria-label": B.intl.string(B.t["pUR+3g"]),
                        onClick: t,
                        children: (0, i.jsx)(tD.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(tM.D, {
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
var tF = n(335978);
function tH(e) {
    let { clip: t } = e,
        n = B.intl.formatToPlainString(B.t.gPRdVj, { clipName: t.name ?? t.applicationName }),
        s = l.useCallback(() => {
            (0, tk._A)(t, [tn.A.USER_PROFILE_MODAL_V2]);
        }, [t]);
    return (0, i.jsx)(q.m, {
        text: n,
        ariaHidden: !0,
        children: (0, i.jsxs)(H.D, {
            className: tF.Vs,
            "aria-label": n,
            onClick: s,
            children: [
                (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: tF.xn, loading: "lazy" }),
                (0, i.jsx)(tv.PlusLargeIcon, { size: "sm", color: "currentColor", className: tF.Xv }),
            ],
        }),
    });
}
function tB(e) {
    let { clips: t, ...n } = e;
    return (0, i.jsx)(tW, {
        ...n,
        children: (0, i.jsx)("ul", {
            className: tF.p_,
            children: t.map((e) => (0, i.jsx)("li", { className: tF.NI, children: (0, i.jsx)(tH, { clip: e }) }, e.id)),
        }),
    });
}
var tV = n(769015),
    tz = n(202163);
function tK(e) {
    let { gameId: t, className: n } = e,
        { gameRecord: l } = (0, tz.A)(t),
        s = l?.name;
    return null == s
        ? null
        : (0, i.jsx)(q.m, {
              text: s,
              ariaHidden: !0,
              children: (0, i.jsx)("div", {
                  className: n,
                  children: (0, i.jsx)(tV.A, { game: l, size: tV.M.XSMALL, allowUnknownGameIcon: !1 }),
              }),
          });
}
var tY = n(558285),
    tX = n(608857),
    tq = n(915725),
    tZ = n(409067),
    tJ = n(696016),
    tQ = n(716112);
function t$(e) {
    let { onClick: t } = e,
        n = B.intl.string(B.t.rI0i0a);
    return (0, i.jsx)(q.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, i.jsx)(e6.K, { variant: "secondary", size: "sm", icon: te.T, "aria-label": n, onClick: t }),
    });
}
function t0() {
    return (0, i.jsx)("div", {
        className: tQ.p$,
        children: (0, i.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: B.intl.format(B.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function t1(e) {
    let t,
        s,
        r,
        { widget: o, user: d, allowEditing: u, disableInteraction: c, ...g } = e,
        [m, f] = l.useState(null),
        [x, h] = l.useState(!1),
        [I, p] = l.useState(!1),
        [A, j] = l.useState(!0),
        E = (0, a.bG)([tt.Ay], () => tt.Ay.useReducedMotion),
        v = (0, e9.K)(p, 0.5),
        [S, C] = l.useState(!1),
        [b, k] = l.useState(!1),
        T = l.useRef(void 0),
        N = (0, tX.A)(o),
        y =
            ((t = (0, a.yK)([tq.Ay], () => Object.values(tq.Ay.getClips()))),
            (s = (0, a.bG)([tq.Ay], () => tq.Ay.getSettings().showPovClipsInGallery)),
            (r = (0, tk.UQ)()),
            l.useMemo(() => {
                let e = new Set(r.keys());
                for (let t of o.clips) null != t.localClipId && e.add(t.localClipId);
                return t
                    .filter((t) => !(e.has(t.id) || null == t.applicationId || 0 === t.length || (!s && (0, tZ.kD)(t))))
                    .sort((e, t) => {
                        let n = !0 === e.isFavorite;
                        return n !== (!0 === t.isFavorite) ? (n ? -1 : 1) : t.createdAt - e.createdAt;
                    })
                    .slice(0, 3);
            }, [t, r, s, o.clips])),
        w = (0, ti.sw)(),
        R = u && !0 !== c,
        _ = 0 === N.length,
        L = N.length >= 4,
        O = R && w && !L,
        P = R || N.length > 1,
        [D] = l.useState(() => y.length >= 3),
        [M, G] = l.useState(!1),
        U = ta(o.type),
        V = O && !U && D && !M && y.length > 0,
        z = l.useCallback(() => G(!0), []),
        K = N.find((e) => e.key === m) ?? N[0],
        Y = l.useMemo(() => (!0 === c ? [] : N.filter(tX.K)), [N, c]),
        X = null != K ? Y.findIndex((e) => e.key === K.key) : -1,
        q = l.useCallback(() => {
            X < 0 || (0, tY.A)({ clips: Y, startingIndex: X });
        }, [Y, X]),
        Z = l.useCallback(() => j((e) => !e), []),
        J = l.useCallback(() => {
            if (X < 0) return;
            let e = Y[(X + 1) % Y.length];
            null != e && f(e.key);
        }, [Y, X]),
        Q = (X >= 0 && !E && I) || x,
        $ = l.useCallback(() => {
            T.current = window.setTimeout(() => h(!0), 150);
        }, []),
        ee = l.useCallback(() => {
            window.clearTimeout(T.current), h(!1);
        }, []);
    l.useEffect(() => () => window.clearTimeout(T.current), []);
    let et = l.useCallback(() => {
        (0, ep.openModalLazy)(
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
                        initialMainLink: tl.oH.ALL_CLIPS,
                        onClipClick: (e) => {
                            ((e) => (0, tk._A)(e, [tn.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                        },
                    });
            },
            { modalKey: tJ.nm },
        );
    }, []);
    return (0, i.jsx)(F.A, {
        userId: d.id,
        widget: o,
        allowEditing: u,
        disableInteraction: c,
        headerTitle: (0, W.L)(o),
        headerActionButtons: O && _ ? [(0, i.jsx)(t$, { onClick: et }, "clips-gallery-add-clip")] : void 0,
        trailingContent:
            V && (0, i.jsx)("div", { className: tQ.$k, children: (0, i.jsx)(tB, { clips: y, onDismiss: z }) }),
        ...g,
        children:
            null != K
                ? (0, i.jsxs)("div", {
                      className: tQ.nV,
                      children: [
                          (0, i.jsxs)("div", {
                              ref: v,
                              className: tQ.aM,
                              onMouseEnter: $,
                              onMouseLeave: ee,
                              children: [
                                  (0, i.jsx)(to.A, {
                                      item: K,
                                      ringSize: "lg",
                                      isPlaying: Q,
                                      isMuted: A,
                                      fit: "contain",
                                      onEnded: Y.length > 1 ? J : void 0,
                                      className: tQ.VH,
                                  }),
                                  X >= 0 &&
                                      !S &&
                                      !b &&
                                      (0, i.jsx)(H.D, {
                                          className: tQ.Hf,
                                          "aria-label": B.intl.string(B.t.CscLHM),
                                          onClick: q,
                                      }),
                                  ("saved" === K.status || "pending" === K.status) &&
                                      (0, i.jsx)(tK, { gameId: K.gameId, className: tQ.AT }),
                                  R
                                      ? ("saved" === K.status || "pending" === K.status) &&
                                        (0, i.jsx)("div", {
                                            className: tQ.nP,
                                            children: (0, i.jsx)(tT, {
                                                widgetClipId: K.key,
                                                localClipId: "pending" === K.status ? K.localClipId : void 0,
                                            }),
                                        })
                                      : X >= 0 &&
                                        (0, i.jsx)("div", {
                                            className: tQ.nP,
                                            children: (0, i.jsx)(tO, { isMuted: A, onToggleMuted: Z, onFullscreen: q }),
                                        }),
                                  (0, i.jsx)(tP.A, {
                                      children:
                                          ("saved" === K.status || "pending" === K.status) &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(tE, {
                                                      clipId: K.key,
                                                      title: K.title,
                                                      allowEditing: R,
                                                      onEditingChange: C,
                                                  }),
                                                  (0, i.jsx)(tx, {
                                                      clipId: K.key,
                                                      tags: K.tags,
                                                      allowEditing: u,
                                                      disableInteraction: c,
                                                      onEditingChange: k,
                                                  }),
                                              ],
                                          }),
                                  }),
                              ],
                          }),
                          P &&
                              (0, i.jsx)(tw, {
                                  items: N,
                                  selectedKey: K.key,
                                  onSelect: f,
                                  onAddClip: O ? et : void 0,
                                  allowEditing: R,
                              }),
                      ],
                  })
                : (0, i.jsx)(t0, {}),
    });
}
var t8 = n(704824),
    t2 = n(382483),
    t7 = n(385113),
    t5 = n(334074),
    t3 = n(657718),
    t4 = n(478016);
function t9(e) {
    let { user: t, application: n, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eX.NJ)(),
        a = l.useMemo(() => new x.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, W.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, eZ.XA)(e0.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, i.jsx)(L.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, i.jsx)(L.A.Cta, {
            showSuggestedForYou: !0,
            heading: B.intl.format(B.t.OIzLCy, { applicationName: n.name }),
            content: B.intl.format(B.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(q.m, {
                        text: B.intl.string(B.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(t3.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tD.P,
                            "aria-label": B.intl.string(B.t.WAI6xu),
                            onClick: () => {
                                s(e1.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(q.m, {
                        text: B.intl.string(B.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(t3.S, {
                            variant: "primary",
                            size: "sm",
                            icon: t4.U,
                            "aria-label": B.intl.formatToPlainString(B.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                s(e1.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function t6() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([t7.A], () => t7.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, t2.Wq)();
        }, []);
        let t = (0, a.bG)([G.default], () => G.default.getCurrentUser()),
            n = (0, u.A)(e),
            { tokens: i, fetched: s } = (0, t8.j)(e),
            r = (0, R.A)(t?.id),
            o = null == t || null == e || null == i || !s,
            d = l.useMemo(
                () =>
                    o
                        ? []
                        : n.filter(
                              (e) =>
                                  !(null == e || r.some((t) => t instanceof x.R && t.applicationId === e.id)) &&
                                  null != i.find((t) => t.application.id === e.id),
                          ),
                [o, n, i, r],
            ),
            { eligibleToShow: c, markAsDismissed: g } = (0, t5.hj)({
                applications: d,
                dismissibleContent: eJ.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: t5.SH,
            }),
            m = l.useMemo(() => d.filter((e) => c.includes(e.id)), [d, c]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = n[0];
    return null == r ? null : (0, i.jsx)(t9, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var ne = n(128988),
    nt = n(896170),
    nn = n(453318),
    ni = n(321108),
    nl = n(383329),
    ns = n(67710);
function nr(e) {
    let { widgetType: t, widget: n, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: d } = (0, eX.NJ)(),
        [u, c] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: f } = (0, nl.R)({ query: u }),
        x = u.trim().length > 0,
        { gameIds: h, onAddGame: I } = y(t),
        p = (0, ni.A)(h),
        A = l.useCallback(
            (e) => {
                (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    tb.O.announce(B.intl.string(B.t.q0U3DE)),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    h.includes(e) && I(e),
                    s?.();
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
            if (x) return [...e.values()];
            let t = p
                    .filter((e) => !o.has(e.id) && (0, W.XX)(e))
                    .map((e) => ({ id: String(e.id), value: String(e.id), label: e.name, disabled: !1 })),
                n = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !n.has(e.id))];
        }, [m, o, p, x]),
        E = l.useCallback((e) => e, []),
        v = l.useMemo(() => ({ ...f, threshold: nt.Ht.rankings.CONTAINS, keys: ["label"] }), [f]),
        S = l.useCallback((e) => (x || "" === e.trim() ? j.length : (0, nt.Ht)(j, e, v).length), [x, j, v]),
        C = l.useCallback(
            (e) => {
                let n = e.target.value;
                "" === u.trim() &&
                    "" !== n.trim() &&
                    d({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: S(n),
                    }),
                    c(n),
                    (g.current = n);
            },
            [u, d, t, S],
        );
    return (0, i.jsx)(ed.Y, {
        ...a,
        onRequestOpen: () => {
            d({ action: "PRESS_ADD_GAME", widgetEdited: t }), c(""), (g.current = "");
        },
        onRequestClose: () => {
            d({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: g.current.trim().length,
                numResults: S(g.current),
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(td.l, {
                className: ns.C,
                "aria-label": B.intl.string(B.t.uqw8wK),
                children: (0, i.jsxs)(nn.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (A(e), t());
                    },
                    options: j,
                    matchSorterOptions: v,
                    customMatchSorter: x ? E : void 0,
                    children: [
                        (0, i.jsx)(nn.a3, {
                            label: B.intl.string(B.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: B.intl.string(B.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: C,
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
                text: B.intl.string(B.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, i.jsx)(e6.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: te.T,
                    "aria-label": B.intl.string(B.t.PYyENc),
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
                "aria-label": B.intl.string(B.t.PYyENc),
                ...e,
                children: (0, i.jsx)(tv.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let nd = l.createContext(null);
function nu(e) {
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
    return (0, i.jsx)(nd.Provider, { value: { expanded: r, setExpanded: o }, children: n });
}
function nc() {
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
        s = l ? B.intl.string(B.t["3FdPBT"]) : B.intl.format(B.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? ng.O : ng.k,
        children: [
            l && (0, i.jsx)(no, { widget: t, widgetType: t.type }),
            (0, i.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var nf = n(683071),
    nx = n(312252);
function nh(e) {
    let { widgetType: t, gameCount: n } = e,
        l = (0, W.cv)(t);
    return n <= l
        ? null
        : (0, i.jsx)("div", {
              role: "alert",
              className: nx.l,
              children: (0, i.jsx)(nf.w, {
                  type: "warning",
                  children: B.intl.formatToPlainString(B.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var nI = n(943793),
    np = n(148420);
function nA(e) {
    let { games: t, user: n, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tC.r)();
    return (0, i.jsx)("ul", {
        className: np.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(nI.A, {
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
function nj(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e4.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = nc(),
        u = o ? s : s.slice(0, 2),
        c = s.length > 2,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nA, { ...e, games: u }),
                c && (0, i.jsx)(z, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(nh, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tC.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nE(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nj, {
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
function nv(e) {
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
                ? (0, i.jsx)(nI.A, {
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
var nS = n(793693);
function nC(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: nS.V,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var nb = n(686246),
    nk = n(201438),
    nT = n(788593),
    nN = n(858808),
    ny = n(365611),
    nw = n(900850);
function nR(e) {
    let { index: t, widgetType: n, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, tC.r)(),
        u = l.useRef(null);
    return (0, i.jsx)(tS.mG, {
        index: t,
        itemId: s.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => u.current?.offsetWidth },
        "aria-label": B.intl.formatToPlainString(B.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, W.Un)(n, e, t),
        onEnd: () => d(s.gameId),
        className: nw.kL,
        dropBeforeClassName: nw.A,
        dropAfterClassName: nw.Ze,
        draggingClassName: nw.Id,
        children: (0, i.jsx)("div", { ref: u, className: nw.An, children: o }),
    });
}
function n_(e) {
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
        { coverImageUrl: u, gameName: c, isLoading: g } = (0, nk.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tC.r)(),
        f = s && !r,
        { isDragging: x } = (0, nb.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nT.A, {
                    imageSrc: u,
                    gameName: c,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: r,
                    className: null == u || r ? void 0 : ny.iL,
                    hideTooltip: x,
                    coverRef: d,
                }),
                f && (0, i.jsx)(tS.jV, { buttonRef: m(t.gameId), className: nw.BU }),
                f && (0, i.jsx)(nN.A, { game: t, widgetType: l, className: nw.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, i.jsx)("div", { className: ny.mD })
        : f
          ? (0, i.jsx)(nR, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: u, gameName: c, children: h() })
          : (0, i.jsx)("div", { className: nw.kL, children: h() });
}
function nL(e) {
    let { games: t, userId: n, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tC.r)();
    return (0, i.jsx)(nC, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(n_, {
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
function nO(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e4.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = nc(),
        u = o ? s : s.slice(0, 8),
        c = s.length > 8,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nL, { ...e, games: u }),
                c && (0, i.jsx)(z, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(nh, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tC.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nP(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(F.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nO, {
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
                ? (0, i.jsx)(nO, {
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
var nM = n(875620);
function nG(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, nk.A)(t),
        d = (0, a.bG)([v.A], () => v.A.suggestedFetchIsLoading),
        u = B.intl.formatToPlainString(B.t["3mb1s5"], { game: r });
    return o || d
        ? (0, i.jsx)("div", { className: ny.mD })
        : (0, i.jsx)(q.m, {
              text: u,
              ariaHidden: !0,
              children: (0, i.jsxs)(H.D, {
                  className: nM.c9,
                  onClick: l,
                  "aria-label": u,
                  children: [
                      (0, i.jsx)(nT.A, {
                          className: nM.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(tv.PlusLargeIcon, { size: "md", className: nM.Xv, color: ew.A.colors.WHITE }),
                  ],
              }),
          });
}
function nU(e) {
    let { userId: t, widgetType: n, ...s } = e,
        { games: r, onAddGame: a } = y(n),
        { setExpanded: o } = nc(),
        { trackUserProfileEditAction: d } = (0, eX.NJ)(),
        u = l.useCallback(
            (e) => {
                a(e),
                    o(!0),
                    (0, W.ew)({ widgetType: n, game: { gameId: e } }),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: n });
            },
            [a, n, d, o],
        );
    return (0, i.jsx)(tW, {
        ...s,
        children: (0, i.jsx)("ul", {
            className: nM.Vg,
            children: r.map((e) => {
                let { gameId: n } = e;
                return (0, i.jsx)("li", { children: (0, i.jsx)(nG, { onClick: () => u(n), userId: t, gameId: n }) }, n);
            }),
        }),
    });
}
var nW = n(870961);
function nF(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, i.jsx)(nv, { widget: t, ...n });
        case b.x.CURRENT_GAMES:
            return (0, i.jsx)(nE, { widget: t, ...n });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(nD, { widget: t, ...n });
        case b.x.PLAYED_GAMES:
            return (0, i.jsx)(nP, { widget: t, ...n });
        default:
            return null;
    }
}
function nH(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, ...a } = e,
        { setExpanded: o } = nc(),
        { shouldShowSuggestions: d, handleDismissSuggestions: u } = (function (e) {
            let [t, n] = l.useState(!1),
                i = ta(e.type),
                s = (0, W.uA)(e);
            return {
                shouldShowSuggestions: !i && !t && !s,
                handleDismissSuggestions: l.useCallback(() => {
                    n(!0);
                }, []),
            };
        })(t),
        c = s && !r,
        g = c && d,
        m = (0, W.L)(t),
        f = (0, W.FM)(t, { showEditingControls: c }),
        x = (0, W.uA)(t),
        h = 1 === (0, W.cv)(t.type);
    return (0, i.jsx)(nF, {
        widget: t,
        user: n,
        allowEditing: s,
        disableInteraction: r,
        headerTitle: m,
        headerSubtitle: f,
        headerActionButtons:
            c && !h
                ? [
                      (0, i.jsx)(
                          na,
                          { disabled: x, widgetType: t.type, widget: t, onAddGame: () => o(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: g && (0, i.jsx)(nU, { userId: n.id, widgetType: t.type, onDismiss: u, className: nW.r }),
        ...a,
    });
}
function nB(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(nu, { widgetType: t.type, children: (0, i.jsx)(nH, { widget: t, ...n }) });
}
var nV = n(669253),
    nz = n(483708),
    nK = n(96173),
    nY = n(788259),
    nX = n(269507);
function nq(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: s } = (0, eX.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        u = (0, a.bG)([tr.A], () => tr.A.getUserProfile(t)?.fetchError != null, [t]),
        [c, g] = e8(!u),
        m = (0, nK.A)();
    return (
        l.useEffect(() => {
            r.current || u || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [u, n]),
        (0, i.jsxs)("div", {
            className: nX.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: nX.FS,
                    children: [
                        (0, i.jsx)(tM.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: B.intl.string(B.t["oqalC+"]),
                        }),
                        (0, i.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: u ? B.intl.string(B.t["+W59o5"]) : B.intl.string(B.t.O9SQ1c),
                        }),
                    ],
                }),
                !u &&
                    (0, i.jsx)("ul", {
                        className: nX.ZW,
                        "aria-label": B.intl.string(B.t["+EIBSA"]),
                        children: m.map((e) =>
                            (0, i.jsx)(
                                "li",
                                {
                                    ref: e.type === b.x.PERSONAL ? o : void 0,
                                    children: (0, i.jsx)(nY.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
                !u && (0, i.jsx)(e2, { targetElementRef: o, isVisible: c, markAsDismissed: g }),
            ],
        })
    );
}
var nZ = n(366209);
function nJ(e) {
    let { widget: t, ...n } = e;
    return t instanceof x.R
        ? (0, i.jsx)(L.A, { widget: t, ...n })
        : t instanceof p.Tu
          ? (0, i.jsx)(eB, { widget: t, ...n })
          : (0, I.fu)(t)
            ? (0, i.jsx)(nB, { widget: t, ...n })
            : t instanceof h.k
              ? (0, i.jsx)(t1, { widget: t, ...n })
              : null;
}
function nQ() {
    return (0, i.jsxs)("div", {
        className: nZ.mJ,
        children: [
            (0, i.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(d.E, { variant: "text-xs/normal", color: "text-muted", children: B.intl.string(B.t["7blcz6"]) }),
        ],
    });
}
function n$(e) {
    let { user: t, guildId: n, channelId: s } = e,
        r = (0, R.A)(t.id),
        o = (0, _.A)(t.id),
        d = (function () {
            let [e, t] = (0, a.yK)([f.A], () => [f.A.ipCountryCode, f.A.ipCountryCodeRequest]),
                n = (0, g.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, c.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        h = 0 === r.length && o,
        p = l.useMemo(() => r.filter(I.fu), [r]),
        A = l.useMemo(() => r.filter((e) => e instanceof x.R), [r]);
    function j() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(e3, { className: nZ.cG }), d && (0, i.jsx)(nQ, {}), (0, i.jsx)(t6, {})],
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
        let [n, i, s, r] = (0, a.yK)([v.A], () => [
                v.A.suggestedFetchAttempted,
                v.A.suggestedFetchError,
                v.A.suggestedGameIds,
                v.A.suggestedFetchIsLoading,
            ]),
            { onLoad: o } = N();
        l.useEffect(() => {
            !n && e && E.A.fetchSuggestedGames();
        }, [n, e]);
        let d = n && !r;
        l.useEffect(() => {
            if (!d) return;
            let e = t.map((e) => e.games).flat();
            i || o(s.suggestedGamesIds ?? [], s.suggestedWishlistGamesIds ?? [], e);
        }, [d]);
    })(o, p),
    !(function (e, t) {
        let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, u.A)(n);
        let { data: i, refetch: s } = (0, m.P)(e),
            r = l.useRef(null !== i);
        l.useEffect(() => {
            r.current && ((r.current = !1), s());
        }, [s]);
    })(t.id, A),
    h)
        ? (0, i.jsx)(nq, { userId: t.id })
        : o
          ? (0, i.jsx)(e4.D, { children: j() })
          : j();
}
function n0(e) {
    let { user: t, ...n } = e,
        s = l.useRef(null);
    (0, w.i)({ containerRef: s });
    let a = (0, nV.k)(t.id);
    return (0, i.jsxs)(nz.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(nZ.XG, { [nZ.az]: a }),
        fade: !0,
        children: [(0, i.jsx)(ne.A, { scrollerRef: s }), (0, i.jsx)(n$, { user: t, ...n })],
    });
}
