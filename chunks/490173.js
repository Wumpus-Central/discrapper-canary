n.d(t, { Z: () => S }), n(388685);
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
    _ = n(728285),
    p = n(210887),
    h = n(574254),
    m = n(585483),
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
let I = (e) => {
    let {
            children: t,
            close: n,
            onUnmount: s,
            target: u,
            rect: p,
            position: h,
            align: m,
            impressionName: E,
            impressionProperties: b,
            disableClickTrap: y = !1,
        } = e,
        O = i.useRef(null),
        I = i.useMemo(() => ({ current: u }), [u]),
        T = i.useRef(n);
    i.useEffect(() => {
        T.current = n;
    }),
        i.useEffect(() => {
            var e, t, n;
            let r = null == (e = O.current) ? void 0 : e.elementRef.current;
            if (null == r) return;
            let i = (e) => {
                var t;
                let n = e.target,
                    r = null == (t = O.current) ? void 0 : t.elementRef.current;
                (null != r && (0, c.ty$)(r, n)) || (v(), T.current());
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
    let S = i.useRef(s);
    i.useEffect(() => {
        S.current = s;
    }),
        i.useEffect(
            () => () => {
                var e;
                return null == (e = S.current) ? void 0 : e.call(S);
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
    let A = (0, _.Aq)(),
        C = i.useCallback(() => {
            A.dispatch(g.CkL.POPOUT_SHOW);
        }, [A]),
        N = i.useCallback(() => {
            A.dispatch(g.CkL.POPOUT_HIDE);
        }, [A]);
    return (0, l.E)("ContextMenu")
        ? (0, r.jsx)(o.pS, {
              open: !0,
              onOpenChange: (e) => {
                  e ? C() : (N(), v(), T.current());
              },
              overrideTargetRect: p,
              placement: (0, o.a_)(null != h ? h : "right", null != m ? m : "top"),
              blockPointerEvents: !y,
              renderLayer: (e) => {
                  let { update: n } = e;
                  return t({ position: h }, n);
              },
              children: () => null,
          })
        : (0, r.jsx)(f.W5, {
              onMount: C,
              onUnmount: N,
              targetRef: I,
              overrideTargetRect: p,
              position: null != h ? h : "right",
              align: null != m ? m : "top",
              autoInvert: !0,
              ref: O,
              nudgeAlignIntoViewport: !0,
              clickTrap: !y,
              children: t,
          });
};
class T extends i.PureComponent {
    componentDidMount() {
        let { renderLazy: e, renderWindow: t } = this.props;
        if (
            (t.addEventListener("resize", this.closeResize, !0),
            m.S.subscribe(g.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu),
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
            m.S.unsubscribe(g.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu);
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
            ? (0, r.jsx)(I, {
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
function S() {
    let {
            contextMenu: e,
            version: t,
            isOpen: n,
        } = (0, s.cj)([h.Z], () => ({
            contextMenu: h.Z.getContextMenu(),
            version: h.Z.version,
            isOpen: h.Z.isOpen(),
        })),
        a = (0, s.e7)([p.Z], () => p.Z.theme),
        { appContext: o, renderWindow: l } = i.useContext(_.ZP);
    return (0, r.jsx)(
        T,
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
