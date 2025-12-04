n.d(t, { default: () => W }), n(539854), n(388685), n(781311);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    l = n.n(i),
    o = n(952265),
    c = n(481060),
    s = n(904245),
    u = n(686546),
    d = n(930864),
    p = n(124347),
    h = n(957730),
    _ = n(359110),
    f = n(987509),
    b = n(131704),
    m = n(592125),
    w = n(703558),
    y = n(626135),
    g = n(823379),
    O = n(709054),
    v = n(127654),
    P = n(894694),
    j = n(61994),
    x = n(39604),
    T = n(407316),
    I = n(356659),
    C = n(981631),
    S = n(959517),
    L = n(388032),
    R = n(698755);
function k(e) {
    var t;
    let { clips: n } = e,
        r = n[0],
        i = r.thumbnail,
        o = null;
    return (
        "" !== i &&
            ((o = (0, a.jsx)("div", {
                className: l()(R.attachmentPreview, R.attachmentPreviewVideo),
                children: (0, a.jsx)(p.ZP, {
                    className: R.thumbnail,
                    src: i,
                    width: 56,
                    height: 56,
                }),
            })),
            n.length > 1 &&
                (o = (0, a.jsxs)("div", {
                    className: R.attachmentPreviewOverflow,
                    children: [
                        (0, a.jsx)(u.ZP, {
                            mask: u.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: o,
                        }),
                        (0, a.jsxs)(c.Text, {
                            className: R.overflowCount,
                            variant: "text-xs/semibold",
                            color: "text-default",
                            children: ["+", n.length - 1],
                        }),
                    ],
                }))),
        (0, a.jsxs)("div", {
            className: R.forwardPreview,
            children: [
                (0, a.jsx)("div", {
                    className: R.contentWrapper,
                    children: (0, a.jsxs)("div", {
                        className: R.attachmentRow,
                        children: [
                            (0, a.jsx)(c.g8d, {
                                size: "custom",
                                width: 20,
                                color: c.TVs.colors.TEXT_LOW_CONTRAST,
                            }),
                            (0, a.jsx)(c.Text, {
                                variant: "text-md/medium",
                                color: "text-low-contrast",
                                children:
                                    1 === n.length
                                        ? null != (t = r.name)
                                            ? t
                                            : L.intl.string(L.t.Cyxddp)
                                        : L.intl.formatToPlainString(L.t.SJ6pPX, { count: n.length }),
                            }),
                        ],
                    }),
                }),
                o,
            ],
        })
    );
}
function W(e) {
    var t,
        n,
        { clips: i, analyticsLocations: l, onClose: u } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        r = {},
                        i = Object.keys(e);
                    for (a = 0; a < i.length; a++) (n = i[a]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (a = 0; a < i.length; a++)
                    (n = i[a]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["clips", "analyticsLocations", "onClose"]);
    let R = r.useCallback(
            async (e, t, n) => {
                let { withMessage: a, transitionToDestination: r, closeAfterSend: d } = t;
                n(!0);
                try {
                    let t = [],
                        b = [];
                    for (let e of i) {
                        var p;
                        let n = await (0, x.rO)(e),
                            a = null != (p = e.name) ? p : (0, I.yl)(O.default.extractTimestamp(e.id)),
                            r = (0, j.Z)(a);
                        if (e.type === P.NJ.CLIP || e.type === P.NJ.VOICE_CLIP) {
                            let a = "".concat("" !== r ? r : "clip", ".mp4");
                            t.push(new File([n], a, { type: "video/mp4" })), b.push({ clip: e });
                        } else if (e.type === P.NJ.SCREENSHOT) {
                            let e = "".concat("" !== r ? r : "screenshot", ".jpeg");
                            t.push(new File([n], e, { type: "image/jpeg" })), b.push({});
                        }
                    }
                    let R = (await Promise.all(e.map(f.qx))).filter(g.lm).filter((e) => (0, T.W)(e));
                    if (0 === R.length) {
                        (0, c.showToast)((0, c.createToast)(L.intl.string(L.t.iufib1), c.ToastType.FAILURE)), n(!1);
                        return;
                    }
                    for (let e of (d && u(), R)) {
                        let n = m.Z.getChannel(e);
                        if (null != n) {
                            for (let e of ((0, v.d)(t, n, w.d.ChannelMessage, {
                                filesMetadata: b,
                                origin: "unknown:clip_share",
                                requireConfirm: !1,
                            }),
                            i))
                                y.default.track(C.rMx.CLIP_SHARED, {
                                    location_stack: l,
                                    guild_id: n.guild_id,
                                    channel_id: n.id,
                                    channel_type: n.type,
                                    application_id: e.applicationId,
                                    clip_id: e.id,
                                });
                            null != a &&
                                "" !== a.trim() &&
                                (await s.Z.sendMessage(n.id, h.ZP.parse(n, a), !1, { location: S.dy.FORWARDING }));
                        }
                    }
                    r && 1 === R.length && ((0, _.Kh)(R[0], { openTextInVoiceIfVoiceChannel: !0 }), o.closeAllModals());
                } catch (e) {
                    (0, c.showToast)((0, c.createToast)(L.intl.string(L.t.iufib1), c.ToastType.FAILURE));
                } finally {
                    n(!1);
                }
            },
            [i, l, u],
        ),
        W = r.useCallback((e) => {
            if (e instanceof b.Sf && !(0, T.W)(e.id)) return { label: L.intl.string(L.t.iufib1) };
        }, []);
    return (0, a.jsx)(
        d.ForwardModal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    a = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (a = a.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    a.forEach(function (t) {
                        var a;
                        (a = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: a,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = a);
                    });
            }
            return e;
        })({}, p)),
        (n = n =
            {
                onClose: u,
                customTitle: L.intl.string(L.t.I8lglT),
                customSubtitle: L.intl.string(L.t.Ey7mOU),
                customPreview: (0, a.jsx)(k, { clips: i }),
                customSendHandler: R,
                customValidateDestination: W,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
