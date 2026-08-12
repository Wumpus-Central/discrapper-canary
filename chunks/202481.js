i.d(t, { A: () => iM, u: () => iP });
var n = i(477900),
    l = i(582128),
    s = i(503698),
    r = i.n(s),
    a = i(17928),
    o = i(885574),
    d = i(834730),
    u = i(429913),
    c = i(277984),
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
    C = i.n(S),
    b = i(196765),
    N = i(540185),
    T = i(282435);
let w = (0, S.sampleSize)(T.sx, T.sx.length),
    k = (0, b.v)((e, t) => ({
        stack: [],
        wishlistStack: [],
        gameIds: {},
        peekedGameIds: {},
        onLoad: (i, n, l) => {
            let s = new Set(l.map((e) => e.gameId));
            for (let l of (e({
                stack: [...i.filter((e) => !s.has(e)), ...w],
                wishlistStack: [...n.filter((e) => !s.has(e)), ...w],
            }),
            Object.values(N.x)))
                t().setNext(6, l);
        },
        setNext: (e, i) => {
            let n = t().getNext(e, i);
            t()._setGameIds(i, n);
            let l = t().peekNext(7, i);
            t()._setPeekedGameIds(i, l);
        },
        getNext: (e, i) => {
            let n = i === N.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                l = n.slice(0, e),
                s = n.slice(e);
            return t()._setStack(i, s), l;
        },
        peekNext: (e, i) => (i === N.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
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
            let n = (i === N.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            t()._setStack(i, n), t()._setPeekedGameIds(i, t().peekNext(7, i));
        },
        _setGameIds: (t, i) => {
            e((e) => ({ gameIds: { ...e.gameIds, [t]: i } }));
        },
        _setStack: (t, i) => {
            t === N.x.WANT_TO_PLAY_GAMES ? e({ wishlistStack: i }) : e({ stack: i });
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
var R = i(600761),
    O = i(667049),
    _ = i(579950),
    L = i(605694),
    P = i(869484),
    D = i(403581),
    G = i(315629),
    M = i(465794),
    U = i(287809),
    F = i(158045),
    W = i(735321),
    V = i(623280),
    H = i(866665),
    B = i(939249),
    z = i(499373),
    K = i(661531),
    X = i(408278),
    Y = i(241326),
    q = i(43990),
    J = i(807081),
    Z = i(480084),
    Q = i(29814),
    $ = i(551965),
    ee = i(703067);
let et = ["escape", "text", "strong", "em", "u", "url", "autolink"],
    ei = (0, $.A)([C().pick(Q.Ay.RULES, et), (0, Z.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 })]),
    en = J.aV(ei),
    el = (0, $.A)([
        C().pick(Q.Ay.RULES, et),
        (0, Z.A)({ enableBuildOverrides: !1 }),
        { link: { react: (e, t, i) => (0, n.jsx)("span", { className: ee.p, children: t(e.content, i) }, i.key) } },
    ]),
    es = J.aV(el);
var er = i(761431),
    ea = i(995919);
function eo(e) {
    let { className: t, variant: i, color: l, value: s, interactive: a = !0, disableMarkdown: o = !1 } = e;
    return (0, n.jsx)(d.E, {
        className: r()(ea.Y, t),
        variant: i,
        color: l,
        lineClamp: 1,
        children: o ? s : (a ? en : es)(s),
    });
}
function ed(e) {
    let {
            className: t,
            value: i,
            placeholder: s,
            variant: r,
            color: a,
            onCommit: o,
            maxLength: d,
            growWidth: u,
            disableMarkdown: c,
        } = e,
        g = l.useCallback((e) => o(e.trim()), [o]),
        m = (0, er.TX)({ value: i, onCommit: g }),
        x =
            "" === i.trim()
                ? null
                : (0, n.jsx)(eo, { interactive: !1, className: t, variant: r, color: a, value: i, disableMarkdown: c });
    return (0, n.jsx)(er.yV, {
        ...m,
        size: "compact",
        removeVerticalPadding: !0,
        growWidth: u,
        preview: x,
        placeholder: s,
        editButtonAriaLabel: s,
        label: s,
        maxLength: d,
    });
}
function eu(e) {
    return e.canEdit
        ? (0, n.jsx)(ed, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, n.jsx)(eo, {
                className: e.className,
                variant: e.variant,
                color: e.color,
                value: e.value,
                disableMarkdown: e.disableMarkdown,
            });
}
var ec = i(326009),
    eg = i(372638),
    em = i(231088),
    ex = i(458710);
function ef(e) {
    let { className: t, variant: i, color: l, value: s, maxRows: a, interactive: o = !0 } = e;
    return (0, n.jsx)(d.E, {
        className: r()(ea.Y, ex.L, t),
        variant: i,
        color: l,
        lineClamp: a,
        children: (o ? en : es)(s),
    });
}
function eh(e) {
    let { className: t, value: i, placeholder: s, variant: r, color: a, onCommit: o, maxLength: d, maxRows: u } = e,
        c = l.useCallback((e) => o(e.trim()), [o]),
        g = (0, em.Ww)({ value: i, onCommit: c }),
        m =
            "" === i.trim()
                ? null
                : (0, n.jsx)(ef, { interactive: !1, className: t, variant: r, color: a, value: i, maxRows: u });
    return (0, n.jsx)(eg.f, {
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
function ep(e) {
    return e.canEdit
        ? (0, n.jsx)(eh, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, n.jsx)(ef, {
                className: e.className,
                variant: e.variant,
                color: e.color,
                value: e.value,
                maxRows: e.maxRows,
            });
}
var eI = i(652215),
    ej = i(339984),
    eA = i(375708),
    ev = i(442461);
function eE() {
    return (0, n.jsx)(H.m, {
        text: eA.intl.string(eA.t.mZddSK),
        children: (0, n.jsxs)(B.D, {
            className: ev.YN,
            "aria-label": eA.intl.string(eA.t.mZddSK),
            onClick: function () {
                (0, W.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
            },
            children: [
                (0, n.jsx)("div", { className: ev.JD }),
                (0, n.jsx)("div", {
                    className: ev.xJ,
                    children: (0, n.jsx)(z.T, { size: "sm", color: K.A.colors.ICON_OVERLAY_DARK }),
                }),
            ],
        }),
    });
}
function eS(e) {
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
        className: ev.El,
        children: [
            (0, n.jsx)(ec.A, {
                className: ev.Sl,
                canEdit: l,
                userId: t,
                image: i,
                previewUri: s,
                uploadType: ej.HL.PERSONAL_WIDGET_COVER,
                onImageUploadStarted: r,
                onImageUploadCompleted: a,
            }),
            l && (null != i || null != s)
                ? (0, n.jsx)("div", {
                      className: ev.ij,
                      children: (0, n.jsx)(X.K, {
                          icon: Y.u,
                          size: "sm",
                          variant: "overlay-secondary",
                          "aria-label": eA.intl.string(eA.t.RyK5Ww),
                          onClick: o,
                      }),
                  })
                : null,
        ],
    });
}
function eC(e) {
    let { userId: t, section: i, sectionIndex: s, canEdit: a } = e,
        [o, d] = l.useState(null),
        u = l.useRef(!1),
        c = null != o;
    function g(e) {
        (0, W.AD)((t) => {
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
        (u.current = !1), d(null), g((e) => ({ ...e, image: void 0 }));
    }
    function h(e) {
        (u.current = !0), d(e);
    }
    function p(e) {
        u.current && ((u.current = !1), d(null), null != e && g((t) => ({ ...t, image: e })));
    }
    function j() {
        (0, W.AD)((e) => new I.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let A = null != i.image || c,
        v = A || a;
    return (0, n.jsx)(q.N, {
        theme: A ? eI.NJ8.DARK : void 0,
        children: (e) =>
            (0, n.jsxs)("div", {
                className: r()(ev.kL, { [ev.Vp]: v }, e),
                children: [
                    a || null != i.image
                        ? (0, n.jsx)(eS, {
                              userId: t,
                              image: i.image,
                              canEdit: a,
                              uploadPreviewUri: o,
                              onImageUploadStarted: h,
                              onImageUploadCompleted: p,
                              onImageRemove: f,
                          })
                        : null,
                    a && !A
                        ? (0, n.jsx)("div", {
                              className: ev.kI,
                              children: (0, n.jsx)(H.m, {
                                  text: eA.intl.string(eA.t.g2jVww),
                                  children: (0, n.jsx)(X.K, {
                                      icon: Y.u,
                                      size: "sm",
                                      variant: "overlay-secondary",
                                      "aria-label": eA.intl.string(eA.t.g2jVww),
                                      onClick: j,
                                  }),
                              }),
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        className: r()(ev.hQ, e, { [ev.Vp]: v }),
                        children: [
                            A ? (0, n.jsx)("div", { className: ev.cw }) : null,
                            (0, n.jsx)(eu, {
                                canEdit: a,
                                growWidth: !0,
                                variant: "heading-xl/semibold",
                                color: "text-default",
                                value: i.title,
                                placeholder: eA.intl.string(eA.t.KqCDvK),
                                onCommit: m,
                                maxLength: 100,
                            }),
                            (0, n.jsx)(ep, {
                                canEdit: a,
                                variant: "text-sm/medium",
                                color: "text-default",
                                value: i.subtitle,
                                placeholder: eA.intl.string(eA.t.k8zZFd),
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
var eb = i(750943),
    eN = i(335225);
function eT(e) {
    let { onClick: t } = e;
    return (0, n.jsxs)(B.D, {
        onClick: t,
        className: eN.cR,
        children: [
            (0, n.jsx)(eb.X, { size: "xs", color: K.A.colors.ICON_SUBTLE }),
            (0, n.jsx)(d.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: eA.intl.string(eA.t["9AY+/x"]),
            }),
        ],
    });
}
function ew(e) {
    let { index: t, userId: i, field: s, canEdit: r, onFieldChange: a, onFieldRemove: o } = e,
        [d, u] = l.useState(null),
        c = l.useRef(!1),
        g = r ? !0 !== s.hideImage : null != s.image;
    return (0, n.jsxs)("div", {
        className: eN.ez,
        children: [
            g
                ? (0, n.jsxs)("div", {
                      className: eN.tF,
                      children: [
                          (0, n.jsx)(ec.A, {
                              className: eN.k9,
                              canEdit: r,
                              userId: i,
                              image: s.image,
                              previewUri: d,
                              uploadType: ej.HL.PERSONAL_WIDGET_FIELD,
                              onImageUploadStarted: function (e) {
                                  (c.current = !0), u(e);
                              },
                              onImageUploadCompleted: function (e) {
                                  c.current &&
                                      ((c.current = !1), u(null), null != e && a(s.key, (t) => ({ ...t, image: e })));
                              },
                          }),
                          r
                              ? (0, n.jsx)("div", {
                                    className: eN.ij,
                                    children: (0, n.jsx)(H.m, {
                                        text: eA.intl.string(eA.t.RyK5Ww),
                                        children: (0, n.jsx)(X.K, {
                                            size: "sm",
                                            icon: Y.u,
                                            "aria-label": eA.intl.string(eA.t.RyK5Ww),
                                            onClick: function () {
                                                (c.current = !1),
                                                    u(null),
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
                className: eN.oT,
                children: [
                    (0, n.jsx)(eu, {
                        canEdit: r,
                        variant: "text-sm/medium",
                        color: "text-default",
                        value: s.title,
                        placeholder: eA.intl.formatToPlainString(eA.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            a(s.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 50,
                    }),
                    (0, n.jsx)(eu, {
                        canEdit: r,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        value: s.description,
                        placeholder: eA.intl.formatToPlainString(eA.t.Hs14K3, { number: t + 1 }),
                        onCommit: function (e) {
                            a(s.key, (t) => ({ ...t, description: e }));
                        },
                        maxLength: 100,
                    }),
                ],
            }),
            r
                ? (0, n.jsxs)("div", {
                      className: eN.Ms,
                      children: [
                          g
                              ? null
                              : (0, n.jsx)(H.m, {
                                    text: eA.intl.string(eA.t.i3vRzP),
                                    children: (0, n.jsx)(X.K, {
                                        size: "sm",
                                        icon: eb.X,
                                        "aria-label": eA.intl.string(eA.t.i3vRzP),
                                        onClick: function () {
                                            a(s.key, (e) => ({ ...e, hideImage: void 0 }));
                                        },
                                    }),
                                }),
                          (0, n.jsx)(H.m, {
                              text: eA.intl.string(eA.t.g2jVww),
                              children: (0, n.jsx)(X.K, {
                                  size: "sm",
                                  icon: Y.u,
                                  "aria-label": eA.intl.string(eA.t.g2jVww),
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
function ek(e) {
    let { userId: t, section: i, sectionIndex: l, canEdit: s } = e;
    function r(e) {
        (0, W.AD)((t) => {
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
        (0, n.jsx)(ew, { index: i, userId: t, field: e, canEdit: s, onFieldChange: a, onFieldRemove: o }, e.key),
    );
    return (s &&
        i.fields.length < 4 &&
        d.push(
            (0, n.jsx)(
                eT,
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
        : (0, n.jsx)("div", { className: eN.kL, children: d });
}
var ey = i(202541),
    eR = i(396395);
let eO = { section: eI.JJy.PERSONAL_WIDGET };
function e_(e) {
    let { widget: t, canEdit: i } = e;
    return (0, n.jsxs)("div", {
        className: eR.wx,
        children: [
            (0, n.jsx)(D.t, { size: "xs" }),
            (0, n.jsx)(eu, {
                canEdit: i,
                variant: "text-sm/medium",
                color: "text-default",
                value: t.header,
                placeholder: eA.intl.string(eA.t.fjSaAm),
                onCommit: function (e) {
                    (0, W.AD)((t) => new I.Tu({ ...t, header: e }));
                },
                maxLength: 100,
                disableMarkdown: !0,
            }),
        ],
    });
}
function eL(e) {
    let { userId: t, section: i, sectionIndex: l, canEdit: s } = e;
    switch (i.type) {
        case P.K.COVER:
            return (0, n.jsx)(eC, { userId: t, section: i, sectionIndex: l, canEdit: s });
        case P.K.FIELDS:
            return (0, n.jsx)(ek, { userId: t, section: i, sectionIndex: l, canEdit: s });
    }
}
function eP() {
    return (0, a.bG)([U.default], () => F.Ay.isPremium(U.default.getCurrentUser(), ey.PremiumTypes.TIER_2))
        ? null
        : (0, n.jsxs)("div", {
              className: eR.hc,
              children: [
                  (0, n.jsx)(G.h, { color: "nitro-pink", className: eR.Sp, offsetBottom: -2 }),
                  (0, n.jsx)(d.E, {
                      variant: "text-xs/medium",
                      color: "text-default",
                      className: eR.rh,
                      children: eA.intl.string(eA.t.xIJpoK),
                  }),
                  (0, n.jsx)(M.A, {
                      size: "sm",
                      subscriptionTier: ey.pe.TIER_2,
                      defaultTextOverride: eA.intl.string(eA.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eO,
                  }),
              ],
          });
}
function eD(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, index: a, trailingContent: o } = e,
        d = s && !0 !== r,
        u = l.useMemo(() => t.sections.some((e) => e.type === P.K.COVER), [t.sections]);
    return (0, n.jsx)(V.A, {
        userId: i.id,
        widget: t,
        allowEditing: s,
        disableInteraction: r,
        index: a,
        trailingContent: o,
        className: eR.Nr,
        headerClassName: eR.JE,
        children: (0, n.jsxs)("div", {
            className: eR.kL,
            children: [
                (0, n.jsx)(e_, { widget: t, canEdit: d }),
                d && !u ? (0, n.jsx)(eE, {}) : null,
                t.sections.map((e, t) => (0, n.jsx)(eL, { userId: i.id, section: e, sectionIndex: t, canEdit: d }, t)),
                d ? (0, n.jsx)(eP, {}) : null,
            ],
        }),
    });
}
var eG = i(702841),
    eM = i(821609),
    eU = i(192308),
    eF = i(307301),
    eW = i(183555),
    eV = i(465318),
    eH = i(384377),
    eB = i(554146),
    ez = i(43105),
    eK = i(131607),
    eX = i(518477),
    eY = i(49999);
function eq() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, i] = l.useState(!1);
    l.useEffect(() => {
        let e = setTimeout(() => i(!0), 250);
        return () => clearTimeout(e);
    }, []);
    let n = eV.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [s, r] = (0, eK.kn)(e && t && n ? [eB.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [s === eB.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, r];
}
function eJ(e) {
    let { targetElementRef: t, isVisible: i, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, eW.NJ)();
    return i
        ? (0, n.jsx)(ez.A, {
              targetElementRef: t,
              position: "left",
              title: eA.intl.string(eA.t.KKGxNt),
              body: eA.intl.string(eA.t["IS+QTV"]),
              onRequestClose: () => l(eY.i.USER_DISMISS),
              actions: [
                  {
                      text: eA.intl.string(eA.t.RCy7Px),
                      onClick: function () {
                          let e = (0, I.g0)();
                          (0, W.Y5)(e),
                              s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, eH.XA)(eX.jM.WIDGET_ADDED);
                      },
                  },
              ],
          })
        : null;
}
var eZ = i(964828);
function eQ(e) {
    let { buttonRef: t, isCoachmarkVisible: i, markCoachmarkAsDismissed: s } = e,
        { trackUserProfileEditAction: r } = (0, eW.NJ)(),
        a = l.useCallback(() => {
            i && s(eY.i.TAKE_ACTION);
            let e = (0, I.g0)();
            (0, W.Y5)(e),
                r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, eH.XA)(eX.jM.WIDGET_ADDED);
        }, [r, i, s]);
    return (0, n.jsx)(eM.$, {
        icon: D.t,
        text: eA.intl.string(eA.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function e$(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, eW.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [u, c] = eq(),
        g = (function () {
            let e = (0, eG.bG)([U.default], () => U.default.getCurrentUser()?.id),
                t = (0, O.A)(e),
                { enabled: i, showCreateEntrypoint: n } = eV.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === N.x.PERSONAL);
            return i && n && !l;
        })(),
        m = l.useCallback(() => {
            u && c(eY.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, eU.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([i.e("8888"), i.e("22420"), i.e("26623")]).then(
                            i.bind(i, 850370),
                        );
                        return (t) => (0, n.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [s, u, c]);
    return (0, n.jsxs)("div", {
        className: r()(eZ.w, t),
        children: [
            (0, n.jsx)(d.E, {
                className: eZ.D,
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: eA.intl.string(eA.t.OYlggR),
            }),
            g ? (0, n.jsx)(eQ, { buttonRef: o, isCoachmarkVisible: u, markCoachmarkAsDismissed: c }) : null,
            (0, n.jsx)(eM.$, {
                icon: eF.j,
                text: eA.intl.string(eA.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: m,
                buttonRef: a,
            }),
            (0, n.jsx)(eJ, { targetElementRef: g ? o : a, isVisible: u, markAsDismissed: c }),
        ],
    });
}
var e0 = i(192),
    e1 = i(793574),
    e8 = i(111994),
    e2 = i(607470),
    e7 = i(590251),
    e5 = i(530059);
function e3(e) {
    let { item: t, size: i } = e,
        l = "exporting" === t.status,
        s = "uploading" === t.status ? Math.round(100 * t.progress) : 25;
    return (0, n.jsx)("div", {
        className: r()(e5.ring, e5[i], { [e5.indeterminate]: l }),
        role: "progressbar",
        "aria-label": eA.intl.string(eA.t.RFRuwZ),
        "aria-valuenow": l ? void 0 : s,
        children: (0, n.jsx)(e7.a, {
            percent: s,
            strokeSize: e7.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var e6 = i(213879);
function e9(e) {
    let { item: t, ringSize: i, className: l } = e,
        s = "exporting" === t.status || "uploading" === t.status,
        a = r()(e6.Gt, { [e6.ob]: s });
    return (0, n.jsxs)("div", {
        className: r()(e6.$_, l),
        children: [
            "saved" === t.status
                ? null != t.videoURL
                    ? (0, n.jsx)(e2.A, { src: t.videoURL, preload: "metadata", muted: !0, className: a })
                    : null
                : (0, n.jsx)("img", { src: t.thumbnail, alt: "", className: a, loading: "lazy" }),
            s && (0, n.jsx)(e3, { item: t, size: i }),
        ],
    });
}
var e4 = i(3026),
    te = i(22231);
i(600253);
var tt = i(998809);
function ti(e) {
    let { value: t, isPlaceholder: i = !1 } = e;
    return (0, n.jsx)(d.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(tt.Qw, { [tt.qf]: i }),
        children: (0, n.jsx)(e4.A, { children: t }),
    });
}
function tn(e) {
    let { clipId: t, title: i } = e,
        { trackUserProfileEditAction: s } = (0, eW.NJ)(),
        a = l.useCallback(
            (e) => {
                let n = e.trim();
                n !== i.trim() &&
                    ((0, W.mI)(t, n),
                    s({ action: "CLIP_TITLE_EDITED", widgetEdited: N.x.CLIPS_GALLERY, numCharacters: n.length }));
            },
            [t, i, s],
        ),
        o = (0, er.TX)({ value: i, onCommit: a }),
        d = eA.intl.string(eA.t["2gwc+H"]);
    return (0, n.jsx)(er.yV, {
        ...o,
        size: "compact",
        removeVerticalPadding: !0,
        className: r()(tt.ZZ, { [tt.Dy]: o.isEditing }),
        preview: (0, n.jsxs)("span", {
            className: r()(tt.$, tt.TG),
            children: [
                (0, n.jsx)(te.R, { size: "xxs", color: "currentColor", className: tt.wz }),
                "" === i.trim() ? (0, n.jsx)(ti, { value: d, isPlaceholder: !0 }) : (0, n.jsx)(ti, { value: i }),
            ],
        }),
        placeholder: d,
        editButtonAriaLabel: eA.intl.string(eA.t.PDnM11),
        label: eA.intl.string(eA.t.PDnM11),
        maxLength: 200,
    });
}
function tl(e) {
    let { clipId: t, title: i, allowEditing: l } = e,
        s = null != i && "" !== i.trim();
    return l || s
        ? l
            ? (0, n.jsx)(tn, { clipId: t, title: i ?? "" })
            : (0, n.jsx)("span", { className: tt.$, children: (0, n.jsx)(ti, { value: i ?? "" }) })
        : null;
}
var ts = i(663341),
    tr = i(765178),
    ta = i(691540),
    to = i(857250),
    td = i(97483),
    tu = i(693117),
    tc = i(195880),
    tg = i(696016);
let tm = (0, b.v)(() => ({ localClips: new Map() }));
function tx(e, t) {
    tm.setState((i) => ({ localClips: new Map(i.localClips).set(e, t) }));
}
function tf(e) {
    tm.setState((t) => {
        let i = new Map(t.localClips);
        return i.delete(e), { localClips: i };
    });
}
async function th(e, t) {
    if (!tm.getState().localClips.has(e.id)) {
        if (null == e.applicationId) return void (0, ta.P0)((0, to.o)(eA.intl.string(eA.t.xcLXWy), td.Ck.FAILURE));
        tx(e.id, { status: "exporting", clip: e });
        try {
            let i = await (0, tu.VO)(e, { analyticsLocations: t });
            tx(e.id, { status: "uploading", clip: e, progress: 0 });
            let n = new File([i], "clip.mp4", { type: "video/mp4" }),
                l = await v.A.uploadWidgetClip(n, {
                    onProgress: (t) => {
                        var i;
                        return (
                            (i = e.id),
                            void tm.setState((e) => {
                                let n = e.localClips.get(i);
                                return n?.status !== "uploading"
                                    ? e
                                    : { localClips: new Map(e.localClips).set(i, { ...n, progress: t }) };
                            })
                        );
                    },
                });
            tx(e.id, { status: "uploaded", clip: e, uploadFilename: l }),
                (0, W.XW)({
                    status: "pending",
                    id: (0, tc.m)(),
                    sourceClipId: e.id,
                    gameId: e.applicationId,
                    title: e.name,
                    uploadFilename: l,
                });
        } catch (t) {
            tf(e.id),
                tg.nx.error("Failed to upload a clip for the clips gallery widget", t),
                (0, ta.P0)((0, to.o)(eA.intl.string(eA.t.iufib1), td.Ck.FAILURE));
        }
    }
}
function tp(e) {
    let { widgetClipId: t, sourceClipId: i, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eW.NJ)(),
        r = eA.intl.string(eA.t.ib6Mgx);
    return (0, n.jsx)("div", {
        className: l,
        children: (0, n.jsx)(H.m, {
            text: r,
            ariaHidden: !0,
            children: (0, n.jsx)(X.K, {
                "aria-label": r,
                icon: Y.u,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, W.mC)(t),
                        null != i && tf(i),
                        tr.O.announce(eA.intl.string(eA.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: N.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var tI = i(547193);
function tj(e) {
    let { items: t, selectedKey: i, onSelect: l, onAddClip: s, allowRemoving: a = !1 } = e,
        o = Math.max(0, 4 - t.length);
    return (0, n.jsxs)("ul", {
        className: tI.Xm,
        children: [
            t.map((e, t) =>
                (0, n.jsxs)(
                    "li",
                    {
                        className: tI.NI,
                        children: [
                            (0, n.jsx)(B.D, {
                                className: r()(tI.Vs, { [tI.wH]: e.key === i }),
                                "aria-pressed": e.key === i,
                                "aria-label": eA.intl.formatToPlainString(eA.t.zrtAwA, { clipNumber: t + 1 }),
                                onClick: () => l(e.key),
                                children: (0, n.jsx)(e9, { item: e, ringSize: "sm", className: tI.nC }),
                            }),
                            a &&
                                ("pending" === e.status || "saved" === e.status) &&
                                (0, n.jsx)(tp, {
                                    widgetClipId: e.key,
                                    sourceClipId: "pending" === e.status ? e.sourceClipId : void 0,
                                    className: tI.nM,
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
                            className: tI.NI,
                            children: (0, n.jsx)(B.D, {
                                className: tI.Yn,
                                "aria-label": eA.intl.string(eA.t.rI0i0a),
                                onClick: s,
                                children: (0, n.jsx)(ts.p, { size: "sm", color: "currentColor" }),
                            }),
                        },
                        `empty-${t}`,
                    ),
                ),
        ],
    });
}
var tA = i(298149);
function tv(e) {
    let { children: t } = e;
    return (0, n.jsxs)("div", {
        className: tA.Lw,
        children: [(0, n.jsx)("div", { className: tA.tB }), (0, n.jsx)("div", { className: tA.Qs, children: t })],
    });
}
var tE = i(465927);
function tS(e) {
    let { onClick: t } = e,
        i = eA.intl.string(eA.t.rI0i0a);
    return (0, n.jsx)(H.m, {
        text: i,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, n.jsx)(X.K, { variant: "secondary", size: "sm", icon: z.T, "aria-label": i, onClick: t }),
    });
}
function tC() {
    return (0, n.jsx)("div", {
        className: tE.p$,
        children: (0, n.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: eA.intl.format(eA.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tb(e) {
    var t;
    let s,
        { widget: r, user: a, allowEditing: o, disableInteraction: d, ...u } = e,
        [c, g] = l.useState(null),
        m =
            ((t = a.id),
            (s = tm((e) => e.localClips)),
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
        p = m.find((e) => e.key === c) ?? m[m.length - 1],
        I = l.useCallback(() => {
            (0, eU.openModalLazy)(
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
                            initialMainLink: e8.oH.ALL_CLIPS,
                            onClipClick: (e) => {
                                ((e) => th(e, [e1.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                            },
                        });
                },
                { modalKey: tg.nm },
            );
        }, []);
    return (0, n.jsx)(V.A, {
        userId: a.id,
        widget: r,
        allowEditing: o,
        disableInteraction: d,
        className: tE.kL,
        headerTitle: (0, W.L)(r),
        headerActionButtons: x && f ? [(0, n.jsx)(tS, { onClick: I }, "clips-gallery-add-clip")] : void 0,
        ...u,
        children:
            null != p
                ? (0, n.jsxs)("div", {
                      className: tE.nV,
                      children: [
                          (0, n.jsxs)("div", {
                              className: tE.aM,
                              children: [
                                  (0, n.jsx)(e9, { item: p, ringSize: "lg", className: tE.VH }),
                                  (0, n.jsx)(tv, {
                                      children:
                                          ("saved" === p.status || "pending" === p.status) &&
                                          (0, n.jsx)(tl, { clipId: p.key, title: p.title, allowEditing: x }),
                                  }),
                              ],
                          }),
                          (0, n.jsx)(tj, {
                              items: m,
                              selectedKey: p.key,
                              onSelect: g,
                              onAddClip: x && !h ? I : void 0,
                              allowRemoving: x,
                          }),
                      ],
                  })
                : (0, n.jsx)(tC, {}),
    });
}
var tN = i(704824),
    tT = i(382483),
    tw = i(385113),
    tk = i(334074),
    ty = i(657718),
    tR = i(789645),
    tO = i(478016);
function t_(e) {
    let { user: t, application: i, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eW.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: i.id }), [i.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, W.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, eH.XA)(eX.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, n.jsx)(L.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, n.jsx)(L.A.Cta, {
            showSuggestedForYou: !0,
            heading: eA.intl.format(eA.t.OIzLCy, { applicationName: i.name }),
            content: eA.intl.format(eA.t.BQySru, { applicationName: i.name }),
            buttons: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(H.m, {
                        text: eA.intl.string(eA.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, n.jsx)(ty.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tR.P,
                            "aria-label": eA.intl.string(eA.t.WAI6xu),
                            onClick: () => {
                                s(eY.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(H.m, {
                        text: eA.intl.string(eA.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)(ty.S, {
                            variant: "primary",
                            size: "sm",
                            icon: tO.U,
                            "aria-label": eA.intl.formatToPlainString(eA.t.KfGahB, { applicationName: i.name }),
                            onClick: () => {
                                s(eY.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function tL() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: i,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([tw.A], () => tw.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, tT.Wq)();
        }, []);
        let t = (0, a.bG)([U.default], () => U.default.getCurrentUser()),
            i = (0, u.A)(e),
            { tokens: n, fetched: s } = (0, tN.j)(e),
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
            { eligibleToShow: c, markAsDismissed: g } = (0, tk.hj)({
                applications: d,
                dismissibleContent: eB.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: tk.SH,
            }),
            m = l.useMemo(() => d.filter((e) => c.includes(e.id)), [d, c]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = i[0];
    return null == r ? null : (0, n.jsx)(t_, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var tP = i(128988),
    tD = i(280450),
    tG = i(321191),
    tM = i(896170),
    tU = i(922016),
    tF = i(305866),
    tW = i(732771),
    tV = i(321108),
    tH = i(383329),
    tB = i(250573);
function tz(e) {
    let { widgetType: t, widget: i, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(i.games.map((e) => e.gameId)), [i.games]),
        { trackUserProfileEditAction: d } = (0, eW.NJ)(),
        [u, c] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, tH.R)({ query: u }),
        f = u.trim().length > 0,
        { gameIds: h, onAddGame: p } = y(t),
        I = (0, tV.A)(h),
        j = l.useCallback(
            (e) => {
                (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    tr.O.announce(eA.intl.string(eA.t.q0U3DE)),
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
            let t = I.filter((e) => !o.has(e.id) && (0, W.XX)(e)).map((e) => ({
                    id: String(e.id),
                    value: String(e.id),
                    label: e.name,
                    disabled: !1,
                })),
                i = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !i.has(e.id))];
        }, [m, o, I, f]),
        v = l.useCallback((e) => e, []),
        E = l.useMemo(() => ({ ...x, threshold: tM.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        S = l.useCallback((e) => (f || "" === e.trim() ? A.length : (0, tM.Ht)(A, e, E).length), [f, A, E]),
        C = l.useCallback(
            (e) => {
                let i = e.target.value;
                "" === u.trim() &&
                    "" !== i.trim() &&
                    d({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: i.trim().length,
                        numResults: S(i),
                    }),
                    c(i),
                    (g.current = i);
            },
            [u, d, t, S],
        );
    return (0, n.jsx)(tU.Y, {
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
            return (0, n.jsx)(tF.l, {
                className: tB.C,
                "aria-label": eA.intl.string(eA.t.uqw8wK),
                children: (0, n.jsxs)(tW.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: A,
                    matchSorterOptions: E,
                    customMatchSorter: f ? v : void 0,
                    children: [
                        (0, n.jsx)(tW.a3, {
                            label: eA.intl.string(eA.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: eA.intl.string(eA.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: C,
                        }),
                        (0, n.jsx)(tW.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function tK(e) {
    let { disabled: t, ...i } = e,
        s = l.useRef(null);
    return (0, n.jsx)(tz, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(H.m, {
                text: eA.intl.string(eA.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(X.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: z.T,
                    "aria-label": eA.intl.string(eA.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function tX(e) {
    let t = l.useRef(null);
    return (0, n.jsx)(tz, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(B.D, {
                innerRef: t,
                className: tB.c,
                "aria-label": eA.intl.string(eA.t.PYyENc),
                ...e,
                children: (0, n.jsx)(ts.p, { color: "currentColor" }),
            }),
    });
}
let tY = l.createContext(null);
function tq(e) {
    let { widgetType: t, children: i } = e,
        s = (0, a.bG)([E.A], () => {
            let e = E.A.getPendingWidgets();
            if (null == e) return !1;
            let i = e.find((e) => e.type === t);
            if (null == i) return !1;
            let n = (0, W.cv)(t);
            return i.games.length > n;
        }),
        [r, o] = l.useState(s);
    return (0, n.jsx)(tY.Provider, { value: { expanded: r, setExpanded: o }, children: i });
}
function tJ() {
    let e = l.useContext(tY);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var tZ = i(308685);
function tQ(e) {
    let { widget: t } = e,
        i = (0, W.cv)(t.type),
        l = 1 === i,
        s = l ? eA.intl.string(eA.t["3FdPBT"]) : eA.intl.format(eA.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: l ? tZ.O : tZ.k,
        children: [
            l && (0, n.jsx)(tX, { widget: t, widgetType: t.type }),
            (0, n.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var t$ = i(823016),
    t0 = i(683071),
    t1 = i(116363);
function t8(e) {
    let { widgetType: t, gameCount: i } = e,
        l = (0, W.cv)(t);
    return i <= l
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: t1.l,
              children: (0, n.jsx)(t0.w, {
                  type: "warning",
                  children: eA.intl.formatToPlainString(eA.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var t2 = i(17110);
function t7(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(B.D, {
        onClick: t,
        className: t2.x,
        "aria-expanded": i,
        children: (0, n.jsx)(d.E, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? eA.intl.string(eA.t["6MwJo/"]) : eA.intl.string(eA.t.lBeKY2),
        }),
    });
}
var t5 = i(249264),
    t3 = i(462037);
function t6(e) {
    let { games: t, user: i, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, t$.r)();
    return (0, n.jsx)("ul", {
        className: t3.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(t5.A, {
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
function t9(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e0.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tJ(),
        u = o ? s : s.slice(0, 2),
        c = s.length > 2,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(t6, { ...e, games: u }),
                c && (0, n.jsx)(t7, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(t8, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(t$.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function t4(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(V.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(t9, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tQ, { widget: i }),
    });
}
function ie(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e,
        d = i.games[0];
    return (0, n.jsx)(V.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            null != d
                ? (0, n.jsx)(t5.A, {
                      user: t,
                      widgetType: i.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tQ, { widget: i }),
    });
}
var it = i(768754);
function ii(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: it.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.gameId)),
    });
}
var il = i(686246),
    is = i(201438),
    ir = i(451395),
    ia = i(788593),
    io = i(858808),
    id = i(350956),
    iu = i(466215);
function ic(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, t$.r)(),
        u = l.useRef(null);
    return (0, n.jsx)(ir.mG, {
        index: t,
        itemId: s.gameId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => u.current?.offsetWidth },
        "aria-label": eA.intl.formatToPlainString(eA.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, W.Un)(i, e, t),
        onEnd: () => d(s.gameId),
        className: iu.kL,
        dropBeforeClassName: iu.A,
        dropAfterClassName: iu.Ze,
        draggingClassName: iu.Id,
        children: (0, n.jsx)("div", { ref: u, className: iu.An, children: o }),
    });
}
function ig(e) {
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
        { coverImageUrl: u, gameName: c, isLoading: g } = (0, is.A)(t.gameId),
        { registerDragHandleRef: m } = (0, t$.r)(),
        x = s && !r,
        { isDragging: f } = (0, il.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(ia.A, {
                    imageSrc: u,
                    gameName: c,
                    gameId: t.gameId,
                    userId: i,
                    disableInteraction: r,
                    className: null == u || r ? void 0 : id.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, n.jsx)(ir.jV, { buttonRef: m(t.gameId), className: iu.BU }),
                x && (0, n.jsx)(io.A, { game: t, widgetType: l, className: iu.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, n.jsx)("div", { className: id.mD })
        : x
          ? (0, n.jsx)(ic, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: u, gameName: c, children: h() })
          : (0, n.jsx)("div", { className: iu.kL, children: h() });
}
function im(e) {
    let { games: t, userId: i, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, t$.r)();
    return (0, n.jsx)(ii, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(ig, {
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
function ix(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, e0.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tJ(),
        u = o ? s : s.slice(0, 8),
        c = s.length > 8,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(im, { ...e, games: u }),
                c && (0, n.jsx)(t7, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(t8, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(t$.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function ih(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(V.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(ix, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tQ, { widget: i }),
    });
}
function ip(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(V.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(ix, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tQ, { widget: i }),
    });
}
var iI = i(297264),
    ij = i(915089),
    iA = i(30061);
function iv(e) {
    let { gameId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, is.A)(t),
        d = (0, a.bG)([E.A], () => E.A.suggestedFetchIsLoading),
        u = eA.intl.formatToPlainString(eA.t["3mb1s5"], { game: r });
    return o || d
        ? (0, n.jsx)("div", { className: id.mD })
        : (0, n.jsx)(H.m, {
              text: u,
              ariaHidden: !0,
              children: (0, n.jsxs)(B.D, {
                  className: iA.c9,
                  onClick: l,
                  "aria-label": u,
                  children: [
                      (0, n.jsx)(ia.A, {
                          className: iA.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(ts.p, { size: "md", className: iA.Xv, color: K.A.colors.WHITE }),
                  ],
              }),
          });
}
function iE(e) {
    let { userId: t, games: i, onDismiss: l, onClick: s, className: a } = e,
        o = (0, ij.GV)();
    return (0, n.jsxs)("aside", {
        className: r()(iA.kL, a),
        "aria-labelledby": o,
        children: [
            (0, n.jsxs)("div", {
                className: iA.wx,
                children: [
                    (0, n.jsx)(B.D, {
                        className: iA.r,
                        "aria-label": eA.intl.string(eA.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(tR.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(iI.D, {
                        id: o,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: eA.intl.string(eA.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: iA.Vg,
                children: i.map((e) => {
                    let { gameId: i } = e;
                    return (0, n.jsx)(
                        "li",
                        { children: (0, n.jsx)(iv, { onClick: () => s(i), userId: t, gameId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}
function iS(e) {
    let { widgetType: t, ...i } = e,
        { games: s, onAddGame: r } = y(t),
        { setExpanded: a } = tJ(),
        { trackUserProfileEditAction: o } = (0, eW.NJ)(),
        d = l.useCallback(
            (e) => {
                r(e),
                    a(!0),
                    (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [r, t, o, a],
        );
    return (0, n.jsx)(iE, { games: s, onClick: d, ...i });
}
var iC = i(344287);
function ib(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case N.x.FAVORITE_GAMES:
            return (0, n.jsx)(ie, { widget: t, ...i });
        case N.x.CURRENT_GAMES:
            return (0, n.jsx)(t4, { widget: t, ...i });
        case N.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(ip, { widget: t, ...i });
        case N.x.PLAYED_GAMES:
            return (0, n.jsx)(ih, { widget: t, ...i });
        default:
            return null;
    }
}
function iN(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, ...o } = e,
        { setExpanded: d } = tJ(),
        { shouldShowSuggestions: u, handleDismissSuggestions: c } = (function (e) {
            let [t, i] = l.useState(!1),
                n = e.type,
                s = (0, a.bG)([tD.default, tG.A], () => {
                    let e = tD.default.getId();
                    if (null == e) return !1;
                    let t = tG.A.getUserProfile(e);
                    return (t?.widgets ?? []).some((e) => e.type === n);
                }),
                r = (0, W.uA)(e);
            return {
                shouldShowSuggestions: !s && !t && !r,
                handleDismissSuggestions: l.useCallback(() => {
                    i(!0);
                }, []),
            };
        })(t),
        g = s && !r,
        m = g && u,
        x = (0, W.L)(t),
        f = (0, W.FM)(t, { showEditingControls: g }),
        h = (0, W.uA)(t),
        p = 1 === (0, W.cv)(t.type);
    return (0, n.jsx)(ib, {
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
                          tK,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => d(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, n.jsx)(iS, { userId: i.id, widgetType: t.type, onDismiss: c, className: iC.r }),
        ...o,
    });
}
function iT(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(tq, { widgetType: t.type, children: (0, n.jsx)(iN, { widget: t, ...i }) });
}
var iw = i(271383),
    ik = i(94160),
    iy = i(96173),
    iR = i(788259),
    iO = i(902394);
function i_(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: s } = (0, eW.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        u = (0, a.bG)([tG.A], () => tG.A.getUserProfile(t)?.fetchError != null, [t]),
        [c, g] = eq(!u),
        m = (0, iy.A)();
    return (
        l.useEffect(() => {
            r.current || u || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [u, i]),
        (0, n.jsxs)("div", {
            className: iO.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: iO.FS,
                    children: [
                        (0, n.jsx)(iI.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: eA.intl.string(eA.t["oqalC+"]),
                        }),
                        (0, n.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: u ? eA.intl.string(eA.t["+W59o5"]) : eA.intl.string(eA.t.O9SQ1c),
                        }),
                    ],
                }),
                !u &&
                    (0, n.jsx)("ul", {
                        className: iO.ZW,
                        "aria-label": eA.intl.string(eA.t["+EIBSA"]),
                        children: m.map((e) =>
                            (0, n.jsx)(
                                "li",
                                {
                                    ref: e.type === N.x.PERSONAL ? o : void 0,
                                    children: (0, n.jsx)(iR.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
                !u && (0, n.jsx)(eJ, { targetElementRef: o, isVisible: c, markAsDismissed: g }),
            ],
        })
    );
}
var iL = i(456620);
function iP(e) {
    let { widget: t, ...i } = e;
    return t instanceof f.R
        ? (0, n.jsx)(L.A, { widget: t, ...i })
        : t instanceof I.Tu
          ? (0, n.jsx)(eD, { widget: t, ...i })
          : (0, p.fu)(t)
            ? (0, n.jsx)(iT, { widget: t, ...i })
            : t instanceof h.k
              ? (0, n.jsx)(tb, { widget: t, ...i })
              : null;
}
function iD() {
    return (0, n.jsxs)("div", {
        className: iL.mJ,
        children: [
            (0, n.jsx)(o.m, { size: "xs" }),
            (0, n.jsx)(d.E, {
                "aria-label": eA.intl.string(eA.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: eA.intl.string(eA.t["7blcz6"]),
            }),
        ],
    });
}
function iG(e) {
    let { user: t, guildId: i, channelId: s } = e,
        r = (0, O.A)(t.id),
        o = (0, _.A)(t.id),
        d = (function () {
            let [e, t] = (0, a.yK)([x.A], () => [x.A.ipCountryCode, x.A.ipCountryCodeRequest]),
                i = (0, g.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && i && (0, c.xe)();
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
                        children: [(0, n.jsx)(e$, { className: iL.cG }), d && (0, n.jsx)(iD, {}), (0, n.jsx)(tL, {})],
                    }),
                r.map((e, l) =>
                    (0, n.jsx)(
                        iP,
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
        (0, u.A)(i);
        let { data: n, refetch: s } = (0, m.P)(e),
            r = l.useRef(null !== n);
        l.useEffect(() => {
            r.current && ((r.current = !1), s());
        }, [s]);
    })(t.id, j),
    h)
        ? (0, n.jsx)(i_, { userId: t.id })
        : o
          ? (0, n.jsx)(e0.D, { children: A() })
          : A();
}
function iM(e) {
    let { user: t, ...i } = e,
        s = l.useRef(null);
    (0, R.i)({ containerRef: s });
    let a = (0, iw.k)(t.id);
    return (0, n.jsxs)(ik.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(iL.XG, { [iL.az]: a }),
        fade: !0,
        children: [(0, n.jsx)(tP.A, { scrollerRef: s }), (0, n.jsx)(iG, { user: t, ...i })],
    });
}
