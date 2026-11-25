n.d(t, { u: () => tO });
var l = n(477900),
    i = n(633075),
    a = n(646976),
    s = n(289173),
    r = n(591410),
    d = n(582128),
    o = n(172218),
    c = n(540185),
    u = n(855986),
    g = n(192308),
    m = n(866665),
    x = n(408278),
    f = n(499373),
    h = n(834730),
    I = n(939249),
    p = n(775602),
    j = n(793574),
    E = n(734066),
    A = n(682176),
    C = n(111994),
    v = n(183555),
    b = n(735321),
    N = n(46653),
    S = n(851767);
function w(e) {
    return (0, u.bG)(
        [N.default, S.A],
        () => (S.A.getUserProfile(N.default.getId())?.widgets ?? []).some((t) => t.type === e),
        [e],
    );
}
var T = n(403777),
    _ = n(40989),
    R = n(765178),
    y = n(789645);
(n(323874), n(14289), n(35956));
var L = n(858899),
    k = n(762555),
    P = n(341923),
    D = n(489496),
    O = n(956050),
    G = n(132319),
    M = n(195880),
    F = n(958805),
    U = n(219222),
    X = n(518477),
    H = n(696016);
n(600253);
var K = n(792996);
function V(e) {
    let { widgetClipId: t, gameId: n, className: i } = e,
        { trackUserProfileEditAction: a } = (0, v.NJ)(),
        s = K.intl.string(K.t["4z6ldH"]);
    return (0, l.jsx)("div", {
        className: i,
        children: (0, l.jsx)(m.m, {
            text: s,
            ariaHidden: !0,
            children: (0, l.jsx)(x.K, {
                "aria-label": s,
                icon: y.XSmallIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, U._V)(t),
                        (0, b.mC)(t),
                        R.O.announce(K.intl.string(K.t.VCQXvr)),
                        a({ action: "CLIP_UPLOAD_CANCELED", widgetEdited: c.x.CLIPS_GALLERY, gameId: n }));
                },
            }),
        }),
    });
}
var W = n(741934);
n(926675);
var Y = n(265872),
    B = n(305866),
    z = n(770178),
    q = n(55999),
    Q = n(229087),
    J = n(394245),
    $ = n(382701),
    Z = n(408519);
