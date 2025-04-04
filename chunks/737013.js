n.d(t, { Z: () => m });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(898531),
    s = n(221241),
    l = n(314897),
    c = n(131951),
    u = n(388032),
    d = n(647218);
function f(e, t, n) {
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
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
function p(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : p(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function m(e, t) {
    let f = (0, o.vRw)(),
        { videoEnabled: p, hasVideoDevice: m } = (0, i.cj)([c.Z], () => ({
            videoEnabled: c.Z.isVideoEnabled(),
            hasVideoDevice: c.Z.isVideoAvailable()
        })),
        g = (0, i.e7)([l.default], () => l.default.getId() === e),
        E = (0, a.Z)(),
        { simplifiedSettingsEnabled: b } = (0, s.Z)({ location: 'usePreviewVideoItem' });
    function y() {
        (0, o.ZDy)(
            async () => {
                let { default: e } = await Promise.all([n.e('50506'), n.e('68880'), n.e('93828'), n.e('84605'), n.e('25292'), n.e('95477'), n.e('90508'), n.e('11212'), n.e('22878'), n.e('13351'), n.e('86328'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('28467'), n.e('86282'), n.e('18895'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('76540'), n.e('6208'), n.e('80284'), n.e('20875'), n.e('85574'), n.e('68631'), n.e('17938'), n.e('9710'), n.e('93602'), n.e('24967'), n.e('62117'), n.e('49508'), n.e('22646'), n.e('60691'), n.e('64838'), n.e('3940'), n.e('25183'), n.e('27458'), n.e('41851'), n.e('49751'), n.e('69606'), n.e('88712'), n.e('30419'), n.e('18824'), n.e('89730'), n.e('32'), n.e('19948'), n.e('87185'), n.e('38299'), n.e('20369'), n.e('47338')]).then(n.bind(n, 601572));
                return (t) => (0, r.jsx)(e, h(_({}, t), { videoEnabled: p }));
            },
            {
                modalKey: 'camera-preview',
                contextKey: null != t ? (0, o.VnL)(t) : f
            }
        );
    }
    return (!p || E) && g && m
        ? (0, r.jsx)(o.sNh, {
              id: 'change-video-background',
              label: (0, r.jsx)('div', {
                  className: d.item,
                  children: p ? u.NW.string(u.t.mZKxHR) : u.NW.string(u.t.vkV939)
              }),
              action: y,
              icon: b && (p ? o.yMH : o.tEF)
          })
        : null;
}
