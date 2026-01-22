n.d(t, { A: () => j });
var r = n(627968),
    i = n(64700),
    l = n(417597),
    s = n(397927),
    a = n(219504),
    c = n(374084),
    o = n(199940),
    d = n(132514),
    u = n(987957),
    f = n(985018),
    g = n(659233);
function b(e) {
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
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let p = [];
function x() {
    return (0, r.jsx)("div", {
        className: g.L8,
        children: (0, r.jsxs)("div", {
            className: g.kv,
            children: [
                (0, r.jsx)("div", {
                    className: g.zV,
                    children: (0, r.jsx)(s.B8Q, {
                        size: "custom",
                        color: "currentColor",
                        height: 20,
                        width: 22,
                    }),
                }),
                (0, r.jsx)("div", {
                    className: g.tV,
                    children: (0, r.jsx)(s.Text, {
                        variant: "text-md/semibold",
                        color: "text-strong",
                        children: f.intl.string(f.t["K/i3iQ"]),
                    }),
                }),
            ],
        }),
    });
}
function h(e) {
    let { guildId: t, onAddAction: l } = e,
        a = i.useCallback(() => {
            if (null != t)
                return (0, s.mMO)(async () => {
                    let { default: e } = await Promise.all([n.e("54569"), n.e("76945")]).then(n.bind(n, 251632));
                    return (n) =>
                        (0, r.jsx)(
                            e,
                            m(b({}, n), {
                                guildId: t,
                                onSave: l,
                            }),
                        );
                });
        }, [t, l]);
    return (0, r.jsxs)(s.DUT, {
        className: g.Bw,
        onClick: a,
        children: [
            (0, r.jsx)(s.U1e, {
                size: "xs",
                color: "currentColor",
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "none",
                children: f.intl.string(f.t.qce3EM),
            }),
        ],
    });
}
let j = function (e) {
    let { guildId: t } = e,
        n = (0, l.yK)([d.A], () => {
            var e;
            return null != (e = d.A.getSettings().newMemberActions) ? e : p;
        }),
        s = i.useCallback((e, t) => {
            (0, o.G$)(e, t);
        }, []),
        f = i.useCallback(
            (e, r, i, l) => {
                var s;
                let a = null == (s = n[e]) ? void 0 : s.channelId,
                    c = r.channelId;
                null == a ||
                    null == d.A.getSettings() ||
                    (null == d.A.getPendingDataForChannel(c) && l && (0, o.Wh)(t, a, i), (0, o.A4)(a, r));
            },
            [n, t],
        ),
        j = i.useCallback(
            (e) => {
                var t;
                let r = null == (t = n[e]) ? void 0 : t.channelId;
                null != r && (0, o.sd)(r);
            },
            [n],
        ),
        O = n.map((e) => m(b({}, e), { id: e.channelId })),
        y = i.useCallback((e) => {
            (0, o.DE)(e);
        }, []),
        { handleDragStart: v, handleDragReset: A, handleDragComplete: E } = (0, a.A)(O, y);
    return (0, r.jsxs)("div", {
        className: g.uW,
        children: [
            n.map((e, n) =>
                (0, r.jsx)(
                    u.A,
                    {
                        guildId: t,
                        action: e,
                        actionIndex: n,
                        onChange: f,
                        onDelete: j,
                        onDragStart: v,
                        onDragReset: A,
                        onDragComplete: E,
                    },
                    e.channelId,
                ),
            ),
            (0, r.jsx)(x, {}),
            n.length < c._7 &&
                (0, r.jsx)(h, {
                    guildId: t,
                    onAddAction: s,
                }),
        ],
    });
};
