n.d(t, { A: () => z });
var l = n(477900),
    i = n(582128),
    a = n(503698),
    s = n.n(a);
n(926675);
var r = n(534514),
    d = n(939249),
    o = n(140735),
    c = n(834730),
    u = n(216964),
    g = n(646514),
    m = n(34011),
    x = n(915089),
    f = n(409626),
    h = n(692969),
    I = n(201438),
    p = n(562153),
    j = n(183555),
    E = n(735321),
    A = n(451395),
    C = n(823016),
    v = n(788593),
    b = n(492280),
    N = n(866665),
    S = n(147925),
    w = n(55999),
    T = n(229087),
    _ = n(394245),
    R = n(229231),
    y = n(792996),
    L = n(149253);
function k(e) {
    let { tags: t, allowEditing: n, widgetType: a, gameId: r, className: d, disableInteraction: o = !1 } = e,
        c = n && !o,
        u = t?.filter((e) => null != (0, _.W)(e)) ?? [],
        g = u.length > 0,
        m = c && (0, R.mS)(a) && u.length < 20,
        { trackUserProfileAction: x, trackUserProfileEditAction: f } = (0, j.NJ)(),
        h = (0, i.useRef)(new Map()),
        I = (0, i.useRef)(null),
        p = (0, i.useRef)(null),
        [A, C] = (0, i.useState)(0),
        [v, b] = (0, i.useState)(!1),
        N = G(I, p, u, h, C),
        S = (0, i.useCallback)(
            (e, t) => {
                ((0, E.s1)(a, r, e),
                    f({ action: "added" === t ? "TAG_ADDED" : "TAG_REMOVED", widgetEdited: a, gameId: r }));
            },
            [a, r, f],
        ),
        k = (0, i.useCallback)(() => {
            f({ action: "PRESS_ADD_TAG", widgetEdited: a });
        }, [f, a]);
    if (
        ((0, i.useEffect)(
            () => (
                N(),
                window.addEventListener("resize", N),
                () => {
                    window.removeEventListener("resize", N);
                }
            ),
            [N, u?.join("")],
        ),
        !g && !m)
    )
        return null;
    let P = v ? u : u.slice(0, u.length - A);
    return (0, l.jsxs)("div", {
        className: s()(L.I4, d),
        children: [
            g &&
                (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsx)("ul", {
                            className: L.Tw,
                            "aria-label": y.intl.string(y.t.EfjTi4),
                            children: P.map((e) =>
                                (0, l.jsx)(
                                    T.A,
                                    {
                                        tag: e,
                                        onRemove: c
                                            ? () => {
                                                  ((0, E.tg)(a, r, e),
                                                      f({ action: "TAG_REMOVED", widgetEdited: a, gameId: r }));
                                              }
                                            : void 0,
                                        ref: (t) => {
                                            null != t && h.current.set(e, t);
                                        },
                                    },
                                    e,
                                ),
                            ),
                        }),
                        A > 0 &&
                            (0, l.jsx)(O, {
                                buttonRef: I,
                                isExpanded: v,
                                numberOfOverflowingTags: A,
                                onExpandTags: () => {
                                    (b(!0), x({ action: "EXPAND_GAME_TAGS" }));
                                },
                                onCollapseTags: () => {
                                    (b(!1), x({ action: "COLLAPSE_GAME_TAGS" }));
                                },
                                disableInteraction: o,
                            }),
                    ],
                }),
            m && (0, l.jsx)(w.A, { tags: t, onTagsChange: S, onOpen: k, ref: p }),
        ],
    });
}
function P(e) {
    let { numberOfOverflowingTags: t } = e;
    return (0, l.jsx)(c.E, { variant: "footnote/medium", color: "none", children: `+${t}` });
}
function D() {
    return (0, l.jsx)(S.A, { direction: S.A.Directions.LEFT, width: 12, height: 12, className: L.OW });
}
function O(e) {
    let {
            isExpanded: t,
            numberOfOverflowingTags: n,
            onExpandTags: i,
            onCollapseTags: a,
            disableInteraction: r,
            buttonRef: o,
        } = e,
        c = t ? y.intl.string(y.t.z9VPrQ) : y.intl.string(y.t.mriLXL),
        u = t ? y.intl.string(y.t.z9VPrQ) : y.intl.formatToPlainString(y.t.F6iMs4, { count: n });
    return r
        ? (0, l.jsx)("div", {
              className: s()(L.X1, L.r9),
              ref: o,
              children: (0, l.jsx)(P, { numberOfOverflowingTags: n }),
          })
        : (0, l.jsx)(N.m, {
              text: c,
              ariaHidden: t,
              children: (0, l.jsx)(d.D, {
                  innerRef: o,
                  onClick: t ? a : i,
                  "aria-label": u,
                  className: t ? L.cS : L.X1,
                  children: t ? (0, l.jsx)(D, {}) : (0, l.jsx)(P, { numberOfOverflowingTags: n }),
              }),
          });
}
let G = (e, t, n, l, a) =>
    (0, i.useCallback)(() => {
        if (null == n) return void a(0);
        let i = e.current?.getBoundingClientRect().width ?? 0,
            s = t.current?.getBoundingClientRect().width ?? 0,
            r = s > 0 ? 8 : 4,
            d = 0,
            o = 0,
            c = l.current;
        for (let e = 0; e < n.length; e++) {
            let t = c.get(n[e]);
            if (null != t) {
                if ((o += t.offsetWidth + 4) > 296) break;
                d++;
            }
        }
        o = 0;
        for (let e = d; e < n.length; e++) {
            let t = c.get(n[e]);
            if (null != t) {
                if ((o += t.offsetWidth + 4) > 296 - i - s - r) break;
                d++;
            }
        }
        a(n.length - d);
    }, [e, t, n?.join(""), l, a]);
