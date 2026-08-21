i.d(t, { A: () => iw, u: () => ib });
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
    C = i(196765),
    b = i(540185),
    T = i(282435);
let N = (0, S.sampleSize)(T.sx, T.sx.length),
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
function y(e) {
    let { bump: t, bumpMultiple: i, gameIds: n } = w();
    !(function (e) {
        let { remove: t, peekedGameIds: i } = w(),
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
    q = i(408278),
    J = i(241326),
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
    eo = i(652215),
    ed = i(339984),
    ec = i(148548);
function eu() {
    return (0, n.jsx)(X.m, {
        text: V.intl.string(V.t.gQmDk4),
        children: (0, n.jsxs)(H.D, {
            className: ec.YN,
            "aria-label": V.intl.string(V.t.gQmDk4),
            onClick: function () {
                (0, W.AD)((e) => new I.Tu({ ...e, sections: [(0, I.K)(), ...e.sections] }));
            },
            children: [
                (0, n.jsx)("div", { className: ec.JD }),
                (0, n.jsx)("div", { className: ec.xJ, children: (0, n.jsx)(K.U, { size: "sm" }) }),
                (0, n.jsx)("div", { className: ec.JD }),
            ],
        }),
    });
}
function eg(e) {
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
    let v = a || "" !== i.title.trim() || "" !== i.subtitle.trim(),
        A = null != i.image || u,
        E = A || a;
    return (0, n.jsx)(Y.N, {
        theme: A ? eo.NJ8.DARK : void 0,
        children: (e) =>
            (0, n.jsxs)("div", {
                className: r()(ec.kL, { [ec.Vp]: E }, e),
                children: [
                    a || null != i.image
                        ? (0, n.jsx)("div", {
                              className: ec.El,
                              children: (0, n.jsx)(ea.A, {
                                  className: ec.Sl,
                                  canEdit: a,
                                  userId: t,
                                  image: i.image,
                                  previewUri: o,
                                  uploadType: ed.HL.PERSONAL_WIDGET_COVER,
                                  onImageUploadStarted: h,
                                  onImageUploadCompleted: p,
                              }),
                          })
                        : null,
                    a
                        ? (0, n.jsx)("div", {
                              className: ec.DT,
                              children: (0, n.jsx)(X.m, {
                                  text: A ? V.intl.string(V.t.RyK5Ww) : V.intl.string(V.t.g2jVww),
                                  children: (0, n.jsx)(q.K, {
                                      icon: J.TrashIcon,
                                      size: "sm",
                                      variant: "overlay-secondary",
                                      "aria-label": A ? V.intl.string(V.t.RyK5Ww) : V.intl.string(V.t.g2jVww),
                                      onClick: A ? f : j,
                                  }),
                              }),
                          })
                        : null,
                    (0, n.jsxs)("div", {
                        className: r()(ec.hQ, e, { [ec.Vp]: E }),
                        children: [
                            A && v ? (0, n.jsx)("div", { className: ec.cw }) : null,
                            (0, n.jsx)(er, {
                                canEdit: a,
                                growWidth: !0,
                                variant: "heading-xl/semibold",
                                color: "text-default",
                                value: i.title,
                                placeholder: V.intl.string(V.t.KqCDvK),
                                onCommit: m,
                                maxLength: 100,
                                maxLines: 2,
                            }),
                            (0, n.jsx)(er, {
                                canEdit: a,
                                variant: "text-sm/medium",
                                color: "text-default",
                                value: i.subtitle,
                                placeholder: V.intl.string(V.t.k8zZFd),
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
var em = i(750943),
    ex = i(661531),
    ef = i(603090);
function eh(e) {
    let { onClick: t } = e;
    return (0, n.jsxs)(H.D, {
        onClick: t,
        className: ef.cR,
        children: [
            (0, n.jsx)(em.X, { size: "xs", color: ex.A.colors.ICON_SUBTLE }),
            (0, n.jsx)(d.E, { variant: "text-sm/medium", color: "text-muted", children: V.intl.string(V.t["9AY+/x"]) }),
        ],
    });
}
function ep(e) {
    let { index: t, userId: i, field: s, canEdit: r, onFieldChange: a, onFieldRemove: o } = e,
        [d, c] = l.useState(null),
        u = l.useRef(!1),
        g = r ? !0 !== s.hideImage : null != s.image;
    return (0, n.jsxs)("div", {
        className: ef.ez,
        children: [
            g
                ? (0, n.jsxs)("div", {
                      className: ef.tF,
                      children: [
                          (0, n.jsx)(ea.A, {
                              className: ef.k9,
                              canEdit: r,
                              userId: i,
                              image: s.image,
                              previewUri: d,
                              uploadType: ed.HL.PERSONAL_WIDGET_FIELD,
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
                                    className: ef.ij,
                                    children: (0, n.jsx)(X.m, {
                                        text: V.intl.string(V.t.RyK5Ww),
                                        children: (0, n.jsx)(q.K, {
                                            size: "sm",
                                            variant: "overlay-secondary",
                                            icon: J.TrashIcon,
                                            "aria-label": V.intl.string(V.t.RyK5Ww),
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
                className: ef.oT,
                children: [
                    (0, n.jsx)(er, {
                        canEdit: r,
                        variant: "text-sm/medium",
                        color: "text-default",
                        value: s.title,
                        placeholder: V.intl.formatToPlainString(V.t.TNamrx, { number: t + 1 }),
                        onCommit: function (e) {
                            a(s.key, (t) => ({ ...t, title: e }));
                        },
                        maxLength: 50,
                        maxLines: 2,
                    }),
                    (0, n.jsx)(er, {
                        canEdit: r,
                        variant: "text-xs/normal",
                        color: "text-subtle",
                        value: s.description,
                        placeholder: V.intl.formatToPlainString(V.t.Hs14K3, { number: t + 1 }),
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
                      className: ef.Ms,
                      children: [
                          g
                              ? null
                              : (0, n.jsx)(X.m, {
                                    text: V.intl.string(V.t.i3vRzP),
                                    children: (0, n.jsx)(q.K, {
                                        size: "sm",
                                        variant: "overlay-secondary",
                                        icon: em.X,
                                        "aria-label": V.intl.string(V.t.i3vRzP),
                                        onClick: function () {
                                            a(s.key, (e) => ({ ...e, hideImage: void 0 }));
                                        },
                                    }),
                                }),
                          (0, n.jsx)(X.m, {
                              text: V.intl.string(V.t.g2jVww),
                              children: (0, n.jsx)(q.K, {
                                  size: "sm",
                                  variant: "overlay-secondary",
                                  icon: J.TrashIcon,
                                  "aria-label": V.intl.string(V.t.g2jVww),
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
function eI(e) {
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
        (0, n.jsx)(ep, { index: i, userId: t, field: e, canEdit: s, onFieldChange: a, onFieldRemove: o }, e.key),
    );
    return (s &&
        i.fields.length < 4 &&
        d.push(
            (0, n.jsx)(
                eh,
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
        : (0, n.jsx)("div", { className: ef.kL, children: d });
}
var ej = i(202541),
    ev = i(877068);
let eA = { section: eo.JJy.PERSONAL_WIDGET };
function eE(e) {
    let { widget: t, canEdit: i } = e;
    return (0, n.jsxs)("div", {
        className: ev.wx,
        children: [
            (0, n.jsx)(P.t, { size: "xs", className: ev.nr }),
            (0, n.jsx)(er, {
                canEdit: i,
                variant: "text-sm/medium",
                color: "text-default",
                value: t.header,
                placeholder: V.intl.string(V.t.fjSaAm),
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
function eS(e) {
    let { userId: t, section: i, sectionIndex: l, canEdit: s } = e;
    switch (i.type) {
        case _.K.COVER:
            return (0, n.jsx)(eg, { userId: t, section: i, sectionIndex: l, canEdit: s });
        case _.K.FIELDS:
            return (0, n.jsx)(eI, { userId: t, section: i, sectionIndex: l, canEdit: s });
    }
}
function eC() {
    return (0, a.bG)([M.default], () => U.Ay.isPremium(M.default.getCurrentUser(), ej.PremiumTypes.TIER_2))
        ? null
        : (0, n.jsxs)("div", {
              className: ev.hc,
              children: [
                  (0, n.jsx)(D.h, { color: "nitro-pink", className: ev.Sp, offsetBottom: -4 }),
                  (0, n.jsxs)("div", {
                      className: ev.LK,
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
                  (0, n.jsx)(G.A, {
                      size: "sm",
                      subscriptionTier: ej.pe.TIER_2,
                      defaultTextOverride: V.intl.string(V.t["4k2gSf"]),
                      premiumModalAnalyticsLocation: eA,
                  }),
              ],
          });
}
function eb() {
    let { isAnyFieldClipped: e, isExpanded: t, setIsExpanded: i } = l.useContext(et);
    return e || t ? (0, n.jsx)(z, { expanded: t, onClick: () => i((e) => !e) }) : null;
}
function eT(e) {
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
        className: ev.Nr,
        headerClassName: ev.JE,
        children: (0, n.jsxs)("div", {
            className: ev.kL,
            children: [
                (0, n.jsx)(eE, { widget: t, canEdit: d }),
                d && !c ? (0, n.jsx)(eu, {}) : null,
                t.sections.map((e, t) => (0, n.jsx)(eS, { userId: i.id, section: e, sectionIndex: t, canEdit: d }, t)),
                (0, n.jsx)(eb, {}),
                d ? (0, n.jsx)(eC, {}) : null,
            ],
        }),
    });
}
function eN(e) {
    return (0, n.jsx)(ei, { children: (0, n.jsx)(eT, { ...e }) });
}
var ew = i(702841),
    ey = i(821609),
    ek = i(192308),
    eR = i(307301),
    eO = i(183555),
    eL = i(465318),
    e_ = i(384377),
    eP = i(554146),
    eD = i(43105),
    eG = i(131607),
    eM = i(518477),
    eU = i(49999);
function eW() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = eL.A.useConfig({ location: "PersonalWidgetUpsellCoachmark" }).enabled,
        [i, n] = (0, eG.kn)(e && t ? [eP.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK] : []);
    return [i === eP.M.USER_PROFILE_PERSONAL_WIDGET_COACHMARK, n];
}
function eF(e) {
    let { targetElementRef: t, isVisible: i, markAsDismissed: l } = e,
        { trackUserProfileEditAction: s } = (0, eO.NJ)();
    return i
        ? (0, n.jsx)(eD.A, {
              targetElementRef: t,
              position: "left",
              title: V.intl.string(V.t.KKGxNt),
              body: V.intl.string(V.t["IS+QTV"]),
              onRequestClose: () => l(eU.i.USER_DISMISS),
              actions: [
                  {
                      text: V.intl.string(V.t.RCy7Px),
                      onClick: function () {
                          let e = (0, I.g0)();
                          (0, W.Y5)(e),
                              s({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                              (0, e_.XA)(eM.jM.WIDGET_ADDED);
                      },
                  },
              ],
          })
        : null;
}
var eH = i(410453);
function eV(e) {
    let { buttonRef: t, isCoachmarkVisible: i, markCoachmarkAsDismissed: s } = e,
        { trackUserProfileEditAction: r } = (0, eO.NJ)(),
        a = l.useCallback(() => {
            i && s(eU.i.TAKE_ACTION);
            let e = (0, I.g0)();
            (0, W.Y5)(e),
                r({ action: "WIDGET_ADDED", ...e.getProfileEditAnalyticsOptions() }),
                (0, e_.XA)(eM.jM.WIDGET_ADDED);
        }, [r, i, s]);
    return (0, n.jsx)(ey.$, {
        icon: P.t,
        text: V.intl.string(V.t.eGAirq),
        size: "sm",
        variant: "secondary",
        onClick: a,
        buttonRef: t,
    });
}
function eB(e) {
    let { className: t } = e,
        { trackUserProfileEditAction: s } = (0, eO.NJ)(),
        a = l.useRef(null),
        o = l.useRef(null),
        [c, u] = eW(),
        g = (function () {
            let e = (0, ew.bG)([M.default], () => M.default.getCurrentUser()?.id),
                t = (0, R.A)(e),
                { enabled: i, showCreateEntrypoint: n } = eL.A.useConfig({
                    location: "UserProfileWidgetEditingHeader",
                }),
                l = t.some((e) => e.type === b.x.PERSONAL);
            return i && n && !l;
        })(),
        m = l.useCallback(() => {
            c && u(eU.i.TAKE_ACTION),
                s({ action: "PRESS_ADD_WIDGET" }),
                (0, ek.openModalLazy)(
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
        className: r()(eH.w, t),
        children: [
            (0, n.jsx)(d.E, {
                className: eH.D,
                variant: "text-xs/semibold",
                color: "text-subtle",
                children: V.intl.string(V.t.OYlggR),
            }),
            g ? (0, n.jsx)(eV, { buttonRef: o, isCoachmarkVisible: c, markCoachmarkAsDismissed: u }) : null,
            (0, n.jsx)(ey.$, {
                icon: eR.j,
                text: V.intl.string(V.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: m,
                buttonRef: a,
            }),
            (0, n.jsx)(eF, { targetElementRef: g ? o : a, isVisible: c, markAsDismissed: u }),
        ],
    });
}
var ez = i(192),
    eX = i(499373),
    eK = i(793574),
    eY = i(111994),
    eq = i(607470),
    eJ = i(590251),
    eQ = i(869006);
function eZ(e) {
    let { item: t, size: i } = e,
        l = "exporting" === t.status,
        s = "uploading" === t.status ? Math.round(100 * t.progress) : 25;
    return (0, n.jsx)("div", {
        className: r()(eQ.ring, eQ[i], { [eQ.indeterminate]: l }),
        role: "progressbar",
        "aria-label": V.intl.string(V.t.RFRuwZ),
        "aria-valuenow": l ? void 0 : s,
        children: (0, n.jsx)(eJ.a, {
            percent: s,
            strokeSize: eJ.a.StrokeSizes.MEDIUM,
            colorOverride: "var(--icon-overlay-light)",
        }),
    });
}
var e$ = i(579460);
function e0(e) {
    let { item: t, ringSize: i, className: l } = e,
        s = "exporting" === t.status || "uploading" === t.status,
        a = r()(e$.Gt, { [e$.ob]: s });
    return (0, n.jsxs)("div", {
        className: r()(e$.$_, l),
        children: [
            "saved" === t.status
                ? null != t.videoURL
                    ? (0, n.jsx)(eq.A, { src: t.videoURL, preload: "metadata", muted: !0, className: a })
                    : null
                : (0, n.jsx)("img", { src: t.thumbnail, alt: "", className: a, loading: "lazy" }),
            s && (0, n.jsx)(eZ, { item: t, size: i }),
        ],
    });
}
var e1 = i(3026),
    e2 = i(22231);
i(600253);
var e8 = i(936026);
function e5(e) {
    let { value: t, isPlaceholder: i = !1 } = e;
    return (0, n.jsx)(d.E, {
        variant: "text-sm/medium",
        color: "text-overlay-light",
        className: r()(e8.Qw, { [e8.qf]: i }),
        children: (0, n.jsx)(e1.A, { children: t }),
    });
}
function e7(e) {
    let { clipId: t, title: i } = e,
        { trackUserProfileEditAction: s } = (0, eO.NJ)(),
        a = l.useCallback(
            (e) => {
                let n = e.trim();
                n !== i.trim() &&
                    ((0, W.mI)(t, n),
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
        className: r()(e8.ZZ, { [e8.Dy]: o.isEditing }),
        preview: (0, n.jsxs)("span", {
            className: r()(e8.$, e8.TG),
            children: [
                (0, n.jsx)(e2.PencilIcon, { size: "xxs", color: "currentColor", className: e8.wz }),
                "" === i.trim() ? (0, n.jsx)(e5, { value: d, isPlaceholder: !0 }) : (0, n.jsx)(e5, { value: i }),
            ],
        }),
        placeholder: d,
        editButtonAriaLabel: V.intl.string(V.t.PDnM11),
        label: V.intl.string(V.t.PDnM11),
        maxLength: 200,
    });
}
function e3(e) {
    let { clipId: t, title: i, allowEditing: l } = e,
        s = null != i && "" !== i.trim();
    return l || s
        ? l
            ? (0, n.jsx)(e7, { clipId: t, title: i ?? "" })
            : (0, n.jsx)("span", { className: e8.$, children: (0, n.jsx)(e5, { value: i ?? "" }) })
        : null;
}
var e6 = i(663341),
    e4 = i(765178),
    e9 = i(691540),
    te = i(857250),
    tt = i(97483),
    ti = i(539572),
    tn = i(195880),
    tl = i(696016);
let ts = (0, C.v)(() => ({ localClips: new Map() }));
function tr(e, t) {
    ts.setState((i) => ({ localClips: new Map(i.localClips).set(e, t) }));
}
function ta(e) {
    ts.setState((t) => {
        let i = new Map(t.localClips);
        return i.delete(e), { localClips: i };
    });
}
async function to(e, t) {
    if (!ts.getState().localClips.has(e.id)) {
        if (null == e.applicationId) return void (0, e9.P0)((0, te.o)(V.intl.string(V.t.xcLXWy), tt.Ck.FAILURE));
        tr(e.id, { status: "exporting", clip: e });
        try {
            let i = await (0, ti.VO)(e, { analyticsLocations: t });
            tr(e.id, { status: "uploading", clip: e, progress: 0 });
            let n = new File([i], "clip.mp4", { type: "video/mp4" }),
                l = await A.A.uploadWidgetClip(n, {
                    onProgress: (t) => {
                        var i;
                        return (
                            (i = e.id),
                            void ts.setState((e) => {
                                let n = e.localClips.get(i);
                                return n?.status !== "uploading"
                                    ? e
                                    : { localClips: new Map(e.localClips).set(i, { ...n, progress: t }) };
                            })
                        );
                    },
                });
            tr(e.id, { status: "uploaded", clip: e, uploadFilename: l }),
                (0, W.XW)({
                    status: "pending",
                    id: (0, tn.m)(),
                    sourceClipId: e.id,
                    gameId: e.applicationId,
                    title: e.name,
                    uploadFilename: l,
                });
        } catch (t) {
            ta(e.id),
                tl.nx.error("Failed to upload a clip for the clips gallery widget", t),
                (0, e9.P0)((0, te.o)(V.intl.string(V.t.iufib1), tt.Ck.FAILURE));
        }
    }
}
function td(e) {
    let { widgetClipId: t, sourceClipId: i, className: l } = e,
        { trackUserProfileEditAction: s } = (0, eO.NJ)(),
        r = V.intl.string(V.t.ib6Mgx);
    return (0, n.jsx)("div", {
        className: l,
        children: (0, n.jsx)(X.m, {
            text: r,
            ariaHidden: !0,
            children: (0, n.jsx)(q.K, {
                "aria-label": r,
                icon: J.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    (0, W.mC)(t),
                        null != i && ta(i),
                        e4.O.announce(V.intl.string(V.t.zyPNb3)),
                        s({ action: "CLIP_REMOVED", widgetEdited: b.x.CLIPS_GALLERY });
                },
            }),
        }),
    });
}
var tc = i(233002);
function tu(e) {
    let { items: t, selectedKey: i, onSelect: l, onAddClip: s, allowRemoving: a = !1 } = e,
        o = Math.max(0, 4 - t.length);
    return (0, n.jsxs)("ul", {
        className: tc.Xm,
        children: [
            t.map((e, t) =>
                (0, n.jsxs)(
                    "li",
                    {
                        className: tc.NI,
                        children: [
                            (0, n.jsx)(H.D, {
                                className: r()(tc.Vs, { [tc.wH]: e.key === i }),
                                "aria-pressed": e.key === i,
                                "aria-label": V.intl.formatToPlainString(V.t.zrtAwA, { clipNumber: t + 1 }),
                                onClick: () => l(e.key),
                                children: (0, n.jsx)(e0, { item: e, ringSize: "sm", className: tc.nC }),
                            }),
                            a &&
                                ("pending" === e.status || "saved" === e.status) &&
                                (0, n.jsx)(td, {
                                    widgetClipId: e.key,
                                    sourceClipId: "pending" === e.status ? e.sourceClipId : void 0,
                                    className: tc.nM,
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
                            className: tc.NI,
                            children: (0, n.jsx)(H.D, {
                                className: tc.Yn,
                                "aria-label": V.intl.string(V.t.rI0i0a),
                                onClick: s,
                                children: (0, n.jsx)(e6.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                            }),
                        },
                        `empty-${t}`,
                    ),
                ),
        ],
    });
}
var tg = i(457404);
function tm(e) {
    let { children: t } = e;
    return (0, n.jsxs)("div", {
        className: tg.Lw,
        children: [(0, n.jsx)("div", { className: tg.tB }), (0, n.jsx)("div", { className: tg.Qs, children: t })],
    });
}
var tx = i(716112);
function tf(e) {
    let { onClick: t } = e,
        i = V.intl.string(V.t.rI0i0a);
    return (0, n.jsx)(X.m, {
        text: i,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, n.jsx)(q.K, { variant: "secondary", size: "sm", icon: eX.T, "aria-label": i, onClick: t }),
    });
}
function th() {
    return (0, n.jsx)("div", {
        className: tx.p$,
        children: (0, n.jsx)(d.E, {
            variant: "text-xs/normal",
            color: "text-subtle",
            children: V.intl.format(V.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function tp(e) {
    var t;
    let s,
        { widget: r, user: a, allowEditing: o, disableInteraction: d, ...c } = e,
        [u, g] = l.useState(null),
        m =
            ((t = a.id),
            (s = ts((e) => e.localClips)),
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
                            initialMainLink: eY.oH.ALL_CLIPS,
                            onClipClick: (e) => {
                                ((e) => to(e, [eK.A.USER_PROFILE_MODAL_V2]))(e), t.onClose();
                            },
                        });
                },
                { modalKey: tl.nm },
            );
        }, []);
    return (0, n.jsx)(F.A, {
        userId: a.id,
        widget: r,
        allowEditing: o,
        disableInteraction: d,
        className: tx.kL,
        headerTitle: (0, W.L)(r),
        headerActionButtons: x && f ? [(0, n.jsx)(tf, { onClick: I }, "clips-gallery-add-clip")] : void 0,
        ...c,
        children:
            null != p
                ? (0, n.jsxs)("div", {
                      className: tx.nV,
                      children: [
                          (0, n.jsxs)("div", {
                              className: tx.aM,
                              children: [
                                  (0, n.jsx)(e0, { item: p, ringSize: "lg", className: tx.VH }),
                                  (0, n.jsx)(tm, {
                                      children:
                                          ("saved" === p.status || "pending" === p.status) &&
                                          (0, n.jsx)(e3, { clipId: p.key, title: p.title, allowEditing: x }),
                                  }),
                              ],
                          }),
                          (0, n.jsx)(tu, {
                              items: m,
                              selectedKey: p.key,
                              onSelect: g,
                              onAddClip: x && !h ? I : void 0,
                              allowRemoving: x,
                          }),
                      ],
                  })
                : (0, n.jsx)(th, {}),
    });
}
var tI = i(704824),
    tj = i(382483),
    tv = i(385113),
    tA = i(334074),
    tE = i(657718),
    tS = i(789645),
    tC = i(478016);
function tb(e) {
    let { user: t, application: i, onDismiss: s } = e,
        { trackUserProfileEditAction: r } = (0, eO.NJ)(),
        a = l.useMemo(() => new f.R({ applicationId: i.id }), [i.id]),
        o = l.useCallback(() => {
            null != a &&
                ((0, W.Y5)(a),
                r({ action: "WIDGET_ADDED", ...a.getProfileEditAnalyticsOptions() }),
                (0, e_.XA)(eM.jM.WIDGET_ADDED));
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
                        children: (0, n.jsx)(tE.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: tS.P,
                            "aria-label": V.intl.string(V.t.WAI6xu),
                            onClick: () => {
                                s(eU.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(X.m, {
                        text: V.intl.string(V.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)(tE.S, {
                            variant: "primary",
                            size: "sm",
                            icon: tC.U,
                            "aria-label": V.intl.formatToPlainString(V.t.KfGahB, { applicationName: i.name }),
                            onClick: () => {
                                s(eU.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
function tT() {
    let {
        isLoading: e,
        currentUser: t,
        eligibleApplications: i,
        markAsDismissed: s,
    } = (function () {
        let e = (0, a.yK)([tv.A], () => tv.A.getFeaturedApplicationIds());
        l.useEffect(() => {
            (0, tj.Wq)();
        }, []);
        let t = (0, a.bG)([M.default], () => M.default.getCurrentUser()),
            i = (0, c.A)(e),
            { tokens: n, fetched: s } = (0, tI.j)(e),
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
            { eligibleToShow: u, markAsDismissed: g } = (0, tA.hj)({
                applications: d,
                dismissibleContent: eP.M.APP_WIDGET_V2_PROFILE_UPSELL_SUGGESTED,
                cooldownConfig: tA.SH,
            }),
            m = l.useMemo(() => d.filter((e) => u.includes(e.id)), [d, u]);
        return o
            ? { isLoading: o, currentUser: t }
            : { isLoading: o, currentUser: t, eligibleApplications: m, markAsDismissed: g };
    })();
    if (e || null == t) return null;
    let r = i[0];
    return null == r ? null : (0, n.jsx)(tb, { user: t, application: r, onDismiss: (e) => s([r.id], e) }, r.id);
}
var tN = i(128988),
    tw = i(280450),
    ty = i(321191),
    tk = i(896170),
    tR = i(922016),
    tO = i(305866),
    tL = i(732771),
    t_ = i(321108),
    tP = i(383329),
    tD = i(67710);
function tG(e) {
    let { widgetType: t, widget: i, onAddGame: s, children: r, ...a } = e,
        o = l.useMemo(() => new Set(i.games.map((e) => e.gameId)), [i.games]),
        { trackUserProfileEditAction: d } = (0, eO.NJ)(),
        [c, u] = l.useState(""),
        g = l.useRef(""),
        { options: m, matchSorterOptions: x } = (0, tP.R)({ query: c }),
        f = c.trim().length > 0,
        { gameIds: h, onAddGame: p } = y(t),
        I = (0, t_.A)(h),
        j = l.useCallback(
            (e) => {
                (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    e4.O.announce(V.intl.string(V.t.q0U3DE)),
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
        E = l.useMemo(() => ({ ...x, threshold: tk.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        S = l.useCallback((e) => (f || "" === e.trim() ? v.length : (0, tk.Ht)(v, e, E).length), [f, v, E]),
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
    return (0, n.jsx)(tR.Y, {
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
            return (0, n.jsx)(tO.l, {
                className: tD.C,
                "aria-label": V.intl.string(V.t.uqw8wK),
                children: (0, n.jsxs)(tL.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (j(e), t());
                    },
                    options: v,
                    matchSorterOptions: E,
                    customMatchSorter: f ? A : void 0,
                    children: [
                        (0, n.jsx)(tL.a3, {
                            label: V.intl.string(V.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: V.intl.string(V.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: C,
                        }),
                        (0, n.jsx)(tL.X2, { maxVisibleItems: 7 }),
                    ],
                }),
            });
        },
        children: (e) => r(e),
    });
}
function tM(e) {
    let { disabled: t, ...i } = e,
        s = l.useRef(null);
    return (0, n.jsx)(tG, {
        targetElementRef: s,
        position: "bottom",
        align: "center",
        ...i,
        children: (e) =>
            (0, n.jsx)(X.m, {
                text: V.intl.string(V.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, n.jsx)(q.K, {
                    buttonRef: s,
                    variant: "secondary",
                    size: "sm",
                    icon: eX.T,
                    "aria-label": V.intl.string(V.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function tU(e) {
    let t = l.useRef(null);
    return (0, n.jsx)(tG, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, n.jsx)(H.D, {
                innerRef: t,
                className: tD.c,
                "aria-label": V.intl.string(V.t.PYyENc),
                ...e,
                children: (0, n.jsx)(e6.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
let tW = l.createContext(null);
function tF(e) {
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
    return (0, n.jsx)(tW.Provider, { value: { expanded: r, setExpanded: o }, children: i });
}
function tH() {
    let e = l.useContext(tW);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var tV = i(67438);
function tB(e) {
    let { widget: t } = e,
        i = (0, W.cv)(t.type),
        l = 1 === i,
        s = l ? V.intl.string(V.t["3FdPBT"]) : V.intl.format(V.t.W8K2GH, { maxGames: i });
    return (0, n.jsxs)("div", {
        className: l ? tV.O : tV.k,
        children: [
            l && (0, n.jsx)(tU, { widget: t, widgetType: t.type }),
            (0, n.jsx)(d.E, { variant: "text-xs/normal", color: "text-subtle", children: s }),
        ],
    });
}
var tz = i(823016),
    tX = i(683071),
    tK = i(312252);
function tY(e) {
    let { widgetType: t, gameCount: i } = e,
        l = (0, W.cv)(t);
    return i <= l
        ? null
        : (0, n.jsx)("div", {
              role: "alert",
              className: tK.l,
              children: (0, n.jsx)(tX.w, {
                  type: "warning",
                  children: V.intl.formatToPlainString(V.t.Rv3wYq, { maxGames: l }),
              }),
          });
}
var tq = i(249264),
    tJ = i(148420);
function tQ(e) {
    let { games: t, user: i, widgetType: l, ...s } = e,
        { registerItemRef: r, manageFocusOnDelete: a } = (0, tz.r)();
    return (0, n.jsx)("ul", {
        className: tJ.h,
        children: t.map((e, t) =>
            (0, n.jsx)(
                "li",
                {
                    children: (0, n.jsx)(tq.A, {
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
function tZ(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, ez.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tH(),
        c = o ? s : s.slice(0, 2),
        u = s.length > 2,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(tQ, { ...e, games: c }),
                u && (0, n.jsx)(z, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(tY, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tz.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function t$(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(F.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(tZ, {
                      user: t,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tB, { widget: i }),
    });
}
function t0(e) {
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
                ? (0, n.jsx)(tq.A, {
                      user: t,
                      widgetType: i.type,
                      game: d,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tB, { widget: i }),
    });
}
var t1 = i(793693);
function t2(e) {
    let { games: t, renderGame: i } = e;
    return (0, n.jsx)("ul", {
        className: t1.V,
        children: t.map((e, t) => (0, n.jsx)("li", { children: i(e, t) }, e.gameId)),
    });
}
var t8 = i(686246),
    t5 = i(201438),
    t7 = i(451395),
    t3 = i(788593),
    t6 = i(858808),
    t4 = i(365611),
    t9 = i(900850);
function ie(e) {
    let { index: t, widgetType: i, game: s, coverImageUrl: r, gameName: a, children: o } = e,
        { manageFocusOnReorder: d } = (0, tz.r)(),
        c = l.useRef(null);
    return (0, n.jsx)(t7.mG, {
        index: t,
        itemId: s.gameId,
        listType: i,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: r, gameName: a, getWidth: () => c.current?.offsetWidth },
        "aria-label": V.intl.formatToPlainString(V.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, W.Un)(i, e, t),
        onEnd: () => d(s.gameId),
        className: t9.kL,
        dropBeforeClassName: t9.A,
        dropAfterClassName: t9.Ze,
        draggingClassName: t9.Id,
        children: (0, n.jsx)("div", { ref: c, className: t9.An, children: o }),
    });
}
function it(e) {
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
        { coverImageUrl: c, gameName: u, isLoading: g } = (0, t5.A)(t.gameId),
        { registerDragHandleRef: m } = (0, tz.r)(),
        x = s && !r,
        { isDragging: f } = (0, t8.V)((e) => ({ isDragging: e.isDragging() }));
    function h() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(t3.A, {
                    imageSrc: c,
                    gameName: u,
                    gameId: t.gameId,
                    userId: i,
                    disableInteraction: r,
                    className: null == c || r ? void 0 : t4.iL,
                    hideTooltip: f,
                    coverRef: d,
                }),
                x && (0, n.jsx)(t7.jV, { buttonRef: m(t.gameId), className: t9.BU }),
                x && (0, n.jsx)(t6.A, { game: t, widgetType: l, className: t9.vS, onRemove: () => o?.(t.gameId) }),
            ],
        });
    }
    return g
        ? (0, n.jsx)("div", { className: t4.mD })
        : x
          ? (0, n.jsx)(ie, { widgetType: l, index: a ?? 0, game: t, coverImageUrl: c, gameName: u, children: h() })
          : (0, n.jsx)("div", { className: t9.kL, children: h() });
}
function ii(e) {
    let { games: t, userId: i, widgetType: l, allowEditing: s, disableInteraction: r } = e,
        { registerItemRef: a, manageFocusOnDelete: o } = (0, tz.r)();
    return (0, n.jsx)(t2, {
        games: t,
        renderGame: (e, t) =>
            (0, n.jsx)(it, {
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
function il(e) {
    let { widgetType: t, allowEditing: i, disableInteraction: l = !1, games: s } = e,
        { getManageButtonForWidget: r } = (0, ez.r)(),
        a = r(t),
        { expanded: o, setExpanded: d } = tH(),
        c = o ? s : s.slice(0, 8),
        u = s.length > 8,
        g = (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(ii, { ...e, games: c }),
                u && (0, n.jsx)(z, { expanded: o, onClick: () => d((e) => !e) }),
            ],
        });
    return i && !l
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(tY, { widgetType: t, gameCount: s.length }),
                  (0, n.jsx)(tz.B, { emptyListFallbackRef: a, children: g }),
              ],
          })
        : g;
}
function is(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(F.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(il, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tB, { widget: i }),
    });
}
function ir(e) {
    let { user: t, widget: i, guildId: l, channelId: s, allowEditing: r, disableInteraction: a, ...o } = e;
    return (0, n.jsx)(F.A, {
        userId: t.id,
        widget: i,
        allowEditing: r,
        disableInteraction: a,
        ...o,
        children:
            i.games.length > 0
                ? (0, n.jsx)(il, {
                      userId: t.id,
                      widgetType: i.type,
                      games: i.games,
                      guildId: l,
                      channelId: s,
                      allowEditing: r,
                      disableInteraction: a,
                  })
                : (0, n.jsx)(tB, { widget: i }),
    });
}
var ia = i(297264),
    io = i(915089),
    id = i(772168);
function ic(e) {
    let { gameId: t, userId: i, onClick: l } = e,
        { coverImageUrl: s, gameName: r, isLoading: o } = (0, t5.A)(t),
        d = (0, a.bG)([E.A], () => E.A.suggestedFetchIsLoading),
        c = V.intl.formatToPlainString(V.t["3mb1s5"], { game: r });
    return o || d
        ? (0, n.jsx)("div", { className: t4.mD })
        : (0, n.jsx)(X.m, {
              text: c,
              ariaHidden: !0,
              children: (0, n.jsxs)(H.D, {
                  className: id.c9,
                  onClick: l,
                  "aria-label": c,
                  children: [
                      (0, n.jsx)(t3.A, {
                          className: id.Iv,
                          imageSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: i,
                          disableInteraction: !0,
                      }),
                      (0, n.jsx)(e6.PlusLargeIcon, { size: "md", className: id.Xv, color: ex.A.colors.WHITE }),
                  ],
              }),
          });
}
function iu(e) {
    let { userId: t, games: i, onDismiss: l, onClick: s, className: a } = e,
        o = (0, io.GV)();
    return (0, n.jsxs)("aside", {
        className: r()(id.kL, a),
        "aria-labelledby": o,
        children: [
            (0, n.jsxs)("div", {
                className: id.wx,
                children: [
                    (0, n.jsx)(H.D, {
                        className: id.r,
                        "aria-label": V.intl.string(V.t["pUR+3g"]),
                        onClick: l,
                        children: (0, n.jsx)(tS.P, { size: "sm", color: "currentColor" }),
                    }),
                    (0, n.jsx)(ia.D, {
                        id: o,
                        variant: "text-xs/medium",
                        color: "text-subtle",
                        children: V.intl.string(V.t.zMUr6Z),
                    }),
                ],
            }),
            (0, n.jsx)("ul", {
                className: id.Vg,
                children: i.map((e) => {
                    let { gameId: i } = e;
                    return (0, n.jsx)(
                        "li",
                        { children: (0, n.jsx)(ic, { onClick: () => s(i), userId: t, gameId: i }) },
                        i,
                    );
                }),
            }),
        ],
    });
}
function ig(e) {
    let { widgetType: t, ...i } = e,
        { games: s, onAddGame: r } = y(t),
        { setExpanded: a } = tH(),
        { trackUserProfileEditAction: o } = (0, eO.NJ)(),
        d = l.useCallback(
            (e) => {
                r(e),
                    a(!0),
                    (0, W.ew)({ widgetType: t, game: { gameId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t });
            },
            [r, t, o, a],
        );
    return (0, n.jsx)(iu, { games: s, onClick: d, ...i });
}
var im = i(870961);
function ix(e) {
    let { widget: t, ...i } = e;
    switch (t.type) {
        case b.x.FAVORITE_GAMES:
            return (0, n.jsx)(t0, { widget: t, ...i });
        case b.x.CURRENT_GAMES:
            return (0, n.jsx)(t$, { widget: t, ...i });
        case b.x.WANT_TO_PLAY_GAMES:
            return (0, n.jsx)(ir, { widget: t, ...i });
        case b.x.PLAYED_GAMES:
            return (0, n.jsx)(is, { widget: t, ...i });
        default:
            return null;
    }
}
function ih(e) {
    let { widget: t, user: i, allowEditing: s, disableInteraction: r, ...o } = e,
        { setExpanded: d } = tH(),
        { shouldShowSuggestions: c, handleDismissSuggestions: u } = (function (e) {
            let [t, i] = l.useState(!1),
                n = e.type,
                s = (0, a.bG)([tw.default, ty.A], () => {
                    let e = tw.default.getId();
                    if (null == e) return !1;
                    let t = ty.A.getUserProfile(e);
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
    return (0, n.jsx)(ix, {
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
                          tM,
                          { disabled: h, widgetType: t.type, widget: t, onAddGame: () => d(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: m && (0, n.jsx)(ig, { userId: i.id, widgetType: t.type, onDismiss: u, className: im.r }),
        ...o,
    });
}
function ip(e) {
    let { widget: t, ...i } = e;
    return (0, n.jsx)(tF, { widgetType: t.type, children: (0, n.jsx)(ih, { widget: t, ...i }) });
}
var iI = i(271383),
    ij = i(94160),
    iv = i(96173),
    iA = i(788259),
    iE = i(269507);
function iS(e) {
    let { userId: t } = e,
        { trackUserProfileAction: i, trackUserProfileEditAction: s } = (0, eO.NJ)(),
        r = l.useRef(!1),
        o = l.useRef(null),
        c = (0, a.bG)([ty.A], () => ty.A.getUserProfile(t)?.fetchError != null, [t]),
        [u, g] = eW(!c),
        m = (0, iv.A)();
    return (
        l.useEffect(() => {
            r.current || c || (i({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (r.current = !0));
        }, [c, i]),
        (0, n.jsxs)("div", {
            className: iE.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: iE.FS,
                    children: [
                        (0, n.jsx)(ia.D, {
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
                        className: iE.ZW,
                        "aria-label": V.intl.string(V.t["+EIBSA"]),
                        children: m.map((e) =>
                            (0, n.jsx)(
                                "li",
                                {
                                    ref: e.type === b.x.PERSONAL ? o : void 0,
                                    children: (0, n.jsx)(iA.A, {
                                        widget: e,
                                        size: "small",
                                        trackUserProfileEditAction: s,
                                    }),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    }),
                !c && (0, n.jsx)(eF, { targetElementRef: o, isVisible: u, markAsDismissed: g }),
            ],
        })
    );
}
var iC = i(366209);
function ib(e) {
    let { widget: t, ...i } = e;
    return t instanceof f.R
        ? (0, n.jsx)(L.A, { widget: t, ...i })
        : t instanceof I.Tu
          ? (0, n.jsx)(eN, { widget: t, ...i })
          : (0, p.fu)(t)
            ? (0, n.jsx)(ip, { widget: t, ...i })
            : t instanceof h.k
              ? (0, n.jsx)(tp, { widget: t, ...i })
              : null;
}
function iT() {
    return (0, n.jsxs)("div", {
        className: iC.mJ,
        children: [
            (0, n.jsx)(o.CircleInformationIcon, { size: "xs" }),
            (0, n.jsx)(d.E, { variant: "text-xs/normal", color: "text-muted", children: V.intl.string(V.t["7blcz6"]) }),
        ],
    });
}
function iN(e) {
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
    function v() {
        return (0, n.jsxs)(n.Fragment, {
            children: [
                o &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(eB, { className: iC.cG }), d && (0, n.jsx)(iT, {}), (0, n.jsx)(tT, {})],
                    }),
                r.map((e, l) =>
                    (0, n.jsx)(
                        ib,
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
        ? (0, n.jsx)(iS, { userId: t.id })
        : o
          ? (0, n.jsx)(ez.D, { children: v() })
          : v();
}
function iw(e) {
    let { user: t, ...i } = e,
        s = l.useRef(null);
    (0, k.i)({ containerRef: s });
    let a = (0, iI.k)(t.id);
    return (0, n.jsxs)(ij.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: r()(iC.XG, { [iC.az]: a }),
        fade: !0,
        children: [(0, n.jsx)(tN.A, { scrollerRef: s }), (0, n.jsx)(iN, { user: t, ...i })],
    });
}
