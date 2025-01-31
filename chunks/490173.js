n.d(t, { Z: () => y }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(990547),
    s = n(442837),
    o = n(481060),
    l = n(239091),
    u = n(40851),
    c = n(213609),
    d = n(314910),
    f = n(210887),
    _ = n(574254),
    p = n(585483),
    h = n(981631);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g() {
    window.getSelection().removeAllRanges();
}
let E = (e) => {
    let { children: t, close: n, onUnmount: s, target: l, rect: f, position: _, align: p, impressionName: m, impressionProperties: E, disableClickTrap: v = !1 } = e,
        y = r.useRef(null),
        I = r.useMemo(() => ({ current: l }), [l]),
        b = r.useRef(n);
    r.useEffect(() => {
        b.current = n;
    }),
        r.useEffect(() => {
            var e, t, n;
            let i = null === (e = y.current) || void 0 === e ? void 0 : e.elementRef.current;
            if (null == i) return;
            let r = (e) => {
                var t;
                let n = e.target,
                    i = null === (t = y.current) || void 0 === t ? void 0 : t.elementRef.current;
                !(null != i && (0, o.ty$)(i, n)) && (g(), b.current());
            };
            return (
                null === (t = i.ownerDocument) || void 0 === t || t.addEventListener('click', r, !0),
                null === (n = i.ownerDocument) || void 0 === n || n.addEventListener('contextmenu', r, !0),
                () => {
                    var e, t;
                    null === (e = i.ownerDocument) || void 0 === e || e.removeEventListener('click', r, !0), null === (t = i.ownerDocument) || void 0 === t || t.removeEventListener('contextmenu', r, !0);
                }
            );
        }, []);
    let T = r.useRef(s);
    r.useEffect(() => void (T.current = s)),
        r.useEffect(
            () => () => {
                var e;
                return null === (e = T.current) || void 0 === e ? void 0 : e.call(T);
            },
            []
        ),
        r.useLayoutEffect(() => {
            var e;
            null === (e = y.current) || void 0 === e || e.updatePosition();
        }),
        (0, c.Z)({
            type: a.ImpressionTypes.MENU,
            name: m,
            properties: E
        });
    let S = (0, u.Aq)(),
        A = r.useCallback(() => {
            S.dispatch(h.CkL.POPOUT_SHOW);
        }, [S]),
        N = r.useCallback(() => {
            S.dispatch(h.CkL.POPOUT_HIDE);
        }, [S]);
    return (0, i.jsx)(d.W5, {
        onMount: A,
        onUnmount: N,
        targetRef: I,
        overrideTargetRect: f,
        position: null != _ ? _ : 'right',
        align: null != p ? p : 'top',
        autoInvert: !0,
        ref: y,
        nudgeAlignIntoViewport: !0,
        clickTrap: !v,
        children: t
    });
};
class v extends r.PureComponent {
    componentDidMount() {
        let { renderLazy: e, renderWindow: t } = this.props;
        if ((t.addEventListener('resize', this.closeResize, !0), p.S.subscribe(h.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu), null != e)) {
            let t = setTimeout(() => {
                this.setState({ render: () => (0, i.jsx)(o.TlX, {}) });
            }, 300);
            e().then((e) => {
                this.setState({ render: e }), clearTimeout(t);
            });
        }
    }
    componentDidUpdate(e) {
        let { isOpen: t } = this.props;
        if (!t && e.isOpen) {
            var n, i;
            null === (i = e.config) || void 0 === i || null === (n = i.onClose) || void 0 === n || n.call(i);
        }
    }
    componentWillUnmount() {
        let { renderWindow: e } = this.props;
        e.removeEventListener('resize', this.closeResize, !0), p.S.unsubscribe(h.CkL.CONTEXT_MENU_CLOSE, this.props.closeContextMenu);
    }
    render() {
        var e, t;
        let { appContext: n, target: r, isOpen: a, theme: s, config: o, rect: l } = this.props,
            u = null !== (e = this.state.render) && void 0 !== e ? e : this.props.render;
        return a && null != l && null != o && null != r && null != u && o.context === n
            ? (0, i.jsx)(E, {
                  target: r,
                  rect: l,
                  close: this.close,
                  onUnmount: o.onClose,
                  align: o.align,
                  position: o.position,
                  impressionName: o.impressionName,
                  impressionProperties: o.impressionProperties,
                  disableClickTrap: null !== (t = o.disableClickTrap) && void 0 !== t && t,
                  children: (e, t) => {
                      let { position: i } = e;
                      return u({
                          position: i,
                          theme: s,
                          onHeightUpdate: t,
                          config: o,
                          target: r,
                          context: n
                      });
                  }
              })
            : null;
    }
    constructor(...e) {
        super(...e),
            m(this, 'state', { render: void 0 }),
            m(this, 'closeResize', (e) => {
                let { renderWindow: t } = this.props;
                e.target === t && this.close();
            }),
            m(this, 'close', () => {
                let { isOpen: e, closeContextMenu: t } = this.props;
                e && t();
            });
    }
}
function y() {
    let {
            contextMenu: e,
            version: t,
            isOpen: n
        } = (0, s.cj)([_.Z], () => ({
            contextMenu: _.Z.getContextMenu(),
            version: _.Z.version,
            isOpen: _.Z.isOpen()
        })),
        a = (0, s.e7)([f.Z], () => f.Z.theme),
        { appContext: o, renderWindow: c } = r.useContext(u.ZP);
    return (0, i.jsx)(
        v,
        {
            appContext: o,
            renderWindow: c,
            ...e,
            isOpen: n,
            theme: a,
            closeContextMenu: l.Zy
        },
        t
    );
}
