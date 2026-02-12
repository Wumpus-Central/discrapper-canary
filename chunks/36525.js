t.d(e, { A: () => c });
var n = t(627968),
    a = t(64700),
    r = t(990078),
    i = t(421380),
    l = t(397927),
    s = t(203982),
    o = t(652215),
    d = t(985018),
    u = t(614221);
let c = function (A) {
    let {
            message: e,
            errorMessage: t,
            submitting: c,
            onReset: g,
            onSave: q,
            onSaveText: p,
            onResetText: f,
            onSaveButtonColor: m,
            disabled: h,
            saveButtonTooltip: C,
        } = A,
        v = a.useRef(null),
        [U, V] = a.useState(!1);
    return (
        a.useEffect(() => {
            function A() {
                V(!0), setTimeout(() => V(!1), 1e3);
            }
            return (
                s._.subscribe(o.jej.EMPHASIZE_NOTICE, A),
                () => {
                    s._.unsubscribe(o.jej.EMPHASIZE_NOTICE, A);
                }
            );
        }, []),
        (0, n.jsx)("div", {
            className: u.kL,
            "data-emphasized": U,
            children: (0, n.jsx)("div", {
                className: u.nP,
                ref: v,
                children: (0, n.jsxs)(l.xpW, {
                    containerRef: v,
                    children: [
                        (0, n.jsx)("div", {
                            className: u.Xk,
                            children: (0, n.jsx)("div", {
                                className: u.iU,
                                children: t ?? e ?? d.intl.string(d.t.GP7JLE),
                            }),
                        }),
                        (0, n.jsxs)("div", {
                            className: u.o1,
                            children: [
                                null != g &&
                                    (0, n.jsx)(i.$n, {
                                        className: u.WA,
                                        size: i.$n.Sizes.SMALL,
                                        color: i.$n.Colors.PRIMARY,
                                        look: i.$n.Looks.LINK,
                                        onClick: g,
                                        children: (0, n.jsx)("span", { children: f ?? d.intl.string(d.t.yBZMsQ) }),
                                    }),
                                null != q
                                    ? (0, n.jsx)(r.m, {
                                          text: C,
                                          children: (0, n.jsx)(i.$n, {
                                              size: i.$n.Sizes.SMALL,
                                              color: m ?? i.$n.Colors.GREEN,
                                              submitting: c,
                                              disabled: h,
                                              onClick: q,
                                              children: p ?? d.intl.string(d.t.K344S7),
                                          }),
                                      })
                                    : null,
                            ],
                        }),
                    ],
                }),
            }),
        })
    );
};
