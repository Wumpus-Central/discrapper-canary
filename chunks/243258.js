a.d(t, {
    default: () => S,
}),
    a(321073),
    a(896048),
    a(733351);
var n = a(627968),
    r = a(64700),
    l = a(503698),
    c = a.n(l),
    i = a(192308),
    s = a(397927),
    o = a(843472),
    d = a(573435),
    f = a(911269),
    p = a(619517),
    u = a(451909),
    b = a(378570),
    y = a(223863),
    h = a(95701),
    m = a(734057),
    O = a(31717),
    g = a(954571),
    j = a(403362),
    w = a(661191),
    x = a(518960),
    _ = a(372684),
    v = a(439818),
    P = a(399925),
    T = a(74847),
    E = a(696016),
    k = a(652215),
    C = a(381941),
    A = a(985018),
    I = a(312396);

function R(e) {
    var t;
    let { clips: a } = e,
        r = a[0],
        l = r.thumbnail,
        i = null;
    return (
        "" !== l &&
            ((i = (0, n.jsx)("div", {
                className: c()(I.cR, I.JZ),
                children: (0, n.jsx)(p.Ay, {
                    className: I.xn,
                    src: l,
                    width: 56,
                    height: 56,
                }),
            })),
            a.length > 1 &&
                (i = (0, n.jsxs)("div", {
                    className: I.EW,
                    children: [
                        (0, n.jsx)(d.Ay, {
                            mask: d.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
                            width: 56,
                            height: 56,
                            children: i,
                        }),
                        (0, n.jsxs)(s.Text, {
                            className: I.mB,
                            variant: "text-xs/semibold",
                            color: "text-default",
                            children: ["+", a.length - 1],
                        }),
                    ],
                }))),
        (0, n.jsxs)("div", {
            className: I.sq,
            children: [
                (0, n.jsx)("div", {
                    className: I.FG,
                    children: (0, n.jsxs)("div", {
                        className: I.kp,
                        children: [
                            (0, n.jsx)(s.SfG, {
                                size: "custom",
                                width: 20,
                                color: s.LU0.colors.TEXT_MUTED,
                            }),
                            (0, n.jsx)(s.Text, {
                                variant: "text-md/medium",
                                color: "text-muted",
                                children:
                                    1 === a.length
                                        ? null != (t = r.name)
                                            ? t
                                            : A.intl.string(A.t.Cyxddp)
                                        : A.intl.formatToPlainString(A.t.SJ6pPX, {
                                              count: a.length,
                                          }),
                            }),
                        ],
                    }),
                }),
                i,
            ],
        })
    );
}

function S(e) {
    var t, a;
    let { clips: l, analyticsLocations: c, onClose: d } = e,
        p = (function (e, t) {
            if (null == e) return {};
            var a,
                n,
                r,
                l = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (r = 0, a = Reflect.ownKeys(e); r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l;
            }
            if (
                ((l = (function (e, t) {
                    if (null == e) return {};
                    var a,
                        n,
                        r = {},
                        l = Object.getOwnPropertyNames(e);
                    for (n = 0; n < l.length; n++)
                        (a = l[n]),
                            !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (r[a] = e[a]);
                    return r;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++)
                    (n = a[r]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            return l;
        })(e, ["clips", "analyticsLocations", "onClose"]),
        I = r.useCallback(
            async (e, t, a) => {
                let { withMessage: n, transitionToDestination: r, closeAfterSend: f } = t;
                a(!0);
                try {
                    let t = [],
                        h = [];
                    for (let e of l) {
                        var p;
                        let a = await (0, P.VO)(e),
                            n = null != (p = e.name) ? p : (0, E.cM)(w.default.extractTimestamp(e.id)),
                            r = (0, v.A)(n);
                        if (e.type === _.nQ.CLIP || e.type === _.nQ.VOICE_CLIP) {
                            let n = "".concat("" !== r ? r : "clip", ".mp4");
                            t.push(
                                new File([a], n, {
                                    type: "video/mp4",
                                }),
                            ),
                                h.push({
                                    clip: e,
                                });
                        } else if (e.type === _.nQ.SCREENSHOT) {
                            let e = "".concat("" !== r ? r : "screenshot", ".jpeg");
                            t.push(
                                new File([a], e, {
                                    type: "image/jpeg",
                                }),
                            ),
                                h.push({});
                        }
                    }
                    let I = (await Promise.all(e.map(y.pk))).filter(j.Vq).filter((e) => (0, T.t)(e));
                    if (0 === I.length) {
                        (0, s.showToast)((0, s.createToast)(A.intl.string(A.t.iufib1), s.ToastType.FAILURE)), a(!1);
                        return;
                    }
                    for (let e of (f && d(), I)) {
                        let a = m.A.getChannel(e);
                        if (null != a) {
                            for (let e of ((0, x.R)(t, a, O.C.ChannelMessage, {
                                filesMetadata: h,
                                origin: "unknown:clip_share",
                                requireConfirm: !1,
                            }),
                            l))
                                g.default.track(k.HAw.CLIP_SHARED, {
                                    location_stack: c,
                                    guild_id: a.guild_id,
                                    channel_id: a.id,
                                    channel_type: a.type,
                                    application_id: e.applicationId,
                                    clip_id: e.id,
                                });
                            null != n &&
                                "" !== n.trim() &&
                                (await o.A.sendMessage(a.id, u.Ay.parse(a, n), !1, {
                                    location: C.Hx.FORWARDING,
                                }));
                        }
                    }
                    r &&
                        1 === I.length &&
                        ((0, b.iN)(I[0], {
                            openTextInVoiceIfVoiceChannel: !0,
                        }),
                        i.closeAllModals());
                } catch (e) {
                    (0, s.showToast)((0, s.createToast)(A.intl.string(A.t.iufib1), s.ToastType.FAILURE));
                } finally {
                    a(!1);
                }
            },
            [l, c, d],
        ),
        S = r.useCallback((e) => {
            if (e instanceof h.YB && !(0, T.t)(e.id))
                return {
                    label: A.intl.string(A.t.iufib1),
                };
        }, []);
    return (0, n.jsx)(
        f.ForwardModal,
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
        })({}, p)),
        (a = a =
            {
                onClose: d,
                customTitle: A.intl.string(A.t.I8lglT),
                customSubtitle: A.intl.string(A.t.Ey7mOU),
                customPreview: (0, n.jsx)(R, {
                    clips: l,
                }),
                customSendHandler: I,
                customValidateDestination: S,
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
