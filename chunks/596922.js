i.d(t, { A: () => iN, u: () => iA });
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
    v = i(569926),
    A = i(958805),
    E = i(61881),
    S = i(435558),
    N = i.n(S),
    C = i(196765),
    w = i(540185),
    b = i(282435);
let T = (0, S.sampleSize)(b.sx, b.sx.length),
    k = (0, C.v)((e, t) => ({
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
            Object.values(w.x)))
                t().setNext(6, l);
        },
        setNext: (e, i) => {
            let n = t().getNext(e, i);
            t()._setGameIds(i, n);
            let l = t().peekNext(7, i);
            t()._setPeekedGameIds(i, l);
        },
        getNext: (e, i) => {
            let n = i === w.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                l = n.slice(0, e),
                s = n.slice(e);
            return t()._setStack(i, s), l;
        },
        peekNext: (e, i) => (i === w.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
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
            let n = (i === w.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            t()._setStack(i, n), t()._setPeekedGameIds(i, t().peekNext(7, i));
        },
        _setGameIds: (t, i) => {
            e((e) => ({ gameIds: { ...e.gameIds, [t]: i } }));
        },
        _setStack: (t, i) => {
            t === w.x.WANT_TO_PLAY_GAMES ? e({ wishlistStack: i }) : e({ stack: i });
        },
        _setPeekedGameIds: (t, i) => {
            e((e) => ({ peekedGameIds: { ...e.peekedGameIds, [t]: i } }));
        },
    }));
