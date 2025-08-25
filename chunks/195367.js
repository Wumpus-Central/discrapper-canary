n.d(t, { Z: () => E }), n(953529), n(388685);
var l = n(951288),
    r = n(647438),
    i = n(913527),
    a = n.n(i),
    s = n(755721),
    o = n(481060),
    c = n(516129),
    u = n(345861),
    d = n(930180),
    x = n(320596),
    m = n(924301),
    g = n(236373),
    v = n(954313),
    h = n(405613),
    p = n(440371),
    f = n(765305),
    j = n(486324),
    y = n(388032),
    b = n(230334);
function E(e) {
    let {
            guildEvent: t,
            guildEventId: i,
            guildId: E,
            error: O,
            validationErrorMessage: C,
            onChange: S,
            canSetFocus: T = !1,
        } = e,
        {
            entityType: Z,
            channelId: I,
            description: P,
            name: w,
            image: D,
            scheduledEndTime: A,
            scheduledStartTime: R,
            recurrenceRule: L,
        } = t,
        _ = (0, d._d)(I),
        k = (0, d.K3)(I),
        G = null != t && (0, m.xt)(t),
        M = r.useMemo(() => {
            let e = (0, v.v1)(t);
            return null != e ? e : { startDate: a()(R) };
        }, [t, R]),
        [X, W] = r.useState(() => (0, v.zi)(a()(R), L)),
        z = r.useRef(null);
    r.useEffect(() => {
        if (T) {
            var e;
            null == (e = z.current) || e.focus();
        }
    }, [T]);
    let V = (e) => {
            S({ image: e });
        },
        U = (e, t) => {
            if (null == e || void 0 === t) return void V(null);
            (0, o.ZDy)(async () => {
                let { default: r } = await Promise.all([n.e("91689"), n.e("59732"), n.e("21046")]).then(
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
                                uploadType: j.pC.SCHEDULED_EVENT_IMAGE,
                            },
                            n,
                        ),
                    );
            });
        },
        F = null == O ? void 0 : O.getFirstFieldErrorMessage("name"),
        q = null == O ? void 0 : O.getFirstFieldErrorMessage("description"),
        B = null == F && null == q ? (null == O ? void 0 : O.getAnyErrorMessage()) : null;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: b.blockedUsersContainer,
                children: null != I && !G && (_ > 0 || k > 0) && (0, l.jsx)(x.mv, { channelId: I }),
            }),
            (0, l.jsxs)("div", {
                className: b.form,
                children: [
                    (0, l.jsxs)(o.xJW, {
                        title: y.intl.string(y.t["0HbEQ0"]),
                        className: b.topicFormItem,
                        required: !0,
                        children: [
                            (0, l.jsx)(o.oil, {
                                onChange: (e) => {
                                    S({ name: e });
                                },
                                placeholder: y.intl.string(y.t["6/yarq"]),
                                maxLength: f.p,
                                value: w,
                                autoComplete: "off",
                                inputRef: z,
                            }),
                            (0, l.jsx)(N, { error: F }),
                            (0, l.jsx)(N, { error: B }),
                        ],
                    }),
                    (0, l.jsx)(p.Z, {
                        className: b.formItem,
                        onScheduleChange: (e) => {
                            let { startDate: t, endDate: n } = e,
                                l = {
                                    scheduledStartTime: null == t ? void 0 : t.toISOString(),
                                    scheduledEndTime: null == n ? void 0 : n.toISOString(),
                                };
                            null != t &&
                                null != A &&
                                (null == n ? void 0 : n.isBefore(t)) &&
                                (l.scheduledEndTime = t.add(1, "hour").toISOString()),
                                null != t && null != X && (l.recurrenceRule = (0, v.mF)(X, t)),
                                S(l);
                        },
                        onRecurrenceChange: (e) => {
                            let t = M.startDate;
                            null != t && (S({ recurrenceRule: (0, v.mF)(e, t) }), W(e));
                        },
                        schedule: M,
                        recurrenceRule: L,
                        showEndDate: Z === f.WX.EXTERNAL,
                        requireEndDate: Z === f.WX.EXTERNAL,
                        disableStartDateTime: G,
                        guildId: E,
                    }),
                    (0, l.jsx)(N, { error: C }),
                    (0, l.jsxs)(o.xJW, {
                        title: y.intl.string(y.t["+gRCCw"]),
                        className: b.formItem,
                        children: [
                            (0, l.jsx)(o.Kx8, {
                                placeholder: y.intl.string(y.t["kWO/Ex"]),
                                value: P,
                                onChange: (e) => {
                                    S({ description: e });
                                },
                                maxLength: f.wm,
                                autosize: !0,
                            }),
                            (0, l.jsx)(N, { error: q }),
                        ],
                    }),
                    (0, l.jsxs)(o.xJW, {
                        title: y.intl.string(y.t.Ly121d),
                        className: b.formItem,
                        children: [
                            (0, l.jsx)(o.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                className: b.addImageHint,
                                children: y.intl.string(y.t.B9C9bW),
                            }),
                            null != D
                                ? (0, l.jsxs)(l.Fragment, {
                                      children: [
                                          (0, l.jsx)(c.Z, {
                                              className: b.imagePreview,
                                              iconWrapperClassName: b.imagePreviewInner,
                                              image: D,
                                              makeURL: (e) => {
                                                  if (null == e) return null;
                                                  if (null != E) {
                                                      var n;
                                                      return null != (n = (0, h.Z)((0, g.Gb)(t, E, i))) ? n : null;
                                                  }
                                              },
                                              onChange: U,
                                              hint: y.intl.string(y.t.G44Xmp),
                                              showRemoveButton: !1,
                                              enabled: !0,
                                          }),
                                          (0, l.jsx)(o.zxk, {
                                              variant: "primary",
                                              size: "sm",
                                              text: y.intl.string(y.t.gmUvOz),
                                              onClick: () => V(null),
                                          }),
                                      ],
                                  })
                                : (0, l.jsx)(u.Z, {
                                      size: s.zx.Sizes.SMALL,
                                      onChange: U,
                                      buttonCTA: y.intl.string(y.t.vKCGYW),
                                  }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
function N(e) {
    let { error: t } = e;
    return null == t
        ? null
        : (0, l.jsx)(o.Text, {
              color: "text-danger",
              variant: "text-xs/normal",
              className: b.warning,
              children: t,
          });
}