function ee(e) {
    let { clipId: t, tags: n, allowEditing: i, disableInteraction: a = !1, onEditingChange: s } = e,
        r = i && !a,
        o = d.useMemo(() => n?.filter((e) => null != (0, J.W)(e)) ?? [], [n]),
        u = o.length > 0,
        g = r && o.length < 20,
        { trackUserProfileEditAction: m } = (0, v.NJ)(),
        x = d.useRef(null),
        f = d.useRef(new Map()),
        I = d.useRef(null),
        p = d.useRef(null),
        j = d.useRef(null),
        [E, A] = d.useState(o.length),
        [C, N] = d.useState(!1),
        [S, w] = d.useState(!1),
        T = C || S;
    (d.useEffect(() => {
        s(T);
    }, [T, s]),
        d.useEffect(() => () => s(!1), [s]));
    let _ = d.useCallback(
            (e, n) => {
                ((0, b.$6)(t, e),
                    m({ action: "added" === n ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: c.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        R = d.useCallback(() => {
            (w(!0), m({ action: "PRESS_ADD_TAG", widgetEdited: c.x.CLIPS_GALLERY }));
        }, [m]),
        y = d.useCallback(() => w(!1), []),
        L = d.useCallback(
            (e) => {
                ((0, b.Fo)(t, e), m({ action: "TAG_REMOVED", widgetEdited: c.x.CLIPS_GALLERY }));
            },
            [t, m],
        ),
        k = d.useCallback(() => {
            if (C) return;
            let e = x.current?.getBoundingClientRect().width ?? 0;
            if (0 === e || 0 === o.length) return void A(o.length);
            let t = j.current?.getBoundingClientRect().width ?? 0,
                n = I.current?.getBoundingClientRect().width ?? 0,
                l = e - (t > 0 ? t + 4 : 0),
                i = o.map((e) => f.current.get(e)?.offsetWidth ?? 0);
            function a(e, t) {
                let n = 0;
                for (let t = 0; t < e; t++) n += i[t] + 4 * (t > 0);
                return n <= t;
            }
            if (a(o.length, l)) return void A(o.length);
            let s = l - (n + 4),
                r = 0;
            for (; r < o.length && a(r + 1, s);) r++;
            A(r);
        }, [o, C]);
    (0, z.g)(x, k);
    let P = o.length - E,
        D = P > 0,
        O = d.useCallback(
            (e) => {
                (1 === P && N(!1), L(e));
            },
            [L, P],
        );
    return u || g
        ? (0, l.jsxs)("div", {
              className: Z.kL,
              ref: x,
              children: [
                  (0, l.jsxs)("ul", {
                      className: Z.xP,
                      "aria-hidden": !0,
                      children: [
                          o.map((e) =>
                              (0, l.jsx)(
                                  Q.A,
                                  {
                                      tag: e,
                                      variant: "filled",
                                      onRemove: r ? () => {} : void 0,
                                      ref: (t) => {
                                          null != t && f.current.set(e, t);
                                      },
                                  },
                                  e,
                              ),
                          ),
                          (0, l.jsx)("li", {
                              className: Z.lv,
                              ref: I,
                              children: (0, l.jsx)(h.E, {
                                  variant: "footnote/medium",
                                  color: "none",
                                  children: `+${o.length}`,
                              }),
                          }),
                      ],
                  }),
                  u &&
                      (0, l.jsx)("ul", {
                          className: Z.nM,
                          "aria-label": K.intl.string(K.t["4Rq3a7"]),
                          children: o
                              .slice(0, E)
                              .map((e) =>
                                  (0, l.jsx)(Q.A, { tag: e, variant: "filled", onRemove: r ? () => L(e) : void 0 }, e),
                              ),
                      }),
                  D &&
                      (0, l.jsx)(et, {
                          buttonRef: p,
                          numHidden: P,
                          isOpen: C,
                          onOpenChange: N,
                          disableInteraction: a,
                          children: o.map((e) =>
                              (0, l.jsx)(Q.A, { tag: e, className: Z.Hl, onRemove: r ? () => O(e) : void 0 }, e),
                          ),
                      }),
                  g && (0, l.jsx)(q.A, { tags: o, onTagsChange: _, onOpen: R, onClose: y, variant: "filled", ref: j }),
              ],
          })
        : null;
}
function et(e) {
    let { buttonRef: t, numHidden: n, isOpen: i, onOpenChange: a, disableInteraction: s, children: r } = e,
        d = K.intl.string(K.t.pWHvBI);
    return s
        ? (0, l.jsx)("div", {
              className: `${Z.lv} ${$.r9}`,
              ref: t,
              children: (0, l.jsx)(h.E, { variant: "footnote/medium", color: "none", children: `+${n}` }),
          })
        : (0, l.jsx)(Y.Y, {
              targetElementRef: t,
              position: "top",
              align: "left",
              shouldShow: i,
              onRequestOpen: () => a(!0),
              onRequestClose: () => a(!1),
              renderPopout: () =>
                  (0, l.jsx)(B.l, {
                      className: Z.Kt,
                      "aria-label": d,
                      returnRef: t,
                      children: (0, l.jsx)("ul", { className: Z.ns, children: r }),
                  }),
              children: (e) =>
                  (0, l.jsx)(m.m, {
                      text: d,
                      ariaHidden: !0,
                      children: (0, l.jsx)(I.D, {
                          ...e,
                          innerRef: t,
                          "aria-label": d,
                          "aria-expanded": i,
                          className: Z.lv,
                          children: (0, l.jsx)(h.E, { variant: "footnote/medium", color: "none", children: `+${n}` }),
                      }),
                  }),
          });
}
var en = n(503698),
    el = n.n(en),
    ei = n(3026),
    ea = n(34011),
    es = n(22231),
    er = n(404760),
    ed = n(936026);
function eo(e) {
    let { value: t, isPlaceholder: n = !1 } = e;
    return (0, l.jsx)(h.E, {
        variant: "body-sm/medium",
        color: "text-overlay-light",
        className: el()(ed.Qw, { [ed.qf]: n }),
        children: (0, l.jsx)(ei.A, { children: t }),
    });
}
function ec(e) {
    let { clipId: t, title: n, onEditingChange: i } = e,
        { trackUserProfileEditAction: a } = (0, v.NJ)(),
        s = d.useCallback(
            (e) => {
                let l = e.trim();
                l !== n.trim() &&
                    ((0, b.mI)(t, l),
                    a({ action: "CLIP_TITLE_EDITED", widgetEdited: c.x.CLIPS_GALLERY, numCharacters: l.length }));
            },
            [t, n, a],
        ),
        r = K.intl.string(K.t["2gwc+H"]);
    return (
        d.useEffect(() => (i(!1), () => i(!1)), [i]),
        (0, l.jsx)("div", {
            className: el()(er.kL, er.oE, ed.ZZ),
            children: (0, l.jsx)(ea.w, {
                value: n,
                onCommit: s,
                onFocus: () => i(!0),
                onBlur: () => i(!1),
                autoComplete: "off",
                defaultDirty: !0,
                hideLabel: !0,
                paddingBlock: "md",
                paddingInline: "sm",
                scrollIntoViewOnFocus: !0,
                preview: (0, l.jsxs)("span", {
                    className: el()(ed.$, ed.TG),
                    children: [
                        (0, l.jsx)(es.PencilIcon, { size: "xxs", color: "currentColor", className: ed.wz }),
                        "" === n.trim()
                            ? (0, l.jsx)(eo, { value: r, isPlaceholder: !0 })
                            : (0, l.jsx)(eo, { value: n }),
                    ],
                }),
                placeholder: r,
                label: K.intl.string(K.t.PDnM11),
                maxLength: 200,
            }),
        })
    );
}
function eu(e) {
    let { clipId: t, title: n, allowEditing: i, onEditingChange: a } = e,
        s = null != n && "" !== n.trim();
    return i || s
        ? i
            ? (0, l.jsx)(ec, { clipId: t, title: n ?? "", onEditingChange: a })
            : (0, l.jsx)("span", { className: ed.$, children: (0, l.jsx)(eo, { value: n ?? "" }) })
        : null;
}
var eg = n(663341),
    em = n(451395),
    ex = n(823016),
    ef = n(241326);
function eh(e) {
    let { widgetClipId: t, gameId: n, className: i } = e,
        { trackUserProfileEditAction: a } = (0, v.NJ)(),
        s = K.intl.string(K.t.ib6Mgx);
    return (0, l.jsx)("div", {
        className: i,
        children: (0, l.jsx)(m.m, {
            text: s,
            ariaHidden: !0,
            children: (0, l.jsx)(x.K, {
                "aria-label": s,
                icon: ef.TrashIcon,
                size: "sm",
                variant: "overlay-secondary",
                onClick: function () {
                    ((0, b.mC)(t),
                        R.O.announce(K.intl.string(K.t.zyPNb3)),
                        a({ action: "CLIP_REMOVED", widgetEdited: c.x.CLIPS_GALLERY, gameId: n }));
                },
            }),
        }),
    });
}
var eI = n(233002);
function ep(e) {
    let { item: t, index: n, isSelected: i, onSelect: a, allowEditing: s } = e,
        { registerDragHandleRef: r, manageFocusOnReorder: o } = (0, ex.r)(),
        { trackUserProfileEditAction: u } = (0, v.NJ)(),
        g = d.useRef(null),
        m = d.useCallback(
            (e, t) => {
                e !== t && ((0, b.N5)(e, t), u({ action: "CLIP_REORDERED", widgetEdited: c.x.CLIPS_GALLERY }));
            },
            [u],
        ),
        x = s && ("saved" === t.status || "pending" === t.status),
        f = s && "uploading" === t.status,
        h = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(I.D, {
                    className: el()(eI.Vs, { [eI.wH]: i }),
                    "aria-pressed": i,
                    "aria-label": K.intl.formatToPlainString(K.t.zrtAwA, { clipNumber: n + 1 }),
                    onClick: () => a(t.key),
                    children: (0, l.jsx)(W.A, { item: t, ringSize: "sm", className: eI.nC }),
                }),
                x &&
                    (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(em.jV, { buttonRef: r(t.key), className: eI.BU }),
                            (0, l.jsx)(eh, { widgetClipId: t.key, gameId: t.gameId, className: eI.nM }),
                        ],
                    }),
                f && (0, l.jsx)(V, { widgetClipId: t.key, gameId: t.gameId, className: eI.nM }),
            ],
        });
    return (0, l.jsx)("li", {
        ref: g,
        className: eI.NI,
        children: x
            ? (0, l.jsx)(em.mG, {
                  index: n,
                  itemId: t.key,
                  listType: c.x.CLIPS_GALLERY,
                  itemType: "WIDGET_CLIP",
                  itemPreviewProps: { item: t, getWidth: () => g.current?.offsetWidth },
                  "aria-label": K.intl.formatToPlainString(K.t.P9nKjJ, { positionNumber: n + 1 }),
                  onReorder: m,
                  onEnd: () => o(t.key),
                  className: eI.oE,
                  dropBeforeClassName: eI.A,
                  dropAfterClassName: eI.Ze,
                  draggingClassName: eI.Id,
                  children: h,
              })
            : h,
    });
}
function ej(e) {
    let { items: t, selectedKey: n, onSelect: i, onAddClip: a, allowEditing: s = !1 } = e,
        r = Math.max(0, 4 - t.length),
        d = (0, l.jsxs)("ul", {
            className: eI.Xm,
            style: { "--custom-clips-filmstrip-slots": 4 },
            children: [
                t.map((e, t) =>
                    (0, l.jsx)(ep, { item: e, index: t, isSelected: e.key === n, onSelect: i, allowEditing: s }, e.key),
                ),
                null != a &&
                    Array.from({ length: r }, (e, t) =>
                        (0, l.jsx)(
                            "li",
                            {
                                className: eI.NI,
                                children: (0, l.jsx)(I.D, {
                                    className: eI.Yn,
                                    "aria-label": K.intl.string(K.t.rI0i0a),
                                    onClick: a,
                                    children: (0, l.jsx)(eg.PlusLargeIcon, { size: "sm", color: "currentColor" }),
                                }),
                            },
                            `empty-${t}`,
                        ),
                    ),
            ],
        });
    return s ? (0, l.jsx)(ex.B, { emptyListFallbackRef: null, children: d }) : d;
}
var eE = n(729475),
    eA = n(358618),
    eC = n(983851);
