n.d(t, { A: () => v });
var r = n(477900),
    i = n(582128),
    s = n(562708),
    o = n(508382),
    l = n(17928),
    a = n(980707),
    c = n(442433),
    d = n(139286),
    u = n(267102),
    h = n(363195),
    f = n(712687),
    p = n(625494),
    g = n(652215);
function m() {
    window.getSelection().removeAllRanges();
}
function A(e) {
    let {
            children: t,
            close: n,
            onUnmount: l,
            target: a,
            rect: c,
            position: h,
            align: f,
            impressionName: p,
            impressionProperties: A,
            disableClickTrap: y = !1,
            repositionOnContentChange: v = !1,
        } = e,
        x = i.useRef(n);
    i.useEffect(() => {
        x.current = n;
    });
    let w = i.useRef(l);
    i.useEffect(() => {
        w.current = l;
    }),
        i.useEffect(() => () => w.current?.(), []),
        (0, d.A)({ type: s.ImpressionTypes.MENU, name: p, properties: A });
    let E = (0, u.aL)(),
        C = i.useCallback(() => {
            E.dispatch(g.jej.POPOUT_SHOW);
        }, [E]),
        N = i.useCallback(() => {
            E.dispatch(g.jej.POPOUT_HIDE);
        }, [E]),
        b = a.ownerDocument;
    return (0, r.jsx)(o.Ow, {
        focus: "modal",
        returnFocusElement: a,
        spacing: 0,
        open: !0,
        ownerDocument: b,
        onOpenChange: (e, t, n) => {
            e ? C() : (N(), "outside-press" === n && setTimeout(m, 0), x.current());
        },
        overrideTargetRect: c,
        placement: (0, o.Pv)(h ?? "right", f ?? "top"),
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
            p._.subscribe(g.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu),
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
            p._.unsubscribe(g.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu);
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
            ? (0, r.jsx)(A, {
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
function v() {
    let {
            contextMenu: e,
            version: t,
            isOpen: n,
        } = (0, l.cf)([f.A], () => ({ contextMenu: f.A.getContextMenu(), version: f.A.version, isOpen: f.A.isOpen() })),
        s = (0, l.bG)([h.A], () => h.A.theme),
        { appContext: o, renderWindow: a } = i.useContext(u.Ay);
    return (0, r.jsx)(y, { appContext: o, renderWindow: a, ...e, isOpen: n, theme: s, closeContextMenu: c.Z_ }, t);
}
