"use strict";
n.d(t, { A: () => T });
var r = n(627968),
    i = n(64700),
    a = n(110259),
    s = n(508382),
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
    g = n(652215);
function E() {
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
        } = e,
        y = i.useRef(null),
        S = i.useMemo(() => ({ current: c }), [c]),
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
                (null != n && (0, u.HG$)(n, t)) || (E(), v.current());
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
        (0, d.A)({ type: a.ImpressionTypes.MENU, name: A, properties: I });
    let b = (0, f.aL)(),
        N = i.useCallback(() => {
            b.dispatch(g.jej.POPOUT_SHOW);
        }, [b]),
        R = i.useCallback(() => {
            b.dispatch(g.jej.POPOUT_HIDE);
        }, [b]),
        O = (0, l.D)("ContextMenu"),
        D = c.ownerDocument;
    return O
        ? (0, r.jsx)(s.Ow, {
              spacing: 0,
              open: !0,
              ownerDocument: D,
              onOpenChange: (e) => {
                  e ? N() : (R(), E(), v.current());
              },
              overrideTargetRect: p,
              placement: (0, s.Pv)(h ?? "right", m ?? "top"),
              blockPointerEvents: !T,
              crossAccessFlip: !1,
              renderLayer: (e) => {
                  let { update: n } = e;
                  return t({ position: h }, n);
              },
              children: () => null,
          })
        : (0, r.jsx)(_.nE, {
              onMount: N,
              onUnmount: R,
              targetRef: S,
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
            m._.subscribe(g.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu),
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
        let { appContext: e, target: t, isOpen: n, theme: i, config: a, rect: s, renderWindow: o } = this.props,
            l = this.state.render ?? this.props.render;
        return n &&
            null != s &&
            null != a &&
            null != t &&
            null != l &&
            a.context === e &&
            t.ownerDocument?.defaultView === o
            ? (0, r.jsx)(A, {
                  target: t,
                  rect: s,
                  close: this.close,
                  onUnmount: a.onClose,
                  align: a.align,
                  position: a.position,
                  impressionName: a.impressionName,
                  impressionProperties: a.impressionProperties,
                  disableClickTrap: a.disableClickTrap ?? !1,
                  children: (n, r) => {
                      let { position: s } = n;
                      return l({ position: s, theme: i, onHeightUpdate: r, config: a, target: t, context: e });
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
        a = (0, o.bG)([p.A], () => p.A.theme),
        { appContext: s, renderWindow: l } = i.useContext(f.Ay);
    return (0, r.jsx)(I, { appContext: s, renderWindow: l, ...e, isOpen: n, theme: a, closeContextMenu: c.Z_ }, t);
}
