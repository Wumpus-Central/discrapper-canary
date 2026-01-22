r.d(t, { A: () => S }), r(896048);
var n = r(627968),
    l = r(64700),
    i = r(503698),
    o = r.n(i),
    a = r(91871),
    c = r.n(a),
    s = r(158954),
    u = r(397927),
    p = r(154672),
    y = r(198982),
    f = r(573435),
    O = r(263063),
    b = r(486020),
    d = r(860689),
    g = r(330936),
    j = r(985018),
    m = r(292750),
    h = r(906471);
function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function I(e) {
    var t;
    let { guildInfo: r, onClick: l, submitting: i } = e,
        o =
            null !=
            (t = b.Ay.getGuildIconURL({
                id: r.id,
                icon: r.icon,
                size: 40,
            }))
                ? t
                : void 0;
    return (0, n.jsxs)(u.DUT, {
        className: m.oG,
        onClick: l,
        children: [
            (0, n.jsx)(f.Ay, {
                mask: f.Ay.Masks.AVATAR_DEFAULT,
                width: 40,
                height: 40,
                children: (0, n.jsx)(O.A, {
                    className: m.$f,
                    iconSrc: o,
                    guild: (0, d.yF)(v(E({}, r), { features: [] })),
                    size: O.A.Sizes.MEDIUM,
                }),
            }),
            (0, n.jsx)(u.Text, {
                className: m.J5,
                variant: "text-md/semibold",
                children: r.name,
            }),
            i
                ? (0, n.jsx)(u.y$y, { type: u.y$y.Type.PULSING_ELLIPSIS })
                : (0, n.jsx)("img", {
                      alt: "",
                      src: h,
                  }),
        ],
    });
}
let S = (e) => {
    let { setStep: t, email: r, guildsInfo: i, setGuildId: a } = e,
        f = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                l,
                i = {};
            if ("u" > typeof Reflect && Reflect.ownKeys) {
                for (l = 0, r = Reflect.ownKeys(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                return i;
            }
            if (
                ((i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        l = {},
                        i = Object.getOwnPropertyNames(e);
                    for (n = 0; n < i.length; n++)
                        (r = i[n]),
                            !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
                    return l;
                })(e, t)),
                Object.getOwnPropertySymbols)
            )
                for (l = 0, r = Object.getOwnPropertySymbols(e); l < r.length; l++)
                    (n = r[l]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            return i;
        })(e, ["setStep", "email", "guildsInfo", "setGuildId"]),
        [O, b] = l.useState(null),
        [d, h] = l.useState(void 0),
        [S, w] = l.useState(null),
        P = () => t(g.Di.SUBMIT_SCHOOL),
        A = i;
    return (
        null != d && "" !== d && (A = i.filter((e) => c()(d.toLowerCase(), e.name.toLowerCase()))),
        (0, n.jsx)(
            s.Modal,
            v(E({}, f), {
                title: j.intl.string(j.t.mOMeiR),
                subtitle: j.intl.format(j.t.dZeiTJ, { onJoinWaitlist: P }),
                input: (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(u.IWV, {
                            placeholder: j.intl.string(j.t["5h0QOP"]),
                            onChange: (e) => {
                                h(e);
                            },
                            "aria-label": j.intl.string(j.t["5h0QOP"]),
                            query: null != d ? d : "",
                            onClear: () => {
                                h(void 0);
                            },
                        }),
                        (0, n.jsx)(u.Text, {
                            color: "text-feedback-critical",
                            variant: "text-xs/normal",
                            children: null == O ? void 0 : O.getAnyErrorMessage(),
                        }),
                    ],
                }),
                actions: [],
                children:
                    A.length > 0
                        ? (0, n.jsx)("div", {
                              className: m.vQ,
                              children: A.map((e) => {
                                  let l;
                                  return void 0 === e
                                      ? null
                                      : (0, n.jsx)(
                                            I,
                                            {
                                                guildInfo: e,
                                                onClick:
                                                    ((l = e.id),
                                                    async () => {
                                                        b(null), a(l), w(l);
                                                        try {
                                                            await p.A.sendVerificationEmail(r, !0, l),
                                                                t(g.Di.VERIFY_PIN);
                                                        } catch (e) {
                                                            b(new y.LG(e));
                                                        } finally {
                                                            w(null);
                                                        }
                                                    }),
                                                submitting: S === e.id,
                                            },
                                            e.id,
                                        );
                              }),
                          })
                        : (0, n.jsx)("div", {
                              className: m.pb,
                              children: (0, n.jsxs)("div", {
                                  className: m.rv,
                                  children: [
                                      (0, n.jsx)(u.Heading, {
                                          className: o()(m.He, m.wx),
                                          variant: "heading-xl/semibold",
                                          children: j.intl.string(j.t["1eUrDc"]),
                                      }),
                                      (0, n.jsx)(u.Text, {
                                          className: m.He,
                                          variant: "text-md/normal",
                                          children: j.intl.format(j.t.flgDKM, { onJoinWaitlist: P }),
                                      }),
                                  ],
                              }),
                          }),
            }),
        )
    );
};
