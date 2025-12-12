n.d(t, {
    R: () => y,
    Z: () => O,
});
var r,
    i = n(54381);
n(473749);
var l = n(442837),
    a = n(885387),
    o = n(481060),
    s = n(893776),
    c = n(391650),
    u = n(313201),
    d = n(144114),
    f = n(607744),
    h = n(594174),
    p = n(981631),
    g = n(815660),
    b = n(388032),
    m = n(684012),
    y = (((r = {})[(r.VOICE = 0)] = "VOICE"), r);
let O = (e) => {
    let { type: t, guildId: r, closePopout: y } = e,
        O = (0, u.Dt)(),
        {
            notClaimed: v,
            notEmailVerified: j,
            notPhoneVerified: C,
            newAccount: x,
            newMember: E,
        } = (0, l.e7)([f.Z], () => f.Z.getCheck(r), [r]),
        S = 0 === t ? b.intl.string(b.t["6zY8BI"]) : null,
        I = null,
        _ = null;
    return (0 === t &&
        (v
            ? ((I = b.intl.string(b.t.IRxUlG)), (_ = b.intl.string(b.t.fiNVin)))
            : C
              ? ((I = b.intl.string(b.t.vW8iUF)), (_ = b.intl.string(b.t["50gfOv"])))
              : j
                ? ((I = b.intl.string(b.t.vdSOpz)), (_ = b.intl.string(b.t.lm1UKt)))
                : E
                  ? ((I = b.intl.formatToPlainString(b.t.v1ktYb, { min: p.YeM.MEMBER_AGE })),
                    (_ = b.intl.string(b.t.BddRzS)))
                  : x &&
                    ((I = b.intl.formatToPlainString(b.t.sncw41, { min: p.YeM.ACCOUNT_AGE })),
                    (_ = b.intl.string(b.t.BddRzS)))),
    null == S || null == I)
        ? null
        : (0, i.jsxs)(o.VqE, {
              className: m.container,
              "aria-labelledby": O,
              children: [
                  (0, i.jsx)("img", {
                      alt: "",
                      className: m.image,
                      src: n(64395),
                  }),
                  (0, i.jsxs)("div", {
                      className: m.content,
                      children: [
                          (0, i.jsx)(o.Heading, {
                              variant: "heading-md/semibold",
                              id: O,
                              children: S,
                          }),
                          (0, i.jsx)(o.Text, {
                              color: "text-default",
                              variant: "text-sm/normal",
                              children: I,
                          }),
                          (0, i.jsxs)("div", {
                              className: m.buttonContainer,
                              children: [
                                  null != _
                                      ? (0, i.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: m.primaryButton,
                                            children: (0, i.jsx)(o.Button, {
                                                variant: "primary",
                                                text: _,
                                                onClick: () => {
                                                    if (v) c.j();
                                                    else if (C)
                                                        (0, o.ZDy)(
                                                            async () => {
                                                                let { default: e } = await Promise.resolve().then(
                                                                    n.bind(n, 607018),
                                                                );
                                                                return (t) =>
                                                                    (0, i.jsx)(
                                                                        e,
                                                                        (function (e) {
                                                                            for (var t = 1; t < arguments.length; t++) {
                                                                                var n =
                                                                                        null != arguments[t]
                                                                                            ? arguments[t]
                                                                                            : {},
                                                                                    r = Object.keys(n);
                                                                                "function" ==
                                                                                    typeof Object.getOwnPropertySymbols &&
                                                                                    (r = r.concat(
                                                                                        Object.getOwnPropertySymbols(
                                                                                            n,
                                                                                        ).filter(function (e) {
                                                                                            return Object.getOwnPropertyDescriptor(
                                                                                                n,
                                                                                                e,
                                                                                            ).enumerable;
                                                                                        }),
                                                                                    )),
                                                                                    r.forEach(function (t) {
                                                                                        var r;
                                                                                        (r = n[t]),
                                                                                            t in e
                                                                                                ? Object.defineProperty(
                                                                                                      e,
                                                                                                      t,
                                                                                                      {
                                                                                                          value: r,
                                                                                                          enumerable:
                                                                                                              !0,
                                                                                                          configurable:
                                                                                                              !0,
                                                                                                          writable: !0,
                                                                                                      },
                                                                                                  )
                                                                                                : (e[t] = r);
                                                                                    });
                                                                            }
                                                                            return e;
                                                                        })({ reason: d.L.GUILD_PHONE_REQUIRED }, t),
                                                                    );
                                                            },
                                                            { modalKey: g.M },
                                                        );
                                                    else if (j) {
                                                        var e;
                                                        s.Z.verifyResend(),
                                                            (0, a.Z)({
                                                                title: b.intl.string(b.t.LykQYk),
                                                                subtitle: b.intl.format(b.t.azKEPy, {
                                                                    email:
                                                                        null == (e = h.default.getCurrentUser())
                                                                            ? void 0
                                                                            : e.email,
                                                                }),
                                                            });
                                                    }
                                                    y();
                                                },
                                            }),
                                        })
                                      : null,
                                  v || C || j
                                      ? (0, i.jsx)(o.Avr, {
                                            onClick: y,
                                            text: b.intl.string(b.t.oEAioF),
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
