n.d(t, {
    S: () => $,
    default: () => Y,
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
    m = n(89013),
    O = n(988500),
    v = n(570870),
    y = n(626135),
    h = n(786095),
    j = n(268623),
    S = n(986240),
    E = n(667922),
    P = n(941389),
    I = n(289889),
    _ = n(449751),
    T = n(749339),
    Z = n(601184),
    N = n(6148),
    w = n(519110),
    A = n(759875),
    x = n(168405),
    M = n(536639),
    D = n(720904),
    C = n(88791),
    L = n(385302),
    R = n(873699),
    k = n(134323),
    G = n(429260),
    U = n(1626),
    F = n(279329),
    z = n(627938),
    H = n(189976),
    B = n(512303),
    K = n(481300),
    X = n(975368),
    V = n(304685),
    Q = n(981631),
    q = n(388032);
function W(e) {
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
function J(e, t) {
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
function Y(e) {
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
            shouldHideMediaOptions: m,
            onSelect: O,
            onHeightUpdate: v,
        } = e,
        { analyticsLocations: y } = (0, u.ZP)([c.Z.MESSAGE_CONTEXT_MENU]),
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
        value: y,
        children: $({
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
            onHeightUpdate: v,
            onSelect: O,
            onClose: a.Zy,
            navId: "message",
            ariaLabel: q.intl.string(q.t.ChPNkN),
            shouldHideMediaOptions: m,
        }),
    });
}
function $(e) {
    let {
            message: t,
            channel: n,
            mediaItem: l,
            textSelection: a,
            favoriteableType: c,
            favoriteableId: u,
            favoriteableName: Y,
            itemHref: $,
            itemSrc: ee,
            itemSafeSrc: et,
            itemTextContent: en,
            canReport: er,
            onHeightUpdate: ei,
            onSelect: el,
            onClose: eo,
            navId: ea,
            ariaLabel: es,
            shouldHideMediaOptions: ec = !1,
        } = e,
        eu = i.useRef(null);
    i.useEffect(() => {
        eu.current = Date.now();
    }, []),
        i.useEffect(
            () => () => {
                if (null != eu.current) {
                    var e;
                    let r = Date.now() - eu.current;
                    y.default.track(Q.rMx.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: r,
                        channel_id: n.id,
                        guild_id: null != (e = n.getGuildId()) ? e : void 0,
                        message_id: t.id,
                    });
                }
            },
            [n, t],
        );
    let ed = i.useCallback(() => {
            if (null != eu.current) {
                var e;
                let r = Date.now() - eu.current;
                y.default.track(Q.rMx.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: r,
                    channel_id: n.id,
                    guild_id: null != (e = n.getGuildId()) ? e : void 0,
                    message_id: t.id,
                });
            }
            null == el || el();
        }, [el, n, t]),
        { forceIconsLeft: ef, reorderMessageMenuItems: eg } = (0, d.d)("MessageContextMenu"),
        eb = (e, t) => {
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
                        J(W({}, u), {
                            icon: void 0,
                            iconLeft: void 0,
                            children: d,
                        }),
                    );
                if (l) {
                    var f;
                    return i.cloneElement(
                        t,
                        J(W({}, u), {
                            icon: void 0,
                            iconLeft: null != (f = null != s ? s : n) ? f : a,
                            children: d,
                        }),
                    );
                }
                return t;
            })(e, null == t ? void 0 : t.iconToAdd, null != (n = null == t ? void 0 : t.removeIcon) ? n : eg, ef);
        },
        ep = (0, D.Z)(t, n),
        em = eb((0, g.Z)(a), { iconToAdd: o.TIy }),
        eO = eb((0, I.Z)(t, n, a), { iconToAdd: o.TIy }),
        ev = eb((0, m.Z)(a), { iconToAdd: o._Ve }),
        ey = eb((0, E.Z)(t, n), {
            iconToAdd: o.EO4,
            removeIcon: !1,
        }),
        eh = eb((0, N.Z)(t, n), { removeIcon: !1 }),
        ej = eb((0, k.Z)(t, n), { removeIcon: !1 }),
        eS = eb((0, A.Z)(t, n), { removeIcon: !1 }),
        eE = eb((0, z.Z)(t, n), { removeIcon: !1 }),
        eP = eb((0, T.Z)(t)),
        eI = eb((0, H.Z)(t, n), { iconToAdd: o.os0 }),
        e_ = eb((0, M.Z)(t, n)),
        eT = eb((0, j.Z)(t), { iconToAdd: o.plf }),
        eZ = eb(
            (0, v.Z)({
                commandType: s.yU.MESSAGE,
                commandTargetId: t.id,
                channel: n,
                guildId: void 0,
                onHeightUpdate: ei,
            }),
            { iconToAdd: o.jje },
        ),
        eN = eb((0, U.Z)(t, n), { iconToAdd: o.DuK }),
        ew = eb((0, x.Z)(t, n)),
        eA = eb((0, P.Z)(t, n)),
        ex = eb((0, _.Z)(t, n)),
        eM = eb((0, F.Z)(t, n)),
        eD = eb((0, C.Z)(t), { removeIcon: !1 }),
        eC = eb((0, S.Z)(t, n)),
        eL = eb((0, O.Z)(t)),
        eR = eb((0, B.Z)(t), { iconToAdd: o.T39 }),
        ek = eb((0, R.Z)(t, n), {
            iconToAdd: o.P$X,
            removeIcon: !1,
        }),
        eG = eb((0, L.Z)(t, n), {
            iconToAdd: o.P$X,
            removeIcon: !1,
        }),
        eU = eb((0, Z.Z)(t, n), { removeIcon: !1 }),
        eF = eb((0, G.ZP)(t), { removeIcon: !1 }),
        ez = eb((0, G.eH)(t), { removeIcon: !1 }),
        eH = eb((0, G.wY)(t), { removeIcon: !1 }),
        eB = eb(
            (0, w.Z)({
                type: c,
                id: u,
                name: Y,
            }),
            {
                iconToAdd: o.r7p,
                removeIcon: !1,
            },
        ),
        eK = eb((0, h.Z)(a, n.getGuildId()), {
            iconToAdd: o.b7C,
            removeIcon: !1,
        }),
        eX = eb(
            (0, b.Z)(et, t, {
                shouldHideMediaOptions: ec,
                contentType: null == l ? void 0 : l.contentType,
                originalContentType: null == l ? void 0 : l.originalContentType,
            }),
            { removeIcon: !1 },
        ),
        eV = eb((0, K.Z)(t, l)),
        eQ = eb((0, X.Z)(t)),
        eq = eb((0, V.Z)(l, { shouldHideMediaOptions: ec }), {
            iconToAdd: o.d3s,
            removeIcon: !1,
        }),
        eW = eb((0, p.Z)(null != $ ? $ : ee, en, t, { shouldHideMediaOptions: ec }), { removeIcon: !1 }),
        eJ = eb(
            (0, f.Z)({
                id: t.id,
                label: q.intl.string(q.t.zBoHlf),
                shiftId: "".concat(t.channel_id, "-").concat(t.id),
            }),
            { removeIcon: !1 },
        );
    return eg
        ? (0, r.jsxs)(o.v2r, {
              navId: ea,
              onClose: eo,
              "aria-label": es,
              onSelect: ed,
              children: [
                  (0, r.jsxs)(o.kSQ, {
                      children: ["" === a ? ep : null, ey, eD, eh, ej, eS, eE],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [eC, ev, eI, e_, eT, eZ, eN, ew, eA, eM, eL, eR],
                  }),
                  (0, r.jsx)(o.kSQ, { children: eO }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [eB, eK, eX, eV, eQ, eq],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [ek, eG, eU, er && eF, er && ez, eH],
                  }),
                  (0, r.jsx)(o.kSQ, { children: eW }),
              ],
          })
        : (0, r.jsxs)(o.v2r, {
              navId: ea,
              onClose: eo,
              "aria-label": es,
              onSelect: ed,
              children: [
                  (0, r.jsx)(o.kSQ, { children: em }),
                  (0, r.jsx)(o.kSQ, { children: ev }),
                  (0, r.jsxs)(o.kSQ, {
                      children: ["" === a ? ep : null, ey, eD, eC],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [eh, ej, eS, eE],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [eP, eI, e_, eT, eZ, eN, ew, eA, ex, eM, eL, eR],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [ek, eG, eU, er && eF, er && ez, eH],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [eB, eK, eX, eV, eQ, eq],
                  }),
                  (0, r.jsx)(o.kSQ, { children: eW }),
                  (0, r.jsx)(o.kSQ, { children: eJ }),
              ],
          });
}
