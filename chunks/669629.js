"use strict";
n.d(t, { A: () => b });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    l = n(292666),
    a = n(123292),
    o = n(890698),
    c = n(198982),
    d = n(201505);
n(829926);
var u = n(153488),
    _ = n(954571),
    h = n(203982),
    m = n(15552),
    p = n(906564),
    g = n(854378),
    A = n(359438),
    f = n(383302),
    x = n(362707),
    E = n(782021),
    I = n(341826),
    v = n(991101),
    N = n(652215);
n(436317);
var j = n(985018),
    C = n(731286),
    T = n(818050);
function b(e) {
    let t,
        { invite: n, authBoxClassName: b, onApiErrors: S, onGotoLogin: y, onRegister: R } = e,
        w = (0, r.bG)([u.A], () => u.A.getAuthenticationConsentRequired()),
        O = n?.guild_scheduled_event != null,
        L = s.useRef(null);
    t =
        n?.guild_scheduled_event != null
            ? (0, i.jsx)(A.X, { channel: n.channel, guildScheduledEvent: n.guild_scheduled_event })
            : (0, i.jsx)("div", { className: T.S3, children: (0, i.jsx)(o.A, { invite: n, inUnclaimedFlow: !0 }) });
    let [k, G] = s.useState(""),
        [U, D] = s.useState(null),
        [P, B] = (0, x.S9)(w),
        [M, V] = s.useState(!1),
        [F, W] = s.useState({}),
        { username: H, global_name: z, date_of_birth: K } = F,
        [Q, q] = (0, x.ic)();
    s.useEffect(() => {
        null == U && L.current?.focus();
    }, [U, L]);
    let [Y, X] = s.useState(null),
        [$, Z] = s.useState(null),
        J = s.useCallback(async () => {
            h._.dispatch(N.jej.WAVE_EMPHASIZE), V(!0), W({});
            try {
                await (0, p.Ay)({ consent: P, invite: n.code, globalName: k, birthday: U }), R?.();
            } catch (t) {
                if ((V(!1), !(t instanceof c.LG))) return;
                let e = (0, m.W)(t);
                W(e), S?.(e), "number" == typeof e.retry_after && q(e.retry_after);
            }
        }, [n, k, U, P, S, R, q, W, V]),
        ee = s.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === w)) return;
                let t = !1;
                0 === k.length && (X(j.intl.string(j.t.EkokLy)), (t = !0)),
                    null == U && (Z(j.intl.string(j.t.EkokLy)), (t = !0)),
                    t || J();
            },
            [k, U, w, J, X, Z],
        );
    return n.state === N.elq.RESOLVING
        ? (0, i.jsx)(I.A, { authBoxClassName: b, name: k, onNameChange: G })
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(g.Ay, {
                      tag: "section",
                      className: b,
                      children: (0, i.jsxs)("form", {
                          onSubmit: ee,
                          children: [
                              t,
                              O ? (0, i.jsx)("div", { className: C.yF }) : null,
                              (0, i.jsxs)(g.eB, {
                                  className: O ? void 0 : C.y0,
                                  children: [
                                      (0, i.jsx)(l.k, {
                                          helperText: j.intl.string(j.t["330TCc"]),
                                          label: j.intl.string(j.t["9AjdkD"]),
                                          error: Y ?? (0, x.yX)(z ?? H),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: k,
                                          placeholder: j.intl.string(j.t["09Q8yp"]),
                                          onChange: G,
                                          onFocus: () => {
                                              _.default.track(N.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              _.default.track(N.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, i.jsx)(d.A, {
                                          label: j.intl.string(j.t.rhBeKe),
                                          wrapperClassName: C.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              D(e), null != e && Z(null);
                                          },
                                          error: $ ?? (0, x.yX)(K),
                                          value: U,
                                      }),
                                      (0, i.jsx)(E.A, { consent: P, consentRequired: w, onConsentChange: B }),
                                      (0, i.jsx)(v.A, { consentRequired: w, consent: P, registering: M }),
                                      (0, i.jsx)("div", {
                                          className: T.QX,
                                          children: (0, i.jsx)(a.Q, {
                                              text: j.intl.string(j.t["1lWxux"]),
                                              textVariant: "text-sm/normal",
                                              onClick: y,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  null != n && O
                      ? (0, i.jsx)(g.Ay, {
                            className: T.QX,
                            children: (0, i.jsx)(f.N, { guild: n.guild, onlineCount: n.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
