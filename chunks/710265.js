n.d(t, { A: () => y }), n(228524), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(989349),
    s = n.n(i),
    a = n(397927),
    o = n(664007),
    c = n(405810),
    u = n(366098),
    d = n(918192),
    g = n(698441),
    x = n(794782),
    m = n(974930),
    h = n(691012),
    j = n(422845),
    v = n(988794),
    p = n(339984),
    f = n(985018),
    b = n(362561);
function y(e) {
    let {
            guildEvent: t,
            guildEventId: i,
            guildId: y,
            error: A,
            validationErrorMessage: N,
            onChange: E,
            canSetFocus: C = !1,
        } = e,
        {
            entityType: P,
            channelId: S,
            description: T,
            name: w,
            image: I,
            scheduledEndTime: D,
            scheduledStartTime: k,
            recurrenceRule: G,
        } = t,
        R = (0, u.D3)(S),
        _ = (0, u.Xk)(S),
        L = null != t && (0, g.Fd)(t),
        M = r.useMemo(() => {
            let e = (0, m.N5)(t);
            return null != e ? e : { startDate: s()(k) };
        }, [t, k]),
        [U, z] = r.useState(() => (0, m.z7)(s()(k), G)),
        V = r.useRef(null);
    r.useEffect(() => {
        if (C) {
            var e;
            null == (e = V.current) || e.focus();
        }
    }, [C]);
    let F = (e) => {
            E({ image: e });
        },
        B = (e, t) => {
            null == e || void 0 === t
                ? F(null)
                : (0, a.mMO)(async () => {
                      let { default: r } = await Promise.all([
                          n.e("35929"),
                          n.e("79149"),
                          n.e("74571"),
                          n.e("39533"),
                      ]).then(n.bind(n, 142630));
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
                                          return F(t);
                                      },
                                      uploadType: p.HL.SCHEDULED_EVENT_IMAGE,
                                  },
                                  n,
                              ),
                          );
                  });
        },
        H = null == A ? void 0 : A.getFirstFieldErrorMessage("name"),
        X = null == A ? void 0 : A.getFirstFieldErrorMessage("description"),
        Y = null == H && null == X ? (null == A ? void 0 : A.getAnyErrorMessage()) : null;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: b.GU,
                children: null != S && !L && (R > 0 || _ > 0) && (0, l.jsx)(d.Bw, { channelId: S }),
            }),
            (0, l.jsx)("div", {
                className: b.Zd,
                children: (0, l.jsxs)(a.BJc, {
                    gap: 16,
                    children: [
                        (0, l.jsx)(a.ksK, {
                            label: f.intl.string(f.t["0HbEQ6"]),
                            required: !0,
                            error: null != H ? H : Y,
                            onChange: (e) => {
                                E({ name: e });
                            },
                            placeholder: f.intl.string(f.t["6/yars"]),
                            maxLength: v.t_,
                            value: w,
                            autoComplete: "off",
                            inputRef: V,
                        }),
                        (0, l.jsx)(j.A, {
                            className: b.kz,
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
                                    null != t && null != U && (l.recurrenceRule = (0, m.nG)(U, t)),
                                    E(l);
                            },
                            onRecurrenceChange: (e) => {
                                let t = M.startDate;
                                null == t || (E({ recurrenceRule: (0, m.nG)(e, t) }), z(e));
                            },
                            schedule: M,
                            recurrenceRule: G,
                            showEndDate: P === v.Ps.EXTERNAL,
                            requireEndDate: P === v.Ps.EXTERNAL,
                            disableStartDateTime: L,
                            guildId: y,
                        }),
                        (0, l.jsx)(O, { error: N }),
                        (0, l.jsx)(a.fs1, {
                            label: f.intl.string(f.t["+gRCC7"]),
                            error: X,
                            placeholder: f.intl.string(f.t["kWO/E8"]),
                            value: T,
                            onChange: (e) => {
                                E({ description: e });
                            },
                            maxLength: v.IJ,
                            autosize: !0,
                        }),
                        (0, l.jsx)(a.D0$, {
                            label: f.intl.string(f.t.Ly121e),
                            description: f.intl.string(f.t.B9C9be),
                            children:
                                null != I
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(o.A, {
                                                  className: b.km,
                                                  iconWrapperClassName: b.WR,
                                                  image: I,
                                                  makeURL: (e) => {
                                                      if (null == e) return null;
                                                      if (null != y) {
                                                          var n;
                                                          return null != (n = (0, h.A)((0, x.hQ)(t, y, i))) ? n : null;
                                                      }
                                                  },
                                                  onChange: B,
                                                  hint: f.intl.string(f.t.G44Xml),
                                                  showRemoveButton: !1,
                                                  enabled: !0,
                                              }),
                                              (0, l.jsx)(a.Button, {
                                                  variant: "primary",
                                                  size: "sm",
                                                  text: f.intl.string(f.t.gmUvO1),
                                                  onClick: () => F(null),
                                              }),
                                          ],
                                      })
                                    : (0, l.jsx)(c.A, {
                                          size: "sm",
                                          variant: "primary",
                                          onChange: B,
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
        : (0, l.jsx)(a.Text, {
              color: "text-feedback-critical",
              variant: "text-xs/normal",
              className: b.$e,
              children: t,
          });
}
