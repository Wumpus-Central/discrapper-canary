n.d(t, { A: () => y });
var r = n(477900),
    i = n(582128),
    s = n(562708),
    l = n(508382),
    o = n(17928),
    a = n(980707),
    c = n(442433),
    d = n(139286),
    u = n(267102),
    h = n(363195),
    f = n(712687),
    g = n(625494),
    p = n(652215);
function m() {
    window.getSelection().removeAllRanges();
}
function A(e) {
    let {
            children: t,
            close: n,
            onUnmount: o,
            target: a,
            rect: c,
            position: h,
            align: f,
            impressionName: g,
            impressionProperties: A,
            disableClickTrap: v = !1,
            repositionOnContentChange: y = !1,
        } = e,
        x = i.useRef(n);
    i.useEffect(() => {
        x.current = n;
    });
    let w = i.useRef(o);
    i.useEffect(() => {
        w.current = o;
    }),
        i.useEffect(() => () => w.current?.(), []),
        (0, d.A)({ type: s.ImpressionTypes.MENU, name: g, properties: A });
    let E = (0, u.aL)(),
        C = i.useCallback(() => {
            E.dispatch(p.jej.POPOUT_SHOW);
        }, [E]),
        b = i.useCallback(() => {
            E.dispatch(p.jej.POPOUT_HIDE);
        }, [E]),
        N = a.ownerDocument;
    return (0, r.jsx)(l.Ow, {
        focus: "modal",
        returnFocusElement: a,
        spacing: 0,
        open: !0,
        ownerDocument: N,
        onOpenChange: (e, t, n) => {
            e ? C() : (b(), "outside-press" === n && setTimeout(m, 0), x.current());
        },
        overrideTargetRect: c,
        placement: (0, l.Pv)(h ?? "right", f ?? "top"),
        blockPointerEvents: !v,
        crossAccessFlip: !1,
        autoUpdate: y,
        renderLayer: (e) => {
            let { update: n } = e;
            return t({ position: h }, n);
        },
        children: () => null,
    });
}
class v extends i.PureComponent {
    state = { render: void 0 };
    componentDidMount() {
        let { renderLazy: e, renderWindow: t } = this.props;
        if (
            (t.addEventListener("resize", this.closeResize, !0),
            g._.subscribe(p.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu),
            null != e)
        ) {
            let t = setTimeout(() => {
                this.setState({ render: () => (0, r.jsx)(a.X, {}) });
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
        let {
                appContext: e,
                target: t,
                isOpen: n,
                theme: i,
                config: s,
                rect: l,
                renderWindow: o,
                renderLazy: a,
            } = this.props,
            c = this.state.render ?? this.props.render;
        return n &&
            null != l &&
            null != s &&
            null != t &&
            null != c &&
            s.context === e &&
            t.ownerDocument?.defaultView === o
            ? (0, r.jsx)(A, {
                  target: t,
                  rect: l,
                  close: this.close,
                  onUnmount: s.onClose,
                  align: s.align,
                  position: s.position,
                  impressionName: s.impressionName,
                  impressionProperties: s.impressionProperties,
                  disableClickTrap: s.disableClickTrap ?? !1,
                  repositionOnContentChange: null != a || !0 === s.repositionOnContentChange,
                  children: (n, r) => {
                      let { position: l } = n;
                      return c({ position: l, theme: i, onHeightUpdate: r, config: s, target: t, context: e });
                  },
              })
            : null;
    }
}
function y() {
    let {
            contextMenu: e,
            version: t,
            isOpen: n,
        } = (0, o.cf)([f.A], () => ({ contextMenu: f.A.getContextMenu(), version: f.A.version, isOpen: f.A.isOpen() })),
        s = (0, o.bG)([h.A], () => h.A.theme),
        { appContext: l, renderWindow: a } = i.useContext(u.Ay);
    return (0, r.jsx)(v, { appContext: l, renderWindow: a, ...e, isOpen: n, theme: s, closeContextMenu: c.Z_ }, t);
}
