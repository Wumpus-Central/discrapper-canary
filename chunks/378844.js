n.d(t, {
    R: () => _,
    Z: () => y,
});
var r,
    i = n(54381);
n(473749);
var l = n(442837),
    o = n(885387),
    a = n(481060),
    s = n(893776),
    c = n(391650),
    u = n(313201),
    d = n(144114),
    f = n(607744),
    h = n(594174),
    p = n(981631),
    g = n(815660),
    m = n(388032),
    b = n(36973),
    _ = (((r = {})[(r.VOICE = 0)] = "VOICE"), r);
let y = (e) => {
    let { type: t, guildId: r, closePopout: _ } = e,
        y = (0, u.Dt)(),
        {
            notClaimed: O,
            notEmailVerified: v,
            notPhoneVerified: j,
            newAccount: x,
            newMember: C,
        } = (0, l.e7)([f.Z], () => f.Z.getCheck(r), [r]),
        E = 0 === t ? m.intl.string(m.t["6zY8BI"]) : null,
        S = null,
        I = null;
    return (0 === t &&
        (O
            ? ((S = m.intl.string(m.t.IRxUlG)), (I = m.intl.string(m.t.fiNVin)))
            : j
              ? ((S = m.intl.string(m.t.vW8iUF)), (I = m.intl.string(m.t["50gfOv"])))
              : v
                ? ((S = m.intl.string(m.t.vdSOpz)), (I = m.intl.string(m.t.lm1UKt)))
                : C
                  ? ((S = m.intl.formatToPlainString(m.t.v1ktYb, { min: p.YeM.MEMBER_AGE })),
                    (I = m.intl.string(m.t.BddRzS)))
                  : x &&
                    ((S = m.intl.formatToPlainString(m.t.sncw41, { min: p.YeM.ACCOUNT_AGE })),
                    (I = m.intl.string(m.t.BddRzS)))),
    null == E || null == S)
        ? null
        : (0, i.jsxs)(a.VqE, {
              className: b.container,
              "aria-labelledby": y,
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
                              id: y,
                              children: E,
                          }),
                          (0, i.jsx)(a.Text, {
                              color: "text-default",
                              variant: "text-sm/normal",
                              children: S,
                          }),
                          (0, i.jsxs)("div", {
                              className: b.buttonContainer,
                              children: [
                                  null != I
                                      ? (0, i.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: b.primaryButton,
                                            children: (0, i.jsx)(a.Button, {
                                                variant: "primary",
                                                text: I,
                                                onClick: () => {
                                                    if (O) c.j();
                                                    else if (j)
                                                        (0, a.ZDy)(
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
                                                    else if (v) {
                                                        var e;
                                                        s.Z.verifyResend(),
                                                            (0, o.Z)({
                                                                title: m.intl.string(m.t.LykQYk),
                                                                subtitle: m.intl.format(m.t.azKEPy, {
                                                                    email:
                                                                        null == (e = h.default.getCurrentUser())
                                                                            ? void 0
                                                                            : e.email,
                                                                }),
                                                            });
                                                    }
                                                    _();
                                                },
                                            }),
                                        })
                                      : null,
                                  O || j || v
                                      ? (0, i.jsx)(a.Avr, {
                                            onClick: _,
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
