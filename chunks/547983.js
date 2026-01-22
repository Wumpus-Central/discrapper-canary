n.d(t, {
    c: () => et,
    default: () => ee,
});
var r = n(627968),
    l = n(64700),
    i = n(621466),
    o = n(397927),
    a = n(442433),
    c = n(155718),
    s = n(793574),
    d = n(688810),
    u = n(441602),
    f = n(50268),
    g = n(486503),
    p = n(373963),
    b = n(115184),
    m = n(777933),
    y = n(826308),
    O = n(51512),
    A = n(773699),
    v = n(954571),
    j = n(363398),
    h = n(880457),
    E = n(840088),
    S = n(276887),
    _ = n(577147),
    D = n(345254),
    I = n(734495),
    P = n(483768),
    T = n(522333),
    w = n(692457),
    x = n(253925),
    M = n(513560),
    C = n(20883),
    N = n(979766),
    R = n(982308),
    G = n(959239),
    L = n(420975),
    k = n(725924),
    U = n(207115),
    F = n(614323),
    X = n(292103),
    V = n(878956),
    B = n(389889),
    K = n(729883),
    H = n(474445),
    q = n(25287),
    J = n(220167),
    W = n(772331),
    z = n(649455),
    Y = n(652215),
    Z = n(985018);
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
function Q(e, t) {
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
    let l,
        o,
        c,
        u,
        {
            channel: f,
            message: g,
            target: p,
            mediaItem: b,
            shouldHideMediaOptions: m,
            onSelect: y,
            onHeightUpdate: O,
        } = e,
        { analyticsLocations: A } = (0, d.Ay)([s.A.MESSAGE_CONTEXT_MENU]),
        v = p,
        j = p.getAttribute("data-type"),
        h = p.getAttribute("data-id"),
        E = p.getAttribute("data-name");
    if (null != b) o = l = c = b.url;
    else
        for (; (0, i.vq)(v); )
            (0, i.vq)(v, HTMLImageElement) && null != v.src && (o = v.src),
                (0, i.vq)(v, HTMLAnchorElement) &&
                    null != v.href &&
                    ((l = v.href),
                    (u = v.textContent),
                    null == o &&
                        "img" === v.getAttribute("data-role") &&
                        ((o = l),
                        v.hasAttribute("data-safe-src") &&
                            "" !== v.getAttribute("data-safe-src") &&
                            (c = v.getAttribute("data-safe-src")))),
                (v = v.parentNode);
    let S = null != (t = null == (n = document.getSelection()) ? void 0 : n.toString()) ? t : "";
    return (0, r.jsx)(d.f5, {
        value: A,
        children: et({
            message: g,
            channel: f,
            mediaItem: b,
            textSelection: S,
            favoriteableType: j,
            favoriteableId: h,
            favoriteableName: E,
            itemHref: l,
            itemSrc: o,
            itemSafeSrc: c,
            itemTextContent: u,
            canReport: !0,
            onHeightUpdate: O,
            onSelect: y,
            onClose: a.Z_,
            navId: "message",
            ariaLabel: Z.intl.string(Z.t.ChPNkN),
            shouldHideMediaOptions: m,
        }),
    });
}
function et(e) {
    let {
            message: t,
            channel: n,
            mediaItem: i,
            textSelection: a,
            favoriteableType: s,
            favoriteableId: d,
            favoriteableName: ee,
            itemHref: et,
            itemSrc: en,
            itemSafeSrc: er,
            itemTextContent: el,
            canReport: ei,
            onHeightUpdate: eo,
            onSelect: ea,
            onClose: ec,
            navId: es,
            ariaLabel: ed,
            shouldHideMediaOptions: eu = !1,
        } = e,
        ef = l.useRef(null);
    l.useEffect(() => {
        ef.current = Date.now();
    }, []),
        l.useEffect(
            () => () => {
                if (null != ef.current) {
                    var e;
                    let r = Date.now() - ef.current;
                    v.default.track(Y.HAw.MESSAGE_MENU_TIME_TO_CLOSE, {
                        time_to_close_ms: r,
                        channel_id: n.id,
                        guild_id: null != (e = n.getGuildId()) ? e : void 0,
                        message_id: t.id,
                    });
                }
            },
            [n, t],
        );
    let eg = l.useCallback(() => {
            if (null != ef.current) {
                var e;
                let r = Date.now() - ef.current;
                v.default.track(Y.HAw.MESSAGE_MENU_TIME_TO_SELECT, {
                    time_to_first_click_ms: r,
                    channel_id: n.id,
                    guild_id: null != (e = n.getGuildId()) ? e : void 0,
                    message_id: t.id,
                });
            }
            null == ea || ea();
        }, [ea, n, t]),
        { forceIconsLeft: ep, reorderMessageMenuItems: eb } = (0, u.P)("MessageContextMenu"),
        { tidaWebformEnabled: em } = g.A.useExperiment({ location: "MessageContextMenu" }, { autoTrackExposure: !1 }),
        ey = (e, t) => {
            var n;
            return (function e(t, n, r, i) {
                var o;
                if (null == t) return null;
                if (!r && !i) return t;
                if (Array.isArray(t)) return t.map((t) => e(t, n, r, i));
                if (!l.isValidElement(t)) return t;
                let a = t.props,
                    { icon: c, iconLeft: s, children: d } = a,
                    u = (function (e, t) {
                        if (null == e) return {};
                        var n,
                            r,
                            l,
                            i = {};
                        if ("u" > typeof Reflect && Reflect.ownKeys) {
                            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                                (r = n[l]),
                                    !(t.indexOf(r) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                        (i[r] = e[r]);
                            return i;
                        }
                        if (
                            ((i = (function (e, t) {
                                if (null == e) return {};
                                var n,
                                    r,
                                    l = {},
                                    i = Object.getOwnPropertyNames(e);
                                for (r = 0; r < i.length; r++)
                                    (n = i[r]),
                                        !(t.indexOf(n) >= 0) &&
                                            Object.prototype.propertyIsEnumerable.call(e, n) &&
                                            (l[n] = e[n]);
                                return l;
                            })(e, t)),
                            Object.getOwnPropertySymbols)
                        )
                            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                                (r = n[l]),
                                    !(t.indexOf(r) >= 0) &&
                                        Object.prototype.propertyIsEnumerable.call(e, r) &&
                                        (i[r] = e[r]);
                        return i;
                    })(a, ["icon", "iconLeft", "children"]),
                    f = null != d ? l.Children.map(d, (t) => (null == t ? null : e(t, void 0, !1, i))) : d;
                if (r)
                    return l.cloneElement(
                        t,
                        Q($({}, u), {
                            icon: void 0,
                            iconLeft: void 0,
                            children: f,
                        }),
                    );
                let g = null != (o = null != s ? s : n) ? o : "function" == typeof c ? c : void 0;
                return null == g
                    ? l.cloneElement(
                          t,
                          Q($({}, u), {
                              icon: c,
                              iconLeft: s,
                              children: f,
                          }),
                      )
                    : i
                      ? l.cloneElement(
                            t,
                            Q($({}, u), {
                                icon: void 0,
                                iconLeft: g,
                                children: f,
                            }),
                        )
                      : t;
            })(e, null == t ? void 0 : t.iconToAdd, null != (n = null == t ? void 0 : t.removeIcon) ? n : eb, ep);
        },
        eO = (0, R.A)(t, n),
        eA = ey((0, p.A)(a), { iconToAdd: o.TdU }),
        ev = ey((0, _.A)(t, n, a), { iconToAdd: o.TdU }),
        ej = ey((0, y.A)(a), { iconToAdd: o.$p$ }),
        eh = ey((0, E.A)(t, n), {
            iconToAdd: o.xVQ,
            removeIcon: !1,
        }),
        eE = ey((0, w.A)(t, n), { removeIcon: !1 }),
        eS = ey((0, F.A)(t, n), { removeIcon: !1 }),
        e_ = ey((0, M.A)(t, n), { removeIcon: !1 }),
        eD = ey((0, K.A)(t, n), { removeIcon: !1 }),
        eI = ey((0, I.A)(t)),
        eP = ey((0, H.A)(t, n), { iconToAdd: o.UaP }),
        eT = ey((0, N.A)(t, n)),
        ew = ey((0, h.A)(t), { iconToAdd: o.cFy }),
        ex = ey(
            (0, A.A)({
                commandType: c.kc.MESSAGE,
                commandTargetId: t.id,
                channel: n,
                guildId: void 0,
                onHeightUpdate: eo,
            }),
            { iconToAdd: o.k9F },
        ),
        eM = ey((0, V.A)(t, n), { iconToAdd: o.fNY }),
        eC = ey((0, C.A)(t, n)),
        eN = ey((0, S.A)(t, n)),
        eR = ey((0, D.A)(t, n)),
        eG = ey((0, B.A)(t, n)),
        eL = ey((0, G.A)(t), { removeIcon: !1 }),
        ek = ey((0, O.A)(t)),
        eU = ey((0, q.A)(t), { iconToAdd: o.O4 }),
        eF = ey((0, U.A)(t, n), {
            iconToAdd: o.tjR,
            removeIcon: !1,
        }),
        eX = ey((0, L.A)(t, n), {
            iconToAdd: o.tjR,
            removeIcon: !1,
        }),
        eV = ey((0, P.A)(t, n), { removeIcon: !1 }),
        eB = ey((0, X.Ay)(t), { removeIcon: !1 }),
        eK = ey((0, X.S_)(t), { removeIcon: !1 }),
        eH = ey((0, X.zo)(t), {
            iconToAdd: o.iFK,
            removeIcon: !1,
        }),
        eq = ey(
            (0, x.A)({
                type: s,
                id: d,
                name: ee,
            }),
            { iconToAdd: o.Gg5 },
        ),
        eJ = ey((0, j.A)(a, n.getGuildId()), { iconToAdd: o.lmn }),
        eW = ey(
            (0, b.A)(er, t, {
                shouldHideMediaOptions: eu,
                contentType: null == i ? void 0 : i.contentType,
                originalContentType: null == i ? void 0 : i.originalContentType,
            }),
            { iconToAdd: o.xfq },
        ),
        ez = ey((0, J.A)(t, i)),
        eY = ey((0, W.A)(t)),
        eZ = ey((0, z.A)(i, { shouldHideMediaOptions: eu }), { iconToAdd: o.mir }),
        e$ = ey((0, m.A)(null != et ? et : en, el, t, { shouldHideMediaOptions: eu }), { iconToAdd: o.qYV }),
        eQ = ey(
            (0, f.A)({
                id: t.id,
                label: Z.intl.string(Z.t.zBoHlf),
                shiftId: "".concat(t.channel_id, "-").concat(t.id),
            }),
        ),
        e0 = ey(
            (0, T.A)({
                messageId: t.id,
                itemId: d,
                type: s,
                imageSrc: en,
            }),
        ),
        e7 = ey((0, k.A)(t, n), {
            iconToAdd: o.tjR,
            removeIcon: !1,
        }),
        e9 = (0, r.jsx)(o.rXV, { children: null != e0 ? e0 : eQ }),
        e1 = (e) => {
            let { includeLinks: t } = e;
            return (0, r.jsxs)(o.rXV, {
                children: [eq, eJ, eW, ez, eY, eZ, t && e$],
            });
        };
    return eb
        ? (0, r.jsxs)(o.W1t, {
              navId: es,
              onClose: ec,
              "aria-label": ed,
              onSelect: eg,
              children: [
                  (0, r.jsxs)(o.rXV, {
                      children: ["" === a ? eO : null, eh, eL, eE, eS, e_, eD],
                  }),
                  (0, r.jsxs)(o.rXV, {
                      children: [ej, eP, eT, ew, ex, eM, eC, eN, eG, ek, eU],
                  }),
                  (0, r.jsx)(o.rXV, { children: ev }),
                  em
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [e9, e1({ includeLinks: !0 })],
                        })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [e1({ includeLinks: !0 }), e9],
                        }),
                  (0, r.jsxs)(o.rXV, {
                      children: [e7, eV, ei && eB, ei && eK, eH],
                  }),
              ],
          })
        : (0, r.jsxs)(o.W1t, {
              navId: es,
              onClose: ec,
              "aria-label": ed,
              onSelect: eg,
              children: [
                  (0, r.jsx)(o.rXV, { children: eA }),
                  (0, r.jsx)(o.rXV, { children: ej }),
                  (0, r.jsxs)(o.rXV, {
                      children: ["" === a ? eO : null, eh, eL],
                  }),
                  (0, r.jsxs)(o.rXV, {
                      children: [eE, eS, e_, eD],
                  }),
                  (0, r.jsxs)(o.rXV, {
                      children: [eI, eP, eT, ew, ex, eM, eC, eN, eR, eG, ek, eU],
                  }),
                  (0, r.jsxs)(o.rXV, {
                      children: [eF, eX, eV, ei && eB, ei && eK, eH],
                  }),
                  em
                      ? (0, r.jsxs)(r.Fragment, {
                            children: [e9, e1({ includeLinks: !1 }), (0, r.jsx)(o.rXV, { children: e$ })],
                        })
                      : (0, r.jsxs)(r.Fragment, {
                            children: [e1({ includeLinks: !1 }), (0, r.jsx)(o.rXV, { children: e$ }), e9],
                        }),
              ],
          });
}
