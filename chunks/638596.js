i.d(t, { A: () => iS, u: () => iA });
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
    T = i(540185),
    b = i(282435);
let N = (0, S.sampleSize)(b.sx, b.sx.length),
    w = (0, C.v)((e, t) => ({
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
            Object.values(T.x)))
                t().setNext(6, l);
        },
        setNext: (e, i) => {
            let n = t().getNext(e, i);
            t()._setGameIds(i, n);
            let l = t().peekNext(7, i);
            t()._setPeekedGameIds(i, l);
        },
        getNext: (e, i) => {
            let n = i === T.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack,
                l = n.slice(0, e),
                s = n.slice(e);
            return t()._setStack(i, s), l;
        },
        peekNext: (e, i) => (i === T.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).slice(0, e),
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
            let n = (i === T.x.WANT_TO_PLAY_GAMES ? t().wishlistStack : t().stack).filter((t) => t !== e);
            t()._setStack(i, n), t()._setPeekedGameIds(i, t().peekNext(7, i));
        },
        _setGameIds: (t, i) => {
            e((e) => ({ gameIds: { ...e.gameIds, [t]: i } }));
        },
        _setStack: (t, i) => {
            t === T.x.WANT_TO_PLAY_GAMES ? e({ wishlistStack: i }) : e({ stack: i });
        },
        _setPeekedGameIds: (t, i) => {
            e((e) => ({ peekedGameIds: { ...e.peekedGameIds, [t]: i } }));
        },
    }));