var M = n(858808),
    F = n(404760),
    U = n(365611),
    X = n(207730);
function H(e) {
    let { index: t, widgetType: n, game: i, children: a, getWidth: s } = e,
        { manageFocusOnReorder: r } = (0, C.r)();
    return (0, l.jsx)(A.mG, {
        index: t,
        itemId: i.gameId,
        listType: n,
        itemType: "GAME_DETAILS_CARD",
        itemPreviewProps: { game: i, widgetType: n, getWidth: s },
        "aria-label": y.intl.formatToPlainString(y.t["0dR3gw"], { positionNumber: t + 1 }),
        onReorder: (e, t) => (0, E.Un)(n, e, t),
        onEnd: () => r(i.gameId),
        className: X.vF,
        dropBeforeClassName: X.A,
        dropAfterClassName: X.Ze,
        draggingClassName: X.Id,
        children: a,
    });
}
function K(e) {
    let { gameId: t, userId: n, gameName: i, ...a } = e,
        s = (0, h.A)({
            location: "UserProfileWidgetGameDetailsCard",
            gameId: t,
            source: f.GameProfileSources.UserProfile,
            sourceUserId: n,
            trackEntryPointImpression: !0,
        });
    return null == s
        ? (0, l.jsx)(r.D, { ...a, children: i })
        : (0, l.jsx)(r.D, { ...a, children: (0, l.jsx)(d.D, { onClick: s, className: X.sd, children: i }) });
}
function W(e) {
    let { user: t, guildId: n, channelId: i, id: a } = e;
    return (0, l.jsx)(o.A, { id: a, children: y.intl.format(y.t.TM0XDY, { name: p.Ay.getName(n, i, t) }) });
}
function V(e) {
    let { text: t, className: n } = e;
    return (0, l.jsx)(c.E, { variant: "body-sm/normal", color: "text-muted", className: n, children: t });
}
function Y(e) {
    let { text: t, user: n, guildId: i, channelId: a } = e,
        s = (0, x.GV)();
    return null == t || "" === t.trim()
        ? null
        : (0, l.jsxs)("div", {
              role: "group",
              "aria-labelledby": s,
              children: [
                  (0, l.jsx)(u.QuoteIcon, { size: "xxs", color: g.A.colors.ICON_MUTED, className: X.Ls }),
                  (0, l.jsx)(W, { user: n, guildId: i, channelId: a, id: s }),
                  (0, l.jsx)(V, { text: t }),
              ],
          });
}
function B(e) {
    let { text: t, user: n, guildId: a, channelId: r, widgetType: d, gameId: o } = e,
        c = (0, x.GV)(),
        { trackUserProfileEditAction: u } = (0, j.NJ)(),
        g = y.intl.string(y.t.xKSfBT),
        f = t ?? "",
        h = "" !== f.trim(),
        I = i.useCallback(
            (e) => {
                let t = e.trim();
                ((0, E.oc)(d, o, "" !== t ? t : void 0),
                    t !== f.trim() && u({ action: "COMMENTARY_EDITED", widgetEdited: d, gameId: o }));
            },
            [d, o, f, u],
        ),
        p = i.useCallback(() => {
            u({ action: "PRESS_ADD_COMMENTARY", widgetEdited: d });
        }, [d, u]),
        A = (0, l.jsx)("div", { children: (0, l.jsx)(V, { text: h ? f : g, className: s()(X.qC, !h && X.qf) }) });
    return (0, l.jsxs)("div", {
        className: s()(F.kL, X.Im),
        role: "group",
        "aria-labelledby": c,
        children: [
            (0, l.jsx)(W, { user: n, guildId: a, channelId: r, id: c }),
            (0, l.jsx)(m.w, {
                value: f,
                onCommit: I,
                onFocus: p,
                autoComplete: "off",
                defaultDirty: !0,
                hideLabel: !0,
                multiline: !0,
                paddingBlock: "md",
                scrollIntoViewOnFocus: !0,
                preview: A,
                placeholder: g,
                label: y.intl.string(y.t.JxKXeT),
                maxLength: 200,
            }),
        ],
    });
}
function z(e) {
    let {
            user: t,
            guildId: n,
            channelId: a,
            game: d,
            widgetType: o,
            allowEditing: c,
            disableInteraction: u = !1,
            index: g,
            onRemoveGame: m,
            coverRef: x,
            className: f,
        } = e,
        h = i.useRef(null),
        { gameId: p, comment: j, tags: N } = d,
        { coverImageUrl: S, iconImageUrl: w, gameName: T, isLoading: _ } = (0, I.A)(p),
        y = { variant: "heading-xs/medium", color: "text-default" },
        L = c && !u,
        P = 1 === (0, E.cv)(o),
        D = L && (0, R.y9)(o),
        O = L && !P,
        { registerDragHandleRef: G } = (0, C.r)();
    if (_) return (0, l.jsx)(b.E, {});
    function F() {
        return (0, l.jsx)(v.A, {
            coverRef: x,
            className: (null == S && null == w) || u ? void 0 : U.iL,
            imageSrc: S,
            iconSrc: w,
            gameName: T,
            gameId: p,
            userId: t.id,
            disableInteraction: u,
            hideTooltip: !0,
        });
    }
    function W() {
        return (0, l.jsxs)("div", {
            ref: h,
            className: s()(X.Nr, f),
            children: [
                O
                    ? (0, l.jsxs)("div", {
                          className: X.An,
                          children: [F(), (0, l.jsx)(A.jV, { buttonRef: G(d.gameId), className: X.BU })],
                      })
                    : F(),
                (0, l.jsxs)("div", {
                    className: X.zH,
                    children: [
                        u
                            ? (0, l.jsx)(r.D, { ...y, children: T })
                            : (0, l.jsx)(K, { gameId: p, userId: t.id, gameName: T, ...y }),
                        D
                            ? (0, l.jsx)(B, { text: j, user: t, guildId: n, channelId: a, widgetType: o, gameId: p })
                            : (0, l.jsx)(Y, { text: j, user: t, guildId: n, channelId: a }),
                        (0, l.jsx)(k, {
                            tags: N,
                            allowEditing: c,
                            widgetType: o,
                            gameId: p,
                            disableInteraction: u,
                            className: X._A,
                        }),
                    ],
                }),
                L && (0, l.jsx)(M.A, { game: d, widgetType: o, className: X.vS, onRemove: () => m?.(d.gameId) }),
            ],
        });
    }
    return O
        ? (0, l.jsx)(H, {
              index: g ?? 0,
              widgetType: o,
              game: d,
              getWidth: () => h.current?.offsetWidth,
              children: W(),
          })
        : W();
}
