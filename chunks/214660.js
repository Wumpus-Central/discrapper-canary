n.d(t, {
    A: () => y,
    H: () => A,
});
var r,
    l = n(627968);
n(64700);
var i = n(311907),
    a = n(139033),
    s = n(397927),
    o = n(830215),
    c = n(315982),
    u = n(915089),
    d = n(557722),
    f = n(834942),
    p = n(287809),
    h = n(652215),
    b = n(53516),
    g = n(985018),
    m = n(43310),
    A = (((r = {})[(r.VOICE = 0)] = "VOICE"), r);
let y = (e) => {
    let { type: t, guildId: r, closePopout: A } = e,
        y = (0, u.GV)(),
        {
            notClaimed: O,
            notEmailVerified: j,
            notPhoneVerified: v,
            newAccount: x,
            newMember: E,
        } = (0, i.bG)([f.A], () => f.A.getCheck(r), [r]),
        _ = 0 === t ? g.intl.string(g.t["6zY8BI"]) : null,
        C = null,
        S = null;
    return (0 === t &&
        (O
            ? ((C = g.intl.string(g.t.IRxUlG)), (S = g.intl.string(g.t.fiNVin)))
            : v
              ? ((C = g.intl.string(g.t.vW8iUF)), (S = g.intl.string(g.t["50gfOv"])))
              : j
                ? ((C = g.intl.string(g.t.vdSOpz)), (S = g.intl.string(g.t.lm1UKt)))
                : E
                  ? ((C = g.intl.formatToPlainString(g.t.v1ktYb, { min: h.$8o.MEMBER_AGE })),
                    (S = g.intl.string(g.t.BddRzS)))
                  : x &&
                    ((C = g.intl.formatToPlainString(g.t.sncw41, { min: h.$8o.ACCOUNT_AGE })),
                    (S = g.intl.string(g.t.BddRzS)))),
    null == _ || null == C)
        ? null
        : (0, l.jsxs)(s.lGe, {
              className: m.kL,
              "aria-labelledby": y,
              children: [
                  (0, l.jsx)("img", {
                      alt: "",
                      className: m.Sl,
                      src: n(303528),
                  }),
                  (0, l.jsxs)("div", {
                      className: m.Qs,
                      children: [
                          (0, l.jsx)(s.Heading, {
                              variant: "heading-md/semibold",
                              id: y,
                              children: _,
                          }),
                          (0, l.jsx)(s.Text, {
                              color: "text-default",
                              variant: "text-sm/normal",
                              children: C,
                          }),
                          (0, l.jsxs)("div", {
                              className: m.UD,
                              children: [
                                  null != S
                                      ? (0, l.jsx)("div", {
                                            "data-button-hoisted-classname-wrapper": !0,
                                            className: m.FS,
                                            children: (0, l.jsx)(s.Button, {
                                                variant: "primary",
                                                text: S,
                                                onClick: () => {
                                                    if (O) c.R();
                                                    else if (v)
                                                        (0, s.mMO)(
                                                            async () => {
                                                                let { default: e } = await Promise.resolve().then(
                                                                    n.bind(n, 615715),
                                                                );
                                                                return (t) =>
                                                                    (0, l.jsx)(
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
                                                                        })({ reason: d.d.GUILD_PHONE_REQUIRED }, t),
                                                                    );
                                                            },
                                                            { modalKey: b.V },
                                                        );
                                                    else if (j) {
                                                        var e;
                                                        o.A.verifyResend(),
                                                            (0, a.A)({
                                                                title: g.intl.string(g.t.LykQYk),
                                                                subtitle: g.intl.format(g.t.azKEPy, {
                                                                    email:
                                                                        null == (e = p.default.getCurrentUser())
                                                                            ? void 0
                                                                            : e.email,
                                                                }),
                                                            });
                                                    }
                                                    A();
                                                },
                                            }),
                                        })
                                      : null,
                                  O || v || j
                                      ? (0, l.jsx)(s.QWc, {
                                            onClick: A,
                                            text: g.intl.string(g.t.oEAioF),
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
