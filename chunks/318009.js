n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    s = n(562708),
    o = n(508382),
    l = n(17928),
    a = n(502939),
    c = n(623646),
    u = n(980707),
    d = n(442433),
    h = n(139286),
    f = n(750506),
    p = n(267102),
    m = n(363195),
    g = n(712687),
    A = n(625494),
    v = n(652215);
function y() {
    window.getSelection().removeAllRanges();
}
let x = (e) => {
    let {
            children: t,
            close: n,
            onUnmount: l,
            target: u,
            rect: d,
            position: m,
            align: g,
            impressionName: A,
            impressionProperties: x,
            disableClickTrap: w = !1,
            repositionOnContentChange: E = !1,
        } = e,
        C = i.useRef(null),
        N = i.useMemo(() => ({ current: u }), [u]),
        b = i.useRef(n);
    i.useEffect(() => {
        b.current = n;
    }),
        i.useEffect(() => {
            let e = C.current?.elementRef.current;
            if (null == e) return;
            let t = (e) => {
                let t = e.target,
                    n = C.current?.elementRef.current;
                (null != n && (0, c.H)(n, t)) || (y(), b.current());
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
    let O = i.useRef(l);
    i.useEffect(() => {
        O.current = l;
    }),
        i.useEffect(() => () => O.current?.(), []),
        i.useLayoutEffect(() => {
            C.current?.updatePosition();
        }),
        (0, h.A)({ type: s.ImpressionTypes.MENU, name: A, properties: x });
    let _ = (0, p.aL)(),
        D = i.useCallback(() => {
            _.dispatch(v.jej.POPOUT_SHOW);
        }, [_]),
        I = i.useCallback(() => {
            _.dispatch(v.jej.POPOUT_HIDE);
        }, [_]),
        T = (0, a.D)("ContextMenu"),
        j = u.ownerDocument;
    return T
        ? (0, r.jsx)(o.Ow, {
              focus: "modal",
              returnFocusElement: u,
              spacing: 0,
              open: !0,
              ownerDocument: j,
              onOpenChange: (e, t, n) => {
                  e ? D() : (I(), "outside-press" === n && setTimeout(y, 0), b.current());
              },
              overrideTargetRect: d,
              placement: (0, o.Pv)(m ?? "right", g ?? "top"),
              blockPointerEvents: !w,
              crossAccessFlip: !1,
              autoUpdate: E,
              renderLayer: (e) => {
                  let { update: n } = e;
                  return t({ position: m }, n);
              },
              children: () => null,
          })
        : (0, r.jsx)(f.nE, {
              onMount: D,
              onUnmount: I,
              targetRef: N,
              overrideTargetRect: d,
              position: m ?? "right",
              align: g ?? "top",
              autoInvert: !0,
              ref: C,
              nudgeAlignIntoViewport: !0,
              clickTrap: !w,
              children: t,
          });
};
class w extends i.PureComponent {
    state = { render: void 0 };
    componentDidMount() {
        let { renderLazy: e, renderWindow: t } = this.props;
        if (
            (t.addEventListener("resize", this.closeResize, !0),
            A._.subscribe(v.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu),
            null != e)
        ) {
            let t = setTimeout(() => {
                this.setState({ render: () => (0, r.jsx)(u.X, {}) });
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
            A._.unsubscribe(v.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu);
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
                theme: i,
                config: s,
                rect: o,
                renderWindow: l,
                renderLazy: a,
            } = this.props,
            c = this.state.render ?? this.props.render;
        return n &&
            null != o &&
            null != s &&
            null != t &&
            null != c &&
            s.context === e &&
            t.ownerDocument?.defaultView === l
            ? (0, r.jsx)(x, {
                  target: t,
                  rect: o,
                  close: this.close,
                  onUnmount: s.onClose,
                  align: s.align,
                  position: s.position,
                  impressionName: s.impressionName,
                  impressionProperties: s.impressionProperties,
                  disableClickTrap: s.disableClickTrap ?? !1,
                  repositionOnContentChange: null != a || !0 === s.repositionOnContentChange,
                  children: (n, r) => {
                      let { position: o } = n;
                      return c({ position: o, theme: i, onHeightUpdate: r, config: s, target: t, context: e });
                  },
              })
            : null;
    }
}
function E() {
    let {
            contextMenu: e,
            version: t,
            isOpen: n,
        } = (0, l.cf)([g.A], () => ({ contextMenu: g.A.getContextMenu(), version: g.A.version, isOpen: g.A.isOpen() })),
        s = (0, l.bG)([m.A], () => m.A.theme),
        { appContext: o, renderWindow: a } = i.useContext(p.Ay);
    return (0, r.jsx)(w, { appContext: o, renderWindow: a, ...e, isOpen: n, theme: s, closeContextMenu: d.Z_ }, t);
}
