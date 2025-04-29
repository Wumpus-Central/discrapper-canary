n.d(t, { Z: () => m });
var r = n(200651),
    i = n(192379),
    o = n(481060),
    a = n(318766),
    s = n(907040),
    l = n(28546),
    c = n(872635),
    u = n(185923),
    d = n(763169);
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
function m(e) {
    var t;
    let { editorRef: n, options: f, channel: p } = e,
        m = null == (t = n.current) ? void 0 : t.getSlateEditor(),
        g = i.useCallback(
            (e, t) => {
                let r = n.current;
                null != e && null != r && r.insertEmoji(e, t, !1), t && (0, l._Q)();
            },
            [n]
        ),
        E = (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(s.Z, {
                persistSearch: !0,
                channel: p,
                closePopout: t,
                onSelectEmoji: (e, n) => {
                    g(e, n), n && t();
                },
                pickerIntention: u.Hz.COMMUNITY_CONTENT
            });
        };
    return null == m
        ? null
        : (0, r.jsxs)('div', {
              id: 'slate-toolbar',
              className: d.staticToolbar,
              children: [
                  (0, r.jsx)('div', {
                      className: d.staticButtons,
                      children: (0, r.jsx)(c.I, {
                          editorRef: n,
                          options: f,
                          iconClassName: d.staticIcon,
                          dividerClassName: d.staticDivider
                      })
                  }),
                  (0, r.jsx)(o.yRy, {
                      renderPopout: E,
                      position: 'bottom',
                      animation: o.yRy.Animation.NONE,
                      align: 'left',
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, r.jsx)(
                              a.Z,
                              h(_({}, e), {
                                  active: n,
                                  className: d.emojiButton,
                                  tabIndex: 0
                              })
                          );
                      }
                  })
              ]
          });
}
