n.d(t, { Z: () => O }), n(953529), n(388685);
var r = n(951288),
    l = n(647438),
    i = n(913527),
    a = n.n(i),
    s = n(886025),
    o = n(481060),
    c = n(516129),
    u = n(345861),
    d = n(930180),
    x = n(320596),
    g = n(924301),
    m = n(236373),
    v = n(954313),
    h = n(405613),
    j = n(440371),
    p = n(765305),
    f = n(486324),
    b = n(388032),
    y = n(230334);
function O(e) {
    let {
            guildEvent: t,
            guildEventId: i,
            guildId: O,
            error: C,
            validationErrorMessage: N,
            onChange: P,
            canSetFocus: S = !1,
        } = e,
        {
            entityType: T,
            channelId: Z,
            description: w,
            name: I,
            image: D,
            scheduledEndTime: k,
            scheduledStartTime: R,
            recurrenceRule: G,
        } = t,
        A = (0, d._d)(Z),
        M = (0, d.K3)(Z),
        _ = null != t && (0, g.xt)(t),
        L = l.useMemo(() => {
            let e = (0, v.v1)(t);
            return null != e ? e : { startDate: a()(R) };
        }, [t, R]),
        [z, X] = l.useState(() => (0, v.zi)(a()(R), G)),
        V = l.useRef(null);
    l.useEffect(() => {
        if (S) {
            var e;
            null == (e = V.current) || e.focus();
        }
    }, [S]);
    let W = (e) => {
            P({ image: e });
        },
        U = (e, t) => {
            if (null == e || void 0 === t) return void W(null);
            (0, o.ZDy)(async () => {
                let { default: l } = await Promise.all([n.e("91689"), n.e("59732"), n.e("21046")]).then(
                    n.bind(n, 712451),
                );
                return (n) =>
                    (0, r.jsx)(
                        l,
                        (function (e) {
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
                        })(
                            {
                                imageUri: e,
                                file: t,
                                onCrop: (e) => {
                                    let { imageUri: t } = e;
                                    return W(t);
                                },
                                uploadType: f.pC.SCHEDULED_EVENT_IMAGE,
                            },
                            n,
                        ),
                    );
            });
        },
        q = null == C ? void 0 : C.getFirstFieldErrorMessage("name"),
        F = null == C ? void 0 : C.getFirstFieldErrorMessage("description"),
        B = null == q && null == F ? (null == C ? void 0 : C.getAnyErrorMessage()) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: y.blockedUsersContainer,
                children: null != Z && !_ && (A > 0 || M > 0) && (0, r.jsx)(x.mv, { channelId: Z }),
            }),
            (0, r.jsx)("div", {
                className: y.form,
                children: (0, r.jsxs)(o.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(o.oil, {
                            label: b.intl.string(b.t["0HbEQ0"]),
                            required: !0,
                            error: null != q ? q : B,
                            onChange: (e) => {
                                P({ name: e });
                            },
                            placeholder: b.intl.string(b.t["6/yarq"]),
                            maxLength: p.p,
                            value: I,
                            autoComplete: "off",
                            inputRef: V,
                        }),
                        (0, r.jsx)(j.Z, {
                            className: y.formItem,
                            onScheduleChange: (e) => {
                                let { startDate: t, endDate: n } = e,
                                    r = {
                                        scheduledStartTime: null == t ? void 0 : t.toISOString(),
                                        scheduledEndTime: null == n ? void 0 : n.toISOString(),
                                    };
                                null != t &&
                                    null != k &&
                                    (null == n ? void 0 : n.isBefore(t)) &&
                                    (r.scheduledEndTime = t.add(1, "hour").toISOString()),
                                    null != t && null != z && (r.recurrenceRule = (0, v.mF)(z, t)),
                                    P(r);
                            },
                            onRecurrenceChange: (e) => {
                                let t = L.startDate;
                                null != t && (P({ recurrenceRule: (0, v.mF)(e, t) }), X(e));
                            },
                            schedule: L,
                            recurrenceRule: G,
                            showEndDate: T === p.WX.EXTERNAL,
                            requireEndDate: T === p.WX.EXTERNAL,
                            disableStartDateTime: _,
                            guildId: O,
                        }),
                        (0, r.jsx)(E, { error: N }),
                        (0, r.jsx)(o.Kx8, {
                            label: b.intl.string(b.t["+gRCCw"]),
                            error: F,
                            placeholder: b.intl.string(b.t["kWO/Ex"]),
                            value: w,
                            onChange: (e) => {
                                P({ description: e });
                            },
                            maxLength: p.wm,
                            autosize: !0,
                        }),
                        (0, r.jsx)(s.N, {
                            label: b.intl.string(b.t.Ly121d),
                            description: b.intl.string(b.t.B9C9bW),
                            children:
                                null != D
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(c.Z, {
                                                  className: y.imagePreview,
                                                  iconWrapperClassName: y.imagePreviewInner,
                                                  image: D,
                                                  makeURL: (e) => {
                                                      if (null == e) return null;
                                                      if (null != O) {
                                                          var n;
                                                          return null != (n = (0, h.Z)((0, m.Gb)(t, O, i))) ? n : null;
                                                      }
                                                  },
                                                  onChange: U,
                                                  hint: b.intl.string(b.t.G44Xmp),
                                                  showRemoveButton: !1,
                                                  enabled: !0,
                                              }),
                                              (0, r.jsx)(o.zxk, {
                                                  variant: "primary",
                                                  size: "sm",
                                                  text: b.intl.string(b.t.gmUvOz),
                                                  onClick: () => W(null),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(u.Z, {
                                          size: "sm",
                                          variant: "primary",
                                          onChange: U,
                                          text: b.intl.string(b.t.vKCGYW),
                                      }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function E(e) {
    let { error: t } = e;
    return null == t
        ? null
        : (0, r.jsx)(o.Text, {
              color: "text-danger",
              variant: "text-xs/normal",
              className: y.warning,
              children: t,
          });
}
