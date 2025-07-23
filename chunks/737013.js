n.d(t, { Z: () => h });
var r = n(255367);
n(73800);
var i = n(442837),
    a = n(481060),
    o = n(898531),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            }));
    }
    return e;
}
function _(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
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
            hasVideoDevice: l.Z.isVideoAvailable()
        })),
        m = (0, i.e7)([s.default], () => s.default.getId() === e),
        g = (0, o.Z)();
    function E() {
        (0, a.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('14006'), n.e('8381'), n.e('49645'), n.e('8895'), n.e('70791'), n.e('25292'), n.e('80417'), n.e('22878'), n.e('31978'), n.e('74891'), n.e('85372'), n.e('6380'), n.e('28467'), n.e('8739'), n.e('16766'), n.e('86282'), n.e('73057'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('44421'), n.e('30424'), n.e('76540'), n.e('23045'), n.e('95336'), n.e('11509'), n.e('94136'), n.e('49508'), n.e('22646'), n.e('64838'), n.e('25183'), n.e('3940'), n.e('40694'), n.e('27458'), n.e('88625'), n.e('17218'), n.e('83075'), n.e('88712'), n.e('30419'), n.e('66317'), n.e('18824'), n.e('9268'), n.e('67032'), n.e('88448'), n.e('22454'), n.e('54570'), n.e('47338')]).then(n.bind(n, 601572));
                return (t) => (0, r.jsx)(e, p(f({}, t), { videoEnabled: _ }));
            },
            {
                modalKey: 'camera-preview',
                contextKey: null != t ? (0, a.VnL)(t) : d
            }
        );
    }
    return (!_ || g) && m && h
        ? (0, r.jsx)(a.sNh, {
              id: 'change-video-background',
              label: (0, r.jsx)('div', {
                  className: u.item,
                  children: _ ? c.intl.string(c.t.mZKxHR) : c.intl.string(c.t.vkV939)
              }),
              action: E,
              icon: _ ? a.yMH : a.tEF
          })
        : null;
}