function y(e) {
    let { bump: t, bumpMultiple: i, gameIds: n } = w();
    !(function (e) {
        let { remove: t, peekedGameIds: i } = w(),
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
var k = i(600761),
    R = i(667049),
    O = i(389667),
    L = i(605694),
    _ = i(869484),
    P = i(403581),
    D = i(315629),
    G = i(465794),
    M = i(287809),
    U = i(158045),
    W = i(735321),
    F = i(623280),
    H = i(866665),
    V = i(939249),
    B = i(245604),
    z = i(43990),
    X = i(408278),
    K = i(241326),
    Y = i(448766),
    q = i(372638),
    J = i(761431),
    Q = i(892572);
function Z(e) {
    let { className: t, variant: i, color: l, value: s, maxLines: a, interactive: o = !0, disableMarkdown: c = !1 } = e,
        u = o ? Y.d : Y.j;
    return (0, n.jsx)(d.E, {
        className: r()(Q.YD, { [Q.Lq]: a > 1 }, t),
        variant: i,
        color: l,
        lineClamp: a,
        children: c ? s : u(s),
    });
}
function $(e) {
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
        m = (0, J.TX)({ value: t, onCommit: g }),
        x =
            "" === t.trim()
                ? null
                : (0, n.jsx)(Z, { interactive: !1, variant: s, color: r, value: t, maxLines: d, disableMarkdown: u }),
        f = {
            ...m,
            removeVerticalPadding: !0,
            growWidth: c || m.isEditing,
            preview: x,
            placeholder: i,
            editButtonAriaLabel: i,
            label: i,
            maxLength: o,
            className: Q.ZZ,
        };
    return 1 === d ? (0, n.jsx)(J.yV, { ...f, size: "compact" }) : (0, n.jsx)(q.f, { ...f, rows: 1, maxRows: d });
}
function ee(e) {
    return e.canEdit
        ? (0, n.jsx)($, { ...e })
        : "" === e.value.trim()
          ? null
          : (0, n.jsx)(Z, {
                variant: e.variant,
                color: e.color,
                value: e.value,
                maxLines: e.maxLines,
                disableMarkdown: e.disableMarkdown,
            });
}
var et = i(326009),
    ei = i(652215),
    en = i(339984),
    el = i(375708),
    es = i(148548);
function er() {
    return (0, n.jsx)(H.m, {
        text: el.intl.string(el.t.gQmDk4),
        children: (0, n.jsxs)(V.D, {
            className: es.YN,
            "aria-label": el.intl.string(el.t.gQmDk4),
            onClick: function () {
                (0, W.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
            },
            children: [
                (0, n.jsx)("div", { className: es.JD }),
                (0, n.jsx)("div", { className: es.xJ, children: (0, n.jsx)(B.U, { size: "sm" }) }),
                (0, n.jsx)("div", { className: es.JD }),
            ],
        }),
    });
}
function ea(e) {
    let { userId: t, section: i, sectionIndex: s, canEdit: a } = e,
        [o, d] = l.useState(null),
        c = l.useRef(!1),
        u = null != o;
    function g(e) {
        (0, W.AD)((t) => {
            let i = t.sections[s];
            if (i?.type !== _.K.COVER) return t;
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
    let A = null != i.image || u,
        v = A || a;
    return (0, n.jsx)(z.N, {
        theme: A ? ei.NJ8.DARK : void 0,
        children: (e) =>
            (0, n.jsxs)("div", {
                className: r()(es.kL, { [es.Vp]: v }, e),
                children: [
                    a || null != i.image
                        ? (0, n.jsx)("div", {
                              className: es.El,
                              children: (0, n.jsx)(et.A, {
                                  className: es.Sl,
                                  canEdit: a,
                                  userId: t,
                                  image: i.image,
                                  previewUri: o,
                                  uploadType: en.HL.PERSONAL_WIDGET_COVER,
                                  onImageUploadStarted: h,
                                  onImageUploadCompleted: p,
                              }),
                          })
                        : null,
                    a
                        ? (0, n.jsx)("div", {
                              className: es.DT,
                              children: (0, n.jsx)(H.m, {
                                  text: A ? el.intl.string(el.t.RyK5Ww) : el.intl.string(el.t.g2jVww),
                                  children: (0, n.jsx)(X.K, {
                                      icon: K.TrashIcon,
                                      size: "sm",
                                      variant: "overlay-secondary",
                                      "aria-label": A ? el.intl.string(el.t.RyK5Ww) : el.intl.string(el.t.g2jVww),
                                      onClick: A ? f : j,
                                  }),
                              }),
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        className: r()(es.hQ, e, { [es.Vp]: v }),
                        children: [
                            A ? (0, n.jsx)("div", { className: es.cw }) : null,
                            (0, n.jsx)(ee, {
                                canEdit: a,
                                growWidth: !0,
                                variant: "heading-xl/semibold",
                                color: "text-default",
                                value: i.title,
                                placeholder: el.intl.string(el.t.KqCDvK),
                                onCommit: m,
                                maxLength: 100,
                                maxLines: 2,
                            }),
                            (0, n.jsx)(ee, {
                                canEdit: a,
                                variant: "text-sm/medium",
                                color: "text-default",
                                value: i.subtitle,
                                placeholder: el.intl.string(el.t.k8zZFd),
                                onCommit: x,
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
var eo = i(750943),
    ed = i(661531),
    ec = i(603090);
function eu(e) {
    let { onClick: t } = e;
    return (0, n.jsxs)(V.D, {
        onClick: t,
        className: ec.cR,
        children: [
            (0, n.jsx)(eo.X, { size: "xs", color: ed.A.colors.ICON_SUBTLE }),
            (0, n.jsx)(d.E, {
                variant: "text-sm/medium",
                color: "text-muted",
                children: el.intl.string(el.t["9AY+/x"]),
            }),
        ],
    });
}
function eg(e) {
    let { index: t, userId: i, field: s, canEdit: r, onFieldChange: a, onFieldRemove: o } = e,
        [d, c] = l.useState(null),
        u = l.useRef(!1),
        g = r ? !0 !== s.hideImage : null != s.image;
    return (0, n.jsxs)("div", {
        className: ec.ez,
        children: [
            g
                ? (0, n.jsxs)("div", {
                      className: ec.tF,
                      children: [
                          (0, n.jsx)(et.A, {
                              className: ec.k9,
                              canEdit: r,
                              userId: i,
                              image: s.image,
                              previewUri: d,
                              uploadType: en.HL.PERSONAL_WIDGET_FIELD,
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
                                    className: ec.ij,
                                    children: (0, n.jsx)(H.m, {
                                        text: el.intl.string(el.t.RyK5Ww),
                                        children: (0, n.jsx)(X.K, {
                                            size: "sm",
                                            variant: "overlay-secondary",
                                            icon: K.TrashIcon,
                                            "aria-label": el.intl.string(el.t.RyK5Ww),
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
                className: ec.oT,
                children: [
                    (0, n.jsx)(ee, {
                        canEdit: r,
                        variant: "text-sm/medium",
                        color: "text-default",
                        value: s.title,
                        placeholder: el.intl.formatToPlainString(el.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            a(s.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 50,
                        maxLines: 2,
                    }),
                    (0, n.jsx)(ee, {
                        canEdit: r,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        value: s.description,
                        placeholder: el.intl.formatToPlainString(el.t.Hs14K3, { number: t + 1 }),
                        onCommit: function (e) {
                            a(s.key, (t) => ({ ...t, description: e }));
                        },
                        maxLength: 100,
                        maxLines: 4,
                    }),
                ],
            }),
            r
                ? (0, n.jsxs)("div", {
                      className: ec.Ms,
                      children: [
                          g
                              ? null
                              : (0, n.jsx)(H.m, {
                                    text: el.intl.string(el.t.i3vRzP),
                                    children: (0, n.jsx)(X.K, {
                                        size: "sm",
                                        variant: "overlay-secondary",
                                        icon: eo.X,
                                        "aria-label": el.intl.string(el.t.i3vRzP),
                                        onClick: function () {
                                            a(s.key, (e) => ({ ...e, hideImage: void 0 }));
                                        },
                                    }),
                                }),
                          (0, n.jsx)(H.m, {
                              text: el.intl.string(el.t.g2jVww),
                              children: (0, n.jsx)(X.K, {
                                  size: "sm",
                                  variant: "overlay-secondary",
                                  icon: K.TrashIcon,
                                  "aria-label": el.intl.string(el.t.g2jVww),
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
function em(e) {
    let { userId: t, section: i, sectionIndex: l, canEdit: s } = e;
    function r(e) {
        (0, W.AD)((t) => {
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
        (0, n.jsx)(eg, { index: i, userId: t, field: e, canEdit: s, onFieldChange: a, onFieldRemove: o }, e.key),
    );
    return (s &&
        i.fields.length < 4 &&
        d.push(
            (0, n.jsx)(
                eu,
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
        : (0, n.jsx)("div", { className: ec.kL, children: d });
}
var ex = i(202541),
    ef = i(877068);
let eh = { section: ei.JJy.PERSONAL_WIDGET };
function ep(e) {
    let { widget: t, canEdit: i } = e;
    return (0, n.jsxs)("div", {
        className: ef.wx,
        children: [
            (0, n.jsx)(P.t, { size: "xs", className: ef.nr }),
            (0, n.jsx)(ee, {
                canEdit: i,
                variant: "text-sm/medium",
                color: "text-default",
                value: t.header,
                placeholder: el.intl.string(el.t.fjSaAm),
                onCommit: function (e) {
                    (0, W.AD)((t) => new I.Tu({ ...t, header: e }));
                },
                maxLength: 100,
                maxLines: 1,
                disableMarkdown: !0,
            }),
        ],
    });
}
function eI(e) {
    let { userId: t, section: i, sectionIndex: l, canEdit: s } = e;
    switch (i.type) {
        case _.K.COVER:
            return (0, n.jsx)(ea, { userId: t, section: i, sectionIndex: l, canEdit: s });
        case _.K.FIELDS:
            return (0, n.jsx)(em, { userId: t, section: i, sectionIndex: l, canEdit: s });
    }
}
function ej() {
    return (0, a.bG)([M.default], () => U.Ay.isPremium(M.default.getCurrentUser(), ex.PremiumTypes.TIER_2))
        ? null
        : (0, n.jsxs)("div", {
              className: ef.hc,
              children: [
                  (0, n.jsx)(D.h, { color: "nitro-pink", className: ef.Sp, offsetBottom: -4 }),
                  (0, n.jsxs)("div", {
                      className: ef.LK,
                      children: [
                          (0, n.jsx)(d.E, {
                              variant: "text-xs/semibold",
                              color: "text-strong",
                              children: el.intl.string(el.t.WOPVdz),
                          }),
                          (0, n.jsx)(d.E, {
                              variant: "text-xs/medium",
                              color: "text-default",
                              children: el.intl.string(el.t["55tM3t"]),
                          }),
                      ],
                  }),
                  (0, n.jsx)(G.A, {
                      size: "sm",
                      subscriptionTier: ex.pe.TIER_2,
                      defaultTextOverride: el.intl.string(el.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eh,
                  }),
              ],
          });
}
function eA(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, index: a, trailingContent: o } = e,
        d = s && !0 !== r,
        c = l.useMemo(() => t.sections.some((e) => e.type === _.K.COVER), [t.sections]);
    return (0, n.jsx)(F.A, {
        userId: i.id,
        widget: t,
        allowEditing: s,
        disableInteraction: r,
        index: a,
        trailingContent: o,
        className: ef.Nr,
        headerClassName: ef.JE,
        children: (0, n.jsxs)("div", {
            className: ef.kL,
            children: [
                (0, n.jsx)(ep, { widget: t, canEdit: d }),
                d && !c ? (0, n.jsx)(er, {}) : null,
                t.sections.map((e, t) => (0, n.jsx)(eI, { userId: i.id, section: e, sectionIndex: t, canEdit: d }, t)),
                d ? (0, n.jsx)(ej, {}) : null,
            ],
        }),
    });
}
var ev = i(702841),
    eE = i(821609),
    eS = i(192308),
    eC = i(307301),
    eT = i(183555),
    eb = i(465318),
    eN = i(384377),
    ew = i(554146),
    ey = i(43105),
    ek = i(131607),
    eR = i(518477),
    eO = i(49999);
function eL() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = eb.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [i, n] = (0, ek.kn)(e && t ? [ew.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [i === ew.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, n];
}
function e_(e) {
    let { targetElementRef: t, isVisible: i, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, eT.NJ)();
    return i
        ? (0, n.jsx)(ey.A, {
              targetElementRef: t,
              position: "left",
              title: el.intl.string(el.t.KKGxNt),
              body: el.intl.string(el.t["IS+QTV"]),
              onRequestClose: () => l(eO.i.USER_DISMISS),
              actions: [
                  {
                      text: el.intl.string(el.t.RCy7Px),
                      onClick: function () {
                          let e = (0, I.g0)();
                          (0, W.Y5)(e),
                              s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, eN.XA)(eR.jM.WIDGET_ADDED);
                      },
                  },
              ],
          })
        : null;
}
var eP = i(410453);
function eD(e) {
    let { buttonRef: t, isCoachmarkVisible: i, markCoachmarkAsDismissed: s } = e,
        { trackUserProfileEditAction: r } = (0, eT.NJ)(),
        a = l.useCallback(() => {
            i && s(eO.i.TAKE_ACTION);
            let e = (0, I.g0)();
            (0, W.Y5)(e),
                r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, eN.XA)(eR.jM.WIDGET_ADDED);
        }, [r, i, s]);
    return (0, n.jsx)(eE.$, {
        icon: P.t,
        text: el.intl.string(el.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function eG(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, eT.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [c, u] = eL(),
        g = (function () {
            let e = (0, ev.bG)([M.default], () => M.default.getCurrentUser()?.id),
                t = (0, R.A)(e),
                { enabled: i, showCreateEntrypoint: n } = eb.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === T.x.PERSONAL);
            return i && n && !l;
        })(),
        m = l.useCallback(() => {
            c && u(eO.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, eS.openModalLazy)(
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
        className: r()(eP.w, t),
        children: [
            (0, n.jsx)(d.E, {
                className: eP.D,
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: el.intl.string(el.t.OYlggR),
            }),
            g ? (0, n.jsx)(eD, { buttonRef: o, isCoachmarkVisible: c, markCoachmarkAsDismissed: u }) : null,
            (0, n.jsx)(eE.$, {
                icon: eC.j,
                text: el.intl.string(el.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: m,
                buttonRef: a,
            }),
            (0, n.jsx)(e_, { targetElementRef: g ? o : a, isVisible: c, markAsDismissed: u }),
        ],
    });
}
var eM = i(192),
    eU = i(499373),
    eW = i(793574),
    eF = i(111994),
    eH = i(607470),
    eV = i(590251),
    eB = i(869006);
function ez(e) {
    let { item: t, size: i } = e,
        l = "exporting" === t.status,
        s = "uploading" === t.status ? Math.round(100 * t.progress) : 25;
    return (0, n.jsx)("div", {
        className: r()(eB.ring, eB[i], { [eB.indeterminate]: l }),
        role: "progressbar",
        "aria-label": el.intl.string(el.t.RFRuwZ),
        "aria-valuenow": l ? void 0 : s,
        children: (0, n.jsx)(eV.a, {
            percent: s,
            strokeSize: eV.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var eX = i(579460);
function eK(e) {
    let { item: t, ringSize: i, className: l } = e,
        s = "exporting" === t.status || "uploading" === t.status,
        a = r()(eX.Gt, { [eX.ob]: s });
    return (0, n.jsxs)("div", {
        className: r()(eX.$_, l),
        children: [
            "saved" === t.status
                ? null != t.videoURL
                    ? (0, n.jsx)(eH.A, { src: t.videoURL, preload: "metadata", muted: !0, className: a })
                    : null
                : (0, n.jsx)("img", { src: t.thumbnail, alt: "", className: a, loading: "lazy" }),
            s && (0, n.jsx)(ez, { item: t, size: i }),
        ],
    });
}
var eY = i(3026),
    eq = i(22231);
i(600253);
var eJ = i(936026);
function eQ(e) {
    let { value: t, isPlaceholder: i = !1 } = e;
    return (0, n.jsx)(d.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(eJ.Qw, { [eJ.qf]: i }),
        children: (0, n.jsx)(eY.A, { children: t }),
    });
}
function eZ(e) {
    let { clipId: t, title: i } = e,
        { trackUserProfileEditAction: s } = (0, eT.NJ)(),
        a = l.useCallback(
            (e) => {
                let n = e.trim();
                n !== i.trim() &&
                    ((0, W.mI)(t, n),
                    s({ action: "CLIP_TITLE_EDITED", widgetEdited: T.x.CLIPS_GALLERY, numCharacters: n.length }));
            },
            [t, i, s],
        ),
        o = (0, J.TX)({ value: i, onCommit: a }),
        d = el.intl.string(el.t["2gwc+H"]);
    return (0, n.jsx)(J.yV, {
        ...o,
        size: "compact",
        removeVerticalPadding: !0,
        className: r()(eJ.ZZ, { [eJ.Dy]: o.isEditing }),
        preview: (0, n.jsxs)("span", {
            className: r()(eJ.$, eJ.TG),
            children: [
                (0, n.jsx)(eq.PencilIcon, { size: "xxs", color: "currentColor", className: eJ.wz }),
                "" === i.trim() ? (0, n.jsx)(eQ, { value: d, isPlaceholder: !0 }) : (0, n.jsx)(eQ, { value: i }),
            ],
        }),
        placeholder: d,
        editButtonAriaLabel: el.intl.string(el.t.PDnM11),
        label: el.intl.string(el.t.PDnM11),
        maxLength: 200,
    });
}
function e$(e) {
    let { clipId: t, title: i, allowEditing: l } = e,
        s = null != i && "" !== i.trim();
    return l || s
        ? l
            ? (0, n.jsx)(eZ, { clipId: t, title: i ?? "" })
            : (0, n.jsx)("span", { className: eJ.$, children: (0, n.jsx)(eQ, { value: i ?? "" }) })
        : null;
}
var e0 = i(663341),
    e1 = i(765178),
    e8 = i(691540),
    e2 = i(857250),
    e5 = i(97483),
    e7 = i(539572),
    e3 = i(195880),
    e6 = i(696016);
let e4 = (0, C.v)(() => ({ localClips: new Map() }));
function e9(e, t) {
    e4.setState((i) => ({ localClips: new Map(i.localClips).set(e, t) }));
}
function te(e) {
    e4.setState((t) => {
        let i = new Map(t.localClips);
        return i.delete(e), { localClips: i };
    });
}
async function tt(e, t) {
    if (!e4.getState().localClips.has(e.id)) {
        if (null == e.applicationId) return void (0, e8.P0)((0, e2.o)(el.intl.string(el.t.xcLXWy), e5.Ck.FAILURE));
        e9(e.id, { status: "exporting", clip: e });
        try {
            let i = await (0, e7.VO)(e, { analyticsLocations: t });
            e9(e.id, { status: "uploading", clip: e, progress: 0 });
            let n = new File([i], "clip.mp4", { type: "video/mp4" }),
                l = await v.A.uploadWidgetClip(n, {
                    onProgress: (t) => {
                        var i;
                        return (
                            (i = e.id),
                            void e4.setState((e) => {
                                let n = e.localClips.get(i);
                                return n?.status !== "uploading"
                                    ? e
                                    : { localClips: new Map(e.localClips).set(i, { ...n, progress: t }) };
                            })
                        );
                    },
                });
            e9(e.id, { status: "uploaded", clip: e, uploadFilename: l }),
                (0, W.XW)({
                    status: "pending",
                    id: (0, e3.m)(),
                    sourceClipId: e.id,
                    gameId: e.applicationId,
                    title: e.name,
                    uploadFilename: l,
                });
        } catch (t) {
            te(e.id),
                e6.nx.error("Failed to upload a clip for the clips gallery widget", t),
                (0, e8.P0)((0, e2.o)(el.intl.string(el.t.iufib1), e5.Ck.FAILURE));
        }
    }
}
function ti(e) {
    let { widgetClipId: t, sourceClipId: i, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eT.NJ)(),
        r = el.intl.string(el.t.ib6Mgx);
    return (0, n.jsx)("div", {
        className: l,
        children: (0, n.jsx)(H.m, {
            text: r,
            ariaHidden: !0,
            children: (0, n.jsx)(X.K, {
                "aria-label": r,
                icon: K.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, W.mC)(t),
                        null != i && te(i),
                        e1.O.announce(el.intl.string(el.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: T.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var tn = i(233002);
function tl(e) {
    let { items: t, selectedKey: i, onSelect: l, onAddClip: s, allowRemoving: a = !1 } = e,
        o = Math.max(0, 4 - t.length);
    return (0, n.jsxs)("ul", {
        className: tn.Xm,
        children: [
            t.map((e, t) =>
                (0, n.jsxs)(
                    "li",
                    {
                        className: tn.NI,
                        children: [
                            (0, n.jsx)(V.D, {
                                className: r()(tn.Vs, { [tn.wH]: e.key === i }),
                                "aria-pressed": e.key === i,
                                "aria-label": el.intl.formatToPlainString(el.t.zrtAwA, { clipNumber: t + 1 }),
                                onClick: () => l(e.key),
                                children: (0, n.jsx)(eK, { item: e, ringSize: "sm", className: tn.nC }),
                            }),
                            a &&
                                ("pending" === e.status || "saved" === e.status) &&
                                (0, n.jsx)(ti, {
                                    widgetClipId: e.key,
                                    sourceClipId: "pending" === e.status ? e.sourceClipId : void 0,
                                    className: tn.nM,
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
                            className: tn.NI,
                            children: (0, n.jsx)(V.D, {
                                className: tn.Yn,
                                "aria-label": el.intl.string(el.t.rI0i0a),
                                onClick: s,
                                children: (0, n.jsx)(e0.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                            }),
                        },
                        `empty-${t}`,
                    ),
                ),
        ],
    });
}
var ts = i(457404);
function tr(e) {
    let { children: t } = e;
    return (0, n.jsxs)("div", {
        className: ts.Lw,
        children: [(0, n.jsx)("div", { className: ts.tB }), (0, n.jsx)("div", { className: ts.Qs, children: t })],
    });
}
var ta = i(716112);
function to(e) {
    let { onClick: t } = e,
        i = el.intl.string(el.t.rI0i0a);
    return (0, n.jsx)(H.m, {
        text: i,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, n.jsx)(X.K, { variant: "secondary", size: "sm", icon: eU.T, "aria-label": i, onClick: t }),
    });
}
function td() {
    return (0, n.jsx)("div", {
        className: ta.p$,
        children: (0, n.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: el.intl.format(el.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tc(e) {
    var t;
    let s,
        { widget: r, user: a, allowEditing: o, disableInteraction: d, ...c } = e,
        [u, g] = l.useState(null),
        m =
            ((t = a.id),
            (s = e4((e) => e.localClips)),
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
            (0, eS.openModalLazy)(
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
                        i.e("343286"),
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
                            initialMainLink: eF.oH.ALL_CLIPS,
                            onClipClick: (e) => {
                                ((e) => tt(e, [eW.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                            },
                        });
                },
                { modalKey: e6.nm },
            );
        }, []);
    return (0, n.jsx)(F.A, {
        userId: a.id,
        widget: r,
        allowEditing: o,
        disableInteraction: d,
        className: ta.kL,
        headerTitle: (0, W.L)(r),
        headerActionButtons: x && f ? [(0, n.jsx)(to, { onClick: I }, "clips-gallery-add-clip")] : void 0,
        ...c,
        children:
            null != p
                ? (0, n.jsxs)("div", {
                      className: ta.nV,
                      children: [
                          (0, n.jsxs)("div", {
                              className: ta.aM,
                              children: [
                                  (0, n.jsx)(eK, { item: p, ringSize: "lg", className: ta.VH }),
                                  (0, n.jsx)(tr, {
                                      children:
                                          ("saved" === p.status || "pending" === p.status) &&
                                          (0, n.jsx)(e$, { clipId: p.key, title: p.title, allowEditing: x }),
                                  }),
                              ],
                          }),
                          (0, n.jsx)(tl, {
                              items: m,
                              selectedKey: p.key,
                              onSelect: g,
                              onAddClip: x && !h ? I : void 0,
                              allowRemoving: x,
                          }),
                      ],
                  })
                : (0, n.jsx)(td, {}),
    });
}
var tu = i(704824),
    tg = i(382483),
    tm = i(385113),
    tx = i(334074),
    tf = i(657718),
    th = i(789645),
    tp = i(478016);
function tI(e) {
    let { user: t, application: i, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eT.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: i.id }), [i.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, W.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, eN.XA)(eR.jM.WIDGET_ADDED));
        }, [a, r]);
    return (0, n.jsx)(L.A, {
        user: t,
        widget: a,
        allowEditing: !1,
        subtle: !0,
        cta: (0, n.jsx)(L.A.Cta, {
            showSuggestedForYou: !0,
            heading: el.intl.format(el.t.OIzLCy, { applicationName: i.name }),
            content: el.intl.format(el.t.BQySru, { applicationName: i.name }),
            buttons: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(H.m, {
                        text: el.intl.string(el.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, n.jsx)(tf.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: th.P,
                            "aria-label": el.intl.string(el.t.WAI6xu),
                            onClick: () => {
                                s(eO.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(H.m, {
                        text: el.intl.string(el.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)(tf.S, {
                            variant: "primary",
                            size: "sm",
                            icon: tp.U,
                            "aria-label": el.intl.formatToPlainString(el.t.KfGahB, { applicationName: i.name }),
                            onClick: () => {
                                s(eO.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function tj() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: i,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([tm.A], () => tm.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, tg.Wq)();
        }, []);
        let t = (0, a.bG)([M.default], () => M.default.getCurrentUser()),
            i = (0, c.A)(e),
            { tokens: n, fetched: s } = (0, tu.j)(e),
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
            { eligibleToShow: u, markAsDismissed: g } = (0, tx.hj)({
                applications: d,
                dismissibleContent: ew.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: tx.SH,
            }),
            m = l.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = i[0];
    return null == r ? null : (0, n.jsx)(tI, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var tA = i(128988),
    tv = i(280450),
    tE = i(321191),
    tS = i(896170),
    tC = i(922016),
    tT = i(305866),
    tb = i(732771),
    tN = i(321108),
    tw = i(383329),
    ty = i(67710);
function tk(e) {
    let { widgetType: t, widget: i, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(i.games.map((e) => e.gameId)), [i.games]),
        { trackUserProfileEditAction: d } = (0, eT.NJ)(),
        [c, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, tw.R)({ query: c }),
        f = c.trim().length > 0,
        { gameIds: h, onAddGame: p } = y(t),
        I = (0, tN.A)(h),
        j = l.useCallback(
            (e) => {
                (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    e1.O.announce(el.intl.string(el.t.q0U3DE)),
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
        E = l.useMemo(() => ({ ...x, threshold: tS.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        S = l.useCallback((e) => (f || "" === e.trim() ? A.length : (0, tS.Ht)(A, e, E).length), [f, A, E]),
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
            return (0, n.jsx)(tT.l, {
                className: ty.C,
                "aria-label": el.intl.string(el.t.uqw8wK),
                children: (0, n.jsxs)(tb.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: A,
                    matchSorterOptions: E,
                    customMatchSorter: f ? v : void 0,
                    children: [
                        (0, n.jsx)(tb.a3, {
                            label: el.intl.string(el.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: el.intl.string(el.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: C,
                        }),
                        (0, n.jsx)(tb.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function tR(e) {
    let { disabled: t, ...i } = e,
        s = l.useRef(null);
    return (0, n.jsx)(tk, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(H.m, {
                text: el.intl.string(el.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(X.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: eU.T,
                    "aria-label": el.intl.string(el.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function tO(e) {
    let t = l.useRef(null);
    return (0, n.jsx)(tk, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(V.D, {
                innerRef: t,
                className: ty.c,
                "aria-label": el.intl.string(el.t.PYyENc),
                ...e,
                children: (0, n.jsx)(e0.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let tL = l.createContext(null);
function t_(e) {
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
    return (0, n.jsx)(tL.Provider, { value: { expanded: r, setExpanded: o }, children: i });
}
function tP() {
    let e = l.useContext(tL);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var tD = i(67438);
function tG(e) {
    let { widget: t } = e,
        i = (0, W.cv)(t.type),
        l = 1 === i,
        s = l ? el.intl.string(el.t["3FdPBT"]) : el.intl.format(el.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: l ? tD.O : tD.k,
        children: [
            l && (0, n.jsx)(tO, { widget: t, widgetType: t.type }),
            (0, n.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var tM = i(823016),
    tU = i(683071),
    tW = i(312252);
function tF(e) {
    let { widgetType: t, gameCount: i } = e,
        l = (0, W.cv)(t);
    return i <= l
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: tW.l,
              children: (0, n.jsx)(tU.w, {
                  type: "warning",
                  children: el.intl.formatToPlainString(el.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var tH = i(574755);
function tV(e) {
    let { onClick: t, expanded: i } = e;
    return (0, n.jsx)(V.D, {
        onClick: t,
        className: tH.x,
        "aria-expanded": i,
        children: (0, n.jsx)(d.E, {
            variant: "text-sm/medium",
            color: "none",
            children: i ? el.intl.string(el.t["6MwJo/"]) : el.intl.string(el.t.lBeKY2),
        }),
    });
}
var tB = i(249264),
    tz = i(148420);
function tX(e) {
    let { games: t, user: i, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tM.r)();
    return (0, n.jsx)("ul", {
        className: tz.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(tB.A, {
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
function tK(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, eM.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tP(),
        c = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(tX, { ...e, games: c }),
                u && (0, n.jsx)(tV, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(tF, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tM.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function tY(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(F.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(tK, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tG, { widget: i }),
    });
}
function tq(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e,
        d = i.games[0];
    return (0, n.jsx)(F.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            null != d
                ? (0, n.jsx)(tB.A, {
                      user: t,
                      widgetType: i.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tG, { widget: i }),
    });
}
var tJ = i(793693);
function tQ(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: tJ.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.gameId)),
    });
}
var tZ = i(686246),
    t$ = i(201438),
    t0 = i(451395),
    t1 = i(788593),
    t8 = i(858808),
    t2 = i(365611),
    t5 = i(900850);
function t7(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, tM.r)(),
        c = l.useRef(null);
    return (0, n.jsx)(t0.mG, {
        index: t,
        itemId: s.gameId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => c.current?.offsetWidth },
        "aria-label": el.intl.formatToPlainString(el.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, W.Un)(i, e, t),
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
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, t$.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tM.r)(),
        x = s && !r,
        { isDragging: f } = (0, tZ.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(t1.A, {
                    imageSrc: c,
                    gameName: u,
                    gameId: t.gameId,
                    userId: i,
                    disableInteraction: r,
                    className: null == c || r ? void 0 : t2.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, n.jsx)(t0.jV, { buttonRef: m(t.gameId), className: t5.BU }),
                x && (0, n.jsx)(t8.A, { game: t, widgetType: l, className: t5.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, n.jsx)("div", { className: t2.mD })
        : x
          ? (0, n.jsx)(t7, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, n.jsx)("div", { className: t5.kL, children: h() });
}
function t6(e) {
    let { games: t, userId: i, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tM.r)();
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
        { getManageButtonForWidget: r } = (0, eM.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tP(),
        c = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(t6, { ...e, games: c }),
                u && (0, n.jsx)(tV, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(tF, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tM.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function t9(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(F.A, {
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
                : (0, n.jsx)(tG, { widget: i }),
    });
}
function ie(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(F.A, {
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
                : (0, n.jsx)(tG, { widget: i }),
    });
}
var it = i(297264),
    ii = i(915089),
    il = i(772168);
function is(e) {
    let { gameId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, t$.A)(t),
        d = (0, a.bG)([E.A], () => E.A.suggestedFetchIsLoading),
        c = el.intl.formatToPlainString(el.t["3mb1s5"], { game: r });
    return o || d
        ? (0, n.jsx)("div", { className: t2.mD })
        : (0, n.jsx)(H.m, {
              text: c,
              ariaHidden: !0,
              children: (0, n.jsxs)(V.D, {
                  className: il.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, n.jsx)(t1.A, {
                          className: il.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(e0.PlusLargeIcon, { size: "md", className: il.Xv, color: ed.A.colors.WHITE }),
                  ],
              }),
          });
}
function ir(e) {
    let { userId: t, games: i, onDismiss: l, onClick: s, className: a } = e,
        o = (0, ii.GV)();
    return (0, n.jsxs)("aside", {
        className: r()(il.kL, a),
        "aria-labelledby": o,
        children: [
            (0, n.jsxs)("div", {
                className: il.wx,
                children: [
                    (0, n.jsx)(V.D, {
                        className: il.r,
                        "aria-label": el.intl.string(el.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(th.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(it.D, {
                        id: o,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: el.intl.string(el.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: il.Vg,
                children: i.map((e) => {
                    let { gameId: i } = e;
                    return (0, n.jsx)(
                        "li",
                        { children: (0, n.jsx)(is, { onClick: () => s(i), userId: t, gameId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}
function ia(e) {
    let { widgetType: t, ...i } = e,
        { games: s, onAddGame: r } = y(t),
        { setExpanded: a } = tP(),
        { trackUserProfileEditAction: o } = (0, eT.NJ)(),
        d = l.useCallback(
            (e) => {
                r(e),
                    a(!0),
                    (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [r, t, o, a],
        );
    return (0, n.jsx)(ir, { games: s, onClick: d, ...i });
}
var io = i(870961);
function id(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case T.x.FAVORITE_GAMES:
            return (0, n.jsx)(tq, { widget: t, ...i });
        case T.x.CURRENT_GAMES:
            return (0, n.jsx)(tY, { widget: t, ...i });
        case T.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(ie, { widget: t, ...i });
        case T.x.PLAYED_GAMES:
            return (0, n.jsx)(t9, { widget: t, ...i });
        default:
            return null;
    }
}
function ic(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, ...o } = e,
        { setExpanded: d } = tP(),
        { shouldShowSuggestions: c, handleDismissSuggestions: u } = (function (e) {
            let [t, i] = l.useState(!1),
                n = e.type,
                s = (0, a.bG)([tv.default, tE.A], () => {
                    let e = tv.default.getId();
                    if (null == e) return !1;
                    let t = tE.A.getUserProfile(e);
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
    return (0, n.jsx)(id, {
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
                          tR,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => d(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, n.jsx)(ia, { userId: i.id, widgetType: t.type, onDismiss: u, className: io.r }),
        ...o,
    });
}
function iu(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(t_, { widgetType: t.type, children: (0, n.jsx)(ic, { widget: t, ...i }) });
}
var ig = i(271383),
    im = i(94160),
    ix = i(96173),
    ih = i(788259),
    ip = i(269507);
function iI(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: s } = (0, eT.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        c = (0, a.bG)([tE.A], () => tE.A.getUserProfile(t)?.fetchError != null, [t]),
        [u, g] = eL(!c),
        m = (0, ix.A)();
    return (
        l.useEffect(() => {
            r.current || c || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [c, i]),
        (0, n.jsxs)("div", {
            className: ip.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: ip.FS,
                    children: [
                        (0, n.jsx)(it.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: el.intl.string(el.t["oqalC+"]),
                        }),
                        (0, n.jsx)(d.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: c ? el.intl.string(el.t["+W59o5"]) : el.intl.string(el.t.O9SQ1c),
                        }),
                    ],
                }),
                !c &&
                    (0, n.jsx)("ul", {
                        className: ip.ZW,
                        "aria-label": el.intl.string(el.t["+EIBSA"]),
                        children: m.map((e) =>
                            (0, n.jsx)(
                                "li",
                                {
                                    ref: e.type === T.x.PERSONAL ? o : void 0,
                                    children: (0, n.jsx)(ih.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
                !c && (0, n.jsx)(e_, { targetElementRef: o, isVisible: u, markAsDismissed: g }),
            ],
        })
    );
}
var ij = i(366209);
function iA(e) {
    let { widget: t, ...i } = e;
    return t instanceof f.R
        ? (0, n.jsx)(L.A, { widget: t, ...i })
        : t instanceof I.Tu
          ? (0, n.jsx)(eA, { widget: t, ...i })
          : (0, p.fu)(t)
            ? (0, n.jsx)(iu, { widget: t, ...i })
            : t instanceof h.k
              ? (0, n.jsx)(tc, { widget: t, ...i })
              : null;
}
function iv() {
    return (0, n.jsxs)("div", {
        className: ij.mJ,
        children: [
            (0, n.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, n.jsx)(d.E, {
                variant: "text-xs/normal",
                color: "text-muted",
                children: el.intl.string(el.t["7blcz6"]),
            }),
        ],
    });
}
function iE(e) {
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
                        children: [(0, n.jsx)(eG, { className: ij.cG }), d && (0, n.jsx)(iv, {}), (0, n.jsx)(tj, {})],
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
            { onLoad: o } = w();
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
        ? (0, n.jsx)(iI, { userId: t.id })
        : o
          ? (0, n.jsx)(eM.D, { children: A() })
          : A();
}
function iS(e) {
    let { user: t, ...i } = e,
        s = l.useRef(null);
    (0, k.i)({ containerRef: s });
    let a = (0, ig.k)(t.id);
    return (0, n.jsxs)(im.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(ij.XG, { [ij.az]: a }),
        fade: !0,
        children: [(0, n.jsx)(tA.A, { scrollerRef: s }), (0, n.jsx)(iE, { user: t, ...i })],
    });
}