function ev(e) {
    let { isMuted: t, onToggleMuted: n, onFullscreen: i } = e,
        a = K.intl.string(K.t.dcl9MQ),
        s = K.intl.string(t ? K.t.YqAjXy : K.t.w4m945);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(m.m, {
                text: a,
                ariaHidden: !0,
                children: (0, l.jsx)(x.K, {
                    "aria-label": a,
                    icon: eE.FullscreenEnterIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: i,
                }),
            }),
            (0, l.jsx)(m.m, {
                text: s,
                ariaHidden: !0,
                children: (0, l.jsx)(x.K, {
                    "aria-label": s,
                    icon: t ? eA.VoiceXIcon : eC.VoiceNormalIcon,
                    size: "sm",
                    variant: "overlay-secondary",
                    onClick: n,
                }),
            }),
        ],
    });
}
var eb = n(798108),
    eN = n(224360),
    eS = n(335978);
function ew(e) {
    let { clip: t, onAddClip: n } = e,
        i = K.intl.formatToPlainString(K.t.gPRdVj, { clipName: t.name ?? t.applicationName }),
        a = d.useCallback(() => n(t), [t, n]);
    return (0, l.jsx)(m.m, {
        text: i,
        ariaHidden: !0,
        children: (0, l.jsxs)(I.D, {
            className: eS.Vs,
            "aria-label": i,
            onClick: a,
            children: [
                (0, l.jsx)("img", { src: t.thumbnail, alt: "", className: eS.xn, loading: "lazy" }),
                (0, l.jsx)(eg.PlusLargeIcon, { size: "sm", color: "currentColor", className: eS.Xv }),
            ],
        }),
    });
}
function eT(e) {
    let { clips: t, onAddClip: n, ...i } = e;
    return (0, l.jsx)(eN.A, {
        ...i,
        children: (0, l.jsx)("ul", {
            className: eS.p_,
            children: t.map((e) =>
                (0, l.jsx)("li", { className: eS.NI, children: (0, l.jsx)(ew, { clip: e, onAddClip: n }) }, e.id),
            ),
        }),
    });
}
var e_ = n(769015),
    eR = n(409626),
    ey = n(692969),
    eL = n(202163),
    ek = n(207803),
    eP = n(485745),
    eD = n(308766);
function eO(e) {
    let { gameId: t, userId: n, className: i } = e,
        { gameRecord: a } = (0, eL.Ay)(t),
        s = (0, eP.A)(),
        r = (0, ey.A)({
            location: "WidgetClipGameIcon",
            applicationId: t,
            source: eR.GameProfileSources.UserProfile,
            sourceUserId: n,
        }),
        o = d.useCallback(
            (e) => {
                if (s) {
                    (e.preventDefault(), e.stopPropagation(), (0, ek.VQ)());
                    return;
                }
                r?.(e);
            },
            [s, r],
        ),
        c = a?.name;
    if (null == c) return null;
    let u = (0, l.jsx)(e_.A, { game: a, size: e_.M.XSMALL, allowUnknownGameIcon: !1 });
    return (0, l.jsx)(m.m, {
        text: c,
        ariaHidden: !0,
        children:
            null == r
                ? (0, l.jsx)(m.m, {
                      text: c,
                      ariaHidden: !0,
                      children: (0, l.jsx)("div", { className: i, children: u }),
                  })
                : (0, l.jsx)(I.D, {
                      className: el()(eD.v, i),
                      "aria-label": K.intl.formatToPlainString(K.t["8QLQB+"], { gameName: c }),
                      onClick: o,
                      children: u,
                  }),
    });
}
function eG(e) {
    return null != e.applicationId && 0 !== e.length;
}
var eM = n(558285),
    eF = n(608857),
    eU = n(419490),
    eX = n(409067),
    eH = n(716112);
