n.d(t, {
    A: () => I,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(110259),
    s = n(508382),
    o = n(311907),
    l = n(502939),
    c = n(397927),
    u = n(442433),
    d = n(139286),
    f = n(750506),
    p = n(267102),
    _ = n(544028),
    h = n(712687),
    m = n(203982),
    g = n(652215);

function E(e, t, n) {
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

function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}

function y(e, t) {
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

function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function A() {
    window.getSelection().removeAllRanges();
}
let v = (e) => {
    let {
            children: t,
            close: n,
            onUnmount: o,
            target: u,
            rect: _,
            position: h,
            align: m,
            impressionName: E,
            impressionProperties: b,
            disableClickTrap: y = !1,
        } = e,
        O = i.useRef(null),
        v = i.useMemo(
            () => ({
                current: u,
            }),
            [u],
        ),
        S = i.useRef(n);
    i.useEffect(() => {
        S.current = n;
    }),
        i.useEffect(() => {
            var e, t, n;
            let r = null == (e = O.current) ? void 0 : e.elementRef.current;
            if (null == r) return;
            let i = (e) => {
                var t;
                let n = e.target,
                    r = null == (t = O.current) ? void 0 : t.elementRef.current;
                (null != r && (0, c.HG$)(r, n)) || (A(), S.current());
            };
            return (
                null == (t = r.ownerDocument) || t.addEventListener("click", i, !0),
                null == (n = r.ownerDocument) || n.addEventListener("contextmenu", i, !0),
                () => {
                    var e, t;
                    null == (e = r.ownerDocument) || e.removeEventListener("click", i, !0),
                        null == (t = r.ownerDocument) || t.removeEventListener("contextmenu", i, !0);
                }
            );
        }, []);
    let I = i.useRef(o);
    i.useEffect(() => {
        I.current = o;
    }),
        i.useEffect(
            () => () => {
                var e;
                return null == (e = I.current) ? void 0 : e.call(I);
            },
            [],
        ),
        i.useLayoutEffect(() => {
            var e;
            null == (e = O.current) || e.updatePosition();
        }),
        (0, d.A)({
            type: a.ImpressionTypes.MENU,
            name: E,
            properties: b,
        });
    let T = (0, p.aL)(),
        C = i.useCallback(() => {
            T.dispatch(g.jej.POPOUT_SHOW);
        }, [T]),
        N = i.useCallback(() => {
            T.dispatch(g.jej.POPOUT_HIDE);
        }, [T]),
        R = (0, l.D)("ContextMenu"),
        w = u.ownerDocument;
    return R
        ? (0, r.jsx)(s.Ow, {
              spacing: 0,
              open: !0,
              ownerDocument: w,
              onOpenChange: (e) => {
                  e ? C() : (N(), A(), S.current());
              },
              overrideTargetRect: _,
              placement: (0, s.Pv)(null != h ? h : "right", null != m ? m : "top"),
              blockPointerEvents: !y,
              crossAccessFlip: !1,
              renderLayer: (e) => {
                  let { update: n } = e;
                  return t(
                      {
                          position: h,
                      },
                      n,
                  );
              },
              children: () => null,
          })
        : (0, r.jsx)(f.nE, {
              onMount: C,
              onUnmount: N,
              targetRef: v,
              overrideTargetRect: _,
              position: null != h ? h : "right",
              align: null != m ? m : "top",
              autoInvert: !0,
              ref: O,
              nudgeAlignIntoViewport: !0,
              clickTrap: !y,
              children: t,
          });
};
class S extends i.PureComponent {
    componentDidMount() {
        let { renderLazy: e, renderWindow: t } = this.props;
        if (
            (t.addEventListener("resize", this.closeResize, !0),
            m._.subscribe(g.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu),
            null != e)
        ) {
            let t = setTimeout(() => {
                this.setState({
                    render: () => (0, r.jsx)(c.XSw, {}),
                });
            }, 300);
            e().then((e) => {
                this.setState({
                    render: e,
                }),
                    clearTimeout(t);
            });
        }
    }
    componentDidUpdate(e) {
        let { isOpen: t } = this.props;
        if (!t && e.isOpen) {
            var n, r;
            null == (r = e.config) || null == (n = r.onClose) || n.call(r);
        }
    }
    componentWillUnmount() {
        let { renderWindow: e } = this.props;
        e.removeEventListener("resize", this.closeResize, !0),
            m._.unsubscribe(g.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu);
    }
    render() {
        var e, t, n;
        let { appContext: i, target: a, isOpen: s, theme: o, config: l, rect: c, renderWindow: u } = this.props,
            d = null != (e = this.state.render) ? e : this.props.render;
        return s &&
            null != c &&
            null != l &&
            null != a &&
            null != d &&
            l.context === i &&
            (null == (n = a.ownerDocument) ? void 0 : n.defaultView) === u
            ? (0, r.jsx)(v, {
                  target: a,
                  rect: c,
                  close: this.close,
                  onUnmount: l.onClose,
                  align: l.align,
                  position: l.position,
                  impressionName: l.impressionName,
                  impressionProperties: l.impressionProperties,
                  disableClickTrap: null != (t = l.disableClickTrap) && t,
                  children: (e, t) => {
                      let { position: n } = e;
                      return d({
                          position: n,
                          theme: o,
                          onHeightUpdate: t,
                          config: l,
                          target: a,
                          context: i,
                      });
                  },
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            E(this, "state", {
                render: void 0,
            }),
            E(this, "closeResize", (e) => {
                let { renderWindow: t } = this.props;
                e.target === t && this.close();
            }),
            E(this, "close", () => {
                let { isOpen: e, closeContextMenu: t } = this.props;
                e && t();
            });
    }
}

function I() {
    let {
            contextMenu: e,
            version: t,
            isOpen: n,
        } = (0, o.cf)([h.A], () => ({
            contextMenu: h.A.getContextMenu(),
            version: h.A.version,
            isOpen: h.A.isOpen(),
        })),
        a = (0, o.bG)([_.A], () => _.A.theme),
        { appContext: s, renderWindow: l } = i.useContext(p.Ay);
    return (0, r.jsx)(
        S,
        O(
            b(
                {
                    appContext: s,
                    renderWindow: l,
                },
                e,
            ),
            {
                isOpen: n,
                theme: a,
                closeContextMenu: u.Z_,
            },
        ),
        t,
    );
}
