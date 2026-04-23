"use strict";
n.d(t, { A: () => y });
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
    g = n(906564),
    p = n(854378),
    A = n(359438),
    f = n(383302),
    E = n(362707),
    x = n(782021),
    I = n(341826),
    v = n(991101),
    N = n(652215);
n(436317);
var j = n(985018),
    C = n(731286),
    T = n(818050);
function y(e) {
    let t,
        { invite: n, authBoxClassName: y, onApiErrors: b, onGotoLogin: S, onRegister: R } = e,
        O = (0, r.bG)([u.A], () => u.A.getAuthenticationConsentRequired()),
        L = n?.guild_scheduled_event != null,
        w = s.useRef(null);
    t =
        n?.guild_scheduled_event != null
            ? (0, i.jsx)(A.X, { channel: n.channel, guildScheduledEvent: n.guild_scheduled_event })
            : (0, i.jsx)("div", { className: T.S3, children: (0, i.jsx)(o.A, { invite: n, inUnclaimedFlow: !0 }) });
    let [k, G] = s.useState(""),
        [D, P] = s.useState(null),
        [U, B] = (0, E.S9)(O),
        [M, V] = s.useState(!1),
        [F, W] = s.useState({}),
        { username: H, global_name: z, date_of_birth: K } = F,
        [Q, Y] = (0, E.ic)();
    s.useEffect(() => {
        null == D && w.current?.focus();
    }, [D, w]);
    let [q, X] = s.useState(null),
        [$, Z] = s.useState(null),
        J = s.useCallback(async () => {
            h._.dispatch(N.jej.WAVE_EMPHASIZE), V(!0), W({});
            try {
                await (0, g.Ay)({ consent: U, invite: n.code, globalName: k, birthday: D }), R?.();
            } catch (t) {
                if ((V(!1), !(t instanceof c.LG))) return;
                let e = (0, m.W)(t);
                W(e), b?.(e), "number" == typeof e.retry_after && Y(e.retry_after);
            }
        }, [n, k, D, U, b, R, Y, W, V]),
        ee = s.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === O)) return;
                let t = !1;
                0 === k.length && (X(j.intl.string(j.t.EkokLy)), (t = !0)),
                    null == D && (Z(j.intl.string(j.t.EkokLy)), (t = !0)),
                    t || J();
            },
            [k, D, O, J, X, Z],
        );
    return n.state === N.elq.RESOLVING
        ? (0, i.jsx)(I.A, { authBoxClassName: y, name: k, onNameChange: G })
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(p.Ay, {
                      tag: "section",
                      className: y,
                      children: (0, i.jsxs)("form", {
                          onSubmit: ee,
                          children: [
                              t,
                              L ? (0, i.jsx)("div", { className: C.yF }) : null,
                              (0, i.jsxs)(p.eB, {
                                  className: L ? void 0 : C.y0,
                                  children: [
                                      (0, i.jsx)(l.k, {
                                          helperText: j.intl.string(j.t["330TCc"]),
                                          label: j.intl.string(j.t["9AjdkD"]),
                                          error: q ?? (0, E.yX)(z ?? H),
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
                                              P(e), null != e && Z(null);
                                          },
                                          error: $ ?? (0, E.yX)(K),
                                          value: D,
                                      }),
                                      (0, i.jsx)(x.A, { consent: U, consentRequired: O, onConsentChange: B }),
                                      (0, i.jsx)(v.A, { consentRequired: O, consent: U, registering: M }),
                                      (0, i.jsx)("div", {
                                          className: T.QX,
                                          children: (0, i.jsx)(a.Q, {
                                              text: j.intl.string(j.t["1lWxux"]),
                                              textVariant: "text-sm/normal",
                                              onClick: S,
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      }),
                  }),
                  null != n && L
                      ? (0, i.jsx)(p.Ay, {
                            className: T.QX,
                            children: (0, i.jsx)(f.N, { guild: n.guild, onlineCount: n.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