function eK(e) {
    let { onClick: t } = e,
        n = K.intl.string(K.t.rI0i0a);
    return (0, l.jsx)(m.m, {
        text: n,
        asContainer: !0,
        ariaHidden: !0,
        children: (0, l.jsx)(x.K, {
            variant: "secondary",
            size: "sm",
            icon: f.PlusMediumIcon,
            "aria-label": n,
            onClick: t,
        }),
    });
}
function eV() {
    return (0, l.jsx)("div", {
        className: eH.p$,
        children: (0, l.jsx)(h.E, {
            variant: "body-xs/normal",
            color: "text-subtle",
            children: K.intl.format(K.t.FEcbkU, { maxClips: 4 }),
        }),
    });
}
function eW(e) {
    let t,
        i,
        { widget: a, user: s, allowEditing: r, disableInteraction: m, ...x } = e,
        [f, h] = d.useState(!1),
        [N, S] = d.useState(!1),
        [R, y] = d.useState(!0),
        Y = (0, u.bG)([p.Ay], () => p.Ay.useReducedMotion),
        B = (0, o.K)(S, 0.5),
        [z, q] = d.useState(!1),
        [Q, J] = d.useState(!1),
        $ = d.useRef(void 0),
        Z = (0, eF.A)(a),
        et =
            ((t = (0, u.yK)([eU.Ay], () => Object.values(eU.Ay.getClips()))),
            (i = (0, u.bG)([eU.Ay], () => eU.Ay.getSettings().showPovClipsInGallery)),
            d.useMemo(() => {
                let e = new Set();
                for (let t of a.clips) null != t.localClipId && e.add(t.localClipId);
                return t
                    .filter((t) => !(e.has(t.id) || !eG(t) || (!i && (0, eX.kD)(t))))
                    .sort((e, t) => {
                        let n = !0 === e.isFavorite;
                        return n !== (!0 === t.isFavorite) ? (n ? -1 : 1) : t.createdAt - e.createdAt;
                    })
                    .slice(0, 3);
            }, [t, i, a.clips])),
        [en, el] = d.useState(null),
        ei = Z.find((e) => e.key === en) ?? Z[0],
        ea = (0, E.sw)(),
        { trackUserProfileAction: es, trackUserProfileEditAction: er } = (0, v.NJ)(),
        ed = r && !0 !== m,
        eo = 0 === Z.length,
        ec = Z.length >= 4,
        eg = ed && ea && !ec,
        em = ed || Z.length > 1,
        [ex] = d.useState(() => et.length >= 3),
        [ef, eI] = d.useState(!1),
        ep = w(a.type),
        eE = eg && !ep && ex && !ef && et.length > 0,
        eA = d.useCallback(() => {
            (eI(!0), er({ action: "DISMISS_SUGGESTED_CLIPS", widgetEdited: c.x.CLIPS_GALLERY }));
        }, [er]),
        eC = d.useCallback(
            (e) => {
                (el(e), e !== ei?.key && es({ action: "SELECT_CLIP", widgetType: c.x.CLIPS_GALLERY }));
            },
            [ei?.key, es],
        ),
        eN = d.useMemo(() => (!0 === m ? [] : Z.filter(eF.K)), [Z, m]),
        eS = null != ei ? eN.findIndex((e) => e.key === ei.key) : -1,
        ew = d.useCallback(() => {
            eS < 0 ||
                (es({ action: "PRESS_PLAY_CLIP", widgetType: c.x.CLIPS_GALLERY }),
                (0, eM.A)({ clips: eN, startingIndex: eS }));
        }, [eN, eS, es]),
        e_ = d.useCallback(() => {
            let e = !R;
            (y(e), es({ action: e ? "MUTE_CLIP_PREVIEW" : "UNMUTE_CLIP_PREVIEW", widgetType: c.x.CLIPS_GALLERY }));
        }, [R, es]),
        eR = d.useCallback(() => {
            if (eS < 0) return;
            let e = eN[(eS + 1) % eN.length];
            null != e && el(e.key);
        }, [eN, eS]),
        ey = eS >= 0 && !Y && N,
        eL = (ey || f) && !z && !Q,
        ek = d.useCallback(() => {
            eS < 0 ||
                ey ||
                ($.current = window.setTimeout(() => {
                    (h(!0), es({ action: "HOVER_PLAY_CLIP", widgetType: c.x.CLIPS_GALLERY }));
                }, 150));
        }, [ey, eS, es]),
        eP = d.useCallback(() => {
            (window.clearTimeout($.current), h(!1));
        }, []);
    (d.useEffect(() => () => window.clearTimeout($.current), []),
        d.useEffect(() => {
            (0, A.v)();
        }, []));
    let eD = d.useCallback(
            (e, t) => {
                let n = (function (e, t) {
                    let n;
                    if (null == e.applicationId)
                        return ((0, L.P0)({ text: K.intl.string(K.t.xcLXWy), variant: "critical" }), null);
                    let l = (0, M.m)();
                    if (
                        !(0, b.$C)({
                            status: "uploading",
                            id: l,
                            localClipId: e.id,
                            gameId: e.applicationId,
                            title: (0, G.l)(e),
                            thumbnail: e.thumbnail,
                            clipEventsTimeline:
                                (n = (0, k.lz)(e)?.filter((e) => null != e.game) ?? []).length > 0
                                    ? n.slice(0, 100)
                                    : void 0,
                        })
                    )
                        return null;
                    let i = new AbortController();
                    return (
                        (0, U.yf)(l, i),
                        (async function (e, t, n, l, i) {
                            let { analyticsLocations: a, source: s, trackEditAction: r } = i,
                                d = "exporting";
                            try {
                                let i = await (0, D.VO)(e, { analyticsLocations: a, watermark: (0, P.s)() });
                                if (l.signal.aborted || !(0, b.iu)(t)) return;
                                ((d = "uploading"),
                                    (async function (e, t) {
                                        let n = URL.createObjectURL(t);
                                        try {
                                            let t = await (0, O.m)(n, 0);
                                            (0, b.QN)(e, t);
                                        } catch (e) {
                                            H.GU.warn(
                                                `Clips gallery widget thumbnail refresh failed; keeping placeholder: ${e}`,
                                            );
                                        } finally {
                                            URL.revokeObjectURL(n);
                                        }
                                    })(t, i).catch(() => {}));
                                let o = new File([i], "clip.mp4", { type: "video/mp4" }),
                                    u = await F.A.uploadWidgetClip(o, {
                                        onProgress: (e) => (0, U.Fj)(t, e),
                                        signal: l.signal,
                                    });
                                if (!(0, b.WX)(t, u)) return;
                                r({
                                    action: s === X.IE.PICKER ? "CLIP_ADDED_FROM_PICKER" : "CLIP_ADDED_FROM_SUGGESTED",
                                    widgetEdited: c.x.CLIPS_GALLERY,
                                    gameId: n,
                                });
                            } catch (i) {
                                if (l.signal.aborted) return;
                                ((0, b.mC)(t),
                                    H.GU.error("Failed to upload a clip for the clips gallery widget", i, {
                                        stage: d,
                                        clipType: e.type,
                                        crop: e.editMetadata?.crop,
                                        trackTypes: e.tracks?.map((e) => e.type),
                                    }),
                                    (0, L.P0)({ text: K.intl.string(K.t.iufib1), variant: "critical" }),
                                    r({
                                        action: "exporting" === d ? "CLIP_EXPORT_FAILED" : "CLIP_UPLOAD_FAILED",
                                        widgetEdited: c.x.CLIPS_GALLERY,
                                        gameId: n,
                                    }));
                            } finally {
                                (0, U.cG)(t);
                            }
                        })(e, l, e.applicationId, i, t),
                        l
                    );
                })(e, { analyticsLocations: [j.A.USER_PROFILE_MODAL_V2], source: t, trackEditAction: er });
                null != n && el(n);
            },
            [er],
        ),
        eW = d.useCallback((e) => eD(e, X.IE.SUGGESTED), [eD]),
        eY = d.useCallback(() => {
            (er({ action: "PRESS_ADD_CLIP", widgetEdited: c.x.CLIPS_GALLERY }),
                (0, g.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(409495),
                            n.e(685432),
                            n.e(269714),
                            n.e(19385),
                            n.e(718955),
                            n.e(126301),
                            n.e(201074),
                            n.e(879641),
                            n.e(216112),
                            n.e(498167),
                            n.e(553829),
                            n.e(624872),
                            n.e(865257),
                            n.e(228767),
                            n.e(323079),
                            n.e(437655),
                            n.e(626501),
                            n.e(5257),
                            n.e(970846),
                            n.e(795807),
                            n.e(491279),
                            n.e(317225),
                            n.e(538887),
                            n.e(124060),
                            n.e(146566),
                            n.e(32661),
                            n.e(696123),
                            n.e(918024),
                            n.e(124006),
                            n.e(73500),
                            n.e(959134),
                            n.e(371482),
                            n.e(237834),
                            n.e(480436),
                            n.e(875842),
                            n.e(858337),
                            n.e(838090),
                            n.e(97210),
                            n.e(203930),
                            n.e(903663),
                            n.e(820683),
                            n.e(781202),
                            n.e(757598),
                            n.e(177104),
                            n.e(901922),
                            n.e(583518),
                            n.e(529570),
                            n.e(507406),
                            n.e(100126),
                            n.e(466147),
                            n.e(16954),
                            n.e(501962),
                            n.e(17736),
                            n.e(350681),
                            n.e(280559),
                            n.e(156132),
                            n.e(974049),
                            n.e(237715),
                            n.e(895008),
                            n.e(231782),
                            n.e(827037),
                            n.e(377683),
                            n.e(698101),
                            n.e(746623),
                            n.e(306270),
                            n.e(291365),
                            n.e(626750),
                            n.e(689160),
                            n.e(520342),
                            n.e(401997),
                        ]).then(n.bind(n, 852956));
                        return (t) =>
                            (0, l.jsx)(e, {
                                ...t,
                                initialMainLink: C.oH.ALL_CLIPS,
                                picker: {
                                    onPick: (e) => {
                                        (((e) => eD(e, X.IE.PICKER))(e), t.onClose());
                                    },
                                    action: C.qh.UPLOAD,
                                    filterClip: eG,
                                    allowMultiSelect: !1,
                                },
                            });
                    },
                    { modalKey: H.nm },
                ));
        }, [eD, er]);
    return (0, l.jsx)(_.A, {
        userId: s.id,
        widget: a,
        allowEditing: r,
        disableInteraction: m,
        headerTitle: (0, b.L)(a),
        headerSubtitle: ed && !eo ? K.intl.format(K.t.pb2Was, { numClips: 4 }) : void 0,
        headerActionButtons: eg && eo ? [(0, l.jsx)(eK, { onClick: eY }, "clips-gallery-add-clip")] : void 0,
        trailingContent:
            eE &&
            (0, l.jsx)("div", {
                className: eH.$k,
                children: (0, l.jsx)(eT, { clips: et, onAddClip: eW, onDismiss: eA }),
            }),
        ...x,
        children:
            null != ei
                ? (0, l.jsxs)("div", {
                      className: eH.nV,
                      children: [
                          (0, l.jsxs)("div", {
                              ref: B,
                              className: eH.aM,
                              onMouseEnter: ek,
                              onMouseLeave: eP,
                              children: [
                                  (0, l.jsx)(W.A, {
                                      item: ei,
                                      ringSize: "lg",
                                      isPlaying: eL,
                                      isMuted: R,
                                      modalKey: (0, T.n1)(s.id, x.guildId),
                                      fit: "contain",
                                      onEnded: eN.length > 1 ? eR : void 0,
                                      className: eH.VH,
                                  }),
                                  eS >= 0 &&
                                      !z &&
                                      !Q &&
                                      (0, l.jsx)(I.D, {
                                          className: eH.Hf,
                                          "aria-label": K.intl.string(K.t.CscLHM),
                                          onClick: ew,
                                      }),
                                  ("saved" === ei.status || "pending" === ei.status) &&
                                      (0, l.jsx)(eO, { gameId: ei.gameId, userId: s.id, className: eH.AT }),
                                  ed &&
                                      "uploading" === ei.status &&
                                      (0, l.jsx)(V, { widgetClipId: ei.key, gameId: ei.gameId, className: eH.MY }),
                                  ed
                                      ? ("saved" === ei.status || "pending" === ei.status) &&
                                        (0, l.jsx)("div", {
                                            className: eH.nP,
                                            children: (0, l.jsx)(eh, { widgetClipId: ei.key, gameId: ei.gameId }),
                                        })
                                      : eS >= 0 &&
                                        (0, l.jsx)("div", {
                                            className: eH.nP,
                                            children: (0, l.jsx)(ev, {
                                                isMuted: R,
                                                onToggleMuted: e_,
                                                onFullscreen: ew,
                                            }),
                                        }),
                                  (0, l.jsx)(eb.A, {
                                      children:
                                          ("saved" === ei.status || "pending" === ei.status) &&
                                          (0, l.jsxs)(l.Fragment, {
                                              children: [
                                                  (0, l.jsx)(eu, {
                                                      clipId: ei.key,
                                                      title: ei.title,
                                                      allowEditing: ed,
                                                      onEditingChange: q,
                                                  }),
                                                  (0, l.jsx)(ee, {
                                                      clipId: ei.key,
                                                      tags: ei.tags,
                                                      allowEditing: r,
                                                      disableInteraction: m,
                                                      onEditingChange: J,
                                                  }),
                                              ],
                                          }),
                                  }),
                              ],
                          }),
                          em &&
                              (0, l.jsx)(ej, {
                                  items: Z,
                                  selectedKey: ei.key,
                                  onSelect: eC,
                                  onAddClip: eg ? eY : void 0,
                                  allowEditing: ed,
                              }),
                      ],
                  })
                : (0, l.jsx)(eV, {}),
    });
}
var eY = n(896170),
    eB = n(873200),
    ez = n(168017),
    eq = n(778747),
    eQ = n(321108),
    eJ = n(106191),
    e$ = n(404277),
    eZ = n(939200),
    e0 = n(813832),
    e1 = n(67710);
