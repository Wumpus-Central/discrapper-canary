n.d(t, {
    S: () => en,
    default: () => et,
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
    g = n(796762),
    b = n(26737),
    p = n(29264),
    m = n(905041),
    O = n(89013),
    y = n(988500),
    h = n(570870),
    v = n(626135),
    j = n(786095),
    S = n(268623),
    E = n(986240),
    P = n(293335),
    T = n(941389),
    I = n(289889),
    _ = n(449751),
    Z = n(749339),
    x = n(601184),
    w = n(557935),
    N = n(6148),
    A = n(519110),
    M = n(759875),
    D = n(168405),
    C = n(536639),
    L = n(720904),
    k = n(88791),
    R = n(385302),
    G = n(445445),
    U = n(873699),
    F = n(134323),
    z = n(429260),
    H = n(1626),
    B = n(279329),
    K = n(627938),
    V = n(189976),
    X = n(512303),
    Q = n(481300),
    J = n(975368),
    q = n(304685),
    W = n(981631),
    Y = n(388032);
function $(e) {
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
function ee(e, t) {
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
function et(e) {
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
            onHeightUpdate: y,
        } = e,
        { analyticsLocations: h } = (0, u.ZP)([c.Z.MESSAGE_CONTEXT_MENU]),
        v = b,
        j = b.getAttribute("data-type"),
        S = b.getAttribute("data-id"),
        E = b.getAttribute("data-name");
    if (null != p) o = i = s = p.url;
    else
        for (; (0, l.kK)(v); )
            (0, l.kK)(v, HTMLImageElement) && null != v.src && (o = v.src),
                (0, l.kK)(v, HTMLAnchorElement) &&
                    null != v.href &&
                    ((i = v.href),
                    (d = v.textContent),
                    null == o &&
                        "img" === v.getAttribute("data-role") &&
                        ((o = i),
                        v.hasAttribute("data-safe-src") &&
                            "" !== v.getAttribute("data-safe-src") &&
                            (s = v.getAttribute("data-safe-src")))),
                (v = v.parentNode);
    let P = null != (n = null == (t = document.getSelection()) ? void 0 : t.toString()) ? n : "";
    return (0, r.jsx)(u.Gt, {
        value: h,
        children: en({
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
            onHeightUpdate: y,
            onSelect: O,
            onClose: a.Zy,
            navId: "message",
            ariaLabel: Y.intl.string(Y.t.ChPNkN),
            shouldHideMediaOptions: m,
        }),
    });
}
function en(e) {
    let {
            message: t,
            channel: n,
            mediaItem: l,
            textSelection: a,
            favoriteableType: c,
            favoriteableId: u,
            favoriteableName: et,
            itemHref: en,
            itemSrc: er,
            itemSafeSrc: ei,
            itemTextContent: el,
            canReport: eo,
            onHeightUpdate: ea,
            onSelect: es,
            onClose: ec,
            navId: eu,
            ariaLabel: ed,
            shouldHideMediaOptions: ef = !1,
        } = e,
        eg = i.useRef(null);
    i.useEffect(() => {
        eg.current = Date.now();
    }, []),
        i.useEffect(
            () => () => {
                if (null != eg.current) {
                    var e;
                    let r = Date.now() - eg.current;
                    v.default.track(W.rMx.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: r,
                        channel_id: n.id,
                        guild_id: null != (e = n.getGuildId()) ? e : void 0,
                        message_id: t.id,
                    });
                }
            },
            [n, t],
        );
    let eb = i.useCallback(() => {
            if (null != eg.current) {
                var e;
                let r = Date.now() - eg.current;
                v.default.track(W.rMx.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: r,
                    channel_id: n.id,
                    guild_id: null != (e = n.getGuildId()) ? e : void 0,
                    message_id: t.id,
                });
            }
            null == es || es();
        }, [es, n, t]),
        { forceIconsLeft: ep, reorderMessageMenuItems: em } = (0, d.d)("MessageContextMenu"),
        { tidaWebformEnabled: eO } = g.Z.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
        ey = (e, t) => {
            var n;
            return (function e(t, n, r, l) {
                var o;
                if (null == t) return null;
                if (!r && !l) return t;
                if (Array.isArray(t)) return t.map((t) => e(t, n, r, l));
                if (!i.isValidElement(t)) return t;
                let a = t.props,
                    { icon: s, iconLeft: c, children: u } = a,
                    d = (function (e, t) {
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
                    })(a, ["icon", "iconLeft", "children"]),
                    f = null != u ? i.Children.map(u, (t) => (null == t ? null : e(t, void 0, !1, l))) : u;
                if (r)
                    return i.cloneElement(
                        t,
                        ee($({}, d), {
                            icon: void 0,
                            iconLeft: void 0,
                            children: f,
                        }),
                    );
                let g = null != (o = null != c ? c : n) ? o : "function" == typeof s ? s : void 0;
                return null == g
                    ? i.cloneElement(
                          t,
                          ee($({}, d), {
                              icon: s,
                              iconLeft: c,
                              children: f,
                          }),
                      )
                    : l
                      ? i.cloneElement(
                            t,
                            ee($({}, d), {
                                icon: void 0,
                                iconLeft: g,
                                children: f,
                            }),
                        )
                      : t;
            })(e, null == t ? void 0 : t.iconToAdd, null != (n = null == t ? void 0 : t.removeIcon) ? n : em, ep);
        },
        eh = (0, L.Z)(t, n),
        ev = ey((0, b.Z)(a), { iconToAdd: o.TIy }),
        ej = ey((0, I.Z)(t, n, a), { iconToAdd: o.TIy }),
        eS = ey((0, O.Z)(a), { iconToAdd: o._Ve }),
        eE = ey((0, P.Z)(t, n), {
            iconToAdd: o.UZo,
            removeIcon: !1,
        }),
        eP = ey((0, N.Z)(t, n), { removeIcon: !1 }),
        eT = ey((0, F.Z)(t, n), { removeIcon: !1 }),
        eI = ey((0, M.Z)(t, n), { removeIcon: !1 }),
        e_ = ey((0, K.Z)(t, n), { removeIcon: !1 }),
        eZ = ey((0, Z.Z)(t)),
        ex = ey((0, V.Z)(t, n), { iconToAdd: o.os0 }),
        ew = ey((0, C.Z)(t, n)),
        eN = ey((0, S.Z)(t), { iconToAdd: o.plf }),
        eA = ey(
            (0, h.Z)({
                commandType: s.yU.MESSAGE,
                commandTargetId: t.id,
                channel: n,
                guildId: void 0,
                onHeightUpdate: ea,
            }),
            { iconToAdd: o.jje },
        ),
        eM = ey((0, H.Z)(t, n), { iconToAdd: o.DuK }),
        eD = ey((0, D.Z)(t, n)),
        eC = ey((0, T.Z)(t, n)),
        eL = ey((0, _.Z)(t, n)),
        ek = ey((0, B.Z)(t, n)),
        eR = ey((0, k.Z)(t), { removeIcon: !1 }),
        eG = ey((0, E.Z)(t, n)),
        eU = ey((0, y.Z)(t)),
        eF = ey((0, X.Z)(t), { iconToAdd: o.T39 }),
        ez = ey((0, U.Z)(t, n), {
            iconToAdd: o.STQ,
            removeIcon: !1,
        }),
        eH = ey((0, R.Z)(t, n), {
            iconToAdd: o.STQ,
            removeIcon: !1,
        }),
        eB = ey((0, x.Z)(t, n), { removeIcon: !1 }),
        eK = ey((0, z.ZP)(t), { removeIcon: !1 }),
        eV = ey((0, z.eH)(t), { removeIcon: !1 }),
        eX = ey((0, z.wY)(t), {
            iconToAdd: o.U65,
            removeIcon: !1,
        }),
        eQ = ey(
            (0, A.Z)({
                type: c,
                id: u,
                name: et,
            }),
            { iconToAdd: o.r7p },
        ),
        eJ = ey((0, j.Z)(a, n.getGuildId()), { iconToAdd: o.b7C }),
        eq = ey(
            (0, p.Z)(ei, t, {
                shouldHideMediaOptions: ef,
                contentType: null == l ? void 0 : l.contentType,
                originalContentType: null == l ? void 0 : l.originalContentType,
            }),
            { iconToAdd: o.XBm },
        ),
        eW = ey((0, Q.Z)(t, l)),
        eY = ey((0, J.Z)(t)),
        e$ = ey((0, q.Z)(l, { shouldHideMediaOptions: ef }), { iconToAdd: o.d3s }),
        e0 = ey((0, m.Z)(null != en ? en : er, el, t, { shouldHideMediaOptions: ef }), { iconToAdd: o.xPt }),
        e4 = ey(
            (0, f.Z)({
                id: t.id,
                label: Y.intl.string(Y.t.zBoHlf),
                shiftId: "".concat(t.channel_id, "-").concat(t.id),
            }),
        ),
        e8 = ey(
            (0, w.Z)({
                messageId: t.id,
                itemId: u,
                type: c,
                imageSrc: er,
            }),
        ),
        e1 = ey((0, G.Z)(t, n), {
            iconToAdd: o.STQ,
            removeIcon: !1,
        }),
        e3 = (0, r.jsx)(o.kSQ, { children: null != e8 ? e8 : e4 }),
        e7 = (e) => {
            let { includeLinks: t } = e;
            return (0, r.jsxs)(o.kSQ, {
                children: [eQ, eJ, eq, eW, eY, e$, t && e0],
            });
        };
    return em
        ? (0, r.jsxs)(o.v2r, {
              navId: eu,
              onClose: ec,
              "aria-label": ed,
              onSelect: eb,
              children: [
                  (0, r.jsxs)(o.kSQ, {
                      children: ["" === a ? eh : null, eE, eR, eP, eT, eI, e_],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [eG, eS, ex, ew, eN, eA, eM, eD, eC, ek, eU, eF],
                  }),
                  (0, r.jsx)(o.kSQ, { children: ej }),
                  eO
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [e3, e7({ includeLinks: !0 })],
                        })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [e7({ includeLinks: !0 }), e3],
                        }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [e1, eB, eo && eK, eo && eV, eX],
                  }),
              ],
          })
        : (0, r.jsxs)(o.v2r, {
              navId: eu,
              onClose: ec,
              "aria-label": ed,
              onSelect: eb,
              children: [
                  (0, r.jsx)(o.kSQ, { children: ev }),
                  (0, r.jsx)(o.kSQ, { children: eS }),
                  (0, r.jsxs)(o.kSQ, {
                      children: ["" === a ? eh : null, eE, eR, eG],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [eP, eT, eI, e_],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [eZ, ex, ew, eN, eA, eM, eD, eC, eL, ek, eU, eF],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [ez, eH, eB, eo && eK, eo && eV, eX],
                  }),
                  eO
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [e3, e7({ includeLinks: !1 }), (0, r.jsx)(o.kSQ, { children: e0 })],
                        })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [e7({ includeLinks: !1 }), (0, r.jsx)(o.kSQ, { children: e0 }), e3],
                        }),
              ],
          });
}