function y(e) {
    let { bump: t, bumpMultiple: i, gameIds: n } = k();
    !(function (e) {
        let { remove: t, peekedGameIds: i } = k(),
            n = l.useMemo(() => i[e] ?? [], [i, e]);
        (0, v.x)(n);
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
    return { applicationIds: s, games: d, onAddGame: r };
}
var R = i(600761),
    O = i(667049),
    L = i(579950),
    _ = i(605694),
    P = i(869484),
    D = i(403581),
    G = i(735321),
    M = i(623280),
    U = i(866665),
    F = i(939249),
    W = i(499373),
    V = i(661531),
    H = i(408278),
    B = i(241326),
    z = i(43990),
    K = i(807081),
    X = i(480084),
    Y = i(29814),
    q = i(551965),
    Z = i(703067);
let J = ["escape", "text", "strong", "em", "u", "url", "autolink"],
    Q = (0, q.A)([N().pick(Y.Ay.RULES, J), (0, X.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 })]),
    $ = K.aV(Q),
    ee = (0, q.A)([
        N().pick(Y.Ay.RULES, J),
        (0, X.A)({ enableBuildOverrides: !1 }),
        { link: { react: (e, t, i) => (0, n.jsx)("span", { className: Z.p, children: t(e.content, i) }, i.key) } },
    ]),
    et = K.aV(ee);
var ei = i(761431),
    en = i(995919);
function el(e) {
    let { className: t, variant: i, color: l, value: s, interactive: a = !0, disableMarkdown: o = !1 } = e;
    return (0, n.jsx)(d.E, {
        className: r()(en.Y, t),
        variant: i,
        color: l,
        lineClamp: 1,
        children: o ? s : (a ? $ : et)(s),
    });
}
function es(e) {
    let {
            className: t,
            value: i,
            placeholder: s,
            variant: r,
            color: a,
            onCommit: o,
            maxLength: d,
            growWidth: c,
            disableMarkdown: u,
        } = e,
        g = l.useCallback((e) => o(e.trim()), [o]),
        m = (0, ei.TX)({ value: i, onCommit: g }),
        x =
            "" === i.trim()
                ? null
                : (0, n.jsx)(el, { interactive: !1, className: t, variant: r, color: a, value: i, disableMarkdown: u });
    return (0, n.jsx)(ei.yV, {
        ...m,
        size: "compact",
        removeVerticalPadding: !0,
        growWidth: c,
        preview: x,
        placeholder: s,
        editButtonAriaLabel: s,
        label: s,
        maxLength: d,
    });
}
function er(e) {
    return e.canEdit
        ? (0, n.jsx)(es, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, n.jsx)(el, {
                className: e.className,
                variant: e.variant,
                color: e.color,
                value: e.value,
                disableMarkdown: e.disableMarkdown,
            });
}
var ea = i(326009),
    eo = i(372638),
    ed = i(231088),
    ec = i(458710);
function eu(e) {
    let { className: t, variant: i, color: l, value: s, maxRows: a, interactive: o = !0 } = e;
    return (0, n.jsx)(d.E, {
        className: r()(en.Y, ec.L, t),
        variant: i,
        color: l,
        lineClamp: a,
        children: (o ? $ : et)(s),
    });
}
function eg(e) {
    let { className: t, value: i, placeholder: s, variant: r, color: a, onCommit: o, maxLength: d, maxRows: c } = e,
        u = l.useCallback((e) => o(e.trim()), [o]),
        g = (0, ed.Ww)({ value: i, onCommit: u }),
        m =
            "" === i.trim()
                ? null
                : (0, n.jsx)(eu, { interactive: !1, className: t, variant: r, color: a, value: i, maxRows: c });
    return (0, n.jsx)(eo.f, {
        ...g,
        removeVerticalPadding: !0,
        preview: m,
        placeholder: s,
        editButtonAriaLabel: s,
        label: s,
        maxLength: d,
        rows: 1,
    });
}
function em(e) {
    return e.canEdit
        ? (0, n.jsx)(eg, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, n.jsx)(eu, {
                className: e.className,
                variant: e.variant,
                color: e.color,
                value: e.value,
                maxRows: e.maxRows,
            });
}
var ex = i(652215),
    ef = i(375708),
    eh = i(442461);
function ep() {
    return (0, n.jsx)(U.m, {
        text: ef.intl.string(ef.t.mZddSK),
        children: (0, n.jsxs)(F.D, {
            className: eh.YN,
            "aria-label": ef.intl.string(ef.t.mZddSK),
            onClick: function () {
                (0, G.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
            },
            children: [
                (0, n.jsx)("div", { className: eh.JD }),
                (0, n.jsx)("div", {
                    className: eh.xJ,
                    children: (0, n.jsx)(W.T, { size: "sm", color: V.A.colors.ICON_OVERLAY_DARK }),
                }),
            ],
        }),
    });
}
function eI(e) {
    let {
        userId: t,
        image: i,
        canEdit: l,
        uploadPreviewUri: s,
        onImageUploadStarted: r,
        onImageUploadCompleted: a,
        onImageRemove: o,
    } = e;
    return (0, n.jsxs)("div", {
        className: eh.El,
        children: [
            (0, n.jsx)(ea.A, {
                className: eh.Sl,
                canEdit: l,
                userId: t,
                image: i,
                previewUri: s,
                onImageUploadStarted: r,
                onImageUploadCompleted: a,
            }),
            l && (null != i || null != s)
                ? (0, n.jsx)("div", {
                      className: eh.ij,
                      children: (0, n.jsx)(H.K, {
                          icon: B.u,
                          size: "sm",
                          variant: "overlay-secondary",
                          "aria-label": ef.intl.string(ef.t.RyK5Ww),
                          onClick: o,
                      }),
                  })
                : null,
        ],
    });
}
function ej(e) {
    let { userId: t, section: i, sectionIndex: s, canEdit: a } = e,
        [o, d] = l.useState(null),
        c = l.useRef(!1),
        u = null != o;
    function g(e) {
        (0, G.AD)((t) => {
            let i = t.sections[s];
            if (i?.type !== P.K.COVER) return t;
            let n = [...t.sections];
            return (n[s] = e(i)), new I.Tu({ ...t, sections: n });
        });
    }
    function m(e) {
        g((t) => ({ ...t, title: e }));
    }
    function x(e) {
        g((t) => ({ ...t, subtitle: e }));
    }
    function f() {
        (c.current = !1), d(null), g((e) => ({ ...e, image: void 0 }));
    }
    function h(e) {
        (c.current = !0), d(e);
    }
    function p(e) {
        c.current && ((c.current = !1), d(null), null != e && g((t) => ({ ...t, image: e })));
    }
    function j() {
        (0, G.AD)((e) => new I.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let v = null != i.image || u,
        A = v || a;
    return (0, n.jsx)(z.N, {
        theme: v ? ex.NJ8.DARK : void 0,
        children: (e) =>
            (0, n.jsxs)("div", {
                className: r()(eh.kL, { [eh.Vp]: A }, e),
                children: [
                    a || null != i.image
                        ? (0, n.jsx)(eI, {
                              userId: t,
                              image: i.image,
                              canEdit: a,
                              uploadPreviewUri: o,
                              onImageUploadStarted: h,
                              onImageUploadCompleted: p,
                              onImageRemove: f,
                          })
                        : null,
                    a && !v
                        ? (0, n.jsx)("div", {
                              className: eh.kI,
                              children: (0, n.jsx)(U.m, {
                                  text: ef.intl.string(ef.t.g2jVww),
                                  children: (0, n.jsx)(H.K, {
                                      icon: B.u,
                                      size: "sm",
                                      variant: "overlay-secondary",
                                      "aria-label": ef.intl.string(ef.t.g2jVww),
                                      onClick: j,
                                  }),
                              }),
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        className: r()(eh.hQ, e, { [eh.Vp]: A }),
                        children: [
                            v ? (0, n.jsx)("div", { className: eh.cw }) : null,
                            (0, n.jsx)(er, {
                                canEdit: a,
                                growWidth: !0,
                                variant: "heading-xl/semibold",
                                color: "text-default",
                                value: i.title,
                                placeholder: ef.intl.string(ef.t.KqCDvK),
                                onCommit: m,
                                maxLength: 100,
                            }),
                            (0, n.jsx)(em, {
                                canEdit: a,
                                variant: "text-sm/medium",
                                color: "text-default",
                                value: i.subtitle,
                                placeholder: ef.intl.string(ef.t.k8zZFd),
                                onCommit: x,
                                maxLength: 150,
                                maxRows: 3,
                            }),
                        ],
                    }),
                ],
            }),
    });
}
i(321073);
var ev = i(750943),
    eA = i(335225);
function eE(e) {
    let { onClick: t } = e;
    return (0, n.jsxs)(F.D, {
        onClick: t,
        className: eA.cR,
        children: [
            (0, n.jsx)(ev.X, { size: "xs", color: V.A.colors.ICON_SUBTLE }),
            (0, n.jsx)(d.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: ef.intl.string(ef.t["9AY+/x"]),
            }),
        ],
    });
}
function eS(e) {
    let { index: t, userId: i, field: s, canEdit: r, onFieldChange: a, onFieldRemove: o } = e,
        [d, c] = l.useState(null),
        u = l.useRef(!1),
        g = r ? !0 !== s.hideImage : null != s.image;
    return (0, n.jsxs)("div", {
        className: eA.ez,
        children: [
            g
                ? (0, n.jsxs)("div", {
                      className: eA.tF,
                      children: [
                          (0, n.jsx)(ea.A, {
                              className: eA.k9,
                              canEdit: r,
                              userId: i,
                              image: s.image,
                              previewUri: d,
                              onImageUploadStarted: function (e) {
                                  (u.current = !0), c(e);
                              },
                              onImageUploadCompleted: function (e) {
                                  u.current &&
                                      ((u.current = !1), c(null), null != e && a(s.key, (t) => ({ ...t, image: e })));
                              },
                          }),
                          r
                              ? (0, n.jsx)("div", {
                                    className: eA.ij,
                                    children: (0, n.jsx)(U.m, {
                                        text: ef.intl.string(ef.t.RyK5Ww),
                                        children: (0, n.jsx)(H.K, {
                                            size: "sm",
                                            icon: B.u,
                                            "aria-label": ef.intl.string(ef.t.RyK5Ww),
                                            onClick: function () {
                                                (u.current = !1),
                                                    c(null),
                                                    a(s.key, (e) =>
                                                        null != e.image
                                                            ? { ...e, image: void 0 }
                                                            : { ...e, image: void 0, hideImage: !0 },
                                                    );
                                            },
                                        }),
                                    }),
                                })
                              : null,
                      ],
                  })
                : null,
            (0, n.jsxs)("div", {
                className: eA.oT,
                children: [
                    (0, n.jsx)(er, {
                        canEdit: r,
                        variant: "text-sm/medium",
                        color: "text-default",
                        value: s.title,
                        placeholder: ef.intl.formatToPlainString(ef.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            a(s.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 50,
                    }),
                    (0, n.jsx)(er, {
                        canEdit: r,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        value: s.description,
                        placeholder: ef.intl.formatToPlainString(ef.t.Hs14K3, { number: t + 1 }),
                        onCommit: function (e) {
                            a(s.key, (t) => ({ ...t, description: e }));
                        },
                        maxLength: 100,
                    }),
                ],
            }),
            r
                ? (0, n.jsxs)("div", {
                      className: eA.Ms,
                      children: [
                          g
                              ? null
                              : (0, n.jsx)(U.m, {
                                    text: ef.intl.string(ef.t.i3vRzP),
                                    children: (0, n.jsx)(H.K, {
                                        size: "sm",
                                        icon: ev.X,
                                        "aria-label": ef.intl.string(ef.t.i3vRzP),
                                        onClick: function () {
                                            a(s.key, (e) => ({ ...e, hideImage: void 0 }));
                                        },
                                    }),
                                }),
                          (0, n.jsx)(U.m, {
                              text: ef.intl.string(ef.t.g2jVww),
                              children: (0, n.jsx)(H.K, {
                                  size: "sm",
                                  icon: B.u,
                                  "aria-label": ef.intl.string(ef.t.g2jVww),
                                  onClick: function () {
                                      o(s.key);
                                  },
                              }),
                          }),
                      ],
                  })
                : null,
        ],
    });
}
function eN(e) {
    let { userId: t, section: i, sectionIndex: l, canEdit: s } = e;
    function r(e) {
        (0, G.AD)((t) => {
            let i = t.sections[l];
            if (i?.type !== P.K.FIELDS) return t;
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
        (0, n.jsx)(eS, { index: i, userId: t, field: e, canEdit: s, onFieldChange: a, onFieldRemove: o }, e.key),
    );
    return (s &&
        i.fields.length < 4 &&
        d.push(
            (0, n.jsx)(
                eE,
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
        : (0, n.jsx)("div", { className: eA.kL, children: d });
}
var eC = i(396395);
function ew(e) {
    let { widget: t, canEdit: i } = e;
    return (0, n.jsxs)("div", {
        className: eC.wx,
        children: [
            (0, n.jsx)(D.t, { size: "xs" }),
            (0, n.jsx)(er, {
                canEdit: i,
                variant: "text-sm/medium",
                color: "text-default",
                value: t.header,
                placeholder: ef.intl.string(ef.t.fjSaAm),
                onCommit: function (e) {
                    (0, G.AD)((t) => new I.Tu({ ...t, header: e }));
                },
                maxLength: 100,
                disableMarkdown: !0,
            }),
        ],
    });
}
function eb(e) {
    let { userId: t, section: i, sectionIndex: l, canEdit: s } = e;
    switch (i.type) {
        case P.K.COVER:
            return (0, n.jsx)(ej, { userId: t, section: i, sectionIndex: l, canEdit: s });
        case P.K.FIELDS:
            return (0, n.jsx)(eN, { userId: t, section: i, sectionIndex: l, canEdit: s });
    }
}
function eT(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, index: a, trailingContent: o } = e,
        d = s && !0 !== r,
        c = l.useMemo(() => t.sections.some((e) => e.type === P.K.COVER), [t.sections]);
    return (0, n.jsx)(M.A, {
        userId: i.id,
        widget: t,
        allowEditing: s,
        disableInteraction: r,
        index: a,
        trailingContent: o,
        className: eC.Nr,
        headerClassName: eC.JE,
        children: (0, n.jsxs)("div", {
            className: eC.kL,
            children: [
                (0, n.jsx)(ew, { widget: t, canEdit: d }),
                d && !c ? (0, n.jsx)(ep, {}) : null,
                t.sections.map((e, t) => (0, n.jsx)(eb, { userId: i.id, section: e, sectionIndex: t, canEdit: d }, t)),
            ],
        }),
    });
}
var ek = i(192308),
    ey = i(821609),
    eR = i(307301),
    eO = i(183555),
    eL = i(964828);
function e_(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, eO.NJ)(),
        a = l.useCallback(() => {
            s({ action: "PRESS_ADD_WIDGET" }),
                (0, ek.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([i.e("8888"), i.e("22420"), i.e("26623")]).then(
                            i.bind(i, 850370),
                        );
                        return (t) => (0, n.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [s]);
    return (0, n.jsxs)("div", {
        className: r()(eL.w, t),
        children: [
            (0, n.jsx)(d.E, {
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: ef.intl.string(ef.t.OYlggR),
            }),
            (0, n.jsx)(ey.$, {
                icon: eR.j,
                text: ef.intl.string(ef.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: a,
            }),
        ],
    });
}
var eP = i(192),
    eD = i(793574),
    eG = i(111994),
    eM = i(607470),
    eU = i(590251),
    eF = i(530059);
function eW(e) {
    let { item: t, size: i } = e,
        l = "exporting" === t.status,
        s = "uploading" === t.status ? Math.round(100 * t.progress) : 25;
    return (0, n.jsx)("div", {
        className: r()(eF.ring, eF[i], { [eF.indeterminate]: l }),
        role: "progressbar",
        "aria-label": ef.intl.string(ef.t.RFRuwZ),
        "aria-valuenow": l ? void 0 : s,
        children: (0, n.jsx)(eU.a, {
            percent: s,
            strokeSize: eU.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var eV = i(213879);
function eH(e) {
    let { item: t, ringSize: i, className: l } = e,
        s = "exporting" === t.status || "uploading" === t.status,
        a = r()(eV.Gt, { [eV.ob]: s });
    return (0, n.jsxs)("div", {
        className: r()(eV.$_, l),
        children: [
            "saved" === t.status
                ? null != t.videoURL
                    ? (0, n.jsx)(eM.A, { src: t.videoURL, preload: "metadata", muted: !0, className: a })
                    : null
                : (0, n.jsx)("img", { src: t.thumbnail, alt: "", className: a, loading: "lazy" }),
            s && (0, n.jsx)(eW, { item: t, size: i }),
        ],
    });
}
var eB = i(3026),
    ez = i(22231);
i(600253);
var eK = i(998809);
function eX(e) {
    let { value: t, isPlaceholder: i = !1 } = e;
    return (0, n.jsx)(d.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(eK.Qw, { [eK.qf]: i }),
        children: (0, n.jsx)(eB.A, { children: t }),
    });
}
function eY(e) {
    let { clipId: t, title: i } = e,
        { trackUserProfileEditAction: s } = (0, eO.NJ)(),
        a = l.useCallback(
            (e) => {
                let n = e.trim();
                n !== i.trim() &&
                    ((0, G.mI)(t, n),
                    s({ action: "CLIP_TITLE_EDITED", widgetEdited: w.x.CLIPS_GALLERY, numCharacters: n.length }));
            },
            [t, i, s],
        ),
        o = (0, ei.TX)({ value: i, onCommit: a }),
        d = ef.intl.string(ef.t["2gwc+H"]);
    return (0, n.jsx)(ei.yV, {
        ...o,
        size: "compact",
        removeVerticalPadding: !0,
        className: r()(eK.ZZ, { [eK.Dy]: o.isEditing }),
        preview: (0, n.jsxs)("span", {
            className: r()(eK.$, eK.TG),
            children: [
                (0, n.jsx)(ez.R, { size: "xxs", color: "currentColor", className: eK.wz }),
                "" === i.trim() ? (0, n.jsx)(eX, { value: d, isPlaceholder: !0 }) : (0, n.jsx)(eX, { value: i }),
            ],
        }),
        placeholder: d,
        editButtonAriaLabel: ef.intl.string(ef.t.PDnM11),
        label: ef.intl.string(ef.t.PDnM11),
        maxLength: 200,
    });
}
function eq(e) {
    let { clipId: t, title: i, allowEditing: l } = e,
        s = null != i && "" !== i.trim();
    return l || s
        ? l
            ? (0, n.jsx)(eY, { clipId: t, title: i ?? "" })
            : (0, n.jsx)("span", { className: eK.$, children: (0, n.jsx)(eX, { value: i ?? "" }) })
        : null;
}
var eZ = i(663341),
    eJ = i(765178),
    eQ = i(691540),
    e$ = i(857250),
    e0 = i(97483),
    e1 = i(693117),
    e8 = i(195880),
    e2 = i(696016);
let e7 = (0, C.v)(() => ({ localClips: new Map() }));
function e5(e, t) {
    e7.setState((i) => ({ localClips: new Map(i.localClips).set(e, t) }));
}
function e6(e) {
    e7.setState((t) => {
        let i = new Map(t.localClips);
        return i.delete(e), { localClips: i };
    });
}
async function e3(e, t) {
    if (!e7.getState().localClips.has(e.id)) {
        if (null == e.applicationId) return void (0, eQ.P0)((0, e$.o)(ef.intl.string(ef.t.xcLXWy), e0.Ck.FAILURE));
        e5(e.id, { status: "exporting", clip: e });
        try {
            let i = await (0, e1.VO)(e, { analyticsLocations: t });
            e5(e.id, { status: "uploading", clip: e, progress: 0 });
            let n = new File([i], "clip.mp4", { type: "video/mp4" }),
                l = await A.A.uploadWidgetClip(n, {
                    onProgress: (t) => {
                        var i;
                        return (
                            (i = e.id),
                            void e7.setState((e) => {
                                let n = e.localClips.get(i);
                                return n?.status !== "uploading"
                                    ? e
                                    : { localClips: new Map(e.localClips).set(i, { ...n, progress: t }) };
                            })
                        );
                    },
                });
            e5(e.id, { status: "uploaded", clip: e, uploadFilename: l }),
                (0, G.XW)({
                    status: "pending",
                    id: (0, e8.m)(),
                    sourceClipId: e.id,
                    gameId: e.applicationId,
                    title: e.name,
                    uploadFilename: l,
                });
        } catch (t) {
            e6(e.id),
                e2.nx.error("Failed to upload a clip for the clips gallery widget", t),
                (0, eQ.P0)((0, e$.o)(ef.intl.string(ef.t.iufib1), e0.Ck.FAILURE));
        }
    }
}
function e9(e) {
    let { widgetClipId: t, sourceClipId: i, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eO.NJ)(),
        r = ef.intl.string(ef.t.ib6Mgx);
    return (0, n.jsx)("div", {
        className: l,
        children: (0, n.jsx)(U.m, {
            text: r,
            ariaHidden: !0,
            children: (0, n.jsx)(H.K, {
                "aria-label": r,
                icon: B.u,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, G.mC)(t),
                        null != i && e6(i),
                        eJ.O.announce(ef.intl.string(ef.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: w.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var e4 = i(547193);
function te(e) {
    let { items: t, selectedKey: i, onSelect: l, onAddClip: s, allowRemoving: a = !1 } = e,
        o = Math.max(0, 4 - t.length);
    return (0, n.jsxs)("ul", {
        className: e4.Xm,
        children: [
            t.map((e, t) =>
                (0, n.jsxs)(
                    "li",
                    {
                        className: e4.NI,
                        children: [
                            (0, n.jsx)(F.D, {
                                className: r()(e4.Vs, { [e4.wH]: e.key === i }),
                                "aria-pressed": e.key === i,
                                "aria-label": ef.intl.formatToPlainString(ef.t.zrtAwA, { clipNumber: t + 1 }),
                                onClick: () => l(e.key),
                                children: (0, n.jsx)(eH, { item: e, ringSize: "sm", className: e4.nC }),
                            }),
                            a &&
                                ("pending" === e.status || "saved" === e.status) &&
                                (0, n.jsx)(e9, {
                                    widgetClipId: e.key,
                                    sourceClipId: "pending" === e.status ? e.sourceClipId : void 0,
                                    className: e4.nM,
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
                            className: e4.NI,
                            children: (0, n.jsx)(F.D, {
                                className: e4.Yn,
                                "aria-label": ef.intl.string(ef.t.rI0i0a),
                                onClick: s,
                                children: (0, n.jsx)(eZ.p, { size: "sm", color: "currentColor" }),
                            }),
                        },
                        `empty-${t}`,
                    ),
                ),
        ],
    });
}
var tt = i(298149);
function ti(e) {
    let { children: t } = e;
    return (0, n.jsxs)("div", {
        className: tt.Lw,
        children: [(0, n.jsx)("div", { className: tt.tB }), (0, n.jsx)("div", { className: tt.Qs, children: t })],
    });
}
var tn = i(465927);
function tl(e) {
    let { onClick: t } = e,
        i = ef.intl.string(ef.t.rI0i0a);
    return (0, n.jsx)(U.m, {
        text: i,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, n.jsx)(H.K, { variant: "secondary", size: "sm", icon: W.T, "aria-label": i, onClick: t }),
    });
}
function ts() {
    return (0, n.jsx)("div", {
        className: tn.p$,
        children: (0, n.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: ef.intl.format(ef.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tr(e) {
    var t;
    let s,
        { widget: r, user: a, allowEditing: o, disableInteraction: d, ...c } = e,
        [u, g] = l.useState(null),
        m =
            ((t = a.id),
            (s = e7((e) => e.localClips)),
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
            (0, ek.openModalLazy)(
                async () => {
                    let { default: e } = await Promise.all([
                        i.e("69884"),
                        i.e("18757"),
                        i.e("47899"),
                        i.e("94373"),
                        i.e("57860"),
                        i.e("21035"),
                        i.e("21398"),
                        i.e("81277"),
                        i.e("16832"),
                        i.e("68877"),
                        i.e("48380"),
                        i.e("41882"),
                        i.e("57066"),
                        i.e("48442"),
                        i.e("37944"),
                        i.e("27392"),
                        i.e("93218"),
                        i.e("14146"),
                        i.e("75842"),
                        i.e("83952"),
                        i.e("58337"),
                        i.e("20287"),
                        i.e("24761"),
                        i.e("18024"),
                        i.e("3930"),
                        i.e("3663"),
                        i.e("3131"),
                        i.e("47177"),
                        i.e("69201"),
                        i.e("8563"),
                        i.e("69985"),
                        i.e("27272"),
                        i.e("21573"),
                        i.e("96268"),
                        i.e("80007"),
                        i.e("66147"),
                        i.e("38090"),
                        i.e("22266"),
                        i.e("1962"),
                        i.e("1922"),
                        i.e("83518"),
                        i.e("37715"),
                        i.e("74049"),
                        i.e("80559"),
                        i.e("95008"),
                        i.e("52566"),
                        i.e("89492"),
                        i.e("89160"),
                        i.e("31782"),
                        i.e("20342"),
                        i.e("71453"),
                        i.e("94676"),
                    ]).then(i.bind(i, 671884));
                    return (t) =>
                        (0, n.jsx)(e, {
                            ...t,
                            initialMainLink: eG.oH.ALL_CLIPS,
                            onClipClick: (e) => {
                                ((e) => e3(e, [eD.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                            },
                        });
                },
                { modalKey: e2.nm },
            );
        }, []);
    return (0, n.jsx)(M.A, {
        userId: a.id,
        widget: r,
        allowEditing: o,
        disableInteraction: d,
        className: tn.kL,
        headerTitle: (0, G.L)(r),
        headerActionButtons: x && f ? [(0, n.jsx)(tl, { onClick: I }, "clips-gallery-add-clip")] : void 0,
        ...c,
        children:
            null != p
                ? (0, n.jsxs)("div", {
                      className: tn.nV,
                      children: [
                          (0, n.jsxs)("div", {
                              className: tn.aM,
                              children: [
                                  (0, n.jsx)(eH, { item: p, ringSize: "lg", className: tn.VH }),
                                  (0, n.jsx)(ti, {
                                      children:
                                          ("saved" === p.status || "pending" === p.status) &&
                                          (0, n.jsx)(eq, { clipId: p.key, title: p.title, allowEditing: x }),
                                  }),
                              ],
                          }),
                          (0, n.jsx)(te, {
                              items: m,
                              selectedKey: p.key,
                              onSelect: g,
                              onAddClip: x && !h ? I : void 0,
                              allowRemoving: x,
                          }),
                      ],
                  })
                : (0, n.jsx)(ts, {}),
    });
}
var ta = i(554146),
    to = i(704824),
    td = i(382483),
    tc = i(385113),
    tu = i(334074),
    tg = i(287809),
    tm = i(657718),
    tx = i(789645),
    tf = i(478016),
    th = i(384377),
    tp = i(518477),
    tI = i(49999);
function tj(e) {
    let { user: t, application: i, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eO.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: i.id }), [i.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, G.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, th.XA)(tp.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, n.jsx)(_.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, n.jsx)(_.A.Cta, {
            showSuggestedForYou: !0,
            heading: ef.intl.format(ef.t.OIzLCy, { applicationName: i.name }),
            content: ef.intl.format(ef.t.BQySru, { applicationName: i.name }),
            buttons: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(U.m, {
                        text: ef.intl.string(ef.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, n.jsx)(tm.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tx.P,
                            "aria-label": ef.intl.string(ef.t.WAI6xu),
                            onClick: () => {
                                s(tI.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(U.m, {
                        text: ef.intl.string(ef.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)(tm.S, {
                            variant: "primary",
                            size: "sm",
                            icon: tf.U,
                            "aria-label": ef.intl.formatToPlainString(ef.t.KfGahB, { applicationName: i.name }),
                            onClick: () => {
                                s(tI.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function tv() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: i,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([tc.A], () => tc.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, td.Wq)();
        }, []);
        let t = (0, a.bG)([tg.default], () => tg.default.getCurrentUser()),
            i = (0, c.A)(e),
            { tokens: n, fetched: s } = (0, to.j)(e),
            r = (0, O.A)(t?.id),
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
            { eligibleToShow: u, markAsDismissed: g } = (0, tu.hj)({
                applications: d,
                dismissibleContent: ta.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: tu.SH,
            }),
            m = l.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = i[0];
    return null == r ? null : (0, n.jsx)(tj, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var tA = i(128988),
    tE = i(280450),
    tS = i(321191),
    tN = i(896170),
    tC = i(922016),
    tw = i(305866),
    tb = i(732771),
    tT = i(321108),
    tk = i(383329),
    ty = i(250573);
function tR(e) {
    let { widgetType: t, widget: i, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(i.games.map((e) => e.gameId)), [i.games]),
        { trackUserProfileEditAction: d } = (0, eO.NJ)(),
        [c, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, tk.R)({ query: c }),
        f = c.trim().length > 0,
        { applicationIds: h, onAddGame: p } = y(t),
        I = (0, tT.A)(h),
        j = l.useCallback(
            (e) => {
                (0, G.ew)({ widgetType: t, game: { gameId: e } }),
                    eJ.O.announce(ef.intl.string(ef.t.q0U3DE)),
                    d({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    h.includes(e) && p(e),
                    s?.();
            },
            [t, d, s, h, p],
        ),
        v = l.useMemo(() => {
            let e = new Map(
                m.map((e) => [
                    String(e.value),
                    { id: String(e.value), value: String(e.value), label: e.label, disabled: o.has(e.value) },
                ]),
            );
            if (f) return [...e.values()];
            let t = I.filter((e) => !o.has(e.id) && (0, G.XX)(e)).map((e) => ({
                    id: String(e.id),
                    value: String(e.id),
                    label: e.name,
                    disabled: !1,
                })),
                i = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !i.has(e.id))];
        }, [m, o, I, f]),
        A = l.useCallback((e) => e, []),
        E = l.useMemo(() => ({ ...x, threshold: tN.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        S = l.useCallback((e) => (f || "" === e.trim() ? v.length : (0, tN.Ht)(v, e, E).length), [f, v, E]),
        N = l.useCallback(
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
    return (0, n.jsx)(tC.Y, {
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
            return (0, n.jsx)(tw.l, {
                className: ty.C,
                "aria-label": ef.intl.string(ef.t.uqw8wK),
                children: (0, n.jsxs)(tb.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: v,
                    matchSorterOptions: E,
                    customMatchSorter: f ? A : void 0,
                    children: [
                        (0, n.jsx)(tb.a3, {
                            label: ef.intl.string(ef.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: ef.intl.string(ef.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: N,
                        }),
                        (0, n.jsx)(tb.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function tO(e) {
    let { disabled: t, ...i } = e,
        s = l.useRef(null);
    return (0, n.jsx)(tR, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(U.m, {
                text: ef.intl.string(ef.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(H.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: W.T,
                    "aria-label": ef.intl.string(ef.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function tL(e) {
    let t = l.useRef(null);
    return (0, n.jsx)(tR, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(F.D, {
                innerRef: t,
                className: ty.c,
                "aria-label": ef.intl.string(ef.t.PYyENc),
                ...e,
                children: (0, n.jsx)(eZ.p, { color: "currentColor" }),
            }),
    });
}
let t_ = l.createContext(null);
function tP(e) {
    let { widgetType: t, children: i } = e,
        s = (0, a.bG)([E.A], () => {
            let e = E.A.getPendingWidgets();
            if (null == e) return !1;
            let i = e.find((e) => e.type === t);
            if (null == i) return !1;
            let n = (0, G.cv)(t);
            return i.games.length > n;
        }),
        [r, o] = l.useState(s);
    return (0, n.jsx)(t_.Provider, { value: { expanded: r, setExpanded: o }, children: i });
}
function tD() {
    let e = l.useContext(t_);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var tG = i(308685);
function tM(e) {
    let { widget: t } = e,
        i = (0, G.cv)(t.type),
        l = 1 === i,
        s = l ? ef.intl.string(ef.t["3FdPBT"]) : ef.intl.format(ef.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: l ? tG.O : tG.k,
        children: [
            l && (0, n.jsx)(tL, { widget: t, widgetType: t.type }),
            (0, n.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var tU = i(823016),
    tF = i(683071),
    tW = i(116363);
function tV(e) {
    let { widgetType: t, gameCount: i } = e,
        l = (0, G.cv)(t);
    return i <= l
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: tW.l,
              children: (0, n.jsx)(tF.w, {
                  type: "warning",
                  children: ef.intl.formatToPlainString(ef.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var tH = i(17110);
function tB(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(F.D, {
        onClick: t,
        className: tH.x,
        "aria-expanded": i,
        children: (0, n.jsx)(d.E, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? ef.intl.string(ef.t["6MwJo/"]) : ef.intl.string(ef.t.lBeKY2),
        }),
    });
}
var tz = i(249264),
    tK = i(462037);
function tX(e) {
    let { games: t, user: i, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tU.r)();
    return (0, n.jsx)("ul", {
        className: tK.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(tz.A, {
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
function tY(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, eP.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tD(),
        c = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(tX, { ...e, games: c }),
                u && (0, n.jsx)(tB, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(tV, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tU.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function tq(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(M.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(tY, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tM, { widget: i }),
    });
}
function tZ(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e,
        d = i.games[0];
    return (0, n.jsx)(M.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            null != d
                ? (0, n.jsx)(tz.A, {
                      user: t,
                      widgetType: i.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tM, { widget: i }),
    });
}
var tJ = i(768754);
function tQ(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: tJ.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.gameId)),
    });
}
var t$ = i(686246),
    t0 = i(201438),
    t1 = i(451395),
    t8 = i(788593),
    t2 = i(858808),
    t7 = i(350956),
    t5 = i(466215);
function t6(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, tU.r)(),
        c = l.useRef(null);
    return (0, n.jsx)(t1.mG, {
        index: t,
        itemId: s.gameId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => c.current?.offsetWidth },
        "aria-label": ef.intl.formatToPlainString(ef.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, G.Un)(i, e, t),
        onEnd: () => d(s.gameId),
        className: t5.kL,
        dropBeforeClassName: t5.A,
        dropAfterClassName: t5.Ze,
        draggingClassName: t5.Id,
        children: (0, n.jsx)("div", { ref: c, className: t5.An, children: o }),
    });
}
function t3(e) {
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
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, t0.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tU.r)(),
        x = s && !r,
        { isDragging: f } = (0, t$.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(t8.A, {
                    imageSrc: c,
                    gameName: u,
                    gameId: t.gameId,
                    userId: i,
                    disableInteraction: r,
                    className: null == c || r ? void 0 : t7.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, n.jsx)(t1.jV, { buttonRef: m(t.gameId), className: t5.BU }),
                x && (0, n.jsx)(t2.A, { game: t, widgetType: l, className: t5.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, n.jsx)("div", { className: t7.mD })
        : x
          ? (0, n.jsx)(t6, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, n.jsx)("div", { className: t5.kL, children: h() });
}
function t9(e) {
    let { games: t, userId: i, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tU.r)();
    return (0, n.jsx)(tQ, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(t3, {
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
function t4(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, eP.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tD(),
        c = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(t9, { ...e, games: c }),
                u && (0, n.jsx)(tB, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(tV, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tU.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function ie(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(M.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(t4, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tM, { widget: i }),
    });
}
function it(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(M.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(t4, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tM, { widget: i }),
    });
}
var ii = i(297264),
    il = i(915089),
    is = i(30061);
function ir(e) {
    let { gameId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, t0.A)(t),
        d = (0, a.bG)([E.A], () => E.A.suggestedFetchIsLoading),
        c = ef.intl.formatToPlainString(ef.t["3mb1s5"], { game: r });
    return o || d
        ? (0, n.jsx)("div", { className: t7.mD })
        : (0, n.jsx)(U.m, {
              text: c,
              ariaHidden: !0,
              children: (0, n.jsxs)(F.D, {
                  className: is.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, n.jsx)(t8.A, {
                          className: is.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(eZ.p, { size: "md", className: is.Xv, color: V.A.colors.WHITE }),
                  ],
              }),
          });
}
function ia(e) {
    let { userId: t, games: i, onDismiss: l, onClick: s, className: a } = e,
        o = (0, il.GV)();
    return (0, n.jsxs)("aside", {
        className: r()(is.kL, a),
        "aria-labelledby": o,
        children: [
            (0, n.jsxs)("div", {
                className: is.wx,
                children: [
                    (0, n.jsx)(F.D, {
                        className: is.r,
                        "aria-label": ef.intl.string(ef.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(tx.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(ii.D, {
                        id: o,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: ef.intl.string(ef.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: is.Vg,
                children: i.map((e) => {
                    let { gameId: i } = e;
                    return (0, n.jsx)(
                        "li",
                        { children: (0, n.jsx)(ir, { onClick: () => s(i), userId: t, gameId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}
function io(e) {
    let { widgetType: t, ...i } = e,
        { games: s, onAddGame: r } = y(t),
        { setExpanded: a } = tD(),
        { trackUserProfileEditAction: o } = (0, eO.NJ)(),
        d = l.useCallback(
            (e) => {
                r(e),
                    a(!0),
                    (0, G.ew)({ widgetType: t, game: { gameId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [r, t, o, a],
        );
    return (0, n.jsx)(ia, { games: s, onClick: d, ...i });
}
var id = i(344287);
function ic(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case w.x.FAVORITE_GAMES:
            return (0, n.jsx)(tZ, { widget: t, ...i });
        case w.x.CURRENT_GAMES:
            return (0, n.jsx)(tq, { widget: t, ...i });
        case w.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(it, { widget: t, ...i });
        case w.x.PLAYED_GAMES:
            return (0, n.jsx)(ie, { widget: t, ...i });
        default:
            return null;
    }
}
function iu(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, ...o } = e,
        { setExpanded: d } = tD(),
        { shouldShowSuggestions: c, handleDismissSuggestions: u } = (function (e) {
            let [t, i] = l.useState(!1),
                n = e.type,
                s = (0, a.bG)([tE.default, tS.A], () => {
                    let e = tE.default.getId();
                    if (null == e) return !1;
                    let t = tS.A.getUserProfile(e);
                    return (t?.widgets ?? []).some((e) => e.type === n);
                }),
                r = (0, G.uA)(e);
            return {
                shouldShowSuggestions: !s && !t && !r,
                handleDismissSuggestions: l.useCallback(() => {
                    i(!0);
                }, []),
            };
        })(t),
        g = s && !r,
        m = g && c,
        x = (0, G.L)(t),
        f = (0, G.FM)(t, { showEditingControls: g }),
        h = (0, G.uA)(t),
        p = 1 === (0, G.cv)(t.type);
    return (0, n.jsx)(ic, {
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
                          tO,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => d(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, n.jsx)(io, { userId: i.id, widgetType: t.type, onDismiss: u, className: id.r }),
        ...o,
    });
}
function ig(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(tP, { widgetType: t.type, children: (0, n.jsx)(iu, { widget: t, ...i }) });
}
var im = i(576260),
    ix = i(94160),
    ih = i(616714),
    ip = i(788259),
    iI = i(902394);
function ij(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: s } = (0, eO.NJ)(),
        r = l.useRef(!1),
        o = (0, a.bG)([tS.A], () => tS.A.getUserProfile(t)?.fetchError != null, [t]),
        c = (0, ih.A)();
    return (
        l.useEffect(() => {
            r.current || o || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [o, i]),
        (0, n.jsxs)("div", {
            className: iI.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: iI.FS,
                    children: [
                        (0, n.jsx)(ii.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: ef.intl.string(ef.t["oqalC+"]),
                        }),
                        (0, n.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: o ? ef.intl.string(ef.t["+W59o5"]) : ef.intl.string(ef.t.O9SQ1c),
                        }),
                    ],
                }),
                !o &&
                    (0, n.jsx)("ul", {
                        className: iI.ZW,
                        "aria-label": ef.intl.string(ef.t["+EIBSA"]),
                        children: c.map((e) =>
                            (0, n.jsx)(
                                "li",
                                {
                                    children: (0, n.jsx)(ip.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
            ],
        })
    );
}
var iv = i(456620);
function iA(e) {
    let { widget: t, ...i } = e;
    return t instanceof f.R
        ? (0, n.jsx)(_.A, { widget: t, ...i })
        : t instanceof I.Tu
          ? (0, n.jsx)(eT, { widget: t, ...i })
          : (0, p.fu)(t)
            ? (0, n.jsx)(ig, { widget: t, ...i })
            : t instanceof h.k
              ? (0, n.jsx)(tr, { widget: t, ...i })
              : null;
}
function iE() {
    return (0, n.jsxs)("div", {
        className: iv.mJ,
        children: [
            (0, n.jsx)(o.m, { size: "xs" }),
            (0, n.jsx)(d.E, {
                "aria-label": ef.intl.string(ef.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: ef.intl.string(ef.t["7blcz6"]),
            }),
        ],
    });
}
function iS(e) {
    let { user: t, guildId: i, channelId: s } = e,
        r = (0, O.A)(t.id),
        o = (0, L.A)(t.id),
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
    function v() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                o &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(e_, { className: iv.cG }), d && (0, n.jsx)(iE, {}), (0, n.jsx)(tv, {})],
                    }),
                r.map((e, l) =>
                    (0, n.jsx)(
                        iA,
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
            { onLoad: o } = k();
        l.useEffect(() => {
            !i && e && A.A.fetchSuggestedGames();
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
        ? (0, n.jsx)(ij, { userId: t.id })
        : o
          ? (0, n.jsx)(eP.D, { children: v() })
          : v();
}
function iN(e) {
    let { user: t, ...i } = e,
        s = l.useRef(null);
    (0, R.i)({ containerRef: s });
    let a = (0, im.k)(t.id);
    return (0, n.jsxs)(ix.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(iv.XG, { [iv.az]: a }),
        fade: !0,
        children: [(0, n.jsx)(tA.A, { scrollerRef: s }), (0, n.jsx)(iS, { user: t, ...i })],
    });
}
