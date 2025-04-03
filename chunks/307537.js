r.d(t, { Z: () => o });
var n = r(200651);
r(192379);
var i = r(325767);
function o(e) {
    var t,
        r,
        { width: o = 24, height: s = 24, color: c = 'currentColor' } = e,
        l = (function (e, t) {
            if (null == e) return {};
            var r,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var r,
                        n,
                        i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var o = Object.getOwnPropertySymbols(e);
                for (n = 0; n < o.length; n++) (r = o[n]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            }
            return i;
        })(e, ['width', 'height', 'color']);
    return (0, n.jsx)(
        'svg',
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                'function' == typeof Object.getOwnPropertySymbols &&
                    (n = n.concat(
                        Object.getOwnPropertySymbols(r).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                        })
                    )),
                    n.forEach(function (t) {
                        var n;
                        (n = r[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: n,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0
                                  })
                                : (e[t] = n);
                    });
            }
            return e;
        })({}, (0, i.Z)(l))),
        (r = r =
            {
                xmlns: 'http://www.w3.org/2000/svg',
                width: o,
                height: s,
                viewBox: '0 0 21 20',
                fill: 'none',
                children: (0, n.jsx)('path', {
                    fillRule: 'evenodd',
                    clipRule: 'evenodd',
                    d: 'M14.571 6.66585H17.166C18.086 6.66585 18.8327 7.41335 18.8327 8.33251V9.99918H2.16602V8.33251C2.16602 7.41335 2.91352 6.66585 3.83268 6.66585H6.42768C6.05185 6.47001 5.69602 6.23085 5.39852 5.93418C4.42352 4.95918 4.42352 3.37335 5.39852 2.39918C6.34268 1.45501 7.98768 1.45501 8.93352 2.39751C10.2977 3.76168 10.4818 6.32918 10.4977 6.61751C10.4986 6.62709 10.4965 6.63567 10.4944 6.64421C10.4927 6.65127 10.491 6.6583 10.491 6.66585H10.5077C10.5077 6.65822 10.5059 6.65112 10.5042 6.64407C10.5022 6.6357 10.5001 6.62739 10.501 6.61835C10.5177 6.33001 10.701 3.76251 12.0652 2.39835C13.011 1.45418 14.6543 1.45501 15.6002 2.39751C16.5744 3.37418 16.5744 4.96001 15.6002 5.93418C15.3027 6.23085 14.9468 6.47001 14.571 6.66585ZM6.57685 4.75585C6.25185 4.43001 6.25185 3.90168 6.57685 3.57668C6.73352 3.41918 6.94268 3.33335 7.16602 3.33335C7.38935 3.33335 7.59852 3.41918 7.75518 3.57668C8.24685 4.06835 8.53352 4.95001 8.68685 5.68501C7.95352 5.53251 7.06518 5.24418 6.57685 4.75585ZM12.311 5.68668C12.4652 4.95085 12.751 4.06918 13.2435 3.57751C13.4002 3.41918 13.6093 3.33335 13.8327 3.33335C14.056 3.33335 14.2652 3.41918 14.421 3.57585C14.746 3.90168 14.7469 4.43001 14.4219 4.75585C13.9293 5.24835 13.0468 5.53501 12.311 5.68668ZM2.99935 11.6658V16.6658C2.99935 17.585 3.74685 18.3325 4.66602 18.3325H9.66602V11.6658H2.99935ZM11.3327 11.6658V18.3325H16.3327C17.2527 18.3325 17.9993 17.585 17.9993 16.6658V11.6658H11.3327Z',
                    fill: c
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
            : (function (e, t) {
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(r)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
              }),
        t)
    );
}
