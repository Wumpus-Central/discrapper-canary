"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    r = n(64700),
    s = n(562708),
    a = n(508382),
    o = n(17928),
    l = n(502939),
    u = n(623646),
    c = n(980707),
    d = n(442433),
    _ = n(139286),
    f = n(750506),
    h = n(267102),
    p = n(363195),
    E = n(712687),
    m = n(625494),
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
            position: p,
            align: E,
            impressionName: m,
            impressionProperties: I,
            disableClickTrap: T = !1,
            repositionOnContentChange: S = !1,
        } = e,
        N = r.useRef(null),
        y = r.useMemo(() => ({ current: c }), [c]),
        C = r.useRef(n);
    r.useEffect(() => {
        C.current = n;
    }),
        r.useEffect(() => {
            let e = N.current?.elementRef.current;
            if (null == e) return;
            let t = (e) => {
                let t = e.target,
                    n = N.current?.elementRef.current;
                (null != n && (0, u.H)(n, t)) || (A(), C.current());
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
    let v = r.useRef(o);
    r.useEffect(() => {
        v.current = o;
    }),
        r.useEffect(() => () => v.current?.(), []),
        r.useLayoutEffect(() => {
            N.current?.updatePosition();
        }),
        (0, _.A)({ type: s.ImpressionTypes.MENU, name: m, properties: I });
    let O = (0, h.aL)(),
        R = r.useCallback(() => {
            O.dispatch(g.jej.POPOUT_SHOW);
        }, [O]),
        b = r.useCallback(() => {
            O.dispatch(g.jej.POPOUT_HIDE);
        }, [O]),
        D = (0, l.D)("ContextMenu"),
        L = c.ownerDocument;
    return D
        ? (0, i.jsx)(a.Ow, {
              focus: "modal",
              returnFocusElement: c,
              spacing: 0,
              open: !0,
              ownerDocument: L,
              onOpenChange: (e, t, n) => {
                  e ? R() : (b(), "outside-press" === n && setTimeout(A, 0), C.current());
              },
              overrideTargetRect: d,
              placement: (0, a.Pv)(p ?? "right", E ?? "top"),
              blockPointerEvents: !T,
              crossAccessFlip: !1,
              autoUpdate: S,
              renderLayer: (e) => {
                  let { update: n } = e;
                  return t({ position: p }, n);
              },
              children: () => null,
          })
        : (0, i.jsx)(f.nE, {
              onMount: R,
              onUnmount: b,
              targetRef: y,
              overrideTargetRect: d,
              position: p ?? "right",
              align: E ?? "top",
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
            m._.subscribe(g.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu),
            null != e)
        ) {
            let t = setTimeout(() => {
                this.setState({ render: () => (0, i.jsx)(c.X, {}) });
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
        let {
                appContext: e,
                target: t,
                isOpen: n,
                theme: r,
                config: s,
                rect: a,
                renderWindow: o,
                renderLazy: l,
            } = this.props,
            u = this.state.render ?? this.props.render;
        return n &&
            null != a &&
            null != s &&
            null != t &&
            null != u &&
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
                  repositionOnContentChange: null != l || !0 === s.repositionOnContentChange,
                  children: (n, i) => {
                      let { position: a } = n;
                      return u({ position: a, theme: r, onHeightUpdate: i, config: s, target: t, context: e });
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
        s = (0, o.bG)([p.A], () => p.A.theme),
        { appContext: a, renderWindow: l } = r.useContext(h.Ay);
    return (0, i.jsx)(T, { appContext: a, renderWindow: l, ...e, isOpen: n, theme: s, closeContextMenu: d.Z_ }, t);
}
