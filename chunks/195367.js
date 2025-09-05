n.d(t, { Z: () => b }), n(953529), n(388685);
var l = n(951288),
    r = n(647438),
    i = n(913527),
    a = n.n(i),
    s = n(481060),
    o = n(516129),
    c = n(345861),
    u = n(930180),
    d = n(320596),
    x = n(924301),
    m = n(236373),
    g = n(954313),
    v = n(405613),
    h = n(440371),
    p = n(765305),
    f = n(486324),
    j = n(388032),
    y = n(842529);
function b(e) {
    let {
            guildEvent: t,
            guildEventId: i,
            guildId: b,
            error: N,
            validationErrorMessage: O,
            onChange: C,
            canSetFocus: S = !1,
        } = e,
        {
            entityType: T,
            channelId: Z,
            description: I,
            name: P,
            image: w,
            scheduledEndTime: D,
            scheduledStartTime: R,
            recurrenceRule: A,
        } = t,
        G = (0, u._d)(Z),
        _ = (0, u.K3)(Z),
        k = null != t && (0, x.xt)(t),
        L = r.useMemo(() => {
            let e = (0, g.v1)(t);
            return null != e ? e : { startDate: a()(R) };
        }, [t, R]),
        [M, X] = r.useState(() => (0, g.zi)(a()(R), A)),
        W = r.useRef(null);
    r.useEffect(() => {
        if (S) {
            var e;
            null == (e = W.current) || e.focus();
        }
    }, [S]);
    let V = (e) => {
            C({ image: e });
        },
        z = (e, t) => {
            if (null == e || void 0 === t) return void V(null);
            (0, s.ZDy)(async () => {
                let { default: r } = await Promise.all([n.e("91689"), n.e("59732"), n.e("61984")]).then(
                    n.bind(n, 712451),
                );
                return (n) =>
                    (0, l.jsx)(
                        r,
                        (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    l = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols &&
                                    (l = l.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        }),
                                    )),
                                    l.forEach(function (t) {
                                        var l;
                                        (l = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: l,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0,
                                                  })
                                                : (e[t] = l);
                                    });
                            }
                            return e;
                        })(
                            {
                                imageUri: e,
                                file: t,
                                onCrop: (e) => {
                                    let { imageUri: t } = e;
                                    return V(t);
                                },
                                uploadType: f.pC.SCHEDULED_EVENT_IMAGE,
                            },
                            n,
                        ),
                    );
            });
        },
        U = null == N ? void 0 : N.getFirstFieldErrorMessage("name"),
        F = null == N ? void 0 : N.getFirstFieldErrorMessage("description"),
        q = null == U && null == F ? (null == N ? void 0 : N.getAnyErrorMessage()) : null;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: y.blockedUsersContainer,
                children: null != Z && !k && (G > 0 || _ > 0) && (0, l.jsx)(d.mv, { channelId: Z }),
            }),
            (0, l.jsxs)("div", {
                className: y.form,
                children: [
                    (0, l.jsxs)(s.xJW, {
                        title: j.intl.string(j.t["0HbEQ0"]),
                        className: y.topicFormItem,
                        required: !0,
                        children: [
                            (0, l.jsx)(s.oil, {
                                onChange: (e) => {
                                    C({ name: e });
                                },
                                placeholder: j.intl.string(j.t["6/yarq"]),
                                maxLength: p.p,
                                value: P,
                                autoComplete: "off",
                                inputRef: W,
                            }),
                            (0, l.jsx)(E, { error: U }),
                            (0, l.jsx)(E, { error: q }),
                        ],
                    }),
                    (0, l.jsx)(h.Z, {
                        className: y.formItem,
                        onScheduleChange: (e) => {
                            let { startDate: t, endDate: n } = e,
                                l = {
                                    scheduledStartTime: null == t ? void 0 : t.toISOString(),
                                    scheduledEndTime: null == n ? void 0 : n.toISOString(),
                                };
                            null != t &&
                                null != D &&
                                (null == n ? void 0 : n.isBefore(t)) &&
                                (l.scheduledEndTime = t.add(1, "hour").toISOString()),
                                null != t && null != M && (l.recurrenceRule = (0, g.mF)(M, t)),
                                C(l);
                        },
                        onRecurrenceChange: (e) => {
                            let t = L.startDate;
                            null != t && (C({ recurrenceRule: (0, g.mF)(e, t) }), X(e));
                        },
                        schedule: L,
                        recurrenceRule: A,
                        showEndDate: T === p.WX.EXTERNAL,
                        requireEndDate: T === p.WX.EXTERNAL,
                        disableStartDateTime: k,
                        guildId: b,
                    }),
                    (0, l.jsx)(E, { error: O }),
                    (0, l.jsxs)(s.xJW, {
                        title: j.intl.string(j.t["+gRCCw"]),
                        className: y.formItem,
                        children: [
                            (0, l.jsx)(s.Kx8, {
                                placeholder: j.intl.string(j.t["kWO/Ex"]),
                                value: I,
                                onChange: (e) => {
                                    C({ description: e });
                                },
                                maxLength: p.wm,
                                autosize: !0,
                            }),
                            (0, l.jsx)(E, { error: F }),
                        ],
                    }),
                    (0, l.jsxs)(s.xJW, {
                        title: j.intl.string(j.t.Ly121d),
                        className: y.formItem,
                        children: [
                            (0, l.jsx)(s.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: y.addImageHint,
                                children: j.intl.string(j.t.B9C9bW),
                            }),
                            null != w
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(o.Z, {
                                              className: y.imagePreview,
                                              iconWrapperClassName: y.imagePreviewInner,
                                              image: w,
                                              makeURL: (e) => {
                                                  if (null == e) return null;
                                                  if (null != b) {
                                                      var n;
                                                      return null != (n = (0, v.Z)((0, m.Gb)(t, b, i))) ? n : null;
                                                  }
                                              },
                                              onChange: z,
                                              hint: j.intl.string(j.t.G44Xmp),
                                              showRemoveButton: !1,
                                              enabled: !0,
                                          }),
                                          (0, l.jsx)(s.zxk, {
                                              variant: "primary",
                                              size: "sm",
                                              text: j.intl.string(j.t.gmUvOz),
                                              onClick: () => V(null),
                                          }),
                                      ],
                                  })
                                : (0, l.jsx)(c.Z, {
                                      size: "sm",
                                      variant: "primary",
                                      onChange: z,
                                      text: j.intl.string(j.t.vKCGYW),
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function E(e) {
    let { error: t } = e;
    return null == t
        ? null
        : (0, l.jsx)(s.Text, {
              color: "text-danger",
              variant: "text-xs/normal",
              className: y.warning,
              children: t,
          });
}
