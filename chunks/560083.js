a.d(t, { default: () => x }), a(388685);
var n = a(54381),
    r = a(473749),
    o = a(481060),
    c = a(904245),
    i = a(794295),
    l = a(906732),
    s = a(835473),
    d = a(930864),
    u = a(957730),
    b = a(987509),
    f = a(592125),
    p = a(626135),
    m = a(572004),
    w = a(823379),
    _ = a(164670),
    h = a(848118),
    y = a(181268),
    O = a(981631),
    v = a(959517),
    g = a(388032),
    P = a(887444);
function I(e) {
    let { sku: t, guildId: a } = e,
        c = (0, s.q)(t.applicationId),
        l = r.useMemo(() => (0, _.wQ)(a, t), [a, t]);
    return (0, n.jsxs)("div", {
        className: P.forwardPreview,
        children: [
            (0, n.jsxs)("div", {
                className: P.linkContainer,
                children: [
                    (0, n.jsx)(i.Z, {
                        title: t.name,
                        href: l,
                        children: (0, n.jsx)(o.Text, {
                            variant: "text-md/medium",
                            color: "text-link",
                            lineClamp: 1,
                            children: t.name,
                        }),
                    }),
                    (0, n.jsxs)("div", {
                        className: P.applicationInfo,
                        children: [
                            (0, n.jsx)(o.xPt, {
                                size: "xs",
                                color: "currentColor",
                                className: P.linkIcon,
                            }),
                            (0, n.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "text-muted",
                                children: g.intl.formatToPlainString(g.t["CqpEC+"], {
                                    applicationName: null == c ? void 0 : c.name,
                                }),
                            }),
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(h.A, {
                containerClassName: P.cardImage,
                foregroundImageClassName: P.cardImage,
                backgroundImageClassName: P.cardImage,
                sku: t,
                shape: "square",
            }),
        ],
    });
}
function x(e) {
    var t,
        a,
        { sku: i, guildId: s, source: h, onClose: P, analyticsLocations: x, analyticsContext: j } = e,
        C = (function (e, t) {
            if (null == e) return {};
            var a,
                n,
                r = (function (e, t) {
                    if (null == e) return {};
                    var a,
                        n,
                        r = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (a = o[n]), t.indexOf(a) >= 0 || (r[a] = e[a]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++)
                    (a = o[n]),
                        !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
            }
            return r;
        })(e, ["sku", "guildId", "source", "onClose", "analyticsLocations", "analyticsContext"]);
    let { analyticsLocations: k } = (0, l.ZP)(null != x ? x : []),
        S = r.useCallback(
            async (e, t, a) => {
                let { withMessage: n, closeAfterSend: r } = t;
                a(!0);
                try {
                    let t = (await Promise.all(e.map(b.qx))).filter(w.lm);
                    if (0 === t.length) return void a(!1);
                    r && P();
                    let o = (0, _.l8)(s, i);
                    for (let e of t) {
                        let t = f.Z.getChannel(e);
                        null != t &&
                            (await c.Z.sendMessage(t.id, u.ZP.parse(t, o + (null != n ? n : "")), !1, {
                                location: v.dy.SOCIAL_LAYER_STOREFRONT,
                            }));
                    }
                } catch (e) {
                    (0, o.showToast)((0, o.createToast)(g.intl.string(g.t.iufib1), o.ToastType.FAILURE));
                } finally {
                    a(!1);
                }
            },
            [P, s, i],
        ),
        L = r.useMemo(
            () => [
                {
                    variant: "secondary",
                    text: void 0,
                    onClick: () => {
                        p.default.track(O.rMx.SLAYER_STOREFRONT_FORWARD_MODAL_ELEMENT_CLICKED, {
                            slayer_storefront_session_id: null == j ? void 0 : j.sessionId,
                            guild_id: s,
                            sku_id: i.id,
                            cta_type: y.eR.COPY_LINK_BUTTON,
                            location_stack: k,
                        }),
                            (0, m.JG)((0, _.wQ)(s, i), () =>
                                (0, o.showToast)((0, o.createToast)(g.intl.string(g.t["L/PwZf"]), o.ToastType.SUCCESS)),
                            );
                    },
                    icon: o.xPt,
                },
            ],
            [s, i, null == j ? void 0 : j.sessionId, k],
        );
    return (0, n.jsx)(
        d.ForwardModal,
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(a);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(a).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(a, e).enumerable;
                        }),
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = a[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, C)),
        (a = a =
            {
                onClose: P,
                source: h,
                customPreview: (0, n.jsx)(I, {
                    sku: i,
                    guildId: s,
                }),
                customSubtitle: g.intl.string(g.t.yiaXeN),
                customSendHandler: S,
                additionalActions: L,
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
            : (function (e, t) {
                  var a = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      a.push.apply(a, n);
                  }
                  return a;
              })(Object(a)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
              }),
        t),
    );
}
