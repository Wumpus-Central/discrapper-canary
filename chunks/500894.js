i.d(t, { A: () => ig, u: () => id });
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
    b = i(196765),
    w = i(540185),
    C = i(282435);
let T = (0, S.sampleSize)(C.sx, C.sx.length),
    k = (0, b.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (i, n, l) => {
            let s = new Set(l.map((e) => e.applicationId));
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
    let d = l.useMemo(() => s.map((e) => ({ applicationId: e })), [s]);
    return { applicationIds: s, games: d, onAddGame: r };
}
var R = i(600761),
    O = i(667049),
    _ = i(579950),
    L = i(605694),
    D = i(869484),
    P = i(403581),
    G = i(735321),
    M = i(623280),
    U = i(866665),
    F = i(939249),
    W = i(499373),
    V = i(661531),
    H = i(408278),
    B = i(241326),
    z = i(43990),
    X = i(807081),
    K = i(480084),
    Y = i(29814),
    q = i(551965),
    Z = i(703067);
let J = ["escape", "text", "strong", "em", "u", "url", "autolink"],
    Q = (0, q.A)([N().pick(Y.Ay.RULES, J), (0, K.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 })]),
    $ = X.aV(Q),
    ee = (0, q.A)([
        N().pick(Y.Ay.RULES, J),
        (0, K.A)({ enableBuildOverrides: !1 }),
        { link: { react: (e, t, i) => (0, n.jsx)("span", { className: Z.p, children: t(e.content, i) }, i.key) } },
    ]),
    et = X.aV(ee);
var ei = i(761431),
    en = i(995919);
