s.d(t, { Z: () => o });
var r = s(200651);
s(192379);
var n = s(692547),
    i = s(313201);
function o(e) {
    var t,
        s,
        { isSelected: o } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var s,
                r,
                n = (function (e, t) {
                    if (null == e) return {};
                    var s,
                        r,
                        n = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (s = i[r]), t.indexOf(s) >= 0 || (n[s] = e[s]);
                    return n;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                for (r = 0; r < i.length; r++) (s = i[r]), !(t.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(e, s) && (n[s] = e[s]);
            }
            return n;
        })(e, ['isSelected']);
    let a = (0, i.Dt)();
    return (0, r.jsxs)(
        'svg',
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(s);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                        Object.getOwnPropertySymbols(s).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(s, e).enumerable;
                        })
                    )),
                    r.forEach(function (t) {
                        var r;
                        (r = s[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: r,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = r);
                    });
            }
            return e;
        })({}, l)),
        (s = s =
            {
                width: '16',
                height: '16',
                viewBox: '0 0 16 16',
                xmlns: 'http://www.w3.org/2000/svg',
                fill: 'url(#'.concat(a, ')'),
                children: [
                    (0, r.jsx)('path', {
                        d: 'M10 9.33332C10.7364 9.33332 11.3334 8.73637 11.3334 7.99999C11.3334 7.26361 10.7364 6.66666 10 6.66666C9.26364 6.66666 8.66669 7.26361 8.66669 7.99999C8.66669 8.73637 9.26364 9.33332 10 9.33332Z',
                        fill: 'url(#paint0_linear_6413_12612)'
                    }),
                    (0, r.jsx)('path', {
                        fillRule: 'evenodd',
                        clipRule: 'evenodd',
                        d: 'M4.66669 2.66666C4.2985 2.66666 4.00002 2.96513 4.00002 3.33332C4.00002 3.70151 4.2985 3.99999 4.66669 3.99999H6.66669C7.03488 3.99999 7.33335 4.29847 7.33335 4.66666C7.33335 5.03485 7.03488 5.33332 6.66669 5.33332L3.66669 5.33332C3.2985 5.33332 3.00002 5.6318 3.00002 5.99999C3.00002 6.36818 3.2985 6.66666 3.66669 6.66666L5.33335 6.66666C5.70154 6.66666 6.00002 6.96513 6.00002 7.33332C6.00002 7.70151 5.70154 7.99999 5.33335 7.99999H4.00002C3.63183 7.99999 3.33335 8.29847 3.33335 8.66666C3.33335 9.03485 3.63183 9.33332 4.00002 9.33332H4.83471C5.42677 11.6336 7.5149 13.3333 10 13.3333C12.9455 13.3333 15.3334 10.9455 15.3334 7.99999C15.3334 5.05447 12.9455 2.66666 10 2.66666H4.66669ZM10 10.6667C11.4728 10.6667 12.6667 9.47275 12.6667 7.99999C12.6667 6.52723 11.4728 5.33332 10 5.33332C8.52726 5.33332 7.33335 6.52723 7.33335 7.99999C7.33335 9.47275 8.52726 10.6667 10 10.6667Z',
                        fill: 'url(#paint0_linear_6413_12612)'
                    }),
                    (0, r.jsx)('path', {
                        d: 'M1.66669 6.66666C2.03488 6.66666 2.33335 6.36818 2.33335 5.99999C2.33335 5.6318 2.03488 5.33332 1.66669 5.33332H1.33335C0.965164 5.33332 0.666687 5.6318 0.666687 5.99999C0.666687 6.36818 0.965164 6.66666 1.33335 6.66666H1.66669Z',
                        fill: 'url(#paint0_linear_6413_12612)'
                    }),
                    (0, r.jsx)('defs', {
                        children: (0, r.jsxs)('linearGradient', {
                            id: 'paint0_linear_6413_12612',
                            x1: '0.666992',
                            y1: '0.127441',
                            x2: '15.3271',
                            y2: '0.127441',
                            gradientUnits: 'userSpaceOnUse',
                            children: [
                                (0, r.jsx)('stop', { stopColor: o ? n.Z.unsafe_rawColors.WHITE_500.css : n.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css }),
                                (0, r.jsx)('stop', {
                                    offset: '0.502368',
                                    stopColor: o ? n.Z.unsafe_rawColors.WHITE_500.css : n.Z.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                                }),
                                (0, r.jsx)('stop', {
                                    offset: '1',
                                    stopColor: o ? n.Z.unsafe_rawColors.WHITE_500.css : n.Z.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                                })
                            ]
                        })
                    })
                ]
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s))
            : (function (e, t) {
                  var s = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      s.push.apply(s, r);
                  }
                  return s;
              })(Object(s)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e));
              }),
        t)
    );
}
