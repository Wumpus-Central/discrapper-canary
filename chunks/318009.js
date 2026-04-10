"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    s = n(110259),
    a = n(508382),
    o = n(311907),
    l = n(502939),
    u = n(397927),
    c = n(442433),
    d = n(139286),
    _ = n(750506),
    f = n(267102),
    p = n(544028),
    h = n(712687),
    m = n(203982),
    E = n(652215);
function g() {
    window.getSelection().removeAllRanges();
}
let A = (e) => {
    let {
            children: t,
            close: n,
            onUnmount: o,
            target: c,
            rect: p,
            position: h,
            align: m,
            impressionName: A,
            impressionProperties: I,
            disableClickTrap: T = !1,
            repositionOnContentChange: S = !1,
        } = e,
        y = i.useRef(null),
        v = i.useMemo(() => ({ current: c }), [c]),
        N = i.useRef(n);
    i.useEffect(() => {
        N.current = n;
    }),
        i.useEffect(() => {
            let e = y.current?.elementRef.current;
            if (null == e) return;
            let t = (e) => {
                let t = e.target,
                    n = y.current?.elementRef.current;
                (null != n && (0, u.HG$)(n, t)) || (g(), N.current());
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
        (0, d.A)({ type: s.ImpressionTypes.MENU, name: A, properties: I });
    let R = (0, f.aL)(),
        O = i.useCallback(() => {
            R.dispatch(E.jej.POPOUT_SHOW);
        }, [R]),
        b = i.useCallback(() => {
            R.dispatch(E.jej.POPOUT_HIDE);
        }, [R]),
        D = (0, l.D)("ContextMenu"),
        L = c.ownerDocument;
    return D
        ? (0, r.jsx)(a.Ow, {
              spacing: 0,
              open: !0,
              ownerDocument: L,
              onOpenChange: (e) => {
                  e ? O() : (b(), setTimeout(g, 0), N.current());
              },
              overrideTargetRect: p,
              placement: (0, a.Pv)(h ?? "right", m ?? "top"),
              blockPointerEvents: !T,
              crossAccessFlip: !1,
              autoUpdate: S,
              renderLayer: (e) => {
                  let { update: n } = e;
                  return t({ position: h }, n);
              },
              children: () => null,
          })
        : (0, r.jsx)(_.nE, {
              onMount: O,
              onUnmount: b,
              targetRef: v,
              overrideTargetRect: p,
              position: h ?? "right",
              align: m ?? "top",
              autoInvert: !0,
              ref: y,
              nudgeAlignIntoViewport: !0,
              clickTrap: !T,
              children: t,
          });
};
class I extends i.PureComponent {
    state = { render: void 0 };
    componentDidMount() {
        let { renderLazy: e, renderWindow: t } = this.props;
        if (
            (t.addEventListener("resize", this.closeResize, !0),
            m._.subscribe(E.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu),
            null != e)
        ) {
            let t = setTimeout(() => {
                this.setState({ render: () => (0, r.jsx)(u.XSw, {}) });
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
            m._.unsubscribe(E.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu);
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
            ? (0, r.jsx)(A, {
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
function T() {
    let {
            contextMenu: e,
            version: t,
            isOpen: n,
        } = (0, o.cf)([h.A], () => ({ contextMenu: h.A.getContextMenu(), version: h.A.version, isOpen: h.A.isOpen() })),
        s = (0, o.bG)([p.A], () => p.A.theme),
        { appContext: a, renderWindow: l } = i.useContext(f.Ay);
    return (0, r.jsx)(I, { appContext: a, renderWindow: l, ...e, isOpen: n, theme: s, closeContextMenu: c.Z_ }, t);
}
