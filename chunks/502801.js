n.d(t, { default: () => E }), n(539854), n(388685), n(781311);
var a = n(54381),
    r = n(473749),
    i = n(120356),
    c = n.n(i),
    l = n(952265),
    o = n(481060),
    s = n(904245),
    d = n(686546),
    u = n(930864),
    b = n(124347),
    p = n(957730),
    f = n(359110),
    h = n(987509),
    m = n(131704),
    w = n(592125),
    y = n(703558),
    g = n(626135),
    _ = n(823379),
    v = n(709054),
    O = n(127654),
    P = n(894694),
    j = n(61994),
    x = n(39604),
    I = n(407316),
    T = n(356659),
    C = n(981631),
    S = n(959517),
    k = n(388032),
    L = n(655428);
function R(e) {
    var t;
    let { clips: n } = e,
        r = n[0],
        i = r.thumbnail,
        l = null;
    return (
        "" !== i &&
            ((l = (0, a.jsx)("div", {
                className: c()(L.attachmentPreview, L.attachmentPreviewVideo),
                children: (0, a.jsx)(b.ZP, {
                    className: L.thumbnail,
                    src: i,
                    width: 56,
                    height: 56,
                }),
            })),
            n.length > 1 &&
                (l = (0, a.jsxs)("div", {
                    className: L.attachmentPreviewOverflow,
                    children: [
                        (0, a.jsx)(d.ZP, {
                            mask: d.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: l,
                        }),
                        (0, a.jsxs)(o.Text, {
                            className: L.overflowCount,
                            variant: "text-xs/semibold",
                            color: "text-default",
                            children: ["+", n.length - 1],
                        }),
                    ],
                }))),
        (0, a.jsxs)("div", {
            className: L.forwardPreview,
            children: [
                (0, a.jsx)("div", {
                    className: L.contentWrapper,
                    children: (0, a.jsxs)("div", {
                        className: L.attachmentRow,
                        children: [
                            (0, a.jsx)(o.g8d, {
                                size: "custom",
                                width: 20,
                                color: o.TVs.colors.TEXT_MUTED,
                            }),
                            (0, a.jsx)(o.Text, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children:
                                    1 === n.length
                                        ? null != (t = r.name)
                                            ? t
                                            : k.intl.string(k.t.Cyxddp)
                                        : k.intl.formatToPlainString(k.t.SJ6pPX, { count: n.length }),
                            }),
                        ],
                    }),
                }),
                l,
            ],
        })
    );
}
function E(e) {
    var t,
        n,
        { clips: i, analyticsLocations: c, onClose: d } = e,
        b = (function (e, t) {
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
    let L = r.useCallback(
            async (e, t, n) => {
                let { withMessage: a, transitionToDestination: r, closeAfterSend: u } = t;
                n(!0);
                try {
                    let t = [],
                        m = [];
                    for (let e of i) {
                        var b;
                        let n = await (0, x.rO)(e),
                            a = null != (b = e.name) ? b : (0, T.yl)(v.default.extractTimestamp(e.id)),
                            r = (0, j.Z)(a);
                        if (e.type === P.NJ.CLIP || e.type === P.NJ.VOICE_CLIP) {
                            let a = "".concat("" !== r ? r : "clip", ".mp4");
                            t.push(new File([n], a, { type: "video/mp4" })), m.push({ clip: e });
                        } else if (e.type === P.NJ.SCREENSHOT) {
                            let e = "".concat("" !== r ? r : "screenshot", ".jpeg");
                            t.push(new File([n], e, { type: "image/jpeg" })), m.push({});
                        }
                    }
                    let L = (await Promise.all(e.map(h.qx))).filter(_.lm).filter((e) => (0, I.W)(e));
                    if (0 === L.length) {
                        (0, o.showToast)((0, o.createToast)(k.intl.string(k.t.iufib1), o.ToastType.FAILURE)), n(!1);
                        return;
                    }
                    for (let e of (u && d(), L)) {
                        let n = w.Z.getChannel(e);
                        if (null != n) {
                            for (let e of ((0, O.d)(t, n, y.d.ChannelMessage, {
                                filesMetadata: m,
                                origin: "unknown:clip_share",
                                requireConfirm: !1,
                            }),
                            i))
                                g.default.track(C.rMx.CLIP_SHARED, {
                                    location_stack: c,
                                    guild_id: n.guild_id,
                                    channel_id: n.id,
                                    channel_type: n.type,
                                    application_id: e.applicationId,
                                    clip_id: e.id,
                                });
                            null != a &&
                                "" !== a.trim() &&
                                (await s.Z.sendMessage(n.id, p.ZP.parse(n, a), !1, { location: S.dy.FORWARDING }));
                        }
                    }
                    r && 1 === L.length && ((0, f.Kh)(L[0], { openTextInVoiceIfVoiceChannel: !0 }), l.closeAllModals());
                } catch (e) {
                    (0, o.showToast)((0, o.createToast)(k.intl.string(k.t.iufib1), o.ToastType.FAILURE));
                } finally {
                    n(!1);
                }
            },
            [i, c, d],
        ),
        E = r.useCallback((e) => {
            if (e instanceof m.Sf && !(0, I.W)(e.id)) return { label: k.intl.string(k.t.iufib1) };
        }, []);
    return (0, a.jsx)(
        u.ForwardModal,
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
        })({}, b)),
        (n = n =
            {
                onClose: d,
                customTitle: k.intl.string(k.t.I8lglT),
                customSubtitle: k.intl.string(k.t.Ey7mOU),
                customPreview: (0, a.jsx)(R, { clips: i }),
                customSendHandler: L,
                customValidateDestination: E,
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
