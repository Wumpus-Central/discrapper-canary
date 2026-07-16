"use strict";
n.d(t, { A: () => S });
var i = n(627968),
    r = n(64700),
    a = n(562708),
    s = n(508382),
    l = n(17928),
    o = n(502939),
    d = n(623646),
    c = n(980707),
    u = n(442433),
    _ = n(139286),
    E = n(750506),
    A = n(267102),
    h = n(363195),
    I = n(712687),
    f = n(625494),
    p = n(652215);
function T() {
    window.getSelection().removeAllRanges();
}
let m = (e) => {
    let {
            children: t,
            close: n,
            onUnmount: l,
            target: c,
            rect: u,
            position: h,
            align: I,
            impressionName: f,
            impressionProperties: m,
            disableClickTrap: g = !1,
            repositionOnContentChange: S = !1,
        } = e,
        N = r.useRef(null),
        C = r.useMemo(() => ({ current: c }), [c]),
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
                (null != n && (0, d.H)(n, t)) || (T(), R.current());
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
    let O = r.useRef(l);
    r.useEffect(() => {
        O.current = l;
    }),
        r.useEffect(() => () => O.current?.(), []),
        r.useLayoutEffect(() => {
            N.current?.updatePosition();
        }),
        (0, _.A)({ type: a.ImpressionTypes.MENU, name: f, properties: m });
    let L = (0, A.aL)(),
        y = r.useCallback(() => {
            L.dispatch(p.jej.POPOUT_SHOW);
        }, [L]),
        D = r.useCallback(() => {
            L.dispatch(p.jej.POPOUT_HIDE);
        }, [L]),
        v = (0, o.D)("ContextMenu"),
        b = c.ownerDocument;
    return v
        ? (0, i.jsx)(s.Ow, {
              focus: "modal",
              returnFocusElement: c,
              spacing: 0,
              open: !0,
              ownerDocument: b,
              onOpenChange: (e, t, n) => {
                  e ? y() : (D(), "outside-press" === n && setTimeout(T, 0), R.current());
              },
              overrideTargetRect: u,
              placement: (0, s.Pv)(h ?? "right", I ?? "top"),
              blockPointerEvents: !g,
              crossAccessFlip: !1,
              autoUpdate: S,
              renderLayer: (e) => {
                  let { update: n } = e;
                  return t({ position: h }, n);
              },
              children: () => null,
          })
        : (0, i.jsx)(E.nE, {
              onMount: y,
              onUnmount: D,
              targetRef: C,
              overrideTargetRect: u,
              position: h ?? "right",
              align: I ?? "top",
              autoInvert: !0,
              ref: N,
              nudgeAlignIntoViewport: !0,
              clickTrap: !g,
              children: t,
          });
};
class g extends r.PureComponent {
    state = { render: void 0 };
    componentDidMount() {
        let { renderLazy: e, renderWindow: t } = this.props;
        if (
            (t.addEventListener("resize", this.closeResize, !0),
            f._.subscribe(p.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu),
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
            f._.unsubscribe(p.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu);
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
                config: a,
                rect: s,
                renderWindow: l,
                renderLazy: o,
            } = this.props,
            d = this.state.render ?? this.props.render;
        return n &&
            null != s &&
            null != a &&
            null != t &&
            null != d &&
            a.context === e &&
            t.ownerDocument?.defaultView === l
            ? (0, i.jsx)(m, {
                  target: t,
                  rect: s,
                  close: this.close,
                  onUnmount: a.onClose,
                  align: a.align,
                  position: a.position,
                  impressionName: a.impressionName,
                  impressionProperties: a.impressionProperties,
                  disableClickTrap: a.disableClickTrap ?? !1,
                  repositionOnContentChange: null != o || !0 === a.repositionOnContentChange,
                  children: (n, i) => {
                      let { position: s } = n;
                      return d({ position: s, theme: r, onHeightUpdate: i, config: a, target: t, context: e });
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
        } = (0, l.cf)([I.A], () => ({ contextMenu: I.A.getContextMenu(), version: I.A.version, isOpen: I.A.isOpen() })),
        a = (0, l.bG)([h.A], () => h.A.theme),
        { appContext: s, renderWindow: o } = r.useContext(A.Ay);
    return (0, i.jsx)(g, { appContext: s, renderWindow: o, ...e, isOpen: n, theme: a, closeContextMenu: u.Z_ }, t);
}