function e2(e) {
    let { renderGameListItem: t } = e,
        { extraChromeEnabled: n } = ez.A.useConfig({ location: "browse_games_popout" });
    return (0, l.jsx)(eB.X2, { maxVisibleItems: 7, renderListItem: n ? t : void 0 });
}
function e8(e) {
    let { widgetType: t, widget: n, onAddGame: i, children: a, ...s } = e,
        r = d.useMemo(() => new Set(n.games.map((e) => e.gameId)), [n.games]),
        { trackUserProfileEditAction: o } = (0, v.NJ)(),
        [c, u] = d.useState(""),
        g = d.useRef(""),
        {
            options: m,
            matchSorterOptions: x,
            metadataByGameId: f,
            onSelect: I,
            endSession: p,
        } = (0, eZ.R)({ surface: eq.K.PROFILE_WIDGET, query: c }),
        j = c.trim().length > 0,
        { gameIds: E, onAddGame: A } = (0, e0.S)(t),
        C = (0, eQ.A)(E),
        N = d.useCallback(
            (e) => {
                (I(e),
                    (0, b.ew)({ widgetType: t, game: { gameId: e } }),
                    R.O.announce(K.intl.string(K.t.q0U3DE)),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: t }),
                    E.includes(e) && A(e),
                    i?.());
            },
            [t, o, i, E, A, I],
        ),
        S = d.useMemo(() => {
            let e = new Map(
                m.map((e) => [
                    String(e.value),
                    { id: String(e.value), value: String(e.value), label: e.label, disabled: r.has(e.value) },
                ]),
            );
            if (j) return [...e.values()];
            let t = C.filter((e) => !r.has(e.id) && (0, b.XX)(e)).map((e) => ({
                    id: String(e.id),
                    value: String(e.id),
                    label: e.name,
                    disabled: !1,
                })),
                n = new Set(t.map((e) => e.id)),
                l = [...e.values()].filter((e) => !n.has(e.id));
            return [...t, ...l];
        }, [m, r, C, j]),
        w = d.useMemo(() => {
            let e = new Map(f);
            for (let t of C) e.set(t.id, { icon: t.media?.icon, platformAvailability: t.platformAvailability });
            return e;
        }, [f, C]),
        T = d.useCallback(
            (e) => {
                let t = e.value,
                    n = null != t ? w.get(t) : void 0;
                return (0, l.jsxs)("div", {
                    className: e1.mN,
                    children: [
                        null != t &&
                            (0, l.jsx)(eJ.A, {
                                game: { id: t, icon: n?.icon },
                                iconClassName: e1.DG,
                                withBackground: !0,
                            }),
                        (0, l.jsx)(h.E, {
                            variant: "body-md/medium",
                            color: "currentColor",
                            lineClamp: 1,
                            className: e1.EF,
                            children: e.label,
                        }),
                        (0, l.jsx)(e$.A, { platforms: n?.platformAvailability }),
                    ],
                });
            },
            [w],
        ),
        _ = d.useCallback((e) => e, []),
        y = d.useMemo(() => ({ ...x, threshold: eY.Ht.rankings.CONTAINS, keys: ["label"] }), [x]),
        L = d.useCallback((e) => (j || "" === e.trim() ? S.length : (0, eY.Ht)(S, e, y).length), [j, S, y]),
        k = d.useCallback(
            (e) => {
                let n = e.target.value;
                ("" === c.trim() &&
                    "" !== n.trim() &&
                    o({
                        action: "GAME_SEARCH_SESSION_STARTED",
                        widgetEdited: t,
                        numCharacters: n.trim().length,
                        numResults: L(n),
                    }),
                    u(n),
                    (g.current = n));
            },
            [c, o, t, L],
        );
    return (0, l.jsx)(Y.Y, {
        ...s,
        onRequestOpen: () => {
            (o({ action: "PRESS_ADD_GAME", widgetEdited: t }), u(""), (g.current = ""));
        },
        onRequestClose: () => {
            (p(),
                o({
                    action: "GAME_SEARCH_SESSION_ENDED",
                    widgetEdited: t,
                    numCharacters: g.current.trim().length,
                    numResults: L(g.current),
                }));
        },
        renderPopout: (e) => {
            let { closePopout: t } = e;
            return (0, l.jsx)(B.l, {
                className: e1.C2,
                "aria-label": K.intl.string(K.t.uqw8wK),
                children: (0, l.jsxs)(eB.iS, {
                    selectionMode: "single",
                    value: null,
                    onSelectionChange: (e) => {
                        null != e && (N(e), t(), p());
                    },
                    options: S,
                    matchSorterOptions: y,
                    customMatchSorter: j ? _ : void 0,
                    children: [
                        (0, l.jsx)(eB.a3, {
                            label: K.intl.string(K.t["5h0QOP"]),
                            hideLabel: !0,
                            placeholder: K.intl.string(K.t["5h0QOP"]),
                            autoFocus: !0,
                            onQueryChange: k,
                        }),
                        (0, l.jsx)(e2, { renderGameListItem: T }),
                    ],
                }),
            });
        },
        children: (e) => a(e),
    });
}
function e9(e) {
    let { disabled: t, ...n } = e,
        i = d.useRef(null);
    return (0, l.jsx)(e8, {
        targetElementRef: i,
        position: "bottom",
        align: "center",
        ...n,
        children: (e) =>
            (0, l.jsx)(m.m, {
                text: K.intl.string(K.t.PYyENc),
                asContainer: !0,
                ariaHidden: !0,
                children: (0, l.jsx)(x.K, {
                    buttonRef: i,
                    variant: "secondary",
                    size: "sm",
                    icon: f.PlusMediumIcon,
                    "aria-label": K.intl.string(K.t.PYyENc),
                    disabled: t,
                    ...e,
                }),
            }),
    });
}
function e6(e) {
    let t = d.useRef(null);
    return (0, l.jsx)(e8, {
        targetElementRef: t,
        position: "right",
        align: "top",
        ...e,
        children: (e) =>
            (0, l.jsx)(I.D, {
                innerRef: t,
                className: e1.cV,
                "aria-label": K.intl.string(K.t.PYyENc),
                ...e,
                children: (0, l.jsx)(eg.PlusLargeIcon, { color: "currentColor" }),
            }),
    });
}
var e5 = n(61881);
let e7 = d.createContext(null);
function e3(e) {
    let { widgetType: t, children: n } = e,
        i = (0, u.bG)([e5.A], () => {
            let e = e5.A.getPendingWidgets();
            if (null == e) return !1;
            let n = e.find((e) => e.type === t);
            if (null == n) return !1;
            let l = (0, b.cv)(t);
            return n.games.length > l;
        }),
        [a, s] = d.useState(i),
        r = d.useMemo(() => ({ expanded: a, setExpanded: s }), [a]);
    return (0, l.jsx)(e7.Provider, { value: r, children: n });
}
function e4() {
    let e = d.useContext(e7);
    if (null == e)
        throw Error("useGameWidgetExpandCollapse must be used within a GameWidgetExpandCollapseContextProvider");
    return e;
}
var te = n(67438);
function tt(e) {
    let { widget: t } = e,
        n = (0, b.cv)(t.type),
        i = 1 === n,
        a = i ? K.intl.string(K.t["3FdPBT"]) : K.intl.format(K.t.W8K2GH, { maxGames: n });
    return (0, l.jsxs)("div", {
        className: i ? te.O : te.k,
        children: [
            i && (0, l.jsx)(e6, { widget: t, widgetType: t.type }),
            (0, l.jsx)(h.E, { variant: "body-xs/normal", color: "text-subtle", children: a }),
        ],
    });
}
var tn = n(683071),
    tl = n(312252);
