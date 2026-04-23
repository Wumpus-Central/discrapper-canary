l.d(t, { A: () => I });
var n = l(627968),
    i = l(64700),
    s = l(989349),
    a = l.n(s),
    r = l(192308),
    d = l(331322),
    o = l(292666),
    c = l(260598),
    u = l(452027),
    x = l(821609),
    h = l(834730),
    m = l(664007),
    g = l(405810),
    v = l(366098),
    j = l(918192),
    A = l(698441),
    E = l(794782),
    p = l(974930),
    f = l(691012),
    N = l(422845),
    C = l(988794),
    y = l(339984),
    b = l(985018),
    S = l(910264);
function I(e) {
    let {
            guildEvent: t,
            guildEventId: s,
            guildId: h,
            error: I,
            validationErrorMessage: R,
            onChange: D,
            canSetFocus: _ = !1,
        } = e,
        {
            entityType: k,
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
        O = i.useMemo(() => {
            let e = (0, p.N5)(t);
            return null != e ? e : { startDate: a()(z) };
        }, [t, z]),
        [X, H] = i.useState(() => (0, p.z7)(a()(z), V)),
        Y = i.useRef(null);
    i.useEffect(() => {
        _ && Y.current?.focus();
    }, [_]);
    let q = (e) => {
            D({ image: e });
        },
        Q = (e, t) => {
            null == e || void 0 === t
                ? q(null)
                : (0, r.openModalLazy)(async () => {
                      let { default: i } = await Promise.all([
                          l.e("79149"),
                          l.e("29259"),
                          l.e("74571"),
                          l.e("40916"),
                      ]).then(l.bind(l, 142630));
                      return (l) =>
                          (0, n.jsx)(i, {
                              imageUri: e,
                              file: t,
                              onCrop: (e) => {
                                  let { imageUri: t } = e;
                                  return q(t);
                              },
                              uploadType: y.HL.SCHEDULED_EVENT_IMAGE,
                              ...l,
                          });
                  });
        },
        W = I?.getFirstFieldErrorMessage("name"),
        $ = I?.getFirstFieldErrorMessage("description"),
        Z = null == W && null == $ ? I?.getAnyErrorMessage() : null;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)("div", {
                className: S.GU,
                children: null != G && !B && (F > 0 || w > 0) && (0, n.jsx)(j.Bw, { channelId: G }),
            }),
            (0, n.jsx)("div", {
                className: S.Zd,
                children: (0, n.jsxs)(d.B, {
                    gap: 16,
                    children: [
                        (0, n.jsx)(o.k, {
                            label: b.intl.string(b.t["0HbEQ6"]),
                            required: !0,
                            error: W ?? Z,
                            onChange: (e) => {
                                D({ name: e });
                            },
                            placeholder: b.intl.string(b.t["6/yars"]),
                            maxLength: C.t_,
                            value: M,
                            autoComplete: "off",
                            inputRef: Y,
                        }),
                        (0, n.jsx)(N.A, {
                            className: S.kz,
                            onScheduleChange: (e) => {
                                let { startDate: t, endDate: l } = e,
                                    n = { scheduledStartTime: t?.toISOString(), scheduledEndTime: l?.toISOString() };
                                null != t &&
                                    null != U &&
                                    l?.isBefore(t) &&
                                    (n.scheduledEndTime = t.add(1, "hour").toISOString()),
                                    null != t && null != X && (n.recurrenceRule = (0, p.nG)(X, t)),
                                    D(n);
                            },
                            onRecurrenceChange: (e) => {
                                let t = O.startDate;
                                null == t || (D({ recurrenceRule: (0, p.nG)(e, t) }), H(e));
                            },
                            schedule: O,
                            recurrenceRule: V,
                            showEndDate: k === C.Ps.EXTERNAL,
                            requireEndDate: k === C.Ps.EXTERNAL,
                            disableStartDateTime: B,
                            guildId: h,
                        }),
                        (0, n.jsx)(T, { error: R }),
                        (0, n.jsx)(c.f, {
                            label: b.intl.string(b.t["+gRCC7"]),
                            error: $,
                            placeholder: b.intl.string(b.t["kWO/E8"]),
                            value: L,
                            onChange: (e) => {
                                D({ description: e });
                            },
                            maxLength: C.IJ,
                            autosize: !0,
                        }),
                        (0, n.jsx)(u.D, {
                            label: b.intl.string(b.t.Ly121e),
                            description: b.intl.string(b.t.B9C9be),
                            children:
                                null != P
                                    ? (0, n.jsxs)(n.Fragment, {
                                          children: [
                                              (0, n.jsx)(m.A, {
                                                  className: S.km,
                                                  iconWrapperClassName: S.WR,
                                                  image: P,
                                                  makeURL: (e) =>
                                                      null == e
                                                          ? null
                                                          : null != h
                                                            ? ((0, f.A)((0, E.hQ)(t, h, s)) ?? null)
                                                            : void 0,
                                                  onChange: Q,
                                                  hint: b.intl.string(b.t.G44Xml),
                                                  showRemoveButton: !1,
                                                  enabled: !0,
                                              }),
                                              (0, n.jsx)(x.$, {
                                                  variant: "primary",
                                                  size: "sm",
                                                  text: b.intl.string(b.t.gmUvO1),
                                                  onClick: () => q(null),
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)(g.A, {
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
        : (0, n.jsx)(h.E, { color: "text-feedback-critical", variant: "text-xs/normal", className: S.$e, children: t });
}
