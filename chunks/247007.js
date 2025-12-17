r.d(t, { Z: () => I }), r(388685);
var n = r(54381),
    i = r(473749),
    l = r(120356),
    o = r.n(l),
    a = r(658722),
    c = r.n(a),
    s = r(793030),
    u = r(481060),
    d = r(231239),
    f = r(881052),
    O = r(686546),
    p = r(565138),
    y = r(768581),
    b = r(411198),
    g = r(888592),
    j = r(388032),
    m = r(407772),
    v = r(216019);
function h(e) {
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
function E(e, t) {
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
function S(e) {
    var t;
    let { guildInfo: r, onClick: i, submitting: l } = e,
        o =
            null !=
            (t = y.ZP.getGuildIconURL({
                id: r.id,
                icon: r.icon,
                size: 40,
            }))
                ? t
                : void 0;
    return (0, n.jsxs)(u.P3F, {
        className: m.clickableGuildInfoRow,
        onClick: i,
        children: [
            (0, n.jsx)(O.ZP, {
                mask: O.ZP.Masks.AVATAR_DEFAULT,
                width: 40,
                height: 40,
                children: (0, n.jsx)(p.Z, {
                    className: m.guildIcon,
                    iconSrc: o,
                    guild: (0, b.yS)(E(h({}, r), { features: [] })),
                    size: p.Z.Sizes.MEDIUM,
                }),
            }),
            (0, n.jsx)(u.Text, {
                className: m.guildName,
                variant: "text-md/semibold",
                children: r.name,
            }),
            l
                ? (0, n.jsx)(u.$jN, { type: u.$jN.Type.PULSING_ELLIPSIS })
                : (0, n.jsx)("img", {
                      alt: "",
                      src: v,
                  }),
        ],
    });
}
let I = (e) => {
    var { setStep: t, email: r, guildsInfo: l, setGuildId: a } = e,
        O = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (r = l[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++)
                    (r = l[n]),
                        !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ["setStep", "email", "guildsInfo", "setGuildId"]);
    let [p, y] = i.useState(null),
        [b, v] = i.useState(void 0),
        [I, P] = i.useState(null),
        _ = () => t(g.tF.SUBMIT_SCHOOL),
        w = l;
    return (
        null != b && "" !== b && (w = l.filter((e) => c()(b.toLowerCase(), e.name.toLowerCase()))),
        (0, n.jsx)(
            s.Modal,
            E(h({}, O), {
                title: j.intl.string(j.t.mOMeiR),
                subtitle: j.intl.format(j.t.dZeiTJ, { onJoinWaitlist: _ }),
                input: (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(u.E1j, {
                            placeholder: j.intl.string(j.t["5h0QOP"]),
                            onChange: (e) => {
                                v(e);
                            },
                            "aria-label": j.intl.string(j.t["5h0QOP"]),
                            query: null != b ? b : "",
                            onClear: () => {
                                v(void 0);
                            },
                        }),
                        (0, n.jsx)(u.Text, {
                            color: "text-feedback-critical",
                            variant: "text-xs/normal",
                            children: null == p ? void 0 : p.getAnyErrorMessage(),
                        }),
                    ],
                }),
                actions: [],
                children:
                    w.length > 0
                        ? (0, n.jsx)("div", {
                              className: m.forcedHeight,
                              children: w.map((e) => {
                                  let i;
                                  return void 0 === e
                                      ? null
                                      : (0, n.jsx)(
                                            S,
                                            {
                                                guildInfo: e,
                                                onClick:
                                                    ((i = e.id),
                                                    async () => {
                                                        y(null), a(i), P(i);
                                                        try {
                                                            await d.Z.sendVerificationEmail(r, !0, i),
                                                                t(g.tF.VERIFY_PIN);
                                                        } catch (e) {
                                                            y(new f.Hx(e));
                                                        } finally {
                                                            P(null);
                                                        }
                                                    }),
                                                submitting: I === e.id,
                                            },
                                            e.id,
                                        );
                              }),
                          })
                        : (0, n.jsx)("div", {
                              className: m.noResultsContainer,
                              children: (0, n.jsxs)("div", {
                                  className: m.noResultsContent,
                                  children: [
                                      (0, n.jsx)(u.Heading, {
                                          className: o()(m.centerText, m.header),
                                          variant: "heading-xl/semibold",
                                          children: j.intl.string(j.t["1eUrDc"]),
                                      }),
                                      (0, n.jsx)(u.Text, {
                                          className: m.centerText,
                                          variant: "text-md/normal",
                                          children: j.intl.format(j.t.flgDKM, { onJoinWaitlist: _ }),
                                      }),
                                  ],
                              }),
                          }),
            }),
        )
    );
};
