n.d(t, {
    E: () => g,
    QuestRewardModalUnverified: () => m,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    l = n(830215),
    c = n(287809),
    u = n(710969),
    d = n(985018),
    f = n(603702),
    p = n(222872);
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function m(e) {
    let { transitionState: t, onClose: n } = e,
        _ = (0, s.bG)([c.default], () => {
            var e;
            return null == (e = c.default.getCurrentUser()) ? void 0 : e.email;
        }),
        [h, m] = i.useState({ status: "unknown" });
    i.useEffect(() => {
        m({ status: "loading" }),
            l.A.verifyResend().then(
                () => m({ status: "success" }),
                (e) => {
                    m({ status: "error" }), (0, u.RF)(e, { tags: { location: "QuestsRewardModalUnverified" } });
                },
            );
    }, []);
    let g =
        "error" === h.status
            ? d.intl.string(d.t.vjying)
            : "success" === h.status
              ? d.intl.format(d.t.qP5xYc, {
                    emailAddress: _,
                    emailAddressLink: "mailto:".concat(_),
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
                      src: p,
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
            "loading" === h.status && (0, r.jsx)(o.y$y, {}),
            "success" === h.status &&
                (0, r.jsxs)("div", {
                    className: f.d,
                    children: [
                        (0, r.jsx)(o.mir, {
                            size: "xs",
                            color: "currentColor",
                            className: f.q,
                        }),
                        (0, r.jsx)(o.Text, {
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
    (0, o.mMO)(async () => {
        let { QuestRewardModalUnverified: e } = await Promise.resolve().then(n.bind(n, 175248));
        return (t) => (0, r.jsx)(e, h({}, t));
    });
}
