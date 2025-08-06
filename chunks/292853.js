n.d(t, { Z: () => E });
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(481060),
    l = n(367907),
    c = n(626135),
    u = n(152376),
    d = n(981631),
    f = n(388032),
    _ = n(636184);
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
function m(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function g(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function E(e) {
    let { channel: t, narrow: n } = e;
    i.useEffect(() => {
        c.default.track(
            d.rMx.CHANNEL_BANNER_VIEWED,
            g(h({}, (0, l.hH)(t.getGuildId()), (0, l.v_)(t)), { banner_type: "channel_opt_in" }),
        );
    }, [t]);
    let o = () => {
        c.default.track(
            d.rMx.CHANNEL_BANNER_CTA_CLICKED,
            g(h({}, (0, l.hH)(t.getGuildId()), (0, l.v_)(t)), {
                banner_type: "channel_opt_in",
                cta_type: "add channel",
            }),
        ),
            (0, u.XQ)(t.guild_id, t.id, !0, { section: d.jXE.CHANNEL });
    };
    return (0, r.jsxs)("div", {
        className: a()(_.chatHeaderBar, { [_.narrow]: n }),
        children: [
            (0, r.jsx)(s.Text, {
                className: _.chatHeaderBarText,
                variant: "text-sm/normal",
                color: "text-default",
                children: f.intl.string(f.t.iOWmmJ),
            }),
            (0, r.jsx)(s.zxk, {
                size: "sm",
                variant: "primary",
                onClick: o,
                text: f.intl.string(f.t.ZtIlQk),
                icon: s.qJs,
            }),
        ],
    });
}
