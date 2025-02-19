n.d(t, { P: () => g }), n(47120);
var r,
    i = n(200651),
    o = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(532712),
    c = n(84735),
    u = n(981631);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
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
function _(e, t) {
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
function h(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = m(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function m(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
class g extends (r = o.Component) {
    renderNonInteractive() {
        let e = this.props,
            { tag: t, focusProps: n, innerRef: r, onClick: i, role: a, tabIndex: s, ignoreKeyPress: l } = e,
            c = h(e, ['tag', 'focusProps', 'innerRef', 'onClick', 'role', 'tabIndex', 'ignoreKeyPress']);
        return o.createElement(t, f({ ref: this.setRef }, c));
    }
    renderInner() {
        let e = this.props,
            { tag: t, onClick: n, className: r, children: i, focusProps: a, innerRef: l, ignoreKeyPress: c } = e,
            u = h(e, ['tag', 'onClick', 'className', 'children', 'focusProps', 'innerRef', 'ignoreKeyPress']);
        return null == n
            ? o.createElement(
                  t,
                  f(
                      {
                          ref: this.setRef,
                          className: s()(r)
                      },
                      u
                  ),
                  i
              )
            : o.createElement(
                  t,
                  f(
                      {
                          onClick: n,
                          ref: this.setRef,
                          onKeyPress: this.handleKeyPress,
                          className: s()(r)
                      },
                      u
                  ),
                  i
              );
    }
    render() {
        return this.context ? this.renderNonInteractive() : (0, i.jsx)(c.t, _(f({}, this.props.focusProps), { children: this.renderInner() }));
    }
    constructor(...e) {
        super(...e),
            d(this, 'ref', void 0),
            d(this, 'handleKeyPress', (e) => {
                let { onClick: t, href: n, onKeyPress: r, ignoreKeyPress: i } = this.props;
                e.repeat || (i || null == t || null == this.ref || (e.charCode !== u.yXg.SPACE && e.charCode !== u.yXg.ENTER) || (null == n && e.preventDefault(), null == this.ref.click ? t(e) : this.ref.click()), null != r && r(e));
            }),
            d(this, 'setRef', (e) => {
                this.ref = e;
                let { innerRef: t } = this.props;
                null != t && ('function' == typeof t ? t(e) : t.hasOwnProperty('current') && (t.current = e));
            });
    }
}
d(g, 'contextType', l.g),
    d(g, 'defaultProps', {
        tag: 'div',
        role: 'button',
        tabIndex: 0
    });
