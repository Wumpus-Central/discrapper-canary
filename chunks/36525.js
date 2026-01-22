n.d(t, { A: () => f }), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(990078),
    s = n(421380),
    o = n(397927),
    l = n(203982),
    c = n(652215),
    u = n(985018),
    d = n(614221);
let f = function (e) {
    var t;
    let {
            message: n,
            errorMessage: f,
            submitting: p,
            onReset: _,
            onSave: h,
            onSaveText: m,
            onResetText: g,
            onSaveButtonColor: E,
            disabled: b,
            saveButtonTooltip: y,
        } = e,
        O = i.useRef(null),
        [A, v] = i.useState(!1);
    return (
        i.useEffect(() => {
            function e() {
                v(!0), setTimeout(() => v(!1), 1000);
            }
            return (
                l._.subscribe(c.jej.EMPHASIZE_NOTICE, e),
                () => {
                    l._.unsubscribe(c.jej.EMPHASIZE_NOTICE, e);
                }
            );
        }, []),
        (0, r.jsx)("div", {
            className: d.kL,
            "data-emphasized": A,
            children: (0, r.jsx)("div", {
                className: d.nP,
                ref: O,
                children: (0, r.jsxs)(o.xpW, {
                    containerRef: O,
                    children: [
                        (0, r.jsx)("div", {
                            className: d.Xk,
                            children: (0, r.jsx)("div", {
                                className: d.iU,
                                children: null != (t = null != f ? f : n) ? t : u.intl.string(u.t.GP7JLE),
                            }),
                        }),
                        (0, r.jsxs)("div", {
                            className: d.o1,
                            children: [
                                null != _ &&
                                    (0, r.jsx)(s.$n, {
                                        className: d.WA,
                                        size: s.$n.Sizes.SMALL,
                                        color: s.$n.Colors.PRIMARY,
                                        look: s.$n.Looks.LINK,
                                        onClick: _,
                                        children: (0, r.jsx)("span", {
                                            children: null != g ? g : u.intl.string(u.t.yBZMsQ),
                                        }),
                                    }),
                                null != h
                                    ? (0, r.jsx)(a.m, {
                                          text: y,
                                          children: (0, r.jsx)(s.$n, {
                                              size: s.$n.Sizes.SMALL,
                                              color: null != E ? E : s.$n.Colors.GREEN,
                                              submitting: p,
                                              disabled: b,
                                              onClick: h,
                                              children: null != m ? m : u.intl.string(u.t.K344S7),
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
