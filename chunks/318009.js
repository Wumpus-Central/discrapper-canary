n.d(t, { A: () => v });
var r = n(477900),
    i = n(582128),
    l = n(562708),
    s = n(508382),
    o = n(17928),
    a = n(980707),
    u = n(442433),
    d = n(139286),
    c = n(267102),
    h = n(363195),
    f = n(712687),
    g = n(625494),
    m = n(652215);
function p() {
    window.getSelection()?.removeAllRanges();
}
function A(e) {
    let {
            children: t,
            close: n,
            onUnmount: o,
            target: a,
            rect: u,
            position: h,
            align: f,
            impressionName: g,
            impressionProperties: A,
            disableClickTrap: y = !1,
            repositionOnContentChange: v = !1,
        } = e,
        x = i.useRef(n);
    i.useEffect(() => {
        x.current = n;
    });
    let w = i.useRef(o);
    (i.useEffect(() => {
        w.current = o;
    }),
        i.useEffect(() => () => w.current?.(), []),
        (0, d.A)({ type: l.ImpressionTypes.MENU, name: g, properties: A }));
    let E = (0, c.aL)(),
        C = i.useCallback(() => {
            E.dispatch(m.jej.POPOUT_SHOW);
        }, [E]),
        b = i.useCallback(() => {
            E.dispatch(m.jej.POPOUT_HIDE);
        }, [E]),
        N = a.ownerDocument;
    return (0, r.jsx)(s.Ow, {
        focus: "modal",
        returnFocusElement: a,
        spacing: 0,
        open: !0,
        ownerDocument: N,
        onOpenChange: (e, t, n) => {
            e ? C() : (b(), "outside-press" === n && setTimeout(p, 0), x.current());
        },
        overrideTargetRect: u,
        placement: (0, s.Pv)(h ?? "right", f ?? "top"),
        blockPointerEvents: !y,
        crossAccessFlip: !1,
        autoUpdate: v,
        renderLayer: (e) => {
            let { update: n } = e;
            return t({ position: h }, n);
        },
        children: () => null,
    });
}
class y extends i.PureComponent {
    state = { render: void 0 };
    componentDidMount() {
        let { renderLazy: e, renderWindow: t } = this.props;
        if (
            (t.addEventListener("resize", this.closeResize, !0),
            g._.subscribe(m.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu),
            null != e)
        ) {
            let t = setTimeout(() => {
                this.setState({ render: () => (0, r.jsx)(a.X, {}) });
            }, 300);
            e().then((e) => {
                (this.setState({ render: e }), clearTimeout(t));
            });
        }
    }
    componentDidUpdate(e) {
        let { isOpen: t } = this.props;
        !t && e.isOpen && e.config?.onClose?.();
    }
    componentWillUnmount() {
        let { renderWindow: e } = this.props;
        (e.removeEventListener("resize", this.closeResize, !0),
            g._.unsubscribe(m.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu));
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
                config: l,
                rect: s,
                renderWindow: o,
                renderLazy: a,
            } = this.props,
            u = this.state.render ?? this.props.render;
        return n &&
            null != s &&
            null != l &&
            null != t &&
            null != u &&
            l.context === e &&
            t.ownerDocument?.defaultView === o
            ? (0, r.jsx)(A, {
                  target: t,
                  rect: s,
                  close: this.close,
                  onUnmount: l.onClose,
                  align: l.align,
                  position: l.position,
                  impressionName: l.impressionName,
                  impressionProperties: l.impressionProperties,
                  disableClickTrap: l.disableClickTrap ?? !1,
                  repositionOnContentChange: null != a || !0 === l.repositionOnContentChange,
                  children: (n, r) => {
                      let { position: s } = n;
                      return u({ position: s, theme: i, onHeightUpdate: r, config: l, target: t, context: e });
                  },
              })
            : null;
    }
}
function v() {
    let {
            contextMenu: e,
            version: t,
            isOpen: n,
        } = (0, o.cf)([f.A], () => ({ contextMenu: f.A.getContextMenu(), version: f.A.version, isOpen: f.A.isOpen() })),
        l = (0, o.bG)([h.A], () => h.A.theme),
        { appContext: s, renderWindow: a } = i.useContext(c.Ay);
    return (0, r.jsx)(y, { appContext: s, renderWindow: a, ...e, isOpen: n, theme: l, closeContextMenu: u.Z_ }, t);
}
