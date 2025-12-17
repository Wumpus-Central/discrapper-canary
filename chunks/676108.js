n.d(t, { Z: () => h });
var r = n(54381),
    i = n(473749),
    a = n(481060),
    o = n(318766),
    s = n(907040),
    l = n(28546),
    c = n(872635),
    u = n(185923),
    d = n(138157);
function f(e, t, n) {
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
function p(e) {
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
                f(e, t, n[t]);
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
function m(e, t) {
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
function h(e) {
    var t;
    let { editorRef: n, options: f, channel: _ } = e,
        h = null == (t = n.current) ? void 0 : t.getSlateEditor(),
        g = i.useRef(null),
        E = i.useCallback(
            (e) => {
                let { emoji: t, willClose: r } = e,
                    i = n.current;
                null != t &&
                    null != i &&
                    i.insertEmoji({
                        emoji: t,
                        willClose: r,
                    }),
                    r && (0, l._Q)();
            },
            [n],
        ),
        b = (e) => {
            let { closePopout: t } = e;
            return (0, r.jsx)(s.Z, {
                persistSearch: !0,
                channel: _,
                closePopout: t,
                onSelectEmoji: (e) => {
                    let { emoji: n, willClose: r } = e;
                    E({
                        emoji: n,
                        willClose: r,
                    }),
                        r && t();
                },
                pickerIntention: u.Hz.COMMUNITY_CONTENT,
            });
        };
    return null == h
        ? null
        : (0, r.jsxs)("div", {
              id: "slate-toolbar",
              className: d.staticToolbar,
              children: [
                  (0, r.jsx)("div", {
                      className: d.staticButtons,
                      children: (0, r.jsx)(c.I, {
                          editorRef: n,
                          options: f,
                          iconClassName: d.staticIcon,
                          dividerClassName: d.staticDivider,
                      }),
                  }),
                  (0, r.jsx)(a.yRy, {
                      targetElementRef: g,
                      renderPopout: b,
                      position: "bottom",
                      animation: a.yRy.Animation.NONE,
                      align: "left",
                      children: (e, t) => {
                          let { isShown: n } = t;
                          return (0, r.jsx)(
                              o.Z,
                              m(p({}, e), {
                                  ref: g,
                                  active: n,
                                  className: d.emojiButton,
                                  tabIndex: 0,
                              }),
                          );
                      },
                  }),
              ],
          });
}