function ti(e) {
    let { widgetType: t, gameCount: n } = e,
        i = (0, b.cv)(t);
    return n <= i
        ? null
        : (0, l.jsx)("div", {
              className: tl.l,
              children: (0, l.jsx)(tn.w, {
                  type: "warning",
                  message: K.intl.formatToPlainString(K.t.Rv3wYq, { maxGames: i }),
                  role: "alert",
              }),
          });
}
var ta = n(132085),
    ts = n(192),
    tr = n(954165);
function td(e) {
    let { onClick: t, expanded: n } = e;
    return (0, l.jsx)(I.D, {
        onClick: t,
        className: tr.x,
        "aria-expanded": n,
        children: (0, l.jsx)(h.E, {
            variant: "body-sm/medium",
            color: "none",
            children: n ? K.intl.string(K.t["6MwJo/"]) : K.intl.string(K.t.lBeKY2),
        }),
    });
}
var to = n(148420);
function tc(e) {
    let { games: t, user: n, widgetType: i, ...a } = e,
        { registerItemRef: s, manageFocusOnDelete: r } = (0, ex.r)();
    return (0, l.jsx)("ul", {
        className: to.h,
        children: t.map((e, t) =>
            (0, l.jsx)(
                "li",
                {
                    children: (0, l.jsx)(ta.A, {
                        index: t,
                        user: n,
                        game: e,
                        widgetType: i,
                        coverRef: s(e.gameId),
                        onRemoveGame: r,
                        ...a,
                    }),
                },
                e.gameId,
            ),
        ),
    });
}
function tu(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: i = !1, games: a } = e,
        { getManageButtonForWidget: s } = (0, ts.r)(),
        r = s(t),
        { expanded: d, setExpanded: o } = e4(),
        c = d ? a : a.slice(0, 2),
        u = a.length > 2,
        g = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tc, { ...e, games: c }),
                u && (0, l.jsx)(td, { expanded: d, onClick: () => o((e) => !e) }),
            ],
        });
    return n && !i
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(ti, { widgetType: t, gameCount: a.length }),
                  (0, l.jsx)(ex.B, { emptyListFallbackRef: r, children: g }),
              ],
          })
        : g;
}
function tg(e) {
    let { user: t, widget: n, guildId: i, channelId: a, allowEditing: s, disableInteraction: r, ...d } = e;
    return (0, l.jsx)(_.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...d,
        children:
            n.games.length > 0
                ? (0, l.jsx)(tu, {
                      user: t,
                      widgetType: n.type,
                      games: n.games,
                      guildId: i,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, l.jsx)(tt, { widget: n }),
    });
}
function tm(e) {
    let { user: t, widget: n, guildId: i, channelId: a, allowEditing: s, disableInteraction: r, ...d } = e,
        o = n.games[0];
    return (0, l.jsx)(_.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...d,
        children:
            null != o
                ? (0, l.jsx)(ta.A, {
                      user: t,
                      widgetType: n.type,
                      game: o,
                      guildId: i,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, l.jsx)(tt, { widget: n }),
    });
}
var tx = n(793693);
function tf(e) {
    let { games: t, renderGame: n } = e;
    return (0, l.jsx)("ul", {
        className: tx.V,
        children: t.map((e, t) => (0, l.jsx)("li", { children: n(e, t) }, e.gameId)),
    });
}
var th = n(675816),
    tI = n(201438),
    tp = n(788593),
    tj = n(858808),
    tE = n(365611),
    tA = n(900850);
