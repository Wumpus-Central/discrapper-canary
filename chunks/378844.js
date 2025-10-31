n.d(t, {
    R: () => y,
    Z: () => O,
});
var r,
    i = n(951288);
n(647438);
var l = n(442837),
    o = n(755721),
    a = n(481060),
    s = n(893776),
    c = n(391650),
    u = n(313201),
    d = n(144114),
    p = n(607744),
    h = n(594174),
    f = n(981631),
    g = n(815660),
    m = n(388032),
    b = n(36973);
function _(e) {
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
}
var y = (((r = {})[(r.VOICE = 0)] = "VOICE"), r);
let O = (e) => {
    let { type: t, guildId: r, closePopout: y } = e,
        O = (0, u.Dt)(),
        {
            notClaimed: v,
            notEmailVerified: j,
            notPhoneVerified: C,
            newAccount: x,
            newMember: E,
        } = (0, l.e7)([p.Z], () => p.Z.getCheck(r), [r]),
        S = 0 === t ? m.intl.string(m.t["6zY8BI"]) : null,
        I = null,
        P = null;
    return (0 === t &&
        (v
            ? ((I = m.intl.string(m.t.IRxUlG)), (P = m.intl.string(m.t.fiNVin)))
            : C
              ? ((I = m.intl.string(m.t.vW8iUF)), (P = m.intl.string(m.t["50gfOv"])))
              : j
                ? ((I = m.intl.string(m.t.vdSOpz)), (P = m.intl.string(m.t.lm1UKt)))
                : E
                  ? ((I = m.intl.formatToPlainString(m.t.v1ktYb, { min: f.YeM.MEMBER_AGE })),
                    (P = m.intl.string(m.t.BddRzS)))
                  : x &&
                    ((I = m.intl.formatToPlainString(m.t.sncw41, { min: f.YeM.ACCOUNT_AGE })),
                    (P = m.intl.string(m.t.BddRzS)))),
    null == S || null == I)
        ? null
        : (0, i.jsxs)(a.VqE, {
              className: b.container,
              "aria-labelledby": O,
              children: [
                  (0, i.jsx)("img", {
                      alt: "",
                      className: b.image,
                      src: n(64395),
                  }),
                  (0, i.jsxs)("div", {
                      className: b.content,
                      children: [
                          (0, i.jsx)(a.Heading, {
                              variant: "heading-md/semibold",
                              id: O,
                              children: S,
                          }),
                          (0, i.jsx)(a.Text, {
                              color: "header-secondary",
                              variant: "text-sm/normal",
                              children: I,
                          }),
                          (0, i.jsxs)("div", {
                              className: b.buttonContainer,
                              children: [
                                  null != P
                                      ? (0, i.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: b.primaryButton,
                                            children: (0, i.jsx)(a.Button, {
                                                variant: "primary",
                                                text: P,
                                                onClick: () => {
                                                    v
                                                        ? c.j()
                                                        : C
                                                          ? (0, a.ZDy)(
                                                                async () => {
                                                                    let { default: e } = await Promise.resolve().then(
                                                                        n.bind(n, 607018),
                                                                    );
                                                                    return (t) =>
                                                                        (0, i.jsx)(
                                                                            e,
                                                                            _({ reason: d.L.GUILD_PHONE_REQUIRED }, t),
                                                                        );
                                                                },
                                                                { modalKey: g.M },
                                                            )
                                                          : j &&
                                                            (s.Z.verifyResend(),
                                                            (0, a.h7j)((e) => {
                                                                var t, n, r;
                                                                return (0, i.jsx)(
                                                                    a.ConfirmModal,
                                                                    ((n = _(
                                                                        {
                                                                            header: m.intl.string(m.t.LykQYk),
                                                                            confirmText: m.intl.string(m.t.BddRzS),
                                                                            confirmButtonColor: o.zx.Colors.BRAND,
                                                                        },
                                                                        e,
                                                                    )),
                                                                    (r = r =
                                                                        {
                                                                            children: (0, i.jsx)(a.Text, {
                                                                                variant: "text-md/normal",
                                                                                children: m.intl.format(m.t.azKEPy, {
                                                                                    email:
                                                                                        null ==
                                                                                        (t = h.default.getCurrentUser())
                                                                                            ? void 0
                                                                                            : t.email,
                                                                                }),
                                                                            }),
                                                                        }),
                                                                    Object.getOwnPropertyDescriptors
                                                                        ? Object.defineProperties(
                                                                              n,
                                                                              Object.getOwnPropertyDescriptors(r),
                                                                          )
                                                                        : (function (e, t) {
                                                                              var n = Object.keys(e);
                                                                              if (Object.getOwnPropertySymbols) {
                                                                                  var r =
                                                                                      Object.getOwnPropertySymbols(e);
                                                                                  n.push.apply(n, r);
                                                                              }
                                                                              return n;
                                                                          })(Object(r)).forEach(function (e) {
                                                                              Object.defineProperty(
                                                                                  n,
                                                                                  e,
                                                                                  Object.getOwnPropertyDescriptor(r, e),
                                                                              );
                                                                          }),
                                                                    n),
                                                                );
                                                            })),
                                                        y();
                                                },
                                            }),
                                        })
                                      : null,
                                  v || C || j
                                      ? (0, i.jsx)(a.Avr, {
                                            onClick: y,
                                            text: m.intl.string(m.t.oEAioF),
                                            variant: "secondary",
                                        })
                                      : null,
                              ],
                          }),
                      ],
                  }),
              ],
          });
};
