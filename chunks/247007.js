n.d(t, { Z: () => E }), n(388685), n(953529);
var r = n(951288),
    l = n(647438),
    i = n(120356),
    a = n.n(i),
    s = n(658722),
    o = n.n(s),
    c = n(481060),
    d = n(231239),
    u = n(881052),
    m = n(686546),
    h = n(565138),
    f = n(768581),
    g = n(411198),
    p = n(888592),
    x = n(388032),
    _ = n(642480),
    v = n(216019);
function N(e) {
    var t, n, l;
    let { guildInfo: i, onClick: a, submitting: s } = e,
        o =
            null !=
            (t = f.ZP.getGuildIconURL({
                id: i.id,
                icon: i.icon,
                size: 40,
            }))
                ? t
                : void 0;
    return (0, r.jsxs)(c.P3F, {
        className: _.clickableGuildInfoRow,
        onClick: a,
        children: [
            (0, r.jsx)(m.ZP, {
                mask: m.ZP.Masks.AVATAR_DEFAULT,
                width: 40,
                height: 40,
                children: (0, r.jsx)(h.Z, {
                    className: _.guildIcon,
                    iconSrc: o,
                    guild: (0, g.yS)(
                        ((n = (function (e) {
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
                        })({}, i)),
                        (l = l = { features: [] }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        n),
                    ),
                    size: h.Z.Sizes.MEDIUM,
                }),
            }),
            (0, r.jsx)(c.Text, {
                className: _.guildName,
                variant: "text-md/semibold",
                children: i.name,
            }),
            s
                ? (0, r.jsx)(c.$jN, { type: c.$jN.Type.PULSING_ELLIPSIS })
                : (0, r.jsx)("img", {
                      className: _.__invalid_arrow,
                      alt: "",
                      src: v,
                  }),
        ],
    });
}
let E = (e) => {
    let { setStep: t, email: n, guildsInfo: i, setGuildId: s, forceGuildScrollHeight: m } = e,
        [h, f] = l.useState(null),
        [g, v] = l.useState(void 0),
        [E, S] = l.useState(null),
        y = () => t(p.tF.SUBMIT_SCHOOL),
        j = i;
    return (
        null != g && "" !== g && (j = i.filter((e) => o()(g.toLowerCase(), e.name.toLowerCase()))),
        (0, r.jsxs)("div", {
            className: _.container,
            children: [
                (0, r.jsx)(c.X6q, {
                    className: a()(_.centerText, _.header),
                    variant: "heading-xl/semibold",
                    children: x.intl.string(x.t.mOMeiY),
                }),
                (0, r.jsx)("div", {
                    className: _.description,
                    children: (0, r.jsx)(c.Text, {
                        className: _.centerText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: x.intl.format(x.t.dZeiTE, { onJoinWaitlist: y }),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: a()(_.guildList, { [_.forcedHeight]: m }),
                    children: [
                        (0, r.jsxs)("div", {
                            className: _.searchContainer,
                            children: [
                                (0, r.jsx)(c.E1j, {
                                    placeholder: x.intl.string(x.t["5h0QOD"]),
                                    onChange: (e) => {
                                        v(e);
                                    },
                                    "aria-label": x.intl.string(x.t["5h0QOD"]),
                                    query: null != g ? g : "",
                                    onClear: () => {
                                        v(void 0);
                                    },
                                }),
                                (0, r.jsx)(c.Text, {
                                    color: "text-danger",
                                    variant: "text-xs/normal",
                                    children: null == h ? void 0 : h.getAnyErrorMessage(),
                                }),
                            ],
                        }),
                        j.length > 0
                            ? (0, r.jsx)(c.zJl, {
                                  className: _.scroller,
                                  children: j.map((e) => {
                                      let l;
                                      return void 0 === e
                                          ? null
                                          : (0, r.jsx)(
                                                N,
                                                {
                                                    guildInfo: e,
                                                    onClick:
                                                        ((l = e.id),
                                                        async () => {
                                                            f(null), s(l), S(l);
                                                            try {
                                                                await d.Z.sendVerificationEmail(n, !0, l),
                                                                    t(p.tF.VERIFY_PIN);
                                                            } catch (e) {
                                                                f(new u.Hx(e));
                                                            } finally {
                                                                S(null);
                                                            }
                                                        }),
                                                    submitting: E === e.id,
                                                },
                                                e.id,
                                            );
                                  }),
                              })
                            : (0, r.jsx)("div", {
                                  className: _.noResultsContainer,
                                  children: (0, r.jsxs)("div", {
                                      className: _.noResultsContent,
                                      children: [
                                          (0, r.jsx)("div", { className: _.noResultsImage }),
                                          (0, r.jsx)(c.X6q, {
                                              className: a()(_.centerText, _.header),
                                              variant: "heading-xl/semibold",
                                              children: x.intl.string(x.t["1eUrDQ"]),
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              className: _.centerText,
                                              variant: "text-md/normal",
                                              children: x.intl.format(x.t.flgDKC, { onJoinWaitlist: y }),
                                          }),
                                      ],
                                  }),
                              }),
                    ],
                }),
            ],
        })
    );
};
