i.d(t, { A: () => iP, u: () => iO });
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
    return { gameIds: s, games: d, onAddGame: r };
}
var R = i(600761),
    O = i(667049),
    L = i(579950),
    _ = i(605694),
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
            growWidth: c,
            disableMarkdown: u,
        } = e,
        g = l.useCallback((e) => o(e.trim()), [o]),
        m = (0, er.TX)({ value: i, onCommit: g }),
        x =
            "" === i.trim()
                ? null
                : (0, n.jsx)(eo, { interactive: !1, className: t, variant: r, color: a, value: i, disableMarkdown: u });
    return (0, n.jsx)(er.yV, {
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
function ec(e) {
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
var eu = i(326009),
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
    let { className: t, value: i, placeholder: s, variant: r, color: a, onCommit: o, maxLength: d, maxRows: c } = e,
        u = l.useCallback((e) => o(e.trim()), [o]),
        g = (0, em.Ww)({ value: i, onCommit: u }),
        m =
            "" === i.trim()
                ? null
                : (0, n.jsx)(ef, { interactive: !1, className: t, variant: r, color: a, value: i, maxRows: c });
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
    ej = i(375708),
    ev = i(442461);
function eA() {
    return (0, n.jsx)(H.m, {
        text: ej.intl.string(ej.t.mZddSK),
        children: (0, n.jsxs)(B.D, {
            className: ev.YN,
            "aria-label": ej.intl.string(ej.t.mZddSK),
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
function eE(e) {
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
            (0, n.jsx)(eu.A, {
                className: ev.Sl,
                canEdit: l,
                userId: t,
                image: i,
                previewUri: s,
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
                          "aria-label": ej.intl.string(ej.t.RyK5Ww),
                          onClick: o,
                      }),
                  })
                : null,
        ],
    });
}
function eS(e) {
    let { userId: t, section: i, sectionIndex: s, canEdit: a } = e,
        [o, d] = l.useState(null),
        c = l.useRef(!1),
        u = null != o;
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
        (c.current = !1), d(null), g((e) => ({ ...e, image: void 0 }));
    }
    function h(e) {
        (c.current = !0), d(e);
    }
    function p(e) {
        c.current && ((c.current = !1), d(null), null != e && g((t) => ({ ...t, image: e })));
    }
    function j() {
        (0, W.AD)((e) => new I.Tu({ ...e, sections: e.sections.filter((e, t) => t !== s) }));
    }
    let v = null != i.image || u,
        A = v || a;
    return (0, n.jsx)(q.N, {
        theme: v ? eI.NJ8.DARK : void 0,
        children: (e) =>
            (0, n.jsxs)("div", {
                className: r()(ev.kL, { [ev.Vp]: A }, e),
                children: [
                    a || null != i.image
                        ? (0, n.jsx)(eE, {
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
                              className: ev.kI,
                              children: (0, n.jsx)(H.m, {
                                  text: ej.intl.string(ej.t.g2jVww),
                                  children: (0, n.jsx)(X.K, {
                                      icon: Y.u,
                                      size: "sm",
                                      variant: "overlay-secondary",
                                      "aria-label": ej.intl.string(ej.t.g2jVww),
                                      onClick: j,
                                  }),
                              }),
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        className: r()(ev.hQ, e, { [ev.Vp]: A }),
                        children: [
                            v ? (0, n.jsx)("div", { className: ev.cw }) : null,
                            (0, n.jsx)(ec, {
                                canEdit: a,
                                growWidth: !0,
                                variant: "heading-xl/semibold",
                                color: "text-default",
                                value: i.title,
                                placeholder: ej.intl.string(ej.t.KqCDvK),
                                onCommit: m,
                                maxLength: 100,
                            }),
                            (0, n.jsx)(ep, {
                                canEdit: a,
                                variant: "text-sm/medium",
                                color: "text-default",
                                value: i.subtitle,
                                placeholder: ej.intl.string(ej.t.k8zZFd),
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
var eC = i(750943),
    eb = i(335225);
function eN(e) {
    let { onClick: t } = e;
    return (0, n.jsxs)(B.D, {
        onClick: t,
        className: eb.cR,
        children: [
            (0, n.jsx)(eC.X, { size: "xs", color: K.A.colors.ICON_SUBTLE }),
            (0, n.jsx)(d.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: ej.intl.string(ej.t["9AY+/x"]),
            }),
        ],
    });
}
function eT(e) {
    let { index: t, userId: i, field: s, canEdit: r, onFieldChange: a, onFieldRemove: o } = e,
        [d, c] = l.useState(null),
        u = l.useRef(!1),
        g = r ? !0 !== s.hideImage : null != s.image;
    return (0, n.jsxs)("div", {
        className: eb.ez,
        children: [
            g
                ? (0, n.jsxs)("div", {
                      className: eb.tF,
                      children: [
                          (0, n.jsx)(eu.A, {
                              className: eb.k9,
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
                                    className: eb.ij,
                                    children: (0, n.jsx)(H.m, {
                                        text: ej.intl.string(ej.t.RyK5Ww),
                                        children: (0, n.jsx)(X.K, {
                                            size: "sm",
                                            icon: Y.u,
                                            "aria-label": ej.intl.string(ej.t.RyK5Ww),
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
                className: eb.oT,
                children: [
                    (0, n.jsx)(ec, {
                        canEdit: r,
                        variant: "text-sm/medium",
                        color: "text-default",
                        value: s.title,
                        placeholder: ej.intl.formatToPlainString(ej.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            a(s.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 50,
                    }),
                    (0, n.jsx)(ec, {
                        canEdit: r,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        value: s.description,
                        placeholder: ej.intl.formatToPlainString(ej.t.Hs14K3, { number: t + 1 }),
                        onCommit: function (e) {
                            a(s.key, (t) => ({ ...t, description: e }));
                        },
                        maxLength: 100,
                    }),
                ],
            }),
            r
                ? (0, n.jsxs)("div", {
                      className: eb.Ms,
                      children: [
                          g
                              ? null
                              : (0, n.jsx)(H.m, {
                                    text: ej.intl.string(ej.t.i3vRzP),
                                    children: (0, n.jsx)(X.K, {
                                        size: "sm",
                                        icon: eC.X,
                                        "aria-label": ej.intl.string(ej.t.i3vRzP),
                                        onClick: function () {
                                            a(s.key, (e) => ({ ...e, hideImage: void 0 }));
                                        },
                                    }),
                                }),
                          (0, n.jsx)(H.m, {
                              text: ej.intl.string(ej.t.g2jVww),
                              children: (0, n.jsx)(X.K, {
                                  size: "sm",
                                  icon: Y.u,
                                  "aria-label": ej.intl.string(ej.t.g2jVww),
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
function ew(e) {
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
        (0, n.jsx)(eT, { index: i, userId: t, field: e, canEdit: s, onFieldChange: a, onFieldRemove: o }, e.key),
    );
    return (s &&
        i.fields.length < 4 &&
        d.push(
            (0, n.jsx)(
                eN,
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
        : (0, n.jsx)("div", { className: eb.kL, children: d });
}
var ek = i(202541),
    ey = i(396395);
let eR = { section: eI.JJy.PERSONAL_WIDGET };
function eO(e) {
    let { widget: t, canEdit: i } = e;
    return (0, n.jsxs)("div", {
        className: ey.wx,
        children: [
            (0, n.jsx)(D.t, { size: "xs" }),
            (0, n.jsx)(ec, {
                canEdit: i,
                variant: "text-sm/medium",
                color: "text-default",
                value: t.header,
                placeholder: ej.intl.string(ej.t.fjSaAm),
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
            return (0, n.jsx)(eS, { userId: t, section: i, sectionIndex: l, canEdit: s });
        case P.K.FIELDS:
            return (0, n.jsx)(ew, { userId: t, section: i, sectionIndex: l, canEdit: s });
    }
}
function e_() {
    return (0, a.bG)([U.default], () => F.Ay.isPremium(U.default.getCurrentUser(), ek.PremiumTypes.TIER_2))
        ? null
        : (0, n.jsxs)("div", {
              className: ey.hc,
              children: [
                  (0, n.jsx)(G.h, { color: "nitro-pink", className: ey.Sp, offsetBottom: -2 }),
                  (0, n.jsx)(d.E, {
                      variant: "text-xs/medium",
                      color: "text-default",
                      className: ey.rh,
                      children: ej.intl.string(ej.t.xIJpoK),
                  }),
                  (0, n.jsx)(M.A, {
                      size: "sm",
                      subscriptionTier: ek.pe.TIER_2,
                      defaultTextOverride: ej.intl.string(ej.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eR,
                  }),
              ],
          });
}
function eP(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, index: a, trailingContent: o } = e,
        d = s && !0 !== r,
        c = l.useMemo(() => t.sections.some((e) => e.type === P.K.COVER), [t.sections]);
    return (0, n.jsx)(V.A, {
        userId: i.id,
        widget: t,
        allowEditing: s,
        disableInteraction: r,
        index: a,
        trailingContent: o,
        className: ey.Nr,
        headerClassName: ey.JE,
        children: (0, n.jsxs)("div", {
            className: ey.kL,
            children: [
                (0, n.jsx)(eO, { widget: t, canEdit: d }),
                d && !c ? (0, n.jsx)(eA, {}) : null,
                t.sections.map((e, t) => (0, n.jsx)(eL, { userId: i.id, section: e, sectionIndex: t, canEdit: d }, t)),
                (0, n.jsx)(e_, {}),
            ],
        }),
    });
}
var eD = i(192308),
    eG = i(821609),
    eM = i(307301),
    eU = i(183555),
    eF = i(554146),
    eW = i(43105),
    eV = i(131607),
    eH = i(465318),
    eB = i(49999);
function ez() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        [t, i] = l.useState(!1);
    l.useEffect(() => {
        let e = setTimeout(() => i(!0), 250);
        return () => clearTimeout(e);
    }, []);
    let n = eH.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [s, r] = (0, eV.kn)(e && t && n ? [eF.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [s === eF.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, r];
}
function eK(e) {
    let { targetElementRef: t, isVisible: i, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, eU.NJ)();
    return i
        ? (0, n.jsx)(eW.A, {
              targetElementRef: t,
              position: "left",
              title: ej.intl.string(ej.t.KKGxNt),
              body: ej.intl.string(ej.t["IS+QTV"]),
              onRequestClose: () => l(eB.i.USER_DISMISS),
              actions: [
                  {
                      text: ej.intl.string(ej.t.RCy7Px),
                      onClick: function () {
                          let e = (0, I.g0)();
                          (0, W.Y5)(e), s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() });
                      },
                  },
              ],
          })
        : null;
}
var eX = i(964828);
function eY(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, eU.NJ)(),
        a = l.useRef(null),
        [o, c] = ez(),
        u = l.useCallback(() => {
            o && c(eB.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, eD.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([i.e("8888"), i.e("22420"), i.e("26623")]).then(
                            i.bind(i, 850370),
                        );
                        return (t) => (0, n.jsx)(e, { ...t, trackUserProfileEditAction: s });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [s, o, c]);
    return (0, n.jsxs)("div", {
        className: r()(eX.w, t),
        children: [
            (0, n.jsx)(d.E, {
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: ej.intl.string(ej.t.OYlggR),
            }),
            (0, n.jsx)(eG.$, {
                icon: eM.j,
                text: ej.intl.string(ej.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: u,
                buttonRef: a,
            }),
            (0, n.jsx)(eK, { targetElementRef: a, isVisible: o, markAsDismissed: c }),
        ],
    });
}
var eq = i(192),
    eJ = i(793574),
    eZ = i(111994),
    eQ = i(607470),
    e$ = i(590251),
    e0 = i(530059);
function e1(e) {
    let { item: t, size: i } = e,
        l = "exporting" === t.status,
        s = "uploading" === t.status ? Math.round(100 * t.progress) : 25;
    return (0, n.jsx)("div", {
        className: r()(e0.ring, e0[i], { [e0.indeterminate]: l }),
        role: "progressbar",
        "aria-label": ej.intl.string(ej.t.RFRuwZ),
        "aria-valuenow": l ? void 0 : s,
        children: (0, n.jsx)(e$.a, {
            percent: s,
            strokeSize: e$.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var e8 = i(213879);
function e2(e) {
    let { item: t, ringSize: i, className: l } = e,
        s = "exporting" === t.status || "uploading" === t.status,
        a = r()(e8.Gt, { [e8.ob]: s });
    return (0, n.jsxs)("div", {
        className: r()(e8.$_, l),
        children: [
            "saved" === t.status
                ? null != t.videoURL
                    ? (0, n.jsx)(eQ.A, { src: t.videoURL, preload: "metadata", muted: !0, className: a })
                    : null
                : (0, n.jsx)("img", { src: t.thumbnail, alt: "", className: a, loading: "lazy" }),
            s && (0, n.jsx)(e1, { item: t, size: i }),
        ],
    });
}
var e7 = i(3026),
    e5 = i(22231);
i(600253);
var e3 = i(998809);
function e6(e) {
    let { value: t, isPlaceholder: i = !1 } = e;
    return (0, n.jsx)(d.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(e3.Qw, { [e3.qf]: i }),
        children: (0, n.jsx)(e7.A, { children: t }),
    });
}
function e9(e) {
    let { clipId: t, title: i } = e,
        { trackUserProfileEditAction: s } = (0, eU.NJ)(),
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
        d = ej.intl.string(ej.t["2gwc+H"]);
    return (0, n.jsx)(er.yV, {
        ...o,
        size: "compact",
        removeVerticalPadding: !0,
        className: r()(e3.ZZ, { [e3.Dy]: o.isEditing }),
        preview: (0, n.jsxs)("span", {
            className: r()(e3.$, e3.TG),
            children: [
                (0, n.jsx)(e5.R, { size: "xxs", color: "currentColor", className: e3.wz }),
                "" === i.trim() ? (0, n.jsx)(e6, { value: d, isPlaceholder: !0 }) : (0, n.jsx)(e6, { value: i }),
            ],
        }),
        placeholder: d,
        editButtonAriaLabel: ej.intl.string(ej.t.PDnM11),
        label: ej.intl.string(ej.t.PDnM11),
        maxLength: 200,
    });
}
function e4(e) {
    let { clipId: t, title: i, allowEditing: l } = e,
        s = null != i && "" !== i.trim();
    return l || s
        ? l
            ? (0, n.jsx)(e9, { clipId: t, title: i ?? "" })
            : (0, n.jsx)("span", { className: e3.$, children: (0, n.jsx)(e6, { value: i ?? "" }) })
        : null;
}
var te = i(663341),
    tt = i(765178),
    ti = i(691540),
    tn = i(857250),
    tl = i(97483),
    ts = i(693117),
    tr = i(195880),
    ta = i(696016);
let to = (0, b.v)(() => ({ localClips: new Map() }));
function td(e, t) {
    to.setState((i) => ({ localClips: new Map(i.localClips).set(e, t) }));
}
function tc(e) {
    to.setState((t) => {
        let i = new Map(t.localClips);
        return i.delete(e), { localClips: i };
    });
}
async function tu(e, t) {
    if (!to.getState().localClips.has(e.id)) {
        if (null == e.applicationId) return void (0, ti.P0)((0, tn.o)(ej.intl.string(ej.t.xcLXWy), tl.Ck.FAILURE));
        td(e.id, { status: "exporting", clip: e });
        try {
            let i = await (0, ts.VO)(e, { analyticsLocations: t });
            td(e.id, { status: "uploading", clip: e, progress: 0 });
            let n = new File([i], "clip.mp4", { type: "video/mp4" }),
                l = await A.A.uploadWidgetClip(n, {
                    onProgress: (t) => {
                        var i;
                        return (
                            (i = e.id),
                            void to.setState((e) => {
                                let n = e.localClips.get(i);
                                return n?.status !== "uploading"
                                    ? e
                                    : { localClips: new Map(e.localClips).set(i, { ...n, progress: t }) };
                            })
                        );
                    },
                });
            td(e.id, { status: "uploaded", clip: e, uploadFilename: l }),
                (0, W.XW)({
                    status: "pending",
                    id: (0, tr.m)(),
                    sourceClipId: e.id,
                    gameId: e.applicationId,
                    title: e.name,
                    uploadFilename: l,
                });
        } catch (t) {
            tc(e.id),
                ta.nx.error("Failed to upload a clip for the clips gallery widget", t),
                (0, ti.P0)((0, tn.o)(ej.intl.string(ej.t.iufib1), tl.Ck.FAILURE));
        }
    }
}
function tg(e) {
    let { widgetClipId: t, sourceClipId: i, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eU.NJ)(),
        r = ej.intl.string(ej.t.ib6Mgx);
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
                        null != i && tc(i),
                        tt.O.announce(ej.intl.string(ej.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: N.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var tm = i(547193);
function tx(e) {
    let { items: t, selectedKey: i, onSelect: l, onAddClip: s, allowRemoving: a = !1 } = e,
        o = Math.max(0, 4 - t.length);
    return (0, n.jsxs)("ul", {
        className: tm.Xm,
        children: [
            t.map((e, t) =>
                (0, n.jsxs)(
                    "li",
                    {
                        className: tm.NI,
                        children: [
                            (0, n.jsx)(B.D, {
                                className: r()(tm.Vs, { [tm.wH]: e.key === i }),
                                "aria-pressed": e.key === i,
                                "aria-label": ej.intl.formatToPlainString(ej.t.zrtAwA, { clipNumber: t + 1 }),
                                onClick: () => l(e.key),
                                children: (0, n.jsx)(e2, { item: e, ringSize: "sm", className: tm.nC }),
                            }),
                            a &&
                                ("pending" === e.status || "saved" === e.status) &&
                                (0, n.jsx)(tg, {
                                    widgetClipId: e.key,
                                    sourceClipId: "pending" === e.status ? e.sourceClipId : void 0,
                                    className: tm.nM,
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
                            className: tm.NI,
                            children: (0, n.jsx)(B.D, {
                                className: tm.Yn,
                                "aria-label": ej.intl.string(ej.t.rI0i0a),
                                onClick: s,
                                children: (0, n.jsx)(te.p, { size: "sm", color: "currentColor" }),
                            }),
                        },
                        `empty-${t}`,
                    ),
                ),
        ],
    });
}
var tf = i(298149);
function th(e) {
    let { children: t } = e;
    return (0, n.jsxs)("div", {
        className: tf.Lw,
        children: [(0, n.jsx)("div", { className: tf.tB }), (0, n.jsx)("div", { className: tf.Qs, children: t })],
    });
}
var tp = i(465927);
function tI(e) {
    let { onClick: t } = e,
        i = ej.intl.string(ej.t.rI0i0a);
    return (0, n.jsx)(H.m, {
        text: i,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, n.jsx)(X.K, { variant: "secondary", size: "sm", icon: z.T, "aria-label": i, onClick: t }),
    });
}
function tj() {
    return (0, n.jsx)("div", {
        className: tp.p$,
        children: (0, n.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: ej.intl.format(ej.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tv(e) {
    var t;
    let s,
        { widget: r, user: a, allowEditing: o, disableInteraction: d, ...c } = e,
        [u, g] = l.useState(null),
        m =
            ((t = a.id),
            (s = to((e) => e.localClips)),
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
            (0, eD.openModalLazy)(
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
                            initialMainLink: eZ.oH.ALL_CLIPS,
                            onClipClick: (e) => {
                                ((e) => tu(e, [eJ.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                            },
                        });
                },
                { modalKey: ta.nm },
            );
        }, []);
    return (0, n.jsx)(V.A, {
        userId: a.id,
        widget: r,
        allowEditing: o,
        disableInteraction: d,
        className: tp.kL,
        headerTitle: (0, W.L)(r),
        headerActionButtons: x && f ? [(0, n.jsx)(tI, { onClick: I }, "clips-gallery-add-clip")] : void 0,
        ...c,
        children:
            null != p
                ? (0, n.jsxs)("div", {
                      className: tp.nV,
                      children: [
                          (0, n.jsxs)("div", {
                              className: tp.aM,
                              children: [
                                  (0, n.jsx)(e2, { item: p, ringSize: "lg", className: tp.VH }),
                                  (0, n.jsx)(th, {
                                      children:
                                          ("saved" === p.status || "pending" === p.status) &&
                                          (0, n.jsx)(e4, { clipId: p.key, title: p.title, allowEditing: x }),
                                  }),
                              ],
                          }),
                          (0, n.jsx)(tx, {
                              items: m,
                              selectedKey: p.key,
                              onSelect: g,
                              onAddClip: x && !h ? I : void 0,
                              allowRemoving: x,
                          }),
                      ],
                  })
                : (0, n.jsx)(tj, {}),
    });
}
var tA = i(704824),
    tE = i(382483),
    tS = i(385113),
    tC = i(334074),
    tb = i(657718),
    tN = i(789645),
    tT = i(478016),
    tw = i(384377),
    tk = i(518477);
function ty(e) {
    let { user: t, application: i, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eU.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: i.id }), [i.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, W.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, tw.XA)(tk.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, n.jsx)(_.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, n.jsx)(_.A.Cta, {
            showSuggestedForYou: !0,
            heading: ej.intl.format(ej.t.OIzLCy, { applicationName: i.name }),
            content: ej.intl.format(ej.t.BQySru, { applicationName: i.name }),
            buttons: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(H.m, {
                        text: ej.intl.string(ej.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, n.jsx)(tb.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tN.P,
                            "aria-label": ej.intl.string(ej.t.WAI6xu),
                            onClick: () => {
                                s(eB.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(H.m, {
                        text: ej.intl.string(ej.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)(tb.S, {
                            variant: "primary",
                            size: "sm",
                            icon: tT.U,
                            "aria-label": ej.intl.formatToPlainString(ej.t.KfGahB, { applicationName: i.name }),
                            onClick: () => {
                                s(eB.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function tR() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: i,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([tS.A], () => tS.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, tE.Wq)();
        }, []);
        let t = (0, a.bG)([U.default], () => U.default.getCurrentUser()),
            i = (0, c.A)(e),
            { tokens: n, fetched: s } = (0, tA.j)(e),
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
            { eligibleToShow: u, markAsDismissed: g } = (0, tC.hj)({
                applications: d,
                dismissibleContent: eF.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: tC.SH,
            }),
            m = l.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = i[0];
    return null == r ? null : (0, n.jsx)(ty, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var tO = i(128988),
    tL = i(280450),
    t_ = i(321191),
    tP = i(896170),
    tD = i(922016),
    tG = i(305866),
    tM = i(732771),
    tU = i(321108),
    tF = i(383329),
    tW = i(250573);
function tV(e) {
    let { widgetType: t, widget: i, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(i.games.map((e) => e.gameId)), [i.games]),
        { trackUserProfileEditAction: d } = (0, eU.NJ)(),
        [c, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, tF.R)({ query: c }),
        f = c.trim().length > 0,
        { gameIds: h, onAddGame: p } = y(t),
        I = (0, tU.A)(h),
        j = l.useCallback(
            (e) => {
                (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    tt.O.announce(ej.intl.string(ej.t.q0U3DE)),
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
            let t = I.filter((e) => !o.has(e.id) && (0, W.XX)(e)).map((e) => ({
                    id: String(e.id),
                    value: String(e.id),
                    label: e.name,
                    disabled: !1,
                })),
                i = new Set(t.map((e) => e.id));
            return [...t, ...[...e.values()].filter((e) => !i.has(e.id))];
        }, [m, o, I, f]),
        A = l.useCallback((e) => e, []),
        E = l.useMemo(() => ({ ...x, threshold: tP.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        S = l.useCallback((e) => (f || "" === e.trim() ? v.length : (0, tP.Ht)(v, e, E).length), [f, v, E]),
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
    return (0, n.jsx)(tD.Y, {
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
            return (0, n.jsx)(tG.l, {
                className: tW.C,
                "aria-label": ej.intl.string(ej.t.uqw8wK),
                children: (0, n.jsxs)(tM.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: v,
                    matchSorterOptions: E,
                    customMatchSorter: f ? A : void 0,
                    children: [
                        (0, n.jsx)(tM.a3, {
                            label: ej.intl.string(ej.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: ej.intl.string(ej.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: C,
                        }),
                        (0, n.jsx)(tM.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function tH(e) {
    let { disabled: t, ...i } = e,
        s = l.useRef(null);
    return (0, n.jsx)(tV, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(H.m, {
                text: ej.intl.string(ej.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(X.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: z.T,
                    "aria-label": ej.intl.string(ej.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function tB(e) {
    let t = l.useRef(null);
    return (0, n.jsx)(tV, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(B.D, {
                innerRef: t,
                className: tW.c,
                "aria-label": ej.intl.string(ej.t.PYyENc),
                ...e,
                children: (0, n.jsx)(te.p, { color: "currentColor" }),
            }),
    });
}
let tz = l.createContext(null);
function tK(e) {
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
    return (0, n.jsx)(tz.Provider, { value: { expanded: r, setExpanded: o }, children: i });
}
function tX() {
    let e = l.useContext(tz);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var tY = i(308685);
function tq(e) {
    let { widget: t } = e,
        i = (0, W.cv)(t.type),
        l = 1 === i,
        s = l ? ej.intl.string(ej.t["3FdPBT"]) : ej.intl.format(ej.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: l ? tY.O : tY.k,
        children: [
            l && (0, n.jsx)(tB, { widget: t, widgetType: t.type }),
            (0, n.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var tJ = i(823016),
    tZ = i(683071),
    tQ = i(116363);
function t$(e) {
    let { widgetType: t, gameCount: i } = e,
        l = (0, W.cv)(t);
    return i <= l
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: tQ.l,
              children: (0, n.jsx)(tZ.w, {
                  type: "warning",
                  children: ej.intl.formatToPlainString(ej.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var t0 = i(17110);
function t1(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(B.D, {
        onClick: t,
        className: t0.x,
        "aria-expanded": i,
        children: (0, n.jsx)(d.E, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? ej.intl.string(ej.t["6MwJo/"]) : ej.intl.string(ej.t.lBeKY2),
        }),
    });
}
var t8 = i(249264),
    t2 = i(462037);
function t7(e) {
    let { games: t, user: i, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tJ.r)();
    return (0, n.jsx)("ul", {
        className: t2.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(t8.A, {
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
function t5(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, eq.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tX(),
        c = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(t7, { ...e, games: c }),
                u && (0, n.jsx)(t1, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(t$, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tJ.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function t3(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(V.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(t5, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tq, { widget: i }),
    });
}
function t6(e) {
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
                ? (0, n.jsx)(t8.A, {
                      user: t,
                      widgetType: i.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tq, { widget: i }),
    });
}
var t9 = i(768754);
function t4(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: t9.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.gameId)),
    });
}
var ie = i(686246),
    it = i(201438),
    ii = i(451395),
    il = i(788593),
    is = i(858808),
    ir = i(350956),
    ia = i(466215);
function io(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, tJ.r)(),
        c = l.useRef(null);
    return (0, n.jsx)(ii.mG, {
        index: t,
        itemId: s.gameId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => c.current?.offsetWidth },
        "aria-label": ej.intl.formatToPlainString(ej.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, W.Un)(i, e, t),
        onEnd: () => d(s.gameId),
        className: ia.kL,
        dropBeforeClassName: ia.A,
        dropAfterClassName: ia.Ze,
        draggingClassName: ia.Id,
        children: (0, n.jsx)("div", { ref: c, className: ia.An, children: o }),
    });
}
function id(e) {
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
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, it.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tJ.r)(),
        x = s && !r,
        { isDragging: f } = (0, ie.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(il.A, {
                    imageSrc: c,
                    gameName: u,
                    gameId: t.gameId,
                    userId: i,
                    disableInteraction: r,
                    className: null == c || r ? void 0 : ir.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, n.jsx)(ii.jV, { buttonRef: m(t.gameId), className: ia.BU }),
                x && (0, n.jsx)(is.A, { game: t, widgetType: l, className: ia.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, n.jsx)("div", { className: ir.mD })
        : x
          ? (0, n.jsx)(io, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, n.jsx)("div", { className: ia.kL, children: h() });
}
function ic(e) {
    let { games: t, userId: i, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tJ.r)();
    return (0, n.jsx)(t4, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(id, {
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
function iu(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, eq.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tX(),
        c = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(ic, { ...e, games: c }),
                u && (0, n.jsx)(t1, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(t$, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tJ.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function ig(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(V.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(iu, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tq, { widget: i }),
    });
}
function im(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(V.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(iu, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tq, { widget: i }),
    });
}
var ix = i(297264),
    ih = i(915089),
    ip = i(30061);
function iI(e) {
    let { gameId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, it.A)(t),
        d = (0, a.bG)([E.A], () => E.A.suggestedFetchIsLoading),
        c = ej.intl.formatToPlainString(ej.t["3mb1s5"], { game: r });
    return o || d
        ? (0, n.jsx)("div", { className: ir.mD })
        : (0, n.jsx)(H.m, {
              text: c,
              ariaHidden: !0,
              children: (0, n.jsxs)(B.D, {
                  className: ip.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, n.jsx)(il.A, {
                          className: ip.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(te.p, { size: "md", className: ip.Xv, color: K.A.colors.WHITE }),
                  ],
              }),
          });
}
function ij(e) {
    let { userId: t, games: i, onDismiss: l, onClick: s, className: a } = e,
        o = (0, ih.GV)();
    return (0, n.jsxs)("aside", {
        className: r()(ip.kL, a),
        "aria-labelledby": o,
        children: [
            (0, n.jsxs)("div", {
                className: ip.wx,
                children: [
                    (0, n.jsx)(B.D, {
                        className: ip.r,
                        "aria-label": ej.intl.string(ej.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(tN.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(ix.D, {
                        id: o,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: ej.intl.string(ej.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: ip.Vg,
                children: i.map((e) => {
                    let { gameId: i } = e;
                    return (0, n.jsx)(
                        "li",
                        { children: (0, n.jsx)(iI, { onClick: () => s(i), userId: t, gameId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}
function iv(e) {
    let { widgetType: t, ...i } = e,
        { games: s, onAddGame: r } = y(t),
        { setExpanded: a } = tX(),
        { trackUserProfileEditAction: o } = (0, eU.NJ)(),
        d = l.useCallback(
            (e) => {
                r(e),
                    a(!0),
                    (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [r, t, o, a],
        );
    return (0, n.jsx)(ij, { games: s, onClick: d, ...i });
}
var iA = i(344287);
function iE(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case N.x.FAVORITE_GAMES:
            return (0, n.jsx)(t6, { widget: t, ...i });
        case N.x.CURRENT_GAMES:
            return (0, n.jsx)(t3, { widget: t, ...i });
        case N.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(im, { widget: t, ...i });
        case N.x.PLAYED_GAMES:
            return (0, n.jsx)(ig, { widget: t, ...i });
        default:
            return null;
    }
}
function iS(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, ...o } = e,
        { setExpanded: d } = tX(),
        { shouldShowSuggestions: c, handleDismissSuggestions: u } = (function (e) {
            let [t, i] = l.useState(!1),
                n = e.type,
                s = (0, a.bG)([tL.default, t_.A], () => {
                    let e = tL.default.getId();
                    if (null == e) return !1;
                    let t = t_.A.getUserProfile(e);
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
        m = g && c,
        x = (0, W.L)(t),
        f = (0, W.FM)(t, { showEditingControls: g }),
        h = (0, W.uA)(t),
        p = 1 === (0, W.cv)(t.type);
    return (0, n.jsx)(iE, {
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
                          tH,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => d(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, n.jsx)(iv, { userId: i.id, widgetType: t.type, onDismiss: u, className: iA.r }),
        ...o,
    });
}
function iC(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(tK, { widgetType: t.type, children: (0, n.jsx)(iS, { widget: t, ...i }) });
}
var ib = i(271383),
    iN = i(94160),
    iT = i(96173),
    iw = i(788259),
    ik = i(902394);
function iy(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: s } = (0, eU.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        c = (0, a.bG)([t_.A], () => t_.A.getUserProfile(t)?.fetchError != null, [t]),
        [u, g] = ez(!c),
        m = (0, iT.A)();
    return (
        l.useEffect(() => {
            r.current || c || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [c, i]),
        (0, n.jsxs)("div", {
            className: ik.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: ik.FS,
                    children: [
                        (0, n.jsx)(ix.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: ej.intl.string(ej.t["oqalC+"]),
                        }),
                        (0, n.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: c ? ej.intl.string(ej.t["+W59o5"]) : ej.intl.string(ej.t.O9SQ1c),
                        }),
                    ],
                }),
                !c &&
                    (0, n.jsx)("ul", {
                        className: ik.ZW,
                        "aria-label": ej.intl.string(ej.t["+EIBSA"]),
                        children: m.map((e) =>
                            (0, n.jsx)(
                                "li",
                                {
                                    ref: e.type === N.x.PERSONAL ? o : void 0,
                                    children: (0, n.jsx)(iw.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
                !c && (0, n.jsx)(eK, { targetElementRef: o, isVisible: u, markAsDismissed: g }),
            ],
        })
    );
}
var iR = i(456620);
function iO(e) {
    let { widget: t, ...i } = e;
    return t instanceof f.R
        ? (0, n.jsx)(_.A, { widget: t, ...i })
        : t instanceof I.Tu
          ? (0, n.jsx)(eP, { widget: t, ...i })
          : (0, p.fu)(t)
            ? (0, n.jsx)(iC, { widget: t, ...i })
            : t instanceof h.k
              ? (0, n.jsx)(tv, { widget: t, ...i })
              : null;
}
function iL() {
    return (0, n.jsxs)("div", {
        className: iR.mJ,
        children: [
            (0, n.jsx)(o.m, { size: "xs" }),
            (0, n.jsx)(d.E, {
                "aria-label": ej.intl.string(ej.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: ej.intl.string(ej.t["7blcz6"]),
            }),
        ],
    });
}
function i_(e) {
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
                        children: [(0, n.jsx)(eY, { className: iR.cG }), d && (0, n.jsx)(iL, {}), (0, n.jsx)(tR, {})],
                    }),
                r.map((e, l) =>
                    (0, n.jsx)(
                        iO,
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
        ? (0, n.jsx)(iy, { userId: t.id })
        : o
          ? (0, n.jsx)(eq.D, { children: v() })
          : v();
}
function iP(e) {
    let { user: t, ...i } = e,
        s = l.useRef(null);
    (0, R.i)({ containerRef: s });
    let a = (0, ib.k)(t.id);
    return (0, n.jsxs)(iN.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(iR.XG, { [iR.az]: a }),
        fade: !0,
        children: [(0, n.jsx)(tO.A, { scrollerRef: s }), (0, n.jsx)(i_, { user: t, ...i })],
    });
}
