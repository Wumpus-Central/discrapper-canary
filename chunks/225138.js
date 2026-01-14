n.d(t, {
    S: () => et,
    default: () => ee,
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
    y = n(89013),
    O = n(988500),
    h = n(570870),
    v = n(626135),
    j = n(786095),
    S = n(268623),
    E = n(293335),
    P = n(941389),
    I = n(289889),
    _ = n(449751),
    T = n(749339),
    Z = n(601184),
    w = n(557935),
    x = n(6148),
    A = n(519110),
    N = n(759875),
    M = n(168405),
    D = n(536639),
    C = n(720904),
    L = n(88791),
    k = n(385302),
    R = n(445445),
    G = n(873699),
    U = n(134323),
    F = n(429260),
    H = n(1626),
    z = n(279329),
    B = n(627938),
    K = n(189976),
    V = n(512303),
    X = n(481300),
    Q = n(975368),
    J = n(304685),
    q = n(981631),
    W = n(388032);
function Y(e) {
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
function $(e, t) {
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
function ee(e) {
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
            onSelect: y,
            onHeightUpdate: O,
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
        children: et({
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
            onHeightUpdate: O,
            onSelect: y,
            onClose: a.Zy,
            navId: "message",
            ariaLabel: W.intl.string(W.t.ChPNkN),
            shouldHideMediaOptions: m,
        }),
    });
}
function et(e) {
    let {
            message: t,
            channel: n,
            mediaItem: l,
            textSelection: a,
            favoriteableType: c,
            favoriteableId: u,
            favoriteableName: ee,
            itemHref: et,
            itemSrc: en,
            itemSafeSrc: er,
            itemTextContent: ei,
            canReport: el,
            onHeightUpdate: eo,
            onSelect: ea,
            onClose: es,
            navId: ec,
            ariaLabel: eu,
            shouldHideMediaOptions: ed = !1,
        } = e,
        ef = i.useRef(null);
    i.useEffect(() => {
        ef.current = Date.now();
    }, []),
        i.useEffect(
            () => () => {
                if (null != ef.current) {
                    var e;
                    let r = Date.now() - ef.current;
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
    let eg = i.useCallback(() => {
            if (null != ef.current) {
                var e;
                let r = Date.now() - ef.current;
                v.default.track(q.rMx.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: r,
                    channel_id: n.id,
                    guild_id: null != (e = n.getGuildId()) ? e : void 0,
                    message_id: t.id,
                });
            }
            null == ea || ea();
        }, [ea, n, t]),
        { forceIconsLeft: eb, reorderMessageMenuItems: ep } = (0, d.d)("MessageContextMenu"),
        { tidaWebformEnabled: em } = g.Z.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
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
                        $(Y({}, d), {
                            icon: void 0,
                            iconLeft: void 0,
                            children: f,
                        }),
                    );
                let g = null != (o = null != c ? c : n) ? o : "function" == typeof s ? s : void 0;
                return null == g
                    ? i.cloneElement(
                          t,
                          $(Y({}, d), {
                              icon: s,
                              iconLeft: c,
                              children: f,
                          }),
                      )
                    : l
                      ? i.cloneElement(
                            t,
                            $(Y({}, d), {
                                icon: void 0,
                                iconLeft: g,
                                children: f,
                            }),
                        )
                      : t;
            })(e, null == t ? void 0 : t.iconToAdd, null != (n = null == t ? void 0 : t.removeIcon) ? n : ep, eb);
        },
        eO = (0, C.Z)(t, n),
        eh = ey((0, b.Z)(a), { iconToAdd: o.TIy }),
        ev = ey((0, I.Z)(t, n, a), { iconToAdd: o.TIy }),
        ej = ey((0, y.Z)(a), { iconToAdd: o._Ve }),
        eS = ey((0, E.Z)(t, n), {
            iconToAdd: o.UZo,
            removeIcon: !1,
        }),
        eE = ey((0, x.Z)(t, n), { removeIcon: !1 }),
        eP = ey((0, U.Z)(t, n), { removeIcon: !1 }),
        eI = ey((0, N.Z)(t, n), { removeIcon: !1 }),
        e_ = ey((0, B.Z)(t, n), { removeIcon: !1 }),
        eT = ey((0, T.Z)(t)),
        eZ = ey((0, K.Z)(t, n), { iconToAdd: o.os0 }),
        ew = ey((0, D.Z)(t, n)),
        ex = ey((0, S.Z)(t), { iconToAdd: o.plf }),
        eA = ey(
            (0, h.Z)({
                commandType: s.yU.MESSAGE,
                commandTargetId: t.id,
                channel: n,
                guildId: void 0,
                onHeightUpdate: eo,
            }),
            { iconToAdd: o.jje },
        ),
        eN = ey((0, H.Z)(t, n), { iconToAdd: o.DuK }),
        eM = ey((0, M.Z)(t, n)),
        eD = ey((0, P.Z)(t, n)),
        eC = ey((0, _.Z)(t, n)),
        eL = ey((0, z.Z)(t, n)),
        ek = ey((0, L.Z)(t), { removeIcon: !1 }),
        eR = ey((0, O.Z)(t)),
        eG = ey((0, V.Z)(t), { iconToAdd: o.T39 }),
        eU = ey((0, G.Z)(t, n), {
            iconToAdd: o.STQ,
            removeIcon: !1,
        }),
        eF = ey((0, k.Z)(t, n), {
            iconToAdd: o.STQ,
            removeIcon: !1,
        }),
        eH = ey((0, Z.Z)(t, n), { removeIcon: !1 }),
        ez = ey((0, F.ZP)(t), { removeIcon: !1 }),
        eB = ey((0, F.eH)(t), { removeIcon: !1 }),
        eK = ey((0, F.wY)(t), {
            iconToAdd: o.U65,
            removeIcon: !1,
        }),
        eV = ey(
            (0, A.Z)({
                type: c,
                id: u,
                name: ee,
            }),
            { iconToAdd: o.r7p },
        ),
        eX = ey((0, j.Z)(a, n.getGuildId()), { iconToAdd: o.b7C }),
        eQ = ey(
            (0, p.Z)(er, t, {
                shouldHideMediaOptions: ed,
                contentType: null == l ? void 0 : l.contentType,
                originalContentType: null == l ? void 0 : l.originalContentType,
            }),
            { iconToAdd: o.XBm },
        ),
        eJ = ey((0, X.Z)(t, l)),
        eq = ey((0, Q.Z)(t)),
        eW = ey((0, J.Z)(l, { shouldHideMediaOptions: ed }), { iconToAdd: o.d3s }),
        eY = ey((0, m.Z)(null != et ? et : en, ei, t, { shouldHideMediaOptions: ed }), { iconToAdd: o.xPt }),
        e$ = ey(
            (0, f.Z)({
                id: t.id,
                label: W.intl.string(W.t.zBoHlf),
                shiftId: "".concat(t.channel_id, "-").concat(t.id),
            }),
        ),
        e0 = ey(
            (0, w.Z)({
                messageId: t.id,
                itemId: u,
                type: c,
                imageSrc: en,
            }),
        ),
        e4 = ey((0, R.Z)(t, n), {
            iconToAdd: o.STQ,
            removeIcon: !1,
        }),
        e1 = (0, r.jsx)(o.kSQ, { children: null != e0 ? e0 : e$ }),
        e8 = (e) => {
            let { includeLinks: t } = e;
            return (0, r.jsxs)(o.kSQ, {
                children: [eV, eX, eQ, eJ, eq, eW, t && eY],
            });
        };
    return ep
        ? (0, r.jsxs)(o.v2r, {
              navId: ec,
              onClose: es,
              "aria-label": eu,
              onSelect: eg,
              children: [
                  (0, r.jsxs)(o.kSQ, {
                      children: ["" === a ? eO : null, eS, ek, eE, eP, eI, e_],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [ej, eZ, ew, ex, eA, eN, eM, eD, eL, eR, eG],
                  }),
                  (0, r.jsx)(o.kSQ, { children: ev }),
                  em
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [e1, e8({ includeLinks: !0 })],
                        })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [e8({ includeLinks: !0 }), e1],
                        }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [e4, eH, el && ez, el && eB, eK],
                  }),
              ],
          })
        : (0, r.jsxs)(o.v2r, {
              navId: ec,
              onClose: es,
              "aria-label": eu,
              onSelect: eg,
              children: [
                  (0, r.jsx)(o.kSQ, { children: eh }),
                  (0, r.jsx)(o.kSQ, { children: ej }),
                  (0, r.jsxs)(o.kSQ, {
                      children: ["" === a ? eO : null, eS, ek],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [eE, eP, eI, e_],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [eT, eZ, ew, ex, eA, eN, eM, eD, eC, eL, eR, eG],
                  }),
                  (0, r.jsxs)(o.kSQ, {
                      children: [eU, eF, eH, el && ez, el && eB, eK],
                  }),
                  em
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [e1, e8({ includeLinks: !1 }), (0, r.jsx)(o.kSQ, { children: eY })],
                        })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [e8({ includeLinks: !1 }), (0, r.jsx)(o.kSQ, { children: eY }), e1],
                        }),
              ],
          });
}
