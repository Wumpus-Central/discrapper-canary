n.d(t, {
    B: () => g,
    QuestRewardModalUnverified: () => h,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(893776),
    c = n(594174),
    u = n(862657),
    d = n(388032),
    f = n(186469),
    p = n(800010);
function _(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function m(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e) {
    let { transitionState: t, onClose: n } = e,
        _ = (0, o.e7)([c.default], () => {
            var e;
            return null == (e = c.default.getCurrentUser()) ? void 0 : e.email;
        }),
        [m, h] = i.useState({ status: "unknown" });
    i.useEffect(() => {
        h({ status: "loading" }),
            l.Z.verifyResend().then(
                () => h({ status: "success" }),
                (e) => {
                    h({ status: "error" }), (0, u.ys)(e, { tags: { location: "QuestsRewardModalUnverified" } });
                },
            );
    }, []);
    let g =
        "error" === m.status
            ? d.intl.string(d.t.vjying)
            : "success" === m.status
              ? d.intl.format(d.t.qP5xYc, {
                    emailAddress: _,
                    emailAddressLink: "mailto:".concat(_),
                })
              : void 0;
    return (0, r.jsxs)(a.ExpressiveModal, {
        transitionState: t,
        onClose: n,
        graphic:
            "loading" === m.status
                ? void 0
                : {
                      type: "image",
                      src: p,
                  },
        title: "loading" === m.status ? void 0 : d.intl.string(d.t.c8eASM),
        subtitle: g,
        actions:
            "loading" === m.status
                ? void 0
                : [
                      {
                          variant: "secondary",
                          text: d.intl.string(d.t.cpT0Cq),
                          onClick: n,
                      },
                  ],
        children: [
            "loading" === m.status && (0, r.jsx)(s.$jN, {}),
            "success" === m.status &&
                (0, r.jsxs)("div", {
                    className: f.helper,
                    children: [
                        (0, r.jsx)(s.d3s, {
                            size: "xs",
                            color: "currentColor",
                            className: f.infoFilledIcon,
                        }),
                        (0, r.jsx)(s.Text, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: d.intl.string(d.t.yb7itQ),
                        }),
                    ],
                }),
        ],
    });
}
function g() {
    (0, s.ZDy)(async () => {
        let { QuestRewardModalUnverified: e } = await Promise.resolve().then(n.bind(n, 300917));
        return (t) => (0, r.jsx)(e, m({}, t));
    });
}