function tC(e) {
    let { index: t, widgetType: n, game: i, coverImageUrl: a, iconImageUrl: s, gameName: r, children: o } = e,
        { manageFocusOnReorder: c } = (0, ex.r)(),
        u = d.useRef(null);
    return (0, l.jsx)(em.mG, {
        index: t,
        itemId: i.gameId,
        listType: n,
        itemType: "GAME_COVER",
        itemPreviewProps: { imageSrc: a, iconSrc: s, gameName: r, getWidth: () => u.current?.offsetWidth },
        "aria-label": K.intl.formatToPlainString(K.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, b.Un)(n, e, t),
        onEnd: () => c(i.gameId),
        className: tA.kL,
        dropBeforeClassName: tA.A,
        dropAfterClassName: tA.Ze,
        draggingClassName: tA.Id,
        children: (0, l.jsx)("div", { ref: u, className: tA.An, children: o }),
    });
}
function tv(e) {
    let {
            game: t,
            userId: n,
            widgetType: i,
            allowEditing: a,
            disableInteraction: s = !1,
            index: r,
            onRemoveGame: d,
            coverRef: o,
        } = e,
        { coverImageUrl: c, iconImageUrl: u, gameName: g, isLoading: m } = (0, tI.A)(t.gameId),
        { registerDragHandleRef: x } = (0, ex.r)(),
        f = a && !s,
        { isDragging: h } = (0, th.V)((e) => ({ isDragging: e.isDragging() }));
    function I() {
        return (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tp.A, {
                    imageSrc: c,
                    iconSrc: u,
                    gameName: g,
                    gameId: t.gameId,
                    userId: n,
                    disableInteraction: s,
                    className: (null == c && null == u) || s ? void 0 : tE.iL,
                    hideTooltip: h,
                    coverRef: o,
                }),
                f && (0, l.jsx)(em.jV, { buttonRef: x(t.gameId), className: tA.BU }),
                f && (0, l.jsx)(tj.A, { game: t, widgetType: i, className: tA.vS, onRemove: () => d?.(t.gameId) }),
            ],
        });
    }
    return m
        ? (0, l.jsx)("div", { className: tE.mD })
        : f
          ? (0, l.jsx)(tC, {
                widgetType: i,
                index: r ?? 0,
                game: t,
                coverImageUrl: c,
                iconImageUrl: u,
                gameName: g,
                children: I(),
            })
          : (0, l.jsx)("div", { className: tA.kL, children: I() });
}
function tb(e) {
    let { games: t, userId: n, widgetType: i, allowEditing: a, disableInteraction: s } = e,
        { registerItemRef: r, manageFocusOnDelete: d } = (0, ex.r)();
    return (0, l.jsx)(tf, {
        games: t,
        renderGame: (e, t) =>
            (0, l.jsx)(tv, {
                index: t,
                game: e,
                userId: n,
                widgetType: i,
                allowEditing: a,
                disableInteraction: s,
                coverRef: r(e.gameId),
                onRemoveGame: d,
            }),
    });
}
function tN(e) {
    let { widgetType: t, allowEditing: n, disableInteraction: i = !1, games: a } = e,
        { getManageButtonForWidget: s } = (0, ts.r)(),
        r = s(t),
        { expanded: d, setExpanded: o } = e4(),
        c = d ? a : a.slice(0, 8),
        u = a.length > 8,
        g = (0, l.jsxs)(l.Fragment, {
            children: [
                (0, l.jsx)(tb, { ...e, games: c }),
                u && (0, l.jsx)(td, { expanded: d, onClick: () => o((e) => !e) }),
            ],
        });
    return n && !i
        ? (0, l.jsxs)(l.Fragment, {
              children: [
                  (0, l.jsx)(ti, { widgetType: t, gameCount: a.length }),
                  (0, l.jsx)(ex.B, { emptyListFallbackRef: r, children: g }),
              ],
          })
        : g;
}
function tS(e) {
    let { user: t, widget: n, guildId: i, channelId: a, allowEditing: s, disableInteraction: r, ...d } = e;
    return (0, l.jsx)(_.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...d,
        children:
            n.games.length > 0
                ? (0, l.jsx)(tN, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: i,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, l.jsx)(tt, { widget: n }),
    });
}
function tw(e) {
    let { user: t, widget: n, guildId: i, channelId: a, allowEditing: s, disableInteraction: r, ...d } = e;
    return (0, l.jsx)(_.A, {
        userId: t.id,
        widget: n,
        allowEditing: s,
        disableInteraction: r,
        ...d,
        children:
            n.games.length > 0
                ? (0, l.jsx)(tN, {
                      userId: t.id,
                      widgetType: n.type,
                      games: n.games,
                      guildId: i,
                      channelId: a,
                      allowEditing: s,
                      disableInteraction: r,
                  })
                : (0, l.jsx)(tt, { widget: n }),
    });
}
var tT = n(646514),
    t_ = n(875620);
