n.d(t, {
    S: () => ee,
    default: () => $,
});
var r = n(54381),
    i = n(473749),
    l = n(374470),
    o = n(481060),
    a = n(239091),
    s = n(911969),
    c = n(100527),
    u = n(906732),
    d = n(285230),
    f = n(299206),
    g = n(26737),
    b = n(29264),
    p = n(905041),
    O = n(89013),
    y = n(988500),
    m = n(570870),
    v = n(626135),
    h = n(786095),
    j = n(268623),
    S = n(986240),
    E = n(667922),
    P = n(941389),
    T = n(289889),
    _ = n(449751),
    I = n(749339),
    Z = n(601184),
    w = n(6148),
    A = n(519110),
    N = n(759875),
    x = n(168405),
    M = n(536639),
    D = n(720904),
    C = n(88791),
    L = n(385302),
    R = n(445445),
    k = n(873699),
    G = n(134323),
    U = n(429260),
    F = n(1626),
    z = n(279329),
    H = n(627938),
    B = n(189976),
    K = n(512303),
    X = n(481300),
    V = n(975368),
    Q = n(304685),
    q = n(981631),
    W = n(388032);
function J(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function $(e) {
    var t, n;
    let i,
        o,
        s,
        d,
        {
            channel: f,
            message: g,
            target: b,
            mediaItem: p,
            shouldHideMediaOptions: O,
            onSelect: y,
            onHeightUpdate: m,
        } = e,
        { analyticsLocations: v } = (0, u.ZP)([c.Z.MESSAGE_CONTEXT_MENU]),
        h = b,
        j = b.getAttribute("data-type"),
        S = b.getAttribute("data-id"),
        E = b.getAttribute("data-name");
    if (null != p) o = i = s = p.url;
    else
        for (; (0, l.kK)(h); )
            (0, l.kK)(h, HTMLImageElement) && null != h.src && (o = h.src),
                (0, l.kK)(h, HTMLAnchorElement) &&
                    null != h.href &&
                    ((i = h.href),
                    (d = h.textContent),
                    null == o &&
                        "img" === h.getAttribute("data-role") &&
                        ((o = i),
                        h.hasAttribute("data-safe-src") &&
                            "" !== h.getAttribute("data-safe-src") &&
                            (s = h.getAttribute("data-safe-src")))),
                (h = h.parentNode);
    let P = null != (n = null == (t = document.getSelection()) ? void 0 : t.toString()) ? n : "";
    return (0, r.jsx)(u.Gt, {
        value: v,
        children: ee({
            message: g,
            channel: f,
            mediaItem: p,
            textSelection: P,
            favoriteableType: j,
            favoriteableId: S,
            favoriteableName: E,
            itemHref: i,
            itemSrc: o,
            itemSafeSrc: s,
            itemTextContent: d,
            canReport: !0,
            onHeightUpdate: m,
            onSelect: y,
            onClose: a.Zy,
            navId: "message",
            ariaLabel: W.intl.string(W.t.ChPNkN),
            shouldHideMediaOptions: O,
        }),
    });
}
function ee(e) {
    let {
            message: t,
            channel: n,
            mediaItem: l,
            textSelection: a,
            favoriteableType: c,
            favoriteableId: u,
            favoriteableName: $,
            itemHref: ee,
            itemSrc: et,
            itemSafeSrc: en,
            itemTextContent: er,
            canReport: ei,
            onHeightUpdate: el,
            onSelect: eo,
            onClose: ea,
            navId: es,
            ariaLabel: ec,
            shouldHideMediaOptions: eu = !1,
        } = e,
        ed = i.useRef(null);
    i.useEffect(() => {
        ed.current = Date.now();
    }, []),
        i.useEffect(
            () => () => {
                if (null != ed.current) {
                    var e;
                    let r = Date.now() - ed.current;
                    v.default.track(q.rMx.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: r,
                        channel_id: n.id,
                        guild_id: null != (e = n.getGuildId()) ? e : void 0,
                        message_id: t.id,
                    });
                }
            },
            [n, t],
        );
    let ef = i.useCallback(() => {
            if (null != ed.current) {
                var e;
                let r = Date.now() - ed.current;
                v.default.track(q.rMx.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: r,
                    channel_id: n.id,
                    guild_id: null != (e = n.getGuildId()) ? e : void 0,
                    message_id: t.id,
                });
            }
            null == eo || eo();
        }, [eo, n, t]),
        { forceIconsLeft: eg, reorderMessageMenuItems: eb } = (0, d.d)("MessageContextMenu"),
        ep = (e, t) => {
            var n;
            return (function e(t, n, r, l) {
                if (null == t) return null;
                if (!r && !l) return t;
                if (Array.isArray(t)) return t.map((t) => e(t, n, r, l));
                if (!i.isValidElement(t)) return t;
                let o = t.props,
                    { icon: a, iconLeft: s, children: c } = o,
                    u = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    i = {},
                                    l = Object.keys(e);
                                for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                return i;
                            })(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < l.length; r++)
                                (n = l[r]),
                                    !(t.indexOf(n) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                                        (i[n] = e[n]);
                        }
                        return i;
                    })(o, ["icon", "iconLeft", "children"]),
                    d = null != c ? i.Children.map(c, (t) => (null == t ? null : e(t, void 0, !1, l))) : c;
                if (r)
                    return i.cloneElement(
                        t,
                        Y(J({}, u), {
                            icon: void 0,
                            iconLeft: void 0,
                            children: d,
                        }),
                    );
                if (l) {
                    var f;
                    return i.cloneElement(
                        t,
                        Y(J({}, u), {
                            icon: void 0,
                            iconLeft: null != (f = null != s ? s : n) ? f : a,
                            children: d,
                        }),
                    );
                }
                return t;
            })(e, null == t ? void 0 : t.iconToAdd, null != (n = null == t ? void 0 : t.removeIcon) ? n : eb, eg);
        },
        eO = (0, D.Z)(t, n),
        ey = ep((0, g.Z)(a), { iconToAdd: o.TIy }),
        em = ep((0, T.Z)(t, n, a), { iconToAdd: o.TIy }),
        ev = ep((0, O.Z)(a), { iconToAdd: o._Ve }),
        eh = ep((0, E.Z)(t, n), {
            iconToAdd: o.UZo,
            removeIcon: !1,
        }),
        ej = ep((0, w.Z)(t, n), { removeIcon: !1 }),
        eS = ep((0, G.Z)(t, n), { removeIcon: !1 }),
        eE = ep((0, N.Z)(t, n), { removeIcon: !1 }),
        eP = ep((0, H.Z)(t, n), { removeIcon: !1 }),
        eT = ep((0, I.Z)(t)),
        e_ = ep((0, B.Z)(t, n), { iconToAdd: o.os0 }),
        eI = ep((0, M.Z)(t, n)),
        eZ = ep((0, j.Z)(t), { iconToAdd: o.plf }),
        ew = ep(
            (0, m.Z)({
                commandType: s.yU.MESSAGE,
                commandTargetId: t.id,
                channel: n,
                guildId: void 0,
                onHeightUpdate: el,
            }),
            { iconToAdd: o.jje },
        ),
        eA = ep((0, F.Z)(t, n), { iconToAdd: o.DuK }),
        eN = ep((0, x.Z)(t, n)),
        ex = ep((0, P.Z)(t, n)),
        eM = ep((0, _.Z)(t, n)),
        eD = ep((0, z.Z)(t, n)),
        eC = ep((0, C.Z)(t), { removeIcon: !1 }),
        eL = ep((0, S.Z)(t, n)),
        eR = ep((0, y.Z)(t)),
        ek = ep((0, K.Z)(t), { iconToAdd: o.T39 }),
        eG = ep((0, k.Z)(t, n), {
            iconToAdd: o.STQ,
            removeIcon: !1,
        }),
        eU = ep((0, L.Z)(t, n), {
            iconToAdd: o.STQ,
            removeIcon: !1,
        }),
        eF = ep((0, Z.Z)(t, n), { removeIcon: !1 }),
        ez = ep((0, U.ZP)(t), { removeIcon: !1 }),
        eH = ep((0, U.eH)(t), { removeIcon: !1 }),
        eB = ep((0, U.wY)(t), { removeIcon: !1 }),
        eK = ep(
            (0, A.Z)({
                type: c,
                id: u,
                name: $,
            }),
            { iconToAdd: o.r7p },
        ),
        eX = ep((0, h.Z)(a, n.getGuildId()), { iconToAdd: o.b7C }),
        eV = ep(
            (0, b.Z)(en, t, {
                shouldHideMediaOptions: eu,
                contentType: null == l ? void 0 : l.contentType,
                originalContentType: null == l ? void 0 : l.originalContentType,
            }),
            { iconToAdd: o.XBm },
        ),
        eQ = ep((0, X.Z)(t, l)),
        eq = ep((0, V.Z)(t)),
        eW = ep((0, Q.Z)(l, { shouldHideMediaOptions: eu }), { iconToAdd: o.d3s }),
        eJ = ep((0, p.Z)(null != ee ? ee : et, er, t, { shouldHideMediaOptions: eu }), { iconToAdd: o.xPt }),
        eY = ep(
            (0, f.Z)({
                id: t.id,
                label: W.intl.string(W.t.zBoHlf),
                shiftId: "".concat(t.channel_id, "-").concat(t.id),
            }),
        ),
        e$ = ep((0, R.Z)(t, n), {
            iconToAdd: o.STQ,
            removeIcon: !1,
        });
    return eb
        ? (0, r.jsxs)(o.v2r, {
              navId: es,
              onClose: ea,
              "aria-label": ec,
              onSelect: ef,
              children: [
                  (0, r.jsxs)(o.kSQ, {
                      children: ["" === a ? eO : null, eh, eC, ej, eS, eE, eP],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [eL, ev, e_, eI, eZ, ew, eA, eN, ex, eD, eR, ek],
                  }),
                  (0, r.jsx)(o.kSQ, { children: em }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [eK, eX, eV, eQ, eq, eW, eJ],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [e$, eF, ei && ez, ei && eH, eB],
                  }),
              ],
          })
        : (0, r.jsxs)(o.v2r, {
              navId: es,
              onClose: ea,
              "aria-label": ec,
              onSelect: ef,
              children: [
                  (0, r.jsx)(o.kSQ, { children: ey }),
                  (0, r.jsx)(o.kSQ, { children: ev }),
                  (0, r.jsxs)(o.kSQ, {
                      children: ["" === a ? eO : null, eh, eC, eL],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [ej, eS, eE, eP],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [eT, e_, eI, eZ, ew, eA, eN, ex, eM, eD, eR, ek],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [eG, eU, eF, ei && ez, ei && eH, eB],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [eK, eX, eV, eQ, eq, eW],
                  }),
                  (0, r.jsx)(o.kSQ, { children: eJ }),
                  (0, r.jsx)(o.kSQ, { children: eY }),
              ],
          });
}
