i.d(t, { A: () => iH, u: () => iU });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    r = i.n(s),
    a = i(17928),
    o = i(885574),
    d = i(834730),
    c = i(429913),
    u = i(277984),
    g = i(840387),
    m = i(201718),
    x = i(615405),
    f = i(633075),
    h = i(646976),
    p = i(289173),
    I = i(210598),
    j = i(311043),
    A = i(569926),
    v = i(958805),
    E = i(61881),
    S = i(435558),
    C = i(196765),
    b = i(540185),
    T = i(282435);
let N = (0, S.sampleSize)(T.sx, T.sx.length),
    y = (0, C.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (i, n, l) => {
            let s = new Set(l.map((e) => e.gameId));
            for (let l of (e({
                stack: [...i.filter((e) => !s.has(e)), ...N],
                wishlistStack: [...n.filter((e) => !s.has(e)), ...N],
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
            return t()._setStack(i, s), l;
        },
        peekNext: (e, i) => (i === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
        bump: (e, i) => {
            let n = t().gameIds[i] ?? [],
                l = n.indexOf(e);
            if (-1 === l) return;
            let s = [...n];
            s.splice(l, 1);
            let r = t().getNext(1, i),
                a = t().peekNext(7, i);
            t()._setGameIds(i, [...s, ...r]), t()._setPeekedGameIds(i, [...a, ...r]);
        },
        bumpMultiple: (e, i) => {
            let n = (t().gameIds[i] ?? []).filter((t) => !e.includes(t)),
                l = t().getNext(6 - n.length, i),
                s = t().peekNext(7, i);
            t()._setGameIds(i, [...n, ...l]), t()._setPeekedGameIds(i, [...s, ...l]);
        },
        remove: (e, i) => {
            let n = (i === b.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            t()._setStack(i, n), t()._setPeekedGameIds(i, t().peekNext(7, i));
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
function k(e) {
    let { bump: t, bumpMultiple: i, gameIds: n } = y();
    !(function (e) {
        let { remove: t, peekedGameIds: i } = y(),
            n = l.useMemo(() => i[e] ?? [], [i, e]);
        (0, A.x)(n);
        let s = (0, a.yK)([j.A], () => n.map((e) => j.A.isFetching(e)));
        l.useEffect(() => {
            for (let i of n) {
                let n = j.A.didFetchingFail(i),
                    l = j.A.hasNoData(i),
                    s = !!j.A.getGame(i),
                    r = null != j.A.getCoverImageUrl(i);
                (n || l || (s && !r)) && t(i, e);
            }
        }, [n, t, e, s]);
    })(e);
    let s = l.useMemo(() => n[e] ?? [], [n, e]),
        r = l.useCallback(
            (i) => {
                t(i, e);
            },
            [t, e],
        ),
        o = (0, a.yK)([j.A], () => s.map((e) => j.A.isFetching(e)));
    l.useEffect(() => {
        let t = s.filter((e) => {
            let t = j.A.didFetchingFail(e),
                i = j.A.hasNoData(e),
                n = !!j.A.getGame(e),
                l = null != j.A.getCoverImageUrl(e);
            return t || i || (n && !l);
        });
        t.length > 0 && i(t, e);
    }, [s, e, i, o]);
    let d = l.useMemo(() => s.map((e) => ({ gameId: e })), [s]);
    return { gameIds: s, games: d, onAddGame: r };
}
var w = i(600761),
    R = i(667049),
    O = i(389667),
    L = i(605694),
    _ = i(869484),
    P = i(315629),
    D = i(465794),
    G = i(450232),
    M = i(287809),
    U = i(158045),
    F = i(735321),
    W = i(623280),
    H = i(939249),
    V = i(375708),
    B = i(954165);
function z(e) {
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
var X = i(866665),
    K = i(245604),
    Y = i(43990),
    q = i(241326),
    J = i(33969),
    Q = i(448766),
    Z = i(372638),
    $ = i(761431),
    ee = i(770178);
let et = l.createContext({
    isAnyFieldClipped: !1,
    isExpanded: !1,
    setAnyFieldClipped: () => {},
    setIsExpanded: () => {},
});
function ei(e) {
    let { children: t } = e,
        [i, s] = l.useState(!1),
        [r, a] = l.useState(!1),
        [o] = l.useState(() => new Set()),
        d = l.useCallback(
            (e, t) => {
                t ? o.add(e) : o.delete(e), a(o.size > 0);
            },
            [o],
        ),
        c = l.useMemo(
            () => ({ isExpanded: i, setIsExpanded: s, isAnyFieldClipped: r, setAnyFieldClipped: d }),
            [i, r, d],
        );
    return (0, n.jsx)(et.Provider, { value: c, children: t });
}
var en = i(892572);
function el(e) {
    let { className: t, variant: i, color: s, value: a, maxLines: o, interactive: c = !0, disableMarkdown: u = !1 } = e,
        g = c ? Q.d : Q.j,
        { textRef: m, lineClamp: x } = (function (e, t) {
            let { isExpanded: i, setAnyFieldClipped: n } = l.useContext(et),
                s = l.useId(),
                r = l.useRef(null),
                a = l.useCallback(() => {
                    let e = r.current;
                    null != e && n(s, e.scrollWidth - e.clientWidth > 1 || e.scrollHeight - e.clientHeight > 1);
                }, [s, n]);
            return (
                (0, ee.g)(r, a, [i, t], { fireOnMount: !0, fireOnDepsChange: !0 }),
                l.useEffect(() => () => n(s, !1), [s, n]),
                { textRef: r, lineClamp: i ? void 0 : e }
            );
        })(o, a);
    return (0, n.jsx)(d.E, {
        ref: m,
        className: r()(en.YD, { [en.Lq]: o > 1 }, t),
        variant: i,
        color: s,
        lineClamp: x,
        children: u ? a : g(a),
    });
}
function es(e) {
    let {
            value: t,
            placeholder: i,
            variant: s,
            color: r,
            onCommit: a,
            maxLength: o,
            maxLines: d,
            growWidth: c,
            disableMarkdown: u,
        } = e,
        g = l.useCallback((e) => a(e.trim()), [a]),
        m = (0, $.TX)({ value: t, onCommit: g }),
        x =
            "" === t.trim()
                ? null
                : (0, n.jsx)(el, { interactive: !1, variant: s, color: r, value: t, maxLines: d, disableMarkdown: u }),
        f = {
            ...m,
            removeVerticalPadding: !0,
            growWidth: c || m.isEditing,
            preview: x,
            placeholder: i,
            editButtonAriaLabel: i,
            label: i,
            maxLength: o,
            className: en.ZZ,
        };
    return 1 === d ? (0, n.jsx)($.yV, { ...f, size: "compact" }) : (0, n.jsx)(Z.f, { ...f, rows: 1, maxRows: d });
}
function er(e) {
    return e.canEdit
        ? (0, n.jsx)(es, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, n.jsx)(el, {
                variant: e.variant,
                color: e.color,
                value: e.value,
                maxLines: e.maxLines,
                disableMarkdown: e.disableMarkdown,
            });
}
var ea = i(326009),
    eo = i(922016),
    ed = i(980707),
    ec = i(477782),
    eu = i(750943),
    eg = i(428610),
    em = i(22231),
    ex = i(946274);
function ef(e) {
    let { lastEdit: t, buttonRef: i, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    function a() {
        (0, ex.AM)(t.unprocessedFile, (e, i) => s(e, i, t.transform));
    }
    return (0, n.jsx)(eo.Y, {
        targetElementRef: i,
        align: "right",
        position: "bottom",
        disablePointerEvents: !1,
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, n.jsx)(ed.W, {
                "data-menu-migrated": !0,
                navId: "personal-widget-image-edit-menu",
                onClose: t,
                onSelect: void 0,
                "aria-label": V.intl.string(V.t.RWkUzH),
                children: (0, n.jsxs)(ec.rX, {
                    children: [
                        (0, n.jsx)(ec.Dr, {
                            id: "change-image",
                            label: V.intl.string(V.t.dh0LD5),
                            action: r,
                            icon: eu.X,
                            leadingAccessory: { type: "icon", icon: eu.X },
                        }),
                        (0, n.jsx)(ec.Dr, {
                            id: "reposition-image",
                            label: V.intl.string(V.t.je0LTI),
                            action: a,
                            icon: eg.K,
                            leadingAccessory: { type: "icon", icon: eg.K },
                        }),
                    ],
                }),
            });
        },
        children: (e) =>
            (0, n.jsx)(J.Y, {
                ...e,
                ref: i,
                icon: em.PencilIcon,
                variant: "overlay-secondary",
                tooltipText: V.intl.string(V.t.RWkUzH),
                "aria-haspopup": "menu",
                disabled: l,
            }),
    });
}
function eh(e) {
    let { lastEdit: t, buttonRef: i, disabled: l, cropAndUpload: s, onChangeImage: r } = e;
    return null == t
        ? (0, n.jsx)(J.Y, {
              ref: i,
              icon: eu.X,
              variant: "overlay-secondary",
              tooltipText: V.intl.string(V.t.dh0LD5),
              disabled: l,
              onClick: r,
          })
        : (0, n.jsx)(ef, { lastEdit: t, buttonRef: i, disabled: l, cropAndUpload: s, onChangeImage: r });
}
var ep = i(691540),
    eI = i(857250),
    ej = i(97483),
    eA = i(192308),
    ev = i(765548),
    eE = i(229531),
    eS = i(515718),
    eC = i(741394),
    eb = i(38405);
function eT(e) {
    let { uploadType: t, returnRef: s, onUploadSuccess: r } = e,
        a = l.useRef(0),
        [o, d] = l.useState(null),
        [c, u] = l.useState(null),
        g = (0, ev.A)(r),
        m = l.useCallback(() => {
            (a.current = a.current + 1), d(null), u(null);
        }, []),
        x = l.useCallback(
            async (e, t, i, n) => {
                a.current = a.current + 1;
                let l = a.current;
                d(e);
                try {
                    let s = await v.A.uploadWidgetAsset(t);
                    if (a.current !== l) return;
                    d(null), u({ filename: s, unprocessedFile: i, transform: n }), g({ filename: s, localDataUri: e });
                } catch (e) {
                    if (a.current !== l) return;
                    d(null), (0, ep.P0)((0, eI.o)(V.intl.string(V.t.F4Neqh), ej.Ck.FAILURE)), eb.A.captureException(e);
                }
            },
            [g],
        ),
        f = l.useCallback(
            (e) => {
                var t, i;
                let n,
                    l,
                    { imageUri: s, file: r, transform: a } = e,
                    o = (0, eS.aU)(s);
                o.size > 0xa00000
                    ? (0, ep.P0)((0, eI.o)(V.intl.string(V.t.YbdEFK), ej.Ck.FAILURE))
                    : x(
                          s,
                          new File(
                              [o],
                              ((t = r.name),
                              (i = o.type),
                              (n = (0, eE.B)(i) ?? "png"),
                              (l = (0, eC.kh)(t)),
                              `${"" !== l ? l : "image"}.${n}`),
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
            (e, l, r) => {
                (0, eA.openModalLazy)(
                    async () => {
                        let { default: a } = await Promise.all([
                            i.e("940226"),
                            i.e("655327"),
                            i.e("67702"),
                            i.e("1214"),
                            i.e("343437"),
                            i.e("858164"),
                            i.e("571470"),
                            i.e("837490"),
                            i.e("50342"),
                            i.e("463726"),
                            i.e("93513"),
                            i.e("779149"),
                            i.e("507406"),
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
                                onCrop: f,
                            });
                    },
                    { stackingBehavior: "stack" },
                );
            },
            [f, t, s],
        ),
        previewUri: o,
        cancelUpload: m,
        getLastEdit: l.useCallback(
            (e) => (null != c && null != e && "filename" in e && e.filename === c.filename ? c : null),
            [c],
        ),
    };
}
var eN = i(652215),
    ey = i(339984),
    ek = i(148548);
function ew() {
    return (0, n.jsx)(X.m, {
        text: V.intl.string(V.t.gQmDk4),
        children: (0, n.jsxs)(H.D, {
            className: ek.YN,
            "aria-label": V.intl.string(V.t.gQmDk4),
            onClick: function () {
                (0, F.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
            },
            children: [
                (0, n.jsx)("div", { className: ek.JD }),
                (0, n.jsx)("div", { className: ek.xJ, children: (0, n.jsx)(K.U, { size: "sm" }) }),
                (0, n.jsx)("div", { className: ek.JD }),
            ],
        }),
    });
}
function eR(e) {
    let { userId: t, section: i, sectionIndex: s, canEdit: a } = e,
        o = l.useRef(null),
        d = l.useRef(null);
    function c(e) {
        (0, F.AD)((t) => {
            let i = t.sections[s];
            if (i?.type !== _.K.COVER) return t;
            let n = [...t.sections];
            return (n[s] = e(i)), new I.Tu({ ...t, sections: n });
        });
    }
    function u(e) {
        c((t) => ({ ...t, title: e }));
    }
    function g(e) {
        c((t) => ({ ...t, subtitle: e }));
    }
    let {
        cropAndUpload: m,
        previewUri: x,
        cancelUpload: f,
        getLastEdit: h,
    } = eT({
        uploadType: ey.HL.PERSONAL_WIDGET_COVER,
        returnRef: d,
        onUploadSuccess: (e) => c((t) => ({ ...t, image: e })),
    });
    function p() {
        f(), c((e) => ({ ...e, image: void 0 }));
    }
    function j() {
        o.current?.activateUploadDialogue();
    }
    function A() {
        (0, F.AD)((e) => new I.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let v = null != x,
        E = a || "" !== i.title.trim() || "" !== i.subtitle.trim(),
        S = null != i.image || v,
        C = S || a,
        b = h(i.image);
    return (0, n.jsx)(Y.N, {
        theme: S ? eN.NJ8.DARK : void 0,
        children: (e) =>
            (0, n.jsxs)("div", {
                className: r()(ek.kL, { [ek.Vp]: C }, e),
                children: [
                    a || null != i.image
                        ? (0, n.jsx)("div", {
                              className: ek.El,
                              children: (0, n.jsx)(ea.A, {
                                  cropAndUpload: m,
                                  imageInputRef: o,
                                  className: ek.Sl,
                                  canEdit: a,
                                  userId: t,
                                  image: i.image,
                                  previewUri: x,
                              }),
                          })
                        : null,
                    a
                        ? (0, n.jsxs)(J.A, {
                              className: ek.o1,
                              children: [
                                  null != i.image
                                      ? (0, n.jsx)(eh, {
                                            lastEdit: b,
                                            buttonRef: d,
                                            disabled: v,
                                            cropAndUpload: m,
                                            onChangeImage: j,
                                        })
                                      : null,
                                  (0, n.jsx)(J.Y, {
                                      icon: q.TrashIcon,
                                      variant: "overlay-secondary",
                                      tooltipText: S ? V.intl.string(V.t.RyK5Ww) : V.intl.string(V.t.g2jVww),
                                      onClick: S ? p : A,
                                  }),
                              ],
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        className: r()(ek.hQ, e, { [ek.Vp]: C }),
                        children: [
                            S && E ? (0, n.jsx)("div", { className: ek.cw }) : null,
                            (0, n.jsx)(er, {
                                canEdit: a,
                                growWidth: !0,
                                variant: "heading-xl/semibold",
                                color: "text-strong",
                                value: i.title,
                                placeholder: V.intl.string(V.t.KqCDvK),
                                onCommit: u,
                                maxLength: 100,
                                maxLines: 2,
                            }),
                            (0, n.jsx)(er, {
                                canEdit: a,
                                variant: "text-sm/medium",
                                color: "text-default",
                                value: i.subtitle,
                                placeholder: V.intl.string(V.t.k8zZFd),
                                onCommit: g,
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
var eO = i(661531),
    eL = i(603090);
function e_(e) {
    let { onClick: t } = e;
    return (0, n.jsxs)(H.D, {
        onClick: t,
        className: eL.cR,
        children: [
            (0, n.jsx)(eu.X, { size: "xs", color: eO.A.colors.ICON_SUBTLE }),
            (0, n.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", children: V.intl.string(V.t["9AY+/x"]) }),
        ],
    });
}
function eP(e) {
    let { index: t, userId: i, field: l, canEdit: s, onFieldChange: r, onFieldRemove: a } = e,
        {
            cropAndUpload: o,
            previewUri: d,
            cancelUpload: c,
        } = eT({
            uploadType: ey.HL.PERSONAL_WIDGET_FIELD,
            onUploadSuccess: (e) => r(l.key, (t) => ({ ...t, image: e })),
        }),
        u = s ? !0 !== l.hideImage : null != l.image;
    return (0, n.jsxs)("div", {
        className: eL.ez,
        children: [
            u
                ? (0, n.jsxs)("div", {
                      className: eL.tF,
                      children: [
                          (0, n.jsx)(ea.A, {
                              className: eL.k9,
                              canEdit: s,
                              userId: i,
                              image: l.image,
                              previewUri: d,
                              cropAndUpload: o,
                          }),
                          s
                              ? (0, n.jsx)(J.A, {
                                    className: eL.ij,
                                    children: (0, n.jsx)(J.Y, {
                                        variant: "overlay-secondary",
                                        tooltipText: V.intl.string(V.t.RyK5Ww),
                                        onClick: function () {
                                            c(),
                                                r(l.key, (e) =>
                                                    null != e.image
                                                        ? { ...e, image: void 0 }
                                                        : { ...e, image: void 0, hideImage: !0 },
                                                );
                                        },
                                        icon: q.TrashIcon,
                                    }),
                                })
                              : null,
                      ],
                  })
                : null,
            (0, n.jsxs)("div", {
                className: eL.oT,
                children: [
                    (0, n.jsx)(er, {
                        canEdit: s,
                        variant: "text-sm/medium",
                        color: "text-default",
                        value: l.title,
                        placeholder: V.intl.formatToPlainString(V.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            r(l.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 50,
                        maxLines: 2,
                    }),
                    (0, n.jsx)(er, {
                        canEdit: s,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        value: l.description,
                        placeholder: V.intl.formatToPlainString(V.t.Hs14K3, { number: t + 1 }),
                        onCommit: function (e) {
                            r(l.key, (t) => ({ ...t, description: e }));
                        },
                        maxLength: 100,
                        maxLines: 4,
                    }),
                ],
            }),
            s
                ? (0, n.jsxs)(J.A, {
                      className: eL.Ms,
                      children: [
                          u
                              ? null
                              : (0, n.jsx)(J.Y, {
                                    variant: "overlay-secondary",
                                    tooltipText: V.intl.string(V.t.i3vRzP),
                                    onClick: function () {
                                        r(l.key, (e) => ({ ...e, hideImage: void 0 }));
                                    },
                                    icon: eu.X,
                                }),
                          (0, n.jsx)(J.Y, {
                              variant: "overlay-secondary",
                              tooltipText: V.intl.string(V.t.g2jVww),
                              onClick: function () {
                                  a(l.key);
                              },
                              icon: q.TrashIcon,
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eD(e) {
    let { userId: t, section: i, sectionIndex: l, canEdit: s } = e;
    function r(e) {
        (0, F.AD)((t) => {
            let i = t.sections[l];
            if (i?.type !== _.K.FIELDS) return t;
            let n = [...t.sections];
            return (n[l] = { ...i, fields: e(i.fields) }), new I.Tu({ ...t, sections: n });
        });
    }
    function a(e, t) {
        r((i) => {
            let n = i.findIndex((t) => t.key === e),
                l = i[n];
            if (null == l) return i;
            let s = [...i];
            return (s[n] = t(l)), s;
        });
    }
    function o(e) {
        r((t) => t.filter((t) => t.key !== e));
    }
    let d = i.fields.map((e, i) =>
        (0, n.jsx)(eP, { index: i, userId: t, field: e, canEdit: s, onFieldChange: a, onFieldRemove: o }, e.key),
    );
    return (s &&
        i.fields.length < 4 &&
        d.push(
            (0, n.jsx)(
                e_,
                {
                    onClick: function () {
                        r((e) => [...e, (0, I.yL)()]);
                    },
                },
                "add-entry",
            ),
        ),
    0 === d.length)
        ? null
        : (0, n.jsx)("div", { className: eL.kL, children: d });
}
var eG = i(202541),
    eM = i(877068);
let eU = { section: eN.JJy.PERSONAL_WIDGET };
function eF(e) {
    let { widget: t, canEdit: i } = e;
    return (0, n.jsxs)("div", {
        className: eM.wx,
        children: [
            (0, n.jsx)(G.A, { size: "xs", className: eM.nr }),
            (0, n.jsx)(er, {
                canEdit: i,
                variant: "text-sm/medium",
                color: "text-default",
                value: t.header,
                placeholder: V.intl.string(V.t.fjSaAm),
                onCommit: function (e) {
                    (0, F.AD)((t) => new I.Tu({ ...t, header: e }));
                },
                maxLength: 100,
                maxLines: 1,
                disableMarkdown: !0,
            }),
        ],
    });
}
function eW(e) {
    let { userId: t, section: i, sectionIndex: l, canEdit: s } = e;
    switch (i.type) {
        case _.K.COVER:
            return (0, n.jsx)(eR, { userId: t, section: i, sectionIndex: l, canEdit: s });
        case _.K.FIELDS:
            return (0, n.jsx)(eD, { userId: t, section: i, sectionIndex: l, canEdit: s });
    }
}
function eH() {
    return (0, a.bG)([M.default], () => U.Ay.isPremium(M.default.getCurrentUser(), eG.PremiumTypes.TIER_2))
        ? null
        : (0, n.jsxs)("div", {
              className: eM.hc,
              children: [
                  (0, n.jsx)(P.h, { color: "nitro-pink", className: eM.Sp, offsetBottom: -4 }),
                  (0, n.jsxs)("div", {
                      className: eM.LK,
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
                      subscriptionTier: eG.pe.TIER_2,
                      defaultTextOverride: V.intl.string(V.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eU,
                  }),
              ],
          });
}
function eV() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: i } = l.useContext(et);
    return e || t ? (0, n.jsx)(z, { expanded: t, onClick: () => i((e) => !e) }) : null;
}
function eB(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, index: a, trailingContent: o } = e,
        d = s && !0 !== r,
        c = l.useMemo(() => t.sections.some((e) => e.type === _.K.COVER), [t.sections]);
    return (0, n.jsx)(W.A, {
        userId: i.id,
        widget: t,
        allowEditing: s,
        disableInteraction: r,
        index: a,
        trailingContent: o,
        className: eM.Nr,
        headerClassName: eM.JE,
        children: (0, n.jsxs)("div", {
            className: eM.kL,
            children: [
                (0, n.jsx)(eF, { widget: t, canEdit: d }),
                d && !c ? (0, n.jsx)(ew, {}) : null,
                t.sections.map((e, t) => (0, n.jsx)(eW, { userId: i.id, section: e, sectionIndex: t, canEdit: d }, t)),
                (0, n.jsx)(eV, {}),
                d ? (0, n.jsx)(eH, {}) : null,
            ],
        }),
    });
}
function ez(e) {
    return (0, n.jsx)(ei, { children: (0, n.jsx)(eB, { ...e }) });
}
var eX = i(702841),
    eK = i(821609),
    eY = i(403581),
    eq = i(307301),
    eJ = i(183555),
    eQ = i(465318),
    eZ = i(384377),
    e$ = i(554146),
    e0 = i(43105),
    e1 = i(131607),
    e2 = i(518477),
    e8 = i(49999);
function e7() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = eQ.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [i, n] = (0, e1.kn)(e && t ? [e$.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [i === e$.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, n];
}
function e5(e) {
    let { targetElementRef: t, isVisible: i, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, eJ.NJ)();
    return i
        ? (0, n.jsx)(e0.A, {
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
                              (0, eZ.XA)(e2.jM.WIDGET_ADDED);
                      },
                  },
              ],
          })
        : null;
}
var e3 = i(410453);
function e6(e) {
    let { buttonRef: t, isCoachmarkVisible: i, markCoachmarkAsDismissed: s } = e,
        { trackUserProfileEditAction: r } = (0, eJ.NJ)(),
        a = l.useCallback(() => {
            i && s(e8.i.TAKE_ACTION);
            let e = (0, I.g0)();
            (0, F.Y5)(e),
                r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, eZ.XA)(e2.jM.WIDGET_ADDED);
        }, [r, i, s]);
    return (0, n.jsx)(eK.$, {
        icon: eY.t,
        text: V.intl.string(V.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function e4(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, eJ.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [c, u] = e7(),
        g = (function () {
            let e = (0, eX.bG)([M.default], () => M.default.getCurrentUser()?.id),
                t = (0, R.A)(e),
                { enabled: i, showCreateEntrypoint: n } = eQ.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === b.x.PERSONAL);
            return i && n && !l;
        })(),
        m = l.useCallback(() => {
            c && u(e8.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, eA.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([i.e("450427"), i.e("422420"), i.e("426623")]).then(
                            i.bind(i, 850370),
                        );
                        return (t) => (0, n.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [s, c, u]);
    return (0, n.jsxs)("div", {
        className: r()(e3.w, t),
        children: [
            (0, n.jsx)(d.E, {
                className: e3.D,
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: V.intl.string(V.t.OYlggR),
            }),
            g ? (0, n.jsx)(e6, { buttonRef: o, isCoachmarkVisible: c, markCoachmarkAsDismissed: u }) : null,
            (0, n.jsx)(eK.$, {
                icon: eq.j,
                text: V.intl.string(V.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: m,
                buttonRef: a,
            }),
            (0, n.jsx)(e5, { targetElementRef: g ? o : a, isVisible: c, markAsDismissed: u }),
        ],
    });
}
var e9 = i(192),
    te = i(408278),
    tt = i(499373),
    ti = i(793574),
    tn = i(111994),
    tl = i(607470),
    ts = i(590251),
    tr = i(869006);
function ta(e) {
    let { item: t, size: i } = e,
        l = "exporting" === t.status,
        s = "uploading" === t.status ? Math.round(100 * t.progress) : 25;
    return (0, n.jsx)("div", {
        className: r()(tr.ring, tr[i], { [tr.indeterminate]: l }),
        role: "progressbar",
        "aria-label": V.intl.string(V.t.RFRuwZ),
        "aria-valuenow": l ? void 0 : s,
        children: (0, n.jsx)(ts.a, {
            percent: s,
            strokeSize: ts.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var to = i(579460);
function td(e) {
    let { item: t, ringSize: i, className: l } = e,
        s = "exporting" === t.status || "uploading" === t.status,
        a = r()(to.Gt, { [to.ob]: s });
    return (0, n.jsxs)("div", {
        className: r()(to.$_, l),
        children: [
            "saved" === t.status
                ? null != t.videoURL
                    ? (0, n.jsx)(tl.A, { src: t.videoURL, preload: "metadata", muted: !0, className: a })
                    : null
                : (0, n.jsx)("img", { src: t.thumbnail, alt: "", className: a, loading: "lazy" }),
            s && (0, n.jsx)(ta, { item: t, size: i }),
        ],
    });
}
var tc = i(3026);
i(600253);
var tu = i(936026);
function tg(e) {
    let { value: t, isPlaceholder: i = !1 } = e;
    return (0, n.jsx)(d.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(tu.Qw, { [tu.qf]: i }),
        children: (0, n.jsx)(tc.A, { children: t }),
    });
}
function tm(e) {
    let { clipId: t, title: i } = e,
        { trackUserProfileEditAction: s } = (0, eJ.NJ)(),
        a = l.useCallback(
            (e) => {
                let n = e.trim();
                n !== i.trim() &&
                    ((0, F.mI)(t, n),
                    s({ action: "CLIP_TITLE_EDITED", widgetEdited: b.x.CLIPS_GALLERY, numCharacters: n.length }));
            },
            [t, i, s],
        ),
        o = (0, $.TX)({ value: i, onCommit: a }),
        d = V.intl.string(V.t["2gwc+H"]);
    return (0, n.jsx)($.yV, {
        ...o,
        size: "compact",
        removeVerticalPadding: !0,
        className: r()(tu.ZZ, { [tu.Dy]: o.isEditing }),
        preview: (0, n.jsxs)("span", {
            className: r()(tu.$, tu.TG),
            children: [
                (0, n.jsx)(em.PencilIcon, { size: "xxs", color: "currentColor", className: tu.wz }),
                "" === i.trim() ? (0, n.jsx)(tg, { value: d, isPlaceholder: !0 }) : (0, n.jsx)(tg, { value: i }),
            ],
        }),
        placeholder: d,
        editButtonAriaLabel: V.intl.string(V.t.PDnM11),
        label: V.intl.string(V.t.PDnM11),
        maxLength: 200,
    });
}
function tx(e) {
    let { clipId: t, title: i, allowEditing: l } = e,
        s = null != i && "" !== i.trim();
    return l || s
        ? l
            ? (0, n.jsx)(tm, { clipId: t, title: i ?? "" })
            : (0, n.jsx)("span", { className: tu.$, children: (0, n.jsx)(tg, { value: i ?? "" }) })
        : null;
}
var tf = i(663341),
    th = i(765178),
    tp = i(539572),
    tI = i(195880),
    tj = i(696016);
let tA = (0, C.v)(() => ({ localClips: new Map() }));
function tv(e, t) {
    tA.setState((i) => ({ localClips: new Map(i.localClips).set(e, t) }));
}
function tE(e) {
    tA.setState((t) => {
        let i = new Map(t.localClips);
        return i.delete(e), { localClips: i };
    });
}
async function tS(e, t) {
    if (!tA.getState().localClips.has(e.id)) {
        if (null == e.applicationId) return void (0, ep.P0)((0, eI.o)(V.intl.string(V.t.xcLXWy), ej.Ck.FAILURE));
        tv(e.id, { status: "exporting", clip: e });
        try {
            let i = await (0, tp.VO)(e, { analyticsLocations: t });
            tv(e.id, { status: "uploading", clip: e, progress: 0 });
            let n = new File([i], "clip.mp4", { type: "video/mp4" }),
                l = await v.A.uploadWidgetClip(n, {
                    onProgress: (t) => {
                        var i;
                        return (
                            (i = e.id),
                            void tA.setState((e) => {
                                let n = e.localClips.get(i);
                                return n?.status !== "uploading"
                                    ? e
                                    : { localClips: new Map(e.localClips).set(i, { ...n, progress: t }) };
                            })
                        );
                    },
                });
            tv(e.id, { status: "uploaded", clip: e, uploadFilename: l }),
                (0, F.XW)({
                    status: "pending",
                    id: (0, tI.m)(),
                    sourceClipId: e.id,
                    gameId: e.applicationId,
                    title: e.name,
                    uploadFilename: l,
                });
        } catch (t) {
            tE(e.id),
                tj.nx.error("Failed to upload a clip for the clips gallery widget", t),
                (0, ep.P0)((0, eI.o)(V.intl.string(V.t.iufib1), ej.Ck.FAILURE));
        }
    }
}
function tC(e) {
    let { widgetClipId: t, sourceClipId: i, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eJ.NJ)(),
        r = V.intl.string(V.t.ib6Mgx);
    return (0, n.jsx)("div", {
        className: l,
        children: (0, n.jsx)(X.m, {
            text: r,
            ariaHidden: !0,
            children: (0, n.jsx)(te.K, {
                "aria-label": r,
                icon: q.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, F.mC)(t),
                        null != i && tE(i),
                        th.O.announce(V.intl.string(V.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var tb = i(233002);
function tT(e) {
    let { items: t, selectedKey: i, onSelect: l, onAddClip: s, allowRemoving: a = !1 } = e,
        o = Math.max(0, 4 - t.length);
    return (0, n.jsxs)("ul", {
        className: tb.Xm,
        children: [
            t.map((e, t) =>
                (0, n.jsxs)(
                    "li",
                    {
                        className: tb.NI,
                        children: [
                            (0, n.jsx)(H.D, {
                                className: r()(tb.Vs, { [tb.wH]: e.key === i }),
                                "aria-pressed": e.key === i,
                                "aria-label": V.intl.formatToPlainString(V.t.zrtAwA, { clipNumber: t + 1 }),
                                onClick: () => l(e.key),
                                children: (0, n.jsx)(td, { item: e, ringSize: "sm", className: tb.nC }),
                            }),
                            a &&
                                ("pending" === e.status || "saved" === e.status) &&
                                (0, n.jsx)(tC, {
                                    widgetClipId: e.key,
                                    sourceClipId: "pending" === e.status ? e.sourceClipId : void 0,
                                    className: tb.nM,
                                }),
                        ],
                    },
                    e.key,
                ),
            ),
            null != s &&
                Array.from({ length: o }, (e, t) =>
                    (0, n.jsx)(
                        "li",
                        {
                            className: tb.NI,
                            children: (0, n.jsx)(H.D, {
                                className: tb.Yn,
                                "aria-label": V.intl.string(V.t.rI0i0a),
                                onClick: s,
                                children: (0, n.jsx)(tf.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                            }),
                        },
                        `empty-${t}`,
                    ),
                ),
        ],
    });
}
var tN = i(457404);
function ty(e) {
    let { children: t } = e;
    return (0, n.jsxs)("div", {
        className: tN.Lw,
        children: [(0, n.jsx)("div", { className: tN.tB }), (0, n.jsx)("div", { className: tN.Qs, children: t })],
    });
}
var tk = i(716112);
function tw(e) {
    let { onClick: t } = e,
        i = V.intl.string(V.t.rI0i0a);
    return (0, n.jsx)(X.m, {
        text: i,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, n.jsx)(te.K, { variant: "secondary", size: "sm", icon: tt.T, "aria-label": i, onClick: t }),
    });
}
function tR() {
    return (0, n.jsx)("div", {
        className: tk.p$,
        children: (0, n.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: V.intl.format(V.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tO(e) {
    var t;
    let s,
        { widget: r, user: a, allowEditing: o, disableInteraction: d, ...c } = e,
        [u, g] = l.useState(null),
        m =
            ((t = a.id),
            (s = tA((e) => e.localClips)),
            l.useMemo(
                () => [
                    ...r.clips.flatMap((e) => {
                        if ("saved" === e.status)
                            return [
                                {
                                    status: "saved",
                                    key: e.id,
                                    videoURL: (function (e, t) {
                                        let i = window.GLOBAL_ENV.CDN_HOST;
                                        if (null != i) return `https://${i}/profile-widget-clips/${e}/${t}`;
                                    })(t, e.fileId),
                                    title: e.title,
                                },
                            ];
                        let i = s.get(e.sourceClipId);
                        return null != i
                            ? [
                                  {
                                      status: "pending",
                                      key: e.id,
                                      sourceClipId: e.sourceClipId,
                                      thumbnail: i.clip.thumbnail,
                                      title: e.title,
                                  },
                              ]
                            : [];
                    }),
                    ...Array.from(s.values()).flatMap((e) => {
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
                [r.clips, s, t],
            )),
        x = o && !0 !== d,
        f = 0 === m.length,
        h = m.length >= 4,
        p = m.find((e) => e.key === u) ?? m[m.length - 1],
        I = l.useCallback(() => {
            (0, eA.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        i.e("459368"),
                        i.e("251714"),
                        i.e("860350"),
                        i.e("180644"),
                        i.e("821717"),
                        i.e("269714"),
                        i.e("19385"),
                        i.e("398104"),
                        i.e("553829"),
                        i.e("33091"),
                        i.e("865257"),
                        i.e("318196"),
                        i.e("323079"),
                        i.e("437655"),
                        i.e("430877"),
                        i.e("48055"),
                        i.e("808915"),
                        i.e("614146"),
                        i.e("875842"),
                        i.e("883952"),
                        i.e("858337"),
                        i.e("220287"),
                        i.e("3131"),
                        i.e("324761"),
                        i.e("918024"),
                        i.e("203930"),
                        i.e("903663"),
                        i.e("647177"),
                        i.e("169201"),
                        i.e("8563"),
                        i.e("469985"),
                        i.e("127272"),
                        i.e("621573"),
                        i.e("496268"),
                        i.e("466147"),
                        i.e("838090"),
                        i.e("122266"),
                        i.e("501962"),
                        i.e("901922"),
                        i.e("583518"),
                        i.e("237715"),
                        i.e("974049"),
                        i.e("280559"),
                        i.e("895008"),
                        i.e("352566"),
                        i.e("489492"),
                        i.e("689160"),
                        i.e("231782"),
                        i.e("520342"),
                        i.e("771453"),
                        i.e("194676"),
                    ]).then(i.bind(i, 671884));
                    return (t) =>
                        (0, n.jsx)(e, {
                            ...t,
                            initialMainLink: tn.oH.ALL_CLIPS,
                            onClipClick: (e) => {
                                ((e) => tS(e, [ti.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                            },
                        });
                },
                { modalKey: tj.nm },
            );
        }, []);
    return (0, n.jsx)(W.A, {
        userId: a.id,
        widget: r,
        allowEditing: o,
        disableInteraction: d,
        className: tk.kL,
        headerTitle: (0, F.L)(r),
        headerActionButtons: x && f ? [(0, n.jsx)(tw, { onClick: I }, "clips-gallery-add-clip")] : void 0,
        ...c,
        children:
            null != p
                ? (0, n.jsxs)("div", {
                      className: tk.nV,
                      children: [
                          (0, n.jsxs)("div", {
                              className: tk.aM,
                              children: [
                                  (0, n.jsx)(td, { item: p, ringSize: "lg", className: tk.VH }),
                                  (0, n.jsx)(ty, {
                                      children:
                                          ("saved" === p.status || "pending" === p.status) &&
                                          (0, n.jsx)(tx, { clipId: p.key, title: p.title, allowEditing: x }),
                                  }),
                              ],
                          }),
                          (0, n.jsx)(tT, {
                              items: m,
                              selectedKey: p.key,
                              onSelect: g,
                              onAddClip: x && !h ? I : void 0,
                              allowRemoving: x,
                          }),
                      ],
                  })
                : (0, n.jsx)(tR, {}),
    });
}
var tL = i(704824),
    t_ = i(382483),
    tP = i(385113),
    tD = i(334074),
    tG = i(657718),
    tM = i(789645),
    tU = i(478016);
function tF(e) {
    let { user: t, application: i, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eJ.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: i.id }), [i.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, F.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, eZ.XA)(e2.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, n.jsx)(L.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, n.jsx)(L.A.Cta, {
            showSuggestedForYou: !0,
            heading: V.intl.format(V.t.OIzLCy, { applicationName: i.name }),
            content: V.intl.format(V.t.BQySru, { applicationName: i.name }),
            buttons: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(X.m, {
                        text: V.intl.string(V.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, n.jsx)(tG.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tM.P,
                            "aria-label": V.intl.string(V.t.WAI6xu),
                            onClick: () => {
                                s(e8.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(X.m, {
                        text: V.intl.string(V.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)(tG.S, {
                            variant: "primary",
                            size: "sm",
                            icon: tU.U,
                            "aria-label": V.intl.formatToPlainString(V.t.KfGahB, { applicationName: i.name }),
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
function tW() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: i,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([tP.A], () => tP.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, t_.Wq)();
        }, []);
        let t = (0, a.bG)([M.default], () => M.default.getCurrentUser()),
            i = (0, c.A)(e),
            { tokens: n, fetched: s } = (0, tL.j)(e),
            r = (0, R.A)(t?.id),
            o = null == t || null == e || null == n || !s,
            d = l.useMemo(
                () =>
                    o
                        ? []
                        : i.filter(
                              (e) =>
                                  !(null == e || r.some((t) => t instanceof f.R && t.applicationId === e.id)) &&
                                  null != n.find((t) => t.application.id === e.id),
                          ),
                [o, i, n, r],
            ),
            { eligibleToShow: u, markAsDismissed: g } = (0, tD.hj)({
                applications: d,
                dismissibleContent: e$.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: tD.SH,
            }),
            m = l.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = i[0];
    return null == r ? null : (0, n.jsx)(tF, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var tH = i(128988),
    tV = i(280450),
    tB = i(321191),
    tz = i(896170),
    tX = i(305866),
    tK = i(732771),
    tY = i(321108),
    tq = i(383329),
    tJ = i(67710);
function tQ(e) {
    let { widgetType: t, widget: i, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(i.games.map((e) => e.gameId)), [i.games]),
        { trackUserProfileEditAction: d } = (0, eJ.NJ)(),
        [c, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, tq.R)({ query: c }),
        f = c.trim().length > 0,
        { gameIds: h, onAddGame: p } = k(t),
        I = (0, tY.A)(h),
        j = l.useCallback(
            (e) => {
                (0, F.ew)({ widgetType: t, game: { gameId: e } }),
                    th.O.announce(V.intl.string(V.t.q0U3DE)),
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
            let t = I.filter((e) => !o.has(e.id) && (0, F.XX)(e)).map((e) => ({
                    id: String(e.id),
                    value: String(e.id),
                    label: e.name,
                    disabled: !1,
                })),
                i = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !i.has(e.id))];
        }, [m, o, I, f]),
        v = l.useCallback((e) => e, []),
        E = l.useMemo(() => ({ ...x, threshold: tz.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        S = l.useCallback((e) => (f || "" === e.trim() ? A.length : (0, tz.Ht)(A, e, E).length), [f, A, E]),
        C = l.useCallback(
            (e) => {
                let i = e.target.value;
                "" === c.trim() &&
                    "" !== i.trim() &&
                    d({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: i.trim().length,
                        numResults: S(i),
                    }),
                    u(i),
                    (g.current = i);
            },
            [c, d, t, S],
        );
    return (0, n.jsx)(eo.Y, {
        ...a,
        onRequestOpen: () => {
            d({ action: "PRESS_ADD_GAME", widgetEdited: t }), u(""), (g.current = "");
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
            return (0, n.jsx)(tX.l, {
                className: tJ.C,
                "aria-label": V.intl.string(V.t.uqw8wK),
                children: (0, n.jsxs)(tK.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: A,
                    matchSorterOptions: E,
                    customMatchSorter: f ? v : void 0,
                    children: [
                        (0, n.jsx)(tK.a3, {
                            label: V.intl.string(V.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: V.intl.string(V.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: C,
                        }),
                        (0, n.jsx)(tK.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function tZ(e) {
    let { disabled: t, ...i } = e,
        s = l.useRef(null);
    return (0, n.jsx)(tQ, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(X.m, {
                text: V.intl.string(V.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(te.K, {
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
function t$(e) {
    let t = l.useRef(null);
    return (0, n.jsx)(tQ, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(H.D, {
                innerRef: t,
                className: tJ.c,
                "aria-label": V.intl.string(V.t.PYyENc),
                ...e,
                children: (0, n.jsx)(tf.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let t0 = l.createContext(null);
function t1(e) {
    let { widgetType: t, children: i } = e,
        s = (0, a.bG)([E.A], () => {
            let e = E.A.getPendingWidgets();
            if (null == e) return !1;
            let i = e.find((e) => e.type === t);
            if (null == i) return !1;
            let n = (0, F.cv)(t);
            return i.games.length > n;
        }),
        [r, o] = l.useState(s);
    return (0, n.jsx)(t0.Provider, { value: { expanded: r, setExpanded: o }, children: i });
}
function t2() {
    let e = l.useContext(t0);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var t8 = i(67438);
function t7(e) {
    let { widget: t } = e,
        i = (0, F.cv)(t.type),
        l = 1 === i,
        s = l ? V.intl.string(V.t["3FdPBT"]) : V.intl.format(V.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: l ? t8.O : t8.k,
        children: [
            l && (0, n.jsx)(t$, { widget: t, widgetType: t.type }),
            (0, n.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var t5 = i(823016),
    t3 = i(683071),
    t6 = i(312252);
function t4(e) {
    let { widgetType: t, gameCount: i } = e,
        l = (0, F.cv)(t);
    return i <= l
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: t6.l,
              children: (0, n.jsx)(t3.w, {
                  type: "warning",
                  children: V.intl.formatToPlainString(V.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var t9 = i(249264),
    ie = i(148420);
function it(e) {
    let { games: t, user: i, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, t5.r)();
    return (0, n.jsx)("ul", {
        className: ie.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(t9.A, {
                        index: t,
                        user: i,
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
function ii(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e9.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = t2(),
        c = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(it, { ...e, games: c }),
                u && (0, n.jsx)(z, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(t4, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(t5.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function il(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(W.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(ii, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(t7, { widget: i }),
    });
}
function is(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e,
        d = i.games[0];
    return (0, n.jsx)(W.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            null != d
                ? (0, n.jsx)(t9.A, {
                      user: t,
                      widgetType: i.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(t7, { widget: i }),
    });
}
var ir = i(793693);
function ia(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: ir.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.gameId)),
    });
}
var io = i(686246),
    id = i(201438),
    ic = i(451395),
    iu = i(788593),
    ig = i(858808),
    im = i(365611),
    ix = i(900850);
function ih(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, t5.r)(),
        c = l.useRef(null);
    return (0, n.jsx)(ic.mG, {
        index: t,
        itemId: s.gameId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => c.current?.offsetWidth },
        "aria-label": V.intl.formatToPlainString(V.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, F.Un)(i, e, t),
        onEnd: () => d(s.gameId),
        className: ix.kL,
        dropBeforeClassName: ix.A,
        dropAfterClassName: ix.Ze,
        draggingClassName: ix.Id,
        children: (0, n.jsx)("div", { ref: c, className: ix.An, children: o }),
    });
}
function ip(e) {
    let {
            game: t,
            userId: i,
            widgetType: l,
            allowEditing: s,
            disableInteraction: r = !1,
            index: a,
            onRemoveGame: o,
            coverRef: d,
        } = e,
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, id.A)(t.gameId),
        { registerDragHandleRef: m } = (0, t5.r)(),
        x = s && !r,
        { isDragging: f } = (0, io.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(iu.A, {
                    imageSrc: c,
                    gameName: u,
                    gameId: t.gameId,
                    userId: i,
                    disableInteraction: r,
                    className: null == c || r ? void 0 : im.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, n.jsx)(ic.jV, { buttonRef: m(t.gameId), className: ix.BU }),
                x && (0, n.jsx)(ig.A, { game: t, widgetType: l, className: ix.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, n.jsx)("div", { className: im.mD })
        : x
          ? (0, n.jsx)(ih, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, n.jsx)("div", { className: ix.kL, children: h() });
}
function iI(e) {
    let { games: t, userId: i, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, t5.r)();
    return (0, n.jsx)(ia, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(ip, {
                index: t,
                game: e,
                userId: i,
                widgetType: l,
                allowEditing: s,
                disableInteraction: r,
                coverRef: a(e.gameId),
                onRemoveGame: o,
            }),
    });
}
function ij(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e9.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = t2(),
        c = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(iI, { ...e, games: c }),
                u && (0, n.jsx)(z, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(t4, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(t5.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function iA(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(W.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(ij, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(t7, { widget: i }),
    });
}
function iv(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(W.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(ij, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(t7, { widget: i }),
    });
}
var iE = i(297264),
    iS = i(915089),
    iC = i(772168);
function ib(e) {
    let { gameId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, id.A)(t),
        d = (0, a.bG)([E.A], () => E.A.suggestedFetchIsLoading),
        c = V.intl.formatToPlainString(V.t["3mb1s5"], { game: r });
    return o || d
        ? (0, n.jsx)("div", { className: im.mD })
        : (0, n.jsx)(X.m, {
              text: c,
              ariaHidden: !0,
              children: (0, n.jsxs)(H.D, {
                  className: iC.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, n.jsx)(iu.A, {
                          className: iC.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(tf.PlusLargeIcon, { size: "md", className: iC.Xv, color: eO.A.colors.WHITE }),
                  ],
              }),
          });
}
function iT(e) {
    let { userId: t, games: i, onDismiss: l, onClick: s, className: a } = e,
        o = (0, iS.GV)();
    return (0, n.jsxs)("aside", {
        className: r()(iC.kL, a),
        "aria-labelledby": o,
        children: [
            (0, n.jsxs)("div", {
                className: iC.wx,
                children: [
                    (0, n.jsx)(H.D, {
                        className: iC.r,
                        "aria-label": V.intl.string(V.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(tM.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(iE.D, {
                        id: o,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: V.intl.string(V.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: iC.Vg,
                children: i.map((e) => {
                    let { gameId: i } = e;
                    return (0, n.jsx)(
                        "li",
                        { children: (0, n.jsx)(ib, { onClick: () => s(i), userId: t, gameId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}
function iN(e) {
    let { widgetType: t, ...i } = e,
        { games: s, onAddGame: r } = k(t),
        { setExpanded: a } = t2(),
        { trackUserProfileEditAction: o } = (0, eJ.NJ)(),
        d = l.useCallback(
            (e) => {
                r(e),
                    a(!0),
                    (0, F.ew)({ widgetType: t, game: { gameId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [r, t, o, a],
        );
    return (0, n.jsx)(iT, { games: s, onClick: d, ...i });
}
var iy = i(870961);
function ik(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, n.jsx)(is, { widget: t, ...i });
        case b.x.CURRENT_GAMES:
            return (0, n.jsx)(il, { widget: t, ...i });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(iv, { widget: t, ...i });
        case b.x.PLAYED_GAMES:
            return (0, n.jsx)(iA, { widget: t, ...i });
        default:
            return null;
    }
}
function iw(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, ...o } = e,
        { setExpanded: d } = t2(),
        { shouldShowSuggestions: c, handleDismissSuggestions: u } = (function (e) {
            let [t, i] = l.useState(!1),
                n = e.type,
                s = (0, a.bG)([tV.default, tB.A], () => {
                    let e = tV.default.getId();
                    if (null == e) return !1;
                    let t = tB.A.getUserProfile(e);
                    return (t?.widgets ?? []).some((e) => e.type === n);
                }),
                r = (0, F.uA)(e);
            return {
                shouldShowSuggestions: !s && !t && !r,
                handleDismissSuggestions: l.useCallback(() => {
                    i(!0);
                }, []),
            };
        })(t),
        g = s && !r,
        m = g && c,
        x = (0, F.L)(t),
        f = (0, F.FM)(t, { showEditingControls: g }),
        h = (0, F.uA)(t),
        p = 1 === (0, F.cv)(t.type);
    return (0, n.jsx)(ik, {
        widget: t,
        user: i,
        allowEditing: s,
        disableInteraction: r,
        headerTitle: x,
        headerSubtitle: f,
        headerActionButtons:
            g && !p
                ? [
                      (0, n.jsx)(
                          tZ,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => d(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, n.jsx)(iN, { userId: i.id, widgetType: t.type, onDismiss: u, className: iy.r }),
        ...o,
    });
}
function iR(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(t1, { widgetType: t.type, children: (0, n.jsx)(iw, { widget: t, ...i }) });
}
var iO = i(271383),
    iL = i(94160),
    i_ = i(96173),
    iP = i(788259),
    iD = i(269507);
function iG(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: s } = (0, eJ.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        c = (0, a.bG)([tB.A], () => tB.A.getUserProfile(t)?.fetchError != null, [t]),
        [u, g] = e7(!c),
        m = (0, i_.A)();
    return (
        l.useEffect(() => {
            r.current || c || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [c, i]),
        (0, n.jsxs)("div", {
            className: iD.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: iD.FS,
                    children: [
                        (0, n.jsx)(iE.D, {
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
                    (0, n.jsx)("ul", {
                        className: iD.ZW,
                        "aria-label": V.intl.string(V.t["+EIBSA"]),
                        children: m.map((e) =>
                            (0, n.jsx)(
                                "li",
                                {
                                    ref: e.type === b.x.PERSONAL ? o : void 0,
                                    children: (0, n.jsx)(iP.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
                !c && (0, n.jsx)(e5, { targetElementRef: o, isVisible: u, markAsDismissed: g }),
            ],
        })
    );
}
var iM = i(366209);
function iU(e) {
    let { widget: t, ...i } = e;
    return t instanceof f.R
        ? (0, n.jsx)(L.A, { widget: t, ...i })
        : t instanceof I.Tu
          ? (0, n.jsx)(ez, { widget: t, ...i })
          : (0, p.fu)(t)
            ? (0, n.jsx)(iR, { widget: t, ...i })
            : t instanceof h.k
              ? (0, n.jsx)(tO, { widget: t, ...i })
              : null;
}
function iF() {
    return (0, n.jsxs)("div", {
        className: iM.mJ,
        children: [
            (0, n.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, n.jsx)(d.E, { variant: "text-xs/normal", color: "text-muted", children: V.intl.string(V.t["7blcz6"]) }),
        ],
    });
}
function iW(e) {
    let { user: t, guildId: i, channelId: s } = e,
        r = (0, R.A)(t.id),
        o = (0, O.A)(t.id),
        d = (function () {
            let [e, t] = (0, a.yK)([x.A], () => [x.A.ipCountryCode, x.A.ipCountryCodeRequest]),
                i = (0, g.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && i && (0, u.xe)();
                }, [e, t, i]),
                "GB" === e && i
            );
        })(),
        h = 0 === r.length && o,
        I = l.useMemo(() => r.filter(p.fu), [r]),
        j = l.useMemo(() => r.filter((e) => e instanceof f.R), [r]);
    function A() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                o &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(e4, { className: iM.cG }), d && (0, n.jsx)(iF, {}), (0, n.jsx)(tW, {})],
                    }),
                r.map((e, l) =>
                    (0, n.jsx)(
                        iU,
                        { widget: e, user: t, guildId: i, channelId: s, allowEditing: o, index: l },
                        e.getUniqueKey(),
                    ),
                ),
            ],
        });
    }
    return (!(function (e, t) {
        let [i, n, s, r] = (0, a.yK)([E.A], () => [
                E.A.suggestedFetchAttempted,
                E.A.suggestedFetchError,
                E.A.suggestedGameIds,
                E.A.suggestedFetchIsLoading,
            ]),
            { onLoad: o } = y();
        l.useEffect(() => {
            !i && e && v.A.fetchSuggestedGames();
        }, [i, e]);
        let d = i && !r;
        l.useEffect(() => {
            if (!d) return;
            let e = t.map((e) => e.games).flat();
            n || o(s.suggestedGamesIds ?? [], s.suggestedWishlistGamesIds ?? [], e);
        }, [d]);
    })(o, I),
    !(function (e, t) {
        let i = l.useMemo(() => t.map((e) => e.applicationId), [t]);
        (0, c.A)(i);
        let { data: n, refetch: s } = (0, m.P)(e),
            r = l.useRef(null !== n);
        l.useEffect(() => {
            r.current && ((r.current = !1), s());
        }, [s]);
    })(t.id, j),
    h)
        ? (0, n.jsx)(iG, { userId: t.id })
        : o
          ? (0, n.jsx)(e9.D, { children: A() })
          : A();
}
function iH(e) {
    let { user: t, ...i } = e,
        s = l.useRef(null);
    (0, w.i)({ containerRef: s });
    let a = (0, iO.k)(t.id);
    return (0, n.jsxs)(iL.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(iM.XG, { [iM.az]: a }),
        fade: !0,
        children: [(0, n.jsx)(tH.A, { scrollerRef: s }), (0, n.jsx)(iW, { user: t, ...i })],
    });
}
