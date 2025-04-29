n.d(t, { Z: () => d });
var r = n(200651);
n(192379);
var i = n(325767);
function o(e, t, n) {
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
function a(e) {
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
                o(e, t, n[t]);
            });
    }
    return e;
}
function s(e, t) {
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
function l(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : s(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function c(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = u(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function u(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
function d(e) {
    var { width: t = 10, height: n = 13, color: o = 'currentColor', foreground: s } = e,
        u = c(e, ['width', 'height', 'color', 'foreground']);
    return (0, r.jsx)(
        'svg',
        l(a({}, (0, i.Z)(a({}, u))), {
            width: t,
            height: n,
            viewBox: '0 0 '.concat(t, ' ').concat(n),
            className: s,
            fill: o,
            xmlns: 'http://www.w3.org/2000/svg',
            children: (0, r.jsx)('path', {
                d: 'M9.61937 11.2516C8.68397 13.0881 6.3896 13.4808 6.29087 13.4971C6.27753 13.4999 6.26158 13.4999 6.24824 13.4999C6.23229 13.4999 6.21624 13.4971 6.20029 13.4945C6.18966 13.4945 6.17893 13.4917 6.1683 13.4863C6.14964 13.4836 6.13099 13.4755 6.11504 13.462C6.1017 13.4538 6.08836 13.4458 6.07773 13.4348C6.0671 13.4294 6.05646 13.4213 6.04844 13.4105C6.04573 13.4077 6.04312 13.4051 6.04312 13.4023C6.01383 13.3644 5.99518 13.3211 5.98716 13.2777C5.98445 13.275 5.98445 13.275 5.98445 13.2723C5.98174 13.2588 5.98174 13.2452 5.98174 13.2318C5.98174 13.2156 5.98445 13.1992 5.98706 13.183C5.98706 13.1722 5.99238 13.1587 5.99508 13.1451C5.99779 13.1397 5.99779 13.137 5.99779 13.1343C6.00581 13.1207 6.01113 13.1072 6.01915 13.0964C6.02717 13.0828 6.0351 13.0693 6.04583 13.0585C6.05115 13.0476 6.06178 13.0367 6.07251 13.0287C6.07512 13.0259 6.07782 13.0233 6.08053 13.0205C7.89795 11.3737 7.47691 9.83251 7.45825 9.76737C7.45023 9.74841 7.44762 9.72679 7.44491 9.70783C7.35966 8.34806 6.30962 6.83119 5.64875 6.0052C5.52347 7.28914 4.74265 9.22038 4.54545 9.68897C4.4948 9.8109 4.36421 9.87584 4.24165 9.84872C4.11377 9.81895 4.02842 9.70243 4.03383 9.57245C4.04978 9.14723 3.71137 8.58111 3.41287 8.1775C3.27967 8.51881 3.0238 9.047 2.53876 9.88401C2.32292 10.2578 2.19765 10.6398 2.16835 11.0135C2.06444 12.3597 2.91719 12.8554 3.13033 12.9556C3.15962 12.9692 3.17566 12.9746 3.17827 12.9746C3.21829 12.9908 3.25289 13.0125 3.27957 13.045C3.29021 13.0532 3.29823 13.064 3.30625 13.0748C3.31959 13.0991 3.33293 13.1235 3.33825 13.1479C3.3542 13.1885 3.3569 13.2319 3.34888 13.2752C3.34617 13.2914 3.34086 13.3077 3.33554 13.3239C3.30625 13.4052 3.24226 13.4648 3.16503 13.4864C3.15169 13.4918 3.13835 13.4946 3.12511 13.4972C3.11177 13.5 3.09843 13.5 3.08509 13.5C3.0558 13.5 3.02381 13.4946 2.99452 13.4838H2.9892C1.58211 12.9285 0.657446 12.0861 0.244445 10.981C-0.389754 9.28801 0.369719 7.46245 0.724085 6.75543C0.902618 6.4033 1.13181 6.04576 1.44625 5.62859C3.18113 3.32894 3.65545 0.747591 3.66077 0.723194C3.67672 0.622978 3.74873 0.541727 3.84462 0.511957C3.93789 0.482187 4.04181 0.509206 4.11382 0.579651C5.59815 2.12356 6.75737 3.3587 7.55417 4.2526C8.25768 5.04086 8.82526 5.8751 9.24101 6.7392C10.1043 8.52942 10.2322 10.0462 9.61934 11.2517L9.61937 11.2516Z',
                fill: 'currentColor'
            })
        })
    );
}
