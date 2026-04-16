"use strict";
n.d(t, { A: () => C });
var i = n(627968),
    s = n(64700),
    r = n(311907),
    l = n(397927),
    a = n(890698),
    o = n(198982),
    c = n(201505);
n(829926);
var d = n(153488),
    u = n(954571),
    h = n(203982),
    _ = n(15552),
    p = n(906564),
    g = n(854378),
    m = n(359438),
    A = n(383302),
    f = n(362707),
    E = n(782021),
    x = n(341826),
    I = n(991101),
    N = n(652215);
n(436317);
var v = n(985018),
    T = n(731286),
    j = n(818050);
function C(e) {
    let t,
        { invite: n, authBoxClassName: C, onApiErrors: S, onGotoLogin: y, onRegister: b } = e,
        R = (0, r.bG)([d.A], () => d.A.getAuthenticationConsentRequired()),
        O = n?.guild_scheduled_event != null,
        L = s.useRef(null);
    t =
        n?.guild_scheduled_event != null
            ? (0, i.jsx)(m.X, { channel: n.channel, guildScheduledEvent: n.guild_scheduled_event })
            : (0, i.jsx)("div", { className: j.S3, children: (0, i.jsx)(a.A, { invite: n, inUnclaimedFlow: !0 }) });
    let [w, k] = s.useState(""),
        [D, U] = s.useState(null),
        [P, B] = (0, f.S9)(R),
        [G, M] = s.useState(!1),
        [F, V] = s.useState({}),
        { username: W, global_name: H, date_of_birth: K } = F,
        [z, Q] = (0, f.ic)();
    s.useEffect(() => {
        null == D && L.current?.focus();
    }, [D, L]);
    let [q, Y] = s.useState(null),
        [X, J] = s.useState(null),
        $ = s.useCallback(async () => {
            h._.dispatch(N.jej.WAVE_EMPHASIZE), M(!0), V({});
            try {
                await (0, p.Ay)({ consent: P, invite: n.code, globalName: w, birthday: D }), b?.();
            } catch (t) {
                if ((M(!1), !(t instanceof o.LG))) return;
                let e = (0, _.W)(t);
                V(e), S?.(e), "number" == typeof e.retry_after && Q(e.retry_after);
            }
        }, [n, w, D, P, S, b, Q, V, M]),
        Z = s.useCallback(
            (e) => {
                if ((e?.preventDefault(), null === R)) return;
                let t = !1;
                0 === w.length && (Y(v.intl.string(v.t.EkokLy)), (t = !0)),
                    null == D && (J(v.intl.string(v.t.EkokLy)), (t = !0)),
                    t || $();
            },
            [w, D, R, $, Y, J],
        );
    return n.state === N.elq.RESOLVING
        ? (0, i.jsx)(x.A, { authBoxClassName: C, name: w, onNameChange: k })
        : (0, i.jsxs)("div", {
              children: [
                  (0, i.jsx)(g.Ay, {
                      tag: "section",
                      className: C,
                      children: (0, i.jsxs)("form", {
                          onSubmit: Z,
                          children: [
                              t,
                              O ? (0, i.jsx)("div", { className: T.yF }) : null,
                              (0, i.jsxs)(g.eB, {
                                  className: O ? void 0 : T.y0,
                                  children: [
                                      (0, i.jsx)(l.ksK, {
                                          helperText: v.intl.string(v.t["330TCc"]),
                                          label: v.intl.string(v.t["9AjdkD"]),
                                          error: q ?? (0, f.yX)(H ?? W),
                                          autoFocus: !0,
                                          name: "global_name",
                                          value: w,
                                          placeholder: v.intl.string(v.t["09Q8yp"]),
                                          onChange: k,
                                          onFocus: () => {
                                              u.default.track(N.HAw.REGISTER_INPUT_FOCUS, { field: "global_name" });
                                          },
                                          onBlur: () => {
                                              u.default.track(N.HAw.REGISTER_INPUT_BLUR, { field: "global_name" });
                                          },
                                      }),
                                      (0, i.jsx)(c.A, {
                                          label: v.intl.string(v.t.rhBeKe),
                                          wrapperClassName: T.DC,
                                          name: "date_of_birth",
                                          onChange: (e) => {
                                              U(e), null != e && J(null);
                                          },
                                          error: X ?? (0, f.yX)(K),
                                          value: D,
                                      }),
                                      (0, i.jsx)(E.A, { consent: P, consentRequired: R, onConsentChange: B }),
                                      (0, i.jsx)(I.A, { consentRequired: R, consent: P, registering: G }),
                                      (0, i.jsx)("div", {
                                          className: j.QX,
                                          children: (0, i.jsx)(l.QWc, {
                                              text: v.intl.string(v.t["1lWxux"]),
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
                            className: j.QX,
                            children: (0, i.jsx)(A.N, { guild: n.guild, onlineCount: n.approximate_presence_count }),
                        })
                      : null,
              ],
          });
}
