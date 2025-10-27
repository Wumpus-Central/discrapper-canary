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
    f = n(565138),
    g = n(768581),
    p = n(411198),
    h = n(888592),
    _ = n(388032),
    v = n(642480),
    x = n(216019);
function N(e) {
    var t, n, l;
    let { guildInfo: i, onClick: a, submitting: s } = e,
        o =
            null !=
            (t = g.ZP.getGuildIconURL({
                id: i.id,
                icon: i.icon,
                size: 40,
            }))
                ? t
                : void 0;
    return (0, r.jsxs)(c.P3F, {
        className: v.clickableGuildInfoRow,
        onClick: a,
        children: [
            (0, r.jsx)(m.ZP, {
                mask: m.ZP.Masks.AVATAR_DEFAULT,
                width: 40,
                height: 40,
                children: (0, r.jsx)(f.Z, {
                    className: v.guildIcon,
                    iconSrc: o,
                    guild: (0, p.yS)(
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
                    size: f.Z.Sizes.MEDIUM,
                }),
            }),
            (0, r.jsx)(c.Text, {
                className: v.guildName,
                variant: "text-md/semibold",
                children: i.name,
            }),
            s
                ? (0, r.jsx)(c.$jN, { type: c.$jN.Type.PULSING_ELLIPSIS })
                : (0, r.jsx)("img", {
                      className: v.__invalid_arrow,
                      alt: "",
                      src: x,
                  }),
        ],
    });
}
let E = (e) => {
    let { setStep: t, email: n, guildsInfo: i, setGuildId: s, forceGuildScrollHeight: m } = e,
        [f, g] = l.useState(null),
        [p, x] = l.useState(void 0),
        [E, y] = l.useState(null),
        S = () => t(h.tF.SUBMIT_SCHOOL),
        j = i;
    return (
        null != p && "" !== p && (j = i.filter((e) => o()(p.toLowerCase(), e.name.toLowerCase()))),
        (0, r.jsxs)("div", {
            className: v.container,
            children: [
                (0, r.jsx)(c.Heading, {
                    className: a()(v.centerText, v.header),
                    variant: "heading-xl/semibold",
                    children: _.intl.string(_.t.mOMeiR),
                }),
                (0, r.jsx)("div", {
                    className: v.description,
                    children: (0, r.jsx)(c.Text, {
                        className: v.centerText,
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: _.intl.format(_.t.dZeiTJ, { onJoinWaitlist: S }),
                    }),
                }),
                (0, r.jsxs)("div", {
                    className: a()(v.guildList, { [v.forcedHeight]: m }),
                    children: [
                        (0, r.jsxs)("div", {
                            className: v.searchContainer,
                            children: [
                                (0, r.jsx)(c.E1j, {
                                    placeholder: _.intl.string(_.t["5h0QOP"]),
                                    onChange: (e) => {
                                        x(e);
                                    },
                                    "aria-label": _.intl.string(_.t["5h0QOP"]),
                                    query: null != p ? p : "",
                                    onClear: () => {
                                        x(void 0);
                                    },
                                }),
                                (0, r.jsx)(c.Text, {
                                    color: "text-danger",
                                    variant: "text-xs/normal",
                                    children: null == f ? void 0 : f.getAnyErrorMessage(),
                                }),
                            ],
                        }),
                        j.length > 0
                            ? (0, r.jsx)(c.zJl, {
                                  className: v.scroller,
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
                                                            g(null), s(l), y(l);
                                                            try {
                                                                await d.Z.sendVerificationEmail(n, !0, l),
                                                                    t(h.tF.VERIFY_PIN);
                                                            } catch (e) {
                                                                g(new u.Hx(e));
                                                            } finally {
                                                                y(null);
                                                            }
                                                        }),
                                                    submitting: E === e.id,
                                                },
                                                e.id,
                                            );
                                  }),
                              })
                            : (0, r.jsx)("div", {
                                  className: v.noResultsContainer,
                                  children: (0, r.jsxs)("div", {
                                      className: v.noResultsContent,
                                      children: [
                                          (0, r.jsx)("div", { className: v.noResultsImage }),
                                          (0, r.jsx)(c.Heading, {
                                              className: a()(v.centerText, v.header),
                                              variant: "heading-xl/semibold",
                                              children: _.intl.string(_.t["1eUrDc"]),
                                          }),
                                          (0, r.jsx)(c.Text, {
                                              className: v.centerText,
                                              variant: "text-md/normal",
                                              children: _.intl.format(_.t.flgDKM, { onJoinWaitlist: S }),
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