function tR(e) {
    let { gameId: t, userId: n, onClick: i } = e,
        { coverImageUrl: a, iconImageUrl: s, gameName: r, isLoading: d } = (0, tI.A)(t),
        o = (0, u.bG)([e5.A], () => e5.A.suggestedFetchIsLoading),
        c = K.intl.formatToPlainString(K.t["3mb1s5"], { game: r });
    return d || o
        ? (0, l.jsx)("div", { className: tE.mD })
        : (0, l.jsx)(m.m, {
              text: c,
              ariaHidden: !0,
              children: (0, l.jsxs)(I.D, {
                  className: t_.c9,
                  onClick: i,
                  "aria-label": c,
                  children: [
                      (0, l.jsx)(tp.A, {
                          className: t_.Iv,
                          imageSrc: a,
                          iconSrc: s,
                          gameName: r,
                          gameId: t,
                          userId: n,
                          disableInteraction: !0,
                      }),
                      (0, l.jsx)(eg.PlusLargeIcon, { size: "md", className: t_.Xv, color: tT.A.colors.WHITE }),
                  ],
              }),
          });
}
function ty(e) {
    let { userId: t, widgetType: n, ...i } = e,
        { games: a, onAddGame: s } = (0, e0.S)(n),
        { setExpanded: r } = e4(),
        { trackUserProfileEditAction: o } = (0, v.NJ)(),
        c = d.useCallback(
            (e) => {
                (s(e),
                    r(!0),
                    (0, b.ew)({ widgetType: n, game: { gameId: e } }),
                    o({ action: "GAME_ADDED", gameId: e, widgetEdited: n }));
            },
            [s, n, o, r],
        );
    return (0, l.jsx)(eN.A, {
        ...i,
        children: (0, l.jsx)("ul", {
            className: t_.Vg,
            children: a.map((e) => {
                let { gameId: n } = e;
                return (0, l.jsx)("li", { children: (0, l.jsx)(tR, { onClick: () => c(n), userId: t, gameId: n }) }, n);
            }),
        }),
    });
}
var tL = n(870961);
function tk(e) {
    let { widget: t, ...n } = e;
    switch (t.type) {
        case c.x.FAVORITE_GAMES:
            return (0, l.jsx)(tm, { widget: t, ...n });
        case c.x.CURRENT_GAMES:
            return (0, l.jsx)(tg, { widget: t, ...n });
        case c.x.WANT_TO_PLAY_GAMES:
            return (0, l.jsx)(tw, { widget: t, ...n });
        case c.x.PLAYED_GAMES:
            return (0, l.jsx)(tS, { widget: t, ...n });
        default:
            return null;
    }
}
function tP(e) {
    let { widget: t, user: n, allowEditing: i, disableInteraction: a, ...s } = e,
        { setExpanded: r } = e4(),
        { shouldShowSuggestions: o, handleDismissSuggestions: c } = (function (e) {
            let [t, n] = d.useState(!1),
                l = w(e.type),
                i = (0, b.uA)(e);
            return {
                shouldShowSuggestions: !l && !t && !i,
                handleDismissSuggestions: d.useCallback(() => {
                    n(!0);
                }, []),
            };
        })(t),
        u = i && !a,
        g = u && o,
        m = (0, b.L)(t),
        x = (0, b.FM)(t, { showEditingControls: u }),
        f = (0, b.uA)(t),
        h = 1 === (0, b.cv)(t.type);
    return (0, l.jsx)(tk, {
        widget: t,
        user: n,
        allowEditing: i,
        disableInteraction: a,
        headerTitle: m,
        headerSubtitle: x,
        headerActionButtons:
            u && !h
                ? [
                      (0, l.jsx)(
                          e9,
                          { disabled: f, widgetType: t.type, widget: t, onAddGame: () => r(!0) },
                          `${t.type}-browse-games-popout`,
                      ),
                  ]
                : void 0,
        trailingContent: g && (0, l.jsx)(ty, { userId: n.id, widgetType: t.type, onDismiss: c, className: tL.r }),
        ...s,
    });
}
function tD(e) {
    let { widget: t, ...n } = e;
    return (0, l.jsx)(e3, { widgetType: t.type, children: (0, l.jsx)(tP, { widget: t, ...n }) });
}
function tO(e) {
    let { widget: t, ...n } = e;
    return t instanceof i.R
        ? (0, l.jsx)(r.A, { widget: t, ...n })
        : (0, s.fu)(t)
          ? (0, l.jsx)(tD, { widget: t, ...n })
          : t instanceof a.kM
            ? (0, l.jsx)(eW, { widget: t, ...n })
            : null;
}