function el(e) {
    let { className: t, variant: i, color: l, value: s, interactive: a = !0 } = e;
    return (0, n.jsx)(d.E, { className: r()(en.Y, t), variant: i, color: l, lineClamp: 1, children: (a ? $ : et)(s) });
}
function es(e) {
    let { className: t, value: i, placeholder: s, variant: r, color: a, onCommit: o, maxLength: d, growWidth: c } = e,
        u = l.useCallback((e) => o(e.trim()), [o]),
        g = (0, ei.TX)({ value: i, onCommit: u }),
        m = "" === i.trim() ? null : (0, n.jsx)(el, { interactive: !1, className: t, variant: r, color: a, value: i });
    return (0, n.jsx)(ei.yV, {
        ...g,
        size: "compact",
        removeVerticalPadding: !0,
        growWidth: c,
        preview: m,
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
          : (0, n.jsx)(el, { className: e.className, variant: e.variant, color: e.color, value: e.value });
}
var ea = i(103310),
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
            if (i?.type !== D.K.COVER) return t;
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
            if (i?.type !== D.K.FIELDS) return t;
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
var eb = i(396395);
function ew(e) {
    let { widget: t, canEdit: i } = e;
    return (0, n.jsxs)("div", {
        className: eb.wx,
        children: [
            (0, n.jsx)(P.t, { size: "xs" }),
            (0, n.jsx)(er, {
                canEdit: i,
                variant: "text-sm/medium",
                color: "text-default",
                value: t.header,
                placeholder: ef.intl.string(ef.t.AVkYMx),
                onCommit: function (e) {
                    (0, G.AD)((t) => new I.Tu({ ...t, header: e }));
                },
                maxLength: 100,
            }),
        ],
    });
}
function eC(e) {
    let { userId: t, section: i, sectionIndex: l, canEdit: s } = e;
    switch (i.type) {
        case D.K.COVER:
            return (0, n.jsx)(ej, { userId: t, section: i, sectionIndex: l, canEdit: s });
        case D.K.FIELDS:
            return (0, n.jsx)(eN, { userId: t, section: i, sectionIndex: l, canEdit: s });
    }
}
function eT(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, index: a, trailingContent: o } = e,
        d = s && !0 !== r,
        c = l.useMemo(() => t.sections.some((e) => e.type === D.K.COVER), [t.sections]);
    return (0, n.jsx)(M.A, {
        userId: i.id,
        widget: t,
        allowEditing: s,
        disableInteraction: r,
        index: a,
        trailingContent: o,
        headerClassName: eb.JE,
        children: (0, n.jsxs)("div", {
            className: eb.kL,
            children: [
                (0, n.jsx)(ew, { widget: t, canEdit: d }),
                d && !c ? (0, n.jsx)(ep, {}) : null,
                t.sections.map((e, t) => (0, n.jsx)(eC, { userId: i.id, section: e, sectionIndex: t, canEdit: d }, t)),
            ],
        }),
    });
}
var ek = i(192308),
    ey = i(821609),
    eR = i(307301),
    eO = i(183555),
    e_ = i(964828);
function eL(e) {
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
        className: r()(e_.w, t),
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
var eD = i(192);
i(157992);
var eP = i(793574),
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
var eB = i(663341),
    ez = i(547193);
function eX(e) {
    let { items: t, selectedKey: i, onSelect: l, onAddClip: s } = e,
        a = Math.max(0, 4 - t.length);
    return (0, n.jsxs)("ul", {
        className: ez.Xm,
        children: [
            t.map((e, t) =>
                (0, n.jsx)(
                    "li",
                    {
                        className: ez.NI,
                        children: (0, n.jsx)(F.D, {
                            className: r()(ez.Vs, { [ez.wH]: e.key === i }),
                            "aria-pressed": e.key === i,
                            "aria-label": ef.intl.formatToPlainString(ef.t.zrtAwA, { clipNumber: t + 1 }),
                            onClick: () => l(e.key),
                            children: (0, n.jsx)(eH, { item: e, ringSize: "sm", className: ez.nC }),
                        }),
                    },
                    e.key,
                ),
            ),
            null != s &&
                Array.from({ length: a }, (e, t) =>
                    (0, n.jsx)(
                        "li",
                        {
                            className: ez.NI,
                            children: (0, n.jsx)(F.D, {
                                className: ez.Yn,
                                "aria-label": ef.intl.string(ef.t.rI0i0a),
                                onClick: s,
                                children: (0, n.jsx)(eB.p, { size: "sm", color: "currentColor" }),
                            }),
                        },
                        `empty-${t}`,
                    ),
                ),
        ],
    });
}
var eK = i(691540),
    eY = i(857250),
    eq = i(97483),
    eZ = i(430795),
    eJ = i(696016);
let eQ = (0, b.v)(() => ({ localClips: new Map() }));
function e$(e, t) {
    eQ.setState((i) => ({ localClips: new Map(i.localClips).set(e, t) }));
}
async function e0(e, t) {
    if (!eQ.getState().localClips.has(e.id)) {
        if (null == e.applicationId) return void (0, eK.P0)((0, eY.o)(ef.intl.string(ef.t.xcLXWy), eq.Ck.FAILURE));
        e$(e.id, { status: "exporting", clip: e });
        try {
            let i = await (0, eZ.VO)(e, { analyticsLocations: t });
            e$(e.id, { status: "uploading", clip: e, progress: 0 });
            let n = new File([i], "clip.mp4", { type: "video/mp4" }),
                l = await A.A.uploadWidgetClip(n, {
                    onProgress: (t) => {
                        var i;
                        return (
                            (i = e.id),
                            void eQ.setState((e) => {
                                let n = e.localClips.get(i);
                                return n?.status !== "uploading"
                                    ? e
                                    : { localClips: new Map(e.localClips).set(i, { ...n, progress: t }) };
                            })
                        );
                    },
                });
            e$(e.id, { status: "uploaded", clip: e, uploadFilename: l }),
                (0, G.XW)({ status: "pending", gameId: e.applicationId, uploadFilename: l });
        } catch (t) {
            var i;
            (i = e.id),
                eQ.setState((e) => {
                    let t = new Map(e.localClips);
                    return t.delete(i), { localClips: t };
                }),
                eJ.nx.error("Failed to upload a clip for the clips gallery widget", t),
                (0, eK.P0)((0, eY.o)(ef.intl.string(ef.t.iufib1), eq.Ck.FAILURE));
        }
    }
}
var e1 = i(465927);
function e8(e) {
    let { onClick: t } = e,
        i = ef.intl.string(ef.t.rI0i0a);
    return (0, n.jsx)(U.m, {
        text: i,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, n.jsx)(H.K, { variant: "secondary", size: "sm", icon: W.T, "aria-label": i, onClick: t }),
    });
}
function e2() {
    return (0, n.jsx)("div", {
        className: e1.p$,
        children: (0, n.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: ef.intl.format(ef.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function e7(e) {
    var t;
    let s,
        { widget: r, user: a, allowEditing: o, disableInteraction: d, ...c } = e,
        [u, g] = l.useState(null),
        m =
            ((t = a.id),
            (s = eQ((e) => e.localClips)),
            l.useMemo(() => {
                let e = new Map();
                for (let t of s.values()) "uploaded" === t.status && e.set(t.uploadFilename, t);
                return [
                    ...r.clips.flatMap((i) => {
                        if ("saved" === i.status)
                            return [
                                {
                                    status: "saved",
                                    key: i.id,
                                    videoURL: (function (e, t) {
                                        let i = window.GLOBAL_ENV.CDN_HOST;
                                        if (null != i) return `https://${i}/profile-widget-clips/${e}/${t}`;
                                    })(t, i.fileId),
                                },
                            ];
                        let n = e.get(i.uploadFilename);
                        return null != n ? [{ status: "pending", key: n.clip.id, thumbnail: n.clip.thumbnail }] : [];
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
                ];
            }, [r.clips, s, t])),
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
                        i.e("32736"),
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
                                ((e) => e0(e, [eP.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                            },
                        });
                },
                { modalKey: eJ.nm },
            );
        }, []);
    return (0, n.jsx)(M.A, {
        userId: a.id,
        widget: r,
        allowEditing: o,
        disableInteraction: d,
        className: e1.kL,
        headerTitle: (0, G.L)(r),
        headerActionButtons: x && f ? [(0, n.jsx)(e8, { onClick: I }, "clips-gallery-add-clip")] : void 0,
        ...c,
        children:
            null != p
                ? (0, n.jsxs)("div", {
                      className: e1.nV,
                      children: [
                          (0, n.jsx)(eH, { item: p, ringSize: "lg", className: e1.VH }),
                          (0, n.jsx)(eX, {
                              items: m,
                              selectedKey: p.key,
                              onSelect: g,
                              onAddClip: x && !h ? I : void 0,
                          }),
                      ],
                  })
                : (0, n.jsx)(e2, {}),
    });
}
var e5 = i(554146),
    e6 = i(704824),
    e3 = i(382483),
    e9 = i(385113),
    e4 = i(334074),
    te = i(287809),
    tt = i(657718),
    ti = i(789645),
    tn = i(478016),
    tl = i(384377),
    ts = i(518477),
    tr = i(49999);
function ta(e) {
    let { user: t, application: i, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eO.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: i.id }), [i.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, G.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, tl.XA)(ts.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, n.jsx)(L.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, n.jsx)(L.A.Cta, {
            showSuggestedForYou: !0,
            heading: ef.intl.format(ef.t.OIzLCy, { applicationName: i.name }),
            content: ef.intl.format(ef.t.BQySru, { applicationName: i.name }),
            buttons: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(U.m, {
                        text: ef.intl.string(ef.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, n.jsx)(tt.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: ti.P,
                            "aria-label": ef.intl.string(ef.t.WAI6xu),
                            onClick: () => {
                                s(tr.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(U.m, {
                        text: ef.intl.string(ef.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)(tt.S, {
                            variant: "primary",
                            size: "sm",
                            icon: tn.U,
                            "aria-label": ef.intl.formatToPlainString(ef.t.KfGahB, { applicationName: i.name }),
                            onClick: () => {
                                s(tr.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function to() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: i,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([e9.A], () => e9.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, e3.Wq)();
        }, []);
        let t = (0, a.bG)([te.default], () => te.default.getCurrentUser()),
            i = (0, c.A)(e),
            { tokens: n, fetched: s } = (0, e6.j)(e),
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
            { eligibleToShow: u, markAsDismissed: g } = (0, e4.hj)({
                applications: d,
                dismissibleContent: e5.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: e4.SH,
            }),
            m = l.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = i[0];
    return null == r ? null : (0, n.jsx)(ta, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var td = i(128988),
    tc = i(280450),
    tu = i(321191),
    tg = i(896170),
    tm = i(765178),
    tx = i(922016),
    tf = i(305866),
    th = i(732771),
    tp = i(321108),
    tI = i(383329),
    tj = i(250573);
function tv(e) {
    let { widgetType: t, widget: i, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(i.games.map((e) => e.applicationId)), [i.games]),
        { trackUserProfileEditAction: d } = (0, eO.NJ)(),
        [c, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, tI.R)({ query: c }),
        f = c.trim().length > 0,
        { applicationIds: h, onAddGame: p } = y(t),
        I = (0, tp.A)(h),
        j = l.useCallback(
            (e) => {
                (0, G.ew)({ widgetType: t, game: { applicationId: e } }),
                    tm.O.announce(ef.intl.string(ef.t.q0U3DE)),
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
        E = l.useMemo(() => ({ ...x, threshold: tg.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        S = l.useCallback((e) => (f || "" === e.trim() ? v.length : (0, tg.Ht)(v, e, E).length), [f, v, E]),
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
    return (0, n.jsx)(tx.Y, {
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
            return (0, n.jsx)(tf.l, {
                className: tj.C,
                "aria-label": ef.intl.string(ef.t.uqw8wK),
                children: (0, n.jsxs)(th.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: v,
                    matchSorterOptions: E,
                    customMatchSorter: f ? A : void 0,
                    children: [
                        (0, n.jsx)(th.a3, {
                            label: ef.intl.string(ef.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: ef.intl.string(ef.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: N,
                        }),
                        (0, n.jsx)(th.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function tA(e) {
    let { disabled: t, ...i } = e,
        s = l.useRef(null);
    return (0, n.jsx)(tv, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(U.m, {
                text: ef.intl.string(ef.t.SgTOtX),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(H.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: W.T,
                    "aria-label": ef.intl.string(ef.t.SgTOtX),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function tE(e) {
    let t = l.useRef(null);
    return (0, n.jsx)(tv, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(F.D, {
                innerRef: t,
                className: tj.c,
                "aria-label": ef.intl.string(ef.t.SgTOtX),
                ...e,
                children: (0, n.jsx)(eB.p, { color: "currentColor" }),
            }),
    });
}
let tS = l.createContext(null);
function tN(e) {
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
    return (0, n.jsx)(tS.Provider, { value: { expanded: r, setExpanded: o }, children: i });
}
function tb() {
    let e = l.useContext(tS);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var tw = i(308685);
function tC(e) {
    let { widget: t } = e,
        i = (0, G.cv)(t.type),
        l = 1 === i,
        s = l ? ef.intl.string(ef.t["3FdPBT"]) : ef.intl.format(ef.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: l ? tw.O : tw.k,
        children: [
            l && (0, n.jsx)(tE, { widget: t, widgetType: t.type }),
            (0, n.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var tT = i(823016),
    tk = i(683071),
    ty = i(116363);
function tR(e) {
    let { widgetType: t, gameCount: i } = e,
        l = (0, G.cv)(t);
    return i <= l
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: ty.l,
              children: (0, n.jsx)(tk.w, {
                  type: "warning",
                  children: ef.intl.formatToPlainString(ef.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var tO = i(17110);
function t_(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(F.D, {
        onClick: t,
        className: tO.x,
        "aria-expanded": i,
        children: (0, n.jsx)(d.E, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? ef.intl.string(ef.t["6MwJo/"]) : ef.intl.string(ef.t.lBeKY2),
        }),
    });
}
var tL = i(249264),
    tD = i(462037);
function tP(e) {
    let { games: t, user: i, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tT.r)();
    return (0, n.jsx)("ul", {
        className: tD.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(tL.A, {
                        index: t,
                        user: i,
                        game: e,
                        widgetType: l,
                        coverRef: r(e.applicationId),
                        onRemoveGame: a,
                        ...s,
                    }),
                },
                e.applicationId,
            ),
        ),
    });
}
function tG(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, eD.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tb(),
        c = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(tP, { ...e, games: c }),
                u && (0, n.jsx)(t_, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(tR, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tT.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function tM(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(M.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(tG, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tC, { widget: i }),
    });
}
function tU(e) {
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
                ? (0, n.jsx)(tL.A, {
                      user: t,
                      widgetType: i.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tC, { widget: i }),
    });
}
var tF = i(768754);
function tW(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: tF.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.applicationId)),
    });
}
var tV = i(686246),
    tH = i(201438),
    tB = i(451395),
    tz = i(788593),
    tX = i(858808),
    tK = i(350956),
    tY = i(466215);
function tq(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, tT.r)(),
        c = l.useRef(null);
    return (0, n.jsx)(tB.mG, {
        index: t,
        itemId: s.applicationId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => c.current?.offsetWidth },
        "aria-label": ef.intl.formatToPlainString(ef.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, G.Un)(i, e, t),
        onEnd: () => d(s.applicationId),
        className: tY.kL,
        dropBeforeClassName: tY.A,
        dropAfterClassName: tY.Ze,
        draggingClassName: tY.Id,
        children: (0, n.jsx)("div", { ref: c, className: tY.An, children: o }),
    });
}
function tZ(e) {
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
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, tH.A)(t.applicationId),
        { registerDragHandleRef: m } = (0, tT.r)(),
        x = s && !r,
        { isDragging: f } = (0, tV.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(tz.A, {
                    imageSrc: c,
                    gameName: u,
                    applicationId: t.applicationId,
                    userId: i,
                    disableInteraction: r,
                    className: null == c || r ? void 0 : tK.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, n.jsx)(tB.jV, { buttonRef: m(t.applicationId), className: tY.BU }),
                x &&
                    (0, n.jsx)(tX.A, {
                        game: t,
                        widgetType: l,
                        className: tY.vS,
                        onRemove: () => o?.(t.applicationId),
                    }),
            ],
        });
    }
    return g
        ? (0, n.jsx)("div", { className: tK.mD })
        : x
          ? (0, n.jsx)(tq, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, n.jsx)("div", { className: tY.kL, children: h() });
}
function tJ(e) {
    let { games: t, userId: i, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tT.r)();
    return (0, n.jsx)(tW, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(tZ, {
                index: t,
                game: e,
                userId: i,
                widgetType: l,
                allowEditing: s,
                disableInteraction: r,
                coverRef: a(e.applicationId),
                onRemoveGame: o,
            }),
    });
}
function tQ(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, eD.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tb(),
        c = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(tJ, { ...e, games: c }),
                u && (0, n.jsx)(t_, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(tR, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tT.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function t$(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(M.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(tQ, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tC, { widget: i }),
    });
}
function t0(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(M.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(tQ, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tC, { widget: i }),
    });
}
var t1 = i(297264),
    t8 = i(915089),
    t2 = i(30061);
function t7(e) {
    let { applicationId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, tH.A)(t),
        d = (0, a.bG)([E.A], () => E.A.suggestedFetchIsLoading),
        c = ef.intl.formatToPlainString(ef.t["3mb1s5"], { game: r });
    return o || d
        ? (0, n.jsx)("div", { className: tK.mD })
        : (0, n.jsx)(U.m, {
              text: c,
              ariaHidden: !0,
              children: (0, n.jsxs)(F.D, {
                  className: t2.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, n.jsx)(tz.A, {
                          className: t2.Iv,
                          imageSrc: s,
                          gameName: r,
                          applicationId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(eB.p, { size: "md", className: t2.Xv, color: V.A.colors.WHITE }),
                  ],
              }),
          });
}
function t5(e) {
    let { userId: t, games: i, onDismiss: l, onClick: s, className: a } = e,
        o = (0, t8.GV)();
    return (0, n.jsxs)("aside", {
        className: r()(t2.kL, a),
        "aria-labelledby": o,
        children: [
            (0, n.jsxs)("div", {
                className: t2.wx,
                children: [
                    (0, n.jsx)(F.D, {
                        className: t2.r,
                        "aria-label": ef.intl.string(ef.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(ti.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(t1.D, {
                        id: o,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: ef.intl.string(ef.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: t2.Vg,
                children: i.map((e) => {
                    let { applicationId: i } = e;
                    return (0, n.jsx)(
                        "li",
                        { children: (0, n.jsx)(t7, { onClick: () => s(i), userId: t, applicationId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}
function t6(e) {
    let { widgetType: t, ...i } = e,
        { games: s, onAddGame: r } = y(t),
        { setExpanded: a } = tb(),
        { trackUserProfileEditAction: o } = (0, eO.NJ)(),
        d = l.useCallback(
            (e) => {
                r(e),
                    a(!0),
                    (0, G.ew)({ widgetType: t, game: { applicationId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [r, t, o, a],
        );
    return (0, n.jsx)(t5, { games: s, onClick: d, ...i });
}
var t3 = i(344287);
function t9(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case w.x.FAVORITE_GAMES:
            return (0, n.jsx)(tU, { widget: t, ...i });
        case w.x.CURRENT_GAMES:
            return (0, n.jsx)(tM, { widget: t, ...i });
        case w.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(t0, { widget: t, ...i });
        case w.x.PLAYED_GAMES:
            return (0, n.jsx)(t$, { widget: t, ...i });
        default:
            return null;
    }
}
function t4(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, ...o } = e,
        { setExpanded: d } = tb(),
        { shouldShowSuggestions: c, handleDismissSuggestions: u } = (function (e) {
            let [t, i] = l.useState(!1),
                n = e.type,
                s = (0, a.bG)([tc.default, tu.A], () => {
                    let e = tc.default.getId();
                    if (null == e) return !1;
                    let t = tu.A.getUserProfile(e);
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
    return (0, n.jsx)(t9, {
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
                          tA,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => d(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, n.jsx)(t6, { userId: i.id, widgetType: t.type, onDismiss: u, className: t3.r }),
        ...o,
    });
}
function ie(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(tN, { widgetType: t.type, children: (0, n.jsx)(t4, { widget: t, ...i }) });
}
var it = i(576260),
    ii = i(94160),
    il = i(616714),
    is = i(788259),
    ir = i(902394);
function ia(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: s } = (0, eO.NJ)(),
        r = l.useRef(!1),
        o = (0, a.bG)([tu.A], () => tu.A.getUserProfile(t)?.fetchError != null, [t]),
        c = (0, il.A)();
    return (
        l.useEffect(() => {
            r.current || o || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [o, i]),
        (0, n.jsxs)("div", {
            className: ir.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: ir.FS,
                    children: [
                        (0, n.jsx)(t1.D, {
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
                        className: ir.ZW,
                        "aria-label": ef.intl.string(ef.t["+EIBSA"]),
                        children: c.map((e) =>
                            (0, n.jsx)(
                                "li",
                                {
                                    children: (0, n.jsx)(is.A, {
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
var io = i(456620);
function id(e) {
    let { widget: t, ...i } = e;
    return t instanceof f.R
        ? (0, n.jsx)(L.A, { widget: t, ...i })
        : t instanceof I.Tu
          ? (0, n.jsx)(eT, { widget: t, ...i })
          : (0, p.fu)(t)
            ? (0, n.jsx)(ie, { widget: t, ...i })
            : t instanceof h.k
              ? (0, n.jsx)(e7, { widget: t, ...i })
              : null;
}
function ic() {
    return (0, n.jsxs)("div", {
        className: io.mJ,
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
function iu(e) {
    let { user: t, guildId: i, channelId: s } = e,
        r = (0, O.A)(t.id),
        o = (0, _.A)(t.id),
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
                        children: [(0, n.jsx)(eL, { className: io.cG }), d && (0, n.jsx)(ic, {}), (0, n.jsx)(to, {})],
                    }),
                r.map((e, l) =>
                    (0, n.jsx)(
                        id,
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
        ? (0, n.jsx)(ia, { userId: t.id })
        : o
          ? (0, n.jsx)(eD.D, { children: v() })
          : v();
}
function ig(e) {
    let { user: t, ...i } = e,
        s = l.useRef(null);
    (0, R.i)({ containerRef: s });
    let a = (0, it.k)(t.id);
    return (0, n.jsxs)(ii.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(io.XG, { [io.az]: a }),
        fade: !0,
        children: [(0, n.jsx)(td.A, { scrollerRef: s }), (0, n.jsx)(iu, { user: t, ...i })],
    });
}
