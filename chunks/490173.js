n.d(t, { Z: () => T }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(990547),
    o = n(762328),
    s = n(442837),
    l = n(682973),
    c = n(481060),
    u = n(239091),
    d = n(213609),
    f = n(314910),
    p = n(728285),
    _ = n(210887),
    m = n(574254),
    h = n(585483),
    g = n(981631);
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
function v() {
    window.getSelection().removeAllRanges();
}
let S = (e) => {
    let {
            children: t,
            close: n,
            onUnmount: s,
            target: u,
            rect: _,
            position: m,
            align: h,
            impressionName: E,
            impressionProperties: b,
            disableClickTrap: y = !1,
        } = e,
        O = i.useRef(null),
        S = i.useMemo(() => ({ current: u }), [u]),
        I = i.useRef(n);
    i.useEffect(() => {
        I.current = n;
    }),
        i.useEffect(() => {
            var e, t, n;
            let r = null == (e = O.current) ? void 0 : e.elementRef.current;
            if (null == r) return;
            let i = (e) => {
                var t;
                let n = e.target,
                    r = null == (t = O.current) ? void 0 : t.elementRef.current;
                (null != r && (0, c.ty$)(r, n)) || (v(), I.current());
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
    let T = i.useRef(s);
    i.useEffect(() => {
        T.current = s;
    }),
        i.useEffect(
            () => () => {
                var e;
                return null == (e = T.current) ? void 0 : e.call(T);
            },
            [],
        ),
        i.useLayoutEffect(() => {
            var e;
            null == (e = O.current) || e.updatePosition();
        }),
        (0, d.Z)({
            type: a.ImpressionTypes.MENU,
            name: E,
            properties: b,
        });
    let C = (0, p.Aq)(),
        A = i.useCallback(() => {
            C.dispatch(g.CkL.POPOUT_SHOW);
        }, [C]),
        N = i.useCallback(() => {
            C.dispatch(g.CkL.POPOUT_HIDE);
        }, [C]),
        P = (0, l.E)("ContextMenu"),
        R = u.ownerDocument;
    return P
        ? (0, r.jsx)(o.pS, {
              open: !0,
              ownerDocument: R,
              onOpenChange: (e) => {
                  e ? A() : (N(), v(), I.current());
              },
              overrideTargetRect: _,
              placement: (0, o.a_)(null != m ? m : "right", null != h ? h : "top"),
              blockPointerEvents: !y,
              crossAccessFlip: !1,
              renderLayer: (e) => {
                  let { update: n } = e;
                  return t({ position: m }, n);
              },
              children: () => null,
          })
        : (0, r.jsx)(f.W5, {
              onMount: A,
              onUnmount: N,
              targetRef: S,
              overrideTargetRect: _,
              position: null != m ? m : "right",
              align: null != h ? h : "top",
              autoInvert: !0,
              ref: O,
              nudgeAlignIntoViewport: !0,
              clickTrap: !y,
              children: t,
          });
};
class I extends i.PureComponent {
    componentDidMount() {
        let { renderLazy: e, renderWindow: t } = this.props;
        if (
            (t.addEventListener("resize", this.closeResize, !0),
            h.S.subscribe(g.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu),
            null != e)
        ) {
            let t = setTimeout(() => {
                this.setState({ render: () => (0, r.jsx)(c.TlX, {}) });
            }, 300);
            e().then((e) => {
                this.setState({ render: e }), clearTimeout(t);
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
            h.S.unsubscribe(g.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu);
    }
    render() {
        var e, t, n;
        let { appContext: i, target: a, isOpen: o, theme: s, config: l, rect: c, renderWindow: u } = this.props,
            d = null != (t = this.state.render) ? t : this.props.render;
        return o &&
            null != c &&
            null != l &&
            null != a &&
            null != d &&
            l.context === i &&
            (null == (e = a.ownerDocument) ? void 0 : e.defaultView) === u
            ? (0, r.jsx)(S, {
                  target: a,
                  rect: c,
                  close: this.close,
                  onUnmount: l.onClose,
                  align: l.align,
                  position: l.position,
                  impressionName: l.impressionName,
                  impressionProperties: l.impressionProperties,
                  disableClickTrap: null != (n = l.disableClickTrap) && n,
                  children: (e, t) => {
                      let { position: n } = e;
                      return d({
                          position: n,
                          theme: s,
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
            E(this, "state", { render: void 0 }),
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
function T() {
    let {
            contextMenu: e,
            version: t,
            isOpen: n,
        } = (0, s.cj)([m.Z], () => ({
            contextMenu: m.Z.getContextMenu(),
            version: m.Z.version,
            isOpen: m.Z.isOpen(),
        })),
        a = (0, s.e7)([_.Z], () => _.Z.theme),
        { appContext: o, renderWindow: l } = i.useContext(p.ZP);
    return (0, r.jsx)(
        I,
        O(
            b(
                {
                    appContext: o,
                    renderWindow: l,
                },
                e,
            ),
            {
                isOpen: n,
                theme: a,
                closeContextMenu: u.Zy,
            },
        ),
        t,
    );
}
