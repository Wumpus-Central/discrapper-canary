"use strict";
n.d(t, { A: () => x, H: () => f });
var i,
    s = n(627968);
n(64700);
var l = n(311907),
    r = n(139033),
    a = n(397927),
    o = n(830215),
    c = n(315982),
    d = n(915089),
    u = n(557722),
    h = n(834942),
    A = n(287809),
    p = n(652215),
    g = n(53516),
    m = n(985018),
    _ = n(43310),
    f = (((i = {})[(i.VOICE = 0)] = "VOICE"), i);
let x = (e) => {
    let { type: t, guildId: i, closePopout: f } = e,
        x = (0, d.GV)(),
        {
            notClaimed: C,
            notEmailVerified: E,
            notPhoneVerified: I,
            newAccount: N,
            newMember: b,
        } = (0, l.bG)([h.A], () => h.A.getCheck(i), [i]),
        S = 0 === t ? m.intl.string(m.t["6zY8BI"]) : null,
        T = null,
        y = null;
    return (0 === t &&
        (C
            ? ((T = m.intl.string(m.t.IRxUlG)), (y = m.intl.string(m.t.fiNVin)))
            : I
              ? ((T = m.intl.string(m.t.vW8iUF)), (y = m.intl.string(m.t["50gfOv"])))
              : E
                ? ((T = m.intl.string(m.t.vdSOpz)), (y = m.intl.string(m.t.lm1UKt)))
                : b
                  ? ((T = m.intl.formatToPlainString(m.t.v1ktYb, { min: p.$8o.MEMBER_AGE })),
                    (y = m.intl.string(m.t.BddRzS)))
                  : N &&
                    ((T = m.intl.formatToPlainString(m.t.sncw41, { min: p.$8o.ACCOUNT_AGE })),
                    (y = m.intl.string(m.t.BddRzS)))),
    null == S || null == T)
        ? null
        : (0, s.jsxs)(a.lGe, {
              className: _.kL,
              "aria-labelledby": x,
              children: [
                  (0, s.jsx)("img", { alt: "", className: _.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: _.Qs,
                      children: [
                          (0, s.jsx)(a.Heading, { variant: "heading-md/semibold", id: x, children: S }),
                          (0, s.jsx)(a.Text, { color: "text-default", variant: "text-sm/normal", children: T }),
                          (0, s.jsxs)("div", {
                              className: _.UD,
                              children: [
                                  null != y
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: _.FS,
                                            children: (0, s.jsx)(a.Button, {
                                                variant: "primary",
                                                text: y,
                                                onClick: () => {
                                                    C
                                                        ? c.R()
                                                        : I
                                                          ? (0, a.mMO)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e("84704"),
                                                                        n.e("45668"),
                                                                    ]).then(n.bind(n, 615715));
                                                                    return (t) =>
                                                                        (0, s.jsx)(e, {
                                                                            reason: u.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: g.V },
                                                            )
                                                          : E &&
                                                            (o.A.verifyResend(),
                                                            (0, r.A)({
                                                                title: m.intl.string(m.t.LykQYk),
                                                                subtitle: m.intl.format(m.t.azKEPy, {
                                                                    email: A.default.getCurrentUser()?.email,
                                                                }),
                                                            })),
                                                        f();
                                                },
                                            }),
                                        })
                                      : null,
                                  C || I || E
                                      ? (0, s.jsx)(a.QWc, {
                                            onClick: f,
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
