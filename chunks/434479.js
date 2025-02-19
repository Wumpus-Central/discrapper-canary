n.d(t, { m: () => f });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(91192),
    a = n(589440),
    s = n(481060),
    c = n(762118),
    u = n(436804),
    d = n(81503);
function p(e) {
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
                var r;
                (r = n[t]),
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
}
function h(e, t) {
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
function f(e) {
    var t,
        { id: n, className: i, innerClassName: f, renderIcon: g, text: m, selected: b, trailing: v, showUnread: y = !1 } = e,
        _ = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['id', 'className', 'innerClassName', 'renderIcon', 'text', 'selected', 'trailing', 'showUnread']);
    let O = (0, o.JA)(n),
        j = null !== (t = (0, a.q)(m)) && void 0 !== t ? t : '';
    return (0, r.jsx)('li', {
        children: (0, r.jsxs)(
            s.kL8,
            h(p({}, _), {
                buttonProps: h(p({}, O), {
                    id: n,
                    role: 'button'
                }),
                tag: 'div',
                'aria-label': j,
                focusProps: {
                    offset: {
                        top: 1,
                        bottom: 1,
                        right: 4
                    }
                },
                onContextMenu:
                    null != _.onContextMenu
                        ? _.onContextMenu
                        : (e) => {
                              e.stopPropagation();
                          },
                className: l()(u.containerDefault, d.wrapper, { [d.modeSelected]: b }, i),
                children: [
                    y ? (0, r.jsx)('div', { className: l()(d.unread, d.unreadImportant) }) : null,
                    (0, r.jsx)('div', {
                        className: l()([d.link, d.basicChannelRowLink, f]),
                        children: (0, r.jsxs)('div', {
                            className: c.content,
                            children: [
                                (0, r.jsx)('div', {
                                    className: d.iconContainer,
                                    children: g(d.icon)
                                }),
                                (0, r.jsx)('div', {
                                    className: d.name,
                                    'aria-hidden': !0,
                                    children: m
                                }),
                                v
                            ]
                        })
                    })
                ]
            })
        )
    });
}
