t.d(e, { A: () => u });
var a = t(627968),
    n = t(64700),
    r = t(990078),
    l = t(862482),
    i = t(187322),
    s = t(203982),
    o = t(652215),
    d = t(985018),
    c = t(354876);
let u = function (A) {
    let {
            message: e,
            errorMessage: t,
            submitting: u,
            onReset: g,
            onSave: h,
            onSaveText: p,
            onResetText: f,
            onSaveButtonColor: m,
            disabled: q,
            saveButtonTooltip: v,
        } = A,
        C = n.useRef(null),
        [x, U] = n.useState(!1);
    return (
        n.useEffect(() => {
            function A() {
                U(!0), setTimeout(() => U(!1), 1e3);
            }
            return (
                s._.subscribe(o.jej.EMPHASIZE_NOTICE, A),
                () => {
                    s._.unsubscribe(o.jej.EMPHASIZE_NOTICE, A);
                }
            );
        }, []),
        (0, a.jsx)("div", {
            className: c.kL,
            "data-emphasized": x,
            children: (0, a.jsx)("div", {
                className: c.nP,
                ref: C,
                children: (0, a.jsxs)(i.xp, {
                    containerRef: C,
                    children: [
                        (0, a.jsx)("div", {
                            className: c.Xk,
                            children: (0, a.jsx)("div", {
                                className: c.iU,
                                children: t ?? e ?? d.intl.string(d.t.GP7JLE),
                            }),
                        }),
                        (0, a.jsxs)("div", {
                            className: c.o1,
                            children: [
                                null != g &&
                                    (0, a.jsx)(l.$n, {
                                        className: c.WA,
                                        size: l.$n.Sizes.SMALL,
                                        color: l.$n.Colors.PRIMARY,
                                        look: l.$n.Looks.LINK,
                                        onClick: g,
                                        children: (0, a.jsx)("span", { children: f ?? d.intl.string(d.t.yBZMsQ) }),
                                    }),
                                null != h
                                    ? (0, a.jsx)(r.m, {
                                          text: v,
                                          children: (0, a.jsx)(l.$n, {
                                              size: l.$n.Sizes.SMALL,
                                              color: m ?? l.$n.Colors.GREEN,
                                              submitting: u,
                                              disabled: q,
                                              onClick: h,
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
