n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(442837),
    o = n(481060),
    a = n(898531),
    s = n(314897),
    l = n(131951),
    c = n(388032),
    u = n(647218);
function d(e, t, n) {
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
function f(e) {
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
                d(e, t, n[t]);
            });
    }
    return e;
}
function _(e, t) {
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
function p(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : _(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function h(e, t) {
    let d = (0, o.vRw)(),
        { videoEnabled: _, hasVideoDevice: h } = (0, i.cj)([l.Z], () => ({
            videoEnabled: l.Z.isVideoEnabled(),
            hasVideoDevice: l.Z.isVideoAvailable(),
        })),
        m = (0, i.e7)([s.default], () => s.default.getId() === e),
        g = (0, a.Z)();
    function E() {
        (0, o.ZDy)(
            async () => {
                let { default: e } = await Promise.all([
                    n.e("8895"),
                    n.e("84605"),
                    n.e("8016"),
                    n.e("49508"),
                    n.e("17938"),
                    n.e("94136"),
                    n.e("25548"),
                    n.e("2686"),
                    n.e("76540"),
                    n.e("22646"),
                    n.e("25183"),
                    n.e("3940"),
                    n.e("4192"),
                    n.e("27458"),
                    n.e("37082"),
                    n.e("72762"),
                    n.e("88712"),
                    n.e("30419"),
                    n.e("66317"),
                    n.e("89001"),
                    n.e("18824"),
                    n.e("75708"),
                    n.e("62117"),
                    n.e("95193"),
                    n.e("43876"),
                ]).then(n.bind(n, 601572));
                return (t) => (0, r.jsx)(e, p(f({}, t), { videoEnabled: _ }));
            },
            {
                modalKey: "camera-preview",
                contextKey: null != t ? (0, o.VnL)(t) : d,
            },
        );
    }
    return (!_ || g) && m && h
        ? (0, r.jsx)(o.sNh, {
              id: "change-video-background",
              label: (0, r.jsx)("div", {
                  className: u.item,
                  children: _ ? c.intl.string(c.t.mZKxHR) : c.intl.string(c.t.vkV939),
              }),
              action: E,
              icon: _ ? o.yMH : o.tEF,
          })
        : null;
}
