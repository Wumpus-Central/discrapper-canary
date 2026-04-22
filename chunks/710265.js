n.d(t, { A: () => I });
var l = n(627968),
    i = n(64700),
    s = n(989349),
    r = n.n(s),
    a = n(192308),
    d = n(331322),
    o = n(292666),
    c = n(260598),
    u = n(452027),
    x = n(821609),
    h = n(834730),
    m = n(664007),
    g = n(405810),
    v = n(366098),
    j = n(918192),
    A = n(698441),
    E = n(794782),
    p = n(974930),
    N = n(691012),
    C = n(422845),
    f = n(988794),
    y = n(339984),
    b = n(985018),
    S = n(910264);
function I(e) {
    let {
            guildEvent: t,
            guildEventId: s,
            guildId: h,
            error: I,
            validationErrorMessage: R,
            onChange: _,
            canSetFocus: k = !1,
        } = e,
        {
            entityType: D,
            channelId: G,
            description: L,
            name: M,
            image: P,
            scheduledEndTime: U,
            scheduledStartTime: z,
            recurrenceRule: V,
        } = t,
        F = (0, v.D3)(G),
        w = (0, v.Xk)(G),
        B = null != t && (0, A.Fd)(t),
        X = i.useMemo(() => {
            let e = (0, p.N5)(t);
            return null != e ? e : { startDate: r()(z) };
        }, [t, z]),
        [O, H] = i.useState(() => (0, p.z7)(r()(z), V)),
        Y = i.useRef(null);
    i.useEffect(() => {
        k && Y.current?.focus();
    }, [k]);
    let q = (e) => {
            _({ image: e });
        },
        Q = (e, t) => {
            null == e || void 0 === t
                ? q(null)
                : (0, a.openModalLazy)(async () => {
                      let { default: i } = await Promise.all([
                          n.e("79149"),
                          n.e("29259"),
                          n.e("74571"),
                          n.e("63320"),
                      ]).then(n.bind(n, 142630));
                      return (n) =>
                          (0, l.jsx)(i, {
                              imageUri: e,
                              file: t,
                              onCrop: (e) => {
                                  let { imageUri: t } = e;
                                  return q(t);
                              },
                              uploadType: y.HL.SCHEDULED_EVENT_IMAGE,
                              ...n,
                          });
                  });
        },
        W = I?.getFirstFieldErrorMessage("name"),
        Z = I?.getFirstFieldErrorMessage("description"),
        J = null == W && null == Z ? I?.getAnyErrorMessage() : null;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: S.GU,
                children: null != G && !B && (F > 0 || w > 0) && (0, l.jsx)(j.Bw, { channelId: G }),
            }),
            (0, l.jsx)("div", {
                className: S.Zd,
                children: (0, l.jsxs)(d.B, {
                    gap: 16,
                    children: [
                        (0, l.jsx)(o.k, {
                            label: b.intl.string(b.t["0HbEQ6"]),
                            required: !0,
                            error: W ?? J,
                            onChange: (e) => {
                                _({ name: e });
                            },
                            placeholder: b.intl.string(b.t["6/yars"]),
                            maxLength: f.t_,
                            value: M,
                            autoComplete: "off",
                            inputRef: Y,
                        }),
                        (0, l.jsx)(C.A, {
                            className: S.kz,
                            onScheduleChange: (e) => {
                                let { startDate: t, endDate: n } = e,
                                    l = { scheduledStartTime: t?.toISOString(), scheduledEndTime: n?.toISOString() };
                                null != t &&
                                    null != U &&
                                    n?.isBefore(t) &&
                                    (l.scheduledEndTime = t.add(1, "hour").toISOString()),
                                    null != t && null != O && (l.recurrenceRule = (0, p.nG)(O, t)),
                                    _(l);
                            },
                            onRecurrenceChange: (e) => {
                                let t = X.startDate;
                                null == t || (_({ recurrenceRule: (0, p.nG)(e, t) }), H(e));
                            },
                            schedule: X,
                            recurrenceRule: V,
                            showEndDate: D === f.Ps.EXTERNAL,
                            requireEndDate: D === f.Ps.EXTERNAL,
                            disableStartDateTime: B,
                            guildId: h,
                        }),
                        (0, l.jsx)(T, { error: R }),
                        (0, l.jsx)(c.f, {
                            label: b.intl.string(b.t["+gRCC7"]),
                            error: Z,
                            placeholder: b.intl.string(b.t["kWO/E8"]),
                            value: L,
                            onChange: (e) => {
                                _({ description: e });
                            },
                            maxLength: f.IJ,
                            autosize: !0,
                        }),
                        (0, l.jsx)(u.D, {
                            label: b.intl.string(b.t.Ly121e),
                            description: b.intl.string(b.t.B9C9be),
                            children:
                                null != P
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(m.A, {
                                                  className: S.km,
                                                  iconWrapperClassName: S.WR,
                                                  image: P,
                                                  makeURL: (e) =>
                                                      null == e
                                                          ? null
                                                          : null != h
                                                            ? ((0, N.A)((0, E.hQ)(t, h, s)) ?? null)
                                                            : void 0,
                                                  onChange: Q,
                                                  hint: b.intl.string(b.t.G44Xml),
                                                  showRemoveButton: !1,
                                                  enabled: !0,
                                              }),
                                              (0, l.jsx)(x.$, {
                                                  variant: "primary",
                                                  size: "sm",
                                                  text: b.intl.string(b.t.gmUvO1),
                                                  onClick: () => q(null),
                                              }),
                                          ],
                                      })
                                    : (0, l.jsx)(g.A, {
                                          size: "sm",
                                          variant: "primary",
                                          onChange: Q,
                                          text: b.intl.string(b.t.vKCGYb),
                                      }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function T(e) {
    let { error: t } = e;
    return null == t
        ? null
        : (0, l.jsx)(h.E, { color: "text-feedback-critical", variant: "text-xs/normal", className: S.$e, children: t });
}
