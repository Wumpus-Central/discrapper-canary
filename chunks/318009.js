"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    r = n(64700),
    s = n(110259),
    a = n(508382),
    o = n(17928),
    l = n(502939),
    d = n(623646),
    _ = n(550079),
    u = n(442433),
    c = n(139286),
    E = n(750506),
    h = n(267102),
    m = n(363195),
    f = n(712687),
    g = n(625494),
    p = n(652215);
function A() {
    window.getSelection().removeAllRanges();
}
let I = (e) => {
    let {
            children: t,
            close: n,
            onUnmount: o,
            target: _,
            rect: u,
            position: m,
            align: f,
            impressionName: g,
            impressionProperties: I,
            disableClickTrap: T = !1,
            repositionOnContentChange: S = !1,
        } = e,
        N = r.useRef(null),
        C = r.useMemo(() => ({ current: _ }), [_]),
        R = r.useRef(n);
    r.useEffect(() => {
        R.current = n;
    }),
        r.useEffect(() => {
            let e = N.current?.elementRef.current;
            if (null == e) return;
            let t = (e) => {
                let t = e.target,
                    n = N.current?.elementRef.current;
                (null != n && (0, d.H)(n, t)) || (A(), R.current());
            };
            return (
                e.ownerDocument?.addEventListener("click", t, !0),
                e.ownerDocument?.addEventListener("contextmenu", t, !0),
                () => {
                    e.ownerDocument?.removeEventListener("click", t, !0),
                        e.ownerDocument?.removeEventListener("contextmenu", t, !0);
                }
            );
        }, []);
    let O = r.useRef(o);
    r.useEffect(() => {
        O.current = o;
    }),
        r.useEffect(() => () => O.current?.(), []),
        r.useLayoutEffect(() => {
            N.current?.updatePosition();
        }),
        (0, c.A)({ type: s.ImpressionTypes.MENU, name: g, properties: I });
    let y = (0, h.aL)(),
        v = r.useCallback(() => {
            y.dispatch(p.jej.POPOUT_SHOW);
        }, [y]),
        D = r.useCallback(() => {
            y.dispatch(p.jej.POPOUT_HIDE);
        }, [y]),
        L = (0, l.D)("ContextMenu"),
        b = _.ownerDocument;
    return L
        ? (0, i.jsx)(a.Ow, {
              focus: "modal",
              returnFocusElement: _,
              spacing: 0,
              open: !0,
              ownerDocument: b,
              onOpenChange: (e, t, n) => {
                  e ? v() : (D(), "outside-press" === n && setTimeout(A, 0), R.current());
              },
              overrideTargetRect: u,
              placement: (0, a.Pv)(m ?? "right", f ?? "top"),
              blockPointerEvents: !T,
              crossAccessFlip: !1,
              autoUpdate: S,
              renderLayer: (e) => {
                  let { update: n } = e;
                  return t({ position: m }, n);
              },
              children: () => null,
          })
        : (0, i.jsx)(E.nE, {
              onMount: v,
              onUnmount: D,
              targetRef: C,
              overrideTargetRect: u,
              position: m ?? "right",
              align: f ?? "top",
              autoInvert: !0,
              ref: N,
              nudgeAlignIntoViewport: !0,
              clickTrap: !T,
              children: t,
          });
};
class T extends r.PureComponent {
    state = { render: void 0 };
    componentDidMount() {
        let { renderLazy: e, renderWindow: t } = this.props;
        if (
            (t.addEventListener("resize", this.closeResize, !0),
            g._.subscribe(p.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu),
            null != e)
        ) {
            let t = setTimeout(() => {
                this.setState({ render: () => (0, i.jsx)(_.X, {}) });
            }, 300);
            e().then((e) => {
                this.setState({ render: e }), clearTimeout(t);
            });
        }
    }
    componentDidUpdate(e) {
        let { isOpen: t } = this.props;
        !t && e.isOpen && e.config?.onClose?.();
    }
    componentWillUnmount() {
        let { renderWindow: e } = this.props;
        e.removeEventListener("resize", this.closeResize, !0),
            g._.unsubscribe(p.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu);
    }
    closeResize = (e) => {
        let { renderWindow: t } = this.props;
        e.target === t && this.close();
    };
    close = () => {
        let { isOpen: e, closeContextMenu: t } = this.props;
        e && t();
    };
    render() {
        let { appContext: e, target: t, isOpen: n, theme: r, config: s, rect: a, renderWindow: o } = this.props,
            l = this.state.render ?? this.props.render;
        return n &&
            null != a &&
            null != s &&
            null != t &&
            null != l &&
            s.context === e &&
            t.ownerDocument?.defaultView === o
            ? (0, i.jsx)(I, {
                  target: t,
                  rect: a,
                  close: this.close,
                  onUnmount: s.onClose,
                  align: s.align,
                  position: s.position,
                  impressionName: s.impressionName,
                  impressionProperties: s.impressionProperties,
                  disableClickTrap: s.disableClickTrap ?? !1,
                  repositionOnContentChange: s.repositionOnContentChange,
                  children: (n, i) => {
                      let { position: a } = n;
                      return l({ position: a, theme: r, onHeightUpdate: i, config: s, target: t, context: e });
                  },
              })
            : null;
    }
}
function S() {
    let {
            contextMenu: e,
            version: t,
            isOpen: n,
        } = (0, o.cf)([f.A], () => ({ contextMenu: f.A.getContextMenu(), version: f.A.version, isOpen: f.A.isOpen() })),
        s = (0, o.bG)([m.A], () => m.A.theme),
        { appContext: a, renderWindow: l } = r.useContext(h.Ay);
    return (0, i.jsx)(T, { appContext: a, renderWindow: l, ...e, isOpen: n, theme: s, closeContextMenu: u.Z_ }, t);
}
