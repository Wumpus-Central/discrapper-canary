n.d(t, { A: () => E });
var l = n(627968),
    i = n(64700),
    s = n(989349),
    a = n.n(s),
    r = n(397927),
    d = n(664007),
    c = n(405810),
    o = n(366098),
    u = n(918192),
    x = n(698441),
    h = n(794782),
    m = n(974930),
    g = n(691012),
    v = n(422845),
    j = n(988794),
    A = n(339984),
    N = n(985018),
    f = n(71528);
function E(e) {
    let {
            guildEvent: t,
            guildEventId: s,
            guildId: E,
            error: C,
            validationErrorMessage: T,
            onChange: y,
            canSetFocus: b = !1,
        } = e,
        {
            entityType: I,
            channelId: S,
            description: G,
            name: k,
            image: _,
            scheduledEndTime: R,
            scheduledStartTime: D,
            recurrenceRule: M,
        } = t,
        P = (0, o.D3)(S),
        z = (0, o.Xk)(S),
        L = null != t && (0, x.Fd)(t),
        U = i.useMemo(() => {
            let e = (0, m.N5)(t);
            return null != e ? e : { startDate: a()(D) };
        }, [t, D]),
        [V, F] = i.useState(() => (0, m.z7)(a()(D), M)),
        B = i.useRef(null);
    i.useEffect(() => {
        b && B.current?.focus();
    }, [b]);
    let w = (e) => {
            y({ image: e });
        },
        O = (e, t) => {
            null == e || void 0 === t
                ? w(null)
                : (0, r.mMO)(async () => {
                      let { default: i } = await Promise.all([
                          n.e("79149"),
                          n.e("35929"),
                          n.e("74571"),
                          n.e("62788"),
                      ]).then(n.bind(n, 142630));
                      return (n) =>
                          (0, l.jsx)(i, {
                              imageUri: e,
                              file: t,
                              onCrop: (e) => {
                                  let { imageUri: t } = e;
                                  return w(t);
                              },
                              uploadType: A.HL.SCHEDULED_EVENT_IMAGE,
                              ...n,
                          });
                  });
        },
        H = C?.getFirstFieldErrorMessage("name"),
        X = C?.getFirstFieldErrorMessage("description"),
        Y = null == H && null == X ? C?.getAnyErrorMessage() : null;
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)("div", {
                className: f.GU,
                children: null != S && !L && (P > 0 || z > 0) && (0, l.jsx)(u.Bw, { channelId: S }),
            }),
            (0, l.jsx)("div", {
                className: f.Zd,
                children: (0, l.jsxs)(r.BJc, {
                    gap: 16,
                    children: [
                        (0, l.jsx)(r.ksK, {
                            label: N.intl.string(N.t["0HbEQ6"]),
                            required: !0,
                            error: H ?? Y,
                            onChange: (e) => {
                                y({ name: e });
                            },
                            placeholder: N.intl.string(N.t["6/yars"]),
                            maxLength: j.t_,
                            value: k,
                            autoComplete: "off",
                            inputRef: B,
                        }),
                        (0, l.jsx)(v.A, {
                            className: f.kz,
                            onScheduleChange: (e) => {
                                let { startDate: t, endDate: n } = e,
                                    l = { scheduledStartTime: t?.toISOString(), scheduledEndTime: n?.toISOString() };
                                null != t &&
                                    null != R &&
                                    n?.isBefore(t) &&
                                    (l.scheduledEndTime = t.add(1, "hour").toISOString()),
                                    null != t && null != V && (l.recurrenceRule = (0, m.nG)(V, t)),
                                    y(l);
                            },
                            onRecurrenceChange: (e) => {
                                let t = U.startDate;
                                null == t || (y({ recurrenceRule: (0, m.nG)(e, t) }), F(e));
                            },
                            schedule: U,
                            recurrenceRule: M,
                            showEndDate: I === j.Ps.EXTERNAL,
                            requireEndDate: I === j.Ps.EXTERNAL,
                            disableStartDateTime: L,
                            guildId: E,
                        }),
                        (0, l.jsx)(p, { error: T }),
                        (0, l.jsx)(r.fs1, {
                            label: N.intl.string(N.t["+gRCC7"]),
                            error: X,
                            placeholder: N.intl.string(N.t["kWO/E8"]),
                            value: G,
                            onChange: (e) => {
                                y({ description: e });
                            },
                            maxLength: j.IJ,
                            autosize: !0,
                        }),
                        (0, l.jsx)(r.D0$, {
                            label: N.intl.string(N.t.Ly121e),
                            description: N.intl.string(N.t.B9C9be),
                            children:
                                null != _
                                    ? (0, l.jsxs)(l.Fragment, {
                                          children: [
                                              (0, l.jsx)(d.A, {
                                                  className: f.km,
                                                  iconWrapperClassName: f.WR,
                                                  image: _,
                                                  makeURL: (e) =>
                                                      null == e
                                                          ? null
                                                          : null != E
                                                            ? ((0, g.A)((0, h.hQ)(t, E, s)) ?? null)
                                                            : void 0,
                                                  onChange: O,
                                                  hint: N.intl.string(N.t.G44Xml),
                                                  showRemoveButton: !1,
                                                  enabled: !0,
                                              }),
                                              (0, l.jsx)(r.Button, {
                                                  variant: "primary",
                                                  size: "sm",
                                                  text: N.intl.string(N.t.gmUvO1),
                                                  onClick: () => w(null),
                                              }),
                                          ],
                                      })
                                    : (0, l.jsx)(c.A, {
                                          size: "sm",
                                          variant: "primary",
                                          onChange: O,
                                          text: N.intl.string(N.t.vKCGYb),
                                      }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function p(e) {
    let { error: t } = e;
    return null == t
        ? null
        : (0, l.jsx)(r.Text, {
              color: "text-feedback-critical",
              variant: "text-xs/normal",
              className: f.$e,
              children: t,
          });
}
