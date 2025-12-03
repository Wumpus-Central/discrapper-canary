n.d(t, { Z: () => y }), n(953529), n(388685);
var r = n(54381),
    l = n(473749),
    i = n(913527),
    a = n.n(i),
    s = n(481060),
    o = n(516129),
    c = n(345861),
    u = n(930180),
    d = n(320596),
    g = n(924301),
    m = n(236373),
    x = n(854698),
    h = n(405613),
    v = n(440371),
    p = n(765305),
    f = n(486324),
    j = n(388032),
    b = n(230334);
function y(e) {
    let {
            guildEvent: t,
            guildEventId: i,
            guildId: y,
            error: E,
            validationErrorMessage: N,
            onChange: C,
            canSetFocus: P = !1,
        } = e,
        {
            entityType: S,
            channelId: I,
            description: Z,
            name: T,
            image: w,
            scheduledEndTime: k,
            scheduledStartTime: D,
            recurrenceRule: R,
        } = t,
        _ = (0, u._d)(I),
        A = (0, u.K3)(I),
        G = null != t && (0, g.xt)(t),
        U = l.useMemo(() => {
            let e = (0, x.v1)(t);
            return null != e ? e : { startDate: a()(D) };
        }, [t, D]),
        [L, z] = l.useState(() => (0, x.zi)(a()(D), R)),
        F = l.useRef(null);
    l.useEffect(() => {
        if (P) {
            var e;
            null == (e = F.current) || e.focus();
        }
    }, [P]);
    let M = (e) => {
            C({ image: e });
        },
        V = (e, t) => {
            if (null == e || void 0 === t) return void M(null);
            (0, s.ZDy)(async () => {
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
                                    return M(t);
                                },
                                uploadType: f.pC.SCHEDULED_EVENT_IMAGE,
                            },
                            n,
                        ),
                    );
            });
        },
        B = null == E ? void 0 : E.getFirstFieldErrorMessage("name"),
        X = null == E ? void 0 : E.getFirstFieldErrorMessage("description"),
        W = null == B && null == X ? (null == E ? void 0 : E.getAnyErrorMessage()) : null;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)("div", {
                className: b.blockedUsersContainer,
                children: null != I && !G && (_ > 0 || A > 0) && (0, r.jsx)(d.mv, { channelId: I }),
            }),
            (0, r.jsx)("div", {
                className: b.form,
                children: (0, r.jsxs)(s.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(s.oil, {
                            label: j.intl.string(j.t["0HbEQ6"]),
                            required: !0,
                            error: null != B ? B : W,
                            onChange: (e) => {
                                C({ name: e });
                            },
                            placeholder: j.intl.string(j.t["6/yars"]),
                            maxLength: p.p,
                            value: T,
                            autoComplete: "off",
                            inputRef: F,
                        }),
                        (0, r.jsx)(v.Z, {
                            className: b.formItem,
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
                                    null != t && null != L && (r.recurrenceRule = (0, x.mF)(L, t)),
                                    C(r);
                            },
                            onRecurrenceChange: (e) => {
                                let t = U.startDate;
                                null != t && (C({ recurrenceRule: (0, x.mF)(e, t) }), z(e));
                            },
                            schedule: U,
                            recurrenceRule: R,
                            showEndDate: S === p.WX.EXTERNAL,
                            requireEndDate: S === p.WX.EXTERNAL,
                            disableStartDateTime: G,
                            guildId: y,
                        }),
                        (0, r.jsx)(O, { error: N }),
                        (0, r.jsx)(s.Kx8, {
                            label: j.intl.string(j.t["+gRCC7"]),
                            error: X,
                            placeholder: j.intl.string(j.t["kWO/E8"]),
                            value: Z,
                            onChange: (e) => {
                                C({ description: e });
                            },
                            maxLength: p.wm,
                            autosize: !0,
                        }),
                        (0, r.jsx)(s.gNt, {
                            label: j.intl.string(j.t.Ly121e),
                            description: j.intl.string(j.t.B9C9be),
                            children:
                                null != w
                                    ? (0, r.jsxs)(r.Fragment, {
                                          children: [
                                              (0, r.jsx)(o.Z, {
                                                  className: b.imagePreview,
                                                  iconWrapperClassName: b.imagePreviewInner,
                                                  image: w,
                                                  makeURL: (e) => {
                                                      if (null == e) return null;
                                                      if (null != y) {
                                                          var n;
                                                          return null != (n = (0, h.Z)((0, m.Gb)(t, y, i))) ? n : null;
                                                      }
                                                  },
                                                  onChange: V,
                                                  hint: j.intl.string(j.t.G44Xml),
                                                  showRemoveButton: !1,
                                                  enabled: !0,
                                              }),
                                              (0, r.jsx)(s.Button, {
                                                  variant: "primary",
                                                  size: "sm",
                                                  text: j.intl.string(j.t.gmUvO1),
                                                  onClick: () => M(null),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(c.Z, {
                                          size: "sm",
                                          variant: "primary",
                                          onChange: V,
                                          text: j.intl.string(j.t.vKCGYb),
                                      }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function O(e) {
    let { error: t } = e;
    return null == t
        ? null
        : (0, r.jsx)(s.Text, {
              color: "text-feedback-critical",
              variant: "text-xs/normal",
              className: b.warning,
              children: t,
          });
}
