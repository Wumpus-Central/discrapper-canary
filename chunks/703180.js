n.d(t, {
    MemberListContentSettingsMenu: () => p,
    Z: () => h,
});
var r = n(54381),
    i = n(473749),
    l = n(442837),
    a = n(481060),
    s = n(485267),
    o = n(71585),
    c = n(981631),
    d = n(388032);
function u(e) {
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
let p = (e) => {
        let { closePopout: t } = e,
            i = (0, l.e7)([o.Z], () => o.Z.hidden);
        return (0, r.jsx)(a.v2r, {
            onSelect: () => {},
            navId: "member-list-settings-menu",
            onClose: null != t ? t : c.dG4,
            "aria-label": d.intl.string(d.t.w2jvOf),
            children: (0, r.jsxs)(a.kSQ, {
                children: [
                    (0, r.jsx)(a.sNh, {
                        id: "about",
                        label: d.intl.string(d.t.pWLGnF),
                        icon: a.d3s,
                        action: () => {
                            (0, a.ZDy)(async () => {
                                let { default: e } = await n.e("71517").then(n.bind(n, 549505));
                                return (t) => (0, r.jsx)(e, u({}, t));
                            }),
                                null == t || t();
                        },
                    }),
                    (0, r.jsx)(a.S89, {
                        id: "hide",
                        label: d.intl.string(d.t.AhNYuY),
                        checked: i,
                        action: () => {
                            (0, s.lY)(), null == t || t();
                        },
                    }),
                ],
            }),
        });
    },
    h = () => {
        let e = i.useRef(null);
        return (0, r.jsx)(a.yRy, {
            targetElementRef: e,
            animation: a.yRy.Animation.NONE,
            position: "bottom",
            align: "right",
            renderPopout: (e) => {
                let { closePopout: t } = e;
                return (0, r.jsx)(p, { closePopout: t });
            },
            children: (t) => {
                var n, i;
                return (0, r.jsx)(
                    a.P3F,
                    ((n = u({}, t)),
                    (i = i =
                        {
                            innerRef: e,
                            onClick: (e) => {
                                e.stopPropagation(), t.onClick(e);
                            },
                            style: {
                                width: "12px",
                                height: "12px",
                                display: "flex",
                            },
                            children: (0, r.jsx)(a.ewm, { size: "xxs" }),
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var r = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, r);
                              }
                              return n;
                          })(Object(i)).forEach(function (e) {
                              Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                          }),
                    n),
                );
            },
        });
    };
