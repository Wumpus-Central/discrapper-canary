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
    j = n(486324),
    f = n(388032),
    b = n(230334);
function y(e) {
    let {
            guildEvent: t,
            guildEventId: i,
            guildId: y,
            error: E,
            validationErrorMessage: N,
            onChange: P,
            canSetFocus: C = !1,
        } = e,
        {
            entityType: S,
            channelId: I,
            description: T,
            name: Z,
            image: w,
            scheduledEndTime: D,
            scheduledStartTime: k,
            recurrenceRule: R,
        } = t,
        A = (0, u._d)(I),
        _ = (0, u.K3)(I),
        G = null != t && (0, g.xt)(t),
        U = l.useMemo(() => {
            let e = (0, x.v1)(t);
            return null != e ? e : { startDate: a()(k) };
        }, [t, k]),
        [L, z] = l.useState(() => (0, x.zi)(a()(k), R)),
        F = l.useRef(null);
    l.useEffect(() => {
        if (C) {
            var e;
            null == (e = F.current) || e.focus();
        }
    }, [C]);
    let M = (e) => {
            P({ image: e });
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
                                uploadType: j.pC.SCHEDULED_EVENT_IMAGE,
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
                children: null != I && !G && (A > 0 || _ > 0) && (0, r.jsx)(d.mv, { channelId: I }),
            }),
            (0, r.jsx)("div", {
                className: b.form,
                children: (0, r.jsxs)(s.Kqy, {
                    gap: 16,
                    children: [
                        (0, r.jsx)(s.oil, {
                            label: f.intl.string(f.t["0HbEQ6"]),
                            required: !0,
                            error: null != B ? B : W,
                            onChange: (e) => {
                                P({ name: e });
                            },
                            placeholder: f.intl.string(f.t["6/yars"]),
                            maxLength: p.p,
                            value: Z,
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
                                    null != D &&
                                    (null == n ? void 0 : n.isBefore(t)) &&
                                    (r.scheduledEndTime = t.add(1, "hour").toISOString()),
                                    null != t && null != L && (r.recurrenceRule = (0, x.mF)(L, t)),
                                    P(r);
                            },
                            onRecurrenceChange: (e) => {
                                let t = U.startDate;
                                null != t && (P({ recurrenceRule: (0, x.mF)(e, t) }), z(e));
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
                            label: f.intl.string(f.t["+gRCC7"]),
                            error: X,
                            placeholder: f.intl.string(f.t["kWO/E8"]),
                            value: T,
                            onChange: (e) => {
                                P({ description: e });
                            },
                            maxLength: p.wm,
                            autosize: !0,
                        }),
                        (0, r.jsx)(s.gNt, {
                            label: f.intl.string(f.t.Ly121e),
                            description: f.intl.string(f.t.B9C9be),
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
                                                  hint: f.intl.string(f.t.G44Xml),
                                                  showRemoveButton: !1,
                                                  enabled: !0,
                                              }),
                                              (0, r.jsx)(s.Button, {
                                                  variant: "primary",
                                                  size: "sm",
                                                  text: f.intl.string(f.t.gmUvO1),
                                                  onClick: () => M(null),
                                              }),
                                          ],
                                      })
                                    : (0, r.jsx)(c.Z, {
                                          size: "sm",
                                          variant: "primary",
                                          onChange: V,
                                          text: f.intl.string(f.t.vKCGYb),
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
              color: "text-danger",
              variant: "text-xs/normal",
              className: b.warning,
              children: t,
          });
}
