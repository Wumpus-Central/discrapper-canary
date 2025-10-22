n.d(t, { Z: () => h });
var r = n(951288);
n(647438);
var i = n(442837),
    a = n(481060),
    o = n(898531),
    s = n(314897),
    l = n(131951),
    c = n(388032),
    u = n(725227);
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
    let d = (0, a.vRw)(),
        { videoEnabled: _, hasVideoDevice: h } = (0, i.cj)([l.Z], () => ({
            videoEnabled: l.Z.isVideoEnabled(),
            hasVideoDevice: l.Z.isVideoAvailable(),
        })),
        m = (0, i.e7)([s.default], () => s.default.getId() === e),
        g = (0, o.Z)();
    function E() {
        (0, a.ZDy)(
            async () => {
                let { default: e } = await n.e("91018").then(n.bind(n, 601572));
                return (t) => (0, r.jsx)(e, p(f({}, t), { videoEnabled: _ }));
            },
            {
                modalKey: "camera-preview",
                contextKey: null != t ? (0, a.VnL)(t) : d,
            },
        );
    }
    return (!_ || g) && m && h
        ? (0, r.jsx)(a.sNh, {
              id: "change-video-background",
              label: (0, r.jsx)("div", {
                  className: u.item,
                  children: _ ? c.intl.string(c.t.mZKxHb) : c.intl.string(c.t["vkV93/"]),
              }),
              action: E,
              icon: _ ? a.yMH : a.tEF,
          })
        : null;
}
