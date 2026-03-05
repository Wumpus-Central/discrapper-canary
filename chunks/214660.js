"use strict";
n.d(t, { A: () => I, H: () => E });
var i,
    s = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    a = n(311907),
    o = n(139033),
    c = n(397927),
    d = n(830215),
    u = n(315982),
    h = n(915089),
    A = n(557722),
    m = n(834942),
    p = n(287809),
    g = n(652215),
    _ = n(53516),
    f = n(985018),
    x = n(43310),
    C = n(248789),
    E = (((i = {})[(i.VOICE = 0)] = "VOICE"), i);
let I = (e) => {
    let { type: t, guildId: i, closePopout: l } = e,
        E = (0, h.GV)(),
        {
            notClaimed: I,
            notEmailVerified: N,
            notPhoneVerified: b,
            newAccount: S,
            newMember: T,
        } = (0, a.bG)([m.A], () => m.A.getCheck(i), [i]),
        v = 0 === t ? f.intl.string(f.t["6zY8BI"]) : null,
        y = null,
        j = null;
    return (0 === t &&
        (I
            ? ((y = f.intl.string(f.t.IRxUlG)), (j = f.intl.string(f.t.fiNVin)))
            : b
              ? ((y = f.intl.string(f.t.vW8iUF)), (j = f.intl.string(f.t["50gfOv"])))
              : N
                ? ((y = f.intl.string(f.t.vdSOpz)), (j = f.intl.string(f.t.lm1UKt)))
                : T
                  ? ((y = f.intl.formatToPlainString(f.t.v1ktYb, { min: g.$8o.MEMBER_AGE })),
                    (j = f.intl.string(f.t.BddRzS)))
                  : S &&
                    ((y = f.intl.formatToPlainString(f.t.sncw41, { min: g.$8o.ACCOUNT_AGE })),
                    (j = f.intl.string(f.t.BddRzS)))),
    null == v || null == y)
        ? null
        : (0, s.jsxs)(c.lGe, {
              className: r()(C.popover, x.kL),
              "aria-labelledby": E,
              children: [
                  (0, s.jsx)("img", { alt: "", className: x.Sl, src: n(303528) }),
                  (0, s.jsxs)("div", {
                      className: x.Qs,
                      children: [
                          (0, s.jsx)(c.Heading, { variant: "heading-md/semibold", id: E, children: v }),
                          (0, s.jsx)(c.Text, { color: "text-default", variant: "text-sm/normal", children: y }),
                          (0, s.jsxs)("div", {
                              className: x.UD,
                              children: [
                                  null != j
                                      ? (0, s.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: x.FS,
                                            children: (0, s.jsx)(c.Button, {
                                                variant: "primary",
                                                text: j,
                                                onClick: () => {
                                                    I
                                                        ? u.R()
                                                        : b
                                                          ? (0, c.mMO)(
                                                                async () => {
                                                                    let { default: e } = await Promise.all([
                                                                        n.e("84704"),
                                                                        n.e("45668"),
                                                                    ]).then(n.bind(n, 615715));
                                                                    return (t) =>
                                                                        (0, s.jsx)(e, {
                                                                            reason: A.d.GUILD_PHONE_REQUIRED,
                                                                            ...t,
                                                                        });
                                                                },
                                                                { modalKey: _.V },
                                                            )
                                                          : N &&
                                                            (d.A.verifyResend(),
                                                            (0, o.A)({
                                                                title: f.intl.string(f.t.LykQYk),
                                                                subtitle: f.intl.format(f.t.azKEPy, {
                                                                    email: p.default.getCurrentUser()?.email,
                                                                }),
                                                            })),
                                                        l();
                                                },
                                            }),
                                        })
                                      : null,
                                  I || b || N
                                      ? (0, s.jsx)(c.QWc, {
                                            onClick: l,
                                            text: f.intl.string(f.t.oEAioF),
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
