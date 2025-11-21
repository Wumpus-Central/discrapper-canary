n.d(t, {
    B: () => g,
    QuestRewardModalUnverified: () => m,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    l = n(893776),
    c = n(594174),
    u = n(509212),
    d = n(388032),
    f = n(654071),
    _ = n(800010);
function p(e, t, n) {
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
function h(e) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m(e) {
    let { transitionState: t, onClose: n } = e,
        p = (0, o.e7)([c.default], () => {
            var e;
            return null == (e = c.default.getCurrentUser()) ? void 0 : e.email;
        }),
        [h, m] = i.useState({ status: "unknown" });
    i.useEffect(() => {
        m({ status: "loading" }),
            l.Z.verifyResend().then(
                () => m({ status: "success" }),
                (e) => {
                    m({ status: "error" }), (0, u.ys)(e, { tags: { location: "QuestsRewardModalUnverified" } });
                },
            );
    }, []);
    let g =
        "error" === h.status
            ? d.intl.string(d.t.vjying)
            : "success" === h.status
              ? d.intl.format(d.t.qP5xYc, {
                    emailAddress: p,
                    emailAddressLink: "mailto:".concat(p),
                })
              : void 0;
    return (0, r.jsxs)(a.ExpressiveModal, {
        transitionState: t,
        onClose: n,
        graphic:
            "loading" === h.status
                ? void 0
                : {
                      type: "image",
                      src: _,
                  },
        title: "loading" === h.status ? void 0 : d.intl.string(d.t.c8eASM),
        subtitle: g,
        actions:
            "loading" === h.status
                ? void 0
                : [
                      {
                          variant: "secondary",
                          text: d.intl.string(d.t.cpT0Cq),
                          onClick: n,
                      },
                  ],
        children: [
            "loading" === h.status && (0, r.jsx)(s.$jN, {}),
            "success" === h.status &&
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
                            color: "header-secondary",
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
        return (t) => (0, r.jsx)(e, h({}, t));
    });
}
