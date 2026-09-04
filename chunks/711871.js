n.d(t, { A: () => n$, u: () => nZ });
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
    I = n(289173),
    p = n(210598),
    j = n(311043),
    A = n(569926),
    E = n(958805),
    v = n(61881),
    S = n(435558),
    C = n(196765),
    b = n(540185),
    k = n(282435);
let T = (0, S.sampleSize)(k.sx, k.sx.length),
    y = (0, C.v)((e, t) => ({
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
function N(e) {
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
var R = n(600761),
    w = n(667049),
    _ = n(389667),
    L = n(520082),
    O = n(869484),
    P = n(315629),
    D = n(465794),
    M = n(450232),
    G = n(287809),
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
    return (0, i.jsx)(en.Provider, { value: d, children: t });
}
var el = n(892572);
function es(e) {
    let { className: t, variant: n, color: s, value: a, maxLines: o, interactive: d = !0, disableMarkdown: u = !1 } = e,
        g = d ? $.d : $.j,
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
    return (0, i.jsx)(c.E, {
        ref: m,
        className: r()(el.YD, { [el.Lq]: o > 1 }, t),
        variant: n,
        color: s,
        lineClamp: x,
        children: u ? a : g(a),
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
            maxLines: c,
            growWidth: d,
            disableMarkdown: u,
        } = e,
        g = l.useCallback((e) => a(e.trim()), [a]),
        m = (0, ee.T)({ value: t, onCommit: g }),
        x =
            "" === t.trim()
                ? null
                : (0, i.jsx)(es, { interactive: !1, variant: s, color: r, value: t, maxLines: c, disableMarkdown: u }),
        f = {
            ...m,
            removeVerticalPadding: !0,
            growWidth: d || m.isEditing,
            preview: x,
            placeholder: n,
            editButtonAriaLabel: n,
            label: n,
            maxLength: o,
            className: el.ZZ,
        };
    return 1 === c
        ? (0, i.jsx)(ee.y, { ...f, variant: "compact", textVariant: s })
        : (0, i.jsx)(ee.y, { ...f, variant: "multiline", rows: 1, maxRows: c, textVariant: s });
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
    ec = n(922016),
    ed = n(22231),
    eu = n(750943),
    eg = n(458499);
function em(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    return (0, i.jsx)(ec.Y, {
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
                icon: ed.PencilIcon,
                variant: "overlay-secondary",
                tooltipText: V.intl.string(V.t.RWkUzH),
                "aria-haspopup": "menu",
                disabled: l,
            }),
    });
}
function ex(e) {
    let { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    return null == t
        ? (0, i.jsx)(X.Y, {
              ref: n,
              icon: eu.X,
              variant: "overlay-secondary",
              tooltipText: V.intl.string(V.t.dh0LD5),
              disabled: l,
              onClick: r,
          })
        : (0, i.jsx)(em, { lastEdit: t, buttonRef: n, disabled: l, cropAndUpload: s, onChangeImage: r });
}
var ef = n(691540),
    eh = n(857250),
    eI = n(97483),
    ep = n(192308),
    ej = n(765548),
    eA = n(229531),
    eE = n(515718),
    ev = n(741394),
    eS = n(38405);
function eC(e) {
    let { uploadType: t, returnRef: s, getCropAspectRatio: r, onUploadSuccess: a } = e,
        o = l.useRef(0),
        [c, d] = l.useState(null),
        [u, g] = l.useState(null),
        m = (0, ej.A)(a),
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
                    d(null), (0, ef.P0)((0, eh.o)(V.intl.string(V.t.F4Neqh), eI.Ck.FAILURE)), eS.A.captureException(e);
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
                    ? (0, ef.P0)((0, eh.o)(V.intl.string(V.t.YbdEFK), eI.Ck.FAILURE))
                    : f(
                          s,
                          new File(
                              [o],
                              ((t = r.name),
                              (n = o.type),
                              (i = (0, eA.B)(n) ?? "png"),
                              (l = (0, ev.kh)(t)),
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
        previewUri: c,
        cancelUpload: x,
        getLastEdit: l.useCallback(
            (e) => (null != u && null != e && "filename" in e && e.filename === u.filename ? u : null),
            [u],
        ),
    };
}
var eb = n(652215),
    ek = n(339984),
    eT = n(148548);
function ey() {
    return (0, i.jsx)(Q, {
        label: V.intl.string(V.t.gQmDk4),
        onClick: function () {
            (0, F.AD)((e) => new p.Tu({ ...e, sections: [(0, p.K)(), ...e.sections] }));
        },
        className: eT.GU,
    });
}
function eN(e) {
    let { userId: t, section: n, sectionIndex: s, canEdit: a } = e,
        o = l.useRef(null),
        c = l.useRef(null),
        d = l.useRef(null);
    function u(e) {
        (0, F.AD)((t) => {
            let n = t.sections[s];
            if (n?.type !== O.K.COVER) return t;
            let i = [...t.sections];
            return (i[s] = e(n)), new p.Tu({ ...t, sections: i });
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
            cancelUpload: I,
            getLastEdit: j,
        } = eC({
            uploadType: ek.HL.PERSONAL_WIDGET_COVER,
            returnRef: c,
            getCropAspectRatio: x,
            onUploadSuccess: (e) => u((t) => ({ ...t, image: e })),
        });
    function A() {
        I(), u((e) => ({ ...e, image: void 0 }));
    }
    function E() {
        o.current?.activateUploadDialogue();
    }
    function v() {
        (0, F.AD)((e) => new p.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let S = null != h,
        C = a || "" !== n.title.trim() || "" !== n.subtitle.trim(),
        b = null != n.image || S,
        k = b || a,
        T = j(n.image);
    return (0, i.jsx)(Y.N, {
        theme: b ? eb.NJ8.DARK : void 0,
        children: (e) =>
            (0, i.jsxs)("div", {
                ref: d,
                className: r()(eT.kL, { [eT.Vp]: k }, e),
                children: [
                    a || null != n.image
                        ? (0, i.jsxs)("div", {
                              className: eT.El,
                              children: [
                                  (0, i.jsx)(eo.A, {
                                      cropAndUpload: f,
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
                                      ? (0, i.jsx)(ex, {
                                            lastEdit: T,
                                            buttonRef: c,
                                            disabled: S,
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
                        className: r()(eT.hQ, e, { [eT.Vp]: k }),
                        children: [
                            (0, i.jsx)(ea, {
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
                            (0, i.jsx)(ea, {
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
    ew = n(603090);
function e_(e) {
    let { onClick: t, alwaysVisible: n = !1 } = e;
    return (0, i.jsxs)(H.D, {
        onClick: t,
        className: r()(ew.cR, { [ew.mr]: n }),
        children: [
            (0, i.jsx)(eu.X, { size: "xs", color: eR.A.colors.ICON_SUBTLE }),
            (0, i.jsx)(c.E, { variant: "text-sm/medium", color: "text-muted", children: V.intl.string(V.t["9AY+/x"]) }),
        ],
    });
}
function eL(e) {
    let { index: t, userId: n, field: l, canEdit: s, onFieldChange: a, onFieldRemove: o } = e,
        {
            cropAndUpload: c,
            previewUri: d,
            cancelUpload: u,
            getLastEdit: g,
        } = eC({
            uploadType: ek.HL.PERSONAL_WIDGET_FIELD,
            onUploadSuccess: (e) => a(l.key, (t) => ({ ...t, image: e })),
        }),
        m = s ? !0 !== l.hideImage : null != l.image;
    return (0, i.jsxs)("div", {
        className: ew.ez,
        children: [
            m
                ? (0, i.jsxs)("div", {
                      className: ew.tF,
                      children: [
                          (0, i.jsx)(eo.A, {
                              className: r()(ew.k9, s ? ew.y2 : void 0),
                              canEdit: s,
                              userId: n,
                              image: l.image,
                              previewUri: d,
                              cropAndUpload: c,
                              editVariant: "overlay",
                              lastEdit: g(l.image),
                          }),
                          s
                              ? (0, i.jsx)(X.A, {
                                    className: ew.ij,
                                    children: (0, i.jsx)(X.Y, {
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
                className: ew.oT,
                children: [
                    (0, i.jsx)(ea, {
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
                    (0, i.jsx)(ea, {
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
                      className: ew.Ms,
                      children: [
                          m
                              ? null
                              : (0, i.jsx)(X.Y, {
                                    variant: "overlay-secondary",
                                    tooltipText: V.intl.string(V.t.i3vRzP),
                                    onClick: function () {
                                        a(l.key, (e) => ({ ...e, hideImage: void 0 }));
                                    },
                                    icon: eu.X,
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
function eO(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r } = e;
    function a(e) {
        (0, F.AD)((t) => {
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
    function c(e) {
        a((t) => t.filter((t) => t.key !== e));
    }
    function d() {
        a((e) => [...e, (0, p.yL)()]);
    }
    if (0 === n.fields.length) {
        if (!s) return null;
        if (!r)
            return (0, i.jsx)("div", { className: ew.kL, children: (0, i.jsx)(e_, { alwaysVisible: !0, onClick: d }) });
    }
    let u = n.fields.map((e, n) =>
            (0, i.jsx)(eL, { index: n, userId: t, field: e, canEdit: s, onFieldChange: o, onFieldRemove: c }, e.key),
        ),
        g = n.fields.length % 2 == 1;
    s && g && n.fields.length < 4 && u.push((0, i.jsx)(e_, { onClick: d }, "add-entry"));
    let m = s && !g && n.fields.length + 2 <= 4;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            u.length > 0 ? (0, i.jsx)("div", { className: ew.kL, children: u }) : null,
            m
                ? (0, i.jsx)(Q, {
                      label: V.intl.string(V.t.t4vU5I),
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
function eU(e) {
    let { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r } = e;
    switch (n.type) {
        case O.K.COVER:
            return (0, i.jsx)(eN, { userId: t, section: n, sectionIndex: l, canEdit: s });
        case O.K.FIELDS:
            return (0, i.jsx)(eO, { userId: t, section: n, sectionIndex: l, canEdit: s, hasCoverSection: r });
    }
}
function eF() {
    return (0, a.bG)([G.default], () => U.Ay.isPremium(G.default.getCurrentUser(), eP.PremiumTypes.TIER_2))
        ? null
        : (0, i.jsxs)("div", {
              className: eD.hc,
              children: [
                  (0, i.jsx)(P.h, { color: "nitro-pink", className: eD.Sp, offsetBottom: -4 }),
                  (0, i.jsxs)("div", {
                      className: eD.LK,
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
                      subscriptionTier: eP.pe.TIER_2,
                      defaultTextOverride: V.intl.string(V.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eM,
                  }),
              ],
          });
}
function eW() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: n } = l.useContext(en);
    return e || t ? (0, i.jsx)(z, { expanded: t, onClick: () => n((e) => !e) }) : null;
}
function eH(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, index: a, trailingContent: o } = e,
        c = s && !0 !== r,
        d = l.useMemo(() => t.sections.some((e) => e.type === O.K.COVER), [t.sections]);
    return (0, i.jsx)(W.A, {
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
                (0, i.jsx)(eG, { widget: t, canEdit: c }),
                c && !d ? (0, i.jsx)(ey, {}) : null,
                t.sections.map((e, t) =>
                    (0, i.jsx)(eU, { userId: n.id, section: e, sectionIndex: t, canEdit: c, hasCoverSection: d }, t),
                ),
                (0, i.jsx)(eW, {}),
                c ? (0, i.jsx)(eF, {}) : null,
            ],
        }),
    });
}
function eV(e) {
    return (0, i.jsx)(ei, { children: (0, i.jsx)(eH, { ...e }) });
}
var eB = n(702841),
    ez = n(821609),
    eY = n(403581),
    eK = n(307301),
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
              title: V.intl.string(V.t.KKGxNt),
              body: V.intl.string(V.t["IS+QTV"]),
              onRequestClose: () => l(e1.i.USER_DISMISS),
              actions: [
                  {
                      text: V.intl.string(V.t.RCy7Px),
                      icon: eY.t,
                      onClick: function () {
                          let e = (0, p.g0)();
                          (0, F.Y5)(e),
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
            (0, F.Y5)(e),
                r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, eZ.XA)(e0.jM.WIDGET_ADDED);
        }, [r, n, s]);
    return (0, i.jsx)(ez.$, {
        icon: eY.t,
        text: V.intl.string(V.t.eGAirq),
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
        [d, u] = e8(),
        g = (function () {
            let e = (0, eB.bG)([G.default], () => G.default.getCurrentUser()?.id),
                t = (0, w.A)(e),
                { enabled: n, showCreateEntrypoint: i } = eq.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === b.x.PERSONAL);
            return n && i && !l;
        })(),
        m = l.useCallback(() => {
            d && u(e1.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, ep.openModalLazy)(
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
        className: r()(e7.w, t),
        children: [
            (0, i.jsx)(c.E, {
                className: e7.D,
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: V.intl.string(V.t.OYlggR),
            }),
            g ? (0, i.jsx)(e5, { buttonRef: o, isCoachmarkVisible: d, markCoachmarkAsDismissed: u }) : null,
            (0, i.jsx)(ez.$, {
                icon: eK.j,
                text: V.intl.string(V.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: m,
                buttonRef: a,
            }),
            (0, i.jsx)(e2, { targetElementRef: g ? o : a, isVisible: d, markAsDismissed: u }),
        ],
    });
}
var e4 = n(192),
    e6 = n(172218),
    e9 = n(408278),
    te = n(499373),
    tt = n(775602),
    tn = n(793574),
    ti = n(734066),
    tl = n(111994),
    ts = n(314531);
n(926675);
var tr = n(305866),
    ta = n(123181),
    to = n(229087),
    tc = n(753437),
    td = n(382701),
    tu = n(630900);
function tg(e) {
    let { clipId: t, tags: n, allowEditing: s, disableInteraction: r = !1, onEditingChange: a } = e,
        o = s && !r,
        d = l.useMemo(() => n?.filter((e) => null != (0, tc.W3)(e)) ?? [], [n]),
        u = d.length > 0,
        g = o && d.length < 20,
        { trackUserProfileEditAction: m } = (0, eX.NJ)(),
        x = l.useRef(null),
        f = l.useRef(new Map()),
        h = l.useRef(null),
        I = l.useRef(null),
        p = l.useRef(null),
        [j, A] = l.useState(d.length),
        [E, v] = l.useState(!1),
        [S, C] = l.useState(!1),
        k = E || S;
    l.useEffect(() => {
        a(k);
    }, [k, a]),
        l.useEffect(() => () => a(!1), [a]);
    let T = l.useCallback(
            (e, n) => {
                (0, F.$6)(t, e),
                    m({ action: "added" === n ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
            },
            [t, m],
        ),
        y = l.useCallback(() => {
            C(!0), m({ action: "PRESS_ADD_TAG", widgetEdited: b.x.CLIPS_GALLERY });
        }, [m]),
        N = l.useCallback(() => C(!1), []),
        R = l.useCallback(
            (e) => {
                (0, F.Fo)(t, e), m({ action: "TAG_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
            },
            [t, m],
        ),
        w = l.useCallback(() => {
            if (E) return;
            let e = x.current?.getBoundingClientRect().width ?? 0;
            if (0 === e || 0 === d.length) return void A(d.length);
            let t = p.current?.getBoundingClientRect().width ?? 0,
                n = h.current?.getBoundingClientRect().width ?? 0,
                i = e - (t > 0 ? t + 4 : 0),
                l = d.map((e) => f.current.get(e)?.offsetWidth ?? 0);
            function s(e, t) {
                let n = 0;
                for (let t = 0; t < e; t++) n += l[t] + 4 * (t > 0);
                return n <= t;
            }
            if (s(d.length, i)) return void A(d.length);
            let r = i - (n + 4),
                a = 0;
            for (; a < d.length && s(a + 1, r); ) a++;
            A(a);
        }, [d, E]);
    (0, et.g)(x, w);
    let _ = d.length - j,
        L = _ > 0,
        O = l.useCallback(
            (e) => {
                1 === _ && v(!1), R(e);
            },
            [R, _],
        );
    return u || g
        ? (0, i.jsxs)("div", {
              className: tu.kL,
              ref: x,
              children: [
                  (0, i.jsxs)("ul", {
                      className: tu.xP,
                      "aria-hidden": !0,
                      children: [
                          d.map((e) =>
                              (0, i.jsx)(
                                  to.A,
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
                              className: tu.lv,
                              ref: h,
                              children: (0, i.jsx)(c.E, {
                                  variant: "text-xxs/medium",
                                  color: "none",
                                  children: `+${d.length}`,
                              }),
                          }),
                      ],
                  }),
                  u &&
                      (0, i.jsx)("ul", {
                          className: tu.nM,
                          "aria-label": V.intl.string(V.t["4Rq3a7"]),
                          children: d
                              .slice(0, j)
                              .map((e) =>
                                  (0, i.jsx)(to.A, { tag: e, variant: "filled", onRemove: o ? () => R(e) : void 0 }, e),
                              ),
                      }),
                  L &&
                      (0, i.jsx)(tm, {
                          buttonRef: I,
                          numHidden: _,
                          isOpen: E,
                          onOpenChange: v,
                          disableInteraction: r,
                          children: d.map((e) =>
                              (0, i.jsx)(to.A, { tag: e, className: tu.Hl, onRemove: o ? () => O(e) : void 0 }, e),
                          ),
                      }),
                  g && (0, i.jsx)(ta.A, { tags: d, onTagsChange: T, onOpen: y, onClose: N, variant: "filled", ref: p }),
              ],
          })
        : null;
}
function tm(e) {
    let { buttonRef: t, numHidden: n, isOpen: l, onOpenChange: s, disableInteraction: r, children: a } = e,
        o = V.intl.string(V.t.pWHvBI);
    return r
        ? (0, i.jsx)("div", {
              className: `${tu.lv} ${td.r9}`,
              ref: t,
              children: (0, i.jsx)(c.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
          })
        : (0, i.jsx)(ec.Y, {
              targetElementRef: t,
              position: "top",
              align: "left",
              shouldShow: l,
              onRequestOpen: () => s(!0),
              onRequestClose: () => s(!1),
              renderPopout: () =>
                  (0, i.jsx)(tr.l, {
                      className: tu.Kt,
                      "aria-label": o,
                      returnRef: t,
                      children: (0, i.jsx)("ul", { className: tu.ns, children: a }),
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
                          className: tu.lv,
                          children: (0, i.jsx)(c.E, { variant: "text-xxs/medium", color: "none", children: `+${n}` }),
                      }),
                  }),
          });
}
var tx = n(3026);
n(600253);
var tf = n(936026);
function th(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, i.jsx)(c.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(tf.Qw, { [tf.qf]: n }),
        children: (0, i.jsx)(tx.A, { children: t }),
    });
}
function tI(e) {
    let { clipId: t, title: n, onEditingChange: s } = e,
        { trackUserProfileEditAction: a } = (0, eX.NJ)(),
        o = l.useCallback(
            (e) => {
                let i = e.trim();
                i !== n.trim() &&
                    ((0, F.mI)(t, i),
                    a({ action: "CLIP_TITLE_EDITED", widgetEdited: b.x.CLIPS_GALLERY, numCharacters: i.length }));
            },
            [t, n, a],
        ),
        c = (0, ee.T)({ value: n, onCommit: o }),
        { isEditing: d } = c,
        u = V.intl.string(V.t["2gwc+H"]);
    return (
        l.useEffect(() => {
            s(d);
        }, [d, s]),
        l.useEffect(() => () => s(!1), [s]),
        (0, i.jsx)(ee.y, {
            ...c,
            variant: "compact",
            removeVerticalPadding: !0,
            className: r()(tf.ZZ, { [tf.Dy]: c.isEditing }),
            preview: (0, i.jsxs)("span", {
                className: r()(tf.$, tf.TG),
                children: [
                    (0, i.jsx)(ed.PencilIcon, { size: "xxs", color: "currentColor", className: tf.wz }),
                    "" === n.trim() ? (0, i.jsx)(th, { value: u, isPlaceholder: !0 }) : (0, i.jsx)(th, { value: n }),
                ],
            }),
            placeholder: u,
            editButtonAriaLabel: V.intl.string(V.t.PDnM11),
            label: V.intl.string(V.t.PDnM11),
            maxLength: 200,
        })
    );
}
function tp(e) {
    let { clipId: t, title: n, allowEditing: l, onEditingChange: s } = e,
        r = null != n && "" !== n.trim();
    return l || r
        ? l
            ? (0, i.jsx)(tI, { clipId: t, title: n ?? "", onEditingChange: s })
            : (0, i.jsx)("span", { className: tf.$, children: (0, i.jsx)(th, { value: n ?? "" }) })
        : null;
}
var tj = n(663341),
    tA = n(451395),
    tE = n(823016),
    tv = n(765178),
    tS = n(282988);
function tC(e) {
    let { widgetClipId: t, localClipId: n, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eX.NJ)(),
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
                        null != n && (0, tS.UE)(n),
                        tv.O.announce(V.intl.string(V.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var tb = n(233002);
function tk(e) {
    let { item: t, index: n, isSelected: s, onSelect: a, allowEditing: o } = e,
        { registerDragHandleRef: c, manageFocusOnReorder: d } = (0, tE.r)(),
        u = l.useRef(null),
        g = o && ("saved" === t.status || "pending" === t.status),
        m = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(H.D, {
                    className: r()(tb.Vs, { [tb.wH]: s }),
                    "aria-pressed": s,
                    "aria-label": V.intl.formatToPlainString(V.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, i.jsx)(ts.A, { item: t, ringSize: "sm", className: tb.nC }),
                }),
                g &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(tA.jV, { buttonRef: c(t.key), className: tb.BU }),
                            (0, i.jsx)(tC, {
                                widgetClipId: t.key,
                                localClipId: "pending" === t.status ? t.localClipId : void 0,
                                className: tb.nM,
                            }),
                        ],
                    }),
            ],
        });
    return (0, i.jsx)("li", {
        ref: u,
        className: tb.NI,
        children: g
            ? (0, i.jsx)(tA.mG, {
                  index: n,
                  itemId: t.key,
                  listType: b.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => u.current?.offsetWidth },
                  "aria-label": V.intl.formatToPlainString(V.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: F.N5,
                  onEnd: () => d(t.key),
                  className: tb.oE,
                  dropBeforeClassName: tb.A,
                  dropAfterClassName: tb.Ze,
                  draggingClassName: tb.Id,
                  children: m,
              })
            : m,
    });
}
function tT(e) {
    let { items: t, selectedKey: n, onSelect: l, onAddClip: s, allowEditing: r = !1 } = e,
        a = Math.max(0, 4 - t.length),
        o = (0, i.jsxs)("ul", {
            className: tb.Xm,
            style: { "--custom-clips-filmstrip-slots": 4 },
            children: [
                t.map((e, t) =>
                    (0, i.jsx)(tk, { item: e, index: t, isSelected: e.key === n, onSelect: l, allowEditing: r }, e.key),
                ),
                null != s &&
                    Array.from({ length: a }, (e, t) =>
                        (0, i.jsx)(
                            "li",
                            {
                                className: tb.NI,
                                children: (0, i.jsx)(H.D, {
                                    className: tb.Yn,
                                    "aria-label": V.intl.string(V.t.rI0i0a),
                                    onClick: s,
                                    children: (0, i.jsx)(tj.PlusLargeIcon, { size: "sm", color: "currentColor" }),
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
    tN = n(358618),
    tR = n(983851);
function tw(e) {
    let { isMuted: t, onToggleMuted: n, onFullscreen: l } = e,
        s = V.intl.string(V.t.OIDkcp),
        r = V.intl.string(t ? V.t.YqAjXy : V.t.w4m945);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(q.m, {
                text: s,
                ariaHidden: !0,
                children: (0, i.jsx)(e9.K, {
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
                children: (0, i.jsx)(e9.K, {
                    "aria-label": r,
                    icon: t ? tN._ : tR.H,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: n,
                }),
            }),
        ],
    });
}
var t_ = n(798108),
    tL = n(789645),
    tO = n(297264),
    tP = n(915089),
    tD = n(772168);
function tM(e) {
    let { onDismiss: t, children: n, className: l } = e,
        s = (0, tP.GV)();
    return (0, i.jsxs)("aside", {
        className: r()(tD.kL, l),
        "aria-labelledby": s,
        children: [
            (0, i.jsxs)("div", {
                className: tD.wx,
                children: [
                    (0, i.jsx)(H.D, {
                        className: tD.r,
                        "aria-label": V.intl.string(V.t["pUR+3g"]),
                        onClick: t,
                        children: (0, i.jsx)(tL.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, i.jsx)(tO.D, {
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
var tG = n(335978);
function tU(e) {
    let { clip: t } = e,
        n = V.intl.formatToPlainString(V.t.gPRdVj, { clipName: t.name ?? t.applicationName }),
        s = l.useCallback(() => {
            (0, tS._A)(t, [tn.A.USER_PROFILE_MODAL_V2]);
        }, [t]);
    return (0, i.jsx)(q.m, {
        text: n,
        ariaHidden: !0,
        children: (0, i.jsxs)(H.D, {
            className: tG.Vs,
            "aria-label": n,
            onClick: s,
            children: [
                (0, i.jsx)("img", { src: t.thumbnail, alt: "", className: tG.xn, loading: "lazy" }),
                (0, i.jsx)(tj.PlusLargeIcon, { size: "sm", color: "currentColor", className: tG.Xv }),
            ],
        }),
    });
}
function tF(e) {
    let { clips: t, ...n } = e;
    return (0, i.jsx)(tM, {
        ...n,
        children: (0, i.jsx)("ul", {
            className: tG.p_,
            children: t.map((e) => (0, i.jsx)("li", { className: tG.NI, children: (0, i.jsx)(tU, { clip: e }) }, e.id)),
        }),
    });
}
var tW = n(769015),
    tH = n(202163);
function tV(e) {
    let { gameId: t, className: n } = e,
        { gameRecord: l } = (0, tH.A)(t),
        s = l?.name;
    return null == s
        ? null
        : (0, i.jsx)(q.m, {
              text: s,
              ariaHidden: !0,
              children: (0, i.jsx)("div", {
                  className: n,
                  children: (0, i.jsx)(tW.A, { game: l, size: tW.M.XSMALL, allowUnknownGameIcon: !1 }),
              }),
          });
}
var tB = n(558285),
    tz = n(608857),
    tY = n(915725),
    tK = n(409067),
    tX = n(696016),
    tq = n(716112);
function tZ(e) {
    let { onClick: t } = e,
        n = V.intl.string(V.t.rI0i0a);
    return (0, i.jsx)(q.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, i.jsx)(e9.K, { variant: "secondary", size: "sm", icon: te.T, "aria-label": n, onClick: t }),
    });
}
function tJ() {
    return (0, i.jsx)("div", {
        className: tq.p$,
        children: (0, i.jsx)(c.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: V.intl.format(V.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tQ(e) {
    let t,
        s,
        r,
        { widget: o, user: c, allowEditing: d, disableInteraction: u, ...g } = e,
        [m, x] = l.useState(null),
        [f, h] = l.useState(!1),
        [I, p] = l.useState(!1),
        [j, A] = l.useState(!0),
        E = (0, a.bG)([tt.Ay], () => tt.Ay.useReducedMotion),
        v = (0, e6.K)(p, 0.5),
        [S, C] = l.useState(!1),
        [b, k] = l.useState(!1),
        T = l.useRef(void 0),
        y = (0, tz.A)(o),
        N =
            ((t = (0, a.yK)([tY.Ay], () => Object.values(tY.Ay.getClips()))),
            (s = (0, a.bG)([tY.Ay], () => tY.Ay.getSettings().showPovClipsInGallery)),
            (r = (0, tS.UQ)()),
            l.useMemo(() => {
                let e = new Set(r.keys());
                for (let t of o.clips) null != t.localClipId && e.add(t.localClipId);
                return t
                    .filter((t) => !(e.has(t.id) || null == t.applicationId || 0 === t.length || (!s && (0, tK.kD)(t))))
                    .sort((e, t) => {
                        let n = !0 === e.isFavorite;
                        return n !== (!0 === t.isFavorite) ? (n ? -1 : 1) : t.createdAt - e.createdAt;
                    })
                    .slice(0, 3);
            }, [t, r, s, o.clips])),
        R = (0, ti.sw)(),
        w = d && !0 !== u,
        _ = 0 === y.length,
        L = y.length >= 4,
        O = w && R && !L,
        P = w || y.length > 1,
        [D] = l.useState(() => N.length >= 3),
        [M, G] = l.useState(!1),
        U = O && D && !M && N.length > 0,
        B = l.useCallback(() => G(!0), []),
        z = y.find((e) => e.key === m) ?? y[0],
        Y = l.useMemo(() => (!0 === u ? [] : y.filter(tz.K)), [y, u]),
        K = null != z ? Y.findIndex((e) => e.key === z.key) : -1,
        X = l.useCallback(() => {
            K < 0 || (0, tB.A)({ clips: Y, startingIndex: K });
        }, [Y, K]),
        q = l.useCallback(() => A((e) => !e), []),
        Z = l.useCallback(() => {
            if (K < 0) return;
            let e = Y[(K + 1) % Y.length];
            null != e && x(e.key);
        }, [Y, K]),
        J = (K >= 0 && !E && I) || f,
        Q = l.useCallback(() => {
            T.current = window.setTimeout(() => h(!0), 150);
        }, []),
        $ = l.useCallback(() => {
            window.clearTimeout(T.current), h(!1);
        }, []);
    l.useEffect(() => () => window.clearTimeout(T.current), []);
    let ee = l.useCallback(() => {
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
                            ((e) => (0, tS._A)(e, [tn.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                        },
                    });
            },
            { modalKey: tX.nm },
        );
    }, []);
    return (0, i.jsx)(W.A, {
        userId: c.id,
        widget: o,
        allowEditing: d,
        disableInteraction: u,
        headerTitle: (0, F.L)(o),
        headerActionButtons: O && _ ? [(0, i.jsx)(tZ, { onClick: ee }, "clips-gallery-add-clip")] : void 0,
        trailingContent:
            U && (0, i.jsx)("div", { className: tq.$k, children: (0, i.jsx)(tF, { clips: N, onDismiss: B }) }),
        ...g,
        children:
            null != z
                ? (0, i.jsxs)("div", {
                      className: tq.nV,
                      children: [
                          (0, i.jsxs)("div", {
                              ref: v,
                              className: tq.aM,
                              onMouseEnter: Q,
                              onMouseLeave: $,
                              children: [
                                  (0, i.jsx)(ts.A, {
                                      item: z,
                                      ringSize: "lg",
                                      isPlaying: J,
                                      isMuted: j,
                                      fit: "contain",
                                      onEnded: Y.length > 1 ? Z : void 0,
                                      className: tq.VH,
                                  }),
                                  K >= 0 &&
                                      !S &&
                                      !b &&
                                      (0, i.jsx)(H.D, {
                                          className: tq.Hf,
                                          "aria-label": V.intl.string(V.t.CscLHM),
                                          onClick: X,
                                      }),
                                  ("saved" === z.status || "pending" === z.status) &&
                                      (0, i.jsx)(tV, { gameId: z.gameId, className: tq.AT }),
                                  w
                                      ? ("saved" === z.status || "pending" === z.status) &&
                                        (0, i.jsx)("div", {
                                            className: tq.nP,
                                            children: (0, i.jsx)(tC, {
                                                widgetClipId: z.key,
                                                localClipId: "pending" === z.status ? z.localClipId : void 0,
                                            }),
                                        })
                                      : K >= 0 &&
                                        (0, i.jsx)("div", {
                                            className: tq.nP,
                                            children: (0, i.jsx)(tw, { isMuted: j, onToggleMuted: q, onFullscreen: X }),
                                        }),
                                  (0, i.jsx)(t_.A, {
                                      children:
                                          ("saved" === z.status || "pending" === z.status) &&
                                          (0, i.jsxs)(i.Fragment, {
                                              children: [
                                                  (0, i.jsx)(tp, {
                                                      clipId: z.key,
                                                      title: z.title,
                                                      allowEditing: w,
                                                      onEditingChange: C,
                                                  }),
                                                  (0, i.jsx)(tg, {
                                                      clipId: z.key,
                                                      tags: z.tags,
                                                      allowEditing: d,
                                                      disableInteraction: u,
                                                      onEditingChange: k,
                                                  }),
                                              ],
                                          }),
                                  }),
                              ],
                          }),
                          P &&
                              (0, i.jsx)(tT, {
                                  items: y,
                                  selectedKey: z.key,
                                  onSelect: x,
                                  onAddClip: O ? ee : void 0,
                                  allowEditing: w,
                              }),
                      ],
                  })
                : (0, i.jsx)(tJ, {}),
    });
}
var t$ = n(704824),
    t0 = n(382483),
    t1 = n(385113),
    t8 = n(334074),
    t2 = n(657718),
    t7 = n(478016);
function t5(e) {
    let { user: t, application: n, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eX.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: n.id }), [n.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, F.Y5)(a),
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
            heading: V.intl.format(V.t.OIzLCy, { applicationName: n.name }),
            content: V.intl.format(V.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(q.m, {
                        text: V.intl.string(V.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(t2.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tL.P,
                            "aria-label": V.intl.string(V.t.WAI6xu),
                            onClick: () => {
                                s(e1.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(q.m, {
                        text: V.intl.string(V.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(t2.S, {
                            variant: "primary",
                            size: "sm",
                            icon: t7.U,
                            "aria-label": V.intl.formatToPlainString(V.t.KfGahB, { applicationName: n.name }),
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
function t3() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: n,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([t1.A], () => t1.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, t0.Wq)();
        }, []);
        let t = (0, a.bG)([G.default], () => G.default.getCurrentUser()),
            n = (0, d.A)(e),
            { tokens: i, fetched: s } = (0, t$.j)(e),
            r = (0, w.A)(t?.id),
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
            { eligibleToShow: u, markAsDismissed: g } = (0, t8.hj)({
                applications: c,
                dismissibleContent: eJ.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: t8.SH,
            }),
            m = l.useMemo(() => c.filter((e) => u.includes(e.id)), [c, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = n[0];
    return null == r ? null : (0, i.jsx)(t5, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var t4 = n(128988),
    t6 = n(280450),
    t9 = n(321191),
    ne = n(896170),
    nt = n(453318),
    nn = n(321108),
    ni = n(383329),
    nl = n(67710);
function ns(e) {
    let { widgetType: t, widget: n, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: c } = (0, eX.NJ)(),
        [d, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, ni.R)({ query: d }),
        f = d.trim().length > 0,
        { gameIds: h, onAddGame: I } = N(t),
        p = (0, nn.A)(h),
        j = l.useCallback(
            (e) => {
                (0, F.ew)({ widgetType: t, game: { gameId: e } }),
                    tv.O.announce(V.intl.string(V.t.q0U3DE)),
                    c({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    h.includes(e) && I(e),
                    s?.();
            },
            [t, c, s, h, I],
        ),
        A = l.useMemo(() => {
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
                n = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !n.has(e.id))];
        }, [m, o, p, f]),
        E = l.useCallback((e) => e, []),
        v = l.useMemo(() => ({ ...x, threshold: ne.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        S = l.useCallback((e) => (f || "" === e.trim() ? A.length : (0, ne.Ht)(A, e, v).length), [f, A, v]),
        C = l.useCallback(
            (e) => {
                let n = e.target.value;
                "" === d.trim() &&
                    "" !== n.trim() &&
                    c({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: S(n),
                    }),
                    u(n),
                    (g.current = n);
            },
            [d, c, t, S],
        );
    return (0, i.jsx)(ec.Y, {
        ...a,
        onRequestOpen: () => {
            c({ action: "PRESS_ADD_GAME", widgetEdited: t }), u(""), (g.current = "");
        },
        onRequestClose: () => {
            c({
                action: "GAME_SEARCH_SESSION_ENDED",
                widgetEdited: t,
                numCharacters: g.current.trim().length,
                numResults: S(g.current),
            });
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, i.jsx)(tr.l, {
                className: nl.C,
                "aria-label": V.intl.string(V.t.uqw8wK),
                children: (0, i.jsxs)(nt.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: A,
                    matchSorterOptions: v,
                    customMatchSorter: f ? E : void 0,
                    children: [
                        (0, i.jsx)(nt.a3, {
                            label: V.intl.string(V.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: V.intl.string(V.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: C,
                        }),
                        (0, i.jsx)(nt.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function nr(e) {
    let { disabled: t, ...n } = e,
        s = l.useRef(null);
    return (0, i.jsx)(ns, {
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
function na(e) {
    let t = l.useRef(null);
    return (0, i.jsx)(ns, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, i.jsx)(H.D, {
                innerRef: t,
                className: nl.c,
                "aria-label": V.intl.string(V.t.PYyENc),
                ...e,
                children: (0, i.jsx)(tj.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let no = l.createContext(null);
function nc(e) {
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
    return (0, i.jsx)(no.Provider, { value: { expanded: r, setExpanded: o }, children: n });
}
function nd() {
    let e = l.useContext(no);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var nu = n(67438);
function ng(e) {
    let { widget: t } = e,
        n = (0, F.cv)(t.type),
        l = 1 === n,
        s = l ? V.intl.string(V.t["3FdPBT"]) : V.intl.format(V.t.W8K2GH, { maxGames: n });
    return (0, i.jsxs)("div", {
        className: l ? nu.O : nu.k,
        children: [
            l && (0, i.jsx)(na, { widget: t, widgetType: t.type }),
            (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var nm = n(683071),
    nx = n(312252);
function nf(e) {
    let { widgetType: t, gameCount: n } = e,
        l = (0, F.cv)(t);
    return n <= l
        ? null
        : (0, i.jsx)("div", {
              role: "alert",
              className: nx.l,
              children: (0, i.jsx)(nm.w, {
                  type: "warning",
                  children: V.intl.formatToPlainString(V.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var nh = n(943793),
    nI = n(148420);
function np(e) {
    let { games: t, user: n, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tE.r)();
    return (0, i.jsx)("ul", {
        className: nI.h,
        children: t.map((e, t) =>
            (0, i.jsx)(
                "li",
                {
                    children: (0, i.jsx)(nh.A, {
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
        { expanded: o, setExpanded: c } = nd(),
        d = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(np, { ...e, games: d }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => c((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(nf, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tE.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nA(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(W.A, {
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
                : (0, i.jsx)(ng, { widget: n }),
    });
}
function nE(e) {
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
                ? (0, i.jsx)(nh.A, {
                      user: t,
                      widgetType: n.type,
                      game: c,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(ng, { widget: n }),
    });
}
var nv = n(793693);
function nS(e) {
    let { games: t, renderGame: n } = e;
    return (0, i.jsx)("ul", {
        className: nv.V,
        children: t.map((e, t) => (0, i.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var nC = n(686246),
    nb = n(201438),
    nk = n(788593),
    nT = n(858808),
    ny = n(365611),
    nN = n(900850);
function nR(e) {
    let { index: t, widgetType: n, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: c } = (0, tE.r)(),
        d = l.useRef(null);
    return (0, i.jsx)(tA.mG, {
        index: t,
        itemId: s.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => d.current?.offsetWidth },
        "aria-label": V.intl.formatToPlainString(V.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, F.Un)(n, e, t),
        onEnd: () => c(s.gameId),
        className: nN.kL,
        dropBeforeClassName: nN.A,
        dropAfterClassName: nN.Ze,
        draggingClassName: nN.Id,
        children: (0, i.jsx)("div", { ref: d, className: nN.An, children: o }),
    });
}
function nw(e) {
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
        { coverImageUrl: d, gameName: u, isLoading: g } = (0, nb.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tE.r)(),
        x = s && !r,
        { isDragging: f } = (0, nC.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(nk.A, {
                    imageSrc: d,
                    gameName: u,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: r,
                    className: null == d || r ? void 0 : ny.iL,
                    hideTooltip: f,
                    coverRef: c,
                }),
                x && (0, i.jsx)(tA.jV, { buttonRef: m(t.gameId), className: nN.BU }),
                x && (0, i.jsx)(nT.A, { game: t, widgetType: l, className: nN.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, i.jsx)("div", { className: ny.mD })
        : x
          ? (0, i.jsx)(nR, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: d, gameName: u, children: h() })
          : (0, i.jsx)("div", { className: nN.kL, children: h() });
}
function n_(e) {
    let { games: t, userId: n, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tE.r)();
    return (0, i.jsx)(nS, {
        games: t,
        renderGame: (e, t) =>
            (0, i.jsx)(nw, {
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
function nL(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e4.r)(),
        a = r(t),
        { expanded: o, setExpanded: c } = nd(),
        d = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(n_, { ...e, games: d }),
                u && (0, i.jsx)(z, { expanded: o, onClick: () => c((e) => !e) }),
            ],
        });
    return n && !l
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(nf, { widgetType: t, gameCount: s.length }),
                  (0, i.jsx)(tE.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function nO(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nL, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(ng, { widget: n }),
    });
}
function nP(e) {
    let { user: t, widget: n, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, i.jsx)(W.A, {
        userId: t.id,
        widget: n,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            n.games.length > 0
                ? (0, i.jsx)(nL, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, i.jsx)(ng, { widget: n }),
    });
}
var nD = n(875620);
function nM(e) {
    let { gameId: t, userId: n, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, nb.A)(t),
        c = (0, a.bG)([v.A], () => v.A.suggestedFetchIsLoading),
        d = V.intl.formatToPlainString(V.t["3mb1s5"], { game: r });
    return o || c
        ? (0, i.jsx)("div", { className: ny.mD })
        : (0, i.jsx)(q.m, {
              text: d,
              ariaHidden: !0,
              children: (0, i.jsxs)(H.D, {
                  className: nD.c9,
                  onClick: l,
                  "aria-label": d,
                  children: [
                      (0, i.jsx)(nk.A, {
                          className: nD.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, i.jsx)(tj.PlusLargeIcon, { size: "md", className: nD.Xv, color: eR.A.colors.WHITE }),
                  ],
              }),
          });
}
function nG(e) {
    let { userId: t, widgetType: n, ...s } = e,
        { games: r, onAddGame: a } = N(n),
        { setExpanded: o } = nd(),
        { trackUserProfileEditAction: c } = (0, eX.NJ)(),
        d = l.useCallback(
            (e) => {
                a(e),
                    o(!0),
                    (0, F.ew)({ widgetType: n, game: { gameId: e } }),
                    c({ action: "GAME_ADDED", gameId: e, widgetEdited: n });
            },
            [a, n, c, o],
        );
    return (0, i.jsx)(tM, {
        ...s,
        children: (0, i.jsx)("ul", {
            className: nD.Vg,
            children: r.map((e) => {
                let { gameId: n } = e;
                return (0, i.jsx)("li", { children: (0, i.jsx)(nM, { onClick: () => d(n), userId: t, gameId: n }) }, n);
            }),
        }),
    });
}
var nU = n(870961);
function nF(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, i.jsx)(nE, { widget: t, ...n });
        case b.x.CURRENT_GAMES:
            return (0, i.jsx)(nA, { widget: t, ...n });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, i.jsx)(nP, { widget: t, ...n });
        case b.x.PLAYED_GAMES:
            return (0, i.jsx)(nO, { widget: t, ...n });
        default:
            return null;
    }
}
function nW(e) {
    let { widget: t, user: n, allowEditing: s, disableInteraction: r, ...o } = e,
        { setExpanded: c } = nd(),
        { shouldShowSuggestions: d, handleDismissSuggestions: u } = (function (e) {
            let [t, n] = l.useState(!1),
                i = e.type,
                s = (0, a.bG)([t6.default, t9.A], () => {
                    let e = t6.default.getId();
                    if (null == e) return !1;
                    let t = t9.A.getUserProfile(e);
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
        I = 1 === (0, F.cv)(t.type);
    return (0, i.jsx)(nF, {
        widget: t,
        user: n,
        allowEditing: s,
        disableInteraction: r,
        headerTitle: x,
        headerSubtitle: f,
        headerActionButtons:
            g && !I
                ? [
                      (0, i.jsx)(
                          nr,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => c(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, i.jsx)(nG, { userId: n.id, widgetType: t.type, onDismiss: u, className: nU.r }),
        ...o,
    });
}
function nH(e) {
    let { widget: t, ...n } = e;
    return (0, i.jsx)(nc, { widgetType: t.type, children: (0, i.jsx)(nW, { widget: t, ...n }) });
}
var nV = n(669253),
    nB = n(140355),
    nz = n(96173),
    nY = n(788259),
    nK = n(269507);
function nX(e) {
    let { userId: t } = e,
        { trackUserProfileAction: n, trackUserProfileEditAction: s } = (0, eX.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        d = (0, a.bG)([t9.A], () => t9.A.getUserProfile(t)?.fetchError != null, [t]),
        [u, g] = e8(!d),
        m = (0, nz.A)();
    return (
        l.useEffect(() => {
            r.current || d || (n({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [d, n]),
        (0, i.jsxs)("div", {
            className: nK.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: nK.FS,
                    children: [
                        (0, i.jsx)(tO.D, {
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
                        className: nK.ZW,
                        "aria-label": V.intl.string(V.t["+EIBSA"]),
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
                !d && (0, i.jsx)(e2, { targetElementRef: o, isVisible: u, markAsDismissed: g }),
            ],
        })
    );
}
var nq = n(366209);
function nZ(e) {
    let { widget: t, ...n } = e;
    return t instanceof f.R
        ? (0, i.jsx)(L.A, { widget: t, ...n })
        : t instanceof p.Tu
          ? (0, i.jsx)(eV, { widget: t, ...n })
          : (0, I.fu)(t)
            ? (0, i.jsx)(nH, { widget: t, ...n })
            : t instanceof h.k
              ? (0, i.jsx)(tQ, { widget: t, ...n })
              : null;
}
function nJ() {
    return (0, i.jsxs)("div", {
        className: nq.mJ,
        children: [
            (0, i.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, i.jsx)(c.E, { variant: "text-xs/normal", color: "text-muted", children: V.intl.string(V.t["7blcz6"]) }),
        ],
    });
}
function nQ(e) {
    let { user: t, guildId: n, channelId: s } = e,
        r = (0, w.A)(t.id),
        o = (0, _.A)(t.id),
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
        p = l.useMemo(() => r.filter(I.fu), [r]),
        j = l.useMemo(() => r.filter((e) => e instanceof f.R), [r]);
    function A() {
        return (0, i.jsxs)(i.Fragment, {
            children: [
                o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(e3, { className: nq.cG }), c && (0, i.jsx)(nJ, {}), (0, i.jsx)(t3, {})],
                    }),
                r.map((e, l) =>
                    (0, i.jsx)(
                        nZ,
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
    })(o, p),
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
        ? (0, i.jsx)(nX, { userId: t.id })
        : o
          ? (0, i.jsx)(e4.D, { children: A() })
          : A();
}
function n$(e) {
    let { user: t, ...n } = e,
        s = l.useRef(null);
    (0, R.i)({ containerRef: s });
    let a = (0, nV.k)(t.id);
    return (0, i.jsxs)(nB.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(nq.XG, { [nq.az]: a }),
        fade: !0,
        children: [(0, i.jsx)(t4.A, { scrollerRef: s }), (0, i.jsx)(nQ, { user: t, ...n })],
    });
}
