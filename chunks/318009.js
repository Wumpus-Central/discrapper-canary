"use strict";
n.d(t, { A: () => T });
var i = n(477900),
    r = n(582128),
    a = n(562708),
    s = n(508382),
    l = n(17928),
    o = n(980707),
    d = n(442433),
    c = n(139286),
    u = n(267102),
    _ = n(363195),
    E = n(712687),
    A = n(625494),
    h = n(652215);
function I() {
    window.getSelection().removeAllRanges();
}
function f(e) {
    let {
            children: t,
            close: n,
            onUnmount: l,
            target: o,
            rect: d,
            position: _,
            align: E,
            impressionName: A,
            impressionProperties: f,
            disableClickTrap: p = !1,
            repositionOnContentChange: T = !1,
        } = e,
        m = r.useRef(n);
    r.useEffect(() => {
        m.current = n;
    });
    let g = r.useRef(l);
    r.useEffect(() => {
        g.current = l;
    }),
        r.useEffect(() => () => g.current?.(), []),
        (0, c.A)({ type: a.ImpressionTypes.MENU, name: A, properties: f });
    let S = (0, u.aL)(),
        N = r.useCallback(() => {
            S.dispatch(h.jej.POPOUT_SHOW);
        }, [S]),
        C = r.useCallback(() => {
            S.dispatch(h.jej.POPOUT_HIDE);
        }, [S]),
        O = o.ownerDocument;
    return (0, i.jsx)(s.Ow, {
        focus: "modal",
        returnFocusElement: o,
        spacing: 0,
        open: !0,
        ownerDocument: O,
        onOpenChange: (e, t, n) => {
            e ? N() : (C(), "outside-press" === n && setTimeout(I, 0), m.current());
        },
        overrideTargetRect: d,
        placement: (0, s.Pv)(_ ?? "right", E ?? "top"),
        blockPointerEvents: !p,
        crossAccessFlip: !1,
        autoUpdate: T,
        renderLayer: (e) => {
            let { update: n } = e;
            return t({ position: _ }, n);
        },
        children: () => null,
    });
}
class p extends r.PureComponent {
    state = { render: void 0 };
    componentDidMount() {
        let { renderLazy: e, renderWindow: t } = this.props;
        if (
            (t.addEventListener("resize", this.closeResize, !0),
            A._.subscribe(h.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu),
            null != e)
        ) {
            let t = setTimeout(() => {
                this.setState({ render: () => (0, i.jsx)(o.X, {}) });
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
            A._.unsubscribe(h.jej.CONTEXT_MENU_CLOSE, this.props.closeContextMenu);
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
            ? (0, i.jsx)(f, {
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
function T() {
    let {
            contextMenu: e,
            version: t,
            isOpen: n,
        } = (0, l.cf)([E.A], () => ({ contextMenu: E.A.getContextMenu(), version: E.A.version, isOpen: E.A.isOpen() })),
        a = (0, l.bG)([_.A], () => _.A.theme),
        { appContext: s, renderWindow: o } = r.useContext(u.Ay);
    return (0, i.jsx)(p, { appContext: s, renderWindow: o, ...e, isOpen: n, theme: a, closeContextMenu: d.Z_ }, t);
}
