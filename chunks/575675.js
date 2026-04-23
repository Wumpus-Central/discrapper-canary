"use strict";
n.d(t, { A: () => o });
var r = n(627968),
    i = n(64700),
    s = n(52133),
    a = n(968441);
let o = function (e, t, n) {
    return null != n && n.forwardRef
        ? (function (e, t) {
              return (n) => {
                  let o = `FluxContainer(${l(n)})`;
                  class c extends i.Component {
                      static displayName = o;
                      memoizedGetStateFromStores = u(t);
                      listener = new a.r(e, () => {
                          let e = this.memoizedGetStateFromStores.getCachedResult(this.props.childProps);
                          (null != e &&
                              (this.memoizedGetStateFromStores.clear(),
                              (0, s.A)(this.memoizedGetStateFromStores(this.props.childProps), e))) ||
                              this.forceUpdate();
                      });
                      componentDidMount() {
                          this.listener.attach(o);
                      }
                      componentWillUnmount() {
                          this.listener.detach(), this.memoizedGetStateFromStores.clear();
                      }
                      render() {
                          let { forwardedConnectStoresRef: e, childProps: t } = this.props,
                              i = this.memoizedGetStateFromStores(t);
                          return (0, r.jsx)(n, { ref: e, ...t, ...i });
                      }
                  }
                  let d = i.forwardRef((e, t) => (0, r.jsx)(c, { childProps: e, forwardedConnectStoresRef: t }));
                  return (d.displayName = `ForwardRef(${o})`), d;
              };
          })(e, t)
        : (function (e, t) {
              return (n) => {
                  let o = `FluxContainer(${l(n)})`;
                  class c extends i.Component {
                      static displayName = o;
                      memoizedGetStateFromStores = u(t);
                      listener = new a.r(e, () => {
                          let e = this.memoizedGetStateFromStores.getCachedResult(this.props);
                          (null != e &&
                              (this.memoizedGetStateFromStores.clear(),
                              (0, s.A)(this.memoizedGetStateFromStores(this.props), e))) ||
                              this.forceUpdate();
                      });
                      componentDidMount() {
                          this.listener.attach(o);
                      }
                      componentWillUnmount() {
                          this.listener.detach(), this.memoizedGetStateFromStores.clear();
                      }
                      render() {
                          let e = this.memoizedGetStateFromStores(this.props);
                          return (0, r.jsx)(n, { ...this.props, ...e });
                      }
                  }
                  return c;
              };
          })(e, t);
};
function l(e) {
    return e.displayName ?? e.name ?? "<Unknown>";
}
function u(e) {
    let t = null,
        n = null,
        r = (e) =>
            null != t && null != n && (0, s.A)(t, e)
                ? n
                : null != t && null != n && (0, s.A)(t, e)
                  ? ((t = e), n)
                  : null,
        i = (i) => {
            let s = r(i);
            return null != s ? s : (n = e((t = i)));
        };
    return (
        (i.getCachedResult = r),
        (i.clear = () => {
            (t = null), (n = null);
        }),
        i
    );
}
