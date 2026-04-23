"use strict";
n.d(t, { A: () => S });
var r = n(627968),
    i = n(64700),
    s = n(110259),
    a = n(508382),
    o = n(311907),
    l = n(502939),
    u = n(623646),
    c = n(861672),
    d = n(442433),
    _ = n(139286),
    f = n(750506),
    p = n(267102),
    h = n(544028),
    E = n(712687),
    m = n(203982),
    g = n(652215);
function A() {
    window.getSelection().removeAllRanges();
}
let I = (e) => {
    let {
            children: t,
            close: n,
            onUnmount: o,
            target: c,
            rect: d,
            position: h,
            align: E,
            impressionName: m,
            impressionProperties: I,
            disableClickTrap: T = !1,
            repositionOnContentChange: S = !1,
        } = e,
        y = i.useRef(null),
        N = i.useMemo(() => ({ current: c }), [c]),
        v = i.useRef(n);
    i.useEffect(() => {
        v.current = n;
    }),
        i.useEffect(() => {
            let e = y.current?.elementRef.current;
            if (null == e) return;
            let t = (e) => {
                let t = e.target,
                    n = y.current?.elementRef.current;
                (null != n && (0, u.H)(n, t)) || (A(), v.current());
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
    let C = i.useRef(o);
    i.useEffect(() => {
        C.current = o;
    }),
        i.useEffect(() => () => C.current?.(), []),
        i.useLayoutEffect(() => {
            y.current?.updatePosition();
        }),
        (0, _.A)({ type: s.ImpressionTypes.MENU, name: m, properties: I });
    let O = (0, p.aL)(),
        R = i.useCallback(() => {
            O.dispatch(g.jej.POPOUT_SHOW);
        }, [O]),
        b = i.useCallback(() => {
            O.dispatch(g.jej.POPOUT_HIDE);
        }, [O]),
        D = (0, l.D)("ContextMenu"),
        L = c.ownerDocument;
    return D
        ? (0, r.jsx)(a.Ow, {
              focus: "modal",
              returnFocusElement: c,
              spacing: 0,
              open: !0,
              ownerDocument: L,
              onOpenChange: (e, t, n) => {
                  e ? R() : (b(), "outside-press" === n && setTimeout(A, 0), v.current());
              },
              overrideTargetRect: d,
              placement: (0, a.Pv)(h ?? "right", E ?? "top"),
              blockPointerEvents: !T,
              crossAccessFlip: !1,
              autoUpdate: S,
              renderLayer: (e) => {
                  let { update: n } = e;
                  return t({ position: h }, n);
              },
              children: () => null,
          })
        : (0, r.jsx)(f.nE, {
              onMount: R,
              onUnmount: b,
              targetRef: N,
              overrideTargetRect: d,
              position: h ?? "right",
              align: E ?? "top",
              autoInvert: !0,
              ref: y,
              nudgeAlignIntoViewport: !0,
              clickTrap: !T,
              children: t,
          });
};
class T extends i.PureComponent {
    state = { render: void 0 };
    componentDidMount() {
        let { renderLazy: e, renderWindow: t } = this.props;
        if (
            (t.addEventListener("resize", this.closeResize, !0),
            m._.subscribe(g.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu),
            null != e)
        ) {
            let t = setTimeout(() => {
                this.setState({ render: () => (0, r.jsx)(c.X, {}) });
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
            m._.unsubscribe(g.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu);
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
        let { appContext: e, target: t, isOpen: n, theme: i, config: s, rect: a, renderWindow: o } = this.props,
            l = this.state.render ?? this.props.render;
        return n &&
            null != a &&
            null != s &&
            null != t &&
            null != l &&
            s.context === e &&
            t.ownerDocument?.defaultView === o
            ? (0, r.jsx)(I, {
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
                  children: (n, r) => {
                      let { position: a } = n;
                      return l({ position: a, theme: i, onHeightUpdate: r, config: s, target: t, context: e });
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
        } = (0, o.cf)([E.A], () => ({ contextMenu: E.A.getContextMenu(), version: E.A.version, isOpen: E.A.isOpen() })),
        s = (0, o.bG)([h.A], () => h.A.theme),
        { appContext: a, renderWindow: l } = i.useContext(p.Ay);
    return (0, r.jsx)(T, { appContext: a, renderWindow: l, ...e, isOpen: n, theme: s, closeContextMenu: d.Z_ }, t);
}
